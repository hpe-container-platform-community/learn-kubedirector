---
id: customdockerimage2
title: Custom Docker Images 2
---

In this section, we will use a third party docker image: https://github.com/paulbouwer/hello-kubernetes

## Third Party Docker Image

Copy the KD catalog definition `deploy/example_catalog/cr-app-centos7.json` to  `deploy/example_catalog/cr-app-hello-world.json` and modify it so that it looks as follows:

```json
{
    "apiVersion": "kubedirector.hpe.com/v1beta1",
    "kind": "KubeDirectorApp",
    "metadata": {
        "name" : "hellok8s-paulbouwer"
    },

    "spec" : {
        "systemdRequired": true,
        "defaultEventList" : ["configure", "addnodes", "delnodes"],
        "config": {
            "roleServices": [
                {
                    "serviceIDs": [
                        "http"
                    ],
                    "roleID": "hello-kubernetes"
                }
            ],
            "selectedRoles": [
                "hello-kubernetes"
            ]
        },
        "label": {
            "name": "hello kubernetes",
            "description": "hello kubernetes services"
        },
        "distroID": "paulbouwer/hello-kubernetes:1.8",
        "version": "1.8",
        "configSchemaVersion": 7,
        "services": [
            {
                "endpoint": {
                    "port": 8080,
                    "isDashboard": false
                },
                "id": "http",
                "label": {
                    "name": "HTTP"
                }
            }
        ],
        "defaultImageRepoTag": "paulbouwer/hello-kubernetes:1.8",
        "defaultConfigPackage": null,
        "roles": [
            {
                "cardinality": "1+",
                "id": "hello-kubernetes"
            }
        ]
    }
}
```

Note: The hello world image runs a node service on port 8080 so we are exposing that.

## Apply application defintion

```console
kubectl apply -f deploy/example_catalog/cr-app-hello-world.json
```

## Create Cluster yaml

Copy the KD catalog definition `deploy/example_clusters/cr-cluster-centos7.yaml` to `deploy/example_clusters/cr-cluster-hello-world.yaml` and modify so that it contains the following:

```yaml
apiVersion: "kubedirector.hpe.com/v1beta1"
kind: "KubeDirectorCluster"
metadata:
  name: "hellok8s-paulbouwer"
spec:
  app: hellok8s-paulbouwer
  roles:
  - id: hello-kubernetes
    members: 1
    resources:
      requests:
        memory: "1Gi"
        cpu: "1"
      limits:
        memory: "1Gi"
        cpu: "1"
```

## Create a cluster

```console
kubectl apply -f deploy/example_clusters/cr-cluster-hello-world.yaml
```

## Crashloopback

If you wait for a few minutes, you will see your pod with status `CrashLoopBackOff`:

```console
kubectl get pods
```

Which for me shows:

```console
NAME                            READY   STATUS             RESTARTS   AGE
kdss-w97td-0                    0/1     CrashLoopBackOff   6          12m
```

Let's debug:

```console
kubectl describe pod kdss-w97td-0
```

For me this returns:

