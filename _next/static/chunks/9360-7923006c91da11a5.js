(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9360],{6248:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return t}});var a=i(5893),l=(i(7294),i(5607)),r=i(5640),o=i(2157),n=i.n(o);function t(e){var s=function(e,s){return e.position-s.position},i=function(e){c!==e&&(document.querySelectorAll("[item-id='"+c+"']")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id='"+c+"']")[0].getElementsByTagName("button")[0].style.fontWeight="500"),w&&w!==e&&(document.querySelectorAll("[item-id="+w+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+w+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500"),m&&m!==e&&(document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500")},o=function(e){var s=e.category;return(0,a.jsx)(l.Z.Item,{eventKey:s.id,className:n().acItem,children:s.isDir?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z.Header,{className:n().mainDir,onClick:function(){return i(s.id)},"item-id":s.id,children:s.dirName}),(0,a.jsx)(l.Z.Body,{className:n().accordionBody,children:(0,a.jsx)("ul",{className:n().firstTier,children:s.subDirectories?(0,a.jsx)(l.Z,{defaultActiveKey:w,children:(0,a.jsx)(t,{directories:s.subDirectories,activeKey:w})}):null})})]}):(0,a.jsx)("h2",{"item-id":s.id,className:"".concat(n().mainDir," accordion-header"),children:(0,a.jsx)("button",{className:u===s.id?"".concat(n().nonAcBtn," ").concat(n().active):"".concat(n().nonAcBtn),onClick:function(){return e=s.url,void(window.location.href=e);var e},children:s.dirName})})})},t=function(e){return e.directories.sort(s).map((function(e){return(0,a.jsx)(a.Fragment,{children:e.isDir&&e.position>0?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z.Item,{eventKey:e.id,className:n().acItem,children:[(0,a.jsx)(l.Z.Header,{onClick:function(){return i(e.id)},"item-id":e.id,children:e.dirName}),(0,a.jsx)(l.Z.Body,{className:n().acBody,children:(0,a.jsx)("ul",{className:n().secondTier,children:e.subDirectories?(0,a.jsx)(l.Z,{defaultActiveKey:m,children:(0,a.jsx)(v,{directories:e.subDirectories,activeKey:m})}):null})})]})}):e.position>0?(0,a.jsx)("li",{children:"API Docs"===e.dirName?(0,a.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,target:"_blank",rel:"noreferrer",children:e.dirName}):(0,a.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,children:e.dirName})},e.id):null})}))},d=e.launcher,u=e.id,c=e.mainDir,w=e.sub,m=e.third,p=e.Toc.subDirectories.sort(s);function v(e){return e.directories.sort(s).map((function(e){return(0,a.jsx)(a.Fragment,{children:e.isDir&&e.position>0?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z.Item,{eventKey:e.id,className:n().acItem,children:[(0,a.jsx)(l.Z.Header,{onClick:function(){return i(e.id)},"item-id":e.id,children:e.dirName}),(0,a.jsx)(l.Z.Body,{className:n().acBody,children:(0,a.jsx)("ul",{className:n().secondTier,children:e.subDirectories?(0,a.jsx)(l.Z,{defaultActiveKey:m,children:(0,a.jsx)(v,{directories:e.subDirectories,activeKey:m})}):null})})]})}):e.position>0?(0,a.jsx)("li",{children:(0,a.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,children:e.dirName})},e.id):null})}))}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Z,{defaultActiveKey:c,flush:!0,className:n().leftNavAccordian,children:p.map((function(e,s){return{learn:e.position>0?(0,a.jsx)(o,{category:e},s):null,rn:e.position>0?(0,a.jsx)(o,{category:e},s):null,archived:e.position>0?(0,a.jsx)(o,{category:e},s):null}[d]}))})})}},1717:function(e,s,i){"use strict";i.d(s,{Z:function(){return m}});var a=i(4051),l=i.n(a),r=i(5893),o=i(7294),n=i(9380),t=i(4193),d=i(2092);function u(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,a=new Array(s);i<s;i++)a[i]=e[i];return a}function c(e,s,i,a,l,r,o){try{var n=e[r](o),t=n.value}catch(d){return void i(d)}n.done?s(t):Promise.resolve(t).then(a,l)}function w(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,l,r=[],o=!0,n=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(r.push(a.value),!s||r.length!==s);o=!0);}catch(t){n=!0,l=t}finally{try{o||null==i.return||i.return()}finally{if(n)throw l}}return r}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return u(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var s=e.source,i=[],a=!1;o.useEffect((function(){window.addEventListener("hashchange",(function(){a=!0,setTimeout((function(){return a=!1}),1e3)})),window.addEventListener("scroll",(function(){a||function(){var e=document.getElementById("markdown-navigation"),s=document.querySelectorAll(".section"),i=window.innerHeight,a=null;if([].forEach.call(s,(function(e){var s=e.getBoundingClientRect();Math.abs(s.top)<i+25&&(i=Math.abs(s.top),a=e)})),a){var l=a.dataset.section,r=Array.prototype.slice.call(document.querySelectorAll('.mdContent [data-section="'+l+'"]')).indexOf(a),o=e.querySelector('[data-section="'.concat(l).concat(r>0?"-".concat(r):"",'"]'));o.classList.contains("active")||(e.querySelector("div.active").classList.remove("active"),o.classList.add("active"))}}()}))}),[]);var u=function(e,s){return e.filter((function(e){return e===s})).length},m=function(e,s){var a,r=w(o.useState({}),2),m=r[0],p=r[1],v=o.useCallback((a=l().mark((function a(){var r,o,c,w,m,v,D,f;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,n.l)().use(t.Z).use(d.Z).process(s);case 2:r=a.sent,o="",c="",w="",m=!0,(v=String(r).match(/h(\d)/)).length>1&&(D=v[1])>0&&D<7&&(o="title-level".concat(D),c=String(r).match(/<h\d>(.*?)<\/h\d>/g).map((function(e){return e.replace(/<\/?h\d>/g,"")}))),w=String(c).replace(/<code>/g,"").replace(/<\/code>/g,"").replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/x26;/g,"").toLowerCase().replace(/ /g,"-").replace(/x3c;/g,""),f=u(i,w),i.push(w),0!==f&&(m=!1,w=w+"-"+f),p({level:o,text:c,sectionId:w,active:1===e,unique:m});case 12:case"end":return a.stop()}}),a)})),function(){var e=this,s=arguments;return new Promise((function(i,l){var r=a.apply(e,s);function o(e){c(r,i,l,o,n,"next",e)}function n(e){c(r,i,l,o,n,"throw",e)}o(void 0)}))}),[e,s]);return o.useEffect((function(){v().catch(console.error)}),[v]),m};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"markdown-navigation",className:"markdown-navigation",children:function(e){var s=e.split("\n"),i=0,a=!1,l=s.map((function(e){if(e.match(/^\s*```/)&&(a=!a),e.match(/^#/)&&!a)return i++,m(i,e)}));return l=l.filter((function(e){return void 0!==e}))}(s).map((function(e){return(0,r.jsx)("div",{"data-section":e.sectionId,className:"title-anchor ".concat(e.level).concat(e.active?" active":""),onClick:function(s){return function(e,s,i){var a,l;if("code"===e.tagName.toLowerCase()&&(e=e.parentElement),i)a=s;else{var r=s.match(/(?<id>(?:\w|-)+)-(?<count>\d+)$/);a=r.groups.id,l=r.groups.count}var o,n=document.querySelectorAll("#".concat(a));o=void 0==l?n[0]:n[l],document.querySelectorAll(".title-anchor").forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),location.hash="#"+s,o.scrollIntoView()}(s.target,e.sectionId,e.unique)},dangerouslySetInnerHTML:{__html:e.text}},e.sectionId)}))})})}},7908:function(e,s,i){"use strict";i.d(s,{Z:function(){return u}});var a=i(5893),l=i(9008),r=i(5152),o=i(478),n=i(682),t=i(1608),d=i(4564);function u(e){var s=e.children,u=(0,r.default)((function(){return Promise.all([i.e(5607),i.e(1917),i.e(2898),i.e(6276),i.e(1325)]).then(i.bind(i,6276))}),{loadableGenerated:{webpack:function(){return[6276]}},ssr:!1}),c=(0,r.default)((function(){return i.e(9332).then(i.bind(i,9332))}),{loadableGenerated:{webpack:function(){return[9332]}},ssr:!1});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{property:"og:title",content:"Ballerina"}),(0,a.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@ballerinalang"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@ballerinalang"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Ballerina"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{property:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PSL2TX4');"}}),(0,a.jsx)("script",{type:"text/javascript",crossOrigin:"true",src:"https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"}),(0,a.jsx)("script",{src:"https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",type:"text/javascript",charSet:"UTF-8","data-domain-script":"630ad396-5fd5-4745-92ae-2765dc8841ee",defer:!0})]}),(0,a.jsx)(c,{}),(0,a.jsxs)(o.Z,{gap:0,className:"main-wrapper",children:[(0,a.jsx)(u,{launcher:"rn"}),(0,a.jsx)(n.Z,{className:"wrap-page-content",fluid:!0,children:(0,a.jsx)(t.Z,{children:s})}),(0,a.jsx)(d.Z,{})]})]})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU",nonAcBtn:"LeftNav_nonAcBtn__RvVTg"}},7287:function(e){"use strict";e.exports=JSON.parse('{"dirName":"downloads","level":0,"position":0,"isDir":true,"url":"/downloads","id":"downloads","subDirectories":[{"dirName":"Swan Lake release notes","level":1,"position":1,"isDir":true,"url":"/downloads/swan-lake-release-notes","id":"swan-lake-release-notes","subDirectories":[{"dirName":"2201.7.1 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.1","id":"swan-lake-2201.7.1"},{"dirName":"2201.7.0 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.0","id":"swan-lake-2201.7.0"},{"dirName":"2201.6.1 (Swan Lake Update 6)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.6.1","id":"swan-lake-2201.6.1"},{"dirName":"2201.6.0 (Swan Lake Update 6)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.6.0","id":"swan-lake-2201.6.0"},{"dirName":"2201.5.1 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.1","id":"swan-lake-2201.5.1"},{"dirName":"2201.5.0 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.0","id":"swan-lake-2201.5.0"},{"dirName":"2201.4.2 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.2","id":"swan-lake-2201.4.2"},{"dirName":"2201.4.1 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.1","id":"swan-lake-2201.4.1"},{"dirName":"2201.4.0 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.0","id":"swan-lake-2201.4.0"},{"dirName":"2201.3.5 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.5","id":"swan-lake-2201.3.5"},{"dirName":"2201.3.4 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.4","id":"swan-lake-2201.3.4"},{"dirName":"2201.3.3 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.3","id":"swan-lake-2201.3.3"},{"dirName":"2201.3.2 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.2","id":"swan-lake-2201.3.2"},{"dirName":"2201.3.1 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.1","id":"swan-lake-2201.3.1"},{"dirName":"2201.3.0 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.0","id":"swan-lake-2201.3.0"},{"dirName":"2201.2.4 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.4","id":"swan-lake-2201.2.4"},{"dirName":"2201.2.3 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.3","id":"swan-lake-2201.2.3"},{"dirName":"2201.2.2 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.2","id":"swan-lake-2201.2.2"},{"dirName":"2201.2.1 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.1","id":"swan-lake-2201.2.1"},{"dirName":"2201.2.0 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.0","id":"swan-lake-2201.2.0"},{"dirName":"2201.1.2 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.2","id":"swan-lake-2201.1.2"},{"dirName":"2201.1.1 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.1","id":"swan-lake-2201.1.1"},{"dirName":"2201.1.0 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.0","id":"swan-lake-2201.1.0"},{"dirName":"2201.0.5 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.5","id":"swan-lake-2201.0.5"},{"dirName":"2201.0.4 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.4","id":"swan-lake-2201.0.4"},{"dirName":"2201.0.3 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.3","id":"swan-lake-2201.0.3"},{"dirName":"2201.0.2 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.2","id":"swan-lake-2201.0.2"},{"dirName":"2201.0.1 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.1","id":"swan-lake-2201.0.1"},{"dirName":"2201.0.0 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.0","id":"swan-lake-2201.0.0"},{"dirName":"Swan Lake Beta6","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta6","id":"swan-lake-beta6"},{"dirName":"Swan Lake Beta5","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta5","id":"swan-lake-beta5"},{"dirName":"Swan Lake Beta4","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta4","id":"swan-lake-beta4"},{"dirName":"Swan Lake Beta3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta3","id":"swan-lake-beta3"},{"dirName":"Swan Lake Beta2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta2","id":"swan-lake-beta2"},{"dirName":"Swan Lake Beta1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta1","id":"swan-lake-beta1"},{"dirName":"Swan Lake Alpha5 ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha5","id":"swan-lake-alpha5"},{"dirName":"Swan Lake Alpha4 ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha4","id":"swan-lake-alpha4"},{"dirName":"Swan Lake Alpha3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha3","id":"swan-lake-alpha3"},{"dirName":"Swan Lake Alpha2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha2","id":"swan-lake-alpha2"},{"dirName":"Swan Lake Alpha1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha1","id":"swan-lake-alpha1"},{"dirName":"Swan Lake Preview 8","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview8","id":"swan-lake-preview8"},{"dirName":"Swan Lake Preview 7","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview7","id":"swan-lake-preview7"},{"dirName":"Swan Lake Preview 6","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview6","id":"swan-lake-preview6"},{"dirName":"Swan Lake Preview 5","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview5","id":"swan-lake-preview5"},{"dirName":"Swan Lake Preview 4","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview4","id":"swan-lake-preview4"},{"dirName":"Swan Lake Preview 3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview3","id":"swan-lake-preview3"},{"dirName":"Swan Lake Preview 2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview2","id":"swan-lake-preview2"},{"dirName":"Swan Lake Preview 1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview1","id":"swan-lake-preview1"},{"dirName":"2201.1.0","level":2,"position":0,"isDir":true,"url":"/downloads/swan-lake-release-notes/2201.1.0","id":"2201.1.0","subDirectories":[]}]},{"dirName":"1.2.x release notes","level":1,"position":2,"isDir":true,"url":"/downloads/1.2.x-release-notes","id":"1.2.x-release-notes","subDirectories":[{"dirName":"1.2.42","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.42","id":"1.2.42"},{"dirName":"1.2.41","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.41","id":"1.2.41"},{"dirName":"1.2.40","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.40","id":"1.2.40"},{"dirName":"1.2.39","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.39","id":"1.2.39"},{"dirName":"1.2.38","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.38","id":"1.2.38"},{"dirName":"1.2.37","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.37","id":"1.2.37"},{"dirName":"1.2.36","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.36","id":"1.2.36"},{"dirName":"1.2.35","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.35","id":"1.2.35"},{"dirName":"1.2.34","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.34","id":"1.2.34"},{"dirName":"1.2.33","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.33","id":"1.2.33"},{"dirName":"1.2.32","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.32","id":"1.2.32"},{"dirName":"1.2.31","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.31","id":"1.2.31"},{"dirName":"1.2.30","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.30","id":"1.2.30"},{"dirName":"1.2.29","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.29","id":"1.2.29"},{"dirName":"1.2.28","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.28","id":"1.2.28"},{"dirName":"1.2.27","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.27","id":"1.2.27"},{"dirName":"1.2.26","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.26","id":"1.2.26"},{"dirName":"1.2.25","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.25","id":"1.2.25"},{"dirName":"1.2.24","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.24","id":"1.2.24"},{"dirName":"1.2.23","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.23","id":"1.2.23"},{"dirName":"1.2.22","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.22","id":"1.2.22"},{"dirName":"1.2.21","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.21","id":"1.2.21"},{"dirName":"1.2.20","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.20","id":"1.2.20"},{"dirName":"1.2.19","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.19","id":"1.2.19"},{"dirName":"1.2.18","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.18","id":"1.2.18"},{"dirName":"1.2.17","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.17","id":"1.2.17"},{"dirName":"1.2.16","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.16","id":"1.2.16"},{"dirName":"1.2.15 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.15","id":"1.2.15"},{"dirName":"1.2.14 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.14","id":"1.2.14"},{"dirName":"1.2.13 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.13","id":"1.2.13"},{"dirName":"1.2.12 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.12","id":"1.2.12"},{"dirName":"1.2.11 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.11","id":"1.2.11"},{"dirName":"1.2.10 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.10","id":"1.2.10"},{"dirName":"1.2.9 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.9","id":"1.2.9"},{"dirName":"1.2.8","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.8","id":"1.2.8"},{"dirName":"1.2.7","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.7","id":"1.2.7"},{"dirName":"1.2.6","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.6","id":"1.2.6"},{"dirName":"1.2.5 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.5","id":"1.2.5"},{"dirName":"1.2.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.4","id":"1.2.4"},{"dirName":"1.2.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.3","id":"1.2.3"},{"dirName":"1.2.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.2","id":"1.2.2"},{"dirName":"1.2.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.1","id":"1.2.1"},{"dirName":"1.2.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.0","id":"1.2.0"}]},{"dirName":"1.2.x archived versions","level":1,"position":0,"isDir":false,"url":"/downloads/archived","id":"archived"},{"dirName":"Release Note","level":1,"position":0,"isDir":false,"url":"/downloads/RELEASE_NOTE","id":"RELEASE_NOTE"},{"dirName":"Swan Lake Release Notes","level":1,"position":0,"isDir":false,"url":"/downloads/swan-lake-release-notes","id":"swan-lake-release-notes"},{"dirName":"Swan Lake archived versions","level":1,"position":0,"isDir":false,"url":"/downloads/swan-lake-archived","id":"swan-lake-archived"},{"dirName":"1.1.x release notes","level":1,"position":3,"isDir":true,"url":"/downloads/1.1.x-release-notes","id":"1.1.x-release-notes","subDirectories":[{"dirName":"1.1.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.4","id":"1.1.4","subDirectories":[]},{"dirName":"1.1.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.3","id":"1.1.3","subDirectories":[]},{"dirName":"1.1.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.2","id":"1.1.2","subDirectories":[]},{"dirName":"1.1.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.1","id":"1.1.1","subDirectories":[]},{"dirName":"1.1.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.0","id":"1.1.0","subDirectories":[]}]},{"dirName":"1.0.x. release notes","level":1,"position":4,"isDir":true,"url":"/downloads/1.0.x-release-notes","id":"1.0.x-release-notes","subDirectories":[{"dirName":"1.0.5","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.5","id":"1.0.5","subDirectories":[]},{"dirName":"1.0.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.4","id":"1.0.4","subDirectories":[]},{"dirName":"1.0.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.3","id":"1.0.3","subDirectories":[]},{"dirName":"1.0.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.2","id":"1.0.2","subDirectories":[]},{"dirName":"1.0.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.1","id":"1.0.1","subDirectories":[]},{"dirName":"1.0.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.0","id":"1.0.0","subDirectories":[]}]},{"dirName":"0.9.x release notes","level":1,"position":5,"isDir":true,"url":"/downloads/0.9.x-release-notes","id":"0.9.x-release-notes","subDirectories":[{"dirName":"0.991.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.991.0","id":"0.991.0","subDirectories":[]},{"dirName":"0.990.3","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.3","id":"0.990.3","subDirectories":[]},{"dirName":"0.990.2","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.2","id":"0.990.2","subDirectories":[]},{"dirName":"0.990.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.1","id":"0.990.1","subDirectories":[]},{"dirName":"0.990.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.0","id":"0.990.0","subDirectories":[]},{"dirName":"0.983.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.983.0","id":"0.983.0","subDirectories":[]},{"dirName":"0.982.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.982.0","id":"0.982.0","subDirectories":[]},{"dirName":"0.981.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.981.1","id":"0.981.1","subDirectories":[]},{"dirName":"0.981.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.981.0","id":"0.981.0","subDirectories":[]},{"dirName":"0.980.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.980.1","id":"0.980.1","subDirectories":[]},{"dirName":"0.980.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.980.0","id":"0.980.0","subDirectories":[]},{"dirName":"0.975.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.975.0","id":"0.975.0","subDirectories":[]},{"dirName":"0.970.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.970.1","id":"0.970.1","subDirectories":[]},{"dirName":"0.970.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.970.0","id":"0.970.0","subDirectories":[]}]},{"dirName":"stable release notes","level":1,"position":0,"isDir":true,"url":"/downloads/stable-release-notes","id":"stable-release-notes","subDirectories":[{"dirName":"0.970.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.970.0","id":"0.970.0","subDirectories":[]},{"dirName":"1.2.14","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.14","id":"1.2.14","subDirectories":[]},{"dirName":"1.1.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.2","id":"1.1.2","subDirectories":[]},{"dirName":"1.0.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.3","id":"1.0.3","subDirectories":[]},{"dirName":"1.2.7","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.7","id":"1.2.7","subDirectories":[]},{"dirName":"1.2.13","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.13","id":"1.2.13","subDirectories":[]},{"dirName":"1.2.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.0","id":"1.2.0","subDirectories":[]},{"dirName":"0.980.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.980.1","id":"0.980.1","subDirectories":[]},{"dirName":"1.2.8","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.8","id":"1.2.8","subDirectories":[]},{"dirName":"1.2.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.4","id":"1.2.4","subDirectories":[]},{"dirName":"1.2.10","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.10","id":"1.2.10","subDirectories":[]},{"dirName":"1.0.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.1","id":"1.0.1","subDirectories":[]},{"dirName":"1.2.5","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.5","id":"1.2.5","subDirectories":[]},{"dirName":"0.990.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.0","id":"0.990.0","subDirectories":[]},{"dirName":"0.970.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.970.1","id":"0.970.1","subDirectories":[]},{"dirName":"1.0.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.4","id":"1.0.4","subDirectories":[]},{"dirName":"1.1.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.1","id":"1.1.1","subDirectories":[]},{"dirName":"1.1.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.3","id":"1.1.3","subDirectories":[]},{"dirName":"0.981.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.981.1","id":"0.981.1","subDirectories":[]},{"dirName":"1.0.5","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.5","id":"1.0.5","subDirectories":[]},{"dirName":"0.983.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.983.0","id":"0.983.0","subDirectories":[]},{"dirName":"0.981.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.981.0","id":"0.981.0","subDirectories":[]},{"dirName":"0.975.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.975.0","id":"0.975.0","subDirectories":[]},{"dirName":"1.2.11","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.11","id":"1.2.11","subDirectories":[]},{"dirName":"1.2.12","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.12","id":"1.2.12","subDirectories":[]},{"dirName":"0.980.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.980.0","id":"0.980.0","subDirectories":[]},{"dirName":"1.2.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.1","id":"1.2.1","subDirectories":[]},{"dirName":"1.1.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.4","id":"1.1.4","subDirectories":[]},{"dirName":"1.2.9","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.9","id":"1.2.9","subDirectories":[]},{"dirName":"1.2.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.2","id":"1.2.2","subDirectories":[]},{"dirName":"1.2.6","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.6","id":"1.2.6","subDirectories":[]},{"dirName":"1.0.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.0","id":"1.0.0","subDirectories":[]},{"dirName":"0.990.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.3","id":"0.990.3","subDirectories":[]},{"dirName":"0.990.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.1","id":"0.990.1","subDirectories":[]},{"dirName":"0.991.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.991.0","id":"0.991.0","subDirectories":[]},{"dirName":"1.2.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.3","id":"1.2.3","subDirectories":[]},{"dirName":"1.0.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.2","id":"1.0.2","subDirectories":[]},{"dirName":"0.982.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.982.0","id":"0.982.0","subDirectories":[]},{"dirName":"0.990.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.2","id":"0.990.2","subDirectories":[]},{"dirName":"1.1.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.0","id":"1.1.0","subDirectories":[]}]},{"dirName":" 1.2.x Release Notes Old","level":1,"position":0,"isDir":false,"url":"/downloads/release-notes","id":"release-notes"}]}')}}]);