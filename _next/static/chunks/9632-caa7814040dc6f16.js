(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9632],{24559:function(e,a,s){"use strict";s.d(a,{Z:function(){return o}});var i=s(67294),l=function(e){return"string"===typeof e?e:e.props.children};function r(e,a,s){var r=Array.isArray(a)&&1===a.length?a[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):function(e){var a=e.map(l).join("").replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").toLowerCase();return a.replace(/ /g,"-")}(a);s(!0);return i.createElement("h".concat(e),{id:r,"data-section":r,className:"section"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return function(e,a){"path"===e.tagName.toLowerCase()&&(e=e.parentElement);var s=document.querySelectorAll("#".concat(a)),i=Array.prototype.slice.call(s).indexOf(e.parentElement);location.hash=0===i?"#".concat(a):"#".concat(a,"-").concat(i),navigator.clipboard.writeText(window.location.href),e.parentElement.scrollIntoView()}(e.target,r)}},i.createElement("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),i.createElement("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})),a)}function o(e,a){return function(s){var i=s.children;return r(e,i,a)}}},86248:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return t}});var i=s(85893),l=(s(67294),s(5607)),r=s(25640),o=s(32157),n=s.n(o);function t(e){var a=function(e,a){return e.position-a.position},s=function(e){console.log(e),w!==e&&(document.querySelectorAll("[item-id='"+w+"']")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id='"+w+"']")[0].getElementsByTagName("button")[0].style.fontWeight="500"),c&&c!==e&&(document.querySelectorAll("[item-id="+c+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+c+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500"),m&&m!==e&&(document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500")},o=function(e){var a=e.category;return(0,i.jsx)(l.Z.Item,{eventKey:a.id,className:n().acItem,children:a.isDir?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z.Header,{className:n().mainDir,onClick:function(){return s(a.id)},"item-id":a.id,children:a.dirName}),(0,i.jsx)(l.Z.Body,{className:n().accordionBody,children:(0,i.jsx)("ul",{className:n().firstTier,children:a.subDirectories?(0,i.jsx)(l.Z,{defaultActiveKey:c,children:(0,i.jsx)(t,{directories:a.subDirectories,activeKey:c})}):null})})]}):(0,i.jsx)("h2",{"item-id":a.id,className:"".concat(n().mainDir," accordion-header"),children:(0,i.jsx)("button",{className:u===a.id?"".concat(n().nonAcBtn," ").concat(n().active):"".concat(n().nonAcBtn),onClick:function(){return e=a.url,void(window.location.href=e);var e},children:a.dirName})})})},t=function(e){return e.directories.sort(a).map((function(e){return(0,i.jsx)(i.Fragment,{children:e.isDir&&e.position>0?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z.Item,{eventKey:e.id,className:n().acItem,children:[(0,i.jsx)(l.Z.Header,{onClick:function(){return s(e.id)},"item-id":e.id,children:e.dirName}),(0,i.jsx)(l.Z.Body,{className:n().acBody,children:(0,i.jsx)("ul",{className:n().secondTier,children:e.subDirectories?(0,i.jsx)(l.Z,{defaultActiveKey:m,children:(0,i.jsx)(v,{directories:e.subDirectories,activeKey:m})}):null})})]})}):e.position>0?(0,i.jsx)("li",{children:"API Docs"===e.dirName||"Ballerina by Example"===e.dirName||"Visual Studio Code extension"===e.dirName||"Ballerina API Docs"===e.dirName||"Enterprise Integration Patterns (EIP)"===e.dirName||"Pre-built integrations"===e.dirName||"Integration tutorials"===e.dirName?(0,i.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,target:"_blank",rel:"noreferrer",children:e.dirName}):(0,i.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,children:e.dirName})},e.id):null})}))},d=e.launcher,u=e.id,w=e.mainDir,c=e.sub,m=e.third,p=e.Toc.subDirectories.sort(a);function v(e){return e.directories.sort(a).map((function(e){return(0,i.jsx)(i.Fragment,{children:e.isDir&&e.position>0?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z.Item,{eventKey:e.id,className:n().acItem,children:[(0,i.jsx)(l.Z.Header,{onClick:function(){return s(e.id)},"item-id":e.id,children:e.dirName}),(0,i.jsx)(l.Z.Body,{className:n().acBody,children:(0,i.jsx)("ul",{className:n().secondTier,children:e.subDirectories?(0,i.jsx)(l.Z,{defaultActiveKey:m,children:(0,i.jsx)(v,{directories:e.subDirectories,activeKey:m})}):null})})]})}):e.position>0?(0,i.jsx)("li",{children:(0,i.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,children:e.dirName})},e.id):null})}))}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{defaultActiveKey:w,flush:!0,className:n().leftNavAccordian,children:p.map((function(e,a){return{learn:e.position>0?(0,i.jsx)(o,{category:e},a):null,rn:e.position>0?(0,i.jsx)(o,{category:e},a):null,archived:e.position>0?(0,i.jsx)(o,{category:e},a):null,"vs-code":e.position>0?(0,i.jsx)(o,{category:e},a):null}[d]}))})})}},51717:function(e,a,s){"use strict";s.d(a,{Z:function(){return m}});var i=s(34051),l=s.n(i),r=s(85893),o=s(67294),n=s(69380),t=s(14193),d=s(22092);function u(e,a){(null==a||a>e.length)&&(a=e.length);for(var s=0,i=new Array(a);s<a;s++)i[s]=e[s];return i}function w(e,a,s,i,l,r,o){try{var n=e[r](o),t=n.value}catch(d){return void s(d)}n.done?a(t):Promise.resolve(t).then(i,l)}function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var i,l,r=[],o=!0,n=!1;try{for(s=s.call(e);!(o=(i=s.next()).done)&&(r.push(i.value),!a||r.length!==a);o=!0);}catch(t){n=!0,l=t}finally{try{o||null==s.return||s.return()}finally{if(n)throw l}}return r}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return u(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var a=e.source,s=[],i=!1;o.useEffect((function(){window.addEventListener("hashchange",(function(){i=!0,setTimeout((function(){return i=!1}),1e3)})),window.addEventListener("scroll",(function(){i||function(){var e=document.getElementById("markdown-navigation"),a=document.querySelectorAll(".section"),s=window.innerHeight,i=null;if([].forEach.call(a,(function(e){var a=e.getBoundingClientRect();Math.abs(a.top)<s+25&&(s=Math.abs(a.top),i=e)})),i){var l=i.dataset.section,r=Array.prototype.slice.call(document.querySelectorAll('.mdContent [data-section="'+l+'"]')).indexOf(i),o=e.querySelector('[data-section="'.concat(l).concat(r>0?"-".concat(r):"",'"]'));o.classList.contains("active")||(e.querySelector("div.active").classList.remove("active"),o.classList.add("active"))}}()}))}),[]);var u=function(e,a){return e.filter((function(e){return e===a})).length},m=function(e,a){var i,r=c(o.useState({}),2),m=r[0],p=r[1],v=o.useCallback((i=l().mark((function i(){var r,o,w,c,m,v,k,f;return l().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,n.l)().use(t.Z).use(d.Z).process(a);case 2:r=i.sent,o="",w="",c="",m=!0,(v=String(r).match(/h(\d)/)).length>1&&(k=v[1])>0&&k<7&&(o="title-level".concat(k),w=String(r).match(/<h\d>(.*?)<\/h\d>/g).map((function(e){return e.replace(/<\/?h\d>/g,"")}))),c=String(w).replace(/<code>/g,"").replace(/<\/code>/g,"").replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/x26;/g,"").toLowerCase().replace(/ /g,"-").replace(/x3c;/g,""),f=u(s,c),s.push(c),0!==f&&(m=!1,c=c+"-"+f),p({level:o,text:w,sectionId:c,active:1===e,unique:m});case 12:case"end":return i.stop()}}),i)})),function(){var e=this,a=arguments;return new Promise((function(s,l){var r=i.apply(e,a);function o(e){w(r,s,l,o,n,"next",e)}function n(e){w(r,s,l,o,n,"throw",e)}o(void 0)}))}),[e,a]);return o.useEffect((function(){v().catch(console.error)}),[v]),m};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"markdown-navigation",className:"markdown-navigation",children:function(e){var a=e.split("\n"),s=0,i=!1,l=a.map((function(e){if(e.match(/^\s*```/)&&(i=!i),e.match(/^#/)&&!i)return s++,m(s,e)}));return l=l.filter((function(e){return void 0!==e}))}(a).map((function(e){return(0,r.jsx)("div",{"data-section":e.sectionId,className:"title-anchor ".concat(e.level).concat(e.active?" active":""),onClick:function(a){return function(e,a,s){var i,l;if("code"===e.tagName.toLowerCase()&&(e=e.parentElement),s)i=a;else{var r=a.match(/(?<id>(?:\w|-)+)-(?<count>\d+)$/);i=r.groups.id,l=r.groups.count}var o,n=document.querySelectorAll("#".concat(i));o=void 0==l?n[0]:n[l],document.querySelectorAll(".title-anchor").forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),location.hash="#"+a,o.scrollIntoView()}(a.target,e.sectionId,e.unique)},dangerouslySetInnerHTML:{__html:e.text}},e.sectionId)}))})})}},87908:function(e,a,s){"use strict";s.d(a,{Z:function(){return u}});var i=s(85893),l=s(9008),r=s(5152),o=s(30478),n=s(10682),t=s(21608),d=s(84564);function u(e){var a=e.children,u=(0,r.default)((function(){return Promise.all([s.e(6475),s.e(6276),s.e(9225)]).then(s.bind(s,26276))}),{loadableGenerated:{webpack:function(){return[26276]}},ssr:!1}),w=(0,r.default)((function(){return s.e(9332).then(s.bind(s,79332))}),{loadableGenerated:{webpack:function(){return[79332]}},ssr:!1});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,i.jsx)("meta",{property:"og:title",content:"Ballerina"}),(0,i.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@ballerinalang"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@ballerinalang"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Ballerina"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,i.jsx)("meta",{property:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PSL2TX4');"}}),(0,i.jsx)("script",{type:"text/javascript",crossOrigin:"true",src:"https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"}),(0,i.jsx)("script",{src:"https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",type:"text/javascript",charSet:"UTF-8","data-domain-script":"630ad396-5fd5-4745-92ae-2765dc8841ee",defer:!0})]}),(0,i.jsx)(w,{}),(0,i.jsxs)(o.Z,{gap:0,className:"main-wrapper",children:[(0,i.jsx)(u,{launcher:"rn"}),(0,i.jsx)(n.Z,{className:"wrap-page-content",fluid:!0,children:(0,i.jsx)(t.Z,{children:a})}),(0,i.jsx)(d.Z,{})]})]})}},32157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU",nonAcBtn:"LeftNav_nonAcBtn__RvVTg"}},47287:function(e){"use strict";e.exports=JSON.parse('{"dirName":"downloads","level":0,"position":0,"isDir":true,"url":"/downloads","id":"downloads","subDirectories":[{"dirName":"Swan Lake release notes","level":1,"position":1,"isDir":true,"url":"/downloads/swan-lake-release-notes","id":"swan-lake-release-notes","subDirectories":[{"dirName":"2201.8.4 (Swan Lake Update 8)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.8.4","id":"swan-lake-2201.8.4"},{"dirName":"2201.8.3 (Swan Lake Update 8)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.8.3","id":"swan-lake-2201.8.3"},{"dirName":"2201.8.2 (Swan Lake Update 8)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.8.2","id":"swan-lake-2201.8.2"},{"dirName":"2201.8.1 (Swan Lake Update 8)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.8.1","id":"swan-lake-2201.8.1"},{"dirName":"2201.8.0 (Swan Lake Update 8)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.8.0","id":"swan-lake-2201.8.0"},{"dirName":"2201.7.5 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.5","id":"swan-lake-2201.7.5"},{"dirName":"2201.7.4 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.4","id":"swan-lake-2201.7.4"},{"dirName":"2201.7.3 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.3","id":"swan-lake-2201.7.3"},{"dirName":"2201.7.2 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.2","id":"swan-lake-2201.7.2"},{"dirName":"2201.7.1 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.1","id":"swan-lake-2201.7.1"},{"dirName":"2201.7.0 (Swan Lake Update 7)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.7.0","id":"swan-lake-2201.7.0"},{"dirName":"2201.6.3 (Swan Lake Update 6)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.6.3","id":"swan-lake-2201.6.3"},{"dirName":"2201.6.2 (Swan Lake Update 6)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.6.2","id":"swan-lake-2201.6.2"},{"dirName":"2201.6.1 (Swan Lake Update 6)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.6.1","id":"swan-lake-2201.6.1"},{"dirName":"2201.6.0 (Swan Lake Update 6)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.6.0","id":"swan-lake-2201.6.0"},{"dirName":"2201.5.5 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.5","id":"swan-lake-2201.5.5"},{"dirName":"2201.5.4 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.4","id":"swan-lake-2201.5.4"},{"dirName":"2201.5.3 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.3","id":"swan-lake-2201.5.3"},{"dirName":"2201.5.2 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.2","id":"swan-lake-2201.5.2"},{"dirName":"2201.5.1 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.1","id":"swan-lake-2201.5.1"},{"dirName":"2201.5.0 (Swan Lake Update 5)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.5.0","id":"swan-lake-2201.5.0"},{"dirName":"2201.4.3 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.3","id":"swan-lake-2201.4.3"},{"dirName":"2201.4.2 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.2","id":"swan-lake-2201.4.2"},{"dirName":"2201.4.1 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.1","id":"swan-lake-2201.4.1"},{"dirName":"2201.4.0 (Swan Lake Update 4)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.4.0","id":"swan-lake-2201.4.0"},{"dirName":"2201.3.5 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.5","id":"swan-lake-2201.3.5"},{"dirName":"2201.3.4 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.4","id":"swan-lake-2201.3.4"},{"dirName":"2201.3.3 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.3","id":"swan-lake-2201.3.3"},{"dirName":"2201.3.2 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.2","id":"swan-lake-2201.3.2"},{"dirName":"2201.3.1 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.1","id":"swan-lake-2201.3.1"},{"dirName":"2201.3.0 (Swan Lake Update 3)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.3.0","id":"swan-lake-2201.3.0"},{"dirName":"2201.2.4 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.4","id":"swan-lake-2201.2.4"},{"dirName":"2201.2.3 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.3","id":"swan-lake-2201.2.3"},{"dirName":"2201.2.2 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.2","id":"swan-lake-2201.2.2"},{"dirName":"2201.2.1 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.1","id":"swan-lake-2201.2.1"},{"dirName":"2201.2.0 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.0","id":"swan-lake-2201.2.0"},{"dirName":"2201.1.2 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.2","id":"swan-lake-2201.1.2"},{"dirName":"2201.1.1 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.1","id":"swan-lake-2201.1.1"},{"dirName":"2201.1.0 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.0","id":"swan-lake-2201.1.0"},{"dirName":"2201.0.5 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.5","id":"swan-lake-2201.0.5"},{"dirName":"2201.0.4 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.4","id":"swan-lake-2201.0.4"},{"dirName":"2201.0.3 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.3","id":"swan-lake-2201.0.3"},{"dirName":"2201.0.2 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.2","id":"swan-lake-2201.0.2"},{"dirName":"2201.0.1 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.1","id":"swan-lake-2201.0.1"},{"dirName":"2201.0.0 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.0","id":"swan-lake-2201.0.0"},{"dirName":"Swan Lake Beta6","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta6","id":"swan-lake-beta6"},{"dirName":"Swan Lake Beta5","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta5","id":"swan-lake-beta5"},{"dirName":"Swan Lake Beta4","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta4","id":"swan-lake-beta4"},{"dirName":"Swan Lake Beta3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta3","id":"swan-lake-beta3"},{"dirName":"Swan Lake Beta2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta2","id":"swan-lake-beta2"},{"dirName":"Swan Lake Beta1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta1","id":"swan-lake-beta1"},{"dirName":"Swan Lake Alpha5 ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha5","id":"swan-lake-alpha5"},{"dirName":"Swan Lake Alpha4 ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha4","id":"swan-lake-alpha4"},{"dirName":"Swan Lake Alpha3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha3","id":"swan-lake-alpha3"},{"dirName":"Swan Lake Alpha2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha2","id":"swan-lake-alpha2"},{"dirName":"Swan Lake Alpha1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha1","id":"swan-lake-alpha1"},{"dirName":"Swan Lake Preview 8","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview8","id":"swan-lake-preview8"},{"dirName":"Swan Lake Preview 7","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview7","id":"swan-lake-preview7"},{"dirName":"Swan Lake Preview 6","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview6","id":"swan-lake-preview6"},{"dirName":"Swan Lake Preview 5","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview5","id":"swan-lake-preview5"},{"dirName":"Swan Lake Preview 4","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview4","id":"swan-lake-preview4"},{"dirName":"Swan Lake Preview 3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview3","id":"swan-lake-preview3"},{"dirName":"Swan Lake Preview 2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview2","id":"swan-lake-preview2"},{"dirName":"Swan Lake Preview 1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview1","id":"swan-lake-preview1"},{"dirName":"2201.1.0","level":2,"position":0,"isDir":true,"url":"/downloads/swan-lake-release-notes/2201.1.0","id":"2201.1.0","subDirectories":[]}]},{"dirName":"1.2.x release notes","level":1,"position":2,"isDir":true,"url":"/downloads/1.2.x-release-notes","id":"1.2.x-release-notes","subDirectories":[{"dirName":"1.2.48","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.48","id":"1.2.48"},{"dirName":"1.2.47","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.47","id":"1.2.47"},{"dirName":"1.2.46","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.46","id":"1.2.46"},{"dirName":"1.2.45","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.45","id":"1.2.45"},{"dirName":"1.2.44","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.44","id":"1.2.44"},{"dirName":"1.2.43","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.43","id":"1.2.43"},{"dirName":"1.2.42","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.42","id":"1.2.42"},{"dirName":"1.2.41","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.41","id":"1.2.41"},{"dirName":"1.2.40","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.40","id":"1.2.40"},{"dirName":"1.2.39","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.39","id":"1.2.39"},{"dirName":"1.2.38","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.38","id":"1.2.38"},{"dirName":"1.2.37","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.37","id":"1.2.37"},{"dirName":"1.2.36","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.36","id":"1.2.36"},{"dirName":"1.2.35","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.35","id":"1.2.35"},{"dirName":"1.2.34","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.34","id":"1.2.34"},{"dirName":"1.2.33","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.33","id":"1.2.33"},{"dirName":"1.2.32","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.32","id":"1.2.32"},{"dirName":"1.2.31","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.31","id":"1.2.31"},{"dirName":"1.2.30","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.30","id":"1.2.30"},{"dirName":"1.2.29","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.29","id":"1.2.29"},{"dirName":"1.2.28","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.28","id":"1.2.28"},{"dirName":"1.2.27","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.27","id":"1.2.27"},{"dirName":"1.2.26","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.26","id":"1.2.26"},{"dirName":"1.2.25","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.25","id":"1.2.25"},{"dirName":"1.2.24","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.24","id":"1.2.24"},{"dirName":"1.2.23","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.23","id":"1.2.23"},{"dirName":"1.2.22","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.22","id":"1.2.22"},{"dirName":"1.2.21","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.21","id":"1.2.21"},{"dirName":"1.2.20","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.20","id":"1.2.20"},{"dirName":"1.2.19","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.19","id":"1.2.19"},{"dirName":"1.2.18","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.18","id":"1.2.18"},{"dirName":"1.2.17","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.17","id":"1.2.17"},{"dirName":"1.2.16","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.16","id":"1.2.16"},{"dirName":"1.2.15 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.15","id":"1.2.15"},{"dirName":"1.2.14 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.14","id":"1.2.14"},{"dirName":"1.2.13 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.13","id":"1.2.13"},{"dirName":"1.2.12 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.12","id":"1.2.12"},{"dirName":"1.2.11 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.11","id":"1.2.11"},{"dirName":"1.2.10 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.10","id":"1.2.10"},{"dirName":"1.2.9 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.9","id":"1.2.9"},{"dirName":"1.2.8","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.8","id":"1.2.8"},{"dirName":"1.2.7","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.7","id":"1.2.7"},{"dirName":"1.2.6","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.6","id":"1.2.6"},{"dirName":"1.2.5 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.5","id":"1.2.5"},{"dirName":"1.2.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.4","id":"1.2.4"},{"dirName":"1.2.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.3","id":"1.2.3"},{"dirName":"1.2.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.2","id":"1.2.2"},{"dirName":"1.2.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.1","id":"1.2.1"},{"dirName":"1.2.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.0","id":"1.2.0"}]},{"dirName":"1.2.x archived versions","level":1,"position":0,"isDir":false,"url":"/downloads/archived","id":"archived"},{"dirName":"Release Note","level":1,"position":0,"isDir":false,"url":"/downloads/RELEASE_NOTE","id":"RELEASE_NOTE"},{"dirName":"Swan Lake Release Notes","level":1,"position":0,"isDir":false,"url":"/downloads/swan-lake-release-notes","id":"swan-lake-release-notes"},{"dirName":"Swan Lake archived versions","level":1,"position":0,"isDir":false,"url":"/downloads/swan-lake-archived","id":"swan-lake-archived"},{"dirName":"1.1.x release notes","level":1,"position":3,"isDir":true,"url":"/downloads/1.1.x-release-notes","id":"1.1.x-release-notes","subDirectories":[{"dirName":"1.1.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.4","id":"1.1.4","subDirectories":[]},{"dirName":"1.1.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.3","id":"1.1.3","subDirectories":[]},{"dirName":"1.1.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.2","id":"1.1.2","subDirectories":[]},{"dirName":"1.1.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.1","id":"1.1.1","subDirectories":[]},{"dirName":"1.1.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.0","id":"1.1.0","subDirectories":[]}]},{"dirName":"1.0.x. release notes","level":1,"position":4,"isDir":true,"url":"/downloads/1.0.x-release-notes","id":"1.0.x-release-notes","subDirectories":[{"dirName":"1.0.5","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.5","id":"1.0.5","subDirectories":[]},{"dirName":"1.0.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.4","id":"1.0.4","subDirectories":[]},{"dirName":"1.0.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.3","id":"1.0.3","subDirectories":[]},{"dirName":"1.0.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.2","id":"1.0.2","subDirectories":[]},{"dirName":"1.0.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.1","id":"1.0.1","subDirectories":[]},{"dirName":"1.0.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.0","id":"1.0.0","subDirectories":[]}]},{"dirName":"0.9.x release notes","level":1,"position":5,"isDir":true,"url":"/downloads/0.9.x-release-notes","id":"0.9.x-release-notes","subDirectories":[{"dirName":"0.991.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.991.0","id":"0.991.0","subDirectories":[]},{"dirName":"0.990.3","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.3","id":"0.990.3","subDirectories":[]},{"dirName":"0.990.2","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.2","id":"0.990.2","subDirectories":[]},{"dirName":"0.990.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.1","id":"0.990.1","subDirectories":[]},{"dirName":"0.990.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.0","id":"0.990.0","subDirectories":[]},{"dirName":"0.983.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.983.0","id":"0.983.0","subDirectories":[]},{"dirName":"0.982.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.982.0","id":"0.982.0","subDirectories":[]},{"dirName":"0.981.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.981.1","id":"0.981.1","subDirectories":[]},{"dirName":"0.981.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.981.0","id":"0.981.0","subDirectories":[]},{"dirName":"0.980.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.980.1","id":"0.980.1","subDirectories":[]},{"dirName":"0.980.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.980.0","id":"0.980.0","subDirectories":[]},{"dirName":"0.975.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.975.0","id":"0.975.0","subDirectories":[]},{"dirName":"0.970.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.970.1","id":"0.970.1","subDirectories":[]},{"dirName":"0.970.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.970.0","id":"0.970.0","subDirectories":[]}]},{"dirName":"stable release notes","level":1,"position":0,"isDir":true,"url":"/downloads/stable-release-notes","id":"stable-release-notes","subDirectories":[{"dirName":"0.970.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.970.0","id":"0.970.0","subDirectories":[]},{"dirName":"1.2.14","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.14","id":"1.2.14","subDirectories":[]},{"dirName":"1.1.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.2","id":"1.1.2","subDirectories":[]},{"dirName":"1.0.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.3","id":"1.0.3","subDirectories":[]},{"dirName":"1.2.7","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.7","id":"1.2.7","subDirectories":[]},{"dirName":"1.2.13","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.13","id":"1.2.13","subDirectories":[]},{"dirName":"1.2.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.0","id":"1.2.0","subDirectories":[]},{"dirName":"0.980.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.980.1","id":"0.980.1","subDirectories":[]},{"dirName":"1.2.8","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.8","id":"1.2.8","subDirectories":[]},{"dirName":"1.2.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.4","id":"1.2.4","subDirectories":[]},{"dirName":"1.2.10","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.10","id":"1.2.10","subDirectories":[]},{"dirName":"1.0.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.1","id":"1.0.1","subDirectories":[]},{"dirName":"1.2.5","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.5","id":"1.2.5","subDirectories":[]},{"dirName":"0.990.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.0","id":"0.990.0","subDirectories":[]},{"dirName":"0.970.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.970.1","id":"0.970.1","subDirectories":[]},{"dirName":"1.0.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.4","id":"1.0.4","subDirectories":[]},{"dirName":"1.1.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.1","id":"1.1.1","subDirectories":[]},{"dirName":"1.1.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.3","id":"1.1.3","subDirectories":[]},{"dirName":"0.981.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.981.1","id":"0.981.1","subDirectories":[]},{"dirName":"1.0.5","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.5","id":"1.0.5","subDirectories":[]},{"dirName":"0.983.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.983.0","id":"0.983.0","subDirectories":[]},{"dirName":"0.981.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.981.0","id":"0.981.0","subDirectories":[]},{"dirName":"0.975.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.975.0","id":"0.975.0","subDirectories":[]},{"dirName":"1.2.11","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.11","id":"1.2.11","subDirectories":[]},{"dirName":"1.2.12","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.12","id":"1.2.12","subDirectories":[]},{"dirName":"0.980.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.980.0","id":"0.980.0","subDirectories":[]},{"dirName":"1.2.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.1","id":"1.2.1","subDirectories":[]},{"dirName":"1.1.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.4","id":"1.1.4","subDirectories":[]},{"dirName":"1.2.9","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.9","id":"1.2.9","subDirectories":[]},{"dirName":"1.2.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.2","id":"1.2.2","subDirectories":[]},{"dirName":"1.2.6","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.6","id":"1.2.6","subDirectories":[]},{"dirName":"1.0.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.0","id":"1.0.0","subDirectories":[]},{"dirName":"0.990.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.3","id":"0.990.3","subDirectories":[]},{"dirName":"0.990.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.1","id":"0.990.1","subDirectories":[]},{"dirName":"0.991.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.991.0","id":"0.991.0","subDirectories":[]},{"dirName":"1.2.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.3","id":"1.2.3","subDirectories":[]},{"dirName":"1.0.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.2","id":"1.0.2","subDirectories":[]},{"dirName":"0.982.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.982.0","id":"0.982.0","subDirectories":[]},{"dirName":"0.990.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.2","id":"0.990.2","subDirectories":[]},{"dirName":"1.1.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.0","id":"1.1.0","subDirectories":[]}]},{"dirName":" 1.2.x Release Notes Old","level":1,"position":0,"isDir":false,"url":"/downloads/release-notes","id":"release-notes"}]}')}}]);