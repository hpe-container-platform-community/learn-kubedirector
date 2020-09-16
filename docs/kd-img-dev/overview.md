---
id: overview 
title: Overview
---

We are going to modify an existing KubeDirector application to learn KubeDirector application developement.

We will start with the 

## Basic tutorial

In this section, we are going to 

Open the file `deploy/example_catalog/cr-app-ubuntu18.04.json` and add `/var` to `defaultPersistDirs`.

It should look like this:

```
"defaultPersistDirs" : ["/home", "/var"],
```

We need to delete the old `cr-app-ubuntu18.04.json` application definition from our Kubernetes environment:

```
$ kubectl delete -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com "ubuntu18x" deleted
```

We can now deploy our updated application definition:

```
$ kubectl create -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com/ubuntu18x created
```

Next, deploy a cluster:

```
$ kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml 
kubedirectorcluster.kubedirector.hpe.com/ubuntu18.04-persistent created
```

We want to check that `/vars` is now persisted, let's find the `PersistentVolume` for our ubuntu virtual cluster:

```
$ kubectl get pv 
```

We can use `describe pv` to find the storage location:

```
$ kubectl describe pv pvc-df7da24a-e609-4e32-b574-db579fbb0cda
...
Source:
    Type:          HostPath (bare host directory volume)
    Path:          /tmp/hostpath-provisioner/p-kdss-qtl4d-0
    HostPathType:  
...
```

Finally, we can use ls to check what folders are persisted:

```
$ ls /tmp/hostpath-provisioner/p-kdss-qtl4d-0
etc  home  var
```

---

More coming soon...

