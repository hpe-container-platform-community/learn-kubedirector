---
id: configcli 
title: Config CLI
---

When the `startscript` gets executed for a lifecycle event it will usually need to retrieve metadata about the environment so that you can control how the script reacts to the event.

The Config CLI allows you to retrieve metadata.

## /etc/guestconfig/configmeta.json

The metadata can be found in the pods in `/etc/guestconfig/configmeta.json`.

## Exploring the Config CLI

I wasn't able to find documentation on the Config CLI so let's do some exploring.

:::info Config CLI

The Config CLI is installed automatically in containers that have a config package.

If this exercise we use the Centos 7 KubeDirectorCluster running from the previous [lesson](/docs/kd-img-dev/configpackage) that has a config package defined:

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

You should still have your `KubeDirectorCluster` running from the previous [lesson](/docs/kd-img-dev/configpackage) if not, start it now.

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
ccli> help namespace
usage: namespace [-h]
                 {node,version,cluster,distros,services,tenant,auth,platform}
                 ...

Access to all available configuration namespaces.

optional arguments:
  -h, --help            show this help message and exit

Subcommands:
  {node,version,cluster,distros,services,tenant,auth,platform}
    node                The node namespace from the application configuration
                        metadata
    version             The version namespace from the application
                        configuration metadata
    cluster             The node namespace from the application configuration
                        metadata
    distros             The distros namespace from the application
                        configuration metadata.
    services            The services namespace from the application
                        configuration metadata.
    tenant              The tenant namespace from the application
                        configuration metadata.
    auth                The auth namespace from the application configuration
                        metadata.
    platform            The platform namespace from the application
                        configuration metadata.
```

You can then retrieve specific information:

```
ccli> namespace distros
bluedata/centos7x
```

When we are done we can exit:

```
ccli> exit


[root@kdss-xkdsh-0 /]#
```

:::info

If some of the configcli commands do not work as expected, it could be due to the following [issue](https://github.com/bluek8s/configcli/issues/1)

:::

## Using from a shell script

From a shell appconfig script (e.g. startscript) you can call the configcli directly, e.g.

```
[root@kdss-xkdsh-0 /]# echo $(configcli namespace distros)
bluedata/centos7x
```

## Using from a Python script

:::info

App config scripts (e.g. startscript) can also be written in Python.

Information on writing startscript in Python is an advanced topic and will be covered later.

:::

## Exercise

Update the startscript from the previous [lesson](/docs/kd-img-dev/configpackage) to use the configcli in some way.

## References

- Config CLI [source code](https://github.com/bluek8s/configcli)
