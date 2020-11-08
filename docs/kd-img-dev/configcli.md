---
id: configcli 
title: Config CLI
---

When the `startscript` gets executed for a lifecycle event it will usually need to retrieve metadata about the environment so that it can react to the event.

The Config CLI allows you to retrieve metadata.

## Exploring the Config CLI

I wasn't able to find documentation on the Config CLI so let's do some exploring.

:::info Config CLI

The Config CLI is installed automatically in containers that have a config package.

If this exercise we use the Centos 7 `KubeDirectorCluster` running from the previous [lesson](./configcli) that has a config package defined:

:::

You should still have your `KubeDirectorCluster` running from the previous [lesson](./configcli) if not start it now. 

```
kubectl exec -it your-pod-name -- /bin/bash
```




Coming soon ...
