---
id: using 
title: Using KD
---

## Deploying clusters

We will start by deploying a Ubuntu cluster.  

First we need to reduce the memory of the cluster so that it runs easily in our lab VM.

Using the LAB UI file browser, open `deploy/example_clusters/cr-cluster-ubuntu18.04.yaml`

Change the definition of to change both instances of `memory: "4Gi"` to `memory: "1Gi"`:

import myImageUrl from '../../static/img/lab_ui_edit_ubuntu.png';

<img src={myImageUrl}/>


In the Lab Browser UI open a new terminal and run: 

```
kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04.yaml
```

This should report the following:

```
kubedirectorcluster.kubedirector.hpe.com/ubuntu18.04 created
```

## Listing KubeDirector clusters

We can run the following to list the KubeDirector clusters:

```
kubectl get KubeDirectorCluster
```

Which should return something like the following:

```
NAME          AGE
ubuntu18.04   0m
```

## Viewing KubeDirector cluster details

We can retrieve the cluster details using the kubectl describe command.
For example:

```
kubectl describe KubeDirectorClusters ubuntu18.04
```

This shows:

```
Name:         ubuntu18.04
Namespace:    default
Labels:       <none>
Annotations:  <none>
API Version:  kubedirector.hpe.com/v1beta1
Kind:         KubeDirectorCluster
Metadata:
... 
{some attributes removed from output for breivity}
...
Spec:
  App:          ubuntu18x
  App Catalog:  local
  Connections:
  Roles:
    Id:       vanilla_ubuntu
    Members:  1
    Resources:
      Limits:
        Cpu:     1
        Memory:  1Gi
      Requests:
        Cpu:     1
        Memory:  1Gi
  Service Type:  LoadBalancer
Status:
  Cluster Service:       kdhs-q6nb9
  Generation UID:        b87ef697-0ed5-44a6-ba10-655a89de84c0
  Last Connection Hash:  d41d8cd98f00b204e9800998ecf8427e
  Last Node ID:          1
  Member State Rollup:
    Config Errors:         false
    Members Down:          false
    Members Initializing:  false
    Members Restarting:    false
    Members Waiting:       false
    Membership Changing:   false
  Roles:
    Id:  vanilla_ubuntu
    Members:
      Node ID:  1
      Pod:      kdss-gpdft-0
      Service:  s-kdss-gpdft-0
      State:    configured
      State Detail:
        Last Configured Container:   docker://8805e3d3de5f4a1af797f1310720de1424c31c10f489a53ab3f7d33e9ef05589
        Last Known Container State:  running
    Stateful Set:                    kdss-gpdft
  Spec Generation To Process:        1
  State:                             configured
Events:                              <none>
```

---

more content coming soon ...