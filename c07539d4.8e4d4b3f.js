(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(93));const i={id:"install2",title:"Install - Part 2"},o={unversionedId:"lab/install2",id:"lab/install2",isDocsHomePage:!1,title:"Install - Part 2",description:"In this section, you will setup the lab environment.",source:"@site/docs/lab/install2.md",slug:"/lab/install2",permalink:"/learn-kubedirector/docs/lab/install2",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/lab/install2.md",version:"current",sidebar:"someSidebar",previous:{title:"Install - Part 1",permalink:"/learn-kubedirector/docs/lab/install1"},next:{title:"Install - Part 3",permalink:"/learn-kubedirector/docs/lab/install3"}},l=[{value:"Clone git repositories",id:"clone-git-repositories",children:[]},{value:"Install vagrant plugin",id:"install-vagrant-plugin",children:[]},{value:"Bring up the Vagrant VM",id:"bring-up-the-vagrant-vm",children:[]},{value:"Run the Kubedirector Lab UI",id:"run-the-kubedirector-lab-ui",children:[]},{value:"Test minikube",id:"test-minikube",children:[]},{value:"Shutdown the environment",id:"shutdown-the-environment",children:[]}],c={rightToc:l};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this section, you will setup the lab environment."),Object(a.b)("h2",{id:"clone-git-repositories"},"Clone git repositories"),Object(a.b)("p",null,"You need to clone both the kubediretor-lab and kubedirector git repositories."),Object(a.b)("p",null,"Note that you will clone the kubedirector repository ",Object(a.b)("strong",{parentName:"p"},"inside")," the folder where you cloned the kubedirector-lab repository."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/hpe-container-platform-community/kubedirector-lab\ncd kubedirector-lab\ngit clone https://github.com/bluek8s/kubedirector\n")),Object(a.b)("h2",{id:"install-vagrant-plugin"},"Install vagrant plugin"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"vagrant plugin install vagrant-vbguest\n")),Object(a.b)("h2",{id:"bring-up-the-vagrant-vm"},"Bring up the Vagrant VM"),Object(a.b)("p",null,"This step can take quiet a long time - it needs to download a VM image around 2.5GB."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"vagrant up\n")),Object(a.b)("h2",{id:"run-the-kubedirector-lab-ui"},"Run the Kubedirector Lab UI"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"vagrant ssh -c ./run_lab.sh\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Vagrant cannot forward the specified ports on this VM")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you receive the following error:"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Vagrant cannot forward the specified ports on this VM, since they\nwould collide with some other application that is already listening\non these ports. The forwarded port to 3000 is already in use\non the host machine.\n")),Object(a.b)("p",{parentName:"div"},"This is because you already have a port running on 3000. You can either:"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"close the other application, or"),Object(a.b)("li",{parentName:"ul"},"edit the Vagrantfile to chose a different host port")))),Object(a.b)("p",null,"Now open a web browser to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")),Object(a.b)("h2",{id:"test-minikube"},"Test minikube"),Object(a.b)("p",null,"In the UI open a new terminal:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Main Menu -> Terminal -> New Terminal")),Object(a.b)("p",null,"In the terminal enter the command ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl get pods"),".  You should see:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"No resources found in default namespace.\n")),Object(a.b)("h2",{id:"shutdown-the-environment"},"Shutdown the environment"),Object(a.b)("p",null,"When you are ready to shutdown the environment inside your host terminal (NOT the terminal in the Lab UI),\nchange to the directory where you cloned kubedirector-lab and issue the command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"vagrant suspend\n")),Object(a.b)("p",null,"This will suspend the virtual machine.  When you wish to resume again, issue:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"vagrant up\nvagrant ssh -c ./run_lab.sh\n")))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(h,l(l({ref:t},b),{},{components:n})):a.a.createElement(h,l({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);