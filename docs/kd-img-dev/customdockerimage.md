---
id: customdockerimage 
title: Custom Docker Images
---

---

This page is a work-in-progress!

---

In this section, we will modify the docker image for the Ubuntu 18.04 application image.

## Modify Docker Image

In this section, we modify the Ubuntu 18.04 application image `defaultImageRepoTag` so that we can provide a custom image. 

Currently this is `"defaultImageRepoTag": "bluedata/ubuntu18.04:1.1"`

Create a new folder under `./deploy/example ...`

Create a Dockerfile:

```
FROM bluedata/ubuntu18.04:1.1

RUN touch /modified_by_yourname
```

Change `yourname` to your name without spaces or special characters

```
docker run -d -p 5000:5000 --restart=always --name registry registry:2

docker build --tag myubuntu:1.0 .

docker tag myubuntu:1.0 localhost:5000/myubuntu:1.0

docker push localhost:5000/myubuntu:1.0

kubectl delete -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml

kubectl delete -f ../cr-app-ubuntu18.04.json

kubectl apply -f ../cr-app-ubuntu18.04.json

kubectl get kubedirectorapps.kubedirector.hpe.com
NAME                     AGE
cassandra311             18h
cdh5142cm                18h
cdh632                   18h
centos7x                 18h
centos8x                 18h
confluentkafka55         18h
deployment-engine        18h
elkstack771              18h
gitlab                   18h
jupyter-notebook         18h
mapr610-secure           18h
spark221e2               18h
spark245                 18h
tensorflow-cpu-jupyter   18h
tensorflow-gpu-jupyter   18h
training-engine          18h
ubuntu18x                47s

kubectl apply -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml

$ kubectl exec -it kdss-w6jj7-0 -- /bin/bash
root@kdss-w6jj7-0:/# ls /
bin  boot  dev  etc  home  lib  lib64  media  mnt  modified  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```


## Reference information

You can find the complete `KubeDirectorApp` definition [here](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition) and the `KubeDirectorApp.spec` definition [here](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#kubedirectorappspec).

