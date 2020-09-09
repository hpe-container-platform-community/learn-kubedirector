(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),i=(n(0),n(93)),a={id:"intro",title:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"This site is split into five sections:",source:"@site/docs/intro.md",slug:"/",permalink:"/learn-kubedirector/docs/",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/intro.md",version:"current",sidebar:"someSidebar",next:{title:"Lab Overview",permalink:"/learn-kubedirector/docs/lab/overview"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This site is split into five sections:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Introduction")," (this section)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Lab Installation")," - install a lab for learning KD"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"KD Administration")," - learn how to administer KD"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"KD Image Development")," - learrn how to create KD images"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"KD Development")," - learrn how to hack KD itself")),Object(i.b)("p",null,"Each section builds on the previous section."),Object(i.b)("p",null,"You only need to take the sections to meeet your own learning goals.  For example, if you are only interested in learning how to administer Kubedirector, you can stop when you have finished the section ",Object(i.b)("strong",{parentName:"p"},"KD Administration"),"."))}s.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||b[m]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);