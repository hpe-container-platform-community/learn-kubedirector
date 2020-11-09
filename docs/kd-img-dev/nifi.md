---
id: nifi 
title: Creating a NiFi image
---

In the folder where you clone `kubedirector-lab`

```
git clone `https://github.com/snowch/kubedirector-nifi
```


```
  config.vm.synced_folder "./kubedirector", "/vagrant/src/github.com/bluek8s/kubedirector", owner: "vagrant", group: "vagrant"
  config.vm.synced_folder "./kubedirector-nifi", "/vagrant/kubedirector-nifi", owner: "vagrant", group: "vagrant"
```

```
vagrant reload
```


File -> Open Workspace 

Navigate to /vagrant/kubedirector-nifi

Expand file menu

