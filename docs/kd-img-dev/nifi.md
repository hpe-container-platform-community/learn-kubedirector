---
id: nifi 
title: Creating a NiFi Application
---

In this session we will create a basic Apache NiFi KD Application and deploy it to HPE Container Platform.

The application is intentionally kept simple to simplify learning.  Exercises will be suggested at the end of this lesson to add more features.

We do NOT need the kubedirector-lab in this session.

### Functionality Walkthrough

After following this lesson you will have a NiFi tile in your list of Applications:

![NiFi Tile](/img/nifi_tile.png)

If you select the Service Endpoints menu, you should see a http endpoint: 

![NiFi Service](/img/nifi_service.png)

If you select the link for the http endpoint, you should see a NiFi page:

![NiFi Link](/img/nifi_link.png)

:::info

If you see a HTTP 503 error wait a few minutes for the NiFi service to start and then try again.

:::

You should then see the NiFi canvas:

![NiFi Canvas](/img/nifi_canvas.png)

### Installing the NiFi App and provision a cluster

The easiest way to deploy the application is to use the Terminal in a HPE Container Platform Kubernetes Tenant:

![NiFi Install](/img/nifi_install.png)

The steps are repeated below:

```
git clone https://github.com/snowch/kubedirector-nifi
cd kubedirector-nifi
./apply_app_and_cluster.sh
```

### Application Image Development

Coming soon ...
