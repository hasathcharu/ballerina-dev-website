(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6327],{861:function(e,i,r){"use strict";r.d(i,{FT:function(){return t}});var a=r(7294),l=r(5893);const n=["as","disabled"];function t({tagName:e,disabled:i,href:r,target:a,rel:l,onClick:n,tabIndex:t=0,type:s}){e||(e=null!=r||null!=a||null!=l?"a":"button");const o={tagName:e};if("button"===e)return[{type:s||"button",disabled:i},o];const d=a=>{(i||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),i?a.stopPropagation():null==n||n(a)};return"a"===e&&(r||(r="#"),i&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:i?void 0:t,href:r,target:"a"===e?a:void 0,"aria-disabled":i||void 0,rel:"a"===e?l:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}const s=a.forwardRef(((e,i)=>{let{as:r,disabled:a}=e,s=function(e,i){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],i.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);const[o,{tagName:d}]=t(Object.assign({tagName:r,disabled:a},s));return(0,l.jsx)(d,Object.assign({},s,o,{ref:i}))}));s.displayName="Button",i.ZP=s},6248:function(e,i,r){"use strict";r.r(i),r.d(i,{default:function(){return o}});var a=r(5893),l=(r(7294),r(5607)),n=r(5640),t=r(2157),s=r.n(t);function o(e){var i=function(e,i){return e.position-i.position},r=function(e){u!==e&&(document.querySelectorAll("[item-id='"+u+"']")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id='"+u+"']")[0].getElementsByTagName("button")[0].style.fontWeight="500"),m&&m!==e&&(document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500"),p&&p!==e&&(document.querySelectorAll("[item-id="+p+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+p+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500")},t=function(e){var i=e.category;return(0,a.jsx)(l.Z.Item,{eventKey:i.id,className:s().acItem,children:i.isDir?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z.Header,{className:s().mainDir,onClick:function(){return r(i.id)},"item-id":i.id,children:i.dirName}),(0,a.jsx)(l.Z.Body,{className:s().accordionBody,children:(0,a.jsx)("ul",{className:s().firstTier,children:i.subDirectories?(0,a.jsx)(l.Z,{defaultActiveKey:m,children:(0,a.jsx)(o,{directories:i.subDirectories,activeKey:m})}):null})})]}):(0,a.jsx)("h2",{"item-id":i.id,className:"".concat(s().mainDir," accordion-header"),children:(0,a.jsx)("button",{className:c===i.id?"".concat(s().nonAcBtn," ").concat(s().active):"".concat(s().nonAcBtn),onClick:function(){return e=i.url,void(window.location.href=e);var e},children:i.dirName})})})},o=function(e){return e.directories.sort(i).map((function(e){return(0,a.jsx)(a.Fragment,{children:e.isDir&&e.position>0?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z.Item,{eventKey:e.id,className:s().acItem,children:[(0,a.jsx)(l.Z.Header,{onClick:function(){return r(e.id)},"item-id":e.id,children:e.dirName}),(0,a.jsx)(l.Z.Body,{className:s().acBody,children:(0,a.jsx)("ul",{className:s().secondTier,children:e.subDirectories?(0,a.jsx)(l.Z,{defaultActiveKey:p,children:(0,a.jsx)(f,{directories:e.subDirectories,activeKey:p})}):null})})]})}):e.position>0?(0,a.jsx)("li",{children:"API Docs"===e.dirName?(0,a.jsx)("a",{id:e.id,className:c===e.id?s().active:null,href:"".concat(n.O)?"".concat(n.O)+e.url:e.url,target:"_blank",rel:"noreferrer",children:e.dirName}):(0,a.jsx)("a",{id:e.id,className:c===e.id?s().active:null,href:"".concat(n.O)?"".concat(n.O)+e.url:e.url,children:e.dirName})},e.id):null})}))},d=e.launcher,c=e.id,u=e.mainDir,m=e.sub,p=e.third,v=e.Toc.subDirectories.sort(i);function f(e){return e.directories.sort(i).map((function(e){return(0,a.jsx)(a.Fragment,{children:e.isDir&&e.position>0?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z.Item,{eventKey:e.id,className:s().acItem,children:[(0,a.jsx)(l.Z.Header,{onClick:function(){return r(e.id)},"item-id":e.id,children:e.dirName}),(0,a.jsx)(l.Z.Body,{className:s().acBody,children:(0,a.jsx)("ul",{className:s().secondTier,children:e.subDirectories?(0,a.jsx)(l.Z,{defaultActiveKey:p,children:(0,a.jsx)(f,{directories:e.subDirectories,activeKey:p})}):null})})]})}):e.position>0?(0,a.jsx)("li",{children:(0,a.jsx)("a",{id:e.id,className:c===e.id?s().active:null,href:"".concat(n.O)?"".concat(n.O)+e.url:e.url,children:e.dirName})},e.id):null})}))}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Z,{defaultActiveKey:u,flush:!0,className:s().leftNavAccordian,children:v.map((function(e,i){return{learn:e.position>0?(0,a.jsx)(t,{category:e},i):null,rn:e.position>0?(0,a.jsx)(t,{category:e},i):null,archived:e.position>0?(0,a.jsx)(t,{category:e},i):null}[d]}))})})}},3286:function(e,i,r){"use strict";r.d(i,{Z:function(){return c}});var a=r(5893),l=r(9008),n=r(5152),t=r(478),s=r(682),o=r(1608),d=r(4564);function c(e){var i=e.children,c=(0,n.default)((function(){return Promise.all([r.e(8819),r.e(1915),r.e(2995)]).then(r.bind(r,9075))}),{loadableGenerated:{webpack:function(){return[9075]}},ssr:!1}),u=(0,n.default)((function(){return r.e(9332).then(r.bind(r,9332))}),{loadableGenerated:{webpack:function(){return[9332]}},ssr:!1});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@ballerinalang"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@ballerinalang"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{property:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PSL2TX4');"}}),(0,a.jsx)("script",{type:"text/javascript",crossOrigin:"true",src:"https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"}),(0,a.jsx)("script",{src:"https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",type:"text/javascript",charSet:"UTF-8","data-domain-script":"630ad396-5fd5-4745-92ae-2765dc8841ee",defer:!0})]}),(0,a.jsx)(u,{}),(0,a.jsxs)(t.Z,{gap:0,className:"main-wrapper",children:[(0,a.jsx)(c,{launcher:"docs"}),(0,a.jsx)(s.Z,{className:"wrap-page-content",fluid:!0,children:(0,a.jsx)(o.Z,{children:i})}),(0,a.jsx)(d.Z,{})]})]})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU",nonAcBtn:"LeftNav_nonAcBtn__RvVTg"}},5607:function(e,i,r){"use strict";r.d(i,{Z:function(){return B}});var a=r(4184),l=r.n(a),n=r(7294),t=r(5446),s=r(6792),o=r(6518);function d(e,i){return Array.isArray(e)?e.includes(i):e===i}const c=n.createContext({});c.displayName="AccordionContext";var u=c,m=r(5893);const p=n.forwardRef((({as:e="div",bsPrefix:i,className:r,children:a,eventKey:t,...c},p)=>{const{activeEventKey:v}=(0,n.useContext)(u);return i=(0,s.vE)(i,"accordion-collapse"),(0,m.jsx)(o.Z,{ref:p,in:d(v,t),...c,className:l()(r,i),children:(0,m.jsx)(e,{children:n.Children.only(a)})})}));p.displayName="AccordionCollapse";var v=p;const f=n.createContext({eventKey:""});f.displayName="AccordionItemContext";var g=f;const b=n.forwardRef((({as:e="div",bsPrefix:i,className:r,...a},t)=>{i=(0,s.vE)(i,"accordion-body");const{eventKey:o}=(0,n.useContext)(g);return(0,m.jsx)(v,{eventKey:o,children:(0,m.jsx)(e,{ref:t,...a,className:l()(r,i)})})}));b.displayName="AccordionBody";var N=b;const D=n.forwardRef((({as:e="button",bsPrefix:i,className:r,onClick:a,...t},o)=>{i=(0,s.vE)(i,"accordion-button");const{eventKey:c}=(0,n.useContext)(g),p=function(e,i){const{activeEventKey:r,onSelect:a,alwaysOpen:l}=(0,n.useContext)(u);return n=>{let t=e===r?null:e;l&&(t=Array.isArray(r)?r.includes(e)?r.filter((i=>i!==e)):[...r,e]:[e]),null==a||a(t,n),null==i||i(n)}}(c,a),{activeEventKey:v}=(0,n.useContext)(u);return"button"===e&&(t.type="button"),(0,m.jsx)(e,{ref:o,onClick:p,...t,"aria-expanded":c===v,className:l()(r,i,!d(v,c)&&"collapsed")})}));D.displayName="AccordionButton";var h=D;const y=n.forwardRef((({as:e="h2",bsPrefix:i,className:r,children:a,onClick:n,...t},o)=>(i=(0,s.vE)(i,"accordion-header"),(0,m.jsx)(e,{ref:o,...t,className:l()(r,i),children:(0,m.jsx)(h,{onClick:n,children:a})}))));y.displayName="AccordionHeader";var x=y;const j=n.forwardRef((({as:e="div",bsPrefix:i,className:r,eventKey:a,...t},o)=>{i=(0,s.vE)(i,"accordion-item");const d=(0,n.useMemo)((()=>({eventKey:a})),[a]);return(0,m.jsx)(g.Provider,{value:d,children:(0,m.jsx)(e,{ref:o,...t,className:l()(r,i)})})}));j.displayName="AccordionItem";var w=j;const k=n.forwardRef(((e,i)=>{const{as:r="div",activeKey:a,bsPrefix:o,className:d,onSelect:c,flush:p,alwaysOpen:v,...f}=(0,t.Ch)(e,{activeKey:"onSelect"}),g=(0,s.vE)(o,"accordion"),b=(0,n.useMemo)((()=>({activeEventKey:a,onSelect:c,alwaysOpen:v})),[a,c,v]);return(0,m.jsx)(u.Provider,{value:b,children:(0,m.jsx)(r,{ref:i,...f,className:l()(d,g,p&&`${g}-flush`)})})}));k.displayName="Accordion";var B=Object.assign(k,{Button:h,Collapse:v,Item:w,Header:x,Body:N})},5005:function(e,i,r){"use strict";var a=r(4184),l=r.n(a),n=r(7294),t=r(861),s=r(6792),o=r(5893);const d=n.forwardRef((({as:e,bsPrefix:i,variant:r,size:a,active:n,className:d,...c},u)=>{const m=(0,s.vE)(i,"btn"),[p,{tagName:v}]=(0,t.FT)({tagName:e,...c}),f=v;return(0,o.jsx)(f,{...p,...c,ref:u,className:l()(d,m,n&&"active",r&&`${m}-${r}`,a&&`${m}-${a}`,c.href&&c.disabled&&"disabled")})}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},i.Z=d},4819:function(e,i,r){"use strict";const a=r(7294).createContext(null);a.displayName="NavbarContext",i.Z=a},4077:function(e,i,r){"use strict";r.d(i,{Z:function(){return E}});var a=r(4184),l=r.n(a),n=r(8146),t=r(7294),s=r(5288),o=r(1068),d=r(6611),c=(0,d.Z)("offcanvas-body"),u=r(5257),m=r(3825),p=r(2785),v=r(6792),f=r(5893);const g={[u.d0]:"show",[u.cn]:"show"},b=t.forwardRef((({bsPrefix:e,className:i,children:r,...a},n)=>(e=(0,v.vE)(e,"offcanvas"),(0,f.jsx)(p.Z,{ref:n,addEndListener:m.Z,...a,childRef:r.ref,children:(a,n)=>t.cloneElement(r,{...n,className:l()(i,r.props.className,(a===u.d0||a===u.Ix)&&`${e}-toggling`,g[a])})}))));b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="OffcanvasToggling";var N=b,D=r(6467),h=r(4819),y=r(6695);const x=t.forwardRef((({bsPrefix:e,className:i,...r},a)=>(e=(0,v.vE)(e,"offcanvas-header"),(0,f.jsx)(y.Z,{ref:a,...r,className:l()(i,e)}))));x.displayName="OffcanvasHeader",x.defaultProps={closeLabel:"Close",closeButton:!1};var j=x;const w=(0,r(9602).Z)("h5");var k=(0,d.Z)("offcanvas-title",{Component:w}),B=r(9673);function _(e){return(0,f.jsx)(N,{...e})}function P(e){return(0,f.jsx)(o.Z,{...e})}const C=t.forwardRef((({bsPrefix:e,className:i,children:r,"aria-labelledby":a,placement:o,show:d,backdrop:c,keyboard:u,scroll:m,onEscapeKeyDown:p,onShow:g,onHide:b,container:N,autoFocus:y,enforceFocus:x,restoreFocus:j,restoreFocusOptions:w,onEntered:k,onExit:C,onExiting:E,onEnter:A,onEntering:T,onExited:L,backdropClassName:S,manager:I,...Z},O)=>{const R=(0,t.useRef)();e=(0,v.vE)(e,"offcanvas");const{onToggle:F}=(0,t.useContext)(h.Z)||{},K=(0,n.Z)((()=>{null==F||F(),null==b||b()})),q=(0,t.useMemo)((()=>({onHide:K})),[K]);const H=(0,t.useCallback)((i=>(0,f.jsx)("div",{...i,className:l()(`${e}-backdrop`,S)})),[S,e]);return(0,f.jsx)(D.Z.Provider,{value:q,children:(0,f.jsx)(s.Z,{show:d,ref:O,backdrop:c,container:N,keyboard:u,autoFocus:y,enforceFocus:x&&!m,restoreFocus:j,restoreFocusOptions:w,onEscapeKeyDown:p,onShow:g,onHide:K,onEnter:(e,...i)=>{e&&(e.style.visibility="visible"),null==A||A(e,...i)},onEntering:T,onEntered:k,onExit:C,onExiting:E,onExited:(e,...i)=>{e&&(e.style.visibility=""),null==L||L(...i)},manager:I||(m?(R.current||(R.current=new B.Z({handleContainerOverflow:!1})),R.current):(0,B.t)()),transition:_,backdropTransition:P,renderBackdrop:H,renderDialog:n=>(0,f.jsx)("div",{role:"dialog",...n,...Z,className:l()(i,e,`${e}-${o}`),"aria-labelledby":a,children:r})})})}));C.displayName="Offcanvas",C.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var E=Object.assign(C,{Body:c,Header:j,Title:k})},3403:function(e){"use strict";e.exports=JSON.parse('{"dirName":"swan lake","level":0,"position":0,"isDir":true,"url":"","id":"swan-lake","subDirectories":[{"dirName":"Learn the platform","level":1,"position":5,"isDir":true,"url":"swan-lake/learn-the-platform","id":"learn-the-platform","subDirectories":[{"dirName":"Native support","level":2,"position":9,"isDir":true,"url":"/learn/native-support","id":"native-support","subDirectories":[{"dirName":"[Experimental] Build a native executable","level":3,"position":1,"isDir":false,"url":"/learn/build-a-native-executable","id":"build-a-native-executable"}]},{"dirName":"Ballerina specifications","level":2,"position":8,"isDir":false,"url":"/learn/ballerina-specifications","id":"ballerina-specifications"},{"dirName":"Ballerina central","level":2,"position":7,"isDir":true,"url":"/learn/ballerina-central","id":"ballerina-central","subDirectories":[{"dirName":"Publish packages to Ballerina Central","level":3,"position":1,"isDir":false,"url":"/learn/publish-packages-to-ballerina-central","id":"publish-packages-to-ballerina-central"}]},{"dirName":"Configure & observe","level":2,"position":4,"isDir":true,"url":"/learn/configure-observe","id":"configure-observe","subDirectories":[{"dirName":"Configure Ballerina programs","level":3,"position":1,"isDir":true,"url":"/learn/configure-ballerina-programs","id":"configure-ballerina-programs","subDirectories":[{"dirName":"Configure a sample Ballerina service","level":4,"position":1,"isDir":false,"url":"/learn/configure-ballerina-programs/configure-a-sample-ballerina-service","id":"configure-a-sample-ballerina-service"},{"dirName":"Configure values ","level":4,"position":3,"isDir":false,"url":"/learn/configure-ballerina-programs/configure-values","id":"configure-values"},{"dirName":"Provide values to configurable variables","level":4,"position":2,"isDir":false,"url":"/learn/configure-ballerina-programs/provide-values-to-configurable-variables","id":"provide-values-to-configurable-variables"}]},{"dirName":"Observe Ballerina Programs","level":3,"position":2,"isDir":false,"url":"/learn/observe-ballerina-programs","id":"observe-ballerina-programs"}]},{"dirName":"Java interoperability","level":2,"position":5,"isDir":true,"url":"/learn/java-interoperability","id":"java-interoperability","subDirectories":[{"dirName":"Java interoperability guide","level":3,"position":2,"isDir":true,"url":"/learn/java-interoperability/java-interoperability-guide","id":"java-interoperability-guide","subDirectories":[{"dirName":"Java interoperability","level":4,"position":1,"isDir":false,"url":"/learn/java-interoperability-guide/java-interoperability","id":"java-interoperability"},{"dirName":"Ballerina FFI","level":4,"position":3,"isDir":false,"url":"/learn/java-interoperability-guide/ballerina-ffi","id":"ballerina-ffi"},{"dirName":"The Bindgen Tool","level":4,"position":2,"isDir":false,"url":"/learn/java-interoperability-guide/the-bindgen-tool","id":"the-bindgen-tool"}]},{"dirName":"Call Java code from Ballerina","level":3,"position":1,"isDir":false,"url":"/learn/call-java-code-from-ballerina","id":"call-java-code-from-ballerina"}]},{"dirName":"Ballerina tooling","level":2,"position":6,"isDir":true,"url":"/learn/ballerina-tooling","id":"ballerina-tooling","subDirectories":[{"dirName":"Visual Studio Code extension","level":3,"position":0,"isDir":false,"url":"https://wso2.com/ballerina/vscode/docs/","id":"visual-studio-code-extension"},{"dirName":"Ballerina Shell","level":3,"position":1,"isDir":false,"url":"/learn/ballerina-shell","id":"ballerina-shell"},{"dirName":"OpenAPI tool","level":3,"position":2,"isDir":false,"url":"/learn/openapi-tool","id":"openapi-tool"},{"dirName":"CLI documentation","level":3,"position":6,"isDir":true,"url":"/learn/ballerina-tooling/cli-documentation","id":"cli-documentation","subDirectories":[{"dirName":"AsyncAPI","level":4,"position":6,"isDir":false,"url":"/learn/cli-documentation/asyncapi","id":"asyncapi"},{"dirName":"CLI commands","level":4,"position":1,"isDir":false,"url":"/learn/cli-documentation/cli-commands","id":"cli-commands"},{"dirName":"GraphQL","level":4,"position":5,"isDir":false,"url":"/learn/cli-documentation/graphql","id":"graphql"},{"dirName":"OpenAPI ","level":4,"position":4,"isDir":false,"url":"/learn/cli-documentation/openapi","id":"openapi"},{"dirName":"gRPC/Protocol Buffers","level":4,"position":3,"isDir":false,"url":"/learn/cli-documentation/grpc","id":"grpc"},{"dirName":"Update Tool","level":4,"position":2,"isDir":false,"url":"/learn/cli-documentation/update-tool","id":"update-tool"}]},{"dirName":"GraphQL tool","level":3,"position":3,"isDir":false,"url":"/learn/graphql-tool","id":"graphql-tool"},{"dirName":"AsyncAPI tool","level":3,"position":4,"isDir":false,"url":"/learn/asyncapi-tool","id":"asyncapi-tool"},{"dirName":"Strand dump tool","level":3,"position":5,"isDir":false,"url":"/learn/strand-dump-tool","id":"strand-dump-tool"}]},{"dirName":"Source code & dependencies","level":2,"position":1,"isDir":true,"url":"/learn/source-code-dependencies","id":"source-code-dependencies","subDirectories":[{"dirName":"Package references","level":3,"position":2,"isDir":false,"url":"/learn/package-references","id":"package-references"},{"dirName":"Manage dependencies","level":3,"position":3,"isDir":false,"url":"/learn/manage-dependencies","id":"manage-dependencies"},{"dirName":"Style guide","level":3,"position":4,"isDir":true,"url":"/learn/style-guide","id":"style-guide","subDirectories":[{"dirName":"Coding conventions","level":4,"position":1,"isDir":false,"url":"/learn/style-guide/coding-conventions","id":"coding-conventions"},{"dirName":"Top-level definitions","level":4,"position":2,"isDir":false,"url":"/learn/style-guide/top-level-definitions","id":"top-level-definitions"},{"dirName":"Operators, keywords, and types","level":4,"position":3,"isDir":false,"url":"/learn/style-guide/operators-keywords-and-types","id":"operators-keywords-and-types"},{"dirName":"Statements","level":4,"position":4,"isDir":false,"url":"/learn/style-guide/statements","id":"statements"},{"dirName":"Expressions","level":4,"position":5,"isDir":false,"url":"/learn/style-guide/expressions","id":"expressions"},{"dirName":"Annotations, documentation and comments","level":4,"position":6,"isDir":false,"url":"/learn/style-guide/annotations-documentation-and-comments","id":"annotations-documentation-and-comments"},{"dirName":"coding conventions","level":4,"position":0,"isDir":true,"url":"/learn/style-guide/coding-conventions","id":"coding-conventions","subDirectories":[{"dirName":"README.md","level":5,"position":0,"isDir":false,"url":"/learn/style-guide/coding-conventions/README","id":"README"}]}]},{"dirName":"Organize Ballerina code","level":3,"position":1,"isDir":false,"url":"/learn/organize-ballerina-code","id":"organize-ballerina-code"}]},{"dirName":"Test, debug & document the code","level":2,"position":2,"isDir":true,"url":"/learn/test-document-the-code","id":"test-document-the-code","subDirectories":[{"dirName":"Generate code documentation","level":3,"position":3,"isDir":false,"url":"/learn/generate-code-documentation","id":"generate-code-documentation"},{"dirName":"Test Ballerina code","level":3,"position":1,"isDir":true,"url":"/learn/test-ballerina-code","id":"test-ballerina-code","subDirectories":[{"dirName":"Structure tests","level":4,"position":3,"isDir":false,"url":"/learn/test-ballerina-code/structure-tests","id":"structure-tests"},{"dirName":"Mocking","level":4,"position":9,"isDir":false,"url":"/learn/test-ballerina-code/mocking","id":"mocking"},{"dirName":"Test a simple function","level":4,"position":1,"isDir":false,"url":"/learn/test-ballerina-code/test-a-simple-function","id":"test-a-simple-function"},{"dirName":"Configure tests","level":4,"position":4,"isDir":false,"url":"/learn/test-ballerina-code/configure-tests","id":"configure-tests"},{"dirName":"Code coverage and reporting","level":4,"position":5,"isDir":false,"url":"/learn/test-ballerina-code/code-coverage-and-reporting","id":"code-coverage-and-reporting"},{"dirName":"Write tests","level":4,"position":2,"isDir":false,"url":"/learn/test-ballerina-code/write-tests","id":"write-tests"},{"dirName":"Define test groups","level":4,"position":7,"isDir":false,"url":"/learn/test-ballerina-code/define-test-groups","id":"define-test-groups"},{"dirName":"Test services and clients","level":4,"position":8,"isDir":false,"url":"/learn/test-ballerina-code/test-services-and-clients","id":"test-services-and-clients"},{"dirName":"Execute tests","level":4,"position":10,"isDir":false,"url":"/learn/test-ballerina-code/execute-tests","id":"execute-tests"},{"dirName":"Define data-driven tests","level":4,"position":6,"isDir":false,"url":"/learn/test-ballerina-code/define-data-driven-tests","id":"define-data-driven-tests"}]},{"dirName":"Debug Ballerina programs","level":3,"position":2,"isDir":false,"url":"/learn/debug-ballerina-programs","id":"debug-ballerina-programs"}]},{"dirName":"Run in the cloud","level":2,"position":3,"isDir":true,"url":"/learn/run-in-the-cloud","id":"run-in-the-cloud","subDirectories":[{"dirName":"Code to cloud","level":3,"position":1,"isDir":true,"url":"/learn/run-in-the-cloud/code-to-cloud","id":"code-to-cloud","subDirectories":[{"dirName":"Code to Cloud deployment","level":4,"position":1,"isDir":false,"url":"/learn/run-in-the-cloud/code-to-cloud/code-to-cloud-deployment","id":"code-to-cloud-deployment"}]},{"dirName":"Function as a service","level":3,"position":2,"isDir":true,"url":"/learn/run-in-the-cloud/function-as-a-service","id":"function-as-a-service","subDirectories":[{"dirName":"Azure Functions","level":4,"position":2,"isDir":false,"url":"/learn/run-in-the-cloud/function-as-a-service/azure-functions","id":"azure-functions"},{"dirName":"AWS Lambda","level":4,"position":1,"isDir":false,"url":"/learn/run-in-the-cloud/function-as-a-service/aws-lambda","id":"aws-lambda"}]}]}]},{"dirName":"Featured use cases","level":1,"position":4,"isDir":true,"url":"swan-lake/featured-use-cases","id":"featured-use-cases","subDirectories":[{"dirName":"Write a gRPC service with Ballerina","level":2,"position":2,"isDir":false,"url":"/learn/write-a-grpc-service-with-ballerina","id":"write-a-grpc-service-with-ballerina"},{"dirName":"Write a RESTful API with Ballerina","level":2,"position":1,"isDir":false,"url":"/learn/write-a-restful-api-with-ballerina","id":"write-a-restful-api-with-ballerina"},{"dirName":"Build a data service in Ballerina ","level":2,"position":5,"isDir":false,"url":"/learn/build-a-data-service-in-ballerina","id":"build-a-data-service-in-ballerina"},{"dirName":"Write a GraphQL API with Ballerina","level":2,"position":3,"isDir":false,"url":"/learn/write-a-graphql-api-with-ballerina","id":"write-a-graphql-api-with-ballerina"},{"dirName":"Work with data using queries in Ballerina","level":2,"position":4,"isDir":false,"url":"/learn/work-with-data-using-queries-in-ballerina","id":"work-with-data-using-queries-in-ballerina"},{"dirName":"Deploy Ballerina on Kubernetes","level":2,"position":6,"isDir":false,"url":"/learn/deploy-ballerina-on-kubernetes","id":"deploy-ballerina-on-kubernetes"}]},{"dirName":"Learn the language","level":1,"position":4,"isDir":true,"url":"swan-lake/learn-the-language","id":"learn-the-language","subDirectories":[{"dirName":"Library documentation","level":2,"position":0,"isDir":false,"url":"https://lib.ballerina.io/","id":"library-documentation"},{"dirName":"By example","level":2,"position":0,"isDir":false,"url":"/learn/by-example","id":"by-example"},{"dirName":"Language walkthrough","level":2,"position":3,"isDir":false,"url":"/learn/language-walkthrough","id":"language-walkthrough"},{"dirName":"Language basics","level":2,"position":1,"isDir":false,"url":"/learn/language-basics","id":"language-basics"},{"dirName":"Distinctive language features","level":2,"position":2,"isDir":true,"url":"/learn/distinctive-language-features","id":"distinctive-language-features","subDirectories":[{"dirName":"Concurrency ","level":3,"position":3,"isDir":false,"url":"/learn/distinctive-language-features/concurrency","id":"concurrency"},{"dirName":"Network interaction","level":3,"position":1,"isDir":false,"url":"/learn/distinctive-language-features/network-interaction","id":"network-interaction"},{"dirName":"Advanced, general-purpose language features","level":3,"position":4,"isDir":false,"url":"/learn/distinctive-language-features/advanced-general-purpose-language-features","id":"advanced-general-purpose-language-features"},{"dirName":"Data","level":3,"position":2,"isDir":false,"url":"/learn/distinctive-language-features/data","id":"data"}]}]},{"dirName":"Get started","level":0,"position":2,"isDir":false,"url":"/learn/get-started","id":"get-started"},{"dirName":"other","level":1,"position":0,"isDir":true,"url":"","id":"other","subDirectories":[{"dirName":"security","level":2,"position":0,"isDir":true,"url":"","id":"security","subDirectories":[{"dirName":"HTTP client authentication","level":3,"position":0,"isDir":false,"url":"","id":"http-client-authentication"},{"dirName":"HTTP listener authentication and authorization","level":3,"position":0,"isDir":false,"url":"","id":"http-listener-authentication-and-authorization"}]},{"dirName":"tooling guide","level":2,"position":0,"isDir":true,"url":"","id":"tooling-guide","subDirectories":[{"dirName":"intellij idea plugin","level":3,"position":0,"isDir":true,"url":"","id":"intellij-idea-plugin","subDirectories":[{"dirName":"Setting up IntelliJ IDEA","level":4,"position":0,"isDir":false,"url":"","id":"set-up-intellij-idea"},{"dirName":"set up intellij idea","level":4,"position":0,"isDir":true,"url":"","id":"set-up-intellij-idea","subDirectories":[{"dirName":"Using the IntelliJ Ballerina plugin","level":5,"position":0,"isDir":false,"url":"","id":"use-the-intellij-plugin 2"},{"dirName":"Using the IntelliJ Ballerina plugin","level":5,"position":0,"isDir":false,"url":"","id":"use-the-intellij-plugin"},{"dirName":"Using the features of the IntelliJ plugin","level":5,"position":0,"isDir":false,"url":"","id":"use-intellij-plugin-features"},{"dirName":"Using the features of the IntelliJ plugin","level":5,"position":0,"isDir":false,"url":"","id":"use-intellij-plugin-features 2"}]}]}]},{"dirName":"network communication","level":2,"position":0,"isDir":true,"url":"","id":"network-communication","subDirectories":[{"dirName":"HTTP","level":3,"position":0,"isDir":true,"url":"","id":"HTTP","subDirectories":[{"dirName":"http services","level":4,"position":0,"isDir":true,"url":"","id":"http-services","subDirectories":[{"dirName":"HTTP services","level":5,"position":0,"isDir":false,"url":"","id":"http-services"},{"dirName":"Secure communication","level":5,"position":0,"isDir":false,"url":"","id":"secure-communication"},{"dirName":"Multipart Mmssage handling","level":5,"position":0,"isDir":false,"url":"","id":"multipart-message-handling"},{"dirName":"Extended request/response access","level":5,"position":0,"isDir":false,"url":"","id":"extended-request-response-access"},{"dirName":"Payload data binding","level":5,"position":0,"isDir":false,"url":"","id":"payload-data-binding"}]},{"dirName":"HTTP","level":4,"position":0,"isDir":false,"url":"","id":"http"},{"dirName":"http clients","level":4,"position":0,"isDir":true,"url":"","id":"http-clients","subDirectories":[{"dirName":"Data streaming","level":5,"position":0,"isDir":false,"url":"","id":"data-streaming"},{"dirName":"Data binding","level":5,"position":0,"isDir":false,"url":"","id":"data-binding"},{"dirName":"HTTP clients","level":5,"position":0,"isDir":false,"url":"","id":"http-clients"},{"dirName":"Secure communication","level":5,"position":0,"isDir":false,"url":"","id":"secure-communication"},{"dirName":"Multipart message handling","level":5,"position":0,"isDir":false,"url":"","id":"multipart-message-handling"},{"dirName":"Communication resiliency","level":5,"position":0,"isDir":false,"url":"","id":"communication-resiliency"}]}]},{"dirName":"gRPC","level":3,"position":0,"isDir":true,"url":"","id":"gRPC","subDirectories":[{"dirName":"Performing gRPC streaming","level":4,"position":0,"isDir":false,"url":"","id":"perform-grpc-streaming"},{"dirName":"Defining the service interface ","level":4,"position":0,"isDir":false,"url":"","id":"define-the-service-interface"},{"dirName":"implement grpc services and clients","level":4,"position":0,"isDir":true,"url":"","id":"implement-grpc-services-and-clients","subDirectories":[{"dirName":"Implementing gRPC clients","level":5,"position":0,"isDir":false,"url":"","id":"implement-grpc-clients"},{"dirName":"Implementing gRPC services ","level":5,"position":0,"isDir":false,"url":"","id":"implement-grpc-services"}]}]},{"dirName":"WebSocket","level":3,"position":0,"isDir":true,"url":"","id":"WebSocket","subDirectories":[{"dirName":"Securing WebSocket communication","level":4,"position":0,"isDir":false,"url":"","id":"secure-websocket-communication"},{"dirName":"WebSocket","level":4,"position":0,"isDir":false,"url":"","id":"websocket"}]},{"dirName":"GraphQL","level":3,"position":0,"isDir":true,"url":"","id":"GraphQL","subDirectories":[{"dirName":"GraphQL","level":4,"position":0,"isDir":false,"url":"","id":"graphql"},{"dirName":"Implementing GraphQL services","level":4,"position":0,"isDir":false,"url":"","id":"implement-graphql-services"}]}]},{"dirName":"data and events processing","level":2,"position":0,"isDir":true,"url":"","id":"data-and-events-processing","subDirectories":[{"dirName":"Using language-integrated queries","level":3,"position":0,"isDir":false,"url":"","id":"use-language-integrated-queries"}]}]},{"dirName":"references","level":1,"position":0,"isDir":true,"url":"","id":"references","subDirectories":[{"dirName":"cli documentation","level":2,"position":0,"isDir":true,"url":"","id":"cli-documentation","subDirectories":[{"dirName":"AsyncAPI","level":3,"position":0,"isDir":false,"url":"","id":"asyncapi"},{"dirName":"CLI commands","level":3,"position":0,"isDir":false,"url":"","id":"cli-commands"},{"dirName":"GraphQL","level":3,"position":0,"isDir":false,"url":"","id":"graphql"},{"dirName":"OpenAPI ","level":3,"position":0,"isDir":false,"url":"","id":"openapi"},{"dirName":"gRPC/Protocol Buffers","level":3,"position":0,"isDir":false,"url":"","id":"grpc"},{"dirName":"Update Tool","level":3,"position":0,"isDir":false,"url":"","id":"update-tool"}]},{"dirName":"style guide","level":2,"position":0,"isDir":true,"url":"","id":"style-guide","subDirectories":[{"dirName":"Coding conventions","level":3,"position":0,"isDir":false,"url":"","id":"coding-conventions"},{"dirName":"coding conventions","level":3,"position":0,"isDir":true,"url":"","id":"coding-conventions","subDirectories":[{"dirName":"README.md","level":4,"position":0,"isDir":false,"url":"","id":"README"},{"dirName":"Statements","level":4,"position":0,"isDir":false,"url":"","id":"statements"},{"dirName":"Expressions","level":4,"position":0,"isDir":false,"url":"","id":"expressions"},{"dirName":"Top-level definitions","level":4,"position":0,"isDir":false,"url":"","id":"top-level-definitions"},{"dirName":"Operators, keywords, and types","level":4,"position":0,"isDir":false,"url":"","id":"operators-keywords-and-types"},{"dirName":"Annotations, documentation and comments","level":4,"position":0,"isDir":false,"url":"","id":"annotations-documentation-and-comments"}]}]},{"dirName":"language introduction","level":2,"position":0,"isDir":true,"url":"","id":"language-introduction","subDirectories":[{"dirName":"Ballerina _Swan_Lake_Presentation_Deck_V2.0.pdf","level":3,"position":0,"isDir":false,"url":"","id":"Ballerina _Swan_Lake_Presentation_Deck_V2.0.pdf"},{"dirName":"Language introduction","level":3,"position":0,"isDir":false,"url":"","id":"language-introduction"},{"dirName":"Ballerina_Swan_Lake_Presentation_Deck_V1.0.pdf","level":3,"position":0,"isDir":false,"url":"","id":"Ballerina_Swan_Lake_Presentation_Deck_V1.0.pdf"}]},{"dirName":"java interoperability","level":2,"position":0,"isDir":true,"url":"","id":"java-interoperability","subDirectories":[{"dirName":"Java interoperability","level":3,"position":0,"isDir":false,"url":"","id":"java-interoperability"},{"dirName":"Ballerina FFI","level":3,"position":0,"isDir":false,"url":"","id":"ballerina-ffi"},{"dirName":"The Bindgen Tool","level":3,"position":0,"isDir":false,"url":"","id":"the-bindgen-tool"}]}]},{"dirName":"Why Ballerina","level":1,"position":1,"isDir":true,"url":"swan-lake/why-ballerina","id":"why-ballerina","subDirectories":[{"dirName":"Reliable, maintainable","level":2,"position":6,"isDir":false,"url":"/why-ballerina/reliable-maintainable","id":"reliable-maintainable"},{"dirName":"Graphical","level":2,"position":4,"isDir":false,"url":"/why-ballerina/graphical","id":"graphical"},{"dirName":"Data oriented","level":2,"position":3,"isDir":false,"url":"/why-ballerina/data-oriented","id":"data-oriented"},{"dirName":"Cloud native","level":2,"position":1,"isDir":false,"url":"/why-ballerina/cloud-native","id":"cloud-native"},{"dirName":"Flexibly typed","level":2,"position":2,"isDir":false,"url":"/why-ballerina/flexibly-typed","id":"flexibly-typed"},{"dirName":"Concurrent","level":2,"position":5,"isDir":false,"url":"/why-ballerina/concurrent","id":"concurrent"}]},{"dirName":"slides","level":1,"position":0,"isDir":true,"url":"","id":"slides","subDirectories":[{"dirName":"language walkthrough","level":2,"position":0,"isDir":true,"url":"","id":"language-walkthrough","subDirectories":[{"dirName":"Language walkthrough","level":3,"position":0,"isDir":false,"url":"","id":"language-walkthrough"},{"dirName":"Ballerina_Language_Presentation-2021-01-29.pdf","level":3,"position":0,"isDir":false,"url":"","id":"Ballerina_Language_Presentation-2021-01-29.pdf"},{"dirName":"Ballerina_Language_Presentation-2021-03-08.pdf","level":3,"position":0,"isDir":false,"url":"","id":"Ballerina_Language_Presentation-2021-03-08.pdf"}]}]},{"dirName":"api docs","level":1,"position":0,"isDir":true,"url":"","id":"api-docs","subDirectories":[{"dirName":"ballerina","level":2,"position":0,"isDir":true,"url":"","id":"ballerina","subDirectories":[{"dirName":"<title>Redirecting&hellip;</title>","level":3,"position":0,"isDir":false,"url":"","id":"index.html"}]},{"dirName":"index.html","level":2,"position":0,"isDir":false,"url":"","id":"index.html"}]}]}')}}]);