---
id: storage 
title: Using Storage
---

## KD clusters with storage

Some of the YAML file basenames in the `deploy/example_clusters/` have a `-stor` suffix. This is just a convention used among these example files to indicate that the virtual cluster spec requests persistent storage. Several of the examples have both persistent and non-persistent variants.

Note that if you are using persistent storage, you may wish to create a `KubeDirectorConfig` object (as described in the next section [configuring KD](configuring)), for declaring a specific `defaultStorageClassName` value.

Alternately, you can declare a `storageClassName` in the persistent storage spec section of each virtual cluster spec. If no storage class value is declared in either the KubeDirectorConfig or the virtual cluster, then the K8s default storage class will be used.


## Explore lab environment

Let's explore the lab environment, first `StorageClasses`:

```
$ kubectl get storageclass
NAME                 PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
standard (default)   k8s.io/minikube-hostpath   Delete          Immediate           false                  11d
```

Next check if that are any `PersistentVolumes`:

```
$ kubectl get pv
No resources found
```

Finally, check for `PersistentVolumeClaims`:

```
$ kubectl get pvc
No resources found in default namespace.
```

## Deploy a cluster with default storage

We will deploy a ubuntu18.04 cluster with storage.

First we will change the configuration to support our lab environment.

- Edit `deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml` 
  - change both instances of `memory: "4Gi"` to `memory: "1Gi"` 
  - change both instances of `CPU: "2"` to `CPU: "1"`

Now deploy the cluster:

```
$ kubectl apply -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml
kubedirectorcluster.kubedirector.hpe.com/ubuntu18.04-persistent created
```

Let's take a look at the PersistentVolumes:

```
$ kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                    STORAGECLASS   REASON   AGE
pvc-586fc6ec-6106-40b4-af06-1084b384e23f   40Gi       RWO            Delete           Bound    default/p-kdss-s4cqf-0   standard                4m58s
```

If we `describe` the pv created for our Ubuntu 18.04 instance, we can find the storage location:

```
kubectl describe pv pvc-586fc6ec-6106-40b4-af06-1084b384e23f
...
Source:
    Type:          HostPath (bare host directory volume)
    Path:          /tmp/hostpath-provisioner/p-kdss-s4cqf-0
    HostPathType:  
...
```

Finally, we can check the host folder contents:

```
$ ls -l /tmp/hostpath-provisioner/p-kdss-s4cqf-0/
total 8
drwxr-xr-x 69 root root 4096 Sep 16 11:34 etc
drwxr-xr-x  3 root root   22 Jul 16 11:15 home
```

We can see that the cluster's `etc` and `home` folders are persistent.

## Deploy a cluster with custom storage

> You can declare a `storageClassName` in the persistent storage spec section of each virtual cluster spec. 

Here is the spec for `deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml`:

```yaml
apiVersion: "kubedirector.hpe.com/v1beta1"
kind: "KubeDirectorCluster"
metadata:
  name: "ubuntu18.04-persistent"
spec:
  app: ubuntu18x
  roles:
  - id: vanilla_ubuntu
    members: 1
    resources:
      requests:
        memory: "1Gi"
        cpu: "1"
      limits:
        memory: "1Gi"
        cpu: "1"
    storage:
      size: "40Gi"
```

The KubeDirectorCluster [spec](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorCluster-Definition) has a definition for `PersistentStorageSpec`.  Inside that element, are the fields `size` and `storageClassName`.  

It would appear that we can modify  `deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml` to add the storageClassName as follows:

```yaml
apiVersion: "kubedirector.hpe.com/v1beta1"
kind: "KubeDirectorCluster"
metadata:
  name: "ubuntu18.04-persistent"
spec:
  app: ubuntu18x
  roles:
  - id: vanilla_ubuntu
    members: 1
    resources:
      requests:
        memory: "1Gi"
        cpu: "1"
      limits:
        memory: "1Gi"
        cpu: "1"
    storage:
      size: "40Gi"
      storageClassName: "yourStorageClassName"
```





