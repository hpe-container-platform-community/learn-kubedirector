---
id: using 
title: Using KD
---

## Deploying clusters

We will start by deploying a Ubuntu cluster.  

First we need to reduce the memory of the cluster so that it runs easily in our VM.

Using the LAB UI file browser, open `deploy/example_clusters/cr-cluster-ubuntu18.04.yaml`

Change the definition of to change both instances of `memory: "4Gi"` to `memory: "1Gi"`:

import myImageUrl from '../../static/img/lab_ui_edit_ubuntu.png';

<img src={myImageUrl}/>


In the Lab Browser UI open a new terminal and run:

```
kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04.yaml
```

more content coming soon ...


## Inspecting clusters