---
id: overview 
title: Overview
---

## Basic tutorial

In this section, we ...

Edit default persist dirs, add `/var`:

```
"defaultPersistDirs" : ["/home", "/var"],
```

```
$ kubectl delete -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com "ubuntu18x" deleted

```
$ kubectl create -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com/ubuntu18x created
```

```
$ kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml 
```

```
$ kubectl get pv 
```

Describe the pv relating to your ubuntu18.04 pod to find the storage location:

```
$ kubectl describe pv pvc-df7da24a-e609-4e32-b574-db579fbb0cda
```

```
$ ls /tmp/hostpath-provisioner/p-kdss-qtl4d-0
etc  home  var
```

---

More coming soon...

