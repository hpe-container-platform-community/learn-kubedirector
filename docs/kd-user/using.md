---
id: using 
title: Using KD
---

## Deploying KD clusters

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

## Listing KD clusters

We can run the following to list the KubeDirector clusters:

```
kubectl get KubeDirectorCluster
```

:::info Use your TAB!

kubectl has been set up to have TAB completion - use it!
TAB completion will save you a lot of typing. For example:

```
kubectl get k<<TAB>>
kubectl get kubedirector<<TAB>><<TAB>>
kubedirectorapps.kubedirector.hpe.com      kubedirectorclusters.kubedirector.hpe.com  kubedirectorconfigs.kubedirector.hpe.com
kubectl get kubedirectorcl<<TAB>>
kubectl get kubedirectorclusters.kubedirector.hpe.com<<ENTER>>
```
:::

Which should return something like the following:

```
NAME          AGE
ubuntu18.04   0m
```

## View KD cluster details

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

## View KD cluster services

You can query the KubeDirector cluster services with the following:  `kubectl get services -l kubedirector.hpe.com/kdcluster=CLUSTERNAME`

For example:

```
kubectl get services -l kubedirector.hpe.com/kdcluster=ubuntu18.04
```

For me, this returns:

```
NAME             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
kdhs-q6nb9       ClusterIP      None            <none>        8888/TCP       4h49m
s-kdss-gpdft-0   LoadBalancer   10.101.174.78   <pending>     22:44823/TCP   4h49m
```

Because we are running on Minikube, the LoadBalancer type makes the Service accessible through the `minikube service` command.

```
minikube service s-kdss-gpdft-0
```

On my environment, this shows:

```
|-----------|----------------|----------------|------------------------|
| NAMESPACE |      NAME      |  TARGET PORT   |          URL           |
|-----------|----------------|----------------|------------------------|
| default   | s-kdss-gpdft-0 | generic-ssh/22 | http://10.0.2.15:44823 |
|-----------|----------------|----------------|------------------------|
🎉  Opening service default/s-kdss-gpdft-0 in default browser...
👉  http://10.0.2.15:44823
```

We can now access the ssh service:

```
ssh 10.0.2.15 -p 44823
```

We are then prompted for a password:

```
The authenticity of host '[10.0.2.15]:44823 ([10.0.2.15]:44823)' can't be established.
ECDSA key fingerprint is SHA256:Dn6oo2QkGVHPKuyxZ4IsppQ5pdydwkJoWmtojnDC5Qo.
ECDSA key fingerprint is MD5:2d:de:32:8e:da:4a:bc:c7:76:f3:77:8b:99:38:15:53.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '[10.0.2.15]:44823' (ECDSA) to the list of known hosts.
vagrant@10.0.2.15's password:
```

:::info no user for ssh
Note that we can't login yet because we haven't created a ssh user inside the container.
We will do that next.
:::

Let's create a user inside the container.  First let's find the pod:

```
kubectl get pods
```

Returns:

```
NAME                            READY   STATUS    RESTARTS   AGE
kdss-gpdft-0                    1/1     Running   0          5h8m
kubedirector-7f9d95c9d5-mpw22   1/1     Running   0          5h8m
```

Pod `kdss-gpdft-0` looks like it is our pod, let's check:

```
kubectl describe pods kdss-gpdft-0 
```

Returns:

```
Name:         kdss-gpdft-0
Namespace:    default
Priority:     0
Node:         localhost.localdomain/10.0.2.15
Start Time:   Wed, 09 Sep 2020 15:43:45 +0000
Labels:       controller-revision-hash=kdss-gpdft-646b7c67d5
              kubedirector.hpe.com/appCatalog=local
              kubedirector.hpe.com/headless=ubuntu18.04
              kubedirector.hpe.com/kdapp=ubuntu18x
              kubedirector.hpe.com/kdcluster=ubuntu18.04
              kubedirector.hpe.com/role=vanilla_ubuntu
              statefulset.kubernetes.io/pod-name=kdss-gpdft-0
Annotations:  kubedirector.hpe.com/kdapp-prettyName: Ubuntu 18.04
Status:       Running
IP:           172.17.0.4
IPs:
  IP:           172.17.0.4
Controlled By:  StatefulSet/kdss-gpdft
Containers:
...
```

We can see the label `kubedirector.hpe.com/kdcluster=ubuntu18.04`.  
Our kdcluster ID (Name) is `ubuntu18.04` so we know that `kdss-gpdft-0` is our ubuntu18.04 pod.


:::info find pod directly
As a shortcut in the future, we can find the pod for our kdcluster by name using:

```
kubectl get pods -l kubedirector.hpe.com/kdcluster=ubuntu18.04
```

Here we specify the name of our kdcluster: `ubuntu18.04`
:::


Let's login to the container using kubectl:

```
kubectl exec -it kdss-gpdft-0 -- /bin/bash
```

Which starts a bash session on the container:

```
root@kdss-gpdft-0:/# 
```

Let's create a user account:

```bash
root@kdss-gpdft-0:/# useradd demouser
root@kdss-gpdft-0:/# passwd demouser
Current Kerberos password: <Just press Enter key>
New password: P@55w0rd12345
Retype new password: P@55w0rd12345
...
You can now choose the new password or passphrase.
<Output truncated for brevity>
...
New password: P@55w0rd12345
Retype new password: P@55w0rd12345
Current Kerberos password: <Just press Enter key>
```

We can now exit the `kubectl exec` session, and ssh in as the `demouser`:

```
ssh demouser@10.0.2.15 -p 44823
```

and login:

```
demouser@10.0.2.15's password: P@55w0rd12345
```

You can now exit the SSH session.

## Delete KD cluster

We are finished with this exercise, so let's delete the cluster:

```
kubectl delete  KubeDirectorCluster ubuntu18.04
```

This should return:

```
kubedirectorcluster.kubedirector.hpe.com "ubuntu18.04" deleted
```

## Exercises

- Resize a cluster from one to two members (hint: see references, below).
  
:::note
You may need to [increase the size](/docs/lab/advanced) of your lab Virtual Machine for this exercise.
:::

## References

See KubeDirector [documentation](https://github.com/bluek8s/kubedirector/blob/master/doc/virtual-clusters.md)
