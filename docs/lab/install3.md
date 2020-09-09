---
id: install3
title: Install - Part 3
---

In this section we will build kubedirector from the source code and deploy it to minikube.

## Build Kubedirector

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

## Deploy Kubedirector

In the Lab Browser UI terminal, enter the command `make deploy`.

:::info deploy errors
It is likely that you will see an error on the first attempt, such as:
```
...
* Waiting for KubeDirector to start.......................
KubeDirector failed to start -- no admission control hook created!
make: *** [deploy] Error 1
```

Enter the command `make redeploy`.  You may need to do this a few times.
:::

If the deploy was successful, you should see something like this:

```
...
KubeDirector pod name is kubedirector-7f9d95c9d5-gllp2
```

