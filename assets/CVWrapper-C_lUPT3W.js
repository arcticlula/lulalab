import{j as X,a8 as Z,bC as ee,m as a,t as s,n as _,d as x,z as O,B as w,bD as te,A as ie,g as R,G as M,h as n,U as k,q as z,c as ne,F as re,r as V,x as L,bi as oe,i as ae,ai as C,ba as le,a5 as E,R as I,L as v,T as m,P as f,am as $,M as g,a2 as ce,K as y,bE as se,V as F,$ as B,a3 as S,bF as de,Y as D,a0 as me,a1 as he,a6 as ue,bq as ge}from"./index-D35f3XMT.js";import{_ as pe,a as _e}from"./Grid-Do1vdrDQ.js";import"./next-frame-once-C5Ksf8W7.js";let W=!1;function fe(){if(X&&window.CSS&&!W&&(W=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function ve(e){const{textColor3:t,infoColor:i,errorColor:c,successColor:r,warningColor:h,textColor1:u,textColor2:l,railColor:d,fontWeightStrong:p,fontSize:o}=e;return Object.assign(Object.assign({},ee),{contentFontSize:o,titleFontWeight:p,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${i}`,circleBorderError:`2px solid ${c}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${h}`,iconColor:t,iconColorInfo:i,iconColorError:c,iconColorSuccess:r,iconColorWarning:h,titleTextColor:u,contentTextColor:l,metaTextColor:t,lineColor:d})}const xe={common:Z,self:ve},be=a("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[a("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),a("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[a("thing-header-wrapper",`
 flex: 1;
 `)]),a("thing-main",`
 flex-grow: 1;
 `,[a("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[s("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),s("description",[_("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),s("content",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("footer",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("action",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),ze=Object.assign(Object.assign({},w.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),Ce=x({name:"Thing",props:ze,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:i,inlineThemeDisabled:c,mergedRtlRef:r}=O(e),h=w("Thing","-thing",be,te,e,i),u=ie("Thing",r,i),l=R(()=>{const{self:{titleTextColor:p,textColor:o,titleFontWeight:b,fontSize:T},common:{cubicBezierEaseInOut:P}}=h.value;return{"--n-bezier":P,"--n-font-size":T,"--n-text-color":o,"--n-title-font-weight":b,"--n-title-text-color":p}}),d=c?M("thing",void 0,l,e):void 0;return()=>{var p;const{value:o}=i,b=u?u.value:!1;return(p=d==null?void 0:d.onRender)===null||p===void 0||p.call(d),n("div",{class:[`${o}-thing`,d==null?void 0:d.themeClass,b&&`${o}-thing--rtl`],style:c?void 0:l.value},t.avatar&&e.contentIndented?n("div",{class:`${o}-thing-avatar`},t.avatar()):null,n("div",{class:`${o}-thing-main`},!e.contentIndented&&(t.header||e.title||t["header-extra"]||e.titleExtra||t.avatar)?n("div",{class:`${o}-thing-avatar-header-wrapper`},t.avatar?n("div",{class:`${o}-thing-avatar`},t.avatar()):null,t.header||e.title||t["header-extra"]||e.titleExtra?n("div",{class:`${o}-thing-header-wrapper`},n("div",{class:`${o}-thing-header`},t.header||e.title?n("div",{class:`${o}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?n("div",{class:`${o}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null),t.description||e.description?n("div",{class:[`${o}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null):null):n(k,null,t.header||e.title||t["header-extra"]||e.titleExtra?n("div",{class:`${o}-thing-header`},t.header||e.title?n("div",{class:`${o}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?n("div",{class:`${o}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null):null,t.description||e.description?n("div",{class:[`${o}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null),t.default||e.content?n("div",{class:[`${o}-thing-main__content`,e.contentClass],style:e.contentStyle},t.default?t.default():e.content):null,t.footer?n("div",{class:`${o}-thing-main__footer`},t.footer()):null,t.action?n("div",{class:`${o}-thing-main__action`},t.action()):null))}}}),H=1.25,ye=a("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${H};
`,[z("horizontal",`
 flex-direction: row;
 `,[_(">",[a("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[z("dashed-line-type",[_(">",[a("timeline-item-timeline",[s("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),_(">",[a("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[_(">",[s("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),a("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[s("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),z("right-placement",[a("timeline-item",[a("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),z("left-placement",[a("timeline-item",[a("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 left: 0;
 `)])]),a("timeline-item",`
 position: relative;
 `,[_("&:last-child",[a("timeline-item-timeline",[s("line",`
 display: none;
 `)]),a("timeline-item-content",[s("meta",`
 margin-bottom: 0;
 `)])]),a("timeline-item-content",[s("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),s("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),s("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),z("dashed-line-type",[a("timeline-item-timeline",[s("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),a("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${H} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[s("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),s("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),s("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),$e=Object.assign(Object.assign({},w.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),N=ne("n-timeline"),Se=x({name:"Timeline",props:$e,setup(e,{slots:t}){const{mergedClsPrefixRef:i}=O(e),c=w("Timeline","-timeline",ye,xe,e,i);return re(N,{props:e,mergedThemeRef:c,mergedClsPrefixRef:i}),()=>{const{value:r}=i;return n("div",{class:[`${r}-timeline`,e.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${e.size}-size`,!e.horizontal&&`${r}-timeline--${e.itemPlacement}-placement`]},t)}}}),we={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Ee=x({name:"TimelineItem",props:we,slots:Object,setup(e){const t=ae(N);t||oe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),fe();const{inlineThemeDisabled:i}=O(),c=R(()=>{const{props:{size:h,iconSize:u},mergedThemeRef:l}=t,{type:d}=e,{self:{titleTextColor:p,contentTextColor:o,metaTextColor:b,lineColor:T,titleFontWeight:P,contentFontSize:K,[C("iconSize",h)]:J,[C("titleMargin",h)]:q,[C("titleFontSize",h)]:U,[C("circleBorder",d)]:G,[C("iconColor",d)]:Y},common:{cubicBezierEaseInOut:Q}}=l.value;return{"--n-bezier":Q,"--n-circle-border":G,"--n-icon-color":Y,"--n-content-font-size":K,"--n-content-text-color":o,"--n-line-color":T,"--n-meta-text-color":b,"--n-title-font-size":U,"--n-title-font-weight":P,"--n-title-margin":q,"--n-title-text-color":p,"--n-icon-size":le(u)||J}}),r=i?M("timeline-item",R(()=>{const{props:{size:h,iconSize:u}}=t,{type:l}=e;return`${h[0]}${u||"a"}${l[0]}`}),c,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:i?void 0:c,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:i,$slots:c}=this;return i==null||i(),n("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},n("div",{class:`${e}-timeline-item-timeline`},n("div",{class:`${e}-timeline-item-timeline__line`}),V(c.icon,r=>r?n("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},r):n("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),n("div",{class:`${e}-timeline-item-content`},V(c.header,r=>r||this.title?n("div",{class:`${e}-timeline-item-content__title`},r||this.title):null),n("div",{class:`${e}-timeline-item-content__content`},L(c.default,()=>[this.content])),n("div",{class:`${e}-timeline-item-content__meta`},L(c.footer,()=>[this.time]))))}}),Te={};function Pe(e,t){const i=Ce,c=ce;return v(),I(c,null,{default:m(()=>[f(i,null,{header:m(()=>[$(e.$slots,"header")]),"header-extra":m(()=>[g("b",null,[$(e.$slots,"headerExtra")])]),description:m(()=>[$(e.$slots,"description")]),footer:m(()=>[$(e.$slots,"footer")]),_:3})]),_:3})}const Re=E(Te,[["render",Pe]]),A=[{title:"Web Developer",time:"August 2020 - October 2025",subtitle:"Fujifilm",description:"Web development - <i>full-stack</i> - in the medical field.",type:"Experience"},{title:"Web Developer",time:"November 2017 - July 2020",subtitle:"Dotlogic - IT Solutions",description:"Web development - <i>frontend</i> - in the medical field (cardiology), and some <i>hardware</i> projects.",type:"Experience"},{title:"Make Or Break",time:"September 8-12, 2017",subtitle:"48 Hour Hackathon",description:"Part of the winning team of the 2017 edition of <i>Make Or Break</i> in the <i>funny</i> category.",type:"Other"},{title:"Volunteer Tutor",time:"September 2016 - 2019",subtitle:"Já T'Explico",description:"Tutoring support for children and teenagers from 5th to 9th grade in the Porto district.",type:"Other"},{title:"ISEP - Porto School of Engineering",time:"September 2012 - August 2015",subtitle:"Bachelor in Electrical Engineering",description:"Rua Dr. António Benardino de Almeida, 431 - 4249-015 Porto",type:"Education"},{title:"Advanced Electronics Course - 175 Hours",time:"July 2013 - December 2013",subtitle:"ATEC",description:"Edf. Siemens, Av. Mário Brito (EN 107) 3570 - Freixieiro 4455-491 Perafita",type:"Education"}],j=e=>(me("data-v-f425534e"),e=e(),he(),e),Be={class:"about"},Oe=j(()=>g("h1",{class:"pink-text"},"Education",-1)),ke=j(()=>g("h1",{class:"blue-text"},"Other",-1)),Ie=j(()=>g("h1",{class:"white-text"},"Experience",-1)),je=["innerHTML"],Ve=["innerHTML"],Le=x({__name:"CV",setup(e){function t(i){return i==="Education"?"card-left":i==="Experience"?"card-right":"card-center"}return(i,c)=>{const r=se,h=_e,u=pe;return v(),y("div",Be,[f(r,{justify:"space-between"},{default:m(()=>[Oe,ke,Ie]),_:1}),f(u,{"y-gap":"16",cols:1},{default:m(()=>[(v(!0),y(k,null,F(D(A),(l,d)=>(v(),I(h,{key:d,class:de(["cv-entry",t(l.type)])},{default:m(()=>[f(Re,null,{header:m(()=>[g("span",{innerHTML:l.title},null,8,je)]),headerExtra:m(()=>[B(S(l.time),1)]),description:m(()=>[B(S(l.subtitle),1)]),footer:m(()=>[g("span",{innerHTML:l.description},null,8,Ve)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})])}}}),We=E(Le,[["__scopeId","data-v-f425534e"]]),He={class:"cv-container"},Me={class:"timeline-wrapper"},Fe={class:"timeline-content"},De="rgb(255,198,194)",Ne="rgb(250,233,218)",Ae="rgb(195,224,221)",Ke=x({__name:"CVResponsive",setup(e){function t(i){return i==="Education"?De:i==="Experience"?Ne:Ae}return(i,c)=>{const r=ue,h=Ee,u=Se;return v(),y("div",He,[g("div",Me,[f(u,{size:"large"},{default:m(()=>[(v(!0),y(k,null,F(D(A),(l,d)=>(v(),I(h,{key:d,color:t(l.type),time:l.time},{header:m(()=>[g("span",{style:ge({color:t(l.type),fontWeight:"bold",fontSize:"1rem"})},S(l.title),5)]),default:m(()=>[g("div",Fe,[f(r,{style:{margin:"0 0 8px 0","font-weight":"bold","font-size":"0.9rem",color:"#e2e2e2"}},{default:m(()=>[B(S(l.subtitle),1)]),_:2},1024),f(r,{style:{margin:"0",opacity:"0.8","line-height":"1.5","font-size":"0.7rem"},innerHTML:l.description},null,8,["innerHTML"])])]),_:2},1032,["color","time"]))),128))]),_:1})])])}}}),Je=E(Ke,[["__scopeId","data-v-dc08922c"]]),qe={class:"cv-wrapper"},Ue={class:"cv-desktop"},Ge={class:"cv-mobile"},Ye=x({__name:"CVWrapper",setup(e){return(t,i)=>(v(),y("div",qe,[g("div",Ue,[f(We)]),g("div",Ge,[f(Je)])]))}}),et=E(Ye,[["__scopeId","data-v-e6455dc2"]]);export{et as default};
