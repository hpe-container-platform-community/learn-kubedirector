---
id: overview 
title: Overview
---

## Build KubeDirector

You should have a browser open to [http://localhost:3000](http://localhost:3000) 
as described in the section [Lab Install Part 2](lab/install2.md#test-minikube)

In the Lab Browser UI open a new terminal:

`Main Menu -> Terminal -> New Terminal`

In the terminal enter the command 

```
make
```
You should see:

```
...
Successfully tagged bluek8s/kubedirector:unstable
INFO[0004] Operator build complete.                     
done
```

:::info bad interpreter

If you receive an error:

```
/bin/sh: /usr/local/bin/user_setup: /bin/sh^M: bad interpreter: No such file or directory
```
Run the following:
```
sudo yum install dos2unix
dos2unix build/bin/user_setup build/bin/entrypoint
```
Then run make again:
```
make
```
You shouldn't get any errors this time. 
:::

More coming soon...

---

## Reference

KD architecture [overview](https://github.com/bluek8s/kubedirector/wiki/KubeDirector-Architecture-Overview)
