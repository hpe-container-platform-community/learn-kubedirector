---
id: overview 
title: Overview
---

We are going to modify an existing KubeDirector application to learn KubeDirector application developement.

We will work with the `ubuntu18.04` KD application that we have used in the previous lessions.

## Basic tutorial

Previously we [deployed a Ubuntu Cluster](/kd-user/storage) and found that the directories `/home` and `/etc` were persisted.

In this section, we are going to modify the persisted directories.   

Open the file `deploy/example_catalog/cr-app-ubuntu18.04.json` and add `/var` to `defaultPersistDirs`.

The full yaml should now look like this:

```yaml
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

```
$ kubectl delete -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com "ubuntu18x" deleted
```

We can now deploy our updated application definition:

```
$ kubectl create -f deploy/example_catalog/cr-app-ubuntu18.04.json 
kubedirectorapp.kubedirector.hpe.com/ubuntu18x created
```

Next, deploy a cluster:

```
$ kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml 
kubedirectorcluster.kubedirector.hpe.com/ubuntu18.04-persistent created
```

We want to check that `/vars` is now persisted, let's find the `PersistentVolume` for our ubuntu virtual cluster:

```
$ kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM                    STORAGECLASS   REASON   AGE
pvc-df7da24a-e609-4e32-b574-db579fbb0cda   40Gi       RWO            Delete           Bound      default/p-kdss-qtl4d-0   standard                20s
```

We can use `describe pv` to find the storage location:

```
$ kubectl describe pv pvc-df7da24a-e609-4e32-b574-db579fbb0cda
...
Source:
    Type:          HostPath (bare host directory volume)
    Path:          /tmp/hostpath-provisioner/p-kdss-qtl4d-0
    HostPathType:  
...
```

Finally, we can use ls to check what folders are persisted:

```
$ ls /tmp/hostpath-provisioner/p-kdss-qtl4d-0
etc  home  var
```

In this lesson we have seen how `defaultPersistDirs` works. 

See the full `KubeDirectorApp` definitions here:

 - [KubeDirectorApp definition](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition)
 - [KubeDirectorApp spec definition](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#kubedirectorappspec)

---

More coming soon...

