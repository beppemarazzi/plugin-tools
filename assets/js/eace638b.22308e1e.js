"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(876));const i={id:"backend",title:"Backend",sidebar_position:2},l=void 0,o={unversionedId:"create-a-plugin/backend",id:"create-a-plugin/backend",title:"Backend",description:"Develop backend components for a Grafana plugin in Go. The following commands are frequently used to manage Go during plugin development:",source:"@site/../docs/create-a-plugin/backend.md",sourceDirName:"create-a-plugin",slug:"/create-a-plugin/backend",permalink:"/plugin-tools/docs/create-a-plugin/backend",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/create-a-plugin/backend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backend",title:"Backend",sidebar_position:2},sidebar:"docs",previous:{title:"Frontend",permalink:"/plugin-tools/docs/create-a-plugin/frontend"},next:{title:"Set up GitHub workflows",permalink:"/plugin-tools/docs/create-a-plugin/set-up-github-workflows"}},p={},u=[{value:"Update the Go SDK",id:"update-the-go-sdk",level:2},{value:"Build plugin binaries",id:"build-plugin-binaries",level:2},{value:"List available Mage targets",id:"list-available-mage-targets",level:2}],c={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Develop backend components for a Grafana plugin in ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go"),". The following commands are frequently used to manage Go during plugin development:"),(0,r.kt)("h2",{id:"update-the-go-sdk"},"Update the Go SDK"),(0,r.kt)("p",null,"To keep the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/"},"Grafana plugin SDK for Go")," up to date:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/grafana/grafana-plugin-sdk-go\ngo mod tidy\n")),(0,r.kt)("h2",{id:"build-plugin-binaries"},"Build plugin binaries"),(0,r.kt)("p",null,"Build backend plugin binaries for Linux, Windows and Darwin:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"build:[arch]")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds a binary for a specific architecture."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mage -v build:Linux"))))),(0,r.kt)("h2",{id:"list-available-mage-targets"},"List available Mage targets"),(0,r.kt)("p",null,"List all available Mage targets for additional commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mage -l\n")))}s.isMDXComponent=!0}}]);