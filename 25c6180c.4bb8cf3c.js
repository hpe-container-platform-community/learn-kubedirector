(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),d=a,g=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return t?r.a.createElement(g,i(i({ref:n},p),{},{components:t})):r.a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),c=(t(0),t(101)),o={id:"configpackage",title:"Config Package"},i={unversionedId:"kd-img-dev/configpackage",id:"kd-img-dev/configpackage",isDocsHomePage:!1,title:"Config Package",description:"Explore an existing config package",source:"@site/docs/kd-img-dev/configpackage.md",slug:"/kd-img-dev/configpackage",permalink:"/learn-kubedirector/docs/kd-img-dev/configpackage",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/configpackage.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom Docker Images",permalink:"/learn-kubedirector/docs/kd-img-dev/customdockerimage"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},l=[{value:"Explore an existing config package",id:"explore-an-existing-config-package",children:[]},{value:"Create a basic config package",id:"create-a-basic-config-package",children:[]},{value:"Run a local registry",id:"run-a-local-registry",children:[]},{value:"Build and Push image",id:"build-and-push-image",children:[]},{value:"Update the KD app image",id:"update-the-kd-app-image",children:[]},{value:"Deploy the KD app image",id:"deploy-the-kd-app-image",children:[]},{value:"Deploy the KD Cluster",id:"deploy-the-kd-cluster",children:[]},{value:"Reference",id:"reference",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"explore-an-existing-config-package"},"Explore an existing config package"),Object(c.b)("p",null,"To learn about config package, let's explore an application that has ",Object(c.b)("inlineCode",{parentName:"p"},"defaultConfigPackage")," defined."),Object(c.b)("p",null,"Open the file: ",Object(c.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-kafka55.json")," inside this file we see:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{   ...\n    "defaultImageRepoTag": "bluedata/bluedata/kafka:1.0",\n    "defaultConfigPackage": {\n      "packageURL": "file:///opt/configscripts/appconfig.tgz"\n    }\n    ...\n}\n')),Object(c.b)("p",null,"So the ",Object(c.b)("inlineCode",{parentName:"p"},"appconfig")," is embedded in the image in ",Object(c.b)("inlineCode",{parentName:"p"},"/opt/configscripts/"),".  "),Object(c.b)("p",null,"Let's explore that.  We can see the image tag is ",Object(c.b)("inlineCode",{parentName:"p"},"bluedata/kafka:1.0")," - download it to your local environment:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull bluedata/kafka:1.0 # This will take a while as it is several GB!!\n")),Object(c.b)("p",null,"Now start the container and login:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run --rm -it bluedata/kafka:1.0 /bin/bash\n[root@a6658abcf6f3 /]# cd /root\n[root@a6658abcf6f3 ~]# tar xvzf /opt/configscripts/appconfig.tgz\n._appconfig\nappconfig/\nappconfig/utils.sh\nappconfig/limits.conf\nappconfig/start_services.py\nappconfig/logging.sh\nappconfig/nsswitch.conf\nappconfig/._templates\nappconfig/templates/\nappconfig/startscript\nappconfig/templates/._Kafka_Zookeeper\nappconfig/templates/Kafka_Zookeeper/\n...\n")),Object(c.b)("p",null,"The file ",Object(c.b)("inlineCode",{parentName:"p"},"appconfig/startscript")," looks interesting - let's take a closer look.  "),Object(c.b)("p",null,"The startscript begins with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/env bash\n### Error for wrong option handled ###\nif [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then\n  echo "Valid values. So execute the later code"\nelse\n  echo "ERROR: Unknown command line option(s): \'$@\'"\n  exit 10\nfi\n...\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"startscript")," is a bash shell script.  When a bash shell script is executed command line arguments\nare passed to the script are passed in the variables ",Object(c.b)("inlineCode",{parentName:"p"},"$1"),", ",Object(c.b)("inlineCode",{parentName:"p"},"$2"),", etc."),Object(c.b)("p",null,"This script is executed by KubeDirector.  It is executed for events in a KubeDirector virtual cluster lifecycle, e.g."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"At launch time all pods get ",Object(c.b)("inlineCode",{parentName:"li"},"startscript --configure")," event. "),Object(c.b)("li",{parentName:"ul"},"During expansion existing pods get ",Object(c.b)("inlineCode",{parentName:"li"},"startscript --addnodes")," ... and new pods get ",Object(c.b)("inlineCode",{parentName:"li"},"startscript --configure"),". "),Object(c.b)("li",{parentName:"ul"},"For shrinking all nodes get ",Object(c.b)("inlineCode",{parentName:"li"},"startscript --delnodes"))),Object(c.b)("h2",{id:"create-a-basic-config-package"},"Create a basic config package"),Object(c.b)("p",null,"In this section we modify the ubuntu application to log the action inside the container."),Object(c.b)("p",null,"In the folder you created for the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/kd-img-dev/customdockerimage"}),"previous lession")," - ",Object(c.b)("inlineCode",{parentName:"p"},"/deploy/example_catalog/myubuntu"),"\ncreate another directory ",Object(c.b)("inlineCode",{parentName:"p"},"appconfig")," and inside that folder, create a new file named ",Object(c.b)("inlineCode",{parentName:"p"},"startscript")," with the contents:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/env bash\n### Error for wrong option handled ###\nif [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then\n  echo "Valid values. So execute the later code"\nelse\n  echo "ERROR: Unknown command line option(s): \'$@\'"\n  exit 10\nfi\n\necho "Starting configuration with option \'$1\' on node"\n')),Object(c.b)("p",null,"Open a terminal and change into the folder ",Object(c.b)("inlineCode",{parentName:"p"},"/deploy/example_catalog/myubuntu"),"."),Object(c.b)("p",null,"Create a tar file with the appconfig:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"chmod +x appconfig/startscript\ntar cvzf appconfig.tgz appconfig/\n")),Object(c.b)("p",null,"Update the Dockerfile so that it now contains:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile"}),"FROM bluedata/ubuntu18.04:1.1\n\nRUN ! test -d /opt/configscripts || mkdir /opt/configscripts/\n\nCOPY appconfig.tgz /opt/configscripts/\n")),Object(c.b)("h2",{id:"run-a-local-registry"},"Run a local registry"),Object(c.b)("p",null,"Check local docker registry is running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker ps -f name=registry:2\n")),Object(c.b)("p",null,"If it is not running, start it with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n")),Object(c.b)("h2",{id:"build-and-push-image"},"Build and Push image"),Object(c.b)("p",null,"In the terminal, change to the ",Object(c.b)("inlineCode",{parentName:"p"},"myubuntu")," folder and build your custom image and push it to the local registry:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build --tag myubuntu:1.0 .\n\ndocker tag myubuntu:1.0 localhost:5000/myubuntu:1.0\n")),Object(c.b)("p",null,"Next we push the image to our local registry:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker push localhost:5000/myubuntu:1.0\n")),Object(c.b)("h2",{id:"update-the-kd-app-image"},"Update the KD app image"),Object(c.b)("p",null,"Ensure ",Object(c.b)("inlineCode",{parentName:"p"},"defaultConfigPackage")," in the file ",Object(c.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-ubuntu18.04.json")," is set to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "defaultConfigPackage":  {\n        "packageURL": "file:///opt/configscripts/appconfig.tgz"\n    },\n    ...\n}\n')),Object(c.b)("p",null,"and ",Object(c.b)("inlineCode",{parentName:"p"},"defaultImageRepoTag")," is:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "defaultImageRepoTag": "localhost:5000/myubuntu:1.0"\n    ...\n}\n')),Object(c.b)("h2",{id:"deploy-the-kd-app-image"},"Deploy the KD app image"),Object(c.b)("p",null,"First ensure you aren't still running an Ubuntu KD clusters from the previous tutorial."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml\n")),Object(c.b)("p",null,"Next undeploy the existing Ubuntu KD application image definition:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete -f ../cr-app-ubuntu18.04.json\n")),Object(c.b)("p",null,"Deploy the new Ubuntu KD application with your changes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f ../cr-app-ubuntu18.04.json\n")),Object(c.b)("p",null,"Check the deployment was successful:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get kubedirectorapps.kubedirector.hpe.com\n")),Object(c.b)("p",null,"You can see my image has only just been deployed:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                     AGE\n...\ntensorflow-gpu-jupyter   18h\ntraining-engine          18h\nubuntu18x                5s\n")),Object(c.b)("h2",{id:"deploy-the-kd-cluster"},"Deploy the KD Cluster"),Object(c.b)("p",null,"Next we can deploy the KD Cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f ../../example_clusters/cr-cluster-ubuntu18.04-stor.yaml\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl describe kubedirectorclusters.kubedirector.hpe.com ubuntu18.04-persistent\n")),Object(c.b)("p",null,"You may need to run the above command several times until the Cluster is ",Object(c.b)("inlineCode",{parentName:"p"},"stable"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Events:\n  Type    Reason   Age                From          Message\n  ----    ------   ----               ----          -------\n  Normal  Cluster  31s                kubedirector  new\n  Normal  Role     31s                kubedirector  creating role{vanilla_ubuntu}\n  Normal  Role     31s                kubedirector  changing replicas count for role{vanilla_ubuntu}: 0 -> 1\n  Normal  Role     31s (x3 over 31s)  kubedirector  waiting for replicas count for role{vanilla_ubuntu}: 0 -> 1\n  Normal  Member   1s                 kubedirector  initial config skipped for member{kdss-4p8kt-0} in role{vanilla_ubuntu}\n  Normal  Role     1s                 kubedirector  notify skipped for members in role{vanilla_ubuntu}\n  Normal  Cluster  1s                 kubedirector  stable\n")),Object(c.b)("p",null,"You should see a new pod:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nkdss-kzbwq-0                    1/1     Running   0          105s\nkubedirector-7f9d95c9d5-wjm2j   1/1     Running   0          47h\n")),Object(c.b)("p",null,"More content coming soon ..."),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("p",null,"More content coming soon ..."),Object(c.b)("hr",null),Object(c.b)("p",null,"More content coming soon ..."),Object(c.b)("p",null,"Waiting for information here: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/issues/412"}),"https://github.com/bluek8s/kubedirector/issues/412")))}b.isMDXComponent=!0}}]);