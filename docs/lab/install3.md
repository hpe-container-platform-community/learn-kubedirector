---
id: install3
title: Install - Part 3
---

In this section we will deploy KubeDirector to minikube.

## Deploy KubeDirector

In the Lab Browser UI terminal, enter the command:

```
$ make deploy
```

:::info deploy errors

If you receive an error with `make deploy` such as:

```
...
* Waiting for KubeDirector to start.......................
KubeDirector failed to start -- no admission control hook created!
make: *** [deploy] Error 1
```


```
kubectl get pods
```
After a few minutes you should see KubeDirector running:

```
NAME                            READY   STATUS    RESTARTS   AGE
kubedirector-7f9d95c9d5-5q6bv   1/1     Running   0          2m43s
``` 

# Advanced debugging (optional)

In this section we do more debugging to verify that the kubedirector pod is running:

```
$ kubectl get pods
NAME                            READY   STATUS              RESTARTS   AGE
kubedirector-7f9d95c9d5-j8rh4   0/1     ContainerCreating   0          90s
```

You can see that mine is still creating, so I run `kubectl describe` to inspect its status:

```
$ kubectl describe pod kubedirector-7f9d95c9d5-j8rh4 
...
Events:
  Type    Reason     Age    From                            Message
  ----    ------     ----   ----                            -------
  Normal  Scheduled  3m1s   default-scheduler               Successfully assigned default/kubedirector-7f9d95c9d5-j8rh4 to localhost.localdomain
  Normal  Pulling    2m59s  kubelet, localhost.localdomain  Pulling image "bluek8s/kubedirector:unstable"
```

Deploy failed for me because the image pull was talking a long time. 

I checked a few more times with `kubectl describe` until I saw:

```
Normal  Started    37s   kubelet, localhost.localdomain  Started container kubedirector
```

At which point I could run the following which completed successfully:

```
make undeploy
make dedeploy
```

:::



When `make deploy` is successful, you should see something like this:

```
...
KubeDirector pod name is kubedirector-7f9d95c9d5-j8rh4
```

At this point, you  can  run ` kubectl get pods` which should show output something like this:

```
NAME                            READY   STATUS    RESTARTS   AGE
kubedirector-7f9d95c9d5-j8rh4   1/1     Running   0          1m
```

You can run `kubectl get all` to view all objects created when KubeDirector was deployed:

```
NAME                                READY   STATUS    RESTARTS   AGE
pod/kubedirector-7f9d95c9d5-j8rh4   1/1     Running   2          11d

NAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
service/kubedirector-validator   ClusterIP   10.100.99.225   <none>        443/TCP   11d
service/kubernetes               ClusterIP   10.96.0.1       <none>        443/TCP   64d

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/kubedirector   1/1     1            1           11d

NAME                                      DESIRED   CURRENT   READY   AGE
replicaset.apps/kubedirector-7f9d95c9d5   1         1         1       11d
```
