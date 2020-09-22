---
id: install3
title: Install - Part 3
---

In this section we will build kubedirector from the source code and deploy it to minikube.

## Build KubeDirector

You should have a browser open to [http://localhost:3000](http://localhost:3000) 
as described in the section [Lab Install Part 2](lab/install2.md#test-minikube)

In the Lab Browser UI open a new terminal:

`Main Menu -> Terminal -> New Terminal`

In the terminal enter the command `make`.  You should see:

```
...
Successfully tagged bluek8s/kubedirector:unstable
INFO[0004] Operator build complete.                     
done
```

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

Verify that the kubedirector pod is running:

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

At which point I could run `make redeploy` which completed successfully.

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
