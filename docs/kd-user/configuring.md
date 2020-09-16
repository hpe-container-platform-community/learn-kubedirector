---
id: configuring 
title: Configuring KD
---

Before creating any virtual clusters, you may wish to configure KubeDirector to change some default settings. If so, then you can create (in the same K8s namespace as KubeDirector itself) a [KubeDirectorConfig](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorConfig-Definition) object that has the name `kd-global-config`.

When using KubeDirector in a standard deployment of Google Kubernetes Engine, DigitalOcean Kubernetes, or Amazon Elastic Container Service for Kubernetes, then no change to the KubeDirector configuration should be necessary. You can still take a look at the KubeDirectorConfig definition to see what configuration properties are available.

If the default [KubeDirectorConfig](https://github.com/bluek8s/kubedirector/wiki/KubeDirectorConfig-Definition) property values look correct for your purposes, then you do not need to create a config object.

However if you are using KubeDirector on a local K8s installation that you have installed on top of RHEL/CentOS, you may need to change the values for the defaultServiceType and/or nativeSystemdSupport config properties. See the `deploy/example_configs/cr-config-onprem.yaml` file and particularly the comments at the top of that file. If you want to apply these config values to your deployment, you can use kubectl to create that config resource:

```
kubectl create -f deploy/example_configs/cr-config-onprem.yaml
```

Another common reason you may wish to change the KubeDirector configuration is if you want your clusters to use a persistent storage class that is not the K8s default storage class. You can do this by specifying a value for the defaultStorageClassName property in the config resource.

If you have created a KubeDirectorConfig object and later want to change it, you can edit the config file and use `kubectl apply` to apply the changes. Keep in mind that the values specified in this config are only referenced at the time a virtual cluster is created; changing this config will not retroactively affect any existing virtual clusters.

```
$ kubectl create -f deploy/example_configs/cr-config-onprem.yaml
kubedirectorconfig.kubedirector.hpe.com/kd-global-config created
```

```bash
$ kubectl get KubeDirectorConfig
NAME               AGE
kd-global-config   4s
```

```
$ kubectl describe KubeDirectorConfig
```

Which outputs:

```yaml
Name:         kd-global-config
Namespace:    default
Labels:       <none>
Annotations:  <none>
API Version:  kubedirector.hpe.com/v1beta1
Kind:         KubeDirectorConfig
Metadata:
  Creation Timestamp:  2020-09-16T09:51:23Z
  Finalizers:
    kubedirector.hpe.com/cleanup
  Generation:  1
  Managed Fields:
    API Version:  kubedirector.hpe.com/v1beta1
    Fields Type:  FieldsV1
    fieldsV1:
      f:spec:
        .:
        f:clusterSvcDomainBase:
        f:defaultServiceType:
        f:nativeSystemdSupport:
    Manager:      kubectl-create
    Operation:    Update
    Time:         2020-09-16T09:51:23Z
    API Version:  kubedirector.hpe.com/v1beta1
    Fields Type:  FieldsV1
    fieldsV1:
      f:metadata:
        f:finalizers:
          .:
          v:"kubedirector.hpe.com/cleanup":
    Manager:         kubedirector
    Operation:       Update
    Time:            2020-09-16T09:51:23Z
  Resource Version:  166394
  Self Link:         /apis/kubedirector.hpe.com/v1beta1/namespaces/default/kubedirectorconfigs/kd-global-config
  UID:               afbc6283-b192-4913-813f-32f411a9317f
Spec:
  Cluster Svc Domain Base:  .svc.cluster.local
  Default Service Type:     NodePort
  Native Systemd Support:   true
Status:
  Generation UID:  e181ecff-b75f-4c35-9d1e-86d7e7eac368
  State:           ready
Events:
  Type    Reason  Age   From          Message
  ----    ------  ----  ----          -------
  Normal  Config  49s   kubedirector  new
  Normal  Config  49s   kubedirector  stable
```