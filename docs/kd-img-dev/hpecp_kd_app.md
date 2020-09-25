---
id: hpecp_kd_app 
title: HPE Ezmeral CP (optional)
---

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
pip3 install hpecp`
```

After installing, configure with:

```
hpecp configure-cli
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

:::Retrieve K8S host IP addresses

You can use the HPE Ezmeral Container Platform UI or the CLI to find the IP addresses.

The CLI can be used like this:

```
hpecp k8scluster list --columns ['id','name','description','k8shosts_config']

# match the host IDs above to find the IPs below
hpecp k8sworker list
```
:::

<!---
Copy ca.crt to worker and master `/etc/pki/ca-trust/source/anchors/`
Run `update-ca-trust`
--->

More content coming soon ...



