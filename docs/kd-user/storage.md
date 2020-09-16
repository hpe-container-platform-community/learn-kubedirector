---
id: storage 
title: Using Storage
---

## KD clusters with storage

Some of the YAML file basenames in the `deploy/example_clusters/` have a `-stor` suffix. This is just a convention used among these example files to indicate that the virtual cluster spec requests persistent storage. Several of the examples have both persistent and non-persistent variants.

Note that if you are using persistent storage, you may wish to create a [KubeDirectorConfig](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorConfig-Definition) object (as described in the next section [configuring KD](configuring), in this case for the purpose of declaring a specific `defaultStorageClassName` value. Alternately you can declare a storageClassName in the persistent storage spec section of each virtual cluster spec. If no storage class value is declared in either the KubeDirectorConfig or the virtual cluster, then the K8s default storage class will be used.


## Explore default storage

kubectl get storageclass
kubectl get pv
kubectl get pvc

### Edit deployment YAML

- Edit `deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml` 
  - change both instances of `4GBi` to `1GBi` 
  - change CPU from `2` to `1`

