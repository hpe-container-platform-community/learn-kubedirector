(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(93)),i={id:"install3",title:"Install - Part 3"},c={unversionedId:"lab/install3",id:"lab/install3",isDocsHomePage:!1,title:"Install - Part 3",description:"In this section we will build kubedirector from the source code and deploy it to minikube.",source:"@site/docs/lab/install3.md",slug:"/lab/install3",permalink:"/learn-kubedirector/docs/lab/install3",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/lab/install3.md",version:"current",sidebar:"someSidebar",previous:{title:"Install - Part 2",permalink:"/learn-kubedirector/docs/lab/install2"},next:{title:"Introduction",permalink:"/learn-kubedirector/docs/kd-admin/intro"}},l=[{value:"Build Kubedirector",id:"build-kubedirector",children:[]},{value:"Deploy Kubedirector",id:"deploy-kubedirector",children:[]}],b={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we will build kubedirector from the source code and deploy it to minikube."),Object(o.b)("h2",{id:"build-kubedirector"},"Build Kubedirector"),Object(o.b)("p",null,"You should have a browser open to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),"\nas described in the section ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/learn-kubedirector/docs/lab/install2#test-minikube"}),"Lab Install Part 2")),Object(o.b)("p",null,"In the Lab Browser UI open a new terminal:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Main Menu -> Terminal -> New Terminal")),Object(o.b)("p",null,"In the terminal enter the command ",Object(o.b)("inlineCode",{parentName:"p"},"make"),".  You should see:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"...\nSuccessfully tagged bluek8s/kubedirector:unstable\nINFO[0004] Operator build complete.                     \ndone\n")),Object(o.b)("h2",{id:"deploy-kubedirector"},"Deploy Kubedirector"),Object(o.b)("p",null,"In the Lab Browser UI terminal, enter the command ",Object(o.b)("inlineCode",{parentName:"p"},"make deploy"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"deploy errors")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is likely that you will see an error on the first attempt, such as:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"...\n* Waiting for KubeDirector to start.......................\nKubeDirector failed to start -- no admission control hook created!\nmake: *** [deploy] Error 1\n")),Object(o.b)("p",{parentName:"div"},"Enter the command ",Object(o.b)("inlineCode",{parentName:"p"},"make redeploy"),".  You may need to do this a few times."))),Object(o.b)("p",null,"If the deploy was successful, you should see something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"...\nKubeDirector pod name is kubedirector-7f9d95c9d5-gllp2\n")),Object(o.b)("p",null,"At this point, you  can  run ",Object(o.b)("inlineCode",{parentName:"p"}," kubectl get pods")," which should show output something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                            READY   STATUS    RESTARTS   AGE\nkubedirector-7f9d95c9d5-gllp2   1/1     Running   0          70m\n")))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||p[s]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);