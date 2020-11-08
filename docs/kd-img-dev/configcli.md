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

If this exercise we use the Centos 7 KubeDirectorCluster running from the previous [lesson](./configcli) that has a config package defined:

```
{
    ...
    "defaultConfigPackage":  {
        "packageURL": "file:///opt/configscripts/appconfig.tgz"
    },
    ...
}
```

:::

You should still have your `KubeDirectorCluster` running from the previous [lesson](./configcli) if not, start it now.

Next open a shell session on the cluster:

```
kubectl exec -it your-pod-name -- /bin/bash
```

Now execute the configcli application:

```
[root@kdss-xkdsh-0 /]# configcli 
Configuration CLI 1.0.

ccli> 
```

From here you can explore the help:

```
ccli> help

Documented commands (type help <topic>):
________________________________________
EOF  baseimg  ccli  exit  help  macro  namespace
```

And ...

```
ccli> help baseimg
usage: baseimg [-h] {version} ...

Baseimage related information.

optional arguments:
  -h, --help  show this help message and exit

Subcommands:
  {version}
    version   Returns the BlueData's base image version used to build the
              container image where this command is executed. Returns None if
              the container image is not based on the BlueData's base image.
```



Coming soon ...
