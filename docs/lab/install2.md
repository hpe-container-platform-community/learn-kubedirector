---
id: install2
title: Install - Part 2
---

In this section, you will setup the lab environment.

## Clone git repositories

You need to clone both the kubediretor-lab and kubedirector git repositories.

Note that you will clone the kubedirector repository **inside** the folder where you cloned the kubedirector-lab repository.

```
git clone https://github.com/hpe-container-platform-community/kubedirector-lab
cd kubedirector-lab
git clone https://github.com/bluek8s/kubedirector
```

## Install vagrant plugin

```
vagrant plugin install vagrant-vbguest
```

## Bring up the Vagrant VM

This step can take quiet a long time - it needs to download a VM image around 2.5GB.

```
vagrant up
```

## Run the Kubedirector Lab UI

```
vagrant ssh -c ./run_lab.sh
```

Now open a web browser to [http://localhost:3000](http://localhost:3000)