```console
Events:
  Type     Reason               Age                   From                            Message
  ----     ------               ----                  ----                            -------
  Normal   Scheduled            13m                   default-scheduler               Successfully assigned default/kdss-w97td-0 to localhost.localdomain
  Normal   Pulling              13m                   kubelet, localhost.localdomain  Pulling image "paulbouwer/hello-kubernetes:1.8"
  Normal   Pulled               13m                   kubelet, localhost.localdomain  Successfully pulled image "paulbouwer/hello-kubernetes:1.8"
  Warning  FailedPostStartHook  11m (x3 over 13m)     kubelet, localhost.localdomain  Exec lifecycle hook ([/bin/bash -c exec 2>>/tmp/kd-postcluster.log; set -x;Retries=60; while [[ $Retries && ! -s /etc/resolv.conf ]]; do sleep 1; Retries=$(expr $Retries - 1); done; sed "s/^search \([^ ]\+\)/search kdhs-mj4sm.\1 \1/" /etc/resolv.conf > /tmp/resolv.conf.new && cat /tmp/resolv.conf.new > /etc/resolv.conf;rm /tmp/resolv.conf.new;chmod 755 /run;exit 0]) for Container "app" in Pod "kdss-w97td-0_default(153573ba-1e94-4ded-a447-7377c8d49490)" failed - error: command '/bin/bash -c exec 2>>/tmp/kd-postcluster.log; set -x;Retries=60; while [[ $Retries && ! -s /etc/resolv.conf ]]; do sleep 1; Retries=$(expr $Retries - 1); done; sed "s/^search \([^ ]\+\)/search kdhs-mj4sm.\1 \1/" /etc/resolv.conf > /tmp/resolv.conf.new && cat /tmp/resolv.conf.new > /etc/resolv.conf;rm /tmp/resolv.conf.new;chmod 755 /run;exit 0' exited with 126: , message: "OCI runtime exec failed: exec failed: container_linux.go:349: starting container process caused \"exec: \\\"/bin/bash\\\": stat /bin/bash: no such file or directory\": unknown\r\n"
  Normal   Created              10m (x4 over 13m)     kubelet, localhost.localdomain  Created container app
  Normal   Started              10m (x4 over 13m)     kubelet, localhost.localdomain  Started container app
  Normal   Killing              10m (x4 over 13m)     kubelet, localhost.localdomain  FailedPostStartHook
  Normal   Pulled               10m (x3 over 12m)     kubelet, localhost.localdomain  Container image "paulbouwer/hello-kubernetes:1.8" already present on machine
  Warning  BackOff              2m58s (x37 over 12m)  kubelet, localhost.localdomain  Back-off restarting failed container
```

Observe the first warning event.  At the end of the message we see:

```console
stat /bin/bash: no such file or directory
```

If you inspect the KD application image output:

```console
kubectl describe kubedirectorclusters.kubedirector.hpe.com hellok8s-paulbouwer
```

You will notice the member is stuck in the `waiting` state:

```console
...
  Member State Rollup:
    Config Errors:         false
    Members Down:          false
    Members Initializing:  false
    Members Restarting:    false
    Members Waiting:       true
    Membership Changing:   false
...
```

## Custom image requirements

If the KubeDirector App Image Authoring [wiki page](https://github.com/bluek8s/kubedirector/wiki/App-Definition-Authoring-for-KubeDirector) we can find:

> Images must have the following utilities installed and available in the standard executables path for the container user: python2, curl, and tar.

It appears that app images also require `bash` - an [issue](https://github.com/bluek8s/kubedirector/issues/430) has been raised for this.

## Update custom app image

The solution for me was to fork the github project [paulbouwer/hello-kubernetes](https://github.com/paulbouwer/hello-kubernetes) and update the dockerfile to add these dependencies.  

The original Dockerfile is based on alpine:

```
FROM node:13.6.0-alpine
```

So we need to run alpine `apk` commands to install the required packages:

```Dockerfile
FROM paulbouwer/hello-kubernetes:1.8

USER root

RUN apk update && apk upgrade && apk add bash python2 tar curl

USER node
CMD [ "npm", "start" ]
```

## Build new docker image

The easiest solution for me was to build a new docker image.  First lets open a new terminal in the kubedirector lab IDE, then:

```console
git clone https://github.com/snowch/hello-kubernetes
cd hello-kubernetes/
docker build -t localhost:5000/hello-world:0.1 .
docker push localhost:5000/hello-world
```

Note: if docker push returns an error ensure your local docker registry is [running](https://hpe-container-platform-community.github.io/learn-kubedirector/docs/kd-img-dev/customdockerimage#run-a-local-registry).

## Update catalog defintion

Modify the catalog definition `deploy/example_catalog/cr-app-hello-world.json` to use your new image

```json
{
   ...
        "defaultImageRepoTag": "localhost:5000/hello-world:0.1",
   ...
}
```

## Test your changes

You should now be able to run `kubectl apply -f ...` to update the catalog image and recreate the cluster and it should now start without any issues.


