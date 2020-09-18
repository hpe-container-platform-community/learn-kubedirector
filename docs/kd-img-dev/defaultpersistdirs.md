---
id: defaultpersistdirs 
title: Default Persistence Directories 
---

## Modify Ubuntu 18.04 'defaultPersistDirs'

In a [previous lesson](/docs/kd-user/storage#deploy-a-cluster-with-default-storage) we deployed a Ubuntu Cluster with default storage and found that the directories `/home` and `/etc` were persisted.

In this section, we are going to modify the persisted directories (`defaultPersistDirs`).  

Open the file `deploy/example_catalog/cr-app-ubuntu18.04.json`.

Currently, `defaultPersistDirs` is set to:

```json
{ 
    ...
    "defaultPersistDirs" : ["/home"],
    ...
}
```

Change it to:

```json
{ 
    ...
    "defaultPersistDirs" : ["/home", "/var"],
    ...
}
```

The full json should now look like this:

```json
{
    "apiVersion": "kubedirector.hpe.com/v1beta1",
    "kind": "KubeDirectorApp",
    "metadata": {
        "name" : "ubuntu18x"
    },

    "spec" : {
        "systemdRequired": true,
        "defaultPersistDirs" : ["/home", "/var"],
        "config": {
            "roleServices": [
                {
                    "serviceIDs": [
                        "ssh"
                    ],
                    "roleID": "vanilla_ubuntu"
                }
            ],
            "selectedRoles": [
                "vanilla_ubuntu"
            ]
        },
        "label": {
            "name": "Ubuntu 18.04",
            "description": "Ubuntu 18.04 with no preinstalled apps"
        },
        "distroID": "bluedata/ubuntu18x",
        "version": "1.1",
        "configSchemaVersion": 8,
        "services": [
            {
                "endpoint": {
                    "port": 22,
                    "isDashboard": false
                },
                "id": "ssh",
                "label": {
                    "name": "SSH"
                }
            }
        ],
        "defaultImageRepoTag": "bluedata/ubuntu18.04:1.1",
        "defaultConfigPackage": null,
        "roles": [
            {
                "cardinality": "1+",
                "id": "vanilla_ubuntu"
            }
        ]
    }
}
```

We need to delete the old `cr-app-ubuntu18.04.json` application definition from our Kubernetes environment:

```bash
$ kubectl delete -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com "ubuntu18x" deleted
```

We can now deploy our updated application definition:

```bash
$ kubectl create -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com/ubuntu18x created
```

Next, deploy a cluster:

```bash
$ kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml 
kubedirectorcluster.kubedirector.hpe.com/ubuntu18.04-persistent created
```

We want to check that `/vars` is now persisted, let's find the `PersistentVolume` for our ubuntu virtual cluster:

```bash
$ kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM                    STORAGECLASS   REASON   AGE
pvc-df7da24a-e609-4e32-b574-db579fbb0cda   40Gi       RWO            Delete           Bound      default/p-kdss-qtl4d-0   standard                20s
```

We can use `describe pv` to find the storage location:

```bash
$ kubectl describe pv pvc-df7da24a-e609-4e32-b574-db579fbb0cda
...
Source:
    Type:          HostPath (bare host directory volume)
    Path:          /tmp/hostpath-provisioner/p-kdss-qtl4d-0
    HostPathType:  
...
```

Finally, we can use ls to check what folders are persisted:

```bash
$ ls /tmp/hostpath-provisioner/p-kdss-qtl4d-0
etc  home  var
```

## Why was `/etc` persisted?

> KubeDirector will persist `/etc` if you don't have an app config package in your app definition.<br/>
> It will persist `/etc`, `/opt` and `/usr` only if app config is defined.
>
> _See [here](https://github.com/bluek8s/kubedirector/issues/410) for more info._

We will explore app config in [this lesson](/docs/kd-img-dev/configpackage).

## Reference information

In this lesson we saw how `defaultPersistDirs` works. 

You can find the:

 - `KubeDirectorApp` definition [here](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition)
 - `KubeDirectorApp.spec` definition [here](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#kubedirectorappspec)
 

