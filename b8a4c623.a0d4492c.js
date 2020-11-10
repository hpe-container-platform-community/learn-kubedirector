(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_tile-b5230eebb2bf467aed140d3e305532c8.png"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_service-3c798416bd2a7ccd0f6a5468c799983f.png"},147:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_link-c307db52e829b1d410ebb595311e6b80.png"},148:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_canvas-fe8d87aeebbe72c5b47f447a91497f38.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(107)),o={id:"nifi",title:"Creating a NiFi image"},c={unversionedId:"kd-img-dev/nifi",id:"kd-img-dev/nifi",isDocsHomePage:!1,title:"Creating a NiFi image",description:"In this session we will create a basic Apache NiFi image and deploy it to HPE Container Platform.",source:"@site/docs/kd-img-dev/nifi.md",slug:"/kd-img-dev/nifi",permalink:"/learn-kubedirector/docs/kd-img-dev/nifi",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/nifi.md",version:"current",sidebar:"someSidebar",previous:{title:"HPE Ezmeral CP (optional)",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},l=[],s={rightToc:l};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this session we will create a basic Apache NiFi image and deploy it to HPE Container Platform."),Object(a.b)("p",null,"We do NOT need the kubedirector-lab in this session."),Object(a.b)("p",null,"After following this lesson you will have a NiFi tile in your list of Applications:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Tile",src:n(145).default})),Object(a.b)("p",null,"If you select the Service Endpoints menu, you should see a http endpoint: "),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Service",src:n(146).default})),Object(a.b)("p",null,"If you select the link for the http endpoint, you should see a NiFi page:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Link",src:n(147).default})),Object(a.b)("p",null,":::Info"),Object(a.b)("p",null,"If you see a HTTP 503 error wait a few minutes for the NiFi service to start and then try again."),Object(a.b)("p",null,":::"),Object(a.b)("p",null,"You should then see the NiFi canvas:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Canvas",src:n(148).default})))}u.isMDXComponent=!0}}]);