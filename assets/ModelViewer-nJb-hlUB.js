import{d as Yt,at as As,h as Me,a4 as Jd,b as st,aZ as Qd,z as Eo,a_ as Gs,w as en,A as Rs,a$ as eh,I as dt,L as nn,J as St,aK as th,aF as nh,Q as So,R as co,b0 as Xu,an as Dt,b1 as ih,al as Mo,aE as _r,a9 as kr,aI as Ii,K as Ht,aJ as Pa,b2 as La,r as Ia,aG as Cl,b3 as ju,V as Pl,Y as Ku,X as Rr,b4 as rh,e as tt,aM as yr,$ as Ki,Z as ro,ac as Na,a0 as Ll,b5 as oh,n as Hs,F as ji,b6 as sh,ao as ah,ab as lh,aj as Yu,b7 as qu,b8 as ch,b9 as uh,ba as dh,bb as hh,H as fh,bc as ph,aO as Ui,ar as mh,c as dn,o as kt,a as Xt,g as In,i as Ti,k as Sn,f as Ei,N as gh,u as cc,B as xh,l as Oo,m as ki,t as Do,s as vh,v as _h,x as yh}from"./index-DaEsXlX_.js";import{V as $u,_ as Zu,b as bh,h as uo,a as Ju,c as Qu,S as Th}from"./Checkbox-BIfnRahP.js";import{i as Il,b as Eh,N as Sh,B as Mh,V as Ah,d as uc,u as hs}from"./Image-C7RbrdnT.js";import{c as Rh,a as wh,b as Ch,u as dc}from"./use-locale-BNezgWum.js";import{_ as Ph}from"./Radio-BFFF_ldI.js";import{_ as Lh}from"./RadioGroup-B0q3oI9t.js";import"./next-frame-once-C5Ksf8W7.js";const li="v-hidden",Ih=Rh("[v-hidden]",{display:"none!important"}),hc=Yt({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=st(null),i=st(null);function r(s){const{value:a}=t,{getCounter:c,getTail:l}=n;let u;if(c!==void 0?u=c():u=i.value,!a||!u)return;u.hasAttribute(li)&&u.removeAttribute(li);const{children:d}=a;if(s.showAllItemsBeforeCalculate)for(const b of d)b.hasAttribute(li)&&b.removeAttribute(li);const p=a.offsetWidth,m=[],g=e.tail?l==null?void 0:l():null;let v=g?g.offsetWidth:0,f=!1;const h=a.children.length-(e.tail?1:0);for(let b=0;b<h-1;++b){if(b<0)continue;const y=d[b];if(f){y.hasAttribute(li)||y.setAttribute(li,"");continue}else y.hasAttribute(li)&&y.removeAttribute(li);const R=y.offsetWidth;if(v+=R,m[b]=R,v>p){const{updateCounter:M}=n;for(let C=b;C>=0;--C){const U=h-1-C;M!==void 0?M(U):u.textContent=`${U}`;const E=u.offsetWidth;if(v-=m[C],v+E<=p||C===0){f=!0,b=C-1,g&&(b===-1?(g.style.maxWidth=`${p-E}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:S}=n;S&&S(U);break}}}}const{onUpdateOverflow:_}=n;f?_!==void 0&&_(!0):(_!==void 0&&_(!1),u.setAttribute(li,""))}const o=Qd();return Ih.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wh,ssr:o}),Eo(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return As(()=>this.sync({showAllItemsBeforeCalculate:!1})),Me("div",{class:"v-overflow",ref:"selfRef"},[Jd(n,"default"),n.counter?n.counter():Me("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Nl(n,e){e&&(Eo(()=>{const{value:t}=n;t&&Gs.registerHandler(t,e)}),en(n,(t,i)=>{i&&Gs.unregisterHandler(i)},{deep:!1}),Rs(()=>{const{value:t}=n;t&&Gs.unregisterHandler(t)}))}function fc(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function Ws(n){const e=n.filter(t=>t!==void 0);if(e.length!==0)return e.length===1?e[0]:t=>{n.forEach(i=>{i&&i(t)})}}const ed=Yt({name:"Checkmark",render(){return Me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Me("g",{fill:"none"},Me("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Nh=Yt({name:"ChevronDown",render(){return Me("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Me("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Oh=Yt({name:"ChevronRight",render(){return Me("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Me("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Dh=eh("clear",()=>Me("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Me("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Me("g",{fill:"currentColor","fill-rule":"nonzero"},Me("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Fh=dt("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[nn(">",[St("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[nn("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),nn("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),St("placeholder",`
 display: flex;
 `),St("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[th({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Uh=Yt({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Xu("-base-clear",Fh,Dt(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return Me("div",{class:`${n}-base-clear`},Me(nh,null,{default:()=>{var e,t;return this.show?Me("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},So(this.$slots.icon,()=>[Me(co,{clsPrefix:n},{default:()=>Me(Dh,null)})])):Me("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),td=Yt({props:{onFocus:Function,onBlur:Function},setup(n){return()=>Me("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}}),kh=dt("base-menu-mask",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 14px;
 overflow: hidden;
`,[ih()]),Bh=Yt({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(n){Xu("-base-menu-mask",kh,Dt(n,"clsPrefix"));const e=st(null);let t=null;const i=st(!1);return Rs(()=>{t!==null&&window.clearTimeout(t)}),Object.assign({message:e,show:i},{showOnce(o,s=1500){t&&window.clearTimeout(t),i.value=!0,e.value=o,t=window.setTimeout(()=>{i.value=!1,e.value=null},s)}})},render(){return Me(Mo,{name:"fade-in-transition"},{default:()=>this.show?Me("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}}),pc=Yt({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t,nodePropsRef:i}=kr(Il);return{labelField:t,nodeProps:i,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,nodeProps:i,tmNode:{rawNode:r}}=this,o=i==null?void 0:i(r),s=e?e(r,!1):_r(r[this.labelField],r,!1),a=Me("div",Object.assign({},o,{class:[`${n}-base-select-group-header`,o==null?void 0:o.class]}),s);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}});function zh(n,e){return Me(Mo,{name:"fade-in-scale-up-transition"},{default:()=>n?Me(co,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>Me(ed)}):null})}const mc=Yt({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:p}=kr(Il),m=Ii(()=>{const{value:h}=t;return h?n.tmNode.key===h.key:!1});function g(h){const{tmNode:_}=n;_.disabled||d(h,_)}function v(h){const{tmNode:_}=n;_.disabled||p(h,_)}function f(h){const{tmNode:_}=n,{value:b}=m;_.disabled||b||p(h,_)}return{multiple:i,isGrouped:Ii(()=>{const{tmNode:h}=n,{parent:_}=h;return _&&_.rawNode.type==="group"}),showCheckmark:l,nodeProps:u,isPending:m,isSelected:Ii(()=>{const{value:h}=e,{value:_}=i;if(h===null)return!1;const b=n.tmNode.rawNode[c.value];if(_){const{value:y}=r;return y.has(b)}else return h===b}),labelField:a,renderLabel:o,renderOption:s,handleMouseMove:f,handleMouseEnter:v,handleClick:g}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,nodeProps:s,renderOption:a,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,p=zh(t,n),m=c?[c(e,t),o&&p]:[_r(e[this.labelField],e,t),o&&p],g=s==null?void 0:s(e),v=Me("div",Object.assign({},g,{class:[`${n}-base-select-option`,e.class,g==null?void 0:g.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:[(g==null?void 0:g.style)||"",e.style||""],onClick:Ws([l,g==null?void 0:g.onClick]),onMouseenter:Ws([u,g==null?void 0:g.onMouseenter]),onMousemove:Ws([d,g==null?void 0:g.onMousemove])}),Me("div",{class:`${n}-base-select-option__content`},m));return e.render?e.render({node:v,option:e,selected:t}):a?a({node:v,option:e,selected:t}):v}}),Vh=dt("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[dt("scrollbar",`
 max-height: var(--n-height);
 `),dt("virtual-list",`
 max-height: var(--n-height);
 `),dt("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[St("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),dt("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),dt("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),St("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),St("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),St("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),St("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),dt("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),dt("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Ht("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),nn("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),nn("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Ht("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Ht("pending",[nn("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Ht("selected",`
 color: var(--n-option-text-color-active);
 `,[nn("&::before",`
 background-color: var(--n-option-color-active);
 `),Ht("pending",[nn("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Ht("disabled",`
 cursor: not-allowed;
 `,[Pa("selected",`
 color: var(--n-option-text-color-disabled);
 `),Ht("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),St("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[La({enterScale:"0.5"})])])]),Gh=Yt({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Rr.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Pl(n),i=Ku("InternalSelectMenu",t,e),r=Rr("InternalSelectMenu","-internal-select-menu",Vh,rh,n,Dt(n,"clsPrefix")),o=st(null),s=st(null),a=st(null),c=tt(()=>n.treeMate.getFlattenedNodes()),l=tt(()=>bh(c.value)),u=st(null);function d(){const{treeMate:ie}=n;let oe=null;const{value:Ae}=n;Ae===null?oe=ie.getFirstAvailableNode():(n.multiple?oe=ie.getNode((Ae||[])[(Ae||[]).length-1]):oe=ie.getNode(Ae),(!oe||oe.disabled)&&(oe=ie.getFirstAvailableNode())),N(oe||null)}function p(){const{value:ie}=u;ie&&!n.treeMate.getNode(ie.key)&&(u.value=null)}let m;en(()=>n.show,ie=>{ie?m=en(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?d():p(),As(V)):p()},{immediate:!0}):m==null||m()},{immediate:!0}),Rs(()=>{m==null||m()});const g=tt(()=>yr(r.value.self[Ki("optionHeight",n.size)])),v=tt(()=>ro(r.value.self[Ki("padding",n.size)])),f=tt(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),h=tt(()=>{const ie=c.value;return ie&&ie.length===0});function _(ie){const{onToggle:oe}=n;oe&&oe(ie)}function b(ie){const{onScroll:oe}=n;oe&&oe(ie)}function y(ie){var oe;(oe=a.value)===null||oe===void 0||oe.sync(),b(ie)}function R(){var ie;(ie=a.value)===null||ie===void 0||ie.sync()}function M(){const{value:ie}=u;return ie||null}function C(ie,oe){oe.disabled||N(oe,!1)}function U(ie,oe){oe.disabled||_(oe)}function E(ie){var oe;uo(ie,"action")||(oe=n.onKeyup)===null||oe===void 0||oe.call(n,ie)}function S(ie){var oe;uo(ie,"action")||(oe=n.onKeydown)===null||oe===void 0||oe.call(n,ie)}function w(ie){var oe;(oe=n.onMousedown)===null||oe===void 0||oe.call(n,ie),!n.focusable&&ie.preventDefault()}function P(){const{value:ie}=u;ie&&N(ie.getNext({loop:!0}),!0)}function I(){const{value:ie}=u;ie&&N(ie.getPrev({loop:!0}),!0)}function N(ie,oe=!1){u.value=ie,oe&&V()}function V(){var ie,oe;const Ae=u.value;if(!Ae)return;const te=l.value(Ae.key);te!==null&&(n.virtualScroll?(ie=s.value)===null||ie===void 0||ie.scrollTo({index:te}):(oe=a.value)===null||oe===void 0||oe.scrollTo({index:te,elSize:g.value}))}function H(ie){var oe,Ae;!((oe=o.value)===null||oe===void 0)&&oe.contains(ie.target)&&((Ae=n.onFocus)===null||Ae===void 0||Ae.call(n,ie))}function Z(ie){var oe,Ae;!((oe=o.value)===null||oe===void 0)&&oe.contains(ie.relatedTarget)||(Ae=n.onBlur)===null||Ae===void 0||Ae.call(n,ie)}Na(Il,{handleOptionMouseEnter:C,handleOptionClick:U,valueSetRef:f,pendingTmNodeRef:u,nodePropsRef:Dt(n,"nodeProps"),showCheckmarkRef:Dt(n,"showCheckmark"),multipleRef:Dt(n,"multiple"),valueRef:Dt(n,"value"),renderLabelRef:Dt(n,"renderLabel"),renderOptionRef:Dt(n,"renderOption"),labelFieldRef:Dt(n,"labelField"),valueFieldRef:Dt(n,"valueField")}),Na(Eh,o),Eo(()=>{const{value:ie}=a;ie&&ie.sync()});const X=tt(()=>{const{size:ie}=n,{common:{cubicBezierEaseInOut:oe},self:{height:Ae,borderRadius:te,color:z,groupHeaderTextColor:j,actionDividerColor:ae,optionTextColorPressed:de,optionTextColor:_e,optionTextColorDisabled:Ne,optionTextColorActive:We,optionOpacityDisabled:Be,optionCheckColor:et,actionTextColor:W,optionColorPending:Ke,optionColorActive:J,loadingColor:me,loadingSize:Q,optionColorActivePending:be,[Ki("optionFontSize",ie)]:Ee,[Ki("optionHeight",ie)]:ze,[Ki("optionPadding",ie)]:T}}=r.value;return{"--n-height":Ae,"--n-action-divider-color":ae,"--n-action-text-color":W,"--n-bezier":oe,"--n-border-radius":te,"--n-color":z,"--n-option-font-size":Ee,"--n-group-header-text-color":j,"--n-option-check-color":et,"--n-option-color-pending":Ke,"--n-option-color-active":J,"--n-option-color-active-pending":be,"--n-option-height":ze,"--n-option-opacity-disabled":Be,"--n-option-text-color":_e,"--n-option-text-color-active":We,"--n-option-text-color-disabled":Ne,"--n-option-text-color-pressed":de,"--n-option-padding":T,"--n-option-padding-left":ro(T,"left"),"--n-option-padding-right":ro(T,"right"),"--n-loading-color":me,"--n-loading-size":Q}}),{inlineThemeDisabled:ne}=n,he=ne?Ll("internal-select-menu",tt(()=>n.size[0]),X,n):void 0,ve={selfRef:o,next:P,prev:I,getPendingTmNode:M};return Nl(o,n.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:e,rtlEnabled:i,virtualListRef:s,scrollbarRef:a,itemSize:g,padding:v,flattenedNodes:c,empty:h,virtualListContainer(){const{value:ie}=s;return ie==null?void 0:ie.listElRef},virtualListContent(){const{value:ie}=s;return ie==null?void 0:ie.itemsElRef},doScroll:b,handleFocusin:H,handleFocusout:Z,handleKeyUp:E,handleKeyDown:S,handleMouseDown:w,handleVirtualListResize:R,handleVirtualListScroll:y,cssVars:ne?void 0:X,themeClass:he==null?void 0:he.themeClass,onRender:he==null?void 0:he.onRender},ve)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),Me("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ia(n.header,s=>s&&Me("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},s)),this.loading?Me("div",{class:`${t}-base-select-menu__loading`},Me(Cl,{clsPrefix:t,strokeWidth:20})):this.empty?Me("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},So(n.empty,()=>[Me(Zu,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):Me(ju,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?Me($u,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?Me(pc,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:Me(mc,{clsPrefix:t,key:s.key,tmNode:s})}):Me("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?Me(pc,{key:s.key,clsPrefix:t,tmNode:s}):Me(mc,{clsPrefix:t,key:s.key,tmNode:s})))}),Ia(n.action,s=>s&&[Me("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),Me(td,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Hh=Yt({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return Me(Cl,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?Me(Uh,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>Me(co,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>So(e.default,()=>[Me(Nh,null)])})}):null})}}}),Wh=nn([dt("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[dt("base-loading",`
 color: var(--n-loading-color);
 `),dt("base-selection-tags","min-height: var(--n-height);"),St("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),St("state-border",`
 z-index: 1;
 border-color: #0000;
 `),dt("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[St("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),dt("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[St("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),dt("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[St("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),dt("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),dt("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[dt("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[St("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),St("render-label",`
 color: var(--n-text-color);
 `)]),Pa("disabled",[nn("&:hover",[St("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Ht("focus",[St("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Ht("active",[St("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),dt("base-selection-label","background-color: var(--n-color-active);"),dt("base-selection-tags","background-color: var(--n-color-active);")])]),Ht("disabled","cursor: not-allowed;",[St("arrow",`
 color: var(--n-arrow-color-disabled);
 `),dt("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[dt("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),St("render-label",`
 color: var(--n-text-color-disabled);
 `)]),dt("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),dt("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),dt("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[St("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),St("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>Ht(`${n}-status`,[St("state-border",`border: var(--n-border-${n});`),Pa("disabled",[nn("&:hover",[St("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),Ht("active",[St("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),dt("base-selection-label",`background-color: var(--n-color-active-${n});`),dt("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),Ht("focus",[St("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),dt("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),dt("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[nn("&:last-child","padding-right: 0;"),dt("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[St("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Xh=Yt({name:"InternalSelection",props:Object.assign(Object.assign({},Rr.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Pl(n),i=Ku("InternalSelection",t,e),r=st(null),o=st(null),s=st(null),a=st(null),c=st(null),l=st(null),u=st(null),d=st(null),p=st(null),m=st(null),g=st(!1),v=st(!1),f=st(!1),h=Rr("InternalSelection","-internal-selection",Wh,sh,n,Dt(n,"clsPrefix")),_=tt(()=>n.clearable&&!n.disabled&&(f.value||n.active)),b=tt(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):_r(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),y=tt(()=>{const x=n.selectedOption;if(x)return x[n.labelField]}),R=tt(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function M(){var x;const{value:A}=r;if(A){const{value:D}=o;D&&(D.style.width=`${A.offsetWidth}px`,n.maxTagCount!=="responsive"&&((x=p.value)===null||x===void 0||x.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:x}=m;x&&(x.style.display="none")}function U(){const{value:x}=m;x&&(x.style.display="inline-block")}en(Dt(n,"active"),x=>{x||C()}),en(Dt(n,"pattern"),()=>{n.multiple&&As(M)});function E(x){const{onFocus:A}=n;A&&A(x)}function S(x){const{onBlur:A}=n;A&&A(x)}function w(x){const{onDeleteOption:A}=n;A&&A(x)}function P(x){const{onClear:A}=n;A&&A(x)}function I(x){const{onPatternInput:A}=n;A&&A(x)}function N(x){var A;(!x.relatedTarget||!(!((A=s.value)===null||A===void 0)&&A.contains(x.relatedTarget)))&&E(x)}function V(x){var A;!((A=s.value)===null||A===void 0)&&A.contains(x.relatedTarget)||S(x)}function H(x){P(x)}function Z(){f.value=!0}function X(){f.value=!1}function ne(x){!n.active||!n.filterable||x.target!==o.value&&x.preventDefault()}function he(x){w(x)}const ve=st(!1);function ie(x){if(x.key==="Backspace"&&!ve.value&&!n.pattern.length){const{selectedOptions:A}=n;A!=null&&A.length&&he(A[A.length-1])}}let oe=null;function Ae(x){const{value:A}=r;if(A){const D=x.target.value;A.textContent=D,M()}n.ignoreComposition&&ve.value?oe=x:I(x)}function te(){ve.value=!0}function z(){ve.value=!1,n.ignoreComposition&&I(oe),oe=null}function j(x){var A;v.value=!0,(A=n.onPatternFocus)===null||A===void 0||A.call(n,x)}function ae(x){var A;v.value=!1,(A=n.onPatternBlur)===null||A===void 0||A.call(n,x)}function de(){var x,A;if(n.filterable)v.value=!1,(x=l.value)===null||x===void 0||x.blur(),(A=o.value)===null||A===void 0||A.blur();else if(n.multiple){const{value:D}=a;D==null||D.blur()}else{const{value:D}=c;D==null||D.blur()}}function _e(){var x,A,D;n.filterable?(v.value=!1,(x=l.value)===null||x===void 0||x.focus()):n.multiple?(A=a.value)===null||A===void 0||A.focus():(D=c.value)===null||D===void 0||D.focus()}function Ne(){const{value:x}=o;x&&(U(),x.focus())}function We(){const{value:x}=o;x&&x.blur()}function Be(x){const{value:A}=u;A&&A.setTextContent(`+${x}`)}function et(){const{value:x}=d;return x}function W(){return o.value}let Ke=null;function J(){Ke!==null&&window.clearTimeout(Ke)}function me(){n.active||(J(),Ke=window.setTimeout(()=>{R.value&&(g.value=!0)},100))}function Q(){J()}function be(x){x||(J(),g.value=!1)}en(R,x=>{x||(g.value=!1)}),Eo(()=>{ah(()=>{const x=l.value;x&&(n.disabled?x.removeAttribute("tabindex"):x.tabIndex=v.value?-1:0)})}),Nl(s,n.onResize);const{inlineThemeDisabled:Ee}=n,ze=tt(()=>{const{size:x}=n,{common:{cubicBezierEaseInOut:A},self:{fontWeight:D,borderRadius:O,color:F,placeholderColor:Y,textColor:K,paddingSingle:se,paddingMultiple:fe,caretColor:ee,colorDisabled:xe,textColorDisabled:Ve,placeholderColorDisabled:Xe,colorActive:Ie,boxShadowFocus:Ue,boxShadowActive:k,boxShadowHover:Ce,border:Re,borderFocus:Te,borderHover:B,borderActive:q,arrowColor:ye,arrowColorDisabled:De,loadingColor:Pe,colorActiveWarning:Se,boxShadowFocusWarning:we,boxShadowActiveWarning:Oe,boxShadowHoverWarning:Fe,borderWarning:Ye,borderFocusWarning:bt,borderHoverWarning:zt,borderActiveWarning:qt,colorActiveError:Pn,boxShadowFocusError:ai,boxShadowActiveError:Bn,boxShadowHoverError:re,borderError:le,borderFocusError:ge,borderHoverError:Le,borderActiveError:ke,clearColor:qe,clearColorHover:Ze,clearColorPressed:ct,clearSize:ut,arrowSize:gn,[Ki("height",x)]:L,[Ki("fontSize",x)]:G}}=h.value,ue=ro(se),pe=ro(fe);return{"--n-bezier":A,"--n-border":Re,"--n-border-active":q,"--n-border-focus":Te,"--n-border-hover":B,"--n-border-radius":O,"--n-box-shadow-active":k,"--n-box-shadow-focus":Ue,"--n-box-shadow-hover":Ce,"--n-caret-color":ee,"--n-color":F,"--n-color-active":Ie,"--n-color-disabled":xe,"--n-font-size":G,"--n-height":L,"--n-padding-single-top":ue.top,"--n-padding-multiple-top":pe.top,"--n-padding-single-right":ue.right,"--n-padding-multiple-right":pe.right,"--n-padding-single-left":ue.left,"--n-padding-multiple-left":pe.left,"--n-padding-single-bottom":ue.bottom,"--n-padding-multiple-bottom":pe.bottom,"--n-placeholder-color":Y,"--n-placeholder-color-disabled":Xe,"--n-text-color":K,"--n-text-color-disabled":Ve,"--n-arrow-color":ye,"--n-arrow-color-disabled":De,"--n-loading-color":Pe,"--n-color-active-warning":Se,"--n-box-shadow-focus-warning":we,"--n-box-shadow-active-warning":Oe,"--n-box-shadow-hover-warning":Fe,"--n-border-warning":Ye,"--n-border-focus-warning":bt,"--n-border-hover-warning":zt,"--n-border-active-warning":qt,"--n-color-active-error":Pn,"--n-box-shadow-focus-error":ai,"--n-box-shadow-active-error":Bn,"--n-box-shadow-hover-error":re,"--n-border-error":le,"--n-border-focus-error":ge,"--n-border-hover-error":Le,"--n-border-active-error":ke,"--n-clear-size":ut,"--n-clear-color":qe,"--n-clear-color-hover":Ze,"--n-clear-color-pressed":ct,"--n-arrow-size":gn,"--n-font-weight":D}}),T=Ee?Ll("internal-selection",tt(()=>n.size[0]),ze,n):void 0;return{mergedTheme:h,mergedClearable:_,mergedClsPrefix:e,rtlEnabled:i,patternInputFocused:v,filterablePlaceholder:b,label:y,selected:R,showTagsPanel:g,isComposing:ve,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:r,patternInputRef:o,selfRef:s,multipleElRef:a,singleElRef:c,patternInputWrapperRef:l,overflowRef:p,inputTagElRef:m,handleMouseDown:ne,handleFocusin:N,handleClear:H,handleMouseEnter:Z,handleMouseLeave:X,handleDeleteOption:he,handlePatternKeyDown:ie,handlePatternInputInput:Ae,handlePatternInputBlur:ae,handlePatternInputFocus:j,handleMouseEnterCounter:me,handleMouseLeaveCounter:Q,handleFocusout:V,handleCompositionEnd:z,handleCompositionStart:te,onPopoverUpdateShow:be,focus:_e,focusInput:Ne,blur:de,blurInput:We,updateCounter:Be,getCounter:et,getTail:W,renderLabel:n.renderLabel,cssVars:Ee?void 0:ze,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:a,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l==null||l();const p=o==="responsive",m=typeof o=="number",g=p||m,v=Me(oh,null,{default:()=>Me(Hh,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var h,_;return(_=(h=this.$slots).arrow)===null||_===void 0?void 0:_.call(h)}})});let f;if(e){const{labelField:h}=this,_=I=>Me("div",{class:`${a}-base-selection-tag-wrapper`,key:I.value},u?u({option:I,handleClose:()=>{this.handleDeleteOption(I)}}):Me(Hs,{size:t,closable:!I.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(I)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(I,!0):_r(I[h],I,!0)})),b=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(_),y=r?Me("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},Me("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),Me("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,R=p?()=>Me("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},Me(Hs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let M;if(m){const I=this.selectedOptions.length-o;I>0&&(M=Me("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},Me(Hs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${I}`})))}const C=p?r?Me(hc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R,tail:()=>y}):Me(hc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R}):m&&M?b().concat(M):b(),U=g?()=>Me("div",{class:`${a}-base-selection-popover`},p?b():this.selectedOptions.map(_)):void 0,E=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,w=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?Me("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},Me("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,P=r?Me("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},C,p?null:y,v):Me("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},C,v);f=Me(ji,null,g?Me(Sh,Object.assign({},E,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>P,default:U}):P,w)}else if(r){const h=this.pattern||this.isComposing,_=this.active?!h:!this.selected,b=this.active?!1:this.selected;f=Me("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:fc(this.label)},Me("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),b?Me("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},Me("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):_r(this.label,this.selectedOption,!0))):null,_?Me("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},Me("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else f=Me("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?Me("div",{class:`${a}-base-selection-input`,title:fc(this.label),key:"input"},Me("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):_r(this.label,this.selectedOption,!0))):Me("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},Me("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),v);return Me("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,n&&`${a}-base-selection--${n}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},f,s?Me("div",{class:`${a}-base-selection__border`}):null,s?Me("div",{class:`${a}-base-selection__state-border`}):null)}});function gc(n){return n.type==="group"}function jh(n){return n.type==="ignored"}function Kh(n,e){return{getIsGroup:gc,getIgnored:jh,getKey(i){return gc(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}const Ao=lh("n-cascader"),xc=Yt({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(n){const{expandTriggerRef:e,remoteRef:t,multipleRef:i,mergedValueRef:r,checkedKeysRef:o,indeterminateKeysRef:s,hoverKeyPathRef:a,keyboardKeyRef:c,loadingKeySetRef:l,cascadeRef:u,mergedCheckStrategyRef:d,onLoadRef:p,mergedClsPrefixRef:m,mergedThemeRef:g,labelFieldRef:v,showCheckboxRef:f,renderPrefixRef:h,renderSuffixRef:_,updateHoverKey:b,updateKeyboardKey:y,addLoadingKey:R,deleteLoadingKey:M,closeMenu:C,doCheck:U,doUncheck:E,renderLabelRef:S}=kr(Ao),w=tt(()=>n.tmNode.key),P=tt(()=>{const{value:de}=e,{value:_e}=t;return!_e&&de==="hover"}),I=tt(()=>{if(P.value)return te}),N=tt(()=>{if(P.value)return z}),V=Ii(()=>{const{value:de}=i;return de?o.value.includes(w.value):r.value===w.value}),H=Ii(()=>i.value?s.value.includes(w.value):!1),Z=Ii(()=>a.value.includes(w.value)),X=Ii(()=>{const{value:de}=c;return de===null?!1:de===w.value}),ne=Ii(()=>t.value?l.value.has(w.value):!1),he=tt(()=>n.tmNode.isLeaf),ve=tt(()=>n.tmNode.disabled),ie=tt(()=>n.tmNode.rawNode[v.value]),oe=tt(()=>n.tmNode.shallowLoaded);function Ae(de){if(ve.value)return;const{value:_e}=t,{value:Ne}=l,{value:We}=p,{value:Be}=w,{value:et}=he,{value:W}=oe;uo(de,"checkbox")||(_e&&!W&&!Ne.has(Be)&&We&&(R(Be),We(n.tmNode.rawNode).then(()=>{M(Be)}).catch(()=>{M(Be)})),b(Be),y(Be)),et&&ae()}function te(){if(!P.value||ve.value)return;const{value:de}=w;b(de),y(de)}function z(){P.value&&te()}function j(){const{value:de}=he;de||ae()}function ae(){const{value:de}=i,{value:_e}=w;de?H.value||V.value?E(_e):U(_e):(U(_e),C(!0))}return{checkStrategy:d,multiple:i,cascade:u,checked:V,indeterminate:H,hoverPending:Z,keyboardPending:X,isLoading:ne,showCheckbox:f,isLeaf:he,disabled:ve,label:ie,mergedClsPrefix:m,mergedTheme:g,handleClick:Ae,handleCheckboxUpdateValue:j,mergedHandleMouseEnter:I,mergedHandleMouseMove:N,renderLabel:S,renderPrefix:h,renderSuffix:_}},render(){const{mergedClsPrefix:n,showCheckbox:e,renderLabel:t,renderPrefix:i,renderSuffix:r}=this;let o=null;if(e||i){const c=this.showCheckbox?Me(Ju,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue}):null;o=Me("div",{class:`${n}-cascader-option__prefix`},i?i({option:this.tmNode.rawNode,checked:this.checked,node:c}):c)}let s=null;const a=Me("div",{class:`${n}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?Me(Mo,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?Me(co,{clsPrefix:n,class:`${n}-cascader-option-icon ${n}-cascader-option-icon--checkmark`},{default:()=>Me(ed,null)}):null}):null:Me(Cl,{clsPrefix:n,scale:.85,strokeWidth:24,show:this.isLoading,class:`${n}-cascader-option-icon`},{default:()=>Me(co,{clsPrefix:n,key:"arrow",class:`${n}-cascader-option-icon ${n}-cascader-option-icon--arrow`},{default:()=>Me(Oh,null)})}));return s=Me("div",{class:`${n}-cascader-option__suffix`},r?r({option:this.tmNode.rawNode,checked:this.checked,node:a}):a),Me("div",{class:[`${n}-cascader-option`,this.keyboardPending||this.hoverPending&&`${n}-cascader-option--pending`,this.disabled&&`${n}-cascader-option--disabled`,this.showCheckbox&&`${n}-cascader-option--show-prefix`],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},o,Me("span",{class:`${n}-cascader-option__label`},t?t(this.tmNode.rawNode,this.checked):this.label),s)}}),Yh=Yt({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:n,mergedClsPrefixRef:e,mergedThemeRef:t,optionHeightRef:i}=kr(Ao),r=st(null),o=st(null),s={scroll(a,c){var l,u;n.value?(l=o.value)===null||l===void 0||l.scrollTo({index:a}):(u=r.value)===null||u===void 0||u.scrollTo({index:a,elSize:c})}};return Object.assign({mergedClsPrefix:e,mergedTheme:t,scrollbarInstRef:r,vlInstRef:o,virtualScroll:n,itemSize:tt(()=>yr(i.value)),handleVlScroll:()=>{var a;(a=r.value)===null||a===void 0||a.sync()},getVlContainer:()=>{var a;return(a=o.value)===null||a===void 0?void 0:a.listElRef},getVlContent:()=>{var a;return(a=o.value)===null||a===void 0?void 0:a.itemsElRef}},s)},render(){const{mergedClsPrefix:n,mergedTheme:e,virtualScroll:t}=this;return Me("div",{class:[t&&`${n}-cascader-submenu--virtual`,`${n}-cascader-submenu`]},Me(ju,{ref:"scrollbarInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:t?this.getVlContainer:void 0,content:t?this.getVlContent:void 0},{default:()=>t?Me($u,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:i})=>Me(xc,{key:i.key,tmNode:i})}):this.tmNodes.map(i=>Me(xc,{key:i.key,tmNode:i}))}))}}),qh=Yt({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(n){const{localeRef:e,isMountedRef:t,mergedClsPrefixRef:i,syncCascaderMenuPosition:r,handleCascaderMenuClickOutside:o,mergedThemeRef:s,getColumnStyleRef:a}=kr(Ao),c=[],l=st(null),u=st(null);function d(){r()}Nl(u,d);function p(h){var _;const{value:{loadingRequiredMessage:b}}=e;(_=l.value)===null||_===void 0||_.showOnce(b(h))}function m(h){o(h)}function g(h){const{value:_}=u;_&&(_.contains(h.relatedTarget)||n.onFocus(h))}function v(h){const{value:_}=u;_&&(_.contains(h.relatedTarget)||n.onBlur(h))}return Object.assign({isMounted:t,mergedClsPrefix:i,selfElRef:u,submenuInstRefs:c,maskInstRef:l,mergedTheme:s,getColumnStyle:a,handleFocusin:g,handleFocusout:v,handleClickOutside:m},{scroll(h,_,b){const y=c[h];y&&y.scroll(_,b)},showErrorMessage:p})},render(){const{submenuInstRefs:n,mergedClsPrefix:e,mergedTheme:t}=this;return Me(Mo,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?Yu(Me("div",{tabindex:"0",ref:"selfElRef",class:`${e}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?Me("div",{class:`${e}-cascader-submenu-wrapper`},this.menuModel.map((i,r)=>{var o;return Me(Yh,{style:(o=this.getColumnStyle)===null||o===void 0?void 0:o.call(this,{level:r}),ref:s=>{s&&(n[r]=s)},key:r,tmNodes:i,depth:r+1})}),Me(Bh,{clsPrefix:e,ref:"maskInstRef"})):Me("div",{class:`${e}-cascader-menu__empty`},So(this.$slots.empty,()=>[Me(Zu,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty})])),Ia(this.$slots.action,i=>i&&Me("div",{class:`${e}-cascader-menu-action`,"data-action":!0},i)),Me(td,{onFocus:this.onTabout})),[[qu,this.handleClickOutside,void 0,{capture:!0}]]):null})}});function Fo(n){return n?n.map(e=>e.rawNode):null}function $h(n,e,t,i){const r=[],o=[];function s(a){for(const c of a){if(c.disabled)continue;const{rawNode:l}=c;o.push(l),(c.isLeaf||!e)&&r.push({label:Oa(c,i,t),value:c.key,rawNode:c.rawNode,path:Array.from(o)}),!c.isLeaf&&c.children&&s(c.children),o.pop()}}return s(n),r}function Oa(n,e,t){const i=[];for(;n;)i.push(n.rawNode[t]),n=n.parent;return i.reverse().join(e)}const Zh=Yt({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(n){const{isMountedRef:e,mergedValueRef:t,mergedClsPrefixRef:i,mergedThemeRef:r,mergedCheckStrategyRef:o,slots:s,syncSelectMenuPosition:a,closeMenu:c,handleSelectMenuClickOutside:l,doUncheck:u,doCheck:d,clearPattern:p}=kr(Ao),m=st(null),g=tt(()=>$h(n.tmNodes,o.value==="child",n.labelField,n.separator)),v=tt(()=>{const{filter:S}=n;if(S)return S;const{labelField:w}=n;return(P,I,N)=>N.some(V=>V[w]&&~V[w].toLowerCase().indexOf(P.toLowerCase()))}),f=tt(()=>{const{pattern:S}=n,{value:w}=v;return(S?g.value.filter(P=>w(S,P.rawNode,P.path)):g.value).map(P=>({value:P.value,label:P.label}))}),h=tt(()=>Qu(f.value,Kh("value","children")));function _(){a()}function b(S){y(S)}function y(S){if(n.multiple){const{value:w}=t;Array.isArray(w)?w.includes(S.key)?u(S.key):d(S.key):w===null&&d(S.key),p()}else d(S.key),c(!0)}function R(){var S;(S=m.value)===null||S===void 0||S.prev()}function M(){var S;(S=m.value)===null||S===void 0||S.next()}function C(){var S;if(m){const w=(S=m.value)===null||S===void 0?void 0:S.getPendingTmNode();return w&&y(w),!0}return!1}function U(S){l(S)}return Object.assign({isMounted:e,mergedTheme:r,mergedClsPrefix:i,menuInstRef:m,selectTreeMate:h,handleResize:_,handleToggle:b,handleClickOutside:U,cascaderSlots:s},{prev:R,next:M,enter:C})},render(){const{mergedClsPrefix:n,isMounted:e,mergedTheme:t,cascaderSlots:i}=this;return Me(Mo,{name:"fade-in-scale-up-transition",appear:e},{default:()=>this.show?Yu(Me(Gh,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:n,class:`${n}-cascader-menu`,autoPending:!0,themeOverrides:t.peerOverrides.InternalSelectMenu,theme:t.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>So(i["not-found"],()=>[])}),[[qu,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),Jh=nn([dt("cascader-menu",`
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `,[La({transformOrigin:"inherit",duration:"0.2s"}),St("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),dt("scrollbar",`
 width: 100%;
 `),dt("base-menu-mask",`
 background-color: var(--n-menu-mask-color);
 `),dt("base-loading",`
 color: var(--n-loading-color);
 `),dt("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),dt("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[Ht("virtual",`
 width: var(--n-column-width);
 `),dt("scrollbar-content",`
 position: relative;
 `),nn("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),nn("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),nn("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),dt("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),dt("cascader-option",`
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `,[Ht("show-prefix",`
 padding-left: 0;
 `),St("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),St("prefix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),St("suffix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),dt("cascader-option-icon-placeholder",`
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `,[dt("cascader-option-icon",[Ht("checkmark",`
 color: var(--n-option-check-mark-color);
 `,[La({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),Ht("arrow",`
 color: var(--n-option-arrow-color);
 `)])]),Ht("selected",`
 color: var(--n-option-text-color-active);
 `),Ht("active",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `),Ht("pending",`
 background-color: var(--n-option-color-hover);
 `),nn("&:hover",`
 background-color: var(--n-option-color-hover);
 `),Ht("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[dt("cascader-option-icon",[Ht("arrow",`
 color: var(--n-option-text-color-disabled);
 `)])])])]),dt("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),Qh=Object.assign(Object.assign({},Rr.props),{allowCheckingNotLoaded:Boolean,to:hs.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,getColumnStyle:Function,renderPrefix:Function,renderSuffix:Function,onChange:[Function,Array]}),ef=Yt({name:"Cascader",props:Qh,slots:Object,setup(n,{slots:e}){const{mergedBorderedRef:t,mergedClsPrefixRef:i,namespaceRef:r,inlineThemeDisabled:o}=Pl(n),s=Rr("Cascader","-cascader",Jh,ch,n,i),{localeRef:a}=Ch("Cascader"),c=st(n.defaultValue),l=tt(()=>n.value),u=dc(l,c),d=tt(()=>n.leafOnly?"child":n.checkStrategy),p=st(""),m=uh(n),{mergedSizeRef:g,mergedDisabledRef:v,mergedStatusRef:f}=m,h=st(null),_=st(null),b=st(null),y=st(null),R=st(null),M=st(new Set),C=st(null),U=st(null),E=hs(n),S=st(!1),w=B=>{M.value.add(B)},P=B=>{M.value.delete(B)},I=tt(()=>{const{valueField:B,childrenField:q,disabledField:ye}=n;return Qu(n.options,{getDisabled(De){return De[ye]},getKey(De){return De[B]},getChildren(De){return De[q]}})}),N=tt(()=>{const{cascade:B,multiple:q}=n;return q&&Array.isArray(u.value)?I.value.getCheckedKeys(u.value,{cascade:B,allowNotLoaded:n.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),V=tt(()=>N.value.checkedKeys),H=tt(()=>N.value.indeterminateKeys),Z=tt(()=>{const{treeNodePath:B,treeNode:q}=I.value.getPath(R.value);let ye;return q===null?ye=[I.value.treeNodes]:(ye=B.map(De=>De.siblings),!q.isLeaf&&!M.value.has(q.key)&&q.children&&ye.push(q.children)),ye}),X=tt(()=>{const{keyPath:B}=I.value.getPath(R.value);return B}),ne=tt(()=>s.value.self.optionHeight);dh(n.options)&&en(n.options,(B,q)=>{B!==q&&(R.value=null,y.value=null)});const he=st(!1);function ve(B){const{onUpdateShow:q,"onUpdate:show":ye}=n;q&&Ui(q,B),ye&&Ui(ye,B),he.value=B}function ie(B,q,ye){const{onUpdateValue:De,"onUpdate:value":Pe,onChange:Se}=n,{nTriggerFormInput:we,nTriggerFormChange:Oe}=m;De&&Ui(De,B,q,ye),Pe&&Ui(Pe,B,q,ye),Se&&Ui(Se,B,q,ye),c.value=B,we(),Oe()}function oe(B){y.value=B}function Ae(B){R.value=B}function te(B){const{value:{getNode:q}}=I;return B.map(ye=>{var De;return((De=q(ye))===null||De===void 0?void 0:De.rawNode)||null})}function z(B){var q;const{cascade:ye,multiple:De,filterable:Pe}=n,{value:{check:Se,getNode:we,getPath:Oe}}=I;if(De)try{const{checkedKeys:Fe}=Se(B,N.value.checkedKeys,{cascade:ye,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});ie(Fe,te(Fe),Fe.map(Ye=>{var bt;return Fo((bt=Oe(Ye))===null||bt===void 0?void 0:bt.treeNodePath)})),Pe&&Ke(),y.value=B,R.value=B}catch(Fe){if(Fe instanceof Th){if(h.value){const Ye=we(B);Ye!==null&&h.value.showErrorMessage(Ye.rawNode[n.labelField])}}else throw Fe}else if(d.value==="child"){const Fe=we(B);if(Fe!=null&&Fe.isLeaf)ie(B,Fe.rawNode,Fo(Oe(B).treeNodePath));else return!1}else{const Fe=we(B);ie(B,(Fe==null?void 0:Fe.rawNode)||null,Fo((q=Oe(B))===null||q===void 0?void 0:q.treeNodePath))}return!0}function j(B){const{cascade:q,multiple:ye}=n;if(ye){const{value:{uncheck:De,getNode:Pe,getPath:Se}}=I,{checkedKeys:we}=De(B,N.value.checkedKeys,{cascade:q,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});ie(we,we.map(Oe=>{var Fe;return((Fe=Pe(Oe))===null||Fe===void 0?void 0:Fe.rawNode)||null}),we.map(Oe=>{var Fe;return Fo((Fe=Se(Oe))===null||Fe===void 0?void 0:Fe.treeNodePath)})),y.value=B,R.value=B}}const ae=tt(()=>{if(n.multiple){const{showPath:B,separator:q,labelField:ye,cascade:De}=n,{getCheckedKeys:Pe,getNode:Se}=I.value;return Pe(V.value,{cascade:De,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded}).checkedKeys.map(Oe=>{const Fe=Se(Oe);return Fe===null?{label:String(Oe),value:Oe}:{label:B?Oa(Fe,q,ye):Fe.rawNode[ye],value:Fe.key}})}else return[]}),de=tt(()=>{const{multiple:B,showPath:q,separator:ye,labelField:De}=n,{value:Pe}=u;if(!B&&!Array.isArray(Pe)){const{getNode:Se}=I.value;if(Pe===null)return null;const we=Se(Pe);return we===null?{label:String(Pe),value:Pe}:{label:q?Oa(we,ye,De):we.rawNode[De],value:we.key}}else return null}),_e=Dt(n,"show"),Ne=dc(_e,he),We=tt(()=>{const{placeholder:B}=n;return B!==void 0?B:a.value.placeholder}),Be=tt(()=>!!(n.filterable&&p.value));en(Ne,B=>{if(!B||n.multiple)return;const{value:q}=u;!Array.isArray(q)&&q!==null?(y.value=q,R.value=q,As(()=>{var ye;if(!Ne.value)return;const{value:De}=R;if(u.value!==null){const Pe=I.value.getNode(De);Pe&&((ye=h.value)===null||ye===void 0||ye.scroll(Pe.level,Pe.index,yr(ne.value)))}})):(y.value=null,R.value=null)},{immediate:!0});function et(B){const{onBlur:q}=n,{nTriggerFormBlur:ye}=m;q&&Ui(q,B),ye()}function W(B){const{onFocus:q}=n,{nTriggerFormFocus:ye}=m;q&&Ui(q,B),ye()}function Ke(){var B;(B=b.value)===null||B===void 0||B.focusInput()}function J(){var B;(B=b.value)===null||B===void 0||B.focus()}function me(){v.value||(p.value="",ve(!0),n.filterable&&Ke())}function Q(B=!1){B&&J(),ve(!1),p.value=""}function be(B){var q;Be.value||Ne.value&&(!((q=b.value)===null||q===void 0)&&q.$el.contains(mh(B))||Q())}function Ee(B){Be.value&&be(B)}function ze(){n.clearFilterAfterSelect&&(p.value="")}function T(B){var q,ye,De;const{value:Pe}=y,{value:Se}=I;switch(B){case"prev":if(Pe!==null){const we=Se.getPrev(Pe,{loop:!0});we!==null&&(oe(we.key),(q=h.value)===null||q===void 0||q.scroll(we.level,we.index,yr(ne.value)))}break;case"next":if(Pe===null){const we=Se.getFirstAvailableNode();we!==null&&(oe(we.key),(ye=h.value)===null||ye===void 0||ye.scroll(we.level,we.index,yr(ne.value)))}else{const we=Se.getNext(Pe,{loop:!0});we!==null&&(oe(we.key),(De=h.value)===null||De===void 0||De.scroll(we.level,we.index,yr(ne.value)))}break;case"child":if(Pe!==null){const we=Se.getNode(Pe);if(we!==null)if(we.shallowLoaded){const Oe=Se.getChild(Pe);Oe!==null&&(Ae(Pe),oe(Oe.key))}else{const{value:Oe}=M;if(!Oe.has(Pe)){w(Pe),Ae(Pe);const{onLoad:Fe}=n;Fe&&Fe(we.rawNode).then(()=>{P(Pe)}).catch(()=>{P(Pe)})}}}break;case"parent":if(Pe!==null){const we=Se.getParent(Pe);if(we!==null){oe(we.key);const Oe=we.getParent();Ae(Oe===null?null:Oe.key)}}break}}function x(B){var q,ye;switch(B.key){case" ":case"ArrowDown":case"ArrowUp":if(n.filterable&&Ne.value)break;B.preventDefault();break}if(!uo(B,"action"))switch(B.key){case" ":if(n.filterable)return;case"Enter":if(!Ne.value)me();else{const{value:De}=Be,{value:Pe}=y;if(De)_.value&&_.value.enter()&&ze();else if(Pe!==null)if(V.value.includes(Pe)||H.value.includes(Pe))j(Pe);else{const Se=z(Pe);!n.multiple&&Se&&Q(!0)}}break;case"ArrowUp":B.preventDefault(),Ne.value&&(Be.value?(q=_.value)===null||q===void 0||q.prev():T("prev"));break;case"ArrowDown":B.preventDefault(),Ne.value?Be.value?(ye=_.value)===null||ye===void 0||ye.next():T("next"):me();break;case"ArrowLeft":B.preventDefault(),Ne.value&&!Be.value&&T("parent");break;case"ArrowRight":B.preventDefault(),Ne.value&&!Be.value&&T("child");break;case"Escape":Ne.value&&(ph(B),Q(!0))}}function A(B){x(B)}function D(B){B.stopPropagation(),n.multiple?ie([],[],[]):ie(null,null,null)}function O(B){var q;!((q=h.value)===null||q===void 0)&&q.$el.contains(B.relatedTarget)||(S.value=!0,W(B))}function F(B){var q;!((q=h.value)===null||q===void 0)&&q.$el.contains(B.relatedTarget)||(S.value=!1,et(B),Q())}function Y(B){var q;!((q=b.value)===null||q===void 0)&&q.$el.contains(B.relatedTarget)||(S.value=!0,W(B))}function K(B){var q;!((q=b.value)===null||q===void 0)&&q.$el.contains(B.relatedTarget)||(S.value=!1,et(B))}function se(B){uo(B,"action")||n.multiple&&n.filter&&(B.preventDefault(),Ke())}function fe(){Q(!0)}function ee(){n.filterable?me():Ne.value?Q(!0):me()}function xe(B){p.value=B.target.value}function Ve(B){const{multiple:q}=n,{value:ye}=u;q&&Array.isArray(ye)&&B.value!==void 0?j(B.value):ie(null,null,null)}function Xe(){var B;(B=C.value)===null||B===void 0||B.syncPosition()}function Ie(){var B;(B=U.value)===null||B===void 0||B.syncPosition()}function Ue(){Ne.value&&(Be.value?Xe():Ie())}const k=tt(()=>!!(n.multiple&&n.cascade||d.value!=="child"));Na(Ao,{slots:e,mergedClsPrefixRef:i,mergedThemeRef:s,mergedValueRef:u,checkedKeysRef:V,indeterminateKeysRef:H,hoverKeyPathRef:X,mergedCheckStrategyRef:d,showCheckboxRef:k,cascadeRef:Dt(n,"cascade"),multipleRef:Dt(n,"multiple"),keyboardKeyRef:y,hoverKeyRef:R,remoteRef:Dt(n,"remote"),loadingKeySetRef:M,expandTriggerRef:Dt(n,"expandTrigger"),isMountedRef:hh(),onLoadRef:Dt(n,"onLoad"),virtualScrollRef:Dt(n,"virtualScroll"),optionHeightRef:ne,localeRef:a,labelFieldRef:Dt(n,"labelField"),renderLabelRef:Dt(n,"renderLabel"),getColumnStyleRef:Dt(n,"getColumnStyle"),renderPrefixRef:Dt(n,"renderPrefix"),renderSuffixRef:Dt(n,"renderSuffix"),syncCascaderMenuPosition:Ie,syncSelectMenuPosition:Xe,updateKeyboardKey:oe,updateHoverKey:Ae,addLoadingKey:w,deleteLoadingKey:P,doCheck:z,doUncheck:j,closeMenu:Q,handleSelectMenuClickOutside:Ee,handleCascaderMenuClickOutside:be,clearPattern:ze});const Ce={focus:()=>{var B;(B=b.value)===null||B===void 0||B.focus()},blur:()=>{var B;(B=b.value)===null||B===void 0||B.blur()},getCheckedData:()=>{if(k.value){const B=V.value;return{keys:B,options:te(B)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(k.value){const B=H.value;return{keys:B,options:te(B)}}return{keys:[],options:[]}}},Re=tt(()=>{const{self:{optionArrowColor:B,optionTextColor:q,optionTextColorActive:ye,optionTextColorDisabled:De,optionCheckMarkColor:Pe,menuColor:Se,menuBoxShadow:we,menuDividerColor:Oe,menuBorderRadius:Fe,menuHeight:Ye,optionColorHover:bt,optionHeight:zt,optionFontSize:qt,loadingColor:Pn,columnWidth:ai},common:{cubicBezierEaseInOut:Bn}}=s.value;return{"--n-bezier":Bn,"--n-menu-border-radius":Fe,"--n-menu-box-shadow":we,"--n-menu-height":Ye,"--n-column-width":ai,"--n-menu-color":Se,"--n-menu-divider-color":Oe,"--n-option-height":zt,"--n-option-font-size":qt,"--n-option-text-color":q,"--n-option-text-color-disabled":De,"--n-option-text-color-active":ye,"--n-option-color-hover":bt,"--n-option-check-mark-color":Pe,"--n-option-arrow-color":B,"--n-menu-mask-color":fh(Se,{alpha:.75}),"--n-loading-color":Pn}}),Te=o?Ll("cascader",void 0,Re,n):void 0;return Object.assign(Object.assign({},Ce),{handleTriggerResize:Ue,mergedStatus:f,selectMenuFollowerRef:C,cascaderMenuFollowerRef:U,triggerInstRef:b,selectMenuInstRef:_,cascaderMenuInstRef:h,mergedBordered:t,mergedClsPrefix:i,namespace:r,mergedValue:u,mergedShow:Ne,showSelectMenu:Be,pattern:p,treeMate:I,mergedSize:g,mergedDisabled:v,localizedPlaceholder:We,selectedOption:de,selectedOptions:ae,adjustedTo:E,menuModel:Z,handleMenuTabout:fe,handleMenuFocus:Y,handleMenuBlur:K,handleMenuKeydown:A,handleMenuMousedown:se,handleTriggerFocus:O,handleTriggerBlur:F,handleTriggerClick:ee,handleClear:D,handleDeleteOption:Ve,handlePatternInput:xe,handleKeydown:x,focused:S,optionHeight:ne,mergedTheme:s,cssVars:o?void 0:Re,themeClass:Te==null?void 0:Te.themeClass,onRender:Te==null?void 0:Te.onRender})},render(){const{mergedClsPrefix:n}=this;return Me("div",{class:`${n}-cascader`},Me(Mh,null,{default:()=>[Me(Ah,null,{default:()=>Me(Xh,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:n,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var e,t;return(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)}})}),Me(uc,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===hs.tdkey,to:this.adjustedTo},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{menuProps:t}=this;return Me(qh,Object.assign({},t,{ref:"cascaderMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,t==null?void 0:t.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var i,r;return(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)},empty:()=>{var i,r;return(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)}})}}),Me(uc,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===hs.tdkey},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{filterMenuProps:t}=this;return Me(Zh,Object.assign({},t,{ref:"selectMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,t==null?void 0:t.style]}))}})]}))}}),tf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},nf=Yt({name:"ArrowMove20Regular",render:function(e,t){return kt(),dn("svg",tf,t[0]||(t[0]=[Xt("g",{fill:"none"},[Xt("path",{d:"M7.146 4.354a.5.5 0 0 0 .708 0L9.5 2.707V6.5a.5.5 0 0 0 1 0V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm-2.792 3.5a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L2.707 10.5H6.5a.5.5 0 0 0 0-1H2.707l1.647-1.646zm11.292 0a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H13.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646zm-7.792 7.792a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 17.293V13.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647z",fill:"currentColor"})],-1)]))}}),rf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},of=Yt({name:"ArrowMoveInward20Regular",render:function(e,t){return kt(),dn("svg",rf,t[0]||(t[0]=[Xt("g",{fill:"none"},[Xt("path",{d:"M7.146 16.354a.5.5 0 0 0 .708 0L9.5 14.707V18.5a.5.5 0 0 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm9.208-8.5a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L14.707 10.5H18.5a.5.5 0 0 0 0-1h-3.793l1.647-1.646zm-12.708 0a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L5.293 10.5H1.5a.5.5 0 0 1 0-1h3.793L3.646 7.854zm4.208-4.208a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 5.293V1.5a.5.5 0 0 0-1 0v3.793L7.854 3.646z",fill:"currentColor"})],-1)]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="181",Tr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,vc=1,af=2,nd=1,lf=2,gi=3,ii=0,an=1,Dn=2,_i=0,Er=1,_c=2,yc=3,bc=4,cf=5,Yi=100,uf=101,df=102,hf=103,ff=104,pf=200,mf=201,gf=202,xf=203,Da=204,Fa=205,vf=206,_f=207,yf=208,bf=209,Tf=210,Ef=211,Sf=212,Mf=213,Af=214,Ua=0,ka=1,Ba=2,wr=3,za=4,Va=5,Ga=6,Ha=7,Dl=0,Rf=1,wf=2,Di=0,Cf=1,Pf=2,Lf=3,If=4,Nf=5,Of=6,Df=7,Tc="attached",Ff="detached",id=300,Cr=301,Pr=302,Wa=303,Xa=304,ws=306,jn=1e3,bn=1001,ys=1002,mn=1003,rd=1004,to=1005,pn=1006,fs=1007,xi=1008,ri=1009,od=1010,sd=1011,ho=1012,Fl=1013,$i=1014,Kn=1015,Br=1016,Ul=1017,kl=1018,fo=1020,ad=35902,ld=35899,cd=1021,ud=1022,wn=1023,po=1026,mo=1027,Bl=1028,zl=1029,Vl=1030,Gl=1031,Hl=1033,ps=33776,ms=33777,gs=33778,xs=33779,ja=35840,Ka=35841,Ya=35842,qa=35843,$a=36196,Za=37492,Ja=37496,Qa=37808,el=37809,tl=37810,nl=37811,il=37812,rl=37813,ol=37814,sl=37815,al=37816,ll=37817,cl=37818,ul=37819,dl=37820,hl=37821,fl=36492,pl=36494,ml=36495,gl=36283,xl=36284,vl=36285,_l=36286,go=2300,xo=2301,Xs=2302,Ec=2400,Sc=2401,Mc=2402,Uf=2500,kf=0,dd=1,yl=2,Bf=3200,zf=3201,Wl=0,Vf=1,Ni="",Rt="srgb",ln="srgb-linear",bs="linear",Lt="srgb",nr=7680,Ac=519,Gf=512,Hf=513,Wf=514,hd=515,Xf=516,jf=517,Kf=518,Yf=519,bl=35044,Rc="300 es",ni=2e3,Ts=2001;function fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qf(){const n=vo("canvas");return n.style.display="block",n}const wc={};function Es(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function _t(...n){const e="THREE."+n.shift();console.error(e,...n)}function _o(...n){const e=n.join(" ");e in wc||(wc[e]=!0,nt(...n))}function $f(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const oo=Math.PI/180,Lr=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function Xl(n,e){return(n%e+e)%e}function Zf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Jf(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function Qf(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}function ep(n,e=1){return e-Math.abs(Xl(n,e*2)-e)}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ip(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rp(n,e){return n+Math.random()*(e-n)}function op(n){return n*(.5-Math.random())}function sp(n){n!==void 0&&(Cc=n);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(n){return n*oo}function lp(n){return n*Lr}function cp(n){return(n&n-1)===0&&n!==0}function up(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hp(n,e,t,i,r){const o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),p=s((e-i)/2),m=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*u,a*l);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:oo,RAD2DEG:Lr,generateUUID:$n,clamp:gt,euclideanModulo:Xl,mapLinear:Zf,inverseLerp:Jf,lerp:so,damp:Qf,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:rp,randFloatSpread:op,seededRandom:sp,degToRad:ap,radToDeg:lp,isPowerOfTwo:cp,ceilPowerOfTwo:up,floorPowerOfTwo:dp,setQuaternionFromProperEuler:hp,normalize:wt,denormalize:Wn};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],p=o[s+0],m=o[s+1],g=o[s+2],v=o[s+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a>=1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==p||l!==m||u!==g){let f=c*p+l*m+u*g+d*v;f<0&&(p=-p,m=-m,g=-g,v=-v,f=-f);let h=1-a;if(f<.9995){const _=Math.acos(f),b=Math.sin(_);h=Math.sin(h*_)/b,a=Math.sin(a*_)/b,c=c*h+p*a,l=l*h+m*a,u=u*h+g*a,d=d*h+v*a}else{c=c*h+p*a,l=l*h+m*a,u=u*h+g*a,d=d*h+v*a;const _=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=_,l*=_,u*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],p=o[s+1],m=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*m-l*p,e[t+1]=c*g+u*p+l*d-a*m,e[t+2]=l*g+u*m+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),p=c(i/2),m=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"YZX":this._x=p*u*d+l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d-p*m*g;break;case"XZY":this._x=p*u*d-l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d+p*m*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new $,Pc=new Un;class ft{constructor(e,t,i,r,o,s,a,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],m=i[5],g=i[8],v=r[0],f=r[3],h=r[6],_=r[1],b=r[4],y=r[7],R=r[2],M=r[5],C=r[8];return o[0]=s*v+a*_+c*R,o[3]=s*f+a*b+c*M,o[6]=s*h+a*y+c*C,o[1]=l*v+u*_+d*R,o[4]=l*f+u*b+d*M,o[7]=l*h+u*y+d*C,o[2]=p*v+m*_+g*R,o[5]=p*f+m*b+g*M,o[8]=p*h+m*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,p=a*c-u*o,m=l*o-s*c,g=t*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=p*v,e[4]=(u*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new ft,Lc=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){const n={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Lt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Lt&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return _o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return _o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ln]:{primaries:e,whitePoint:i,transfer:bs,toXYZ:Lc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Lc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const vt=fp();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class pp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=vo("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=yi(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mp=0;class jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ys(r[s].image)):o.push(Ys(r[s]))}else o=Ys(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let gp=0;const qs=new $;class tn extends Qi{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=bn,r=bn,o=pn,s=xi,a=wn,c=ri,l=tn.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=$n(),this.name="",this.source=new jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qs).x}get height(){return this.source.getSize(qs).y}get depth(){return this.source.getSize(qs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=id;tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],m=c[5],g=c[9],v=c[2],f=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(m+1)/2,R=(h+1)/2,M=(u+p)/4,C=(d+v)/4,U=(g+f)/4;return b>y&&b>R?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=M/i,o=C/i):y>R?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=M/r,o=U/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=C/o,r=U/o),this.set(i,r,o,t),this}let _=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-v)/_,this.z=(p-u)/_,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new tn(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends xp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zn):zn.fromBufferAttribute(o,s),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),ko.subVectors(this.max,Xr),rr.subVectors(e.a,Xr),or.subVectors(e.b,Xr),sr.subVectors(e.c,Xr),Si.subVectors(or,rr),Mi.subVectors(sr,or),Bi.subVectors(rr,sr);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!$s(t,rr,or,sr,ko)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,rr,or,sr,ko))?!1:(Bo.crossVectors(Si,Mi),t=[Bo.x,Bo.y,Bo.z],$s(t,rr,or,sr,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new $,new $,new $,new $,new $,new $,new $,new $],zn=new $,Uo=new Fn,rr=new $,or=new $,sr=new $,Si=new $,Mi=new $,Bi=new $,Xr=new $,ko=new $,Bo=new $,zi=new $;function $s(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){zi.fromArray(n,o);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _p=new Fn,jr=new $,Zs=new $;class oi{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_p.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Zs)),this.expandByPoint(jr.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ui=new $,Js=new $,zo=new $,Ai=new $,Qs=new $,Vo=new $,ea=new $;class Ro{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Js.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Js);const o=e.distanceTo(t)*.5,s=-this.direction.dot(zo),a=Ai.dot(this.direction),c=-Ai.dot(zo),l=Ai.lengthSq(),u=Math.abs(1-s*s);let d,p,m,g;if(u>0)if(d=s*c-a,p=s*a-c,g=o*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,m=d*(d+s*p+2*a)+p*(s*d+p+2*c)+l}else p=o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-s*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),m=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-o,-c),o),m=p*(p+2*c)+l):(d=Math.max(0,-(s*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),m=-d*d+p*(p+2*c)+l);else p=s>0?-o:o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Js).addScaledVector(zo,p),m}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(o=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,r,o){Qs.subVectors(t,e),Vo.subVectors(i,e),ea.crossVectors(Qs,Vo);let s=this.direction.dot(ea),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ai.subVectors(this.origin,e);const c=a*this.direction.dot(Vo.crossVectors(Ai,Vo));if(c<0)return null;const l=a*this.direction.dot(Qs.cross(Ai));if(l<0||c+l>s)return null;const u=-a*Ai.dot(ea);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f)}set(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),o=1/ar.setFromMatrixColumn(e,1).length(),s=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const p=s*u,m=s*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=g+m*l,t[10]=s*c}else if(e.order==="YXZ"){const p=c*u,m=c*d,g=l*u,v=l*d;t[0]=p+v*a,t[4]=g*a-m,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=s*c}else if(e.order==="ZXY"){const p=c*u,m=c*d,g=l*u,v=l*d;t[0]=p-v*a,t[4]=-s*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=v-p*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const p=s*u,m=s*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+v,t[1]=c*d,t[5]=v*l+p,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const p=s*c,m=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-p*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=s*c,m=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+v,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,bp)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ri.crossVectors(i,Mn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ri.crossVectors(i,Mn)),Ri.normalize(),Go.crossVectors(Mn,Ri),r[0]=Ri.x,r[4]=Go.x,r[8]=Mn.x,r[1]=Ri.y,r[5]=Go.y,r[9]=Mn.y,r[2]=Ri.z,r[6]=Go.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],_=i[3],b=i[7],y=i[11],R=i[15],M=r[0],C=r[4],U=r[8],E=r[12],S=r[1],w=r[5],P=r[9],I=r[13],N=r[2],V=r[6],H=r[10],Z=r[14],X=r[3],ne=r[7],he=r[11],ve=r[15];return o[0]=s*M+a*S+c*N+l*X,o[4]=s*C+a*w+c*V+l*ne,o[8]=s*U+a*P+c*H+l*he,o[12]=s*E+a*I+c*Z+l*ve,o[1]=u*M+d*S+p*N+m*X,o[5]=u*C+d*w+p*V+m*ne,o[9]=u*U+d*P+p*H+m*he,o[13]=u*E+d*I+p*Z+m*ve,o[2]=g*M+v*S+f*N+h*X,o[6]=g*C+v*w+f*V+h*ne,o[10]=g*U+v*P+f*H+h*he,o[14]=g*E+v*I+f*Z+h*ve,o[3]=_*M+b*S+y*N+R*X,o[7]=_*C+b*w+y*V+R*ne,o[11]=_*U+b*P+y*H+R*he,o[15]=_*E+b*I+y*Z+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+o*c*d-r*l*d-o*a*p+i*l*p+r*a*m-i*c*m)+v*(+t*c*m-t*l*p+o*s*p-r*s*m+r*l*u-o*c*u)+f*(+t*l*d-t*a*m-o*s*d+i*s*m+o*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*p+r*s*d-i*s*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],_=d*f*l-v*p*l+v*c*m-a*f*m-d*c*h+a*p*h,b=g*p*l-u*f*l-g*c*m+s*f*m+u*c*h-s*p*h,y=u*v*l-g*d*l+g*a*m-s*v*m-u*a*h+s*d*h,R=g*d*c-u*v*c-g*a*p+s*v*p+u*a*f-s*d*f,M=t*_+i*b+r*y+o*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(v*p*o-d*f*o-v*r*m+i*f*m+d*r*h-i*p*h)*C,e[2]=(a*f*o-v*c*o+v*r*l-i*f*l-a*r*h+i*c*h)*C,e[3]=(d*c*o-a*p*o-d*r*l+i*p*l+a*r*m-i*c*m)*C,e[4]=b*C,e[5]=(u*f*o-g*p*o+g*r*m-t*f*m-u*r*h+t*p*h)*C,e[6]=(g*c*o-s*f*o-g*r*l+t*f*l+s*r*h-t*c*h)*C,e[7]=(s*p*o-u*c*o+u*r*l-t*p*l-s*r*m+t*c*m)*C,e[8]=y*C,e[9]=(g*d*o-u*v*o-g*i*m+t*v*m+u*i*h-t*d*h)*C,e[10]=(s*v*o-g*a*o+g*i*l-t*v*l-s*i*h+t*a*h)*C,e[11]=(u*a*o-s*d*o-u*i*l+t*d*l+s*i*m-t*a*m)*C,e[12]=R*C,e[13]=(u*v*r-g*d*r+g*i*p-t*v*p-u*i*f+t*d*f)*C,e[14]=(g*a*r-s*v*r-g*i*c+t*v*c+s*i*f-t*a*f)*C,e[15]=(s*d*r-u*a*r+u*i*c-t*d*c-s*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,p=o*l,m=o*u,g=o*d,v=s*u,f=s*d,h=a*d,_=c*l,b=c*u,y=c*d,R=i.x,M=i.y,C=i.z;return r[0]=(1-(v+h))*R,r[1]=(m+y)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(m-y)*M,r[5]=(1-(p+h))*M,r[6]=(f+_)*M,r[7]=0,r[8]=(g+b)*C,r[9]=(f-_)*C,r[10]=(1-(p+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=ar.set(r[0],r[1],r[2]).length();const s=ar.set(r[4],r[5],r[6]).length(),a=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const l=1/o,u=1/s,d=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=ni,c=!1){const l=this.elements,u=2*o/(t-e),d=2*o/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(c)g=o/(s-o),v=s*o/(s-o);else if(a===ni)g=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Ts)g=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=ni,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,v;if(c)g=1/(s-o),v=s/(s-o);else if(a===ni)g=-2/(s-o),v=-(s+o)/(s-o);else if(a===Ts)g=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ar=new $,Vn=new mt,yp=new $(0,0,0),bp=new $(1,1,1),Ri=new $,Go=new $,Mn=new $,Nc=new mt,Oc=new Un;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tp=0;const Dc=new $,lr=new Un,di=new mt,Ho=new $,Kr=new $,Ep=new $,Sp=new Un,Fc=new $(1,0,0),Uc=new $(0,1,0),kc=new $(0,0,1),Bc={type:"added"},Mp={type:"removed"},cr={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ot extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new $,t=new Jn,i=new Un,r=new $(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ft}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Kr,Ho,this.up):di.lookAt(Ho,Kr,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(di),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bc),cr.child=e,this.dispatchEvent(cr),cr.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bc),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new $(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new $,hi=new $,na=new $,fi=new $,ur=new $,dr=new $,zc=new $,ia=new $,ra=new $,oa=new $,sa=new Mt,aa=new Mt,la=new Mt;class Xn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Gn.subVectors(r,t),hi.subVectors(i,t),na.subVectors(e,t);const s=Gn.dot(Gn),a=Gn.dot(hi),c=Gn.dot(na),l=hi.dot(hi),u=hi.dot(na),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,m=(l*c-a*u)*p,g=(s*u-a*c)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,fi.x),c.addScaledVector(s,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return sa.setScalar(0),aa.setScalar(0),la.setScalar(0),sa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,i),la.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(sa,o.x),s.addScaledVector(aa,o.y),s.addScaledVector(la,o.z),s}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),hi.subVectors(e,t),Gn.cross(hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Gn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;ur.subVectors(r,i),dr.subVectors(o,i),ia.subVectors(e,i);const c=ur.dot(ia),l=dr.dot(ia);if(c<=0&&l<=0)return t.copy(i);ra.subVectors(e,r);const u=ur.dot(ra),d=dr.dot(ra);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(ur,s);oa.subVectors(e,o);const m=ur.dot(oa),g=dr.dot(oa);if(g>=0&&m<=g)return t.copy(o);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(dr,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return zc.subVectors(o,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(zc,a);const h=1/(f+v+p);return s=v*h,a=p*h,t.copy(i).addScaledVector(ur,s).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=Xl(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=ca(s,o,e+1/3),this.g=ca(s,o,e),this.b=ca(s,o,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function i(o){o!==void 0&&parseFloat(o)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return vt.workingToColorSpace(sn.copy(this),e),Math.round(gt(sn.r*255,0,255))*65536+Math.round(gt(sn.g*255,0,255))*256+Math.round(gt(sn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,o=sn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Rt){vt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Wo);const i=so(wi.h,Wo.h,t),r=so(wi.s,Wo.s,t),o=so(wi.l,Wo.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new it;it.NAMES=gd;let Ap=0;class Zn extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Er,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Fa,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yn extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new $,Xo=new Qe;let Rp=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),o=wt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class xd extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wp=0;const Nn=new mt,ua=new Ot,hr=new $,An=new Fn,Yr=new Fn,Qt=new $;class Wt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?vd:xd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(An.min,Yr.min),An.expandByPoint(Qt),Qt.addVectors(An.max,Yr.max),An.expandByPoint(Qt)):(An.expandByPoint(Yr.min),An.expandByPoint(Yr.max))}An.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Qt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(hr.fromBufferAttribute(e,l),Qt.add(hr)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new $,c[U]=new $;const l=new $,u=new $,d=new $,p=new Qe,m=new Qe,g=new Qe,v=new $,f=new $;function h(U,E,S){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),p.fromBufferAttribute(o,U),m.fromBufferAttribute(o,E),g.fromBufferAttribute(o,S),u.sub(l),d.sub(l),m.sub(p),g.sub(p);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[U].add(v),a[E].add(v),a[S].add(v),c[U].add(f),c[E].add(f),c[S].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,E=_.length;U<E;++U){const S=_[U],w=S.start,P=S.count;for(let I=w,N=w+P;I<N;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new $,y=new $,R=new $,M=new $;function C(U){R.fromBufferAttribute(r,U),M.copy(R);const E=a[U];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(M,E);const w=y.dot(c[U])<0?-1:1;s.setXYZW(U,b.x,b.y,b.z,w)}for(let U=0,E=_.length;U<E;++U){const S=_[U],w=S.start,P=S.count;for(let I=w,N=w+P;I<N;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new $,o=new $,s=new $,a=new $,c=new $,l=new $,u=new $,d=new $;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,f),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,f),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let h=0;h<u;h++)p[g++]=l[m++]}return new jt(p,u,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new mt,Vi=new Ro,jo=new oi,Gc=new $,Ko=new $,Yo=new $,qo=new $,da=new $,$o=new $,Hc=new $,Zo=new $;class rn extends Ot{constructor(e=new Wt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){$o.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(da.fromBufferAttribute(d,e),s?$o.addScaledVector(da,u):$o.addScaledVector(da.sub(t),u))}t.add($o)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(o),Vi.copy(e.ray).recast(e.near),!(jo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(jo,Gc)===null||Vi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Vc.copy(o).invert(),Vi.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,p=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=s[f.materialIndex],_=Math.max(f.start,m.start),b=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=_,R=b;y<R;y+=3){const M=a.getX(y),C=a.getX(y+1),U=a.getX(y+2);r=Jo(this,h,e,i,l,u,d,M,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const _=a.getX(f),b=a.getX(f+1),y=a.getX(f+2);r=Jo(this,s,e,i,l,u,d,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=s[f.materialIndex],_=Math.max(f.start,m.start),b=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=_,R=b;y<R;y+=3){const M=y,C=y+1,U=y+2;r=Jo(this,h,e,i,l,u,d,M,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const _=f,b=f+1,y=f+2;r=Jo(this,s,e,i,l,u,d,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Cp(n,e,t,i,r,o,s,a){let c;if(e.side===an?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===ii,a),c===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zo);return l<t.near||l>t.far?null:{distance:l,point:Zo.clone(),object:n}}function Jo(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,Ko),n.getVertexPosition(c,Yo),n.getVertexPosition(l,qo);const u=Cp(n,e,t,i,Ko,Yo,qo,Hc);if(u){const d=new $;Xn.getBarycoord(Hc,Ko,Yo,qo,d),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,c,l,d,new Qe)),o&&(u.uv1=Xn.getInterpolatedAttribute(o,a,c,l,d,new Qe)),s&&(u.normal=Xn.getInterpolatedAttribute(s,a,c,l,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new $,materialIndex:0};Xn.getNormal(Ko,Yo,qo,p.normal),u.face=p,u.barycoord=d}return u}class zr extends Wt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function g(v,f,h,_,b,y,R,M,C,U,E){const S=y/C,w=R/U,P=y/2,I=R/2,N=M/2,V=C+1,H=U+1;let Z=0,X=0;const ne=new $;for(let he=0;he<H;he++){const ve=he*w-I;for(let ie=0;ie<V;ie++){const oe=ie*S-P;ne[v]=oe*_,ne[f]=ve*b,ne[h]=N,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[f]=0,ne[h]=M>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(ie/C),d.push(1-he/U),Z+=1}}for(let he=0;he<U;he++)for(let ve=0;ve<C;ve++){const ie=p+ve+V*he,oe=p+ve+V*(he+1),Ae=p+(ve+1)+V*(he+1),te=p+(ve+1)+V*he;c.push(ie,oe,te),c.push(oe,Ae,te),X+=6}a.addGroup(m,X,E),m+=X,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const r in i)e[r]=i[r]}return e}function Pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Lp={clone:Ir,merge:hn};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new $,Wc=new Qe,Xc=new Qe;class fn extends yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,pr=1;class Op extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(fr,pr,e,t);r.layers=this.layers,this.add(r);const o=new fn(fr,pr,e,t);o.layers=this.layers,this.add(o);const s=new fn(fr,pr,e,t);s.layers=this.layers,this.add(s);const a=new fn(fr,pr,e,t);a.layers=this.layers,this.add(a);const c=new fn(fr,pr,e,t);c.layers=this.layers,this.add(c);const l=new fn(fr,pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bd extends tn{constructor(e=[],t=Cr,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dp extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zr(5,5,5),o=new bi({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:_i});o.uniforms.tEquirect.value=t;const s=new rn(r,o),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=pn),new Op(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}class qn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(l,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Td extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ed{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new $;class Cs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),o=wt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Es("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Es("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jc=new $,Kc=new Mt,Yc=new Mt,Up=new $,qc=new mt,Qo=new $,fa=new oi,$c=new mt,pa=new Ro;class kp extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tc,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(r),e.ray.intersectsSphere(fa)!==!1&&($c.copy(r).invert(),pa.copy(e.ray).applyMatrix4($c),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Kc.fromBufferAttribute(r.attributes.skinIndex,e),Yc.fromBufferAttribute(r.attributes.skinWeight,e),jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const s=Yc.getComponent(o);if(s!==0){const a=Kc.getComponent(o);qc.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Up.copy(jc).applyMatrix4(qc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sd extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wo extends tn{constructor(e=null,t=1,i=1,r,o,s,a,c,l=mn,u=mn,d,p){super(null,s,a,c,l,u,r,o,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=new mt,Bp=new mt;class Kl{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,s=e.length;o<s;o++){const a=e[o]?e[o].matrixWorld:Bp;Zc.multiplyMatrices(a,t[o]),Zc.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new wo(t,e,e,wn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const o=e.bones[i];let s=t[o];s===void 0&&(nt("Skeleton: No bone found with UUID:",o),s=new Sd),this.bones.push(s),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const s=t[r];e.bones.push(s.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Tl extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new mt,Jc=new mt,es=[],Qc=new Fn,zp=new mt,qr=new rn,$r=new oi;class Vp extends rn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),Qc.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Qc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),$r.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,s=e*o+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,mr),Jc.multiplyMatrices(i,mr),qr.matrixWorld=Jc,qr.raycast(e,es);for(let s=0,a=es.length;s<a;s++){const c=es[s];c.instanceId=o,c.object=this,t.push(c)}es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(r*this.count),r,this.count,Bl,Kn));const o=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,c=r*e;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ma=new $,Gp=new $,Hp=new ft;class Li{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ma.subVectors(i,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hp.getNormalMatrix(e),r=this.coplanarPoint(ma).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new oi,Wp=new Qe(.5,.5),ts=new $;class Yl{constructor(e=new Li,t=new Li,i=new Li,r=new Li,o=new Li,s=new Li){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],p=o[6],m=o[7],g=o[8],v=o[9],f=o[10],h=o[11],_=o[12],b=o[13],y=o[14],R=o[15];if(r[0].setComponents(l-s,m-u,h-g,R-_).normalize(),r[1].setComponents(l+s,m+u,h+g,R+_).normalize(),r[2].setComponents(l+a,m+d,h+v,R+b).normalize(),r[3].setComponents(l-a,m-d,h-v,R-b).normalize(),i)r[4].setComponents(c,p,f,y).normalize(),r[5].setComponents(l-c,m-p,h-f,R-y).normalize();else if(r[4].setComponents(l-c,m-p,h-f,R-y).normalize(),t===ni)r[5].setComponents(l+c,m+p,h+f,R+y).normalize();else if(t===Ts)r[5].setComponents(c,p,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=Wp.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ts.x=r.normal.x>0?e.max.x:e.min.x,ts.y=r.normal.y>0?e.max.y:e.min.y,ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ql extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ss=new $,Ms=new $,eu=new mt,Zr=new Ro,ns=new oi,ga=new $,tu=new $;class $l extends Ot{constructor(e=new Wt,t=new ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Ss.fromBufferAttribute(t,r-1),Ms.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ss.distanceTo(Ms);e.setAttribute("lineDistance",new xt(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(r),ns.radius+=o,e.ray.intersectsSphere(ns)===!1)return;eu.copy(r).invert(),Zr.copy(e.ray).applyMatrix4(eu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=m,f=g-1;v<f;v+=l){const h=u.getX(v),_=u.getX(v+1),b=is(this,e,Zr,c,h,_,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(m),h=is(this,e,Zr,c,v,f,g-1);h&&t.push(h)}}else{const m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let v=m,f=g-1;v<f;v+=l){const h=is(this,e,Zr,c,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=is(this,e,Zr,c,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function is(n,e,t,i,r,o,s){const a=n.geometry.attributes.position;if(Ss.fromBufferAttribute(a,r),Ms.fromBufferAttribute(a,o),t.distanceSqToSegment(Ss,Ms,ga,tu)>i)return;ga.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ga);if(!(l<e.near||l>e.far))return{distance:l,point:tu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const nu=new $,iu=new $;class Md extends $l{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)nu.fromBufferAttribute(t,r),iu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nu.distanceTo(iu);e.setAttribute("lineDistance",new xt(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xp extends $l{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zl extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ru=new mt,El=new Ro,rs=new oi,os=new $;class Ad extends Ot{constructor(e=new Wt,t=new Zl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(r),rs.radius+=o,e.ray.intersectsSphere(rs)===!1)return;ru.copy(r).invert(),El.copy(e.ray).applyMatrix4(ru);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const p=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let g=p,v=m;g<v;g++){const f=l.getX(g);os.fromBufferAttribute(d,f),ou(os,f,c,r,e,t,this)}}else{const p=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=p,v=m;g<v;g++)os.fromBufferAttribute(d,g),ou(os,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ou(n,e,t,i,r,o,s){const a=El.distanceSqToPoint(n);if(a<t){const c=new $;El.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Rd extends tn{constructor(e,t,i=$i,r,o,s,a=mn,c=mn,l,u=po,d=1){if(u!==po&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wd extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ps extends Wt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],m=[];let g=0;const v=[],f=i/2;let h=0;_(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(p,3)),this.setAttribute("uv",new xt(m,2));function _(){const y=new $,R=new $;let M=0;const C=(t-e)/i;for(let U=0;U<=o;U++){const E=[],S=U/o,w=S*(t-e)+e;for(let P=0;P<=r;P++){const I=P/r,N=I*c+a,V=Math.sin(N),H=Math.cos(N);R.x=w*V,R.y=-S*i+f,R.z=w*H,d.push(R.x,R.y,R.z),y.set(V,C,H).normalize(),p.push(y.x,y.y,y.z),m.push(I,1-S),E.push(g++)}v.push(E)}for(let U=0;U<r;U++)for(let E=0;E<o;E++){const S=v[E][U],w=v[E+1][U],P=v[E+1][U+1],I=v[E][U+1];(e>0||E!==0)&&(u.push(S,w,I),M+=3),(t>0||E!==o-1)&&(u.push(w,P,I),M+=3)}l.addGroup(h,M,0),h+=M}function b(y){const R=g,M=new Qe,C=new $;let U=0;const E=y===!0?e:t,S=y===!0?1:-1;for(let P=1;P<=r;P++)d.push(0,f*S,0),p.push(0,S,0),m.push(.5,.5),g++;const w=g;for(let P=0;P<=r;P++){const N=P/r*c+a,V=Math.cos(N),H=Math.sin(N);C.x=E*H,C.y=f*S,C.z=E*V,d.push(C.x,C.y,C.z),p.push(0,S,0),M.x=V*.5+.5,M.y=H*.5*S+.5,m.push(M.x,M.y),g++}for(let P=0;P<r;P++){const I=R+P,N=w+P;y===!0?u.push(N,N+1,I):u.push(N+1,N,I),U+=3}l.addGroup(h,U,y===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jl extends Ps{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Jl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function jp(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=Cd(n,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let a,c,l;if(i&&(o=Zp(n,e,o,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let p=t;p<r;p+=t){const m=n[p],g=n[p+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return yo(o,s,t,a,c,l,0),s}function Cd(n,e,t,i,r){let o;if(r===lm(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=su(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=su(s/i|0,n[s],n[s+1],o);return o&&Nr(o,o.next)&&(To(o),o=o.next),o}function Ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Nr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yo(n,e,t,i,r,o,s){if(!n)return;!s&&o&&nm(n,i,r,o);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(o?Yp(n,i,r,o):Kp(n)){e.push(c.i,n.i,l.i),To(n),n=l.next,a=l.next;continue}if(n=l,n===a){s?s===1?(n=qp(Ji(n),e),yo(n,e,t,i,r,o,2)):s===2&&$p(n,e,t,i,r,o):yo(Ji(n),e,t,i,r,o,1);break}}}function Kp(n){const e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;const r=e.x,o=t.x,s=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,o,s),d=Math.min(a,c,l),p=Math.max(r,o,s),m=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=m&&no(r,a,o,c,s,l,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yp(n,e,t,i){const r=n.prev,o=n,s=n.next;if(Bt(r,o,s)>=0)return!1;const a=r.x,c=o.x,l=s.x,u=r.y,d=o.y,p=s.y,m=Math.min(a,c,l),g=Math.min(u,d,p),v=Math.max(a,c,l),f=Math.max(u,d,p),h=Sl(m,g,e,t,i),_=Sl(v,f,e,t,i);let b=n.prevZ,y=n.nextZ;for(;b&&b.z>=h&&y&&y.z<=_;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=f&&b!==r&&b!==s&&no(a,u,c,d,l,p,b.x,b.y)&&Bt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==r&&y!==s&&no(a,u,c,d,l,p,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=h;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=f&&b!==r&&b!==s&&no(a,u,c,d,l,p,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==r&&y!==s&&no(a,u,c,d,l,p,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qp(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Nr(i,r)&&Ld(i,t,t.next,r)&&bo(i,r)&&bo(r,i)&&(e.push(i.i,t.i,r.i),To(t),To(t.next),t=n=r),t=t.next}while(t!==n);return Ji(t)}function $p(n,e,t,i,r,o){let s=n;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&om(s,a)){let c=Id(s,a);s=Ji(s,s.next),c=Ji(c,c.next),yo(s,e,t,i,r,o,0),yo(c,e,t,i,r,o,0);return}a=a.next}s=s.next}while(s!==n)}function Zp(n,e,t,i){const r=[];for(let o=0,s=e.length;o<s;o++){const a=e[o]*i,c=o<s-1?e[o+1]*i:n.length,l=Cd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(rm(l))}r.sort(Jp);for(let o=0;o<r.length;o++)t=Qp(r[o],t);return t}function Jp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Qp(n,e){const t=em(n,e);if(!t)return e;const i=Id(t,n);return Ji(i,i.next),Ji(t,t.next)}function em(n,e){let t=e;const i=n.x,r=n.y;let o=-1/0,s;if(Nr(n,t))return t;do{if(Nr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===i))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Pd(r<l?i:o,r,c,l,r<l?o:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);bo(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&tm(s,t)))&&(s=t,u=d)}t=t.next}while(t!==a);return s}function tm(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function nm(n,e,t,i){let r=n;do r.z===0&&(r.z=Sl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,im(r)}function im(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let s=i,a=0;for(let l=0;l<t&&(a++,s=s.nextZ,!!s);l++);let c=t;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,a--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Sl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pd(n,e,t,i,r,o,s,a){return(r-s)*(e-a)>=(n-s)*(o-a)&&(n-s)*(i-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(i-a)}function no(n,e,t,i,r,o,s,a){return!(n===s&&e===a)&&Pd(n,e,t,i,r,o,s,a)}function om(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sm(n,e)&&(bo(n,e)&&bo(e,n)&&am(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||Nr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Nr(n,e){return n.x===e.x&&n.y===e.y}function Ld(n,e,t,i){const r=as(Bt(n,e,t)),o=as(Bt(n,e,i)),s=as(Bt(t,i,n)),a=as(Bt(t,i,e));return!!(r!==o&&s!==a||r===0&&ss(n,t,e)||o===0&&ss(n,i,e)||s===0&&ss(t,n,i)||a===0&&ss(t,e,i))}function ss(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function as(n){return n>0?1:n<0?-1:0}function sm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ld(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function bo(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function am(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Id(n,e){const t=Ml(n.i,n.x,n.y),i=Ml(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function su(n,e,t,i){const r=Ml(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function To(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ml(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lm(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}class cm{static triangulate(e,t,i=2){return jp(e,t,i)}}class Ql{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return Ql.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];au(e),lu(i,e);let s=e.length;t.forEach(au);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,lu(i,t[c]);const a=cm.triangulate(i,r);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function au(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function lu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ls extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const _=h*p-s;for(let b=0;b<l;b++){const y=b*d-o;g.push(y,-_,0),v.push(0,0,1),f.push(b/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<a;_++){const b=_+l*h,y=_+l*(h+1),R=_+1+l*(h+1),M=_+1+l*h;m.push(b,y,M),m.push(y,R,M)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends Wt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const u=[],d=new $,p=new $,m=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){const _=[],b=h/i;let y=0;h===0&&s===0?y=.5/t:h===i&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const M=R/t;d.x=-e*Math.cos(r+M*o)*Math.sin(s+b*a),d.y=e*Math.cos(s+b*a),d.z=e*Math.sin(r+M*o)*Math.sin(s+b*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),f.push(M+y,1-b),_.push(l++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const b=u[h][_+1],y=u[h][_],R=u[h+1][_],M=u[h+1][_+1];(h!==0||s>0)&&m.push(b,y,M),(h!==i-1||c<Math.PI)&&m.push(y,R,M)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Is extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends Is{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class um extends Zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dm extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ls(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pm(n){function e(r,o){return n[r]-n[o]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function cu(n,e,t){const i=n.length,r=new n.constructor(i);for(let o=0,s=0;s!==i;++o){const a=t[o]*e;for(let c=0;c!==e;++c)r[s++]=n[a+c]}return r}function Nd(n,e,t,i){let r=1,o=n[0];for(;o!==void 0&&o[i]===void 0;)o=n[r++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(e.push(o.time),t.push(...s)),o=n[r++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(e.push(o.time),s.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do s=o[i],s!==void 0&&(e.push(o.time),t.push(s)),o=n[r++];while(o!==void 0)}class Co{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let s;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break t}s=t.length;break n}if(!(e>=o)){const a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break t}s=i,i=0;break n}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mm extends Co{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,i){const r=this.parameterPositions;let o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:o=e,a=2*t-i;break;case Mc:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Sc:s=e,c=2*i-t;break;case Mc:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,f=v*g,h=-p*f+2*p*v-p*g,_=(1+p)*f+(-1.5-2*p)*v+(-.5+p)*g+1,b=(-1-m)*f+(1.5+m)*v+.5*g,y=m*f-m*v;for(let R=0;R!==a;++R)o[R]=h*s[u+R]+_*s[l+R]+b*s[c+R]+y*s[d+R];return o}}class gm extends Co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let p=0;p!==a;++p)o[p]=s[l+p]*d+s[c+p]*u;return o}}class xm extends Co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case Xs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return Xs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);const a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,o=i.length;o===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){_t("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){_t("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&fm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){_t("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Xs,o=e.length-1;let s=1;for(let a=1;a<o;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*i,p=d-i,m=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[p+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];const d=a*i,p=s*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=xo;class Vr extends Qn{constructor(e,t,i){super(e,t,i)}}Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=go;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Od extends Qn{constructor(e,t,i,r){super(e,t,i,r)}}Od.prototype.ValueTypeName="color";class Or extends Qn{constructor(e,t,i,r){super(e,t,i,r)}}Or.prototype.ValueTypeName="number";class vm extends Co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Un.slerpFlat(o,0,s,l-a,s,l,c);return o}}class Dr extends Qn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new vm(this.times,this.values,this.getValueSize(),e)}}Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Qn{constructor(e,t,i){super(e,t,i)}}Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=go;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends Qn{constructor(e,t,i,r){super(e,t,i,r)}}Fr.prototype.ValueTypeName="vector";class _m{constructor(e="",t=-1,i=[],r=Uf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(bm(i[s]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,s=i.length;o!==s;++o)t.push(Qn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const o=t.length,s=[];for(let a=0;a<o;a++){let c=[],l=[];c.push((a+o-1)%o,a,(a+1)%o),l.push(0,1,0);const u=pm(c);c=cu(c,1,u),l=cu(l,1,u),!r&&c[0]===0&&(c.push(o),l.push(l[0])),s.push(new Or(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(o);if(u&&u.length>1){const d=u[1];let p=r[d];p||(r[d]=p=[]),p.push(l)}}const s=[];for(const a in r)s.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return s}static parseAnimation(e,t){if(nt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return _t("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,p,m,g,v){if(m.length!==0){const f=[],h=[];Nd(m,f,h,g),f.length!==0&&v.push(new d(p,f,h))}},r=[],o=e.name||"default",s=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const p=l[d].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const m={};let g;for(g=0;g<p.length;g++)if(p[g].morphTargets)for(let v=0;v<p[g].morphTargets.length;v++)m[p[g].morphTargets[v]]=-1;for(const v in m){const f=[],h=[];for(let _=0;_!==p[g].morphTargets.length;++_){const b=p[g];f.push(b.time),h.push(b.morphTarget===v?1:0)}r.push(new Or(".morphTargetInfluence["+v+"]",f,h))}c=m.length*s}else{const m=".bones["+t[d].name+"]";i(Fr,m+".position",p,"pos",r),i(Dr,m+".quaternion",p,"rot",r),i(Fr,m+".scale",p,"scl",r)}}return r.length===0?null:new this(o,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ym(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Or;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return Od;case"quaternion":return Dr;case"bool":case"boolean":return Vr;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function bm(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ym(n.type);if(n.times===void 0){const t=[],i=[];Nd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Tm{constructor(e,t,i){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Em=new Tm;class Rn{constructor(e){this.manager=e!==void 0?e:Em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class Sm extends Error{constructor(e,t){super(e),this.response=t}}class Ur extends Rn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=vi.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:i,onError:r});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=pi[e],d=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let v=0;const f=new ReadableStream({start(h){_();function _(){d.read().then(({done:b,value:y})=>{if(b)h.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let M=0,C=u.length;M<C;M++){const U=u[M];U.onProgress&&U.onProgress(R)}h.enqueue(y),_()}},b=>{h.error(b)})}}});return new Response(f)}else throw new Sm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{vi.add(`file:${e}`,l);const u=pi[e];delete pi[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=pi[e];if(u===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const gr=new WeakMap;class Mm extends Rn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=vi.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=gr.get(s);d===void 0&&(d=[],gr.set(s,d)),d.push({onLoad:t,onError:r})}return s}const a=vo("img");function c(){u(),t&&t(this);const d=gr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}gr.delete(this),o.manager.itemEnd(e)}function l(d){u(),r&&r(d),vi.remove(`image:${e}`);const p=gr.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(d)}gr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}}class Dd extends Rn{constructor(e){super(e)}load(e,t,i,r){const o=new tn,s=new Mm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Ns extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xa=new mt,uu=new $,du=new $;class ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Am extends ec{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Lr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rm extends Ns{constructor(e,t,i=0,r=Math.PI/3,o=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=r,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new Am}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hu=new mt,Jr=new $,va=new $;class wm extends ec{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jr),va.copy(i.position),va.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(va),i.updateMatrixWorld(),r.makeTranslation(-Jr.x,-Jr.y,-Jr.z),hu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu,i.coordinateSystem,i.reversedDepth)}}class Cm extends Ns{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tc extends yd{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pm extends ec{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vs extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Pm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lm extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const _a=new WeakMap;class Im extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=vi.get(`image-bitmap:${e}`);if(s!==void 0){if(o.manager.itemStart(e),s.then){s.then(l=>{if(_a.has(s)===!0)r&&r(_a.get(s)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(l),o.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),o.manager.itemEnd(e),l}).catch(function(l){r&&r(l),_a.set(c,l),vi.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Nm extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nc="\\[\\]\\.:\\/",Om=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",Dm="[^"+nc.replace("\\.","")+"]",Fm=/((?:WC+[\/:])*)/.source.replace("WC",ic),Um=/(WCOD+)?/.source.replace("WCOD",Dm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),zm=new RegExp("^"+Fm+Um+km+Bm+"$"),Vm=["material","materials","bones","map"];class Gm{constructor(e,t,i){const r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ct{constructor(e,t,i){this.path=t,this.parsedPath=i||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ct.Composite(e,t,i):new Ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(e){const t=zm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);Vm.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let s=0;s<o.length;s++){const a=o[s];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=Ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){_t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){_t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){_t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){_t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){_t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[r];if(s===void 0){const l=t.nodeName;_t("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=Gm;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hm extends Qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function pu(n,e,t,i){const r=Wm(i);switch(t){case cd:return n*e;case Bl:return n*e/r.components*r.byteLength;case zl:return n*e/r.components*r.byteLength;case Vl:return n*e*2/r.components*r.byteLength;case Gl:return n*e*2/r.components*r.byteLength;case ud:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case Hl:return n*e*4/r.components*r.byteLength;case ps:case ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gs:case xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:case qa:return Math.max(n,16)*Math.max(e,8)/4;case ja:case Ya:return Math.max(n,8)*Math.max(e,8)/2;case $a:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fl:case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wm(n){switch(n){case ri:case od:return{byteLength:1,components:1};case ho:case sd:case Br:return{byteLength:2,components:1};case Ul:case kl:return{byteLength:2,components:4};case $i:case Fl:case Kn:return{byteLength:4,components:1};case ad:case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fd(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Xm(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:jm,alphahash_pars_fragment:Km,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:$m,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:e0,batching_vertex:t0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:s0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:h0,color_pars_vertex:f0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:g0,defaultnormal_vertex:x0,displacementmap_pars_vertex:v0,displacementmap_vertex:_0,emissivemap_fragment:y0,emissivemap_pars_fragment:b0,colorspace_fragment:T0,colorspace_pars_fragment:E0,envmap_fragment:S0,envmap_common_pars_fragment:M0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:w0,fog_vertex:C0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:I0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:O0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:F0,lights_pars_begin:U0,lights_toon_fragment:B0,lights_toon_pars_fragment:z0,lights_phong_fragment:V0,lights_phong_pars_fragment:G0,lights_physical_fragment:H0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:j0,lights_fragment_end:K0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:Z0,map_fragment:J0,map_pars_fragment:Q0,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:og,morphnormal_vertex:sg,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:ug,normal_pars_fragment:dg,normal_pars_vertex:hg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:vg,opaque_fragment:_g,packing:yg,premultiplied_alpha_fragment:bg,project_vertex:Tg,dithering_fragment:Eg,dithering_pars_fragment:Sg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:wg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Lg,skinning_pars_vertex:Ig,skinning_vertex:Ng,skinnormal_vertex:Og,specularmap_fragment:Dg,specularmap_pars_fragment:Fg,tonemapping_fragment:Ug,tonemapping_pars_fragment:kg,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Hg,worldpos_vertex:Wg,background_vert:Xg,background_frag:jg,backgroundCube_vert:Kg,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:$g,depth_vert:Zg,depth_frag:Jg,distanceRGBA_vert:Qg,distanceRGBA_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:rx,meshbasic_vert:ox,meshbasic_frag:sx,meshlambert_vert:ax,meshlambert_frag:lx,meshmatcap_vert:cx,meshmatcap_frag:ux,meshnormal_vert:dx,meshnormal_frag:hx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:_x,points_frag:yx,shadow_vert:bx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:Sx},je={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ti={basic:{uniforms:hn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:hn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new it(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:hn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:hn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:hn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new it(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:hn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:hn([je.points,je.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:hn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:hn([je.common,je.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:hn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:hn([je.sprite,je.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:hn([je.common,je.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:hn([je.lights,je.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ti.physical={uniforms:hn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const cs={r:0,b:0,g:0},Hi=new Jn,Mx=new mt;function Ax(n,e,t,i,r,o,s){const a=new it(0);let c=o===!0?0:1,l,u,d=null,p=0,m=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const R=g(b);R===null?h(a,c):R&&R.isColor&&(h(R,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(b,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===ws)?(u===void 0&&(u=new rn(new zr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ir(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Hi)),u.material.toneMapped=vt.getTransfer(R.colorSpace)!==Lt,(d!==R||p!==R.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,p=R.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new rn(new Ls(2,2),new bi({name:"BackgroundMaterial",uniforms:Ir(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=vt.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,p=R.version,m=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,y){b.getRGB(cs,_d(n)),i.buffers.color.setClear(cs.r,cs.g,cs.b,y,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:v,addToRenderList:f,dispose:_}}function Rx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function a(S,w,P,I,N){let V=!1;const H=d(I,P,w);o!==H&&(o=H,l(o.object)),V=m(S,I,P,N),V&&g(S,I,P,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,y(S,w,P,I),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,w,P){const I=P.wireframe===!0;let N=i[S.id];N===void 0&&(N={},i[S.id]=N);let V=N[w.id];V===void 0&&(V={},N[w.id]=V);let H=V[I];return H===void 0&&(H=p(c()),V[I]=H),H}function p(S){const w=[],P=[],I=[];for(let N=0;N<t;N++)w[N]=0,P[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:I,object:S,attributes:{},index:null}}function m(S,w,P,I){const N=o.attributes,V=w.attributes;let H=0;const Z=P.getAttributes();for(const X in Z)if(Z[X].location>=0){const he=N[X];let ve=V[X];if(ve===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;H++}return o.attributesNum!==H||o.index!==I}function g(S,w,P,I){const N={},V=w.attributes;let H=0;const Z=P.getAttributes();for(const X in Z)if(Z[X].location>=0){let he=V[X];he===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),N[X]=ve,H++}o.attributes=N,o.attributesNum=H,o.index=I}function v(){const S=o.newAttributes;for(let w=0,P=S.length;w<P;w++)S[w]=0}function f(S){h(S,0)}function h(S,w){const P=o.newAttributes,I=o.enabledAttributes,N=o.attributeDivisors;P[S]=1,I[S]===0&&(n.enableVertexAttribArray(S),I[S]=1),N[S]!==w&&(n.vertexAttribDivisor(S,w),N[S]=w)}function _(){const S=o.newAttributes,w=o.enabledAttributes;for(let P=0,I=w.length;P<I;P++)w[P]!==S[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function b(S,w,P,I,N,V,H){H===!0?n.vertexAttribIPointer(S,w,P,N,V):n.vertexAttribPointer(S,w,P,I,N,V)}function y(S,w,P,I){v();const N=I.attributes,V=P.getAttributes(),H=w.defaultAttributeValues;for(const Z in V){const X=V[Z];if(X.location>=0){let ne=N[Z];if(ne===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const he=ne.normalized,ve=ne.itemSize,ie=e.get(ne);if(ie===void 0)continue;const oe=ie.buffer,Ae=ie.type,te=ie.bytesPerElement,z=Ae===n.INT||Ae===n.UNSIGNED_INT||ne.gpuType===Fl;if(ne.isInterleavedBufferAttribute){const j=ne.data,ae=j.stride,de=ne.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)h(X.location+_e,j.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<X.locationSize;_e++)f(X.location+_e);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let _e=0;_e<X.locationSize;_e++)b(X.location+_e,ve/X.locationSize,Ae,he,ae*te,(de+ve/X.locationSize*_e)*te,z)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)h(X.location+j,ne.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<X.locationSize;j++)f(X.location+j);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let j=0;j<X.locationSize;j++)b(X.location+j,ve/X.locationSize,Ae,he,ve*te,ve/X.locationSize*j*te,z)}}else if(H!==void 0){const he=H[Z];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(X.location,he);break;case 3:n.vertexAttrib3fv(X.location,he);break;case 4:n.vertexAttrib4fv(X.location,he);break;default:n.vertexAttrib1fv(X.location,he)}}}}_()}function R(){U();for(const S in i){const w=i[S];for(const P in w){const I=w[P];for(const N in I)u(I[N].object),delete I[N];delete w[P]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const P in w){const I=w[P];for(const N in I)u(I[N].object),delete I[N];delete w[P]}delete i[S.id]}function C(S){for(const w in i){const P=i[w];if(P[S.id]===void 0)continue;const I=P[S.id];for(const N in I)u(I[N].object),delete I[N];delete P[S.id]}}function U(){E(),s=!0,o!==r&&(o=r,l(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function wx(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)s(l[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cx(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ri&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Kn&&!U)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:M}}function Px(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Li,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||o&&!f)o?u(null):l();else{const _=o?0:i,b=_*4;let y=h.clippingState||null;c.value=y,y=u(g,p,b,m);for(let R=0;R!==b;++R)y[R]=t[R];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const h=m+v*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<h)&&(f=new Float32Array(h));for(let b=0,y=m;b!==v;++b,y+=4)s.copy(d[b]).applyMatrix4(_,a),s.normal.toArray(f,y),f[y+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Lx(n){let e=new WeakMap;function t(s,a){return a===Wa?s.mapping=Cr:a===Xa&&(s.mapping=Pr),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Wa||a===Xa)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Dp(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Oi=4,mu=[.125,.215,.35,.446,.526,.582],qi=20,Ix=256,Qr=new tc,gu=new it;let ya=null,ba=0,Ta=0,Ea=!1;const Nx=new $;class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:s=256,position:a=Nx}=o;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,Ta),this._renderer.xr.enabled=Ea,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Br,format:wn,colorSpace:ln,depthBuffer:!1},r=vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ox(o)),this._blurMaterial=Fx(o,e,t)}return r}_compileMaterial(e){const t=new rn(new Wt,e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,i,r,o){const c=new fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(gu),d.toneMapping=Di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new zr,new Yn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,f=v.material;let h=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,h=!0):(f.color.copy(gu),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[b],o.y,o.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[b],o.z)):(c.up.set(0,l[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[b]));const R=this._cubeSize;xr(r,y*R,b>2?R:0,R,R),d.setRenderTarget(r),h&&d.render(v,c),d.render(e,c)}d.toneMapping=m,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Cr||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Qr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const _=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=Dx(this._lodMax,_,b)}const s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),p=.05+l*.95,m=d*p,{_lodMax:g}=this,v=this._sizeLods[i],f=3*v*(i>g-Oi?i-g+Oi:0),h=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,xr(o,f,h,3*v,2*v),r.setRenderTarget(o),r.render(a,Qr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,xr(e,f,h,3*v,2*v),r.setRenderTarget(e),r.render(a,Qr)}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const p=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*qi-1),v=o/g,f=isFinite(o)?1+Math.floor(u*v):qi;f>qi&&nt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qi}`);const h=[];let _=0;for(let C=0;C<qi;++C){const U=C/v,E=Math.exp(-U*U/2);h.push(E),C===0?_+=E:C<f&&(_+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-i;const y=this._sizeLods[r],R=3*y*(r>b-Oi?r-b+Oi:0),M=4*(this._cubeSize-y);xr(t,R,M,3*y,2*y),c.setRenderTarget(t),c.render(d,Qr)}}function Ox(n){const e=[],t=[],i=[];let r=n;const o=n-Oi+1+mu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let c=1/a;s>n-Oi?c=mu[s-n+Oi-1]:s===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,h=1,_=new Float32Array(v*g*m),b=new Float32Array(f*g*m),y=new Float32Array(h*g*m);for(let M=0;M<m;M++){const C=M%3*2/3-1,U=M>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];_.set(E,v*g*M),b.set(p,f*g*M);const S=[M,M,M,M,M,M];y.set(S,h*g*M)}const R=new Wt;R.setAttribute("position",new jt(_,v)),R.setAttribute("uv",new jt(b,f)),R.setAttribute("faceIndex",new jt(y,h)),i.push(new rn(R,null)),r>Oi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function vu(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dx(n,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Fx(n,e,t){const i=new Float32Array(qi),r=new $(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _u(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function yu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Os(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ux(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wa||c===Xa,u=c===Cr||c===Pr;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new xu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new xu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function kx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_o("WebGLRenderer: "+i+" extension not supported."),r}}}function Bx(n,e,t,i){const r={},o=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete r[p.id];const m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(d){const p=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let b=0,y=_.length;b<y;b+=3){const R=_[b+0],M=_[b+1],C=_[b+2];p.push(R,M,M,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const R=b+0,M=b+1,C=b+2;p.push(R,M,M,C,C,R)}}else return;const f=new(fd(p)?vd:xd)(p,1);f.version=v;const h=o.get(d);h&&e.remove(h),o.set(d,f)}function u(d){const p=o.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function zx(n,e,t){let i;function r(p){i=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function c(p,m){n.drawElements(i,m,o,p*s),t.update(m,i,1)}function l(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,o,p*s,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,i,1)}function d(p,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/s,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,o,p,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=m[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:_t("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gx(n,e,t){const i=new WeakMap,r=new Mt;function o(s,a,c){const l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*R*4*d),C=new pd(M,y,R,d);C.type=Kn,C.needsUpdate=!0;const U=b*4;for(let S=0;S<d;S++){const w=f[S],P=h[S],I=_[S],N=y*R*4*S;for(let V=0;V<w.count;V++){const H=V*U;m===!0&&(r.fromBufferAttribute(w,V),M[N+H+0]=r.x,M[N+H+1]=r.y,M[N+H+2]=r.z,M[N+H+3]=0),g===!0&&(r.fromBufferAttribute(P,V),M[N+H+4]=r.x,M[N+H+5]=r.y,M[N+H+6]=r.z,M[N+H+7]=0),v===!0&&(r.fromBufferAttribute(I,V),M[N+H+8]=r.x,M[N+H+9]=r.y,M[N+H+10]=r.z,M[N+H+11]=I.itemSize===4?r.w:1)}}p={count:d,texture:C,size:new Qe(y,R)},i.set(a,p),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function Hx(n,e,t,i){let r=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const Ud=new tn,bu=new Rd(1,1),kd=new pd,Bd=new vp,zd=new bd,Tu=[],Eu=[],Su=new Float32Array(16),Mu=new Float32Array(9),Au=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Tu[r];if(o===void 0&&(o=new Float32Array(r),Tu[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ds(n,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Au.set(i),n.uniformMatrix2fv(this.addr,!1,Au),Jt(t,i)}}function qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Mu.set(i),n.uniformMatrix3fv(this.addr,!1,Mu),Jt(t,i)}}function $x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),Jt(t,i)}}function Zx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(bu.compareFunction=hd,o=bu):o=Ud,t.setTexture2D(e||o,r)}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function lv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kd,r)}function cv(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return jx;case 35666:return Kx;case 35674:return Yx;case 35675:return qx;case 35676:return $x;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(n,e){n.uniform1fv(this.addr,e)}function dv(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function hv(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function fv(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function pv(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mv(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gv(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xv(n,e){n.uniform1iv(this.addr,e)}function vv(n,e){n.uniform2iv(this.addr,e)}function _v(n,e){n.uniform3iv(this.addr,e)}function yv(n,e){n.uniform4iv(this.addr,e)}function bv(n,e){n.uniform1uiv(this.addr,e)}function Tv(n,e){n.uniform2uiv(this.addr,e)}function Ev(n,e){n.uniform3uiv(this.addr,e)}function Sv(n,e){n.uniform4uiv(this.addr,e)}function Mv(n,e,t){const i=this.cache,r=e.length,o=Ds(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Ud,o[s])}function Av(n,e,t){const i=this.cache,r=e.length,o=Ds(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Bd,o[s])}function Rv(n,e,t){const i=this.cache,r=e.length,o=Ds(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||zd,o[s])}function wv(n,e,t){const i=this.cache,r=e.length,o=Ds(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||kd,o[s])}function Cv(n){switch(n){case 5126:return uv;case 35664:return dv;case 35665:return hv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return bv;case 36294:return Tv;case 36295:return Ev;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return wv}}class Pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}}class Iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Ru(n,e){n.seq.push(e),n.map[e.id]=e}function Nv(n,e,t){const i=n.name,r=i.length;for(Sa.lastIndex=0;;){const o=Sa.exec(i),s=Sa.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){Ru(t,l===void 0?new Pv(a,n,e):new Lv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Iv(a),Ru(t,d)),t=d}}}class _s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Nv(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ov=37297;let Dv=0;function Fv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const Cu=new ft;function Uv(n){vt._getMatrix(Cu,vt.workingColorSpace,n);const e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case bs:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+Fv(n.getShaderSource(e),a)}else return o}function kv(n,e){const t=Uv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bv(n,e){let t;switch(e){case Cf:t="Linear";break;case Pf:t="Reinhard";break;case Lf:t="Cineon";break;case If:t="ACESFilmic";break;case Of:t="AgX";break;case Df:t="Neutral";break;case Nf:t="Custom";break;default:nt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const us=new $;function zv(){vt.getLuminanceCoefficients(us);const n=us.x.toFixed(4),e=us.y.toFixed(4),t=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Gv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function io(n){return n!==""}function Lu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(Wv,jv)}const Xv=new Map;function jv(n,e){let t=pt[e];if(t===void 0){const i=Xv.get(e);if(i!==void 0)t=pt[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(Kv,Yv)}function Yv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function $v(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cr:case Pr:e="ENVMAP_TYPE_CUBE";break;case ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case wf:e="ENVMAP_BLENDING_ADD";break}return e}function Qv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function e_(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=qv(t),l=$v(t),u=Zv(t),d=Jv(t),p=Qv(t),m=Vv(t),g=Gv(o),v=r.createProgram();let f,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),h.length>0&&(h+=`
`)):(f=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),h=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?pt.tonemapping_pars_fragment:"",t.toneMapping!==Di?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),s=Al(s),s=Lu(s,t),s=Iu(s,t),a=Al(a),a=Lu(a,t),a=Iu(a,t),s=Nu(s),a=Nu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=_+f+s,y=_+h+a,R=wu(r,r.VERTEX_SHADER,b),M=wu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,R),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(w){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v)||"",I=r.getShaderInfoLog(R)||"",N=r.getShaderInfoLog(M)||"",V=P.trim(),H=I.trim(),Z=N.trim();let X=!0,ne=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,M);else{const he=Pu(r,R,"vertex"),ve=Pu(r,M,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+he+`
`+ve)}else V!==""?nt("WebGLProgram: Program Info Log:",V):(H===""||Z==="")&&(ne=!1);ne&&(w.diagnostics={runnable:X,programLog:V,vertexShader:{log:H,prefix:f},fragmentShader:{log:Z,prefix:h}})}r.deleteShader(R),r.deleteShader(M),U=new _s(r,v),E=Hv(r,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Ov)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=M,this}let t_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new i_(e),t.set(e,i)),i}}class i_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function r_(n,e,t,i,r,o,s){const a=new md,c=new n_,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function f(E,S,w,P,I){const N=P.fog,V=I.geometry,H=E.isMeshStandardMaterial?P.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),X=Z&&Z.mapping===ws?Z.image.height:null,ne=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=he!==void 0?he.length:0;let ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let oe,Ae,te,z;if(ne){const Se=ti[ne];oe=Se.vertexShader,Ae=Se.fragmentShader}else oe=E.vertexShader,Ae=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),z=c.getFragmentShaderID(E);const j=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),de=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,Ne=!!E.map,We=!!E.matcap,Be=!!Z,et=!!E.aoMap,W=!!E.lightMap,Ke=!!E.bumpMap,J=!!E.normalMap,me=!!E.displacementMap,Q=!!E.emissiveMap,be=!!E.metalnessMap,Ee=!!E.roughnessMap,ze=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,A=E.iridescence>0,D=E.sheen>0,O=E.transmission>0,F=ze&&!!E.anisotropyMap,Y=T&&!!E.clearcoatMap,K=T&&!!E.clearcoatNormalMap,se=T&&!!E.clearcoatRoughnessMap,fe=A&&!!E.iridescenceMap,ee=A&&!!E.iridescenceThicknessMap,xe=D&&!!E.sheenColorMap,Ve=D&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Ie=!!E.specularColorMap,Ue=!!E.specularIntensityMap,k=O&&!!E.transmissionMap,Ce=O&&!!E.thicknessMap,Re=!!E.gradientMap,Te=!!E.alphaMap,B=E.alphaTest>0,q=!!E.alphaHash,ye=!!E.extensions;let De=Di;E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=n.toneMapping);const Pe={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:Ae,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:_e,batchingColor:_e&&I._colorsTexture!==null,instancing:de,instancingColor:de&&I.instanceColor!==null,instancingMorph:de&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ln,alphaToCoverage:!!E.alphaToCoverage,map:Ne,matcap:We,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:X,aoMap:et,lightMap:W,bumpMap:Ke,normalMap:J,displacementMap:p&&me,emissiveMap:Q,normalMapObjectSpace:J&&E.normalMapType===Vf,normalMapTangentSpace:J&&E.normalMapType===Wl,metalnessMap:be,roughnessMap:Ee,anisotropy:ze,anisotropyMap:F,clearcoat:T,clearcoatMap:Y,clearcoatNormalMap:K,clearcoatRoughnessMap:se,dispersion:x,iridescence:A,iridescenceMap:fe,iridescenceThicknessMap:ee,sheen:D,sheenColorMap:xe,sheenRoughnessMap:Ve,specularMap:Xe,specularColorMap:Ie,specularIntensityMap:Ue,transmission:O,transmissionMap:k,thicknessMap:Ce,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Er&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:B,alphaHash:q,combine:E.combine,mapUv:Ne&&v(E.map.channel),aoMapUv:et&&v(E.aoMap.channel),lightMapUv:W&&v(E.lightMap.channel),bumpMapUv:Ke&&v(E.bumpMap.channel),normalMapUv:J&&v(E.normalMap.channel),displacementMapUv:me&&v(E.displacementMap.channel),emissiveMapUv:Q&&v(E.emissiveMap.channel),metalnessMapUv:be&&v(E.metalnessMap.channel),roughnessMapUv:Ee&&v(E.roughnessMap.channel),anisotropyMapUv:F&&v(E.anisotropyMap.channel),clearcoatMapUv:Y&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:K&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(E.sheenRoughnessMap.channel),specularMapUv:Xe&&v(E.specularMap.channel),specularColorMapUv:Ie&&v(E.specularColorMap.channel),specularIntensityMapUv:Ue&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:Ce&&v(E.thicknessMap.channel),alphaMapUv:Te&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(J||ze),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(Ne||Te),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&vt.getTransfer(E.map.colorSpace)===Lt,decodeVideoTextureEmissive:Q&&E.emissiveMap.isVideoTexture===!0&&vt.getTransfer(E.emissiveMap.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dn,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&E.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)S.push(w),S.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(_(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=g[E.type];let w;if(S){const P=ti[S];w=Lp.clone(P.uniforms)}else w=E.uniforms;return w}function R(E,S){let w;for(let P=0,I=u.length;P<I;P++){const N=u[P];if(N.cacheKey===S){w=N,++w.usedTimes;break}}return w===void 0&&(w=new e_(n,S,E,o),u.push(w)),w}function M(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:U}}function o_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function s_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fu(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,p,m,g,v,f){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=f),e++,h}function a(d,p,m,g,v,f){const h=s(d,p,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,p,m,g,v,f){const h=s(d,p,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,p){t.length>1&&t.sort(d||s_),i.length>1&&i.sort(p||Du),r.length>1&&r.sort(p||Du)}function u(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function a_(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Fu,n.set(i,[s])):r>=o.length?(s=new Fu,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function l_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new it};break;case"SpotLight":t={position:new $,direction:new $,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function c_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let u_=0;function d_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function h_(n){const e=new l_,t=c_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,o=new mt,s=new mt;function a(l){let u=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,v=0,f=0,h=0,_=0,b=0,y=0,R=0,M=0,C=0;l.sort(d_);for(let E=0,S=l.length;E<S;E++){const w=l[E],P=w.color,I=w.intensity,N=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=P.r*I,d+=P.g*I,p+=P.b*I;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],I);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,X=t.get(w);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=w.shadow.matrix,_++}i.directional[m]=H,m++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(P).multiplyScalar(I),H.distance=N,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[v]=H;const Z=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,Z.updateMatrices(w),w.castShadow&&M++),i.spotLightMatrix[v]=Z.matrix,w.castShadow){const X=t.get(w);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=V,y++}v++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(P).multiplyScalar(I),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[f]=H,f++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const Z=w.shadow,X=t.get(w);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=w.shadow.matrix,b++}i.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(I),H.groundColor.copy(w.groundColor).multiplyScalar(I),i.hemi[h]=H,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==_||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==R||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+R-M,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=_,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=R,U.numLightProbes=C,i.version=u_++)}function c(l,u){let d=0,p=0,m=0,g=0,v=0;const f=u.matrixWorldInverse;for(let h=0,_=l.length;h<_;h++){const b=l[h];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),d++}else if(b.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),m++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),s.identity(),o.copy(b.matrixWorld),o.premultiply(f),s.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:i}}function Uu(n){const e=new h_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function f_(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Uu(n),e.set(r,[a])):o>=s.length?(a=new Uu(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g_(n,e,t){let i=new Yl;const r=new Qe,o=new Qe,s=new Mt,a=new dm({depthPacking:zf}),c=new hm,l={},u=t.maxTextureSize,d={[ii]:an,[an]:ii,[Dn]:Dn},p=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rn(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let h=this.type;this.render=function(M,C,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),P=n.state;P.setBlending(_i),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=h!==gi&&this.type===gi,N=h===gi&&this.type!==gi;for(let V=0,H=M.length;V<H;V++){const Z=M[V],X=Z.shadow;if(X===void 0){nt("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ne=X.getFrameExtents();if(r.multiply(ne),o.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ne.x),r.x=o.x*ne.x,X.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ne.y),r.y=o.y*ne.y,X.mapSize.y=o.y)),X.map===null||I===!0||N===!0){const ve=this.type!==gi?{minFilter:mn,magFilter:mn}:{};X.map!==null&&X.map.dispose(),X.map=new Zi(r.x,r.y,ve),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const he=X.getViewportCount();for(let ve=0;ve<he;ve++){const ie=X.getViewport(ve);s.set(o.x*ie.x,o.y*ie.y,o.x*ie.z,o.y*ie.w),P.viewport(s),X.updateMatrices(Z,ve),i=X.getFrustum(),y(C,U,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===gi&&_(X,U),X.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(E,S,w)};function _(M,C){const U=e.update(v);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zi(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,U,p,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,U,m,v,null)}function b(M,C,U,E){let S=null;const w=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)S=w;else if(S=U.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=S.uuid,I=C.uuid;let N=l[P];N===void 0&&(N={},l[P]=N);let V=N[I];V===void 0&&(V=S.clone(),N[I]=V,C.addEventListener("dispose",R)),S=V}if(S.visible=C.visible,S.wireframe=C.wireframe,E===gi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=n.properties.get(S);P.light=U}return S}function y(M,C,U,E,S){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===gi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);const I=e.update(M),N=M.material;if(Array.isArray(N)){const V=I.groups;for(let H=0,Z=V.length;H<Z;H++){const X=V[H],ne=N[X.materialIndex];if(ne&&ne.visible){const he=b(M,ne,E,S);M.onBeforeShadow(n,M,C,U,I,he,X),n.renderBufferDirect(U,null,I,he,M,X),M.onAfterShadow(n,M,C,U,I,he,X)}}}else if(N.visible){const V=b(M,N,E,S);M.onBeforeShadow(n,M,C,U,I,V,null),n.renderBufferDirect(U,null,I,V,M,null),M.onAfterShadow(n,M,C,U,I,V,null)}}const P=M.children;for(let I=0,N=P.length;I<N;I++)y(P[I],C,U,E,S)}function R(M){M.target.removeEventListener("dispose",R);for(const U in l){const E=l[U],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const x_={[Ua]:ka,[Ba]:Ga,[za]:Ha,[wr]:Va,[ka]:Ua,[Ga]:Ba,[Ha]:za,[Va]:wr};function v_(n,e){function t(){let k=!1;const Ce=new Mt;let Re=null;const Te=new Mt(0,0,0,0);return{setMask:function(B){Re!==B&&!k&&(n.colorMask(B,B,B,B),Re=B)},setLocked:function(B){k=B},setClear:function(B,q,ye,De,Pe){Pe===!0&&(B*=De,q*=De,ye*=De),Ce.set(B,q,ye,De),Te.equals(Ce)===!1&&(n.clearColor(B,q,ye,De),Te.copy(Ce))},reset:function(){k=!1,Re=null,Te.set(-1,0,0,0)}}}function i(){let k=!1,Ce=!1,Re=null,Te=null,B=null;return{setReversed:function(q){if(Ce!==q){const ye=e.get("EXT_clip_control");q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Ce=q;const De=B;B=null,this.setClear(De)}},getReversed:function(){return Ce},setTest:function(q){q?j(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(q){Re!==q&&!k&&(n.depthMask(q),Re=q)},setFunc:function(q){if(Ce&&(q=x_[q]),Te!==q){switch(q){case Ua:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ga:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=q}},setLocked:function(q){k=q},setClear:function(q){B!==q&&(Ce&&(q=1-q),n.clearDepth(q),B=q)},reset:function(){k=!1,Re=null,Te=null,B=null,Ce=!1}}}function r(){let k=!1,Ce=null,Re=null,Te=null,B=null,q=null,ye=null,De=null,Pe=null;return{setTest:function(Se){k||(Se?j(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Se){Ce!==Se&&!k&&(n.stencilMask(Se),Ce=Se)},setFunc:function(Se,we,Oe){(Re!==Se||Te!==we||B!==Oe)&&(n.stencilFunc(Se,we,Oe),Re=Se,Te=we,B=Oe)},setOp:function(Se,we,Oe){(q!==Se||ye!==we||De!==Oe)&&(n.stencilOp(Se,we,Oe),q=Se,ye=we,De=Oe)},setLocked:function(Se){k=Se},setClear:function(Se){Pe!==Se&&(n.clearStencil(Se),Pe=Se)},reset:function(){k=!1,Ce=null,Re=null,Te=null,B=null,q=null,ye=null,De=null,Pe=null}}}const o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,_=null,b=null,y=null,R=null,M=null,C=new it(0,0,0),U=0,E=!1,S=null,w=null,P=null,I=null,N=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Z>=2);let ne=null,he={};const ve=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),oe=new Mt().fromArray(ve),Ae=new Mt().fromArray(ie);function te(k,Ce,Re,Te){const B=new Uint8Array(4),q=n.createTexture();n.bindTexture(k,q),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<Re;ye++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,B):n.texImage2D(Ce+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,B);return q}const z={};z[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(n.DEPTH_TEST),s.setFunc(wr),Ke(!1),J(vc),j(n.CULL_FACE),et(_i);function j(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ae(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function de(k,Ce){return d[k]!==Ce?(n.bindFramebuffer(k,Ce),d[k]=Ce,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function _e(k,Ce){let Re=m,Te=!1;if(k){Re=p.get(Ce),Re===void 0&&(Re=[],p.set(Ce,Re));const B=k.textures;if(Re.length!==B.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ye=B.length;q<ye;q++)Re[q]=n.COLOR_ATTACHMENT0+q;Re.length=B.length,Te=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,Te=!0);Te&&n.drawBuffers(Re)}function Ne(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const We={[Yi]:n.FUNC_ADD,[uf]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};We[hf]=n.MIN,We[ff]=n.MAX;const Be={[pf]:n.ZERO,[mf]:n.ONE,[gf]:n.SRC_COLOR,[Da]:n.SRC_ALPHA,[Tf]:n.SRC_ALPHA_SATURATE,[yf]:n.DST_COLOR,[vf]:n.DST_ALPHA,[xf]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[bf]:n.ONE_MINUS_DST_COLOR,[_f]:n.ONE_MINUS_DST_ALPHA,[Ef]:n.CONSTANT_COLOR,[Sf]:n.ONE_MINUS_CONSTANT_COLOR,[Mf]:n.CONSTANT_ALPHA,[Af]:n.ONE_MINUS_CONSTANT_ALPHA};function et(k,Ce,Re,Te,B,q,ye,De,Pe,Se){if(k===_i){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),k!==cf){if(k!==f||Se!==E){if((h!==Yi||y!==Yi)&&(n.blendEquation(n.FUNC_ADD),h=Yi,y=Yi),Se)switch(k){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",k);break}else switch(k){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",k);break}_=null,b=null,R=null,M=null,C.set(0,0,0),U=0,f=k,E=Se}return}B=B||Ce,q=q||Re,ye=ye||Te,(Ce!==h||B!==y)&&(n.blendEquationSeparate(We[Ce],We[B]),h=Ce,y=B),(Re!==_||Te!==b||q!==R||ye!==M)&&(n.blendFuncSeparate(Be[Re],Be[Te],Be[q],Be[ye]),_=Re,b=Te,R=q,M=ye),(De.equals(C)===!1||Pe!==U)&&(n.blendColor(De.r,De.g,De.b,Pe),C.copy(De),U=Pe),f=k,E=!1}function W(k,Ce){k.side===Dn?ae(n.CULL_FACE):j(n.CULL_FACE);let Re=k.side===an;Ce&&(Re=!Re),Ke(Re),k.blending===Er&&k.transparent===!1?et(_i):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),o.setMask(k.colorWrite);const Te=k.stencilWrite;a.setTest(Te),Te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(k){S!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),S=k)}function J(k){k!==sf?(j(n.CULL_FACE),k!==w&&(k===vc?n.cullFace(n.BACK):k===af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),w=k}function me(k){k!==P&&(H&&n.lineWidth(k),P=k)}function Q(k,Ce,Re){k?(j(n.POLYGON_OFFSET_FILL),(I!==Ce||N!==Re)&&(n.polygonOffset(Ce,Re),I=Ce,N=Re)):ae(n.POLYGON_OFFSET_FILL)}function be(k){k?j(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function Ee(k){k===void 0&&(k=n.TEXTURE0+V-1),ne!==k&&(n.activeTexture(k),ne=k)}function ze(k,Ce,Re){Re===void 0&&(ne===null?Re=n.TEXTURE0+V-1:Re=ne);let Te=he[Re];Te===void 0&&(Te={type:void 0,texture:void 0},he[Re]=Te),(Te.type!==k||Te.texture!==Ce)&&(ne!==Re&&(n.activeTexture(Re),ne=Re),n.bindTexture(k,Ce||z[k]),Te.type=k,Te.texture=Ce)}function T(){const k=he[ne];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function D(){try{n.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function O(){try{n.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function K(){try{n.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function se(){try{n.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function fe(){try{n.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{n.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function xe(k){oe.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),oe.copy(k))}function Ve(k){Ae.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ae.copy(k))}function Xe(k,Ce){let Re=l.get(Ce);Re===void 0&&(Re=new WeakMap,l.set(Ce,Re));let Te=Re.get(k);Te===void 0&&(Te=n.getUniformBlockIndex(Ce,k.name),Re.set(k,Te))}function Ie(k,Ce){const Te=l.get(Ce).get(k);c.get(Ce)!==Te&&(n.uniformBlockBinding(Ce,Te,k.__bindingPointIndex),c.set(Ce,Te))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,he={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,_=null,b=null,y=null,R=null,M=null,C=new it(0,0,0),U=0,E=!1,S=null,w=null,P=null,I=null,N=null,oe.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:j,disable:ae,bindFramebuffer:de,drawBuffers:_e,useProgram:Ne,setBlending:et,setMaterial:W,setFlipSided:Ke,setCullFace:J,setLineWidth:me,setPolygonOffset:Q,setScissorTest:be,activeTexture:Ee,bindTexture:ze,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:A,texImage2D:fe,texImage3D:ee,updateUBOMapping:Xe,uniformBlockBinding:Ie,texStorage2D:K,texStorage3D:se,texSubImage2D:D,texSubImage3D:O,compressedTexSubImage2D:F,compressedTexSubImage3D:Y,scissor:xe,viewport:Ve,reset:Ue}}function __(n,e,t,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):vo("canvas")}function v(T,x,A){let D=1;const O=ze(T);if((O.width>A||O.height>A)&&(D=A/Math.max(O.width,O.height)),D<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const F=Math.floor(D*O.width),Y=Math.floor(D*O.height);d===void 0&&(d=g(F,Y));const K=x?g(F,Y):d;return K.width=F,K.height=Y,K.getContext("2d").drawImage(T,0,0,F,Y),nt("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+F+"x"+Y+")."),K}else return"data"in T&&nt("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),T;return T}function f(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,x,A,D,O=!1){if(T!==null){if(n[T]!==void 0)return n[T];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let F=x;if(x===n.RED&&(A===n.FLOAT&&(F=n.R32F),A===n.HALF_FLOAT&&(F=n.R16F),A===n.UNSIGNED_BYTE&&(F=n.R8)),x===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.R8UI),A===n.UNSIGNED_SHORT&&(F=n.R16UI),A===n.UNSIGNED_INT&&(F=n.R32UI),A===n.BYTE&&(F=n.R8I),A===n.SHORT&&(F=n.R16I),A===n.INT&&(F=n.R32I)),x===n.RG&&(A===n.FLOAT&&(F=n.RG32F),A===n.HALF_FLOAT&&(F=n.RG16F),A===n.UNSIGNED_BYTE&&(F=n.RG8)),x===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RG8UI),A===n.UNSIGNED_SHORT&&(F=n.RG16UI),A===n.UNSIGNED_INT&&(F=n.RG32UI),A===n.BYTE&&(F=n.RG8I),A===n.SHORT&&(F=n.RG16I),A===n.INT&&(F=n.RG32I)),x===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RGB8UI),A===n.UNSIGNED_SHORT&&(F=n.RGB16UI),A===n.UNSIGNED_INT&&(F=n.RGB32UI),A===n.BYTE&&(F=n.RGB8I),A===n.SHORT&&(F=n.RGB16I),A===n.INT&&(F=n.RGB32I)),x===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),A===n.UNSIGNED_INT&&(F=n.RGBA32UI),A===n.BYTE&&(F=n.RGBA8I),A===n.SHORT&&(F=n.RGBA16I),A===n.INT&&(F=n.RGBA32I)),x===n.RGB&&(A===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),A===n.UNSIGNED_INT_10F_11F_11F_REV&&(F=n.R11F_G11F_B10F)),x===n.RGBA){const Y=O?bs:vt.getTransfer(D);A===n.FLOAT&&(F=n.RGBA32F),A===n.HALF_FLOAT&&(F=n.RGBA16F),A===n.UNSIGNED_BYTE&&(F=Y===Lt?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(T,x){let A;return T?x===null||x===$i||x===fo?A=n.DEPTH24_STENCIL8:x===Kn?A=n.DEPTH32F_STENCIL8:x===ho&&(A=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$i||x===fo?A=n.DEPTH_COMPONENT24:x===Kn?A=n.DEPTH_COMPONENT32F:x===ho&&(A=n.DEPTH_COMPONENT16),A}function R(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==mn&&T.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function M(T){const x=T.target;x.removeEventListener("dispose",M),U(x),x.isVideoTexture&&u.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),S(x)}function U(T){const x=i.get(T);if(x.__webglInit===void 0)return;const A=T.source,D=p.get(A);if(D){const O=D[x.__cacheKey];O.usedTimes--,O.usedTimes===0&&E(T),Object.keys(D).length===0&&p.delete(A)}i.remove(T)}function E(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const A=T.source,D=p.get(A);delete D[x.__cacheKey],s.memory.textures--}function S(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(x.__webglFramebuffer[D]))for(let O=0;O<x.__webglFramebuffer[D].length;O++)n.deleteFramebuffer(x.__webglFramebuffer[D][O]);else n.deleteFramebuffer(x.__webglFramebuffer[D]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[D])}else{if(Array.isArray(x.__webglFramebuffer))for(let D=0;D<x.__webglFramebuffer.length;D++)n.deleteFramebuffer(x.__webglFramebuffer[D]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let D=0;D<x.__webglColorRenderbuffer.length;D++)x.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[D]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const A=T.textures;for(let D=0,O=A.length;D<O;D++){const F=i.get(A[D]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),s.memory.textures--),i.remove(A[D])}i.remove(T)}let w=0;function P(){w=0}function I(){const T=w;return T>=r.maxTextures&&nt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function N(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const A=i.get(T);if(T.isVideoTexture&&be(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&A.__version!==T.version){const D=T.image;if(D===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{z(A,T,x);return}}else T.isExternalTexture&&(A.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+x)}function H(T,x){const A=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){z(A,T,x);return}else T.isExternalTexture&&(A.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+x)}function Z(T,x){const A=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){z(A,T,x);return}t.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+x)}function X(T,x){const A=i.get(T);if(T.version>0&&A.__version!==T.version){j(A,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+x)}const ne={[jn]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[ys]:n.MIRRORED_REPEAT},he={[mn]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[fs]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},ve={[Gf]:n.NEVER,[Yf]:n.ALWAYS,[Hf]:n.LESS,[hd]:n.LEQUAL,[Wf]:n.EQUAL,[Kf]:n.GEQUAL,[Xf]:n.GREATER,[jf]:n.NOTEQUAL};function ie(T,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===fs||x.magFilter===to||x.magFilter===xi||x.minFilter===pn||x.minFilter===fs||x.minFilter===to||x.minFilter===xi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ne[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ne[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ne[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==to&&x.minFilter!==xi||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function oe(T,x){let A=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",M));const D=x.source;let O=p.get(D);O===void 0&&(O={},p.set(D,O));const F=N(x);if(F!==T.__cacheKey){O[F]===void 0&&(O[F]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,A=!0),O[F].usedTimes++;const Y=O[T.__cacheKey];Y!==void 0&&(O[T.__cacheKey].usedTimes--,Y.usedTimes===0&&E(x)),T.__cacheKey=F,T.__webglTexture=O[F].texture}return A}function Ae(T,x,A){return Math.floor(Math.floor(T/A)/x)}function te(T,x,A,D){const F=T.updateRanges;if(F.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,A,D,x.data);else{F.sort((ee,xe)=>ee.start-xe.start);let Y=0;for(let ee=1;ee<F.length;ee++){const xe=F[Y],Ve=F[ee],Xe=xe.start+xe.count,Ie=Ae(Ve.start,x.width,4),Ue=Ae(xe.start,x.width,4);Ve.start<=Xe+1&&Ie===Ue&&Ae(Ve.start+Ve.count-1,x.width,4)===Ie?xe.count=Math.max(xe.count,Ve.start+Ve.count-xe.start):(++Y,F[Y]=Ve)}F.length=Y+1;const K=n.getParameter(n.UNPACK_ROW_LENGTH),se=n.getParameter(n.UNPACK_SKIP_PIXELS),fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ee=0,xe=F.length;ee<xe;ee++){const Ve=F[ee],Xe=Math.floor(Ve.start/4),Ie=Math.ceil(Ve.count/4),Ue=Xe%x.width,k=Math.floor(Xe/x.width),Ce=Ie,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ue,k,Ce,Re,A,D,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,K),n.pixelStorei(n.UNPACK_SKIP_PIXELS,se),n.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function z(T,x,A){let D=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(D=n.TEXTURE_3D);const O=oe(T,x),F=x.source;t.bindTexture(D,T.__webglTexture,n.TEXTURE0+A);const Y=i.get(F);if(F.version!==Y.__version||O===!0){t.activeTexture(n.TEXTURE0+A);const K=vt.getPrimaries(vt.workingColorSpace),se=x.colorSpace===Ni?null:vt.getPrimaries(x.colorSpace),fe=x.colorSpace===Ni||K===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ee=v(x.image,!1,r.maxTextureSize);ee=Ee(x,ee);const xe=o.convert(x.format,x.colorSpace),Ve=o.convert(x.type);let Xe=b(x.internalFormat,xe,Ve,x.colorSpace,x.isVideoTexture);ie(D,x);let Ie;const Ue=x.mipmaps,k=x.isVideoTexture!==!0,Ce=Y.__version===void 0||O===!0,Re=F.dataReady,Te=R(x,ee);if(x.isDepthTexture)Xe=y(x.format===mo,x.type),Ce&&(k?t.texStorage2D(n.TEXTURE_2D,1,Xe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Xe,ee.width,ee.height,0,xe,Ve,null));else if(x.isDataTexture)if(Ue.length>0){k&&Ce&&t.texStorage2D(n.TEXTURE_2D,Te,Xe,Ue[0].width,Ue[0].height);for(let B=0,q=Ue.length;B<q;B++)Ie=Ue[B],k?Re&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ie.width,Ie.height,xe,Ve,Ie.data):t.texImage2D(n.TEXTURE_2D,B,Xe,Ie.width,Ie.height,0,xe,Ve,Ie.data);x.generateMipmaps=!1}else k?(Ce&&t.texStorage2D(n.TEXTURE_2D,Te,Xe,ee.width,ee.height),Re&&te(x,ee,xe,Ve)):t.texImage2D(n.TEXTURE_2D,0,Xe,ee.width,ee.height,0,xe,Ve,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Xe,Ue[0].width,Ue[0].height,ee.depth);for(let B=0,q=Ue.length;B<q;B++)if(Ie=Ue[B],x.format!==wn)if(xe!==null)if(k){if(Re)if(x.layerUpdates.size>0){const ye=pu(Ie.width,Ie.height,x.format,x.type);for(const De of x.layerUpdates){const Pe=Ie.data.subarray(De*ye/Ie.data.BYTES_PER_ELEMENT,(De+1)*ye/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,De,Ie.width,Ie.height,1,xe,Pe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ie.width,Ie.height,ee.depth,xe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Xe,Ie.width,Ie.height,ee.depth,0,Ie.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ie.width,Ie.height,ee.depth,xe,Ve,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Xe,Ie.width,Ie.height,ee.depth,0,xe,Ve,Ie.data)}else{k&&Ce&&t.texStorage2D(n.TEXTURE_2D,Te,Xe,Ue[0].width,Ue[0].height);for(let B=0,q=Ue.length;B<q;B++)Ie=Ue[B],x.format!==wn?xe!==null?k?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Ie.width,Ie.height,xe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Xe,Ie.width,Ie.height,0,Ie.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Re&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ie.width,Ie.height,xe,Ve,Ie.data):t.texImage2D(n.TEXTURE_2D,B,Xe,Ie.width,Ie.height,0,xe,Ve,Ie.data)}else if(x.isDataArrayTexture)if(k){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Xe,ee.width,ee.height,ee.depth),Re)if(x.layerUpdates.size>0){const B=pu(ee.width,ee.height,x.format,x.type);for(const q of x.layerUpdates){const ye=ee.data.subarray(q*B/ee.data.BYTES_PER_ELEMENT,(q+1)*B/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,xe,Ve,ye)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ve,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,ee.width,ee.height,ee.depth,0,xe,Ve,ee.data);else if(x.isData3DTexture)k?(Ce&&t.texStorage3D(n.TEXTURE_3D,Te,Xe,ee.width,ee.height,ee.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ve,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,ee.width,ee.height,ee.depth,0,xe,Ve,ee.data);else if(x.isFramebufferTexture){if(Ce)if(k)t.texStorage2D(n.TEXTURE_2D,Te,Xe,ee.width,ee.height);else{let B=ee.width,q=ee.height;for(let ye=0;ye<Te;ye++)t.texImage2D(n.TEXTURE_2D,ye,Xe,B,q,0,xe,Ve,null),B>>=1,q>>=1}}else if(Ue.length>0){if(k&&Ce){const B=ze(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Te,Xe,B.width,B.height)}for(let B=0,q=Ue.length;B<q;B++)Ie=Ue[B],k?Re&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,xe,Ve,Ie):t.texImage2D(n.TEXTURE_2D,B,Xe,xe,Ve,Ie);x.generateMipmaps=!1}else if(k){if(Ce){const B=ze(ee);t.texStorage2D(n.TEXTURE_2D,Te,Xe,B.width,B.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ve,ee)}else t.texImage2D(n.TEXTURE_2D,0,Xe,xe,Ve,ee);f(x)&&h(D),Y.__version=F.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function j(T,x,A){if(x.image.length!==6)return;const D=oe(T,x),O=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+A);const F=i.get(O);if(O.version!==F.__version||D===!0){t.activeTexture(n.TEXTURE0+A);const Y=vt.getPrimaries(vt.workingColorSpace),K=x.colorSpace===Ni?null:vt.getPrimaries(x.colorSpace),se=x.colorSpace===Ni||Y===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let q=0;q<6;q++)!fe&&!ee?xe[q]=v(x.image[q],!0,r.maxCubemapSize):xe[q]=ee?x.image[q].image:x.image[q],xe[q]=Ee(x,xe[q]);const Ve=xe[0],Xe=o.convert(x.format,x.colorSpace),Ie=o.convert(x.type),Ue=b(x.internalFormat,Xe,Ie,x.colorSpace),k=x.isVideoTexture!==!0,Ce=F.__version===void 0||D===!0,Re=O.dataReady;let Te=R(x,Ve);ie(n.TEXTURE_CUBE_MAP,x);let B;if(fe){k&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ue,Ve.width,Ve.height);for(let q=0;q<6;q++){B=xe[q].mipmaps;for(let ye=0;ye<B.length;ye++){const De=B[ye];x.format!==wn?Xe!==null?k?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,0,0,De.width,De.height,Xe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,Ue,De.width,De.height,0,De.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,0,0,De.width,De.height,Xe,Ie,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,Ue,De.width,De.height,0,Xe,Ie,De.data)}}}else{if(B=x.mipmaps,k&&Ce){B.length>0&&Te++;const q=ze(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ue,q.width,q.height)}for(let q=0;q<6;q++)if(ee){k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xe[q].width,xe[q].height,Xe,Ie,xe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,xe[q].width,xe[q].height,0,Xe,Ie,xe[q].data);for(let ye=0;ye<B.length;ye++){const Pe=B[ye].image[q].image;k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,0,0,Pe.width,Pe.height,Xe,Ie,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,Ue,Pe.width,Pe.height,0,Xe,Ie,Pe.data)}}else{k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Xe,Ie,xe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,Xe,Ie,xe[q]);for(let ye=0;ye<B.length;ye++){const De=B[ye];k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,0,0,Xe,Ie,De.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,Ue,Xe,Ie,De.image[q])}}}f(x)&&h(n.TEXTURE_CUBE_MAP),F.__version=O.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ae(T,x,A,D,O,F){const Y=o.convert(A.format,A.colorSpace),K=o.convert(A.type),se=b(A.internalFormat,Y,K,A.colorSpace),fe=i.get(x),ee=i.get(A);if(ee.__renderTarget=x,!fe.__hasExternalTextures){const xe=Math.max(1,x.width>>F),Ve=Math.max(1,x.height>>F);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,F,se,xe,Ve,x.depth,0,Y,K,null):t.texImage2D(O,F,se,xe,Ve,0,Y,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,O,ee.__webglTexture,0,me(x)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,O,ee.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(T,x,A){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const D=x.depthTexture,O=D&&D.isDepthTexture?D.type:null,F=y(x.stencilBuffer,O),Y=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=me(x);Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,F,x.width,x.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,F,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,F,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,T)}else{const D=x.textures;for(let O=0;O<D.length;O++){const F=D[O],Y=o.convert(F.format,F.colorSpace),K=o.convert(F.type),se=b(F.internalFormat,Y,K,F.colorSpace),fe=me(x);A&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,se,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(x.depthTexture);D.__renderTarget=x,(!D.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const O=D.__webglTexture,F=me(x);if(x.depthTexture.format===po)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(x.depthTexture.format===mo)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const x=i.get(T),A=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const D=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),D){const O=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,D.removeEventListener("dispose",O)};D.addEventListener("dispose",O),x.__depthDisposeCallback=O}x.__boundDepthTexture=D}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");const D=T.texture.mipmaps;D&&D.length>0?_e(x.__webglFramebuffer[0],T):_e(x.__webglFramebuffer,T)}else if(A){x.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[D]),x.__webglDepthbuffer[D]===void 0)x.__webglDepthbuffer[D]=n.createRenderbuffer(),de(x.__webglDepthbuffer[D],T,!1);else{const O=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,F)}}else{const D=T.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),de(x.__webglDepthbuffer,T,!1);else{const O=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,F)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(T,x,A){const D=i.get(T);x!==void 0&&ae(D.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&Ne(T)}function Be(T){const x=T.texture,A=i.get(T),D=i.get(x);T.addEventListener("dispose",C);const O=T.textures,F=T.isWebGLCubeRenderTarget===!0,Y=O.length>1;if(Y||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=x.version,s.memory.textures++),F){A.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[K]=[];for(let se=0;se<x.mipmaps.length;se++)A.__webglFramebuffer[K][se]=n.createFramebuffer()}else A.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)A.__webglFramebuffer[K]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(Y)for(let K=0,se=O.length;K<se;K++){const fe=i.get(O[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),s.memory.textures++)}if(T.samples>0&&Q(T)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let K=0;K<O.length;K++){const se=O[K];A.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[K]);const fe=o.convert(se.format,se.colorSpace),ee=o.convert(se.type),xe=b(se.internalFormat,fe,ee,se.colorSpace,T.isXRRenderTarget===!0),Ve=me(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,A.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),de(A.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),ie(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)ae(A.__webglFramebuffer[K][se],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else ae(A.__webglFramebuffer[K],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let K=0,se=O.length;K<se;K++){const fe=O[K],ee=i.get(fe);let xe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ee.__webglTexture),ie(xe,fe),ae(A.__webglFramebuffer,T,fe,n.COLOR_ATTACHMENT0+K,xe,0),f(fe)&&h(xe)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,D.__webglTexture),ie(K,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)ae(A.__webglFramebuffer[se],T,x,n.COLOR_ATTACHMENT0,K,se);else ae(A.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,K,0);f(x)&&h(K),t.unbindTexture()}T.depthBuffer&&Ne(T)}function et(T){const x=T.textures;for(let A=0,D=x.length;A<D;A++){const O=x[A];if(f(O)){const F=_(T),Y=i.get(O).__webglTexture;t.bindTexture(F,Y),h(F),t.unbindTexture()}}}const W=[],Ke=[];function J(T){if(T.samples>0){if(Q(T)===!1){const x=T.textures,A=T.width,D=T.height;let O=n.COLOR_BUFFER_BIT;const F=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(T),K=x.length>1;if(K)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer);const se=T.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[fe]);const ee=i.get(x[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,A,D,0,0,A,D,O,n.NEAREST),c===!0&&(W.length=0,Ke.length=0,W.push(n.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(W.push(F),Ke.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[fe]);const ee=i.get(x[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function me(T){return Math.min(r.maxSamples,T.samples)}function Q(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(T){const x=s.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Ee(T,x){const A=T.colorSpace,D=T.format,O=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||A!==ln&&A!==Ni&&(vt.getTransfer(A)===Lt?(D!==wn||O!==ri)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",A)),x}function ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Q}function y_(n,e){function t(i,r=Ni){let o;const s=vt.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===Ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ld)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return n.BYTE;if(i===sd)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===wn)return n.RGBA;if(i===po)return n.DEPTH_COMPONENT;if(i===mo)return n.DEPTH_STENCIL;if(i===Bl)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===Vl)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===ps||i===ms||i===gs||i===xs)if(s===Lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Ka||i===Ya||i===qa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ya)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Za||i===Ja)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===$a||i===Za)return s===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ja)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===ol||i===sl||i===al||i===ll||i===cl||i===ul||i===dl||i===hl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Qa)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===el)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===al)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===pl||i===ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===fl)return s===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gl||i===xl||i===vl||i===_l)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===gl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class E_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:b_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S_ extends Qi{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",f=new E_,h={},_=t.getContextAttributes();let b=null,y=null;const R=[],M=[],C=new Qe;let U=null;const E=new fn;E.viewport=new Mt;const S=new fn;S.viewport=new Mt;const w=[E,S],P=new Nm;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=R[z];return j===void 0&&(j=new ha,R[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=R[z];return j===void 0&&(j=new ha,R[z]=j),j.getGripSpace()},this.getHand=function(z){let j=R[z];return j===void 0&&(j=new ha,R[z]=j),j.getHandSpace()};function V(z){const j=M.indexOf(z.inputSource);if(j===-1)return;const ae=R[j];ae!==void 0&&(ae.update(z.inputSource,z.frame,l||s),ae.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Z);for(let z=0;z<R.length;z++){const j=M[z];j!==null&&(M[z]=null,R[z].disconnect(j))}I=null,N=null,f.reset();for(const z in h)delete h[z];e.setRenderTarget(b),m=null,p=null,d=null,r=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,de=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?mo:po,de=_.stencil?fo:$i);const Ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:o};d=this.getBinding(),p=d.createProjectionLayer(Ne),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Zi(p.textureWidth,p.textureHeight,{format:wn,type:ri,depthTexture:new Rd(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Zi(m.framebufferWidth,m.framebufferHeight,{format:wn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Z(z){for(let j=0;j<z.removed.length;j++){const ae=z.removed[j],de=M.indexOf(ae);de>=0&&(M[de]=null,R[de].disconnect(ae))}for(let j=0;j<z.added.length;j++){const ae=z.added[j];let de=M.indexOf(ae);if(de===-1){for(let Ne=0;Ne<R.length;Ne++)if(Ne>=M.length){M.push(ae),de=Ne;break}else if(M[Ne]===null){M[Ne]=ae,de=Ne;break}if(de===-1)break}const _e=R[de];_e&&_e.connect(ae)}}const X=new $,ne=new $;function he(z,j,ae){X.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(ae.matrixWorld);const de=X.distanceTo(ne),_e=j.projectionMatrix.elements,Ne=ae.projectionMatrix.elements,We=_e[14]/(_e[10]-1),Be=_e[14]/(_e[10]+1),et=(_e[9]+1)/_e[5],W=(_e[9]-1)/_e[5],Ke=(_e[8]-1)/_e[0],J=(Ne[8]+1)/Ne[0],me=We*Ke,Q=We*J,be=de/(-Ke+J),Ee=be*-Ke;if(j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ee),z.translateZ(be),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),_e[10]===-1)z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ze=We+be,T=Be+be,x=me-Ee,A=Q+(de-Ee),D=et*Be/T*ze,O=W*Be/T*ze;z.projectionMatrix.makePerspective(x,A,D,O,ze,T),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ve(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let j=z.near,ae=z.far;f.texture!==null&&(f.depthNear>0&&(j=f.depthNear),f.depthFar>0&&(ae=f.depthFar)),P.near=S.near=E.near=j,P.far=S.far=E.far=ae,(I!==P.near||N!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,N=P.far),P.layers.mask=z.layers.mask|6,E.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const de=z.parent,_e=P.cameras;ve(P,de);for(let Ne=0;Ne<_e.length;Ne++)ve(_e[Ne],de);_e.length===2?he(P,E,S):P.projectionMatrix.copy(E.projectionMatrix),ie(z,P,de)};function ie(z,j,ae){ae===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(ae.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Lr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(P)},this.getCameraTexture=function(z){return h[z]};let oe=null;function Ae(z,j){if(u=j.getViewerPose(l||s),g=j,u!==null){const ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let de=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let Be=0;Be<ae.length;Be++){const et=ae[Be];let W=null;if(m!==null)W=m.getViewport(et);else{const J=d.getViewSubImage(p,et);W=J.viewport,Be===0&&(e.setRenderTargetTextures(y,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(y))}let Ke=w[Be];Ke===void 0&&(Ke=new fn,Ke.layers.enable(Be),Ke.viewport=new Mt,w[Be]=Ke),Ke.matrix.fromArray(et.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(et.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(W.x,W.y,W.width,W.height),Be===0&&(P.matrix.copy(Ke.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),de===!0&&P.cameras.push(Ke)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Be=d.getDepthInformation(ae[0]);Be&&Be.isValid&&Be.texture&&f.init(Be,r.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<ae.length;Be++){const et=ae[Be].camera;if(et){let W=h[et];W||(W=new wd,h[et]=W);const Ke=d.getCameraImage(et);W.sourceTexture=Ke}}}}for(let ae=0;ae<R.length;ae++){const de=M[ae],_e=R[ae];de!==null&&_e!==void 0&&_e.update(de,j,l||s)}oe&&oe(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const te=new Fd;te.setAnimationLoop(Ae),this.setAnimationLoop=function(z){oe=z},this.dispose=function(){}}}const Wi=new Jn,M_=new mt;function A_(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,_d(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,_,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(f,h):h.isMeshToonMaterial?(o(f,h),d(f,h)):h.isMeshPhongMaterial?(o(f,h),u(f,h)):h.isMeshStandardMaterial?(o(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,y)):h.isMeshMatcapMaterial?(o(f,h),g(f,h)):h.isMeshDepthMaterial?o(f,h):h.isMeshDistanceMaterial?(o(f,h),v(f,h)):h.isMeshNormalMaterial?o(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,_,b):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===an&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===an&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const _=e.get(h),b=_.envMap,y=_.envMapRotation;b&&(f.envMap.value=b,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),f.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Wi)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,_,b){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*_,f.scale.value=b*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,_){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const _=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R_(n,e,t,i){let r={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){const y=b.program;i.uniformBlockBinding(_,y)}function l(_,b){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",f));const R=b.program;i.updateUBOMapping(_,R);const M=e.render.frame;o[_.id]!==M&&(p(_),o[_.id]=M)}function u(_){const b=d();_.__bindingPointIndex=b;const y=n.createBuffer(),R=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const b=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,C=y.length;M<C;M++){const U=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,S=U.length;E<S;E++){const w=U[E];if(m(w,M,E,R)===!0){const P=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let V=0;V<I.length;V++){const H=I[V],Z=v(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,P+N,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,b,y,R){const M=_.value,C=b+"_"+y;if(R[C]===void 0)return typeof M=="number"||typeof M=="boolean"?R[C]=M:R[C]=M.clone(),!0;{const U=R[C];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return R[C]=M,!0}else if(U.equals(M)===!1)return U.copy(M),!0}return!1}function g(_){const b=_.uniforms;let y=0;const R=16;for(let C=0,U=b.length;C<U;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,w=E.length;S<w;S++){const P=E[S],I=Array.isArray(P.value)?P.value:[P.value];for(let N=0,V=I.length;N<V;N++){const H=I[N],Z=v(H),X=y%R,ne=X%Z.boundary,he=X+ne;y+=ne,he!==0&&R-he<Z.storage&&(y+=R-he),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=Z.storage}}}const M=y%R;return M>0&&(y+=R-M),_.__size=y,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",_),b}function f(_){const b=_.target;b.removeEventListener("dispose",f);const y=s.indexOf(b.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:c,update:l,dispose:h}}const w_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let mi=null;function C_(){return mi===null&&(mi=new wo(w_,32,32,Vl,Br),mi.minFilter=pn,mi.magFilter=pn,mi.wrapS=bn,mi.wrapT=bn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class P_{constructor(e={}){const{canvas:t=qf(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Set([Hl,Gl,zl]),v=new Set([ri,$i,ho,fo,Ul,kl]),f=new Uint32Array(4),h=new Int32Array(4);let _=null,b=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Rt;let U=0,E=0,S=null,w=-1,P=null;const I=new Mt,N=new Mt;let V=null;const H=new it(0);let Z=0,X=t.width,ne=t.height,he=1,ve=null,ie=null;const oe=new Mt(0,0,X,ne),Ae=new Mt(0,0,X,ne);let te=!1;const z=new Yl;let j=!1,ae=!1;const de=new mt,_e=new $,Ne=new Mt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function et(){return S===null?he:1}let W=i;function Ke(L,G){return t.getContext(L,G)}try{const L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ye,!1),W===null){const G="webgl2";if(W=Ke(G,L),W===null)throw Ke(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw L("WebGLRenderer: "+L.message),L}let J,me,Q,be,Ee,ze,T,x,A,D,O,F,Y,K,se,fe,ee,xe,Ve,Xe,Ie,Ue,k,Ce;function Re(){J=new kx(W),J.init(),Ue=new y_(W,J),me=new Cx(W,J,e,Ue),Q=new v_(W,J),me.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),be=new Vx(W),Ee=new o_,ze=new __(W,J,Q,Ee,me,Ue,be),T=new Lx(M),x=new Ux(M),A=new Xm(W),k=new Rx(W,A),D=new Bx(W,A,be,k),O=new Hx(W,D,A,be),Ve=new Gx(W,me,ze),fe=new Px(Ee),F=new r_(M,T,x,J,me,k,fe),Y=new A_(M,Ee),K=new a_,se=new f_(J),xe=new Ax(M,T,x,Q,O,m,c),ee=new g_(M,O,me),Ce=new R_(W,be,me,Q),Xe=new wx(W,J,be),Ie=new zx(W,J,be),be.programs=F.programs,M.capabilities=me,M.extensions=J,M.properties=Ee,M.renderLists=K,M.shadowMap=ee,M.state=Q,M.info=be}Re();const Te=new S_(M,W);this.xr=Te,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=J.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=J.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(X,ne,!1))},this.getSize=function(L){return L.set(X,ne)},this.setSize=function(L,G,ue=!0){if(Te.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=L,ne=G,t.width=Math.floor(L*he),t.height=Math.floor(G*he),ue===!0&&(t.style.width=L+"px",t.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(X*he,ne*he).floor()},this.setDrawingBufferSize=function(L,G,ue){X=L,ne=G,he=ue,t.width=Math.floor(L*ue),t.height=Math.floor(G*ue),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(oe)},this.setViewport=function(L,G,ue,pe){L.isVector4?oe.set(L.x,L.y,L.z,L.w):oe.set(L,G,ue,pe),Q.viewport(I.copy(oe).multiplyScalar(he).round())},this.getScissor=function(L){return L.copy(Ae)},this.setScissor=function(L,G,ue,pe){L.isVector4?Ae.set(L.x,L.y,L.z,L.w):Ae.set(L,G,ue,pe),Q.scissor(N.copy(Ae).multiplyScalar(he).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(L){Q.setScissorTest(te=L)},this.setOpaqueSort=function(L){ve=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(L=!0,G=!0,ue=!0){let pe=0;if(L){let ce=!1;if(S!==null){const Ge=S.texture.format;ce=g.has(Ge)}if(ce){const Ge=S.texture.type,He=v.has(Ge),Je=xe.getClearColor(),$e=xe.getClearAlpha(),at=Je.r,lt=Je.g,rt=Je.b;He?(f[0]=at,f[1]=lt,f[2]=rt,f[3]=$e,W.clearBufferuiv(W.COLOR,0,f)):(h[0]=at,h[1]=lt,h[2]=rt,h[3]=$e,W.clearBufferiv(W.COLOR,0,h))}else pe|=W.COLOR_BUFFER_BIT}G&&(pe|=W.DEPTH_BUFFER_BIT),ue&&(pe|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),xe.dispose(),K.dispose(),se.dispose(),Ee.dispose(),T.dispose(),x.dispose(),O.dispose(),k.dispose(),Ce.dispose(),F.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ye),Te.removeEventListener("sessionend",bt),zt.stop()};function B(L){L.preventDefault(),Es("WebGLRenderer: Context Lost."),C=!0}function q(){Es("WebGLRenderer: Context Restored."),C=!1;const L=be.autoReset,G=ee.enabled,ue=ee.autoUpdate,pe=ee.needsUpdate,ce=ee.type;Re(),be.autoReset=L,ee.enabled=G,ee.autoUpdate=ue,ee.needsUpdate=pe,ee.type=ce}function ye(L){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function De(L){const G=L.target;G.removeEventListener("dispose",De),Pe(G)}function Pe(L){Se(L),Ee.remove(L)}function Se(L){const G=Ee.get(L).programs;G!==void 0&&(G.forEach(function(ue){F.releaseProgram(ue)}),L.isShaderMaterial&&F.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,ue,pe,ce,Ge){G===null&&(G=We);const He=ce.isMesh&&ce.matrixWorld.determinant()<0,Je=ke(L,G,ue,pe,ce);Q.setMaterial(pe,He);let $e=ue.index,at=1;if(pe.wireframe===!0){if($e=D.getWireframeAttribute(ue),$e===void 0)return;at=2}const lt=ue.drawRange,rt=ue.attributes.position;let Tt=lt.start*at,Pt=(lt.start+lt.count)*at;Ge!==null&&(Tt=Math.max(Tt,Ge.start*at),Pt=Math.min(Pt,(Ge.start+Ge.count)*at)),$e!==null?(Tt=Math.max(Tt,0),Pt=Math.min(Pt,$e.count)):rt!=null&&(Tt=Math.max(Tt,0),Pt=Math.min(Pt,rt.count));const Vt=Pt-Tt;if(Vt<0||Vt===1/0)return;k.setup(ce,pe,Je,ue,$e);let Gt,Nt=Xe;if($e!==null&&(Gt=A.get($e),Nt=Ie,Nt.setIndex(Gt)),ce.isMesh)pe.wireframe===!0?(Q.setLineWidth(pe.wireframeLinewidth*et()),Nt.setMode(W.LINES)):Nt.setMode(W.TRIANGLES);else if(ce.isLine){let ot=pe.linewidth;ot===void 0&&(ot=1),Q.setLineWidth(ot*et()),ce.isLineSegments?Nt.setMode(W.LINES):ce.isLineLoop?Nt.setMode(W.LINE_LOOP):Nt.setMode(W.LINE_STRIP)}else ce.isPoints?Nt.setMode(W.POINTS):ce.isSprite&&Nt.setMode(W.TRIANGLES);if(ce.isBatchedMesh)if(ce._multiDrawInstances!==null)_o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const ot=ce._multiDrawStarts,Ft=ce._multiDrawCounts,Et=ce._multiDrawCount,Tn=$e?A.get($e).bytesPerElement:1,tr=Ee.get(pe).currentProgram.getUniforms();for(let En=0;En<Et;En++)tr.setValue(W,"_gl_DrawID",En),Nt.render(ot[En]/Tn,Ft[En])}else if(ce.isInstancedMesh)Nt.renderInstances(Tt,Vt,ce.count);else if(ue.isInstancedBufferGeometry){const ot=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ft=Math.min(ue.instanceCount,ot);Nt.renderInstances(Tt,Vt,Ft)}else Nt.render(Tt,Vt)};function we(L,G,ue){L.transparent===!0&&L.side===Dn&&L.forceSinglePass===!1?(L.side=an,L.needsUpdate=!0,le(L,G,ue),L.side=ii,L.needsUpdate=!0,le(L,G,ue),L.side=Dn):le(L,G,ue)}this.compile=function(L,G,ue=null){ue===null&&(ue=L),b=se.get(ue),b.init(G),R.push(b),ue.traverseVisible(function(ce){ce.isLight&&ce.layers.test(G.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),L!==ue&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test(G.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),b.setupLights();const pe=new Set;return L.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let He=0;He<Ge.length;He++){const Je=Ge[He];we(Je,ue,ce),pe.add(Je)}else we(Ge,ue,ce),pe.add(Ge)}),b=R.pop(),pe},this.compileAsync=function(L,G,ue=null){const pe=this.compile(L,G,ue);return new Promise(ce=>{function Ge(){if(pe.forEach(function(He){Ee.get(He).currentProgram.isReady()&&pe.delete(He)}),pe.size===0){ce(L);return}setTimeout(Ge,10)}J.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Oe=null;function Fe(L){Oe&&Oe(L)}function Ye(){zt.stop()}function bt(){zt.start()}const zt=new Fd;zt.setAnimationLoop(Fe),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(L){Oe=L,Te.setAnimationLoop(L),L===null?zt.stop():zt.start()},Te.addEventListener("sessionstart",Ye),Te.addEventListener("sessionend",bt),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(G),G=Te.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,G,S),b=se.get(L,R.length),b.init(G),R.push(b),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z.setFromProjectionMatrix(de,ni,G.reversedDepth),ae=this.localClippingEnabled,j=fe.init(this.clippingPlanes,ae),_=K.get(L,y.length),_.init(),y.push(_),Te.enabled===!0&&Te.isPresenting===!0){const Ge=M.xr.getDepthSensingMesh();Ge!==null&&qt(Ge,G,-1/0,M.sortObjects)}qt(L,G,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(ve,ie),Be=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Be&&xe.addToRenderList(_,L),this.info.render.frame++,j===!0&&fe.beginShadows();const ue=b.state.shadowsArray;ee.render(ue,L,G),j===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const pe=_.opaque,ce=_.transmissive;if(b.setupLights(),G.isArrayCamera){const Ge=G.cameras;if(ce.length>0)for(let He=0,Je=Ge.length;He<Je;He++){const $e=Ge[He];ai(pe,ce,L,$e)}Be&&xe.render(L);for(let He=0,Je=Ge.length;He<Je;He++){const $e=Ge[He];Pn(_,L,$e,$e.viewport)}}else ce.length>0&&ai(pe,ce,L,G),Be&&xe.render(L),Pn(_,L,G);S!==null&&E===0&&(ze.updateMultisampleRenderTarget(S),ze.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(M,L,G),k.resetDefaultState(),w=-1,P=null,R.pop(),R.length>0?(b=R[R.length-1],j===!0&&fe.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,y.pop(),y.length>0?_=y[y.length-1]:_=null};function qt(L,G,ue,pe){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)ue=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)b.pushLight(L),L.castShadow&&b.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||z.intersectsSprite(L)){pe&&Ne.setFromMatrixPosition(L.matrixWorld).applyMatrix4(de);const He=O.update(L),Je=L.material;Je.visible&&_.push(L,He,Je,ue,Ne.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||z.intersectsObject(L))){const He=O.update(L),Je=L.material;if(pe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ne.copy(L.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ne.copy(He.boundingSphere.center)),Ne.applyMatrix4(L.matrixWorld).applyMatrix4(de)),Array.isArray(Je)){const $e=He.groups;for(let at=0,lt=$e.length;at<lt;at++){const rt=$e[at],Tt=Je[rt.materialIndex];Tt&&Tt.visible&&_.push(L,He,Tt,ue,Ne.z,rt)}}else Je.visible&&_.push(L,He,Je,ue,Ne.z,null)}}const Ge=L.children;for(let He=0,Je=Ge.length;He<Je;He++)qt(Ge[He],G,ue,pe)}function Pn(L,G,ue,pe){const{opaque:ce,transmissive:Ge,transparent:He}=L;b.setupLightsView(ue),j===!0&&fe.setGlobalState(M.clippingPlanes,ue),pe&&Q.viewport(I.copy(pe)),ce.length>0&&Bn(ce,G,ue),Ge.length>0&&Bn(Ge,G,ue),He.length>0&&Bn(He,G,ue),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ai(L,G,ue,pe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[pe.id]===void 0&&(b.state.transmissionRenderTarget[pe.id]=new Zi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Br:ri,minFilter:xi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Ge=b.state.transmissionRenderTarget[pe.id],He=pe.viewport||I;Ge.setSize(He.z*M.transmissionResolutionScale,He.w*M.transmissionResolutionScale);const Je=M.getRenderTarget(),$e=M.getActiveCubeFace(),at=M.getActiveMipmapLevel();M.setRenderTarget(Ge),M.getClearColor(H),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Be&&xe.render(ue);const lt=M.toneMapping;M.toneMapping=Di;const rt=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),b.setupLightsView(pe),j===!0&&fe.setGlobalState(M.clippingPlanes,pe),Bn(L,ue,pe),ze.updateMultisampleRenderTarget(Ge),ze.updateRenderTargetMipmap(Ge),J.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Pt=0,Vt=G.length;Pt<Vt;Pt++){const Gt=G[Pt],{object:Nt,geometry:ot,material:Ft,group:Et}=Gt;if(Ft.side===Dn&&Nt.layers.test(pe.layers)){const Tn=Ft.side;Ft.side=an,Ft.needsUpdate=!0,re(Nt,ue,pe,ot,Ft,Et),Ft.side=Tn,Ft.needsUpdate=!0,Tt=!0}}Tt===!0&&(ze.updateMultisampleRenderTarget(Ge),ze.updateRenderTargetMipmap(Ge))}M.setRenderTarget(Je,$e,at),M.setClearColor(H,Z),rt!==void 0&&(pe.viewport=rt),M.toneMapping=lt}function Bn(L,G,ue){const pe=G.isScene===!0?G.overrideMaterial:null;for(let ce=0,Ge=L.length;ce<Ge;ce++){const He=L[ce],{object:Je,geometry:$e,group:at}=He;let lt=He.material;lt.allowOverride===!0&&pe!==null&&(lt=pe),Je.layers.test(ue.layers)&&re(Je,G,ue,$e,lt,at)}}function re(L,G,ue,pe,ce,Ge){L.onBeforeRender(M,G,ue,pe,ce,Ge),L.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(M,G,ue,pe,L,Ge),ce.transparent===!0&&ce.side===Dn&&ce.forceSinglePass===!1?(ce.side=an,ce.needsUpdate=!0,M.renderBufferDirect(ue,G,pe,ce,L,Ge),ce.side=ii,ce.needsUpdate=!0,M.renderBufferDirect(ue,G,pe,ce,L,Ge),ce.side=Dn):M.renderBufferDirect(ue,G,pe,ce,L,Ge),L.onAfterRender(M,G,ue,pe,ce,Ge)}function le(L,G,ue){G.isScene!==!0&&(G=We);const pe=Ee.get(L),ce=b.state.lights,Ge=b.state.shadowsArray,He=ce.state.version,Je=F.getParameters(L,ce.state,Ge,G,ue),$e=F.getProgramCacheKey(Je);let at=pe.programs;pe.environment=L.isMeshStandardMaterial?G.environment:null,pe.fog=G.fog,pe.envMap=(L.isMeshStandardMaterial?x:T).get(L.envMap||pe.environment),pe.envMapRotation=pe.environment!==null&&L.envMap===null?G.environmentRotation:L.envMapRotation,at===void 0&&(L.addEventListener("dispose",De),at=new Map,pe.programs=at);let lt=at.get($e);if(lt!==void 0){if(pe.currentProgram===lt&&pe.lightsStateVersion===He)return Le(L,Je),lt}else Je.uniforms=F.getUniforms(L),L.onBeforeCompile(Je,M),lt=F.acquireProgram(Je,$e),at.set($e,lt),pe.uniforms=Je.uniforms;const rt=pe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=fe.uniform),Le(L,Je),pe.needsLights=Ze(L),pe.lightsStateVersion=He,pe.needsLights&&(rt.ambientLightColor.value=ce.state.ambient,rt.lightProbe.value=ce.state.probe,rt.directionalLights.value=ce.state.directional,rt.directionalLightShadows.value=ce.state.directionalShadow,rt.spotLights.value=ce.state.spot,rt.spotLightShadows.value=ce.state.spotShadow,rt.rectAreaLights.value=ce.state.rectArea,rt.ltc_1.value=ce.state.rectAreaLTC1,rt.ltc_2.value=ce.state.rectAreaLTC2,rt.pointLights.value=ce.state.point,rt.pointLightShadows.value=ce.state.pointShadow,rt.hemisphereLights.value=ce.state.hemi,rt.directionalShadowMap.value=ce.state.directionalShadowMap,rt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,rt.spotShadowMap.value=ce.state.spotShadowMap,rt.spotLightMatrix.value=ce.state.spotLightMatrix,rt.spotLightMap.value=ce.state.spotLightMap,rt.pointShadowMap.value=ce.state.pointShadowMap,rt.pointShadowMatrix.value=ce.state.pointShadowMatrix),pe.currentProgram=lt,pe.uniformsList=null,lt}function ge(L){if(L.uniformsList===null){const G=L.currentProgram.getUniforms();L.uniformsList=_s.seqWithValue(G.seq,L.uniforms)}return L.uniformsList}function Le(L,G){const ue=Ee.get(L);ue.outputColorSpace=G.outputColorSpace,ue.batching=G.batching,ue.batchingColor=G.batchingColor,ue.instancing=G.instancing,ue.instancingColor=G.instancingColor,ue.instancingMorph=G.instancingMorph,ue.skinning=G.skinning,ue.morphTargets=G.morphTargets,ue.morphNormals=G.morphNormals,ue.morphColors=G.morphColors,ue.morphTargetsCount=G.morphTargetsCount,ue.numClippingPlanes=G.numClippingPlanes,ue.numIntersection=G.numClipIntersection,ue.vertexAlphas=G.vertexAlphas,ue.vertexTangents=G.vertexTangents,ue.toneMapping=G.toneMapping}function ke(L,G,ue,pe,ce){G.isScene!==!0&&(G=We),ze.resetTextureUnits();const Ge=G.fog,He=pe.isMeshStandardMaterial?G.environment:null,Je=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ln,$e=(pe.isMeshStandardMaterial?x:T).get(pe.envMap||He),at=pe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,lt=!!ue.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),rt=!!ue.morphAttributes.position,Tt=!!ue.morphAttributes.normal,Pt=!!ue.morphAttributes.color;let Vt=Di;pe.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Vt=M.toneMapping);const Gt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Nt=Gt!==void 0?Gt.length:0,ot=Ee.get(pe),Ft=b.state.lights;if(j===!0&&(ae===!0||L!==P)){const cn=L===P&&pe.id===w;fe.setState(pe,L,cn)}let Et=!1;pe.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Ft.state.version||ot.outputColorSpace!==Je||ce.isBatchedMesh&&ot.batching===!1||!ce.isBatchedMesh&&ot.batching===!0||ce.isBatchedMesh&&ot.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&ot.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&ot.instancing===!1||!ce.isInstancedMesh&&ot.instancing===!0||ce.isSkinnedMesh&&ot.skinning===!1||!ce.isSkinnedMesh&&ot.skinning===!0||ce.isInstancedMesh&&ot.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ot.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&ot.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&ot.instancingMorph===!1&&ce.morphTexture!==null||ot.envMap!==$e||pe.fog===!0&&ot.fog!==Ge||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==fe.numPlanes||ot.numIntersection!==fe.numIntersection)||ot.vertexAlphas!==at||ot.vertexTangents!==lt||ot.morphTargets!==rt||ot.morphNormals!==Tt||ot.morphColors!==Pt||ot.toneMapping!==Vt||ot.morphTargetsCount!==Nt)&&(Et=!0):(Et=!0,ot.__version=pe.version);let Tn=ot.currentProgram;Et===!0&&(Tn=le(pe,G,ce));let tr=!1,En=!1,Wr=!1;const Ut=Tn.getUniforms(),xn=ot.uniforms;if(Q.useProgram(Tn.program)&&(tr=!0,En=!0,Wr=!0),pe.id!==w&&(w=pe.id,En=!0),tr||P!==L){Q.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ut.setValue(W,"projectionMatrix",L.projectionMatrix),Ut.setValue(W,"viewMatrix",L.matrixWorldInverse);const vn=Ut.map.cameraPosition;vn!==void 0&&vn.setValue(W,_e.setFromMatrixPosition(L.matrixWorld)),me.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),P!==L&&(P=L,En=!0,Wr=!0)}if(ce.isSkinnedMesh){Ut.setOptional(W,ce,"bindMatrix"),Ut.setOptional(W,ce,"bindMatrixInverse");const cn=ce.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ut.setValue(W,"boneTexture",cn.boneTexture,ze))}ce.isBatchedMesh&&(Ut.setOptional(W,ce,"batchingTexture"),Ut.setValue(W,"batchingTexture",ce._matricesTexture,ze),Ut.setOptional(W,ce,"batchingIdTexture"),Ut.setValue(W,"batchingIdTexture",ce._indirectTexture,ze),Ut.setOptional(W,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Ut.setValue(W,"batchingColorTexture",ce._colorsTexture,ze));const Ln=ue.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Ve.update(ce,ue,Tn),(En||ot.receiveShadow!==ce.receiveShadow)&&(ot.receiveShadow=ce.receiveShadow,Ut.setValue(W,"receiveShadow",ce.receiveShadow)),pe.isMeshGouraudMaterial&&pe.envMap!==null&&(xn.envMap.value=$e,xn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),pe.isMeshStandardMaterial&&pe.envMap===null&&G.environment!==null&&(xn.envMapIntensity.value=G.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=C_()),En&&(Ut.setValue(W,"toneMappingExposure",M.toneMappingExposure),ot.needsLights&&qe(xn,Wr),Ge&&pe.fog===!0&&Y.refreshFogUniforms(xn,Ge),Y.refreshMaterialUniforms(xn,pe,he,ne,b.state.transmissionRenderTarget[L.id]),_s.upload(W,ge(ot),xn,ze)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(_s.upload(W,ge(ot),xn,ze),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Ut.setValue(W,"center",ce.center),Ut.setValue(W,"modelViewMatrix",ce.modelViewMatrix),Ut.setValue(W,"normalMatrix",ce.normalMatrix),Ut.setValue(W,"modelMatrix",ce.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){const cn=pe.uniformsGroups;for(let vn=0,Vs=cn.length;vn<Vs;vn++){const Fi=cn[vn];Ce.update(Fi,Tn),Ce.bind(Fi,Tn)}}return Tn}function qe(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function Ze(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,G,ue){const pe=Ee.get(L);pe.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),Ee.get(L.texture).__webglTexture=G,Ee.get(L.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:ue,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,G){const ue=Ee.get(L);ue.__webglFramebuffer=G,ue.__useDefaultFramebuffer=G===void 0};const ct=W.createFramebuffer();this.setRenderTarget=function(L,G=0,ue=0){S=L,U=G,E=ue;let pe=!0,ce=null,Ge=!1,He=!1;if(L){const $e=Ee.get(L);if($e.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(W.FRAMEBUFFER,null),pe=!1;else if($e.__webglFramebuffer===void 0)ze.setupRenderTarget(L);else if($e.__hasExternalTextures)ze.rebindTextures(L,Ee.get(L.texture).__webglTexture,Ee.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const rt=L.depthTexture;if($e.__boundDepthTexture!==rt){if(rt!==null&&Ee.has(rt)&&(L.width!==rt.image.width||L.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(L)}}const at=L.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(He=!0);const lt=Ee.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(lt[G])?ce=lt[G][ue]:ce=lt[G],Ge=!0):L.samples>0&&ze.useMultisampledRTT(L)===!1?ce=Ee.get(L).__webglMultisampledFramebuffer:Array.isArray(lt)?ce=lt[ue]:ce=lt,I.copy(L.viewport),N.copy(L.scissor),V=L.scissorTest}else I.copy(oe).multiplyScalar(he).floor(),N.copy(Ae).multiplyScalar(he).floor(),V=te;if(ue!==0&&(ce=ct),Q.bindFramebuffer(W.FRAMEBUFFER,ce)&&pe&&Q.drawBuffers(L,ce),Q.viewport(I),Q.scissor(N),Q.setScissorTest(V),Ge){const $e=Ee.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,$e.__webglTexture,ue)}else if(He){const $e=G;for(let at=0;at<L.textures.length;at++){const lt=Ee.get(L.textures[at]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+at,lt.__webglTexture,ue,$e)}}else if(L!==null&&ue!==0){const $e=Ee.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,$e.__webglTexture,ue)}w=-1},this.readRenderTargetPixels=function(L,G,ue,pe,ce,Ge,He,Je=0){if(!(L&&L.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){Q.bindFramebuffer(W.FRAMEBUFFER,$e);try{const at=L.textures[Je],lt=at.format,rt=at.type;if(!me.textureFormatReadable(lt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(rt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-pe&&ue>=0&&ue<=L.height-ce&&(L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Je),W.readPixels(G,ue,pe,ce,Ue.convert(lt),Ue.convert(rt),Ge))}finally{const at=S!==null?Ee.get(S).__webglFramebuffer:null;Q.bindFramebuffer(W.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(L,G,ue,pe,ce,Ge,He,Je=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e)if(G>=0&&G<=L.width-pe&&ue>=0&&ue<=L.height-ce){Q.bindFramebuffer(W.FRAMEBUFFER,$e);const at=L.textures[Je],lt=at.format,rt=at.type;if(!me.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Tt),W.bufferData(W.PIXEL_PACK_BUFFER,Ge.byteLength,W.STREAM_READ),L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Je),W.readPixels(G,ue,pe,ce,Ue.convert(lt),Ue.convert(rt),0);const Pt=S!==null?Ee.get(S).__webglFramebuffer:null;Q.bindFramebuffer(W.FRAMEBUFFER,Pt);const Vt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await $f(W,Vt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Tt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ge),W.deleteBuffer(Tt),W.deleteSync(Vt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,G=null,ue=0){const pe=Math.pow(2,-ue),ce=Math.floor(L.image.width*pe),Ge=Math.floor(L.image.height*pe),He=G!==null?G.x:0,Je=G!==null?G.y:0;ze.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,ue,0,0,He,Je,ce,Ge),Q.unbindTexture()};const ut=W.createFramebuffer(),gn=W.createFramebuffer();this.copyTextureToTexture=function(L,G,ue=null,pe=null,ce=0,Ge=null){Ge===null&&(ce!==0?(_o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ge=ce,ce=0):Ge=0);let He,Je,$e,at,lt,rt,Tt,Pt,Vt;const Gt=L.isCompressedTexture?L.mipmaps[Ge]:L.image;if(ue!==null)He=ue.max.x-ue.min.x,Je=ue.max.y-ue.min.y,$e=ue.isBox3?ue.max.z-ue.min.z:1,at=ue.min.x,lt=ue.min.y,rt=ue.isBox3?ue.min.z:0;else{const Ln=Math.pow(2,-ce);He=Math.floor(Gt.width*Ln),Je=Math.floor(Gt.height*Ln),L.isDataArrayTexture?$e=Gt.depth:L.isData3DTexture?$e=Math.floor(Gt.depth*Ln):$e=1,at=0,lt=0,rt=0}pe!==null?(Tt=pe.x,Pt=pe.y,Vt=pe.z):(Tt=0,Pt=0,Vt=0);const Nt=Ue.convert(G.format),ot=Ue.convert(G.type);let Ft;G.isData3DTexture?(ze.setTexture3D(G,0),Ft=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ze.setTexture2DArray(G,0),Ft=W.TEXTURE_2D_ARRAY):(ze.setTexture2D(G,0),Ft=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const Et=W.getParameter(W.UNPACK_ROW_LENGTH),Tn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),tr=W.getParameter(W.UNPACK_SKIP_PIXELS),En=W.getParameter(W.UNPACK_SKIP_ROWS),Wr=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Gt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,at),W.pixelStorei(W.UNPACK_SKIP_ROWS,lt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,rt);const Ut=L.isDataArrayTexture||L.isData3DTexture,xn=G.isDataArrayTexture||G.isData3DTexture;if(L.isDepthTexture){const Ln=Ee.get(L),cn=Ee.get(G),vn=Ee.get(Ln.__renderTarget),Vs=Ee.get(cn.__renderTarget);Q.bindFramebuffer(W.READ_FRAMEBUFFER,vn.__webglFramebuffer),Q.bindFramebuffer(W.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Fi=0;Fi<$e;Fi++)Ut&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ee.get(L).__webglTexture,ce,rt+Fi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ee.get(G).__webglTexture,Ge,Vt+Fi)),W.blitFramebuffer(at,lt,He,Je,Tt,Pt,He,Je,W.DEPTH_BUFFER_BIT,W.NEAREST);Q.bindFramebuffer(W.READ_FRAMEBUFFER,null),Q.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ce!==0||L.isRenderTargetTexture||Ee.has(L)){const Ln=Ee.get(L),cn=Ee.get(G);Q.bindFramebuffer(W.READ_FRAMEBUFFER,ut),Q.bindFramebuffer(W.DRAW_FRAMEBUFFER,gn);for(let vn=0;vn<$e;vn++)Ut?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ln.__webglTexture,ce,rt+vn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ln.__webglTexture,ce),xn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,cn.__webglTexture,Ge,Vt+vn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,cn.__webglTexture,Ge),ce!==0?W.blitFramebuffer(at,lt,He,Je,Tt,Pt,He,Je,W.COLOR_BUFFER_BIT,W.NEAREST):xn?W.copyTexSubImage3D(Ft,Ge,Tt,Pt,Vt+vn,at,lt,He,Je):W.copyTexSubImage2D(Ft,Ge,Tt,Pt,at,lt,He,Je);Q.bindFramebuffer(W.READ_FRAMEBUFFER,null),Q.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else xn?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(Ft,Ge,Tt,Pt,Vt,He,Je,$e,Nt,ot,Gt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Ft,Ge,Tt,Pt,Vt,He,Je,$e,Nt,Gt.data):W.texSubImage3D(Ft,Ge,Tt,Pt,Vt,He,Je,$e,Nt,ot,Gt):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ge,Tt,Pt,He,Je,Nt,ot,Gt.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ge,Tt,Pt,Gt.width,Gt.height,Nt,Gt.data):W.texSubImage2D(W.TEXTURE_2D,Ge,Tt,Pt,He,Je,Nt,ot,Gt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Et),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,tr),W.pixelStorei(W.UNPACK_SKIP_ROWS,En),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Wr),Ge===0&&G.generateMipmaps&&W.generateMipmap(Ft),Q.unbindTexture()},this.initRenderTarget=function(L){Ee.get(L).__webglFramebuffer===void 0&&ze.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ze.setTextureCube(L,0):L.isData3DTexture?ze.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ze.setTexture2DArray(L,0):ze.setTexture2D(L,0),Q.unbindTexture()},this.resetState=function(){U=0,E=0,S=null,Q.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const ku={type:"change"},rc={type:"start"},Vd={type:"end"},ds=new Ro,Bu=new Li,L_=Math.cos(70*yn.DEG2RAD),$t=new $,_n=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class I_ extends Hm{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Un,this._lastTargetPosition=new $,this._quat=new Un().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fu,this._sphericalDelta=new fu,this._scale=1,this._panOffset=new $,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new $,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=D_.bind(this),this._onContextMenu=G_.bind(this),this._onMouseWheel=k_.bind(this),this._onKeyDown=B_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=V_.bind(this),this._onMouseDown=F_.bind(this),this._onMouseMove=U_.bind(this),this._interceptControlDown=H_.bind(this),this._interceptControlUp=W_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ku),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=$t.length();s=this._clampDistance(a*this._scale);const c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new $(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ds.origin.copy(this.object.position),ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ds.direction))<L_?this.object.lookAt(this.target):(Bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ds.intersectPlane(Bu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$t.copy(r).sub(this.target);let o=$t.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function N_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function O_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function D_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case Tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case Tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(rc)}function U_(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function k_(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vd))}function B_(n){this.enabled!==!1&&this._handleKeyDown(n)}function z_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(rc)}function V_(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function G_(n){this.enabled!==!1&&n.preventDefault()}function H_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Aa=new WeakMap;class X_ extends Rn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const o=new Ur(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,s=>{this.parse(s,t,r)},i,r)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,Rt,i).catch(i)}decodeDracoFile(e,t,i,r,o=ln,s=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:o};return this.decodeGeometry(e,a).then(t).catch(s)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Aa.has(e)){const c=Aa.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const o=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(o,s).then(c=>(r=c,new Promise((l,u)=>{r._callbacks[o]={resolve:l,reject:u},r.postMessage({type:"decode",id:o,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{r&&o&&this._releaseTask(r,o)}),Aa.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Wt;e.index&&t.setIndex(new jt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:r,array:o,itemSize:s,stride:a,vertexColorSpace:c}=e.attributes[i];let l;if(s===a)l=new jt(o,s);else{const u=new Ed(o,a);l=new Cs(u,s,0)}r==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Rt)return;const i=new it;for(let r=0,o=e.count;r<o;r++)i.fromBufferAttribute(e,r),vt.colorSpaceToWorking(i,Rt),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Ur(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,o)=>{i.load(e,r,void 0,o)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const o=j_.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(o){const s=o.data;switch(s.type){case"decode":r._callbacks[s.id].resolve(s);break;case"error":r._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,o){return r._taskLoad>o._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function j_(){let n,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(n)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const d=u.draco,p=new d.Decoder;try{const m=t(d,p,new Int8Array(c),l),g=m.attributes.map(v=>v.array.buffer);m.index&&g.push(m.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:m},g)}catch(m){console.error(m),self.postMessage({type:"error",id:a.id,error:m.message})}finally{d.destroy(p)}});break}};function t(s,a,c,l){const u=l.attributeIDs,d=l.attributeTypes;let p,m;const g=a.GetEncodedGeometryType(c);if(g===s.TRIANGULAR_MESH)p=new s.Mesh,m=a.DecodeArrayToMesh(c,c.byteLength,p);else if(g===s.POINT_CLOUD)p=new s.PointCloud,m=a.DecodeArrayToPointCloud(c,c.byteLength,p);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||p.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const v={index:null,attributes:[]};for(const f in u){const h=self[d[f]];let _,b;if(l.useUniqueIDs)b=u[f],_=a.GetAttributeByUniqueId(p,b);else{if(b=a.GetAttributeId(p,s[u[f]]),b===-1)continue;_=a.GetAttribute(p,b)}const y=r(s,a,p,f,h,_);f==="color"&&(y.vertexColorSpace=l.vertexColorSpace),v.attributes.push(y)}return g===s.TRIANGULAR_MESH&&(v.index=i(s,a,p)),s.destroy(p),v}function i(s,a,c){const u=c.num_faces()*3,d=u*4,p=s._malloc(d);a.GetTrianglesUInt32Array(c,d,p);const m=new Uint32Array(s.HEAPF32.buffer,p,u).slice();return s._free(p),{array:m,itemSize:1}}function r(s,a,c,l,u,d){const p=c.num_points(),m=d.num_components(),g=o(s,u),v=m*u.BYTES_PER_ELEMENT,f=Math.ceil(v/4)*4,h=f/u.BYTES_PER_ELEMENT,_=p*v,b=p*f,y=s._malloc(_);a.GetAttributeDataArrayForAllPoints(c,d,g,_,y);const R=new u(s.HEAPF32.buffer,y,_/u.BYTES_PER_ELEMENT);let M;if(v===f)M=R.slice();else{M=new u(b/u.BYTES_PER_ELEMENT);let C=0;for(let U=0,E=R.length;U<E;U++){for(let S=0;S<m;S++)M[C+S]=R[U*m+S];C+=h}}return s._free(y),{name:l,count:p,itemSize:m,array:M,stride:h}}function o(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}function zu(n,e){if(e===kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===yl||e===dd){let t=n.getIndex();if(t===null){const s=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)s.push(c);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===yl)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class K_ extends Rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new hy(t)})}load(e,t,i,r){const o=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=Mr.extractUrlBase(e);s=Mr.resolveURL(l,this.path)}else s=Mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),o.manager.itemError(e),o.manager.itemEnd(e)},c=new Ur(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{o.parse(l,s,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let o;const s={},a={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gd){try{s[yt.KHR_BINARY_GLTF]=new fy(e)}catch(d){r&&r(d);return}o=JSON.parse(s[yt.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ay(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,s[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],p=o.extensionsRequired||[];switch(d){case yt.KHR_MATERIALS_UNLIT:s[d]=new $_;break;case yt.KHR_DRACO_MESH_COMPRESSION:s[d]=new py(o,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:s[d]=new my;break;case yt.KHR_MESH_QUANTIZATION:s[d]=new gy;break;default:p.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,o){i.parse(e,t,r,o)})}}function Y_(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class q_{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let l;const u=new it(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],ln);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Cm(u),l.distance=d;break;case"spot":l=new Rm(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,o=i.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class $_{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,i){const r=[];e.color=new it(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const s=o.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],ln),e.opacity=s[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,Rt))}return Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(a,a)}return Promise.all(o)}}class Q_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class ey{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(o)}}class ty{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Rt)),s.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(o)}}class ny{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(o)}}class iy{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(a[0],a[1],a[2],ln),Promise.all(o)}}class ry{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class oy{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(a[0],a[1],a[2],ln),s.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Rt)),Promise.all(o)}}class sy{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(o)}}class ay{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(o)}}class ly{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,s)}}class cy{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,s.source,c)}}class uy{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,s.source,c)}}class dy{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,p=new Uint8Array(a,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,p,r.mode,r.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(m),u,d,p,r.mode,r.filter),m})})}else return null}}class hy{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==On.TRIANGLES&&l.mode!==On.TRIANGLE_STRIP&&l.mode!==On.TRIANGLE_FAN&&l.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],c={};for(const l in s)a.push(this.parser.getDependency("accessor",s[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],p=l[0].count,m=[];for(const g of d){const v=new mt,f=new $,h=new Un,_=new $(1,1,1),b=new Vp(g.geometry,g.material,p);for(let y=0;y<p;y++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&h.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(f,h,_));for(const y in c)if(y==="_COLOR_0"){const R=c[y];b.instanceColor=new Tl(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Ot.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),m.push(b)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Gd="glTF",eo=12,Vu={JSON:1313821514,BIN:5130562};class fy{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,eo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-eo,o=new DataView(e,eo);let s=0;for(;s<r;){const a=o.getUint32(s,!0);s+=4;const c=o.getUint32(s,!0);if(s+=4,c===Vu.JSON){const l=new Uint8Array(e,eo+s,a);this.content=i.decode(l)}else if(c===Vu.BIN){const l=eo+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class py{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},c={},l={};for(const u in s){const d=Rl[u]||u.toLowerCase();a[d]=s[u]}for(const u in e.attributes){const d=Rl[u]||u.toLowerCase();if(s[u]!==void 0){const p=i.accessors[e.attributes[u]],m=Ar[p.componentType];l[d]=m.name,c[d]=p.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,p){r.decodeDracoFile(u,function(m){for(const g in m.attributes){const v=m.attributes[g],f=c[g];f!==void 0&&(v.normalized=f)}d(m)},a,l,ln,p)})})}}class my{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gy{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class Hd extends Co{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[o+s];return t}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,p=d*d,m=p*d,g=e*l,v=g-l,f=-2*m+3*p,h=m-p,_=1-f,b=h-p+d;for(let y=0;y!==a;y++){const R=s[v+y+a],M=s[v+y+c]*u,C=s[g+y+a],U=s[g+y]*u;o[y]=_*R+b*M+f*C+h*U}return o}}const xy=new Un;class vy extends Hd{interpolate_(e,t,i,r){const o=super.interpolate_(e,t,i,r);return xy.fromArray(o).normalize().toArray(o),o}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gu={9728:mn,9729:pn,9984:rd,9985:fs,9986:to,9987:xi},Hu={33071:bn,33648:ys,10497:jn},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_y={CUBICSPLINE:void 0,LINEAR:xo,STEP:go},wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yy(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Is({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function Xi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ei(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function by(n,e,t){let i=!1,r=!1,o=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(n);const s=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const p=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;s.push(p)}if(r){const p=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(p)}if(o){const p=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(p)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],p=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),o&&(n.morphAttributes.color=p),n.morphTargetsRelative=!0,n})}function Ty(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ey(n){let e;const t=n.extensions&&n.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ca(t.attributes):e=n.indices+":"+Ca(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ca(n.targets[i]);return e}function Ca(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sy(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const My=new mt;class Ay{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,s=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,o=a.indexOf("Firefox")>-1,s=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&s<98?this.textureLoader=new Dd(this.options.manager):this.textureLoader=new Im(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};return Xi(o,a,r),ei(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const s=t[r].joints;for(let a=0,c=s.length;a<c;a++)e[s[a]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),o=(s,a)=>{const c=this.associations.get(s);c!=null&&this.associations.set(a,c);for(const[l,u]of s.children.entries())o(u,a.children[l])};return o(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,s){i.load(Mr.resolveURL(t.uri,r.path),o,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=Ra[r.type],a=Ar[r.componentType],c=r.normalized===!0,l=new a(r.count*s);return Promise.resolve(new jt(l,s,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(s){const a=s[0],c=Ra[r.type],l=Ar[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,p=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,f;if(m&&m!==d){const h=Math.floor(p/m),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let b=t.cache.get(_);b||(v=new l(a,h*m,r.count*m/u),b=new Ed(v,m/u),t.cache.add(_,b)),f=new Cs(b,c,p%m/u,g)}else a===null?v=new l(r.count*c):v=new l(a,p,r.count*c),f=new jt(v,c,g);if(r.sparse!==void 0){const h=Ra.SCALAR,_=Ar[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,R=new _(s[1],b,r.sparse.count*h),M=new l(s[2],y,r.sparse.count*c);a!==null&&(f=new jt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let C=0,U=R.length;C<U;C++){const E=R[C];if(f.setX(E,M[C*c]),c>=2&&f.setY(E,M[C*c+1]),c>=3&&f.setZ(E,M[C*c+2]),c>=4&&f.setW(E,M[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=g}return f})}loadTexture(e){const t=this.json,i=this.options,o=t.textures[e].source,s=t.images[o];let a=this.textureLoader;if(s.uri){const c=i.manager.getHandler(s.uri);c!==null&&(a=c)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,i){const r=this,o=this.json,s=o.textures[e],a=o.images[t],c=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const p=(o.samplers||{})[s.sampler]||{};return u.magFilter=Gu[p.magFilter]||pn,u.minFilter=Gu[p.minFilter]||xi,u.wrapS=Hu[p.wrapS]||jn,u.wrapT=Hu[p.wrapT]||jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==mn&&u.minFilter!==pn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=r.images[e],a=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(d){l=!0;const p=new Blob([d],{type:s.mimeType});return c=a.createObjectURL(p),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(p,m){let g=p;t.isImageBitmapLoader===!0&&(g=function(v){const f=new tn(v);f.needsUpdate=!0,p(f)}),t.load(Mr.resolveURL(d,o.path),g,void 0,m)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),ei(d,s),d.userData.mimeType=s.mimeType||Sy(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),o.extensions[yt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=o.associations.get(s);s=o.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),o.associations.set(s,c)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Zl,Zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new ql,Zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||o||s){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),o&&(c.vertexColors=!0),s&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Is}loadMaterial(e){const t=this,i=this.json,r=this.extensions,o=i.materials[e];let s;const a={},c=o.extensions||{},l=[];if(c[yt.KHR_MATERIALS_UNLIT]){const d=r[yt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),l.push(d.extendParams(a,o,t))}else{const d=o.pbrMetallicRoughness||{};if(a.color=new it(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const p=d.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],ln),a.opacity=p[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Rt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=Dn);const u=o.alphaMode||wa.OPAQUE;if(u===wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wa.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&s!==Yn&&(l.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new Qe(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;a.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&s!==Yn&&(l.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&s!==Yn){const d=o.emissiveFactor;a.emissive=new it().setRGB(d[0],d[1],d[2],ln)}return o.emissiveTexture!==void 0&&s!==Yn&&l.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Rt)),Promise.all(l).then(function(){const d=new s(a);return o.name&&(d.name=o.name),ei(d,o),t.associations.set(d,{materials:e}),o.extensions&&Xi(r,d,o),d})}createUniqueName(e){const t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function o(a){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wu(c,a,t)})}const s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Ey(l),d=r[u];if(d)s.push(d.promise);else{let p;l.extensions&&l.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?p=o(l):p=Wu(new Wt,l,t),r[u]={primitive:l,promise:p},s.push(p)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,o=i.meshes[e],s=o.primitives,a=[];for(let c=0,l=s.length;c<l;c++){const u=s[c].material===void 0?yy(this.cache):this.getDependency("material",s[c].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let m=0,g=u.length;m<g;m++){const v=u[m],f=s[m];let h;const _=l[m];if(f.mode===On.TRIANGLES||f.mode===On.TRIANGLE_STRIP||f.mode===On.TRIANGLE_FAN||f.mode===void 0)h=o.isSkinnedMesh===!0?new kp(v,_):new rn(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),f.mode===On.TRIANGLE_STRIP?h.geometry=zu(h.geometry,dd):f.mode===On.TRIANGLE_FAN&&(h.geometry=zu(h.geometry,yl));else if(f.mode===On.LINES)h=new Md(v,_);else if(f.mode===On.LINE_STRIP)h=new $l(v,_);else if(f.mode===On.LINE_LOOP)h=new Xp(v,_);else if(f.mode===On.POINTS)h=new Ad(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(h.geometry.morphAttributes).length>0&&Ty(h,o),h.name=t.createUniqueName(o.name||"mesh_"+e),ei(h,o),f.extensions&&Xi(r,h,f),t.assignFinalMaterial(h),d.push(h)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return o.extensions&&Xi(r,d[0],o),d[0];const p=new qn;o.extensions&&Xi(r,p,o),t.associations.set(p,{meshes:e});for(let m=0,g=d.length;m<g;m++)p.add(d[m]);return p})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new fn(yn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new tc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ei(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),s=r,a=[],c=[];for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d){a.push(d);const p=new mt;o!==null&&p.fromArray(o.array,l*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Kl(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,s=[],a=[],c=[],l=[],u=[];for(let d=0,p=r.channels.length;d<p;d++){const m=r.channels[d],g=r.samplers[m.sampler],v=m.target,f=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(s.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",h)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(v))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const p=d[0],m=d[1],g=d[2],v=d[3],f=d[4],h=[];for(let b=0,y=p.length;b<y;b++){const R=p[b],M=m[b],C=g[b],U=v[b],E=f[b];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const S=i._createAnimationTracks(R,M,C,U,E);if(S)for(let w=0;w<S.length;w++)h.push(S[w])}const _=new _m(o,void 0,h);return ei(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const s=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),s})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],o=i._loadNodeShallow(e),s=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)s.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(s),c]).then(function(l){const u=l[0],d=l[1],p=l[2];p!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(p,My)});for(let m=0,g=d.length;m<g;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],s=o.name?r.createUniqueName(o.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),o.camera!==void 0&&a.push(r.getDependency("camera",o.camera).then(function(l){return r._getNodeRef(r.cameraCache,o.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(o.isBone===!0?u=new Sd:l.length>1?u=new qn:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let d=0,p=l.length;d<p;d++)u.add(l[d]);if(o.name&&(u.userData.name=o.name,u.name=s),ei(u,o),o.extensions&&Xi(i,u,o),o.matrix!==void 0){const d=new mt;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,o=new qn;i.name&&(o.name=r.createUniqueName(i.name)),ei(o,i),i.extensions&&Xi(t,o,i);const s=i.nodes||[],a=[];for(let c=0,l=s.length;c<l;c++)a.push(r.getDependency("node",s[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)o.add(c[u]);const l=u=>{const d=new Map;for(const[p,m]of r.associations)(p instanceof Zn||p instanceof tn)&&d.set(p,m);return u.traverse(p=>{const m=r.associations.get(p);m!=null&&d.set(p,m)}),d};return r.associations=l(o),o})}_createAnimationTracks(e,t,i,r,o){const s=[],a=e.name?e.name:e.uuid,c=[];Pi[o.path]===Pi.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(a);let l;switch(Pi[o.path]){case Pi.weights:l=Or;break;case Pi.rotation:l=Dr;break;case Pi.translation:case Pi.scale:l=Fr;break;default:switch(i.itemSize){case 1:l=Or;break;case 2:case 3:default:l=Fr;break}break}const u=r.interpolation!==void 0?_y[r.interpolation]:xo,d=this._getArrayFromAccessor(i);for(let p=0,m=c.length;p<m;p++){const g=new l(c[p]+"."+Pi[o.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=wl(t.constructor),r=new Float32Array(t.length);for(let o=0,s=t.length;o<s;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Dr?vy:Hd;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ry(n,e,t){const i=e.attributes,r=new Fn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new $(c[0],c[1],c[2]),new $(l[0],l[1],l[2])),a.normalized){const u=wl(Ar[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new $,c=new $;for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d.POSITION!==void 0){const p=t.json.accessors[d.POSITION],m=p.min,g=p.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),p.normalized){const v=wl(Ar[p.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const s=new oi;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=s}function Wu(n,e,t){const i=e.attributes,r=[];function o(s,a){return t.getDependency("accessor",s).then(function(c){n.setAttribute(a,c)})}for(const s in i){const a=Rl[s]||s.toLowerCase();a in n.attributes||r.push(o(i[s],a))}if(e.indices!==void 0&&!n.index){const s=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(s)}return vt.workingColorSpace!==ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),ei(n,e),Ry(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?by(n,e.targets,t):n})}class wy extends Rn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=new Ur(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(o.parse(a))}catch(c){r?r(c):console.error(c),o.manager.itemError(e)}},i,r)}parse(e){function t(l){const u=new DataView(l),d=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*d===u.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,u,v))return!1;return!0}function i(l,u,d){for(let p=0,m=l.length;p<m;p++)if(l[p]!==u.getUint8(d+p))return!1;return!0}function r(l){const u=new DataView(l),d=u.getUint32(80,!0);let p,m,g,v=!1,f,h,_,b,y;for(let w=0;w<70;w++)u.getUint32(w,!1)==1129270351&&u.getUint8(w+4)==82&&u.getUint8(w+5)==61&&(v=!0,f=new Float32Array(d*3*3),h=u.getUint8(w+6)/255,_=u.getUint8(w+7)/255,b=u.getUint8(w+8)/255,y=u.getUint8(w+9)/255);const R=84,M=12*4+2,C=new Wt,U=new Float32Array(d*3*3),E=new Float32Array(d*3*3),S=new it;for(let w=0;w<d;w++){const P=R+w*M,I=u.getFloat32(P,!0),N=u.getFloat32(P+4,!0),V=u.getFloat32(P+8,!0);if(v){const H=u.getUint16(P+48,!0);H&32768?(p=h,m=_,g=b):(p=(H&31)/31,m=(H>>5&31)/31,g=(H>>10&31)/31)}for(let H=1;H<=3;H++){const Z=P+H*12,X=w*3*3+(H-1)*3;U[X]=u.getFloat32(Z,!0),U[X+1]=u.getFloat32(Z+4,!0),U[X+2]=u.getFloat32(Z+8,!0),E[X]=I,E[X+1]=N,E[X+2]=V,v&&(S.setRGB(p,m,g,Rt),f[X]=S.r,f[X+1]=S.g,f[X+2]=S.b)}}return C.setAttribute("position",new jt(U,3)),C.setAttribute("normal",new jt(E,3)),v&&(C.setAttribute("color",new jt(f,3)),C.hasColors=!0,C.alpha=y),C}function o(l){const u=new Wt,d=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,f=new RegExp("vertex"+v+v+v,"g"),h=new RegExp("normal"+v+v+v,"g"),_=[],b=[],y=[],R=new $;let M,C=0,U=0,E=0;for(;(M=d.exec(l))!==null;){U=E;const S=M[0],w=(M=m.exec(S))!==null?M[1]:"";for(y.push(w);(M=p.exec(S))!==null;){let N=0,V=0;const H=M[0];for(;(M=h.exec(H))!==null;)R.x=parseFloat(M[1]),R.y=parseFloat(M[2]),R.z=parseFloat(M[3]),V++;for(;(M=f.exec(H))!==null;)_.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),b.push(R.x,R.y,R.z),N++,E++;V!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),N!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const P=U,I=E-U;u.userData.groupNames=y,u.addGroup(P,I,C),C++}return u.setAttribute("position",new xt(_,3)),u.setAttribute("normal",new xt(b,3)),u}function s(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?r(c):o(s(e))}}/*! chevrotain - v9.0.1 */var ht=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Wd=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),At=ht((n,e)=>{var t=n&&n.__spreadArray||function(J,me){for(var Q=0,be=me.length,Ee=J.length;Q<be;Q++,Ee++)J[Ee]=me[Q];return J};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i(J){return J&&J.length===0}n.isEmpty=i;function r(J){return J==null?[]:Object.keys(J)}n.keys=r;function o(J){for(var me=[],Q=Object.keys(J),be=0;be<Q.length;be++)me.push(J[Q[be]]);return me}n.values=o;function s(J,me){for(var Q=[],be=r(J),Ee=0;Ee<be.length;Ee++){var ze=be[Ee];Q.push(me.call(null,J[ze],ze))}return Q}n.mapValues=s;function a(J,me){for(var Q=[],be=0;be<J.length;be++)Q.push(me.call(null,J[be],be));return Q}n.map=a;function c(J){for(var me=[],Q=0;Q<J.length;Q++){var be=J[Q];Array.isArray(be)?me=me.concat(c(be)):me.push(be)}return me}n.flatten=c;function l(J){return i(J)?void 0:J[0]}n.first=l;function u(J){var me=J&&J.length;return me?J[me-1]:void 0}n.last=u;function d(J,me){if(Array.isArray(J))for(var Q=0;Q<J.length;Q++)me.call(null,J[Q],Q);else if(H(J))for(var be=r(J),Q=0;Q<be.length;Q++){var Ee=be[Q],ze=J[Ee];me.call(null,ze,Ee)}else throw Error("non exhaustive match")}n.forEach=d;function p(J){return typeof J=="string"}n.isString=p;function m(J){return J===void 0}n.isUndefined=m;function g(J){return J instanceof Function}n.isFunction=g;function v(J,me){return me===void 0&&(me=1),J.slice(me,J.length)}n.drop=v;function f(J,me){return me===void 0&&(me=1),J.slice(0,J.length-me)}n.dropRight=f;function h(J,me){var Q=[];if(Array.isArray(J))for(var be=0;be<J.length;be++){var Ee=J[be];me.call(null,Ee)&&Q.push(Ee)}return Q}n.filter=h;function _(J,me){return h(J,function(Q){return!me(Q)})}n.reject=_;function b(J,me){for(var Q=Object.keys(J),be={},Ee=0;Ee<Q.length;Ee++){var ze=Q[Ee],T=J[ze];me(T)&&(be[ze]=T)}return be}n.pick=b;function y(J,me){return H(J)?J.hasOwnProperty(me):!1}n.has=y;function R(J,me){return U(J,function(Q){return Q===me})!==void 0}n.contains=R;function M(J){for(var me=[],Q=0;Q<J.length;Q++)me.push(J[Q]);return me}n.cloneArr=M;function C(J){var me={};for(var Q in J)Object.prototype.hasOwnProperty.call(J,Q)&&(me[Q]=J[Q]);return me}n.cloneObj=C;function U(J,me){for(var Q=0;Q<J.length;Q++){var be=J[Q];if(me.call(null,be))return be}}n.find=U;function E(J,me){for(var Q=[],be=0;be<J.length;be++){var Ee=J[be];me.call(null,Ee)&&Q.push(Ee)}return Q}n.findAll=E;function S(J,me,Q){for(var be=Array.isArray(J),Ee=be?J:o(J),ze=be?[]:r(J),T=Q,x=0;x<Ee.length;x++)T=me.call(null,T,Ee[x],be?x:ze[x]);return T}n.reduce=S;function w(J){return _(J,function(me){return me==null})}n.compact=w;function P(J,me){me===void 0&&(me=function(be){return be});var Q=[];return S(J,function(be,Ee){var ze=me(Ee);return R(Q,ze)?be:(Q.push(ze),be.concat(Ee))},[])}n.uniq=P;function I(J){for(var me=[],Q=1;Q<arguments.length;Q++)me[Q-1]=arguments[Q];var be=[null],Ee=be.concat(me);return Function.bind.apply(J,Ee)}n.partial=I;function N(J){return Array.isArray(J)}n.isArray=N;function V(J){return J instanceof RegExp}n.isRegExp=V;function H(J){return J instanceof Object}n.isObject=H;function Z(J,me){for(var Q=0;Q<J.length;Q++)if(!me(J[Q],Q))return!1;return!0}n.every=Z;function X(J,me){return _(J,function(Q){return R(me,Q)})}n.difference=X;function ne(J,me){for(var Q=0;Q<J.length;Q++)if(me(J[Q]))return!0;return!1}n.some=ne;function he(J,me){for(var Q=0;Q<J.length;Q++)if(J[Q]===me)return Q;return-1}n.indexOf=he;function ve(J,me){var Q=M(J);return Q.sort(function(be,Ee){return me(be)-me(Ee)}),Q}n.sortBy=ve;function ie(J,me){if(J.length!==me.length)throw Error("can't zipObject with different number of keys and values!");for(var Q={},be=0;be<J.length;be++)Q[J[be]]=me[be];return Q}n.zipObject=ie;function oe(J){for(var me=[],Q=1;Q<arguments.length;Q++)me[Q-1]=arguments[Q];for(var be=0;be<me.length;be++)for(var Ee=me[be],ze=r(Ee),T=0;T<ze.length;T++){var x=ze[T];J[x]=Ee[x]}return J}n.assign=oe;function Ae(J){for(var me=[],Q=1;Q<arguments.length;Q++)me[Q-1]=arguments[Q];for(var be=0;be<me.length;be++)for(var Ee=me[be],ze=r(Ee),T=0;T<ze.length;T++){var x=ze[T];y(J,x)||(J[x]=Ee[x])}return J}n.assignNoOverwrite=Ae;function te(){for(var J=[],me=0;me<arguments.length;me++)J[me]=arguments[me];return Ae.apply(void 0,t([{}],J))}n.defaults=te;function z(J,me){var Q={};return d(J,function(be){var Ee=me(be),ze=Q[Ee];ze?ze.push(be):Q[Ee]=[be]}),Q}n.groupBy=z;function j(J,me){for(var Q=C(J),be=r(me),Ee=0;Ee<be.length;Ee++){var ze=be[Ee],T=me[ze];Q[ze]=T}return Q}n.merge=j;function ae(){}n.NOOP=ae;function de(J){return J}n.IDENTITY=de;function _e(J){for(var me=[],Q=0;Q<J.length;Q++){var be=J[Q];me.push(be!==void 0?be:void 0)}return me}n.packArray=_e;function Ne(J){console&&console.error&&console.error("Error: "+J)}n.PRINT_ERROR=Ne;function We(J){console&&console.warn&&console.warn("Warning: "+J)}n.PRINT_WARNING=We;function Be(){return typeof Map=="function"}n.isES2015MapSupported=Be;function et(J){return J[J.length-1]}n.peek=et;function W(J){var me=new Date().getTime(),Q=J(),be=new Date().getTime(),Ee=be-me;return{time:Ee,value:Q}}n.timer=W;function Ke(J){function me(){}me.prototype=J;var Q=new me;function be(){return typeof Q.bar}return be(),be(),J}n.toFastProperties=Ke}),oc=ht((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(f){this.idx=f.idx,this.input=f.input,this.groupIdx=f.groupIdx},t.prototype.pattern=function(f){this.idx=0,this.input=f,this.groupIdx=0,this.consumeChar("/");var h=this.disjunction();this.consumeChar("/");for(var _={type:"Flags",loc:{begin:this.idx,end:f.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":c(_,"global");break;case"i":c(_,"ignoreCase");break;case"m":c(_,"multiLine");break;case"u":c(_,"unicode");break;case"y":c(_,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:_,value:h,loc:this.loc(0)}},t.prototype.disjunction=function(){var f=[],h=this.idx;for(f.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),f.push(this.alternative());return{type:"Disjunction",value:f,loc:this.loc(h)}},t.prototype.alternative=function(){for(var f=[],h=this.idx;this.isTerm();)f.push(this.term());return{type:"Alternative",value:f,loc:this.loc(h)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var f=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(f)};case"$":return{type:"EndAnchor",loc:this.loc(f)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(f)};case"B":return{type:"NonWordBoundary",loc:this.loc(f)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var h;switch(this.popChar()){case"=":h="Lookahead";break;case"!":h="NegativeLookahead";break}l(h);var _=this.disjunction();return this.consumeChar(")"),{type:h,value:_,loc:this.loc(f)}}u()},t.prototype.quantifier=function(f){var h,_=this.idx;switch(this.popChar()){case"*":h={atLeast:0,atMost:1/0};break;case"+":h={atLeast:1,atMost:1/0};break;case"?":h={atLeast:0,atMost:1};break;case"{":var b=this.integerIncludingZero();switch(this.popChar()){case"}":h={atLeast:b,atMost:b};break;case",":var y;this.isDigit()?(y=this.integerIncludingZero(),h={atLeast:b,atMost:y}):h={atLeast:b,atMost:1/0},this.consumeChar("}");break}if(f===!0&&h===void 0)return;l(h);break}if(!(f===!0&&h===void 0))return l(h),this.peekChar(0)==="?"?(this.consumeChar("?"),h.greedy=!1):h.greedy=!0,h.type="Quantifier",h.loc=this.loc(_),h},t.prototype.atom=function(){var f,h=this.idx;switch(this.peekChar()){case".":f=this.dotAll();break;case"\\":f=this.atomEscape();break;case"[":f=this.characterClass();break;case"(":f=this.group();break}return f===void 0&&this.isPatternCharacter()&&(f=this.patternCharacter()),l(f),f.loc=this.loc(h),this.isQuantifier()&&(f.quantifier=this.quantifier()),f},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[s(`
`),s("\r"),s("\u2028"),s("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var f=this.positiveInteger();return{type:"GroupBackReference",value:f}},t.prototype.characterClassEscape=function(){var f,h=!1;switch(this.popChar()){case"d":f=p;break;case"D":f=p,h=!0;break;case"s":f=g;break;case"S":f=g,h=!0;break;case"w":f=m;break;case"W":f=m,h=!0;break}return l(f),{type:"Set",value:f,complement:h}},t.prototype.controlEscapeAtom=function(){var f;switch(this.popChar()){case"f":f=s("\f");break;case"n":f=s(`
`);break;case"r":f=s("\r");break;case"t":f=s("	");break;case"v":f=s("\v");break}return l(f),{type:"Character",value:f}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var f=this.popChar();if(/[a-zA-Z]/.test(f)===!1)throw Error("Invalid ");var h=f.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:h}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:s("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var f=this.popChar();return{type:"Character",value:s(f)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var f=this.popChar();return{type:"Character",value:s(f)}}},t.prototype.characterClass=function(){var f=[],h=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),h=!0);this.isClassAtom();){var _=this.classAtom(),b=_.type==="Character";if(b&&this.isRangeDash()){this.consumeChar("-");var y=this.classAtom(),R=y.type==="Character";if(R){if(y.value<_.value)throw Error("Range out of order in character class");f.push({from:_.value,to:y.value})}else a(_.value,f),f.push(s("-")),a(y.value,f)}else a(_.value,f)}return this.consumeChar("]"),{type:"Set",complement:h,value:f}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:s("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var f=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),f=!1;break;default:this.groupIdx++;break}var h=this.disjunction();this.consumeChar(")");var _={type:"Group",capturing:f,value:h};return f&&(_.idx=this.groupIdx),_},t.prototype.positiveInteger=function(){var f=this.popChar();if(o.test(f)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.integerIncludingZero=function(){var f=this.popChar();if(r.test(f)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.patternCharacter=function(){var f=this.popChar();switch(f){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:s(f)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(f){switch(f===void 0&&(f=0),this.peekChar(f)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var f=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(f)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(f){for(var h="",_=0;_<f;_++){var b=this.popChar();if(i.test(b)===!1)throw Error("Expecting a HexDecimal digits");h+=b}var y=parseInt(h,16);return{type:"Character",value:y}},t.prototype.peekChar=function(f){return f===void 0&&(f=0),this.input[this.idx+f]},t.prototype.popChar=function(){var f=this.peekChar(0);return this.consumeChar(),f},t.prototype.consumeChar=function(f){if(f!==void 0&&this.input[this.idx]!==f)throw Error("Expected: '"+f+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(f){return{begin:f,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function s(f){return f.charCodeAt(0)}function a(f,h){f.length!==void 0?f.forEach(function(_){h.push(_)}):h.push(f)}function c(f,h){if(f[h]===!0)throw"duplicate flag "+h;f[h]=!0}function l(f){if(f===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var d,p=[];for(d=s("0");d<=s("9");d++)p.push(d);var m=[s("_")].concat(p);for(d=s("a");d<=s("z");d++)m.push(d);for(d=s("A");d<=s("Z");d++)m.push(d);var g=[s(" "),s("\f"),s(`
`),s("\r"),s("	"),s("\v"),s("	"),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s("\u2028"),s("\u2029"),s(" "),s(" "),s("　"),s("\uFEFF")];function v(){}return v.prototype.visitChildren=function(f){for(var h in f){var _=f[h];f.hasOwnProperty(h)&&(_.type!==void 0?this.visit(_):Array.isArray(_)&&_.forEach(function(b){this.visit(b)},this))}},v.prototype.visit=function(f){switch(f.type){case"Pattern":this.visitPattern(f);break;case"Flags":this.visitFlags(f);break;case"Disjunction":this.visitDisjunction(f);break;case"Alternative":this.visitAlternative(f);break;case"StartAnchor":this.visitStartAnchor(f);break;case"EndAnchor":this.visitEndAnchor(f);break;case"WordBoundary":this.visitWordBoundary(f);break;case"NonWordBoundary":this.visitNonWordBoundary(f);break;case"Lookahead":this.visitLookahead(f);break;case"NegativeLookahead":this.visitNegativeLookahead(f);break;case"Character":this.visitCharacter(f);break;case"Set":this.visitSet(f);break;case"Group":this.visitGroup(f);break;case"GroupBackReference":this.visitGroupBackReference(f);break;case"Quantifier":this.visitQuantifier(f);break}this.visitChildren(f)},v.prototype.visitPattern=function(f){},v.prototype.visitFlags=function(f){},v.prototype.visitDisjunction=function(f){},v.prototype.visitAlternative=function(f){},v.prototype.visitStartAnchor=function(f){},v.prototype.visitEndAnchor=function(f){},v.prototype.visitWordBoundary=function(f){},v.prototype.visitNonWordBoundary=function(f){},v.prototype.visitLookahead=function(f){},v.prototype.visitNegativeLookahead=function(f){},v.prototype.visitCharacter=function(f){},v.prototype.visitSet=function(f){},v.prototype.visitGroup=function(f){},v.prototype.visitGroupBackReference=function(f){},v.prototype.visitQuantifier=function(f){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})}),sc=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=oc(),t={},i=new e.RegExpParser;function r(s){var a=s.toString();if(t.hasOwnProperty(a))return t[a];var c=i.pattern(a);return t[a]=c,c}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),Cy=ht(n=>{var e=n&&n.__extends||function(){var v=function(f,h){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,b){_.__proto__=b}||function(_,b){for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(_[y]=b[y])},v(f,h)};return function(f,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");v(f,h);function _(){this.constructor=f}f.prototype=h===null?Object.create(h):(_.prototype=h.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=oc(),i=At(),r=sc(),o=Xd(),s="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function a(v,f){f===void 0&&(f=!1);try{var h=r.getRegExpAst(v),_=c(h.value,{},h.flags.ignoreCase);return _}catch(y){if(y.message===s)f&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+v.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var b="";f&&(b=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+v.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+b)}}return[]}n.getOptimizedStartCodesIndices=a;function c(v,f,h){switch(v.type){case"Disjunction":for(var _=0;_<v.value.length;_++)c(v.value[_],f,h);break;case"Alternative":for(var b=v.value,_=0;_<b.length;_++){var y=b[_];switch(y.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var R=y;switch(R.type){case"Character":l(R.value,f,h);break;case"Set":if(R.complement===!0)throw Error(s);i.forEach(R.value,function(U){if(typeof U=="number")l(U,f,h);else{var E=U;if(h===!0)for(var S=E.from;S<=E.to;S++)l(S,f,h);else{for(var S=E.from;S<=E.to&&S<o.minOptimizationVal;S++)l(S,f,h);if(E.to>=o.minOptimizationVal)for(var w=E.from>=o.minOptimizationVal?E.from:o.minOptimizationVal,P=E.to,I=o.charCodeToOptimizedIndex(w),N=o.charCodeToOptimizedIndex(P),V=I;V<=N;V++)f[V]=V}}});break;case"Group":c(R.value,f,h);break;default:throw Error("Non Exhaustive Match")}var M=R.quantifier!==void 0&&R.quantifier.atLeast===0;if(R.type==="Group"&&p(R)===!1||R.type!=="Group"&&M===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(f)}n.firstCharOptimizedIndices=c;function l(v,f,h){var _=o.charCodeToOptimizedIndex(v);f[_]=_,h===!0&&u(v,f)}function u(v,f){var h=String.fromCharCode(v),_=h.toUpperCase();if(_!==h){var b=o.charCodeToOptimizedIndex(_.charCodeAt(0));f[b]=b}else{var y=h.toLowerCase();if(y!==h){var b=o.charCodeToOptimizedIndex(y.charCodeAt(0));f[b]=b}}}function d(v,f){return i.find(v.value,function(h){if(typeof h=="number")return i.contains(f,h);var _=h;return i.find(f,function(b){return _.from<=b&&b<=_.to})!==void 0})}function p(v){return v.quantifier&&v.quantifier.atLeast===0?!0:v.value?i.isArray(v.value)?i.every(v.value,p):p(v.value):!1}var m=function(v){e(f,v);function f(h){var _=v.call(this)||this;return _.targetCharCodes=h,_.found=!1,_}return f.prototype.visitChildren=function(h){if(this.found!==!0){switch(h.type){case"Lookahead":this.visitLookahead(h);return;case"NegativeLookahead":this.visitNegativeLookahead(h);return}v.prototype.visitChildren.call(this,h)}},f.prototype.visitCharacter=function(h){i.contains(this.targetCharCodes,h.value)&&(this.found=!0)},f.prototype.visitSet=function(h){h.complement?d(h,this.targetCharCodes)===void 0&&(this.found=!0):d(h,this.targetCharCodes)!==void 0&&(this.found=!0)},f}(t.BaseRegExpVisitor);function g(v,f){if(f instanceof RegExp){var h=r.getRegExpAst(f),_=new m(v);return _.visit(h),_.found}else return i.find(f,function(b){return i.contains(v,b.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),Xd=ht(n=>{var e=n&&n.__extends||function(){var te=function(z,j){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(ae,de){ae.__proto__=de}||function(ae,de){for(var _e in de)Object.prototype.hasOwnProperty.call(de,_e)&&(ae[_e]=de[_e])},te(z,j)};return function(z,j){if(typeof j!="function"&&j!==null)throw new TypeError("Class extends value "+String(j)+" is not a constructor or null");te(z,j);function ae(){this.constructor=z}z.prototype=j===null?Object.create(j):(ae.prototype=j.prototype,new ae)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=oc(),i=Fs(),r=At(),o=Cy(),s=sc(),a="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function c(){n.SUPPORT_STICKY=!1}n.disableSticky=c;function l(){n.SUPPORT_STICKY=!0}n.enableSticky=l;function u(te,z){z=r.defaults(z,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(T,x){return x()}});var j=z.tracer;j("initCharCodeToOptimizedIndexMap",function(){Ae()});var ae;j("Reject Lexer.NA",function(){ae=r.reject(te,function(T){return T[a]===i.Lexer.NA})});var de=!1,_e;j("Transform Patterns",function(){de=!1,_e=r.map(ae,function(T){var x=T[a];if(r.isRegExp(x)){var A=x.source;return A.length===1&&A!=="^"&&A!=="$"&&A!=="."&&!x.ignoreCase?A:A.length===2&&A[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],A[1])?A[1]:z.useSticky?P(x):w(x)}else{if(r.isFunction(x))return de=!0,{exec:x};if(r.has(x,"exec"))return de=!0,x;if(typeof x=="string"){if(x.length===1)return x;var D=x.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),O=new RegExp(D);return z.useSticky?P(O):w(O)}else throw Error("non exhaustive match")}})});var Ne,We,Be,et,W;j("misc mapping",function(){Ne=r.map(ae,function(T){return T.tokenTypeIdx}),We=r.map(ae,function(T){var x=T.GROUP;if(x!==i.Lexer.SKIPPED){if(r.isString(x))return x;if(r.isUndefined(x))return!1;throw Error("non exhaustive match")}}),Be=r.map(ae,function(T){var x=T.LONGER_ALT;if(x){var A=r.indexOf(ae,x);return A}}),et=r.map(ae,function(T){return T.PUSH_MODE}),W=r.map(ae,function(T){return r.has(T,"POP_MODE")})});var Ke;j("Line Terminator Handling",function(){var T=he(z.lineTerminatorCharacters);Ke=r.map(ae,function(x){return!1}),z.positionTracking!=="onlyOffset"&&(Ke=r.map(ae,function(x){if(r.has(x,"LINE_BREAKS"))return x.LINE_BREAKS;if(X(x,T)===!1)return o.canMatchCharCode(T,x.PATTERN)}))});var J,me,Q,be;j("Misc Mapping #2",function(){J=r.map(ae,H),me=r.map(_e,Z),Q=r.reduce(ae,function(T,x){var A=x.GROUP;return r.isString(A)&&A!==i.Lexer.SKIPPED&&(T[A]=[]),T},{}),be=r.map(_e,function(T,x){return{pattern:_e[x],longerAlt:Be[x],canLineTerminator:Ke[x],isCustom:J[x],short:me[x],group:We[x],push:et[x],pop:W[x],tokenTypeIdx:Ne[x],tokenType:ae[x]}})});var Ee=!0,ze=[];return z.safeMode||j("First Char Optimization",function(){ze=r.reduce(ae,function(T,x,A){if(typeof x.PATTERN=="string"){var D=x.PATTERN.charCodeAt(0),O=oe(D);ve(T,O,be[A])}else if(r.isArray(x.START_CHARS_HINT)){var F;r.forEach(x.START_CHARS_HINT,function(K){var se=typeof K=="string"?K.charCodeAt(0):K,fe=oe(se);F!==fe&&(F=fe,ve(T,fe,be[A]))})}else if(r.isRegExp(x.PATTERN))if(x.PATTERN.unicode)Ee=!1,z.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+x.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var Y=o.getOptimizedStartCodesIndices(x.PATTERN,z.ensureOptimizations);r.isEmpty(Y)&&(Ee=!1),r.forEach(Y,function(K){ve(T,K,be[A])})}else z.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+x.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Ee=!1;return T},[])}),j("ArrayPacking",function(){ze=r.packArray(ze)}),{emptyGroups:Q,patternIdxToConfig:be,charCodeToPatternIdxToConfig:ze,hasCustom:de,canBeOptimized:Ee}}n.analyzeTokenTypes=u;function d(te,z){var j=[],ae=m(te);j=j.concat(ae.errors);var de=g(ae.valid),_e=de.valid;return j=j.concat(de.errors),j=j.concat(p(_e)),j=j.concat(M(_e)),j=j.concat(C(_e,z)),j=j.concat(U(_e)),j}n.validatePatterns=d;function p(te){var z=[],j=r.filter(te,function(ae){return r.isRegExp(ae[a])});return z=z.concat(f(j)),z=z.concat(b(j)),z=z.concat(y(j)),z=z.concat(R(j)),z=z.concat(h(j)),z}function m(te){var z=r.filter(te,function(de){return!r.has(de,a)}),j=r.map(z,function(de){return{message:"Token Type: ->"+de.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[de]}}),ae=r.difference(te,z);return{errors:j,valid:ae}}n.findMissingPatterns=m;function g(te){var z=r.filter(te,function(de){var _e=de[a];return!r.isRegExp(_e)&&!r.isFunction(_e)&&!r.has(_e,"exec")&&!r.isString(_e)}),j=r.map(z,function(de){return{message:"Token Type: ->"+de.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[de]}}),ae=r.difference(te,z);return{errors:j,valid:ae}}n.findInvalidPatterns=g;var v=/[^\\][\$]/;function f(te){var z=function(de){e(_e,de);function _e(){var Ne=de!==null&&de.apply(this,arguments)||this;return Ne.found=!1,Ne}return _e.prototype.visitEndAnchor=function(Ne){this.found=!0},_e}(t.BaseRegExpVisitor),j=r.filter(te,function(de){var _e=de[a];try{var Ne=s.getRegExpAst(_e),We=new z;return We.visit(Ne),We.found}catch{return v.test(_e.source)}}),ae=r.map(j,function(de){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+de.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[de]}});return ae}n.findEndOfInputAnchor=f;function h(te){var z=r.filter(te,function(ae){var de=ae[a];return de.test("")}),j=r.map(z,function(ae){return{message:"Token Type: ->"+ae.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[ae]}});return j}n.findEmptyMatchRegExps=h;var _=/[^\\[][\^]|^\^/;function b(te){var z=function(de){e(_e,de);function _e(){var Ne=de!==null&&de.apply(this,arguments)||this;return Ne.found=!1,Ne}return _e.prototype.visitStartAnchor=function(Ne){this.found=!0},_e}(t.BaseRegExpVisitor),j=r.filter(te,function(de){var _e=de[a];try{var Ne=s.getRegExpAst(_e),We=new z;return We.visit(Ne),We.found}catch{return _.test(_e.source)}}),ae=r.map(j,function(de){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+de.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[de]}});return ae}n.findStartOfInputAnchor=b;function y(te){var z=r.filter(te,function(ae){var de=ae[a];return de instanceof RegExp&&(de.multiline||de.global)}),j=r.map(z,function(ae){return{message:"Token Type: ->"+ae.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[ae]}});return j}n.findUnsupportedFlags=y;function R(te){var z=[],j=r.map(te,function(_e){return r.reduce(te,function(Ne,We){return _e.PATTERN.source===We.PATTERN.source&&!r.contains(z,We)&&We.PATTERN!==i.Lexer.NA&&(z.push(We),Ne.push(We)),Ne},[])});j=r.compact(j);var ae=r.filter(j,function(_e){return _e.length>1}),de=r.map(ae,function(_e){var Ne=r.map(_e,function(Be){return Be.name}),We=r.first(_e).PATTERN;return{message:"The same RegExp pattern ->"+We+"<-"+("has been used in all of the following Token Types: "+Ne.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:_e}});return de}n.findDuplicatePatterns=R;function M(te){var z=r.filter(te,function(ae){if(!r.has(ae,"GROUP"))return!1;var de=ae.GROUP;return de!==i.Lexer.SKIPPED&&de!==i.Lexer.NA&&!r.isString(de)}),j=r.map(z,function(ae){return{message:"Token Type: ->"+ae.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[ae]}});return j}n.findInvalidGroupType=M;function C(te,z){var j=r.filter(te,function(de){return de.PUSH_MODE!==void 0&&!r.contains(z,de.PUSH_MODE)}),ae=r.map(j,function(de){var _e="Token Type: ->"+de.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+de.PUSH_MODE+"<-which does not exist";return{message:_e,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[de]}});return ae}n.findModesThatDoNotExist=C;function U(te){var z=[],j=r.reduce(te,function(ae,de,_e){var Ne=de.PATTERN;return Ne===i.Lexer.NA||(r.isString(Ne)?ae.push({str:Ne,idx:_e,tokenType:de}):r.isRegExp(Ne)&&S(Ne)&&ae.push({str:Ne.source,idx:_e,tokenType:de})),ae},[]);return r.forEach(te,function(ae,de){r.forEach(j,function(_e){var Ne=_e.str,We=_e.idx,Be=_e.tokenType;if(de<We&&E(Ne,ae.PATTERN)){var et="Token: ->"+Be.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+ae.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;z.push({message:et,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[ae,Be]})}})}),z}n.findUnreachablePatterns=U;function E(te,z){if(r.isRegExp(z)){var j=z.exec(te);return j!==null&&j.index===0}else{if(r.isFunction(z))return z(te,0,[],{});if(r.has(z,"exec"))return z.exec(te,0,[],{});if(typeof z=="string")return z===te;throw Error("non exhaustive match")}}function S(te){var z=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(z,function(j){return te.source.indexOf(j)!==-1})===void 0}function w(te){var z=te.ignoreCase?"i":"";return new RegExp("^(?:"+te.source+")",z)}n.addStartOfInput=w;function P(te){var z=te.ignoreCase?"iy":"y";return new RegExp(""+te.source,z)}n.addStickyFlag=P;function I(te,z,j){var ae=[];return r.has(te,n.DEFAULT_MODE)||ae.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(te,n.MODES)||ae.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(te,n.MODES)&&r.has(te,n.DEFAULT_MODE)&&!r.has(te.modes,te.defaultMode)&&ae.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+te.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(te,n.MODES)&&r.forEach(te.modes,function(de,_e){r.forEach(de,function(Ne,We){r.isUndefined(Ne)&&ae.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+_e+"> at index: <"+We+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),ae}n.performRuntimeChecks=I;function N(te,z,j){var ae=[],de=!1,_e=r.compact(r.flatten(r.mapValues(te.modes,function(Be){return Be}))),Ne=r.reject(_e,function(Be){return Be[a]===i.Lexer.NA}),We=he(j);return z&&r.forEach(Ne,function(Be){var et=X(Be,We);if(et!==!1){var W=ne(Be,et),Ke={message:W,type:et.issue,tokenType:Be};ae.push(Ke)}else r.has(Be,"LINE_BREAKS")?Be.LINE_BREAKS===!0&&(de=!0):o.canMatchCharCode(We,Be.PATTERN)&&(de=!0)}),z&&!de&&ae.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),ae}n.performWarningRuntimeChecks=N;function V(te){var z={},j=r.keys(te);return r.forEach(j,function(ae){var de=te[ae];if(r.isArray(de))z[ae]=[];else throw Error("non exhaustive match")}),z}n.cloneEmptyGroups=V;function H(te){var z=te.PATTERN;if(r.isRegExp(z))return!1;if(r.isFunction(z)||r.has(z,"exec"))return!0;if(r.isString(z))return!1;throw Error("non exhaustive match")}n.isCustomPattern=H;function Z(te){return r.isString(te)&&te.length===1?te.charCodeAt(0):!1}n.isShortPattern=Z,n.LineTerminatorOptimizedTester={test:function(te){for(var z=te.length,j=this.lastIndex;j<z;j++){var ae=te.charCodeAt(j);if(ae===10)return this.lastIndex=j+1,!0;if(ae===13)return te.charCodeAt(j+1)===10?this.lastIndex=j+2:this.lastIndex=j+1,!0}return!1},lastIndex:0};function X(te,z){if(r.has(te,"LINE_BREAKS"))return!1;if(r.isRegExp(te.PATTERN)){try{o.canMatchCharCode(z,te.PATTERN)}catch(j){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:j.message}}return!1}else{if(r.isString(te.PATTERN))return!1;if(H(te))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function ne(te,z){if(z.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+te.name+`> Token Type
`)+("	 Root cause: "+z.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(z.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+te.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=ne;function he(te){var z=r.map(te,function(j){return r.isString(j)&&j.length>0?j.charCodeAt(0):j});return z}function ve(te,z,j){te[z]===void 0?te[z]=[j]:te[z].push(j)}n.minOptimizationVal=256;var ie=[];function oe(te){return te<n.minOptimizationVal?te:ie[te]}n.charCodeToOptimizedIndex=oe;function Ae(){if(r.isEmpty(ie)){ie=new Array(65536);for(var te=0;te<65536;te++)ie[te]=te>255?255+~~(te/255):te}}}),Po=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=At();function t(v,f){var h=v.tokenTypeIdx;return h===f.tokenTypeIdx?!0:f.isParent===!0&&f.categoryMatchesMap[h]===!0}n.tokenStructuredMatcher=t;function i(v,f){return v.tokenTypeIdx===f.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(v){var f=o(v);s(f),c(f),a(f),e.forEach(f,function(h){h.isParent=h.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(v){for(var f=e.cloneArr(v),h=v,_=!0;_;){h=e.compact(e.flatten(e.map(h,function(y){return y.CATEGORIES})));var b=e.difference(h,f);f=f.concat(b),e.isEmpty(b)?_=!1:h=b}return f}n.expandCategories=o;function s(v){e.forEach(v,function(f){u(f)||(n.tokenIdxToClass[n.tokenShortNameIdx]=f,f.tokenTypeIdx=n.tokenShortNameIdx++),d(f)&&!e.isArray(f.CATEGORIES)&&(f.CATEGORIES=[f.CATEGORIES]),d(f)||(f.CATEGORIES=[]),p(f)||(f.categoryMatches=[]),m(f)||(f.categoryMatchesMap={})})}n.assignTokenDefaultProps=s;function a(v){e.forEach(v,function(f){f.categoryMatches=[],e.forEach(f.categoryMatchesMap,function(h,_){f.categoryMatches.push(n.tokenIdxToClass[_].tokenTypeIdx)})})}n.assignCategoriesTokensProp=a;function c(v){e.forEach(v,function(f){l([],f)})}n.assignCategoriesMapProp=c;function l(v,f){e.forEach(v,function(h){f.categoryMatchesMap[h.tokenTypeIdx]=!0}),e.forEach(f.CATEGORIES,function(h){var _=v.concat(f);e.contains(_,h)||l(_,h)})}n.singleAssignCategoriesToksMap=l;function u(v){return e.has(v,"tokenTypeIdx")}n.hasShortKeyProperty=u;function d(v){return e.has(v,"CATEGORIES")}n.hasCategoriesProperty=d;function p(v){return e.has(v,"categoryMatches")}n.hasExtendingTokensTypesProperty=p;function m(v){return e.has(v,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=m;function g(v){return e.has(v,"tokenTypeIdx")}n.isTokenType=g}),jd=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),Fs=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=Xd(),t=At(),i=Po(),r=jd(),o=sc();(function(c){c[c.MISSING_PATTERN=0]="MISSING_PATTERN",c[c.INVALID_PATTERN=1]="INVALID_PATTERN",c[c.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",c[c.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",c[c.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",c[c.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",c[c.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",c[c.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",c[c.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",c[c.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",c[c.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",c[c.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",c[c.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",c[c.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",c[c.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",c[c.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",c[c.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var s={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(s);var a=function(){function c(l,u){var d=this;if(u===void 0&&(u=s),this.lexerDefinition=l,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof u=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(s,u);var p=this.config.traceInitPerf;p===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof p=="number"&&(this.traceInitMaxIdent=p,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var m,g=!0;d.TRACE_INIT("Lexer Config handling",function(){if(d.config.lineTerminatorsPattern===s.lineTerminatorsPattern)d.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(d.config.lineTerminatorCharacters===s.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(u.safeMode&&u.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');d.trackStartLines=/full|onlyStart/i.test(d.config.positionTracking),d.trackEndLines=/full/i.test(d.config.positionTracking),t.isArray(l)?(m={modes:{}},m.modes[e.DEFAULT_MODE]=t.cloneArr(l),m[e.DEFAULT_MODE]=e.DEFAULT_MODE):(g=!1,m=t.cloneObj(l))}),d.config.skipValidations===!1&&(d.TRACE_INIT("performRuntimeChecks",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.performRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))}),d.TRACE_INIT("performWarningRuntimeChecks",function(){d.lexerDefinitionWarning=d.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))})),m.modes=m.modes?m.modes:{},t.forEach(m.modes,function(_,b){m.modes[b]=t.reject(_,function(y){return t.isUndefined(y)})});var v=t.keys(m.modes);if(t.forEach(m.modes,function(_,b){d.TRACE_INIT("Mode: <"+b+"> processing",function(){if(d.modes.push(b),d.config.skipValidations===!1&&d.TRACE_INIT("validatePatterns",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.validatePatterns(_,v))}),t.isEmpty(d.lexerDefinitionErrors)){i.augmentTokenTypes(_);var y;d.TRACE_INIT("analyzeTokenTypes",function(){y=e.analyzeTokenTypes(_,{lineTerminatorCharacters:d.config.lineTerminatorCharacters,positionTracking:u.positionTracking,ensureOptimizations:u.ensureOptimizations,safeMode:u.safeMode,tracer:d.TRACE_INIT.bind(d)})}),d.patternIdxToConfig[b]=y.patternIdxToConfig,d.charCodeToPatternIdxToConfig[b]=y.charCodeToPatternIdxToConfig,d.emptyGroups=t.merge(d.emptyGroups,y.emptyGroups),d.hasCustom=y.hasCustom||d.hasCustom,d.canModeBeOptimized[b]=y.canBeOptimized}})}),d.defaultMode=m.defaultMode,!t.isEmpty(d.lexerDefinitionErrors)&&!d.config.deferDefinitionErrorsHandling){var f=t.map(d.lexerDefinitionErrors,function(_){return _.message}),h=f.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+h)}t.forEach(d.lexerDefinitionWarning,function(_){t.PRINT_WARNING(_.message)}),d.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(d.chopInput=t.IDENTITY,d.match=d.matchWithTest):(d.updateLastIndex=t.NOOP,d.match=d.matchWithExec),g&&(d.handleModes=t.NOOP),d.trackStartLines===!1&&(d.computeNewColumn=t.IDENTITY),d.trackEndLines===!1&&(d.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(d.config.positionTracking))d.createTokenInstance=d.createFullToken;else if(/onlyStart/i.test(d.config.positionTracking))d.createTokenInstance=d.createStartOnlyToken;else if(/onlyOffset/i.test(d.config.positionTracking))d.createTokenInstance=d.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+d.config.positionTracking+'"');d.hasCustom?(d.addToken=d.addTokenUsingPush,d.handlePayload=d.handlePayloadWithCustom):(d.addToken=d.addTokenUsingMemberAccess,d.handlePayload=d.handlePayloadNoCustom)}),d.TRACE_INIT("Failed Optimization Warnings",function(){var _=t.reduce(d.canModeBeOptimized,function(b,y,R){return y===!1&&b.push(R),b},[]);if(u.ensureOptimizations&&!t.isEmpty(_))throw Error("Lexer Modes: < "+_.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),d.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),d.TRACE_INIT("toFastProperties",function(){t.toFastProperties(d)})})}return c.prototype.tokenize=function(l,u){if(u===void 0&&(u=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var d=t.map(this.lexerDefinitionErrors,function(g){return g.message}),p=d.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+p)}var m=this.tokenizeInternal(l,u);return m},c.prototype.tokenizeInternal=function(l,u){var d=this,p,m,g,v,f,h,_,b,y,R,M,C,U,E,S=l,w=S.length,P=0,I=0,N=this.hasCustom?0:Math.floor(l.length/10),V=new Array(N),H=[],Z=this.trackStartLines?1:void 0,X=this.trackStartLines?1:void 0,ne=e.cloneEmptyGroups(this.emptyGroups),he=this.trackStartLines,ve=this.config.lineTerminatorsPattern,ie=0,oe=[],Ae=[],te=[],z=[];Object.freeze(z);var j=void 0;function ae(){return oe}function de(F){var Y=e.charCodeToOptimizedIndex(F),K=Ae[Y];return K===void 0?z:K}var _e=function(F){if(te.length===1&&F.tokenType.PUSH_MODE===void 0){var Y=d.config.errorMessageProvider.buildUnableToPopLexerModeMessage(F);H.push({offset:F.startOffset,line:F.startLine!==void 0?F.startLine:void 0,column:F.startColumn!==void 0?F.startColumn:void 0,length:F.image.length,message:Y})}else{te.pop();var K=t.last(te);oe=d.patternIdxToConfig[K],Ae=d.charCodeToPatternIdxToConfig[K],ie=oe.length;var se=d.canModeBeOptimized[K]&&d.config.safeMode===!1;Ae&&se?j=de:j=ae}};function Ne(F){te.push(F),Ae=this.charCodeToPatternIdxToConfig[F],oe=this.patternIdxToConfig[F],ie=oe.length,ie=oe.length;var Y=this.canModeBeOptimized[F]&&this.config.safeMode===!1;Ae&&Y?j=de:j=ae}Ne.call(this,u);for(var We;P<w;){f=null;var Be=S.charCodeAt(P),et=j(Be),W=et.length;for(p=0;p<W;p++){We=et[p];var Ke=We.pattern;h=null;var J=We.short;if(J!==!1?Be===J&&(f=Ke):We.isCustom===!0?(E=Ke.exec(S,P,V,ne),E!==null?(f=E[0],E.payload!==void 0&&(h=E.payload)):f=null):(this.updateLastIndex(Ke,P),f=this.match(Ke,l,P)),f!==null){if(v=We.longerAlt,v!==void 0){var me=oe[v],Q=me.pattern;_=null,me.isCustom===!0?(E=Q.exec(S,P,V,ne),E!==null?(g=E[0],E.payload!==void 0&&(_=E.payload)):g=null):(this.updateLastIndex(Q,P),g=this.match(Q,l,P)),g&&g.length>f.length&&(f=g,h=_,We=me)}break}}if(f!==null){if(b=f.length,y=We.group,y!==void 0&&(R=We.tokenTypeIdx,M=this.createTokenInstance(f,P,R,We.tokenType,Z,X,b),this.handlePayload(M,h),y===!1?I=this.addToken(V,I,M):ne[y].push(M)),l=this.chopInput(l,b),P=P+b,X=this.computeNewColumn(X,b),he===!0&&We.canLineTerminator===!0){var be=0,Ee=void 0,ze=void 0;ve.lastIndex=0;do Ee=ve.test(f),Ee===!0&&(ze=ve.lastIndex-1,be++);while(Ee===!0);be!==0&&(Z=Z+be,X=b-ze,this.updateTokenEndLineColumnLocation(M,y,ze,be,Z,X,b))}this.handleModes(We,_e,Ne,M)}else{for(var T=P,x=Z,A=X,D=!1;!D&&P<w;)for(S.charCodeAt(P),l=this.chopInput(l,1),P++,m=0;m<ie;m++){var O=oe[m],Ke=O.pattern,J=O.short;if(J!==!1?S.charCodeAt(P)===J&&(D=!0):O.isCustom===!0?D=Ke.exec(S,P,V,ne)!==null:(this.updateLastIndex(Ke,P),D=Ke.exec(l)!==null),D===!0)break}C=P-T,U=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(S,T,C,x,A),H.push({offset:T,line:x,column:A,length:C,message:U})}}return this.hasCustom||(V.length=I),{tokens:V,groups:ne,errors:H}},c.prototype.handleModes=function(l,u,d,p){if(l.pop===!0){var m=l.push;u(p),m!==void 0&&d.call(this,m)}else l.push!==void 0&&d.call(this,l.push)},c.prototype.chopInput=function(l,u){return l.substring(u)},c.prototype.updateLastIndex=function(l,u){l.lastIndex=u},c.prototype.updateTokenEndLineColumnLocation=function(l,u,d,p,m,g,v){var f,h;u!==void 0&&(f=d===v-1,h=f?-1:0,p===1&&f===!0||(l.endLine=m+h,l.endColumn=g-1+-h))},c.prototype.computeNewColumn=function(l,u){return l+u},c.prototype.createTokenInstance=function(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return null},c.prototype.createOffsetOnlyToken=function(l,u,d,p){return{image:l,startOffset:u,tokenTypeIdx:d,tokenType:p}},c.prototype.createStartOnlyToken=function(l,u,d,p,m,g){return{image:l,startOffset:u,startLine:m,startColumn:g,tokenTypeIdx:d,tokenType:p}},c.prototype.createFullToken=function(l,u,d,p,m,g,v){return{image:l,startOffset:u,endOffset:u+v-1,startLine:m,endLine:m,startColumn:g,endColumn:g+v-1,tokenTypeIdx:d,tokenType:p}},c.prototype.addToken=function(l,u,d){return 666},c.prototype.addTokenUsingPush=function(l,u,d){return l.push(d),u},c.prototype.addTokenUsingMemberAccess=function(l,u,d){return l[u]=d,u++,u},c.prototype.handlePayload=function(l,u){},c.prototype.handlePayloadNoCustom=function(l,u){},c.prototype.handlePayloadWithCustom=function(l,u){u!==null&&(l.payload=u)},c.prototype.match=function(l,u,d){return null},c.prototype.matchWithTest=function(l,u,d){var p=l.test(u);return p===!0?u.substring(d,l.lastIndex):null},c.prototype.matchWithExec=function(l,u){var d=l.exec(u);return d!==null?d[0]:d},c.prototype.TRACE_INIT=function(l,u){if(this.traceInitPerf===!0){this.traceInitIndent++;var d=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(d+"--> <"+l+">");var p=t.timer(u),m=p.time,g=p.value,v=m>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&v(d+"<-- <"+l+"> time: "+m+"ms"),this.traceInitIndent--,g}else return u()},c.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",c.NA=/NOT_APPLICABLE/,c}();n.Lexer=a}),er=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=At(),t=Fs(),i=Po();function r(y){return s(y)?y.LABEL:y.name}n.tokenLabel=r;function o(y){return y.name}n.tokenName=o;function s(y){return e.isString(y.LABEL)&&y.LABEL!==""}n.hasTokenLabel=s;var a="parent",c="categories",l="label",u="group",d="push_mode",p="pop_mode",m="longer_alt",g="line_breaks",v="start_chars_hint";function f(y){return h(y)}n.createToken=f;function h(y){var R=y.pattern,M={};if(M.name=y.name,e.isUndefined(R)||(M.PATTERN=R),e.has(y,a))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(y,c)&&(M.CATEGORIES=y[c]),i.augmentTokenTypes([M]),e.has(y,l)&&(M.LABEL=y[l]),e.has(y,u)&&(M.GROUP=y[u]),e.has(y,p)&&(M.POP_MODE=y[p]),e.has(y,d)&&(M.PUSH_MODE=y[d]),e.has(y,m)&&(M.LONGER_ALT=y[m]),e.has(y,g)&&(M.LINE_BREAKS=y[g]),e.has(y,v)&&(M.START_CHARS_HINT=y[v]),M}n.EOF=f({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function _(y,R,M,C,U,E,S,w){return{image:R,startOffset:M,endOffset:C,startLine:U,endLine:E,startColumn:S,endColumn:w,tokenTypeIdx:y.tokenTypeIdx,tokenType:y}}n.createTokenInstance=_;function b(y,R){return i.tokenStructuredMatcher(y,R)}n.tokenMatcher=b}),Cn=ht(n=>{var e=n&&n.__extends||function(){var h=function(_,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,R){y.__proto__=R}||function(y,R){for(var M in R)Object.prototype.hasOwnProperty.call(R,M)&&(y[M]=R[M])},h(_,b)};return function(_,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");h(_,b);function y(){this.constructor=_}_.prototype=b===null?Object.create(b):(y.prototype=b.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=At(),i=er(),r=function(){function h(_){this._definition=_}return Object.defineProperty(h.prototype,"definition",{get:function(){return this._definition},set:function(_){this._definition=_},enumerable:!1,configurable:!0}),h.prototype.accept=function(_){_.visit(this),t.forEach(this.definition,function(b){b.accept(_)})},h}();n.AbstractProduction=r;var o=function(h){e(_,h);function _(b){var y=h.call(this,[])||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(b){},enumerable:!1,configurable:!0}),_.prototype.accept=function(b){b.visit(this)},_}(r);n.NonTerminal=o;var s=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.orgText="",t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Rule=s;var a=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.ignoreAmbiguities=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Alternative=a;var c=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Option=c;var l=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatory=l;var u=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatoryWithSeparator=u;var d=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Repetition=d;var p=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionWithSeparator=p;var m=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,y.ignoreAmbiguities=!1,y.hasPredicates=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this._definition},set:function(b){this._definition=b},enumerable:!1,configurable:!0}),_}(r);n.Alternation=m;var g=function(){function h(_){this.idx=1,t.assign(this,t.pick(_,function(b){return b!==void 0}))}return h.prototype.accept=function(_){_.visit(this)},h}();n.Terminal=g;function v(h){return t.map(h,f)}n.serializeGrammar=v;function f(h){function _(R){return t.map(R,f)}if(h instanceof o)return{type:"NonTerminal",name:h.nonTerminalName,idx:h.idx};if(h instanceof a)return{type:"Alternative",definition:_(h.definition)};if(h instanceof c)return{type:"Option",idx:h.idx,definition:_(h.definition)};if(h instanceof l)return{type:"RepetitionMandatory",idx:h.idx,definition:_(h.definition)};if(h instanceof u)return{type:"RepetitionMandatoryWithSeparator",idx:h.idx,separator:f(new g({terminalType:h.separator})),definition:_(h.definition)};if(h instanceof p)return{type:"RepetitionWithSeparator",idx:h.idx,separator:f(new g({terminalType:h.separator})),definition:_(h.definition)};if(h instanceof d)return{type:"Repetition",idx:h.idx,definition:_(h.definition)};if(h instanceof m)return{type:"Alternation",idx:h.idx,definition:_(h.definition)};if(h instanceof g){var b={type:"Terminal",name:h.terminalType.name,label:i.tokenLabel(h.terminalType),idx:h.idx},y=h.terminalType.PATTERN;return h.terminalType.PATTERN&&(b.pattern=t.isRegExp(y)?y.source:y),b}else{if(h instanceof s)return{type:"Rule",name:h.name,orgText:h.orgText,definition:_(h.definition)};throw Error("non exhaustive match")}}n.serializeProduction=f}),ac=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=At(),t=Cn(),i=function(){function o(){}return o.prototype.walk=function(s,a){var c=this;a===void 0&&(a=[]),e.forEach(s.definition,function(l,u){var d=e.drop(s.definition,u+1);if(l instanceof t.NonTerminal)c.walkProdRef(l,d,a);else if(l instanceof t.Terminal)c.walkTerminal(l,d,a);else if(l instanceof t.Alternative)c.walkFlat(l,d,a);else if(l instanceof t.Option)c.walkOption(l,d,a);else if(l instanceof t.RepetitionMandatory)c.walkAtLeastOne(l,d,a);else if(l instanceof t.RepetitionMandatoryWithSeparator)c.walkAtLeastOneSep(l,d,a);else if(l instanceof t.RepetitionWithSeparator)c.walkManySep(l,d,a);else if(l instanceof t.Repetition)c.walkMany(l,d,a);else if(l instanceof t.Alternation)c.walkOr(l,d,a);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(s,a,c){},o.prototype.walkProdRef=function(s,a,c){},o.prototype.walkFlat=function(s,a,c){var l=a.concat(c);this.walk(s,l)},o.prototype.walkOption=function(s,a,c){var l=a.concat(c);this.walk(s,l)},o.prototype.walkAtLeastOne=function(s,a,c){var l=[new t.Option({definition:s.definition})].concat(a,c);this.walk(s,l)},o.prototype.walkAtLeastOneSep=function(s,a,c){var l=r(s,a,c);this.walk(s,l)},o.prototype.walkMany=function(s,a,c){var l=[new t.Option({definition:s.definition})].concat(a,c);this.walk(s,l)},o.prototype.walkManySep=function(s,a,c){var l=r(s,a,c);this.walk(s,l)},o.prototype.walkOr=function(s,a,c){var l=this,u=a.concat(c);e.forEach(s.definition,function(d){var p=new t.Alternative({definition:[d]});l.walk(p,u)})},o}();n.RestWalker=i;function r(o,s,a){var c=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],l=c.concat(s,a);return l}}),Lo=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=Cn(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),Us=ht(n=>{var e=n&&n.__extends||function(){var p=function(m,g){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,f){v.__proto__=f}||function(v,f){for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(v[h]=f[h])},p(m,g)};return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(m,g);function v(){this.constructor=m}m.prototype=g===null?Object.create(g):(v.prototype=g.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=At(),i=Cn(),r=Lo();function o(p){return p instanceof i.Alternative||p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionMandatory||p instanceof i.RepetitionMandatoryWithSeparator||p instanceof i.RepetitionWithSeparator||p instanceof i.Terminal||p instanceof i.Rule}n.isSequenceProd=o;function s(p,m){m===void 0&&(m=[]);var g=p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionWithSeparator;return g?!0:p instanceof i.Alternation?t.some(p.definition,function(v){return s(v,m)}):p instanceof i.NonTerminal&&t.contains(m,p)?!1:p instanceof i.AbstractProduction?(p instanceof i.NonTerminal&&m.push(p),t.every(p.definition,function(v){return s(v,m)})):!1}n.isOptionalProd=s;function a(p){return p instanceof i.Alternation}n.isBranchingProd=a;function c(p){if(p instanceof i.NonTerminal)return"SUBRULE";if(p instanceof i.Option)return"OPTION";if(p instanceof i.Alternation)return"OR";if(p instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(p instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(p instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(p instanceof i.Repetition)return"MANY";if(p instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=c;var l=function(p){e(m,p);function m(){var g=p!==null&&p.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return m.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},m.prototype.visitTerminal=function(g){var v=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},m.prototype.visitNonTerminal=function(g){var v=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},m.prototype.visitOption=function(g){this.dslMethods.option.push(g)},m.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},m.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},m.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},m.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},m.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},m}(r.GAstVisitor);n.DslMethodsCollectorVisitor=l;var u=new l;function d(p){u.reset(),p.accept(u);var m=u.dslMethods;return u.reset(),m}n.collectMethods=d}),Kd=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=At(),t=Cn(),i=Us();function r(c){if(c instanceof t.NonTerminal)return r(c.referencedRule);if(c instanceof t.Terminal)return a(c);if(i.isSequenceProd(c))return o(c);if(i.isBranchingProd(c))return s(c);throw Error("non exhaustive match")}n.first=r;function o(c){for(var l=[],u=c.definition,d=0,p=u.length>d,m,g=!0;p&&g;)m=u[d],g=i.isOptionalProd(m),l=l.concat(r(m)),d=d+1,p=u.length>d;return e.uniq(l)}n.firstForSequence=o;function s(c){var l=e.map(c.definition,function(u){return r(u)});return e.uniq(e.flatten(l))}n.firstForBranching=s;function a(c){return[c.terminalType]}n.firstForTerminal=a}),Yd=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),Py=ht(n=>{var e=n&&n.__extends||function(){var d=function(p,m){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,v){g.__proto__=v}||function(g,v){for(var f in v)Object.prototype.hasOwnProperty.call(v,f)&&(g[f]=v[f])},d(p,m)};return function(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");d(p,m);function g(){this.constructor=p}p.prototype=m===null?Object.create(m):(g.prototype=m.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=ac(),i=Kd(),r=At(),o=Yd(),s=Cn(),a=function(d){e(p,d);function p(m){var g=d.call(this)||this;return g.topProd=m,g.follows={},g}return p.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},p.prototype.walkTerminal=function(m,g,v){},p.prototype.walkProdRef=function(m,g,v){var f=l(m.referencedRule,m.idx)+this.topProd.name,h=g.concat(v),_=new s.Alternative({definition:h}),b=i.first(_);this.follows[f]=b},p}(t.RestWalker);n.ResyncFollowsWalker=a;function c(d){var p={};return r.forEach(d,function(m){var g=new a(m).startWalking();r.assign(p,g)}),p}n.computeAllProdsFollows=c;function l(d,p){return d.name+p+o.IN}n.buildBetweenProdsFollowPrefix=l;function u(d){var p=d.terminalType.name;return p+d.idx+o.IN}n.buildInProdFollowPrefix=u}),ks=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=er(),t=At(),i=At(),r=Cn(),o=Us();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(s){var a=s.expected,c=s.actual;s.previous,s.ruleName;var l=e.hasTokenLabel(a),u=l?"--> "+e.tokenLabel(a)+" <--":"token of type --> "+a.name+" <--",d="Expecting "+u+" but found --> '"+c.image+"' <--";return d},buildNotAllInputParsedMessage:function(s){var a=s.firstRedundant;return s.ruleName,"Redundant input, expecting EOF but found: "+a.image},buildNoViableAltMessage:function(s){var a=s.expectedPathsPerAlt,c=s.actual;s.previous;var l=s.customUserDescription;s.ruleName;var u="Expecting: ",d=i.first(c).image,p=`
but found: '`+d+"'";if(l)return u+l+p;var m=i.reduce(a,function(h,_){return h.concat(_)},[]),g=i.map(m,function(h){return"["+i.map(h,function(_){return e.tokenLabel(_)}).join(", ")+"]"}),v=i.map(g,function(h,_){return"  "+(_+1)+". "+h}),f=`one of these possible Token sequences:
`+v.join(`
`);return u+f+p},buildEarlyExitMessage:function(s){var a=s.expectedIterationPaths,c=s.actual,l=s.customUserDescription;s.ruleName;var u="Expecting: ",d=i.first(c).image,p=`
but found: '`+d+"'";if(l)return u+l+p;var m=i.map(a,function(v){return"["+i.map(v,function(f){return e.tokenLabel(f)}).join(",")+"]"}),g=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+m.join(" ,")+">");return u+g+p}},Object.freeze(n.defaultParserErrorProvider),n.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(s,a){var c="Invalid grammar, reference to a rule which is not defined: ->"+a.nonTerminalName+`<-
inside top level rule: ->`+s.name+"<-";return c}},n.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(s,a){function c(f){return f instanceof r.Terminal?f.terminalType.name:f instanceof r.NonTerminal?f.nonTerminalName:""}var l=s.name,u=i.first(a),d=u.idx,p=o.getProductionDslName(u),m=c(u),g=d>0,v="->"+p+(g?d:"")+"<- "+(m?"with argument: ->"+m+"<-":"")+`
                  appears more than once (`+a.length+" times) in the top level rule: ->"+l+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return v=v.replace(/[ \t]+/g," "),v=v.replace(/\s\s+/g,`
`),v},buildNamespaceConflictError:function(s){var a=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+s.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return a},buildAlternationPrefixAmbiguityError:function(s){var a=i.map(s.prefixPath,function(u){return e.tokenLabel(u)}).join(", "),c=s.alternation.idx===0?"":s.alternation.idx,l="Ambiguous alternatives: <"+s.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+c+"> inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+a+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return l},buildAlternationAmbiguityError:function(s){var a=i.map(s.prefixPath,function(u){return e.tokenLabel(u)}).join(", "),c=s.alternation.idx===0?"":s.alternation.idx,l="Ambiguous Alternatives Detected: <"+s.ambiguityIndices.join(" ,")+"> in <OR"+c+">"+(" inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+a+`> may appears as a prefix path in all these alternatives.
`);return l=l+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,l},buildEmptyRepetitionError:function(s){var a=o.getProductionDslName(s.repetition);s.repetition.idx!==0&&(a+=s.repetition.idx);var c="The repetition <"+a+"> within Rule <"+s.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return c},buildTokenNameError:function(s){return"deprecated"},buildEmptyAlternationError:function(s){var a="Ambiguous empty alternative: <"+(s.emptyChoiceIdx+1)+">"+(" in <OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return a},buildTooManyAlternativesError:function(s){var a=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
 has `+(s.alternation.definition.length+1)+" alternatives.");return a},buildLeftRecursionError:function(s){var a=s.topLevelRule.name,c=t.map(s.leftRecursionPath,function(d){return d.name}),l=a+" --> "+c.concat([a]).join(" --> "),u=`Left Recursion found in grammar.
`+("rule: <"+a+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+l+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return u},buildInvalidRuleNameError:function(s){return"deprecated"},buildDuplicateRuleNameError:function(s){var a;s.topLevelRule instanceof r.Rule?a=s.topLevelRule.name:a=s.topLevelRule;var c="Duplicate definition, rule: ->"+a+"<- is already defined in the grammar: ->"+s.grammarName+"<-";return c}}}),Ly=ht(n=>{var e=n&&n.__extends||function(){var a=function(c,l){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])},a(c,l)};return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");a(c,l);function u(){this.constructor=c}c.prototype=l===null?Object.create(l):(u.prototype=l.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=kn(),i=At(),r=Lo();function o(a,c){var l=new s(a,c);return l.resolveRefs(),l.errors}n.resolveGrammar=o;var s=function(a){e(c,a);function c(l,u){var d=a.call(this)||this;return d.nameToTopRule=l,d.errMsgProvider=u,d.errors=[],d}return c.prototype.resolveRefs=function(){var l=this;i.forEach(i.values(this.nameToTopRule),function(u){l.currTopLevel=u,u.accept(l)})},c.prototype.visitNonTerminal=function(l){var u=this.nameToTopRule[l.nonTerminalName];if(u)l.referencedRule=u;else{var d=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,l);this.errors.push({message:d,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:l.nonTerminalName})}},c}(r.GAstVisitor);n.GastRefResolverVisitor=s}),Bs=ht(n=>{var e=n&&n.__extends||function(){var f=function(h,_){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(b[R]=y[R])},f(h,_)};return function(h,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");f(h,_);function b(){this.constructor=h}h.prototype=_===null?Object.create(_):(b.prototype=_.prototype,new b)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=ac(),i=At(),r=Kd(),o=Cn(),s=function(f){e(h,f);function h(_,b){var y=f.call(this)||this;return y.topProd=_,y.path=b,y.possibleTokTypes=[],y.nextProductionName="",y.nextProductionOccurrence=0,y.found=!1,y.isAtEndOfPath=!1,y}return h.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},h.prototype.walk=function(_,b){b===void 0&&(b=[]),this.found||f.prototype.walk.call(this,_,b)},h.prototype.walkProdRef=function(_,b,y){if(_.referencedRule.name===this.nextProductionName&&_.idx===this.nextProductionOccurrence){var R=b.concat(y);this.updateExpectedNext(),this.walk(_.referencedRule,R)}},h.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},h}(t.RestWalker);n.AbstractNextPossibleTokensWalker=s;var a=function(f){e(h,f);function h(_,b){var y=f.call(this,_,b)||this;return y.path=b,y.nextTerminalName="",y.nextTerminalOccurrence=0,y.nextTerminalName=y.path.lastTok.name,y.nextTerminalOccurrence=y.path.lastTokOccurrence,y}return h.prototype.walkTerminal=function(_,b,y){if(this.isAtEndOfPath&&_.terminalType.name===this.nextTerminalName&&_.idx===this.nextTerminalOccurrence&&!this.found){var R=b.concat(y),M=new o.Alternative({definition:R});this.possibleTokTypes=r.first(M),this.found=!0}},h}(s);n.NextAfterTokenWalker=a;var c=function(f){e(h,f);function h(_,b){var y=f.call(this)||this;return y.topRule=_,y.occurrence=b,y.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},y}return h.prototype.startWalking=function(){return this.walk(this.topRule),this.result},h}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=c;var l=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkMany=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkMany.call(this,_,b,y)},h}(c);n.NextTerminalAfterManyWalker=l;var u=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkManySep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkManySep.call(this,_,b,y)},h}(c);n.NextTerminalAfterManySepWalker=u;var d=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkAtLeastOne=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOne.call(this,_,b,y)},h}(c);n.NextTerminalAfterAtLeastOneWalker=d;var p=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkAtLeastOneSep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOneSep.call(this,_,b,y)},h}(c);n.NextTerminalAfterAtLeastOneSepWalker=p;function m(f,h,_){_===void 0&&(_=[]),_=i.cloneArr(_);var b=[],y=0;function R(E){return E.concat(i.drop(f,y+1))}function M(E){var S=m(R(E),h,_);return b.concat(S)}for(;_.length<h&&y<f.length;){var C=f[y];if(C instanceof o.Alternative||C instanceof o.NonTerminal)return M(C.definition);if(C instanceof o.Option)b=M(C.definition);else if(C instanceof o.RepetitionMandatory){var U=C.definition.concat([new o.Repetition({definition:C.definition})]);return M(U)}else if(C instanceof o.RepetitionMandatoryWithSeparator){var U=[new o.Alternative({definition:C.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})];return M(U)}else if(C instanceof o.RepetitionWithSeparator){var U=C.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})]);b=M(U)}else if(C instanceof o.Repetition){var U=C.definition.concat([new o.Repetition({definition:C.definition})]);b=M(U)}else{if(C instanceof o.Alternation)return i.forEach(C.definition,function(E){i.isEmpty(E.definition)===!1&&(b=M(E.definition))}),b;if(C instanceof o.Terminal)_.push(C.terminalType);else throw Error("non exhaustive match")}y++}return b.push({partialPath:_,suffixDef:i.drop(f,y)}),b}n.possiblePathsFrom=m;function g(f,h,_,b){var y="EXIT_NONE_TERMINAL",R=[y],M="EXIT_ALTERNATIVE",C=!1,U=h.length,E=U-b-1,S=[],w=[];for(w.push({idx:-1,def:f,ruleStack:[],occurrenceStack:[]});!i.isEmpty(w);){var P=w.pop();if(P===M){C&&i.last(w).idx<=E&&w.pop();continue}var I=P.def,N=P.idx,V=P.ruleStack,H=P.occurrenceStack;if(!i.isEmpty(I)){var Z=I[0];if(Z===y){var X={idx:N,def:i.drop(I),ruleStack:i.dropRight(V),occurrenceStack:i.dropRight(H)};w.push(X)}else if(Z instanceof o.Terminal)if(N<U-1){var ne=N+1,he=h[ne];if(_(he,Z.terminalType)){var X={idx:ne,def:i.drop(I),ruleStack:V,occurrenceStack:H};w.push(X)}}else if(N===U-1)S.push({nextTokenType:Z.terminalType,nextTokenOccurrence:Z.idx,ruleStack:V,occurrenceStack:H}),C=!0;else throw Error("non exhaustive match");else if(Z instanceof o.NonTerminal){var ve=i.cloneArr(V);ve.push(Z.nonTerminalName);var ie=i.cloneArr(H);ie.push(Z.idx);var X={idx:N,def:Z.definition.concat(R,i.drop(I)),ruleStack:ve,occurrenceStack:ie};w.push(X)}else if(Z instanceof o.Option){var oe={idx:N,def:i.drop(I),ruleStack:V,occurrenceStack:H};w.push(oe),w.push(M);var Ae={idx:N,def:Z.definition.concat(i.drop(I)),ruleStack:V,occurrenceStack:H};w.push(Ae)}else if(Z instanceof o.RepetitionMandatory){var te=new o.Repetition({definition:Z.definition,idx:Z.idx}),z=Z.definition.concat([te],i.drop(I)),X={idx:N,def:z,ruleStack:V,occurrenceStack:H};w.push(X)}else if(Z instanceof o.RepetitionMandatoryWithSeparator){var j=new o.Terminal({terminalType:Z.separator}),te=new o.Repetition({definition:[j].concat(Z.definition),idx:Z.idx}),z=Z.definition.concat([te],i.drop(I)),X={idx:N,def:z,ruleStack:V,occurrenceStack:H};w.push(X)}else if(Z instanceof o.RepetitionWithSeparator){var oe={idx:N,def:i.drop(I),ruleStack:V,occurrenceStack:H};w.push(oe),w.push(M);var j=new o.Terminal({terminalType:Z.separator}),ae=new o.Repetition({definition:[j].concat(Z.definition),idx:Z.idx}),z=Z.definition.concat([ae],i.drop(I)),Ae={idx:N,def:z,ruleStack:V,occurrenceStack:H};w.push(Ae)}else if(Z instanceof o.Repetition){var oe={idx:N,def:i.drop(I),ruleStack:V,occurrenceStack:H};w.push(oe),w.push(M);var ae=new o.Repetition({definition:Z.definition,idx:Z.idx}),z=Z.definition.concat([ae],i.drop(I)),Ae={idx:N,def:z,ruleStack:V,occurrenceStack:H};w.push(Ae)}else if(Z instanceof o.Alternation)for(var de=Z.definition.length-1;de>=0;de--){var _e=Z.definition[de],Ne={idx:N,def:_e.definition.concat(i.drop(I)),ruleStack:V,occurrenceStack:H};w.push(Ne),w.push(M)}else if(Z instanceof o.Alternative)w.push({idx:N,def:Z.definition.concat(i.drop(I)),ruleStack:V,occurrenceStack:H});else if(Z instanceof o.Rule)w.push(v(Z,N,V,H));else throw Error("non exhaustive match")}}return S}n.nextPossibleTokensAfter=g;function v(f,h,_,b){var y=i.cloneArr(_);y.push(f.name);var R=i.cloneArr(b);return R.push(1),{idx:h,def:f.definition,ruleStack:y,occurrenceStack:R}}}),zs=ht(n=>{var e=n&&n.__extends||function(){var E=function(S,w){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(P,I){P.__proto__=I}||function(P,I){for(var N in I)Object.prototype.hasOwnProperty.call(I,N)&&(P[N]=I[N])},E(S,w)};return function(S,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");E(S,w);function P(){this.constructor=S}S.prototype=w===null?Object.create(w):(P.prototype=w.prototype,new P)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=At(),i=Bs(),r=ac(),o=Po(),s=Cn(),a=Lo(),c;(function(E){E[E.OPTION=0]="OPTION",E[E.REPETITION=1]="REPETITION",E[E.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",E[E.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",E[E.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",E[E.ALTERNATION=5]="ALTERNATION"})(c=n.PROD_TYPE||(n.PROD_TYPE={}));function l(E){if(E instanceof s.Option)return c.OPTION;if(E instanceof s.Repetition)return c.REPETITION;if(E instanceof s.RepetitionMandatory)return c.REPETITION_MANDATORY;if(E instanceof s.RepetitionMandatoryWithSeparator)return c.REPETITION_MANDATORY_WITH_SEPARATOR;if(E instanceof s.RepetitionWithSeparator)return c.REPETITION_WITH_SEPARATOR;if(E instanceof s.Alternation)return c.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=l;function u(E,S,w,P,I,N){var V=y(E,S,w),H=U(V)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return N(V,P,H,I)}n.buildLookaheadFuncForOr=u;function d(E,S,w,P,I,N){var V=R(E,S,I,w),H=U(V)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return N(V[0],H,P)}n.buildLookaheadFuncForOptionalProd=d;function p(E,S,w,P){var I=E.length,N=t.every(E,function(Z){return t.every(Z,function(X){return X.length===1})});if(S)return function(Z){for(var X=t.map(Z,function(ae){return ae.GATE}),ne=0;ne<I;ne++){var he=E[ne],ve=he.length,ie=X[ne];if(!(ie!==void 0&&ie.call(this)===!1))e:for(var oe=0;oe<ve;oe++){for(var Ae=he[oe],te=Ae.length,z=0;z<te;z++){var j=this.LA(z+1);if(w(j,Ae[z])===!1)continue e}return ne}}};if(N&&!P){var V=t.map(E,function(Z){return t.flatten(Z)}),H=t.reduce(V,function(Z,X,ne){return t.forEach(X,function(he){t.has(Z,he.tokenTypeIdx)||(Z[he.tokenTypeIdx]=ne),t.forEach(he.categoryMatches,function(ve){t.has(Z,ve)||(Z[ve]=ne)})}),Z},[]);return function(){var Z=this.LA(1);return H[Z.tokenTypeIdx]}}else return function(){for(var Z=0;Z<I;Z++){var X=E[Z],ne=X.length;e:for(var he=0;he<ne;he++){for(var ve=X[he],ie=ve.length,oe=0;oe<ie;oe++){var Ae=this.LA(oe+1);if(w(Ae,ve[oe])===!1)continue e}return Z}}}}n.buildAlternativesLookAheadFunc=p;function m(E,S,w){var P=t.every(E,function(X){return X.length===1}),I=E.length;if(P&&!w){var N=t.flatten(E);if(N.length===1&&t.isEmpty(N[0].categoryMatches)){var V=N[0],H=V.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===H}}else{var Z=t.reduce(N,function(X,ne,he){return X[ne.tokenTypeIdx]=!0,t.forEach(ne.categoryMatches,function(ve){X[ve]=!0}),X},[]);return function(){var X=this.LA(1);return Z[X.tokenTypeIdx]===!0}}}else return function(){e:for(var X=0;X<I;X++){for(var ne=E[X],he=ne.length,ve=0;ve<he;ve++){var ie=this.LA(ve+1);if(S(ie,ne[ve])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=m;var g=function(E){e(S,E);function S(w,P,I){var N=E.call(this)||this;return N.topProd=w,N.targetOccurrence=P,N.targetProdType=I,N}return S.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},S.prototype.checkIsTarget=function(w,P,I,N){return w.idx===this.targetOccurrence&&this.targetProdType===P?(this.restDef=I.concat(N),!0):!1},S.prototype.walkOption=function(w,P,I){this.checkIsTarget(w,c.OPTION,P,I)||E.prototype.walkOption.call(this,w,P,I)},S.prototype.walkAtLeastOne=function(w,P,I){this.checkIsTarget(w,c.REPETITION_MANDATORY,P,I)||E.prototype.walkOption.call(this,w,P,I)},S.prototype.walkAtLeastOneSep=function(w,P,I){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR,P,I)||E.prototype.walkOption.call(this,w,P,I)},S.prototype.walkMany=function(w,P,I){this.checkIsTarget(w,c.REPETITION,P,I)||E.prototype.walkOption.call(this,w,P,I)},S.prototype.walkManySep=function(w,P,I){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR,P,I)||E.prototype.walkOption.call(this,w,P,I)},S}(r.RestWalker),v=function(E){e(S,E);function S(w,P,I){var N=E.call(this)||this;return N.targetOccurrence=w,N.targetProdType=P,N.targetRef=I,N.result=[],N}return S.prototype.checkIsTarget=function(w,P){w.idx===this.targetOccurrence&&this.targetProdType===P&&(this.targetRef===void 0||w===this.targetRef)&&(this.result=w.definition)},S.prototype.visitOption=function(w){this.checkIsTarget(w,c.OPTION)},S.prototype.visitRepetition=function(w){this.checkIsTarget(w,c.REPETITION)},S.prototype.visitRepetitionMandatory=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY)},S.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR)},S.prototype.visitRepetitionWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR)},S.prototype.visitAlternation=function(w){this.checkIsTarget(w,c.ALTERNATION)},S}(a.GAstVisitor);function f(E){for(var S=new Array(E),w=0;w<E;w++)S[w]=[];return S}function h(E){for(var S=[""],w=0;w<E.length;w++){for(var P=E[w],I=[],N=0;N<S.length;N++){var V=S[N];I.push(V+"_"+P.tokenTypeIdx);for(var H=0;H<P.categoryMatches.length;H++){var Z="_"+P.categoryMatches[H];I.push(V+Z)}}S=I}return S}function _(E,S,w){for(var P=0;P<E.length;P++)if(P!==w)for(var I=E[P],N=0;N<S.length;N++){var V=S[N];if(I[V]===!0)return!1}return!0}function b(E,S){for(var w=t.map(E,function(ne){return i.possiblePathsFrom([ne],1)}),P=f(w.length),I=t.map(w,function(ne){var he={};return t.forEach(ne,function(ve){var ie=h(ve.partialPath);t.forEach(ie,function(oe){he[oe]=!0})}),he}),N=w,V=1;V<=S;V++){var H=N;N=f(H.length);for(var Z=function(ne){for(var he=H[ne],ve=0;ve<he.length;ve++){var ie=he[ve].partialPath,oe=he[ve].suffixDef,Ae=h(ie),te=_(I,Ae,ne);if(te||t.isEmpty(oe)||ie.length===S){var z=P[ne];if(M(z,ie)===!1){z.push(ie);for(var j=0;j<Ae.length;j++){var ae=Ae[j];I[ne][ae]=!0}}}else{var de=i.possiblePathsFrom(oe,V+1,ie);N[ne]=N[ne].concat(de),t.forEach(de,function(_e){var Ne=h(_e.partialPath);t.forEach(Ne,function(We){I[ne][We]=!0})})}}},X=0;X<H.length;X++)Z(X)}return P}n.lookAheadSequenceFromAlternatives=b;function y(E,S,w,P){var I=new v(E,c.ALTERNATION,P);return S.accept(I),b(I.result,w)}n.getLookaheadPathsForOr=y;function R(E,S,w,P){var I=new v(E,w);S.accept(I);var N=I.result,V=new g(S,E,w),H=V.startWalking(),Z=new s.Alternative({definition:N}),X=new s.Alternative({definition:H});return b([Z,X],P)}n.getLookaheadPathsForOptionalProd=R;function M(E,S){e:for(var w=0;w<E.length;w++){var P=E[w];if(P.length===S.length){for(var I=0;I<P.length;I++){var N=S[I],V=P[I],H=N===V||V.categoryMatchesMap[N.tokenTypeIdx]!==void 0;if(H===!1)continue e}return!0}}return!1}n.containsPath=M;function C(E,S){return E.length<S.length&&t.every(E,function(w,P){var I=S[P];return w===I||I.categoryMatchesMap[w.tokenTypeIdx]})}n.isStrictPrefixOfPath=C;function U(E){return t.every(E,function(S){return t.every(S,function(w){return t.every(w,function(P){return t.isEmpty(P.categoryMatches)})})})}n.areTokenCategoriesNotUsed=U}),qd=ht(n=>{var e=n&&n.__extends||function(){var P=function(I,N){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(V,H){V.__proto__=H}||function(V,H){for(var Z in H)Object.prototype.hasOwnProperty.call(H,Z)&&(V[Z]=H[Z])},P(I,N)};return function(I,N){if(typeof N!="function"&&N!==null)throw new TypeError("Class extends value "+String(N)+" is not a constructor or null");P(I,N);function V(){this.constructor=I}I.prototype=N===null?Object.create(N):(V.prototype=N.prototype,new V)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=At(),i=At(),r=kn(),o=Us(),s=zs(),a=Bs(),c=Cn(),l=Lo();function u(P,I,N,V,H){var Z=t.map(P,function(te){return d(te,V)}),X=t.map(P,function(te){return h(te,te,V)}),ne=[],he=[],ve=[];i.every(X,i.isEmpty)&&(ne=i.map(P,function(te){return y(te,V)}),he=i.map(P,function(te){return R(te,I,V)}),ve=U(P,I,V));var ie=w(P,N,V),oe=i.map(P,function(te){return C(te,V)}),Ae=i.map(P,function(te){return v(te,P,H,V)});return t.flatten(Z.concat(ve,X,ne,he,ie,oe,Ae))}n.validateGrammar=u;function d(P,I){var N=new g;P.accept(N);var V=N.allProductions,H=t.groupBy(V,p),Z=t.pick(H,function(ne){return ne.length>1}),X=t.map(t.values(Z),function(ne){var he=t.first(ne),ve=I.buildDuplicateFoundError(P,ne),ie=o.getProductionDslName(he),oe={message:ve,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:P.name,dslName:ie,occurrence:he.idx},Ae=m(he);return Ae&&(oe.parameter=Ae),oe});return X}function p(P){return o.getProductionDslName(P)+"_#_"+P.idx+"_#_"+m(P)}n.identifyProductionForDuplicates=p;function m(P){return P instanceof c.Terminal?P.terminalType.name:P instanceof c.NonTerminal?P.nonTerminalName:""}var g=function(P){e(I,P);function I(){var N=P!==null&&P.apply(this,arguments)||this;return N.allProductions=[],N}return I.prototype.visitNonTerminal=function(N){this.allProductions.push(N)},I.prototype.visitOption=function(N){this.allProductions.push(N)},I.prototype.visitRepetitionWithSeparator=function(N){this.allProductions.push(N)},I.prototype.visitRepetitionMandatory=function(N){this.allProductions.push(N)},I.prototype.visitRepetitionMandatoryWithSeparator=function(N){this.allProductions.push(N)},I.prototype.visitRepetition=function(N){this.allProductions.push(N)},I.prototype.visitAlternation=function(N){this.allProductions.push(N)},I.prototype.visitTerminal=function(N){this.allProductions.push(N)},I}(l.GAstVisitor);n.OccurrenceValidationCollector=g;function v(P,I,N,V){var H=[],Z=i.reduce(I,function(ne,he){return he.name===P.name?ne+1:ne},0);if(Z>1){var X=V.buildDuplicateRuleNameError({topLevelRule:P,grammarName:N});H.push({message:X,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:P.name})}return H}n.validateRuleDoesNotAlreadyExist=v;function f(P,I,N){var V=[],H;return t.contains(I,P)||(H="Invalid rule override, rule: ->"+P+"<- cannot be overridden in the grammar: ->"+N+"<-as it is not defined in any of the super grammars ",V.push({message:H,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:P})),V}n.validateRuleIsOverridden=f;function h(P,I,N,V){V===void 0&&(V=[]);var H=[],Z=_(I.definition);if(t.isEmpty(Z))return[];var X=P.name,ne=t.contains(Z,P);ne&&H.push({message:N.buildLeftRecursionError({topLevelRule:P,leftRecursionPath:V}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:X});var he=t.difference(Z,V.concat([P])),ve=t.map(he,function(ie){var oe=t.cloneArr(V);return oe.push(ie),h(P,ie,N,oe)});return H.concat(t.flatten(ve))}n.validateNoLeftRecursion=h;function _(P){var I=[];if(t.isEmpty(P))return I;var N=t.first(P);if(N instanceof c.NonTerminal)I.push(N.referencedRule);else if(N instanceof c.Alternative||N instanceof c.Option||N instanceof c.RepetitionMandatory||N instanceof c.RepetitionMandatoryWithSeparator||N instanceof c.RepetitionWithSeparator||N instanceof c.Repetition)I=I.concat(_(N.definition));else if(N instanceof c.Alternation)I=t.flatten(t.map(N.definition,function(X){return _(X.definition)}));else if(!(N instanceof c.Terminal))throw Error("non exhaustive match");var V=o.isOptionalProd(N),H=P.length>1;if(V&&H){var Z=t.drop(P);return I.concat(_(Z))}else return I}n.getFirstNoneTerminal=_;var b=function(P){e(I,P);function I(){var N=P!==null&&P.apply(this,arguments)||this;return N.alternations=[],N}return I.prototype.visitAlternation=function(N){this.alternations.push(N)},I}(l.GAstVisitor);function y(P,I){var N=new b;P.accept(N);var V=N.alternations,H=t.reduce(V,function(Z,X){var ne=t.dropRight(X.definition),he=t.map(ne,function(ve,ie){var oe=a.nextPossibleTokensAfter([ve],[],null,1);return t.isEmpty(oe)?{message:I.buildEmptyAlternationError({topLevelRule:P,alternation:X,emptyChoiceIdx:ie}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:P.name,occurrence:X.idx,alternative:ie+1}:null});return Z.concat(t.compact(he))},[]);return H}n.validateEmptyOrAlternative=y;function R(P,I,N){var V=new b;P.accept(V);var H=V.alternations;H=i.reject(H,function(X){return X.ignoreAmbiguities===!0});var Z=t.reduce(H,function(X,ne){var he=ne.idx,ve=ne.maxLookahead||I,ie=s.getLookaheadPathsForOr(he,P,ve,ne),oe=E(ie,ne,P,N),Ae=S(ie,ne,P,N);return X.concat(oe,Ae)},[]);return Z}n.validateAmbiguousAlternationAlternatives=R;var M=function(P){e(I,P);function I(){var N=P!==null&&P.apply(this,arguments)||this;return N.allProductions=[],N}return I.prototype.visitRepetitionWithSeparator=function(N){this.allProductions.push(N)},I.prototype.visitRepetitionMandatory=function(N){this.allProductions.push(N)},I.prototype.visitRepetitionMandatoryWithSeparator=function(N){this.allProductions.push(N)},I.prototype.visitRepetition=function(N){this.allProductions.push(N)},I}(l.GAstVisitor);n.RepetionCollector=M;function C(P,I){var N=new b;P.accept(N);var V=N.alternations,H=t.reduce(V,function(Z,X){return X.definition.length>255&&Z.push({message:I.buildTooManyAlternativesError({topLevelRule:P,alternation:X}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:P.name,occurrence:X.idx}),Z},[]);return H}n.validateTooManyAlts=C;function U(P,I,N){var V=[];return i.forEach(P,function(H){var Z=new M;H.accept(Z);var X=Z.allProductions;i.forEach(X,function(ne){var he=s.getProdType(ne),ve=ne.maxLookahead||I,ie=ne.idx,oe=s.getLookaheadPathsForOptionalProd(ie,H,he,ve),Ae=oe[0];if(i.isEmpty(i.flatten(Ae))){var te=N.buildEmptyRepetitionError({topLevelRule:H,repetition:ne});V.push({message:te,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:H.name})}})}),V}n.validateSomeNonEmptyLookaheadPath=U;function E(P,I,N,V){var H=[],Z=i.reduce(P,function(ne,he,ve){return I.definition[ve].ignoreAmbiguities===!0||i.forEach(he,function(ie){var oe=[ve];i.forEach(P,function(Ae,te){ve!==te&&s.containsPath(Ae,ie)&&I.definition[te].ignoreAmbiguities!==!0&&oe.push(te)}),oe.length>1&&!s.containsPath(H,ie)&&(H.push(ie),ne.push({alts:oe,path:ie}))}),ne},[]),X=t.map(Z,function(ne){var he=i.map(ne.alts,function(ie){return ie+1}),ve=V.buildAlternationAmbiguityError({topLevelRule:N,alternation:I,ambiguityIndices:he,prefixPath:ne.path});return{message:ve,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:N.name,occurrence:I.idx,alternatives:[ne.alts]}});return X}function S(P,I,N,V){var H=[],Z=i.reduce(P,function(X,ne,he){var ve=i.map(ne,function(ie){return{idx:he,path:ie}});return X.concat(ve)},[]);return i.forEach(Z,function(X){var ne=I.definition[X.idx];if(ne.ignoreAmbiguities!==!0){var he=X.idx,ve=X.path,ie=i.findAll(Z,function(Ae){return I.definition[Ae.idx].ignoreAmbiguities!==!0&&Ae.idx<he&&s.isStrictPrefixOfPath(Ae.path,ve)}),oe=i.map(ie,function(Ae){var te=[Ae.idx+1,he+1],z=I.idx===0?"":I.idx,j=V.buildAlternationPrefixAmbiguityError({topLevelRule:N,alternation:I,ambiguityIndices:te,prefixPath:Ae.path});return{message:j,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:N.name,occurrence:z,alternatives:te}});H=H.concat(oe)}}),H}n.checkPrefixAlternativesAmbiguities=S;function w(P,I,N){var V=[],H=i.map(I,function(Z){return Z.name});return i.forEach(P,function(Z){var X=Z.name;if(i.contains(H,X)){var ne=N.buildNamespaceConflictError(Z);V.push({message:ne,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:X})}}),V}}),Iy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=At(),t=Ly(),i=qd(),r=ks();function o(a){a=e.defaults(a,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var c={};return e.forEach(a.rules,function(l){c[l.name]=l}),t.resolveGrammar(c,a.errMsgProvider)}n.resolveGrammar=o;function s(a){return a=e.defaults(a,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(a.rules,a.maxLookahead,a.tokenTypes,a.errMsgProvider,a.grammarName)}n.validateGrammar=s}),Io=ht(n=>{var e=n&&n.__extends||function(){var g=function(v,f){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,_){h.__proto__=_}||function(h,_){for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&(h[b]=_[b])},g(v,f)};return function(v,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");g(v,f);function h(){this.constructor=v}v.prototype=f===null?Object.create(f):(h.prototype=f.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=At(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",s="NotAllInputParsedException",a=[i,r,o,s];Object.freeze(a);function c(g){return t.contains(a,g.name)}n.isRecognitionException=c;var l=function(g){e(v,g);function v(f,h){var _=this.constructor,b=g.call(this,f)||this;return b.token=h,b.resyncedTokens=[],Object.setPrototypeOf(b,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(b,b.constructor),b}return v}(Error),u=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=i,b}return v}(l);n.MismatchedTokenException=u;var d=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=r,b}return v}(l);n.NoViableAltException=d;var p=function(g){e(v,g);function v(f,h){var _=g.call(this,f,h)||this;return _.name=s,_}return v}(l);n.NotAllInputParsedException=p;var m=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=o,b}return v}(l);n.EarlyExitException=m}),$d=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=er(),t=At(),i=Io(),r=Yd(),o=kn();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function s(l){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=l}n.InRuleRecoveryException=s,s.prototype=Error.prototype;var a=function(){function l(){}return l.prototype.initRecoverable=function(u){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(u,"recoveryEnabled")?u.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=c)},l.prototype.getTokenToInsert=function(u){var d=e.createTokenInstance(u,"",NaN,NaN,NaN,NaN,NaN,NaN);return d.isInsertedInRecovery=!0,d},l.prototype.canTokenTypeBeInsertedInRecovery=function(u){return!0},l.prototype.tryInRepetitionRecovery=function(u,d,p,m){for(var g=this,v=this.findReSyncTokenType(),f=this.exportLexerState(),h=[],_=!1,b=this.LA(1),y=this.LA(1),R=function(){var M=g.LA(0),C=g.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:b,previous:M,ruleName:g.getCurrRuleFullName()}),U=new i.MismatchedTokenException(C,b,g.LA(0));U.resyncedTokens=t.dropRight(h),g.SAVE_ERROR(U)};!_;)if(this.tokenMatcher(y,m)){R();return}else if(p.call(this)){R(),u.apply(this,d);return}else this.tokenMatcher(y,v)?_=!0:(y=this.SKIP_TOKEN(),this.addToResyncTokens(y,h));this.importLexerState(f)},l.prototype.shouldInRepetitionRecoveryBeTried=function(u,d,p){return!(p===!1||u===void 0||d===void 0||this.tokenMatcher(this.LA(1),u)||this.isBackTracking()||this.canPerformInRuleRecovery(u,this.getFollowsForInRuleRecovery(u,d)))},l.prototype.getFollowsForInRuleRecovery=function(u,d){var p=this.getCurrentGrammarPath(u,d),m=this.getNextPossibleTokenTypes(p);return m},l.prototype.tryInRuleRecovery=function(u,d){if(this.canRecoverWithSingleTokenInsertion(u,d)){var p=this.getTokenToInsert(u);return p}if(this.canRecoverWithSingleTokenDeletion(u)){var m=this.SKIP_TOKEN();return this.consumeToken(),m}throw new s("sad sad panda")},l.prototype.canPerformInRuleRecovery=function(u,d){return this.canRecoverWithSingleTokenInsertion(u,d)||this.canRecoverWithSingleTokenDeletion(u)},l.prototype.canRecoverWithSingleTokenInsertion=function(u,d){var p=this;if(!this.canTokenTypeBeInsertedInRecovery(u)||t.isEmpty(d))return!1;var m=this.LA(1),g=t.find(d,function(v){return p.tokenMatcher(m,v)})!==void 0;return g},l.prototype.canRecoverWithSingleTokenDeletion=function(u){var d=this.tokenMatcher(this.LA(2),u);return d},l.prototype.isInCurrentRuleReSyncSet=function(u){var d=this.getCurrFollowKey(),p=this.getFollowSetFromFollowKey(d);return t.contains(p,u)},l.prototype.findReSyncTokenType=function(){for(var u=this.flattenFollowSet(),d=this.LA(1),p=2;;){var m=d.tokenType;if(t.contains(u,m))return m;d=this.LA(p),p++}},l.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var u=this.getLastExplicitRuleShortName(),d=this.getLastExplicitRuleOccurrenceIndex(),p=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(u),idxInCallingRule:d,inRule:this.shortRuleNameToFullName(p)}},l.prototype.buildFullFollowKeyStack=function(){var u=this,d=this.RULE_STACK,p=this.RULE_OCCURRENCE_STACK;return t.map(d,function(m,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:u.shortRuleNameToFullName(m),idxInCallingRule:p[g],inRule:u.shortRuleNameToFullName(d[g-1])}})},l.prototype.flattenFollowSet=function(){var u=this,d=t.map(this.buildFullFollowKeyStack(),function(p){return u.getFollowSetFromFollowKey(p)});return t.flatten(d)},l.prototype.getFollowSetFromFollowKey=function(u){if(u===n.EOF_FOLLOW_KEY)return[e.EOF];var d=u.ruleName+u.idxInCallingRule+r.IN+u.inRule;return this.resyncFollows[d]},l.prototype.addToResyncTokens=function(u,d){return this.tokenMatcher(u,e.EOF)||d.push(u),d},l.prototype.reSyncTo=function(u){for(var d=[],p=this.LA(1);this.tokenMatcher(p,u)===!1;)p=this.SKIP_TOKEN(),this.addToResyncTokens(p,d);return t.dropRight(d)},l.prototype.attemptInRepetitionRecovery=function(u,d,p,m,g,v,f){},l.prototype.getCurrentGrammarPath=function(u,d){var p=this.getHumanReadableRuleStack(),m=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:p,occurrenceStack:m,lastTok:u,lastTokOccurrence:d};return g},l.prototype.getHumanReadableRuleStack=function(){var u=this;return t.map(this.RULE_STACK,function(d){return u.shortRuleNameToFullName(d)})},l}();n.Recoverable=a;function c(l,u,d,p,m,g,v){var f=this.getKeyForAutomaticLookahead(p,m),h=this.firstAfterRepMap[f];if(h===void 0){var _=this.getCurrRuleFullName(),b=this.getGAstProductions()[_],y=new g(b,m);h=y.startWalking(),this.firstAfterRepMap[f]=h}var R=h.token,M=h.occurrence,C=h.isEndOfRule;this.RULE_STACK.length===1&&C&&R===void 0&&(R=e.EOF,M=1),this.shouldInRepetitionRecoveryBeTried(R,M,v)&&this.tryInRepetitionRecovery(l,u,d,R)}n.attemptInRepetitionRecovery=c}),lc=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),Ny=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=zs(),t=At(),i=kn(),r=lc(),o=Us(),s=function(){function a(){}return a.prototype.initLooksAhead=function(c){this.dynamicTokensEnabled=t.has(c,"dynamicTokensEnabled")?c.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(c,"maxLookahead")?c.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},a.prototype.preComputeLookaheadFunctions=function(c){var l=this;t.forEach(c,function(u){l.TRACE_INIT(u.name+" Rule Lookahead",function(){var d=o.collectMethods(u),p=d.alternation,m=d.repetition,g=d.option,v=d.repetitionMandatory,f=d.repetitionMandatoryWithSeparator,h=d.repetitionWithSeparator;t.forEach(p,function(_){var b=_.idx===0?"":_.idx;l.TRACE_INIT(""+o.getProductionDslName(_)+b,function(){var y=e.buildLookaheadFuncForOr(_.idx,u,_.maxLookahead||l.maxLookahead,_.hasPredicates,l.dynamicTokensEnabled,l.lookAheadBuilderForAlternatives),R=r.getKeyForAutomaticLookahead(l.fullRuleNameToShort[u.name],r.OR_IDX,_.idx);l.setLaFuncCache(R,y)})}),t.forEach(m,function(_){l.computeLookaheadFunc(u,_.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(g,function(_){l.computeLookaheadFunc(u,_.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(v,function(_){l.computeLookaheadFunc(u,_.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(f,function(_){l.computeLookaheadFunc(u,_.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(h,function(_){l.computeLookaheadFunc(u,_.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))})})})},a.prototype.computeLookaheadFunc=function(c,l,u,d,p,m){var g=this;this.TRACE_INIT(""+m+(l===0?"":l),function(){var v=e.buildLookaheadFuncForOptionalProd(l,c,p||g.maxLookahead,g.dynamicTokensEnabled,d,g.lookAheadBuilderForOptional),f=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[c.name],u,l);g.setLaFuncCache(f,v)})},a.prototype.lookAheadBuilderForOptional=function(c,l,u){return e.buildSingleAlternativeLookaheadFunction(c,l,u)},a.prototype.lookAheadBuilderForAlternatives=function(c,l,u,d){return e.buildAlternativesLookAheadFunc(c,l,u,d)},a.prototype.getKeyForAutomaticLookahead=function(c,l){var u=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(u,c,l)},a.prototype.getLaFuncFromCache=function(c){},a.prototype.getLaFuncFromMap=function(c){return this.lookAheadFuncsCache.get(c)},a.prototype.getLaFuncFromObj=function(c){return this.lookAheadFuncsCache[c]},a.prototype.setLaFuncCache=function(c,l){},a.prototype.setLaFuncCacheUsingMap=function(c,l){this.lookAheadFuncsCache.set(c,l)},a.prototype.setLaFuncUsingObj=function(c,l){this.lookAheadFuncsCache[c]=l},a}();n.LooksAhead=s}),Oy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.endOffset=s.endOffset):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.startColumn=s.startColumn,o.startLine=s.startLine,o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine)}n.setNodeLocationFull=t;function i(o,s,a){o.children[a]===void 0?o.children[a]=[s]:o.children[a].push(s)}n.addTerminalToCst=i;function r(o,s,a){o.children[s]===void 0?o.children[s]=[a]:o.children[s].push(a)}n.addNoneTerminalToCst=r}),Zd=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=At();function t(s){return r(s.constructor)}n.classNameFromInstance=t;var i="name";function r(s){var a=s.name;return a||"anonymous"}n.functionName=r;function o(s,a){var c=Object.getOwnPropertyDescriptor(s,i);return e.isUndefined(c)||c.configurable?(Object.defineProperty(s,i,{enumerable:!1,configurable:!0,writable:!1,value:a}),!0):!1}n.defineNameProp=o}),Dy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=At(),t=Zd();function i(d,p){for(var m=e.keys(d),g=m.length,v=0;v<g;v++)for(var f=m[v],h=d[f],_=h.length,b=0;b<_;b++){var y=h[b];y.tokenTypeIdx===void 0&&this[y.name](y.children,p)}}n.defaultVisit=i;function r(d,p){var m=function(){};t.defineNameProp(m,d+"BaseSemantics");var g={visit:function(v,f){if(e.isArray(v)&&(v=v[0]),!e.isUndefined(v))return this[v.name](v.children,f)},validateVisitor:function(){var v=a(this,p);if(!e.isEmpty(v)){var f=e.map(v,function(h){return h.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+f.join(`

`).replace(/\n/g,`
	`)))}}};return m.prototype=g,m.prototype.constructor=m,m._RULE_NAMES=p,m}n.createBaseSemanticVisitorConstructor=r;function o(d,p,m){var g=function(){};t.defineNameProp(g,d+"BaseSemanticsWithDefaults");var v=Object.create(m.prototype);return e.forEach(p,function(f){v[f]=i}),g.prototype=v,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=o;var s;(function(d){d[d.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",d[d.MISSING_METHOD=1]="MISSING_METHOD"})(s=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function a(d,p){var m=c(d,p),g=u(d,p);return m.concat(g)}n.validateVisitor=a;function c(d,p){var m=e.map(p,function(g){if(!e.isFunction(d[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(d.constructor)+" CST Visitor.",type:s.MISSING_METHOD,methodName:g}});return e.compact(m)}n.validateMissingCstMethods=c;var l=["constructor","visit","validateVisitor"];function u(d,p){var m=[];for(var g in d)e.isFunction(d[g])&&!e.contains(l,g)&&!e.contains(p,g)&&m.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(d.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:s.REDUNDANT_METHOD,methodName:g});return m}n.validateRedundantMethods=u}),Fy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=Oy(),t=At(),i=Dy(),r=kn(),o=function(){function s(){}return s.prototype.initTreeBuilder=function(a){if(this.CST_STACK=[],this.outputCst=a.outputCst,this.nodeLocationTracking=t.has(a,"nodeLocationTracking")?a.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+a.nodeLocationTracking+'"')},s.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(a){a.location={startOffset:NaN,endOffset:NaN}},s.prototype.setInitialNodeLocationOnlyOffsetRegular=function(a){a.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},s.prototype.setInitialNodeLocationFullRecovery=function(a){a.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.setInitialNodeLocationFullRegular=function(a){var c=this.LA(1);a.location={startOffset:c.startOffset,startLine:c.startLine,startColumn:c.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.cstInvocationStateUpdate=function(a,c){var l={name:a,children:{}};this.setInitialNodeLocation(l),this.CST_STACK.push(l)},s.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},s.prototype.cstPostRuleFull=function(a){var c=this.LA(0),l=a.location;l.startOffset<=c.startOffset?(l.endOffset=c.endOffset,l.endLine=c.endLine,l.endColumn=c.endColumn):(l.startOffset=NaN,l.startLine=NaN,l.startColumn=NaN)},s.prototype.cstPostRuleOnlyOffset=function(a){var c=this.LA(0),l=a.location;l.startOffset<=c.startOffset?l.endOffset=c.endOffset:l.startOffset=NaN},s.prototype.cstPostTerminal=function(a,c){var l=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(l,c,a),this.setNodeLocationFromToken(l.location,c)},s.prototype.cstPostNonTerminal=function(a,c){var l=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(l,c,a),this.setNodeLocationFromNode(l.location,a.location)},s.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var a=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=a,a}return this.baseCstVisitorConstructor},s.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var a=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=a,a}return this.baseCstVisitorWithDefaultsConstructor},s.prototype.getLastExplicitRuleShortName=function(){var a=this.RULE_STACK;return a[a.length-1]},s.prototype.getPreviousExplicitRuleShortName=function(){var a=this.RULE_STACK;return a[a.length-2]},s.prototype.getLastExplicitRuleOccurrenceIndex=function(){var a=this.RULE_OCCURRENCE_STACK;return a[a.length-1]},s}();n.TreeBuilder=o}),Uy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=kn(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),ky=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=At(),t=Io(),i=kn(),r=ks(),o=qd(),s=Cn(),a=function(){function c(){}return c.prototype.ACTION=function(l){return l.call(this)},c.prototype.consume=function(l,u,d){return this.consumeInternal(u,l,d)},c.prototype.subrule=function(l,u,d){return this.subruleInternal(u,l,d)},c.prototype.option=function(l,u){return this.optionInternal(u,l)},c.prototype.or=function(l,u){return this.orInternal(u,l)},c.prototype.many=function(l,u){return this.manyInternal(l,u)},c.prototype.atLeastOne=function(l,u){return this.atLeastOneInternal(l,u)},c.prototype.CONSUME=function(l,u){return this.consumeInternal(l,0,u)},c.prototype.CONSUME1=function(l,u){return this.consumeInternal(l,1,u)},c.prototype.CONSUME2=function(l,u){return this.consumeInternal(l,2,u)},c.prototype.CONSUME3=function(l,u){return this.consumeInternal(l,3,u)},c.prototype.CONSUME4=function(l,u){return this.consumeInternal(l,4,u)},c.prototype.CONSUME5=function(l,u){return this.consumeInternal(l,5,u)},c.prototype.CONSUME6=function(l,u){return this.consumeInternal(l,6,u)},c.prototype.CONSUME7=function(l,u){return this.consumeInternal(l,7,u)},c.prototype.CONSUME8=function(l,u){return this.consumeInternal(l,8,u)},c.prototype.CONSUME9=function(l,u){return this.consumeInternal(l,9,u)},c.prototype.SUBRULE=function(l,u){return this.subruleInternal(l,0,u)},c.prototype.SUBRULE1=function(l,u){return this.subruleInternal(l,1,u)},c.prototype.SUBRULE2=function(l,u){return this.subruleInternal(l,2,u)},c.prototype.SUBRULE3=function(l,u){return this.subruleInternal(l,3,u)},c.prototype.SUBRULE4=function(l,u){return this.subruleInternal(l,4,u)},c.prototype.SUBRULE5=function(l,u){return this.subruleInternal(l,5,u)},c.prototype.SUBRULE6=function(l,u){return this.subruleInternal(l,6,u)},c.prototype.SUBRULE7=function(l,u){return this.subruleInternal(l,7,u)},c.prototype.SUBRULE8=function(l,u){return this.subruleInternal(l,8,u)},c.prototype.SUBRULE9=function(l,u){return this.subruleInternal(l,9,u)},c.prototype.OPTION=function(l){return this.optionInternal(l,0)},c.prototype.OPTION1=function(l){return this.optionInternal(l,1)},c.prototype.OPTION2=function(l){return this.optionInternal(l,2)},c.prototype.OPTION3=function(l){return this.optionInternal(l,3)},c.prototype.OPTION4=function(l){return this.optionInternal(l,4)},c.prototype.OPTION5=function(l){return this.optionInternal(l,5)},c.prototype.OPTION6=function(l){return this.optionInternal(l,6)},c.prototype.OPTION7=function(l){return this.optionInternal(l,7)},c.prototype.OPTION8=function(l){return this.optionInternal(l,8)},c.prototype.OPTION9=function(l){return this.optionInternal(l,9)},c.prototype.OR=function(l){return this.orInternal(l,0)},c.prototype.OR1=function(l){return this.orInternal(l,1)},c.prototype.OR2=function(l){return this.orInternal(l,2)},c.prototype.OR3=function(l){return this.orInternal(l,3)},c.prototype.OR4=function(l){return this.orInternal(l,4)},c.prototype.OR5=function(l){return this.orInternal(l,5)},c.prototype.OR6=function(l){return this.orInternal(l,6)},c.prototype.OR7=function(l){return this.orInternal(l,7)},c.prototype.OR8=function(l){return this.orInternal(l,8)},c.prototype.OR9=function(l){return this.orInternal(l,9)},c.prototype.MANY=function(l){this.manyInternal(0,l)},c.prototype.MANY1=function(l){this.manyInternal(1,l)},c.prototype.MANY2=function(l){this.manyInternal(2,l)},c.prototype.MANY3=function(l){this.manyInternal(3,l)},c.prototype.MANY4=function(l){this.manyInternal(4,l)},c.prototype.MANY5=function(l){this.manyInternal(5,l)},c.prototype.MANY6=function(l){this.manyInternal(6,l)},c.prototype.MANY7=function(l){this.manyInternal(7,l)},c.prototype.MANY8=function(l){this.manyInternal(8,l)},c.prototype.MANY9=function(l){this.manyInternal(9,l)},c.prototype.MANY_SEP=function(l){this.manySepFirstInternal(0,l)},c.prototype.MANY_SEP1=function(l){this.manySepFirstInternal(1,l)},c.prototype.MANY_SEP2=function(l){this.manySepFirstInternal(2,l)},c.prototype.MANY_SEP3=function(l){this.manySepFirstInternal(3,l)},c.prototype.MANY_SEP4=function(l){this.manySepFirstInternal(4,l)},c.prototype.MANY_SEP5=function(l){this.manySepFirstInternal(5,l)},c.prototype.MANY_SEP6=function(l){this.manySepFirstInternal(6,l)},c.prototype.MANY_SEP7=function(l){this.manySepFirstInternal(7,l)},c.prototype.MANY_SEP8=function(l){this.manySepFirstInternal(8,l)},c.prototype.MANY_SEP9=function(l){this.manySepFirstInternal(9,l)},c.prototype.AT_LEAST_ONE=function(l){this.atLeastOneInternal(0,l)},c.prototype.AT_LEAST_ONE1=function(l){return this.atLeastOneInternal(1,l)},c.prototype.AT_LEAST_ONE2=function(l){this.atLeastOneInternal(2,l)},c.prototype.AT_LEAST_ONE3=function(l){this.atLeastOneInternal(3,l)},c.prototype.AT_LEAST_ONE4=function(l){this.atLeastOneInternal(4,l)},c.prototype.AT_LEAST_ONE5=function(l){this.atLeastOneInternal(5,l)},c.prototype.AT_LEAST_ONE6=function(l){this.atLeastOneInternal(6,l)},c.prototype.AT_LEAST_ONE7=function(l){this.atLeastOneInternal(7,l)},c.prototype.AT_LEAST_ONE8=function(l){this.atLeastOneInternal(8,l)},c.prototype.AT_LEAST_ONE9=function(l){this.atLeastOneInternal(9,l)},c.prototype.AT_LEAST_ONE_SEP=function(l){this.atLeastOneSepFirstInternal(0,l)},c.prototype.AT_LEAST_ONE_SEP1=function(l){this.atLeastOneSepFirstInternal(1,l)},c.prototype.AT_LEAST_ONE_SEP2=function(l){this.atLeastOneSepFirstInternal(2,l)},c.prototype.AT_LEAST_ONE_SEP3=function(l){this.atLeastOneSepFirstInternal(3,l)},c.prototype.AT_LEAST_ONE_SEP4=function(l){this.atLeastOneSepFirstInternal(4,l)},c.prototype.AT_LEAST_ONE_SEP5=function(l){this.atLeastOneSepFirstInternal(5,l)},c.prototype.AT_LEAST_ONE_SEP6=function(l){this.atLeastOneSepFirstInternal(6,l)},c.prototype.AT_LEAST_ONE_SEP7=function(l){this.atLeastOneSepFirstInternal(7,l)},c.prototype.AT_LEAST_ONE_SEP8=function(l){this.atLeastOneSepFirstInternal(8,l)},c.prototype.AT_LEAST_ONE_SEP9=function(l){this.atLeastOneSepFirstInternal(9,l)},c.prototype.RULE=function(l,u,d){if(d===void 0&&(d=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,l)){var p=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:l,grammarName:this.className}),m={message:p,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:l};this.definitionErrors.push(m)}this.definedRulesNames.push(l);var g=this.defineRule(l,u,d);return this[l]=g,g},c.prototype.OVERRIDE_RULE=function(l,u,d){d===void 0&&(d=i.DEFAULT_RULE_CONFIG);var p=[];p=p.concat(o.validateRuleIsOverridden(l,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(p);var m=this.defineRule(l,u,d);return this[l]=m,m},c.prototype.BACKTRACK=function(l,u){return function(){this.isBackTrackingStack.push(1);var d=this.saveRecogState();try{return l.apply(this,u),!0}catch(p){if(t.isRecognitionException(p))return!1;throw p}finally{this.reloadRecogState(d),this.isBackTrackingStack.pop()}}},c.prototype.getGAstProductions=function(){return this.gastProductionsCache},c.prototype.getSerializedGastProductions=function(){return s.serializeGrammar(e.values(this.gastProductionsCache))},c}();n.RecognizerApi=a}),By=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=At(),t=lc(),i=Io(),r=zs(),o=Bs(),s=kn(),a=$d(),c=er(),l=Po(),u=Zd(),d=function(){function p(){}return p.prototype.initRecognizerEngine=function(m,g){if(this.className=u.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=l.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(m)){if(e.isEmpty(m))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof m[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(m))this.tokensMap=e.reduce(m,function(_,b){return _[b.name]=b,_},{});else if(e.has(m,"modes")&&e.every(e.flatten(e.values(m.modes)),l.isTokenType)){var v=e.flatten(e.values(m.modes)),f=e.uniq(v);this.tokensMap=e.reduce(f,function(_,b){return _[b.name]=b,_},{})}else if(e.isObject(m))this.tokensMap=e.cloneObj(m);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=c.EOF;var h=e.every(e.values(m),function(_){return e.isEmpty(_.categoryMatches)});this.tokenMatcher=h?l.tokenStructuredMatcherNoCategories:l.tokenStructuredMatcher,l.augmentTokenTypes(e.values(this.tokensMap))},p.prototype.defineRule=function(m,g,v){if(this.selfAnalysisDone)throw Error("Grammar rule <"+m+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var f=e.has(v,"resyncEnabled")?v.resyncEnabled:s.DEFAULT_RULE_CONFIG.resyncEnabled,h=e.has(v,"recoveryValueFunc")?v.recoveryValueFunc:s.DEFAULT_RULE_CONFIG.recoveryValueFunc,_=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[_]=m,this.fullRuleNameToShort[m]=_;function b(M){try{if(this.outputCst===!0){g.apply(this,M);var C=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(C),C}else return g.apply(this,M)}catch(U){return this.invokeRuleCatch(U,f,h)}finally{this.ruleFinallyStateUpdate()}}var y=function(M,C){return M===void 0&&(M=0),this.ruleInvocationStateUpdate(_,m,M),b.call(this,C)},R="ruleName";return y[R]=m,y.originalGrammarAction=g,y},p.prototype.invokeRuleCatch=function(m,g,v){var f=this.RULE_STACK.length===1,h=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(m)){var _=m;if(h){var b=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(b))if(_.resyncedTokens=this.reSyncTo(b),this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];return y.recoveredNode=!0,y}else return v();else{if(this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];y.recoveredNode=!0,_.partialCstResult=y}throw _}}else{if(f)return this.moveToTerminatedState(),v();throw _}}else throw m},p.prototype.optionInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(m,g,v)},p.prototype.optionInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(m.DEF!==void 0){if(_=m.DEF,b=m.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=m;if(h.call(this)===!0)return _.call(this)},p.prototype.atLeastOneInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,m);return this.atLeastOneInternalLogic(m,g,v)},p.prototype.atLeastOneInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(g.DEF!==void 0){if(_=g.DEF,b=g.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=g;if(h.call(this)===!0)for(var R=this.doSingleRepetition(_);h.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[m,g],h,t.AT_LEAST_ONE_IDX,m,o.NextTerminalAfterAtLeastOneWalker)},p.prototype.atLeastOneSepFirstInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,m);this.atLeastOneSepFirstInternalLogic(m,g,v)},p.prototype.atLeastOneSepFirstInternalLogic=function(m,g,v){var f=this,h=g.DEF,_=g.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){h.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,_,y,h,o.NextTerminalAfterAtLeastOneSepWalker],y,t.AT_LEAST_ONE_SEP_IDX,m,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},p.prototype.manyInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.MANY_IDX,m);return this.manyInternalLogic(m,g,v)},p.prototype.manyInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(g.DEF!==void 0){if(_=g.DEF,b=g.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=g;for(var R=!0;h.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);this.attemptInRepetitionRecovery(this.manyInternal,[m,g],h,t.MANY_IDX,m,o.NextTerminalAfterManyWalker,R)},p.prototype.manySepFirstInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,m);this.manySepFirstInternalLogic(m,g,v)},p.prototype.manySepFirstInternalLogic=function(m,g,v){var f=this,h=g.DEF,_=g.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){h.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,_,y,h,o.NextTerminalAfterManySepWalker],y,t.MANY_SEP_IDX,m,o.NextTerminalAfterManySepWalker)}},p.prototype.repetitionSepSecondInternal=function(m,g,v,f,h){for(;v();)this.CONSUME(g),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,g,v,f,h],v,t.AT_LEAST_ONE_SEP_IDX,m,h)},p.prototype.doSingleRepetition=function(m){var g=this.getLexerPosition();m.call(this);var v=this.getLexerPosition();return v>g},p.prototype.orInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.OR_IDX,g),f=e.isArray(m)?m:m.DEF,h=this.getLaFuncFromCache(v),_=h.call(this,f);if(_!==void 0){var b=f[_];return b.ALT.call(this)}this.raiseNoAltException(g,m.ERR_MSG)},p.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var m=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:m,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,m))}},p.prototype.subruleInternal=function(m,g,v){var f;try{var h=v!==void 0?v.ARGS:void 0;return f=m.call(this,g,h),this.cstPostNonTerminal(f,v!==void 0&&v.LABEL!==void 0?v.LABEL:m.ruleName),f}catch(_){this.subruleInternalError(_,v,m.ruleName)}},p.prototype.subruleInternalError=function(m,g,v){throw i.isRecognitionException(m)&&m.partialCstResult!==void 0&&(this.cstPostNonTerminal(m.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:v),delete m.partialCstResult),m},p.prototype.consumeInternal=function(m,g,v){var f;try{var h=this.LA(1);this.tokenMatcher(h,m)===!0?(this.consumeToken(),f=h):this.consumeInternalError(m,h,v)}catch(_){f=this.consumeInternalRecovery(m,g,_)}return this.cstPostTerminal(v!==void 0&&v.LABEL!==void 0?v.LABEL:m.name,f),f},p.prototype.consumeInternalError=function(m,g,v){var f,h=this.LA(0);throw v!==void 0&&v.ERR_MSG?f=v.ERR_MSG:f=this.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:g,previous:h,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(f,g,h))},p.prototype.consumeInternalRecovery=function(m,g,v){if(this.recoveryEnabled&&v.name==="MismatchedTokenException"&&!this.isBackTracking()){var f=this.getFollowsForInRuleRecovery(m,g);try{return this.tryInRuleRecovery(m,f)}catch(h){throw h.name===a.IN_RULE_RECOVERY_EXCEPTION?v:h}}else throw v},p.prototype.saveRecogState=function(){var m=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:m,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},p.prototype.reloadRecogState=function(m){this.errors=m.errors,this.importLexerState(m.lexerState),this.RULE_STACK=m.RULE_STACK},p.prototype.ruleInvocationStateUpdate=function(m,g,v){this.RULE_OCCURRENCE_STACK.push(v),this.RULE_STACK.push(m),this.cstInvocationStateUpdate(g,m)},p.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},p.prototype.getCurrRuleFullName=function(){var m=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[m]},p.prototype.shortRuleNameToFullName=function(m){return this.shortRuleNameToFull[m]},p.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),c.EOF)},p.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},p}();n.RecognizerEngine=d}),zy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=Io(),t=At(),i=zs(),r=kn(),o=function(){function s(){}return s.prototype.initErrorHandler=function(a){this._errors=[],this.errorMessageProvider=t.has(a,"errorMessageProvider")?a.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},s.prototype.SAVE_ERROR=function(a){if(e.isRecognitionException(a))return a.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(a),a;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(s.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(a){this._errors=a},enumerable:!1,configurable:!0}),s.prototype.raiseEarlyExitException=function(a,c,l){for(var u=this.getCurrRuleFullName(),d=this.getGAstProductions()[u],p=i.getLookaheadPathsForOptionalProd(a,d,c,this.maxLookahead),m=p[0],g=[],v=1;v<=this.maxLookahead;v++)g.push(this.LA(v));var f=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:m,actual:g,previous:this.LA(0),customUserDescription:l,ruleName:u});throw this.SAVE_ERROR(new e.EarlyExitException(f,this.LA(1),this.LA(0)))},s.prototype.raiseNoAltException=function(a,c){for(var l=this.getCurrRuleFullName(),u=this.getGAstProductions()[l],d=i.getLookaheadPathsForOr(a,u,this.maxLookahead),p=[],m=1;m<=this.maxLookahead;m++)p.push(this.LA(m));var g=this.LA(0),v=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:d,actual:p,previous:g,customUserDescription:c,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(v,this.LA(1),g))},s}();n.ErrorHandler=o}),Vy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=Bs(),t=At(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,s){var a=this.gastProductionsCache[o];if(t.isUndefined(a))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([a],s,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var s=t.first(o.ruleStack),a=this.getGAstProductions(),c=a[s],l=new e.NextAfterTokenWalker(c,o).startWalking();return l},r}();n.ContentAssist=i}),Gy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=At(),t=Cn(),i=Fs(),r=Po(),o=er(),s=kn(),a=lc(),c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(c);var l=!0,u=Math.pow(2,a.BITS_FOR_OCCURRENCE_IDX)-1,d=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([d]);var p=o.createTokenInstance(d,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(p);var m={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=function(){function b(){}return b.prototype.initGastRecorder=function(y){this.recordingProdStack=[],this.RECORDING_PHASE=!1},b.prototype.enableRecording=function(){var y=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var R=function(C){var U=C>0?C:"";y["CONSUME"+U]=function(E,S){return this.consumeInternalRecord(E,C,S)},y["SUBRULE"+U]=function(E,S){return this.subruleInternalRecord(E,C,S)},y["OPTION"+U]=function(E){return this.optionInternalRecord(E,C)},y["OR"+U]=function(E){return this.orInternalRecord(E,C)},y["MANY"+U]=function(E){this.manyInternalRecord(C,E)},y["MANY_SEP"+U]=function(E){this.manySepFirstInternalRecord(C,E)},y["AT_LEAST_ONE"+U]=function(E){this.atLeastOneInternalRecord(C,E)},y["AT_LEAST_ONE_SEP"+U]=function(E){this.atLeastOneSepFirstInternalRecord(C,E)}},M=0;M<10;M++)R(M);y.consume=function(C,U,E){return this.consumeInternalRecord(U,C,E)},y.subrule=function(C,U,E){return this.subruleInternalRecord(U,C,E)},y.option=function(C,U){return this.optionInternalRecord(U,C)},y.or=function(C,U){return this.orInternalRecord(U,C)},y.many=function(C,U){this.manyInternalRecord(C,U)},y.atLeastOne=function(C,U){this.atLeastOneInternalRecord(C,U)},y.ACTION=y.ACTION_RECORD,y.BACKTRACK=y.BACKTRACK_RECORD,y.LA=y.LA_RECORD})},b.prototype.disableRecording=function(){var y=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var R=0;R<10;R++){var M=R>0?R:"";delete y["CONSUME"+M],delete y["SUBRULE"+M],delete y["OPTION"+M],delete y["OR"+M],delete y["MANY"+M],delete y["MANY_SEP"+M],delete y["AT_LEAST_ONE"+M],delete y["AT_LEAST_ONE_SEP"+M]}delete y.consume,delete y.subrule,delete y.option,delete y.or,delete y.many,delete y.atLeastOne,delete y.ACTION,delete y.BACKTRACK,delete y.LA})},b.prototype.ACTION_RECORD=function(y){},b.prototype.BACKTRACK_RECORD=function(y,R){return function(){return!0}},b.prototype.LA_RECORD=function(y){return s.END_OF_FILE},b.prototype.topLevelRuleRecord=function(y,R){try{var M=new t.Rule({definition:[],name:y});return M.name=y,this.recordingProdStack.push(M),R.call(this),this.recordingProdStack.pop(),M}catch(C){if(C.KNOWN_RECORDER_ERROR!==!0)try{C.message=C.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw C}throw C}},b.prototype.optionInternalRecord=function(y,R){return v.call(this,t.Option,y,R)},b.prototype.atLeastOneInternalRecord=function(y,R){v.call(this,t.RepetitionMandatory,R,y)},b.prototype.atLeastOneSepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionMandatoryWithSeparator,R,y,l)},b.prototype.manyInternalRecord=function(y,R){v.call(this,t.Repetition,R,y)},b.prototype.manySepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionWithSeparator,R,y,l)},b.prototype.orInternalRecord=function(y,R){return f.call(this,y,R)},b.prototype.subruleInternalRecord=function(y,R,M){if(_(R),!y||e.has(y,"ruleName")===!1){var C=new Error("<SUBRULE"+h(R)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var U=e.peek(this.recordingProdStack),E=y.ruleName,S=new t.NonTerminal({idx:R,nonTerminalName:E,referencedRule:void 0});return U.definition.push(S),this.outputCst?m:c},b.prototype.consumeInternalRecord=function(y,R,M){if(_(R),!r.hasShortKeyProperty(y)){var C=new Error("<CONSUME"+h(R)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var U=e.peek(this.recordingProdStack),E=new t.Terminal({idx:R,terminalType:y});return U.definition.push(E),p},b}();n.GastRecorder=g;function v(b,y,R,M){M===void 0&&(M=!1),_(R);var C=e.peek(this.recordingProdStack),U=e.isFunction(y)?y:y.DEF,E=new b({definition:[],idx:R});return M&&(E.separator=y.SEP),e.has(y,"MAX_LOOKAHEAD")&&(E.maxLookahead=y.MAX_LOOKAHEAD),this.recordingProdStack.push(E),U.call(this),C.definition.push(E),this.recordingProdStack.pop(),c}function f(b,y){var R=this;_(y);var M=e.peek(this.recordingProdStack),C=e.isArray(b)===!1,U=C===!1?b:b.DEF,E=new t.Alternation({definition:[],idx:y,ignoreAmbiguities:C&&b.IGNORE_AMBIGUITIES===!0});e.has(b,"MAX_LOOKAHEAD")&&(E.maxLookahead=b.MAX_LOOKAHEAD);var S=e.some(U,function(w){return e.isFunction(w.GATE)});return E.hasPredicates=S,M.definition.push(E),e.forEach(U,function(w){var P=new t.Alternative({definition:[]});E.definition.push(P),e.has(w,"IGNORE_AMBIGUITIES")?P.ignoreAmbiguities=w.IGNORE_AMBIGUITIES:e.has(w,"GATE")&&(P.ignoreAmbiguities=!0),R.recordingProdStack.push(P),w.ALT.call(R),R.recordingProdStack.pop()}),c}function h(b){return b===0?"":""+b}function _(b){if(b<0||b>u){var y=new Error("Invalid DSL Method idx value: <"+b+`>
	`+("Idx value must be a none negative value smaller than "+(u+1)));throw y.KNOWN_RECORDER_ERROR=!0,y}}}),Hy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=At(),t=kn(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var s=o.traceInitPerf,a=typeof s=="number";this.traceInitMaxIdent=a?s:1/0,this.traceInitPerf=a?s>0:s}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,s){if(this.traceInitPerf===!0){this.traceInitIndent++;var a=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(a+"--> <"+o+">");var c=e.timer(s),l=c.time,u=c.value,d=l>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(a+"<-- <"+o+"> time: "+l+"ms"),this.traceInitIndent--,u}else return s()},r}();n.PerformanceTracer=i}),Wy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(s){if(s!=="constructor"){var a=Object.getOwnPropertyDescriptor(o,s);a&&(a.get||a.set)?Object.defineProperty(t.prototype,s,a):t.prototype[s]=r.prototype[s]}})})}n.applyMixins=e}),kn=ht(n=>{var e=n&&n.__extends||function(){var M=function(C,U){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,S){E.__proto__=S}||function(E,S){for(var w in S)Object.prototype.hasOwnProperty.call(S,w)&&(E[w]=S[w])},M(C,U)};return function(C,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");M(C,U);function E(){this.constructor=C}C.prototype=U===null?Object.create(U):(E.prototype=U.prototype,new E)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=At(),i=Py(),r=er(),o=ks(),s=Iy(),a=$d(),c=Ny(),l=Fy(),u=Uy(),d=ky(),p=By(),m=zy(),g=Vy(),v=Gy(),f=Hy(),h=Wy();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(M){M[M.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",M[M.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",M[M.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",M[M.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",M[M.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",M[M.LEFT_RECURSION=5]="LEFT_RECURSION",M[M.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",M[M.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",M[M.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",M[M.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",M[M.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",M[M.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",M[M.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function _(M){return M===void 0&&(M=void 0),function(){return M}}n.EMPTY_ALT=_;var b=function(){function M(C,U){this.definitionErrors=[],this.selfAnalysisDone=!1;var E=this;if(E.initErrorHandler(U),E.initLexerAdapter(),E.initLooksAhead(U),E.initRecognizerEngine(C,U),E.initRecoverable(U),E.initTreeBuilder(U),E.initContentAssist(),E.initGastRecorder(U),E.initPerformanceTracer(U),t.has(U,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(U,"skipValidations")?U.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return M.performSelfAnalysis=function(C){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},M.prototype.performSelfAnalysis=function(){var C=this;this.TRACE_INIT("performSelfAnalysis",function(){var U;C.selfAnalysisDone=!0;var E=C.className;C.TRACE_INIT("toFastProps",function(){t.toFastProperties(C)}),C.TRACE_INIT("Grammar Recording",function(){try{C.enableRecording(),t.forEach(C.definedRulesNames,function(w){var P=C[w],I=P.originalGrammarAction,N=void 0;C.TRACE_INIT(w+" Rule",function(){N=C.topLevelRuleRecord(w,I)}),C.gastProductionsCache[w]=N})}finally{C.disableRecording()}});var S=[];if(C.TRACE_INIT("Grammar Resolving",function(){S=s.resolveGrammar({rules:t.values(C.gastProductionsCache)}),C.definitionErrors=C.definitionErrors.concat(S)}),C.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(S)&&C.skipValidations===!1){var w=s.validateGrammar({rules:t.values(C.gastProductionsCache),maxLookahead:C.maxLookahead,tokenTypes:t.values(C.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:E});C.definitionErrors=C.definitionErrors.concat(w)}}),t.isEmpty(C.definitionErrors)&&(C.recoveryEnabled&&C.TRACE_INIT("computeAllProdsFollows",function(){var w=i.computeAllProdsFollows(t.values(C.gastProductionsCache));C.resyncFollows=w}),C.TRACE_INIT("ComputeLookaheadFunctions",function(){C.preComputeLookaheadFunctions(t.values(C.gastProductionsCache))})),!M.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(C.definitionErrors))throw U=t.map(C.definitionErrors,function(w){return w.message}),new Error(`Parser Definition Errors detected:
 `+U.join(`
-------------------------------
`))})},M.DEFER_DEFINITION_ERRORS_HANDLING=!1,M}();n.Parser=b,h.applyMixins(b,[a.Recoverable,c.LooksAhead,l.TreeBuilder,u.LexerAdapter,p.RecognizerEngine,d.RecognizerApi,m.ErrorHandler,g.ContentAssist,v.GastRecorder,f.PerformanceTracer]);var y=function(M){e(C,M);function C(U,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var S=this,w=t.cloneObj(E);return w.outputCst=!0,S=M.call(this,U,w)||this,S}return C}(b);n.CstParser=y;var R=function(M){e(C,M);function C(U,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var S=this,w=t.cloneObj(E);return w.outputCst=!1,S=M.call(this,U,w)||this,S}return C}(b);n.EmbeddedActionsParser=R}),Xy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Wd();function t(i,r){var o=r===void 0?{}:r,s=o.resourceBase,a=s===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":s,c=o.css,l=c===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":c,u=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,d=`
<link rel='stylesheet' href='`+l+`'>
`,p=`
<script src='`+a+`vendor/railroad-diagrams.js'><\/script>
<script src='`+a+`src/diagrams_builder.js'><\/script>
<script src='`+a+`src/diagrams_behavior.js'><\/script>
<script src='`+a+`src/main.js'><\/script>
`,m=`
<div id="diagrams" align="center"></div>
`,g=`
<script>
    window.serializedGrammar = `+JSON.stringify(i,null,"  ")+`;
<\/script>
`,v=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return u+d+p+m+g+v}n.createSyntaxDiagramsCode=t}),jy=ht(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Wd();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=kn();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=Fs();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=er();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=ks();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var s=Io();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return s.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return s.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return s.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return s.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return s.NoViableAltException}});var a=jd();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return a.defaultLexerErrorProvider}});var c=Cn();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return c.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return c.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return c.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return c.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return c.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return c.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return c.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return c.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return c.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return c.Terminal}});var l=Cn();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return l.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return l.serializeProduction}});var u=Lo();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return u.GAstVisitor}});function d(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=d;var p=Xy();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return p.createSyntaxDiagramsCode}});var m=function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g}();n.Parser=m});const lo=jy();class Ky extends Rn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=o.path===""?Mr.extractUrlBase(e):o.path,a=new Ur(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(e,function(c){try{t(o.parse(c,s))}catch(l){r?r(l):console.error(l),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(T){const x=o(),A=new Yy(x.tokens),D=new $y(x.tokenVocabulary),O=s(D.getBaseCstVisitorConstructor()),F=A.lex(T);D.input=F.tokens;const Y=D.vrml();if(D.errors.length>0)throw console.error(D.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return O.visit(Y)}function o(){const T=lo.createToken,x=T({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),A=T({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:x}),D=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],O=T({name:"Version",pattern:/#VRML.*/,longer_alt:A}),F=T({name:"NodeName",pattern:new RegExp(D.join("|")),longer_alt:A}),Y=T({name:"DEF",pattern:/DEF/,longer_alt:A}),K=T({name:"USE",pattern:/USE/,longer_alt:A}),se=T({name:"ROUTE",pattern:/ROUTE/,longer_alt:A}),fe=T({name:"TO",pattern:/TO/,longer_alt:A}),ee=T({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),xe=T({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),Ve=T({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),Xe=T({name:"TrueLiteral",pattern:/TRUE/}),Ie=T({name:"FalseLiteral",pattern:/FALSE/}),Ue=T({name:"NullLiteral",pattern:/NULL/}),k=T({name:"LSquare",pattern:/\[/}),Ce=T({name:"RSquare",pattern:/]/}),Re=T({name:"LCurly",pattern:/{/}),Te=T({name:"RCurly",pattern:/}/}),B=T({name:"Comment",pattern:/#.*/,group:lo.Lexer.SKIPPED}),ye=[T({name:"WhiteSpace",pattern:/[ ,\s]/,group:lo.Lexer.SKIPPED}),F,Y,K,se,fe,Xe,Ie,Ue,O,A,x,ee,xe,Ve,k,Ce,Re,Te,B],De={};for(let Pe=0,Se=ye.length;Pe<Se;Pe++){const we=ye[Pe];De[we.name]=we}return{tokens:ye,tokenVocabulary:De}}function s(T){class x extends T{constructor(){super(),this.validateVisitor()}vrml(O){const F={version:this.visit(O.version),nodes:[],routes:[]};for(let Y=0,K=O.node.length;Y<K;Y++){const se=O.node[Y];F.nodes.push(this.visit(se))}if(O.route)for(let Y=0,K=O.route.length;Y<K;Y++){const se=O.route[Y];F.routes.push(this.visit(se))}return F}version(O){return O.Version[0].image}node(O){const F={name:O.NodeName[0].image,fields:[]};if(O.field)for(let Y=0,K=O.field.length;Y<K;Y++){const se=O.field[Y];F.fields.push(this.visit(se))}return O.def&&(F.DEF=this.visit(O.def[0])),F}field(O){const F={name:O.Identifier[0].image,type:null,values:null};let Y;return O.singleFieldValue&&(Y=this.visit(O.singleFieldValue[0])),O.multiFieldValue&&(Y=this.visit(O.multiFieldValue[0])),F.type=Y.type,F.values=Y.values,F}def(O){return(O.Identifier||O.NodeName)[0].image}use(O){return{USE:(O.Identifier||O.NodeName)[0].image}}singleFieldValue(O){return A(this,O)}multiFieldValue(O){return A(this,O)}route(O){return{FROM:O.RouteIdentifier[0].image,TO:O.RouteIdentifier[1].image}}}function A(D,O){const F={type:null,values:[]};if(O.node){F.type="node";for(let Y=0,K=O.node.length;Y<K;Y++){const se=O.node[Y];F.values.push(D.visit(se))}}if(O.use){F.type="use";for(let Y=0,K=O.use.length;Y<K;Y++){const se=O.use[Y];F.values.push(D.visit(se))}}if(O.StringLiteral){F.type="string";for(let Y=0,K=O.StringLiteral.length;Y<K;Y++){const se=O.StringLiteral[Y];F.values.push(se.image.replace(/'|"/g,""))}}if(O.NumberLiteral){F.type="number";for(let Y=0,K=O.NumberLiteral.length;Y<K;Y++){const se=O.NumberLiteral[Y];F.values.push(parseFloat(se.image))}}if(O.HexLiteral){F.type="hex";for(let Y=0,K=O.HexLiteral.length;Y<K;Y++){const se=O.HexLiteral[Y];F.values.push(se.image)}}if(O.TrueLiteral){F.type="boolean";for(let Y=0,K=O.TrueLiteral.length;Y<K;Y++)O.TrueLiteral[Y].image==="TRUE"&&F.values.push(!0)}if(O.FalseLiteral){F.type="boolean";for(let Y=0,K=O.FalseLiteral.length;Y<K;Y++)O.FalseLiteral[Y].image==="FALSE"&&F.values.push(!1)}return O.NullLiteral&&(F.type="null",O.NullLiteral.forEach(function(){F.values.push(null)})),F}return new x}function a(T){const x=T.nodes,A=new Td;for(let D=0,O=x.length;D<O;D++){const F=x[D];c(F)}for(let D=0,O=x.length;D<O;D++){const F=x[D],Y=l(F);Y instanceof Ot&&A.add(Y),F.name==="WorldInfo"&&(A.userData.worldInfo=Y)}return A}function c(T){T.DEF&&(i[T.DEF]=T);const x=T.fields;for(let A=0,D=x.length;A<D;A++){const O=x[A];if(O.type==="node"){const F=O.values;for(let Y=0,K=F.length;Y<K;Y++)c(F[Y])}}}function l(T){return T.USE?H(T.USE):(T.build!==void 0||(T.build=u(T)),T.build)}function u(T){const x=T.name;let A;switch(x){case"Anchor":case"Group":case"Transform":case"Collision":A=d(T);break;case"Background":A=p(T);break;case"Shape":A=m(T);break;case"Appearance":A=g(T);break;case"Material":A=v(T);break;case"ImageTexture":A=b(T);break;case"PixelTexture":A=_(T);break;case"TextureTransform":A=y(T);break;case"IndexedFaceSet":A=C(T);break;case"IndexedLineSet":A=U(T);break;case"PointSet":A=E(T);break;case"Box":A=S(T);break;case"Cone":A=w(T);break;case"Cylinder":A=P(T);break;case"Sphere":A=I(T);break;case"ElevationGrid":A=N(T);break;case"Extrusion":A=V(T);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":A=R(T);break;case"WorldInfo":A=M(T);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",x);break}return A!==void 0&&T.DEF!==void 0&&A.hasOwnProperty("name")===!0&&(A.name=T.DEF),A}function d(T){const x=new qn,A=T.fields;for(let D=0,O=A.length;D<O;D++){const F=A[D],Y=F.name,K=F.values;switch(Y){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":Z(K,x);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const se=new $(K[0],K[1],K[2]).normalize(),fe=K[3];x.quaternion.setFromAxisAngle(se,fe);break;case"scale":x.scale.set(K[0],K[1],K[2]);break;case"scaleOrientation":break;case"translation":x.position.set(K[0],K[1],K[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return x}function p(T){const x=new qn;let A,D,O,F;const Y=T.fields;for(let se=0,fe=Y.length;se<fe;se++){const ee=Y[se],xe=ee.name,Ve=ee.values;switch(xe){case"groundAngle":A=Ve;break;case"groundColor":D=Ve;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":O=Ve;break;case"skyColor":F=Ve;break;default:console.warn("THREE.VRMLLoader: Unknown field:",xe);break}}const K=1e4;if(F){const se=new ao(K,32,16),fe=new Yn({fog:!1,side:an,depthWrite:!1,depthTest:!1});F.length>3?(Q(se,K,O,J(F),!0),fe.vertexColors=!0):fe.color.setRGB(F[0],F[1],F[2],Rt);const ee=new rn(se,fe);x.add(ee)}if(D&&D.length>0){const se=new ao(K,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),fe=new Yn({fog:!1,side:an,vertexColors:!0,depthWrite:!1,depthTest:!1});Q(se,K,A,J(D),!1);const ee=new rn(se,fe);x.add(ee)}return x.renderOrder=-1/0,x}function m(T){const x=T.fields;let A=new Yn({name:Rn.DEFAULT_MATERIAL_NAME,color:0}),D;for(let F=0,Y=x.length;F<Y;F++){const K=x[F],se=K.name,fe=K.values;switch(se){case"appearance":fe[0]!==null&&(A=l(fe[0]));break;case"geometry":fe[0]!==null&&(D=l(fe[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}let O;if(D&&D.attributes.position){const F=D._type;if(F==="points"){const Y=new Zl({name:Rn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:A.opacity,transparent:A.transparent});D.attributes.color!==void 0?Y.vertexColors=!0:A.isMeshPhongMaterial&&Y.color.copy(A.emissive),O=new Ad(D,Y)}else if(F==="line"){const Y=new ql({name:Rn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:A.opacity,transparent:A.transparent});D.attributes.color!==void 0?Y.vertexColors=!0:A.isMeshPhongMaterial&&Y.color.copy(A.emissive),O=new Md(D,Y)}else D._solid!==void 0&&(A.side=D._solid?ii:Dn),D.attributes.color!==void 0&&(A.vertexColors=!0),O=new rn(D,A)}else O=new Ot,O.visible=!1;return O}function g(T){let x=new um,A;const D=T.fields;for(let O=0,F=D.length;O<F;O++){const Y=D[O],K=Y.name,se=Y.values;switch(K){case"material":if(se[0]!==null){const ee=l(se[0]);ee.diffuseColor&&x.color.copy(ee.diffuseColor),ee.emissiveColor&&x.emissive.copy(ee.emissiveColor),ee.shininess&&(x.shininess=ee.shininess),ee.specularColor&&x.specular.copy(ee.specularColor),ee.transparency&&(x.opacity=1-ee.transparency),ee.transparency>0&&(x.transparent=!0)}else x=new Yn({name:Rn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const fe=se[0];fe!==null&&(fe.name==="ImageTexture"||fe.name==="PixelTexture")&&(x.map=l(fe));break;case"textureTransform":se[0]!==null&&(A=l(se[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}if(x.map){if(x.map.__type){switch(x.map.__type){case Hn.INTENSITY_ALPHA:x.opacity=1;break;case Hn.RGB:x.color.set(16777215);break;case Hn.RGBA:x.color.set(16777215),x.opacity=1;break}delete x.map.__type}A&&(x.map.center.copy(A.center),x.map.rotation=A.rotation,x.map.repeat.copy(A.scale),x.map.offset.copy(A.translation))}return x}function v(T){const x={},A=T.fields;for(let D=0,O=A.length;D<O;D++){const F=A[D],Y=F.name,K=F.values;switch(Y){case"ambientIntensity":break;case"diffuseColor":x.diffuseColor=new it().setRGB(K[0],K[1],K[2],Rt);break;case"emissiveColor":x.emissiveColor=new it().setRGB(K[0],K[1],K[2],Rt);break;case"shininess":x.shininess=K[0];break;case"specularColor":x.specularColor=new it().setRGB(K[0],K[1],K[2],Rt);break;case"transparency":x.transparency=K[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return x}function f(T,x,A){let D;switch(x){case Hn.INTENSITY:D=parseInt(T),A.r=D,A.g=D,A.b=D,A.a=1;break;case Hn.INTENSITY_ALPHA:D=parseInt("0x"+T.substring(2,4)),A.r=D,A.g=D,A.b=D,A.a=parseInt("0x"+T.substring(4,6));break;case Hn.RGB:A.r=parseInt("0x"+T.substring(2,4)),A.g=parseInt("0x"+T.substring(4,6)),A.b=parseInt("0x"+T.substring(6,8)),A.a=1;break;case Hn.RGBA:A.r=parseInt("0x"+T.substring(2,4)),A.g=parseInt("0x"+T.substring(4,6)),A.b=parseInt("0x"+T.substring(6,8)),A.a=parseInt("0x"+T.substring(8,10));break}}function h(T){let x;switch(T){case 1:x=Hn.INTENSITY;break;case 2:x=Hn.INTENSITY_ALPHA;break;case 3:x=Hn.RGB;break;case 4:x=Hn.RGBA;break}return x}function _(T){let x,A=jn,D=jn;const O=T.fields;for(let F=0,Y=O.length;F<Y;F++){const K=O[F],se=K.name,fe=K.values;switch(se){case"image":const ee=fe[0],xe=fe[1],Ve=fe[2],Xe=h(Ve),Ie=new Uint8Array(4*ee*xe),Ue={r:0,g:0,b:0,a:0};for(let k=3,Ce=0,Re=fe.length;k<Re;k++,Ce++){f(fe[k],Xe,Ue);const Te=Ce*4;Ie[Te+0]=Ue.r,Ie[Te+1]=Ue.g,Ie[Te+2]=Ue.b,Ie[Te+3]=Ue.a}x=new wo(Ie,ee,xe),x.colorSpace=Rt,x.needsUpdate=!0,x.__type=Xe;break;case"repeatS":fe[0]===!1&&(A=bn);break;case"repeatT":fe[0]===!1&&(D=bn);break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}return x&&(x.wrapS=A,x.wrapT=D),x}function b(T){let x,A=jn,D=jn;const O=T.fields;for(let F=0,Y=O.length;F<Y;F++){const K=O[F],se=K.name,fe=K.values;switch(se){case"url":const ee=fe[0];ee&&(x=be.load(ee));break;case"repeatS":fe[0]===!1&&(A=bn);break;case"repeatT":fe[0]===!1&&(D=bn);break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}return x&&(x.wrapS=A,x.wrapT=D,x.colorSpace=Rt),x}function y(T){const x={center:new Qe,rotation:new Qe,scale:new Qe,translation:new Qe},A=T.fields;for(let D=0,O=A.length;D<O;D++){const F=A[D],Y=F.name,K=F.values;switch(Y){case"center":x.center.set(K[0],K[1]);break;case"rotation":x.rotation=K[0];break;case"scale":x.scale.set(K[0],K[1]);break;case"translation":x.translation.set(K[0],K[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return x}function R(T){return T.fields[0].values}function M(T){const x={},A=T.fields;for(let D=0,O=A.length;D<O;D++){const F=A[D],Y=F.name,K=F.values;switch(Y){case"title":x.title=K[0];break;case"info":x.info=K;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return x}function C(T){let x,A,D,O,F=!0,Y=!0,K=0,se,fe,ee,xe,Ve=!0,Xe=!0;const Ie=T.fields;for(let q=0,ye=Ie.length;q<ye;q++){const De=Ie[q],Pe=De.name,Se=De.values;switch(Pe){case"color":const we=Se[0];we!==null&&(x=l(we));break;case"coord":const Oe=Se[0];Oe!==null&&(A=l(Oe));break;case"normal":const Fe=Se[0];Fe!==null&&(D=l(Fe));break;case"texCoord":const Ye=Se[0];Ye!==null&&(O=l(Ye));break;case"ccw":F=Se[0];break;case"colorIndex":se=Se;break;case"colorPerVertex":Ve=Se[0];break;case"convex":break;case"coordIndex":fe=Se;break;case"creaseAngle":K=Se[0];break;case"normalIndex":ee=Se;break;case"normalPerVertex":Xe=Se[0];break;case"solid":Y=Se[0];break;case"texCoordIndex":xe=Se;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Pe);break}}if(fe===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new Wt;const Ue=X(fe,F);let k,Ce,Re;if(x){if(Ve===!0)if(se&&se.length>0){const q=X(se,F);k=de(Ue,q,x,3)}else k=We(Ue,new xt(x,3));else if(se&&se.length>0){const q=he(x,se),ye=ne(q,fe);k=_e(Ue,ye)}else{const q=ne(x,fe);k=_e(Ue,q)}me(k)}if(D)if(Xe===!0)if(ee&&ee.length>0){const q=X(ee,F);Ce=de(Ue,q,D,3)}else Ce=We(Ue,new xt(D,3));else if(ee&&ee.length>0){const q=he(D,ee),ye=ne(q,fe);Ce=_e(Ue,ye)}else{const q=ne(D,fe);Ce=_e(Ue,q)}else Ce=W(Ue,A,K);if(O)if(xe&&xe.length>0){const q=X(xe,F);Re=de(Ue,q,O,2)}else Re=We(Ue,new xt(O,2));const Te=new Wt,B=We(Ue,new xt(A,3));return Te.setAttribute("position",B),Te.setAttribute("normal",Ce),k&&Te.setAttribute("color",k),Re&&Te.setAttribute("uv",Re),Te._solid=Y,Te._type="mesh",Te}function U(T){let x,A,D,O,F=!0;const Y=T.fields;for(let xe=0,Ve=Y.length;xe<Ve;xe++){const Xe=Y[xe],Ie=Xe.name,Ue=Xe.values;switch(Ie){case"color":const k=Ue[0];k!==null&&(x=l(k));break;case"coord":const Ce=Ue[0];Ce!==null&&(A=l(Ce));break;case"colorIndex":D=Ue;break;case"colorPerVertex":F=Ue[0];break;case"coordIndex":O=Ue;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ie);break}}let K;const se=ve(O);if(x){if(F===!0)if(D.length>0){const xe=ve(D);K=de(se,xe,x,3)}else K=We(se,new xt(x,3));else if(D.length>0){const xe=he(x,D),Ve=ie(xe,O);K=Ne(se,Ve)}else{const xe=ie(x,O);K=Ne(se,xe)}me(K)}const fe=new Wt,ee=We(se,new xt(A,3));return fe.setAttribute("position",ee),K&&fe.setAttribute("color",K),fe._type="line",fe}function E(T){let x,A;const D=T.fields;for(let F=0,Y=D.length;F<Y;F++){const K=D[F],se=K.name,fe=K.values;switch(se){case"color":const ee=fe[0];ee!==null&&(x=l(ee));break;case"coord":const xe=fe[0];xe!==null&&(A=l(xe));break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}const O=new Wt;if(O.setAttribute("position",new xt(A,3)),x){const F=new xt(x,3);me(F),O.setAttribute("color",F)}return O._type="points",O}function S(T){const x=new $(2,2,2),A=T.fields;for(let O=0,F=A.length;O<F;O++){const Y=A[O],K=Y.name,se=Y.values;switch(K){case"size":x.x=se[0],x.y=se[1],x.z=se[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}return new zr(x.x,x.y,x.z)}function w(T){let x=1,A=2,D=!1;const O=T.fields;for(let Y=0,K=O.length;Y<K;Y++){const se=O[Y],fe=se.name,ee=se.values;switch(fe){case"bottom":D=!ee[0];break;case"bottomRadius":x=ee[0];break;case"height":A=ee[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",fe);break}}return new Jl(x,A,16,1,D)}function P(T){let x=1,A=2;const D=T.fields;for(let F=0,Y=D.length;F<Y;F++){const K=D[F],se=K.name,fe=K.values;switch(se){case"bottom":break;case"radius":x=fe[0];break;case"height":A=fe[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}return new Ps(x,x,A,16,1)}function I(T){let x=1;const A=T.fields;for(let O=0,F=A.length;O<F;O++){const Y=A[O],K=Y.name,se=Y.values;switch(K){case"radius":x=se[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}return new ao(x,16,16)}function N(T){let x,A,D,O,F=!0,Y=!0,K=!0,se=!0,fe=0,ee=2,xe=2,Ve=1,Xe=1;const Ie=T.fields;for(let Se=0,we=Ie.length;Se<we;Se++){const Oe=Ie[Se],Fe=Oe.name,Ye=Oe.values;switch(Fe){case"color":const bt=Ye[0];bt!==null&&(x=l(bt));break;case"normal":const zt=Ye[0];zt!==null&&(A=l(zt));break;case"texCoord":const qt=Ye[0];qt!==null&&(D=l(qt));break;case"height":O=Ye;break;case"ccw":se=Ye[0];break;case"colorPerVertex":F=Ye[0];break;case"creaseAngle":fe=Ye[0];break;case"normalPerVertex":Y=Ye[0];break;case"solid":K=Ye[0];break;case"xDimension":ee=Ye[0];break;case"xSpacing":Ve=Ye[0];break;case"zDimension":xe=Ye[0];break;case"zSpacing":Xe=Ye[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Fe);break}}const Ue=[],k=[],Ce=[],Re=[];for(let Se=0;Se<xe;Se++)for(let we=0;we<ee;we++){const Oe=Se*ee+we,Fe=Ve*Se,Ye=O[Oe],bt=Xe*we;if(Ue.push(Fe,Ye,bt),x&&F===!0){const zt=x[Oe*3+0],qt=x[Oe*3+1],Pn=x[Oe*3+2];Ce.push(zt,qt,Pn)}if(A&&Y===!0){const zt=A[Oe*3+0],qt=A[Oe*3+1],Pn=A[Oe*3+2];k.push(zt,qt,Pn)}if(D){const zt=D[Oe*2+0],qt=D[Oe*2+1];Re.push(zt,qt)}else Re.push(Se/(ee-1),we/(xe-1))}const Te=[];for(let Se=0;Se<ee-1;Se++)for(let we=0;we<xe-1;we++){const Oe=Se+we*ee,Fe=Se+(we+1)*ee,Ye=Se+1+(we+1)*ee,bt=Se+1+we*ee;se===!0?(Te.push(Oe,Ye,Fe),Te.push(Ye,Oe,bt)):(Te.push(Oe,Fe,Ye),Te.push(Ye,bt,Oe))}const B=We(Te,new xt(Ue,3)),q=We(Te,new xt(Re,2));let ye,De;if(x){if(F===!1){for(let Se=0;Se<ee-1;Se++)for(let we=0;we<xe-1;we++){const Oe=Se+we*(ee-1),Fe=x[Oe*3+0],Ye=x[Oe*3+1],bt=x[Oe*3+2];Ce.push(Fe,Ye,bt),Ce.push(Fe,Ye,bt),Ce.push(Fe,Ye,bt),Ce.push(Fe,Ye,bt),Ce.push(Fe,Ye,bt),Ce.push(Fe,Ye,bt)}ye=new xt(Ce,3)}else ye=We(Te,new xt(Ce,3));me(ye)}if(A)if(Y===!1){for(let Se=0;Se<ee-1;Se++)for(let we=0;we<xe-1;we++){const Oe=Se+we*(ee-1),Fe=A[Oe*3+0],Ye=A[Oe*3+1],bt=A[Oe*3+2];k.push(Fe,Ye,bt),k.push(Fe,Ye,bt),k.push(Fe,Ye,bt),k.push(Fe,Ye,bt),k.push(Fe,Ye,bt),k.push(Fe,Ye,bt)}De=new xt(k,3)}else De=We(Te,new xt(k,3));else De=W(Te,Ue,fe);const Pe=new Wt;return Pe.setAttribute("position",B),Pe.setAttribute("normal",De),Pe.setAttribute("uv",q),ye&&Pe.setAttribute("color",ye),Pe._solid=K,Pe._type="mesh",Pe}function V(T){let x=[1,1,1,-1,-1,-1,-1,1,1,1],A=[0,0,0,0,1,0],D,O,F=!0,Y=!0,K=0,se=!0,fe=!0;const ee=T.fields;for(let Pe=0,Se=ee.length;Pe<Se;Pe++){const we=ee[Pe],Oe=we.name,Fe=we.values;switch(Oe){case"beginCap":F=Fe[0];break;case"ccw":Y=Fe[0];break;case"convex":break;case"creaseAngle":K=Fe[0];break;case"crossSection":x=Fe;break;case"endCap":se=Fe[0];break;case"orientation":O=Fe;break;case"scale":D=Fe;break;case"solid":fe=Fe[0];break;case"spine":A=Fe;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Oe);break}}const xe=x[0]===x[x.length-2]&&x[1]===x[x.length-1],Ve=[],Xe=new $,Ie=new $,Ue=new $,k=new $,Ce=new Un;for(let Pe=0,Se=0,we=0,Oe=A.length;Pe<Oe;Pe+=3,Se+=2,we+=4){Xe.fromArray(A,Pe),Ie.x=D?D[Se+0]:1,Ie.y=1,Ie.z=D?D[Se+1]:1,Ue.x=O?O[we+0]:0,Ue.y=O?O[we+1]:0,Ue.z=O?O[we+2]:1;const Fe=O?O[we+3]:0;for(let Ye=0,bt=x.length;Ye<bt;Ye+=2)k.x=x[Ye+0],k.y=0,k.z=x[Ye+1],k.multiply(Ie),Ce.setFromAxisAngle(Ue,Fe),k.applyQuaternion(Ce),k.add(Xe),Ve.push(k.x,k.y,k.z)}const Re=[],Te=A.length/3,B=x.length/2;for(let Pe=0;Pe<Te-1;Pe++)for(let Se=0;Se<B-1;Se++){const we=Se+Pe*B;let Oe=Se+1+Pe*B;const Fe=Se+(Pe+1)*B;let Ye=Se+1+(Pe+1)*B;Se===B-2&&xe===!0&&(Oe=Pe*B,Ye=(Pe+1)*B),Y===!0?(Re.push(we,Oe,Fe),Re.push(Fe,Oe,Ye)):(Re.push(we,Fe,Oe),Re.push(Fe,Ye,Oe))}if(F===!0||se===!0){const Pe=[];for(let Oe=0,Fe=x.length;Oe<Fe;Oe+=2)Pe.push(new Qe(x[Oe],x[Oe+1]));const Se=Ql.triangulateShape(Pe,[]),we=[];for(let Oe=0,Fe=Se.length;Oe<Fe;Oe++){const Ye=Se[Oe];we.push(Ye[0],Ye[1],Ye[2])}if(F===!0)for(let Oe=0,Fe=we.length;Oe<Fe;Oe+=3)Y===!0?Re.push(we[Oe+0],we[Oe+1],we[Oe+2]):Re.push(we[Oe+0],we[Oe+2],we[Oe+1]);if(se===!0){const Oe=B*(Te-1);for(let Fe=0,Ye=we.length;Fe<Ye;Fe+=3)Y===!0?Re.push(Oe+we[Fe+0],Oe+we[Fe+2],Oe+we[Fe+1]):Re.push(Oe+we[Fe+0],Oe+we[Fe+1],Oe+we[Fe+2])}}const q=We(Re,new xt(Ve,3)),ye=W(Re,Ve,K),De=new Wt;return De.setAttribute("position",q),De.setAttribute("normal",ye),De._solid=fe,De._type="mesh",De}function H(T){const x=i[T],A=l(x);return A.isObject3D||A.isMaterial?A.clone():A}function Z(T,x){for(let A=0,D=T.length;A<D;A++){const O=l(T[A]);O instanceof Ot&&x.add(O)}}function X(T,x){const A=[];let D=0;for(let O=0,F=T.length;O<F;O++){const Y=T[D],K=T[O+(x?1:2)],se=T[O+(x?2:1)];A.push(Y,K,se),(T[O+3]===-1||O+3>=F)&&(O+=3,D=O+1)}return A}function ne(T,x){const A=[];let D=0;for(let O=0,F=x.length;O<F;O++){const Y=D*3,K=T[Y],se=T[Y+1],fe=T[Y+2];A.push(K,se,fe),(x[O+3]===-1||O+3>=F)&&(O+=3,D++)}return A}function he(T,x){const A=[];for(let D=0,O=x.length;D<O;D++){const Y=x[D]*3,K=T[Y],se=T[Y+1],fe=T[Y+2];A.push(K,se,fe)}return A}function ve(T){const x=[];for(let A=0,D=T.length;A<D;A++){const O=T[A],F=T[A+1];x.push(O,F),(T[A+2]===-1||A+2>=D)&&(A+=2)}return x}function ie(T,x){const A=[];let D=0;for(let O=0,F=x.length;O<F;O++){const Y=D*3,K=T[Y],se=T[Y+1],fe=T[Y+2];A.push(K,se,fe),(x[O+2]===-1||O+2>=F)&&(O+=2,D++)}return A}const oe=new $,Ae=new $,te=new $,z=new Qe,j=new Qe,ae=new Qe;function de(T,x,A,D){const O=[];for(let F=0,Y=T.length;F<Y;F+=3){const K=x[F],se=x[F+1],fe=x[F+2];D===2?(z.fromArray(A,K*D),j.fromArray(A,se*D),ae.fromArray(A,fe*D),O.push(z.x,z.y),O.push(j.x,j.y),O.push(ae.x,ae.y)):(oe.fromArray(A,K*D),Ae.fromArray(A,se*D),te.fromArray(A,fe*D),O.push(oe.x,oe.y,oe.z),O.push(Ae.x,Ae.y,Ae.z),O.push(te.x,te.y,te.z))}return new xt(O,D)}function _e(T,x){const A=[];for(let D=0,O=0,F=T.length;D<F;D+=3,O++)oe.fromArray(x,O*3),A.push(oe.x,oe.y,oe.z),A.push(oe.x,oe.y,oe.z),A.push(oe.x,oe.y,oe.z);return new xt(A,3)}function Ne(T,x){const A=[];for(let D=0,O=0,F=T.length;D<F;D+=2,O++)oe.fromArray(x,O*3),A.push(oe.x,oe.y,oe.z),A.push(oe.x,oe.y,oe.z);return new xt(A,3)}function We(T,x){const A=x.array,D=x.itemSize,O=new A.constructor(T.length*D);let F=0,Y=0;for(let K=0,se=T.length;K<se;K++){F=T[K]*D;for(let fe=0;fe<D;fe++)O[Y++]=A[F++]}return new xt(O,D)}const Be=new $,et=new $;function W(T,x,A){const D=[],O={};for(let Y=0,K=T.length;Y<K;Y+=3){const se=T[Y],fe=T[Y+1],ee=T[Y+2],xe=new Zy(se,fe,ee);oe.fromArray(x,se*3),Ae.fromArray(x,fe*3),te.fromArray(x,ee*3),et.subVectors(te,Ae),Be.subVectors(oe,Ae),et.cross(Be),et.normalize(),xe.normal.copy(et),O[se]===void 0&&(O[se]=[]),O[fe]===void 0&&(O[fe]=[]),O[ee]===void 0&&(O[ee]=[]),O[se].push(xe.normal),O[fe].push(xe.normal),O[ee].push(xe.normal),D.push(xe)}const F=[];for(let Y=0,K=D.length;Y<K;Y++){const se=D[Y],fe=Ke(O[se.a],se.normal,A),ee=Ke(O[se.b],se.normal,A),xe=Ke(O[se.c],se.normal,A);oe.fromArray(x,se.a*3),Ae.fromArray(x,se.b*3),te.fromArray(x,se.c*3),F.push(fe.x,fe.y,fe.z),F.push(ee.x,ee.y,ee.z),F.push(xe.x,xe.y,xe.z)}return new xt(F,3)}function Ke(T,x,A){const D=new $;if(A===0)D.copy(x);else for(let O=0,F=T.length;O<F;O++)T[O].angleTo(x)<A&&D.add(T[O]);return D.normalize()}function J(T){const x=[];for(let A=0,D=T.length;A<D;A+=3)x.push(new it(T[A],T[A+1],T[A+2]));return x}function me(T){const x=new it;for(let A=0;A<T.count;A++)x.fromBufferAttribute(T,A),vt.colorSpaceToWorking(x,Rt),T.setXYZ(A,x.r,x.g,x.b)}function Q(T,x,A,D,O){const F=[],Y=O===!0?0:Math.PI;for(let Ve=0,Xe=D.length;Ve<Xe;Ve++){let Ie=Ve===0?0:A[Ve-1];Ie=O===!0?Ie:Y-Ie;const Ue=new $;Ue.setFromSphericalCoords(x,Ie,0),F.push(Ue)}const K=T.index,se=T.attributes.position,fe=new jt(new Float32Array(T.attributes.position.count*3),3),ee=new $,xe=new it;for(let Ve=0;Ve<K.count;Ve++){const Xe=K.getX(Ve);ee.fromBufferAttribute(se,Xe);let Ie,Ue,k=1;for(let Te=1;Te<F.length;Te++){Ie=Te-1,Ue=Te;const B=F[Ie],q=F[Ue];if(O===!0){if(ee.y<=B.y&&ee.y>q.y){k=Math.abs(B.y-ee.y)/Math.abs(B.y-q.y);break}}else if(ee.y>=B.y&&ee.y<q.y){k=Math.abs(B.y-ee.y)/Math.abs(B.y-q.y);break}}const Ce=D[Ie],Re=D[Ue];xe.copy(Ce).lerp(Re,k),vt.colorSpaceToWorking(xe,Rt),fe.setXYZ(Xe,xe.r,xe.g,xe.b)}T.setAttribute("color",fe)}const be=new Dd(this.manager);if(be.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const Ee=r(e);return a(Ee)}}class Yy{constructor(e){this.lexer=new lo.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const qy=lo.CstParser;class $y extends qy{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,s=e.LSquare,a=e.RSquare,c=e.Identifier,l=e.RouteIdentifier,u=e.StringLiteral,d=e.HexLiteral,p=e.NumberLiteral,m=e.TrueLiteral,g=e.FalseLiteral,v=e.NullLiteral,f=e.DEF,h=e.USE,_=e.ROUTE,b=e.TO,y=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(y),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(c),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(f),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("use",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(v)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(s),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(v)}}])}),t.CONSUME(a)}),t.RULE("route",function(){t.CONSUME(_),t.CONSUME(l),t.CONSUME(b),t.CONSUME2(l)}),this.performSelfAnalysis()}}class Zy{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new $}}const Hn={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},No=n=>(vh("data-v-ce701dff"),n=n(),_h(),n),Jy={key:0,class:"options-div"},Qy={class:"select-div"},eb={key:0,class:"radio-list"},tb=No(()=>Xt("label",{class:"label"},[Xt("strong",null,"Size:")],-1)),nb={class:"radio-grid"},ib={key:1,class:"radio-list"},rb=No(()=>Xt("label",{class:"label"},[Xt("strong",null,"Version:")],-1)),ob={class:"radio-grid"},sb={key:2,class:"bare-list"},ab={key:3,class:"radio-list"},lb=No(()=>Xt("label",{class:"label"},[Xt("strong",null,"Side:")],-1)),cb={class:"radio-grid"},ub={key:4,class:"radio-list"},db=No(()=>Xt("label",{class:"label"},[Xt("strong",null,"Variant:")],-1)),hb={class:"radio-grid"},fb={key:5,class:"checkbox-list"},pb=No(()=>Xt("label",{class:"label"},[Xt("strong",null,"Parts:")],-1)),mb={class:"checkbox-grid"},gb=350,vr=4,xb="0xff3030",vb=Yt({__name:"ModelViewer",props:{models:{},backgroundColor:{},disableExplode:{type:Boolean},hideControls:{type:Boolean},height:{}},setup(n){const e=n,t=st(null);let i,r,o,s,a=null,c=new qn,l=0,u=null,d=!1,p=!0,m=null;const g=new wy,v=new Ky,f=new X_;f.setDecoderPath("./draco/"),f.setDecoderConfig({type:"wasm"});const h=new K_;h.setDRACOLoader(f);const _=st(null),b=st(null),y=st(null),R=st([]),M=st(null),C=st(!1),U=st("left"),E=st(null),S=["small","big"],w={small:"Small",big:"Big"},P=st(null);let I=null;const N=st(!1);let V=new Map,H=new Map,Z=new Map,X=new Map,ne=new Map,he=1;const ve=[];let ie=null;function oe(){if(ie)return ie;const re=128,le=new Uint8Array(re*re*4);for(let ge=0;ge<le.length;ge++)le[ge]=128+Math.random()*40;return ie=new wo(le,re,re,wn),ie.wrapS=ie.wrapT=jn,ie.repeat.set(10,10),ie.needsUpdate=!0,ie}let Ae=new Map,te=new Map;const z=tt(()=>(Ae.clear(),te.clear(),e.models.map(le=>{if(Ae.set(le.key,le),!(le.children&&le.children.length>0))return{label:le.label,value:le.key};if(le.children.every(qe=>!!qe.src))return{label:le.label,value:le.key};const ke=le.children.map(qe=>(Ae.set(qe.key,qe),te.set(qe.key,le.key),{label:qe.label,value:qe.key}));return{label:le.label,value:le.key,children:ke}})));function j(re,le){if(le){if(le.scale!==void 0){const ge=typeof le.scale=="number"?{x:le.scale,y:le.scale,z:le.scale}:le.scale;re.scale.set(ge.x,ge.y,ge.z)}le.rotation&&re.rotation.set(yn.degToRad(le.rotation.x),yn.degToRad(le.rotation.y),yn.degToRad(le.rotation.z)),le.position&&re.position.add(new $(le.position.x,le.position.y,le.position.z))}}function ae(re,le=null){const Le=(de(re)?U.value==="left"?re.leftSrc:re.rightSrc:null)??(re==null?void 0:re.src)??le;return Le?C.value&&(re!=null&&re.bareSrc)?re.bareSrc:Le:null}function de(re){return!!(re!=null&&re.leftSrc&&(re!=null&&re.rightSrc))}function _e(){const re=_.value;return re!=null&&re.length?Ae.get(re[re.length-1]):void 0}function Ne(re){return!!(re.children&&re.children.length>0)?re.key||re.src:re.src||re.key}function We(re){return re.find(le=>le.isDefault)??re[re.length-1]}function Be(re){return S.filter(le=>re.some(ge=>ge.size===le))}function et(re){return[...new Set(re.map(le=>le.variant).filter(Boolean))]}function W(re){return!re.variant||re.variant===P.value}function Ke(re){P.value=et(re)[0]??null,R.value=re.filter(le=>!le.defaultHidden&&W(le)).map(le=>le.key)}const J=tt(()=>{const re={versionOptions:[],isGroup:!1,children:[],filePaths:[],hasBare:!1,hasAnyBare:!1,hasSides:!1,sizes:[],variants:[]};if(!_.value||_.value.length<1)return re;const le=_.value[_.value.length-1],ge=Ae.get(le);if(!ge)return re;if(!ge.children||ge.children.length===0){const G=ae(ge);return{versionOptions:[],isGroup:!1,children:[],filePaths:G?[{key:ge.key,path:G,entry:ge}]:[],hasBare:!!ge.bareSrc,hasAnyBare:!!ge.bareSrc,hasSides:de(ge),sizes:[],variants:[]}}const Le=Be(ge.children),qe=(Le.length>1?ge.children.filter(G=>!G.size||G.size===E.value):ge.children).map(G=>{const ue=!!G.children&&G.children.length>0,pe=G.isGroup||ue?G.key||G.src:G.src||G.key;return{label:G.label,value:pe,key:G.key,raw:G,isGroup:ue,children:G.children,src:G.src,bareSrc:G.bareSrc,leftSrc:G.leftSrc,rightSrc:G.rightSrc,colorHex:G.colorHex,opacity:G.opacity}}),Ze=qe.find(G=>G.value===M.value),ct=!!(Ze&&Ze.children&&Ze.children.length>0);let ut=[],gn=[];const L=(G,ue=null)=>{const pe=ae(G,ue);return pe?[{key:(G==null?void 0:G.key)??pe,path:pe,entry:(G==null?void 0:G.raw)??G}]:[]};return M.value&&(M.value.includes("/")?gn=L(Ze,M.value):Ze&&(ct&&Ze.children?(ut=Ze.children.filter(W).map(G=>({...G})),gn=ut.flatMap(G=>{const ue=ae(G);return ue?[{key:G.key,path:ue,entry:G}]:[]})):Ze.src&&(gn=L(Ze)))),{versionOptions:qe,isGroup:ct,children:ut,filePaths:gn,hasBare:!ct&&!!(Ze!=null&&Ze.bareSrc),hasAnyBare:!ct&&qe.some(G=>!!G.bareSrc),hasSides:!ct&&de(Ze),sizes:Le.length>1?Le:[],variants:ct?et(Ze.children):[]}}),me=tt(()=>J.value.versionOptions),Q=tt(()=>J.value.isGroup),be=tt(()=>Q.value&&!e.disableExplode),Ee=tt(()=>J.value.children),ze=tt(()=>{const re=[],le=new Map;for(const ge of Ee.value){const Le=ge.partGroup;if(!Le){re.push({key:ge.key,label:ge.name??ge.label??"Unnamed Part",partKeys:[ge.key]});continue}const ke=le.get(Le);ke===void 0?(le.set(Le,re.length),re.push({key:`group:${Le}`,label:Le,partKeys:[ge.key]})):re[ke].partKeys.push(ge.key)}return re});function T(re){return re.every(le=>R.value.includes(le))}function x(re,le){const ge=new Set(R.value);for(const Le of re)le?ge.add(Le):ge.delete(Le);R.value=Array.from(ge)}const A=tt(()=>J.value.filePaths),D=tt(()=>J.value.hasBare),O=tt(()=>J.value.hasAnyBare),F=tt(()=>J.value.hasSides),Y=tt(()=>J.value.sizes),K=tt(()=>J.value.variants);function se(re){var Le;const le=((Le=me.value.find(ke=>ke.value===M.value))==null?void 0:Le.children)??[],ge=new Set(le.filter(ke=>!ke.variant).map(ke=>ke.key));P.value=re,R.value=[...R.value.filter(ke=>ge.has(ke)),...le.filter(ke=>ke.variant===re&&!ke.defaultHidden).map(ke=>ke.key)],ee()}en(()=>e.models,()=>{var le;if(_.value)return;const re=e.models;if(!(!re||re.length===0)){z.value;for(const ge of re){const Le=!!((le=ge.children)!=null&&le.length)&&ge.children.every(ke=>!!ke.src);if(ge.children&&ge.children.length>0&&!Le){const ke=ge.children[0];if(ke){_.value=[ge.key,ke.key],y.value=ke.key;return}}else if(ge.src||Le){_.value=[ge.key],y.value=ge.key;return}}}},{immediate:!0}),en(y,re=>{if(!re){_.value=null;return}const le=Array.isArray(re)?re[re.length-1]:re,ge=[];let Le=le;const ke=new Set;for(;Le&&!ke.has(Le);)ge.unshift(Le),ke.add(Le),Le=te.get(Le);ge.length===0&&ge.push(le),_.value=ge}),en(_,re=>{if(!re||re.length<1)return;const le=re[re.length-1],ge=Ae.get(le);if(!ge){M.value=null,R.value=[],E.value=null,P.value=null,ee();return}if(!ge.children||ge.children.length===0){M.value=ge.src||null,R.value=[],E.value=null,P.value=null,ee();return}const Le=ge.children,ke=We(Le),qe=!!(ke.children&&ke.children.length>0);M.value=Ne(ke),E.value=Be(Le).length>1?ke.size??S[0]:null,qe&&ke.children?Ke(ke.children):(R.value=[],P.value=null),ee()},{immediate:!0}),en(M,re=>{if(!re||!_.value||_.value.length<1){ee();return}const le=_.value[_.value.length-1],ge=Ae.get(le);if(!ge||!ge.children){ee();return}const Le=ge.children.find(ke=>(!!(ke.children&&ke.children.length>0)?ke.key||ke.src:ke.src||ke.key)===re);Le&&Le.children?Ke(Le.children):P.value=null,ee()},{immediate:!0}),en(R,()=>{if(!Q.value||!a){ee();return}const re=new Set(R.value);a.children.forEach(le=>{(le instanceof rn||le instanceof Ot&&le.children.length>0)&&(le.visible=re.has(le.userData.partKey))}),N.value&&qt(),Se()},{deep:!0}),en(C,()=>{D.value&&ee()}),en(D,re=>{re||(C.value=!1)}),en(U,()=>{F.value&&ee({forceFit:!0})}),en(E,re=>{var qe;if(!re||!_.value)return;const le=Ae.get(_.value[_.value.length-1]);if(!((qe=le==null?void 0:le.children)!=null&&qe.length))return;const ge=le.children,Le=ge.find(Ze=>Ne(Ze)===M.value);if(Le&&(!Le.size||Le.size===re))return;const ke=ge.filter(Ze=>Ze.size===re);ke.length&&(M.value=Ne(We(ke)))}),en(Q,re=>{!re&&N.value&&(N.value=!1,ai())}),Eo(()=>{fe(),m=new IntersectionObserver(([re])=>{p=re.isIntersecting,p?De():Pe()},{rootMargin:"100px"}),m.observe(t.value),ee(),Se()}),Rs(()=>{Pe(),p=!1,ve.length=0,m==null||m.disconnect(),m=null,s==null||s.dispose(),a&&(i.remove(a),Fe(a),a=null),xe(),i==null||i.clear(),o&&(o.dispose(),o.forceContextLoss(),o.domElement.remove())});function fe(){i=new Td,i.background=new it(e.backgroundColor||getComputedStyle(document.documentElement).getPropertyValue("--background-color").trim()||"#101014");const re=t.value.clientWidth,le=e.height??500;r=new fn(45,re/le,.01,1e4),r.up.set(0,0,1),r.position.set(60,-60,60),o=new P_({antialias:!0,logarithmicDepthBuffer:!0}),o.setSize(re,le),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=Rt,t.value.appendChild(o.domElement),s=new I_(r,o.domElement),s.enableDamping=!0,s.dampingFactor=.05,s.addEventListener("change",Se);const ge=new Lm(16777215,.6);i.add(ge);const Le=new vs(16777215,.8);Le.position.set(5,5,5),i.add(Le);const ke=new vs(16777215,.4);ke.position.set(-5,0,-5),i.add(ke);const qe=new vs(16777215,.3);qe.position.set(0,-5,-5),i.add(qe),i.add(c)}async function ee(re={}){var gn;if(!i||!A.value.length)return;const le=++l,ge=JSON.stringify(b.value)!==JSON.stringify(_.value),Le=P.value?`${M.value}#${P.value}`:M.value,ke=Le!==I,qe=new qn,Ze=[],ct=_e();ct!=null&&ct.orientation&&qe.rotation.set(yn.degToRad(ct.orientation.x),yn.degToRad(ct.orientation.y),yn.degToRad(ct.orientation.z));for(const{key:L,path:G,entry:ue}of A.value){const pe=G.toLowerCase(),ce=pe.endsWith(".wrl")||pe.endsWith(".vrml"),Ge=pe.endsWith(".glb")||pe.endsWith(".gltf");let He;Ge?(He=await Ue(G),ue!=null&&ue.colorHex&&Ce(He,ue)):ce?He=await Ie(G):He=q(await Xe(G),ue),He.userData.src=G,He.userData.partKey=L,He.userData.partEntry=ue,j(He,ue),Q.value&&(He.visible=R.value.includes(L)),Ze.push(He),qe.add(He)}const ut=me.value.find(L=>L.value===M.value);if(Te(qe,((gn=ut==null?void 0:ut.raw)==null?void 0:gn.highlights)??(ct==null?void 0:ct.highlights)),le!==l||!i){Fe(qe);return}if(b.value=_.value?[..._.value]:null,a&&(i.remove(a),Fe(a)),a=qe,i.add(a),ke){I=Le??null;const L=me.value.find(G=>G.value===M.value);L&&L.isGroup&&L.children&&Ze.length>0&&(a.updateMatrixWorld(!0),Pn(Ze,a,L.children)),ge&&ye(a,ct==null?void 0:ct.view)}else re.forceFit?ye(a,ct==null?void 0:ct.view):s.update();a.children.forEach(L=>{if(!L.userData.partKey)return;const G=L.userData.partKey;V.has(G)||V.set(G,L.position.clone()),H.has(G)||H.set(G,L.rotation.clone())}),N.value&&qt(),Ve(),Se()}function xe(){c.children.forEach(re=>{var ge,Le;const le=re;(ge=le.geometry)==null||ge.dispose(),(Le=le.material)==null||Le.dispose()}),c.clear()}function Ve(){xe()}function Xe(re){return new Promise((le,ge)=>{g.load(re,le,void 0,ge)})}function Ie(re){return new Promise((le,ge)=>{v.load(re,le,void 0,ge)})}function Ue(re){return new Promise((le,ge)=>{h.load(re,Le=>le(Le.scene),void 0,ge)})}function k(re){const le=(re==null?void 0:re.colorHex)??"0xffffff",ge=(re==null?void 0:re.opacity)??1,Le=new Is({color:parseInt(le.replace("#",""),16),transparent:ge<1,opacity:ge,roughness:.6,metalness:.05,emissive:1118481,normalMap:oe(),normalScale:new Qe(.2,.2),side:Dn});return Le.onBeforeCompile=ke=>{ke.fragmentShader=ke.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        // vNormal only exists under smooth shading; 'normal' works either way
        float rim = 1.0 - max(dot(normalize(normal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `)},Le}function Ce(re,le){re.traverse(ge=>{const Le=ge;if(!Le.isMesh)return;const ke=k(le);ke.flatShading=!Le.geometry.getAttribute("normal");const qe=Le.material;Le.material=ke,Array.isArray(qe)?qe.forEach(Ye):qe&&Ye(qe)})}function Re(re){const le=parseInt(re.replace("#",""),16);return new $((le>>16&255)/255,(le>>8&255)/255,(le&255)/255)}function Te(re,le){if(!(le!=null&&le.length))return;const ge=le.slice(0,vr),Le=(Ze,ct)=>[...Ze,...Array.from({length:vr-Ze.length},ct)];re.updateMatrix();const ke={hlCount:{value:ge.length},hlMin:{value:Le(ge.map(Ze=>new $(Ze.min.x,Ze.min.y,Ze.min.z)),()=>new $)},hlMax:{value:Le(ge.map(Ze=>new $(Ze.max.x,Ze.max.y,Ze.max.z)),()=>new $)},hlColor:{value:Le(ge.map(Ze=>Re(Ze.colorHex??xb)),()=>new $)},hlFrame:{value:re.matrix.clone().invert()}},qe=new Set;re.traverse(Ze=>{const ct=Ze;if(ct.isMesh)for(const ut of Array.isArray(ct.material)?ct.material:[ct.material])qe.has(ut)||(qe.add(ut),B(ut,ke))})}function B(re,le){const ge=re.onBeforeCompile,Le=re.customProgramCacheKey();re.onBeforeCompile=(ke,qe)=>{ge.call(re,ke,qe),Object.assign(ke.uniforms,le),ke.vertexShader=ke.vertexShader.replace("#include <common>",`#include <common>
        uniform mat4 hlFrame;
        varying vec3 vHlPos;`).replace("#include <project_vertex>",`#include <project_vertex>
        vHlPos = (hlFrame * modelMatrix * vec4(transformed, 1.0)).xyz;`),ke.fragmentShader=ke.fragmentShader.replace("#include <common>",`#include <common>
        uniform int hlCount;
        uniform vec3 hlMin[${vr}];
        uniform vec3 hlMax[${vr}];
        uniform vec3 hlColor[${vr}];
        varying vec3 vHlPos;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        for (int i = 0; i < ${vr}; i++) {
          if (i >= hlCount) break;
          if (all(greaterThanEqual(vHlPos, hlMin[i])) && all(lessThanEqual(vHlPos, hlMax[i]))) {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, hlColor[i], 0.65);
          }
        }`)},re.customProgramCacheKey=()=>`${Le}|highlight`,re.needsUpdate=!0}function q(re,le){re.computeVertexNormals();const ge=le;let Le=new $(0,0,0);if(ge!=null&&ge.rotationPivot){re.computeBoundingBox();const qe=new $;re.boundingBox.getCenter(qe),Le.set(ge.rotationPivot.x+qe.x,ge.rotationPivot.y+qe.y,ge.rotationPivot.z+qe.z),re.translate(-Le.x,-Le.y,-Le.z)}const ke=new rn(re,k(ge));return ge!=null&&ge.rotationPivot?ke.position.copy(Le):ke.position.set(0,0,0),ke}function ye(re,le){const ge=re??a;if(!ge)return;ge.updateMatrixWorld(!0);const Le=new Fn().setFromObject(ge),ke=Le.getSize(new $).length(),qe=Le.getCenter(new $),Ze=new $((le==null?void 0:le.x)??1,(le==null?void 0:le.y)??1,(le==null?void 0:le.z)??1).normalize().multiplyScalar(ke*.8*Math.sqrt(3));s.target.copy(qe),r.position.copy(qe).add(Ze),r.lookAt(qe)}function De(){u===null&&p&&o&&(u=requestAnimationFrame(we))}function Pe(){u!==null&&cancelAnimationFrame(u),u=null}function Se(){d=!0,De()}function we(){if(u=null,!p||!o)return;d=!1,Oe(performance.now());const re=s.update();o.render(i,r),(re||d||ve.length>0)&&De()}function Oe(re){for(let le=ve.length-1;le>=0;le--){const ge=ve[le],Le=Math.min((re-ge.startTime)/gb,1),ke=Le<.5?2*Le*Le:1-Math.pow(-2*Le+2,2)/2;ge.mesh.position.lerpVectors(ge.startPos,ge.targetPos,ke),ge.mesh.quaternion.slerpQuaternions(ge.startQuat,ge.endQuat,ke),Le>=1&&ve.splice(le,1)}}function Fe(re){re.traverse(le=>{const ge=le;ge.geometry&&ge.geometry.dispose();const Le=ge.material;Array.isArray(Le)?Le.forEach(Ye):Le&&Ye(Le)})}function Ye(re){const le=re.normalMap;le&&le!==ie&&le.dispose(),re.dispose()}function bt(){a&&(N.value?ai():zt(),N.value=!N.value)}function zt(){if(!a)return;V.clear();const re=he*.25;a.children.forEach(le=>{if(!le.userData.partKey)return;const ge=le.userData.partKey;V.set(ge,le.position.clone());const Le=X.get(ge);let ke;if(Le)ke=le.position.clone().add(new $(Le.x,Le.y,Le.z));else{const ct=Z.get(ge);if(!ct)return;ke=le.position.clone().add(ct.clone().multiplyScalar(re))}const qe=ne.get(ge);let Ze=H.get(ge).clone();qe&&Ze.set(yn.degToRad(qe.x),yn.degToRad(qe.y),yn.degToRad(qe.z)),Bn(le,ke,Ze)})}function qt(){const re=he*.25;a.children.forEach(le=>{if(!le.userData.partKey)return;const ge=le.userData.partKey,Le=X.get(ge);let ke;if(Le)ke=V.get(ge).clone().add(new $(Le.x,Le.y,Le.z));else{const ct=Z.get(ge);if(!ct)return;ke=le.position.clone().add(ct.clone().multiplyScalar(re))}const qe=ne.get(ge);let Ze=H.get(ge).clone();qe&&Ze.set(yn.degToRad(qe.x),yn.degToRad(qe.y),yn.degToRad(qe.z)),le.position.copy(ke),le.rotation.copy(Ze)})}function Pn(re,le,ge){Z.clear(),X.clear(),ne.clear();const Le=new Fn().setFromObject(le),ke=Le.getCenter(new $),qe=le.worldToLocal(ke.clone());he=Le.getSize(new $).length();for(const Ze of re){const ut=new Fn().setFromObject(Ze).getCenter(new $),L=le.worldToLocal(ut.clone()).clone().sub(qe);if(L.length()<1e-4?L.set(0,0,0):L.normalize(),Z.set(Ze.userData.partKey,L),ge){const G=ge.find(ue=>ue.key===Ze.userData.partKey);G!=null&&G.explodeOffset&&X.set(Ze.userData.partKey,G.explodeOffset),G!=null&&G.explodeRotation&&ne.set(Ze.userData.partKey,G.explodeRotation)}}}function ai(){a&&a.children.forEach(re=>{if(!re.userData.partKey)return;const le=V.get(re.userData.partKey),ge=H.get(re.userData.partKey);!le||!ge||Bn(re,le,ge)})}function Bn(re,le,ge){const Le=ve.findIndex(ke=>ke.mesh===re);Le>-1&&ve.splice(Le,1),ve.push({mesh:re,startPos:re.position.clone(),targetPos:le.clone(),startQuat:re.quaternion.clone(),endQuat:new Un().setFromEuler(ge),startTime:performance.now()}),De()}return(re,le)=>{const ge=ef,Le=gh,ke=xh,qe=Ph,Ze=Lh,ct=Ju;return kt(),dn(ji,null,[!re.hideControls||be.value?(kt(),dn("div",Jy,[Xt("div",Qy,[re.hideControls?In("",!0):(kt(),Ti(ge,{key:0,class:"select-model",value:y.value,"onUpdate:value":le[0]||(le[0]=ut=>y.value=ut),options:z.value,"show-path":!0,"check-strategy":"child"},null,8,["value","options"])),be.value?(kt(),Ti(ke,{key:1,class:"select-button",onClick:bt,tertiary:""},{icon:Sn(()=>[Ei(Le,null,{default:Sn(()=>[N.value?(kt(),Ti(cc(of),{key:0})):In("",!0),N.value?In("",!0):(kt(),Ti(cc(nf),{key:1}))]),_:1})]),_:1})):In("",!0)]),re.hideControls?In("",!0):(kt(),dn(ji,{key:0},[Y.value.length>1?(kt(),dn("div",eb,[tb,Ei(Ze,{value:E.value,"onUpdate:value":le[1]||(le[1]=ut=>E.value=ut)},{default:Sn(()=>[Xt("div",nb,[(kt(!0),dn(ji,null,Oo(Y.value,ut=>(kt(),Ti(qe,{key:ut,value:ut},{default:Sn(()=>[ki(Do(w[ut]),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):In("",!0),me.value.length>(Q.value?1:0)?(kt(),dn("div",ib,[rb,Ei(Ze,{value:M.value,"onUpdate:value":le[2]||(le[2]=ut=>M.value=ut)},{default:Sn(()=>[Xt("div",ob,[(kt(!0),dn(ji,null,Oo(me.value,ut=>(kt(),Ti(qe,{key:ut.value,value:ut.value},{default:Sn(()=>[ki(Do(ut.label),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):In("",!0),O.value?(kt(),dn("div",sb,[Ei(ct,{checked:C.value,"onUpdate:checked":le[3]||(le[3]=ut=>C.value=ut),disabled:!D.value},{default:Sn(()=>[ki("Bare board")]),_:1},8,["checked","disabled"])])):In("",!0),F.value?(kt(),dn("div",ab,[lb,Ei(Ze,{value:U.value,"onUpdate:value":le[4]||(le[4]=ut=>U.value=ut)},{default:Sn(()=>[Xt("div",cb,[Ei(qe,{value:"left"},{default:Sn(()=>[ki("Left")]),_:1}),Ei(qe,{value:"right"},{default:Sn(()=>[ki("Right")]),_:1})])]),_:1},8,["value"])])):In("",!0),K.value.length>1?(kt(),dn("div",ub,[db,Ei(Ze,{value:P.value,"onUpdate:value":se},{default:Sn(()=>[Xt("div",hb,[(kt(!0),dn(ji,null,Oo(K.value,ut=>(kt(),Ti(qe,{key:ut,value:ut},{default:Sn(()=>[ki(Do(ut),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):In("",!0),Q.value?(kt(),dn("div",fb,[pb,Xt("div",mb,[(kt(!0),dn(ji,null,Oo(ze.value,ut=>(kt(),Ti(ct,{key:ut.key,checked:T(ut.partKeys),"onUpdate:checked":gn=>x(ut.partKeys,gn)},{default:Sn(()=>[ki(Do(ut.label),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))])])):In("",!0)],64))])):In("",!0),Xt("div",{ref_key:"viewerContainer",ref:t,class:"viewer"},null,512)],64)}}}),Ab=yh(vb,[["__scopeId","data-v-ce701dff"]]);export{Ab as default};
