---
id: hpecp_kd_app 
title: HPE Ezmeral Container Platform (optional)
---

In this section, we apply the concepts learn in our lab and deploy our custom application to the HPE Ezmeral Container Platform.

- create a Kubernetes Cluster
- create a Tenant
- ensure Harbor is enabled and retrieve the endpoint address:

```bash
 hpecp k8scluster list
 ```
 
 Returns something like:
 
```
+----------------------+------+-------------+-------------+--------+
|          id          | name | description | k8s_version | status |
+----------------------+------+-------------+-------------+--------+
| /api/v2/k8scluster/1 |  c1  |             |   1.17.9    | ready  |
+----------------------+------+-------------+-------------+--------+
```

```
hpecp k8scluster get /api/v2/k8scluster/1
```

Returns something like this:

```
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

You can see our harbor endpoint is: `https://ip-10-1-0-108.eu-west-3.compute.internal:10004`

Open a browser to the harbor endpoint and login with username `admin` password `Harbor12345`


<!---
Copy ca.crt to worker and master `/etc/pki/ca-trust/source/anchors/`
Run `update-ca-trust`
--->

---

More content coming soon ...



