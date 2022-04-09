"use strict";(self.webpackChunkastrochart=self.webpackChunkastrochart||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},u="Getting Started",c={unversionedId:"intro",id:"intro",title:"Getting Started",description:"What you'll need",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/intro",editUrl:"https://github.com/AstroDraw/astrodraw.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Radix chart",permalink:"/drawing/radix"}},s={},p=[{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Adding AstroChart to your project",id:"adding-astrochart-to-your-project",level:2},{value:"Start using",id:"start-using",level:2},{value:"Drawing a radix chart",id:"drawing-a-radix-chart",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"latest version of AstroChart: download the release directly from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AstroDraw/AstroChart/releases"},"github"),". You will find the normal version and the minified.")),(0,i.kt)("h2",{id:"adding-astrochart-to-your-project"},"Adding AstroChart to your project"),(0,i.kt)("p",null,"Add astrochart library in your folder struct, then import it into your html using ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="js/astrochart.min.js"><\/script>\n')),(0,i.kt)("h2",{id:"start-using"},"Start using"),(0,i.kt)("p",null,"First you need to create a node in the html where the svg chart will be created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="paper"></div>\n')),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," to let the library know, where to create the chart."),(0,i.kt)("p",null,"The next step is create the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart")," object, for this we need to pass:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the node that will be the container of the svg;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," of the svg chart;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height")," of the svg chart; ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  var chart = new astrology.Chart( 'paper', 800, 800);\n")),(0,i.kt)("h3",{id:"drawing-a-radix-chart"},"Drawing a radix chart"),(0,i.kt)("p",null,"The chart object has the ",(0,i.kt)("inlineCode",{parentName:"p"},"radix")," method, it receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," object. It should have the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"planets"),": object containing with the key as an astrological point and the value an array containing the degree of the point"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cusps"),": array with 12 positions, containing all houses cusps degrees ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'//data example\nvar data = {\n  "planets":{\n    "Pluto":[63], \n    "Neptune":[110], \n    "Uranus":[318], \n    "Saturn":[201], \n    "Jupiter":[192], \n    "Mars":[210], \n    "Moon":[268], \n    "Sun":[281],\n    "Mercury":[312], \n    "Venus":[330]},\n  "cusps":[296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]          \n};\n\nvar radix = chart.radix( data );\n')))}h.isMDXComponent=!0}}]);