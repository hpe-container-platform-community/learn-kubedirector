---
id: configpackage 
title: Config Package
---

## Explore an existing config package

To learn about config package, let's explore an application that has `defaultConfigPackage` defined.

Open the file: `deploy/example_catalog/cr-app-spark245.json` inside this file we see:

```json
{   ...
    "defaultImageRepoTag": "bluedata/bluedata/kafka:1.0",
    "defaultConfigPackage": {
      "packageURL": "file:///opt/configscripts/appconfig.tgz"
    }
    ...
}
```

So the `appconfig` is embedded in the image in `/opt/configscripts/`.  

Let's explore that.  We can see the image tag is `bluedata/kafka:1.0` - download it to your local environment:

```bash
docker pull bluedata/kafka:1.0 # This will take a while as it is several GB!!
```

Now start the container and login:

```bash
$ docker run --rm -it bluedata/kafka:1.0 /bin/bash
[root@a6658abcf6f3 /]# cd /root
[root@a6658abcf6f3 ~]# tar xvzf /opt/configscripts/appconfig.tgz
._appconfig
appconfig/
appconfig/utils.sh
appconfig/limits.conf
appconfig/start_services.py
appconfig/logging.sh
appconfig/nsswitch.conf
appconfig/._templates
appconfig/templates/
appconfig/startscript
appconfig/templates/._Kafka_Zookeeper
appconfig/templates/Kafka_Zookeeper/
...
```

The file `appconfig/startscript` looks interesting - let's take a closer look.  

The startscript begins with:

```bash
#!/bin/env bash
### Error for wrong option handled ###
if [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then
  echo "Valid values. So execute the later code"
else
  echo "ERROR: Unknown command line option(s): '$@'"
  exit 10
fi
...
```

`startscript` is a bash shell script.  When a bash shell script is executed command line arguments
are passed to the script are passed in the variables `$1`, `$2`, etc.

This script is executed by KubeDirector.  It is executed for events in a KubeDirector virtual cluster lifecycle, e.g.

 - `--configure` when an virtual cluster is initially created (TODO is this correct?)
 - `--addnodes` when an node is added to the virtual cluster
 - `--delnodes` when a node is removed from the virtual cluster
 
## Create a basic config package

In this section we modify the ubuntu application to log the action inside the container.

In the folder you created for the [previous lession](/docs/kd-img-dev/customdockerimage) - `/deploy/example_catalog/myubuntu` 
create a new file named `startscript` with the contents:

```bash
#!/bin/env bash
### Error for wrong option handled ###
if [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then
  echo "Valid values. So execute the later code"
else
  echo "ERROR: Unknown command line option(s): '$@'"
  exit 10
fi

echo "$1" >> /root/startscript.log
```


## Reference

More content coming soon ...

---

More content coming soon ...

Waiting for information here: https://github.com/bluek8s/kubedirector/issues/412
