---
id: configpackage 
title: Config Package
---

A config package allows the application author to write logic that gets executed by KubeDirector for certain lifecycle events.

The supported lifecycle events are currently:

 - configure
 - addnodes
 - delnodes

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

 - At launch time all pods get `startscript --configure` event
 - During expansion:
   - existing pods get `startscript --addnodes`
   - new pods get `startscript --configure`
 - For shrinking, all nodes get `startscript --delnodes`
 
## Create a basic config package

In this section we modify the centos application to log the action inside the container.

:::info previously based on ubuntu
This section initially was based on the ubuntu image, but it appears that image
doesn't support appconfig at the moment.
See [here](https://github.com/bluek8s/kubedirector/issues/417) for more info.
:::

In a terminal, change into the `deploy/example_catalog` directory:

```
cd deploy/example_catalog
```

Create the directories `mycentos` and `mycentos/appconfig`:

```
mkdir -p mycentos/appconfig
```

Inside the `appconfig` directory, create a new file named `startscript` with the contents:

```bash
#!/bin/env bash
### Error for wrong option handled ###
if [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then
  echo "Valid values. So execute the later code"
else
  echo "ERROR: Unknown command line option(s): '$@'"
  exit 10
fi

echo "Starting configuration with option '$1' on node"
```

In the directory `/deploy/example_catalog/mycentos`, create a tar file with the appconfig:

```bash
chmod +x appconfig/startscript
tar cvzf appconfig.tgz appconfig/
```

Create or update the Dockerfile in the `mycentos` directory so that it now contains:

```Dockerfile
FROM bluedata/centos7:4.1

RUN ! test -d /opt/configscripts || mkdir /opt/configscripts/

COPY appconfig.tgz /opt/configscripts/
```

## Run a local registry

Check local docker registry is running:

```bash
docker ps -f name=registry:2
```

If it is not running, start it with:

```bash
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

## Build and Push image

In the terminal, change to the `mycentos` folder and build your custom image and push it to the local registry:

```bash
docker build --tag mycentos:1.0 .

docker tag mycentos:1.0 localhost:5000/mycentos:1.0
```

Next we push the image to our local registry:

```bash
docker push localhost:5000/mycentos:1.0
```

## Update the KD app image

Ensure `defaultConfigPackage` in the file `deploy/example_catalog/cr-app-centos7.json` is set to:

```json
{
    ...
    "defaultConfigPackage":  {
        "packageURL": "file:///opt/configscripts/appconfig.tgz"
    },
    ...
}
```

and `defaultImageRepoTag` is:

```json
{
    ...
    "defaultImageRepoTag": "localhost:5000/mycentos:1.0"
    ...
}
```

## Deploy the KD app image

First ensure you aren't still running an Ubuntu KD clusters from the previous tutorial.

```bash
kubectl delete kubedirectorclusters.kubedirector.hpe.com ubuntu18.04-persistent
```

Next undeploy the existing Centos 7 KD application image definition:

```bash
kubectl delete kubedirectorapps.kubedirector.hpe.com centos7x
```

Deploy the new Centos KD application with your changes:

```bash
kubectl apply -f cr-app-centos7.json
```

Check the deployment was successful:

```bash
kubectl get kubedirectorapps.kubedirector.hpe.com
```

You can see my image has only just been deployed:

```bash
NAME                     AGE
...
tensorflow-gpu-jupyter   18h
training-engine          18h
centos7x                 5s
```

## Deploy the KD Cluster

First modify `../../example_clusters/cr-cluster-centos7.yaml` - set memory attributes to `1Gi`.

Next we can deploy the KD Cluster:

```bash
kubectl apply -f ../../example_clusters/cr-cluster-centos7.yaml
```

```bash
kubectl describe kubedirectorclusters.kubedirector.hpe.com centos7
```

You may need to run the above command several times until the Cluster is `stable`:

```
Events:
  Type    Reason   Age                From          Message
  ----    ------   ----               ----          -------
  Normal  Cluster  31s                kubedirector  new
  Normal  Role     31s                kubedirector  creating role{vanilla_centos}
  Normal  Role     31s                kubedirector  changing replicas count for role{vanilla_centos}: 0 -> 1
  Normal  Role     31s (x3 over 31s)  kubedirector  waiting for replicas count for role{vanilla_centos}: 0 -> 1
  Normal  Member   1s                 kubedirector  initial config skipped for member{kdss-4p8kt-0} in role{vanilla_centos}
  Normal  Role     1s                 kubedirector  notify skipped for members in role{vanilla_centos}
  Normal  Cluster  1s                 kubedirector  stable
```

You should see a new pod:

```bash
$ kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
kdss-kzbwq-0                    1/1     Running   0          105s
kubedirector-7f9d95c9d5-wjm2j   1/1     Running   0          47h
```

```
$ kubectl exec -it kdss-kzbwq-0 -- /bin/bash
[root@kdss-kzbwq-0 /]# ls /opt/
configscripts
```

Wait a few seconds and try `ls /opt` again - keep trying until you see a `guestconfig` folder:

```
[root@kdss-kzbwq-0 /]# ls /opt/
configscripts  guestconfig
[root@kdss-kzbwq-0 /]# ls /opt/guestconfig/
appconfig/        configure.status  configure.stderr  configure.stdout
```

If we cat `configure.stdout` we should see the output from our startscript:

```
[root@kdss-kzbwq-0 /]# cat /opt/guestconfig/configure.stdout 
Valid values. So execute the later code
Starting configuration with option '--configure' on node
```

## Exercise

### Exercise 1

Add a node to the cluster by increasing `members` from `1` to `2` in the file `cr-cluster-centos7.yaml`.

Apply the changes with `kubectl apply -f ../../example_clusters/` and use `kubectl describe ...` to wait for the changes to finish.

What do you see in the `/opt/guestconfig/configure.stdout` for both pods?

### Exercise 2

The KD App Role [definition](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#role) has an attribute `eventList`.

Delete your KD cluster and modify the eventList in `deploy/example_catalog/cr-app-centos7.json` so that your application reacts only to `configure` and `delnodes`.

Delete and apply the KD application definition for the centos7 app and create a new centos cluster with one member and then increase to two members.  Observe the events that are reported in `/opt/guestconfig/configure.stdout`.

## Reference

 - Config Package [specification](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#configpackage)
 - Config Python CLI [source code](https://github.com/bluek8s/configcli)
 - Config Commands run by KD [source code for v0.5.2](https://github.com/bluek8s/kubedirector/blob/v0.5.2/pkg/controller/kubedirectorcluster/types.go#L74-L101)
