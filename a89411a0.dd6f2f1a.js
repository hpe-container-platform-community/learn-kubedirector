(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),m=o,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||c;return t?r.a.createElement(d,i(i({ref:n},l),{},{components:t})):r.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(6),c=(t(0),t(108)),a={id:"connections",title:"Secrets, ConfigMaps, Connections"},i={unversionedId:"kd-img-dev/connections",id:"kd-img-dev/connections",isDocsHomePage:!1,title:"Secrets, ConfigMaps, Connections",description:"Using connections inside a kdcluster",source:"@site/docs/kd-img-dev/connections.md",slug:"/kd-img-dev/connections",permalink:"/learn-kubedirector/docs/kd-img-dev/connections",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/connections.md",version:"current",sidebar:"someSidebar",previous:{title:"Creating a NiFi Application",permalink:"/learn-kubedirector/docs/kd-img-dev/nifi"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},s=[{value:"Using <code>connections</code> inside a kdcluster",id:"using-connections-inside-a-kdcluster",children:[]},{value:"Using <code>connections</code> in Cluster YAML",id:"using-connections-in-cluster-yaml",children:[{value:"1. <code>configmap</code>",id:"1-configmap",children:[]},{value:"2. <code>secret</code>",id:"2-secret",children:[]},{value:"3. <code>cluster</code>",id:"3-cluster",children:[]},{value:"4. A combination of resources",id:"4-a-combination-of-resources",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"using-connections-inside-a-kdcluster"},"Using ",Object(c.b)("inlineCode",{parentName:"h2"},"connections")," inside a kdcluster"),Object(c.b)("p",null,"When a resource is connected, its data gets appended to ",Object(c.b)("inlineCode",{parentName:"p"},"configmeta.json"),"."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"configmeta.json")," is a file that stores metadata related to the cluster. It is in ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/guestconfig/")," directory."),Object(c.b)("p",null,"Example: Lets assume we create a cluster with the following YAML, connecting a ",Object(c.b)("inlineCode",{parentName:"p"},"configmap")," resource with the label ",Object(c.b)("inlineCode",{parentName:"p"},"cmType")," as ",Object(c.b)("inlineCode",{parentName:"p"},"source-control"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata:\n  name: "jupyter-notebook"\nspec:\n  app: jupyter-notebook\n  appCatalog: local\n  connections:\n    configmaps:\n    - source-control-info\n  roles:\n  - id: controller\n    members: 1\n    resources:\n      limits:\n        cpu: "1"\n        memory: 4Gi\n      requests:\n        cpu: "1"\n        memory: 4Gi\n')),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"configmeta.json"),"  in the cluster looks like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "connections": {\n        "clusters": {},\n        "configmaps": {\n            "source-control": [{\n                "annotations": {\n                    "kubectl.kubernetes.io/last-applied-configuration": "{\\"apiVersion\\":\\"v1\\",\\"data\\":{\\"branch\\":\\"master\\",\\"proxy-hostname\\":\\"web-proxy.corp.hpecorp.net\\",\\"proxy-port\\":\\"8080\\",\\"proxy-protocol\\":\\"http\\",\\"repo-url\\":\\"http://repo:8080/scm/~user/test-repo-sj.git\\",\\"type\\":\\"bitbucket\\",\\"user-email\\":\\"suser@hpe.com\\",\\"user-name\\":\\"saurabhj\\"},\\"kind\\":\\"ConfigMap\\",\\"metadata\\":{\\"annotations\\":{},\\"labels\\":{\\"kubedirector.hpe.com/cmType\\":\\"source-control\\"},\\"name\\":\\"source-control-info\\",\\"namespace\\":\\"kubecon\\"}}\\n"\n                },\n                "data": {\n                    "branch": "master",\n                    "proxy-hostname": "web-proxy.corp.hpecorp.net",\n                    "proxy-port": "8080",\n                    "proxy-protocol": "http",\n                    "repo-url": "http://repo:8080/scm/~saurabhj/test-repo-sj.git",\n                    "type": "bitbucket",\n                    "user-email": "user@hpe.com",\n                    "user-name": "user"\n                },\n                "labels": {\n                    "kubedirector.hpe.com/cmType": "source-control"\n                },\n                "metadata": {\n                    "name": "source-control-info"\n                }\n            }]\n        },\n        "secrets": {}\n    }\n}\n\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"connections")," are a part of the object with same name in the JSON. The three possible resources types form the sub-objects and every sub-object contains another child object with the key same as the ",Object(c.b)("inlineCode",{parentName:"p"},"type")," that it had been labelled with. The ",Object(c.b)("inlineCode",{parentName:"p"},"type")," is applicable only to ",Object(c.b)("inlineCode",{parentName:"p"},"configmap")," and ",Object(c.b)("inlineCode",{parentName:"p"},"secret"),". "),Object(c.b)("p",null,"Since ",Object(c.b)("inlineCode",{parentName:"p"},"configmeta.json ")," is a JSON, we can use any json parser to parse and use metadata to our use. A sample python script is:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"import json\n\n# load json\nwith open(\"configmeta.json\", \"r\") as f:\n    obj = json.load(f)\n\n# access objects\nobj['connections']['configmaps']['source-control'][0]['data']['proxy-hostname'] \n# >> 'web-proxy.corp.hpecorp.net'\n\n")),Object(c.b)("h2",{id:"using-connections-in-cluster-yaml"},"Using ",Object(c.b)("inlineCode",{parentName:"h2"},"connections")," in Cluster YAML"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"connections")," is useful in scenarios where there is a need to attach addditonal information to the cluster. There are three types of Kubernetes resources that can be used with ",Object(c.b)("inlineCode",{parentName:"p"},"connections")," - ",Object(c.b)("inlineCode",{parentName:"p"},"configmap"),", ",Object(c.b)("inlineCode",{parentName:"p"},"secret"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"kdcluster")," (syntactically called ",Object(c.b)("inlineCode",{parentName:"p"},"cluster")," in the YAML)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note"),": The resources that are to be used with connections should be created before using them in the YAMLs"),Object(c.b)("p",null,"Following are examples that illustrate the use of each resource"),Object(c.b)("h3",{id:"1-configmap"},"1. ",Object(c.b)("inlineCode",{parentName:"h3"},"configmap")),Object(c.b)("p",null,"One of the most frequent use-cases of using a ",Object(c.b)("inlineCode",{parentName:"p"},"configmap")," is when we attach a model from the model registry to a deployment engine. The connected configmap needs to have the following label: ",Object(c.b)("inlineCode",{parentName:"p"},"'kubedirector.hpe.com/cmType': '<some-type>'")),Object(c.b)("p",null,"A sample configuration looks like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata: \n  name: "deployment-engine"\n\nspec:\n  app: model-serving\n  connections:\n    configmaps:\n    - "convolutional-nn-model"\n    - "fullyconnected-nn-model"\n  roles:\n  - id: RESTServer\n    members: 1\n    resources:\n      requests:\n        memory: "6Gi"\n        cpu: "2"\n      limits:\n        memory: "6Gi"\n        cpu: "2"\n  - id: LoadBalancer\n    members: 1\n    resources:\n      requests:\n        memory: "2Gi"\n        cpu: "1"\n      limits:\n        memory: "2Gi"\n        cpu: "1"           \n\n')),Object(c.b)("p",null,"In this example, ",Object(c.b)("inlineCode",{parentName:"p"},"convolutional-nn-model")," and ",Object(c.b)("inlineCode",{parentName:"p"},"fullyconnected-nn-model")," are the ",Object(c.b)("inlineCode",{parentName:"p"},"configmap")," resources created by HPECP with relevant model information after the models are registered."),Object(c.b)("h3",{id:"2-secret"},"2. ",Object(c.b)("inlineCode",{parentName:"h3"},"secret")),Object(c.b)("p",null,"An example that uses ",Object(c.b)("inlineCode",{parentName:"p"},"secret")," as a connection resource is while configuring a notebook cluster with source control. The connected secret needs to have the following label: ",Object(c.b)("inlineCode",{parentName:"p"},"'kubedirector.hpe.com/secretType': '<some-type>'"),". The information populated in the cluster using ",Object(c.b)("inlineCode",{parentName:"p"},"secret")," resource would be encoded in ",Object(c.b)("inlineCode",{parentName:"p"},"base64")," format. This includes all the resource attributes (",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),", ",Object(c.b)("inlineCode",{parentName:"p"},"annotations"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data"),", ",Object(c.b)("inlineCode",{parentName:"p"},"labels"),")"),Object(c.b)("p",null,"The YAML snippet below illustrates the syntax:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata:\n  name: "jupyter-notebook"\nspec:\n  app: jupyter-notebook\n  connections:\n    secrets:\n    - "source-control-secret"\n  roles:\n  - id: controller\n    resources:\n      requests:\n        memory: "3Gi"\n        cpu: "1"\n      limits:\n        memory: "3Gi"\n        cpu: "1"\n\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"source-control-secret")," is a Kubernetes secret created by the platform with information required to configure the notebook with source control."),Object(c.b)("h3",{id:"3-cluster"},"3. ",Object(c.b)("inlineCode",{parentName:"h3"},"cluster")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"cluster")," is typically used as a connection resource in a scenario that requires accessing the connected cluster resource(s) via API(s). As an example, let's consider the YAML below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata:\n  name: "jupyter-notebook"\nspec:\n  app: training-notebook\n  connections:\n    clusters:\n    - "training-engine-tf"\n    - "training-engine-pytorch"\n    roles:\n  - id: controller\n    resources:\n      requests:\n        memory: "2Gi"\n        cpu: "1"\n      limits:\n        memory: "2Gi"\n        cpu: "1"\n')),Object(c.b)("p",null,"In the example, we have connected two clusters - ",Object(c.b)("inlineCode",{parentName:"p"},"training-engine-tf")," and ",Object(c.b)("inlineCode",{parentName:"p"},"training-engine-pytorch")," to the notebook cluster."),Object(c.b)("h3",{id:"4-a-combination-of-resources"},"4. A combination of resources"),Object(c.b)("p",null,"It is possible to connect more than one type of resources to a cluster YAML. Here is an example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata:\n  name: "jupyter-notebook"\nspec:\n  app: notebook-plus-plus\n  connections:\n    clusters:\n    - "training-engine-tf"\n    - "training-engine-pytorch"\n    secrets:\n    - "source-control-secret"\n  roles:\n  - id: controller\n    resources:\n      requests:\n        memory: "4Gi"\n        cpu: "1"\n      limits:\n        memory: "4Gi"\n        cpu: "1"\n')),Object(c.b)("p",null,"In the above snippet, we have connected ",Object(c.b)("inlineCode",{parentName:"p"},"cluster"),"s and a ",Object(c.b)("inlineCode",{parentName:"p"},"secret"),"."))}p.isMDXComponent=!0}}]);