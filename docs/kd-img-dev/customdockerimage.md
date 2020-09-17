---
id: customdockerimage 
title: Custom Docker Images
---

In this section, we will modify the docker image for the Ubuntu 18.04 application image.

## Modify Docker Image

In this section, we modify the Ubuntu 18.04 application Docker image `defaultImageRepoTag` so that we can provide a custom Docker image. 

Currently `defaultImageRepoTag` is set to `bluedata/ubuntu18.04:1.1`

Change `defaultImageRepoTag` to `localhost:5000/myubuntu:1.0` (we will create this image in the steps below).

### Create Dockerfile

We will create a Dockerfile, so let's create a new folder for it inside `deploy/example_catalog/` called `myubuntu`:

import myImageUrl from '../../static/img/new_folder.png';

<img src={myImageUrl}/>

Now create a Dockerfile in the folder `myubuntu` with the contents:

```Dockerfile
FROM bluedata/ubuntu18.04:1.1

RUN touch /modified_by_yourname
```

Change `yourname` to your name without spaces or special characters.

### Run a local registry

To make development easier, we will deploy a local registry to push our custom image to:

```
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

### Push image

In the terminal, change to the `myubuntu` folder and build your custom image and push it to the local registry:

```bash
docker build --tag myubuntu:1.0 .

docker tag myubuntu:1.0 localhost:5000/myubuntu:1.0

docker push localhost:5000/myubuntu:1.0
```

### Deploy the KD app image

First ensure you aren't running any existing Ubuntu KD clusters:

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
ubuntu18x                47s
```

### Deploy the KD Cluster

Next we can deploy the KD Cluster:

```bash
kubectl apply -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml
```

We can then run `ls /` inside the cluster to see the file we created in our Docker image `modified_by_yourname`:

```bash
$ kubectl exec -it kdss-w6jj7-0 -- /bin/bash
root@kdss-w6jj7-0:/# ls /
bin  boot  dev  etc  home  lib  lib64  media  mnt  modified_by_yourname  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```


## Reference information

You can find the complete `KubeDirectorApp` definition [here](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition) and the `KubeDirectorApp.spec` definition [here](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#kubedirectorappspec).

