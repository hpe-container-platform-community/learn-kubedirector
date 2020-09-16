---
id: configuring 
title: Configuring KD
---

Before creating any virtual clusters, you may wish to configure KubeDirector to change some default settings. If so, then you can create (in the same K8s namespace as KubeDirector itself) a `KubeDirectorConfig` object that has the name `kd-global-config`.

When using KubeDirector in a standard deployment of Google Kubernetes Engine, DigitalOcean Kubernetes, or Amazon Elastic Container Service for Kubernetes, then no change to the KubeDirector configuration should be necessary. You can still take a look at the KubeDirectorConfig definition to see what configuration properties are available.

If the default `KubeDirectorConfig` property values look correct for your purposes, then you do not need to create a config object.

However if you are using KubeDirector on a local K8s installation that you have installed on top of RHEL/CentOS, you may need to change the values for the defaultServiceType and/or nativeSystemdSupport config properties. See the `deploy/example_configs/cr-config-onprem.yaml` file and particularly the comments at the top of that file. If you want to apply these config values to your deployment, you can use kubectl to create that config resource:

```
kubectl create -f deploy/example_configs/cr-config-onprem.yaml
```

Another common reason you may wish to change the KubeDirector configuration is if you want your clusters to use a persistent storage class that is not the K8s default storage class. You can do this by specifying a value for the defaultStorageClassName property in the config resource.

If you have created a KubeDirectorConfig object and later want to change it, you can edit the config file and use `kubectl apply` to apply the changes. Keep in mind that the values specified in this config are only referenced at the time a virtual cluster is created; changing this config will not retroactively affect any existing virtual clusters.

