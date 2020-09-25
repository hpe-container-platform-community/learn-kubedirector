---
id: hpecp_kd_app 
title: HPE Ezmeral CP (optional)
---

:::note
This document is a work-in-progress.
:::

In this section we apply the concepts learned in the previous lesson and 
we deploy our custom application to the HPE Ezmeral Container Platform.

Previously we deployed a docker registry in our lab environment and pushed the docker image for our KD application there.
For deploying our KD application to Ezmeral Container Platform we will enable
Harbor as the registry. 

## Create a Kubernetes Cluster

Using the HPE Ezmeral Container Platform user interface create a Kubernetes cluster.

## Create a Tenant

Using the HPE Ezmeral Container Platform user interface create a tenant for your Kubernetes cluster.

## Ensure Harbor addon is enabled

:::info
This step uses the [hpecp](https://pypi.org/project/hpecp/) CLI.  You can install it with:

```
pip3 install hpecp
```

After installing, configure with:

```
hpecp configure-cli
```

If the above command fails, ensure your PATH contains the output from the following command:

```
echo $(python3 -m site --user-base)/bin
```

You can test the CLI is set up correctly with the following command which connects to the HPE Ezmeral cluster and retrieves it's build version.
```
hpecp config get --query 'objects.[bds_global_version]' --output text
```
:::

First we want to list the K8S clusters:

```bash
 hpecp k8scluster list
 ```
 
 This will return something like:
 
```
+----------------------+------+-------------+-------------+--------+
|          id          | name | description | k8s_version | status |
+----------------------+------+-------------+-------------+--------+
| /api/v2/k8scluster/1 |  c1  |             |   1.17.9    | ready  |
+----------------------+------+-------------+-------------+--------+
```

We can then get the details for the cluster we are interested in - in this particular case `/api/v2/k8scluster/1`:

```
hpecp k8scluster get /api/v2/k8scluster/1
```

This will returns something like the following:

```yaml
_links:
  self:
    href: /api/v2/k8scluster/1
addons:
- harbor
...
harbor_endpoint_access: https://ip-10-1-0-108.eu-west-3.compute.internal:10004
...
k8shosts_config:
- node: /api/v2/worker/k8shost/3
  role: master
- node: /api/v2/worker/k8shost/4
  role: worker
...
```

You can see that harbor addon is enabled.  If the harbor is not enabled, you can enable it like this:

```
hpecp k8scluster add-addons --id /api/v2/k8scluster/1 --addons [harbor]
```

## Retrieve the Harbor url

In the output from `hpecp k8scluster get /api/v2/k8scluster/1`, above you can see that 
my harbor endpoint is: 

- `https://ip-10-1-0-108.eu-west-3.compute.internal:10004`

## Login to Harbor

Open a browser to the harbor endpoint and login with:

- Username `admin` 
- Password `Harbor12345`

## Download the registry certificate

Click the **Projects** link:

import myImageUrl from '../../static/img/harbor_projects.png';

<img src={myImageUrl}/>

Next click on the link that corresponds to your HPE Container Platform tenant (in my case `k8s_tenant_1`) 
and then select the **Repositories** tab. 

Click on **REGISTRY CERTIFICATE** to download it:

import myImageUrl2 from '../../static/img/harbor_ca_cert.png';

<img src={myImageUrl2}/>

## Copy certificate to HPE CP nodes

In this step, we will copy the `ca.crt` downloaded from the previous step to the k8s hosts.

Retrieve the IP addresses of your k8s worker hosts.

:::info Retrieve K8S host IP addresses

You can use the HPE Ezmeral Container Platform UI or the CLI to find the IP addresses.

The CLI can be used like this:

```
hpecp k8scluster list --columns ['id','name','description','k8shosts_config']

# match the host IDs above to find the IPs below
hpecp k8sworker list
```
:::

For CENTOS/RHEL 7x:

- Copy ca.crt to each worker and master in the folder: `/etc/pki/ca-trust/source/anchors/`
- Run `update-ca-trust`on each host after adding the ca.crt

## Create a basic config package

In this section we modify the centos application to log the action inside the container.

Create a directory on the master: e.g. `/home/centos/deploy/example_catalog/mycentos`.  Inside that directory, 
create another directory `appconfig` and inside that folder, create a new file named `startscript` with the contents:

```bash
#!/bin/env bash
### Error for wrong option handled ###
if [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then
  echo "Valid values. So execute the later code"
else
  echo "ERROR: Unknown command line option(s): '$@'"
  exit 10
fi

echo "Starting configuration with option '$1' on node"
```

Open a terminal and change into the folder `/home/centos/deploy/example_catalog/mycentos`.

Create a tar file with the appconfig:

```bash
chmod +x appconfig/startscript
tar cvzf appconfig.tgz appconfig/
```

Update the Dockerfile so that it now contains:

```Dockerfile
FROM bluedata/centos7:4.1

RUN ! test -d /opt/configscripts || mkdir /opt/configscripts/

COPY appconfig.tgz /opt/configscripts/
```

## Retrieve the tag and push commands

import myImageUrl3 from '../../static/img/harbor_tag_push.png';

<img src={myImageUrl3}/>

E.g.

- `docker tag SOURCE_IMAGE[:TAG] ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1/IMAGE[:TAG]`
- `docker push ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1/IMAGE[:TAG]`

You will use these commands below.

## Build and Push image

In the terminal, change to the `mycentos` folder and build your custom image and push it to the local registry:

```bash
# set MY_REPO for your environment
MY_REPO="ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1"

docker build --tag mycentos:1.0 .

docker tag mycentos:1.0 ${MY_REPO}/mycentos:1.0
```

Next we push the image to our local registry:

```bash
docker push ${MY_REPO}/mycentos:1.0
```

## Copy the KD app image definition

Create a file `/home/centos/deploy/example_catalog/cr-app-centos7-custom.json` with the contents:

```json
{
    "apiVersion": "kubedirector.hpe.com/v1beta1",
    "kind": "KubeDirectorApp",
    "metadata": {
        "name" : "centos7x"
    },

    "spec" : {
        "systemdRequired": true,
        "defaultPersistDirs" : ["/home"],
        "defaultEventList" : ["configure", "addnodes", "delnodes"],
        "config": {
            "roleServices": [
                {
                    "serviceIDs": [
                        "ssh"
                    ],
                    "roleID": "vanilla_centos"
                }
            ],
            "selectedRoles": [
                "vanilla_centos"
            ]
        },
        "label": {
            "name": "CentOS 7.5",
            "description": "CentOS 7.5.1804 with no preinstalled apps"
        },
        "distroID": "bluedata/centos7x",
        "version": "1.1",
        "configSchemaVersion": 7,
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
        "defaultImageRepoTag": "docker.io/bluedata/centos7:4.1",
        "defaultConfigPackage": null,
        "roles": [
            {
                "cardinality": "1+",
                "id": "vanilla_centos"
            }
        ]
    }
}
```

Rename:

```json
{
    ...
    "name" : "centos7x"
    ...
}
```

to

```json
{
    ...
    "name" : "centos7x-custom"
    ...
}
```

## Update the KD app image

Ensure `defaultConfigPackage` in the file `/home/centos/deploy/example_catalog/cr-app-centos7-custom.json` is set to:

```json
{
    ...
    "defaultConfigPackage":  {
        "packageURL": "file:///opt/configscripts/appconfig.tgz"
    },
    ...
}
```

and `defaultImageRepoTag` is:

```json
{
    ...
    "defaultImageRepoTag": "{{YOUR_REPO}}/mycentos:1.0"
    ...
}
```

Replace `{{YOUR_REPO}}` with your repo url.  Mine was `ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1`.

## Deploy the KD app image

Deploy the new Centos KD application with your changes:

```bash
kubectl apply -f ../cr-app-centos7-custom.json
```

Check the deployment was successful:

```bash
kubectl get kubedirectorapps.kubedirector.hpe.com
```

You can see my image has only just been deployed:

```bash
NAME                     AGE
...
tensorflow-gpu-jupyter   18h
training-engine          18h
centos7x-custom          5s
```

## Deploy the KD Cluster

First create a file `/home/centos/deploy/example_clusters/cr-cluster-centos7-custom.yaml` with the contents:

```yaml
piVersion: "kubedirector.hpe.com/v1beta1"
kind: "KubeDirectorCluster"
metadata:
  name: "centos7-custom"
spec:
  app: centos7x-custom
  roles:
  - id: vanilla_centos
    members: 1
    resources:
      requests:
        memory: "1Gi"
        cpu: "1"
      limits:
        memory: "1Gi"
        cpu: "1"
```

Next we can deploy the KD Cluster:

```bash
kubectl apply -f ../../example_clusters/cr-cluster-centos7-custom.yaml
```

```bash
kubectl describe kubedirectorclusters.kubedirector.hpe.com centos7-custom
```

You may need to run the above command several times until the Cluster is `stable`:

```
Events:
  Type    Reason   Age                From          Message
  ----    ------   ----               ----          -------
  Normal  Cluster  31s                kubedirector  new
  Normal  Role     31s                kubedirector  creating role{vanilla_centos}
  Normal  Role     31s                kubedirector  changing replicas count for role{vanilla_centos}: 0 -> 1
  Normal  Role     31s (x3 over 31s)  kubedirector  waiting for replicas count for role{vanilla_centos}: 0 -> 1
  Normal  Member   1s                 kubedirector  initial config skipped for member{kdss-4p8kt-0} in role{vanilla_centos}
  Normal  Role     1s                 kubedirector  notify skipped for members in role{vanilla_centos}
  Normal  Cluster  1s                 kubedirector  stable
```

You should see a new pod:

```bash
$ kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
kdss-kzbwq-0                    1/1     Running   0          105s
kubedirector-7f9d95c9d5-wjm2j   1/1     Running   0          47h
```

```
$ kubectl exec -it kdss-kzbwq-0 -- /bin/bash
[root@kdss-kzbwq-0 /]# ls /opt/
configscripts
```

Wait a few seconds and try `ls /opt` again - keep trying until you see a `guestconfig` folder:

```
[root@kdss-kzbwq-0 /]# ls /opt/
configscripts  guestconfig
[root@kdss-kzbwq-0 /]# ls /opt/guestconfig/
appconfig/        configure.status  configure.stderr  configure.stdout
```

If we cat `configure.stdout` we should see the output from our startscript:

```
[root@kdss-kzbwq-0 /]# cat /opt/guestconfig/configure.stdout 
Valid values. So execute the later code
Starting configuration with option '--configure' on node
```


