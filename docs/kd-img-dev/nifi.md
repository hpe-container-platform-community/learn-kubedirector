---
id: nifi 
title: Creating a NiFi image
---

In the folder where you clone `kubedirector-lab`

```
git clone https://github.com/snowch/kubedirector-nifi
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

Expand left menu, open terminal


```
docker build --tag nifi:0.1 .
docker tag nifi:0.1 localhost:5000/nifi:0.1
docker push localhost:5000/nifi:0.1
```
