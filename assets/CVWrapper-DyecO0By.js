import{D as G,aS as Z,I as l,J as c,L as v,d as b,V as R,X as T,aT as ee,Y as te,e as P,a0 as W,h as o,F as $,K as z,ab as ie,ac as ne,r as j,Q as H,aa as oe,a9 as re,$ as C,aU as ae,x as k,i as L,o as h,k as m,f as x,a4 as S,a as _,q as le,c as f,aV as se,l as w,g as F,m as B,t as E,a2 as ce,u as D,s as de,v as me,y as ue,av as he}from"./index-DnHCe6iX.js";import{_ as ge,a as pe}from"./Grid-Dw2Cmv5-.js";import{u as fe}from"./use-houdini-BVAvexcF.js";import"./next-frame-once-C5Ksf8W7.js";function _e(e){const{textColor3:t,infoColor:i,errorColor:s,successColor:r,warningColor:u,textColor1:p,textColor2:a,railColor:d,fontWeightStrong:g,fontSize:n}=e;return Object.assign(Object.assign({},Z),{contentFontSize:n,titleFontWeight:g,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${i}`,circleBorderError:`2px solid ${s}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${u}`,iconColor:t,iconColorInfo:i,iconColorError:s,iconColorSuccess:r,iconColorWarning:u,titleTextColor:p,contentTextColor:a,metaTextColor:t,lineColor:d})}const ve={common:G,self:_e},xe=l("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[l("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),l("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[l("thing-header-wrapper",`
 flex: 1;
 `)]),l("thing-main",`
 flex-grow: 1;
 `,[l("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[c("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),c("description",[v("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),c("content",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),c("footer",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),c("action",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),be=Object.assign(Object.assign({},T.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ye=b({name:"Thing",props:be,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedRtlRef:r}=R(e),u=T("Thing","-thing",xe,ee,e,i),p=te("Thing",r,i),a=P(()=>{const{self:{titleTextColor:g,textColor:n,titleFontWeight:y,fontSize:I},common:{cubicBezierEaseInOut:O}}=u.value;return{"--n-bezier":O,"--n-font-size":I,"--n-text-color":n,"--n-title-font-weight":y,"--n-title-text-color":g}}),d=s?W("thing",void 0,a,e):void 0;return()=>{var g;const{value:n}=i,y=p?p.value:!1;return(g=d==null?void 0:d.onRender)===null||g===void 0||g.call(d),o("div",{class:[`${n}-thing`,d==null?void 0:d.themeClass,y&&`${n}-thing--rtl`],style:s?void 0:a.value},t.avatar&&e.contentIndented?o("div",{class:`${n}-thing-avatar`},t.avatar()):null,o("div",{class:`${n}-thing-main`},!e.contentIndented&&(t.header||e.title||t["header-extra"]||e.titleExtra||t.avatar)?o("div",{class:`${n}-thing-avatar-header-wrapper`},t.avatar?o("div",{class:`${n}-thing-avatar`},t.avatar()):null,t.header||e.title||t["header-extra"]||e.titleExtra?o("div",{class:`${n}-thing-header-wrapper`},o("div",{class:`${n}-thing-header`},t.header||e.title?o("div",{class:`${n}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?o("div",{class:`${n}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null),t.description||e.description?o("div",{class:[`${n}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null):null):o($,null,t.header||e.title||t["header-extra"]||e.titleExtra?o("div",{class:`${n}-thing-header`},t.header||e.title?o("div",{class:`${n}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?o("div",{class:`${n}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null):null,t.description||e.description?o("div",{class:[`${n}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null),t.default||e.content?o("div",{class:[`${n}-thing-main__content`,e.contentClass],style:e.contentStyle},t.default?t.default():e.content):null,t.footer?o("div",{class:`${n}-thing-main__footer`},t.footer()):null,t.action?o("div",{class:`${n}-thing-main__action`},t.action()):null))}}}),V=1.25,ze=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${V};
`,[z("horizontal",`
 flex-direction: row;
 `,[v(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[z("dashed-line-type",[v(">",[l("timeline-item-timeline",[c("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),v(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[v(">",[c("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[c("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),z("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),z("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[v("&:last-child",[l("timeline-item-timeline",[c("line",`
 display: none;
 `)]),l("timeline-item-content",[c("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[c("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),c("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),c("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),z("dashed-line-type",[l("timeline-item-timeline",[c("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${V} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[c("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),c("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),c("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),Ce=Object.assign(Object.assign({},T.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),N=ie("n-timeline"),$e=b({name:"Timeline",props:Ce,setup(e,{slots:t}){const{mergedClsPrefixRef:i}=R(e),s=T("Timeline","-timeline",ze,ve,e,i);return ne(N,{props:e,mergedThemeRef:s,mergedClsPrefixRef:i}),()=>{const{value:r}=i;return o("div",{class:[`${r}-timeline`,e.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${e.size}-size`,!e.horizontal&&`${r}-timeline--${e.itemPlacement}-placement`]},t)}}}),Se={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},we=b({name:"TimelineItem",props:Se,slots:Object,setup(e){const t=re(N);t||oe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),fe();const{inlineThemeDisabled:i}=R(),s=P(()=>{const{props:{size:u,iconSize:p},mergedThemeRef:a}=t,{type:d}=e,{self:{titleTextColor:g,contentTextColor:n,metaTextColor:y,lineColor:I,titleFontWeight:O,contentFontSize:K,[C("iconSize",u)]:J,[C("titleMargin",u)]:q,[C("titleFontSize",u)]:U,[C("circleBorder",d)]:Y,[C("iconColor",d)]:Q},common:{cubicBezierEaseInOut:X}}=a.value;return{"--n-bezier":X,"--n-circle-border":Y,"--n-icon-color":Q,"--n-content-font-size":K,"--n-content-text-color":n,"--n-line-color":I,"--n-meta-text-color":y,"--n-title-font-size":U,"--n-title-font-weight":O,"--n-title-margin":q,"--n-title-text-color":g,"--n-icon-size":ae(p)||J}}),r=i?W("timeline-item",P(()=>{const{props:{size:u,iconSize:p}}=t,{type:a}=e;return`${u[0]}${p||"a"}${a[0]}`}),s,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:i?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:i,$slots:s}=this;return i==null||i(),o("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},o("div",{class:`${e}-timeline-item-timeline`},o("div",{class:`${e}-timeline-item-timeline__line`}),j(s.icon,r=>r?o("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},r):o("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),o("div",{class:`${e}-timeline-item-content`},j(s.header,r=>r||this.title?o("div",{class:`${e}-timeline-item-content__title`},r||this.title):null),o("div",{class:`${e}-timeline-item-content__content`},H(s.default,()=>[this.content])),o("div",{class:`${e}-timeline-item-content__meta`},H(s.footer,()=>[this.time]))))}}),Ee={};function Te(e,t){const i=ye,s=le;return h(),L(s,null,{default:m(()=>[x(i,null,{header:m(()=>[S(e.$slots,"header")]),"header-extra":m(()=>[_("b",null,[S(e.$slots,"headerExtra")])]),description:m(()=>[S(e.$slots,"description")]),footer:m(()=>[S(e.$slots,"footer")]),_:3})]),_:3})}const ke=k(Ee,[["render",Te]]),A=[{title:"Full-Stack Developer",time:"August 2020 - October 2025",subtitle:"Fujifilm",description:"Web development - <i>full-stack</i> - across internal tools and client-facing products in the medical field.",details:["Internal management app for overseeing and maintaining photo kiosks.","Design framework to standardize and speed up development across multiple Fujifilm projects.","<i>SYNAPSE Clinical Workflow Manager (CWM 5)</i> - involved from the inception of the latest version, contributing extensively to its development and feature implementation using a <i>microservices</i> architecture on both frontend and backend."],type:"Experience"},{title:"Software Engineer",time:"November 2017 - July 2020",subtitle:"Dotlogic - IT Solutions",description:"Architecture and development of web applications in the medical field, mostly <i>cardiology</i>. Responsible for frontend, backend and database design, with some <i>hardware</i> work along the way.",details:["Web apps for medical staff to report and manage patient exam data, tailored for cardiology and gastroenterology departments.","Signal viewer for analyzing long-duration heart monitor waveforms (e.g. 24-hour Holter data), including integration with the acquisition hardware.","Mobile web app that talks to a blood pressure monitor over <i>Bluetooth</i>, enabling real-time data capture, patient monitoring and automatic reporting back to the hospital system."],type:"Experience"},{title:"Make Or Break",time:"September 8-12, 2017",subtitle:"48 Hour Hackathon",description:"Part of the winning team of the 2017 edition of <i>Make Or Break</i> in the <i>funny</i> category. Built a web app to rate public restrooms in two days - plus a remote controlled toilet paper dispenser to go with it.",type:"Other"},{title:"Volunteer Tutor",time:"September 2016 - 2019",subtitle:"Já T'Explico",description:"Tutoring support for children and teenagers from 5th to 9th grade in the Porto district.",type:"Other"},{title:"ISEP - Porto School of Engineering",time:"2015 - 2018",subtitle:"Master's in Electrical and Computer Engineering",description:"Thesis: development of a <i>LED wall that responds to violin notes</i>, displaying dynamic patterns. Tested live in two small concerts.",type:"Education"},{title:"ISEP - Porto School of Engineering",time:"September 2012 - August 2015",subtitle:"Bachelor's in Electrical Engineering",description:"Thesis: <i>PID control of a drone's camera gimbal system</i>.",type:"Education"},{title:"Advanced Electronics Course - 175 Hours",time:"July 2013 - December 2013",subtitle:"ATEC",description:"Training in advanced electronic systems.<br/>Edf. Siemens, Av. Mário Brito (EN 107) 3570 - Freixieiro 4455-491 Perafita",type:"Education"}],M=e=>(de("data-v-caa36bf4"),e=e(),me(),e),Ie={class:"about"},Oe=M(()=>_("h1",{class:"pink-text"},"Education",-1)),Pe=M(()=>_("h1",{class:"blue-text"},"Other",-1)),Be=M(()=>_("h1",{class:"white-text"},"Experience",-1)),Re=["innerHTML"],Le=["innerHTML"],Me={key:0,class:"details"},je=["innerHTML"],He=b({__name:"CV",setup(e){function t(i){return i==="Education"?"card-left":i==="Experience"?"card-right":"card-center"}return(i,s)=>{const r=se,u=pe,p=ge;return h(),f("div",Ie,[x(r,{justify:"space-between"},{default:m(()=>[Oe,Pe,Be]),_:1}),x(p,{"y-gap":"16",cols:1},{default:m(()=>[(h(!0),f($,null,w(D(A),(a,d)=>(h(),L(u,{key:d,class:ce(["cv-entry",t(a.type)])},{default:m(()=>[x(ke,null,{header:m(()=>[_("span",{innerHTML:a.title},null,8,Re)]),headerExtra:m(()=>[B(E(a.time),1)]),description:m(()=>[B(E(a.subtitle),1)]),footer:m(()=>[_("span",{innerHTML:a.description},null,8,Le),a.details?(h(),f("ul",Me,[(h(!0),f($,null,w(a.details,(g,n)=>(h(),f("li",{key:n,innerHTML:g},null,8,je))),128))])):F("",!0)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})])}}}),Ve=k(He,[["__scopeId","data-v-caa36bf4"]]),We={class:"cv-container"},Fe={class:"timeline-wrapper"},De={class:"timeline-content"},Ne={key:0,class:"details"},Ae=["innerHTML"],Ke="rgb(255,198,194)",Je="rgb(250,233,218)",qe="rgb(195,224,221)",Ue=b({__name:"CVResponsive",setup(e){function t(i){return i==="Education"?Ke:i==="Experience"?Je:qe}return(i,s)=>{const r=ue,u=we,p=$e;return h(),f("div",We,[_("div",Fe,[x(p,{size:"large"},{default:m(()=>[(h(!0),f($,null,w(D(A),(a,d)=>(h(),L(u,{key:d,color:t(a.type),time:a.time},{header:m(()=>[_("span",{style:he({color:t(a.type),fontWeight:"bold",fontSize:"1rem"})},E(a.title),5)]),default:m(()=>[_("div",De,[x(r,{style:{margin:"0 0 8px 0","font-weight":"bold","font-size":"0.9rem",color:"#e2e2e2"}},{default:m(()=>[B(E(a.subtitle),1)]),_:2},1024),x(r,{style:{margin:"0",opacity:"0.8","line-height":"1.5","font-size":"0.7rem"},innerHTML:a.description},null,8,["innerHTML"]),a.details?(h(),f("ul",Ne,[(h(!0),f($,null,w(a.details,(g,n)=>(h(),f("li",{key:n,innerHTML:g},null,8,Ae))),128))])):F("",!0)])]),_:2},1032,["color","time"]))),128))]),_:1})])])}}}),Ye=k(Ue,[["__scopeId","data-v-e3049b82"]]),Qe={class:"cv-wrapper"},Xe={class:"cv-desktop"},Ge={class:"cv-mobile"},Ze=b({__name:"CVWrapper",setup(e){return(t,i)=>(h(),f("div",Qe,[_("div",Xe,[x(Ve)]),_("div",Ge,[x(Ye)])]))}}),ot=k(Ze,[["__scopeId","data-v-e6455dc2"]]);export{ot as default};
