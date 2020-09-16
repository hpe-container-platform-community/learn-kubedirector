(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(96)),l={id:"install1",title:"Install - Part 1"},i={unversionedId:"lab/install1",id:"lab/install1",isDocsHomePage:!1,title:"Install - Part 1",description:"In this section, you will install the pre-requisite software.",source:"@site/docs/lab/install1.md",slug:"/lab/install1",permalink:"/learn-kubedirector/docs/lab/install1",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/lab/install1.md",version:"current",sidebar:"someSidebar",previous:{title:"Lab Overview",permalink:"/learn-kubedirector/docs/lab/overview"},next:{title:"Install - Part 2",permalink:"/learn-kubedirector/docs/lab/install2"}},c=[{value:"Virtualbox",id:"virtualbox",children:[]},{value:"Vagrant",id:"vagrant",children:[]},{value:"Git Client",id:"git-client",children:[]}],u={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, you will install the pre-requisite software."),Object(o.b)("h2",{id:"virtualbox"},"Virtualbox"),Object(o.b)("p",null,"If you don't already have Virtualbox, download and install the following software for your machine:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Virtualbox ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://download.virtualbox.org/virtualbox/6.1.14/VirtualBox-6.1.14-140239-Win.exe"}),"Windows users"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://download.virtualbox.org/virtualbox/6.1.14/VirtualBox-6.1.14-140239-OSX.dmg"}),"OS X users"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.virtualbox.org/wiki/Linux_Downloads"}),"Linux users")),Object(o.b)("li",{parentName:"ul"},"Virtualbox Extenstion Pack ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://download.virtualbox.org/virtualbox/6.1.14/Oracle_VM_VirtualBox_Extension_Pack-6.1.14.vbox-extpack"}),"All users"))),Object(o.b)("h2",{id:"vagrant"},"Vagrant"),Object(o.b)("p",null,"If you don't already have Vagrant, download and install the following software for your machine:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://releases.hashicorp.com/vagrant/2.2.10/vagrant_2.2.10_x86_64.msi"}),"Windows users"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://releases.hashicorp.com/vagrant/2.2.10/vagrant_2.2.10_x86_64.dmg"}),"OS X users"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.vagrantup.com/downloads"}),"Linux users"))),Object(o.b)("h2",{id:"git-client"},"Git Client"),Object(o.b)("p",null,"If you don't already have a git client installed, download and install the following software for your machine:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/download/win"}),"Windows users"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/download/mac"}),"OS X users"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/download/linux"}),"Linux users"))))}s.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);