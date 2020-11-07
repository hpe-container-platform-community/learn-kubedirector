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

The KubeDirector lab requires Virtualbox Guest Additions to be installed in the virtual machine and having the same version as the Virtualbox application. 

The vagrant-vbguest plugin ensures Virtualbox Guest Additions is correctly installed.

```
vagrant plugin install vagrant-vbguest
```

## Bring up the Vagrant VM

This step can take quiet a long time - it needs to download a VM image around 2.5GB.

```
vagrant up
```

:::info mounting failed with the error: No such device
If you receive the following error:
```
/sbin/mount.vboxsf: mounting failed with the error: No such device
```
Try running:
```
vagrant reload
```
:::

## Run the KubeDirector Lab UI

```
vagrant ssh -c ./run_lab.sh
```

:::info Vagrant cannot forward the specified ports on this VM
If you receive the following error:
```
Vagrant cannot forward the specified ports on this VM, since they
would collide with some other application that is already listening
on these ports. The forwarded port to 3000 is already in use
on the host machine.
```
This is because you already have a port running on 3000. You can either:

- close the other application, or
- edit the Vagrantfile to chose a different host port
:::

Now open a web browser to [http://localhost:3000](http://localhost:3000)

## Test minikube

In the UI open a new terminal:

`Main Menu -> Terminal -> New Terminal`

In the terminal enter the command:

```
kubectl get pods
```

You should see:

```
No resources found in default namespace.
```

## Shutdown the environment

When you are ready to shutdown the environment inside your host terminal (NOT the terminal in the Lab UI),
change to the directory where you cloned kubedirector-lab and issue the command:

```
vagrant suspend
```

This will suspend the virtual machine.  When you wish to resume again, issue:

```
vagrant up
vagrant ssh -c ./run_lab.sh
```
