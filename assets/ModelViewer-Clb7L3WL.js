import{d as Ut,ao as xs,h as Ae,a2 as Zd,b as nt,al as Jd,z as uo,bK as Vs,w as Qt,A as vs,aR as Qd,I as tt,L as Dt,J as st,bz as eh,bw as th,Q as ho,R as Zr,bL as Wu,am as Rt,bi as nh,aU as fo,bv as sr,a7 as Mr,aa as vi,K as At,aS as cs,bj as Pa,r as us,bx as Rl,bM as Xu,V as _s,Y as wl,X as Ti,bN as ih,e as Ze,bA as ar,$ as ti,Z as Kr,af as La,a0 as ys,bO as rh,s as Gs,F as es,bP as oh,aW as sh,a6 as ah,ah as ju,aX as Ku,bQ as lh,bR as ch,bS as uh,an as dh,H as hh,bT as fh,b6 as Si,a_ as ph,c as mi,o as hn,a as fn,g as Hi,f as Ir,i as Nr,k as Mi,N as mh,u as sc,B as gh,l as ac,m as Hs,t as lc,n as xh,q as vh,x as _h}from"./index-DiNHny4g.js";import{V as Yu,_ as qu,b as yh,h as Jr,a as $u,c as Zu,S as bh,d as Th}from"./Checkbox-CUJoDh2_.js";import{i as Cl,a as Eh,N as Sh,B as Mh,V as Ah,b as cc,u as ts}from"./MediaCarousel-DPHN55oM.js";import{c as Rh,a as wh,b as Ch,u as uc}from"./use-locale-DKCqNkrW.js";import{s as Ph,a as Lh,r as Ih,_ as Nh}from"./RadioGroup-C3MBZHc2.js";import"./next-frame-once-C5Ksf8W7.js";import"./useAvif-DLFPZBI_.js";const jn="v-hidden",Oh=Rh("[v-hidden]",{display:"none!important"}),dc=Ut({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=nt(null),i=nt(null);function r(s){const{value:a}=t,{getCounter:c,getTail:l}=n;let u;if(c!==void 0?u=c():u=i.value,!a||!u)return;u.hasAttribute(jn)&&u.removeAttribute(jn);const{children:d}=a;if(s.showAllItemsBeforeCalculate)for(const b of d)b.hasAttribute(jn)&&b.removeAttribute(jn);const p=a.offsetWidth,m=[],g=e.tail?l==null?void 0:l():null;let v=g?g.offsetWidth:0,f=!1;const h=a.children.length-(e.tail?1:0);for(let b=0;b<h-1;++b){if(b<0)continue;const y=d[b];if(f){y.hasAttribute(jn)||y.setAttribute(jn,"");continue}else y.hasAttribute(jn)&&y.removeAttribute(jn);const R=y.offsetWidth;if(v+=R,m[b]=R,v>p){const{updateCounter:M}=n;for(let C=b;C>=0;--C){const U=h-1-C;M!==void 0?M(U):u.textContent=`${U}`;const E=u.offsetWidth;if(v-=m[C],v+E<=p||C===0){f=!0,b=C-1,g&&(b===-1?(g.style.maxWidth=`${p-E}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:S}=n;S&&S(U);break}}}}const{onUpdateOverflow:_}=n;f?_!==void 0&&_(!0):(_!==void 0&&_(!1),u.setAttribute(jn,""))}const o=Jd();return Oh.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wh,ssr:o}),uo(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return xs(()=>this.sync({showAllItemsBeforeCalculate:!1})),Ae("div",{class:"v-overflow",ref:"selfRef"},[Zd(n,"default"),n.counter?n.counter():Ae("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Pl(n,e){e&&(uo(()=>{const{value:t}=n;t&&Vs.registerHandler(t,e)}),Qt(n,(t,i)=>{i&&Vs.unregisterHandler(i)},{deep:!1}),vs(()=>{const{value:t}=n;t&&Vs.unregisterHandler(t)}))}function hc(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function Ws(n){const e=n.filter(t=>t!==void 0);if(e.length!==0)return e.length===1?e[0]:t=>{n.forEach(i=>{i&&i(t)})}}const Ju=Ut({name:"Checkmark",render(){return Ae("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Ae("g",{fill:"none"},Ae("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Dh=Ut({name:"ChevronDown",render(){return Ae("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ae("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Fh=Ut({name:"ChevronRight",render(){return Ae("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ae("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Uh=Qd("clear",()=>Ae("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Ae("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Ae("g",{fill:"currentColor","fill-rule":"nonzero"},Ae("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),kh=tt("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[Dt(">",[st("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[Dt("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),Dt("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),st("placeholder",`
 display: flex;
 `),st("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[eh({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Bh=Ut({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Wu("-base-clear",kh,Rt(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return Ae("div",{class:`${n}-base-clear`},Ae(th,null,{default:()=>{var e,t;return this.show?Ae("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ho(this.$slots.icon,()=>[Ae(Zr,{clsPrefix:n},{default:()=>Ae(Uh,null)})])):Ae("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),Qu=Ut({props:{onFocus:Function,onBlur:Function},setup(n){return()=>Ae("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}}),zh=tt("base-menu-mask",`
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
`,[nh()]),Vh=Ut({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(n){Wu("-base-menu-mask",zh,Rt(n,"clsPrefix"));const e=nt(null);let t=null;const i=nt(!1);return vs(()=>{t!==null&&window.clearTimeout(t)}),Object.assign({message:e,show:i},{showOnce(o,s=1500){t&&window.clearTimeout(t),i.value=!0,e.value=o,t=window.setTimeout(()=>{i.value=!1,e.value=null},s)}})},render(){return Ae(fo,{name:"fade-in-transition"},{default:()=>this.show?Ae("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}}),fc=Ut({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t,nodePropsRef:i}=Mr(Cl);return{labelField:t,nodeProps:i,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,nodeProps:i,tmNode:{rawNode:r}}=this,o=i==null?void 0:i(r),s=e?e(r,!1):sr(r[this.labelField],r,!1),a=Ae("div",Object.assign({},o,{class:[`${n}-base-select-group-header`,o==null?void 0:o.class]}),s);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}});function Gh(n,e){return Ae(fo,{name:"fade-in-scale-up-transition"},{default:()=>n?Ae(Zr,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>Ae(Ju)}):null})}const pc=Ut({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:p}=Mr(Cl),m=vi(()=>{const{value:h}=t;return h?n.tmNode.key===h.key:!1});function g(h){const{tmNode:_}=n;_.disabled||d(h,_)}function v(h){const{tmNode:_}=n;_.disabled||p(h,_)}function f(h){const{tmNode:_}=n,{value:b}=m;_.disabled||b||p(h,_)}return{multiple:i,isGrouped:vi(()=>{const{tmNode:h}=n,{parent:_}=h;return _&&_.rawNode.type==="group"}),showCheckmark:l,nodeProps:u,isPending:m,isSelected:vi(()=>{const{value:h}=e,{value:_}=i;if(h===null)return!1;const b=n.tmNode.rawNode[c.value];if(_){const{value:y}=r;return y.has(b)}else return h===b}),labelField:a,renderLabel:o,renderOption:s,handleMouseMove:f,handleMouseEnter:v,handleClick:g}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,nodeProps:s,renderOption:a,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,p=Gh(t,n),m=c?[c(e,t),o&&p]:[sr(e[this.labelField],e,t),o&&p],g=s==null?void 0:s(e),v=Ae("div",Object.assign({},g,{class:[`${n}-base-select-option`,e.class,g==null?void 0:g.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:[(g==null?void 0:g.style)||"",e.style||""],onClick:Ws([l,g==null?void 0:g.onClick]),onMouseenter:Ws([u,g==null?void 0:g.onMouseenter]),onMousemove:Ws([d,g==null?void 0:g.onMousemove])}),Ae("div",{class:`${n}-base-select-option__content`},m));return e.render?e.render({node:v,option:e,selected:t}):a?a({node:v,option:e,selected:t}):v}}),Hh=tt("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[tt("scrollbar",`
 max-height: var(--n-height);
 `),tt("virtual-list",`
 max-height: var(--n-height);
 `),tt("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[st("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),tt("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),tt("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),st("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),st("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),st("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),st("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),tt("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),tt("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[At("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Dt("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Dt("&:active",`
 color: var(--n-option-text-color-pressed);
 `),At("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),At("pending",[Dt("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),At("selected",`
 color: var(--n-option-text-color-active);
 `,[Dt("&::before",`
 background-color: var(--n-option-color-active);
 `),At("pending",[Dt("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),At("disabled",`
 cursor: not-allowed;
 `,[cs("selected",`
 color: var(--n-option-text-color-disabled);
 `),At("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),st("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Pa({enterScale:"0.5"})])])]),Wh=Ut({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ti.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=_s(n),i=wl("InternalSelectMenu",t,e),r=Ti("InternalSelectMenu","-internal-select-menu",Hh,ih,n,Rt(n,"clsPrefix")),o=nt(null),s=nt(null),a=nt(null),c=Ze(()=>n.treeMate.getFlattenedNodes()),l=Ze(()=>yh(c.value)),u=nt(null);function d(){const{treeMate:re}=n;let oe=null;const{value:we}=n;we===null?oe=re.getFirstAvailableNode():(n.multiple?oe=re.getNode((we||[])[(we||[]).length-1]):oe=re.getNode(we),(!oe||oe.disabled)&&(oe=re.getFirstAvailableNode())),O(oe||null)}function p(){const{value:re}=u;re&&!n.treeMate.getNode(re.key)&&(u.value=null)}let m;Qt(()=>n.show,re=>{re?m=Qt(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?d():p(),xs(H)):p()},{immediate:!0}):m==null||m()},{immediate:!0}),vs(()=>{m==null||m()});const g=Ze(()=>ar(r.value.self[ti("optionHeight",n.size)])),v=Ze(()=>Kr(r.value.self[ti("padding",n.size)])),f=Ze(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),h=Ze(()=>{const re=c.value;return re&&re.length===0});function _(re){const{onToggle:oe}=n;oe&&oe(re)}function b(re){const{onScroll:oe}=n;oe&&oe(re)}function y(re){var oe;(oe=a.value)===null||oe===void 0||oe.sync(),b(re)}function R(){var re;(re=a.value)===null||re===void 0||re.sync()}function M(){const{value:re}=u;return re||null}function C(re,oe){oe.disabled||O(oe,!1)}function U(re,oe){oe.disabled||_(oe)}function E(re){var oe;Jr(re,"action")||(oe=n.onKeyup)===null||oe===void 0||oe.call(n,re)}function S(re){var oe;Jr(re,"action")||(oe=n.onKeydown)===null||oe===void 0||oe.call(n,re)}function w(re){var oe;(oe=n.onMousedown)===null||oe===void 0||oe.call(n,re),!n.focusable&&re.preventDefault()}function P(){const{value:re}=u;re&&O(re.getNext({loop:!0}),!0)}function L(){const{value:re}=u;re&&O(re.getPrev({loop:!0}),!0)}function O(re,oe=!1){u.value=re,oe&&H()}function H(){var re,oe;const we=u.value;if(!we)return;const ie=l.value(we.key);ie!==null&&(n.virtualScroll?(re=s.value)===null||re===void 0||re.scrollTo({index:ie}):(oe=a.value)===null||oe===void 0||oe.scrollTo({index:ie,elSize:g.value}))}function W(re){var oe,we;!((oe=o.value)===null||oe===void 0)&&oe.contains(re.target)&&((we=n.onFocus)===null||we===void 0||we.call(n,re))}function J(re){var oe,we;!((oe=o.value)===null||oe===void 0)&&oe.contains(re.relatedTarget)||(we=n.onBlur)===null||we===void 0||we.call(n,re)}La(Cl,{handleOptionMouseEnter:C,handleOptionClick:U,valueSetRef:f,pendingTmNodeRef:u,nodePropsRef:Rt(n,"nodeProps"),showCheckmarkRef:Rt(n,"showCheckmark"),multipleRef:Rt(n,"multiple"),valueRef:Rt(n,"value"),renderLabelRef:Rt(n,"renderLabel"),renderOptionRef:Rt(n,"renderOption"),labelFieldRef:Rt(n,"labelField"),valueFieldRef:Rt(n,"valueField")}),La(Eh,o),uo(()=>{const{value:re}=a;re&&re.sync()});const j=Ze(()=>{const{size:re}=n,{common:{cubicBezierEaseInOut:oe},self:{height:we,borderRadius:ie,color:V,groupHeaderTextColor:Y,actionDividerColor:ce,optionTextColorPressed:de,optionTextColor:ye,optionTextColorDisabled:Pe,optionTextColorActive:Be,optionOpacityDisabled:Fe,optionCheckColor:qe,actionTextColor:X,optionColorPending:Ge,optionColorActive:ee,loadingColor:me,loadingSize:te,optionColorActivePending:Me,[ti("optionFontSize",re)]:Re,[ti("optionHeight",re)]:Ue,[ti("optionPadding",re)]:T}}=r.value;return{"--n-height":we,"--n-action-divider-color":ce,"--n-action-text-color":X,"--n-bezier":oe,"--n-border-radius":ie,"--n-color":V,"--n-option-font-size":Re,"--n-group-header-text-color":Y,"--n-option-check-color":qe,"--n-option-color-pending":Ge,"--n-option-color-active":ee,"--n-option-color-active-pending":Me,"--n-option-height":Ue,"--n-option-opacity-disabled":Fe,"--n-option-text-color":ye,"--n-option-text-color-active":Be,"--n-option-text-color-disabled":Pe,"--n-option-text-color-pressed":de,"--n-option-padding":T,"--n-option-padding-left":Kr(T,"left"),"--n-option-padding-right":Kr(T,"right"),"--n-loading-color":me,"--n-loading-size":te}}),{inlineThemeDisabled:ne}=n,he=ne?ys("internal-select-menu",Ze(()=>n.size[0]),j,n):void 0,Ee={selfRef:o,next:P,prev:L,getPendingTmNode:M};return Pl(o,n.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:e,rtlEnabled:i,virtualListRef:s,scrollbarRef:a,itemSize:g,padding:v,flattenedNodes:c,empty:h,virtualListContainer(){const{value:re}=s;return re==null?void 0:re.listElRef},virtualListContent(){const{value:re}=s;return re==null?void 0:re.itemsElRef},doScroll:b,handleFocusin:W,handleFocusout:J,handleKeyUp:E,handleKeyDown:S,handleMouseDown:w,handleVirtualListResize:R,handleVirtualListScroll:y,cssVars:ne?void 0:j,themeClass:he==null?void 0:he.themeClass,onRender:he==null?void 0:he.onRender},Ee)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),Ae("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},us(n.header,s=>s&&Ae("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},s)),this.loading?Ae("div",{class:`${t}-base-select-menu__loading`},Ae(Rl,{clsPrefix:t,strokeWidth:20})):this.empty?Ae("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},ho(n.empty,()=>[Ae(qu,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):Ae(Xu,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?Ae(Yu,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?Ae(fc,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:Ae(pc,{clsPrefix:t,key:s.key,tmNode:s})}):Ae("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?Ae(fc,{key:s.key,clsPrefix:t,tmNode:s}):Ae(pc,{clsPrefix:t,key:s.key,tmNode:s})))}),us(n.action,s=>s&&[Ae("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),Ae(Qu,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Xh=Ut({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return Ae(Rl,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?Ae(Bh,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>Ae(Zr,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>ho(e.default,()=>[Ae(Dh,null)])})}):null})}}}),jh=Dt([tt("base-selection",`
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
 `,[tt("base-loading",`
 color: var(--n-loading-color);
 `),tt("base-selection-tags","min-height: var(--n-height);"),st("border, state-border",`
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
 `),st("state-border",`
 z-index: 1;
 border-color: #0000;
 `),tt("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[st("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),tt("base-selection-overlay",`
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
 `,[st("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),tt("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[st("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),tt("base-selection-tags",`
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
 `),tt("base-selection-label",`
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
 `,[tt("base-selection-input",`
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
 `,[st("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),st("render-label",`
 color: var(--n-text-color);
 `)]),cs("disabled",[Dt("&:hover",[st("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),At("focus",[st("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),At("active",[st("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),tt("base-selection-label","background-color: var(--n-color-active);"),tt("base-selection-tags","background-color: var(--n-color-active);")])]),At("disabled","cursor: not-allowed;",[st("arrow",`
 color: var(--n-arrow-color-disabled);
 `),tt("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[tt("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),st("render-label",`
 color: var(--n-text-color-disabled);
 `)]),tt("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),tt("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),tt("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[st("input",`
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
 `),st("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>At(`${n}-status`,[st("state-border",`border: var(--n-border-${n});`),cs("disabled",[Dt("&:hover",[st("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),At("active",[st("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),tt("base-selection-label",`background-color: var(--n-color-active-${n});`),tt("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),At("focus",[st("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),tt("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),tt("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Dt("&:last-child","padding-right: 0;"),tt("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[st("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Kh=Ut({name:"InternalSelection",props:Object.assign(Object.assign({},Ti.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=_s(n),i=wl("InternalSelection",t,e),r=nt(null),o=nt(null),s=nt(null),a=nt(null),c=nt(null),l=nt(null),u=nt(null),d=nt(null),p=nt(null),m=nt(null),g=nt(!1),v=nt(!1),f=nt(!1),h=Ti("InternalSelection","-internal-selection",jh,oh,n,Rt(n,"clsPrefix")),_=Ze(()=>n.clearable&&!n.disabled&&(f.value||n.active)),b=Ze(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):sr(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),y=Ze(()=>{const x=n.selectedOption;if(x)return x[n.labelField]}),R=Ze(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function M(){var x;const{value:A}=r;if(A){const{value:D}=o;D&&(D.style.width=`${A.offsetWidth}px`,n.maxTagCount!=="responsive"&&((x=p.value)===null||x===void 0||x.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:x}=m;x&&(x.style.display="none")}function U(){const{value:x}=m;x&&(x.style.display="inline-block")}Qt(Rt(n,"active"),x=>{x||C()}),Qt(Rt(n,"pattern"),()=>{n.multiple&&xs(M)});function E(x){const{onFocus:A}=n;A&&A(x)}function S(x){const{onBlur:A}=n;A&&A(x)}function w(x){const{onDeleteOption:A}=n;A&&A(x)}function P(x){const{onClear:A}=n;A&&A(x)}function L(x){const{onPatternInput:A}=n;A&&A(x)}function O(x){var A;(!x.relatedTarget||!(!((A=s.value)===null||A===void 0)&&A.contains(x.relatedTarget)))&&E(x)}function H(x){var A;!((A=s.value)===null||A===void 0)&&A.contains(x.relatedTarget)||S(x)}function W(x){P(x)}function J(){f.value=!0}function j(){f.value=!1}function ne(x){!n.active||!n.filterable||x.target!==o.value&&x.preventDefault()}function he(x){w(x)}const Ee=nt(!1);function re(x){if(x.key==="Backspace"&&!Ee.value&&!n.pattern.length){const{selectedOptions:A}=n;A!=null&&A.length&&he(A[A.length-1])}}let oe=null;function we(x){const{value:A}=r;if(A){const D=x.target.value;A.textContent=D,M()}n.ignoreComposition&&Ee.value?oe=x:L(x)}function ie(){Ee.value=!0}function V(){Ee.value=!1,n.ignoreComposition&&L(oe),oe=null}function Y(x){var A;v.value=!0,(A=n.onPatternFocus)===null||A===void 0||A.call(n,x)}function ce(x){var A;v.value=!1,(A=n.onPatternBlur)===null||A===void 0||A.call(n,x)}function de(){var x,A;if(n.filterable)v.value=!1,(x=l.value)===null||x===void 0||x.blur(),(A=o.value)===null||A===void 0||A.blur();else if(n.multiple){const{value:D}=a;D==null||D.blur()}else{const{value:D}=c;D==null||D.blur()}}function ye(){var x,A,D;n.filterable?(v.value=!1,(x=l.value)===null||x===void 0||x.focus()):n.multiple?(A=a.value)===null||A===void 0||A.focus():(D=c.value)===null||D===void 0||D.focus()}function Pe(){const{value:x}=o;x&&(U(),x.focus())}function Be(){const{value:x}=o;x&&x.blur()}function Fe(x){const{value:A}=u;A&&A.setTextContent(`+${x}`)}function qe(){const{value:x}=d;return x}function X(){return o.value}let Ge=null;function ee(){Ge!==null&&window.clearTimeout(Ge)}function me(){n.active||(ee(),Ge=window.setTimeout(()=>{R.value&&(g.value=!0)},100))}function te(){ee()}function Me(x){x||(ee(),g.value=!1)}Qt(R,x=>{x||(g.value=!1)}),uo(()=>{sh(()=>{const x=l.value;x&&(n.disabled?x.removeAttribute("tabindex"):x.tabIndex=v.value?-1:0)})}),Pl(s,n.onResize);const{inlineThemeDisabled:Re}=n,Ue=Ze(()=>{const{size:x}=n,{common:{cubicBezierEaseInOut:A},self:{fontWeight:D,borderRadius:N,color:F,placeholderColor:$,textColor:q,paddingSingle:ae,paddingMultiple:G,caretColor:k,colorDisabled:K,textColorDisabled:se,placeholderColorDisabled:ge,colorActive:fe,boxShadowFocus:Te,boxShadowActive:B,boxShadowHover:_e,border:pe,borderFocus:be,borderHover:z,borderActive:Z,arrowColor:Se,arrowColorDisabled:Oe,loadingColor:Ie,colorActiveWarning:Ce,boxShadowFocusWarning:Le,boxShadowActiveWarning:Ne,boxShadowHoverWarning:De,borderWarning:We,borderFocusWarning:pt,borderHoverWarning:kt,borderActiveWarning:Xt,colorActiveError:kn,boxShadowFocusError:zi,boxShadowActiveError:ai,boxShadowHoverError:bo,borderError:Vi,borderFocusError:To,borderHoverError:Eo,borderActiveError:Os,clearColor:Ds,clearColorHover:Fs,clearColorPressed:Us,clearSize:ks,arrowSize:Bs,[ti("height",x)]:I,[ti("fontSize",x)]:le}}=h.value,xe=Kr(ae),ve=Kr(G);return{"--n-bezier":A,"--n-border":pe,"--n-border-active":Z,"--n-border-focus":be,"--n-border-hover":z,"--n-border-radius":N,"--n-box-shadow-active":B,"--n-box-shadow-focus":Te,"--n-box-shadow-hover":_e,"--n-caret-color":k,"--n-color":F,"--n-color-active":fe,"--n-color-disabled":K,"--n-font-size":le,"--n-height":I,"--n-padding-single-top":xe.top,"--n-padding-multiple-top":ve.top,"--n-padding-single-right":xe.right,"--n-padding-multiple-right":ve.right,"--n-padding-single-left":xe.left,"--n-padding-multiple-left":ve.left,"--n-padding-single-bottom":xe.bottom,"--n-padding-multiple-bottom":ve.bottom,"--n-placeholder-color":$,"--n-placeholder-color-disabled":ge,"--n-text-color":q,"--n-text-color-disabled":se,"--n-arrow-color":Se,"--n-arrow-color-disabled":Oe,"--n-loading-color":Ie,"--n-color-active-warning":Ce,"--n-box-shadow-focus-warning":Le,"--n-box-shadow-active-warning":Ne,"--n-box-shadow-hover-warning":De,"--n-border-warning":We,"--n-border-focus-warning":pt,"--n-border-hover-warning":kt,"--n-border-active-warning":Xt,"--n-color-active-error":kn,"--n-box-shadow-focus-error":zi,"--n-box-shadow-active-error":ai,"--n-box-shadow-hover-error":bo,"--n-border-error":Vi,"--n-border-focus-error":To,"--n-border-hover-error":Eo,"--n-border-active-error":Os,"--n-clear-size":ks,"--n-clear-color":Ds,"--n-clear-color-hover":Fs,"--n-clear-color-pressed":Us,"--n-arrow-size":Bs,"--n-font-weight":D}}),T=Re?ys("internal-selection",Ze(()=>n.size[0]),Ue,n):void 0;return{mergedTheme:h,mergedClearable:_,mergedClsPrefix:e,rtlEnabled:i,patternInputFocused:v,filterablePlaceholder:b,label:y,selected:R,showTagsPanel:g,isComposing:Ee,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:r,patternInputRef:o,selfRef:s,multipleElRef:a,singleElRef:c,patternInputWrapperRef:l,overflowRef:p,inputTagElRef:m,handleMouseDown:ne,handleFocusin:O,handleClear:W,handleMouseEnter:J,handleMouseLeave:j,handleDeleteOption:he,handlePatternKeyDown:re,handlePatternInputInput:we,handlePatternInputBlur:ce,handlePatternInputFocus:Y,handleMouseEnterCounter:me,handleMouseLeaveCounter:te,handleFocusout:H,handleCompositionEnd:V,handleCompositionStart:ie,onPopoverUpdateShow:Me,focus:ye,focusInput:Pe,blur:de,blurInput:Be,updateCounter:Fe,getCounter:qe,getTail:X,renderLabel:n.renderLabel,cssVars:Re?void 0:Ue,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:a,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l==null||l();const p=o==="responsive",m=typeof o=="number",g=p||m,v=Ae(rh,null,{default:()=>Ae(Xh,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var h,_;return(_=(h=this.$slots).arrow)===null||_===void 0?void 0:_.call(h)}})});let f;if(e){const{labelField:h}=this,_=L=>Ae("div",{class:`${a}-base-selection-tag-wrapper`,key:L.value},u?u({option:L,handleClose:()=>{this.handleDeleteOption(L)}}):Ae(Gs,{size:t,closable:!L.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(L)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(L,!0):sr(L[h],L,!0)})),b=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(_),y=r?Ae("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},Ae("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),Ae("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,R=p?()=>Ae("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},Ae(Gs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let M;if(m){const L=this.selectedOptions.length-o;L>0&&(M=Ae("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},Ae(Gs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${L}`})))}const C=p?r?Ae(dc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R,tail:()=>y}):Ae(dc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R}):m&&M?b().concat(M):b(),U=g?()=>Ae("div",{class:`${a}-base-selection-popover`},p?b():this.selectedOptions.map(_)):void 0,E=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,w=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?Ae("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},Ae("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,P=r?Ae("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},C,p?null:y,v):Ae("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},C,v);f=Ae(es,null,g?Ae(Sh,Object.assign({},E,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>P,default:U}):P,w)}else if(r){const h=this.pattern||this.isComposing,_=this.active?!h:!this.selected,b=this.active?!1:this.selected;f=Ae("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:hc(this.label)},Ae("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),b?Ae("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},Ae("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):sr(this.label,this.selectedOption,!0))):null,_?Ae("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},Ae("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else f=Ae("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?Ae("div",{class:`${a}-base-selection-input`,title:hc(this.label),key:"input"},Ae("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):sr(this.label,this.selectedOption,!0))):Ae("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},Ae("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),v);return Ae("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,n&&`${a}-base-selection--${n}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},f,s?Ae("div",{class:`${a}-base-selection__border`}):null,s?Ae("div",{class:`${a}-base-selection__state-border`}):null)}});function mc(n){return n.type==="group"}function Yh(n){return n.type==="ignored"}function qh(n,e){return{getIsGroup:mc,getIgnored:Yh,getKey(i){return mc(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}const po=ah("n-cascader"),gc=Ut({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(n){const{expandTriggerRef:e,remoteRef:t,multipleRef:i,mergedValueRef:r,checkedKeysRef:o,indeterminateKeysRef:s,hoverKeyPathRef:a,keyboardKeyRef:c,loadingKeySetRef:l,cascadeRef:u,mergedCheckStrategyRef:d,onLoadRef:p,mergedClsPrefixRef:m,mergedThemeRef:g,labelFieldRef:v,showCheckboxRef:f,renderPrefixRef:h,renderSuffixRef:_,updateHoverKey:b,updateKeyboardKey:y,addLoadingKey:R,deleteLoadingKey:M,closeMenu:C,doCheck:U,doUncheck:E,renderLabelRef:S}=Mr(po),w=Ze(()=>n.tmNode.key),P=Ze(()=>{const{value:de}=e,{value:ye}=t;return!ye&&de==="hover"}),L=Ze(()=>{if(P.value)return ie}),O=Ze(()=>{if(P.value)return V}),H=vi(()=>{const{value:de}=i;return de?o.value.includes(w.value):r.value===w.value}),W=vi(()=>i.value?s.value.includes(w.value):!1),J=vi(()=>a.value.includes(w.value)),j=vi(()=>{const{value:de}=c;return de===null?!1:de===w.value}),ne=vi(()=>t.value?l.value.has(w.value):!1),he=Ze(()=>n.tmNode.isLeaf),Ee=Ze(()=>n.tmNode.disabled),re=Ze(()=>n.tmNode.rawNode[v.value]),oe=Ze(()=>n.tmNode.shallowLoaded);function we(de){if(Ee.value)return;const{value:ye}=t,{value:Pe}=l,{value:Be}=p,{value:Fe}=w,{value:qe}=he,{value:X}=oe;Jr(de,"checkbox")||(ye&&!X&&!Pe.has(Fe)&&Be&&(R(Fe),Be(n.tmNode.rawNode).then(()=>{M(Fe)}).catch(()=>{M(Fe)})),b(Fe),y(Fe)),qe&&ce()}function ie(){if(!P.value||Ee.value)return;const{value:de}=w;b(de),y(de)}function V(){P.value&&ie()}function Y(){const{value:de}=he;de||ce()}function ce(){const{value:de}=i,{value:ye}=w;de?W.value||H.value?E(ye):U(ye):(U(ye),C(!0))}return{checkStrategy:d,multiple:i,cascade:u,checked:H,indeterminate:W,hoverPending:J,keyboardPending:j,isLoading:ne,showCheckbox:f,isLeaf:he,disabled:Ee,label:re,mergedClsPrefix:m,mergedTheme:g,handleClick:we,handleCheckboxUpdateValue:Y,mergedHandleMouseEnter:L,mergedHandleMouseMove:O,renderLabel:S,renderPrefix:h,renderSuffix:_}},render(){const{mergedClsPrefix:n,showCheckbox:e,renderLabel:t,renderPrefix:i,renderSuffix:r}=this;let o=null;if(e||i){const c=this.showCheckbox?Ae($u,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue}):null;o=Ae("div",{class:`${n}-cascader-option__prefix`},i?i({option:this.tmNode.rawNode,checked:this.checked,node:c}):c)}let s=null;const a=Ae("div",{class:`${n}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?Ae(fo,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?Ae(Zr,{clsPrefix:n,class:`${n}-cascader-option-icon ${n}-cascader-option-icon--checkmark`},{default:()=>Ae(Ju,null)}):null}):null:Ae(Rl,{clsPrefix:n,scale:.85,strokeWidth:24,show:this.isLoading,class:`${n}-cascader-option-icon`},{default:()=>Ae(Zr,{clsPrefix:n,key:"arrow",class:`${n}-cascader-option-icon ${n}-cascader-option-icon--arrow`},{default:()=>Ae(Fh,null)})}));return s=Ae("div",{class:`${n}-cascader-option__suffix`},r?r({option:this.tmNode.rawNode,checked:this.checked,node:a}):a),Ae("div",{class:[`${n}-cascader-option`,this.keyboardPending||this.hoverPending&&`${n}-cascader-option--pending`,this.disabled&&`${n}-cascader-option--disabled`,this.showCheckbox&&`${n}-cascader-option--show-prefix`],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},o,Ae("span",{class:`${n}-cascader-option__label`},t?t(this.tmNode.rawNode,this.checked):this.label),s)}}),$h=Ut({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:n,mergedClsPrefixRef:e,mergedThemeRef:t,optionHeightRef:i}=Mr(po),r=nt(null),o=nt(null),s={scroll(a,c){var l,u;n.value?(l=o.value)===null||l===void 0||l.scrollTo({index:a}):(u=r.value)===null||u===void 0||u.scrollTo({index:a,elSize:c})}};return Object.assign({mergedClsPrefix:e,mergedTheme:t,scrollbarInstRef:r,vlInstRef:o,virtualScroll:n,itemSize:Ze(()=>ar(i.value)),handleVlScroll:()=>{var a;(a=r.value)===null||a===void 0||a.sync()},getVlContainer:()=>{var a;return(a=o.value)===null||a===void 0?void 0:a.listElRef},getVlContent:()=>{var a;return(a=o.value)===null||a===void 0?void 0:a.itemsElRef}},s)},render(){const{mergedClsPrefix:n,mergedTheme:e,virtualScroll:t}=this;return Ae("div",{class:[t&&`${n}-cascader-submenu--virtual`,`${n}-cascader-submenu`]},Ae(Xu,{ref:"scrollbarInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:t?this.getVlContainer:void 0,content:t?this.getVlContent:void 0},{default:()=>t?Ae(Yu,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:i})=>Ae(gc,{key:i.key,tmNode:i})}):this.tmNodes.map(i=>Ae(gc,{key:i.key,tmNode:i}))}))}}),Zh=Ut({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(n){const{localeRef:e,isMountedRef:t,mergedClsPrefixRef:i,syncCascaderMenuPosition:r,handleCascaderMenuClickOutside:o,mergedThemeRef:s,getColumnStyleRef:a}=Mr(po),c=[],l=nt(null),u=nt(null);function d(){r()}Pl(u,d);function p(h){var _;const{value:{loadingRequiredMessage:b}}=e;(_=l.value)===null||_===void 0||_.showOnce(b(h))}function m(h){o(h)}function g(h){const{value:_}=u;_&&(_.contains(h.relatedTarget)||n.onFocus(h))}function v(h){const{value:_}=u;_&&(_.contains(h.relatedTarget)||n.onBlur(h))}return Object.assign({isMounted:t,mergedClsPrefix:i,selfElRef:u,submenuInstRefs:c,maskInstRef:l,mergedTheme:s,getColumnStyle:a,handleFocusin:g,handleFocusout:v,handleClickOutside:m},{scroll(h,_,b){const y=c[h];y&&y.scroll(_,b)},showErrorMessage:p})},render(){const{submenuInstRefs:n,mergedClsPrefix:e,mergedTheme:t}=this;return Ae(fo,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?ju(Ae("div",{tabindex:"0",ref:"selfElRef",class:`${e}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?Ae("div",{class:`${e}-cascader-submenu-wrapper`},this.menuModel.map((i,r)=>{var o;return Ae($h,{style:(o=this.getColumnStyle)===null||o===void 0?void 0:o.call(this,{level:r}),ref:s=>{s&&(n[r]=s)},key:r,tmNodes:i,depth:r+1})}),Ae(Vh,{clsPrefix:e,ref:"maskInstRef"})):Ae("div",{class:`${e}-cascader-menu__empty`},ho(this.$slots.empty,()=>[Ae(qu,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty})])),us(this.$slots.action,i=>i&&Ae("div",{class:`${e}-cascader-menu-action`,"data-action":!0},i)),Ae(Qu,{onFocus:this.onTabout})),[[Ku,this.handleClickOutside,void 0,{capture:!0}]]):null})}});function So(n){return n?n.map(e=>e.rawNode):null}function Jh(n,e,t,i){const r=[],o=[];function s(a){for(const c of a){if(c.disabled)continue;const{rawNode:l}=c;o.push(l),(c.isLeaf||!e)&&r.push({label:Ia(c,i,t),value:c.key,rawNode:c.rawNode,path:Array.from(o)}),!c.isLeaf&&c.children&&s(c.children),o.pop()}}return s(n),r}function Ia(n,e,t){const i=[];for(;n;)i.push(n.rawNode[t]),n=n.parent;return i.reverse().join(e)}const Qh=Ut({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(n){const{isMountedRef:e,mergedValueRef:t,mergedClsPrefixRef:i,mergedThemeRef:r,mergedCheckStrategyRef:o,slots:s,syncSelectMenuPosition:a,closeMenu:c,handleSelectMenuClickOutside:l,doUncheck:u,doCheck:d,clearPattern:p}=Mr(po),m=nt(null),g=Ze(()=>Jh(n.tmNodes,o.value==="child",n.labelField,n.separator)),v=Ze(()=>{const{filter:S}=n;if(S)return S;const{labelField:w}=n;return(P,L,O)=>O.some(H=>H[w]&&~H[w].toLowerCase().indexOf(P.toLowerCase()))}),f=Ze(()=>{const{pattern:S}=n,{value:w}=v;return(S?g.value.filter(P=>w(S,P.rawNode,P.path)):g.value).map(P=>({value:P.value,label:P.label}))}),h=Ze(()=>Zu(f.value,qh("value","children")));function _(){a()}function b(S){y(S)}function y(S){if(n.multiple){const{value:w}=t;Array.isArray(w)?w.includes(S.key)?u(S.key):d(S.key):w===null&&d(S.key),p()}else d(S.key),c(!0)}function R(){var S;(S=m.value)===null||S===void 0||S.prev()}function M(){var S;(S=m.value)===null||S===void 0||S.next()}function C(){var S;if(m){const w=(S=m.value)===null||S===void 0?void 0:S.getPendingTmNode();return w&&y(w),!0}return!1}function U(S){l(S)}return Object.assign({isMounted:e,mergedTheme:r,mergedClsPrefix:i,menuInstRef:m,selectTreeMate:h,handleResize:_,handleToggle:b,handleClickOutside:U,cascaderSlots:s},{prev:R,next:M,enter:C})},render(){const{mergedClsPrefix:n,isMounted:e,mergedTheme:t,cascaderSlots:i}=this;return Ae(fo,{name:"fade-in-scale-up-transition",appear:e},{default:()=>this.show?ju(Ae(Wh,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:n,class:`${n}-cascader-menu`,autoPending:!0,themeOverrides:t.peerOverrides.InternalSelectMenu,theme:t.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>ho(i["not-found"],()=>[])}),[[Ku,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),ef=Dt([tt("cascader-menu",`
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
 `,[Pa({transformOrigin:"inherit",duration:"0.2s"}),st("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),tt("scrollbar",`
 width: 100%;
 `),tt("base-menu-mask",`
 background-color: var(--n-menu-mask-color);
 `),tt("base-loading",`
 color: var(--n-loading-color);
 `),tt("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),tt("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[At("virtual",`
 width: var(--n-column-width);
 `),tt("scrollbar-content",`
 position: relative;
 `),Dt("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),Dt("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),Dt("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),tt("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),tt("cascader-option",`
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
 `,[At("show-prefix",`
 padding-left: 0;
 `),st("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),st("prefix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),st("suffix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),tt("cascader-option-icon-placeholder",`
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `,[tt("cascader-option-icon",[At("checkmark",`
 color: var(--n-option-check-mark-color);
 `,[Pa({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),At("arrow",`
 color: var(--n-option-arrow-color);
 `)])]),At("selected",`
 color: var(--n-option-text-color-active);
 `),At("active",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `),At("pending",`
 background-color: var(--n-option-color-hover);
 `),Dt("&:hover",`
 background-color: var(--n-option-color-hover);
 `),At("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[tt("cascader-option-icon",[At("arrow",`
 color: var(--n-option-text-color-disabled);
 `)])])])]),tt("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),tf=Object.assign(Object.assign({},Ti.props),{allowCheckingNotLoaded:Boolean,to:ts.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,getColumnStyle:Function,renderPrefix:Function,renderSuffix:Function,onChange:[Function,Array]}),nf=Ut({name:"Cascader",props:tf,slots:Object,setup(n,{slots:e}){const{mergedBorderedRef:t,mergedClsPrefixRef:i,namespaceRef:r,inlineThemeDisabled:o}=_s(n),s=Ti("Cascader","-cascader",ef,lh,n,i),{localeRef:a}=Ch("Cascader"),c=nt(n.defaultValue),l=Ze(()=>n.value),u=uc(l,c),d=Ze(()=>n.leafOnly?"child":n.checkStrategy),p=nt(""),m=ch(n),{mergedSizeRef:g,mergedDisabledRef:v,mergedStatusRef:f}=m,h=nt(null),_=nt(null),b=nt(null),y=nt(null),R=nt(null),M=nt(new Set),C=nt(null),U=nt(null),E=ts(n),S=nt(!1),w=z=>{M.value.add(z)},P=z=>{M.value.delete(z)},L=Ze(()=>{const{valueField:z,childrenField:Z,disabledField:Se}=n;return Zu(n.options,{getDisabled(Oe){return Oe[Se]},getKey(Oe){return Oe[z]},getChildren(Oe){return Oe[Z]}})}),O=Ze(()=>{const{cascade:z,multiple:Z}=n;return Z&&Array.isArray(u.value)?L.value.getCheckedKeys(u.value,{cascade:z,allowNotLoaded:n.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),H=Ze(()=>O.value.checkedKeys),W=Ze(()=>O.value.indeterminateKeys),J=Ze(()=>{const{treeNodePath:z,treeNode:Z}=L.value.getPath(R.value);let Se;return Z===null?Se=[L.value.treeNodes]:(Se=z.map(Oe=>Oe.siblings),!Z.isLeaf&&!M.value.has(Z.key)&&Z.children&&Se.push(Z.children)),Se}),j=Ze(()=>{const{keyPath:z}=L.value.getPath(R.value);return z}),ne=Ze(()=>s.value.self.optionHeight);uh(n.options)&&Qt(n.options,(z,Z)=>{z!==Z&&(R.value=null,y.value=null)});const he=nt(!1);function Ee(z){const{onUpdateShow:Z,"onUpdate:show":Se}=n;Z&&Si(Z,z),Se&&Si(Se,z),he.value=z}function re(z,Z,Se){const{onUpdateValue:Oe,"onUpdate:value":Ie,onChange:Ce}=n,{nTriggerFormInput:Le,nTriggerFormChange:Ne}=m;Oe&&Si(Oe,z,Z,Se),Ie&&Si(Ie,z,Z,Se),Ce&&Si(Ce,z,Z,Se),c.value=z,Le(),Ne()}function oe(z){y.value=z}function we(z){R.value=z}function ie(z){const{value:{getNode:Z}}=L;return z.map(Se=>{var Oe;return((Oe=Z(Se))===null||Oe===void 0?void 0:Oe.rawNode)||null})}function V(z){var Z;const{cascade:Se,multiple:Oe,filterable:Ie}=n,{value:{check:Ce,getNode:Le,getPath:Ne}}=L;if(Oe)try{const{checkedKeys:De}=Ce(z,O.value.checkedKeys,{cascade:Se,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});re(De,ie(De),De.map(We=>{var pt;return So((pt=Ne(We))===null||pt===void 0?void 0:pt.treeNodePath)})),Ie&&Ge(),y.value=z,R.value=z}catch(De){if(De instanceof bh){if(h.value){const We=Le(z);We!==null&&h.value.showErrorMessage(We.rawNode[n.labelField])}}else throw De}else if(d.value==="child"){const De=Le(z);if(De!=null&&De.isLeaf)re(z,De.rawNode,So(Ne(z).treeNodePath));else return!1}else{const De=Le(z);re(z,(De==null?void 0:De.rawNode)||null,So((Z=Ne(z))===null||Z===void 0?void 0:Z.treeNodePath))}return!0}function Y(z){const{cascade:Z,multiple:Se}=n;if(Se){const{value:{uncheck:Oe,getNode:Ie,getPath:Ce}}=L,{checkedKeys:Le}=Oe(z,O.value.checkedKeys,{cascade:Z,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});re(Le,Le.map(Ne=>{var De;return((De=Ie(Ne))===null||De===void 0?void 0:De.rawNode)||null}),Le.map(Ne=>{var De;return So((De=Ce(Ne))===null||De===void 0?void 0:De.treeNodePath)})),y.value=z,R.value=z}}const ce=Ze(()=>{if(n.multiple){const{showPath:z,separator:Z,labelField:Se,cascade:Oe}=n,{getCheckedKeys:Ie,getNode:Ce}=L.value;return Ie(H.value,{cascade:Oe,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded}).checkedKeys.map(Ne=>{const De=Ce(Ne);return De===null?{label:String(Ne),value:Ne}:{label:z?Ia(De,Z,Se):De.rawNode[Se],value:De.key}})}else return[]}),de=Ze(()=>{const{multiple:z,showPath:Z,separator:Se,labelField:Oe}=n,{value:Ie}=u;if(!z&&!Array.isArray(Ie)){const{getNode:Ce}=L.value;if(Ie===null)return null;const Le=Ce(Ie);return Le===null?{label:String(Ie),value:Ie}:{label:Z?Ia(Le,Se,Oe):Le.rawNode[Oe],value:Le.key}}else return null}),ye=Rt(n,"show"),Pe=uc(ye,he),Be=Ze(()=>{const{placeholder:z}=n;return z!==void 0?z:a.value.placeholder}),Fe=Ze(()=>!!(n.filterable&&p.value));Qt(Pe,z=>{if(!z||n.multiple)return;const{value:Z}=u;!Array.isArray(Z)&&Z!==null?(y.value=Z,R.value=Z,xs(()=>{var Se;if(!Pe.value)return;const{value:Oe}=R;if(u.value!==null){const Ie=L.value.getNode(Oe);Ie&&((Se=h.value)===null||Se===void 0||Se.scroll(Ie.level,Ie.index,ar(ne.value)))}})):(y.value=null,R.value=null)},{immediate:!0});function qe(z){const{onBlur:Z}=n,{nTriggerFormBlur:Se}=m;Z&&Si(Z,z),Se()}function X(z){const{onFocus:Z}=n,{nTriggerFormFocus:Se}=m;Z&&Si(Z,z),Se()}function Ge(){var z;(z=b.value)===null||z===void 0||z.focusInput()}function ee(){var z;(z=b.value)===null||z===void 0||z.focus()}function me(){v.value||(p.value="",Ee(!0),n.filterable&&Ge())}function te(z=!1){z&&ee(),Ee(!1),p.value=""}function Me(z){var Z;Fe.value||Pe.value&&(!((Z=b.value)===null||Z===void 0)&&Z.$el.contains(ph(z))||te())}function Re(z){Fe.value&&Me(z)}function Ue(){n.clearFilterAfterSelect&&(p.value="")}function T(z){var Z,Se,Oe;const{value:Ie}=y,{value:Ce}=L;switch(z){case"prev":if(Ie!==null){const Le=Ce.getPrev(Ie,{loop:!0});Le!==null&&(oe(Le.key),(Z=h.value)===null||Z===void 0||Z.scroll(Le.level,Le.index,ar(ne.value)))}break;case"next":if(Ie===null){const Le=Ce.getFirstAvailableNode();Le!==null&&(oe(Le.key),(Se=h.value)===null||Se===void 0||Se.scroll(Le.level,Le.index,ar(ne.value)))}else{const Le=Ce.getNext(Ie,{loop:!0});Le!==null&&(oe(Le.key),(Oe=h.value)===null||Oe===void 0||Oe.scroll(Le.level,Le.index,ar(ne.value)))}break;case"child":if(Ie!==null){const Le=Ce.getNode(Ie);if(Le!==null)if(Le.shallowLoaded){const Ne=Ce.getChild(Ie);Ne!==null&&(we(Ie),oe(Ne.key))}else{const{value:Ne}=M;if(!Ne.has(Ie)){w(Ie),we(Ie);const{onLoad:De}=n;De&&De(Le.rawNode).then(()=>{P(Ie)}).catch(()=>{P(Ie)})}}}break;case"parent":if(Ie!==null){const Le=Ce.getParent(Ie);if(Le!==null){oe(Le.key);const Ne=Le.getParent();we(Ne===null?null:Ne.key)}}break}}function x(z){var Z,Se;switch(z.key){case" ":case"ArrowDown":case"ArrowUp":if(n.filterable&&Pe.value)break;z.preventDefault();break}if(!Jr(z,"action"))switch(z.key){case" ":if(n.filterable)return;case"Enter":if(!Pe.value)me();else{const{value:Oe}=Fe,{value:Ie}=y;if(Oe)_.value&&_.value.enter()&&Ue();else if(Ie!==null)if(H.value.includes(Ie)||W.value.includes(Ie))Y(Ie);else{const Ce=V(Ie);!n.multiple&&Ce&&te(!0)}}break;case"ArrowUp":z.preventDefault(),Pe.value&&(Fe.value?(Z=_.value)===null||Z===void 0||Z.prev():T("prev"));break;case"ArrowDown":z.preventDefault(),Pe.value?Fe.value?(Se=_.value)===null||Se===void 0||Se.next():T("next"):me();break;case"ArrowLeft":z.preventDefault(),Pe.value&&!Fe.value&&T("parent");break;case"ArrowRight":z.preventDefault(),Pe.value&&!Fe.value&&T("child");break;case"Escape":Pe.value&&(fh(z),te(!0))}}function A(z){x(z)}function D(z){z.stopPropagation(),n.multiple?re([],[],[]):re(null,null,null)}function N(z){var Z;!((Z=h.value)===null||Z===void 0)&&Z.$el.contains(z.relatedTarget)||(S.value=!0,X(z))}function F(z){var Z;!((Z=h.value)===null||Z===void 0)&&Z.$el.contains(z.relatedTarget)||(S.value=!1,qe(z),te())}function $(z){var Z;!((Z=b.value)===null||Z===void 0)&&Z.$el.contains(z.relatedTarget)||(S.value=!0,X(z))}function q(z){var Z;!((Z=b.value)===null||Z===void 0)&&Z.$el.contains(z.relatedTarget)||(S.value=!1,qe(z))}function ae(z){Jr(z,"action")||n.multiple&&n.filter&&(z.preventDefault(),Ge())}function G(){te(!0)}function k(){n.filterable?me():Pe.value?te(!0):me()}function K(z){p.value=z.target.value}function se(z){const{multiple:Z}=n,{value:Se}=u;Z&&Array.isArray(Se)&&z.value!==void 0?Y(z.value):re(null,null,null)}function ge(){var z;(z=C.value)===null||z===void 0||z.syncPosition()}function fe(){var z;(z=U.value)===null||z===void 0||z.syncPosition()}function Te(){Pe.value&&(Fe.value?ge():fe())}const B=Ze(()=>!!(n.multiple&&n.cascade||d.value!=="child"));La(po,{slots:e,mergedClsPrefixRef:i,mergedThemeRef:s,mergedValueRef:u,checkedKeysRef:H,indeterminateKeysRef:W,hoverKeyPathRef:j,mergedCheckStrategyRef:d,showCheckboxRef:B,cascadeRef:Rt(n,"cascade"),multipleRef:Rt(n,"multiple"),keyboardKeyRef:y,hoverKeyRef:R,remoteRef:Rt(n,"remote"),loadingKeySetRef:M,expandTriggerRef:Rt(n,"expandTrigger"),isMountedRef:dh(),onLoadRef:Rt(n,"onLoad"),virtualScrollRef:Rt(n,"virtualScroll"),optionHeightRef:ne,localeRef:a,labelFieldRef:Rt(n,"labelField"),renderLabelRef:Rt(n,"renderLabel"),getColumnStyleRef:Rt(n,"getColumnStyle"),renderPrefixRef:Rt(n,"renderPrefix"),renderSuffixRef:Rt(n,"renderSuffix"),syncCascaderMenuPosition:fe,syncSelectMenuPosition:ge,updateKeyboardKey:oe,updateHoverKey:we,addLoadingKey:w,deleteLoadingKey:P,doCheck:V,doUncheck:Y,closeMenu:te,handleSelectMenuClickOutside:Re,handleCascaderMenuClickOutside:Me,clearPattern:Ue});const _e={focus:()=>{var z;(z=b.value)===null||z===void 0||z.focus()},blur:()=>{var z;(z=b.value)===null||z===void 0||z.blur()},getCheckedData:()=>{if(B.value){const z=H.value;return{keys:z,options:ie(z)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(B.value){const z=W.value;return{keys:z,options:ie(z)}}return{keys:[],options:[]}}},pe=Ze(()=>{const{self:{optionArrowColor:z,optionTextColor:Z,optionTextColorActive:Se,optionTextColorDisabled:Oe,optionCheckMarkColor:Ie,menuColor:Ce,menuBoxShadow:Le,menuDividerColor:Ne,menuBorderRadius:De,menuHeight:We,optionColorHover:pt,optionHeight:kt,optionFontSize:Xt,loadingColor:kn,columnWidth:zi},common:{cubicBezierEaseInOut:ai}}=s.value;return{"--n-bezier":ai,"--n-menu-border-radius":De,"--n-menu-box-shadow":Le,"--n-menu-height":We,"--n-column-width":zi,"--n-menu-color":Ce,"--n-menu-divider-color":Ne,"--n-option-height":kt,"--n-option-font-size":Xt,"--n-option-text-color":Z,"--n-option-text-color-disabled":Oe,"--n-option-text-color-active":Se,"--n-option-color-hover":pt,"--n-option-check-mark-color":Ie,"--n-option-arrow-color":z,"--n-menu-mask-color":hh(Ce,{alpha:.75}),"--n-loading-color":kn}}),be=o?ys("cascader",void 0,pe,n):void 0;return Object.assign(Object.assign({},_e),{handleTriggerResize:Te,mergedStatus:f,selectMenuFollowerRef:C,cascaderMenuFollowerRef:U,triggerInstRef:b,selectMenuInstRef:_,cascaderMenuInstRef:h,mergedBordered:t,mergedClsPrefix:i,namespace:r,mergedValue:u,mergedShow:Pe,showSelectMenu:Fe,pattern:p,treeMate:L,mergedSize:g,mergedDisabled:v,localizedPlaceholder:Be,selectedOption:de,selectedOptions:ce,adjustedTo:E,menuModel:J,handleMenuTabout:G,handleMenuFocus:$,handleMenuBlur:q,handleMenuKeydown:A,handleMenuMousedown:ae,handleTriggerFocus:N,handleTriggerBlur:F,handleTriggerClick:k,handleClear:D,handleDeleteOption:se,handlePatternInput:K,handleKeydown:x,focused:S,optionHeight:ne,mergedTheme:s,cssVars:o?void 0:pe,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){const{mergedClsPrefix:n}=this;return Ae("div",{class:`${n}-cascader`},Ae(Mh,null,{default:()=>[Ae(Ah,null,{default:()=>Ae(Kh,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:n,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var e,t;return(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)}})}),Ae(cc,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===ts.tdkey,to:this.adjustedTo},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{menuProps:t}=this;return Ae(Zh,Object.assign({},t,{ref:"cascaderMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,t==null?void 0:t.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var i,r;return(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)},empty:()=>{var i,r;return(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)}})}}),Ae(cc,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ts.tdkey},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{filterMenuProps:t}=this;return Ae(Qh,Object.assign({},t,{ref:"selectMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,t==null?void 0:t.style]}))}})]}))}}),rf=tt("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[At("checked",[st("dot",`
 background-color: var(--n-color-active);
 `)]),st("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),tt("radio-input",`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),st("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[Dt("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),At("checked",{boxShadow:"var(--n-box-shadow-active)"},[Dt("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),st("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),cs("disabled",`
 cursor: pointer;
 `,[Dt("&:hover",[st("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),At("focus",[Dt("&:not(:active)",[st("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),At("disabled",`
 cursor: not-allowed;
 `,[st("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[Dt("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),At("checked",`
 opacity: 1;
 `)]),st("label",{color:"var(--n-text-color-disabled)"}),tt("radio-input",`
 cursor: not-allowed;
 `)])]),of=Object.assign(Object.assign({},Ti.props),Ih),sf=Ut({name:"Radio",props:of,setup(n){const e=Ph(n),t=Ti("Radio","-radio",rf,Lh,n,e.mergedClsPrefix),i=Ze(()=>{const{mergedSize:{value:l}}=e,{common:{cubicBezierEaseInOut:u},self:{boxShadow:d,boxShadowActive:p,boxShadowDisabled:m,boxShadowFocus:g,boxShadowHover:v,color:f,colorDisabled:h,colorActive:_,textColor:b,textColorDisabled:y,dotColorActive:R,dotColorDisabled:M,labelPadding:C,labelLineHeight:U,labelFontWeight:E,[ti("fontSize",l)]:S,[ti("radioSize",l)]:w}}=t.value;return{"--n-bezier":u,"--n-label-line-height":U,"--n-label-font-weight":E,"--n-box-shadow":d,"--n-box-shadow-active":p,"--n-box-shadow-disabled":m,"--n-box-shadow-focus":g,"--n-box-shadow-hover":v,"--n-color":f,"--n-color-active":_,"--n-color-disabled":h,"--n-dot-color-active":R,"--n-dot-color-disabled":M,"--n-font-size":S,"--n-radio-size":w,"--n-text-color":b,"--n-text-color-disabled":y,"--n-label-padding":C}}),{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:s}=_s(n),a=wl("Radio",s,o),c=r?ys("radio",Ze(()=>e.mergedSize.value[0]),i,n):void 0;return Object.assign(e,{rtlEnabled:a,cssVars:r?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{$slots:n,mergedClsPrefix:e,onRender:t,label:i}=this;return t==null||t(),Ae("label",{class:[`${e}-radio`,this.themeClass,this.rtlEnabled&&`${e}-radio--rtl`,this.mergedDisabled&&`${e}-radio--disabled`,this.renderSafeChecked&&`${e}-radio--checked`,this.focus&&`${e}-radio--focus`],style:this.cssVars},Ae("div",{class:`${e}-radio__dot-wrapper`}," ",Ae("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]}),Ae("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),us(n.default,r=>!r&&!i?null:Ae("div",{ref:"labelRef",class:`${e}-radio__label`},r||i)))}}),af={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},lf=Ut({name:"ArrowMove20Regular",render:function(e,t){return hn(),mi("svg",af,t[0]||(t[0]=[fn("g",{fill:"none"},[fn("path",{d:"M7.146 4.354a.5.5 0 0 0 .708 0L9.5 2.707V6.5a.5.5 0 0 0 1 0V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm-2.792 3.5a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L2.707 10.5H6.5a.5.5 0 0 0 0-1H2.707l1.647-1.646zm11.292 0a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H13.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646zm-7.792 7.792a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 17.293V13.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647z",fill:"currentColor"})],-1)]))}}),cf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},uf=Ut({name:"ArrowMoveInward20Regular",render:function(e,t){return hn(),mi("svg",cf,t[0]||(t[0]=[fn("g",{fill:"none"},[fn("path",{d:"M7.146 16.354a.5.5 0 0 0 .708 0L9.5 14.707V18.5a.5.5 0 0 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm9.208-8.5a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L14.707 10.5H18.5a.5.5 0 0 0 0-1h-3.793l1.647-1.646zm-12.708 0a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L5.293 10.5H1.5a.5.5 0 0 1 0-1h3.793L3.646 7.854zm4.208-4.208a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 5.293V1.5a.5.5 0 0 0-1 0v3.793L7.854 3.646z",fill:"currentColor"})],-1)]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="181",cr={ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,xc=1,hf=2,ed=1,ff=2,ei=3,Gn=0,Yt=1,yn=2,ri=0,ur=1,vc=2,_c=3,yc=4,pf=5,Ni=100,mf=101,gf=102,xf=103,vf=104,_f=200,yf=201,bf=202,Tf=203,Na=204,Oa=205,Ef=206,Sf=207,Mf=208,Af=209,Rf=210,wf=211,Cf=212,Pf=213,Lf=214,Da=0,Fa=1,Ua=2,mr=3,ka=4,Ba=5,za=6,Va=7,Il=0,If=1,Nf=2,bi=0,Of=1,Df=2,Ff=3,Uf=4,kf=5,Bf=6,zf=7,bc="attached",Vf="detached",td=300,gr=301,xr=302,Ga=303,Ha=304,bs=306,In=1e3,an=1001,ds=1002,nn=1003,nd=1004,Wr=1005,tn=1006,ns=1007,ni=1008,Hn=1009,id=1010,rd=1011,Qr=1012,Nl=1013,Di=1014,Nn=1015,Ar=1016,Ol=1017,Dl=1018,eo=1020,od=35902,sd=35899,ad=1021,ld=1022,mn=1023,to=1026,no=1027,Fl=1028,Ul=1029,kl=1030,Bl=1031,zl=1033,is=33776,rs=33777,os=33778,ss=33779,Wa=35840,Xa=35841,ja=35842,Ka=35843,Ya=36196,qa=37492,$a=37496,Za=37808,Ja=37809,Qa=37810,el=37811,tl=37812,nl=37813,il=37814,rl=37815,ol=37816,sl=37817,al=37818,ll=37819,cl=37820,ul=37821,dl=36492,hl=36494,fl=36495,pl=36283,ml=36284,gl=36285,xl=36286,io=2300,ro=2301,Xs=2302,Tc=2400,Ec=2401,Sc=2402,Gf=2500,Hf=0,cd=1,vl=2,Wf=3200,Xf=3201,Vl=0,jf=1,_i="",vt="srgb",qt="srgb-linear",hs="linear",Tt="srgb",Wi=7680,Mc=519,Kf=512,Yf=513,qf=514,ud=515,$f=516,Zf=517,Jf=518,Qf=519,_l=35044,Ac="300 es",Vn=2e3,fs=2001;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){const n=oo("canvas");return n.style.display="block",n}const Rc={};function ps(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function dt(...n){const e="THREE."+n.shift();console.error(e,...n)}function so(...n){const e=n.join(" ");e in Rc||(Rc[e]=!0,Ke(...n))}function tp(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const Yr=Math.PI/180,vr=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Gl(n,e){return(n%e+e)%e}function np(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ip(n,e,t){return n!==e?(t-n)/(e-n):0}function qr(n,e,t){return(1-t)*n+t*e}function rp(n,e,t,i){return qr(n,e,1-Math.exp(-t*i))}function op(n,e=1){return e-Math.abs(Gl(n,e*2)-e)}function sp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ap(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cp(n,e){return n+Math.random()*(e-n)}function up(n){return n*(.5-Math.random())}function dp(n){n!==void 0&&(wc=n);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(n){return n*Yr}function fp(n){return n*vr}function pp(n){return(n&n-1)===0&&n!==0}function mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xp(n,e,t,i,r){const o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),p=s((e-i)/2),m=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*u,a*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:Yr,RAD2DEG:vr,generateUUID:On,clamp:lt,euclideanModulo:Gl,mapLinear:np,inverseLerp:ip,lerp:qr,damp:rp,pingpong:op,smoothstep:sp,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:up,seededRandom:dp,degToRad:hp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:xp,normalize:_t,denormalize:Pn};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],p=o[s+0],m=o[s+1],g=o[s+2],v=o[s+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a>=1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==p||l!==m||u!==g){let f=c*p+l*m+u*g+d*v;f<0&&(p=-p,m=-m,g=-g,v=-v,f=-f);let h=1-a;if(f<.9995){const _=Math.acos(f),b=Math.sin(_);h=Math.sin(h*_)/b,a=Math.sin(a*_)/b,c=c*h+p*a,l=l*h+m*a,u=u*h+g*a,d=d*h+v*a}else{c=c*h+p*a,l=l*h+m*a,u=u*h+g*a,d=d*h+v*a;const _=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=_,l*=_,u*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],p=o[s+1],m=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*m-l*p,e[t+1]=c*g+u*p+l*d-a*m,e[t+2]=l*g+u*m+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),p=c(i/2),m=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"YZX":this._x=p*u*d+l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d-p*m*g;break;case"XZY":this._x=p*u*d-l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d+p*m*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new Q,Cc=new Sn;class rt{constructor(e,t,i,r,o,s,a,c,l){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],m=i[5],g=i[8],v=r[0],f=r[3],h=r[6],_=r[1],b=r[4],y=r[7],R=r[2],M=r[5],C=r[8];return o[0]=s*v+a*_+c*R,o[3]=s*f+a*b+c*M,o[6]=s*h+a*y+c*C,o[1]=l*v+u*_+d*R,o[4]=l*f+u*b+d*M,o[7]=l*h+u*y+d*C,o[2]=p*v+m*_+g*R,o[5]=p*f+m*b+g*M,o[8]=p*h+m*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,p=a*c-u*o,m=l*o-s*c,g=t*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=p*v,e[4]=(u*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new rt,Pc=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){const n={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Tt&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qt]:{primaries:e,whitePoint:i,transfer:hs,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}const ut=vp();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class _p{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=oo("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=oi(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yp=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ys(r[s].image)):o.push(Ys(r[s]))}else o=Ys(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let bp=0;const qs=new Q;class Wt extends ki{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=an,r=an,o=tn,s=ni,a=mn,c=Hn,l=Wt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=On(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qs).x}get height(){return this.source.getSize(qs).y}get depth(){return this.source.getSize(qs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=td;Wt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],m=c[5],g=c[9],v=c[2],f=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(m+1)/2,R=(h+1)/2,M=(u+p)/4,C=(d+v)/4,U=(g+f)/4;return b>y&&b>R?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=M/i,o=C/i):y>R?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=M/r,o=U/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=C/o,r=U/o),this.set(i,r,o,t),this}let _=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-v)/_,this.z=(p-u)/_,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new Wt(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Tp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hd extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,An):An.fromBufferAttribute(o,s),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ao.subVectors(this.max,Or),ji.subVectors(e.a,Or),Ki.subVectors(e.b,Or),Yi.subVectors(e.c,Or),li.subVectors(Ki,ji),ci.subVectors(Yi,Ki),Ai.subVectors(ji,Yi);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ai.z,Ai.y,li.z,0,-li.x,ci.z,0,-ci.x,Ai.z,0,-Ai.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ai.y,Ai.x,0];return!$s(t,ji,Ki,Yi,Ao)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,ji,Ki,Yi,Ao))?!1:(Ro.crossVectors(li,ci),t=[Ro.x,Ro.y,Ro.z],$s(t,ji,Ki,Yi,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],An=new Q,Mo=new En,ji=new Q,Ki=new Q,Yi=new Q,li=new Q,ci=new Q,Ai=new Q,Or=new Q,Ao=new Q,Ro=new Q,Ri=new Q;function $s(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Ri.fromArray(n,o);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Sp=new En,Dr=new Q,Zs=new Q;class Wn{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sp.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Zs)),this.expandByPoint(Dr.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new Q,Js=new Q,wo=new Q,ui=new Q,Qs=new Q,Co=new Q,ea=new Q;class mo{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Js.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Js);const o=e.distanceTo(t)*.5,s=-this.direction.dot(wo),a=ui.dot(this.direction),c=-ui.dot(wo),l=ui.lengthSq(),u=Math.abs(1-s*s);let d,p,m,g;if(u>0)if(d=s*c-a,p=s*a-c,g=o*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,m=d*(d+s*p+2*a)+p*(s*d+p+2*c)+l}else p=o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-s*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),m=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-o,-c),o),m=p*(p+2*c)+l):(d=Math.max(0,-(s*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),m=-d*d+p*(p+2*c)+l);else p=s>0?-o:o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Js).addScaledVector(wo,p),m}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(o=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,o){Qs.subVectors(t,e),Co.subVectors(i,e),ea.crossVectors(Qs,Co);let s=this.direction.dot(ea),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ui.subVectors(this.origin,e);const c=a*this.direction.dot(Co.crossVectors(ui,Co));if(c<0)return null;const l=a*this.direction.dot(Qs.cross(ui));if(l<0||c+l>s)return null;const u=-a*ui.dot(ea);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f)}set(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),o=1/qi.setFromMatrixColumn(e,1).length(),s=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const p=s*u,m=s*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=g+m*l,t[10]=s*c}else if(e.order==="YXZ"){const p=c*u,m=c*d,g=l*u,v=l*d;t[0]=p+v*a,t[4]=g*a-m,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=s*c}else if(e.order==="ZXY"){const p=c*u,m=c*d,g=l*u,v=l*d;t[0]=p-v*a,t[4]=-s*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=v-p*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const p=s*u,m=s*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+v,t[1]=c*d,t[5]=v*l+p,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const p=s*c,m=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-p*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=s*c,m=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+v,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,Ap)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),di.crossVectors(i,un),di.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),di.crossVectors(i,un)),di.normalize(),Po.crossVectors(un,di),r[0]=di.x,r[4]=Po.x,r[8]=un.x,r[1]=di.y,r[5]=Po.y,r[9]=un.y,r[2]=di.z,r[6]=Po.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],_=i[3],b=i[7],y=i[11],R=i[15],M=r[0],C=r[4],U=r[8],E=r[12],S=r[1],w=r[5],P=r[9],L=r[13],O=r[2],H=r[6],W=r[10],J=r[14],j=r[3],ne=r[7],he=r[11],Ee=r[15];return o[0]=s*M+a*S+c*O+l*j,o[4]=s*C+a*w+c*H+l*ne,o[8]=s*U+a*P+c*W+l*he,o[12]=s*E+a*L+c*J+l*Ee,o[1]=u*M+d*S+p*O+m*j,o[5]=u*C+d*w+p*H+m*ne,o[9]=u*U+d*P+p*W+m*he,o[13]=u*E+d*L+p*J+m*Ee,o[2]=g*M+v*S+f*O+h*j,o[6]=g*C+v*w+f*H+h*ne,o[10]=g*U+v*P+f*W+h*he,o[14]=g*E+v*L+f*J+h*Ee,o[3]=_*M+b*S+y*O+R*j,o[7]=_*C+b*w+y*H+R*ne,o[11]=_*U+b*P+y*W+R*he,o[15]=_*E+b*L+y*J+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+o*c*d-r*l*d-o*a*p+i*l*p+r*a*m-i*c*m)+v*(+t*c*m-t*l*p+o*s*p-r*s*m+r*l*u-o*c*u)+f*(+t*l*d-t*a*m-o*s*d+i*s*m+o*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*p+r*s*d-i*s*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],_=d*f*l-v*p*l+v*c*m-a*f*m-d*c*h+a*p*h,b=g*p*l-u*f*l-g*c*m+s*f*m+u*c*h-s*p*h,y=u*v*l-g*d*l+g*a*m-s*v*m-u*a*h+s*d*h,R=g*d*c-u*v*c-g*a*p+s*v*p+u*a*f-s*d*f,M=t*_+i*b+r*y+o*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(v*p*o-d*f*o-v*r*m+i*f*m+d*r*h-i*p*h)*C,e[2]=(a*f*o-v*c*o+v*r*l-i*f*l-a*r*h+i*c*h)*C,e[3]=(d*c*o-a*p*o-d*r*l+i*p*l+a*r*m-i*c*m)*C,e[4]=b*C,e[5]=(u*f*o-g*p*o+g*r*m-t*f*m-u*r*h+t*p*h)*C,e[6]=(g*c*o-s*f*o-g*r*l+t*f*l+s*r*h-t*c*h)*C,e[7]=(s*p*o-u*c*o+u*r*l-t*p*l-s*r*m+t*c*m)*C,e[8]=y*C,e[9]=(g*d*o-u*v*o-g*i*m+t*v*m+u*i*h-t*d*h)*C,e[10]=(s*v*o-g*a*o+g*i*l-t*v*l-s*i*h+t*a*h)*C,e[11]=(u*a*o-s*d*o-u*i*l+t*d*l+s*i*m-t*a*m)*C,e[12]=R*C,e[13]=(u*v*r-g*d*r+g*i*p-t*v*p-u*i*f+t*d*f)*C,e[14]=(g*a*r-s*v*r-g*i*c+t*v*c+s*i*f-t*a*f)*C,e[15]=(s*d*r-u*a*r+u*i*c-t*d*c-s*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,p=o*l,m=o*u,g=o*d,v=s*u,f=s*d,h=a*d,_=c*l,b=c*u,y=c*d,R=i.x,M=i.y,C=i.z;return r[0]=(1-(v+h))*R,r[1]=(m+y)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(m-y)*M,r[5]=(1-(p+h))*M,r[6]=(f+_)*M,r[7]=0,r[8]=(g+b)*C,r[9]=(f-_)*C,r[10]=(1-(p+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=qi.set(r[0],r[1],r[2]).length();const s=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const l=1/o,u=1/s,d=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=Vn,c=!1){const l=this.elements,u=2*o/(t-e),d=2*o/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(c)g=o/(s-o),v=s*o/(s-o);else if(a===Vn)g=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===fs)g=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=Vn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,v;if(c)g=1/(s-o),v=s/(s-o);else if(a===Vn)g=-2/(s-o),v=-(s+o)/(s-o);else if(a===fs)g=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new Q,Rn=new at,Mp=new Q(0,0,0),Ap=new Q(1,1,1),di=new Q,Po=new Q,un=new Q,Ic=new at,Nc=new Sn;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rp=0;const Oc=new Q,$i=new Sn,qn=new at,Lo=new Q,Fr=new Q,wp=new Q,Cp=new Sn,Dc=new Q(1,0,0),Fc=new Q(0,1,0),Uc=new Q(0,0,1),kc={type:"added"},Pp={type:"removed"},Zi={type:"childadded",child:null},ta={type:"childremoved",child:null};class St extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new Q,t=new Fn,i=new Sn,r=new Q(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new rt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lo.copy(e):Lo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Fr,Lo,this.up):qn.lookAt(Lo,Fr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(qn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new Q(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new Q,$n=new Q,na=new Q,Zn=new Q,Ji=new Q,Qi=new Q,Bc=new Q,ia=new Q,ra=new Q,oa=new Q,sa=new gt,aa=new gt,la=new gt;class Ln{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){wn.subVectors(r,t),$n.subVectors(i,t),na.subVectors(e,t);const s=wn.dot(wn),a=wn.dot($n),c=wn.dot(na),l=$n.dot($n),u=$n.dot(na),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,m=(l*c-a*u)*p,g=(s*u-a*c)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Zn.x),c.addScaledVector(s,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return sa.setScalar(0),aa.setScalar(0),la.setScalar(0),sa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,i),la.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(sa,o.x),s.addScaledVector(aa,o.y),s.addScaledVector(la,o.z),s}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),$n.subVectors(e,t),wn.cross($n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;Ji.subVectors(r,i),Qi.subVectors(o,i),ia.subVectors(e,i);const c=Ji.dot(ia),l=Qi.dot(ia);if(c<=0&&l<=0)return t.copy(i);ra.subVectors(e,r);const u=Ji.dot(ra),d=Qi.dot(ra);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Ji,s);oa.subVectors(e,o);const m=Ji.dot(oa),g=Qi.dot(oa);if(g>=0&&m<=g)return t.copy(o);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Qi,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Bc.subVectors(o,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Bc,a);const h=1/(f+v+p);return s=v*h,a=p*h,t.copy(i).addScaledVector(Ji,s).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Gl(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=ca(s,o,e+1/3),this.g=ca(s,o,e),this.b=ca(s,o,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=vt){function i(o){o!==void 0&&parseFloat(o)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return ut.workingToColorSpace(Kt.copy(this),e),Math.round(lt(Kt.r*255,0,255))*65536+Math.round(lt(Kt.g*255,0,255))*256+Math.round(lt(Kt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,o=Kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=vt){ut.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Io);const i=qr(hi.h,Io.h,t),r=qr(hi.s,Io.s,t),o=qr(hi.l,Io.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ye;Ye.NAMES=pd;let Lp=0;class Dn extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ur,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bn extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new Q,No=new je;let Ip=0;class Ft{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_l,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}}class md extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gd extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Np=0;const vn=new at,ua=new St,er=new Q,dn=new En,Ur=new En,Ht=new Q;class Ot extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?gd:md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new rt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(dn.min,Ur.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,Ur.max),dn.expandByPoint(Ht)):(dn.expandByPoint(Ur.min),dn.expandByPoint(Ur.max))}dn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ht.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),Ht.add(er)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new Q,c[U]=new Q;const l=new Q,u=new Q,d=new Q,p=new je,m=new je,g=new je,v=new Q,f=new Q;function h(U,E,S){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),p.fromBufferAttribute(o,U),m.fromBufferAttribute(o,E),g.fromBufferAttribute(o,S),u.sub(l),d.sub(l),m.sub(p),g.sub(p);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[U].add(v),a[E].add(v),a[S].add(v),c[U].add(f),c[E].add(f),c[S].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,E=_.length;U<E;++U){const S=_[U],w=S.start,P=S.count;for(let L=w,O=w+P;L<O;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new Q,y=new Q,R=new Q,M=new Q;function C(U){R.fromBufferAttribute(r,U),M.copy(R);const E=a[U];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(M,E);const w=y.dot(c[U])<0?-1:1;s.setXYZW(U,b.x,b.y,b.z,w)}for(let U=0,E=_.length;U<E;++U){const S=_[U],w=S.start,P=S.count;for(let L=w,O=w+P;L<O;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new Q,o=new Q,s=new Q,a=new Q,c=new Q,l=new Q,u=new Q,d=new Q;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,f),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,f),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let h=0;h<u;h++)p[g++]=l[m++]}return new Ft(p,u,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new at,wi=new mo,Oo=new Wn,Vc=new Q,Do=new Q,Fo=new Q,Uo=new Q,da=new Q,ko=new Q,Gc=new Q,Bo=new Q;class Nt extends St{constructor(e=new Ot,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ko.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(da.fromBufferAttribute(d,e),s?ko.addScaledVector(da,u):ko.addScaledVector(da.sub(t),u))}t.add(ko)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(o),wi.copy(e.ray).recast(e.near),!(Oo.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Oo,Vc)===null||wi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(zc.copy(o).invert(),wi.copy(e.ray).applyMatrix4(zc),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,p=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=s[f.materialIndex],_=Math.max(f.start,m.start),b=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=_,R=b;y<R;y+=3){const M=a.getX(y),C=a.getX(y+1),U=a.getX(y+2);r=zo(this,h,e,i,l,u,d,M,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const _=a.getX(f),b=a.getX(f+1),y=a.getX(f+2);r=zo(this,s,e,i,l,u,d,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=s[f.materialIndex],_=Math.max(f.start,m.start),b=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=_,R=b;y<R;y+=3){const M=y,C=y+1,U=y+2;r=zo(this,h,e,i,l,u,d,M,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const _=f,b=f+1,y=f+2;r=zo(this,s,e,i,l,u,d,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Op(n,e,t,i,r,o,s,a){let c;if(e.side===Yt?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Gn,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Bo);return l<t.near||l>t.far?null:{distance:l,point:Bo.clone(),object:n}}function zo(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,Do),n.getVertexPosition(c,Fo),n.getVertexPosition(l,Uo);const u=Op(n,e,t,i,Do,Fo,Uo,Gc);if(u){const d=new Q;Ln.getBarycoord(Gc,Do,Fo,Uo,d),r&&(u.uv=Ln.getInterpolatedAttribute(r,a,c,l,d,new je)),o&&(u.uv1=Ln.getInterpolatedAttribute(o,a,c,l,d,new je)),s&&(u.normal=Ln.getInterpolatedAttribute(s,a,c,l,d,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new Q,materialIndex:0};Ln.getNormal(Do,Fo,Uo,p.normal),u.face=p,u.barycoord=d}return u}class Rr extends Ot{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function g(v,f,h,_,b,y,R,M,C,U,E){const S=y/C,w=R/U,P=y/2,L=R/2,O=M/2,H=C+1,W=U+1;let J=0,j=0;const ne=new Q;for(let he=0;he<W;he++){const Ee=he*w-L;for(let re=0;re<H;re++){const oe=re*S-P;ne[v]=oe*_,ne[f]=Ee*b,ne[h]=O,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[f]=0,ne[h]=M>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(re/C),d.push(1-he/U),J+=1}}for(let he=0;he<U;he++)for(let Ee=0;Ee<C;Ee++){const re=p+Ee+H*he,oe=p+Ee+H*(he+1),we=p+(Ee+1)+H*(he+1),ie=p+(Ee+1)+H*he;c.push(re,oe,ie),c.push(oe,we,ie),j+=6}a.addGroup(m,j,E),m+=j,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}function Dp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Fp={clone:_r,merge:Jt};var Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new Q,Hc=new je,Wc=new je;class en extends vd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Wc),t.subVectors(Wc,Hc)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Bp extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(tr,nr,e,t);r.layers=this.layers,this.add(r);const o=new en(tr,nr,e,t);o.layers=this.layers,this.add(o);const s=new en(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new en(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new en(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new en(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _d extends Wt{constructor(e=[],t=gr,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zp extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _d(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ri});o.uniforms.tEquirect.value=t;const s=new Nt(r,o),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=tn),new Bp(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}class Tn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(l,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yd extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new Q;class Ts{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xc=new Q,jc=new gt,Kc=new gt,Gp=new Q,Yc=new at,Vo=new Q,fa=new Wn,qc=new at,pa=new mo;class Hp extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bc,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Vo),this.boundingSphere.expandByPoint(Vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(r),e.ray.intersectsSphere(fa)!==!1&&(qc.copy(r).invert(),pa.copy(e.ray).applyMatrix4(qc),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;jc.fromBufferAttribute(r.attributes.skinIndex,e),Kc.fromBufferAttribute(r.attributes.skinWeight,e),Xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const s=Kc.getComponent(o);if(s!==0){const a=jc.getComponent(o);Yc.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Gp.copy(Xc).applyMatrix4(Yc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Td extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class go extends Wt{constructor(e=null,t=1,i=1,r,o,s,a,c,l=nn,u=nn,d,p){super(null,s,a,c,l,u,r,o,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new at,Wp=new at;class Wl{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,s=e.length;o<s;o++){const a=e[o]?e[o].matrixWorld:Wp;$c.multiplyMatrices(a,t[o]),$c.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new go(t,e,e,mn,Nn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const o=e.bones[i];let s=t[o];s===void 0&&(Ke("Skeleton: No bone found with UUID:",o),s=new Td),this.bones.push(s),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const s=t[r];e.bones.push(s.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class yl extends Ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new at,Zc=new at,Go=[],Jc=new En,Xp=new at,kr=new Nt,Br=new Wn;class jp extends Nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Jc.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Br.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,s=e*o+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,ir),Zc.multiplyMatrices(i,ir),kr.matrixWorld=Zc,kr.raycast(e,Go);for(let s=0,a=Go.length;s<a;s++){const c=Go[s];c.instanceId=o,c.object=this,t.push(c)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(r*this.count),r,this.count,Fl,Nn));const o=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,c=r*e;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ma=new Q,Kp=new Q,Yp=new rt;class xi{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ma.subVectors(i,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yp.getNormalMatrix(e),r=this.coplanarPoint(ma).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Wn,qp=new je(.5,.5),Ho=new Q;class Xl{constructor(e=new xi,t=new xi,i=new xi,r=new xi,o=new xi,s=new xi){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],p=o[6],m=o[7],g=o[8],v=o[9],f=o[10],h=o[11],_=o[12],b=o[13],y=o[14],R=o[15];if(r[0].setComponents(l-s,m-u,h-g,R-_).normalize(),r[1].setComponents(l+s,m+u,h+g,R+_).normalize(),r[2].setComponents(l+a,m+d,h+v,R+b).normalize(),r[3].setComponents(l-a,m-d,h-v,R-b).normalize(),i)r[4].setComponents(c,p,f,y).normalize(),r[5].setComponents(l-c,m-p,h-f,R-y).normalize();else if(r[4].setComponents(l-c,m-p,h-f,R-y).normalize(),t===Vn)r[5].setComponents(l+c,m+p,h+f,R+y).normalize();else if(t===fs)r[5].setComponents(c,p,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=qp.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ms=new Q,gs=new Q,Qc=new at,zr=new mo,Wo=new Wn,ga=new Q,eu=new Q;class Kl extends St{constructor(e=new Ot,t=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)ms.fromBufferAttribute(t,r-1),gs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ms.distanceTo(gs);e.setAttribute("lineDistance",new ct(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=o,e.ray.intersectsSphere(Wo)===!1)return;Qc.copy(r).invert(),zr.copy(e.ray).applyMatrix4(Qc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=m,f=g-1;v<f;v+=l){const h=u.getX(v),_=u.getX(v+1),b=Xo(this,e,zr,c,h,_,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(m),h=Xo(this,e,zr,c,v,f,g-1);h&&t.push(h)}}else{const m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let v=m,f=g-1;v<f;v+=l){const h=Xo(this,e,zr,c,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Xo(this,e,zr,c,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Xo(n,e,t,i,r,o,s){const a=n.geometry.attributes.position;if(ms.fromBufferAttribute(a,r),gs.fromBufferAttribute(a,o),t.distanceSqToSegment(ms,gs,ga,eu)>i)return;ga.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ga);if(!(l<e.near||l>e.far))return{distance:l,point:eu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const tu=new Q,nu=new Q;class Ed extends Kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)tu.fromBufferAttribute(t,r),nu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tu.distanceTo(nu);e.setAttribute("lineDistance",new ct(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $p extends Kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yl extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iu=new at,bl=new mo,jo=new Wn,Ko=new Q;class Sd extends St{constructor(e=new Ot,t=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),jo.radius+=o,e.ray.intersectsSphere(jo)===!1)return;iu.copy(r).invert(),bl.copy(e.ray).applyMatrix4(iu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const p=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let g=p,v=m;g<v;g++){const f=l.getX(g);Ko.fromBufferAttribute(d,f),ru(Ko,f,c,r,e,t,this)}}else{const p=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=p,v=m;g<v;g++)Ko.fromBufferAttribute(d,g),ru(Ko,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ru(n,e,t,i,r,o,s){const a=bl.distanceSqToPoint(n);if(a<t){const c=new Q;bl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Md extends Wt{constructor(e,t,i=Di,r,o,s,a=nn,c=nn,l,u=to,d=1){if(u!==to&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ad extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Es extends Ot{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],m=[];let g=0;const v=[],f=i/2;let h=0;_(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(m,2));function _(){const y=new Q,R=new Q;let M=0;const C=(t-e)/i;for(let U=0;U<=o;U++){const E=[],S=U/o,w=S*(t-e)+e;for(let P=0;P<=r;P++){const L=P/r,O=L*c+a,H=Math.sin(O),W=Math.cos(O);R.x=w*H,R.y=-S*i+f,R.z=w*W,d.push(R.x,R.y,R.z),y.set(H,C,W).normalize(),p.push(y.x,y.y,y.z),m.push(L,1-S),E.push(g++)}v.push(E)}for(let U=0;U<r;U++)for(let E=0;E<o;E++){const S=v[E][U],w=v[E+1][U],P=v[E+1][U+1],L=v[E][U+1];(e>0||E!==0)&&(u.push(S,w,L),M+=3),(t>0||E!==o-1)&&(u.push(w,P,L),M+=3)}l.addGroup(h,M,0),h+=M}function b(y){const R=g,M=new je,C=new Q;let U=0;const E=y===!0?e:t,S=y===!0?1:-1;for(let P=1;P<=r;P++)d.push(0,f*S,0),p.push(0,S,0),m.push(.5,.5),g++;const w=g;for(let P=0;P<=r;P++){const O=P/r*c+a,H=Math.cos(O),W=Math.sin(O);C.x=E*W,C.y=f*S,C.z=E*H,d.push(C.x,C.y,C.z),p.push(0,S,0),M.x=H*.5+.5,M.y=W*.5*S+.5,m.push(M.x,M.y),g++}for(let P=0;P<r;P++){const L=R+P,O=w+P;y===!0?u.push(O,O+1,L):u.push(O+1,O,L),U+=3}l.addGroup(h,U,y===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ql extends Es{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Zp(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=Rd(n,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let a,c,l;if(i&&(o=nm(n,e,o,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let p=t;p<r;p+=t){const m=n[p],g=n[p+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return ao(o,s,t,a,c,l,0),s}function Rd(n,e,t,i,r){let o;if(r===fm(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=ou(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=ou(s/i|0,n[s],n[s+1],o);return o&&yr(o,o.next)&&(co(o),o=o.next),o}function Ui(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(co(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ao(n,e,t,i,r,o,s){if(!n)return;!s&&o&&am(n,i,r,o);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(o?Qp(n,i,r,o):Jp(n)){e.push(c.i,n.i,l.i),co(n),n=l.next,a=l.next;continue}if(n=l,n===a){s?s===1?(n=em(Ui(n),e),ao(n,e,t,i,r,o,2)):s===2&&tm(n,e,t,i,r,o):ao(Ui(n),e,t,i,r,o,1);break}}}function Jp(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const r=e.x,o=t.x,s=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,o,s),d=Math.min(a,c,l),p=Math.max(r,o,s),m=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=m&&Xr(r,a,o,c,s,l,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qp(n,e,t,i){const r=n.prev,o=n,s=n.next;if(Pt(r,o,s)>=0)return!1;const a=r.x,c=o.x,l=s.x,u=r.y,d=o.y,p=s.y,m=Math.min(a,c,l),g=Math.min(u,d,p),v=Math.max(a,c,l),f=Math.max(u,d,p),h=Tl(m,g,e,t,i),_=Tl(v,f,e,t,i);let b=n.prevZ,y=n.nextZ;for(;b&&b.z>=h&&y&&y.z<=_;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=f&&b!==r&&b!==s&&Xr(a,u,c,d,l,p,b.x,b.y)&&Pt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==r&&y!==s&&Xr(a,u,c,d,l,p,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=h;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=f&&b!==r&&b!==s&&Xr(a,u,c,d,l,p,b.x,b.y)&&Pt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==r&&y!==s&&Xr(a,u,c,d,l,p,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function em(n,e){let t=n;do{const i=t.prev,r=t.next.next;!yr(i,r)&&Cd(i,t,t.next,r)&&lo(i,r)&&lo(r,i)&&(e.push(i.i,t.i,r.i),co(t),co(t.next),t=n=r),t=t.next}while(t!==n);return Ui(t)}function tm(n,e,t,i,r,o){let s=n;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&um(s,a)){let c=Pd(s,a);s=Ui(s,s.next),c=Ui(c,c.next),ao(s,e,t,i,r,o,0),ao(c,e,t,i,r,o,0);return}a=a.next}s=s.next}while(s!==n)}function nm(n,e,t,i){const r=[];for(let o=0,s=e.length;o<s;o++){const a=e[o]*i,c=o<s-1?e[o+1]*i:n.length,l=Rd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(cm(l))}r.sort(im);for(let o=0;o<r.length;o++)t=rm(r[o],t);return t}function im(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function rm(n,e){const t=om(n,e);if(!t)return e;const i=Pd(t,n);return Ui(i,i.next),Ui(t,t.next)}function om(n,e){let t=e;const i=n.x,r=n.y;let o=-1/0,s;if(yr(n,t))return t;do{if(yr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===i))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&wd(r<l?i:o,r,c,l,r<l?o:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);lo(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&sm(s,t)))&&(s=t,u=d)}t=t.next}while(t!==a);return s}function sm(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function am(n,e,t,i){let r=n;do r.z===0&&(r.z=Tl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,lm(r)}function lm(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let s=i,a=0;for(let l=0;l<t&&(a++,s=s.nextZ,!!s);l++);let c=t;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,a--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Tl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function cm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wd(n,e,t,i,r,o,s,a){return(r-s)*(e-a)>=(n-s)*(o-a)&&(n-s)*(i-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(i-a)}function Xr(n,e,t,i,r,o,s,a){return!(n===s&&e===a)&&wd(n,e,t,i,r,o,s,a)}function um(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dm(n,e)&&(lo(n,e)&&lo(e,n)&&hm(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||yr(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yr(n,e){return n.x===e.x&&n.y===e.y}function Cd(n,e,t,i){const r=qo(Pt(n,e,t)),o=qo(Pt(n,e,i)),s=qo(Pt(t,i,n)),a=qo(Pt(t,i,e));return!!(r!==o&&s!==a||r===0&&Yo(n,t,e)||o===0&&Yo(n,i,e)||s===0&&Yo(t,n,i)||a===0&&Yo(t,e,i))}function Yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function dm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function lo(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function hm(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pd(n,e){const t=El(n.i,n.x,n.y),i=El(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function ou(n,e,t,i){const r=El(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function El(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}class pm{static triangulate(e,t,i=2){return Zp(e,t,i)}}class $l{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return $l.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];su(e),au(i,e);let s=e.length;t.forEach(su);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,au(i,t[c]);const a=pm.triangulate(i,r);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function su(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function au(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ss extends Ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const _=h*p-s;for(let b=0;b<l;b++){const y=b*d-o;g.push(y,-_,0),v.push(0,0,1),f.push(b/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<a;_++){const b=_+l*h,y=_+l*(h+1),R=_+1+l*(h+1),M=_+1+l*h;m.push(b,y,M),m.push(y,R,M)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class hr extends Ot{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const u=[],d=new Q,p=new Q,m=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){const _=[],b=h/i;let y=0;h===0&&s===0?y=.5/t:h===i&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const M=R/t;d.x=-e*Math.cos(r+M*o)*Math.sin(s+b*a),d.y=e*Math.cos(s+b*a),d.z=e*Math.sin(r+M*o)*Math.sin(s+b*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),f.push(M+y,1-b),_.push(l++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const b=u[h][_+1],y=u[h][_],R=u[h+1][_],M=u[h+1][_+1];(h!==0||s>0)&&m.push(b,y,M),(h!==i-1||c<Math.PI)&&m.push(y,R,M)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ms extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends Ms{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mm extends Dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gm extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function $o(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function vm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _m(n){function e(r,o){return n[r]-n[o]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function lu(n,e,t){const i=n.length,r=new n.constructor(i);for(let o=0,s=0;s!==i;++o){const a=t[o]*e;for(let c=0;c!==e;++c)r[s++]=n[a+c]}return r}function Ld(n,e,t,i){let r=1,o=n[0];for(;o!==void 0&&o[i]===void 0;)o=n[r++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(e.push(o.time),t.push(...s)),o=n[r++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(e.push(o.time),s.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do s=o[i],s!==void 0&&(e.push(o.time),t.push(s)),o=n[r++];while(o!==void 0)}class xo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let s;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break t}s=t.length;break n}if(!(e>=o)){const a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break t}s=i,i=0;break n}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ym extends xo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,i){const r=this.parameterPositions;let o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:o=e,a=2*t-i;break;case Sc:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ec:s=e,c=2*i-t;break;case Sc:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,f=v*g,h=-p*f+2*p*v-p*g,_=(1+p)*f+(-1.5-2*p)*v+(-.5+p)*g+1,b=(-1-m)*f+(1.5+m)*v+.5*g,y=m*f-m*v;for(let R=0;R!==a;++R)o[R]=h*s[u+R]+_*s[l+R]+b*s[c+R]+y*s[d+R];return o}}class bm extends xo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let p=0;p!==a;++p)o[p]=s[l+p]*d+s[c+p]*u;return o}}class Tm extends xo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ym(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case io:t=this.InterpolantFactoryMethodDiscrete;break;case ro:t=this.InterpolantFactoryMethodLinear;break;case Xs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return Xs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);const a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,o=i.length;o===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){dt("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&vm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){dt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Xs,o=e.length-1;let s=1;for(let a=1;a<o;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*i,p=d-i,m=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[p+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];const d=a*i,p=s*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ro;class wr extends Un{constructor(e,t,i){super(e,t,i)}}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=io;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Id extends Un{constructor(e,t,i,r){super(e,t,i,r)}}Id.prototype.ValueTypeName="color";class br extends Un{constructor(e,t,i,r){super(e,t,i,r)}}br.prototype.ValueTypeName="number";class Em extends xo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Sn.slerpFlat(o,0,s,l-a,s,l,c);return o}}class Tr extends Un{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Em(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends Un{constructor(e,t,i){super(e,t,i)}}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=io;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends Un{constructor(e,t,i,r){super(e,t,i,r)}}Er.prototype.ValueTypeName="vector";class Sm{constructor(e="",t=-1,i=[],r=Gf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(Am(i[s]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,s=i.length;o!==s;++o)t.push(Un.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const o=t.length,s=[];for(let a=0;a<o;a++){let c=[],l=[];c.push((a+o-1)%o,a,(a+1)%o),l.push(0,1,0);const u=_m(c);c=lu(c,1,u),l=lu(l,1,u),!r&&c[0]===0&&(c.push(o),l.push(l[0])),s.push(new br(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(o);if(u&&u.length>1){const d=u[1];let p=r[d];p||(r[d]=p=[]),p.push(l)}}const s=[];for(const a in r)s.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return s}static parseAnimation(e,t){if(Ke("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return dt("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,p,m,g,v){if(m.length!==0){const f=[],h=[];Ld(m,f,h,g),f.length!==0&&v.push(new d(p,f,h))}},r=[],o=e.name||"default",s=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const p=l[d].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const m={};let g;for(g=0;g<p.length;g++)if(p[g].morphTargets)for(let v=0;v<p[g].morphTargets.length;v++)m[p[g].morphTargets[v]]=-1;for(const v in m){const f=[],h=[];for(let _=0;_!==p[g].morphTargets.length;++_){const b=p[g];f.push(b.time),h.push(b.morphTarget===v?1:0)}r.push(new br(".morphTargetInfluence["+v+"]",f,h))}c=m.length*s}else{const m=".bones["+t[d].name+"]";i(Er,m+".position",p,"pos",r),i(Tr,m+".quaternion",p,"rot",r),i(Er,m+".scale",p,"scl",r)}}return r.length===0?null:new this(o,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Mm(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return Id;case"quaternion":return Tr;case"bool":case"boolean":return wr;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Am(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Mm(n.type);if(n.times===void 0){const t=[],i=[];Ld(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ii={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Rm{constructor(e,t,i){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wm=new Rm;class pn{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class Cm extends Error{constructor(e,t){super(e),this.response=t}}class Sr extends pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ii.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:i,onError:r});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Jn[e],d=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let v=0;const f=new ReadableStream({start(h){_();function _(){d.read().then(({done:b,value:y})=>{if(b)h.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let M=0,C=u.length;M<C;M++){const U=u[M];U.onProgress&&U.onProgress(R)}h.enqueue(y),_()}},b=>{h.error(b)})}}});return new Response(f)}else throw new Cm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{ii.add(`file:${e}`,l);const u=Jn[e];delete Jn[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Jn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Jn[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rr=new WeakMap;class Pm extends pn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=ii.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=rr.get(s);d===void 0&&(d=[],rr.set(s,d)),d.push({onLoad:t,onError:r})}return s}const a=oo("img");function c(){u(),t&&t(this);const d=rr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}rr.delete(this),o.manager.itemEnd(e)}function l(d){u(),r&&r(d),ii.remove(`image:${e}`);const p=rr.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(d)}rr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ii.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}}class Nd extends pn{constructor(e){super(e)}load(e,t,i,r){const o=new Wt,s=new Pm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class As extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xa=new at,cu=new Q,uu=new Q;class Zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lm extends Zl{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=vr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Im extends As{constructor(e,t,i=0,r=Math.PI/3,o=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=r,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new Lm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const du=new at,Vr=new Q,va=new Q;class Nm extends Zl{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vr),va.copy(i.position),va.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(va),i.updateMatrixWorld(),r.makeTranslation(-Vr.x,-Vr.y,-Vr.z),du.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du,i.coordinateSystem,i.reversedDepth)}}class Om extends As{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jl extends vd{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dm extends Zl{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class as extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fm extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const _a=new WeakMap;class Um extends pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=ii.get(`image-bitmap:${e}`);if(s!==void 0){if(o.manager.itemStart(e),s.then){s.then(l=>{if(_a.has(s)===!0)r&&r(_a.get(s)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(l),o.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(l){return ii.add(`image-bitmap:${e}`,l),t&&t(l),o.manager.itemEnd(e),l}).catch(function(l){r&&r(l),_a.set(c,l),ii.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});ii.add(`image-bitmap:${e}`,c),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class km extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ql="\\[\\]\\.:\\/",Bm=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",zm="[^"+Ql.replace("\\.","")+"]",Vm=/((?:WC+[\/:])*)/.source.replace("WC",ec),Gm=/(WCOD+)?/.source.replace("WCOD",zm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),Xm=new RegExp("^"+Vm+Gm+Hm+Wm+"$"),jm=["material","materials","bones","map"];class Km{constructor(e,t,i){const r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(e){const t=Xm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);jm.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let s=0;s<o.length;s++){const a=o[s];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[r];if(s===void 0){const l=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=Km;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ym extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fu(n,e,t,i){const r=qm(i);switch(t){case ad:return n*e;case Fl:return n*e/r.components*r.byteLength;case Ul:return n*e/r.components*r.byteLength;case kl:return n*e*2/r.components*r.byteLength;case Bl:return n*e*2/r.components*r.byteLength;case ld:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case zl:return n*e*4/r.components*r.byteLength;case is:case rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case os:case ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ka:return Math.max(n,16)*Math.max(e,8)/4;case Wa:case ja:return Math.max(n,8)*Math.max(e,8)/2;case Ya:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dl:case hl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qm(n){switch(n){case Hn:case id:return{byteLength:1,components:1};case Qr:case rd:case Ar:return{byteLength:2,components:1};case Ol:case Dl:return{byteLength:2,components:4};case Di:case Nl:case Nn:return{byteLength:4,components:1};case od:case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Od(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function $m(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jm=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,q0=`uniform sampler2D dfgLUT;
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
}`,$0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,wx=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Zm,alphahash_pars_fragment:Jm,alphamap_fragment:Qm,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,batching_pars_vertex:o0,batching_vertex:s0,begin_vertex:a0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:x0,color_pars_vertex:v0,color_vertex:_0,common:y0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:T0,displacementmap_pars_vertex:E0,displacementmap_vertex:S0,emissivemap_fragment:M0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:w0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:H0,envmap_vertex:N0,fog_vertex:O0,fog_pars_vertex:D0,fog_fragment:F0,fog_pars_fragment:U0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:B0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:j0,lights_phong_pars_fragment:K0,lights_physical_fragment:Y0,lights_physical_pars_fragment:q0,lights_fragment_begin:$0,lights_fragment_maps:Z0,lights_fragment_end:J0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:sg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:hg,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:xg,normal_vertex:vg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Eg,opaque_fragment:Sg,packing:Mg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:wg,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Ng,shadowmap_vertex:Og,shadowmask_pars_fragment:Dg,skinbase_vertex:Fg,skinning_pars_vertex:Ug,skinning_vertex:kg,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:Vg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Hg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Yg,worldpos_vertex:qg,background_vert:$g,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:Qg,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:rx,distanceRGBA_frag:ox,equirect_vert:sx,equirect_frag:ax,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:hx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:xx,meshphong_vert:vx,meshphong_frag:_x,meshphysical_vert:yx,meshphysical_frag:bx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:Sx,points_frag:Mx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:wx,sprite_frag:Cx},ze={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Jt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Jt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Jt([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Jt([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Jt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Jt([ze.points,ze.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Jt([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Jt([ze.common,ze.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Jt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Jt([ze.sprite,ze.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Jt([ze.common,ze.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Jt([ze.lights,ze.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Zo={r:0,b:0,g:0},Pi=new Fn,Px=new at;function Lx(n,e,t,i,r,o,s){const a=new Ye(0);let c=o===!0?0:1,l,u,d=null,p=0,m=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const R=g(b);R===null?h(a,c):R&&R.isColor&&(h(R,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(b,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===bs)?(u===void 0&&(u=new Nt(new Rr(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:_r(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Pi)),u.material.toneMapped=ut.getTransfer(R.colorSpace)!==Tt,(d!==R||p!==R.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,p=R.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Nt(new Ss(2,2),new si({name:"BackgroundMaterial",uniforms:_r(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(R.colorSpace)!==Tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,p=R.version,m=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,y){b.getRGB(Zo,xd(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,y,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:v,addToRenderList:f,dispose:_}}function Ix(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function a(S,w,P,L,O){let H=!1;const W=d(L,P,w);o!==W&&(o=W,l(o.object)),H=m(S,L,P,O),H&&g(S,L,P,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,y(S,w,P,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,w,P){const L=P.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let H=O[w.id];H===void 0&&(H={},O[w.id]=H);let W=H[L];return W===void 0&&(W=p(c()),H[L]=W),W}function p(S){const w=[],P=[],L=[];for(let O=0;O<t;O++)w[O]=0,P[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:L,object:S,attributes:{},index:null}}function m(S,w,P,L){const O=o.attributes,H=w.attributes;let W=0;const J=P.getAttributes();for(const j in J)if(J[j].location>=0){const he=O[j];let Ee=H[j];if(Ee===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;W++}return o.attributesNum!==W||o.index!==L}function g(S,w,P,L){const O={},H=w.attributes;let W=0;const J=P.getAttributes();for(const j in J)if(J[j].location>=0){let he=H[j];he===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),O[j]=Ee,W++}o.attributes=O,o.attributesNum=W,o.index=L}function v(){const S=o.newAttributes;for(let w=0,P=S.length;w<P;w++)S[w]=0}function f(S){h(S,0)}function h(S,w){const P=o.newAttributes,L=o.enabledAttributes,O=o.attributeDivisors;P[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),O[S]!==w&&(n.vertexAttribDivisor(S,w),O[S]=w)}function _(){const S=o.newAttributes,w=o.enabledAttributes;for(let P=0,L=w.length;P<L;P++)w[P]!==S[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function b(S,w,P,L,O,H,W){W===!0?n.vertexAttribIPointer(S,w,P,O,H):n.vertexAttribPointer(S,w,P,L,O,H)}function y(S,w,P,L){v();const O=L.attributes,H=P.getAttributes(),W=w.defaultAttributeValues;for(const J in H){const j=H[J];if(j.location>=0){let ne=O[J];if(ne===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const he=ne.normalized,Ee=ne.itemSize,re=e.get(ne);if(re===void 0)continue;const oe=re.buffer,we=re.type,ie=re.bytesPerElement,V=we===n.INT||we===n.UNSIGNED_INT||ne.gpuType===Nl;if(ne.isInterleavedBufferAttribute){const Y=ne.data,ce=Y.stride,de=ne.offset;if(Y.isInstancedInterleavedBuffer){for(let ye=0;ye<j.locationSize;ye++)h(j.location+ye,Y.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ye=0;ye<j.locationSize;ye++)f(j.location+ye);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ye=0;ye<j.locationSize;ye++)b(j.location+ye,Ee/j.locationSize,we,he,ce*ie,(de+Ee/j.locationSize*ye)*ie,V)}else{if(ne.isInstancedBufferAttribute){for(let Y=0;Y<j.locationSize;Y++)h(j.location+Y,ne.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<j.locationSize;Y++)f(j.location+Y);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Y=0;Y<j.locationSize;Y++)b(j.location+Y,Ee/j.locationSize,we,he,Ee*ie,Ee/j.locationSize*Y*ie,V)}}else if(W!==void 0){const he=W[J];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(j.location,he);break;case 3:n.vertexAttrib3fv(j.location,he);break;case 4:n.vertexAttrib4fv(j.location,he);break;default:n.vertexAttrib1fv(j.location,he)}}}}_()}function R(){U();for(const S in i){const w=i[S];for(const P in w){const L=w[P];for(const O in L)u(L[O].object),delete L[O];delete w[P]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const P in w){const L=w[P];for(const O in L)u(L[O].object),delete L[O];delete w[P]}delete i[S.id]}function C(S){for(const w in i){const P=i[w];if(P[S.id]===void 0)continue;const L=P[S.id];for(const O in L)u(L[O].object),delete L[O];delete P[S.id]}}function U(){E(),s=!0,o!==r&&(o=r,l(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function Nx(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)s(l[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ox(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!U)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:M}}function Dx(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new xi,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||o&&!f)o?u(null):l();else{const _=o?0:i,b=_*4;let y=h.clippingState||null;c.value=y,y=u(g,p,b,m);for(let R=0;R!==b;++R)y[R]=t[R];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const h=m+v*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<h)&&(f=new Float32Array(h));for(let b=0,y=m;b!==v;++b,y+=4)s.copy(d[b]).applyMatrix4(_,a),s.normal.toArray(f,y),f[y+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Fx(n){let e=new WeakMap;function t(s,a){return a===Ga?s.mapping=gr:a===Ha&&(s.mapping=xr),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Ga||a===Ha)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new zp(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const yi=4,pu=[.125,.215,.35,.446,.526,.582],Oi=20,Ux=256,Gr=new Jl,mu=new Ye;let ya=null,ba=0,Ta=0,Ea=!1;const kx=new Q;class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:s=256,position:a=kx}=o;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,Ta),this._renderer.xr.enabled=Ea,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ar,format:mn,colorSpace:qt,depthBuffer:!1},r=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bx(o)),this._blurMaterial=Vx(o,e,t)}return r}_compileMaterial(e){const t=new Nt(new Ot,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,i,r,o){const c=new en(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(mu),d.toneMapping=bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Rr,new bn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,f=v.material;let h=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,h=!0):(f.color.copy(mu),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[b],o.y,o.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[b],o.z)):(c.up.set(0,l[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[b]));const R=this._cubeSize;or(r,y*R,b>2?R:0,R,R),d.setRenderTarget(r),h&&d.render(v,c),d.render(e,c)}d.toneMapping=m,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;or(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Gr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const _=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=zx(this._lodMax,_,b)}const s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),p=.05+l*.95,m=d*p,{_lodMax:g}=this,v=this._sizeLods[i],f=3*v*(i>g-yi?i-g+yi:0),h=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,or(o,f,h,3*v,2*v),r.setRenderTarget(o),r.render(a,Gr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,or(e,f,h,3*v,2*v),r.setRenderTarget(e),r.render(a,Gr)}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const p=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Oi-1),v=o/g,f=isFinite(o)?1+Math.floor(u*v):Oi;f>Oi&&Ke(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Oi}`);const h=[];let _=0;for(let C=0;C<Oi;++C){const U=C/v,E=Math.exp(-U*U/2);h.push(E),C===0?_+=E:C<f&&(_+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-i;const y=this._sizeLods[r],R=3*y*(r>b-yi?r-b+yi:0),M=4*(this._cubeSize-y);or(t,R,M,3*y,2*y),c.setRenderTarget(t),c.render(d,Gr)}}function Bx(n){const e=[],t=[],i=[];let r=n;const o=n-yi+1+pu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let c=1/a;s>n-yi?c=pu[s-n+yi-1]:s===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,h=1,_=new Float32Array(v*g*m),b=new Float32Array(f*g*m),y=new Float32Array(h*g*m);for(let M=0;M<m;M++){const C=M%3*2/3-1,U=M>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];_.set(E,v*g*M),b.set(p,f*g*M);const S=[M,M,M,M,M,M];y.set(S,h*g*M)}const R=new Ot;R.setAttribute("position",new Ft(_,v)),R.setAttribute("uv",new Ft(b,f)),R.setAttribute("faceIndex",new Ft(y,h)),i.push(new Nt(R,null)),r>yi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function xu(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zx(n,e,t){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vx(n,e,t){const i=new Float32Array(Oi),r=new Q(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function vu(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _u(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Rs(){return`

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
	`}function Gx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ga||c===Ha,u=c===gr||c===xr;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new gu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new gu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Hx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&so("WebGLRenderer: "+i+" extension not supported."),r}}}function Wx(n,e,t,i){const r={},o=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete r[p.id];const m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(d){const p=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let b=0,y=_.length;b<y;b+=3){const R=_[b+0],M=_[b+1],C=_[b+2];p.push(R,M,M,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const R=b+0,M=b+1,C=b+2;p.push(R,M,M,C,C,R)}}else return;const f=new(dd(p)?gd:md)(p,1);f.version=v;const h=o.get(d);h&&e.remove(h),o.set(d,f)}function u(d){const p=o.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Xx(n,e,t){let i;function r(p){i=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function c(p,m){n.drawElements(i,m,o,p*s),t.update(m,i,1)}function l(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,o,p*s,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,i,1)}function d(p,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/s,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,o,p,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=m[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function jx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:dt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Kx(n,e,t){const i=new WeakMap,r=new gt;function o(s,a,c){const l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*R*4*d),C=new hd(M,y,R,d);C.type=Nn,C.needsUpdate=!0;const U=b*4;for(let S=0;S<d;S++){const w=f[S],P=h[S],L=_[S],O=y*R*4*S;for(let H=0;H<w.count;H++){const W=H*U;m===!0&&(r.fromBufferAttribute(w,H),M[O+W+0]=r.x,M[O+W+1]=r.y,M[O+W+2]=r.z,M[O+W+3]=0),g===!0&&(r.fromBufferAttribute(P,H),M[O+W+4]=r.x,M[O+W+5]=r.y,M[O+W+6]=r.z,M[O+W+7]=0),v===!0&&(r.fromBufferAttribute(L,H),M[O+W+8]=r.x,M[O+W+9]=r.y,M[O+W+10]=r.z,M[O+W+11]=L.itemSize===4?r.w:1)}}p={count:d,texture:C,size:new je(y,R)},i.set(a,p),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function Yx(n,e,t,i){let r=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const Dd=new Wt,yu=new Md(1,1),Fd=new hd,Ud=new Ep,kd=new _d,bu=[],Tu=[],Eu=new Float32Array(16),Su=new Float32Array(9),Mu=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=bu[r];if(o===void 0&&(o=new Float32Array(r),bu[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=Tu[e];t===void 0&&(t=new Int32Array(e),Tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Mu.set(i),n.uniformMatrix2fv(this.addr,!1,Mu),Gt(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Su.set(i),n.uniformMatrix3fv(this.addr,!1,Su),Gt(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),Gt(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(yu.compareFunction=ud,o=yu):o=Dd,t.setTexture2D(e||o,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kd,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fd,r)}function pv(n){switch(n){case 5126:return qx;case 35664:return $x;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return sv;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function xv(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function vv(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function _v(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yv(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bv(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tv(n,e){n.uniform1iv(this.addr,e)}function Ev(n,e){n.uniform2iv(this.addr,e)}function Sv(n,e){n.uniform3iv(this.addr,e)}function Mv(n,e){n.uniform4iv(this.addr,e)}function Av(n,e){n.uniform1uiv(this.addr,e)}function Rv(n,e){n.uniform2uiv(this.addr,e)}function wv(n,e){n.uniform3uiv(this.addr,e)}function Cv(n,e){n.uniform4uiv(this.addr,e)}function Pv(n,e,t){const i=this.cache,r=e.length,o=ws(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Dd,o[s])}function Lv(n,e,t){const i=this.cache,r=e.length,o=ws(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ud,o[s])}function Iv(n,e,t){const i=this.cache,r=e.length,o=ws(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||kd,o[s])}function Nv(n,e,t){const i=this.cache,r=e.length,o=ws(t,r);Vt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Fd,o[s])}function Ov(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return vv;case 35674:return _v;case 35675:return yv;case 35676:return bv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return Av;case 36294:return Rv;case 36295:return wv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class Uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Au(n,e){n.seq.push(e),n.map[e.id]=e}function kv(n,e,t){const i=n.name,r=i.length;for(Sa.lastIndex=0;;){const o=Sa.exec(i),s=Sa.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){Au(t,l===void 0?new Dv(a,n,e):new Fv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Uv(a),Au(t,d)),t=d}}}class ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);kv(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bv=37297;let zv=0;function Vv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const wu=new rt;function Gv(n){ut._getMatrix(wu,ut.workingColorSpace,n);const e=`mat3( ${wu.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case hs:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+Vv(n.getShaderSource(e),a)}else return o}function Hv(n,e){const t=Gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wv(n,e){let t;switch(e){case Of:t="Linear";break;case Df:t="Reinhard";break;case Ff:t="Cineon";break;case Uf:t="ACESFilmic";break;case Bf:t="AgX";break;case zf:t="Neutral";break;case kf:t="Custom";break;default:Ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jo=new Q;function Xv(){ut.getLuminanceCoefficients(Jo);const n=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function jr(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(n){return n.replace(qv,Zv)}const $v=new Map;function Zv(n,e){let t=ot[e];if(t===void 0){const i=$v.get(e);if(i!==void 0)t=ot[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(n){return n.replace(Jv,Qv)}function Qv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Nu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function e_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case xr:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function r_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function o_(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=e_(t),l=t_(t),u=n_(t),d=i_(t),p=r_(t),m=jv(t),g=Kv(o),v=r.createProgram();let f,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),h.length>0&&(h+=`
`)):(f=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),h=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?ot.tonemapping_pars_fragment:"",t.toneMapping!==bi?Wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),s=Sl(s),s=Pu(s,t),s=Lu(s,t),a=Sl(a),a=Pu(a,t),a=Lu(a,t),s=Iu(s),a=Iu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=_+f+s,y=_+h+a,R=Ru(r,r.VERTEX_SHADER,b),M=Ru(r,r.FRAGMENT_SHADER,y);r.attachShader(v,R),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(w){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v)||"",L=r.getShaderInfoLog(R)||"",O=r.getShaderInfoLog(M)||"",H=P.trim(),W=L.trim(),J=O.trim();let j=!0,ne=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,M);else{const he=Cu(r,R,"vertex"),Ee=Cu(r,M,"fragment");dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+he+`
`+Ee)}else H!==""?Ke("WebGLProgram: Program Info Log:",H):(W===""||J==="")&&(ne=!1);ne&&(w.diagnostics={runnable:j,programLog:H,vertexShader:{log:W,prefix:f},fragmentShader:{log:J,prefix:h}})}r.deleteShader(R),r.deleteShader(M),U=new ls(r,v),E=Yv(r,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Bv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=M,this}let s_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new l_(e),t.set(e,i)),i}}class l_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function c_(n,e,t,i,r,o,s){const a=new fd,c=new a_,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function f(E,S,w,P,L){const O=P.fog,H=L.geometry,W=E.isMeshStandardMaterial?P.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),j=J&&J.mapping===bs?J.image.height:null,ne=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&Ke("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=he!==void 0?he.length:0;let re=0;H.morphAttributes.position!==void 0&&(re=1),H.morphAttributes.normal!==void 0&&(re=2),H.morphAttributes.color!==void 0&&(re=3);let oe,we,ie,V;if(ne){const Ce=zn[ne];oe=Ce.vertexShader,we=Ce.fragmentShader}else oe=E.vertexShader,we=E.fragmentShader,c.update(E),ie=c.getVertexShaderID(E),V=c.getFragmentShaderID(E);const Y=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),de=L.isInstancedMesh===!0,ye=L.isBatchedMesh===!0,Pe=!!E.map,Be=!!E.matcap,Fe=!!J,qe=!!E.aoMap,X=!!E.lightMap,Ge=!!E.bumpMap,ee=!!E.normalMap,me=!!E.displacementMap,te=!!E.emissiveMap,Me=!!E.metalnessMap,Re=!!E.roughnessMap,Ue=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,A=E.iridescence>0,D=E.sheen>0,N=E.transmission>0,F=Ue&&!!E.anisotropyMap,$=T&&!!E.clearcoatMap,q=T&&!!E.clearcoatNormalMap,ae=T&&!!E.clearcoatRoughnessMap,G=A&&!!E.iridescenceMap,k=A&&!!E.iridescenceThicknessMap,K=D&&!!E.sheenColorMap,se=D&&!!E.sheenRoughnessMap,ge=!!E.specularMap,fe=!!E.specularColorMap,Te=!!E.specularIntensityMap,B=N&&!!E.transmissionMap,_e=N&&!!E.thicknessMap,pe=!!E.gradientMap,be=!!E.alphaMap,z=E.alphaTest>0,Z=!!E.alphaHash,Se=!!E.extensions;let Oe=bi;E.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Ie={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:we,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:V,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ye,batchingColor:ye&&L._colorsTexture!==null,instancing:de,instancingColor:de&&L.instanceColor!==null,instancingMorph:de&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:qt,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:Be,envMap:Fe,envMapMode:Fe&&J.mapping,envMapCubeUVHeight:j,aoMap:qe,lightMap:X,bumpMap:Ge,normalMap:ee,displacementMap:p&&me,emissiveMap:te,normalMapObjectSpace:ee&&E.normalMapType===jf,normalMapTangentSpace:ee&&E.normalMapType===Vl,metalnessMap:Me,roughnessMap:Re,anisotropy:Ue,anisotropyMap:F,clearcoat:T,clearcoatMap:$,clearcoatNormalMap:q,clearcoatRoughnessMap:ae,dispersion:x,iridescence:A,iridescenceMap:G,iridescenceThicknessMap:k,sheen:D,sheenColorMap:K,sheenRoughnessMap:se,specularMap:ge,specularColorMap:fe,specularIntensityMap:Te,transmission:N,transmissionMap:B,thicknessMap:_e,gradientMap:pe,opaque:E.transparent===!1&&E.blending===ur&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:z,alphaHash:Z,combine:E.combine,mapUv:Pe&&v(E.map.channel),aoMapUv:qe&&v(E.aoMap.channel),lightMapUv:X&&v(E.lightMap.channel),bumpMapUv:Ge&&v(E.bumpMap.channel),normalMapUv:ee&&v(E.normalMap.channel),displacementMapUv:me&&v(E.displacementMap.channel),emissiveMapUv:te&&v(E.emissiveMap.channel),metalnessMapUv:Me&&v(E.metalnessMap.channel),roughnessMapUv:Re&&v(E.roughnessMap.channel),anisotropyMapUv:F&&v(E.anisotropyMap.channel),clearcoatMapUv:$&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:q&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:k&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:K&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:se&&v(E.sheenRoughnessMap.channel),specularMapUv:ge&&v(E.specularMap.channel),specularColorMapUv:fe&&v(E.specularColorMap.channel),specularIntensityMapUv:Te&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:_e&&v(E.thicknessMap.channel),alphaMapUv:be&&v(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||Ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Pe||be),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&ut.getTransfer(E.map.colorSpace)===Tt,decodeVideoTextureEmissive:te&&E.emissiveMap.isVideoTexture===!0&&ut.getTransfer(E.emissiveMap.colorSpace)===Tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Se&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&E.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)S.push(w),S.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(_(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=g[E.type];let w;if(S){const P=zn[S];w=Fp.clone(P.uniforms)}else w=E.uniforms;return w}function R(E,S){let w;for(let P=0,L=u.length;P<L;P++){const O=u[P];if(O.cacheKey===S){w=O,++w.usedTimes;break}}return w===void 0&&(w=new o_(n,S,E,o),u.push(w)),w}function M(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:U}}function u_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function d_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Du(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,p,m,g,v,f){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=f),e++,h}function a(d,p,m,g,v,f){const h=s(d,p,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,p,m,g,v,f){const h=s(d,p,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,p){t.length>1&&t.sort(d||d_),i.length>1&&i.sort(p||Ou),r.length>1&&r.sort(p||Ou)}function u(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function h_(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Du,n.set(i,[s])):r>=o.length?(s=new Du,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function f_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ye};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function p_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let m_=0;function g_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x_(n){const e=new f_,t=p_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Q);const r=new Q,o=new at,s=new at;function a(l){let u=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,v=0,f=0,h=0,_=0,b=0,y=0,R=0,M=0,C=0;l.sort(g_);for(let E=0,S=l.length;E<S;E++){const w=l[E],P=w.color,L=w.intensity,O=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=P.r*L,d+=P.g*L,p+=P.b*L;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],L);C++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,j=t.get(w);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=w.shadow.matrix,_++}i.directional[m]=W,m++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(P).multiplyScalar(L),W.distance=O,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[v]=W;const J=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,J.updateMatrices(w),w.castShadow&&M++),i.spotLightMatrix[v]=J.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=H,y++}v++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(P).multiplyScalar(L),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),i.rectArea[f]=W,f++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const J=w.shadow,j=t.get(w);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=w.shadow.matrix,b++}i.point[g]=W,g++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(L),W.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[h]=W,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==_||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==R||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+R-M,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=_,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=R,U.numLightProbes=C,i.version=m_++)}function c(l,u){let d=0,p=0,m=0,g=0,v=0;const f=u.matrixWorldInverse;for(let h=0,_=l.length;h<_;h++){const b=l[h];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),d++}else if(b.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),m++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),s.identity(),o.copy(b.matrixWorld),o.premultiply(f),s.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:i}}function Fu(n){const e=new x_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function v_(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Fu(n),e.set(r,[a])):o>=s.length?(a=new Fu(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function b_(n,e,t){let i=new Xl;const r=new je,o=new je,s=new gt,a=new gm({depthPacking:Xf}),c=new xm,l={},u=t.maxTextureSize,d={[Gn]:Yt,[Yt]:Gn,[yn]:yn},p=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:__,fragmentShader:y_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let h=this.type;this.render=function(M,C,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ri),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=h!==ei&&this.type===ei,O=h===ei&&this.type!==ei;for(let H=0,W=M.length;H<W;H++){const J=M[H],j=J.shadow;if(j===void 0){Ke("WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ne=j.getFrameExtents();if(r.multiply(ne),o.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ne.x),r.x=o.x*ne.x,j.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ne.y),r.y=o.y*ne.y,j.mapSize.y=o.y)),j.map===null||L===!0||O===!0){const Ee=this.type!==ei?{minFilter:nn,magFilter:nn}:{};j.map!==null&&j.map.dispose(),j.map=new Fi(r.x,r.y,Ee),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const he=j.getViewportCount();for(let Ee=0;Ee<he;Ee++){const re=j.getViewport(Ee);s.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),P.viewport(s),j.updateMatrices(J,Ee),i=j.getFrustum(),y(C,U,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===ei&&_(j,U),j.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(E,S,w)};function _(M,C){const U=e.update(v);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Fi(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,U,p,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,U,m,v,null)}function b(M,C,U,E){let S=null;const w=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)S=w;else if(S=U.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=S.uuid,L=C.uuid;let O=l[P];O===void 0&&(O={},l[P]=O);let H=O[L];H===void 0&&(H=S.clone(),O[L]=H,C.addEventListener("dispose",R)),S=H}if(S.visible=C.visible,S.wireframe=C.wireframe,E===ei?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=n.properties.get(S);P.light=U}return S}function y(M,C,U,E,S){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===ei)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);const L=e.update(M),O=M.material;if(Array.isArray(O)){const H=L.groups;for(let W=0,J=H.length;W<J;W++){const j=H[W],ne=O[j.materialIndex];if(ne&&ne.visible){const he=b(M,ne,E,S);M.onBeforeShadow(n,M,C,U,L,he,j),n.renderBufferDirect(U,null,L,he,M,j),M.onAfterShadow(n,M,C,U,L,he,j)}}}else if(O.visible){const H=b(M,O,E,S);M.onBeforeShadow(n,M,C,U,L,H,null),n.renderBufferDirect(U,null,L,H,M,null),M.onAfterShadow(n,M,C,U,L,H,null)}}const P=M.children;for(let L=0,O=P.length;L<O;L++)y(P[L],C,U,E,S)}function R(M){M.target.removeEventListener("dispose",R);for(const U in l){const E=l[U],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const T_={[Da]:Fa,[Ua]:za,[ka]:Va,[mr]:Ba,[Fa]:Da,[za]:Ua,[Va]:ka,[Ba]:mr};function E_(n,e){function t(){let B=!1;const _e=new gt;let pe=null;const be=new gt(0,0,0,0);return{setMask:function(z){pe!==z&&!B&&(n.colorMask(z,z,z,z),pe=z)},setLocked:function(z){B=z},setClear:function(z,Z,Se,Oe,Ie){Ie===!0&&(z*=Oe,Z*=Oe,Se*=Oe),_e.set(z,Z,Se,Oe),be.equals(_e)===!1&&(n.clearColor(z,Z,Se,Oe),be.copy(_e))},reset:function(){B=!1,pe=null,be.set(-1,0,0,0)}}}function i(){let B=!1,_e=!1,pe=null,be=null,z=null;return{setReversed:function(Z){if(_e!==Z){const Se=e.get("EXT_clip_control");Z?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),_e=Z;const Oe=z;z=null,this.setClear(Oe)}},getReversed:function(){return _e},setTest:function(Z){Z?Y(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(Z){pe!==Z&&!B&&(n.depthMask(Z),pe=Z)},setFunc:function(Z){if(_e&&(Z=T_[Z]),be!==Z){switch(Z){case Da:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Ba:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Z}},setLocked:function(Z){B=Z},setClear:function(Z){z!==Z&&(_e&&(Z=1-Z),n.clearDepth(Z),z=Z)},reset:function(){B=!1,pe=null,be=null,z=null,_e=!1}}}function r(){let B=!1,_e=null,pe=null,be=null,z=null,Z=null,Se=null,Oe=null,Ie=null;return{setTest:function(Ce){B||(Ce?Y(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Ce){_e!==Ce&&!B&&(n.stencilMask(Ce),_e=Ce)},setFunc:function(Ce,Le,Ne){(pe!==Ce||be!==Le||z!==Ne)&&(n.stencilFunc(Ce,Le,Ne),pe=Ce,be=Le,z=Ne)},setOp:function(Ce,Le,Ne){(Z!==Ce||Se!==Le||Oe!==Ne)&&(n.stencilOp(Ce,Le,Ne),Z=Ce,Se=Le,Oe=Ne)},setLocked:function(Ce){B=Ce},setClear:function(Ce){Ie!==Ce&&(n.clearStencil(Ce),Ie=Ce)},reset:function(){B=!1,_e=null,pe=null,be=null,z=null,Z=null,Se=null,Oe=null,Ie=null}}}const o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,_=null,b=null,y=null,R=null,M=null,C=new Ye(0,0,0),U=0,E=!1,S=null,w=null,P=null,L=null,O=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=J>=2);let ne=null,he={};const Ee=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),oe=new gt().fromArray(Ee),we=new gt().fromArray(re);function ie(B,_e,pe,be){const z=new Uint8Array(4),Z=n.createTexture();n.bindTexture(B,Z),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<pe;Se++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,z):n.texImage2D(_e+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,z);return Z}const V={};V[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),s.setFunc(mr),Ge(!1),ee(xc),Y(n.CULL_FACE),qe(ri);function Y(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ce(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function de(B,_e){return d[B]!==_e?(n.bindFramebuffer(B,_e),d[B]=_e,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function ye(B,_e){let pe=m,be=!1;if(B){pe=p.get(_e),pe===void 0&&(pe=[],p.set(_e,pe));const z=B.textures;if(pe.length!==z.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,Se=z.length;Z<Se;Z++)pe[Z]=n.COLOR_ATTACHMENT0+Z;pe.length=z.length,be=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,be=!0);be&&n.drawBuffers(pe)}function Pe(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const Be={[Ni]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};Be[xf]=n.MIN,Be[vf]=n.MAX;const Fe={[_f]:n.ZERO,[yf]:n.ONE,[bf]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[Rf]:n.SRC_ALPHA_SATURATE,[Mf]:n.DST_COLOR,[Ef]:n.DST_ALPHA,[Tf]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[Af]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[Lf]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(B,_e,pe,be,z,Z,Se,Oe,Ie,Ce){if(B===ri){v===!0&&(ce(n.BLEND),v=!1);return}if(v===!1&&(Y(n.BLEND),v=!0),B!==pf){if(B!==f||Ce!==E){if((h!==Ni||y!==Ni)&&(n.blendEquation(n.FUNC_ADD),h=Ni,y=Ni),Ce)switch(B){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:dt("WebGLState: Invalid blending: ",B);break}else switch(B){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",B);break}_=null,b=null,R=null,M=null,C.set(0,0,0),U=0,f=B,E=Ce}return}z=z||_e,Z=Z||pe,Se=Se||be,(_e!==h||z!==y)&&(n.blendEquationSeparate(Be[_e],Be[z]),h=_e,y=z),(pe!==_||be!==b||Z!==R||Se!==M)&&(n.blendFuncSeparate(Fe[pe],Fe[be],Fe[Z],Fe[Se]),_=pe,b=be,R=Z,M=Se),(Oe.equals(C)===!1||Ie!==U)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Ie),C.copy(Oe),U=Ie),f=B,E=!1}function X(B,_e){B.side===yn?ce(n.CULL_FACE):Y(n.CULL_FACE);let pe=B.side===Yt;_e&&(pe=!pe),Ge(pe),B.blending===ur&&B.transparent===!1?qe(ri):qe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),o.setMask(B.colorWrite);const be=B.stencilWrite;a.setTest(be),be&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(B){S!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),S=B)}function ee(B){B!==df?(Y(n.CULL_FACE),B!==w&&(B===xc?n.cullFace(n.BACK):B===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),w=B}function me(B){B!==P&&(W&&n.lineWidth(B),P=B)}function te(B,_e,pe){B?(Y(n.POLYGON_OFFSET_FILL),(L!==_e||O!==pe)&&(n.polygonOffset(_e,pe),L=_e,O=pe)):ce(n.POLYGON_OFFSET_FILL)}function Me(B){B?Y(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Re(B){B===void 0&&(B=n.TEXTURE0+H-1),ne!==B&&(n.activeTexture(B),ne=B)}function Ue(B,_e,pe){pe===void 0&&(ne===null?pe=n.TEXTURE0+H-1:pe=ne);let be=he[pe];be===void 0&&(be={type:void 0,texture:void 0},he[pe]=be),(be.type!==B||be.texture!==_e)&&(ne!==pe&&(n.activeTexture(pe),ne=pe),n.bindTexture(B,_e||V[B]),be.type=B,be.texture=_e)}function T(){const B=he[ne];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function D(){try{n.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function N(){try{n.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function q(){try{n.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function ae(){try{n.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function G(){try{n.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function k(){try{n.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function K(B){oe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),oe.copy(B))}function se(B){we.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),we.copy(B))}function ge(B,_e){let pe=l.get(_e);pe===void 0&&(pe=new WeakMap,l.set(_e,pe));let be=pe.get(B);be===void 0&&(be=n.getUniformBlockIndex(_e,B.name),pe.set(B,be))}function fe(B,_e){const be=l.get(_e).get(B);c.get(_e)!==be&&(n.uniformBlockBinding(_e,be,B.__bindingPointIndex),c.set(_e,be))}function Te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,he={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,_=null,b=null,y=null,R=null,M=null,C=new Ye(0,0,0),U=0,E=!1,S=null,w=null,P=null,L=null,O=null,oe.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Y,disable:ce,bindFramebuffer:de,drawBuffers:ye,useProgram:Pe,setBlending:qe,setMaterial:X,setFlipSided:Ge,setCullFace:ee,setLineWidth:me,setPolygonOffset:te,setScissorTest:Me,activeTexture:Re,bindTexture:Ue,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:A,texImage2D:G,texImage3D:k,updateUBOMapping:ge,uniformBlockBinding:fe,texStorage2D:q,texStorage3D:ae,texSubImage2D:D,texSubImage3D:N,compressedTexSubImage2D:F,compressedTexSubImage3D:$,scissor:K,viewport:se,reset:Te}}function S_(n,e,t,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):oo("canvas")}function v(T,x,A){let D=1;const N=Ue(T);if((N.width>A||N.height>A)&&(D=A/Math.max(N.width,N.height)),D<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const F=Math.floor(D*N.width),$=Math.floor(D*N.height);d===void 0&&(d=g(F,$));const q=x?g(F,$):d;return q.width=F,q.height=$,q.getContext("2d").drawImage(T,0,0,F,$),Ke("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+F+"x"+$+")."),q}else return"data"in T&&Ke("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),T;return T}function f(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,x,A,D,N=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let F=x;if(x===n.RED&&(A===n.FLOAT&&(F=n.R32F),A===n.HALF_FLOAT&&(F=n.R16F),A===n.UNSIGNED_BYTE&&(F=n.R8)),x===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.R8UI),A===n.UNSIGNED_SHORT&&(F=n.R16UI),A===n.UNSIGNED_INT&&(F=n.R32UI),A===n.BYTE&&(F=n.R8I),A===n.SHORT&&(F=n.R16I),A===n.INT&&(F=n.R32I)),x===n.RG&&(A===n.FLOAT&&(F=n.RG32F),A===n.HALF_FLOAT&&(F=n.RG16F),A===n.UNSIGNED_BYTE&&(F=n.RG8)),x===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RG8UI),A===n.UNSIGNED_SHORT&&(F=n.RG16UI),A===n.UNSIGNED_INT&&(F=n.RG32UI),A===n.BYTE&&(F=n.RG8I),A===n.SHORT&&(F=n.RG16I),A===n.INT&&(F=n.RG32I)),x===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RGB8UI),A===n.UNSIGNED_SHORT&&(F=n.RGB16UI),A===n.UNSIGNED_INT&&(F=n.RGB32UI),A===n.BYTE&&(F=n.RGB8I),A===n.SHORT&&(F=n.RGB16I),A===n.INT&&(F=n.RGB32I)),x===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),A===n.UNSIGNED_INT&&(F=n.RGBA32UI),A===n.BYTE&&(F=n.RGBA8I),A===n.SHORT&&(F=n.RGBA16I),A===n.INT&&(F=n.RGBA32I)),x===n.RGB&&(A===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),A===n.UNSIGNED_INT_10F_11F_11F_REV&&(F=n.R11F_G11F_B10F)),x===n.RGBA){const $=N?hs:ut.getTransfer(D);A===n.FLOAT&&(F=n.RGBA32F),A===n.HALF_FLOAT&&(F=n.RGBA16F),A===n.UNSIGNED_BYTE&&(F=$===Tt?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(T,x){let A;return T?x===null||x===Di||x===eo?A=n.DEPTH24_STENCIL8:x===Nn?A=n.DEPTH32F_STENCIL8:x===Qr&&(A=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===eo?A=n.DEPTH_COMPONENT24:x===Nn?A=n.DEPTH_COMPONENT32F:x===Qr&&(A=n.DEPTH_COMPONENT16),A}function R(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function M(T){const x=T.target;x.removeEventListener("dispose",M),U(x),x.isVideoTexture&&u.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),S(x)}function U(T){const x=i.get(T);if(x.__webglInit===void 0)return;const A=T.source,D=p.get(A);if(D){const N=D[x.__cacheKey];N.usedTimes--,N.usedTimes===0&&E(T),Object.keys(D).length===0&&p.delete(A)}i.remove(T)}function E(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const A=T.source,D=p.get(A);delete D[x.__cacheKey],s.memory.textures--}function S(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(x.__webglFramebuffer[D]))for(let N=0;N<x.__webglFramebuffer[D].length;N++)n.deleteFramebuffer(x.__webglFramebuffer[D][N]);else n.deleteFramebuffer(x.__webglFramebuffer[D]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[D])}else{if(Array.isArray(x.__webglFramebuffer))for(let D=0;D<x.__webglFramebuffer.length;D++)n.deleteFramebuffer(x.__webglFramebuffer[D]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let D=0;D<x.__webglColorRenderbuffer.length;D++)x.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[D]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const A=T.textures;for(let D=0,N=A.length;D<N;D++){const F=i.get(A[D]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),s.memory.textures--),i.remove(A[D])}i.remove(T)}let w=0;function P(){w=0}function L(){const T=w;return T>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function O(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const A=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&A.__version!==T.version){const D=T.image;if(D===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{V(A,T,x);return}}else T.isExternalTexture&&(A.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+x)}function W(T,x){const A=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){V(A,T,x);return}else T.isExternalTexture&&(A.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+x)}function J(T,x){const A=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){V(A,T,x);return}t.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+x)}function j(T,x){const A=i.get(T);if(T.version>0&&A.__version!==T.version){Y(A,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+x)}const ne={[In]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[ds]:n.MIRRORED_REPEAT},he={[nn]:n.NEAREST,[nd]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[ns]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},Ee={[Kf]:n.NEVER,[Qf]:n.ALWAYS,[Yf]:n.LESS,[ud]:n.LEQUAL,[qf]:n.EQUAL,[Jf]:n.GEQUAL,[$f]:n.GREATER,[Zf]:n.NOTEQUAL};function re(T,x){if(x.type===Nn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===ns||x.magFilter===Wr||x.magFilter===ni||x.minFilter===tn||x.minFilter===ns||x.minFilter===Wr||x.minFilter===ni)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ne[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ne[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ne[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==Wr&&x.minFilter!==ni||x.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function oe(T,x){let A=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",M));const D=x.source;let N=p.get(D);N===void 0&&(N={},p.set(D,N));const F=O(x);if(F!==T.__cacheKey){N[F]===void 0&&(N[F]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,A=!0),N[F].usedTimes++;const $=N[T.__cacheKey];$!==void 0&&(N[T.__cacheKey].usedTimes--,$.usedTimes===0&&E(x)),T.__cacheKey=F,T.__webglTexture=N[F].texture}return A}function we(T,x,A){return Math.floor(Math.floor(T/A)/x)}function ie(T,x,A,D){const F=T.updateRanges;if(F.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,A,D,x.data);else{F.sort((k,K)=>k.start-K.start);let $=0;for(let k=1;k<F.length;k++){const K=F[$],se=F[k],ge=K.start+K.count,fe=we(se.start,x.width,4),Te=we(K.start,x.width,4);se.start<=ge+1&&fe===Te&&we(se.start+se.count-1,x.width,4)===fe?K.count=Math.max(K.count,se.start+se.count-K.start):(++$,F[$]=se)}F.length=$+1;const q=n.getParameter(n.UNPACK_ROW_LENGTH),ae=n.getParameter(n.UNPACK_SKIP_PIXELS),G=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let k=0,K=F.length;k<K;k++){const se=F[k],ge=Math.floor(se.start/4),fe=Math.ceil(se.count/4),Te=ge%x.width,B=Math.floor(ge/x.width),_e=fe,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Te,B,_e,pe,A,D,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,q),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,G)}}function V(T,x,A){let D=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(D=n.TEXTURE_3D);const N=oe(T,x),F=x.source;t.bindTexture(D,T.__webglTexture,n.TEXTURE0+A);const $=i.get(F);if(F.version!==$.__version||N===!0){t.activeTexture(n.TEXTURE0+A);const q=ut.getPrimaries(ut.workingColorSpace),ae=x.colorSpace===_i?null:ut.getPrimaries(x.colorSpace),G=x.colorSpace===_i||q===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let k=v(x.image,!1,r.maxTextureSize);k=Re(x,k);const K=o.convert(x.format,x.colorSpace),se=o.convert(x.type);let ge=b(x.internalFormat,K,se,x.colorSpace,x.isVideoTexture);re(D,x);let fe;const Te=x.mipmaps,B=x.isVideoTexture!==!0,_e=$.__version===void 0||N===!0,pe=F.dataReady,be=R(x,k);if(x.isDepthTexture)ge=y(x.format===no,x.type),_e&&(B?t.texStorage2D(n.TEXTURE_2D,1,ge,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,ge,k.width,k.height,0,K,se,null));else if(x.isDataTexture)if(Te.length>0){B&&_e&&t.texStorage2D(n.TEXTURE_2D,be,ge,Te[0].width,Te[0].height);for(let z=0,Z=Te.length;z<Z;z++)fe=Te[z],B?pe&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,K,se,fe.data):t.texImage2D(n.TEXTURE_2D,z,ge,fe.width,fe.height,0,K,se,fe.data);x.generateMipmaps=!1}else B?(_e&&t.texStorage2D(n.TEXTURE_2D,be,ge,k.width,k.height),pe&&ie(x,k,K,se)):t.texImage2D(n.TEXTURE_2D,0,ge,k.width,k.height,0,K,se,k.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ge,Te[0].width,Te[0].height,k.depth);for(let z=0,Z=Te.length;z<Z;z++)if(fe=Te[z],x.format!==mn)if(K!==null)if(B){if(pe)if(x.layerUpdates.size>0){const Se=fu(fe.width,fe.height,x.format,x.type);for(const Oe of x.layerUpdates){const Ie=fe.data.subarray(Oe*Se/fe.data.BYTES_PER_ELEMENT,(Oe+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,Oe,fe.width,fe.height,1,K,Ie)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,k.depth,K,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,ge,fe.width,fe.height,k.depth,0,fe.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,k.depth,K,se,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,ge,fe.width,fe.height,k.depth,0,K,se,fe.data)}else{B&&_e&&t.texStorage2D(n.TEXTURE_2D,be,ge,Te[0].width,Te[0].height);for(let z=0,Z=Te.length;z<Z;z++)fe=Te[z],x.format!==mn?K!==null?B?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,K,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,z,ge,fe.width,fe.height,0,fe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?pe&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,K,se,fe.data):t.texImage2D(n.TEXTURE_2D,z,ge,fe.width,fe.height,0,K,se,fe.data)}else if(x.isDataArrayTexture)if(B){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ge,k.width,k.height,k.depth),pe)if(x.layerUpdates.size>0){const z=fu(k.width,k.height,x.format,x.type);for(const Z of x.layerUpdates){const Se=k.data.subarray(Z*z/k.data.BYTES_PER_ELEMENT,(Z+1)*z/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,k.width,k.height,1,K,se,Se)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,K,se,k.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,k.width,k.height,k.depth,0,K,se,k.data);else if(x.isData3DTexture)B?(_e&&t.texStorage3D(n.TEXTURE_3D,be,ge,k.width,k.height,k.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,K,se,k.data)):t.texImage3D(n.TEXTURE_3D,0,ge,k.width,k.height,k.depth,0,K,se,k.data);else if(x.isFramebufferTexture){if(_e)if(B)t.texStorage2D(n.TEXTURE_2D,be,ge,k.width,k.height);else{let z=k.width,Z=k.height;for(let Se=0;Se<be;Se++)t.texImage2D(n.TEXTURE_2D,Se,ge,z,Z,0,K,se,null),z>>=1,Z>>=1}}else if(Te.length>0){if(B&&_e){const z=Ue(Te[0]);t.texStorage2D(n.TEXTURE_2D,be,ge,z.width,z.height)}for(let z=0,Z=Te.length;z<Z;z++)fe=Te[z],B?pe&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,K,se,fe):t.texImage2D(n.TEXTURE_2D,z,ge,K,se,fe);x.generateMipmaps=!1}else if(B){if(_e){const z=Ue(k);t.texStorage2D(n.TEXTURE_2D,be,ge,z.width,z.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K,se,k)}else t.texImage2D(n.TEXTURE_2D,0,ge,K,se,k);f(x)&&h(D),$.__version=F.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Y(T,x,A){if(x.image.length!==6)return;const D=oe(T,x),N=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+A);const F=i.get(N);if(N.version!==F.__version||D===!0){t.activeTexture(n.TEXTURE0+A);const $=ut.getPrimaries(ut.workingColorSpace),q=x.colorSpace===_i?null:ut.getPrimaries(x.colorSpace),ae=x.colorSpace===_i||$===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const G=x.isCompressedTexture||x.image[0].isCompressedTexture,k=x.image[0]&&x.image[0].isDataTexture,K=[];for(let Z=0;Z<6;Z++)!G&&!k?K[Z]=v(x.image[Z],!0,r.maxCubemapSize):K[Z]=k?x.image[Z].image:x.image[Z],K[Z]=Re(x,K[Z]);const se=K[0],ge=o.convert(x.format,x.colorSpace),fe=o.convert(x.type),Te=b(x.internalFormat,ge,fe,x.colorSpace),B=x.isVideoTexture!==!0,_e=F.__version===void 0||D===!0,pe=N.dataReady;let be=R(x,se);re(n.TEXTURE_CUBE_MAP,x);let z;if(G){B&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Te,se.width,se.height);for(let Z=0;Z<6;Z++){z=K[Z].mipmaps;for(let Se=0;Se<z.length;Se++){const Oe=z[Se];x.format!==mn?ge!==null?B?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Oe.width,Oe.height,ge,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Te,Oe.width,Oe.height,0,Oe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Oe.width,Oe.height,ge,fe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Te,Oe.width,Oe.height,0,ge,fe,Oe.data)}}}else{if(z=x.mipmaps,B&&_e){z.length>0&&be++;const Z=Ue(K[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Te,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(k){B?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,K[Z].width,K[Z].height,ge,fe,K[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Te,K[Z].width,K[Z].height,0,ge,fe,K[Z].data);for(let Se=0;Se<z.length;Se++){const Ie=z[Se].image[Z].image;B?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Ie.width,Ie.height,ge,fe,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Te,Ie.width,Ie.height,0,ge,fe,Ie.data)}}else{B?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge,fe,K[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Te,ge,fe,K[Z]);for(let Se=0;Se<z.length;Se++){const Oe=z[Se];B?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,ge,fe,Oe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Te,ge,fe,Oe.image[Z])}}}f(x)&&h(n.TEXTURE_CUBE_MAP),F.__version=N.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ce(T,x,A,D,N,F){const $=o.convert(A.format,A.colorSpace),q=o.convert(A.type),ae=b(A.internalFormat,$,q,A.colorSpace),G=i.get(x),k=i.get(A);if(k.__renderTarget=x,!G.__hasExternalTextures){const K=Math.max(1,x.width>>F),se=Math.max(1,x.height>>F);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,F,ae,K,se,x.depth,0,$,q,null):t.texImage2D(N,F,ae,K,se,0,$,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),te(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,N,k.__webglTexture,0,me(x)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,N,k.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(T,x,A){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const D=x.depthTexture,N=D&&D.isDepthTexture?D.type:null,F=y(x.stencilBuffer,N),$=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=me(x);te(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,F,x.width,x.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,F,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,F,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,T)}else{const D=x.textures;for(let N=0;N<D.length;N++){const F=D[N],$=o.convert(F.format,F.colorSpace),q=o.convert(F.type),ae=b(F.internalFormat,$,q,F.colorSpace),G=me(x);A&&te(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,G,ae,x.width,x.height):te(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(x.depthTexture);D.__renderTarget=x,(!D.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const N=D.__webglTexture,F=me(x);if(x.depthTexture.format===to)te(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(x.depthTexture.format===no)te(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const x=i.get(T),A=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const D=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),D){const N=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,D.removeEventListener("dispose",N)};D.addEventListener("dispose",N),x.__depthDisposeCallback=N}x.__boundDepthTexture=D}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");const D=T.texture.mipmaps;D&&D.length>0?ye(x.__webglFramebuffer[0],T):ye(x.__webglFramebuffer,T)}else if(A){x.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[D]),x.__webglDepthbuffer[D]===void 0)x.__webglDepthbuffer[D]=n.createRenderbuffer(),de(x.__webglDepthbuffer[D],T,!1);else{const N=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,F)}}else{const D=T.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),de(x.__webglDepthbuffer,T,!1);else{const N=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,F)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(T,x,A){const D=i.get(T);x!==void 0&&ce(D.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&Pe(T)}function Fe(T){const x=T.texture,A=i.get(T),D=i.get(x);T.addEventListener("dispose",C);const N=T.textures,F=T.isWebGLCubeRenderTarget===!0,$=N.length>1;if($||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=x.version,s.memory.textures++),F){A.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[q]=[];for(let ae=0;ae<x.mipmaps.length;ae++)A.__webglFramebuffer[q][ae]=n.createFramebuffer()}else A.__webglFramebuffer[q]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)A.__webglFramebuffer[q]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if($)for(let q=0,ae=N.length;q<ae;q++){const G=i.get(N[q]);G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture(),s.memory.textures++)}if(T.samples>0&&te(T)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let q=0;q<N.length;q++){const ae=N[q];A.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[q]);const G=o.convert(ae.format,ae.colorSpace),k=o.convert(ae.type),K=b(ae.internalFormat,G,k,ae.colorSpace,T.isXRRenderTarget===!0),se=me(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,K,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,A.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),de(A.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),re(n.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)ce(A.__webglFramebuffer[q][ae],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae);else ce(A.__webglFramebuffer[q],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let q=0,ae=N.length;q<ae;q++){const G=N[q],k=i.get(G);let K=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,k.__webglTexture),re(K,G),ce(A.__webglFramebuffer,T,G,n.COLOR_ATTACHMENT0+q,K,0),f(G)&&h(K)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,D.__webglTexture),re(q,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)ce(A.__webglFramebuffer[ae],T,x,n.COLOR_ATTACHMENT0,q,ae);else ce(A.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,q,0);f(x)&&h(q),t.unbindTexture()}T.depthBuffer&&Pe(T)}function qe(T){const x=T.textures;for(let A=0,D=x.length;A<D;A++){const N=x[A];if(f(N)){const F=_(T),$=i.get(N).__webglTexture;t.bindTexture(F,$),h(F),t.unbindTexture()}}}const X=[],Ge=[];function ee(T){if(T.samples>0){if(te(T)===!1){const x=T.textures,A=T.width,D=T.height;let N=n.COLOR_BUFFER_BIT;const F=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(T),q=x.length>1;if(q)for(let G=0;G<x.length;G++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const ae=T.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let G=0;G<x.length;G++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[G]);const k=i.get(x[G]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,A,D,0,0,A,D,N,n.NEAREST),c===!0&&(X.length=0,Ge.length=0,X.push(n.COLOR_ATTACHMENT0+G),T.depthBuffer&&T.resolveDepthBuffer===!1&&(X.push(F),Ge.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let G=0;G<x.length;G++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,$.__webglColorRenderbuffer[G]);const k=i.get(x[G]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,k,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function me(T){return Math.min(r.maxSamples,T.samples)}function te(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(T){const x=s.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Re(T,x){const A=T.colorSpace,D=T.format,N=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||A!==qt&&A!==_i&&(ut.getTransfer(A)===Tt?(D!==mn||N!==Hn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",A)),x}function Ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Be,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=te}function M_(n,e){function t(i,r=_i){let o;const s=ut.getTransfer(r);if(i===Hn)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===id)return n.BYTE;if(i===rd)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===Nl)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Ar)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===ld)return n.RGB;if(i===mn)return n.RGBA;if(i===to)return n.DEPTH_COMPONENT;if(i===no)return n.DEPTH_STENCIL;if(i===Fl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===kl)return n.RG;if(i===Bl)return n.RG_INTEGER;if(i===zl)return n.RGBA_INTEGER;if(i===is||i===rs||i===os||i===ss)if(s===Tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===os)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ss)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===ja||i===Ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Wa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ja)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===qa||i===$a)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ya||i===qa)return s===Tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===$a)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Za||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===ol||i===sl||i===al||i===ll||i===cl||i===ul)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Za)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return s===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===hl||i===fl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===dl)return s===Tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pl||i===ml||i===gl||i===xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===pl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`;class w_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends ki{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",f=new w_,h={},_=t.getContextAttributes();let b=null,y=null;const R=[],M=[],C=new je;let U=null;const E=new en;E.viewport=new gt;const S=new en;S.viewport=new gt;const w=[E,S],P=new km;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=R[V];return Y===void 0&&(Y=new ha,R[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=R[V];return Y===void 0&&(Y=new ha,R[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=R[V];return Y===void 0&&(Y=new ha,R[V]=Y),Y.getHandSpace()};function H(V){const Y=M.indexOf(V.inputSource);if(Y===-1)return;const ce=R[Y];ce!==void 0&&(ce.update(V.inputSource,V.frame,l||s),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let V=0;V<R.length;V++){const Y=M[V];Y!==null&&(M[V]=null,R[V].disconnect(Y))}L=null,O=null,f.reset();for(const V in h)delete h[V];e.setRenderTarget(b),m=null,p=null,d=null,r=null,y=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,de=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?no:to,de=_.stencil?eo:Di);const Pe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};d=this.getBinding(),p=d.createProjectionLayer(Pe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Fi(p.textureWidth,p.textureHeight,{format:mn,type:Hn,depthTexture:new Md(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Fi(m.framebufferWidth,m.framebufferHeight,{format:mn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function J(V){for(let Y=0;Y<V.removed.length;Y++){const ce=V.removed[Y],de=M.indexOf(ce);de>=0&&(M[de]=null,R[de].disconnect(ce))}for(let Y=0;Y<V.added.length;Y++){const ce=V.added[Y];let de=M.indexOf(ce);if(de===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=M.length){M.push(ce),de=Pe;break}else if(M[Pe]===null){M[Pe]=ce,de=Pe;break}if(de===-1)break}const ye=R[de];ye&&ye.connect(ce)}}const j=new Q,ne=new Q;function he(V,Y,ce){j.setFromMatrixPosition(Y.matrixWorld),ne.setFromMatrixPosition(ce.matrixWorld);const de=j.distanceTo(ne),ye=Y.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,Be=ye[14]/(ye[10]-1),Fe=ye[14]/(ye[10]+1),qe=(ye[9]+1)/ye[5],X=(ye[9]-1)/ye[5],Ge=(ye[8]-1)/ye[0],ee=(Pe[8]+1)/Pe[0],me=Be*Ge,te=Be*ee,Me=de/(-Ge+ee),Re=Me*-Ge;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Re),V.translateZ(Me),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ye[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ue=Be+Me,T=Fe+Me,x=me-Re,A=te+(de-Re),D=qe*Fe/T*Ue,N=X*Fe/T*Ue;V.projectionMatrix.makePerspective(x,A,D,N,Ue,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ee(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Y=V.near,ce=V.far;f.texture!==null&&(f.depthNear>0&&(Y=f.depthNear),f.depthFar>0&&(ce=f.depthFar)),P.near=S.near=E.near=Y,P.far=S.far=E.far=ce,(L!==P.near||O!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,O=P.far),P.layers.mask=V.layers.mask|6,E.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const de=V.parent,ye=P.cameras;Ee(P,de);for(let Pe=0;Pe<ye.length;Pe++)Ee(ye[Pe],de);ye.length===2?he(P,E,S):P.projectionMatrix.copy(E.projectionMatrix),re(V,P,de)};function re(V,Y,ce){ce===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(V){c=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(P)},this.getCameraTexture=function(V){return h[V]};let oe=null;function we(V,Y){if(u=Y.getViewerPose(l||s),g=Y,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let de=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let Fe=0;Fe<ce.length;Fe++){const qe=ce[Fe];let X=null;if(m!==null)X=m.getViewport(qe);else{const ee=d.getViewSubImage(p,qe);X=ee.viewport,Fe===0&&(e.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(y))}let Ge=w[Fe];Ge===void 0&&(Ge=new en,Ge.layers.enable(Fe),Ge.viewport=new gt,w[Fe]=Ge),Ge.matrix.fromArray(qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(X.x,X.y,X.width,X.height),Fe===0&&(P.matrix.copy(Ge.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),de===!0&&P.cameras.push(Ge)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Fe=d.getDepthInformation(ce[0]);Fe&&Fe.isValid&&Fe.texture&&f.init(Fe,r.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Fe=0;Fe<ce.length;Fe++){const qe=ce[Fe].camera;if(qe){let X=h[qe];X||(X=new Ad,h[qe]=X);const Ge=d.getCameraImage(qe);X.sourceTexture=Ge}}}}for(let ce=0;ce<R.length;ce++){const de=M[ce],ye=R[ce];de!==null&&ye!==void 0&&ye.update(de,Y,l||s)}oe&&oe(V,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ie=new Od;ie.setAnimationLoop(we),this.setAnimationLoop=function(V){oe=V},this.dispose=function(){}}}const Li=new Fn,P_=new at;function L_(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,xd(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,_,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(f,h):h.isMeshToonMaterial?(o(f,h),d(f,h)):h.isMeshPhongMaterial?(o(f,h),u(f,h)):h.isMeshStandardMaterial?(o(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,y)):h.isMeshMatcapMaterial?(o(f,h),g(f,h)):h.isMeshDepthMaterial?o(f,h):h.isMeshDistanceMaterial?(o(f,h),v(f,h)):h.isMeshNormalMaterial?o(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,_,b):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Yt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Yt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const _=e.get(h),b=_.envMap,y=_.envMapRotation;b&&(f.envMap.value=b,Li.copy(y),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),f.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Li)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,_,b){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*_,f.scale.value=b*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,_){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const _=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I_(n,e,t,i){let r={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){const y=b.program;i.uniformBlockBinding(_,y)}function l(_,b){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",f));const R=b.program;i.updateUBOMapping(_,R);const M=e.render.frame;o[_.id]!==M&&(p(_),o[_.id]=M)}function u(_){const b=d();_.__bindingPointIndex=b;const y=n.createBuffer(),R=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const b=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,C=y.length;M<C;M++){const U=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,S=U.length;E<S;E++){const w=U[E];if(m(w,M,E,R)===!0){const P=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let H=0;H<L.length;H++){const W=L[H],J=v(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,P+O,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,b,y,R){const M=_.value,C=b+"_"+y;if(R[C]===void 0)return typeof M=="number"||typeof M=="boolean"?R[C]=M:R[C]=M.clone(),!0;{const U=R[C];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return R[C]=M,!0}else if(U.equals(M)===!1)return U.copy(M),!0}return!1}function g(_){const b=_.uniforms;let y=0;const R=16;for(let C=0,U=b.length;C<U;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,w=E.length;S<w;S++){const P=E[S],L=Array.isArray(P.value)?P.value:[P.value];for(let O=0,H=L.length;O<H;O++){const W=L[O],J=v(W),j=y%R,ne=j%J.boundary,he=j+ne;y+=ne,he!==0&&R-he<J.storage&&(y+=R-he),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=J.storage}}}const M=y%R;return M>0&&(y+=R-M),_.__size=y,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",_),b}function f(_){const b=_.target;b.removeEventListener("dispose",f);const y=s.indexOf(b.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:c,update:l,dispose:h}}const N_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Qn=null;function O_(){return Qn===null&&(Qn=new go(N_,32,32,kl,Ar),Qn.minFilter=tn,Qn.magFilter=tn,Qn.wrapS=an,Qn.wrapT=an,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class D_{constructor(e={}){const{canvas:t=ep(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Set([zl,Bl,Ul]),v=new Set([Hn,Di,Qr,eo,Ol,Dl]),f=new Uint32Array(4),h=new Int32Array(4);let _=null,b=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=vt;let U=0,E=0,S=null,w=-1,P=null;const L=new gt,O=new gt;let H=null;const W=new Ye(0);let J=0,j=t.width,ne=t.height,he=1,Ee=null,re=null;const oe=new gt(0,0,j,ne),we=new gt(0,0,j,ne);let ie=!1;const V=new Xl;let Y=!1,ce=!1;const de=new at,ye=new Q,Pe=new gt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function qe(){return S===null?he:1}let X=i;function Ge(I,le){return t.getContext(I,le)}try{const I={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",z,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Se,!1),X===null){const le="webgl2";if(X=Ge(le,I),X===null)throw Ge(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw I("WebGLRenderer: "+I.message),I}let ee,me,te,Me,Re,Ue,T,x,A,D,N,F,$,q,ae,G,k,K,se,ge,fe,Te,B,_e;function pe(){ee=new Hx(X),ee.init(),Te=new M_(X,ee),me=new Ox(X,ee,e,Te),te=new E_(X,ee),me.reversedDepthBuffer&&p&&te.buffers.depth.setReversed(!0),Me=new jx(X),Re=new u_,Ue=new S_(X,ee,te,Re,me,Te,Me),T=new Fx(M),x=new Gx(M),A=new $m(X),B=new Ix(X,A),D=new Wx(X,A,Me,B),N=new Yx(X,D,A,Me),se=new Kx(X,me,Ue),G=new Dx(Re),F=new c_(M,T,x,ee,me,B,G),$=new L_(M,Re),q=new h_,ae=new v_(ee),K=new Lx(M,T,x,te,N,m,c),k=new b_(M,N,me),_e=new I_(X,Me,me,te),ge=new Nx(X,ee,Me),fe=new Xx(X,ee,Me),Me.programs=F.programs,M.capabilities=me,M.extensions=ee,M.properties=Re,M.renderLists=q,M.shadowMap=k,M.state=te,M.info=Me}pe();const be=new C_(M,X);this.xr=be,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const I=ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(I){I!==void 0&&(he=I,this.setSize(j,ne,!1))},this.getSize=function(I){return I.set(j,ne)},this.setSize=function(I,le,xe=!0){if(be.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}j=I,ne=le,t.width=Math.floor(I*he),t.height=Math.floor(le*he),xe===!0&&(t.style.width=I+"px",t.style.height=le+"px"),this.setViewport(0,0,I,le)},this.getDrawingBufferSize=function(I){return I.set(j*he,ne*he).floor()},this.setDrawingBufferSize=function(I,le,xe){j=I,ne=le,he=xe,t.width=Math.floor(I*xe),t.height=Math.floor(le*xe),this.setViewport(0,0,I,le)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(oe)},this.setViewport=function(I,le,xe,ve){I.isVector4?oe.set(I.x,I.y,I.z,I.w):oe.set(I,le,xe,ve),te.viewport(L.copy(oe).multiplyScalar(he).round())},this.getScissor=function(I){return I.copy(we)},this.setScissor=function(I,le,xe,ve){I.isVector4?we.set(I.x,I.y,I.z,I.w):we.set(I,le,xe,ve),te.scissor(O.copy(we).multiplyScalar(he).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(I){te.setScissorTest(ie=I)},this.setOpaqueSort=function(I){Ee=I},this.setTransparentSort=function(I){re=I},this.getClearColor=function(I){return I.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(I=!0,le=!0,xe=!0){let ve=0;if(I){let ue=!1;if(S!==null){const ke=S.texture.format;ue=g.has(ke)}if(ue){const ke=S.texture.type,Ve=v.has(ke),Xe=K.getClearColor(),He=K.getClearAlpha(),Qe=Xe.r,et=Xe.g,$e=Xe.b;Ve?(f[0]=Qe,f[1]=et,f[2]=$e,f[3]=He,X.clearBufferuiv(X.COLOR,0,f)):(h[0]=Qe,h[1]=et,h[2]=$e,h[3]=He,X.clearBufferiv(X.COLOR,0,h))}else ve|=X.COLOR_BUFFER_BIT}le&&(ve|=X.DEPTH_BUFFER_BIT),xe&&(ve|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),K.dispose(),q.dispose(),ae.dispose(),Re.dispose(),T.dispose(),x.dispose(),N.dispose(),B.dispose(),_e.dispose(),F.dispose(),be.dispose(),be.removeEventListener("sessionstart",We),be.removeEventListener("sessionend",pt),kt.stop()};function z(I){I.preventDefault(),ps("WebGLRenderer: Context Lost."),C=!0}function Z(){ps("WebGLRenderer: Context Restored."),C=!1;const I=Me.autoReset,le=k.enabled,xe=k.autoUpdate,ve=k.needsUpdate,ue=k.type;pe(),Me.autoReset=I,k.enabled=le,k.autoUpdate=xe,k.needsUpdate=ve,k.type=ue}function Se(I){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Oe(I){const le=I.target;le.removeEventListener("dispose",Oe),Ie(le)}function Ie(I){Ce(I),Re.remove(I)}function Ce(I){const le=Re.get(I).programs;le!==void 0&&(le.forEach(function(xe){F.releaseProgram(xe)}),I.isShaderMaterial&&F.releaseShaderCache(I))}this.renderBufferDirect=function(I,le,xe,ve,ue,ke){le===null&&(le=Be);const Ve=ue.isMesh&&ue.matrixWorld.determinant()<0,Xe=Os(I,le,xe,ve,ue);te.setMaterial(ve,Ve);let He=xe.index,Qe=1;if(ve.wireframe===!0){if(He=D.getWireframeAttribute(xe),He===void 0)return;Qe=2}const et=xe.drawRange,$e=xe.attributes.position;let ft=et.start*Qe,bt=(et.start+et.count)*Qe;ke!==null&&(ft=Math.max(ft,ke.start*Qe),bt=Math.min(bt,(ke.start+ke.count)*Qe)),He!==null?(ft=Math.max(ft,0),bt=Math.min(bt,He.count)):$e!=null&&(ft=Math.max(ft,0),bt=Math.min(bt,$e.count));const Lt=bt-ft;if(Lt<0||Lt===1/0)return;B.setup(ue,ve,Xe,xe,He);let It,Mt=ge;if(He!==null&&(It=A.get(He),Mt=fe,Mt.setIndex(It)),ue.isMesh)ve.wireframe===!0?(te.setLineWidth(ve.wireframeLinewidth*qe()),Mt.setMode(X.LINES)):Mt.setMode(X.TRIANGLES);else if(ue.isLine){let Je=ve.linewidth;Je===void 0&&(Je=1),te.setLineWidth(Je*qe()),ue.isLineSegments?Mt.setMode(X.LINES):ue.isLineLoop?Mt.setMode(X.LINE_LOOP):Mt.setMode(X.LINE_STRIP)}else ue.isPoints?Mt.setMode(X.POINTS):ue.isSprite&&Mt.setMode(X.TRIANGLES);if(ue.isBatchedMesh)if(ue._multiDrawInstances!==null)so("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount,ue._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Je=ue._multiDrawStarts,wt=ue._multiDrawCounts,mt=ue._multiDrawCount,ln=He?A.get(He).bytesPerElement:1,Gi=Re.get(ve).currentProgram.getUniforms();for(let cn=0;cn<mt;cn++)Gi.setValue(X,"_gl_DrawID",cn),Mt.render(Je[cn]/ln,wt[cn])}else if(ue.isInstancedMesh)Mt.renderInstances(ft,Lt,ue.count);else if(xe.isInstancedBufferGeometry){const Je=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,wt=Math.min(xe.instanceCount,Je);Mt.renderInstances(ft,Lt,wt)}else Mt.render(ft,Lt)};function Le(I,le,xe){I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=Yt,I.needsUpdate=!0,Vi(I,le,xe),I.side=Gn,I.needsUpdate=!0,Vi(I,le,xe),I.side=yn):Vi(I,le,xe)}this.compile=function(I,le,xe=null){xe===null&&(xe=I),b=ae.get(xe),b.init(le),R.push(b),xe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(le.layers)&&(b.pushLight(ue),ue.castShadow&&b.pushShadow(ue))}),I!==xe&&I.traverseVisible(function(ue){ue.isLight&&ue.layers.test(le.layers)&&(b.pushLight(ue),ue.castShadow&&b.pushShadow(ue))}),b.setupLights();const ve=new Set;return I.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const ke=ue.material;if(ke)if(Array.isArray(ke))for(let Ve=0;Ve<ke.length;Ve++){const Xe=ke[Ve];Le(Xe,xe,ue),ve.add(Xe)}else Le(ke,xe,ue),ve.add(ke)}),b=R.pop(),ve},this.compileAsync=function(I,le,xe=null){const ve=this.compile(I,le,xe);return new Promise(ue=>{function ke(){if(ve.forEach(function(Ve){Re.get(Ve).currentProgram.isReady()&&ve.delete(Ve)}),ve.size===0){ue(I);return}setTimeout(ke,10)}ee.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ne=null;function De(I){Ne&&Ne(I)}function We(){kt.stop()}function pt(){kt.start()}const kt=new Od;kt.setAnimationLoop(De),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(I){Ne=I,be.setAnimationLoop(I),I===null?kt.stop():kt.start()},be.addEventListener("sessionstart",We),be.addEventListener("sessionend",pt),this.render=function(I,le){if(le!==void 0&&le.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(le),le=be.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,le,S),b=ae.get(I,R.length),b.init(le),R.push(b),de.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),V.setFromProjectionMatrix(de,Vn,le.reversedDepth),ce=this.localClippingEnabled,Y=G.init(this.clippingPlanes,ce),_=q.get(I,y.length),_.init(),y.push(_),be.enabled===!0&&be.isPresenting===!0){const ke=M.xr.getDepthSensingMesh();ke!==null&&Xt(ke,le,-1/0,M.sortObjects)}Xt(I,le,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Ee,re),Fe=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Fe&&K.addToRenderList(_,I),this.info.render.frame++,Y===!0&&G.beginShadows();const xe=b.state.shadowsArray;k.render(xe,I,le),Y===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const ve=_.opaque,ue=_.transmissive;if(b.setupLights(),le.isArrayCamera){const ke=le.cameras;if(ue.length>0)for(let Ve=0,Xe=ke.length;Ve<Xe;Ve++){const He=ke[Ve];zi(ve,ue,I,He)}Fe&&K.render(I);for(let Ve=0,Xe=ke.length;Ve<Xe;Ve++){const He=ke[Ve];kn(_,I,He,He.viewport)}}else ue.length>0&&zi(ve,ue,I,le),Fe&&K.render(I),kn(_,I,le);S!==null&&E===0&&(Ue.updateMultisampleRenderTarget(S),Ue.updateRenderTargetMipmap(S)),I.isScene===!0&&I.onAfterRender(M,I,le),B.resetDefaultState(),w=-1,P=null,R.pop(),R.length>0?(b=R[R.length-1],Y===!0&&G.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,y.pop(),y.length>0?_=y[y.length-1]:_=null};function Xt(I,le,xe,ve){if(I.visible===!1)return;if(I.layers.test(le.layers)){if(I.isGroup)xe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(le);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||V.intersectsSprite(I)){ve&&Pe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(de);const Ve=N.update(I),Xe=I.material;Xe.visible&&_.push(I,Ve,Xe,xe,Pe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||V.intersectsObject(I))){const Ve=N.update(I),Xe=I.material;if(ve&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Pe.copy(I.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Pe.copy(Ve.boundingSphere.center)),Pe.applyMatrix4(I.matrixWorld).applyMatrix4(de)),Array.isArray(Xe)){const He=Ve.groups;for(let Qe=0,et=He.length;Qe<et;Qe++){const $e=He[Qe],ft=Xe[$e.materialIndex];ft&&ft.visible&&_.push(I,Ve,ft,xe,Pe.z,$e)}}else Xe.visible&&_.push(I,Ve,Xe,xe,Pe.z,null)}}const ke=I.children;for(let Ve=0,Xe=ke.length;Ve<Xe;Ve++)Xt(ke[Ve],le,xe,ve)}function kn(I,le,xe,ve){const{opaque:ue,transmissive:ke,transparent:Ve}=I;b.setupLightsView(xe),Y===!0&&G.setGlobalState(M.clippingPlanes,xe),ve&&te.viewport(L.copy(ve)),ue.length>0&&ai(ue,le,xe),ke.length>0&&ai(ke,le,xe),Ve.length>0&&ai(Ve,le,xe),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function zi(I,le,xe,ve){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[ve.id]===void 0&&(b.state.transmissionRenderTarget[ve.id]=new Fi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ar:Hn,minFilter:ni,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ke=b.state.transmissionRenderTarget[ve.id],Ve=ve.viewport||L;ke.setSize(Ve.z*M.transmissionResolutionScale,Ve.w*M.transmissionResolutionScale);const Xe=M.getRenderTarget(),He=M.getActiveCubeFace(),Qe=M.getActiveMipmapLevel();M.setRenderTarget(ke),M.getClearColor(W),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Fe&&K.render(xe);const et=M.toneMapping;M.toneMapping=bi;const $e=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),b.setupLightsView(ve),Y===!0&&G.setGlobalState(M.clippingPlanes,ve),ai(I,xe,ve),Ue.updateMultisampleRenderTarget(ke),Ue.updateRenderTargetMipmap(ke),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let bt=0,Lt=le.length;bt<Lt;bt++){const It=le[bt],{object:Mt,geometry:Je,material:wt,group:mt}=It;if(wt.side===yn&&Mt.layers.test(ve.layers)){const ln=wt.side;wt.side=Yt,wt.needsUpdate=!0,bo(Mt,xe,ve,Je,wt,mt),wt.side=ln,wt.needsUpdate=!0,ft=!0}}ft===!0&&(Ue.updateMultisampleRenderTarget(ke),Ue.updateRenderTargetMipmap(ke))}M.setRenderTarget(Xe,He,Qe),M.setClearColor(W,J),$e!==void 0&&(ve.viewport=$e),M.toneMapping=et}function ai(I,le,xe){const ve=le.isScene===!0?le.overrideMaterial:null;for(let ue=0,ke=I.length;ue<ke;ue++){const Ve=I[ue],{object:Xe,geometry:He,group:Qe}=Ve;let et=Ve.material;et.allowOverride===!0&&ve!==null&&(et=ve),Xe.layers.test(xe.layers)&&bo(Xe,le,xe,He,et,Qe)}}function bo(I,le,xe,ve,ue,ke){I.onBeforeRender(M,le,xe,ve,ue,ke),I.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ue.onBeforeRender(M,le,xe,ve,I,ke),ue.transparent===!0&&ue.side===yn&&ue.forceSinglePass===!1?(ue.side=Yt,ue.needsUpdate=!0,M.renderBufferDirect(xe,le,ve,ue,I,ke),ue.side=Gn,ue.needsUpdate=!0,M.renderBufferDirect(xe,le,ve,ue,I,ke),ue.side=yn):M.renderBufferDirect(xe,le,ve,ue,I,ke),I.onAfterRender(M,le,xe,ve,ue,ke)}function Vi(I,le,xe){le.isScene!==!0&&(le=Be);const ve=Re.get(I),ue=b.state.lights,ke=b.state.shadowsArray,Ve=ue.state.version,Xe=F.getParameters(I,ue.state,ke,le,xe),He=F.getProgramCacheKey(Xe);let Qe=ve.programs;ve.environment=I.isMeshStandardMaterial?le.environment:null,ve.fog=le.fog,ve.envMap=(I.isMeshStandardMaterial?x:T).get(I.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&I.envMap===null?le.environmentRotation:I.envMapRotation,Qe===void 0&&(I.addEventListener("dispose",Oe),Qe=new Map,ve.programs=Qe);let et=Qe.get(He);if(et!==void 0){if(ve.currentProgram===et&&ve.lightsStateVersion===Ve)return Eo(I,Xe),et}else Xe.uniforms=F.getUniforms(I),I.onBeforeCompile(Xe,M),et=F.acquireProgram(Xe,He),Qe.set(He,et),ve.uniforms=Xe.uniforms;const $e=ve.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&($e.clippingPlanes=G.uniform),Eo(I,Xe),ve.needsLights=Fs(I),ve.lightsStateVersion=Ve,ve.needsLights&&($e.ambientLightColor.value=ue.state.ambient,$e.lightProbe.value=ue.state.probe,$e.directionalLights.value=ue.state.directional,$e.directionalLightShadows.value=ue.state.directionalShadow,$e.spotLights.value=ue.state.spot,$e.spotLightShadows.value=ue.state.spotShadow,$e.rectAreaLights.value=ue.state.rectArea,$e.ltc_1.value=ue.state.rectAreaLTC1,$e.ltc_2.value=ue.state.rectAreaLTC2,$e.pointLights.value=ue.state.point,$e.pointLightShadows.value=ue.state.pointShadow,$e.hemisphereLights.value=ue.state.hemi,$e.directionalShadowMap.value=ue.state.directionalShadowMap,$e.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,$e.spotShadowMap.value=ue.state.spotShadowMap,$e.spotLightMatrix.value=ue.state.spotLightMatrix,$e.spotLightMap.value=ue.state.spotLightMap,$e.pointShadowMap.value=ue.state.pointShadowMap,$e.pointShadowMatrix.value=ue.state.pointShadowMatrix),ve.currentProgram=et,ve.uniformsList=null,et}function To(I){if(I.uniformsList===null){const le=I.currentProgram.getUniforms();I.uniformsList=ls.seqWithValue(le.seq,I.uniforms)}return I.uniformsList}function Eo(I,le){const xe=Re.get(I);xe.outputColorSpace=le.outputColorSpace,xe.batching=le.batching,xe.batchingColor=le.batchingColor,xe.instancing=le.instancing,xe.instancingColor=le.instancingColor,xe.instancingMorph=le.instancingMorph,xe.skinning=le.skinning,xe.morphTargets=le.morphTargets,xe.morphNormals=le.morphNormals,xe.morphColors=le.morphColors,xe.morphTargetsCount=le.morphTargetsCount,xe.numClippingPlanes=le.numClippingPlanes,xe.numIntersection=le.numClipIntersection,xe.vertexAlphas=le.vertexAlphas,xe.vertexTangents=le.vertexTangents,xe.toneMapping=le.toneMapping}function Os(I,le,xe,ve,ue){le.isScene!==!0&&(le=Be),Ue.resetTextureUnits();const ke=le.fog,Ve=ve.isMeshStandardMaterial?le.environment:null,Xe=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:qt,He=(ve.isMeshStandardMaterial?x:T).get(ve.envMap||Ve),Qe=ve.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,et=!!xe.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),$e=!!xe.morphAttributes.position,ft=!!xe.morphAttributes.normal,bt=!!xe.morphAttributes.color;let Lt=bi;ve.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Lt=M.toneMapping);const It=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,Mt=It!==void 0?It.length:0,Je=Re.get(ve),wt=b.state.lights;if(Y===!0&&(ce===!0||I!==P)){const $t=I===P&&ve.id===w;G.setState(ve,I,$t)}let mt=!1;ve.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==wt.state.version||Je.outputColorSpace!==Xe||ue.isBatchedMesh&&Je.batching===!1||!ue.isBatchedMesh&&Je.batching===!0||ue.isBatchedMesh&&Je.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&Je.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&Je.instancing===!1||!ue.isInstancedMesh&&Je.instancing===!0||ue.isSkinnedMesh&&Je.skinning===!1||!ue.isSkinnedMesh&&Je.skinning===!0||ue.isInstancedMesh&&Je.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&Je.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&Je.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&Je.instancingMorph===!1&&ue.morphTexture!==null||Je.envMap!==He||ve.fog===!0&&Je.fog!==ke||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==G.numPlanes||Je.numIntersection!==G.numIntersection)||Je.vertexAlphas!==Qe||Je.vertexTangents!==et||Je.morphTargets!==$e||Je.morphNormals!==ft||Je.morphColors!==bt||Je.toneMapping!==Lt||Je.morphTargetsCount!==Mt)&&(mt=!0):(mt=!0,Je.__version=ve.version);let ln=Je.currentProgram;mt===!0&&(ln=Vi(ve,le,ue));let Gi=!1,cn=!1,Lr=!1;const Ct=ln.getUniforms(),rn=Je.uniforms;if(te.useProgram(ln.program)&&(Gi=!0,cn=!0,Lr=!0),ve.id!==w&&(w=ve.id,cn=!0),Gi||P!==I){te.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ct.setValue(X,"projectionMatrix",I.projectionMatrix),Ct.setValue(X,"viewMatrix",I.matrixWorldInverse);const on=Ct.map.cameraPosition;on!==void 0&&on.setValue(X,ye.setFromMatrixPosition(I.matrixWorld)),me.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),P!==I&&(P=I,cn=!0,Lr=!0)}if(ue.isSkinnedMesh){Ct.setOptional(X,ue,"bindMatrix"),Ct.setOptional(X,ue,"bindMatrixInverse");const $t=ue.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ct.setValue(X,"boneTexture",$t.boneTexture,Ue))}ue.isBatchedMesh&&(Ct.setOptional(X,ue,"batchingTexture"),Ct.setValue(X,"batchingTexture",ue._matricesTexture,Ue),Ct.setOptional(X,ue,"batchingIdTexture"),Ct.setValue(X,"batchingIdTexture",ue._indirectTexture,Ue),Ct.setOptional(X,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Ct.setValue(X,"batchingColorTexture",ue._colorsTexture,Ue));const xn=xe.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&se.update(ue,xe,ln),(cn||Je.receiveShadow!==ue.receiveShadow)&&(Je.receiveShadow=ue.receiveShadow,Ct.setValue(X,"receiveShadow",ue.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(rn.envMap.value=He,rn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&le.environment!==null&&(rn.envMapIntensity.value=le.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=O_()),cn&&(Ct.setValue(X,"toneMappingExposure",M.toneMappingExposure),Je.needsLights&&Ds(rn,Lr),ke&&ve.fog===!0&&$.refreshFogUniforms(rn,ke),$.refreshMaterialUniforms(rn,ve,he,ne,b.state.transmissionRenderTarget[I.id]),ls.upload(X,To(Je),rn,Ue)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(ls.upload(X,To(Je),rn,Ue),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Ct.setValue(X,"center",ue.center),Ct.setValue(X,"modelViewMatrix",ue.modelViewMatrix),Ct.setValue(X,"normalMatrix",ue.normalMatrix),Ct.setValue(X,"modelMatrix",ue.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const $t=ve.uniformsGroups;for(let on=0,zs=$t.length;on<zs;on++){const Ei=$t[on];_e.update(Ei,ln),_e.bind(Ei,ln)}}return ln}function Ds(I,le){I.ambientLightColor.needsUpdate=le,I.lightProbe.needsUpdate=le,I.directionalLights.needsUpdate=le,I.directionalLightShadows.needsUpdate=le,I.pointLights.needsUpdate=le,I.pointLightShadows.needsUpdate=le,I.spotLights.needsUpdate=le,I.spotLightShadows.needsUpdate=le,I.rectAreaLights.needsUpdate=le,I.hemisphereLights.needsUpdate=le}function Fs(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(I,le,xe){const ve=Re.get(I);ve.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ve.__autoAllocateDepthBuffer===!1&&(ve.__useRenderToTexture=!1),Re.get(I.texture).__webglTexture=le,Re.get(I.depthTexture).__webglTexture=ve.__autoAllocateDepthBuffer?void 0:xe,ve.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,le){const xe=Re.get(I);xe.__webglFramebuffer=le,xe.__useDefaultFramebuffer=le===void 0};const Us=X.createFramebuffer();this.setRenderTarget=function(I,le=0,xe=0){S=I,U=le,E=xe;let ve=!0,ue=null,ke=!1,Ve=!1;if(I){const He=Re.get(I);if(He.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(X.FRAMEBUFFER,null),ve=!1;else if(He.__webglFramebuffer===void 0)Ue.setupRenderTarget(I);else if(He.__hasExternalTextures)Ue.rebindTextures(I,Re.get(I.texture).__webglTexture,Re.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const $e=I.depthTexture;if(He.__boundDepthTexture!==$e){if($e!==null&&Re.has($e)&&(I.width!==$e.image.width||I.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(I)}}const Qe=I.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ve=!0);const et=Re.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(et[le])?ue=et[le][xe]:ue=et[le],ke=!0):I.samples>0&&Ue.useMultisampledRTT(I)===!1?ue=Re.get(I).__webglMultisampledFramebuffer:Array.isArray(et)?ue=et[xe]:ue=et,L.copy(I.viewport),O.copy(I.scissor),H=I.scissorTest}else L.copy(oe).multiplyScalar(he).floor(),O.copy(we).multiplyScalar(he).floor(),H=ie;if(xe!==0&&(ue=Us),te.bindFramebuffer(X.FRAMEBUFFER,ue)&&ve&&te.drawBuffers(I,ue),te.viewport(L),te.scissor(O),te.setScissorTest(H),ke){const He=Re.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+le,He.__webglTexture,xe)}else if(Ve){const He=le;for(let Qe=0;Qe<I.textures.length;Qe++){const et=Re.get(I.textures[Qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Qe,et.__webglTexture,xe,He)}}else if(I!==null&&xe!==0){const He=Re.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,He.__webglTexture,xe)}w=-1},this.readRenderTargetPixels=function(I,le,xe,ve,ue,ke,Ve,Xe=0){if(!(I&&I.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He){te.bindFramebuffer(X.FRAMEBUFFER,He);try{const Qe=I.textures[Xe],et=Qe.format,$e=Qe.type;if(!me.textureFormatReadable(et)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable($e)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}le>=0&&le<=I.width-ve&&xe>=0&&xe<=I.height-ue&&(I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Xe),X.readPixels(le,xe,ve,ue,Te.convert(et),Te.convert($e),ke))}finally{const Qe=S!==null?Re.get(S).__webglFramebuffer:null;te.bindFramebuffer(X.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(I,le,xe,ve,ue,ke,Ve,Xe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He)if(le>=0&&le<=I.width-ve&&xe>=0&&xe<=I.height-ue){te.bindFramebuffer(X.FRAMEBUFFER,He);const Qe=I.textures[Xe],et=Qe.format,$e=Qe.type;if(!me.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.bufferData(X.PIXEL_PACK_BUFFER,ke.byteLength,X.STREAM_READ),I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Xe),X.readPixels(le,xe,ve,ue,Te.convert(et),Te.convert($e),0);const bt=S!==null?Re.get(S).__webglFramebuffer:null;te.bindFramebuffer(X.FRAMEBUFFER,bt);const Lt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tp(X,Lt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ke),X.deleteBuffer(ft),X.deleteSync(Lt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,le=null,xe=0){const ve=Math.pow(2,-xe),ue=Math.floor(I.image.width*ve),ke=Math.floor(I.image.height*ve),Ve=le!==null?le.x:0,Xe=le!==null?le.y:0;Ue.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,xe,0,0,Ve,Xe,ue,ke),te.unbindTexture()};const ks=X.createFramebuffer(),Bs=X.createFramebuffer();this.copyTextureToTexture=function(I,le,xe=null,ve=null,ue=0,ke=null){ke===null&&(ue!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ke=ue,ue=0):ke=0);let Ve,Xe,He,Qe,et,$e,ft,bt,Lt;const It=I.isCompressedTexture?I.mipmaps[ke]:I.image;if(xe!==null)Ve=xe.max.x-xe.min.x,Xe=xe.max.y-xe.min.y,He=xe.isBox3?xe.max.z-xe.min.z:1,Qe=xe.min.x,et=xe.min.y,$e=xe.isBox3?xe.min.z:0;else{const xn=Math.pow(2,-ue);Ve=Math.floor(It.width*xn),Xe=Math.floor(It.height*xn),I.isDataArrayTexture?He=It.depth:I.isData3DTexture?He=Math.floor(It.depth*xn):He=1,Qe=0,et=0,$e=0}ve!==null?(ft=ve.x,bt=ve.y,Lt=ve.z):(ft=0,bt=0,Lt=0);const Mt=Te.convert(le.format),Je=Te.convert(le.type);let wt;le.isData3DTexture?(Ue.setTexture3D(le,0),wt=X.TEXTURE_3D):le.isDataArrayTexture||le.isCompressedArrayTexture?(Ue.setTexture2DArray(le,0),wt=X.TEXTURE_2D_ARRAY):(Ue.setTexture2D(le,0),wt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,le.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,le.unpackAlignment);const mt=X.getParameter(X.UNPACK_ROW_LENGTH),ln=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Gi=X.getParameter(X.UNPACK_SKIP_PIXELS),cn=X.getParameter(X.UNPACK_SKIP_ROWS),Lr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,It.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,It.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qe),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,$e);const Ct=I.isDataArrayTexture||I.isData3DTexture,rn=le.isDataArrayTexture||le.isData3DTexture;if(I.isDepthTexture){const xn=Re.get(I),$t=Re.get(le),on=Re.get(xn.__renderTarget),zs=Re.get($t.__renderTarget);te.bindFramebuffer(X.READ_FRAMEBUFFER,on.__webglFramebuffer),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let Ei=0;Ei<He;Ei++)Ct&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,ue,$e+Ei),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Re.get(le).__webglTexture,ke,Lt+Ei)),X.blitFramebuffer(Qe,et,Ve,Xe,ft,bt,Ve,Xe,X.DEPTH_BUFFER_BIT,X.NEAREST);te.bindFramebuffer(X.READ_FRAMEBUFFER,null),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ue!==0||I.isRenderTargetTexture||Re.has(I)){const xn=Re.get(I),$t=Re.get(le);te.bindFramebuffer(X.READ_FRAMEBUFFER,ks),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bs);for(let on=0;on<He;on++)Ct?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,xn.__webglTexture,ue,$e+on):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,xn.__webglTexture,ue),rn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,ke,Lt+on):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$t.__webglTexture,ke),ue!==0?X.blitFramebuffer(Qe,et,Ve,Xe,ft,bt,Ve,Xe,X.COLOR_BUFFER_BIT,X.NEAREST):rn?X.copyTexSubImage3D(wt,ke,ft,bt,Lt+on,Qe,et,Ve,Xe):X.copyTexSubImage2D(wt,ke,ft,bt,Qe,et,Ve,Xe);te.bindFramebuffer(X.READ_FRAMEBUFFER,null),te.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else rn?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(wt,ke,ft,bt,Lt,Ve,Xe,He,Mt,Je,It.data):le.isCompressedArrayTexture?X.compressedTexSubImage3D(wt,ke,ft,bt,Lt,Ve,Xe,He,Mt,It.data):X.texSubImage3D(wt,ke,ft,bt,Lt,Ve,Xe,He,Mt,Je,It):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ke,ft,bt,Ve,Xe,Mt,Je,It.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ke,ft,bt,It.width,It.height,Mt,It.data):X.texSubImage2D(X.TEXTURE_2D,ke,ft,bt,Ve,Xe,Mt,Je,It);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ln),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Gi),X.pixelStorei(X.UNPACK_SKIP_ROWS,cn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Lr),ke===0&&le.generateMipmaps&&X.generateMipmap(wt),te.unbindTexture()},this.initRenderTarget=function(I){Re.get(I).__webglFramebuffer===void 0&&Ue.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ue.setTextureCube(I,0):I.isData3DTexture?Ue.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ue.setTexture2DArray(I,0):Ue.setTexture2D(I,0),te.unbindTexture()},this.resetState=function(){U=0,E=0,S=null,te.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const Uu={type:"change"},tc={type:"start"},Bd={type:"end"},Qo=new mo,ku=new xi,F_=Math.cos(70*gi.DEG2RAD),zt=new Q,sn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class U_ extends Ym{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Sn,this._lastTargetPosition=new Q,this._quat=new Sn().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hu,this._sphericalDelta=new hu,this._scale=1,this._panOffset=new Q,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Q,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B_.bind(this),this._onPointerDown=k_.bind(this),this._onPointerUp=z_.bind(this),this._onContextMenu=K_.bind(this),this._onMouseWheel=H_.bind(this),this._onKeyDown=W_.bind(this),this._onTouchStart=X_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=G_.bind(this),this._interceptControlDown=Y_.bind(this),this._interceptControlUp=q_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uu),this.update(),this.state=Et.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=zt.length();s=this._clampDistance(a*this._scale);const c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new Q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Qo.origin.copy(this.object.position),Qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qo.direction))<F_?this.object.lookAt(this.target):(ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qo.intersectPlane(ku,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(Uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;zt.copy(r).sub(this.target);let o=zt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function k_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function B_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function z_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bd),this.state=Et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function V_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case cr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case cr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(tc)}function G_(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function H_(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(tc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bd))}function W_(n){this.enabled!==!1&&this._handleKeyDown(n)}function X_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(tc)}function j_(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function K_(n){this.enabled!==!1&&n.preventDefault()}function Y_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Aa=new WeakMap;class $_ extends pn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const o=new Sr(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,s=>{this.parse(s,t,r)},i,r)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,vt,i).catch(i)}decodeDracoFile(e,t,i,r,o=qt,s=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:o};return this.decodeGeometry(e,a).then(t).catch(s)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Aa.has(e)){const c=Aa.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const o=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(o,s).then(c=>(r=c,new Promise((l,u)=>{r._callbacks[o]={resolve:l,reject:u},r.postMessage({type:"decode",id:o,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{r&&o&&this._releaseTask(r,o)}),Aa.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Ot;e.index&&t.setIndex(new Ft(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:r,array:o,itemSize:s,stride:a,vertexColorSpace:c}=e.attributes[i];let l;if(s===a)l=new Ft(o,s);else{const u=new bd(o,a);l=new Ts(u,s,0)}r==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==vt)return;const i=new Ye;for(let r=0,o=e.count;r<o;r++)i.fromBufferAttribute(e,r),ut.colorSpaceToWorking(i,vt),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Sr(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,o)=>{i.load(e,r,void 0,o)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const o=Z_.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(o){const s=o.data;switch(s.type){case"decode":r._callbacks[s.id].resolve(s);break;case"error":r._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,o){return r._taskLoad>o._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Z_(){let n,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(n)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const d=u.draco,p=new d.Decoder;try{const m=t(d,p,new Int8Array(c),l),g=m.attributes.map(v=>v.array.buffer);m.index&&g.push(m.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:m},g)}catch(m){console.error(m),self.postMessage({type:"error",id:a.id,error:m.message})}finally{d.destroy(p)}});break}};function t(s,a,c,l){const u=l.attributeIDs,d=l.attributeTypes;let p,m;const g=a.GetEncodedGeometryType(c);if(g===s.TRIANGULAR_MESH)p=new s.Mesh,m=a.DecodeArrayToMesh(c,c.byteLength,p);else if(g===s.POINT_CLOUD)p=new s.PointCloud,m=a.DecodeArrayToPointCloud(c,c.byteLength,p);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||p.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const v={index:null,attributes:[]};for(const f in u){const h=self[d[f]];let _,b;if(l.useUniqueIDs)b=u[f],_=a.GetAttributeByUniqueId(p,b);else{if(b=a.GetAttributeId(p,s[u[f]]),b===-1)continue;_=a.GetAttribute(p,b)}const y=r(s,a,p,f,h,_);f==="color"&&(y.vertexColorSpace=l.vertexColorSpace),v.attributes.push(y)}return g===s.TRIANGULAR_MESH&&(v.index=i(s,a,p)),s.destroy(p),v}function i(s,a,c){const u=c.num_faces()*3,d=u*4,p=s._malloc(d);a.GetTrianglesUInt32Array(c,d,p);const m=new Uint32Array(s.HEAPF32.buffer,p,u).slice();return s._free(p),{array:m,itemSize:1}}function r(s,a,c,l,u,d){const p=c.num_points(),m=d.num_components(),g=o(s,u),v=m*u.BYTES_PER_ELEMENT,f=Math.ceil(v/4)*4,h=f/u.BYTES_PER_ELEMENT,_=p*v,b=p*f,y=s._malloc(_);a.GetAttributeDataArrayForAllPoints(c,d,g,_,y);const R=new u(s.HEAPF32.buffer,y,_/u.BYTES_PER_ELEMENT);let M;if(v===f)M=R.slice();else{M=new u(b/u.BYTES_PER_ELEMENT);let C=0;for(let U=0,E=R.length;U<E;U++){for(let S=0;S<m;S++)M[C+S]=R[U*m+S];C+=h}}return s._free(y),{name:l,count:p,itemSize:m,array:M,stride:h}}function o(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}function Bu(n,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===vl||e===cd){let t=n.getIndex();if(t===null){const s=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)s.push(c);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===vl)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class J_ extends pn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new xy(t)})}load(e,t,i,r){const o=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=fr.extractUrlBase(e);s=fr.resolveURL(l,this.path)}else s=fr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),o.manager.itemError(e),o.manager.itemEnd(e)},c=new Sr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{o.parse(l,s,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let o;const s={},a={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zd){try{s[ht.KHR_BINARY_GLTF]=new vy(e)}catch(d){r&&r(d);return}o=JSON.parse(s[ht.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ly(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,s[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],p=o.extensionsRequired||[];switch(d){case ht.KHR_MATERIALS_UNLIT:s[d]=new ty;break;case ht.KHR_DRACO_MESH_COMPRESSION:s[d]=new _y(o,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:s[d]=new yy;break;case ht.KHR_MESH_QUANTIZATION:s[d]=new by;break;default:p.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,o){i.parse(e,t,r,o)})}}function Q_(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ey{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ye(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],qt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new as(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Om(u),l.distance=d;break;case"spot":l=new Im(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Bn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,o=i.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class ty{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(e,t,i){const r=[];e.color=new Ye(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const s=o.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],qt),e.opacity=s[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,vt))}return Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class iy{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(o)}}class ry{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class oy{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(o)}}class sy{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,vt)),s.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(o)}}class ay{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(o)}}class ly{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],qt),Promise.all(o)}}class cy{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class uy{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],qt),s.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,vt)),Promise.all(o)}}class dy{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(o)}}class hy{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(o)}}class fy{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,s)}}class py{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,s.source,c)}}class my{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,s.source,c)}}class gy{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,p=new Uint8Array(a,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,p,r.mode,r.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(m),u,d,p,r.mode,r.filter),m})})}else return null}}class xy{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],c={};for(const l in s)a.push(this.parser.getDependency("accessor",s[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],p=l[0].count,m=[];for(const g of d){const v=new at,f=new Q,h=new Sn,_=new Q(1,1,1),b=new jp(g.geometry,g.material,p);for(let y=0;y<p;y++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&h.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(f,h,_));for(const y in c)if(y==="_COLOR_0"){const R=c[y];b.instanceColor=new yl(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);St.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),m.push(b)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const zd="glTF",Hr=12,zu={JSON:1313821514,BIN:5130562};class vy{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Hr,o=new DataView(e,Hr);let s=0;for(;s<r;){const a=o.getUint32(s,!0);s+=4;const c=o.getUint32(s,!0);if(s+=4,c===zu.JSON){const l=new Uint8Array(e,Hr+s,a);this.content=i.decode(l)}else if(c===zu.BIN){const l=Hr+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _y{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},c={},l={};for(const u in s){const d=Ml[u]||u.toLowerCase();a[d]=s[u]}for(const u in e.attributes){const d=Ml[u]||u.toLowerCase();if(s[u]!==void 0){const p=i.accessors[e.attributes[u]],m=pr[p.componentType];l[d]=m.name,c[d]=p.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,p){r.decodeDracoFile(u,function(m){for(const g in m.attributes){const v=m.attributes[g],f=c[g];f!==void 0&&(v.normalized=f)}d(m)},a,l,qt,p)})})}}class yy{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class by{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Vd extends xo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[o+s];return t}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,p=d*d,m=p*d,g=e*l,v=g-l,f=-2*m+3*p,h=m-p,_=1-f,b=h-p+d;for(let y=0;y!==a;y++){const R=s[v+y+a],M=s[v+y+c]*u,C=s[g+y+a],U=s[g+y]*u;o[y]=_*R+b*M+f*C+h*U}return o}}const Ty=new Sn;class Ey extends Vd{interpolate_(e,t,i,r){const o=super.interpolate_(e,t,i,r);return Ty.fromArray(o).normalize().toArray(o),o}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:nn,9729:tn,9984:nd,9985:ns,9986:Wr,9987:ni},Gu={33071:an,33648:ds,10497:In},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sy={CUBICSPLINE:void 0,LINEAR:ro,STEP:io},wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function My(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),n.DefaultMaterial}function Ii(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Bn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ay(n,e,t){let i=!1,r=!1,o=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(n);const s=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const p=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;s.push(p)}if(r){const p=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(p)}if(o){const p=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(p)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],p=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),o&&(n.morphAttributes.color=p),n.morphTargetsRelative=!0,n})}function Ry(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wy(n){let e;const t=n.extensions&&n.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ca(t.attributes):e=n.indices+":"+Ca(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ca(n.targets[i]);return e}function Ca(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Al(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cy(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Py=new at;class Ly{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Q_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,s=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,o=a.indexOf("Firefox")>-1,s=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&s<98?this.textureLoader=new Nd(this.options.manager):this.textureLoader=new Um(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};return Ii(o,a,r),Bn(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const s=t[r].joints;for(let a=0,c=s.length;a<c;a++)e[s[a]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),o=(s,a)=>{const c=this.associations.get(s);c!=null&&this.associations.set(a,c);for(const[l,u]of s.children.entries())o(u,a.children[l])};return o(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,s){i.load(fr.resolveURL(t.uri,r.path),o,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=Ra[r.type],a=pr[r.componentType],c=r.normalized===!0,l=new a(r.count*s);return Promise.resolve(new Ft(l,s,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(s){const a=s[0],c=Ra[r.type],l=pr[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,p=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,f;if(m&&m!==d){const h=Math.floor(p/m),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let b=t.cache.get(_);b||(v=new l(a,h*m,r.count*m/u),b=new bd(v,m/u),t.cache.add(_,b)),f=new Ts(b,c,p%m/u,g)}else a===null?v=new l(r.count*c):v=new l(a,p,r.count*c),f=new Ft(v,c,g);if(r.sparse!==void 0){const h=Ra.SCALAR,_=pr[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,R=new _(s[1],b,r.sparse.count*h),M=new l(s[2],y,r.sparse.count*c);a!==null&&(f=new Ft(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let C=0,U=R.length;C<U;C++){const E=R[C];if(f.setX(E,M[C*c]),c>=2&&f.setY(E,M[C*c+1]),c>=3&&f.setZ(E,M[C*c+2]),c>=4&&f.setW(E,M[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=g}return f})}loadTexture(e){const t=this.json,i=this.options,o=t.textures[e].source,s=t.images[o];let a=this.textureLoader;if(s.uri){const c=i.manager.getHandler(s.uri);c!==null&&(a=c)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,i){const r=this,o=this.json,s=o.textures[e],a=o.images[t],c=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const p=(o.samplers||{})[s.sampler]||{};return u.magFilter=Vu[p.magFilter]||tn,u.minFilter=Vu[p.minFilter]||ni,u.wrapS=Gu[p.wrapS]||In,u.wrapT=Gu[p.wrapT]||In,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==tn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=r.images[e],a=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(d){l=!0;const p=new Blob([d],{type:s.mimeType});return c=a.createObjectURL(p),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(p,m){let g=p;t.isImageBitmapLoader===!0&&(g=function(v){const f=new Wt(v);f.needsUpdate=!0,p(f)}),t.load(fr.resolveURL(d,o.path),g,void 0,m)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Bn(d,s),d.userData.mimeType=s.mimeType||Cy(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),o.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=o.associations.get(s);s=o.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),o.associations.set(s,c)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Yl,Dn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new jl,Dn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||o||s){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),o&&(c.vertexColors=!0),s&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Ms}loadMaterial(e){const t=this,i=this.json,r=this.extensions,o=i.materials[e];let s;const a={},c=o.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){const d=r[ht.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),l.push(d.extendParams(a,o,t))}else{const d=o.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const p=d.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],qt),a.opacity=p[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,vt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=yn);const u=o.alphaMode||wa.OPAQUE;if(u===wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wa.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&s!==bn&&(l.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new je(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;a.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&s!==bn&&(l.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&s!==bn){const d=o.emissiveFactor;a.emissive=new Ye().setRGB(d[0],d[1],d[2],qt)}return o.emissiveTexture!==void 0&&s!==bn&&l.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,vt)),Promise.all(l).then(function(){const d=new s(a);return o.name&&(d.name=o.name),Bn(d,o),t.associations.set(d,{materials:e}),o.extensions&&Ii(r,d,o),d})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function o(a){return i[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Hu(c,a,t)})}const s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=wy(l),d=r[u];if(d)s.push(d.promise);else{let p;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?p=o(l):p=Hu(new Ot,l,t),r[u]={primitive:l,promise:p},s.push(p)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,o=i.meshes[e],s=o.primitives,a=[];for(let c=0,l=s.length;c<l;c++){const u=s[c].material===void 0?My(this.cache):this.getDependency("material",s[c].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let m=0,g=u.length;m<g;m++){const v=u[m],f=s[m];let h;const _=l[m];if(f.mode===_n.TRIANGLES||f.mode===_n.TRIANGLE_STRIP||f.mode===_n.TRIANGLE_FAN||f.mode===void 0)h=o.isSkinnedMesh===!0?new Hp(v,_):new Nt(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),f.mode===_n.TRIANGLE_STRIP?h.geometry=Bu(h.geometry,cd):f.mode===_n.TRIANGLE_FAN&&(h.geometry=Bu(h.geometry,vl));else if(f.mode===_n.LINES)h=new Ed(v,_);else if(f.mode===_n.LINE_STRIP)h=new Kl(v,_);else if(f.mode===_n.LINE_LOOP)h=new $p(v,_);else if(f.mode===_n.POINTS)h=new Sd(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(h.geometry.morphAttributes).length>0&&Ry(h,o),h.name=t.createUniqueName(o.name||"mesh_"+e),Bn(h,o),f.extensions&&Ii(r,h,f),t.assignFinalMaterial(h),d.push(h)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return o.extensions&&Ii(r,d[0],o),d[0];const p=new Tn;o.extensions&&Ii(r,p,o),t.associations.set(p,{meshes:e});for(let m=0,g=d.length;m<g;m++)p.add(d[m]);return p})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new en(gi.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Jl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),s=r,a=[],c=[];for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d){a.push(d);const p=new at;o!==null&&p.fromArray(o.array,l*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Wl(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,s=[],a=[],c=[],l=[],u=[];for(let d=0,p=r.channels.length;d<p;d++){const m=r.channels[d],g=r.samplers[m.sampler],v=m.target,f=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(s.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",h)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(v))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const p=d[0],m=d[1],g=d[2],v=d[3],f=d[4],h=[];for(let b=0,y=p.length;b<y;b++){const R=p[b],M=m[b],C=g[b],U=v[b],E=f[b];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const S=i._createAnimationTracks(R,M,C,U,E);if(S)for(let w=0;w<S.length;w++)h.push(S[w])}const _=new Sm(o,void 0,h);return Bn(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const s=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),s})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],o=i._loadNodeShallow(e),s=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)s.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(s),c]).then(function(l){const u=l[0],d=l[1],p=l[2];p!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(p,Py)});for(let m=0,g=d.length;m<g;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],s=o.name?r.createUniqueName(o.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),o.camera!==void 0&&a.push(r.getDependency("camera",o.camera).then(function(l){return r._getNodeRef(r.cameraCache,o.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(o.isBone===!0?u=new Td:l.length>1?u=new Tn:l.length===1?u=l[0]:u=new St,u!==l[0])for(let d=0,p=l.length;d<p;d++)u.add(l[d]);if(o.name&&(u.userData.name=o.name,u.name=s),Bn(u,o),o.extensions&&Ii(i,u,o),o.matrix!==void 0){const d=new at;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,o=new Tn;i.name&&(o.name=r.createUniqueName(i.name)),Bn(o,i),i.extensions&&Ii(t,o,i);const s=i.nodes||[],a=[];for(let c=0,l=s.length;c<l;c++)a.push(r.getDependency("node",s[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)o.add(c[u]);const l=u=>{const d=new Map;for(const[p,m]of r.associations)(p instanceof Dn||p instanceof Wt)&&d.set(p,m);return u.traverse(p=>{const m=r.associations.get(p);m!=null&&d.set(p,m)}),d};return r.associations=l(o),o})}_createAnimationTracks(e,t,i,r,o){const s=[],a=e.name?e.name:e.uuid,c=[];pi[o.path]===pi.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(a);let l;switch(pi[o.path]){case pi.weights:l=br;break;case pi.rotation:l=Tr;break;case pi.translation:case pi.scale:l=Er;break;default:switch(i.itemSize){case 1:l=br;break;case 2:case 3:default:l=Er;break}break}const u=r.interpolation!==void 0?Sy[r.interpolation]:ro,d=this._getArrayFromAccessor(i);for(let p=0,m=c.length;p<m;p++){const g=new l(c[p]+"."+pi[o.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Al(t.constructor),r=new Float32Array(t.length);for(let o=0,s=t.length;o<s;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Tr?Ey:Vd;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Iy(n,e,t){const i=e.attributes,r=new En;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new Q(c[0],c[1],c[2]),new Q(l[0],l[1],l[2])),a.normalized){const u=Al(pr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new Q,c=new Q;for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d.POSITION!==void 0){const p=t.json.accessors[d.POSITION],m=p.min,g=p.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),p.normalized){const v=Al(pr[p.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const s=new Wn;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=s}function Hu(n,e,t){const i=e.attributes,r=[];function o(s,a){return t.getDependency("accessor",s).then(function(c){n.setAttribute(a,c)})}for(const s in i){const a=Ml[s]||s.toLowerCase();a in n.attributes||r.push(o(i[s],a))}if(e.indices!==void 0&&!n.index){const s=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(s)}return ut.workingColorSpace!==qt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Bn(n,e),Iy(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ay(n,e.targets,t):n})}class Ny extends pn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=new Sr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(o.parse(a))}catch(c){r?r(c):console.error(c),o.manager.itemError(e)}},i,r)}parse(e){function t(l){const u=new DataView(l),d=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*d===u.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,u,v))return!1;return!0}function i(l,u,d){for(let p=0,m=l.length;p<m;p++)if(l[p]!==u.getUint8(d+p))return!1;return!0}function r(l){const u=new DataView(l),d=u.getUint32(80,!0);let p,m,g,v=!1,f,h,_,b,y;for(let w=0;w<70;w++)u.getUint32(w,!1)==1129270351&&u.getUint8(w+4)==82&&u.getUint8(w+5)==61&&(v=!0,f=new Float32Array(d*3*3),h=u.getUint8(w+6)/255,_=u.getUint8(w+7)/255,b=u.getUint8(w+8)/255,y=u.getUint8(w+9)/255);const R=84,M=12*4+2,C=new Ot,U=new Float32Array(d*3*3),E=new Float32Array(d*3*3),S=new Ye;for(let w=0;w<d;w++){const P=R+w*M,L=u.getFloat32(P,!0),O=u.getFloat32(P+4,!0),H=u.getFloat32(P+8,!0);if(v){const W=u.getUint16(P+48,!0);W&32768?(p=h,m=_,g=b):(p=(W&31)/31,m=(W>>5&31)/31,g=(W>>10&31)/31)}for(let W=1;W<=3;W++){const J=P+W*12,j=w*3*3+(W-1)*3;U[j]=u.getFloat32(J,!0),U[j+1]=u.getFloat32(J+4,!0),U[j+2]=u.getFloat32(J+8,!0),E[j]=L,E[j+1]=O,E[j+2]=H,v&&(S.setRGB(p,m,g,vt),f[j]=S.r,f[j+1]=S.g,f[j+2]=S.b)}}return C.setAttribute("position",new Ft(U,3)),C.setAttribute("normal",new Ft(E,3)),v&&(C.setAttribute("color",new Ft(f,3)),C.hasColors=!0,C.alpha=y),C}function o(l){const u=new Ot,d=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,f=new RegExp("vertex"+v+v+v,"g"),h=new RegExp("normal"+v+v+v,"g"),_=[],b=[],y=[],R=new Q;let M,C=0,U=0,E=0;for(;(M=d.exec(l))!==null;){U=E;const S=M[0],w=(M=m.exec(S))!==null?M[1]:"";for(y.push(w);(M=p.exec(S))!==null;){let O=0,H=0;const W=M[0];for(;(M=h.exec(W))!==null;)R.x=parseFloat(M[1]),R.y=parseFloat(M[2]),R.z=parseFloat(M[3]),H++;for(;(M=f.exec(W))!==null;)_.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),b.push(R.x,R.y,R.z),O++,E++;H!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const P=U,L=E-U;u.userData.groupNames=y,u.addGroup(P,L,C),C++}return u.setAttribute("position",new ct(_,3)),u.setAttribute("normal",new ct(b,3)),u}function s(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?r(c):o(s(e))}}/*! chevrotain - v9.0.1 */var it=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Gd=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),xt=it((n,e)=>{var t=n&&n.__spreadArray||function(ee,me){for(var te=0,Me=me.length,Re=ee.length;te<Me;te++,Re++)ee[Re]=me[te];return ee};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i(ee){return ee&&ee.length===0}n.isEmpty=i;function r(ee){return ee==null?[]:Object.keys(ee)}n.keys=r;function o(ee){for(var me=[],te=Object.keys(ee),Me=0;Me<te.length;Me++)me.push(ee[te[Me]]);return me}n.values=o;function s(ee,me){for(var te=[],Me=r(ee),Re=0;Re<Me.length;Re++){var Ue=Me[Re];te.push(me.call(null,ee[Ue],Ue))}return te}n.mapValues=s;function a(ee,me){for(var te=[],Me=0;Me<ee.length;Me++)te.push(me.call(null,ee[Me],Me));return te}n.map=a;function c(ee){for(var me=[],te=0;te<ee.length;te++){var Me=ee[te];Array.isArray(Me)?me=me.concat(c(Me)):me.push(Me)}return me}n.flatten=c;function l(ee){return i(ee)?void 0:ee[0]}n.first=l;function u(ee){var me=ee&&ee.length;return me?ee[me-1]:void 0}n.last=u;function d(ee,me){if(Array.isArray(ee))for(var te=0;te<ee.length;te++)me.call(null,ee[te],te);else if(W(ee))for(var Me=r(ee),te=0;te<Me.length;te++){var Re=Me[te],Ue=ee[Re];me.call(null,Ue,Re)}else throw Error("non exhaustive match")}n.forEach=d;function p(ee){return typeof ee=="string"}n.isString=p;function m(ee){return ee===void 0}n.isUndefined=m;function g(ee){return ee instanceof Function}n.isFunction=g;function v(ee,me){return me===void 0&&(me=1),ee.slice(me,ee.length)}n.drop=v;function f(ee,me){return me===void 0&&(me=1),ee.slice(0,ee.length-me)}n.dropRight=f;function h(ee,me){var te=[];if(Array.isArray(ee))for(var Me=0;Me<ee.length;Me++){var Re=ee[Me];me.call(null,Re)&&te.push(Re)}return te}n.filter=h;function _(ee,me){return h(ee,function(te){return!me(te)})}n.reject=_;function b(ee,me){for(var te=Object.keys(ee),Me={},Re=0;Re<te.length;Re++){var Ue=te[Re],T=ee[Ue];me(T)&&(Me[Ue]=T)}return Me}n.pick=b;function y(ee,me){return W(ee)?ee.hasOwnProperty(me):!1}n.has=y;function R(ee,me){return U(ee,function(te){return te===me})!==void 0}n.contains=R;function M(ee){for(var me=[],te=0;te<ee.length;te++)me.push(ee[te]);return me}n.cloneArr=M;function C(ee){var me={};for(var te in ee)Object.prototype.hasOwnProperty.call(ee,te)&&(me[te]=ee[te]);return me}n.cloneObj=C;function U(ee,me){for(var te=0;te<ee.length;te++){var Me=ee[te];if(me.call(null,Me))return Me}}n.find=U;function E(ee,me){for(var te=[],Me=0;Me<ee.length;Me++){var Re=ee[Me];me.call(null,Re)&&te.push(Re)}return te}n.findAll=E;function S(ee,me,te){for(var Me=Array.isArray(ee),Re=Me?ee:o(ee),Ue=Me?[]:r(ee),T=te,x=0;x<Re.length;x++)T=me.call(null,T,Re[x],Me?x:Ue[x]);return T}n.reduce=S;function w(ee){return _(ee,function(me){return me==null})}n.compact=w;function P(ee,me){me===void 0&&(me=function(Me){return Me});var te=[];return S(ee,function(Me,Re){var Ue=me(Re);return R(te,Ue)?Me:(te.push(Ue),Me.concat(Re))},[])}n.uniq=P;function L(ee){for(var me=[],te=1;te<arguments.length;te++)me[te-1]=arguments[te];var Me=[null],Re=Me.concat(me);return Function.bind.apply(ee,Re)}n.partial=L;function O(ee){return Array.isArray(ee)}n.isArray=O;function H(ee){return ee instanceof RegExp}n.isRegExp=H;function W(ee){return ee instanceof Object}n.isObject=W;function J(ee,me){for(var te=0;te<ee.length;te++)if(!me(ee[te],te))return!1;return!0}n.every=J;function j(ee,me){return _(ee,function(te){return R(me,te)})}n.difference=j;function ne(ee,me){for(var te=0;te<ee.length;te++)if(me(ee[te]))return!0;return!1}n.some=ne;function he(ee,me){for(var te=0;te<ee.length;te++)if(ee[te]===me)return te;return-1}n.indexOf=he;function Ee(ee,me){var te=M(ee);return te.sort(function(Me,Re){return me(Me)-me(Re)}),te}n.sortBy=Ee;function re(ee,me){if(ee.length!==me.length)throw Error("can't zipObject with different number of keys and values!");for(var te={},Me=0;Me<ee.length;Me++)te[ee[Me]]=me[Me];return te}n.zipObject=re;function oe(ee){for(var me=[],te=1;te<arguments.length;te++)me[te-1]=arguments[te];for(var Me=0;Me<me.length;Me++)for(var Re=me[Me],Ue=r(Re),T=0;T<Ue.length;T++){var x=Ue[T];ee[x]=Re[x]}return ee}n.assign=oe;function we(ee){for(var me=[],te=1;te<arguments.length;te++)me[te-1]=arguments[te];for(var Me=0;Me<me.length;Me++)for(var Re=me[Me],Ue=r(Re),T=0;T<Ue.length;T++){var x=Ue[T];y(ee,x)||(ee[x]=Re[x])}return ee}n.assignNoOverwrite=we;function ie(){for(var ee=[],me=0;me<arguments.length;me++)ee[me]=arguments[me];return we.apply(void 0,t([{}],ee))}n.defaults=ie;function V(ee,me){var te={};return d(ee,function(Me){var Re=me(Me),Ue=te[Re];Ue?Ue.push(Me):te[Re]=[Me]}),te}n.groupBy=V;function Y(ee,me){for(var te=C(ee),Me=r(me),Re=0;Re<Me.length;Re++){var Ue=Me[Re],T=me[Ue];te[Ue]=T}return te}n.merge=Y;function ce(){}n.NOOP=ce;function de(ee){return ee}n.IDENTITY=de;function ye(ee){for(var me=[],te=0;te<ee.length;te++){var Me=ee[te];me.push(Me!==void 0?Me:void 0)}return me}n.packArray=ye;function Pe(ee){console&&console.error&&console.error("Error: "+ee)}n.PRINT_ERROR=Pe;function Be(ee){console&&console.warn&&console.warn("Warning: "+ee)}n.PRINT_WARNING=Be;function Fe(){return typeof Map=="function"}n.isES2015MapSupported=Fe;function qe(ee){return ee[ee.length-1]}n.peek=qe;function X(ee){var me=new Date().getTime(),te=ee(),Me=new Date().getTime(),Re=Me-me;return{time:Re,value:te}}n.timer=X;function Ge(ee){function me(){}me.prototype=ee;var te=new me;function Me(){return typeof te.bar}return Me(),Me(),ee}n.toFastProperties=Ge}),nc=it((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(f){this.idx=f.idx,this.input=f.input,this.groupIdx=f.groupIdx},t.prototype.pattern=function(f){this.idx=0,this.input=f,this.groupIdx=0,this.consumeChar("/");var h=this.disjunction();this.consumeChar("/");for(var _={type:"Flags",loc:{begin:this.idx,end:f.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":c(_,"global");break;case"i":c(_,"ignoreCase");break;case"m":c(_,"multiLine");break;case"u":c(_,"unicode");break;case"y":c(_,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:_,value:h,loc:this.loc(0)}},t.prototype.disjunction=function(){var f=[],h=this.idx;for(f.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),f.push(this.alternative());return{type:"Disjunction",value:f,loc:this.loc(h)}},t.prototype.alternative=function(){for(var f=[],h=this.idx;this.isTerm();)f.push(this.term());return{type:"Alternative",value:f,loc:this.loc(h)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var f=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(f)};case"$":return{type:"EndAnchor",loc:this.loc(f)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(f)};case"B":return{type:"NonWordBoundary",loc:this.loc(f)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var h;switch(this.popChar()){case"=":h="Lookahead";break;case"!":h="NegativeLookahead";break}l(h);var _=this.disjunction();return this.consumeChar(")"),{type:h,value:_,loc:this.loc(f)}}u()},t.prototype.quantifier=function(f){var h,_=this.idx;switch(this.popChar()){case"*":h={atLeast:0,atMost:1/0};break;case"+":h={atLeast:1,atMost:1/0};break;case"?":h={atLeast:0,atMost:1};break;case"{":var b=this.integerIncludingZero();switch(this.popChar()){case"}":h={atLeast:b,atMost:b};break;case",":var y;this.isDigit()?(y=this.integerIncludingZero(),h={atLeast:b,atMost:y}):h={atLeast:b,atMost:1/0},this.consumeChar("}");break}if(f===!0&&h===void 0)return;l(h);break}if(!(f===!0&&h===void 0))return l(h),this.peekChar(0)==="?"?(this.consumeChar("?"),h.greedy=!1):h.greedy=!0,h.type="Quantifier",h.loc=this.loc(_),h},t.prototype.atom=function(){var f,h=this.idx;switch(this.peekChar()){case".":f=this.dotAll();break;case"\\":f=this.atomEscape();break;case"[":f=this.characterClass();break;case"(":f=this.group();break}return f===void 0&&this.isPatternCharacter()&&(f=this.patternCharacter()),l(f),f.loc=this.loc(h),this.isQuantifier()&&(f.quantifier=this.quantifier()),f},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[s(`
`),s("\r"),s("\u2028"),s("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var f=this.positiveInteger();return{type:"GroupBackReference",value:f}},t.prototype.characterClassEscape=function(){var f,h=!1;switch(this.popChar()){case"d":f=p;break;case"D":f=p,h=!0;break;case"s":f=g;break;case"S":f=g,h=!0;break;case"w":f=m;break;case"W":f=m,h=!0;break}return l(f),{type:"Set",value:f,complement:h}},t.prototype.controlEscapeAtom=function(){var f;switch(this.popChar()){case"f":f=s("\f");break;case"n":f=s(`
`);break;case"r":f=s("\r");break;case"t":f=s("	");break;case"v":f=s("\v");break}return l(f),{type:"Character",value:f}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var f=this.popChar();if(/[a-zA-Z]/.test(f)===!1)throw Error("Invalid ");var h=f.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:h}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:s("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var f=this.popChar();return{type:"Character",value:s(f)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var f=this.popChar();return{type:"Character",value:s(f)}}},t.prototype.characterClass=function(){var f=[],h=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),h=!0);this.isClassAtom();){var _=this.classAtom(),b=_.type==="Character";if(b&&this.isRangeDash()){this.consumeChar("-");var y=this.classAtom(),R=y.type==="Character";if(R){if(y.value<_.value)throw Error("Range out of order in character class");f.push({from:_.value,to:y.value})}else a(_.value,f),f.push(s("-")),a(y.value,f)}else a(_.value,f)}return this.consumeChar("]"),{type:"Set",complement:h,value:f}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:s("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var f=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),f=!1;break;default:this.groupIdx++;break}var h=this.disjunction();this.consumeChar(")");var _={type:"Group",capturing:f,value:h};return f&&(_.idx=this.groupIdx),_},t.prototype.positiveInteger=function(){var f=this.popChar();if(o.test(f)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.integerIncludingZero=function(){var f=this.popChar();if(r.test(f)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.patternCharacter=function(){var f=this.popChar();switch(f){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:s(f)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(f){switch(f===void 0&&(f=0),this.peekChar(f)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var f=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(f)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(f){for(var h="",_=0;_<f;_++){var b=this.popChar();if(i.test(b)===!1)throw Error("Expecting a HexDecimal digits");h+=b}var y=parseInt(h,16);return{type:"Character",value:y}},t.prototype.peekChar=function(f){return f===void 0&&(f=0),this.input[this.idx+f]},t.prototype.popChar=function(){var f=this.peekChar(0);return this.consumeChar(),f},t.prototype.consumeChar=function(f){if(f!==void 0&&this.input[this.idx]!==f)throw Error("Expected: '"+f+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(f){return{begin:f,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function s(f){return f.charCodeAt(0)}function a(f,h){f.length!==void 0?f.forEach(function(_){h.push(_)}):h.push(f)}function c(f,h){if(f[h]===!0)throw"duplicate flag "+h;f[h]=!0}function l(f){if(f===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var d,p=[];for(d=s("0");d<=s("9");d++)p.push(d);var m=[s("_")].concat(p);for(d=s("a");d<=s("z");d++)m.push(d);for(d=s("A");d<=s("Z");d++)m.push(d);var g=[s(" "),s("\f"),s(`
`),s("\r"),s("	"),s("\v"),s("	"),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s("\u2028"),s("\u2029"),s(" "),s(" "),s("　"),s("\uFEFF")];function v(){}return v.prototype.visitChildren=function(f){for(var h in f){var _=f[h];f.hasOwnProperty(h)&&(_.type!==void 0?this.visit(_):Array.isArray(_)&&_.forEach(function(b){this.visit(b)},this))}},v.prototype.visit=function(f){switch(f.type){case"Pattern":this.visitPattern(f);break;case"Flags":this.visitFlags(f);break;case"Disjunction":this.visitDisjunction(f);break;case"Alternative":this.visitAlternative(f);break;case"StartAnchor":this.visitStartAnchor(f);break;case"EndAnchor":this.visitEndAnchor(f);break;case"WordBoundary":this.visitWordBoundary(f);break;case"NonWordBoundary":this.visitNonWordBoundary(f);break;case"Lookahead":this.visitLookahead(f);break;case"NegativeLookahead":this.visitNegativeLookahead(f);break;case"Character":this.visitCharacter(f);break;case"Set":this.visitSet(f);break;case"Group":this.visitGroup(f);break;case"GroupBackReference":this.visitGroupBackReference(f);break;case"Quantifier":this.visitQuantifier(f);break}this.visitChildren(f)},v.prototype.visitPattern=function(f){},v.prototype.visitFlags=function(f){},v.prototype.visitDisjunction=function(f){},v.prototype.visitAlternative=function(f){},v.prototype.visitStartAnchor=function(f){},v.prototype.visitEndAnchor=function(f){},v.prototype.visitWordBoundary=function(f){},v.prototype.visitNonWordBoundary=function(f){},v.prototype.visitLookahead=function(f){},v.prototype.visitNegativeLookahead=function(f){},v.prototype.visitCharacter=function(f){},v.prototype.visitSet=function(f){},v.prototype.visitGroup=function(f){},v.prototype.visitGroupBackReference=function(f){},v.prototype.visitQuantifier=function(f){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})}),ic=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=nc(),t={},i=new e.RegExpParser;function r(s){var a=s.toString();if(t.hasOwnProperty(a))return t[a];var c=i.pattern(a);return t[a]=c,c}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),Oy=it(n=>{var e=n&&n.__extends||function(){var v=function(f,h){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,b){_.__proto__=b}||function(_,b){for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(_[y]=b[y])},v(f,h)};return function(f,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");v(f,h);function _(){this.constructor=f}f.prototype=h===null?Object.create(h):(_.prototype=h.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=nc(),i=xt(),r=ic(),o=Hd(),s="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function a(v,f){f===void 0&&(f=!1);try{var h=r.getRegExpAst(v),_=c(h.value,{},h.flags.ignoreCase);return _}catch(y){if(y.message===s)f&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+v.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var b="";f&&(b=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+v.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+b)}}return[]}n.getOptimizedStartCodesIndices=a;function c(v,f,h){switch(v.type){case"Disjunction":for(var _=0;_<v.value.length;_++)c(v.value[_],f,h);break;case"Alternative":for(var b=v.value,_=0;_<b.length;_++){var y=b[_];switch(y.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var R=y;switch(R.type){case"Character":l(R.value,f,h);break;case"Set":if(R.complement===!0)throw Error(s);i.forEach(R.value,function(U){if(typeof U=="number")l(U,f,h);else{var E=U;if(h===!0)for(var S=E.from;S<=E.to;S++)l(S,f,h);else{for(var S=E.from;S<=E.to&&S<o.minOptimizationVal;S++)l(S,f,h);if(E.to>=o.minOptimizationVal)for(var w=E.from>=o.minOptimizationVal?E.from:o.minOptimizationVal,P=E.to,L=o.charCodeToOptimizedIndex(w),O=o.charCodeToOptimizedIndex(P),H=L;H<=O;H++)f[H]=H}}});break;case"Group":c(R.value,f,h);break;default:throw Error("Non Exhaustive Match")}var M=R.quantifier!==void 0&&R.quantifier.atLeast===0;if(R.type==="Group"&&p(R)===!1||R.type!=="Group"&&M===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(f)}n.firstCharOptimizedIndices=c;function l(v,f,h){var _=o.charCodeToOptimizedIndex(v);f[_]=_,h===!0&&u(v,f)}function u(v,f){var h=String.fromCharCode(v),_=h.toUpperCase();if(_!==h){var b=o.charCodeToOptimizedIndex(_.charCodeAt(0));f[b]=b}else{var y=h.toLowerCase();if(y!==h){var b=o.charCodeToOptimizedIndex(y.charCodeAt(0));f[b]=b}}}function d(v,f){return i.find(v.value,function(h){if(typeof h=="number")return i.contains(f,h);var _=h;return i.find(f,function(b){return _.from<=b&&b<=_.to})!==void 0})}function p(v){return v.quantifier&&v.quantifier.atLeast===0?!0:v.value?i.isArray(v.value)?i.every(v.value,p):p(v.value):!1}var m=function(v){e(f,v);function f(h){var _=v.call(this)||this;return _.targetCharCodes=h,_.found=!1,_}return f.prototype.visitChildren=function(h){if(this.found!==!0){switch(h.type){case"Lookahead":this.visitLookahead(h);return;case"NegativeLookahead":this.visitNegativeLookahead(h);return}v.prototype.visitChildren.call(this,h)}},f.prototype.visitCharacter=function(h){i.contains(this.targetCharCodes,h.value)&&(this.found=!0)},f.prototype.visitSet=function(h){h.complement?d(h,this.targetCharCodes)===void 0&&(this.found=!0):d(h,this.targetCharCodes)!==void 0&&(this.found=!0)},f}(t.BaseRegExpVisitor);function g(v,f){if(f instanceof RegExp){var h=r.getRegExpAst(f),_=new m(v);return _.visit(h),_.found}else return i.find(f,function(b){return i.contains(v,b.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),Hd=it(n=>{var e=n&&n.__extends||function(){var ie=function(V,Y){return ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(ce,de){ce.__proto__=de}||function(ce,de){for(var ye in de)Object.prototype.hasOwnProperty.call(de,ye)&&(ce[ye]=de[ye])},ie(V,Y)};return function(V,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Class extends value "+String(Y)+" is not a constructor or null");ie(V,Y);function ce(){this.constructor=V}V.prototype=Y===null?Object.create(Y):(ce.prototype=Y.prototype,new ce)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=nc(),i=Cs(),r=xt(),o=Oy(),s=ic(),a="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function c(){n.SUPPORT_STICKY=!1}n.disableSticky=c;function l(){n.SUPPORT_STICKY=!0}n.enableSticky=l;function u(ie,V){V=r.defaults(V,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(T,x){return x()}});var Y=V.tracer;Y("initCharCodeToOptimizedIndexMap",function(){we()});var ce;Y("Reject Lexer.NA",function(){ce=r.reject(ie,function(T){return T[a]===i.Lexer.NA})});var de=!1,ye;Y("Transform Patterns",function(){de=!1,ye=r.map(ce,function(T){var x=T[a];if(r.isRegExp(x)){var A=x.source;return A.length===1&&A!=="^"&&A!=="$"&&A!=="."&&!x.ignoreCase?A:A.length===2&&A[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],A[1])?A[1]:V.useSticky?P(x):w(x)}else{if(r.isFunction(x))return de=!0,{exec:x};if(r.has(x,"exec"))return de=!0,x;if(typeof x=="string"){if(x.length===1)return x;var D=x.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),N=new RegExp(D);return V.useSticky?P(N):w(N)}else throw Error("non exhaustive match")}})});var Pe,Be,Fe,qe,X;Y("misc mapping",function(){Pe=r.map(ce,function(T){return T.tokenTypeIdx}),Be=r.map(ce,function(T){var x=T.GROUP;if(x!==i.Lexer.SKIPPED){if(r.isString(x))return x;if(r.isUndefined(x))return!1;throw Error("non exhaustive match")}}),Fe=r.map(ce,function(T){var x=T.LONGER_ALT;if(x){var A=r.indexOf(ce,x);return A}}),qe=r.map(ce,function(T){return T.PUSH_MODE}),X=r.map(ce,function(T){return r.has(T,"POP_MODE")})});var Ge;Y("Line Terminator Handling",function(){var T=he(V.lineTerminatorCharacters);Ge=r.map(ce,function(x){return!1}),V.positionTracking!=="onlyOffset"&&(Ge=r.map(ce,function(x){if(r.has(x,"LINE_BREAKS"))return x.LINE_BREAKS;if(j(x,T)===!1)return o.canMatchCharCode(T,x.PATTERN)}))});var ee,me,te,Me;Y("Misc Mapping #2",function(){ee=r.map(ce,W),me=r.map(ye,J),te=r.reduce(ce,function(T,x){var A=x.GROUP;return r.isString(A)&&A!==i.Lexer.SKIPPED&&(T[A]=[]),T},{}),Me=r.map(ye,function(T,x){return{pattern:ye[x],longerAlt:Fe[x],canLineTerminator:Ge[x],isCustom:ee[x],short:me[x],group:Be[x],push:qe[x],pop:X[x],tokenTypeIdx:Pe[x],tokenType:ce[x]}})});var Re=!0,Ue=[];return V.safeMode||Y("First Char Optimization",function(){Ue=r.reduce(ce,function(T,x,A){if(typeof x.PATTERN=="string"){var D=x.PATTERN.charCodeAt(0),N=oe(D);Ee(T,N,Me[A])}else if(r.isArray(x.START_CHARS_HINT)){var F;r.forEach(x.START_CHARS_HINT,function(q){var ae=typeof q=="string"?q.charCodeAt(0):q,G=oe(ae);F!==G&&(F=G,Ee(T,G,Me[A]))})}else if(r.isRegExp(x.PATTERN))if(x.PATTERN.unicode)Re=!1,V.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+x.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var $=o.getOptimizedStartCodesIndices(x.PATTERN,V.ensureOptimizations);r.isEmpty($)&&(Re=!1),r.forEach($,function(q){Ee(T,q,Me[A])})}else V.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+x.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Re=!1;return T},[])}),Y("ArrayPacking",function(){Ue=r.packArray(Ue)}),{emptyGroups:te,patternIdxToConfig:Me,charCodeToPatternIdxToConfig:Ue,hasCustom:de,canBeOptimized:Re}}n.analyzeTokenTypes=u;function d(ie,V){var Y=[],ce=m(ie);Y=Y.concat(ce.errors);var de=g(ce.valid),ye=de.valid;return Y=Y.concat(de.errors),Y=Y.concat(p(ye)),Y=Y.concat(M(ye)),Y=Y.concat(C(ye,V)),Y=Y.concat(U(ye)),Y}n.validatePatterns=d;function p(ie){var V=[],Y=r.filter(ie,function(ce){return r.isRegExp(ce[a])});return V=V.concat(f(Y)),V=V.concat(b(Y)),V=V.concat(y(Y)),V=V.concat(R(Y)),V=V.concat(h(Y)),V}function m(ie){var V=r.filter(ie,function(de){return!r.has(de,a)}),Y=r.map(V,function(de){return{message:"Token Type: ->"+de.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[de]}}),ce=r.difference(ie,V);return{errors:Y,valid:ce}}n.findMissingPatterns=m;function g(ie){var V=r.filter(ie,function(de){var ye=de[a];return!r.isRegExp(ye)&&!r.isFunction(ye)&&!r.has(ye,"exec")&&!r.isString(ye)}),Y=r.map(V,function(de){return{message:"Token Type: ->"+de.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[de]}}),ce=r.difference(ie,V);return{errors:Y,valid:ce}}n.findInvalidPatterns=g;var v=/[^\\][\$]/;function f(ie){var V=function(de){e(ye,de);function ye(){var Pe=de!==null&&de.apply(this,arguments)||this;return Pe.found=!1,Pe}return ye.prototype.visitEndAnchor=function(Pe){this.found=!0},ye}(t.BaseRegExpVisitor),Y=r.filter(ie,function(de){var ye=de[a];try{var Pe=s.getRegExpAst(ye),Be=new V;return Be.visit(Pe),Be.found}catch{return v.test(ye.source)}}),ce=r.map(Y,function(de){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+de.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[de]}});return ce}n.findEndOfInputAnchor=f;function h(ie){var V=r.filter(ie,function(ce){var de=ce[a];return de.test("")}),Y=r.map(V,function(ce){return{message:"Token Type: ->"+ce.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[ce]}});return Y}n.findEmptyMatchRegExps=h;var _=/[^\\[][\^]|^\^/;function b(ie){var V=function(de){e(ye,de);function ye(){var Pe=de!==null&&de.apply(this,arguments)||this;return Pe.found=!1,Pe}return ye.prototype.visitStartAnchor=function(Pe){this.found=!0},ye}(t.BaseRegExpVisitor),Y=r.filter(ie,function(de){var ye=de[a];try{var Pe=s.getRegExpAst(ye),Be=new V;return Be.visit(Pe),Be.found}catch{return _.test(ye.source)}}),ce=r.map(Y,function(de){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+de.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[de]}});return ce}n.findStartOfInputAnchor=b;function y(ie){var V=r.filter(ie,function(ce){var de=ce[a];return de instanceof RegExp&&(de.multiline||de.global)}),Y=r.map(V,function(ce){return{message:"Token Type: ->"+ce.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[ce]}});return Y}n.findUnsupportedFlags=y;function R(ie){var V=[],Y=r.map(ie,function(ye){return r.reduce(ie,function(Pe,Be){return ye.PATTERN.source===Be.PATTERN.source&&!r.contains(V,Be)&&Be.PATTERN!==i.Lexer.NA&&(V.push(Be),Pe.push(Be)),Pe},[])});Y=r.compact(Y);var ce=r.filter(Y,function(ye){return ye.length>1}),de=r.map(ce,function(ye){var Pe=r.map(ye,function(Fe){return Fe.name}),Be=r.first(ye).PATTERN;return{message:"The same RegExp pattern ->"+Be+"<-"+("has been used in all of the following Token Types: "+Pe.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:ye}});return de}n.findDuplicatePatterns=R;function M(ie){var V=r.filter(ie,function(ce){if(!r.has(ce,"GROUP"))return!1;var de=ce.GROUP;return de!==i.Lexer.SKIPPED&&de!==i.Lexer.NA&&!r.isString(de)}),Y=r.map(V,function(ce){return{message:"Token Type: ->"+ce.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[ce]}});return Y}n.findInvalidGroupType=M;function C(ie,V){var Y=r.filter(ie,function(de){return de.PUSH_MODE!==void 0&&!r.contains(V,de.PUSH_MODE)}),ce=r.map(Y,function(de){var ye="Token Type: ->"+de.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+de.PUSH_MODE+"<-which does not exist";return{message:ye,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[de]}});return ce}n.findModesThatDoNotExist=C;function U(ie){var V=[],Y=r.reduce(ie,function(ce,de,ye){var Pe=de.PATTERN;return Pe===i.Lexer.NA||(r.isString(Pe)?ce.push({str:Pe,idx:ye,tokenType:de}):r.isRegExp(Pe)&&S(Pe)&&ce.push({str:Pe.source,idx:ye,tokenType:de})),ce},[]);return r.forEach(ie,function(ce,de){r.forEach(Y,function(ye){var Pe=ye.str,Be=ye.idx,Fe=ye.tokenType;if(de<Be&&E(Pe,ce.PATTERN)){var qe="Token: ->"+Fe.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+ce.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;V.push({message:qe,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[ce,Fe]})}})}),V}n.findUnreachablePatterns=U;function E(ie,V){if(r.isRegExp(V)){var Y=V.exec(ie);return Y!==null&&Y.index===0}else{if(r.isFunction(V))return V(ie,0,[],{});if(r.has(V,"exec"))return V.exec(ie,0,[],{});if(typeof V=="string")return V===ie;throw Error("non exhaustive match")}}function S(ie){var V=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(V,function(Y){return ie.source.indexOf(Y)!==-1})===void 0}function w(ie){var V=ie.ignoreCase?"i":"";return new RegExp("^(?:"+ie.source+")",V)}n.addStartOfInput=w;function P(ie){var V=ie.ignoreCase?"iy":"y";return new RegExp(""+ie.source,V)}n.addStickyFlag=P;function L(ie,V,Y){var ce=[];return r.has(ie,n.DEFAULT_MODE)||ce.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(ie,n.MODES)||ce.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(ie,n.MODES)&&r.has(ie,n.DEFAULT_MODE)&&!r.has(ie.modes,ie.defaultMode)&&ce.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+ie.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(ie,n.MODES)&&r.forEach(ie.modes,function(de,ye){r.forEach(de,function(Pe,Be){r.isUndefined(Pe)&&ce.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+ye+"> at index: <"+Be+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),ce}n.performRuntimeChecks=L;function O(ie,V,Y){var ce=[],de=!1,ye=r.compact(r.flatten(r.mapValues(ie.modes,function(Fe){return Fe}))),Pe=r.reject(ye,function(Fe){return Fe[a]===i.Lexer.NA}),Be=he(Y);return V&&r.forEach(Pe,function(Fe){var qe=j(Fe,Be);if(qe!==!1){var X=ne(Fe,qe),Ge={message:X,type:qe.issue,tokenType:Fe};ce.push(Ge)}else r.has(Fe,"LINE_BREAKS")?Fe.LINE_BREAKS===!0&&(de=!0):o.canMatchCharCode(Be,Fe.PATTERN)&&(de=!0)}),V&&!de&&ce.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),ce}n.performWarningRuntimeChecks=O;function H(ie){var V={},Y=r.keys(ie);return r.forEach(Y,function(ce){var de=ie[ce];if(r.isArray(de))V[ce]=[];else throw Error("non exhaustive match")}),V}n.cloneEmptyGroups=H;function W(ie){var V=ie.PATTERN;if(r.isRegExp(V))return!1;if(r.isFunction(V)||r.has(V,"exec"))return!0;if(r.isString(V))return!1;throw Error("non exhaustive match")}n.isCustomPattern=W;function J(ie){return r.isString(ie)&&ie.length===1?ie.charCodeAt(0):!1}n.isShortPattern=J,n.LineTerminatorOptimizedTester={test:function(ie){for(var V=ie.length,Y=this.lastIndex;Y<V;Y++){var ce=ie.charCodeAt(Y);if(ce===10)return this.lastIndex=Y+1,!0;if(ce===13)return ie.charCodeAt(Y+1)===10?this.lastIndex=Y+2:this.lastIndex=Y+1,!0}return!1},lastIndex:0};function j(ie,V){if(r.has(ie,"LINE_BREAKS"))return!1;if(r.isRegExp(ie.PATTERN)){try{o.canMatchCharCode(V,ie.PATTERN)}catch(Y){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:Y.message}}return!1}else{if(r.isString(ie.PATTERN))return!1;if(W(ie))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function ne(ie,V){if(V.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+ie.name+`> Token Type
`)+("	 Root cause: "+V.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(V.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+ie.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=ne;function he(ie){var V=r.map(ie,function(Y){return r.isString(Y)&&Y.length>0?Y.charCodeAt(0):Y});return V}function Ee(ie,V,Y){ie[V]===void 0?ie[V]=[Y]:ie[V].push(Y)}n.minOptimizationVal=256;var re=[];function oe(ie){return ie<n.minOptimizationVal?ie:re[ie]}n.charCodeToOptimizedIndex=oe;function we(){if(r.isEmpty(re)){re=new Array(65536);for(var ie=0;ie<65536;ie++)re[ie]=ie>255?255+~~(ie/255):ie}}}),vo=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=xt();function t(v,f){var h=v.tokenTypeIdx;return h===f.tokenTypeIdx?!0:f.isParent===!0&&f.categoryMatchesMap[h]===!0}n.tokenStructuredMatcher=t;function i(v,f){return v.tokenTypeIdx===f.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(v){var f=o(v);s(f),c(f),a(f),e.forEach(f,function(h){h.isParent=h.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(v){for(var f=e.cloneArr(v),h=v,_=!0;_;){h=e.compact(e.flatten(e.map(h,function(y){return y.CATEGORIES})));var b=e.difference(h,f);f=f.concat(b),e.isEmpty(b)?_=!1:h=b}return f}n.expandCategories=o;function s(v){e.forEach(v,function(f){u(f)||(n.tokenIdxToClass[n.tokenShortNameIdx]=f,f.tokenTypeIdx=n.tokenShortNameIdx++),d(f)&&!e.isArray(f.CATEGORIES)&&(f.CATEGORIES=[f.CATEGORIES]),d(f)||(f.CATEGORIES=[]),p(f)||(f.categoryMatches=[]),m(f)||(f.categoryMatchesMap={})})}n.assignTokenDefaultProps=s;function a(v){e.forEach(v,function(f){f.categoryMatches=[],e.forEach(f.categoryMatchesMap,function(h,_){f.categoryMatches.push(n.tokenIdxToClass[_].tokenTypeIdx)})})}n.assignCategoriesTokensProp=a;function c(v){e.forEach(v,function(f){l([],f)})}n.assignCategoriesMapProp=c;function l(v,f){e.forEach(v,function(h){f.categoryMatchesMap[h.tokenTypeIdx]=!0}),e.forEach(f.CATEGORIES,function(h){var _=v.concat(f);e.contains(_,h)||l(_,h)})}n.singleAssignCategoriesToksMap=l;function u(v){return e.has(v,"tokenTypeIdx")}n.hasShortKeyProperty=u;function d(v){return e.has(v,"CATEGORIES")}n.hasCategoriesProperty=d;function p(v){return e.has(v,"categoryMatches")}n.hasExtendingTokensTypesProperty=p;function m(v){return e.has(v,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=m;function g(v){return e.has(v,"tokenTypeIdx")}n.isTokenType=g}),Wd=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),Cs=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=Hd(),t=xt(),i=vo(),r=Wd(),o=ic();(function(c){c[c.MISSING_PATTERN=0]="MISSING_PATTERN",c[c.INVALID_PATTERN=1]="INVALID_PATTERN",c[c.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",c[c.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",c[c.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",c[c.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",c[c.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",c[c.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",c[c.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",c[c.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",c[c.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",c[c.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",c[c.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",c[c.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",c[c.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",c[c.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",c[c.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var s={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(s);var a=function(){function c(l,u){var d=this;if(u===void 0&&(u=s),this.lexerDefinition=l,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof u=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(s,u);var p=this.config.traceInitPerf;p===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof p=="number"&&(this.traceInitMaxIdent=p,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var m,g=!0;d.TRACE_INIT("Lexer Config handling",function(){if(d.config.lineTerminatorsPattern===s.lineTerminatorsPattern)d.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(d.config.lineTerminatorCharacters===s.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(u.safeMode&&u.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');d.trackStartLines=/full|onlyStart/i.test(d.config.positionTracking),d.trackEndLines=/full/i.test(d.config.positionTracking),t.isArray(l)?(m={modes:{}},m.modes[e.DEFAULT_MODE]=t.cloneArr(l),m[e.DEFAULT_MODE]=e.DEFAULT_MODE):(g=!1,m=t.cloneObj(l))}),d.config.skipValidations===!1&&(d.TRACE_INIT("performRuntimeChecks",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.performRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))}),d.TRACE_INIT("performWarningRuntimeChecks",function(){d.lexerDefinitionWarning=d.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))})),m.modes=m.modes?m.modes:{},t.forEach(m.modes,function(_,b){m.modes[b]=t.reject(_,function(y){return t.isUndefined(y)})});var v=t.keys(m.modes);if(t.forEach(m.modes,function(_,b){d.TRACE_INIT("Mode: <"+b+"> processing",function(){if(d.modes.push(b),d.config.skipValidations===!1&&d.TRACE_INIT("validatePatterns",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.validatePatterns(_,v))}),t.isEmpty(d.lexerDefinitionErrors)){i.augmentTokenTypes(_);var y;d.TRACE_INIT("analyzeTokenTypes",function(){y=e.analyzeTokenTypes(_,{lineTerminatorCharacters:d.config.lineTerminatorCharacters,positionTracking:u.positionTracking,ensureOptimizations:u.ensureOptimizations,safeMode:u.safeMode,tracer:d.TRACE_INIT.bind(d)})}),d.patternIdxToConfig[b]=y.patternIdxToConfig,d.charCodeToPatternIdxToConfig[b]=y.charCodeToPatternIdxToConfig,d.emptyGroups=t.merge(d.emptyGroups,y.emptyGroups),d.hasCustom=y.hasCustom||d.hasCustom,d.canModeBeOptimized[b]=y.canBeOptimized}})}),d.defaultMode=m.defaultMode,!t.isEmpty(d.lexerDefinitionErrors)&&!d.config.deferDefinitionErrorsHandling){var f=t.map(d.lexerDefinitionErrors,function(_){return _.message}),h=f.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+h)}t.forEach(d.lexerDefinitionWarning,function(_){t.PRINT_WARNING(_.message)}),d.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(d.chopInput=t.IDENTITY,d.match=d.matchWithTest):(d.updateLastIndex=t.NOOP,d.match=d.matchWithExec),g&&(d.handleModes=t.NOOP),d.trackStartLines===!1&&(d.computeNewColumn=t.IDENTITY),d.trackEndLines===!1&&(d.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(d.config.positionTracking))d.createTokenInstance=d.createFullToken;else if(/onlyStart/i.test(d.config.positionTracking))d.createTokenInstance=d.createStartOnlyToken;else if(/onlyOffset/i.test(d.config.positionTracking))d.createTokenInstance=d.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+d.config.positionTracking+'"');d.hasCustom?(d.addToken=d.addTokenUsingPush,d.handlePayload=d.handlePayloadWithCustom):(d.addToken=d.addTokenUsingMemberAccess,d.handlePayload=d.handlePayloadNoCustom)}),d.TRACE_INIT("Failed Optimization Warnings",function(){var _=t.reduce(d.canModeBeOptimized,function(b,y,R){return y===!1&&b.push(R),b},[]);if(u.ensureOptimizations&&!t.isEmpty(_))throw Error("Lexer Modes: < "+_.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),d.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),d.TRACE_INIT("toFastProperties",function(){t.toFastProperties(d)})})}return c.prototype.tokenize=function(l,u){if(u===void 0&&(u=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var d=t.map(this.lexerDefinitionErrors,function(g){return g.message}),p=d.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+p)}var m=this.tokenizeInternal(l,u);return m},c.prototype.tokenizeInternal=function(l,u){var d=this,p,m,g,v,f,h,_,b,y,R,M,C,U,E,S=l,w=S.length,P=0,L=0,O=this.hasCustom?0:Math.floor(l.length/10),H=new Array(O),W=[],J=this.trackStartLines?1:void 0,j=this.trackStartLines?1:void 0,ne=e.cloneEmptyGroups(this.emptyGroups),he=this.trackStartLines,Ee=this.config.lineTerminatorsPattern,re=0,oe=[],we=[],ie=[],V=[];Object.freeze(V);var Y=void 0;function ce(){return oe}function de(F){var $=e.charCodeToOptimizedIndex(F),q=we[$];return q===void 0?V:q}var ye=function(F){if(ie.length===1&&F.tokenType.PUSH_MODE===void 0){var $=d.config.errorMessageProvider.buildUnableToPopLexerModeMessage(F);W.push({offset:F.startOffset,line:F.startLine!==void 0?F.startLine:void 0,column:F.startColumn!==void 0?F.startColumn:void 0,length:F.image.length,message:$})}else{ie.pop();var q=t.last(ie);oe=d.patternIdxToConfig[q],we=d.charCodeToPatternIdxToConfig[q],re=oe.length;var ae=d.canModeBeOptimized[q]&&d.config.safeMode===!1;we&&ae?Y=de:Y=ce}};function Pe(F){ie.push(F),we=this.charCodeToPatternIdxToConfig[F],oe=this.patternIdxToConfig[F],re=oe.length,re=oe.length;var $=this.canModeBeOptimized[F]&&this.config.safeMode===!1;we&&$?Y=de:Y=ce}Pe.call(this,u);for(var Be;P<w;){f=null;var Fe=S.charCodeAt(P),qe=Y(Fe),X=qe.length;for(p=0;p<X;p++){Be=qe[p];var Ge=Be.pattern;h=null;var ee=Be.short;if(ee!==!1?Fe===ee&&(f=Ge):Be.isCustom===!0?(E=Ge.exec(S,P,H,ne),E!==null?(f=E[0],E.payload!==void 0&&(h=E.payload)):f=null):(this.updateLastIndex(Ge,P),f=this.match(Ge,l,P)),f!==null){if(v=Be.longerAlt,v!==void 0){var me=oe[v],te=me.pattern;_=null,me.isCustom===!0?(E=te.exec(S,P,H,ne),E!==null?(g=E[0],E.payload!==void 0&&(_=E.payload)):g=null):(this.updateLastIndex(te,P),g=this.match(te,l,P)),g&&g.length>f.length&&(f=g,h=_,Be=me)}break}}if(f!==null){if(b=f.length,y=Be.group,y!==void 0&&(R=Be.tokenTypeIdx,M=this.createTokenInstance(f,P,R,Be.tokenType,J,j,b),this.handlePayload(M,h),y===!1?L=this.addToken(H,L,M):ne[y].push(M)),l=this.chopInput(l,b),P=P+b,j=this.computeNewColumn(j,b),he===!0&&Be.canLineTerminator===!0){var Me=0,Re=void 0,Ue=void 0;Ee.lastIndex=0;do Re=Ee.test(f),Re===!0&&(Ue=Ee.lastIndex-1,Me++);while(Re===!0);Me!==0&&(J=J+Me,j=b-Ue,this.updateTokenEndLineColumnLocation(M,y,Ue,Me,J,j,b))}this.handleModes(Be,ye,Pe,M)}else{for(var T=P,x=J,A=j,D=!1;!D&&P<w;)for(S.charCodeAt(P),l=this.chopInput(l,1),P++,m=0;m<re;m++){var N=oe[m],Ge=N.pattern,ee=N.short;if(ee!==!1?S.charCodeAt(P)===ee&&(D=!0):N.isCustom===!0?D=Ge.exec(S,P,H,ne)!==null:(this.updateLastIndex(Ge,P),D=Ge.exec(l)!==null),D===!0)break}C=P-T,U=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(S,T,C,x,A),W.push({offset:T,line:x,column:A,length:C,message:U})}}return this.hasCustom||(H.length=L),{tokens:H,groups:ne,errors:W}},c.prototype.handleModes=function(l,u,d,p){if(l.pop===!0){var m=l.push;u(p),m!==void 0&&d.call(this,m)}else l.push!==void 0&&d.call(this,l.push)},c.prototype.chopInput=function(l,u){return l.substring(u)},c.prototype.updateLastIndex=function(l,u){l.lastIndex=u},c.prototype.updateTokenEndLineColumnLocation=function(l,u,d,p,m,g,v){var f,h;u!==void 0&&(f=d===v-1,h=f?-1:0,p===1&&f===!0||(l.endLine=m+h,l.endColumn=g-1+-h))},c.prototype.computeNewColumn=function(l,u){return l+u},c.prototype.createTokenInstance=function(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return null},c.prototype.createOffsetOnlyToken=function(l,u,d,p){return{image:l,startOffset:u,tokenTypeIdx:d,tokenType:p}},c.prototype.createStartOnlyToken=function(l,u,d,p,m,g){return{image:l,startOffset:u,startLine:m,startColumn:g,tokenTypeIdx:d,tokenType:p}},c.prototype.createFullToken=function(l,u,d,p,m,g,v){return{image:l,startOffset:u,endOffset:u+v-1,startLine:m,endLine:m,startColumn:g,endColumn:g+v-1,tokenTypeIdx:d,tokenType:p}},c.prototype.addToken=function(l,u,d){return 666},c.prototype.addTokenUsingPush=function(l,u,d){return l.push(d),u},c.prototype.addTokenUsingMemberAccess=function(l,u,d){return l[u]=d,u++,u},c.prototype.handlePayload=function(l,u){},c.prototype.handlePayloadNoCustom=function(l,u){},c.prototype.handlePayloadWithCustom=function(l,u){u!==null&&(l.payload=u)},c.prototype.match=function(l,u,d){return null},c.prototype.matchWithTest=function(l,u,d){var p=l.test(u);return p===!0?u.substring(d,l.lastIndex):null},c.prototype.matchWithExec=function(l,u){var d=l.exec(u);return d!==null?d[0]:d},c.prototype.TRACE_INIT=function(l,u){if(this.traceInitPerf===!0){this.traceInitIndent++;var d=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(d+"--> <"+l+">");var p=t.timer(u),m=p.time,g=p.value,v=m>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&v(d+"<-- <"+l+"> time: "+m+"ms"),this.traceInitIndent--,g}else return u()},c.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",c.NA=/NOT_APPLICABLE/,c}();n.Lexer=a}),Bi=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=xt(),t=Cs(),i=vo();function r(y){return s(y)?y.LABEL:y.name}n.tokenLabel=r;function o(y){return y.name}n.tokenName=o;function s(y){return e.isString(y.LABEL)&&y.LABEL!==""}n.hasTokenLabel=s;var a="parent",c="categories",l="label",u="group",d="push_mode",p="pop_mode",m="longer_alt",g="line_breaks",v="start_chars_hint";function f(y){return h(y)}n.createToken=f;function h(y){var R=y.pattern,M={};if(M.name=y.name,e.isUndefined(R)||(M.PATTERN=R),e.has(y,a))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(y,c)&&(M.CATEGORIES=y[c]),i.augmentTokenTypes([M]),e.has(y,l)&&(M.LABEL=y[l]),e.has(y,u)&&(M.GROUP=y[u]),e.has(y,p)&&(M.POP_MODE=y[p]),e.has(y,d)&&(M.PUSH_MODE=y[d]),e.has(y,m)&&(M.LONGER_ALT=y[m]),e.has(y,g)&&(M.LINE_BREAKS=y[g]),e.has(y,v)&&(M.START_CHARS_HINT=y[v]),M}n.EOF=f({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function _(y,R,M,C,U,E,S,w){return{image:R,startOffset:M,endOffset:C,startLine:U,endLine:E,startColumn:S,endColumn:w,tokenTypeIdx:y.tokenTypeIdx,tokenType:y}}n.createTokenInstance=_;function b(y,R){return i.tokenStructuredMatcher(y,R)}n.tokenMatcher=b}),gn=it(n=>{var e=n&&n.__extends||function(){var h=function(_,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,R){y.__proto__=R}||function(y,R){for(var M in R)Object.prototype.hasOwnProperty.call(R,M)&&(y[M]=R[M])},h(_,b)};return function(_,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");h(_,b);function y(){this.constructor=_}_.prototype=b===null?Object.create(b):(y.prototype=b.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=xt(),i=Bi(),r=function(){function h(_){this._definition=_}return Object.defineProperty(h.prototype,"definition",{get:function(){return this._definition},set:function(_){this._definition=_},enumerable:!1,configurable:!0}),h.prototype.accept=function(_){_.visit(this),t.forEach(this.definition,function(b){b.accept(_)})},h}();n.AbstractProduction=r;var o=function(h){e(_,h);function _(b){var y=h.call(this,[])||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(b){},enumerable:!1,configurable:!0}),_.prototype.accept=function(b){b.visit(this)},_}(r);n.NonTerminal=o;var s=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.orgText="",t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Rule=s;var a=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.ignoreAmbiguities=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Alternative=a;var c=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Option=c;var l=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatory=l;var u=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatoryWithSeparator=u;var d=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Repetition=d;var p=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionWithSeparator=p;var m=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,y.ignoreAmbiguities=!1,y.hasPredicates=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this._definition},set:function(b){this._definition=b},enumerable:!1,configurable:!0}),_}(r);n.Alternation=m;var g=function(){function h(_){this.idx=1,t.assign(this,t.pick(_,function(b){return b!==void 0}))}return h.prototype.accept=function(_){_.visit(this)},h}();n.Terminal=g;function v(h){return t.map(h,f)}n.serializeGrammar=v;function f(h){function _(R){return t.map(R,f)}if(h instanceof o)return{type:"NonTerminal",name:h.nonTerminalName,idx:h.idx};if(h instanceof a)return{type:"Alternative",definition:_(h.definition)};if(h instanceof c)return{type:"Option",idx:h.idx,definition:_(h.definition)};if(h instanceof l)return{type:"RepetitionMandatory",idx:h.idx,definition:_(h.definition)};if(h instanceof u)return{type:"RepetitionMandatoryWithSeparator",idx:h.idx,separator:f(new g({terminalType:h.separator})),definition:_(h.definition)};if(h instanceof p)return{type:"RepetitionWithSeparator",idx:h.idx,separator:f(new g({terminalType:h.separator})),definition:_(h.definition)};if(h instanceof d)return{type:"Repetition",idx:h.idx,definition:_(h.definition)};if(h instanceof m)return{type:"Alternation",idx:h.idx,definition:_(h.definition)};if(h instanceof g){var b={type:"Terminal",name:h.terminalType.name,label:i.tokenLabel(h.terminalType),idx:h.idx},y=h.terminalType.PATTERN;return h.terminalType.PATTERN&&(b.pattern=t.isRegExp(y)?y.source:y),b}else{if(h instanceof s)return{type:"Rule",name:h.name,orgText:h.orgText,definition:_(h.definition)};throw Error("non exhaustive match")}}n.serializeProduction=f}),rc=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=xt(),t=gn(),i=function(){function o(){}return o.prototype.walk=function(s,a){var c=this;a===void 0&&(a=[]),e.forEach(s.definition,function(l,u){var d=e.drop(s.definition,u+1);if(l instanceof t.NonTerminal)c.walkProdRef(l,d,a);else if(l instanceof t.Terminal)c.walkTerminal(l,d,a);else if(l instanceof t.Alternative)c.walkFlat(l,d,a);else if(l instanceof t.Option)c.walkOption(l,d,a);else if(l instanceof t.RepetitionMandatory)c.walkAtLeastOne(l,d,a);else if(l instanceof t.RepetitionMandatoryWithSeparator)c.walkAtLeastOneSep(l,d,a);else if(l instanceof t.RepetitionWithSeparator)c.walkManySep(l,d,a);else if(l instanceof t.Repetition)c.walkMany(l,d,a);else if(l instanceof t.Alternation)c.walkOr(l,d,a);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(s,a,c){},o.prototype.walkProdRef=function(s,a,c){},o.prototype.walkFlat=function(s,a,c){var l=a.concat(c);this.walk(s,l)},o.prototype.walkOption=function(s,a,c){var l=a.concat(c);this.walk(s,l)},o.prototype.walkAtLeastOne=function(s,a,c){var l=[new t.Option({definition:s.definition})].concat(a,c);this.walk(s,l)},o.prototype.walkAtLeastOneSep=function(s,a,c){var l=r(s,a,c);this.walk(s,l)},o.prototype.walkMany=function(s,a,c){var l=[new t.Option({definition:s.definition})].concat(a,c);this.walk(s,l)},o.prototype.walkManySep=function(s,a,c){var l=r(s,a,c);this.walk(s,l)},o.prototype.walkOr=function(s,a,c){var l=this,u=a.concat(c);e.forEach(s.definition,function(d){var p=new t.Alternative({definition:[d]});l.walk(p,u)})},o}();n.RestWalker=i;function r(o,s,a){var c=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],l=c.concat(s,a);return l}}),_o=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=gn(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),Ps=it(n=>{var e=n&&n.__extends||function(){var p=function(m,g){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,f){v.__proto__=f}||function(v,f){for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(v[h]=f[h])},p(m,g)};return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(m,g);function v(){this.constructor=m}m.prototype=g===null?Object.create(g):(v.prototype=g.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=xt(),i=gn(),r=_o();function o(p){return p instanceof i.Alternative||p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionMandatory||p instanceof i.RepetitionMandatoryWithSeparator||p instanceof i.RepetitionWithSeparator||p instanceof i.Terminal||p instanceof i.Rule}n.isSequenceProd=o;function s(p,m){m===void 0&&(m=[]);var g=p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionWithSeparator;return g?!0:p instanceof i.Alternation?t.some(p.definition,function(v){return s(v,m)}):p instanceof i.NonTerminal&&t.contains(m,p)?!1:p instanceof i.AbstractProduction?(p instanceof i.NonTerminal&&m.push(p),t.every(p.definition,function(v){return s(v,m)})):!1}n.isOptionalProd=s;function a(p){return p instanceof i.Alternation}n.isBranchingProd=a;function c(p){if(p instanceof i.NonTerminal)return"SUBRULE";if(p instanceof i.Option)return"OPTION";if(p instanceof i.Alternation)return"OR";if(p instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(p instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(p instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(p instanceof i.Repetition)return"MANY";if(p instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=c;var l=function(p){e(m,p);function m(){var g=p!==null&&p.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return m.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},m.prototype.visitTerminal=function(g){var v=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},m.prototype.visitNonTerminal=function(g){var v=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},m.prototype.visitOption=function(g){this.dslMethods.option.push(g)},m.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},m.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},m.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},m.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},m.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},m}(r.GAstVisitor);n.DslMethodsCollectorVisitor=l;var u=new l;function d(p){u.reset(),p.accept(u);var m=u.dslMethods;return u.reset(),m}n.collectMethods=d}),Xd=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=xt(),t=gn(),i=Ps();function r(c){if(c instanceof t.NonTerminal)return r(c.referencedRule);if(c instanceof t.Terminal)return a(c);if(i.isSequenceProd(c))return o(c);if(i.isBranchingProd(c))return s(c);throw Error("non exhaustive match")}n.first=r;function o(c){for(var l=[],u=c.definition,d=0,p=u.length>d,m,g=!0;p&&g;)m=u[d],g=i.isOptionalProd(m),l=l.concat(r(m)),d=d+1,p=u.length>d;return e.uniq(l)}n.firstForSequence=o;function s(c){var l=e.map(c.definition,function(u){return r(u)});return e.uniq(e.flatten(l))}n.firstForBranching=s;function a(c){return[c.terminalType]}n.firstForTerminal=a}),jd=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),Dy=it(n=>{var e=n&&n.__extends||function(){var d=function(p,m){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,v){g.__proto__=v}||function(g,v){for(var f in v)Object.prototype.hasOwnProperty.call(v,f)&&(g[f]=v[f])},d(p,m)};return function(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");d(p,m);function g(){this.constructor=p}p.prototype=m===null?Object.create(m):(g.prototype=m.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=rc(),i=Xd(),r=xt(),o=jd(),s=gn(),a=function(d){e(p,d);function p(m){var g=d.call(this)||this;return g.topProd=m,g.follows={},g}return p.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},p.prototype.walkTerminal=function(m,g,v){},p.prototype.walkProdRef=function(m,g,v){var f=l(m.referencedRule,m.idx)+this.topProd.name,h=g.concat(v),_=new s.Alternative({definition:h}),b=i.first(_);this.follows[f]=b},p}(t.RestWalker);n.ResyncFollowsWalker=a;function c(d){var p={};return r.forEach(d,function(m){var g=new a(m).startWalking();r.assign(p,g)}),p}n.computeAllProdsFollows=c;function l(d,p){return d.name+p+o.IN}n.buildBetweenProdsFollowPrefix=l;function u(d){var p=d.terminalType.name;return p+d.idx+o.IN}n.buildInProdFollowPrefix=u}),Ls=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=Bi(),t=xt(),i=xt(),r=gn(),o=Ps();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(s){var a=s.expected,c=s.actual;s.previous,s.ruleName;var l=e.hasTokenLabel(a),u=l?"--> "+e.tokenLabel(a)+" <--":"token of type --> "+a.name+" <--",d="Expecting "+u+" but found --> '"+c.image+"' <--";return d},buildNotAllInputParsedMessage:function(s){var a=s.firstRedundant;return s.ruleName,"Redundant input, expecting EOF but found: "+a.image},buildNoViableAltMessage:function(s){var a=s.expectedPathsPerAlt,c=s.actual;s.previous;var l=s.customUserDescription;s.ruleName;var u="Expecting: ",d=i.first(c).image,p=`
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
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return u},buildInvalidRuleNameError:function(s){return"deprecated"},buildDuplicateRuleNameError:function(s){var a;s.topLevelRule instanceof r.Rule?a=s.topLevelRule.name:a=s.topLevelRule;var c="Duplicate definition, rule: ->"+a+"<- is already defined in the grammar: ->"+s.grammarName+"<-";return c}}}),Fy=it(n=>{var e=n&&n.__extends||function(){var a=function(c,l){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])},a(c,l)};return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");a(c,l);function u(){this.constructor=c}c.prototype=l===null?Object.create(l):(u.prototype=l.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=Mn(),i=xt(),r=_o();function o(a,c){var l=new s(a,c);return l.resolveRefs(),l.errors}n.resolveGrammar=o;var s=function(a){e(c,a);function c(l,u){var d=a.call(this)||this;return d.nameToTopRule=l,d.errMsgProvider=u,d.errors=[],d}return c.prototype.resolveRefs=function(){var l=this;i.forEach(i.values(this.nameToTopRule),function(u){l.currTopLevel=u,u.accept(l)})},c.prototype.visitNonTerminal=function(l){var u=this.nameToTopRule[l.nonTerminalName];if(u)l.referencedRule=u;else{var d=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,l);this.errors.push({message:d,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:l.nonTerminalName})}},c}(r.GAstVisitor);n.GastRefResolverVisitor=s}),Is=it(n=>{var e=n&&n.__extends||function(){var f=function(h,_){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(b[R]=y[R])},f(h,_)};return function(h,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");f(h,_);function b(){this.constructor=h}h.prototype=_===null?Object.create(_):(b.prototype=_.prototype,new b)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=rc(),i=xt(),r=Xd(),o=gn(),s=function(f){e(h,f);function h(_,b){var y=f.call(this)||this;return y.topProd=_,y.path=b,y.possibleTokTypes=[],y.nextProductionName="",y.nextProductionOccurrence=0,y.found=!1,y.isAtEndOfPath=!1,y}return h.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},h.prototype.walk=function(_,b){b===void 0&&(b=[]),this.found||f.prototype.walk.call(this,_,b)},h.prototype.walkProdRef=function(_,b,y){if(_.referencedRule.name===this.nextProductionName&&_.idx===this.nextProductionOccurrence){var R=b.concat(y);this.updateExpectedNext(),this.walk(_.referencedRule,R)}},h.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},h}(t.RestWalker);n.AbstractNextPossibleTokensWalker=s;var a=function(f){e(h,f);function h(_,b){var y=f.call(this,_,b)||this;return y.path=b,y.nextTerminalName="",y.nextTerminalOccurrence=0,y.nextTerminalName=y.path.lastTok.name,y.nextTerminalOccurrence=y.path.lastTokOccurrence,y}return h.prototype.walkTerminal=function(_,b,y){if(this.isAtEndOfPath&&_.terminalType.name===this.nextTerminalName&&_.idx===this.nextTerminalOccurrence&&!this.found){var R=b.concat(y),M=new o.Alternative({definition:R});this.possibleTokTypes=r.first(M),this.found=!0}},h}(s);n.NextAfterTokenWalker=a;var c=function(f){e(h,f);function h(_,b){var y=f.call(this)||this;return y.topRule=_,y.occurrence=b,y.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},y}return h.prototype.startWalking=function(){return this.walk(this.topRule),this.result},h}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=c;var l=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkMany=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkMany.call(this,_,b,y)},h}(c);n.NextTerminalAfterManyWalker=l;var u=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkManySep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkManySep.call(this,_,b,y)},h}(c);n.NextTerminalAfterManySepWalker=u;var d=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkAtLeastOne=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOne.call(this,_,b,y)},h}(c);n.NextTerminalAfterAtLeastOneWalker=d;var p=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkAtLeastOneSep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOneSep.call(this,_,b,y)},h}(c);n.NextTerminalAfterAtLeastOneSepWalker=p;function m(f,h,_){_===void 0&&(_=[]),_=i.cloneArr(_);var b=[],y=0;function R(E){return E.concat(i.drop(f,y+1))}function M(E){var S=m(R(E),h,_);return b.concat(S)}for(;_.length<h&&y<f.length;){var C=f[y];if(C instanceof o.Alternative||C instanceof o.NonTerminal)return M(C.definition);if(C instanceof o.Option)b=M(C.definition);else if(C instanceof o.RepetitionMandatory){var U=C.definition.concat([new o.Repetition({definition:C.definition})]);return M(U)}else if(C instanceof o.RepetitionMandatoryWithSeparator){var U=[new o.Alternative({definition:C.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})];return M(U)}else if(C instanceof o.RepetitionWithSeparator){var U=C.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})]);b=M(U)}else if(C instanceof o.Repetition){var U=C.definition.concat([new o.Repetition({definition:C.definition})]);b=M(U)}else{if(C instanceof o.Alternation)return i.forEach(C.definition,function(E){i.isEmpty(E.definition)===!1&&(b=M(E.definition))}),b;if(C instanceof o.Terminal)_.push(C.terminalType);else throw Error("non exhaustive match")}y++}return b.push({partialPath:_,suffixDef:i.drop(f,y)}),b}n.possiblePathsFrom=m;function g(f,h,_,b){var y="EXIT_NONE_TERMINAL",R=[y],M="EXIT_ALTERNATIVE",C=!1,U=h.length,E=U-b-1,S=[],w=[];for(w.push({idx:-1,def:f,ruleStack:[],occurrenceStack:[]});!i.isEmpty(w);){var P=w.pop();if(P===M){C&&i.last(w).idx<=E&&w.pop();continue}var L=P.def,O=P.idx,H=P.ruleStack,W=P.occurrenceStack;if(!i.isEmpty(L)){var J=L[0];if(J===y){var j={idx:O,def:i.drop(L),ruleStack:i.dropRight(H),occurrenceStack:i.dropRight(W)};w.push(j)}else if(J instanceof o.Terminal)if(O<U-1){var ne=O+1,he=h[ne];if(_(he,J.terminalType)){var j={idx:ne,def:i.drop(L),ruleStack:H,occurrenceStack:W};w.push(j)}}else if(O===U-1)S.push({nextTokenType:J.terminalType,nextTokenOccurrence:J.idx,ruleStack:H,occurrenceStack:W}),C=!0;else throw Error("non exhaustive match");else if(J instanceof o.NonTerminal){var Ee=i.cloneArr(H);Ee.push(J.nonTerminalName);var re=i.cloneArr(W);re.push(J.idx);var j={idx:O,def:J.definition.concat(R,i.drop(L)),ruleStack:Ee,occurrenceStack:re};w.push(j)}else if(J instanceof o.Option){var oe={idx:O,def:i.drop(L),ruleStack:H,occurrenceStack:W};w.push(oe),w.push(M);var we={idx:O,def:J.definition.concat(i.drop(L)),ruleStack:H,occurrenceStack:W};w.push(we)}else if(J instanceof o.RepetitionMandatory){var ie=new o.Repetition({definition:J.definition,idx:J.idx}),V=J.definition.concat([ie],i.drop(L)),j={idx:O,def:V,ruleStack:H,occurrenceStack:W};w.push(j)}else if(J instanceof o.RepetitionMandatoryWithSeparator){var Y=new o.Terminal({terminalType:J.separator}),ie=new o.Repetition({definition:[Y].concat(J.definition),idx:J.idx}),V=J.definition.concat([ie],i.drop(L)),j={idx:O,def:V,ruleStack:H,occurrenceStack:W};w.push(j)}else if(J instanceof o.RepetitionWithSeparator){var oe={idx:O,def:i.drop(L),ruleStack:H,occurrenceStack:W};w.push(oe),w.push(M);var Y=new o.Terminal({terminalType:J.separator}),ce=new o.Repetition({definition:[Y].concat(J.definition),idx:J.idx}),V=J.definition.concat([ce],i.drop(L)),we={idx:O,def:V,ruleStack:H,occurrenceStack:W};w.push(we)}else if(J instanceof o.Repetition){var oe={idx:O,def:i.drop(L),ruleStack:H,occurrenceStack:W};w.push(oe),w.push(M);var ce=new o.Repetition({definition:J.definition,idx:J.idx}),V=J.definition.concat([ce],i.drop(L)),we={idx:O,def:V,ruleStack:H,occurrenceStack:W};w.push(we)}else if(J instanceof o.Alternation)for(var de=J.definition.length-1;de>=0;de--){var ye=J.definition[de],Pe={idx:O,def:ye.definition.concat(i.drop(L)),ruleStack:H,occurrenceStack:W};w.push(Pe),w.push(M)}else if(J instanceof o.Alternative)w.push({idx:O,def:J.definition.concat(i.drop(L)),ruleStack:H,occurrenceStack:W});else if(J instanceof o.Rule)w.push(v(J,O,H,W));else throw Error("non exhaustive match")}}return S}n.nextPossibleTokensAfter=g;function v(f,h,_,b){var y=i.cloneArr(_);y.push(f.name);var R=i.cloneArr(b);return R.push(1),{idx:h,def:f.definition,ruleStack:y,occurrenceStack:R}}}),Ns=it(n=>{var e=n&&n.__extends||function(){var E=function(S,w){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(P,L){P.__proto__=L}||function(P,L){for(var O in L)Object.prototype.hasOwnProperty.call(L,O)&&(P[O]=L[O])},E(S,w)};return function(S,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");E(S,w);function P(){this.constructor=S}S.prototype=w===null?Object.create(w):(P.prototype=w.prototype,new P)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=xt(),i=Is(),r=rc(),o=vo(),s=gn(),a=_o(),c;(function(E){E[E.OPTION=0]="OPTION",E[E.REPETITION=1]="REPETITION",E[E.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",E[E.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",E[E.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",E[E.ALTERNATION=5]="ALTERNATION"})(c=n.PROD_TYPE||(n.PROD_TYPE={}));function l(E){if(E instanceof s.Option)return c.OPTION;if(E instanceof s.Repetition)return c.REPETITION;if(E instanceof s.RepetitionMandatory)return c.REPETITION_MANDATORY;if(E instanceof s.RepetitionMandatoryWithSeparator)return c.REPETITION_MANDATORY_WITH_SEPARATOR;if(E instanceof s.RepetitionWithSeparator)return c.REPETITION_WITH_SEPARATOR;if(E instanceof s.Alternation)return c.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=l;function u(E,S,w,P,L,O){var H=y(E,S,w),W=U(H)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return O(H,P,W,L)}n.buildLookaheadFuncForOr=u;function d(E,S,w,P,L,O){var H=R(E,S,L,w),W=U(H)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return O(H[0],W,P)}n.buildLookaheadFuncForOptionalProd=d;function p(E,S,w,P){var L=E.length,O=t.every(E,function(J){return t.every(J,function(j){return j.length===1})});if(S)return function(J){for(var j=t.map(J,function(ce){return ce.GATE}),ne=0;ne<L;ne++){var he=E[ne],Ee=he.length,re=j[ne];if(!(re!==void 0&&re.call(this)===!1))e:for(var oe=0;oe<Ee;oe++){for(var we=he[oe],ie=we.length,V=0;V<ie;V++){var Y=this.LA(V+1);if(w(Y,we[V])===!1)continue e}return ne}}};if(O&&!P){var H=t.map(E,function(J){return t.flatten(J)}),W=t.reduce(H,function(J,j,ne){return t.forEach(j,function(he){t.has(J,he.tokenTypeIdx)||(J[he.tokenTypeIdx]=ne),t.forEach(he.categoryMatches,function(Ee){t.has(J,Ee)||(J[Ee]=ne)})}),J},[]);return function(){var J=this.LA(1);return W[J.tokenTypeIdx]}}else return function(){for(var J=0;J<L;J++){var j=E[J],ne=j.length;e:for(var he=0;he<ne;he++){for(var Ee=j[he],re=Ee.length,oe=0;oe<re;oe++){var we=this.LA(oe+1);if(w(we,Ee[oe])===!1)continue e}return J}}}}n.buildAlternativesLookAheadFunc=p;function m(E,S,w){var P=t.every(E,function(j){return j.length===1}),L=E.length;if(P&&!w){var O=t.flatten(E);if(O.length===1&&t.isEmpty(O[0].categoryMatches)){var H=O[0],W=H.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===W}}else{var J=t.reduce(O,function(j,ne,he){return j[ne.tokenTypeIdx]=!0,t.forEach(ne.categoryMatches,function(Ee){j[Ee]=!0}),j},[]);return function(){var j=this.LA(1);return J[j.tokenTypeIdx]===!0}}}else return function(){e:for(var j=0;j<L;j++){for(var ne=E[j],he=ne.length,Ee=0;Ee<he;Ee++){var re=this.LA(Ee+1);if(S(re,ne[Ee])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=m;var g=function(E){e(S,E);function S(w,P,L){var O=E.call(this)||this;return O.topProd=w,O.targetOccurrence=P,O.targetProdType=L,O}return S.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},S.prototype.checkIsTarget=function(w,P,L,O){return w.idx===this.targetOccurrence&&this.targetProdType===P?(this.restDef=L.concat(O),!0):!1},S.prototype.walkOption=function(w,P,L){this.checkIsTarget(w,c.OPTION,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkAtLeastOne=function(w,P,L){this.checkIsTarget(w,c.REPETITION_MANDATORY,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkAtLeastOneSep=function(w,P,L){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkMany=function(w,P,L){this.checkIsTarget(w,c.REPETITION,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkManySep=function(w,P,L){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR,P,L)||E.prototype.walkOption.call(this,w,P,L)},S}(r.RestWalker),v=function(E){e(S,E);function S(w,P,L){var O=E.call(this)||this;return O.targetOccurrence=w,O.targetProdType=P,O.targetRef=L,O.result=[],O}return S.prototype.checkIsTarget=function(w,P){w.idx===this.targetOccurrence&&this.targetProdType===P&&(this.targetRef===void 0||w===this.targetRef)&&(this.result=w.definition)},S.prototype.visitOption=function(w){this.checkIsTarget(w,c.OPTION)},S.prototype.visitRepetition=function(w){this.checkIsTarget(w,c.REPETITION)},S.prototype.visitRepetitionMandatory=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY)},S.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR)},S.prototype.visitRepetitionWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR)},S.prototype.visitAlternation=function(w){this.checkIsTarget(w,c.ALTERNATION)},S}(a.GAstVisitor);function f(E){for(var S=new Array(E),w=0;w<E;w++)S[w]=[];return S}function h(E){for(var S=[""],w=0;w<E.length;w++){for(var P=E[w],L=[],O=0;O<S.length;O++){var H=S[O];L.push(H+"_"+P.tokenTypeIdx);for(var W=0;W<P.categoryMatches.length;W++){var J="_"+P.categoryMatches[W];L.push(H+J)}}S=L}return S}function _(E,S,w){for(var P=0;P<E.length;P++)if(P!==w)for(var L=E[P],O=0;O<S.length;O++){var H=S[O];if(L[H]===!0)return!1}return!0}function b(E,S){for(var w=t.map(E,function(ne){return i.possiblePathsFrom([ne],1)}),P=f(w.length),L=t.map(w,function(ne){var he={};return t.forEach(ne,function(Ee){var re=h(Ee.partialPath);t.forEach(re,function(oe){he[oe]=!0})}),he}),O=w,H=1;H<=S;H++){var W=O;O=f(W.length);for(var J=function(ne){for(var he=W[ne],Ee=0;Ee<he.length;Ee++){var re=he[Ee].partialPath,oe=he[Ee].suffixDef,we=h(re),ie=_(L,we,ne);if(ie||t.isEmpty(oe)||re.length===S){var V=P[ne];if(M(V,re)===!1){V.push(re);for(var Y=0;Y<we.length;Y++){var ce=we[Y];L[ne][ce]=!0}}}else{var de=i.possiblePathsFrom(oe,H+1,re);O[ne]=O[ne].concat(de),t.forEach(de,function(ye){var Pe=h(ye.partialPath);t.forEach(Pe,function(Be){L[ne][Be]=!0})})}}},j=0;j<W.length;j++)J(j)}return P}n.lookAheadSequenceFromAlternatives=b;function y(E,S,w,P){var L=new v(E,c.ALTERNATION,P);return S.accept(L),b(L.result,w)}n.getLookaheadPathsForOr=y;function R(E,S,w,P){var L=new v(E,w);S.accept(L);var O=L.result,H=new g(S,E,w),W=H.startWalking(),J=new s.Alternative({definition:O}),j=new s.Alternative({definition:W});return b([J,j],P)}n.getLookaheadPathsForOptionalProd=R;function M(E,S){e:for(var w=0;w<E.length;w++){var P=E[w];if(P.length===S.length){for(var L=0;L<P.length;L++){var O=S[L],H=P[L],W=O===H||H.categoryMatchesMap[O.tokenTypeIdx]!==void 0;if(W===!1)continue e}return!0}}return!1}n.containsPath=M;function C(E,S){return E.length<S.length&&t.every(E,function(w,P){var L=S[P];return w===L||L.categoryMatchesMap[w.tokenTypeIdx]})}n.isStrictPrefixOfPath=C;function U(E){return t.every(E,function(S){return t.every(S,function(w){return t.every(w,function(P){return t.isEmpty(P.categoryMatches)})})})}n.areTokenCategoriesNotUsed=U}),Kd=it(n=>{var e=n&&n.__extends||function(){var P=function(L,O){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(H,W){H.__proto__=W}||function(H,W){for(var J in W)Object.prototype.hasOwnProperty.call(W,J)&&(H[J]=W[J])},P(L,O)};return function(L,O){if(typeof O!="function"&&O!==null)throw new TypeError("Class extends value "+String(O)+" is not a constructor or null");P(L,O);function H(){this.constructor=L}L.prototype=O===null?Object.create(O):(H.prototype=O.prototype,new H)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=xt(),i=xt(),r=Mn(),o=Ps(),s=Ns(),a=Is(),c=gn(),l=_o();function u(P,L,O,H,W){var J=t.map(P,function(ie){return d(ie,H)}),j=t.map(P,function(ie){return h(ie,ie,H)}),ne=[],he=[],Ee=[];i.every(j,i.isEmpty)&&(ne=i.map(P,function(ie){return y(ie,H)}),he=i.map(P,function(ie){return R(ie,L,H)}),Ee=U(P,L,H));var re=w(P,O,H),oe=i.map(P,function(ie){return C(ie,H)}),we=i.map(P,function(ie){return v(ie,P,W,H)});return t.flatten(J.concat(Ee,j,ne,he,re,oe,we))}n.validateGrammar=u;function d(P,L){var O=new g;P.accept(O);var H=O.allProductions,W=t.groupBy(H,p),J=t.pick(W,function(ne){return ne.length>1}),j=t.map(t.values(J),function(ne){var he=t.first(ne),Ee=L.buildDuplicateFoundError(P,ne),re=o.getProductionDslName(he),oe={message:Ee,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:P.name,dslName:re,occurrence:he.idx},we=m(he);return we&&(oe.parameter=we),oe});return j}function p(P){return o.getProductionDslName(P)+"_#_"+P.idx+"_#_"+m(P)}n.identifyProductionForDuplicates=p;function m(P){return P instanceof c.Terminal?P.terminalType.name:P instanceof c.NonTerminal?P.nonTerminalName:""}var g=function(P){e(L,P);function L(){var O=P!==null&&P.apply(this,arguments)||this;return O.allProductions=[],O}return L.prototype.visitNonTerminal=function(O){this.allProductions.push(O)},L.prototype.visitOption=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatory=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatoryWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetition=function(O){this.allProductions.push(O)},L.prototype.visitAlternation=function(O){this.allProductions.push(O)},L.prototype.visitTerminal=function(O){this.allProductions.push(O)},L}(l.GAstVisitor);n.OccurrenceValidationCollector=g;function v(P,L,O,H){var W=[],J=i.reduce(L,function(ne,he){return he.name===P.name?ne+1:ne},0);if(J>1){var j=H.buildDuplicateRuleNameError({topLevelRule:P,grammarName:O});W.push({message:j,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:P.name})}return W}n.validateRuleDoesNotAlreadyExist=v;function f(P,L,O){var H=[],W;return t.contains(L,P)||(W="Invalid rule override, rule: ->"+P+"<- cannot be overridden in the grammar: ->"+O+"<-as it is not defined in any of the super grammars ",H.push({message:W,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:P})),H}n.validateRuleIsOverridden=f;function h(P,L,O,H){H===void 0&&(H=[]);var W=[],J=_(L.definition);if(t.isEmpty(J))return[];var j=P.name,ne=t.contains(J,P);ne&&W.push({message:O.buildLeftRecursionError({topLevelRule:P,leftRecursionPath:H}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:j});var he=t.difference(J,H.concat([P])),Ee=t.map(he,function(re){var oe=t.cloneArr(H);return oe.push(re),h(P,re,O,oe)});return W.concat(t.flatten(Ee))}n.validateNoLeftRecursion=h;function _(P){var L=[];if(t.isEmpty(P))return L;var O=t.first(P);if(O instanceof c.NonTerminal)L.push(O.referencedRule);else if(O instanceof c.Alternative||O instanceof c.Option||O instanceof c.RepetitionMandatory||O instanceof c.RepetitionMandatoryWithSeparator||O instanceof c.RepetitionWithSeparator||O instanceof c.Repetition)L=L.concat(_(O.definition));else if(O instanceof c.Alternation)L=t.flatten(t.map(O.definition,function(j){return _(j.definition)}));else if(!(O instanceof c.Terminal))throw Error("non exhaustive match");var H=o.isOptionalProd(O),W=P.length>1;if(H&&W){var J=t.drop(P);return L.concat(_(J))}else return L}n.getFirstNoneTerminal=_;var b=function(P){e(L,P);function L(){var O=P!==null&&P.apply(this,arguments)||this;return O.alternations=[],O}return L.prototype.visitAlternation=function(O){this.alternations.push(O)},L}(l.GAstVisitor);function y(P,L){var O=new b;P.accept(O);var H=O.alternations,W=t.reduce(H,function(J,j){var ne=t.dropRight(j.definition),he=t.map(ne,function(Ee,re){var oe=a.nextPossibleTokensAfter([Ee],[],null,1);return t.isEmpty(oe)?{message:L.buildEmptyAlternationError({topLevelRule:P,alternation:j,emptyChoiceIdx:re}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:P.name,occurrence:j.idx,alternative:re+1}:null});return J.concat(t.compact(he))},[]);return W}n.validateEmptyOrAlternative=y;function R(P,L,O){var H=new b;P.accept(H);var W=H.alternations;W=i.reject(W,function(j){return j.ignoreAmbiguities===!0});var J=t.reduce(W,function(j,ne){var he=ne.idx,Ee=ne.maxLookahead||L,re=s.getLookaheadPathsForOr(he,P,Ee,ne),oe=E(re,ne,P,O),we=S(re,ne,P,O);return j.concat(oe,we)},[]);return J}n.validateAmbiguousAlternationAlternatives=R;var M=function(P){e(L,P);function L(){var O=P!==null&&P.apply(this,arguments)||this;return O.allProductions=[],O}return L.prototype.visitRepetitionWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatory=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatoryWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetition=function(O){this.allProductions.push(O)},L}(l.GAstVisitor);n.RepetionCollector=M;function C(P,L){var O=new b;P.accept(O);var H=O.alternations,W=t.reduce(H,function(J,j){return j.definition.length>255&&J.push({message:L.buildTooManyAlternativesError({topLevelRule:P,alternation:j}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:P.name,occurrence:j.idx}),J},[]);return W}n.validateTooManyAlts=C;function U(P,L,O){var H=[];return i.forEach(P,function(W){var J=new M;W.accept(J);var j=J.allProductions;i.forEach(j,function(ne){var he=s.getProdType(ne),Ee=ne.maxLookahead||L,re=ne.idx,oe=s.getLookaheadPathsForOptionalProd(re,W,he,Ee),we=oe[0];if(i.isEmpty(i.flatten(we))){var ie=O.buildEmptyRepetitionError({topLevelRule:W,repetition:ne});H.push({message:ie,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:W.name})}})}),H}n.validateSomeNonEmptyLookaheadPath=U;function E(P,L,O,H){var W=[],J=i.reduce(P,function(ne,he,Ee){return L.definition[Ee].ignoreAmbiguities===!0||i.forEach(he,function(re){var oe=[Ee];i.forEach(P,function(we,ie){Ee!==ie&&s.containsPath(we,re)&&L.definition[ie].ignoreAmbiguities!==!0&&oe.push(ie)}),oe.length>1&&!s.containsPath(W,re)&&(W.push(re),ne.push({alts:oe,path:re}))}),ne},[]),j=t.map(J,function(ne){var he=i.map(ne.alts,function(re){return re+1}),Ee=H.buildAlternationAmbiguityError({topLevelRule:O,alternation:L,ambiguityIndices:he,prefixPath:ne.path});return{message:Ee,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:O.name,occurrence:L.idx,alternatives:[ne.alts]}});return j}function S(P,L,O,H){var W=[],J=i.reduce(P,function(j,ne,he){var Ee=i.map(ne,function(re){return{idx:he,path:re}});return j.concat(Ee)},[]);return i.forEach(J,function(j){var ne=L.definition[j.idx];if(ne.ignoreAmbiguities!==!0){var he=j.idx,Ee=j.path,re=i.findAll(J,function(we){return L.definition[we.idx].ignoreAmbiguities!==!0&&we.idx<he&&s.isStrictPrefixOfPath(we.path,Ee)}),oe=i.map(re,function(we){var ie=[we.idx+1,he+1],V=L.idx===0?"":L.idx,Y=H.buildAlternationPrefixAmbiguityError({topLevelRule:O,alternation:L,ambiguityIndices:ie,prefixPath:we.path});return{message:Y,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:O.name,occurrence:V,alternatives:ie}});W=W.concat(oe)}}),W}n.checkPrefixAlternativesAmbiguities=S;function w(P,L,O){var H=[],W=i.map(L,function(J){return J.name});return i.forEach(P,function(J){var j=J.name;if(i.contains(W,j)){var ne=O.buildNamespaceConflictError(J);H.push({message:ne,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:j})}}),H}}),Uy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=xt(),t=Fy(),i=Kd(),r=Ls();function o(a){a=e.defaults(a,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var c={};return e.forEach(a.rules,function(l){c[l.name]=l}),t.resolveGrammar(c,a.errMsgProvider)}n.resolveGrammar=o;function s(a){return a=e.defaults(a,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(a.rules,a.maxLookahead,a.tokenTypes,a.errMsgProvider,a.grammarName)}n.validateGrammar=s}),yo=it(n=>{var e=n&&n.__extends||function(){var g=function(v,f){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,_){h.__proto__=_}||function(h,_){for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&(h[b]=_[b])},g(v,f)};return function(v,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");g(v,f);function h(){this.constructor=v}v.prototype=f===null?Object.create(f):(h.prototype=f.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=xt(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",s="NotAllInputParsedException",a=[i,r,o,s];Object.freeze(a);function c(g){return t.contains(a,g.name)}n.isRecognitionException=c;var l=function(g){e(v,g);function v(f,h){var _=this.constructor,b=g.call(this,f)||this;return b.token=h,b.resyncedTokens=[],Object.setPrototypeOf(b,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(b,b.constructor),b}return v}(Error),u=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=i,b}return v}(l);n.MismatchedTokenException=u;var d=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=r,b}return v}(l);n.NoViableAltException=d;var p=function(g){e(v,g);function v(f,h){var _=g.call(this,f,h)||this;return _.name=s,_}return v}(l);n.NotAllInputParsedException=p;var m=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=o,b}return v}(l);n.EarlyExitException=m}),Yd=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=Bi(),t=xt(),i=yo(),r=jd(),o=Mn();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function s(l){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=l}n.InRuleRecoveryException=s,s.prototype=Error.prototype;var a=function(){function l(){}return l.prototype.initRecoverable=function(u){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(u,"recoveryEnabled")?u.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=c)},l.prototype.getTokenToInsert=function(u){var d=e.createTokenInstance(u,"",NaN,NaN,NaN,NaN,NaN,NaN);return d.isInsertedInRecovery=!0,d},l.prototype.canTokenTypeBeInsertedInRecovery=function(u){return!0},l.prototype.tryInRepetitionRecovery=function(u,d,p,m){for(var g=this,v=this.findReSyncTokenType(),f=this.exportLexerState(),h=[],_=!1,b=this.LA(1),y=this.LA(1),R=function(){var M=g.LA(0),C=g.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:b,previous:M,ruleName:g.getCurrRuleFullName()}),U=new i.MismatchedTokenException(C,b,g.LA(0));U.resyncedTokens=t.dropRight(h),g.SAVE_ERROR(U)};!_;)if(this.tokenMatcher(y,m)){R();return}else if(p.call(this)){R(),u.apply(this,d);return}else this.tokenMatcher(y,v)?_=!0:(y=this.SKIP_TOKEN(),this.addToResyncTokens(y,h));this.importLexerState(f)},l.prototype.shouldInRepetitionRecoveryBeTried=function(u,d,p){return!(p===!1||u===void 0||d===void 0||this.tokenMatcher(this.LA(1),u)||this.isBackTracking()||this.canPerformInRuleRecovery(u,this.getFollowsForInRuleRecovery(u,d)))},l.prototype.getFollowsForInRuleRecovery=function(u,d){var p=this.getCurrentGrammarPath(u,d),m=this.getNextPossibleTokenTypes(p);return m},l.prototype.tryInRuleRecovery=function(u,d){if(this.canRecoverWithSingleTokenInsertion(u,d)){var p=this.getTokenToInsert(u);return p}if(this.canRecoverWithSingleTokenDeletion(u)){var m=this.SKIP_TOKEN();return this.consumeToken(),m}throw new s("sad sad panda")},l.prototype.canPerformInRuleRecovery=function(u,d){return this.canRecoverWithSingleTokenInsertion(u,d)||this.canRecoverWithSingleTokenDeletion(u)},l.prototype.canRecoverWithSingleTokenInsertion=function(u,d){var p=this;if(!this.canTokenTypeBeInsertedInRecovery(u)||t.isEmpty(d))return!1;var m=this.LA(1),g=t.find(d,function(v){return p.tokenMatcher(m,v)})!==void 0;return g},l.prototype.canRecoverWithSingleTokenDeletion=function(u){var d=this.tokenMatcher(this.LA(2),u);return d},l.prototype.isInCurrentRuleReSyncSet=function(u){var d=this.getCurrFollowKey(),p=this.getFollowSetFromFollowKey(d);return t.contains(p,u)},l.prototype.findReSyncTokenType=function(){for(var u=this.flattenFollowSet(),d=this.LA(1),p=2;;){var m=d.tokenType;if(t.contains(u,m))return m;d=this.LA(p),p++}},l.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var u=this.getLastExplicitRuleShortName(),d=this.getLastExplicitRuleOccurrenceIndex(),p=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(u),idxInCallingRule:d,inRule:this.shortRuleNameToFullName(p)}},l.prototype.buildFullFollowKeyStack=function(){var u=this,d=this.RULE_STACK,p=this.RULE_OCCURRENCE_STACK;return t.map(d,function(m,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:u.shortRuleNameToFullName(m),idxInCallingRule:p[g],inRule:u.shortRuleNameToFullName(d[g-1])}})},l.prototype.flattenFollowSet=function(){var u=this,d=t.map(this.buildFullFollowKeyStack(),function(p){return u.getFollowSetFromFollowKey(p)});return t.flatten(d)},l.prototype.getFollowSetFromFollowKey=function(u){if(u===n.EOF_FOLLOW_KEY)return[e.EOF];var d=u.ruleName+u.idxInCallingRule+r.IN+u.inRule;return this.resyncFollows[d]},l.prototype.addToResyncTokens=function(u,d){return this.tokenMatcher(u,e.EOF)||d.push(u),d},l.prototype.reSyncTo=function(u){for(var d=[],p=this.LA(1);this.tokenMatcher(p,u)===!1;)p=this.SKIP_TOKEN(),this.addToResyncTokens(p,d);return t.dropRight(d)},l.prototype.attemptInRepetitionRecovery=function(u,d,p,m,g,v,f){},l.prototype.getCurrentGrammarPath=function(u,d){var p=this.getHumanReadableRuleStack(),m=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:p,occurrenceStack:m,lastTok:u,lastTokOccurrence:d};return g},l.prototype.getHumanReadableRuleStack=function(){var u=this;return t.map(this.RULE_STACK,function(d){return u.shortRuleNameToFullName(d)})},l}();n.Recoverable=a;function c(l,u,d,p,m,g,v){var f=this.getKeyForAutomaticLookahead(p,m),h=this.firstAfterRepMap[f];if(h===void 0){var _=this.getCurrRuleFullName(),b=this.getGAstProductions()[_],y=new g(b,m);h=y.startWalking(),this.firstAfterRepMap[f]=h}var R=h.token,M=h.occurrence,C=h.isEndOfRule;this.RULE_STACK.length===1&&C&&R===void 0&&(R=e.EOF,M=1),this.shouldInRepetitionRecoveryBeTried(R,M,v)&&this.tryInRepetitionRecovery(l,u,d,R)}n.attemptInRepetitionRecovery=c}),oc=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),ky=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=Ns(),t=xt(),i=Mn(),r=oc(),o=Ps(),s=function(){function a(){}return a.prototype.initLooksAhead=function(c){this.dynamicTokensEnabled=t.has(c,"dynamicTokensEnabled")?c.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(c,"maxLookahead")?c.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},a.prototype.preComputeLookaheadFunctions=function(c){var l=this;t.forEach(c,function(u){l.TRACE_INIT(u.name+" Rule Lookahead",function(){var d=o.collectMethods(u),p=d.alternation,m=d.repetition,g=d.option,v=d.repetitionMandatory,f=d.repetitionMandatoryWithSeparator,h=d.repetitionWithSeparator;t.forEach(p,function(_){var b=_.idx===0?"":_.idx;l.TRACE_INIT(""+o.getProductionDslName(_)+b,function(){var y=e.buildLookaheadFuncForOr(_.idx,u,_.maxLookahead||l.maxLookahead,_.hasPredicates,l.dynamicTokensEnabled,l.lookAheadBuilderForAlternatives),R=r.getKeyForAutomaticLookahead(l.fullRuleNameToShort[u.name],r.OR_IDX,_.idx);l.setLaFuncCache(R,y)})}),t.forEach(m,function(_){l.computeLookaheadFunc(u,_.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(g,function(_){l.computeLookaheadFunc(u,_.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(v,function(_){l.computeLookaheadFunc(u,_.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(f,function(_){l.computeLookaheadFunc(u,_.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(h,function(_){l.computeLookaheadFunc(u,_.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))})})})},a.prototype.computeLookaheadFunc=function(c,l,u,d,p,m){var g=this;this.TRACE_INIT(""+m+(l===0?"":l),function(){var v=e.buildLookaheadFuncForOptionalProd(l,c,p||g.maxLookahead,g.dynamicTokensEnabled,d,g.lookAheadBuilderForOptional),f=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[c.name],u,l);g.setLaFuncCache(f,v)})},a.prototype.lookAheadBuilderForOptional=function(c,l,u){return e.buildSingleAlternativeLookaheadFunction(c,l,u)},a.prototype.lookAheadBuilderForAlternatives=function(c,l,u,d){return e.buildAlternativesLookAheadFunc(c,l,u,d)},a.prototype.getKeyForAutomaticLookahead=function(c,l){var u=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(u,c,l)},a.prototype.getLaFuncFromCache=function(c){},a.prototype.getLaFuncFromMap=function(c){return this.lookAheadFuncsCache.get(c)},a.prototype.getLaFuncFromObj=function(c){return this.lookAheadFuncsCache[c]},a.prototype.setLaFuncCache=function(c,l){},a.prototype.setLaFuncCacheUsingMap=function(c,l){this.lookAheadFuncsCache.set(c,l)},a.prototype.setLaFuncUsingObj=function(c,l){this.lookAheadFuncsCache[c]=l},a}();n.LooksAhead=s}),By=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.endOffset=s.endOffset):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.startColumn=s.startColumn,o.startLine=s.startLine,o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine)}n.setNodeLocationFull=t;function i(o,s,a){o.children[a]===void 0?o.children[a]=[s]:o.children[a].push(s)}n.addTerminalToCst=i;function r(o,s,a){o.children[s]===void 0?o.children[s]=[a]:o.children[s].push(a)}n.addNoneTerminalToCst=r}),qd=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=xt();function t(s){return r(s.constructor)}n.classNameFromInstance=t;var i="name";function r(s){var a=s.name;return a||"anonymous"}n.functionName=r;function o(s,a){var c=Object.getOwnPropertyDescriptor(s,i);return e.isUndefined(c)||c.configurable?(Object.defineProperty(s,i,{enumerable:!1,configurable:!0,writable:!1,value:a}),!0):!1}n.defineNameProp=o}),zy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=xt(),t=qd();function i(d,p){for(var m=e.keys(d),g=m.length,v=0;v<g;v++)for(var f=m[v],h=d[f],_=h.length,b=0;b<_;b++){var y=h[b];y.tokenTypeIdx===void 0&&this[y.name](y.children,p)}}n.defaultVisit=i;function r(d,p){var m=function(){};t.defineNameProp(m,d+"BaseSemantics");var g={visit:function(v,f){if(e.isArray(v)&&(v=v[0]),!e.isUndefined(v))return this[v.name](v.children,f)},validateVisitor:function(){var v=a(this,p);if(!e.isEmpty(v)){var f=e.map(v,function(h){return h.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+f.join(`

`).replace(/\n/g,`
	`)))}}};return m.prototype=g,m.prototype.constructor=m,m._RULE_NAMES=p,m}n.createBaseSemanticVisitorConstructor=r;function o(d,p,m){var g=function(){};t.defineNameProp(g,d+"BaseSemanticsWithDefaults");var v=Object.create(m.prototype);return e.forEach(p,function(f){v[f]=i}),g.prototype=v,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=o;var s;(function(d){d[d.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",d[d.MISSING_METHOD=1]="MISSING_METHOD"})(s=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function a(d,p){var m=c(d,p),g=u(d,p);return m.concat(g)}n.validateVisitor=a;function c(d,p){var m=e.map(p,function(g){if(!e.isFunction(d[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(d.constructor)+" CST Visitor.",type:s.MISSING_METHOD,methodName:g}});return e.compact(m)}n.validateMissingCstMethods=c;var l=["constructor","visit","validateVisitor"];function u(d,p){var m=[];for(var g in d)e.isFunction(d[g])&&!e.contains(l,g)&&!e.contains(p,g)&&m.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(d.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:s.REDUNDANT_METHOD,methodName:g});return m}n.validateRedundantMethods=u}),Vy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=By(),t=xt(),i=zy(),r=Mn(),o=function(){function s(){}return s.prototype.initTreeBuilder=function(a){if(this.CST_STACK=[],this.outputCst=a.outputCst,this.nodeLocationTracking=t.has(a,"nodeLocationTracking")?a.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+a.nodeLocationTracking+'"')},s.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(a){a.location={startOffset:NaN,endOffset:NaN}},s.prototype.setInitialNodeLocationOnlyOffsetRegular=function(a){a.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},s.prototype.setInitialNodeLocationFullRecovery=function(a){a.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.setInitialNodeLocationFullRegular=function(a){var c=this.LA(1);a.location={startOffset:c.startOffset,startLine:c.startLine,startColumn:c.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.cstInvocationStateUpdate=function(a,c){var l={name:a,children:{}};this.setInitialNodeLocation(l),this.CST_STACK.push(l)},s.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},s.prototype.cstPostRuleFull=function(a){var c=this.LA(0),l=a.location;l.startOffset<=c.startOffset?(l.endOffset=c.endOffset,l.endLine=c.endLine,l.endColumn=c.endColumn):(l.startOffset=NaN,l.startLine=NaN,l.startColumn=NaN)},s.prototype.cstPostRuleOnlyOffset=function(a){var c=this.LA(0),l=a.location;l.startOffset<=c.startOffset?l.endOffset=c.endOffset:l.startOffset=NaN},s.prototype.cstPostTerminal=function(a,c){var l=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(l,c,a),this.setNodeLocationFromToken(l.location,c)},s.prototype.cstPostNonTerminal=function(a,c){var l=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(l,c,a),this.setNodeLocationFromNode(l.location,a.location)},s.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var a=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=a,a}return this.baseCstVisitorConstructor},s.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var a=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=a,a}return this.baseCstVisitorWithDefaultsConstructor},s.prototype.getLastExplicitRuleShortName=function(){var a=this.RULE_STACK;return a[a.length-1]},s.prototype.getPreviousExplicitRuleShortName=function(){var a=this.RULE_STACK;return a[a.length-2]},s.prototype.getLastExplicitRuleOccurrenceIndex=function(){var a=this.RULE_OCCURRENCE_STACK;return a[a.length-1]},s}();n.TreeBuilder=o}),Gy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=Mn(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),Hy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=xt(),t=yo(),i=Mn(),r=Ls(),o=Kd(),s=gn(),a=function(){function c(){}return c.prototype.ACTION=function(l){return l.call(this)},c.prototype.consume=function(l,u,d){return this.consumeInternal(u,l,d)},c.prototype.subrule=function(l,u,d){return this.subruleInternal(u,l,d)},c.prototype.option=function(l,u){return this.optionInternal(u,l)},c.prototype.or=function(l,u){return this.orInternal(u,l)},c.prototype.many=function(l,u){return this.manyInternal(l,u)},c.prototype.atLeastOne=function(l,u){return this.atLeastOneInternal(l,u)},c.prototype.CONSUME=function(l,u){return this.consumeInternal(l,0,u)},c.prototype.CONSUME1=function(l,u){return this.consumeInternal(l,1,u)},c.prototype.CONSUME2=function(l,u){return this.consumeInternal(l,2,u)},c.prototype.CONSUME3=function(l,u){return this.consumeInternal(l,3,u)},c.prototype.CONSUME4=function(l,u){return this.consumeInternal(l,4,u)},c.prototype.CONSUME5=function(l,u){return this.consumeInternal(l,5,u)},c.prototype.CONSUME6=function(l,u){return this.consumeInternal(l,6,u)},c.prototype.CONSUME7=function(l,u){return this.consumeInternal(l,7,u)},c.prototype.CONSUME8=function(l,u){return this.consumeInternal(l,8,u)},c.prototype.CONSUME9=function(l,u){return this.consumeInternal(l,9,u)},c.prototype.SUBRULE=function(l,u){return this.subruleInternal(l,0,u)},c.prototype.SUBRULE1=function(l,u){return this.subruleInternal(l,1,u)},c.prototype.SUBRULE2=function(l,u){return this.subruleInternal(l,2,u)},c.prototype.SUBRULE3=function(l,u){return this.subruleInternal(l,3,u)},c.prototype.SUBRULE4=function(l,u){return this.subruleInternal(l,4,u)},c.prototype.SUBRULE5=function(l,u){return this.subruleInternal(l,5,u)},c.prototype.SUBRULE6=function(l,u){return this.subruleInternal(l,6,u)},c.prototype.SUBRULE7=function(l,u){return this.subruleInternal(l,7,u)},c.prototype.SUBRULE8=function(l,u){return this.subruleInternal(l,8,u)},c.prototype.SUBRULE9=function(l,u){return this.subruleInternal(l,9,u)},c.prototype.OPTION=function(l){return this.optionInternal(l,0)},c.prototype.OPTION1=function(l){return this.optionInternal(l,1)},c.prototype.OPTION2=function(l){return this.optionInternal(l,2)},c.prototype.OPTION3=function(l){return this.optionInternal(l,3)},c.prototype.OPTION4=function(l){return this.optionInternal(l,4)},c.prototype.OPTION5=function(l){return this.optionInternal(l,5)},c.prototype.OPTION6=function(l){return this.optionInternal(l,6)},c.prototype.OPTION7=function(l){return this.optionInternal(l,7)},c.prototype.OPTION8=function(l){return this.optionInternal(l,8)},c.prototype.OPTION9=function(l){return this.optionInternal(l,9)},c.prototype.OR=function(l){return this.orInternal(l,0)},c.prototype.OR1=function(l){return this.orInternal(l,1)},c.prototype.OR2=function(l){return this.orInternal(l,2)},c.prototype.OR3=function(l){return this.orInternal(l,3)},c.prototype.OR4=function(l){return this.orInternal(l,4)},c.prototype.OR5=function(l){return this.orInternal(l,5)},c.prototype.OR6=function(l){return this.orInternal(l,6)},c.prototype.OR7=function(l){return this.orInternal(l,7)},c.prototype.OR8=function(l){return this.orInternal(l,8)},c.prototype.OR9=function(l){return this.orInternal(l,9)},c.prototype.MANY=function(l){this.manyInternal(0,l)},c.prototype.MANY1=function(l){this.manyInternal(1,l)},c.prototype.MANY2=function(l){this.manyInternal(2,l)},c.prototype.MANY3=function(l){this.manyInternal(3,l)},c.prototype.MANY4=function(l){this.manyInternal(4,l)},c.prototype.MANY5=function(l){this.manyInternal(5,l)},c.prototype.MANY6=function(l){this.manyInternal(6,l)},c.prototype.MANY7=function(l){this.manyInternal(7,l)},c.prototype.MANY8=function(l){this.manyInternal(8,l)},c.prototype.MANY9=function(l){this.manyInternal(9,l)},c.prototype.MANY_SEP=function(l){this.manySepFirstInternal(0,l)},c.prototype.MANY_SEP1=function(l){this.manySepFirstInternal(1,l)},c.prototype.MANY_SEP2=function(l){this.manySepFirstInternal(2,l)},c.prototype.MANY_SEP3=function(l){this.manySepFirstInternal(3,l)},c.prototype.MANY_SEP4=function(l){this.manySepFirstInternal(4,l)},c.prototype.MANY_SEP5=function(l){this.manySepFirstInternal(5,l)},c.prototype.MANY_SEP6=function(l){this.manySepFirstInternal(6,l)},c.prototype.MANY_SEP7=function(l){this.manySepFirstInternal(7,l)},c.prototype.MANY_SEP8=function(l){this.manySepFirstInternal(8,l)},c.prototype.MANY_SEP9=function(l){this.manySepFirstInternal(9,l)},c.prototype.AT_LEAST_ONE=function(l){this.atLeastOneInternal(0,l)},c.prototype.AT_LEAST_ONE1=function(l){return this.atLeastOneInternal(1,l)},c.prototype.AT_LEAST_ONE2=function(l){this.atLeastOneInternal(2,l)},c.prototype.AT_LEAST_ONE3=function(l){this.atLeastOneInternal(3,l)},c.prototype.AT_LEAST_ONE4=function(l){this.atLeastOneInternal(4,l)},c.prototype.AT_LEAST_ONE5=function(l){this.atLeastOneInternal(5,l)},c.prototype.AT_LEAST_ONE6=function(l){this.atLeastOneInternal(6,l)},c.prototype.AT_LEAST_ONE7=function(l){this.atLeastOneInternal(7,l)},c.prototype.AT_LEAST_ONE8=function(l){this.atLeastOneInternal(8,l)},c.prototype.AT_LEAST_ONE9=function(l){this.atLeastOneInternal(9,l)},c.prototype.AT_LEAST_ONE_SEP=function(l){this.atLeastOneSepFirstInternal(0,l)},c.prototype.AT_LEAST_ONE_SEP1=function(l){this.atLeastOneSepFirstInternal(1,l)},c.prototype.AT_LEAST_ONE_SEP2=function(l){this.atLeastOneSepFirstInternal(2,l)},c.prototype.AT_LEAST_ONE_SEP3=function(l){this.atLeastOneSepFirstInternal(3,l)},c.prototype.AT_LEAST_ONE_SEP4=function(l){this.atLeastOneSepFirstInternal(4,l)},c.prototype.AT_LEAST_ONE_SEP5=function(l){this.atLeastOneSepFirstInternal(5,l)},c.prototype.AT_LEAST_ONE_SEP6=function(l){this.atLeastOneSepFirstInternal(6,l)},c.prototype.AT_LEAST_ONE_SEP7=function(l){this.atLeastOneSepFirstInternal(7,l)},c.prototype.AT_LEAST_ONE_SEP8=function(l){this.atLeastOneSepFirstInternal(8,l)},c.prototype.AT_LEAST_ONE_SEP9=function(l){this.atLeastOneSepFirstInternal(9,l)},c.prototype.RULE=function(l,u,d){if(d===void 0&&(d=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,l)){var p=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:l,grammarName:this.className}),m={message:p,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:l};this.definitionErrors.push(m)}this.definedRulesNames.push(l);var g=this.defineRule(l,u,d);return this[l]=g,g},c.prototype.OVERRIDE_RULE=function(l,u,d){d===void 0&&(d=i.DEFAULT_RULE_CONFIG);var p=[];p=p.concat(o.validateRuleIsOverridden(l,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(p);var m=this.defineRule(l,u,d);return this[l]=m,m},c.prototype.BACKTRACK=function(l,u){return function(){this.isBackTrackingStack.push(1);var d=this.saveRecogState();try{return l.apply(this,u),!0}catch(p){if(t.isRecognitionException(p))return!1;throw p}finally{this.reloadRecogState(d),this.isBackTrackingStack.pop()}}},c.prototype.getGAstProductions=function(){return this.gastProductionsCache},c.prototype.getSerializedGastProductions=function(){return s.serializeGrammar(e.values(this.gastProductionsCache))},c}();n.RecognizerApi=a}),Wy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=xt(),t=oc(),i=yo(),r=Ns(),o=Is(),s=Mn(),a=Yd(),c=Bi(),l=vo(),u=qd(),d=function(){function p(){}return p.prototype.initRecognizerEngine=function(m,g){if(this.className=u.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=l.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(m)){if(e.isEmpty(m))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof m[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(m))this.tokensMap=e.reduce(m,function(_,b){return _[b.name]=b,_},{});else if(e.has(m,"modes")&&e.every(e.flatten(e.values(m.modes)),l.isTokenType)){var v=e.flatten(e.values(m.modes)),f=e.uniq(v);this.tokensMap=e.reduce(f,function(_,b){return _[b.name]=b,_},{})}else if(e.isObject(m))this.tokensMap=e.cloneObj(m);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=c.EOF;var h=e.every(e.values(m),function(_){return e.isEmpty(_.categoryMatches)});this.tokenMatcher=h?l.tokenStructuredMatcherNoCategories:l.tokenStructuredMatcher,l.augmentTokenTypes(e.values(this.tokensMap))},p.prototype.defineRule=function(m,g,v){if(this.selfAnalysisDone)throw Error("Grammar rule <"+m+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var f=e.has(v,"resyncEnabled")?v.resyncEnabled:s.DEFAULT_RULE_CONFIG.resyncEnabled,h=e.has(v,"recoveryValueFunc")?v.recoveryValueFunc:s.DEFAULT_RULE_CONFIG.recoveryValueFunc,_=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[_]=m,this.fullRuleNameToShort[m]=_;function b(M){try{if(this.outputCst===!0){g.apply(this,M);var C=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(C),C}else return g.apply(this,M)}catch(U){return this.invokeRuleCatch(U,f,h)}finally{this.ruleFinallyStateUpdate()}}var y=function(M,C){return M===void 0&&(M=0),this.ruleInvocationStateUpdate(_,m,M),b.call(this,C)},R="ruleName";return y[R]=m,y.originalGrammarAction=g,y},p.prototype.invokeRuleCatch=function(m,g,v){var f=this.RULE_STACK.length===1,h=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(m)){var _=m;if(h){var b=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(b))if(_.resyncedTokens=this.reSyncTo(b),this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];return y.recoveredNode=!0,y}else return v();else{if(this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];y.recoveredNode=!0,_.partialCstResult=y}throw _}}else{if(f)return this.moveToTerminatedState(),v();throw _}}else throw m},p.prototype.optionInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(m,g,v)},p.prototype.optionInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(m.DEF!==void 0){if(_=m.DEF,b=m.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=m;if(h.call(this)===!0)return _.call(this)},p.prototype.atLeastOneInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,m);return this.atLeastOneInternalLogic(m,g,v)},p.prototype.atLeastOneInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(g.DEF!==void 0){if(_=g.DEF,b=g.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=g;if(h.call(this)===!0)for(var R=this.doSingleRepetition(_);h.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[m,g],h,t.AT_LEAST_ONE_IDX,m,o.NextTerminalAfterAtLeastOneWalker)},p.prototype.atLeastOneSepFirstInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,m);this.atLeastOneSepFirstInternalLogic(m,g,v)},p.prototype.atLeastOneSepFirstInternalLogic=function(m,g,v){var f=this,h=g.DEF,_=g.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){h.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,_,y,h,o.NextTerminalAfterAtLeastOneSepWalker],y,t.AT_LEAST_ONE_SEP_IDX,m,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},p.prototype.manyInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.MANY_IDX,m);return this.manyInternalLogic(m,g,v)},p.prototype.manyInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(g.DEF!==void 0){if(_=g.DEF,b=g.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=g;for(var R=!0;h.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);this.attemptInRepetitionRecovery(this.manyInternal,[m,g],h,t.MANY_IDX,m,o.NextTerminalAfterManyWalker,R)},p.prototype.manySepFirstInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,m);this.manySepFirstInternalLogic(m,g,v)},p.prototype.manySepFirstInternalLogic=function(m,g,v){var f=this,h=g.DEF,_=g.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){h.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,_,y,h,o.NextTerminalAfterManySepWalker],y,t.MANY_SEP_IDX,m,o.NextTerminalAfterManySepWalker)}},p.prototype.repetitionSepSecondInternal=function(m,g,v,f,h){for(;v();)this.CONSUME(g),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,g,v,f,h],v,t.AT_LEAST_ONE_SEP_IDX,m,h)},p.prototype.doSingleRepetition=function(m){var g=this.getLexerPosition();m.call(this);var v=this.getLexerPosition();return v>g},p.prototype.orInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.OR_IDX,g),f=e.isArray(m)?m:m.DEF,h=this.getLaFuncFromCache(v),_=h.call(this,f);if(_!==void 0){var b=f[_];return b.ALT.call(this)}this.raiseNoAltException(g,m.ERR_MSG)},p.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var m=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:m,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,m))}},p.prototype.subruleInternal=function(m,g,v){var f;try{var h=v!==void 0?v.ARGS:void 0;return f=m.call(this,g,h),this.cstPostNonTerminal(f,v!==void 0&&v.LABEL!==void 0?v.LABEL:m.ruleName),f}catch(_){this.subruleInternalError(_,v,m.ruleName)}},p.prototype.subruleInternalError=function(m,g,v){throw i.isRecognitionException(m)&&m.partialCstResult!==void 0&&(this.cstPostNonTerminal(m.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:v),delete m.partialCstResult),m},p.prototype.consumeInternal=function(m,g,v){var f;try{var h=this.LA(1);this.tokenMatcher(h,m)===!0?(this.consumeToken(),f=h):this.consumeInternalError(m,h,v)}catch(_){f=this.consumeInternalRecovery(m,g,_)}return this.cstPostTerminal(v!==void 0&&v.LABEL!==void 0?v.LABEL:m.name,f),f},p.prototype.consumeInternalError=function(m,g,v){var f,h=this.LA(0);throw v!==void 0&&v.ERR_MSG?f=v.ERR_MSG:f=this.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:g,previous:h,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(f,g,h))},p.prototype.consumeInternalRecovery=function(m,g,v){if(this.recoveryEnabled&&v.name==="MismatchedTokenException"&&!this.isBackTracking()){var f=this.getFollowsForInRuleRecovery(m,g);try{return this.tryInRuleRecovery(m,f)}catch(h){throw h.name===a.IN_RULE_RECOVERY_EXCEPTION?v:h}}else throw v},p.prototype.saveRecogState=function(){var m=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:m,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},p.prototype.reloadRecogState=function(m){this.errors=m.errors,this.importLexerState(m.lexerState),this.RULE_STACK=m.RULE_STACK},p.prototype.ruleInvocationStateUpdate=function(m,g,v){this.RULE_OCCURRENCE_STACK.push(v),this.RULE_STACK.push(m),this.cstInvocationStateUpdate(g,m)},p.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},p.prototype.getCurrRuleFullName=function(){var m=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[m]},p.prototype.shortRuleNameToFullName=function(m){return this.shortRuleNameToFull[m]},p.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),c.EOF)},p.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},p}();n.RecognizerEngine=d}),Xy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=yo(),t=xt(),i=Ns(),r=Mn(),o=function(){function s(){}return s.prototype.initErrorHandler=function(a){this._errors=[],this.errorMessageProvider=t.has(a,"errorMessageProvider")?a.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},s.prototype.SAVE_ERROR=function(a){if(e.isRecognitionException(a))return a.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(a),a;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(s.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(a){this._errors=a},enumerable:!1,configurable:!0}),s.prototype.raiseEarlyExitException=function(a,c,l){for(var u=this.getCurrRuleFullName(),d=this.getGAstProductions()[u],p=i.getLookaheadPathsForOptionalProd(a,d,c,this.maxLookahead),m=p[0],g=[],v=1;v<=this.maxLookahead;v++)g.push(this.LA(v));var f=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:m,actual:g,previous:this.LA(0),customUserDescription:l,ruleName:u});throw this.SAVE_ERROR(new e.EarlyExitException(f,this.LA(1),this.LA(0)))},s.prototype.raiseNoAltException=function(a,c){for(var l=this.getCurrRuleFullName(),u=this.getGAstProductions()[l],d=i.getLookaheadPathsForOr(a,u,this.maxLookahead),p=[],m=1;m<=this.maxLookahead;m++)p.push(this.LA(m));var g=this.LA(0),v=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:d,actual:p,previous:g,customUserDescription:c,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(v,this.LA(1),g))},s}();n.ErrorHandler=o}),jy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=Is(),t=xt(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,s){var a=this.gastProductionsCache[o];if(t.isUndefined(a))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([a],s,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var s=t.first(o.ruleStack),a=this.getGAstProductions(),c=a[s],l=new e.NextAfterTokenWalker(c,o).startWalking();return l},r}();n.ContentAssist=i}),Ky=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=xt(),t=gn(),i=Cs(),r=vo(),o=Bi(),s=Mn(),a=oc(),c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(c);var l=!0,u=Math.pow(2,a.BITS_FOR_OCCURRENCE_IDX)-1,d=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([d]);var p=o.createTokenInstance(d,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(p);var m={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=function(){function b(){}return b.prototype.initGastRecorder=function(y){this.recordingProdStack=[],this.RECORDING_PHASE=!1},b.prototype.enableRecording=function(){var y=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var R=function(C){var U=C>0?C:"";y["CONSUME"+U]=function(E,S){return this.consumeInternalRecord(E,C,S)},y["SUBRULE"+U]=function(E,S){return this.subruleInternalRecord(E,C,S)},y["OPTION"+U]=function(E){return this.optionInternalRecord(E,C)},y["OR"+U]=function(E){return this.orInternalRecord(E,C)},y["MANY"+U]=function(E){this.manyInternalRecord(C,E)},y["MANY_SEP"+U]=function(E){this.manySepFirstInternalRecord(C,E)},y["AT_LEAST_ONE"+U]=function(E){this.atLeastOneInternalRecord(C,E)},y["AT_LEAST_ONE_SEP"+U]=function(E){this.atLeastOneSepFirstInternalRecord(C,E)}},M=0;M<10;M++)R(M);y.consume=function(C,U,E){return this.consumeInternalRecord(U,C,E)},y.subrule=function(C,U,E){return this.subruleInternalRecord(U,C,E)},y.option=function(C,U){return this.optionInternalRecord(U,C)},y.or=function(C,U){return this.orInternalRecord(U,C)},y.many=function(C,U){this.manyInternalRecord(C,U)},y.atLeastOne=function(C,U){this.atLeastOneInternalRecord(C,U)},y.ACTION=y.ACTION_RECORD,y.BACKTRACK=y.BACKTRACK_RECORD,y.LA=y.LA_RECORD})},b.prototype.disableRecording=function(){var y=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var R=0;R<10;R++){var M=R>0?R:"";delete y["CONSUME"+M],delete y["SUBRULE"+M],delete y["OPTION"+M],delete y["OR"+M],delete y["MANY"+M],delete y["MANY_SEP"+M],delete y["AT_LEAST_ONE"+M],delete y["AT_LEAST_ONE_SEP"+M]}delete y.consume,delete y.subrule,delete y.option,delete y.or,delete y.many,delete y.atLeastOne,delete y.ACTION,delete y.BACKTRACK,delete y.LA})},b.prototype.ACTION_RECORD=function(y){},b.prototype.BACKTRACK_RECORD=function(y,R){return function(){return!0}},b.prototype.LA_RECORD=function(y){return s.END_OF_FILE},b.prototype.topLevelRuleRecord=function(y,R){try{var M=new t.Rule({definition:[],name:y});return M.name=y,this.recordingProdStack.push(M),R.call(this),this.recordingProdStack.pop(),M}catch(C){if(C.KNOWN_RECORDER_ERROR!==!0)try{C.message=C.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw C}throw C}},b.prototype.optionInternalRecord=function(y,R){return v.call(this,t.Option,y,R)},b.prototype.atLeastOneInternalRecord=function(y,R){v.call(this,t.RepetitionMandatory,R,y)},b.prototype.atLeastOneSepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionMandatoryWithSeparator,R,y,l)},b.prototype.manyInternalRecord=function(y,R){v.call(this,t.Repetition,R,y)},b.prototype.manySepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionWithSeparator,R,y,l)},b.prototype.orInternalRecord=function(y,R){return f.call(this,y,R)},b.prototype.subruleInternalRecord=function(y,R,M){if(_(R),!y||e.has(y,"ruleName")===!1){var C=new Error("<SUBRULE"+h(R)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var U=e.peek(this.recordingProdStack),E=y.ruleName,S=new t.NonTerminal({idx:R,nonTerminalName:E,referencedRule:void 0});return U.definition.push(S),this.outputCst?m:c},b.prototype.consumeInternalRecord=function(y,R,M){if(_(R),!r.hasShortKeyProperty(y)){var C=new Error("<CONSUME"+h(R)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var U=e.peek(this.recordingProdStack),E=new t.Terminal({idx:R,terminalType:y});return U.definition.push(E),p},b}();n.GastRecorder=g;function v(b,y,R,M){M===void 0&&(M=!1),_(R);var C=e.peek(this.recordingProdStack),U=e.isFunction(y)?y:y.DEF,E=new b({definition:[],idx:R});return M&&(E.separator=y.SEP),e.has(y,"MAX_LOOKAHEAD")&&(E.maxLookahead=y.MAX_LOOKAHEAD),this.recordingProdStack.push(E),U.call(this),C.definition.push(E),this.recordingProdStack.pop(),c}function f(b,y){var R=this;_(y);var M=e.peek(this.recordingProdStack),C=e.isArray(b)===!1,U=C===!1?b:b.DEF,E=new t.Alternation({definition:[],idx:y,ignoreAmbiguities:C&&b.IGNORE_AMBIGUITIES===!0});e.has(b,"MAX_LOOKAHEAD")&&(E.maxLookahead=b.MAX_LOOKAHEAD);var S=e.some(U,function(w){return e.isFunction(w.GATE)});return E.hasPredicates=S,M.definition.push(E),e.forEach(U,function(w){var P=new t.Alternative({definition:[]});E.definition.push(P),e.has(w,"IGNORE_AMBIGUITIES")?P.ignoreAmbiguities=w.IGNORE_AMBIGUITIES:e.has(w,"GATE")&&(P.ignoreAmbiguities=!0),R.recordingProdStack.push(P),w.ALT.call(R),R.recordingProdStack.pop()}),c}function h(b){return b===0?"":""+b}function _(b){if(b<0||b>u){var y=new Error("Invalid DSL Method idx value: <"+b+`>
	`+("Idx value must be a none negative value smaller than "+(u+1)));throw y.KNOWN_RECORDER_ERROR=!0,y}}}),Yy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=xt(),t=Mn(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var s=o.traceInitPerf,a=typeof s=="number";this.traceInitMaxIdent=a?s:1/0,this.traceInitPerf=a?s>0:s}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,s){if(this.traceInitPerf===!0){this.traceInitIndent++;var a=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(a+"--> <"+o+">");var c=e.timer(s),l=c.time,u=c.value,d=l>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(a+"<-- <"+o+"> time: "+l+"ms"),this.traceInitIndent--,u}else return s()},r}();n.PerformanceTracer=i}),qy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(s){if(s!=="constructor"){var a=Object.getOwnPropertyDescriptor(o,s);a&&(a.get||a.set)?Object.defineProperty(t.prototype,s,a):t.prototype[s]=r.prototype[s]}})})}n.applyMixins=e}),Mn=it(n=>{var e=n&&n.__extends||function(){var M=function(C,U){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,S){E.__proto__=S}||function(E,S){for(var w in S)Object.prototype.hasOwnProperty.call(S,w)&&(E[w]=S[w])},M(C,U)};return function(C,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");M(C,U);function E(){this.constructor=C}C.prototype=U===null?Object.create(U):(E.prototype=U.prototype,new E)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=xt(),i=Dy(),r=Bi(),o=Ls(),s=Uy(),a=Yd(),c=ky(),l=Vy(),u=Gy(),d=Hy(),p=Wy(),m=Xy(),g=jy(),v=Ky(),f=Yy(),h=qy();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(M){M[M.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",M[M.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",M[M.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",M[M.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",M[M.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",M[M.LEFT_RECURSION=5]="LEFT_RECURSION",M[M.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",M[M.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",M[M.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",M[M.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",M[M.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",M[M.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",M[M.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function _(M){return M===void 0&&(M=void 0),function(){return M}}n.EMPTY_ALT=_;var b=function(){function M(C,U){this.definitionErrors=[],this.selfAnalysisDone=!1;var E=this;if(E.initErrorHandler(U),E.initLexerAdapter(),E.initLooksAhead(U),E.initRecognizerEngine(C,U),E.initRecoverable(U),E.initTreeBuilder(U),E.initContentAssist(),E.initGastRecorder(U),E.initPerformanceTracer(U),t.has(U,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(U,"skipValidations")?U.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return M.performSelfAnalysis=function(C){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},M.prototype.performSelfAnalysis=function(){var C=this;this.TRACE_INIT("performSelfAnalysis",function(){var U;C.selfAnalysisDone=!0;var E=C.className;C.TRACE_INIT("toFastProps",function(){t.toFastProperties(C)}),C.TRACE_INIT("Grammar Recording",function(){try{C.enableRecording(),t.forEach(C.definedRulesNames,function(w){var P=C[w],L=P.originalGrammarAction,O=void 0;C.TRACE_INIT(w+" Rule",function(){O=C.topLevelRuleRecord(w,L)}),C.gastProductionsCache[w]=O})}finally{C.disableRecording()}});var S=[];if(C.TRACE_INIT("Grammar Resolving",function(){S=s.resolveGrammar({rules:t.values(C.gastProductionsCache)}),C.definitionErrors=C.definitionErrors.concat(S)}),C.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(S)&&C.skipValidations===!1){var w=s.validateGrammar({rules:t.values(C.gastProductionsCache),maxLookahead:C.maxLookahead,tokenTypes:t.values(C.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:E});C.definitionErrors=C.definitionErrors.concat(w)}}),t.isEmpty(C.definitionErrors)&&(C.recoveryEnabled&&C.TRACE_INIT("computeAllProdsFollows",function(){var w=i.computeAllProdsFollows(t.values(C.gastProductionsCache));C.resyncFollows=w}),C.TRACE_INIT("ComputeLookaheadFunctions",function(){C.preComputeLookaheadFunctions(t.values(C.gastProductionsCache))})),!M.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(C.definitionErrors))throw U=t.map(C.definitionErrors,function(w){return w.message}),new Error(`Parser Definition Errors detected:
 `+U.join(`
-------------------------------
`))})},M.DEFER_DEFINITION_ERRORS_HANDLING=!1,M}();n.Parser=b,h.applyMixins(b,[a.Recoverable,c.LooksAhead,l.TreeBuilder,u.LexerAdapter,p.RecognizerEngine,d.RecognizerApi,m.ErrorHandler,g.ContentAssist,v.GastRecorder,f.PerformanceTracer]);var y=function(M){e(C,M);function C(U,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var S=this,w=t.cloneObj(E);return w.outputCst=!0,S=M.call(this,U,w)||this,S}return C}(b);n.CstParser=y;var R=function(M){e(C,M);function C(U,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var S=this,w=t.cloneObj(E);return w.outputCst=!1,S=M.call(this,U,w)||this,S}return C}(b);n.EmbeddedActionsParser=R}),$y=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Gd();function t(i,r){var o=r===void 0?{}:r,s=o.resourceBase,a=s===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":s,c=o.css,l=c===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":c,u=`
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
`;return u+d+p+m+g+v}n.createSyntaxDiagramsCode=t}),Zy=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Gd();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=Mn();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=Cs();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=Bi();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=Ls();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var s=yo();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return s.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return s.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return s.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return s.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return s.NoViableAltException}});var a=Wd();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return a.defaultLexerErrorProvider}});var c=gn();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return c.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return c.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return c.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return c.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return c.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return c.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return c.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return c.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return c.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return c.Terminal}});var l=gn();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return l.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return l.serializeProduction}});var u=_o();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return u.GAstVisitor}});function d(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=d;var p=$y();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return p.createSyntaxDiagramsCode}});var m=function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g}();n.Parser=m});const $r=Zy();class Jy extends pn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=o.path===""?fr.extractUrlBase(e):o.path,a=new Sr(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(e,function(c){try{t(o.parse(c,s))}catch(l){r?r(l):console.error(l),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(T){const x=o(),A=new Qy(x.tokens),D=new tb(x.tokenVocabulary),N=s(D.getBaseCstVisitorConstructor()),F=A.lex(T);D.input=F.tokens;const $=D.vrml();if(D.errors.length>0)throw console.error(D.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return N.visit($)}function o(){const T=$r.createToken,x=T({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),A=T({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:x}),D=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],N=T({name:"Version",pattern:/#VRML.*/,longer_alt:A}),F=T({name:"NodeName",pattern:new RegExp(D.join("|")),longer_alt:A}),$=T({name:"DEF",pattern:/DEF/,longer_alt:A}),q=T({name:"USE",pattern:/USE/,longer_alt:A}),ae=T({name:"ROUTE",pattern:/ROUTE/,longer_alt:A}),G=T({name:"TO",pattern:/TO/,longer_alt:A}),k=T({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),K=T({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),se=T({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),ge=T({name:"TrueLiteral",pattern:/TRUE/}),fe=T({name:"FalseLiteral",pattern:/FALSE/}),Te=T({name:"NullLiteral",pattern:/NULL/}),B=T({name:"LSquare",pattern:/\[/}),_e=T({name:"RSquare",pattern:/]/}),pe=T({name:"LCurly",pattern:/{/}),be=T({name:"RCurly",pattern:/}/}),z=T({name:"Comment",pattern:/#.*/,group:$r.Lexer.SKIPPED}),Se=[T({name:"WhiteSpace",pattern:/[ ,\s]/,group:$r.Lexer.SKIPPED}),F,$,q,ae,G,ge,fe,Te,N,A,x,k,K,se,B,_e,pe,be,z],Oe={};for(let Ie=0,Ce=Se.length;Ie<Ce;Ie++){const Le=Se[Ie];Oe[Le.name]=Le}return{tokens:Se,tokenVocabulary:Oe}}function s(T){class x extends T{constructor(){super(),this.validateVisitor()}vrml(N){const F={version:this.visit(N.version),nodes:[],routes:[]};for(let $=0,q=N.node.length;$<q;$++){const ae=N.node[$];F.nodes.push(this.visit(ae))}if(N.route)for(let $=0,q=N.route.length;$<q;$++){const ae=N.route[$];F.routes.push(this.visit(ae))}return F}version(N){return N.Version[0].image}node(N){const F={name:N.NodeName[0].image,fields:[]};if(N.field)for(let $=0,q=N.field.length;$<q;$++){const ae=N.field[$];F.fields.push(this.visit(ae))}return N.def&&(F.DEF=this.visit(N.def[0])),F}field(N){const F={name:N.Identifier[0].image,type:null,values:null};let $;return N.singleFieldValue&&($=this.visit(N.singleFieldValue[0])),N.multiFieldValue&&($=this.visit(N.multiFieldValue[0])),F.type=$.type,F.values=$.values,F}def(N){return(N.Identifier||N.NodeName)[0].image}use(N){return{USE:(N.Identifier||N.NodeName)[0].image}}singleFieldValue(N){return A(this,N)}multiFieldValue(N){return A(this,N)}route(N){return{FROM:N.RouteIdentifier[0].image,TO:N.RouteIdentifier[1].image}}}function A(D,N){const F={type:null,values:[]};if(N.node){F.type="node";for(let $=0,q=N.node.length;$<q;$++){const ae=N.node[$];F.values.push(D.visit(ae))}}if(N.use){F.type="use";for(let $=0,q=N.use.length;$<q;$++){const ae=N.use[$];F.values.push(D.visit(ae))}}if(N.StringLiteral){F.type="string";for(let $=0,q=N.StringLiteral.length;$<q;$++){const ae=N.StringLiteral[$];F.values.push(ae.image.replace(/'|"/g,""))}}if(N.NumberLiteral){F.type="number";for(let $=0,q=N.NumberLiteral.length;$<q;$++){const ae=N.NumberLiteral[$];F.values.push(parseFloat(ae.image))}}if(N.HexLiteral){F.type="hex";for(let $=0,q=N.HexLiteral.length;$<q;$++){const ae=N.HexLiteral[$];F.values.push(ae.image)}}if(N.TrueLiteral){F.type="boolean";for(let $=0,q=N.TrueLiteral.length;$<q;$++)N.TrueLiteral[$].image==="TRUE"&&F.values.push(!0)}if(N.FalseLiteral){F.type="boolean";for(let $=0,q=N.FalseLiteral.length;$<q;$++)N.FalseLiteral[$].image==="FALSE"&&F.values.push(!1)}return N.NullLiteral&&(F.type="null",N.NullLiteral.forEach(function(){F.values.push(null)})),F}return new x}function a(T){const x=T.nodes,A=new yd;for(let D=0,N=x.length;D<N;D++){const F=x[D];c(F)}for(let D=0,N=x.length;D<N;D++){const F=x[D],$=l(F);$ instanceof St&&A.add($),F.name==="WorldInfo"&&(A.userData.worldInfo=$)}return A}function c(T){T.DEF&&(i[T.DEF]=T);const x=T.fields;for(let A=0,D=x.length;A<D;A++){const N=x[A];if(N.type==="node"){const F=N.values;for(let $=0,q=F.length;$<q;$++)c(F[$])}}}function l(T){return T.USE?W(T.USE):(T.build!==void 0||(T.build=u(T)),T.build)}function u(T){const x=T.name;let A;switch(x){case"Anchor":case"Group":case"Transform":case"Collision":A=d(T);break;case"Background":A=p(T);break;case"Shape":A=m(T);break;case"Appearance":A=g(T);break;case"Material":A=v(T);break;case"ImageTexture":A=b(T);break;case"PixelTexture":A=_(T);break;case"TextureTransform":A=y(T);break;case"IndexedFaceSet":A=C(T);break;case"IndexedLineSet":A=U(T);break;case"PointSet":A=E(T);break;case"Box":A=S(T);break;case"Cone":A=w(T);break;case"Cylinder":A=P(T);break;case"Sphere":A=L(T);break;case"ElevationGrid":A=O(T);break;case"Extrusion":A=H(T);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":A=R(T);break;case"WorldInfo":A=M(T);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",x);break}return A!==void 0&&T.DEF!==void 0&&A.hasOwnProperty("name")===!0&&(A.name=T.DEF),A}function d(T){const x=new Tn,A=T.fields;for(let D=0,N=A.length;D<N;D++){const F=A[D],$=F.name,q=F.values;switch($){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":J(q,x);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const ae=new Q(q[0],q[1],q[2]).normalize(),G=q[3];x.quaternion.setFromAxisAngle(ae,G);break;case"scale":x.scale.set(q[0],q[1],q[2]);break;case"scaleOrientation":break;case"translation":x.position.set(q[0],q[1],q[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function p(T){const x=new Tn;let A,D,N,F;const $=T.fields;for(let ae=0,G=$.length;ae<G;ae++){const k=$[ae],K=k.name,se=k.values;switch(K){case"groundAngle":A=se;break;case"groundColor":D=se;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":N=se;break;case"skyColor":F=se;break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}const q=1e4;if(F){const ae=new hr(q,32,16),G=new bn({fog:!1,side:Yt,depthWrite:!1,depthTest:!1});F.length>3?(te(ae,q,N,ee(F),!0),G.vertexColors=!0):G.color.setRGB(F[0],F[1],F[2],vt);const k=new Nt(ae,G);x.add(k)}if(D&&D.length>0){const ae=new hr(q,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),G=new bn({fog:!1,side:Yt,vertexColors:!0,depthWrite:!1,depthTest:!1});te(ae,q,A,ee(D),!1);const k=new Nt(ae,G);x.add(k)}return x.renderOrder=-1/0,x}function m(T){const x=T.fields;let A=new bn({name:pn.DEFAULT_MATERIAL_NAME,color:0}),D;for(let F=0,$=x.length;F<$;F++){const q=x[F],ae=q.name,G=q.values;switch(ae){case"appearance":G[0]!==null&&(A=l(G[0]));break;case"geometry":G[0]!==null&&(D=l(G[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}let N;if(D&&D.attributes.position){const F=D._type;if(F==="points"){const $=new Yl({name:pn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:A.opacity,transparent:A.transparent});D.attributes.color!==void 0?$.vertexColors=!0:A.isMeshPhongMaterial&&$.color.copy(A.emissive),N=new Sd(D,$)}else if(F==="line"){const $=new jl({name:pn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:A.opacity,transparent:A.transparent});D.attributes.color!==void 0?$.vertexColors=!0:A.isMeshPhongMaterial&&$.color.copy(A.emissive),N=new Ed(D,$)}else D._solid!==void 0&&(A.side=D._solid?Gn:yn),D.attributes.color!==void 0&&(A.vertexColors=!0),N=new Nt(D,A)}else N=new St,N.visible=!1;return N}function g(T){let x=new mm,A;const D=T.fields;for(let N=0,F=D.length;N<F;N++){const $=D[N],q=$.name,ae=$.values;switch(q){case"material":if(ae[0]!==null){const k=l(ae[0]);k.diffuseColor&&x.color.copy(k.diffuseColor),k.emissiveColor&&x.emissive.copy(k.emissiveColor),k.shininess&&(x.shininess=k.shininess),k.specularColor&&x.specular.copy(k.specularColor),k.transparency&&(x.opacity=1-k.transparency),k.transparency>0&&(x.transparent=!0)}else x=new bn({name:pn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const G=ae[0];G!==null&&(G.name==="ImageTexture"||G.name==="PixelTexture")&&(x.map=l(G));break;case"textureTransform":ae[0]!==null&&(A=l(ae[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}if(x.map){if(x.map.__type){switch(x.map.__type){case Cn.INTENSITY_ALPHA:x.opacity=1;break;case Cn.RGB:x.color.set(16777215);break;case Cn.RGBA:x.color.set(16777215),x.opacity=1;break}delete x.map.__type}A&&(x.map.center.copy(A.center),x.map.rotation=A.rotation,x.map.repeat.copy(A.scale),x.map.offset.copy(A.translation))}return x}function v(T){const x={},A=T.fields;for(let D=0,N=A.length;D<N;D++){const F=A[D],$=F.name,q=F.values;switch($){case"ambientIntensity":break;case"diffuseColor":x.diffuseColor=new Ye().setRGB(q[0],q[1],q[2],vt);break;case"emissiveColor":x.emissiveColor=new Ye().setRGB(q[0],q[1],q[2],vt);break;case"shininess":x.shininess=q[0];break;case"specularColor":x.specularColor=new Ye().setRGB(q[0],q[1],q[2],vt);break;case"transparency":x.transparency=q[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function f(T,x,A){let D;switch(x){case Cn.INTENSITY:D=parseInt(T),A.r=D,A.g=D,A.b=D,A.a=1;break;case Cn.INTENSITY_ALPHA:D=parseInt("0x"+T.substring(2,4)),A.r=D,A.g=D,A.b=D,A.a=parseInt("0x"+T.substring(4,6));break;case Cn.RGB:A.r=parseInt("0x"+T.substring(2,4)),A.g=parseInt("0x"+T.substring(4,6)),A.b=parseInt("0x"+T.substring(6,8)),A.a=1;break;case Cn.RGBA:A.r=parseInt("0x"+T.substring(2,4)),A.g=parseInt("0x"+T.substring(4,6)),A.b=parseInt("0x"+T.substring(6,8)),A.a=parseInt("0x"+T.substring(8,10));break}}function h(T){let x;switch(T){case 1:x=Cn.INTENSITY;break;case 2:x=Cn.INTENSITY_ALPHA;break;case 3:x=Cn.RGB;break;case 4:x=Cn.RGBA;break}return x}function _(T){let x,A=In,D=In;const N=T.fields;for(let F=0,$=N.length;F<$;F++){const q=N[F],ae=q.name,G=q.values;switch(ae){case"image":const k=G[0],K=G[1],se=G[2],ge=h(se),fe=new Uint8Array(4*k*K),Te={r:0,g:0,b:0,a:0};for(let B=3,_e=0,pe=G.length;B<pe;B++,_e++){f(G[B],ge,Te);const be=_e*4;fe[be+0]=Te.r,fe[be+1]=Te.g,fe[be+2]=Te.b,fe[be+3]=Te.a}x=new go(fe,k,K),x.colorSpace=vt,x.needsUpdate=!0,x.__type=ge;break;case"repeatS":G[0]===!1&&(A=an);break;case"repeatT":G[0]===!1&&(D=an);break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}return x&&(x.wrapS=A,x.wrapT=D),x}function b(T){let x,A=In,D=In;const N=T.fields;for(let F=0,$=N.length;F<$;F++){const q=N[F],ae=q.name,G=q.values;switch(ae){case"url":const k=G[0];k&&(x=Me.load(k));break;case"repeatS":G[0]===!1&&(A=an);break;case"repeatT":G[0]===!1&&(D=an);break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}return x&&(x.wrapS=A,x.wrapT=D,x.colorSpace=vt),x}function y(T){const x={center:new je,rotation:new je,scale:new je,translation:new je},A=T.fields;for(let D=0,N=A.length;D<N;D++){const F=A[D],$=F.name,q=F.values;switch($){case"center":x.center.set(q[0],q[1]);break;case"rotation":x.rotation=q[0];break;case"scale":x.scale.set(q[0],q[1]);break;case"translation":x.translation.set(q[0],q[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function R(T){return T.fields[0].values}function M(T){const x={},A=T.fields;for(let D=0,N=A.length;D<N;D++){const F=A[D],$=F.name,q=F.values;switch($){case"title":x.title=q[0];break;case"info":x.info=q;break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function C(T){let x,A,D,N,F=!0,$=!0,q=0,ae,G,k,K,se=!0,ge=!0;const fe=T.fields;for(let Z=0,Se=fe.length;Z<Se;Z++){const Oe=fe[Z],Ie=Oe.name,Ce=Oe.values;switch(Ie){case"color":const Le=Ce[0];Le!==null&&(x=l(Le));break;case"coord":const Ne=Ce[0];Ne!==null&&(A=l(Ne));break;case"normal":const De=Ce[0];De!==null&&(D=l(De));break;case"texCoord":const We=Ce[0];We!==null&&(N=l(We));break;case"ccw":F=Ce[0];break;case"colorIndex":ae=Ce;break;case"colorPerVertex":se=Ce[0];break;case"convex":break;case"coordIndex":G=Ce;break;case"creaseAngle":q=Ce[0];break;case"normalIndex":k=Ce;break;case"normalPerVertex":ge=Ce[0];break;case"solid":$=Ce[0];break;case"texCoordIndex":K=Ce;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ie);break}}if(G===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new Ot;const Te=j(G,F);let B,_e,pe;if(x){if(se===!0)if(ae&&ae.length>0){const Z=j(ae,F);B=de(Te,Z,x,3)}else B=Be(Te,new ct(x,3));else if(ae&&ae.length>0){const Z=he(x,ae),Se=ne(Z,G);B=ye(Te,Se)}else{const Z=ne(x,G);B=ye(Te,Z)}me(B)}if(D)if(ge===!0)if(k&&k.length>0){const Z=j(k,F);_e=de(Te,Z,D,3)}else _e=Be(Te,new ct(D,3));else if(k&&k.length>0){const Z=he(D,k),Se=ne(Z,G);_e=ye(Te,Se)}else{const Z=ne(D,G);_e=ye(Te,Z)}else _e=X(Te,A,q);if(N)if(K&&K.length>0){const Z=j(K,F);pe=de(Te,Z,N,2)}else pe=Be(Te,new ct(N,2));const be=new Ot,z=Be(Te,new ct(A,3));return be.setAttribute("position",z),be.setAttribute("normal",_e),B&&be.setAttribute("color",B),pe&&be.setAttribute("uv",pe),be._solid=$,be._type="mesh",be}function U(T){let x,A,D,N,F=!0;const $=T.fields;for(let K=0,se=$.length;K<se;K++){const ge=$[K],fe=ge.name,Te=ge.values;switch(fe){case"color":const B=Te[0];B!==null&&(x=l(B));break;case"coord":const _e=Te[0];_e!==null&&(A=l(_e));break;case"colorIndex":D=Te;break;case"colorPerVertex":F=Te[0];break;case"coordIndex":N=Te;break;default:console.warn("THREE.VRMLLoader: Unknown field:",fe);break}}let q;const ae=Ee(N);if(x){if(F===!0)if(D.length>0){const K=Ee(D);q=de(ae,K,x,3)}else q=Be(ae,new ct(x,3));else if(D.length>0){const K=he(x,D),se=re(K,N);q=Pe(ae,se)}else{const K=re(x,N);q=Pe(ae,K)}me(q)}const G=new Ot,k=Be(ae,new ct(A,3));return G.setAttribute("position",k),q&&G.setAttribute("color",q),G._type="line",G}function E(T){let x,A;const D=T.fields;for(let F=0,$=D.length;F<$;F++){const q=D[F],ae=q.name,G=q.values;switch(ae){case"color":const k=G[0];k!==null&&(x=l(k));break;case"coord":const K=G[0];K!==null&&(A=l(K));break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}const N=new Ot;if(N.setAttribute("position",new ct(A,3)),x){const F=new ct(x,3);me(F),N.setAttribute("color",F)}return N._type="points",N}function S(T){const x=new Q(2,2,2),A=T.fields;for(let N=0,F=A.length;N<F;N++){const $=A[N],q=$.name,ae=$.values;switch(q){case"size":x.x=ae[0],x.y=ae[1],x.z=ae[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return new Rr(x.x,x.y,x.z)}function w(T){let x=1,A=2,D=!1;const N=T.fields;for(let $=0,q=N.length;$<q;$++){const ae=N[$],G=ae.name,k=ae.values;switch(G){case"bottom":D=!k[0];break;case"bottomRadius":x=k[0];break;case"height":A=k[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",G);break}}return new ql(x,A,16,1,D)}function P(T){let x=1,A=2;const D=T.fields;for(let F=0,$=D.length;F<$;F++){const q=D[F],ae=q.name,G=q.values;switch(ae){case"bottom":break;case"radius":x=G[0];break;case"height":A=G[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}return new Es(x,x,A,16,1)}function L(T){let x=1;const A=T.fields;for(let N=0,F=A.length;N<F;N++){const $=A[N],q=$.name,ae=$.values;switch(q){case"radius":x=ae[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return new hr(x,16,16)}function O(T){let x,A,D,N,F=!0,$=!0,q=!0,ae=!0,G=0,k=2,K=2,se=1,ge=1;const fe=T.fields;for(let Ce=0,Le=fe.length;Ce<Le;Ce++){const Ne=fe[Ce],De=Ne.name,We=Ne.values;switch(De){case"color":const pt=We[0];pt!==null&&(x=l(pt));break;case"normal":const kt=We[0];kt!==null&&(A=l(kt));break;case"texCoord":const Xt=We[0];Xt!==null&&(D=l(Xt));break;case"height":N=We;break;case"ccw":ae=We[0];break;case"colorPerVertex":F=We[0];break;case"creaseAngle":G=We[0];break;case"normalPerVertex":$=We[0];break;case"solid":q=We[0];break;case"xDimension":k=We[0];break;case"xSpacing":se=We[0];break;case"zDimension":K=We[0];break;case"zSpacing":ge=We[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",De);break}}const Te=[],B=[],_e=[],pe=[];for(let Ce=0;Ce<K;Ce++)for(let Le=0;Le<k;Le++){const Ne=Ce*k+Le,De=se*Ce,We=N[Ne],pt=ge*Le;if(Te.push(De,We,pt),x&&F===!0){const kt=x[Ne*3+0],Xt=x[Ne*3+1],kn=x[Ne*3+2];_e.push(kt,Xt,kn)}if(A&&$===!0){const kt=A[Ne*3+0],Xt=A[Ne*3+1],kn=A[Ne*3+2];B.push(kt,Xt,kn)}if(D){const kt=D[Ne*2+0],Xt=D[Ne*2+1];pe.push(kt,Xt)}else pe.push(Ce/(k-1),Le/(K-1))}const be=[];for(let Ce=0;Ce<k-1;Ce++)for(let Le=0;Le<K-1;Le++){const Ne=Ce+Le*k,De=Ce+(Le+1)*k,We=Ce+1+(Le+1)*k,pt=Ce+1+Le*k;ae===!0?(be.push(Ne,We,De),be.push(We,Ne,pt)):(be.push(Ne,De,We),be.push(We,pt,Ne))}const z=Be(be,new ct(Te,3)),Z=Be(be,new ct(pe,2));let Se,Oe;if(x){if(F===!1){for(let Ce=0;Ce<k-1;Ce++)for(let Le=0;Le<K-1;Le++){const Ne=Ce+Le*(k-1),De=x[Ne*3+0],We=x[Ne*3+1],pt=x[Ne*3+2];_e.push(De,We,pt),_e.push(De,We,pt),_e.push(De,We,pt),_e.push(De,We,pt),_e.push(De,We,pt),_e.push(De,We,pt)}Se=new ct(_e,3)}else Se=Be(be,new ct(_e,3));me(Se)}if(A)if($===!1){for(let Ce=0;Ce<k-1;Ce++)for(let Le=0;Le<K-1;Le++){const Ne=Ce+Le*(k-1),De=A[Ne*3+0],We=A[Ne*3+1],pt=A[Ne*3+2];B.push(De,We,pt),B.push(De,We,pt),B.push(De,We,pt),B.push(De,We,pt),B.push(De,We,pt),B.push(De,We,pt)}Oe=new ct(B,3)}else Oe=Be(be,new ct(B,3));else Oe=X(be,Te,G);const Ie=new Ot;return Ie.setAttribute("position",z),Ie.setAttribute("normal",Oe),Ie.setAttribute("uv",Z),Se&&Ie.setAttribute("color",Se),Ie._solid=q,Ie._type="mesh",Ie}function H(T){let x=[1,1,1,-1,-1,-1,-1,1,1,1],A=[0,0,0,0,1,0],D,N,F=!0,$=!0,q=0,ae=!0,G=!0;const k=T.fields;for(let Ie=0,Ce=k.length;Ie<Ce;Ie++){const Le=k[Ie],Ne=Le.name,De=Le.values;switch(Ne){case"beginCap":F=De[0];break;case"ccw":$=De[0];break;case"convex":break;case"creaseAngle":q=De[0];break;case"crossSection":x=De;break;case"endCap":ae=De[0];break;case"orientation":N=De;break;case"scale":D=De;break;case"solid":G=De[0];break;case"spine":A=De;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ne);break}}const K=x[0]===x[x.length-2]&&x[1]===x[x.length-1],se=[],ge=new Q,fe=new Q,Te=new Q,B=new Q,_e=new Sn;for(let Ie=0,Ce=0,Le=0,Ne=A.length;Ie<Ne;Ie+=3,Ce+=2,Le+=4){ge.fromArray(A,Ie),fe.x=D?D[Ce+0]:1,fe.y=1,fe.z=D?D[Ce+1]:1,Te.x=N?N[Le+0]:0,Te.y=N?N[Le+1]:0,Te.z=N?N[Le+2]:1;const De=N?N[Le+3]:0;for(let We=0,pt=x.length;We<pt;We+=2)B.x=x[We+0],B.y=0,B.z=x[We+1],B.multiply(fe),_e.setFromAxisAngle(Te,De),B.applyQuaternion(_e),B.add(ge),se.push(B.x,B.y,B.z)}const pe=[],be=A.length/3,z=x.length/2;for(let Ie=0;Ie<be-1;Ie++)for(let Ce=0;Ce<z-1;Ce++){const Le=Ce+Ie*z;let Ne=Ce+1+Ie*z;const De=Ce+(Ie+1)*z;let We=Ce+1+(Ie+1)*z;Ce===z-2&&K===!0&&(Ne=Ie*z,We=(Ie+1)*z),$===!0?(pe.push(Le,Ne,De),pe.push(De,Ne,We)):(pe.push(Le,De,Ne),pe.push(De,We,Ne))}if(F===!0||ae===!0){const Ie=[];for(let Ne=0,De=x.length;Ne<De;Ne+=2)Ie.push(new je(x[Ne],x[Ne+1]));const Ce=$l.triangulateShape(Ie,[]),Le=[];for(let Ne=0,De=Ce.length;Ne<De;Ne++){const We=Ce[Ne];Le.push(We[0],We[1],We[2])}if(F===!0)for(let Ne=0,De=Le.length;Ne<De;Ne+=3)$===!0?pe.push(Le[Ne+0],Le[Ne+1],Le[Ne+2]):pe.push(Le[Ne+0],Le[Ne+2],Le[Ne+1]);if(ae===!0){const Ne=z*(be-1);for(let De=0,We=Le.length;De<We;De+=3)$===!0?pe.push(Ne+Le[De+0],Ne+Le[De+2],Ne+Le[De+1]):pe.push(Ne+Le[De+0],Ne+Le[De+1],Ne+Le[De+2])}}const Z=Be(pe,new ct(se,3)),Se=X(pe,se,q),Oe=new Ot;return Oe.setAttribute("position",Z),Oe.setAttribute("normal",Se),Oe._solid=G,Oe._type="mesh",Oe}function W(T){const x=i[T],A=l(x);return A.isObject3D||A.isMaterial?A.clone():A}function J(T,x){for(let A=0,D=T.length;A<D;A++){const N=l(T[A]);N instanceof St&&x.add(N)}}function j(T,x){const A=[];let D=0;for(let N=0,F=T.length;N<F;N++){const $=T[D],q=T[N+(x?1:2)],ae=T[N+(x?2:1)];A.push($,q,ae),(T[N+3]===-1||N+3>=F)&&(N+=3,D=N+1)}return A}function ne(T,x){const A=[];let D=0;for(let N=0,F=x.length;N<F;N++){const $=D*3,q=T[$],ae=T[$+1],G=T[$+2];A.push(q,ae,G),(x[N+3]===-1||N+3>=F)&&(N+=3,D++)}return A}function he(T,x){const A=[];for(let D=0,N=x.length;D<N;D++){const $=x[D]*3,q=T[$],ae=T[$+1],G=T[$+2];A.push(q,ae,G)}return A}function Ee(T){const x=[];for(let A=0,D=T.length;A<D;A++){const N=T[A],F=T[A+1];x.push(N,F),(T[A+2]===-1||A+2>=D)&&(A+=2)}return x}function re(T,x){const A=[];let D=0;for(let N=0,F=x.length;N<F;N++){const $=D*3,q=T[$],ae=T[$+1],G=T[$+2];A.push(q,ae,G),(x[N+2]===-1||N+2>=F)&&(N+=2,D++)}return A}const oe=new Q,we=new Q,ie=new Q,V=new je,Y=new je,ce=new je;function de(T,x,A,D){const N=[];for(let F=0,$=T.length;F<$;F+=3){const q=x[F],ae=x[F+1],G=x[F+2];D===2?(V.fromArray(A,q*D),Y.fromArray(A,ae*D),ce.fromArray(A,G*D),N.push(V.x,V.y),N.push(Y.x,Y.y),N.push(ce.x,ce.y)):(oe.fromArray(A,q*D),we.fromArray(A,ae*D),ie.fromArray(A,G*D),N.push(oe.x,oe.y,oe.z),N.push(we.x,we.y,we.z),N.push(ie.x,ie.y,ie.z))}return new ct(N,D)}function ye(T,x){const A=[];for(let D=0,N=0,F=T.length;D<F;D+=3,N++)oe.fromArray(x,N*3),A.push(oe.x,oe.y,oe.z),A.push(oe.x,oe.y,oe.z),A.push(oe.x,oe.y,oe.z);return new ct(A,3)}function Pe(T,x){const A=[];for(let D=0,N=0,F=T.length;D<F;D+=2,N++)oe.fromArray(x,N*3),A.push(oe.x,oe.y,oe.z),A.push(oe.x,oe.y,oe.z);return new ct(A,3)}function Be(T,x){const A=x.array,D=x.itemSize,N=new A.constructor(T.length*D);let F=0,$=0;for(let q=0,ae=T.length;q<ae;q++){F=T[q]*D;for(let G=0;G<D;G++)N[$++]=A[F++]}return new ct(N,D)}const Fe=new Q,qe=new Q;function X(T,x,A){const D=[],N={};for(let $=0,q=T.length;$<q;$+=3){const ae=T[$],G=T[$+1],k=T[$+2],K=new nb(ae,G,k);oe.fromArray(x,ae*3),we.fromArray(x,G*3),ie.fromArray(x,k*3),qe.subVectors(ie,we),Fe.subVectors(oe,we),qe.cross(Fe),qe.normalize(),K.normal.copy(qe),N[ae]===void 0&&(N[ae]=[]),N[G]===void 0&&(N[G]=[]),N[k]===void 0&&(N[k]=[]),N[ae].push(K.normal),N[G].push(K.normal),N[k].push(K.normal),D.push(K)}const F=[];for(let $=0,q=D.length;$<q;$++){const ae=D[$],G=Ge(N[ae.a],ae.normal,A),k=Ge(N[ae.b],ae.normal,A),K=Ge(N[ae.c],ae.normal,A);oe.fromArray(x,ae.a*3),we.fromArray(x,ae.b*3),ie.fromArray(x,ae.c*3),F.push(G.x,G.y,G.z),F.push(k.x,k.y,k.z),F.push(K.x,K.y,K.z)}return new ct(F,3)}function Ge(T,x,A){const D=new Q;if(A===0)D.copy(x);else for(let N=0,F=T.length;N<F;N++)T[N].angleTo(x)<A&&D.add(T[N]);return D.normalize()}function ee(T){const x=[];for(let A=0,D=T.length;A<D;A+=3)x.push(new Ye(T[A],T[A+1],T[A+2]));return x}function me(T){const x=new Ye;for(let A=0;A<T.count;A++)x.fromBufferAttribute(T,A),ut.colorSpaceToWorking(x,vt),T.setXYZ(A,x.r,x.g,x.b)}function te(T,x,A,D,N){const F=[],$=N===!0?0:Math.PI;for(let se=0,ge=D.length;se<ge;se++){let fe=se===0?0:A[se-1];fe=N===!0?fe:$-fe;const Te=new Q;Te.setFromSphericalCoords(x,fe,0),F.push(Te)}const q=T.index,ae=T.attributes.position,G=new Ft(new Float32Array(T.attributes.position.count*3),3),k=new Q,K=new Ye;for(let se=0;se<q.count;se++){const ge=q.getX(se);k.fromBufferAttribute(ae,ge);let fe,Te,B=1;for(let be=1;be<F.length;be++){fe=be-1,Te=be;const z=F[fe],Z=F[Te];if(N===!0){if(k.y<=z.y&&k.y>Z.y){B=Math.abs(z.y-k.y)/Math.abs(z.y-Z.y);break}}else if(k.y>=z.y&&k.y<Z.y){B=Math.abs(z.y-k.y)/Math.abs(z.y-Z.y);break}}const _e=D[fe],pe=D[Te];K.copy(_e).lerp(pe,B),ut.colorSpaceToWorking(K,vt),G.setXYZ(ge,K.r,K.g,K.b)}T.setAttribute("color",G)}const Me=new Nd(this.manager);if(Me.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const Re=r(e);return a(Re)}}class Qy{constructor(e){this.lexer=new $r.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const eb=$r.CstParser;class tb extends eb{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,s=e.LSquare,a=e.RSquare,c=e.Identifier,l=e.RouteIdentifier,u=e.StringLiteral,d=e.HexLiteral,p=e.NumberLiteral,m=e.TrueLiteral,g=e.FalseLiteral,v=e.NullLiteral,f=e.DEF,h=e.USE,_=e.ROUTE,b=e.TO,y=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(y),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(c),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(f),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("use",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(v)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(s),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(v)}}])}),t.CONSUME(a)}),t.RULE("route",function(){t.CONSUME(_),t.CONSUME(l),t.CONSUME(b),t.CONSUME2(l)}),this.performSelfAnalysis()}}class nb{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new Q}}const Cn={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},$d=n=>(xh("data-v-76df9160"),n=n(),vh(),n),ib={class:"options-div"},rb={class:"select-div"},ob={key:0,class:"radio-list"},sb=$d(()=>fn("label",{class:"label"},[fn("strong",null,"Version:")],-1)),ab={class:"radio-grid"},lb={key:1,class:"bare-list"},cb={key:2,class:"checkbox-list"},ub=$d(()=>fn("label",{class:"label"},[fn("strong",null,"Parts:")],-1)),db={class:"checkbox-grid"},hb=350,fb=Ut({__name:"ModelViewer",props:{models:{},backgroundColor:{},disableExplode:{type:Boolean}},setup(n){const e=n,t=nt(null);let i,r,o,s,a=null,c=new Tn,l=0,u=null,d=!1,p=!0,m=null;const g=new Ny,v=new Jy,f=new $_;f.setDecoderPath("./draco/"),f.setDecoderConfig({type:"wasm"});const h=new J_;h.setDRACOLoader(f);const _=nt(null),b=nt(null),y=nt(null),R=nt([]),M=nt(null),C=nt(!1);let U=null;const E=nt(!1);let S=new Map,w=new Map,P=new Map,L=new Map,O=new Map,H=1;const W=[];let J=null;function j(){if(J)return J;const G=128,k=new Uint8Array(G*G*4);for(let K=0;K<k.length;K++)k[K]=128+Math.random()*40;return J=new go(k,G,G,mn),J.wrapS=J.wrapT=In,J.repeat.set(10,10),J.needsUpdate=!0,J}let ne=new Map,he=new Map;const Ee=Ze(()=>{const G=[],k=K=>{(K||[]).forEach(se=>{se.src&&G.push(se),se.children&&Array.isArray(se.children)&&k(se.children)})};return k(e.models),G}),re=Ze(()=>(ne.clear(),he.clear(),e.models.map(k=>{if(ne.set(k.key,k),!(k.children&&k.children.length>0))return{label:k.label,value:k.key};if(k.children.every(fe=>!!fe.src))return{label:k.label,value:k.key};const ge=k.children.map(fe=>(ne.set(fe.key,fe),he.set(fe.key,k.key),{label:fe.label,value:fe.key}));return{label:k.label,value:k.key,children:ge}})));function oe(G,k=null){const K=(G==null?void 0:G.src)??k;return K?C.value&&(G!=null&&G.bareSrc)?G.bareSrc:K:null}const we=Ze(()=>{const G={versionOptions:[],isGroup:!1,children:[],filePaths:[],hasBare:!1};if(!_.value||_.value.length<1)return G;const k=_.value[_.value.length-1],K=ne.get(k);if(!K)return G;if(!K.children||K.children.length===0){const _e=oe(K);return{versionOptions:[],isGroup:!1,children:[],filePaths:_e?[_e]:[],hasBare:!!K.bareSrc}}const se=K.children.map(_e=>{const pe=!!_e.children&&_e.children.length>0,be=_e.isGroup||pe?_e.key||_e.src:_e.src||_e.key;return{label:_e.label,value:be,isGroup:pe,children:_e.children,src:_e.src,bareSrc:_e.bareSrc,colorHex:_e.colorHex,opacity:_e.opacity}}),ge=se.find(_e=>_e.value===M.value),fe=!!(ge&&ge.children&&ge.children.length>0);let Te=[],B=[];return M.value&&(M.value.includes("/")?B=[oe(ge,M.value)]:ge&&(fe&&ge.children?(Te=ge.children.map(_e=>({src:_e.src,label:_e.label})),B=R.value.length>0?R.value:[]):ge.src&&(B=[oe(ge)]))),{versionOptions:se,isGroup:fe,children:Te,filePaths:B,hasBare:!fe&&!!(ge!=null&&ge.bareSrc)}}),ie=Ze(()=>we.value.versionOptions),V=Ze(()=>we.value.isGroup),Y=Ze(()=>we.value.children),ce=Ze(()=>we.value.filePaths),de=Ze(()=>we.value.hasBare);Qt(()=>e.models,()=>{if(_.value)return;const G=e.models;if(!(!G||G.length===0)){re.value;for(const k of G)if(k.children&&k.children.length>0){const K=k.children[0];if(K){_.value=[k.key,K.key],y.value=K.key;return}}else if(k.src){_.value=[k.key],y.value=k.key;return}}},{immediate:!0}),Qt(y,G=>{if(!G){_.value=null;return}const k=Array.isArray(G)?G[G.length-1]:G,K=[];let se=k;const ge=new Set;for(;se&&!ge.has(se);)K.unshift(se),ge.add(se),se=he.get(se);K.length===0&&K.push(k),_.value=K}),Qt(_,G=>{if(!G||G.length<1)return;const k=G[G.length-1],K=ne.get(k);if(!K){M.value=null,R.value=[],Pe();return}if(!K.children||K.children.length===0){M.value=K.src||null,R.value=[],Pe();return}const se=K.children,ge=se[se.length-1],fe=!!(ge.children&&ge.children.length>0),Te=fe?ge.key||ge.src:ge.src||ge.key;M.value=Te,fe&&ge.children?R.value=ge.children.map(B=>B.src):R.value=[],Pe()},{immediate:!0}),Qt(M,G=>{if(!G||!_.value||_.value.length<1){Pe();return}const k=_.value[_.value.length-1],K=ne.get(k);if(!K||!K.children){Pe();return}const se=K.children.find(ge=>(!!(ge.children&&ge.children.length>0)?ge.key||ge.src:ge.src||ge.key)===G);se&&se.children&&(R.value=se.children.map(ge=>ge.src)),Pe()},{immediate:!0}),Qt(R,()=>{if(!V.value||!a){Pe();return}const G=new Set(R.value);a.children.forEach(k=>{if(k instanceof Nt||k instanceof St&&k.children.length>0){const K=k.userData.src;k.visible=G.has(K)}}),E.value&&F(),Re()},{deep:!0}),Qt(C,()=>{de.value&&Pe()}),Qt(V,G=>{!G&&E.value&&(E.value=!1,q())}),uo(()=>{ye(),m=new IntersectionObserver(([G])=>{p=G.isIntersecting,p?te():Me()},{rootMargin:"100px"}),m.observe(t.value),Pe(),Re()}),vs(()=>{Me(),p=!1,W.length=0,m==null||m.disconnect(),m=null,s==null||s.dispose(),a&&(i.remove(a),x(a),a=null),Be(),i==null||i.clear(),o&&(o.dispose(),o.forceContextLoss(),o.domElement.remove())});function ye(){i=new yd,i.background=new Ye(e.backgroundColor||getComputedStyle(document.documentElement).getPropertyValue("--background-color").trim()||"#101014");const G=t.value.clientWidth,k=500;r=new en(45,G/k,.01,1e4),r.position.set(0,0,100),o=new D_({antialias:!0}),o.setSize(G,k),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=vt,t.value.appendChild(o.domElement),s=new U_(r,o.domElement),s.enableDamping=!0,s.dampingFactor=.05,s.addEventListener("change",Re);const K=new Fm(16777215,.6);i.add(K);const se=new as(16777215,.8);se.position.set(5,5,5),i.add(se);const ge=new as(16777215,.4);ge.position.set(-5,0,-5),i.add(ge);const fe=new as(16777215,.3);fe.position.set(0,-5,-5),i.add(fe),i.add(c)}async function Pe(){if(!i||!ce.value.length)return;const G=++l,k=JSON.stringify(b.value)!==JSON.stringify(_.value),K=M.value!==U,se=new Tn,ge=[];for(const fe of ce.value){const Te=fe.toLowerCase(),B=Te.endsWith(".wrl")||Te.endsWith(".vrml");if(Te.endsWith(".glb")||Te.endsWith(".gltf")){const pe=await Ge(fe);pe.userData.src=fe,ge.push(pe),se.add(pe)}else if(B){const pe=await X(fe);pe.userData.src=fe,ge.push(pe),se.add(pe)}else{const pe=await qe(fe),be=ee(pe,fe);be.userData.src=fe,ge.push(be),se.add(be)}}if(G!==l||!i){x(se);return}if(b.value=_.value?[..._.value]:null,a&&(i.remove(a),x(a)),a=se,i.add(a),K){U=M.value??null;const fe=ie.value.find(Te=>Te.value===M.value);if(fe&&fe.isGroup&&fe.children){const Te=ge.filter(B=>!(B instanceof St&&B.children.length>0));if(Te.length>0){const B=new Tn;Te.forEach(_e=>B.add(_e.clone())),B.updateMatrixWorld(!0),$(Te,B,fe.children)}k&&me(a)}else k&&me(a)}else s.update();a.children.forEach(fe=>{if(!(fe instanceof Nt))return;const Te=fe.userData.src;S.has(Te)||S.set(Te,fe.position.clone()),w.has(Te)||w.set(Te,fe.rotation.clone())}),E.value&&F(),Fe(),Re()}function Be(){c.children.forEach(G=>{var K,se;const k=G;(K=k.geometry)==null||K.dispose(),(se=k.material)==null||se.dispose()}),c.clear()}function Fe(){Be(),a&&a.children.forEach(G=>{const k=G.userData.src,K=Ee.value.find(se=>se.src===k);if(K!=null&&K.rotationPivot){const se=new Nt(new hr(.5),new bn({color:16711680,depthTest:!1,transparent:!0,opacity:.8}));se.renderOrder=999,se.position.copy(G.position),c.add(se)}})}function qe(G){return new Promise((k,K)=>{g.load(G,k,void 0,K)})}function X(G){return new Promise((k,K)=>{v.load(G,k,void 0,K)})}function Ge(G){return new Promise((k,K)=>{h.load(G,se=>k(se.scene),void 0,K)})}function ee(G,k){G.computeVertexNormals();const K=k.toLowerCase();let se=Ee.value.find(pe=>pe.src.toLowerCase()===K);if(!se){const pe=K.split("/").pop();se=Ee.value.find(be=>{var Z;return((Z=be.src.split("/").pop())==null?void 0:Z.toLowerCase())===pe})}let ge=new Q(0,0,0);if(se!=null&&se.rotationPivot){G.computeBoundingBox();const pe=new Q;G.boundingBox.getCenter(pe),ge.set(se.rotationPivot.x+pe.x,se.rotationPivot.y+pe.y,se.rotationPivot.z+pe.z),G.translate(-ge.x,-ge.y,-ge.z)}const fe=(se==null?void 0:se.colorHex)??"0xffffff",Te=(se==null?void 0:se.opacity)??1,B=new Ms({color:parseInt(fe.replace("#",""),16),transparent:Te<1,opacity:Te,roughness:.6,metalness:.05,emissive:1118481,normalMap:j(),normalScale:new je(.2,.2),side:yn});B.onBeforeCompile=pe=>{pe.fragmentShader=pe.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `)};const _e=new Nt(G,B);return se!=null&&se.rotationPivot?_e.position.copy(ge):_e.position.set(0,0,0),_e}function me(G){const k=G??a;if(!k)return;const K=new En().setFromObject(k),se=K.getSize(new Q).length(),ge=K.getCenter(new Q);s.target.copy(ge),r.position.copy(ge).addScalar(se*.8),r.lookAt(ge)}function te(){u===null&&p&&o&&(u=requestAnimationFrame(Ue))}function Me(){u!==null&&cancelAnimationFrame(u),u=null}function Re(){d=!0,te()}function Ue(){if(u=null,!p||!o)return;d=!1,T(performance.now());const G=s.update();o.render(i,r),(G||d||W.length>0)&&te()}function T(G){for(let k=W.length-1;k>=0;k--){const K=W[k],se=Math.min((G-K.startTime)/hb,1),ge=se<.5?2*se*se:1-Math.pow(-2*se+2,2)/2;K.mesh.position.lerpVectors(K.startPos,K.targetPos,ge),K.mesh.quaternion.slerpQuaternions(K.startQuat,K.endQuat,ge),se>=1&&W.splice(k,1)}}function x(G){G.traverse(k=>{const K=k;K.geometry&&K.geometry.dispose();const se=K.material;Array.isArray(se)?se.forEach(A):se&&A(se)})}function A(G){const k=G.normalMap;k&&k!==J&&k.dispose(),G.dispose()}function D(){a&&(E.value?q():N(),E.value=!E.value)}function N(){if(!a)return;S.clear();const G=H*.25;a.children.forEach(k=>{if(!(k instanceof Nt))return;const K=k.userData.src;S.set(K,k.position.clone());const se=L.get(K);let ge;if(se)ge=k.position.clone().add(new Q(se.x,se.y,se.z));else{const B=P.get(K);if(!B)return;ge=k.position.clone().add(B.clone().multiplyScalar(G))}const fe=O.get(K);let Te=w.get(K).clone();fe&&Te.set(gi.degToRad(fe.x),gi.degToRad(fe.y),gi.degToRad(fe.z)),ae(k,ge,Te)})}function F(){const G=H*.25;a.children.forEach(k=>{if(!(k instanceof Nt))return;const K=k.userData.src,se=L.get(K);let ge;if(se)ge=S.get(K).clone().add(new Q(se.x,se.y,se.z));else{const B=P.get(K);if(!B)return;ge=k.position.clone().add(B.clone().multiplyScalar(G))}const fe=O.get(K);let Te=w.get(K).clone();fe&&Te.set(gi.degToRad(fe.x),gi.degToRad(fe.y),gi.degToRad(fe.z)),k.position.copy(ge),k.rotation.copy(Te)})}function $(G,k,K){P.clear(),L.clear(),O.clear();const se=new En().setFromObject(k),ge=se.getCenter(new Q),fe=k.worldToLocal(ge.clone());H=se.getSize(new Q).length();for(const Te of G){const _e=new En().setFromObject(Te).getCenter(new Q),be=k.worldToLocal(_e.clone()).clone().sub(fe);if(be.length()<1e-4?be.set(0,0,0):be.normalize(),P.set(Te.userData.src,be),K){const z=K.find(Z=>Z.src===Te.userData.src);z!=null&&z.explodeOffset&&L.set(Te.userData.src,z.explodeOffset),z!=null&&z.explodeRotation&&O.set(Te.userData.src,z.explodeRotation)}}}function q(){a&&a.children.forEach(G=>{if(!(G instanceof Nt))return;const k=S.get(G.userData.src),K=w.get(G.userData.src);!k||!K||ae(G,k,K)})}function ae(G,k,K){const se=W.findIndex(ge=>ge.mesh===G);se>-1&&W.splice(se,1),W.push({mesh:G,startPos:G.position.clone(),targetPos:k.clone(),startQuat:G.quaternion.clone(),endQuat:new Sn().setFromEuler(K),startTime:performance.now()}),te()}return(G,k)=>{const K=nf,se=mh,ge=gh,fe=sf,Te=Nh,B=$u,_e=Th;return hn(),mi(es,null,[fn("div",ib,[fn("div",rb,[Ir(K,{class:"select-model",value:y.value,"onUpdate:value":k[0]||(k[0]=pe=>y.value=pe),options:re.value,"show-path":!0,"check-strategy":"child"},null,8,["value","options"]),V.value&&!e.disableExplode?(hn(),Nr(ge,{key:0,class:"select-button",onClick:D,tertiary:""},{icon:Mi(()=>[Ir(se,null,{default:Mi(()=>[E.value?(hn(),Nr(sc(uf),{key:0})):Hi("",!0),E.value?Hi("",!0):(hn(),Nr(sc(lf),{key:1}))]),_:1})]),_:1})):Hi("",!0)]),ie.value.length>0&&!V.value?(hn(),mi("div",ob,[sb,Ir(Te,{value:M.value,"onUpdate:value":k[1]||(k[1]=pe=>M.value=pe)},{default:Mi(()=>[fn("div",ab,[(hn(!0),mi(es,null,ac(ie.value,pe=>(hn(),Nr(fe,{key:pe.value,value:pe.value},{default:Mi(()=>[Hs(lc(pe.label),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):Hi("",!0),de.value?(hn(),mi("div",lb,[Ir(B,{checked:C.value,"onUpdate:checked":k[2]||(k[2]=pe=>C.value=pe)},{default:Mi(()=>[Hs("Bare board")]),_:1},8,["checked"])])):Hi("",!0),V.value?(hn(),mi("div",cb,[ub,Ir(_e,{value:R.value,"onUpdate:value":k[3]||(k[3]=pe=>R.value=pe)},{default:Mi(()=>[fn("div",db,[(hn(!0),mi(es,null,ac(Y.value,pe=>(hn(),Nr(B,{key:pe.src,value:pe.src},{default:Mi(()=>[Hs(lc(pe.name??pe.label??"Unnamed Part"),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):Hi("",!0)]),fn("div",{ref_key:"viewerContainer",ref:t,class:"viewer"},null,512)],64)}}}),bb=_h(fb,[["__scopeId","data-v-76df9160"]]);export{bb as default};
