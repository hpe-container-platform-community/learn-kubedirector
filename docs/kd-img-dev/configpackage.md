---
id: configpackage 
title: Config Package
---

## Explore an existing config package

To learn about config package, let's explore an application that has `defaultConfigPackage` defined.

Open the file: `deploy/example_catalog/cr-app-kafka55.json` inside this file we see:

```json
{   ...
    "defaultImageRepoTag": "bluedata/bluedata/kafka:1.0",
    "defaultConfigPackage": {
      "packageURL": "file:///opt/configscripts/appconfig.tgz"
    }
    ...
}
```

So the `appconfig` is embedded in the image in `/opt/configscripts/`.  

Let's explore that.  We can see the image tag is `bluedata/kafka:1.0` - download it to your local environment:

```bash
docker pull bluedata/kafka:1.0 # This will take a while as it is several GB!!
```

Now start the container and login:

```bash
$ docker run --rm -it bluedata/kafka:1.0 /bin/bash
[root@a6658abcf6f3 /]# cd /root
[root@a6658abcf6f3 ~]# tar xvzf /opt/configscripts/appconfig.tgz
._appconfig
appconfig/
appconfig/utils.sh
appconfig/limits.conf
appconfig/start_services.py
appconfig/logging.sh
appconfig/nsswitch.conf
appconfig/._templates
appconfig/templates/
appconfig/startscript
appconfig/templates/._Kafka_Zookeeper
appconfig/templates/Kafka_Zookeeper/
...
```

The file `appconfig/startscript` looks interesting - let's take a closer look.  

The startscript begins with:

```bash
#!/bin/env bash
### Error for wrong option handled ###
if [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then
  echo "Valid values. So execute the later code"
else
  echo "ERROR: Unknown command line option(s): '$@'"
  exit 10
fi
...
```

`startscript` is a bash shell script.  When a bash shell script is executed command line arguments
are passed to the script are passed in the variables `$1`, `$2`, etc.

This script is executed by KubeDirector.  It is executed for events in a KubeDirector virtual cluster lifecycle, e.g.

 - `--configure` when an virtual cluster is initially created (TODO is this correct?)
 - `--addnodes` when an node is added to the virtual cluster
 - `--delnodes` when a node is removed from the virtual cluster
 
## Create a basic config package

In this section we modify the ubuntu application to log the action inside the container.

In the folder you created for the [previous lession](/docs/kd-img-dev/customdockerimage) - `/deploy/example_catalog/myubuntu` 
create another directory `appconfig` and inside that folder, create a new file named `startscript` with the contents:

```bash
#!/bin/env bash
### Error for wrong option handled ###
if [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then
  echo "Valid values. So execute the later code"
else
  echo "ERROR: Unknown command line option(s): '$@'"
  exit 10
fi

echo "$1" >> /root/startscript.log
```

Open a terminal and change into the folder `/deploy/example_catalog/myubuntu`.

Create a tar file with the appconfig:

```bash
tar cvzf appconfig.tgz appconfig/
```

Update the Dockerfile so that it now contains:

```Dockerfile
FROM bluedata/ubuntu18.04:1.1

RUN ! test -d /opt/configscripts || mkdir /opt/configscripts/

COPY appconfig.tgz /opt/configscripts/
```

### Run a local registry

Check local docker registry is running:

```bash
docker ps -f name=registry:2
```

If it is not running, start it with:

```bash
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

### Build and Push image

In the terminal, change to the `myubuntu` folder and build your custom image and push it to the local registry:

```bash
docker build --tag myubuntu:1.0 .

docker tag myubuntu:1.0 localhost:5000/myubuntu:1.0
```

Next we push the image to our local registry:

```bash
docker push localhost:5000/myubuntu:1.0
```

### Update the KD app image

Ensure `defaultConfigPackage` in the file `deploy/example_catalog/cr-app-ubuntu18.04.json` is set to:

```json
{
    ...
    "defaultConfigPackage":  {
        "packageURL": "file:///opt/configscripts/appconfig.tgz"
    },
    ...
}
```

### Deploy the KD app image

First ensure you aren't still running an Ubuntu KD clusters from the previous tutorial.

```bash
kubectl delete -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml
```

Next undeploy the existing Ubuntu KD application image definition:

```bash
kubectl delete -f ../cr-app-ubuntu18.04.json
```

Deploy the new Ubuntu KD application with your changes:

```bash
kubectl apply -f ../cr-app-ubuntu18.04.json
```

Check the deployement was successful:

```bash
kubectl get kubedirectorapps.kubedirector.hpe.com
```

You can see my image has only just been deployed:

```bash
NAME                     AGE
...
tensorflow-gpu-jupyter   18h
training-engine          18h
ubuntu18x                5s
```

### Deploy the KD Cluster

Next we can deploy the KD Cluster:

```bash
kubectl apply -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml
```

You should see a new pod:

``bash
$ kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
kdss-kzbwq-0                    1/1     Running   0          105s
kubedirector-7f9d95c9d5-wjm2j   1/1     Running   0          47h
```

We can then run `ls /` inside the cluster to see the file we created in our Docker image `modified_by_yourname`:

```bash
$ kubectl exec -it kdss-kzbwq-0 -- /bin/bash
root@kdss-w6jj7-0:/# ls /
bin  boot  dev  etc  home  lib  lib64  media  mnt  modified_by_yourname  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```


## Reference

More content coming soon ...

---

More content coming soon ...

Waiting for information here: https://github.com/bluek8s/kubedirector/issues/412