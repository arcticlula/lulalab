import{P as D}from"./ProjectTemplate-i65W0FP1.js";import{s as J,v as Q,x,y,z as T,A as X,C as S,D as b,E as R,d as E,G as p,H as Y,I as Z,J as ee,K as oe,L as te,M as se,W as re,O as ne,S as ie,P as ae,Q as le,R as q,T as ce,c as j,U as de,V as v,X as ue,r as H,f as he,w as o,o as pe,b as t,i as r,q as fe,j as f}from"./index-BFO6Uo6h.js";import{_ as ge}from"./a-HH7c26tV.js";import{_ as me,a as be}from"./MediaCarousel-BA9sdXiB.js";import"./projects-Ve-9N6PW.js";import"./next-frame-once-C5Ksf8W7.js";import"./useAvif-Cs7WzahU.js";function _e(l){const{lineHeight:e,borderRadius:c,fontWeightStrong:d,baseColor:i,dividerColor:m,actionColor:h,textColor1:s,textColor2:n,closeColorHover:g,closeColorPressed:$,closeIconColor:I,closeIconColorHover:w,closeIconColorPressed:u,infoColor:a,successColor:P,warningColor:k,errorColor:z,fontSize:A}=l;return Object.assign(Object.assign({},Q),{fontSize:A,lineHeight:e,titleFontWeight:d,borderRadius:c,border:`1px solid ${m}`,color:h,titleTextColor:s,iconColor:n,contentTextColor:n,closeBorderRadius:c,closeColorHover:g,closeColorPressed:$,closeIconColor:I,closeIconColorHover:w,closeIconColorPressed:u,borderInfo:`1px solid ${x(i,y(a,{alpha:.25}))}`,colorInfo:x(i,y(a,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:a,contentTextColorInfo:n,closeColorHoverInfo:g,closeColorPressedInfo:$,closeIconColorInfo:I,closeIconColorHoverInfo:w,closeIconColorPressedInfo:u,borderSuccess:`1px solid ${x(i,y(P,{alpha:.25}))}`,colorSuccess:x(i,y(P,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:P,contentTextColorSuccess:n,closeColorHoverSuccess:g,closeColorPressedSuccess:$,closeIconColorSuccess:I,closeIconColorHoverSuccess:w,closeIconColorPressedSuccess:u,borderWarning:`1px solid ${x(i,y(k,{alpha:.33}))}`,colorWarning:x(i,y(k,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:k,contentTextColorWarning:n,closeColorHoverWarning:g,closeColorPressedWarning:$,closeIconColorWarning:I,closeIconColorHoverWarning:w,closeIconColorPressedWarning:u,borderError:`1px solid ${x(i,y(z,{alpha:.25}))}`,colorError:x(i,y(z,{alpha:.08})),titleTextColorError:s,iconColorError:z,contentTextColorError:n,closeColorHoverError:g,closeColorPressedError:$,closeIconColorError:I,closeIconColorHoverError:w,closeIconColorPressedError:u})}const ve={common:J,self:_e},{cubicBezierEaseInOut:C,cubicBezierEaseOut:Ce,cubicBezierEaseIn:xe}=X;function ye({overflow:l="hidden",duration:e=".3s",originalTransition:c="",leavingDelay:d="0s",foldPadding:i=!1,enterToProps:m=void 0,leaveToProps:h=void 0,reverse:s=!1}={}){const n=s?"leave":"enter",g=s?"enter":"leave";return[T(`&.fade-in-height-expand-transition-${g}-from,
 &.fade-in-height-expand-transition-${n}-to`,Object.assign(Object.assign({},m),{opacity:1})),T(`&.fade-in-height-expand-transition-${g}-to,
 &.fade-in-height-expand-transition-${n}-from`,Object.assign(Object.assign({},h),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),T(`&.fade-in-height-expand-transition-${g}-active`,`
 overflow: ${l};
 transition:
 max-height ${e} ${C} ${d},
 opacity ${e} ${Ce} ${d},
 margin-top ${e} ${C} ${d},
 margin-bottom ${e} ${C} ${d},
 padding-top ${e} ${C} ${d},
 padding-bottom ${e} ${C} ${d}
 ${c?`,${c}`:""}
 `),T(`&.fade-in-height-expand-transition-${n}-active`,`
 overflow: ${l};
 transition:
 max-height ${e} ${C},
 opacity ${e} ${xe},
 margin-top ${e} ${C},
 margin-bottom ${e} ${C},
 padding-top ${e} ${C},
 padding-bottom ${e} ${C}
 ${c?`,${c}`:""}
 `)]}const $e=S("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[b("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),R("closable",[S("alert-body",[b("title",`
 padding-right: 24px;
 `)])]),b("icon",{color:"var(--n-icon-color)"}),S("alert-body",{padding:"var(--n-padding)"},[b("title",{color:"var(--n-title-text-color)"}),b("content",{color:"var(--n-content-text-color)"})]),ye({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),b("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),b("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),R("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),R("right-adjust",[S("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[b("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[T("& +",[b("content",{marginTop:"9px"})])]),b("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),b("icon",{transition:"color .3s var(--n-bezier)"})]),Ie=Object.assign(Object.assign({},q.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),we=E({name:"Alert",inheritAttrs:!1,props:Ie,slots:Object,setup(l){const{mergedClsPrefixRef:e,mergedBorderedRef:c,inlineThemeDisabled:d,mergedRtlRef:i}=le(l),m=q("Alert","-alert",$e,ve,l,e),h=ce("Alert",i,e),s=j(()=>{const{common:{cubicBezierEaseInOut:u},self:a}=m.value,{fontSize:P,borderRadius:k,titleFontWeight:z,lineHeight:A,iconSize:W,iconMargin:B,iconMarginRtl:O,closeIconSize:L,closeBorderRadius:V,closeSize:F,closeMargin:M,closeMarginRtl:U,padding:N}=a,{type:_}=l,{left:K,right:G}=de(B);return{"--n-bezier":u,"--n-color":a[v("color",_)],"--n-close-icon-size":L,"--n-close-border-radius":V,"--n-close-color-hover":a[v("closeColorHover",_)],"--n-close-color-pressed":a[v("closeColorPressed",_)],"--n-close-icon-color":a[v("closeIconColor",_)],"--n-close-icon-color-hover":a[v("closeIconColorHover",_)],"--n-close-icon-color-pressed":a[v("closeIconColorPressed",_)],"--n-icon-color":a[v("iconColor",_)],"--n-border":a[v("border",_)],"--n-title-text-color":a[v("titleTextColor",_)],"--n-content-text-color":a[v("contentTextColor",_)],"--n-line-height":A,"--n-border-radius":k,"--n-font-size":P,"--n-title-font-weight":z,"--n-icon-size":W,"--n-icon-margin":B,"--n-icon-margin-rtl":O,"--n-close-size":F,"--n-close-margin":M,"--n-close-margin-rtl":U,"--n-padding":N,"--n-icon-margin-left":K,"--n-icon-margin-right":G}}),n=d?ue("alert",j(()=>l.type[0]),s,l):void 0,g=H(!0),$=()=>{const{onAfterLeave:u,onAfterHide:a}=l;u&&u(),a&&a()};return{rtlEnabled:h,mergedClsPrefix:e,mergedBordered:c,visible:g,handleCloseClick:()=>{var u;Promise.resolve((u=l.onClose)===null||u===void 0?void 0:u.call(l)).then(a=>{a!==!1&&(g.value=!1)})},handleAfterLeave:()=>{$()},mergedTheme:m,cssVars:d?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var l;return(l=this.onRender)===null||l===void 0||l.call(this),p(Y,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:c}=this,d={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?p("div",Object.assign({},Z(this.$attrs,d)),this.closable&&p(ee,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&p("div",{class:`${e}-alert__border`}),this.showIcon&&p("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},oe(c.icon,()=>[p(te,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return p(ie,null);case"info":return p(ne,null);case"warning":return p(re,null);case"error":return p(se,null);default:return null}}})])),p("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ae(c.header,i=>{const m=i||this.title;return m?p("div",{class:`${e}-alert-body__title`},m):null}),c.default&&p("div",{class:`${e}-alert-body__content`},c))):null}})}}),Se=f("span",{class:"squid-text-alt"},"Pre-selected options for quick filtering - location, sport, current date/time and duration.",-1),Pe=f("span",{class:"squid-text-alt"},"Possibility of filtering courts by their availability of services like Urban Sports, or individual courts for Padel for example.",-1),ke=f("span",{class:"squid-text-alt"},"Sorted available courts by proximity to the chosen hour - aircourts listed results by courts and not time slots.",-1),ze=f("span",{class:"squid-text-alt"},"Ability to save last chosen sport, court type, and other preferences.",-1),Te=f("span",{class:"squid-text-alt"},"Club contacts, map integration, and a link to directly make a reservation in AirCourts.",-1),Ae=f("span",{class:"squid-text-alt"},"Built with both mobile and desktop in mind.",-1),Re=f("span",{class:"squid-text-alt"},"Direct querying of the AirCourts backend via a reverse proxy to avoid CORS issues.",-1),Be=f("span",{class:"squid-text-alt"},"Possibility to install as a web application on desktop and mobile.",-1),je=f("span",{class:"squid-text-alt"},"TypeScript",-1),Ee=f("span",{class:"squid-text-alt"},"Vue.js 3 with the Composition API",-1),qe=f("span",{class:"squid-text-alt"},"Naive UI",-1),He=f("span",{class:"squid-text-alt"},"Pinia",-1),We=f("span",{class:"squid-text-alt"},"Firebase Hosting",-1),Ke=E({__name:"BetterCourts",setup(l){const e=H([{type:"video",src:"better-courts/videos/screen-20251126-195515.mp4",description:"main screen recording - search UI"},{type:"image",src:"better-courts/images/Screenshot_2025-11-26-201436.jpg",description:"desktop UI"},{type:"image",src:"better-courts/images/Screenshot_20220721-134800.jpg",description:"results view for padel"},{type:"image",src:"better-courts/images/Screenshot_20220808-142725.jpg",description:"results view for football - notice how the same court repeats but in different time slots"},{type:"image",src:"better-courts/images/Screenshot_20220808-143031.jpg",description:"view after opening a result - you can click the first button to make a reservation in AirCourts"}]);return(c,d)=>{const i=ge,m=we,h=fe,s=me,n=be;return pe(),he(D,{id:"better-courts",media:e.value},{default:o(()=>[t(m,{title:"Deprecated",type:"warning"},{default:o(()=>[r(" I have to preface this by saying this project is marked as deprecated since the "),t(i,{href:"https://www.aircourts.com/",target:"_blank"},{default:o(()=>[r("AirCourts")]),_:1}),r(" API it relied on is available, but no longer in use - it has been replaced by "),t(i,{href:"https://www.playtomic.com/",target:"_blank"},{default:o(()=>[r("Playtomic")]),_:1}),r(". ")]),_:1}),t(h,{class:"squid-semi-title"},{default:o(()=>[r("The Story")]),_:1}),t(h,null,{default:o(()=>[r(" Once upon a time, scheduling football or padel courts in Portugal was done through the AirCourts app. Since I had to use it weekly - and was never a fan of their slow and cluttered schedule search - I built my own optimized interface on top of their API. To bypass CORS restrictions, the project used a publicly available reverse-proxy service, which proved more than sufficient for the intended usage - in order to stay within the usage limits. With this setup, it became easy to present the most relevant information upfront, such as club contacts and location maps, which were harder to access - even impossible sometimes - in the original app. ")]),_:1}),t(h,{class:"squid-semi-title"},{default:o(()=>[r("Key Features")]),_:1}),t(n,null,{default:o(()=>[t(s,null,{default:o(()=>[r("Search: "),t(n,null,{default:o(()=>[t(s,null,{default:o(()=>[r("Default values: "),Se]),_:1}),t(s,null,{default:o(()=>[r("Courts: "),Pe]),_:1}),t(s,null,{default:o(()=>[r("Sorting: "),ke]),_:1})]),_:1})]),_:1}),t(s,null,{default:o(()=>[r("Settings: "),ze]),_:1}),t(s,null,{default:o(()=>[r("Useful extra data: "),Te]),_:1}),t(s,null,{default:o(()=>[r("Responsive UI: "),Ae]),_:1}),t(s,null,{default:o(()=>[r("Reverse Proxy: "),Re]),_:1}),t(s,null,{default:o(()=>[r("Progressive Web App: "),Be]),_:1})]),_:1}),t(h,{class:"squid-semi-title"},{default:o(()=>[r("Tech Stack")]),_:1}),t(n,null,{default:o(()=>[t(s,null,{default:o(()=>[r("Language: "),je]),_:1}),t(s,null,{default:o(()=>[r("Framework: "),Ee]),_:1}),t(s,null,{default:o(()=>[r("UI Library: "),qe]),_:1}),t(s,null,{default:o(()=>[r("State Management: "),He]),_:1}),t(s,null,{default:o(()=>[r("Deployment: "),We]),_:1})]),_:1}),t(h,{class:"squid-semi-title"},{default:o(()=>[r("Challenges & Lessons Learned")]),_:1}),t(h,null,{default:o(()=>[r(" The main challenge in this project was working with an unofficial API, which meant dealing with potential changes that could break functionality. Additionally, implementing a reverse proxy was a little tricky for which i opted to use a public service to avoid hosting my own. I was a bit lucky in the sense i had some screenshots of the app while Aircourts was still active, or it would not be possible to show certain features. ")]),_:1}),t(h,{class:"squid-semi-title"},{default:o(()=>[r("Links")]),_:1}),t(n,null,{default:o(()=>[t(s,null,{default:o(()=>[t(i,{href:"https://better-courts.web.app/",target:"_blank"},{default:o(()=>[r("[BetterCourts]")]),_:1})]),_:1}),t(s,null,{default:o(()=>[t(i,{href:"https://github.com/arcticlula/Better-Courts",target:"_blank"},{default:o(()=>[r("[GitHub Repository]")]),_:1})]),_:1})]),_:1})]),_:1},8,["media"])}}});export{Ke as default};
