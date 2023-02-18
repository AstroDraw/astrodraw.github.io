"use strict";(self.webpackChunkastrochart=self.webpackChunkastrochart||[]).push([[247],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=c(r),m=a,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(h,o(o({ref:e},u),{},{components:r})):n.createElement(h,o({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5920:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Chart",l={unversionedId:"drawing/chart",id:"drawing/chart",title:"Chart",description:"This is the main object of AstroChart. You will use it to create the Radix chart, and also it defines all the configuration.",source:"@site/docs/drawing/chart.md",sourceDirName:"drawing",slug:"/drawing/chart",permalink:"/drawing/chart",draft:!1,editUrl:"https://github.com/AstroDraw/astrodraw.github.io/tree/main/docs/drawing/chart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/intro"},next:{title:"Radix chart",permalink:"/drawing/radix"}},p={},c=[{value:"constructor",id:"constructor",level:3}],u={toc:c},s="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chart"},"Chart"),(0,a.kt)("p",null,"This is the main object of AstroChart. You will use it to create the Radix chart, and also it defines all the configuration."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"id of the HTML node that will be the container of the svg"),(0,a.kt)("td",{parentName:"tr",align:null},"YES")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"width"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"width of the chart svgs"),(0,a.kt)("td",{parentName:"tr",align:null},"YES")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"height"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"height of the chart svg"),(0,a.kt)("td",{parentName:"tr",align:null},"YES")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"settings"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:null},"object containing all the configurations of the Chart. See more in Settings"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"id"),": string",(0,a.kt)("br",{parentName:"p"}),"\n","id of the HTML node that will be the container of the svg"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"width"),": number",(0,a.kt)("br",{parentName:"p"}),"\n","width of the chart svg"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"height"),": number",(0,a.kt)("br",{parentName:"p"}),"\n","height of the chart svg"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"settings"),": object (optional)",(0,a.kt)("br",{parentName:"p"}),"\n","object containing all the configurations of the Chart. See more in Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const chart = new Chart( 'paper', 800, 800, settings)\n")))}d.isMDXComponent=!0}}]);