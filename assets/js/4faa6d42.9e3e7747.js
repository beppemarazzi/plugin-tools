"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,f=g["".concat(u,".").concat(d)]||g[d]||c[d]||a;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7896),r=(n(2784),n(876));const a={id:"distributing-your-plugin",title:"Distributing Your Plugin"},o=void 0,l={unversionedId:"distributing-your-plugin",id:"distributing-your-plugin",title:"Distributing Your Plugin",description:"To distribute a Grafana plugin either to the community or privately, the plugin must be signed so the Grafana application can verify its authenticity. You can do this with the @grafana/sign-plugin package.",source:"@site/../docs/distributing-your-plugin.md",sourceDirName:".",slug:"/distributing-your-plugin",permalink:"/plugin-tools/docs/distributing-your-plugin",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/distributing-your-plugin.md",tags:[],version:"current",frontMatter:{id:"distributing-your-plugin",title:"Distributing Your Plugin"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/plugin-tools/docs/ci"},next:{title:"Signing Your Plugin",permalink:"/plugin-tools/docs/signing-your-plugin"}},u={},p=[{value:"Initial steps",id:"initial-steps",level:2}],s={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To distribute a Grafana plugin either to the community or privately, the plugin must be signed so the Grafana application can verify its authenticity. You can do this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@grafana/sign-plugin")," package."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It's not necessary to sign a plugin during development. The ",(0,r.kt)("a",{parentName:"p",href:"/plugin-tools/docs/docker"},"docker development environment")," that is scaffolded with ",(0,r.kt)("inlineCode",{parentName:"p"},"@grafana/create-plugin")," will load the plugin without a signature.")),(0,r.kt)("h2",{id:"initial-steps"},"Initial steps"),(0,r.kt)("p",null,"Before signing a plugin, read the Grafana ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/developers/plugins/publishing-and-signing-criteria/"},"plugin publishing and signing criteria")," documentation carefully."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@grafana/create-plugin")," adds the necessary commands and github workflows for signing and distributing a plugin via the Grafana plugins catalog."),(0,r.kt)("p",null,"Before signing a plugin for the first time please consult the Grafana ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/#plugin-signature-levels"},"plugin signature levels")," documentation to understand the differences between the types of signature level."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/signup"},"Grafana Cloud account"),"."),(0,r.kt)("li",{parentName:"ol"},"Make sure that the first part of the plugin ID matches the slug of your Grafana Cloud account.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"You can find the plugin ID in the plugin.json file inside your plugin directory. For example, if your account slug is ",(0,r.kt)("inlineCode",{parentName:"em"},"acmecorp"),", you need to prefix the plugin ID with ",(0,r.kt)("inlineCode",{parentName:"em"},"acmecorp-"),".")))),(0,r.kt)("li",{parentName:"ol"},"Create a Grafana Cloud API key with the ",(0,r.kt)("inlineCode",{parentName:"li"},"PluginPublisher")," role."),(0,r.kt)("li",{parentName:"ol"},"Keep a record of this API key as it will be required for ",(0,r.kt)("a",{parentName:"li",href:"/plugin-tools/docs/signing-your-plugin"},"signing a plugin"),".")))}c.isMDXComponent=!0}}]);