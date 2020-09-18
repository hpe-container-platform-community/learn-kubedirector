(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(101)),o={id:"defaultpersistdirs",title:"Default Persistence Directories"},c={unversionedId:"kd-img-dev/defaultpersistdirs",id:"kd-img-dev/defaultpersistdirs",isDocsHomePage:!1,title:"Default Persistence Directories",description:"Modify Ubuntu 18.04 'defaultPersistDirs'",source:"@site/docs/kd-img-dev/defaultpersistdirs.md",slug:"/kd-img-dev/defaultpersistdirs",permalink:"/learn-kubedirector/docs/kd-img-dev/defaultpersistdirs",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/defaultpersistdirs.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/learn-kubedirector/docs/kd-img-dev/overview"},next:{title:"Custom Docker Images",permalink:"/learn-kubedirector/docs/kd-img-dev/customdockerimage"}},l=[{value:"Modify Ubuntu 18.04 &#39;defaultPersistDirs&#39;",id:"modify-ubuntu-1804-defaultpersistdirs",children:[]},{value:"Why was <code>etc</code> persisted?",id:"why-was-etc-persisted",children:[]},{value:"Reference information",id:"reference-information",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"modify-ubuntu-1804-defaultpersistdirs"},"Modify Ubuntu 18.04 'defaultPersistDirs'"),Object(i.b)("p",null,"In a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/kd-user/storage#deploy-a-cluster-with-default-storage"}),"previous lesson")," we deployed a Ubuntu Cluster with default storage and found that the directories ",Object(i.b)("inlineCode",{parentName:"p"},"/home")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/etc")," were persisted."),Object(i.b)("p",null,"In this section, we are going to modify the persisted directories (",Object(i.b)("inlineCode",{parentName:"p"},"defaultPersistDirs"),").  "),Object(i.b)("p",null,"Open the file ",Object(i.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-ubuntu18.04.json"),"."),Object(i.b)("p",null,"Currently, ",Object(i.b)("inlineCode",{parentName:"p"},"defaultPersistDirs")," is set to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{ \n    ...\n    "defaultPersistDirs" : ["/home"],\n    ...\n}\n')),Object(i.b)("p",null,"Change it to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{ \n    ...\n    "defaultPersistDirs" : ["/home", "/var"],\n    ...\n}\n')),Object(i.b)("p",null,"The full json should now look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "apiVersion": "kubedirector.hpe.com/v1beta1",\n    "kind": "KubeDirectorApp",\n    "metadata": {\n        "name" : "ubuntu18x"\n    },\n\n    "spec" : {\n        "systemdRequired": true,\n        "defaultPersistDirs" : ["/home", "/var"],\n        "config": {\n            "roleServices": [\n                {\n                    "serviceIDs": [\n                        "ssh"\n                    ],\n                    "roleID": "vanilla_ubuntu"\n                }\n            ],\n            "selectedRoles": [\n                "vanilla_ubuntu"\n            ]\n        },\n        "label": {\n            "name": "Ubuntu 18.04",\n            "description": "Ubuntu 18.04 with no preinstalled apps"\n        },\n        "distroID": "bluedata/ubuntu18x",\n        "version": "1.1",\n        "configSchemaVersion": 8,\n        "services": [\n            {\n                "endpoint": {\n                    "port": 22,\n                    "isDashboard": false\n                },\n                "id": "ssh",\n                "label": {\n                    "name": "SSH"\n                }\n            }\n        ],\n        "defaultImageRepoTag": "bluedata/ubuntu18.04:1.1",\n        "defaultConfigPackage": null,\n        "roles": [\n            {\n                "cardinality": "1+",\n                "id": "vanilla_ubuntu"\n            }\n        ]\n    }\n}\n')),Object(i.b)("p",null,"We need to delete the old ",Object(i.b)("inlineCode",{parentName:"p"},"cr-app-ubuntu18.04.json")," application definition from our Kubernetes environment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ kubectl delete -f deploy/example_catalog/cr-app-ubuntu18.04.json \nkubedirectorapp.kubedirector.hpe.com "ubuntu18x" deleted\n')),Object(i.b)("p",null,"We can now deploy our updated application definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl create -f deploy/example_catalog/cr-app-ubuntu18.04.json \nkubedirectorapp.kubedirector.hpe.com/ubuntu18x created\n")),Object(i.b)("p",null,"Next, deploy a cluster:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml \nkubedirectorcluster.kubedirector.hpe.com/ubuntu18.04-persistent created\n")),Object(i.b)("p",null,"We want to check that ",Object(i.b)("inlineCode",{parentName:"p"},"/vars")," is now persisted, let's find the ",Object(i.b)("inlineCode",{parentName:"p"},"PersistentVolume")," for our ubuntu virtual cluster:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get pv\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM                    STORAGECLASS   REASON   AGE\npvc-df7da24a-e609-4e32-b574-db579fbb0cda   40Gi       RWO            Delete           Bound      default/p-kdss-qtl4d-0   standard                20s\n")),Object(i.b)("p",null,"We can use ",Object(i.b)("inlineCode",{parentName:"p"},"describe pv")," to find the storage location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl describe pv pvc-df7da24a-e609-4e32-b574-db579fbb0cda\n...\nSource:\n    Type:          HostPath (bare host directory volume)\n    Path:          /tmp/hostpath-provisioner/p-kdss-qtl4d-0\n    HostPathType:  \n...\n")),Object(i.b)("p",null,"Finally, we can use ls to check what folders are persisted:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ ls /tmp/hostpath-provisioner/p-kdss-qtl4d-0\netc  home  var\n")),Object(i.b)("h2",{id:"why-was-etc-persisted"},"Why was ",Object(i.b)("inlineCode",{parentName:"h2"},"etc")," persisted?"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"KubeDirector will persist ",Object(i.b)("inlineCode",{parentName:"p"},"/etc")," if you don't have an app config package in your app definition.\nIt will persist ",Object(i.b)("inlineCode",{parentName:"p"},"/etc"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/opt")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/usr")," only if app config is defined.")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/issues/410"}),"here")," for more info."),Object(i.b)("p",null,"We will explore app config is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/kd-img-dev/configpackage"}),"this lesson"),"."),Object(i.b)("h2",{id:"reference-information"},"Reference information"),Object(i.b)("p",null,"In this lesson we saw how ",Object(i.b)("inlineCode",{parentName:"p"},"defaultPersistDirs")," works. "),Object(i.b)("p",null,"You can find the:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"KubeDirectorApp")," definition ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition"}),"here")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"KubeDirectorApp.spec")," definition ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#kubedirectorappspec"}),"here"))))}u.isMDXComponent=!0}}]);