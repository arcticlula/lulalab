import{d as Kt,at as Ms,h as Ee,a4 as Jd,b as lt,aZ as Qd,z as Eo,a_ as Ws,w as tn,A as As,a$ as eh,I as ut,L as Xt,J as mt,aK as th,aF as nh,Q as So,R as co,b0 as ju,an as Ut,b1 as ih,al as Mo,aE as _r,a9 as Ur,aI as Pi,K as Dt,aJ as xs,b2 as Oa,r as vs,aG as Ll,b3 as Ku,V as Rs,Y as Il,X as Oi,b4 as rh,e as nt,aM as yr,$ as gi,Z as ro,ac as Da,a0 as ws,b5 as oh,n as Xs,F as vr,b6 as sh,ao as ah,ab as lh,aj as Yu,b7 as qu,b8 as ch,b9 as uh,ba as dh,bb as hh,H as fh,bc as ph,aO as Fi,ar as mh,c as An,o as qt,a as nn,g as kn,i as Ui,k as Bn,f as ki,N as gh,u as uc,B as xh,l as js,m as er,t as Ks,s as vh,v as _h,x as yh}from"./index-DnHCe6iX.js";import{V as $u,_ as Zu,b as bh,h as uo,a as Ju,c as Qu,S as Th}from"./Checkbox-Ci2slcqe.js";import{i as Nl,b as Eh,N as Sh,B as Mh,V as Ah,d as dc,u as cs}from"./Image-CFv493kA.js";import{c as Rh,a as wh,b as Ch,u as hc}from"./use-locale-YH0DJfoG.js";import{s as Ph,a as Lh,r as Ih,_ as Nh}from"./RadioGroup-BOh6-tCE.js";import"./next-frame-once-C5Ksf8W7.js";const ai="v-hidden",Oh=Rh("[v-hidden]",{display:"none!important"}),fc=Kt({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=lt(null),i=lt(null);function r(s){const{value:a}=t,{getCounter:c,getTail:l}=n;let u;if(c!==void 0?u=c():u=i.value,!a||!u)return;u.hasAttribute(ai)&&u.removeAttribute(ai);const{children:d}=a;if(s.showAllItemsBeforeCalculate)for(const b of d)b.hasAttribute(ai)&&b.removeAttribute(ai);const p=a.offsetWidth,m=[],g=e.tail?l==null?void 0:l():null;let v=g?g.offsetWidth:0,f=!1;const h=a.children.length-(e.tail?1:0);for(let b=0;b<h-1;++b){if(b<0)continue;const y=d[b];if(f){y.hasAttribute(ai)||y.setAttribute(ai,"");continue}else y.hasAttribute(ai)&&y.removeAttribute(ai);const R=y.offsetWidth;if(v+=R,m[b]=R,v>p){const{updateCounter:M}=n;for(let C=b;C>=0;--C){const U=h-1-C;M!==void 0?M(U):u.textContent=`${U}`;const E=u.offsetWidth;if(v-=m[C],v+E<=p||C===0){f=!0,b=C-1,g&&(b===-1?(g.style.maxWidth=`${p-E}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:S}=n;S&&S(U);break}}}}const{onUpdateOverflow:_}=n;f?_!==void 0&&_(!0):(_!==void 0&&_(!1),u.setAttribute(ai,""))}const o=Qd();return Oh.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wh,ssr:o}),Eo(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return Ms(()=>this.sync({showAllItemsBeforeCalculate:!1})),Ee("div",{class:"v-overflow",ref:"selfRef"},[Jd(n,"default"),n.counter?n.counter():Ee("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Ol(n,e){e&&(Eo(()=>{const{value:t}=n;t&&Ws.registerHandler(t,e)}),tn(n,(t,i)=>{i&&Ws.unregisterHandler(i)},{deep:!1}),As(()=>{const{value:t}=n;t&&Ws.unregisterHandler(t)}))}function pc(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function Ys(n){const e=n.filter(t=>t!==void 0);if(e.length!==0)return e.length===1?e[0]:t=>{n.forEach(i=>{i&&i(t)})}}const ed=Kt({name:"Checkmark",render(){return Ee("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Ee("g",{fill:"none"},Ee("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Dh=Kt({name:"ChevronDown",render(){return Ee("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Fh=Kt({name:"ChevronRight",render(){return Ee("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Uh=eh("clear",()=>Ee("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Ee("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Ee("g",{fill:"currentColor","fill-rule":"nonzero"},Ee("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),kh=ut("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[Xt(">",[mt("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[Xt("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),Xt("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),mt("placeholder",`
 display: flex;
 `),mt("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[th({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Bh=Kt({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return ju("-base-clear",kh,Ut(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return Ee("div",{class:`${n}-base-clear`},Ee(nh,null,{default:()=>{var e,t;return this.show?Ee("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},So(this.$slots.icon,()=>[Ee(co,{clsPrefix:n},{default:()=>Ee(Uh,null)})])):Ee("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),td=Kt({props:{onFocus:Function,onBlur:Function},setup(n){return()=>Ee("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}}),zh=ut("base-menu-mask",`
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
`,[ih()]),Vh=Kt({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(n){ju("-base-menu-mask",zh,Ut(n,"clsPrefix"));const e=lt(null);let t=null;const i=lt(!1);return As(()=>{t!==null&&window.clearTimeout(t)}),Object.assign({message:e,show:i},{showOnce(o,s=1500){t&&window.clearTimeout(t),i.value=!0,e.value=o,t=window.setTimeout(()=>{i.value=!1,e.value=null},s)}})},render(){return Ee(Mo,{name:"fade-in-transition"},{default:()=>this.show?Ee("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}}),mc=Kt({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t,nodePropsRef:i}=Ur(Nl);return{labelField:t,nodeProps:i,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,nodeProps:i,tmNode:{rawNode:r}}=this,o=i==null?void 0:i(r),s=e?e(r,!1):_r(r[this.labelField],r,!1),a=Ee("div",Object.assign({},o,{class:[`${n}-base-select-group-header`,o==null?void 0:o.class]}),s);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}});function Gh(n,e){return Ee(Mo,{name:"fade-in-scale-up-transition"},{default:()=>n?Ee(co,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>Ee(ed)}):null})}const gc=Kt({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:p}=Ur(Nl),m=Pi(()=>{const{value:h}=t;return h?n.tmNode.key===h.key:!1});function g(h){const{tmNode:_}=n;_.disabled||d(h,_)}function v(h){const{tmNode:_}=n;_.disabled||p(h,_)}function f(h){const{tmNode:_}=n,{value:b}=m;_.disabled||b||p(h,_)}return{multiple:i,isGrouped:Pi(()=>{const{tmNode:h}=n,{parent:_}=h;return _&&_.rawNode.type==="group"}),showCheckmark:l,nodeProps:u,isPending:m,isSelected:Pi(()=>{const{value:h}=e,{value:_}=i;if(h===null)return!1;const b=n.tmNode.rawNode[c.value];if(_){const{value:y}=r;return y.has(b)}else return h===b}),labelField:a,renderLabel:o,renderOption:s,handleMouseMove:f,handleMouseEnter:v,handleClick:g}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,nodeProps:s,renderOption:a,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,p=Gh(t,n),m=c?[c(e,t),o&&p]:[_r(e[this.labelField],e,t),o&&p],g=s==null?void 0:s(e),v=Ee("div",Object.assign({},g,{class:[`${n}-base-select-option`,e.class,g==null?void 0:g.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:[(g==null?void 0:g.style)||"",e.style||""],onClick:Ys([l,g==null?void 0:g.onClick]),onMouseenter:Ys([u,g==null?void 0:g.onMouseenter]),onMousemove:Ys([d,g==null?void 0:g.onMousemove])}),Ee("div",{class:`${n}-base-select-option__content`},m));return e.render?e.render({node:v,option:e,selected:t}):a?a({node:v,option:e,selected:t}):v}}),Hh=ut("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[ut("scrollbar",`
 max-height: var(--n-height);
 `),ut("virtual-list",`
 max-height: var(--n-height);
 `),ut("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[mt("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),ut("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),ut("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),mt("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),mt("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),mt("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),mt("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),ut("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),ut("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Dt("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Xt("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Xt("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Dt("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Dt("pending",[Xt("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Dt("selected",`
 color: var(--n-option-text-color-active);
 `,[Xt("&::before",`
 background-color: var(--n-option-color-active);
 `),Dt("pending",[Xt("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Dt("disabled",`
 cursor: not-allowed;
 `,[xs("selected",`
 color: var(--n-option-text-color-disabled);
 `),Dt("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),mt("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Oa({enterScale:"0.5"})])])]),Wh=Kt({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oi.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Rs(n),i=Il("InternalSelectMenu",t,e),r=Oi("InternalSelectMenu","-internal-select-menu",Hh,rh,n,Ut(n,"clsPrefix")),o=lt(null),s=lt(null),a=lt(null),c=nt(()=>n.treeMate.getFlattenedNodes()),l=nt(()=>bh(c.value)),u=lt(null);function d(){const{treeMate:re}=n;let ne=null;const{value:Ce}=n;Ce===null?ne=re.getFirstAvailableNode():(n.multiple?ne=re.getNode((Ce||[])[(Ce||[]).length-1]):ne=re.getNode(Ce),(!ne||ne.disabled)&&(ne=re.getFirstAvailableNode())),O(ne||null)}function p(){const{value:re}=u;re&&!n.treeMate.getNode(re.key)&&(u.value=null)}let m;tn(()=>n.show,re=>{re?m=tn(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?d():p(),Ms(V)):p()},{immediate:!0}):m==null||m()},{immediate:!0}),As(()=>{m==null||m()});const g=nt(()=>yr(r.value.self[gi("optionHeight",n.size)])),v=nt(()=>ro(r.value.self[gi("padding",n.size)])),f=nt(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),h=nt(()=>{const re=c.value;return re&&re.length===0});function _(re){const{onToggle:ne}=n;ne&&ne(re)}function b(re){const{onScroll:ne}=n;ne&&ne(re)}function y(re){var ne;(ne=a.value)===null||ne===void 0||ne.sync(),b(re)}function R(){var re;(re=a.value)===null||re===void 0||re.sync()}function M(){const{value:re}=u;return re||null}function C(re,ne){ne.disabled||O(ne,!1)}function U(re,ne){ne.disabled||_(ne)}function E(re){var ne;uo(re,"action")||(ne=n.onKeyup)===null||ne===void 0||ne.call(n,re)}function S(re){var ne;uo(re,"action")||(ne=n.onKeydown)===null||ne===void 0||ne.call(n,re)}function w(re){var ne;(ne=n.onMousedown)===null||ne===void 0||ne.call(n,re),!n.focusable&&re.preventDefault()}function P(){const{value:re}=u;re&&O(re.getNext({loop:!0}),!0)}function L(){const{value:re}=u;re&&O(re.getPrev({loop:!0}),!0)}function O(re,ne=!1){u.value=re,ne&&V()}function V(){var re,ne;const Ce=u.value;if(!Ce)return;const ee=l.value(Ce.key);ee!==null&&(n.virtualScroll?(re=s.value)===null||re===void 0||re.scrollTo({index:ee}):(ne=a.value)===null||ne===void 0||ne.scrollTo({index:ee,elSize:g.value}))}function H(re){var ne,Ce;!((ne=o.value)===null||ne===void 0)&&ne.contains(re.target)&&((Ce=n.onFocus)===null||Ce===void 0||Ce.call(n,re))}function $(re){var ne,Ce;!((ne=o.value)===null||ne===void 0)&&ne.contains(re.relatedTarget)||(Ce=n.onBlur)===null||Ce===void 0||Ce.call(n,re)}Da(Nl,{handleOptionMouseEnter:C,handleOptionClick:U,valueSetRef:f,pendingTmNodeRef:u,nodePropsRef:Ut(n,"nodeProps"),showCheckmarkRef:Ut(n,"showCheckmark"),multipleRef:Ut(n,"multiple"),valueRef:Ut(n,"value"),renderLabelRef:Ut(n,"renderLabel"),renderOptionRef:Ut(n,"renderOption"),labelFieldRef:Ut(n,"labelField"),valueFieldRef:Ut(n,"valueField")}),Da(Eh,o),Eo(()=>{const{value:re}=a;re&&re.sync()});const W=nt(()=>{const{size:re}=n,{common:{cubicBezierEaseInOut:ne},self:{height:Ce,borderRadius:ee,color:z,groupHeaderTextColor:X,actionDividerColor:le,optionTextColorPressed:de,optionTextColor:xe,optionTextColorDisabled:Ne,optionTextColorActive:He,optionOpacityDisabled:Ue,optionCheckColor:et,actionTextColor:G,optionColorPending:Ke,optionColorActive:Z,loadingColor:pe,loadingSize:Q,optionColorActivePending:Te,[gi("optionFontSize",re)]:Se,[gi("optionHeight",re)]:Be,[gi("optionPadding",re)]:T}}=r.value;return{"--n-height":Ce,"--n-action-divider-color":le,"--n-action-text-color":G,"--n-bezier":ne,"--n-border-radius":ee,"--n-color":z,"--n-option-font-size":Se,"--n-group-header-text-color":X,"--n-option-check-color":et,"--n-option-color-pending":Ke,"--n-option-color-active":Z,"--n-option-color-active-pending":Te,"--n-option-height":Be,"--n-option-opacity-disabled":Ue,"--n-option-text-color":xe,"--n-option-text-color-active":He,"--n-option-text-color-disabled":Ne,"--n-option-text-color-pressed":de,"--n-option-padding":T,"--n-option-padding-left":ro(T,"left"),"--n-option-padding-right":ro(T,"right"),"--n-loading-color":pe,"--n-loading-size":Q}}),{inlineThemeDisabled:te}=n,ue=te?ws("internal-select-menu",nt(()=>n.size[0]),W,n):void 0,_e={selfRef:o,next:P,prev:L,getPendingTmNode:M};return Ol(o,n.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:e,rtlEnabled:i,virtualListRef:s,scrollbarRef:a,itemSize:g,padding:v,flattenedNodes:c,empty:h,virtualListContainer(){const{value:re}=s;return re==null?void 0:re.listElRef},virtualListContent(){const{value:re}=s;return re==null?void 0:re.itemsElRef},doScroll:b,handleFocusin:H,handleFocusout:$,handleKeyUp:E,handleKeyDown:S,handleMouseDown:w,handleVirtualListResize:R,handleVirtualListScroll:y,cssVars:te?void 0:W,themeClass:ue==null?void 0:ue.themeClass,onRender:ue==null?void 0:ue.onRender},_e)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),Ee("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},vs(n.header,s=>s&&Ee("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},s)),this.loading?Ee("div",{class:`${t}-base-select-menu__loading`},Ee(Ll,{clsPrefix:t,strokeWidth:20})):this.empty?Ee("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},So(n.empty,()=>[Ee(Zu,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):Ee(Ku,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?Ee($u,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?Ee(mc,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:Ee(gc,{clsPrefix:t,key:s.key,tmNode:s})}):Ee("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?Ee(mc,{key:s.key,clsPrefix:t,tmNode:s}):Ee(gc,{clsPrefix:t,key:s.key,tmNode:s})))}),vs(n.action,s=>s&&[Ee("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),Ee(td,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Xh=Kt({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return Ee(Ll,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?Ee(Bh,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>Ee(co,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>So(e.default,()=>[Ee(Dh,null)])})}):null})}}}),jh=Xt([ut("base-selection",`
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
 `,[ut("base-loading",`
 color: var(--n-loading-color);
 `),ut("base-selection-tags","min-height: var(--n-height);"),mt("border, state-border",`
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
 `),mt("state-border",`
 z-index: 1;
 border-color: #0000;
 `),ut("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[mt("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),ut("base-selection-overlay",`
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
 `,[mt("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),ut("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[mt("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),ut("base-selection-tags",`
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
 `),ut("base-selection-label",`
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
 `,[ut("base-selection-input",`
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
 `,[mt("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),mt("render-label",`
 color: var(--n-text-color);
 `)]),xs("disabled",[Xt("&:hover",[mt("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Dt("focus",[mt("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Dt("active",[mt("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),ut("base-selection-label","background-color: var(--n-color-active);"),ut("base-selection-tags","background-color: var(--n-color-active);")])]),Dt("disabled","cursor: not-allowed;",[mt("arrow",`
 color: var(--n-arrow-color-disabled);
 `),ut("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[ut("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),mt("render-label",`
 color: var(--n-text-color-disabled);
 `)]),ut("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),ut("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),ut("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[mt("input",`
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
 `),mt("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>Dt(`${n}-status`,[mt("state-border",`border: var(--n-border-${n});`),xs("disabled",[Xt("&:hover",[mt("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),Dt("active",[mt("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),ut("base-selection-label",`background-color: var(--n-color-active-${n});`),ut("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),Dt("focus",[mt("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),ut("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),ut("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Xt("&:last-child","padding-right: 0;"),ut("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[mt("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Kh=Kt({name:"InternalSelection",props:Object.assign(Object.assign({},Oi.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Rs(n),i=Il("InternalSelection",t,e),r=lt(null),o=lt(null),s=lt(null),a=lt(null),c=lt(null),l=lt(null),u=lt(null),d=lt(null),p=lt(null),m=lt(null),g=lt(!1),v=lt(!1),f=lt(!1),h=Oi("InternalSelection","-internal-selection",jh,sh,n,Ut(n,"clsPrefix")),_=nt(()=>n.clearable&&!n.disabled&&(f.value||n.active)),b=nt(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):_r(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),y=nt(()=>{const x=n.selectedOption;if(x)return x[n.labelField]}),R=nt(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function M(){var x;const{value:A}=r;if(A){const{value:D}=o;D&&(D.style.width=`${A.offsetWidth}px`,n.maxTagCount!=="responsive"&&((x=p.value)===null||x===void 0||x.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:x}=m;x&&(x.style.display="none")}function U(){const{value:x}=m;x&&(x.style.display="inline-block")}tn(Ut(n,"active"),x=>{x||C()}),tn(Ut(n,"pattern"),()=>{n.multiple&&Ms(M)});function E(x){const{onFocus:A}=n;A&&A(x)}function S(x){const{onBlur:A}=n;A&&A(x)}function w(x){const{onDeleteOption:A}=n;A&&A(x)}function P(x){const{onClear:A}=n;A&&A(x)}function L(x){const{onPatternInput:A}=n;A&&A(x)}function O(x){var A;(!x.relatedTarget||!(!((A=s.value)===null||A===void 0)&&A.contains(x.relatedTarget)))&&E(x)}function V(x){var A;!((A=s.value)===null||A===void 0)&&A.contains(x.relatedTarget)||S(x)}function H(x){P(x)}function $(){f.value=!0}function W(){f.value=!1}function te(x){!n.active||!n.filterable||x.target!==o.value&&x.preventDefault()}function ue(x){w(x)}const _e=lt(!1);function re(x){if(x.key==="Backspace"&&!_e.value&&!n.pattern.length){const{selectedOptions:A}=n;A!=null&&A.length&&ue(A[A.length-1])}}let ne=null;function Ce(x){const{value:A}=r;if(A){const D=x.target.value;A.textContent=D,M()}n.ignoreComposition&&_e.value?ne=x:L(x)}function ee(){_e.value=!0}function z(){_e.value=!1,n.ignoreComposition&&L(ne),ne=null}function X(x){var A;v.value=!0,(A=n.onPatternFocus)===null||A===void 0||A.call(n,x)}function le(x){var A;v.value=!1,(A=n.onPatternBlur)===null||A===void 0||A.call(n,x)}function de(){var x,A;if(n.filterable)v.value=!1,(x=l.value)===null||x===void 0||x.blur(),(A=o.value)===null||A===void 0||A.blur();else if(n.multiple){const{value:D}=a;D==null||D.blur()}else{const{value:D}=c;D==null||D.blur()}}function xe(){var x,A,D;n.filterable?(v.value=!1,(x=l.value)===null||x===void 0||x.focus()):n.multiple?(A=a.value)===null||A===void 0||A.focus():(D=c.value)===null||D===void 0||D.focus()}function Ne(){const{value:x}=o;x&&(U(),x.focus())}function He(){const{value:x}=o;x&&x.blur()}function Ue(x){const{value:A}=u;A&&A.setTextContent(`+${x}`)}function et(){const{value:x}=d;return x}function G(){return o.value}let Ke=null;function Z(){Ke!==null&&window.clearTimeout(Ke)}function pe(){n.active||(Z(),Ke=window.setTimeout(()=>{R.value&&(g.value=!0)},100))}function Q(){Z()}function Te(x){x||(Z(),g.value=!1)}tn(R,x=>{x||(g.value=!1)}),Eo(()=>{ah(()=>{const x=l.value;x&&(n.disabled?x.removeAttribute("tabindex"):x.tabIndex=v.value?-1:0)})}),Ol(s,n.onResize);const{inlineThemeDisabled:Se}=n,Be=nt(()=>{const{size:x}=n,{common:{cubicBezierEaseInOut:A},self:{fontWeight:D,borderRadius:I,color:F,placeholderColor:K,textColor:j,paddingSingle:se,paddingMultiple:fe,caretColor:ie,colorDisabled:ve,textColorDisabled:Ve,placeholderColorDisabled:We,colorActive:Ie,boxShadowFocus:ke,boxShadowActive:k,boxShadowHover:Ae,border:Re,borderFocus:be,borderHover:B,borderActive:Y,arrowColor:ye,arrowColorDisabled:De,loadingColor:Le,colorActiveWarning:Me,boxShadowFocusWarning:we,boxShadowActiveWarning:Oe,boxShadowHoverWarning:Fe,borderWarning:$e,borderFocusWarning:J,borderHoverWarning:oe,borderActiveWarning:he,colorActiveError:Pe,boxShadowFocusError:ze,boxShadowActiveError:qe,boxShadowHoverError:Xe,borderError:Et,borderFocusError:ft,borderHoverError:Nt,borderActiveError:kt,clearColor:Je,clearColorHover:Qt,clearColorPressed:Un,clearSize:Hr,arrowSize:un,[gi("height",x)]:N,[gi("fontSize",x)]:ae}}=h.value,me=ro(se),ge=ro(fe);return{"--n-bezier":A,"--n-border":Re,"--n-border-active":Y,"--n-border-focus":be,"--n-border-hover":B,"--n-border-radius":I,"--n-box-shadow-active":k,"--n-box-shadow-focus":ke,"--n-box-shadow-hover":Ae,"--n-caret-color":ie,"--n-color":F,"--n-color-active":Ie,"--n-color-disabled":ve,"--n-font-size":ae,"--n-height":N,"--n-padding-single-top":me.top,"--n-padding-multiple-top":ge.top,"--n-padding-single-right":me.right,"--n-padding-multiple-right":ge.right,"--n-padding-single-left":me.left,"--n-padding-multiple-left":ge.left,"--n-padding-single-bottom":me.bottom,"--n-padding-multiple-bottom":ge.bottom,"--n-placeholder-color":K,"--n-placeholder-color-disabled":We,"--n-text-color":j,"--n-text-color-disabled":Ve,"--n-arrow-color":ye,"--n-arrow-color-disabled":De,"--n-loading-color":Le,"--n-color-active-warning":Me,"--n-box-shadow-focus-warning":we,"--n-box-shadow-active-warning":Oe,"--n-box-shadow-hover-warning":Fe,"--n-border-warning":$e,"--n-border-focus-warning":J,"--n-border-hover-warning":oe,"--n-border-active-warning":he,"--n-color-active-error":Pe,"--n-box-shadow-focus-error":ze,"--n-box-shadow-active-error":qe,"--n-box-shadow-hover-error":Xe,"--n-border-error":Et,"--n-border-focus-error":ft,"--n-border-hover-error":Nt,"--n-border-active-error":kt,"--n-clear-size":Hr,"--n-clear-color":Je,"--n-clear-color-hover":Qt,"--n-clear-color-pressed":Un,"--n-arrow-size":un,"--n-font-weight":D}}),T=Se?ws("internal-selection",nt(()=>n.size[0]),Be,n):void 0;return{mergedTheme:h,mergedClearable:_,mergedClsPrefix:e,rtlEnabled:i,patternInputFocused:v,filterablePlaceholder:b,label:y,selected:R,showTagsPanel:g,isComposing:_e,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:r,patternInputRef:o,selfRef:s,multipleElRef:a,singleElRef:c,patternInputWrapperRef:l,overflowRef:p,inputTagElRef:m,handleMouseDown:te,handleFocusin:O,handleClear:H,handleMouseEnter:$,handleMouseLeave:W,handleDeleteOption:ue,handlePatternKeyDown:re,handlePatternInputInput:Ce,handlePatternInputBlur:le,handlePatternInputFocus:X,handleMouseEnterCounter:pe,handleMouseLeaveCounter:Q,handleFocusout:V,handleCompositionEnd:z,handleCompositionStart:ee,onPopoverUpdateShow:Te,focus:xe,focusInput:Ne,blur:de,blurInput:He,updateCounter:Ue,getCounter:et,getTail:G,renderLabel:n.renderLabel,cssVars:Se?void 0:Be,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:a,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l==null||l();const p=o==="responsive",m=typeof o=="number",g=p||m,v=Ee(oh,null,{default:()=>Ee(Xh,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var h,_;return(_=(h=this.$slots).arrow)===null||_===void 0?void 0:_.call(h)}})});let f;if(e){const{labelField:h}=this,_=L=>Ee("div",{class:`${a}-base-selection-tag-wrapper`,key:L.value},u?u({option:L,handleClose:()=>{this.handleDeleteOption(L)}}):Ee(Xs,{size:t,closable:!L.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(L)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(L,!0):_r(L[h],L,!0)})),b=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(_),y=r?Ee("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},Ee("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),Ee("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,R=p?()=>Ee("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},Ee(Xs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let M;if(m){const L=this.selectedOptions.length-o;L>0&&(M=Ee("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},Ee(Xs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${L}`})))}const C=p?r?Ee(fc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R,tail:()=>y}):Ee(fc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R}):m&&M?b().concat(M):b(),U=g?()=>Ee("div",{class:`${a}-base-selection-popover`},p?b():this.selectedOptions.map(_)):void 0,E=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,w=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?Ee("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},Ee("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,P=r?Ee("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},C,p?null:y,v):Ee("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},C,v);f=Ee(vr,null,g?Ee(Sh,Object.assign({},E,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>P,default:U}):P,w)}else if(r){const h=this.pattern||this.isComposing,_=this.active?!h:!this.selected,b=this.active?!1:this.selected;f=Ee("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:pc(this.label)},Ee("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),b?Ee("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},Ee("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):_r(this.label,this.selectedOption,!0))):null,_?Ee("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},Ee("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else f=Ee("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?Ee("div",{class:`${a}-base-selection-input`,title:pc(this.label),key:"input"},Ee("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):_r(this.label,this.selectedOption,!0))):Ee("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},Ee("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),v);return Ee("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,n&&`${a}-base-selection--${n}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},f,s?Ee("div",{class:`${a}-base-selection__border`}):null,s?Ee("div",{class:`${a}-base-selection__state-border`}):null)}});function xc(n){return n.type==="group"}function Yh(n){return n.type==="ignored"}function qh(n,e){return{getIsGroup:xc,getIgnored:Yh,getKey(i){return xc(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}const Ao=lh("n-cascader"),vc=Kt({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(n){const{expandTriggerRef:e,remoteRef:t,multipleRef:i,mergedValueRef:r,checkedKeysRef:o,indeterminateKeysRef:s,hoverKeyPathRef:a,keyboardKeyRef:c,loadingKeySetRef:l,cascadeRef:u,mergedCheckStrategyRef:d,onLoadRef:p,mergedClsPrefixRef:m,mergedThemeRef:g,labelFieldRef:v,showCheckboxRef:f,renderPrefixRef:h,renderSuffixRef:_,updateHoverKey:b,updateKeyboardKey:y,addLoadingKey:R,deleteLoadingKey:M,closeMenu:C,doCheck:U,doUncheck:E,renderLabelRef:S}=Ur(Ao),w=nt(()=>n.tmNode.key),P=nt(()=>{const{value:de}=e,{value:xe}=t;return!xe&&de==="hover"}),L=nt(()=>{if(P.value)return ee}),O=nt(()=>{if(P.value)return z}),V=Pi(()=>{const{value:de}=i;return de?o.value.includes(w.value):r.value===w.value}),H=Pi(()=>i.value?s.value.includes(w.value):!1),$=Pi(()=>a.value.includes(w.value)),W=Pi(()=>{const{value:de}=c;return de===null?!1:de===w.value}),te=Pi(()=>t.value?l.value.has(w.value):!1),ue=nt(()=>n.tmNode.isLeaf),_e=nt(()=>n.tmNode.disabled),re=nt(()=>n.tmNode.rawNode[v.value]),ne=nt(()=>n.tmNode.shallowLoaded);function Ce(de){if(_e.value)return;const{value:xe}=t,{value:Ne}=l,{value:He}=p,{value:Ue}=w,{value:et}=ue,{value:G}=ne;uo(de,"checkbox")||(xe&&!G&&!Ne.has(Ue)&&He&&(R(Ue),He(n.tmNode.rawNode).then(()=>{M(Ue)}).catch(()=>{M(Ue)})),b(Ue),y(Ue)),et&&le()}function ee(){if(!P.value||_e.value)return;const{value:de}=w;b(de),y(de)}function z(){P.value&&ee()}function X(){const{value:de}=ue;de||le()}function le(){const{value:de}=i,{value:xe}=w;de?H.value||V.value?E(xe):U(xe):(U(xe),C(!0))}return{checkStrategy:d,multiple:i,cascade:u,checked:V,indeterminate:H,hoverPending:$,keyboardPending:W,isLoading:te,showCheckbox:f,isLeaf:ue,disabled:_e,label:re,mergedClsPrefix:m,mergedTheme:g,handleClick:Ce,handleCheckboxUpdateValue:X,mergedHandleMouseEnter:L,mergedHandleMouseMove:O,renderLabel:S,renderPrefix:h,renderSuffix:_}},render(){const{mergedClsPrefix:n,showCheckbox:e,renderLabel:t,renderPrefix:i,renderSuffix:r}=this;let o=null;if(e||i){const c=this.showCheckbox?Ee(Ju,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue}):null;o=Ee("div",{class:`${n}-cascader-option__prefix`},i?i({option:this.tmNode.rawNode,checked:this.checked,node:c}):c)}let s=null;const a=Ee("div",{class:`${n}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?Ee(Mo,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?Ee(co,{clsPrefix:n,class:`${n}-cascader-option-icon ${n}-cascader-option-icon--checkmark`},{default:()=>Ee(ed,null)}):null}):null:Ee(Ll,{clsPrefix:n,scale:.85,strokeWidth:24,show:this.isLoading,class:`${n}-cascader-option-icon`},{default:()=>Ee(co,{clsPrefix:n,key:"arrow",class:`${n}-cascader-option-icon ${n}-cascader-option-icon--arrow`},{default:()=>Ee(Fh,null)})}));return s=Ee("div",{class:`${n}-cascader-option__suffix`},r?r({option:this.tmNode.rawNode,checked:this.checked,node:a}):a),Ee("div",{class:[`${n}-cascader-option`,this.keyboardPending||this.hoverPending&&`${n}-cascader-option--pending`,this.disabled&&`${n}-cascader-option--disabled`,this.showCheckbox&&`${n}-cascader-option--show-prefix`],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},o,Ee("span",{class:`${n}-cascader-option__label`},t?t(this.tmNode.rawNode,this.checked):this.label),s)}}),$h=Kt({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:n,mergedClsPrefixRef:e,mergedThemeRef:t,optionHeightRef:i}=Ur(Ao),r=lt(null),o=lt(null),s={scroll(a,c){var l,u;n.value?(l=o.value)===null||l===void 0||l.scrollTo({index:a}):(u=r.value)===null||u===void 0||u.scrollTo({index:a,elSize:c})}};return Object.assign({mergedClsPrefix:e,mergedTheme:t,scrollbarInstRef:r,vlInstRef:o,virtualScroll:n,itemSize:nt(()=>yr(i.value)),handleVlScroll:()=>{var a;(a=r.value)===null||a===void 0||a.sync()},getVlContainer:()=>{var a;return(a=o.value)===null||a===void 0?void 0:a.listElRef},getVlContent:()=>{var a;return(a=o.value)===null||a===void 0?void 0:a.itemsElRef}},s)},render(){const{mergedClsPrefix:n,mergedTheme:e,virtualScroll:t}=this;return Ee("div",{class:[t&&`${n}-cascader-submenu--virtual`,`${n}-cascader-submenu`]},Ee(Ku,{ref:"scrollbarInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:t?this.getVlContainer:void 0,content:t?this.getVlContent:void 0},{default:()=>t?Ee($u,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:i})=>Ee(vc,{key:i.key,tmNode:i})}):this.tmNodes.map(i=>Ee(vc,{key:i.key,tmNode:i}))}))}}),Zh=Kt({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(n){const{localeRef:e,isMountedRef:t,mergedClsPrefixRef:i,syncCascaderMenuPosition:r,handleCascaderMenuClickOutside:o,mergedThemeRef:s,getColumnStyleRef:a}=Ur(Ao),c=[],l=lt(null),u=lt(null);function d(){r()}Ol(u,d);function p(h){var _;const{value:{loadingRequiredMessage:b}}=e;(_=l.value)===null||_===void 0||_.showOnce(b(h))}function m(h){o(h)}function g(h){const{value:_}=u;_&&(_.contains(h.relatedTarget)||n.onFocus(h))}function v(h){const{value:_}=u;_&&(_.contains(h.relatedTarget)||n.onBlur(h))}return Object.assign({isMounted:t,mergedClsPrefix:i,selfElRef:u,submenuInstRefs:c,maskInstRef:l,mergedTheme:s,getColumnStyle:a,handleFocusin:g,handleFocusout:v,handleClickOutside:m},{scroll(h,_,b){const y=c[h];y&&y.scroll(_,b)},showErrorMessage:p})},render(){const{submenuInstRefs:n,mergedClsPrefix:e,mergedTheme:t}=this;return Ee(Mo,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?Yu(Ee("div",{tabindex:"0",ref:"selfElRef",class:`${e}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?Ee("div",{class:`${e}-cascader-submenu-wrapper`},this.menuModel.map((i,r)=>{var o;return Ee($h,{style:(o=this.getColumnStyle)===null||o===void 0?void 0:o.call(this,{level:r}),ref:s=>{s&&(n[r]=s)},key:r,tmNodes:i,depth:r+1})}),Ee(Vh,{clsPrefix:e,ref:"maskInstRef"})):Ee("div",{class:`${e}-cascader-menu__empty`},So(this.$slots.empty,()=>[Ee(Zu,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty})])),vs(this.$slots.action,i=>i&&Ee("div",{class:`${e}-cascader-menu-action`,"data-action":!0},i)),Ee(td,{onFocus:this.onTabout})),[[qu,this.handleClickOutside,void 0,{capture:!0}]]):null})}});function No(n){return n?n.map(e=>e.rawNode):null}function Jh(n,e,t,i){const r=[],o=[];function s(a){for(const c of a){if(c.disabled)continue;const{rawNode:l}=c;o.push(l),(c.isLeaf||!e)&&r.push({label:Fa(c,i,t),value:c.key,rawNode:c.rawNode,path:Array.from(o)}),!c.isLeaf&&c.children&&s(c.children),o.pop()}}return s(n),r}function Fa(n,e,t){const i=[];for(;n;)i.push(n.rawNode[t]),n=n.parent;return i.reverse().join(e)}const Qh=Kt({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(n){const{isMountedRef:e,mergedValueRef:t,mergedClsPrefixRef:i,mergedThemeRef:r,mergedCheckStrategyRef:o,slots:s,syncSelectMenuPosition:a,closeMenu:c,handleSelectMenuClickOutside:l,doUncheck:u,doCheck:d,clearPattern:p}=Ur(Ao),m=lt(null),g=nt(()=>Jh(n.tmNodes,o.value==="child",n.labelField,n.separator)),v=nt(()=>{const{filter:S}=n;if(S)return S;const{labelField:w}=n;return(P,L,O)=>O.some(V=>V[w]&&~V[w].toLowerCase().indexOf(P.toLowerCase()))}),f=nt(()=>{const{pattern:S}=n,{value:w}=v;return(S?g.value.filter(P=>w(S,P.rawNode,P.path)):g.value).map(P=>({value:P.value,label:P.label}))}),h=nt(()=>Qu(f.value,qh("value","children")));function _(){a()}function b(S){y(S)}function y(S){if(n.multiple){const{value:w}=t;Array.isArray(w)?w.includes(S.key)?u(S.key):d(S.key):w===null&&d(S.key),p()}else d(S.key),c(!0)}function R(){var S;(S=m.value)===null||S===void 0||S.prev()}function M(){var S;(S=m.value)===null||S===void 0||S.next()}function C(){var S;if(m){const w=(S=m.value)===null||S===void 0?void 0:S.getPendingTmNode();return w&&y(w),!0}return!1}function U(S){l(S)}return Object.assign({isMounted:e,mergedTheme:r,mergedClsPrefix:i,menuInstRef:m,selectTreeMate:h,handleResize:_,handleToggle:b,handleClickOutside:U,cascaderSlots:s},{prev:R,next:M,enter:C})},render(){const{mergedClsPrefix:n,isMounted:e,mergedTheme:t,cascaderSlots:i}=this;return Ee(Mo,{name:"fade-in-scale-up-transition",appear:e},{default:()=>this.show?Yu(Ee(Wh,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:n,class:`${n}-cascader-menu`,autoPending:!0,themeOverrides:t.peerOverrides.InternalSelectMenu,theme:t.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>So(i["not-found"],()=>[])}),[[qu,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),ef=Xt([ut("cascader-menu",`
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
 `,[Oa({transformOrigin:"inherit",duration:"0.2s"}),mt("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),ut("scrollbar",`
 width: 100%;
 `),ut("base-menu-mask",`
 background-color: var(--n-menu-mask-color);
 `),ut("base-loading",`
 color: var(--n-loading-color);
 `),ut("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),ut("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[Dt("virtual",`
 width: var(--n-column-width);
 `),ut("scrollbar-content",`
 position: relative;
 `),Xt("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),Xt("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),Xt("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),ut("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),ut("cascader-option",`
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
 `,[Dt("show-prefix",`
 padding-left: 0;
 `),mt("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),mt("prefix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),mt("suffix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),ut("cascader-option-icon-placeholder",`
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `,[ut("cascader-option-icon",[Dt("checkmark",`
 color: var(--n-option-check-mark-color);
 `,[Oa({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),Dt("arrow",`
 color: var(--n-option-arrow-color);
 `)])]),Dt("selected",`
 color: var(--n-option-text-color-active);
 `),Dt("active",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `),Dt("pending",`
 background-color: var(--n-option-color-hover);
 `),Xt("&:hover",`
 background-color: var(--n-option-color-hover);
 `),Dt("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[ut("cascader-option-icon",[Dt("arrow",`
 color: var(--n-option-text-color-disabled);
 `)])])])]),ut("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),tf=Object.assign(Object.assign({},Oi.props),{allowCheckingNotLoaded:Boolean,to:cs.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,getColumnStyle:Function,renderPrefix:Function,renderSuffix:Function,onChange:[Function,Array]}),nf=Kt({name:"Cascader",props:tf,slots:Object,setup(n,{slots:e}){const{mergedBorderedRef:t,mergedClsPrefixRef:i,namespaceRef:r,inlineThemeDisabled:o}=Rs(n),s=Oi("Cascader","-cascader",ef,ch,n,i),{localeRef:a}=Ch("Cascader"),c=lt(n.defaultValue),l=nt(()=>n.value),u=hc(l,c),d=nt(()=>n.leafOnly?"child":n.checkStrategy),p=lt(""),m=uh(n),{mergedSizeRef:g,mergedDisabledRef:v,mergedStatusRef:f}=m,h=lt(null),_=lt(null),b=lt(null),y=lt(null),R=lt(null),M=lt(new Set),C=lt(null),U=lt(null),E=cs(n),S=lt(!1),w=B=>{M.value.add(B)},P=B=>{M.value.delete(B)},L=nt(()=>{const{valueField:B,childrenField:Y,disabledField:ye}=n;return Qu(n.options,{getDisabled(De){return De[ye]},getKey(De){return De[B]},getChildren(De){return De[Y]}})}),O=nt(()=>{const{cascade:B,multiple:Y}=n;return Y&&Array.isArray(u.value)?L.value.getCheckedKeys(u.value,{cascade:B,allowNotLoaded:n.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),V=nt(()=>O.value.checkedKeys),H=nt(()=>O.value.indeterminateKeys),$=nt(()=>{const{treeNodePath:B,treeNode:Y}=L.value.getPath(R.value);let ye;return Y===null?ye=[L.value.treeNodes]:(ye=B.map(De=>De.siblings),!Y.isLeaf&&!M.value.has(Y.key)&&Y.children&&ye.push(Y.children)),ye}),W=nt(()=>{const{keyPath:B}=L.value.getPath(R.value);return B}),te=nt(()=>s.value.self.optionHeight);dh(n.options)&&tn(n.options,(B,Y)=>{B!==Y&&(R.value=null,y.value=null)});const ue=lt(!1);function _e(B){const{onUpdateShow:Y,"onUpdate:show":ye}=n;Y&&Fi(Y,B),ye&&Fi(ye,B),ue.value=B}function re(B,Y,ye){const{onUpdateValue:De,"onUpdate:value":Le,onChange:Me}=n,{nTriggerFormInput:we,nTriggerFormChange:Oe}=m;De&&Fi(De,B,Y,ye),Le&&Fi(Le,B,Y,ye),Me&&Fi(Me,B,Y,ye),c.value=B,we(),Oe()}function ne(B){y.value=B}function Ce(B){R.value=B}function ee(B){const{value:{getNode:Y}}=L;return B.map(ye=>{var De;return((De=Y(ye))===null||De===void 0?void 0:De.rawNode)||null})}function z(B){var Y;const{cascade:ye,multiple:De,filterable:Le}=n,{value:{check:Me,getNode:we,getPath:Oe}}=L;if(De)try{const{checkedKeys:Fe}=Me(B,O.value.checkedKeys,{cascade:ye,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});re(Fe,ee(Fe),Fe.map($e=>{var J;return No((J=Oe($e))===null||J===void 0?void 0:J.treeNodePath)})),Le&&Ke(),y.value=B,R.value=B}catch(Fe){if(Fe instanceof Th){if(h.value){const $e=we(B);$e!==null&&h.value.showErrorMessage($e.rawNode[n.labelField])}}else throw Fe}else if(d.value==="child"){const Fe=we(B);if(Fe!=null&&Fe.isLeaf)re(B,Fe.rawNode,No(Oe(B).treeNodePath));else return!1}else{const Fe=we(B);re(B,(Fe==null?void 0:Fe.rawNode)||null,No((Y=Oe(B))===null||Y===void 0?void 0:Y.treeNodePath))}return!0}function X(B){const{cascade:Y,multiple:ye}=n;if(ye){const{value:{uncheck:De,getNode:Le,getPath:Me}}=L,{checkedKeys:we}=De(B,O.value.checkedKeys,{cascade:Y,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});re(we,we.map(Oe=>{var Fe;return((Fe=Le(Oe))===null||Fe===void 0?void 0:Fe.rawNode)||null}),we.map(Oe=>{var Fe;return No((Fe=Me(Oe))===null||Fe===void 0?void 0:Fe.treeNodePath)})),y.value=B,R.value=B}}const le=nt(()=>{if(n.multiple){const{showPath:B,separator:Y,labelField:ye,cascade:De}=n,{getCheckedKeys:Le,getNode:Me}=L.value;return Le(V.value,{cascade:De,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded}).checkedKeys.map(Oe=>{const Fe=Me(Oe);return Fe===null?{label:String(Oe),value:Oe}:{label:B?Fa(Fe,Y,ye):Fe.rawNode[ye],value:Fe.key}})}else return[]}),de=nt(()=>{const{multiple:B,showPath:Y,separator:ye,labelField:De}=n,{value:Le}=u;if(!B&&!Array.isArray(Le)){const{getNode:Me}=L.value;if(Le===null)return null;const we=Me(Le);return we===null?{label:String(Le),value:Le}:{label:Y?Fa(we,ye,De):we.rawNode[De],value:we.key}}else return null}),xe=Ut(n,"show"),Ne=hc(xe,ue),He=nt(()=>{const{placeholder:B}=n;return B!==void 0?B:a.value.placeholder}),Ue=nt(()=>!!(n.filterable&&p.value));tn(Ne,B=>{if(!B||n.multiple)return;const{value:Y}=u;!Array.isArray(Y)&&Y!==null?(y.value=Y,R.value=Y,Ms(()=>{var ye;if(!Ne.value)return;const{value:De}=R;if(u.value!==null){const Le=L.value.getNode(De);Le&&((ye=h.value)===null||ye===void 0||ye.scroll(Le.level,Le.index,yr(te.value)))}})):(y.value=null,R.value=null)},{immediate:!0});function et(B){const{onBlur:Y}=n,{nTriggerFormBlur:ye}=m;Y&&Fi(Y,B),ye()}function G(B){const{onFocus:Y}=n,{nTriggerFormFocus:ye}=m;Y&&Fi(Y,B),ye()}function Ke(){var B;(B=b.value)===null||B===void 0||B.focusInput()}function Z(){var B;(B=b.value)===null||B===void 0||B.focus()}function pe(){v.value||(p.value="",_e(!0),n.filterable&&Ke())}function Q(B=!1){B&&Z(),_e(!1),p.value=""}function Te(B){var Y;Ue.value||Ne.value&&(!((Y=b.value)===null||Y===void 0)&&Y.$el.contains(mh(B))||Q())}function Se(B){Ue.value&&Te(B)}function Be(){n.clearFilterAfterSelect&&(p.value="")}function T(B){var Y,ye,De;const{value:Le}=y,{value:Me}=L;switch(B){case"prev":if(Le!==null){const we=Me.getPrev(Le,{loop:!0});we!==null&&(ne(we.key),(Y=h.value)===null||Y===void 0||Y.scroll(we.level,we.index,yr(te.value)))}break;case"next":if(Le===null){const we=Me.getFirstAvailableNode();we!==null&&(ne(we.key),(ye=h.value)===null||ye===void 0||ye.scroll(we.level,we.index,yr(te.value)))}else{const we=Me.getNext(Le,{loop:!0});we!==null&&(ne(we.key),(De=h.value)===null||De===void 0||De.scroll(we.level,we.index,yr(te.value)))}break;case"child":if(Le!==null){const we=Me.getNode(Le);if(we!==null)if(we.shallowLoaded){const Oe=Me.getChild(Le);Oe!==null&&(Ce(Le),ne(Oe.key))}else{const{value:Oe}=M;if(!Oe.has(Le)){w(Le),Ce(Le);const{onLoad:Fe}=n;Fe&&Fe(we.rawNode).then(()=>{P(Le)}).catch(()=>{P(Le)})}}}break;case"parent":if(Le!==null){const we=Me.getParent(Le);if(we!==null){ne(we.key);const Oe=we.getParent();Ce(Oe===null?null:Oe.key)}}break}}function x(B){var Y,ye;switch(B.key){case" ":case"ArrowDown":case"ArrowUp":if(n.filterable&&Ne.value)break;B.preventDefault();break}if(!uo(B,"action"))switch(B.key){case" ":if(n.filterable)return;case"Enter":if(!Ne.value)pe();else{const{value:De}=Ue,{value:Le}=y;if(De)_.value&&_.value.enter()&&Be();else if(Le!==null)if(V.value.includes(Le)||H.value.includes(Le))X(Le);else{const Me=z(Le);!n.multiple&&Me&&Q(!0)}}break;case"ArrowUp":B.preventDefault(),Ne.value&&(Ue.value?(Y=_.value)===null||Y===void 0||Y.prev():T("prev"));break;case"ArrowDown":B.preventDefault(),Ne.value?Ue.value?(ye=_.value)===null||ye===void 0||ye.next():T("next"):pe();break;case"ArrowLeft":B.preventDefault(),Ne.value&&!Ue.value&&T("parent");break;case"ArrowRight":B.preventDefault(),Ne.value&&!Ue.value&&T("child");break;case"Escape":Ne.value&&(ph(B),Q(!0))}}function A(B){x(B)}function D(B){B.stopPropagation(),n.multiple?re([],[],[]):re(null,null,null)}function I(B){var Y;!((Y=h.value)===null||Y===void 0)&&Y.$el.contains(B.relatedTarget)||(S.value=!0,G(B))}function F(B){var Y;!((Y=h.value)===null||Y===void 0)&&Y.$el.contains(B.relatedTarget)||(S.value=!1,et(B),Q())}function K(B){var Y;!((Y=b.value)===null||Y===void 0)&&Y.$el.contains(B.relatedTarget)||(S.value=!0,G(B))}function j(B){var Y;!((Y=b.value)===null||Y===void 0)&&Y.$el.contains(B.relatedTarget)||(S.value=!1,et(B))}function se(B){uo(B,"action")||n.multiple&&n.filter&&(B.preventDefault(),Ke())}function fe(){Q(!0)}function ie(){n.filterable?pe():Ne.value?Q(!0):pe()}function ve(B){p.value=B.target.value}function Ve(B){const{multiple:Y}=n,{value:ye}=u;Y&&Array.isArray(ye)&&B.value!==void 0?X(B.value):re(null,null,null)}function We(){var B;(B=C.value)===null||B===void 0||B.syncPosition()}function Ie(){var B;(B=U.value)===null||B===void 0||B.syncPosition()}function ke(){Ne.value&&(Ue.value?We():Ie())}const k=nt(()=>!!(n.multiple&&n.cascade||d.value!=="child"));Da(Ao,{slots:e,mergedClsPrefixRef:i,mergedThemeRef:s,mergedValueRef:u,checkedKeysRef:V,indeterminateKeysRef:H,hoverKeyPathRef:W,mergedCheckStrategyRef:d,showCheckboxRef:k,cascadeRef:Ut(n,"cascade"),multipleRef:Ut(n,"multiple"),keyboardKeyRef:y,hoverKeyRef:R,remoteRef:Ut(n,"remote"),loadingKeySetRef:M,expandTriggerRef:Ut(n,"expandTrigger"),isMountedRef:hh(),onLoadRef:Ut(n,"onLoad"),virtualScrollRef:Ut(n,"virtualScroll"),optionHeightRef:te,localeRef:a,labelFieldRef:Ut(n,"labelField"),renderLabelRef:Ut(n,"renderLabel"),getColumnStyleRef:Ut(n,"getColumnStyle"),renderPrefixRef:Ut(n,"renderPrefix"),renderSuffixRef:Ut(n,"renderSuffix"),syncCascaderMenuPosition:Ie,syncSelectMenuPosition:We,updateKeyboardKey:ne,updateHoverKey:Ce,addLoadingKey:w,deleteLoadingKey:P,doCheck:z,doUncheck:X,closeMenu:Q,handleSelectMenuClickOutside:Se,handleCascaderMenuClickOutside:Te,clearPattern:Be});const Ae={focus:()=>{var B;(B=b.value)===null||B===void 0||B.focus()},blur:()=>{var B;(B=b.value)===null||B===void 0||B.blur()},getCheckedData:()=>{if(k.value){const B=V.value;return{keys:B,options:ee(B)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(k.value){const B=H.value;return{keys:B,options:ee(B)}}return{keys:[],options:[]}}},Re=nt(()=>{const{self:{optionArrowColor:B,optionTextColor:Y,optionTextColorActive:ye,optionTextColorDisabled:De,optionCheckMarkColor:Le,menuColor:Me,menuBoxShadow:we,menuDividerColor:Oe,menuBorderRadius:Fe,menuHeight:$e,optionColorHover:J,optionHeight:oe,optionFontSize:he,loadingColor:Pe,columnWidth:ze},common:{cubicBezierEaseInOut:qe}}=s.value;return{"--n-bezier":qe,"--n-menu-border-radius":Fe,"--n-menu-box-shadow":we,"--n-menu-height":$e,"--n-column-width":ze,"--n-menu-color":Me,"--n-menu-divider-color":Oe,"--n-option-height":oe,"--n-option-font-size":he,"--n-option-text-color":Y,"--n-option-text-color-disabled":De,"--n-option-text-color-active":ye,"--n-option-color-hover":J,"--n-option-check-mark-color":Le,"--n-option-arrow-color":B,"--n-menu-mask-color":fh(Me,{alpha:.75}),"--n-loading-color":Pe}}),be=o?ws("cascader",void 0,Re,n):void 0;return Object.assign(Object.assign({},Ae),{handleTriggerResize:ke,mergedStatus:f,selectMenuFollowerRef:C,cascaderMenuFollowerRef:U,triggerInstRef:b,selectMenuInstRef:_,cascaderMenuInstRef:h,mergedBordered:t,mergedClsPrefix:i,namespace:r,mergedValue:u,mergedShow:Ne,showSelectMenu:Ue,pattern:p,treeMate:L,mergedSize:g,mergedDisabled:v,localizedPlaceholder:He,selectedOption:de,selectedOptions:le,adjustedTo:E,menuModel:$,handleMenuTabout:fe,handleMenuFocus:K,handleMenuBlur:j,handleMenuKeydown:A,handleMenuMousedown:se,handleTriggerFocus:I,handleTriggerBlur:F,handleTriggerClick:ie,handleClear:D,handleDeleteOption:Ve,handlePatternInput:ve,handleKeydown:x,focused:S,optionHeight:te,mergedTheme:s,cssVars:o?void 0:Re,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){const{mergedClsPrefix:n}=this;return Ee("div",{class:`${n}-cascader`},Ee(Mh,null,{default:()=>[Ee(Ah,null,{default:()=>Ee(Kh,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:n,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var e,t;return(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)}})}),Ee(dc,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===cs.tdkey,to:this.adjustedTo},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{menuProps:t}=this;return Ee(Zh,Object.assign({},t,{ref:"cascaderMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,t==null?void 0:t.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var i,r;return(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)},empty:()=>{var i,r;return(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)}})}}),Ee(dc,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===cs.tdkey},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{filterMenuProps:t}=this;return Ee(Qh,Object.assign({},t,{ref:"selectMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,t==null?void 0:t.style]}))}})]}))}}),rf=ut("radio",`
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
`,[Dt("checked",[mt("dot",`
 background-color: var(--n-color-active);
 `)]),mt("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),ut("radio-input",`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),mt("dot",`
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
 `,[Xt("&::before",`
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
 `),Dt("checked",{boxShadow:"var(--n-box-shadow-active)"},[Xt("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),mt("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),xs("disabled",`
 cursor: pointer;
 `,[Xt("&:hover",[mt("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),Dt("focus",[Xt("&:not(:active)",[mt("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),Dt("disabled",`
 cursor: not-allowed;
 `,[mt("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[Xt("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),Dt("checked",`
 opacity: 1;
 `)]),mt("label",{color:"var(--n-text-color-disabled)"}),ut("radio-input",`
 cursor: not-allowed;
 `)])]),of=Object.assign(Object.assign({},Oi.props),Ih),sf=Kt({name:"Radio",props:of,setup(n){const e=Ph(n),t=Oi("Radio","-radio",rf,Lh,n,e.mergedClsPrefix),i=nt(()=>{const{mergedSize:{value:l}}=e,{common:{cubicBezierEaseInOut:u},self:{boxShadow:d,boxShadowActive:p,boxShadowDisabled:m,boxShadowFocus:g,boxShadowHover:v,color:f,colorDisabled:h,colorActive:_,textColor:b,textColorDisabled:y,dotColorActive:R,dotColorDisabled:M,labelPadding:C,labelLineHeight:U,labelFontWeight:E,[gi("fontSize",l)]:S,[gi("radioSize",l)]:w}}=t.value;return{"--n-bezier":u,"--n-label-line-height":U,"--n-label-font-weight":E,"--n-box-shadow":d,"--n-box-shadow-active":p,"--n-box-shadow-disabled":m,"--n-box-shadow-focus":g,"--n-box-shadow-hover":v,"--n-color":f,"--n-color-active":_,"--n-color-disabled":h,"--n-dot-color-active":R,"--n-dot-color-disabled":M,"--n-font-size":S,"--n-radio-size":w,"--n-text-color":b,"--n-text-color-disabled":y,"--n-label-padding":C}}),{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:s}=Rs(n),a=Il("Radio",s,o),c=r?ws("radio",nt(()=>e.mergedSize.value[0]),i,n):void 0;return Object.assign(e,{rtlEnabled:a,cssVars:r?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{$slots:n,mergedClsPrefix:e,onRender:t,label:i}=this;return t==null||t(),Ee("label",{class:[`${e}-radio`,this.themeClass,this.rtlEnabled&&`${e}-radio--rtl`,this.mergedDisabled&&`${e}-radio--disabled`,this.renderSafeChecked&&`${e}-radio--checked`,this.focus&&`${e}-radio--focus`],style:this.cssVars},Ee("div",{class:`${e}-radio__dot-wrapper`}," ",Ee("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]}),Ee("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),vs(n.default,r=>!r&&!i?null:Ee("div",{ref:"labelRef",class:`${e}-radio__label`},r||i)))}}),af={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},lf=Kt({name:"ArrowMove20Regular",render:function(e,t){return qt(),An("svg",af,t[0]||(t[0]=[nn("g",{fill:"none"},[nn("path",{d:"M7.146 4.354a.5.5 0 0 0 .708 0L9.5 2.707V6.5a.5.5 0 0 0 1 0V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm-2.792 3.5a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L2.707 10.5H6.5a.5.5 0 0 0 0-1H2.707l1.647-1.646zm11.292 0a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H13.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646zm-7.792 7.792a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 17.293V13.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647z",fill:"currentColor"})],-1)]))}}),cf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},uf=Kt({name:"ArrowMoveInward20Regular",render:function(e,t){return qt(),An("svg",cf,t[0]||(t[0]=[nn("g",{fill:"none"},[nn("path",{d:"M7.146 16.354a.5.5 0 0 0 .708 0L9.5 14.707V18.5a.5.5 0 0 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm9.208-8.5a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L14.707 10.5H18.5a.5.5 0 0 0 0-1h-3.793l1.647-1.646zm-12.708 0a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L5.293 10.5H1.5a.5.5 0 0 1 0-1h3.793L3.646 7.854zm4.208-4.208a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 5.293V1.5a.5.5 0 0 0-1 0v3.793L7.854 3.646z",fill:"currentColor"})],-1)]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="181",Tr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,_c=1,hf=2,nd=1,ff=2,mi=3,ii=0,ln=1,Nn=2,_i=0,Er=1,yc=2,bc=3,Tc=4,pf=5,ji=100,mf=101,gf=102,xf=103,vf=104,_f=200,yf=201,bf=202,Tf=203,Ua=204,ka=205,Ef=206,Sf=207,Mf=208,Af=209,Rf=210,wf=211,Cf=212,Pf=213,Lf=214,Ba=0,za=1,Va=2,Rr=3,Ga=4,Ha=5,Wa=6,Xa=7,Fl=0,If=1,Nf=2,Ni=0,Of=1,Df=2,Ff=3,Uf=4,kf=5,Bf=6,zf=7,Ec="attached",Vf="detached",id=300,wr=301,Cr=302,ja=303,Ka=304,Cs=306,jn=1e3,bn=1001,_s=1002,gn=1003,rd=1004,to=1005,mn=1006,us=1007,xi=1008,ri=1009,od=1010,sd=1011,ho=1012,Ul=1013,Yi=1014,Kn=1015,kr=1016,kl=1017,Bl=1018,fo=1020,ad=35902,ld=35899,cd=1021,ud=1022,wn=1023,po=1026,mo=1027,zl=1028,Vl=1029,Gl=1030,Hl=1031,Wl=1033,ds=33776,hs=33777,fs=33778,ps=33779,Ya=35840,qa=35841,$a=35842,Za=35843,Ja=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,ol=37812,sl=37813,al=37814,ll=37815,cl=37816,ul=37817,dl=37818,hl=37819,fl=37820,pl=37821,ml=36492,gl=36494,xl=36495,vl=36283,_l=36284,yl=36285,bl=36286,go=2300,xo=2301,qs=2302,Sc=2400,Mc=2401,Ac=2402,Gf=2500,Hf=0,dd=1,Tl=2,Wf=3200,Xf=3201,Xl=0,jf=1,Li="",Rt="srgb",cn="srgb-linear",ys="linear",Lt="srgb",tr=7680,Rc=519,Kf=512,Yf=513,qf=514,hd=515,$f=516,Zf=517,Jf=518,Qf=519,El=35044,wc="300 es",ni=2e3,bs=2001;function fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){const n=vo("canvas");return n.style.display="block",n}const Cc={};function Ts(...n){const e="THREE."+n.shift();console.log(e,...n)}function it(...n){const e="THREE."+n.shift();console.warn(e,...n)}function yt(...n){const e="THREE."+n.shift();console.error(e,...n)}function _o(...n){const e=n.join(" ");e in Cc||(Cc[e]=!0,it(...n))}function tp(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const oo=Math.PI/180,Pr=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function jl(n,e){return(n%e+e)%e}function np(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ip(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function rp(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}function op(n,e=1){return e-Math.abs(jl(n,e*2)-e)}function sp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ap(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cp(n,e){return n+Math.random()*(e-n)}function up(n){return n*(.5-Math.random())}function dp(n){n!==void 0&&(Pc=n);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(n){return n*oo}function fp(n){return n*Pr}function pp(n){return(n&n-1)===0&&n!==0}function mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xp(n,e,t,i,r){const o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),p=s((e-i)/2),m=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*u,a*l);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:oo,RAD2DEG:Pr,generateUUID:$n,clamp:xt,euclideanModulo:jl,mapLinear:np,inverseLerp:ip,lerp:so,damp:rp,pingpong:op,smoothstep:sp,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:up,seededRandom:dp,degToRad:hp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:xp,normalize:wt,denormalize:Wn};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],p=o[s+0],m=o[s+1],g=o[s+2],v=o[s+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a>=1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==p||l!==m||u!==g){let f=c*p+l*m+u*g+d*v;f<0&&(p=-p,m=-m,g=-g,v=-v,f=-f);let h=1-a;if(f<.9995){const _=Math.acos(f),b=Math.sin(_);h=Math.sin(h*_)/b,a=Math.sin(a*_)/b,c=c*h+p*a,l=l*h+m*a,u=u*h+g*a,d=d*h+v*a}else{c=c*h+p*a,l=l*h+m*a,u=u*h+g*a,d=d*h+v*a;const _=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=_,l*=_,u*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],p=o[s+1],m=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*m-l*p,e[t+1]=c*g+u*p+l*d-a*m,e[t+2]=l*g+u*m+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),p=c(i/2),m=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"YZX":this._x=p*u*d+l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d-p*m*g;break;case"XZY":this._x=p*u*d-l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d+p*m*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new q,Lc=new Dn;class ht{constructor(e,t,i,r,o,s,a,c,l){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],m=i[5],g=i[8],v=r[0],f=r[3],h=r[6],_=r[1],b=r[4],y=r[7],R=r[2],M=r[5],C=r[8];return o[0]=s*v+a*_+c*R,o[3]=s*f+a*b+c*M,o[6]=s*h+a*y+c*C,o[1]=l*v+u*_+d*R,o[4]=l*f+u*b+d*M,o[7]=l*h+u*y+d*C,o[2]=p*v+m*_+g*R,o[5]=p*f+m*b+g*M,o[8]=p*h+m*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,p=a*c-u*o,m=l*o-s*c,g=t*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=p*v,e[4]=(u*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new ht,Ic=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){const n={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Lt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Lt&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Li?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return _o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return _o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cn]:{primaries:e,whitePoint:i,transfer:ys,toXYZ:Ic,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Ic,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const _t=vp();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let nr;class _p{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=vo("canvas")),nr.width=e.width,nr.height=e.height;const r=nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=yi(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yp=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Js(r[s].image)):o.push(Js(r[s]))}else o=Js(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let bp=0;const Qs=new q;class rn extends Zi{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=bn,r=bn,o=mn,s=xi,a=wn,c=ri,l=rn.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=$n(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qs).x}get height(){return this.source.getSize(Qs).y}get depth(){return this.source.getSize(Qs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case _s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case _s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=id;rn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],m=c[5],g=c[9],v=c[2],f=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(m+1)/2,R=(h+1)/2,M=(u+p)/4,C=(d+v)/4,U=(g+f)/4;return b>y&&b>R?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=M/i,o=C/i):y>R?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=M/r,o=U/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=C/o,r=U/o),this.set(i,r,o,t),this}let _=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-v)/_,this.z=(p-u)/_,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new rn(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Tp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zn):zn.fromBufferAttribute(o,s),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Do.subVectors(this.max,Xr),ir.subVectors(e.a,Xr),rr.subVectors(e.b,Xr),or.subVectors(e.c,Xr),Ti.subVectors(rr,ir),Ei.subVectors(or,rr),Bi.subVectors(ir,or);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Bi.z,Bi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Bi.z,0,-Bi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Bi.y,Bi.x,0];return!ea(t,ir,rr,or,Do)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,ir,rr,or,Do))?!1:(Fo.crossVectors(Ti,Ei),t=[Fo.x,Fo.y,Fo.z],ea(t,ir,rr,or,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new q,new q,new q,new q,new q,new q,new q,new q],zn=new q,Oo=new On,ir=new q,rr=new q,or=new q,Ti=new q,Ei=new q,Bi=new q,Xr=new q,Do=new q,Fo=new q,zi=new q;function ea(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){zi.fromArray(n,o);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Sp=new On,jr=new q,ta=new q;class oi{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sp.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(ta)),this.expandByPoint(jr.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ci=new q,na=new q,Uo=new q,Si=new q,ia=new q,ko=new q,ra=new q;class Ro{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){na.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(na);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Uo),a=Si.dot(this.direction),c=-Si.dot(Uo),l=Si.lengthSq(),u=Math.abs(1-s*s);let d,p,m,g;if(u>0)if(d=s*c-a,p=s*a-c,g=o*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,m=d*(d+s*p+2*a)+p*(s*d+p+2*c)+l}else p=o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-s*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),m=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-o,-c),o),m=p*(p+2*c)+l):(d=Math.max(0,-(s*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),m=-d*d+p*(p+2*c)+l);else p=s>0?-o:o,d=Math.max(0,-(s*p+a)),m=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(na).addScaledVector(Uo,p),m}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(o=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,o){ia.subVectors(t,e),ko.subVectors(i,e),ra.crossVectors(ia,ko);let s=this.direction.dot(ra),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Si.subVectors(this.origin,e);const c=a*this.direction.dot(ko.crossVectors(Si,ko));if(c<0)return null;const l=a*this.direction.dot(ia.cross(Si));if(l<0||c+l>s)return null;const u=-a*Si.dot(ra);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f)}set(e,t,i,r,o,s,a,c,l,u,d,p,m,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),o=1/sr.setFromMatrixColumn(e,1).length(),s=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const p=s*u,m=s*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=g+m*l,t[10]=s*c}else if(e.order==="YXZ"){const p=c*u,m=c*d,g=l*u,v=l*d;t[0]=p+v*a,t[4]=g*a-m,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=s*c}else if(e.order==="ZXY"){const p=c*u,m=c*d,g=l*u,v=l*d;t[0]=p-v*a,t[4]=-s*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=v-p*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const p=s*u,m=s*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+v,t[1]=c*d,t[5]=v*l+p,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const p=s*c,m=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-p*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=s*c,m=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+v,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,Ap)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Mi.crossVectors(i,Sn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Mi.crossVectors(i,Sn)),Mi.normalize(),Bo.crossVectors(Sn,Mi),r[0]=Mi.x,r[4]=Bo.x,r[8]=Sn.x,r[1]=Mi.y,r[5]=Bo.y,r[9]=Sn.y,r[2]=Mi.z,r[6]=Bo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],_=i[3],b=i[7],y=i[11],R=i[15],M=r[0],C=r[4],U=r[8],E=r[12],S=r[1],w=r[5],P=r[9],L=r[13],O=r[2],V=r[6],H=r[10],$=r[14],W=r[3],te=r[7],ue=r[11],_e=r[15];return o[0]=s*M+a*S+c*O+l*W,o[4]=s*C+a*w+c*V+l*te,o[8]=s*U+a*P+c*H+l*ue,o[12]=s*E+a*L+c*$+l*_e,o[1]=u*M+d*S+p*O+m*W,o[5]=u*C+d*w+p*V+m*te,o[9]=u*U+d*P+p*H+m*ue,o[13]=u*E+d*L+p*$+m*_e,o[2]=g*M+v*S+f*O+h*W,o[6]=g*C+v*w+f*V+h*te,o[10]=g*U+v*P+f*H+h*ue,o[14]=g*E+v*L+f*$+h*_e,o[3]=_*M+b*S+y*O+R*W,o[7]=_*C+b*w+y*V+R*te,o[11]=_*U+b*P+y*H+R*ue,o[15]=_*E+b*L+y*$+R*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+o*c*d-r*l*d-o*a*p+i*l*p+r*a*m-i*c*m)+v*(+t*c*m-t*l*p+o*s*p-r*s*m+r*l*u-o*c*u)+f*(+t*l*d-t*a*m-o*s*d+i*s*m+o*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*p+r*s*d-i*s*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],_=d*f*l-v*p*l+v*c*m-a*f*m-d*c*h+a*p*h,b=g*p*l-u*f*l-g*c*m+s*f*m+u*c*h-s*p*h,y=u*v*l-g*d*l+g*a*m-s*v*m-u*a*h+s*d*h,R=g*d*c-u*v*c-g*a*p+s*v*p+u*a*f-s*d*f,M=t*_+i*b+r*y+o*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(v*p*o-d*f*o-v*r*m+i*f*m+d*r*h-i*p*h)*C,e[2]=(a*f*o-v*c*o+v*r*l-i*f*l-a*r*h+i*c*h)*C,e[3]=(d*c*o-a*p*o-d*r*l+i*p*l+a*r*m-i*c*m)*C,e[4]=b*C,e[5]=(u*f*o-g*p*o+g*r*m-t*f*m-u*r*h+t*p*h)*C,e[6]=(g*c*o-s*f*o-g*r*l+t*f*l+s*r*h-t*c*h)*C,e[7]=(s*p*o-u*c*o+u*r*l-t*p*l-s*r*m+t*c*m)*C,e[8]=y*C,e[9]=(g*d*o-u*v*o-g*i*m+t*v*m+u*i*h-t*d*h)*C,e[10]=(s*v*o-g*a*o+g*i*l-t*v*l-s*i*h+t*a*h)*C,e[11]=(u*a*o-s*d*o-u*i*l+t*d*l+s*i*m-t*a*m)*C,e[12]=R*C,e[13]=(u*v*r-g*d*r+g*i*p-t*v*p-u*i*f+t*d*f)*C,e[14]=(g*a*r-s*v*r-g*i*c+t*v*c+s*i*f-t*a*f)*C,e[15]=(s*d*r-u*a*r+u*i*c-t*d*c-s*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,p=o*l,m=o*u,g=o*d,v=s*u,f=s*d,h=a*d,_=c*l,b=c*u,y=c*d,R=i.x,M=i.y,C=i.z;return r[0]=(1-(v+h))*R,r[1]=(m+y)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(m-y)*M,r[5]=(1-(p+h))*M,r[6]=(f+_)*M,r[7]=0,r[8]=(g+b)*C,r[9]=(f-_)*C,r[10]=(1-(p+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=sr.set(r[0],r[1],r[2]).length();const s=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const l=1/o,u=1/s,d=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=ni,c=!1){const l=this.elements,u=2*o/(t-e),d=2*o/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(c)g=o/(s-o),v=s*o/(s-o);else if(a===ni)g=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===bs)g=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=ni,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,v;if(c)g=1/(s-o),v=s/(s-o);else if(a===ni)g=-2/(s-o),v=-(s+o)/(s-o);else if(a===bs)g=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new q,Vn=new gt,Mp=new q(0,0,0),Ap=new q(1,1,1),Mi=new q,Bo=new q,Sn=new q,Oc=new gt,Dc=new Dn;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rp=0;const Fc=new q,ar=new Dn,ui=new gt,zo=new q,Kr=new q,wp=new q,Cp=new Dn,Uc=new q(1,0,0),kc=new q(0,1,0),Bc=new q(0,0,1),zc={type:"added"},Pp={type:"removed"},lr={type:"childadded",child:null},oa={type:"childremoved",child:null};class Ft extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new q,t=new Jn,i=new Dn,r=new q(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new ht}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Kr,zo,this.up):ui.lookAt(zo,Kr,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(ui),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),lr.child=e,this.dispatchEvent(lr),lr.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new q(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new q,di=new q,sa=new q,hi=new q,cr=new q,ur=new q,Vc=new q,aa=new q,la=new q,ca=new q,ua=new Mt,da=new Mt,ha=new Mt;class Xn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Gn.subVectors(r,t),di.subVectors(i,t),sa.subVectors(e,t);const s=Gn.dot(Gn),a=Gn.dot(di),c=Gn.dot(sa),l=di.dot(di),u=di.dot(sa),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,m=(l*c-a*u)*p,g=(s*u-a*c)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,hi.x),c.addScaledVector(s,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return ua.setScalar(0),da.setScalar(0),ha.setScalar(0),ua.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),ha.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ua,o.x),s.addScaledVector(da,o.y),s.addScaledVector(ha,o.z),s}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),di.subVectors(e,t),Gn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Gn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;cr.subVectors(r,i),ur.subVectors(o,i),aa.subVectors(e,i);const c=cr.dot(aa),l=ur.dot(aa);if(c<=0&&l<=0)return t.copy(i);la.subVectors(e,r);const u=cr.dot(la),d=ur.dot(la);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(cr,s);ca.subVectors(e,o);const m=cr.dot(ca),g=ur.dot(ca);if(g>=0&&m<=g)return t.copy(o);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ur,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Vc.subVectors(o,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Vc,a);const h=1/(f+v+p);return s=v*h,a=p*h,t.copy(i).addScaledVector(cr,s).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=jl(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=fa(s,o,e+1/3),this.g=fa(s,o,e),this.b=fa(s,o,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function i(o){o!==void 0&&parseFloat(o)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return _t.workingToColorSpace(an.copy(this),e),Math.round(xt(an.r*255,0,255))*65536+Math.round(xt(an.g*255,0,255))*256+Math.round(xt(an.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(an.copy(this),t);const i=an.r,r=an.g,o=an.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Rt){_t.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,r=an.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Vo);const i=so(Ai.h,Vo.h,t),r=so(Ai.s,Vo.s,t),o=so(Ai.l,Vo.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new rt;rt.NAMES=gd;let Lp=0;class Zn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Er,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=ka,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yn extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,Go=new tt;let Ip=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=El,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),o=wt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class xd extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Np=0;const Ln=new gt,pa=new Ft,dr=new q,Mn=new On,Yr=new On,en=new q;class Wt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?vd:xd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ht().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Mn.min,Yr.min),Mn.expandByPoint(en),en.addVectors(Mn.max,Yr.max),Mn.expandByPoint(en)):(Mn.expandByPoint(Yr.min),Mn.expandByPoint(Yr.max))}Mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)en.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(en));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(dr.fromBufferAttribute(e,l),en.add(dr)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new q,c[U]=new q;const l=new q,u=new q,d=new q,p=new tt,m=new tt,g=new tt,v=new q,f=new q;function h(U,E,S){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),p.fromBufferAttribute(o,U),m.fromBufferAttribute(o,E),g.fromBufferAttribute(o,S),u.sub(l),d.sub(l),m.sub(p),g.sub(p);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[U].add(v),a[E].add(v),a[S].add(v),c[U].add(f),c[E].add(f),c[S].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,E=_.length;U<E;++U){const S=_[U],w=S.start,P=S.count;for(let L=w,O=w+P;L<O;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new q,y=new q,R=new q,M=new q;function C(U){R.fromBufferAttribute(r,U),M.copy(R);const E=a[U];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(M,E);const w=y.dot(c[U])<0?-1:1;s.setXYZW(U,b.x,b.y,b.z,w)}for(let U=0,E=_.length;U<E;++U){const S=_[U],w=S.start,P=S.count;for(let L=w,O=w+P;L<O;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new q,o=new q,s=new q,a=new q,c=new q,l=new q,u=new q,d=new q;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,f),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,f),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let h=0;h<u;h++)p[g++]=l[m++]}return new jt(p,u,d)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new gt,Vi=new Ro,Ho=new oi,Hc=new q,Wo=new q,Xo=new q,jo=new q,ma=new q,Ko=new q,Wc=new q,Yo=new q;class on extends Ft{constructor(e=new Wt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ko.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(ma.fromBufferAttribute(d,e),s?Ko.addScaledVector(ma,u):Ko.addScaledVector(ma.sub(t),u))}t.add(Ko)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(o),Vi.copy(e.ray).recast(e.near),!(Ho.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ho,Hc)===null||Vi.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(Gc.copy(o).invert(),Vi.copy(e.ray).applyMatrix4(Gc),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,p=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=s[f.materialIndex],_=Math.max(f.start,m.start),b=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=_,R=b;y<R;y+=3){const M=a.getX(y),C=a.getX(y+1),U=a.getX(y+2);r=qo(this,h,e,i,l,u,d,M,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const _=a.getX(f),b=a.getX(f+1),y=a.getX(f+2);r=qo(this,s,e,i,l,u,d,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=s[f.materialIndex],_=Math.max(f.start,m.start),b=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=_,R=b;y<R;y+=3){const M=y,C=y+1,U=y+2;r=qo(this,h,e,i,l,u,d,M,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const _=f,b=f+1,y=f+2;r=qo(this,s,e,i,l,u,d,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Op(n,e,t,i,r,o,s,a){let c;if(e.side===ln?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===ii,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Yo);return l<t.near||l>t.far?null:{distance:l,point:Yo.clone(),object:n}}function qo(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,Wo),n.getVertexPosition(c,Xo),n.getVertexPosition(l,jo);const u=Op(n,e,t,i,Wo,Xo,jo,Wc);if(u){const d=new q;Xn.getBarycoord(Wc,Wo,Xo,jo,d),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,c,l,d,new tt)),o&&(u.uv1=Xn.getInterpolatedAttribute(o,a,c,l,d,new tt)),s&&(u.normal=Xn.getInterpolatedAttribute(s,a,c,l,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new q,materialIndex:0};Xn.getNormal(Wo,Xo,jo,p.normal),u.face=p,u.barycoord=d}return u}class Br extends Wt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2));function g(v,f,h,_,b,y,R,M,C,U,E){const S=y/C,w=R/U,P=y/2,L=R/2,O=M/2,V=C+1,H=U+1;let $=0,W=0;const te=new q;for(let ue=0;ue<H;ue++){const _e=ue*w-L;for(let re=0;re<V;re++){const ne=re*S-P;te[v]=ne*_,te[f]=_e*b,te[h]=O,l.push(te.x,te.y,te.z),te[v]=0,te[f]=0,te[h]=M>0?1:-1,u.push(te.x,te.y,te.z),d.push(re/C),d.push(1-ue/U),$+=1}}for(let ue=0;ue<U;ue++)for(let _e=0;_e<C;_e++){const re=p+_e+V*ue,ne=p+_e+V*(ue+1),Ce=p+(_e+1)+V*(ue+1),ee=p+(_e+1)+V*ue;c.push(re,ne,ee),c.push(ne,Ce,ee),W+=6}a.addGroup(m,W,E),m+=W,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Lr(n[t]);for(const r in i)e[r]=i[r]}return e}function Dp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Fp={clone:Lr,merge:fn};var Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new q,Xc=new tt,jc=new tt;class pn extends yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,jc),t.subVectors(jc,Xc)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,fr=1;class Bp extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(hr,fr,e,t);r.layers=this.layers,this.add(r);const o=new pn(hr,fr,e,t);o.layers=this.layers,this.add(o);const s=new pn(hr,fr,e,t);s.layers=this.layers,this.add(s);const a=new pn(hr,fr,e,t);a.layers=this.layers,this.add(a);const c=new pn(hr,fr,e,t);c.layers=this.layers,this.add(c);const l=new pn(hr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bd extends rn{constructor(e=[],t=wr,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zp extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Br(5,5,5),o=new bi({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:_i});o.uniforms.tEquirect.value=t;const s=new on(r,o),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=mn),new Bp(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}class qn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(l,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Td extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ed{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new q;class Ps{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),o=wt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Ts("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ps(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ts("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kc=new q,Yc=new Mt,qc=new Mt,Gp=new q,$c=new gt,$o=new q,xa=new oi,Zc=new gt,va=new Ro;class Hp extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ec,this.bindMatrix=new gt,this.bindMatrixInverse=new gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(r),e.ray.intersectsSphere(xa)!==!1&&(Zc.copy(r).invert(),va.copy(e.ray).applyMatrix4(Zc),!(this.boundingBox!==null&&va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,va)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Yc.fromBufferAttribute(r.attributes.skinIndex,e),qc.fromBufferAttribute(r.attributes.skinWeight,e),Kc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const s=qc.getComponent(o);if(s!==0){const a=Yc.getComponent(o);$c.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Gp.copy(Kc).applyMatrix4($c),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sd extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wo extends rn{constructor(e=null,t=1,i=1,r,o,s,a,c,l=gn,u=gn,d,p){super(null,s,a,c,l,u,r,o,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=new gt,Wp=new gt;class Yl{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new gt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,s=e.length;o<s;o++){const a=e[o]?e[o].matrixWorld:Wp;Jc.multiplyMatrices(a,t[o]),Jc.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new wo(t,e,e,wn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const o=e.bones[i];let s=t[o];s===void 0&&(it("Skeleton: No bone found with UUID:",o),s=new Sd),this.bones.push(s),this.boneInverses.push(new gt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const s=t[r];e.bones.push(s.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Sl extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new gt,Qc=new gt,Zo=[],eu=new On,Xp=new gt,qr=new on,$r=new oi;class jp extends on{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),eu.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(eu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),$r.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,s=e*o+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,pr),Qc.multiplyMatrices(i,pr),qr.matrixWorld=Qc,qr.raycast(e,Zo);for(let s=0,a=Zo.length;s<a;s++){const c=Zo[s];c.instanceId=o,c.object=this,t.push(c)}Zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(r*this.count),r,this.count,zl,Kn));const o=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,c=r*e;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new q,Kp=new q,Yp=new ht;class Ci{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_a.subVectors(i,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_a),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yp.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new oi,qp=new tt(.5,.5),Jo=new q;class ql{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,o=new Ci,s=new Ci){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],p=o[6],m=o[7],g=o[8],v=o[9],f=o[10],h=o[11],_=o[12],b=o[13],y=o[14],R=o[15];if(r[0].setComponents(l-s,m-u,h-g,R-_).normalize(),r[1].setComponents(l+s,m+u,h+g,R+_).normalize(),r[2].setComponents(l+a,m+d,h+v,R+b).normalize(),r[3].setComponents(l-a,m-d,h-v,R-b).normalize(),i)r[4].setComponents(c,p,f,y).normalize(),r[5].setComponents(l-c,m-p,h-f,R-y).normalize();else if(r[4].setComponents(l-c,m-p,h-f,R-y).normalize(),t===ni)r[5].setComponents(l+c,m+p,h+f,R+y).normalize();else if(t===bs)r[5].setComponents(c,p,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=qp.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jo.x=r.normal.x>0?e.max.x:e.min.x,Jo.y=r.normal.y>0?e.max.y:e.min.y,Jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Es=new q,Ss=new q,tu=new gt,Zr=new Ro,Qo=new oi,ya=new q,nu=new q;class Zl extends Ft{constructor(e=new Wt,t=new $l){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Es.fromBufferAttribute(t,r-1),Ss.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Es.distanceTo(Ss);e.setAttribute("lineDistance",new vt(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=o,e.ray.intersectsSphere(Qo)===!1)return;tu.copy(r).invert(),Zr.copy(e.ray).applyMatrix4(tu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=m,f=g-1;v<f;v+=l){const h=u.getX(v),_=u.getX(v+1),b=es(this,e,Zr,c,h,_,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(m),h=es(this,e,Zr,c,v,f,g-1);h&&t.push(h)}}else{const m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let v=m,f=g-1;v<f;v+=l){const h=es(this,e,Zr,c,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=es(this,e,Zr,c,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function es(n,e,t,i,r,o,s){const a=n.geometry.attributes.position;if(Es.fromBufferAttribute(a,r),Ss.fromBufferAttribute(a,o),t.distanceSqToSegment(Es,Ss,ya,nu)>i)return;ya.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ya);if(!(l<e.near||l>e.far))return{distance:l,point:nu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const iu=new q,ru=new q;class Md extends Zl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)iu.fromBufferAttribute(t,r),ru.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+iu.distanceTo(ru);e.setAttribute("lineDistance",new vt(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $p extends Zl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jl extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ou=new gt,Ml=new Ro,ts=new oi,ns=new q;class Ad extends Ft{constructor(e=new Wt,t=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(r),ts.radius+=o,e.ray.intersectsSphere(ts)===!1)return;ou.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(ou);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const p=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let g=p,v=m;g<v;g++){const f=l.getX(g);ns.fromBufferAttribute(d,f),su(ns,f,c,r,e,t,this)}}else{const p=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=p,v=m;g<v;g++)ns.fromBufferAttribute(d,g),su(ns,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function su(n,e,t,i,r,o,s){const a=Ml.distanceSqToPoint(n);if(a<t){const c=new q;Ml.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Rd extends rn{constructor(e,t,i=Yi,r,o,s,a=gn,c=gn,l,u=po,d=1){if(u!==po&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wd extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ls extends Wt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],m=[];let g=0;const v=[],f=i/2;let h=0;_(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(p,3)),this.setAttribute("uv",new vt(m,2));function _(){const y=new q,R=new q;let M=0;const C=(t-e)/i;for(let U=0;U<=o;U++){const E=[],S=U/o,w=S*(t-e)+e;for(let P=0;P<=r;P++){const L=P/r,O=L*c+a,V=Math.sin(O),H=Math.cos(O);R.x=w*V,R.y=-S*i+f,R.z=w*H,d.push(R.x,R.y,R.z),y.set(V,C,H).normalize(),p.push(y.x,y.y,y.z),m.push(L,1-S),E.push(g++)}v.push(E)}for(let U=0;U<r;U++)for(let E=0;E<o;E++){const S=v[E][U],w=v[E+1][U],P=v[E+1][U+1],L=v[E][U+1];(e>0||E!==0)&&(u.push(S,w,L),M+=3),(t>0||E!==o-1)&&(u.push(w,P,L),M+=3)}l.addGroup(h,M,0),h+=M}function b(y){const R=g,M=new tt,C=new q;let U=0;const E=y===!0?e:t,S=y===!0?1:-1;for(let P=1;P<=r;P++)d.push(0,f*S,0),p.push(0,S,0),m.push(.5,.5),g++;const w=g;for(let P=0;P<=r;P++){const O=P/r*c+a,V=Math.cos(O),H=Math.sin(O);C.x=E*H,C.y=f*S,C.z=E*V,d.push(C.x,C.y,C.z),p.push(0,S,0),M.x=V*.5+.5,M.y=H*.5*S+.5,m.push(M.x,M.y),g++}for(let P=0;P<r;P++){const L=R+P,O=w+P;y===!0?u.push(O,O+1,L):u.push(O+1,O,L),U+=3}l.addGroup(h,U,y===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends Ls{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Zp(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=Cd(n,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let a,c,l;if(i&&(o=nm(n,e,o,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let p=t;p<r;p+=t){const m=n[p],g=n[p+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return yo(o,s,t,a,c,l,0),s}function Cd(n,e,t,i,r){let o;if(r===fm(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=au(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=au(s/i|0,n[s],n[s+1],o);return o&&Ir(o,o.next)&&(To(o),o=o.next),o}function $i(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ir(t,t.next)||Vt(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yo(n,e,t,i,r,o,s){if(!n)return;!s&&o&&am(n,i,r,o);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(o?Qp(n,i,r,o):Jp(n)){e.push(c.i,n.i,l.i),To(n),n=l.next,a=l.next;continue}if(n=l,n===a){s?s===1?(n=em($i(n),e),yo(n,e,t,i,r,o,2)):s===2&&tm(n,e,t,i,r,o):yo($i(n),e,t,i,r,o,1);break}}}function Jp(n){const e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;const r=e.x,o=t.x,s=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,o,s),d=Math.min(a,c,l),p=Math.max(r,o,s),m=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=m&&no(r,a,o,c,s,l,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qp(n,e,t,i){const r=n.prev,o=n,s=n.next;if(Vt(r,o,s)>=0)return!1;const a=r.x,c=o.x,l=s.x,u=r.y,d=o.y,p=s.y,m=Math.min(a,c,l),g=Math.min(u,d,p),v=Math.max(a,c,l),f=Math.max(u,d,p),h=Al(m,g,e,t,i),_=Al(v,f,e,t,i);let b=n.prevZ,y=n.nextZ;for(;b&&b.z>=h&&y&&y.z<=_;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=f&&b!==r&&b!==s&&no(a,u,c,d,l,p,b.x,b.y)&&Vt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==r&&y!==s&&no(a,u,c,d,l,p,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=h;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=f&&b!==r&&b!==s&&no(a,u,c,d,l,p,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==r&&y!==s&&no(a,u,c,d,l,p,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function em(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ir(i,r)&&Ld(i,t,t.next,r)&&bo(i,r)&&bo(r,i)&&(e.push(i.i,t.i,r.i),To(t),To(t.next),t=n=r),t=t.next}while(t!==n);return $i(t)}function tm(n,e,t,i,r,o){let s=n;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&um(s,a)){let c=Id(s,a);s=$i(s,s.next),c=$i(c,c.next),yo(s,e,t,i,r,o,0),yo(c,e,t,i,r,o,0);return}a=a.next}s=s.next}while(s!==n)}function nm(n,e,t,i){const r=[];for(let o=0,s=e.length;o<s;o++){const a=e[o]*i,c=o<s-1?e[o+1]*i:n.length,l=Cd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(cm(l))}r.sort(im);for(let o=0;o<r.length;o++)t=rm(r[o],t);return t}function im(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function rm(n,e){const t=om(n,e);if(!t)return e;const i=Id(t,n);return $i(i,i.next),$i(t,t.next)}function om(n,e){let t=e;const i=n.x,r=n.y;let o=-1/0,s;if(Ir(n,t))return t;do{if(Ir(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===i))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Pd(r<l?i:o,r,c,l,r<l?o:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);bo(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&sm(s,t)))&&(s=t,u=d)}t=t.next}while(t!==a);return s}function sm(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function am(n,e,t,i){let r=n;do r.z===0&&(r.z=Al(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,lm(r)}function lm(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let s=i,a=0;for(let l=0;l<t&&(a++,s=s.nextZ,!!s);l++);let c=t;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,a--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Al(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function cm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pd(n,e,t,i,r,o,s,a){return(r-s)*(e-a)>=(n-s)*(o-a)&&(n-s)*(i-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(i-a)}function no(n,e,t,i,r,o,s,a){return!(n===s&&e===a)&&Pd(n,e,t,i,r,o,s,a)}function um(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dm(n,e)&&(bo(n,e)&&bo(e,n)&&hm(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||Ir(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ir(n,e){return n.x===e.x&&n.y===e.y}function Ld(n,e,t,i){const r=rs(Vt(n,e,t)),o=rs(Vt(n,e,i)),s=rs(Vt(t,i,n)),a=rs(Vt(t,i,e));return!!(r!==o&&s!==a||r===0&&is(n,t,e)||o===0&&is(n,i,e)||s===0&&is(t,n,i)||a===0&&is(t,e,i))}function is(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function rs(n){return n>0?1:n<0?-1:0}function dm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ld(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function bo(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function hm(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Id(n,e){const t=Rl(n.i,n.x,n.y),i=Rl(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function au(n,e,t,i){const r=Rl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function To(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}class pm{static triangulate(e,t,i=2){return Zp(e,t,i)}}class ec{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return ec.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];lu(e),cu(i,e);let s=e.length;t.forEach(lu);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,cu(i,t[c]);const a=pm.triangulate(i,r);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function lu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function cu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Is extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const _=h*p-s;for(let b=0;b<l;b++){const y=b*d-o;g.push(y,-_,0),v.push(0,0,1),f.push(b/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<a;_++){const b=_+l*h,y=_+l*(h+1),R=_+1+l*(h+1),M=_+1+l*h;m.push(b,y,M),m.push(y,R,M)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends Wt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const u=[],d=new q,p=new q,m=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){const _=[],b=h/i;let y=0;h===0&&s===0?y=.5/t:h===i&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const M=R/t;d.x=-e*Math.cos(r+M*o)*Math.sin(s+b*a),d.y=e*Math.cos(s+b*a),d.z=e*Math.sin(r+M*o)*Math.sin(s+b*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),f.push(M+y,1-b),_.push(l++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const b=u[h][_+1],y=u[h][_],R=u[h+1][_],M=u[h+1][_+1];(h!==0||s>0)&&m.push(b,y,M),(h!==i-1||c<Math.PI)&&m.push(y,R,M)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ns extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends Ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mm extends Zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gm extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function os(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function vm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _m(n){function e(r,o){return n[r]-n[o]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function uu(n,e,t){const i=n.length,r=new n.constructor(i);for(let o=0,s=0;s!==i;++o){const a=t[o]*e;for(let c=0;c!==e;++c)r[s++]=n[a+c]}return r}function Nd(n,e,t,i){let r=1,o=n[0];for(;o!==void 0&&o[i]===void 0;)o=n[r++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(e.push(o.time),t.push(...s)),o=n[r++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(e.push(o.time),s.toArray(t,t.length)),o=n[r++];while(o!==void 0);else do s=o[i],s!==void 0&&(e.push(o.time),t.push(s)),o=n[r++];while(o!==void 0)}class Co{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let s;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break t}s=t.length;break n}if(!(e>=o)){const a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break t}s=i,i=0;break n}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ym extends Co{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(e,t,i){const r=this.parameterPositions;let o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Mc:o=e,a=2*t-i;break;case Ac:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Mc:s=e,c=2*i-t;break;case Ac:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,f=v*g,h=-p*f+2*p*v-p*g,_=(1+p)*f+(-1.5-2*p)*v+(-.5+p)*g+1,b=(-1-m)*f+(1.5+m)*v+.5*g,y=m*f-m*v;for(let R=0;R!==a;++R)o[R]=h*s[u+R]+_*s[l+R]+b*s[c+R]+y*s[d+R];return o}}class bm extends Co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let p=0;p!==a;++p)o[p]=s[l+p]*d+s[c+p]*u;return o}}class Tm extends Co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ym(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);const a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(yt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,o=i.length;o===0&&(yt("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){yt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){yt("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&vm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){yt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qs,o=e.length-1;let s=1;for(let a=1;a<o;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*i,p=d-i,m=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[p+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];const d=a*i,p=s*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=xo;class zr extends Qn{constructor(e,t,i){super(e,t,i)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=go;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Od extends Qn{constructor(e,t,i,r){super(e,t,i,r)}}Od.prototype.ValueTypeName="color";class Nr extends Qn{constructor(e,t,i,r){super(e,t,i,r)}}Nr.prototype.ValueTypeName="number";class Em extends Co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Dn.slerpFlat(o,0,s,l-a,s,l,c);return o}}class Or extends Qn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Em(this.times,this.values,this.getValueSize(),e)}}Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends Qn{constructor(e,t,i){super(e,t,i)}}Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=go;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Qn{constructor(e,t,i,r){super(e,t,i,r)}}Dr.prototype.ValueTypeName="vector";class Sm{constructor(e="",t=-1,i=[],r=Gf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(Am(i[s]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,s=i.length;o!==s;++o)t.push(Qn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const o=t.length,s=[];for(let a=0;a<o;a++){let c=[],l=[];c.push((a+o-1)%o,a,(a+1)%o),l.push(0,1,0);const u=_m(c);c=uu(c,1,u),l=uu(l,1,u),!r&&c[0]===0&&(c.push(o),l.push(l[0])),s.push(new Nr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(o);if(u&&u.length>1){const d=u[1];let p=r[d];p||(r[d]=p=[]),p.push(l)}}const s=[];for(const a in r)s.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return s}static parseAnimation(e,t){if(it("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return yt("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,p,m,g,v){if(m.length!==0){const f=[],h=[];Nd(m,f,h,g),f.length!==0&&v.push(new d(p,f,h))}},r=[],o=e.name||"default",s=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const p=l[d].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const m={};let g;for(g=0;g<p.length;g++)if(p[g].morphTargets)for(let v=0;v<p[g].morphTargets.length;v++)m[p[g].morphTargets[v]]=-1;for(const v in m){const f=[],h=[];for(let _=0;_!==p[g].morphTargets.length;++_){const b=p[g];f.push(b.time),h.push(b.morphTarget===v?1:0)}r.push(new Nr(".morphTargetInfluence["+v+"]",f,h))}c=m.length*s}else{const m=".bones["+t[d].name+"]";i(Dr,m+".position",p,"pos",r),i(Or,m+".quaternion",p,"rot",r),i(Dr,m+".scale",p,"scl",r)}}return r.length===0?null:new this(o,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Mm(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return Od;case"quaternion":return Or;case"bool":case"boolean":return zr;case"string":return Vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Am(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Mm(n.type);if(n.times===void 0){const t=[],i=[];Nd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Rm{constructor(e,t,i){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wm=new Rm;class Rn{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class Cm extends Error{constructor(e,t){super(e),this.response=t}}class Fr extends Rn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=vi.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:i,onError:r});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=fi[e],d=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let v=0;const f=new ReadableStream({start(h){_();function _(){d.read().then(({done:b,value:y})=>{if(b)h.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let M=0,C=u.length;M<C;M++){const U=u[M];U.onProgress&&U.onProgress(R)}h.enqueue(y),_()}},b=>{h.error(b)})}}});return new Response(f)}else throw new Cm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{vi.add(`file:${e}`,l);const u=fi[e];delete fi[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mr=new WeakMap;class Pm extends Rn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=vi.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=mr.get(s);d===void 0&&(d=[],mr.set(s,d)),d.push({onLoad:t,onError:r})}return s}const a=vo("img");function c(){u(),t&&t(this);const d=mr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}mr.delete(this),o.manager.itemEnd(e)}function l(d){u(),r&&r(d),vi.remove(`image:${e}`);const p=mr.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(d)}mr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}}class Dd extends Rn{constructor(e){super(e)}load(e,t,i,r){const o=new rn,s=new Pm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Os extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ba=new gt,du=new q,hu=new q;class tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lm extends tc{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Pr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Im extends Os{constructor(e,t,i=0,r=Math.PI/3,o=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=r,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new Lm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fu=new gt,Jr=new q,Ta=new q;class Nm extends tc{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jr),Ta.copy(i.position),Ta.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ta),i.updateMatrixWorld(),r.makeTranslation(-Jr.x,-Jr.y,-Jr.z),fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu,i.coordinateSystem,i.reversedDepth)}}class Om extends Os{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nc extends yd{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dm extends tc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ms extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fm extends Os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ea=new WeakMap;class Um extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=vi.get(`image-bitmap:${e}`);if(s!==void 0){if(o.manager.itemStart(e),s.then){s.then(l=>{if(Ea.has(s)===!0)r&&r(Ea.get(s)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(l),o.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),o.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Ea.set(c,l),vi.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class km extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ic="\\[\\]\\.:\\/",Bm=new RegExp("["+ic+"]","g"),rc="[^"+ic+"]",zm="[^"+ic.replace("\\.","")+"]",Vm=/((?:WC+[\/:])*)/.source.replace("WC",rc),Gm=/(WCOD+)?/.source.replace("WCOD",zm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),Xm=new RegExp("^"+Vm+Gm+Hm+Wm+"$"),jm=["material","materials","bones","map"];class Km{constructor(e,t,i){const r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ct{constructor(e,t,i){this.path=t,this.parsedPath=i||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ct.Composite(e,t,i):new Ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(e){const t=Xm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);jm.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let s=0;s<o.length;s++){const a=o[s];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=Ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[r];if(s===void 0){const l=t.nodeName;yt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=Km;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class pu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ym extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mu(n,e,t,i){const r=qm(i);switch(t){case cd:return n*e;case zl:return n*e/r.components*r.byteLength;case Vl:return n*e/r.components*r.byteLength;case Gl:return n*e*2/r.components*r.byteLength;case Hl:return n*e*2/r.components*r.byteLength;case ud:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case Wl:return n*e*4/r.components*r.byteLength;case ds:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fs:case ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:case Za:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qm(n){switch(n){case ri:case od:return{byteLength:1,components:1};case ho:case sd:case kr:return{byteLength:2,components:1};case kl:case Bl:return{byteLength:2,components:4};case Yi:case Ul:case Kn:return{byteLength:4,components:1};case ad:case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fd(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function $m(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var Zm=`#ifdef USE_ALPHAHASH
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
}`,pt={alphahash_fragment:Zm,alphahash_pars_fragment:Jm,alphamap_fragment:Qm,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,batching_pars_vertex:o0,batching_vertex:s0,begin_vertex:a0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:x0,color_pars_vertex:v0,color_vertex:_0,common:y0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:T0,displacementmap_pars_vertex:E0,displacementmap_vertex:S0,emissivemap_fragment:M0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:w0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:H0,envmap_vertex:N0,fog_vertex:O0,fog_pars_vertex:D0,fog_fragment:F0,fog_pars_fragment:U0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:B0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:j0,lights_phong_pars_fragment:K0,lights_physical_fragment:Y0,lights_physical_pars_fragment:q0,lights_fragment_begin:$0,lights_fragment_maps:Z0,lights_fragment_end:J0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:sg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:hg,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:xg,normal_vertex:vg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Eg,opaque_fragment:Sg,packing:Mg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:wg,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Ng,shadowmap_vertex:Og,shadowmask_pars_fragment:Dg,skinbase_vertex:Fg,skinning_pars_vertex:Ug,skinning_vertex:kg,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:Vg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Hg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Yg,worldpos_vertex:qg,background_vert:$g,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:Qg,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:rx,distanceRGBA_frag:ox,equirect_vert:sx,equirect_frag:ax,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:hx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:xx,meshphong_vert:vx,meshphong_frag:_x,meshphysical_vert:yx,meshphysical_frag:bx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:Sx,points_frag:Mx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:wx,sprite_frag:Cx},je={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ti={basic:{uniforms:fn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:fn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new rt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:fn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:fn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:fn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:fn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:fn([je.points,je.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:fn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:fn([je.common,je.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:fn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:fn([je.sprite,je.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:fn([je.common,je.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:fn([je.lights,je.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ti.physical={uniforms:fn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const ss={r:0,b:0,g:0},Hi=new Jn,Px=new gt;function Lx(n,e,t,i,r,o,s){const a=new rt(0);let c=o===!0?0:1,l,u,d=null,p=0,m=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const R=g(b);R===null?h(a,c):R&&R.isColor&&(h(R,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(b,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===Cs)?(u===void 0&&(u=new on(new Br(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Lr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Hi)),u.material.toneMapped=_t.getTransfer(R.colorSpace)!==Lt,(d!==R||p!==R.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,p=R.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new on(new Is(2,2),new bi({name:"BackgroundMaterial",uniforms:Lr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=_t.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,p=R.version,m=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,y){b.getRGB(ss,_d(n)),i.buffers.color.setClear(ss.r,ss.g,ss.b,y,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:v,addToRenderList:f,dispose:_}}function Ix(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function a(S,w,P,L,O){let V=!1;const H=d(L,P,w);o!==H&&(o=H,l(o.object)),V=m(S,L,P,O),V&&g(S,L,P,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,y(S,w,P,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,w,P){const L=P.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let V=O[w.id];V===void 0&&(V={},O[w.id]=V);let H=V[L];return H===void 0&&(H=p(c()),V[L]=H),H}function p(S){const w=[],P=[],L=[];for(let O=0;O<t;O++)w[O]=0,P[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:L,object:S,attributes:{},index:null}}function m(S,w,P,L){const O=o.attributes,V=w.attributes;let H=0;const $=P.getAttributes();for(const W in $)if($[W].location>=0){const ue=O[W];let _e=V[W];if(_e===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;H++}return o.attributesNum!==H||o.index!==L}function g(S,w,P,L){const O={},V=w.attributes;let H=0;const $=P.getAttributes();for(const W in $)if($[W].location>=0){let ue=V[W];ue===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),O[W]=_e,H++}o.attributes=O,o.attributesNum=H,o.index=L}function v(){const S=o.newAttributes;for(let w=0,P=S.length;w<P;w++)S[w]=0}function f(S){h(S,0)}function h(S,w){const P=o.newAttributes,L=o.enabledAttributes,O=o.attributeDivisors;P[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),O[S]!==w&&(n.vertexAttribDivisor(S,w),O[S]=w)}function _(){const S=o.newAttributes,w=o.enabledAttributes;for(let P=0,L=w.length;P<L;P++)w[P]!==S[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function b(S,w,P,L,O,V,H){H===!0?n.vertexAttribIPointer(S,w,P,O,V):n.vertexAttribPointer(S,w,P,L,O,V)}function y(S,w,P,L){v();const O=L.attributes,V=P.getAttributes(),H=w.defaultAttributeValues;for(const $ in V){const W=V[$];if(W.location>=0){let te=O[$];if(te===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const ue=te.normalized,_e=te.itemSize,re=e.get(te);if(re===void 0)continue;const ne=re.buffer,Ce=re.type,ee=re.bytesPerElement,z=Ce===n.INT||Ce===n.UNSIGNED_INT||te.gpuType===Ul;if(te.isInterleavedBufferAttribute){const X=te.data,le=X.stride,de=te.offset;if(X.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)h(W.location+xe,X.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let xe=0;xe<W.locationSize;xe++)f(W.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let xe=0;xe<W.locationSize;xe++)b(W.location+xe,_e/W.locationSize,Ce,ue,le*ee,(de+_e/W.locationSize*xe)*ee,z)}else{if(te.isInstancedBufferAttribute){for(let X=0;X<W.locationSize;X++)h(W.location+X,te.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let X=0;X<W.locationSize;X++)f(W.location+X);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let X=0;X<W.locationSize;X++)b(W.location+X,_e/W.locationSize,Ce,ue,_e*ee,_e/W.locationSize*X*ee,z)}}else if(H!==void 0){const ue=H[$];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(W.location,ue);break;case 3:n.vertexAttrib3fv(W.location,ue);break;case 4:n.vertexAttrib4fv(W.location,ue);break;default:n.vertexAttrib1fv(W.location,ue)}}}}_()}function R(){U();for(const S in i){const w=i[S];for(const P in w){const L=w[P];for(const O in L)u(L[O].object),delete L[O];delete w[P]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const P in w){const L=w[P];for(const O in L)u(L[O].object),delete L[O];delete w[P]}delete i[S.id]}function C(S){for(const w in i){const P=i[w];if(P[S.id]===void 0)continue;const L=P[S.id];for(const O in L)u(L[O].object),delete L[O];delete P[S.id]}}function U(){E(),s=!0,o!==r&&(o=r,l(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function Nx(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)s(l[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ox(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ri&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Kn&&!U)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(it("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:M}}function Dx(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Ci,a=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||o&&!f)o?u(null):l();else{const _=o?0:i,b=_*4;let y=h.clippingState||null;c.value=y,y=u(g,p,b,m);for(let R=0;R!==b;++R)y[R]=t[R];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const h=m+v*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<h)&&(f=new Float32Array(h));for(let b=0,y=m;b!==v;++b,y+=4)s.copy(d[b]).applyMatrix4(_,a),s.normal.toArray(f,y),f[y+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Fx(n){let e=new WeakMap;function t(s,a){return a===ja?s.mapping=wr:a===Ka&&(s.mapping=Cr),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ja||a===Ka)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new zp(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Ii=4,gu=[.125,.215,.35,.446,.526,.582],Ki=20,Ux=256,Qr=new nc,xu=new rt;let Sa=null,Ma=0,Aa=0,Ra=!1;const kx=new q;class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:s=256,position:a=kx}=o;Sa=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,Ma,Aa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:kr,format:wn,colorSpace:cn,depthBuffer:!1},r=_u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bx(o)),this._blurMaterial=Vx(o,e,t)}return r}_compileMaterial(e){const t=new on(new Wt,e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,i,r,o){const c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(xu),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new on(new Br,new Yn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,f=v.material;let h=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,h=!0):(f.color.copy(xu),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[b],o.y,o.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[b],o.z)):(c.up.set(0,l[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[b]));const R=this._cubeSize;gr(r,y*R,b>2?R:0,R,R),d.setRenderTarget(r),h&&d.render(v,c),d.render(e,c)}d.toneMapping=m,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;gr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Qr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const _=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=zx(this._lodMax,_,b)}const s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),p=.05+l*.95,m=d*p,{_lodMax:g}=this,v=this._sizeLods[i],f=3*v*(i>g-Ii?i-g+Ii:0),h=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,gr(o,f,h,3*v,2*v),r.setRenderTarget(o),r.render(a,Qr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,gr(e,f,h,3*v,2*v),r.setRenderTarget(e),r.render(a,Qr)}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const p=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),v=o/g,f=isFinite(o)?1+Math.floor(u*v):Ki;f>Ki&&it(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ki}`);const h=[];let _=0;for(let C=0;C<Ki;++C){const U=C/v,E=Math.exp(-U*U/2);h.push(E),C===0?_+=E:C<f&&(_+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-i;const y=this._sizeLods[r],R=3*y*(r>b-Ii?r-b+Ii:0),M=4*(this._cubeSize-y);gr(t,R,M,3*y,2*y),c.setRenderTarget(t),c.render(d,Qr)}}function Bx(n){const e=[],t=[],i=[];let r=n;const o=n-Ii+1+gu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let c=1/a;s>n-Ii?c=gu[s-n+Ii-1]:s===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,h=1,_=new Float32Array(v*g*m),b=new Float32Array(f*g*m),y=new Float32Array(h*g*m);for(let M=0;M<m;M++){const C=M%3*2/3-1,U=M>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];_.set(E,v*g*M),b.set(p,f*g*M);const S=[M,M,M,M,M,M];y.set(S,h*g*M)}const R=new Wt;R.setAttribute("position",new jt(_,v)),R.setAttribute("uv",new jt(b,f)),R.setAttribute("faceIndex",new jt(y,h)),i.push(new on(R,null)),r>Ii&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _u(n,e,t){const i=new qi(n,e,t);return i.texture.mapping=Cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zx(n,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ds(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Vx(n,e,t){const i=new Float32Array(Ki),r=new q(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ds(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function yu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ds(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function bu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ds(){return`

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
	`}function Gx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ja||c===Ka,u=c===wr||c===Cr;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new vu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new vu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Hx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_o("WebGLRenderer: "+i+" extension not supported."),r}}}function Wx(n,e,t,i){const r={},o=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete r[p.id];const m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(d){const p=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let b=0,y=_.length;b<y;b+=3){const R=_[b+0],M=_[b+1],C=_[b+2];p.push(R,M,M,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const R=b+0,M=b+1,C=b+2;p.push(R,M,M,C,C,R)}}else return;const f=new(fd(p)?vd:xd)(p,1);f.version=v;const h=o.get(d);h&&e.remove(h),o.set(d,f)}function u(d){const p=o.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Xx(n,e,t){let i;function r(p){i=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function c(p,m){n.drawElements(i,m,o,p*s),t.update(m,i,1)}function l(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,o,p*s,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,i,1)}function d(p,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/s,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,o,p,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=m[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function jx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:yt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Kx(n,e,t){const i=new WeakMap,r=new Mt;function o(s,a,c){const l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*R*4*d),C=new pd(M,y,R,d);C.type=Kn,C.needsUpdate=!0;const U=b*4;for(let S=0;S<d;S++){const w=f[S],P=h[S],L=_[S],O=y*R*4*S;for(let V=0;V<w.count;V++){const H=V*U;m===!0&&(r.fromBufferAttribute(w,V),M[O+H+0]=r.x,M[O+H+1]=r.y,M[O+H+2]=r.z,M[O+H+3]=0),g===!0&&(r.fromBufferAttribute(P,V),M[O+H+4]=r.x,M[O+H+5]=r.y,M[O+H+6]=r.z,M[O+H+7]=0),v===!0&&(r.fromBufferAttribute(L,V),M[O+H+8]=r.x,M[O+H+9]=r.y,M[O+H+10]=r.z,M[O+H+11]=L.itemSize===4?r.w:1)}}p={count:d,texture:C,size:new tt(y,R)},i.set(a,p),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function Yx(n,e,t,i){let r=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const Ud=new rn,Tu=new Rd(1,1),kd=new pd,Bd=new Ep,zd=new bd,Eu=[],Su=[],Mu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Eu[r];if(o===void 0&&(o=new Float32Array(r),Eu[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),Jt(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),Jt(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Mu.set(i),n.uniformMatrix4fv(this.addr,!1,Mu),Jt(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=hd,o=Tu):o=Ud,t.setTexture2D(e||o,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kd,r)}function pv(n){switch(n){case 5126:return qx;case 35664:return $x;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return sv;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=Gr(e,this.size,2);n.uniform2fv(this.addr,t)}function xv(n,e){const t=Gr(e,this.size,3);n.uniform3fv(this.addr,t)}function vv(n,e){const t=Gr(e,this.size,4);n.uniform4fv(this.addr,t)}function _v(n,e){const t=Gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yv(n,e){const t=Gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bv(n,e){const t=Gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tv(n,e){n.uniform1iv(this.addr,e)}function Ev(n,e){n.uniform2iv(this.addr,e)}function Sv(n,e){n.uniform3iv(this.addr,e)}function Mv(n,e){n.uniform4iv(this.addr,e)}function Av(n,e){n.uniform1uiv(this.addr,e)}function Rv(n,e){n.uniform2uiv(this.addr,e)}function wv(n,e){n.uniform3uiv(this.addr,e)}function Cv(n,e){n.uniform4uiv(this.addr,e)}function Pv(n,e,t){const i=this.cache,r=e.length,o=Fs(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Ud,o[s])}function Lv(n,e,t){const i=this.cache,r=e.length,o=Fs(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Bd,o[s])}function Iv(n,e,t){const i=this.cache,r=e.length,o=Fs(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||zd,o[s])}function Nv(n,e,t){const i=this.cache,r=e.length,o=Fs(t,r);Zt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||kd,o[s])}function Ov(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return vv;case 35674:return _v;case 35675:return yv;case 35676:return bv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return Av;case 36294:return Rv;case 36295:return wv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class Uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function wu(n,e){n.seq.push(e),n.map[e.id]=e}function kv(n,e,t){const i=n.name,r=i.length;for(wa.lastIndex=0;;){const o=wa.exec(i),s=wa.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){wu(t,l===void 0?new Dv(a,n,e):new Fv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Uv(a),wu(t,d)),t=d}}}class gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);kv(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bv=37297;let zv=0;function Vv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const Pu=new ht;function Gv(n){_t._getMatrix(Pu,_t.workingColorSpace,n);const e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case ys:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+Vv(n.getShaderSource(e),a)}else return o}function Hv(n,e){const t=Gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wv(n,e){let t;switch(e){case Of:t="Linear";break;case Df:t="Reinhard";break;case Ff:t="Cineon";break;case Uf:t="ACESFilmic";break;case Bf:t="AgX";break;case zf:t="Neutral";break;case kf:t="Custom";break;default:it("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const as=new q;function Xv(){_t.getLuminanceCoefficients(as);const n=as.x.toFixed(4),e=as.y.toFixed(4),t=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function io(n){return n!==""}function Iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(qv,Zv)}const $v=new Map;function Zv(n,e){let t=pt[e];if(t===void 0){const i=$v.get(e);if(i!==void 0)t=pt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(n){return n.replace(Jv,Qv)}function Qv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Du(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function e_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function r_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function o_(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=e_(t),l=t_(t),u=n_(t),d=i_(t),p=r_(t),m=jv(t),g=Kv(o),v=r.createProgram();let f,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),h.length>0&&(h+=`
`)):(f=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),h=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),s=wl(s),s=Iu(s,t),s=Nu(s,t),a=wl(a),a=Iu(a,t),a=Nu(a,t),s=Ou(s),a=Ou(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=_+f+s,y=_+h+a,R=Cu(r,r.VERTEX_SHADER,b),M=Cu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,R),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(w){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v)||"",L=r.getShaderInfoLog(R)||"",O=r.getShaderInfoLog(M)||"",V=P.trim(),H=L.trim(),$=O.trim();let W=!0,te=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,M);else{const ue=Lu(r,R,"vertex"),_e=Lu(r,M,"fragment");yt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+ue+`
`+_e)}else V!==""?it("WebGLProgram: Program Info Log:",V):(H===""||$==="")&&(te=!1);te&&(w.diagnostics={runnable:W,programLog:V,vertexShader:{log:H,prefix:f},fragmentShader:{log:$,prefix:h}})}r.deleteShader(R),r.deleteShader(M),U=new gs(r,v),E=Yv(r,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Bv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=M,this}let s_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new l_(e),t.set(e,i)),i}}class l_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function c_(n,e,t,i,r,o,s){const a=new md,c=new a_,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function f(E,S,w,P,L){const O=P.fog,V=L.geometry,H=E.isMeshStandardMaterial?P.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),W=$&&$.mapping===Cs?$.image.height:null,te=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&it("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=ue!==void 0?ue.length:0;let re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let ne,Ce,ee,z;if(te){const Me=ti[te];ne=Me.vertexShader,Ce=Me.fragmentShader}else ne=E.vertexShader,Ce=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),z=c.getFragmentShaderID(E);const X=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),de=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Ne=!!E.map,He=!!E.matcap,Ue=!!$,et=!!E.aoMap,G=!!E.lightMap,Ke=!!E.bumpMap,Z=!!E.normalMap,pe=!!E.displacementMap,Q=!!E.emissiveMap,Te=!!E.metalnessMap,Se=!!E.roughnessMap,Be=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,A=E.iridescence>0,D=E.sheen>0,I=E.transmission>0,F=Be&&!!E.anisotropyMap,K=T&&!!E.clearcoatMap,j=T&&!!E.clearcoatNormalMap,se=T&&!!E.clearcoatRoughnessMap,fe=A&&!!E.iridescenceMap,ie=A&&!!E.iridescenceThicknessMap,ve=D&&!!E.sheenColorMap,Ve=D&&!!E.sheenRoughnessMap,We=!!E.specularMap,Ie=!!E.specularColorMap,ke=!!E.specularIntensityMap,k=I&&!!E.transmissionMap,Ae=I&&!!E.thicknessMap,Re=!!E.gradientMap,be=!!E.alphaMap,B=E.alphaTest>0,Y=!!E.alphaHash,ye=!!E.extensions;let De=Ni;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(De=n.toneMapping);const Le={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:Ce,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:de,instancingColor:de&&L.instanceColor!==null,instancingMorph:de&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:cn,alphaToCoverage:!!E.alphaToCoverage,map:Ne,matcap:He,envMap:Ue,envMapMode:Ue&&$.mapping,envMapCubeUVHeight:W,aoMap:et,lightMap:G,bumpMap:Ke,normalMap:Z,displacementMap:p&&pe,emissiveMap:Q,normalMapObjectSpace:Z&&E.normalMapType===jf,normalMapTangentSpace:Z&&E.normalMapType===Xl,metalnessMap:Te,roughnessMap:Se,anisotropy:Be,anisotropyMap:F,clearcoat:T,clearcoatMap:K,clearcoatNormalMap:j,clearcoatRoughnessMap:se,dispersion:x,iridescence:A,iridescenceMap:fe,iridescenceThicknessMap:ie,sheen:D,sheenColorMap:ve,sheenRoughnessMap:Ve,specularMap:We,specularColorMap:Ie,specularIntensityMap:ke,transmission:I,transmissionMap:k,thicknessMap:Ae,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Er&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:B,alphaHash:Y,combine:E.combine,mapUv:Ne&&v(E.map.channel),aoMapUv:et&&v(E.aoMap.channel),lightMapUv:G&&v(E.lightMap.channel),bumpMapUv:Ke&&v(E.bumpMap.channel),normalMapUv:Z&&v(E.normalMap.channel),displacementMapUv:pe&&v(E.displacementMap.channel),emissiveMapUv:Q&&v(E.emissiveMap.channel),metalnessMapUv:Te&&v(E.metalnessMap.channel),roughnessMapUv:Se&&v(E.roughnessMap.channel),anisotropyMapUv:F&&v(E.anisotropyMap.channel),clearcoatMapUv:K&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:j&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(E.sheenRoughnessMap.channel),specularMapUv:We&&v(E.specularMap.channel),specularColorMapUv:Ie&&v(E.specularColorMap.channel),specularIntensityMapUv:ke&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:Ae&&v(E.thicknessMap.channel),alphaMapUv:be&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Z||Be),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ne||be),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===Lt,decodeVideoTextureEmissive:Q&&E.emissiveMap.isVideoTexture===!0&&_t.getTransfer(E.emissiveMap.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&E.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)S.push(w),S.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(_(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=g[E.type];let w;if(S){const P=ti[S];w=Fp.clone(P.uniforms)}else w=E.uniforms;return w}function R(E,S){let w;for(let P=0,L=u.length;P<L;P++){const O=u[P];if(O.cacheKey===S){w=O,++w.usedTimes;break}}return w===void 0&&(w=new o_(n,S,E,o),u.push(w)),w}function M(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:U}}function u_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function d_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uu(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,p,m,g,v,f){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=f),e++,h}function a(d,p,m,g,v,f){const h=s(d,p,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,p,m,g,v,f){const h=s(d,p,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,p){t.length>1&&t.sort(d||d_),i.length>1&&i.sort(p||Fu),r.length>1&&r.sort(p||Fu)}function u(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function h_(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Uu,n.set(i,[s])):r>=o.length?(s=new Uu,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function f_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new rt};break;case"SpotLight":t={position:new q,direction:new q,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function p_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let m_=0;function g_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x_(n){const e=new f_,t=p_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new q);const r=new q,o=new gt,s=new gt;function a(l){let u=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,v=0,f=0,h=0,_=0,b=0,y=0,R=0,M=0,C=0;l.sort(g_);for(let E=0,S=l.length;E<S;E++){const w=l[E],P=w.color,L=w.intensity,O=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=P.r*L,d+=P.g*L,p+=P.b*L;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],L);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,W=t.get(w);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=w.shadow.matrix,_++}i.directional[m]=H,m++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(P).multiplyScalar(L),H.distance=O,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[v]=H;const $=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,$.updateMatrices(w),w.castShadow&&M++),i.spotLightMatrix[v]=$.matrix,w.castShadow){const W=t.get(w);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=V,y++}v++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(P).multiplyScalar(L),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[f]=H,f++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const $=w.shadow,W=t.get(w);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=w.shadow.matrix,b++}i.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(L),H.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[h]=H,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==_||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==R||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+R-M,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=_,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=R,U.numLightProbes=C,i.version=m_++)}function c(l,u){let d=0,p=0,m=0,g=0,v=0;const f=u.matrixWorldInverse;for(let h=0,_=l.length;h<_;h++){const b=l[h];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),d++}else if(b.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),m++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),s.identity(),o.copy(b.matrixWorld),o.premultiply(f),s.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:i}}function ku(n){const e=new x_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function v_(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new ku(n),e.set(r,[a])):o>=s.length?(a=new ku(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const __=`void main() {
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
}`;function b_(n,e,t){let i=new ql;const r=new tt,o=new tt,s=new Mt,a=new gm({depthPacking:Xf}),c=new xm,l={},u=t.maxTextureSize,d={[ii]:ln,[ln]:ii,[Nn]:Nn},p=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:__,fragmentShader:y_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new on(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let h=this.type;this.render=function(M,C,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),P=n.state;P.setBlending(_i),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=h!==mi&&this.type===mi,O=h===mi&&this.type!==mi;for(let V=0,H=M.length;V<H;V++){const $=M[V],W=$.shadow;if(W===void 0){it("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const te=W.getFrameExtents();if(r.multiply(te),o.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/te.x),r.x=o.x*te.x,W.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/te.y),r.y=o.y*te.y,W.mapSize.y=o.y)),W.map===null||L===!0||O===!0){const _e=this.type!==mi?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new qi(r.x,r.y,_e),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ue=W.getViewportCount();for(let _e=0;_e<ue;_e++){const re=W.getViewport(_e);s.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),P.viewport(s),W.updateMatrices($,_e),i=W.getFrustum(),y(C,U,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===mi&&_(W,U),W.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(E,S,w)};function _(M,C){const U=e.update(v);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qi(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,U,p,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,U,m,v,null)}function b(M,C,U,E){let S=null;const w=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)S=w;else if(S=U.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=S.uuid,L=C.uuid;let O=l[P];O===void 0&&(O={},l[P]=O);let V=O[L];V===void 0&&(V=S.clone(),O[L]=V,C.addEventListener("dispose",R)),S=V}if(S.visible=C.visible,S.wireframe=C.wireframe,E===mi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=n.properties.get(S);P.light=U}return S}function y(M,C,U,E,S){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===mi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);const L=e.update(M),O=M.material;if(Array.isArray(O)){const V=L.groups;for(let H=0,$=V.length;H<$;H++){const W=V[H],te=O[W.materialIndex];if(te&&te.visible){const ue=b(M,te,E,S);M.onBeforeShadow(n,M,C,U,L,ue,W),n.renderBufferDirect(U,null,L,ue,M,W),M.onAfterShadow(n,M,C,U,L,ue,W)}}}else if(O.visible){const V=b(M,O,E,S);M.onBeforeShadow(n,M,C,U,L,V,null),n.renderBufferDirect(U,null,L,V,M,null),M.onAfterShadow(n,M,C,U,L,V,null)}}const P=M.children;for(let L=0,O=P.length;L<O;L++)y(P[L],C,U,E,S)}function R(M){M.target.removeEventListener("dispose",R);for(const U in l){const E=l[U],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const T_={[Ba]:za,[Va]:Wa,[Ga]:Xa,[Rr]:Ha,[za]:Ba,[Wa]:Va,[Xa]:Ga,[Ha]:Rr};function E_(n,e){function t(){let k=!1;const Ae=new Mt;let Re=null;const be=new Mt(0,0,0,0);return{setMask:function(B){Re!==B&&!k&&(n.colorMask(B,B,B,B),Re=B)},setLocked:function(B){k=B},setClear:function(B,Y,ye,De,Le){Le===!0&&(B*=De,Y*=De,ye*=De),Ae.set(B,Y,ye,De),be.equals(Ae)===!1&&(n.clearColor(B,Y,ye,De),be.copy(Ae))},reset:function(){k=!1,Re=null,be.set(-1,0,0,0)}}}function i(){let k=!1,Ae=!1,Re=null,be=null,B=null;return{setReversed:function(Y){if(Ae!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=Y;const De=B;B=null,this.setClear(De)}},getReversed:function(){return Ae},setTest:function(Y){Y?X(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Y){Re!==Y&&!k&&(n.depthMask(Y),Re=Y)},setFunc:function(Y){if(Ae&&(Y=T_[Y]),be!==Y){switch(Y){case Ba:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Y}},setLocked:function(Y){k=Y},setClear:function(Y){B!==Y&&(Ae&&(Y=1-Y),n.clearDepth(Y),B=Y)},reset:function(){k=!1,Re=null,be=null,B=null,Ae=!1}}}function r(){let k=!1,Ae=null,Re=null,be=null,B=null,Y=null,ye=null,De=null,Le=null;return{setTest:function(Me){k||(Me?X(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Me){Ae!==Me&&!k&&(n.stencilMask(Me),Ae=Me)},setFunc:function(Me,we,Oe){(Re!==Me||be!==we||B!==Oe)&&(n.stencilFunc(Me,we,Oe),Re=Me,be=we,B=Oe)},setOp:function(Me,we,Oe){(Y!==Me||ye!==we||De!==Oe)&&(n.stencilOp(Me,we,Oe),Y=Me,ye=we,De=Oe)},setLocked:function(Me){k=Me},setClear:function(Me){Le!==Me&&(n.clearStencil(Me),Le=Me)},reset:function(){k=!1,Ae=null,Re=null,be=null,B=null,Y=null,ye=null,De=null,Le=null}}}const o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,_=null,b=null,y=null,R=null,M=null,C=new rt(0,0,0),U=0,E=!1,S=null,w=null,P=null,L=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let te=null,ue={};const _e=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),ne=new Mt().fromArray(_e),Ce=new Mt().fromArray(re);function ee(k,Ae,Re,be){const B=new Uint8Array(4),Y=n.createTexture();n.bindTexture(k,Y),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<Re;ye++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,B):n.texImage2D(Ae+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,B);return Y}const z={};z[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),X(n.DEPTH_TEST),s.setFunc(Rr),Ke(!1),Z(_c),X(n.CULL_FACE),et(_i);function X(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function le(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function de(k,Ae){return d[k]!==Ae?(n.bindFramebuffer(k,Ae),d[k]=Ae,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function xe(k,Ae){let Re=m,be=!1;if(k){Re=p.get(Ae),Re===void 0&&(Re=[],p.set(Ae,Re));const B=k.textures;if(Re.length!==B.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,ye=B.length;Y<ye;Y++)Re[Y]=n.COLOR_ATTACHMENT0+Y;Re.length=B.length,be=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,be=!0);be&&n.drawBuffers(Re)}function Ne(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const He={[ji]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};He[xf]=n.MIN,He[vf]=n.MAX;const Ue={[_f]:n.ZERO,[yf]:n.ONE,[bf]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[Rf]:n.SRC_ALPHA_SATURATE,[Mf]:n.DST_COLOR,[Ef]:n.DST_ALPHA,[Tf]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[Af]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[Lf]:n.ONE_MINUS_CONSTANT_ALPHA};function et(k,Ae,Re,be,B,Y,ye,De,Le,Me){if(k===_i){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(X(n.BLEND),v=!0),k!==pf){if(k!==f||Me!==E){if((h!==ji||y!==ji)&&(n.blendEquation(n.FUNC_ADD),h=ji,y=ji),Me)switch(k){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.ONE,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:yt("WebGLState: Invalid blending: ",k);break}else switch(k){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bc:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",k);break}_=null,b=null,R=null,M=null,C.set(0,0,0),U=0,f=k,E=Me}return}B=B||Ae,Y=Y||Re,ye=ye||be,(Ae!==h||B!==y)&&(n.blendEquationSeparate(He[Ae],He[B]),h=Ae,y=B),(Re!==_||be!==b||Y!==R||ye!==M)&&(n.blendFuncSeparate(Ue[Re],Ue[be],Ue[Y],Ue[ye]),_=Re,b=be,R=Y,M=ye),(De.equals(C)===!1||Le!==U)&&(n.blendColor(De.r,De.g,De.b,Le),C.copy(De),U=Le),f=k,E=!1}function G(k,Ae){k.side===Nn?le(n.CULL_FACE):X(n.CULL_FACE);let Re=k.side===ln;Ae&&(Re=!Re),Ke(Re),k.blending===Er&&k.transparent===!1?et(_i):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),o.setMask(k.colorWrite);const be=k.stencilWrite;a.setTest(be),be&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(k){S!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),S=k)}function Z(k){k!==df?(X(n.CULL_FACE),k!==w&&(k===_c?n.cullFace(n.BACK):k===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),w=k}function pe(k){k!==P&&(H&&n.lineWidth(k),P=k)}function Q(k,Ae,Re){k?(X(n.POLYGON_OFFSET_FILL),(L!==Ae||O!==Re)&&(n.polygonOffset(Ae,Re),L=Ae,O=Re)):le(n.POLYGON_OFFSET_FILL)}function Te(k){k?X(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function Se(k){k===void 0&&(k=n.TEXTURE0+V-1),te!==k&&(n.activeTexture(k),te=k)}function Be(k,Ae,Re){Re===void 0&&(te===null?Re=n.TEXTURE0+V-1:Re=te);let be=ue[Re];be===void 0&&(be={type:void 0,texture:void 0},ue[Re]=be),(be.type!==k||be.texture!==Ae)&&(te!==Re&&(n.activeTexture(Re),te=Re),n.bindTexture(k,Ae||z[k]),be.type=k,be.texture=Ae)}function T(){const k=ue[te];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function D(){try{n.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function I(){try{n.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function j(){try{n.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function se(){try{n.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function fe(){try{n.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ie(){try{n.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ve(k){ne.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ne.copy(k))}function Ve(k){Ce.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ce.copy(k))}function We(k,Ae){let Re=l.get(Ae);Re===void 0&&(Re=new WeakMap,l.set(Ae,Re));let be=Re.get(k);be===void 0&&(be=n.getUniformBlockIndex(Ae,k.name),Re.set(k,be))}function Ie(k,Ae){const be=l.get(Ae).get(k);c.get(Ae)!==be&&(n.uniformBlockBinding(Ae,be,k.__bindingPointIndex),c.set(Ae,be))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,ue={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,_=null,b=null,y=null,R=null,M=null,C=new rt(0,0,0),U=0,E=!1,S=null,w=null,P=null,L=null,O=null,ne.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:X,disable:le,bindFramebuffer:de,drawBuffers:xe,useProgram:Ne,setBlending:et,setMaterial:G,setFlipSided:Ke,setCullFace:Z,setLineWidth:pe,setPolygonOffset:Q,setScissorTest:Te,activeTexture:Se,bindTexture:Be,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:A,texImage2D:fe,texImage3D:ie,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:j,texStorage3D:se,texSubImage2D:D,texSubImage3D:I,compressedTexSubImage2D:F,compressedTexSubImage3D:K,scissor:ve,viewport:Ve,reset:ke}}function S_(n,e,t,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):vo("canvas")}function v(T,x,A){let D=1;const I=Be(T);if((I.width>A||I.height>A)&&(D=A/Math.max(I.width,I.height)),D<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const F=Math.floor(D*I.width),K=Math.floor(D*I.height);d===void 0&&(d=g(F,K));const j=x?g(F,K):d;return j.width=F,j.height=K,j.getContext("2d").drawImage(T,0,0,F,K),it("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+F+"x"+K+")."),j}else return"data"in T&&it("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),T;return T}function f(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,x,A,D,I=!1){if(T!==null){if(n[T]!==void 0)return n[T];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let F=x;if(x===n.RED&&(A===n.FLOAT&&(F=n.R32F),A===n.HALF_FLOAT&&(F=n.R16F),A===n.UNSIGNED_BYTE&&(F=n.R8)),x===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.R8UI),A===n.UNSIGNED_SHORT&&(F=n.R16UI),A===n.UNSIGNED_INT&&(F=n.R32UI),A===n.BYTE&&(F=n.R8I),A===n.SHORT&&(F=n.R16I),A===n.INT&&(F=n.R32I)),x===n.RG&&(A===n.FLOAT&&(F=n.RG32F),A===n.HALF_FLOAT&&(F=n.RG16F),A===n.UNSIGNED_BYTE&&(F=n.RG8)),x===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RG8UI),A===n.UNSIGNED_SHORT&&(F=n.RG16UI),A===n.UNSIGNED_INT&&(F=n.RG32UI),A===n.BYTE&&(F=n.RG8I),A===n.SHORT&&(F=n.RG16I),A===n.INT&&(F=n.RG32I)),x===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RGB8UI),A===n.UNSIGNED_SHORT&&(F=n.RGB16UI),A===n.UNSIGNED_INT&&(F=n.RGB32UI),A===n.BYTE&&(F=n.RGB8I),A===n.SHORT&&(F=n.RGB16I),A===n.INT&&(F=n.RGB32I)),x===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),A===n.UNSIGNED_INT&&(F=n.RGBA32UI),A===n.BYTE&&(F=n.RGBA8I),A===n.SHORT&&(F=n.RGBA16I),A===n.INT&&(F=n.RGBA32I)),x===n.RGB&&(A===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),A===n.UNSIGNED_INT_10F_11F_11F_REV&&(F=n.R11F_G11F_B10F)),x===n.RGBA){const K=I?ys:_t.getTransfer(D);A===n.FLOAT&&(F=n.RGBA32F),A===n.HALF_FLOAT&&(F=n.RGBA16F),A===n.UNSIGNED_BYTE&&(F=K===Lt?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(T,x){let A;return T?x===null||x===Yi||x===fo?A=n.DEPTH24_STENCIL8:x===Kn?A=n.DEPTH32F_STENCIL8:x===ho&&(A=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yi||x===fo?A=n.DEPTH_COMPONENT24:x===Kn?A=n.DEPTH_COMPONENT32F:x===ho&&(A=n.DEPTH_COMPONENT16),A}function R(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function M(T){const x=T.target;x.removeEventListener("dispose",M),U(x),x.isVideoTexture&&u.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),S(x)}function U(T){const x=i.get(T);if(x.__webglInit===void 0)return;const A=T.source,D=p.get(A);if(D){const I=D[x.__cacheKey];I.usedTimes--,I.usedTimes===0&&E(T),Object.keys(D).length===0&&p.delete(A)}i.remove(T)}function E(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const A=T.source,D=p.get(A);delete D[x.__cacheKey],s.memory.textures--}function S(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(x.__webglFramebuffer[D]))for(let I=0;I<x.__webglFramebuffer[D].length;I++)n.deleteFramebuffer(x.__webglFramebuffer[D][I]);else n.deleteFramebuffer(x.__webglFramebuffer[D]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[D])}else{if(Array.isArray(x.__webglFramebuffer))for(let D=0;D<x.__webglFramebuffer.length;D++)n.deleteFramebuffer(x.__webglFramebuffer[D]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let D=0;D<x.__webglColorRenderbuffer.length;D++)x.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[D]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const A=T.textures;for(let D=0,I=A.length;D<I;D++){const F=i.get(A[D]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),s.memory.textures--),i.remove(A[D])}i.remove(T)}let w=0;function P(){w=0}function L(){const T=w;return T>=r.maxTextures&&it("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function O(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const A=i.get(T);if(T.isVideoTexture&&Te(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&A.__version!==T.version){const D=T.image;if(D===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{z(A,T,x);return}}else T.isExternalTexture&&(A.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+x)}function H(T,x){const A=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){z(A,T,x);return}else T.isExternalTexture&&(A.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+x)}function $(T,x){const A=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){z(A,T,x);return}t.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+x)}function W(T,x){const A=i.get(T);if(T.version>0&&A.__version!==T.version){X(A,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+x)}const te={[jn]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[_s]:n.MIRRORED_REPEAT},ue={[gn]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[us]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},_e={[Kf]:n.NEVER,[Qf]:n.ALWAYS,[Yf]:n.LESS,[hd]:n.LEQUAL,[qf]:n.EQUAL,[Jf]:n.GEQUAL,[$f]:n.GREATER,[Zf]:n.NOTEQUAL};function re(T,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===mn||x.magFilter===us||x.magFilter===to||x.magFilter===xi||x.minFilter===mn||x.minFilter===us||x.minFilter===to||x.minFilter===xi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,te[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,te[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,te[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==to&&x.minFilter!==xi||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ne(T,x){let A=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",M));const D=x.source;let I=p.get(D);I===void 0&&(I={},p.set(D,I));const F=O(x);if(F!==T.__cacheKey){I[F]===void 0&&(I[F]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,A=!0),I[F].usedTimes++;const K=I[T.__cacheKey];K!==void 0&&(I[T.__cacheKey].usedTimes--,K.usedTimes===0&&E(x)),T.__cacheKey=F,T.__webglTexture=I[F].texture}return A}function Ce(T,x,A){return Math.floor(Math.floor(T/A)/x)}function ee(T,x,A,D){const F=T.updateRanges;if(F.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,A,D,x.data);else{F.sort((ie,ve)=>ie.start-ve.start);let K=0;for(let ie=1;ie<F.length;ie++){const ve=F[K],Ve=F[ie],We=ve.start+ve.count,Ie=Ce(Ve.start,x.width,4),ke=Ce(ve.start,x.width,4);Ve.start<=We+1&&Ie===ke&&Ce(Ve.start+Ve.count-1,x.width,4)===Ie?ve.count=Math.max(ve.count,Ve.start+Ve.count-ve.start):(++K,F[K]=Ve)}F.length=K+1;const j=n.getParameter(n.UNPACK_ROW_LENGTH),se=n.getParameter(n.UNPACK_SKIP_PIXELS),fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ie=0,ve=F.length;ie<ve;ie++){const Ve=F[ie],We=Math.floor(Ve.start/4),Ie=Math.ceil(Ve.count/4),ke=We%x.width,k=Math.floor(We/x.width),Ae=Ie,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,ke,k,Ae,Re,A,D,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,j),n.pixelStorei(n.UNPACK_SKIP_PIXELS,se),n.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function z(T,x,A){let D=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(D=n.TEXTURE_3D);const I=ne(T,x),F=x.source;t.bindTexture(D,T.__webglTexture,n.TEXTURE0+A);const K=i.get(F);if(F.version!==K.__version||I===!0){t.activeTexture(n.TEXTURE0+A);const j=_t.getPrimaries(_t.workingColorSpace),se=x.colorSpace===Li?null:_t.getPrimaries(x.colorSpace),fe=x.colorSpace===Li||j===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ie=v(x.image,!1,r.maxTextureSize);ie=Se(x,ie);const ve=o.convert(x.format,x.colorSpace),Ve=o.convert(x.type);let We=b(x.internalFormat,ve,Ve,x.colorSpace,x.isVideoTexture);re(D,x);let Ie;const ke=x.mipmaps,k=x.isVideoTexture!==!0,Ae=K.__version===void 0||I===!0,Re=F.dataReady,be=R(x,ie);if(x.isDepthTexture)We=y(x.format===mo,x.type),Ae&&(k?t.texStorage2D(n.TEXTURE_2D,1,We,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,We,ie.width,ie.height,0,ve,Ve,null));else if(x.isDataTexture)if(ke.length>0){k&&Ae&&t.texStorage2D(n.TEXTURE_2D,be,We,ke[0].width,ke[0].height);for(let B=0,Y=ke.length;B<Y;B++)Ie=ke[B],k?Re&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ie.width,Ie.height,ve,Ve,Ie.data):t.texImage2D(n.TEXTURE_2D,B,We,Ie.width,Ie.height,0,ve,Ve,Ie.data);x.generateMipmaps=!1}else k?(Ae&&t.texStorage2D(n.TEXTURE_2D,be,We,ie.width,ie.height),Re&&ee(x,ie,ve,Ve)):t.texImage2D(n.TEXTURE_2D,0,We,ie.width,ie.height,0,ve,Ve,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,We,ke[0].width,ke[0].height,ie.depth);for(let B=0,Y=ke.length;B<Y;B++)if(Ie=ke[B],x.format!==wn)if(ve!==null)if(k){if(Re)if(x.layerUpdates.size>0){const ye=mu(Ie.width,Ie.height,x.format,x.type);for(const De of x.layerUpdates){const Le=Ie.data.subarray(De*ye/Ie.data.BYTES_PER_ELEMENT,(De+1)*ye/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,De,Ie.width,Ie.height,1,ve,Le)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ie.width,Ie.height,ie.depth,ve,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,We,Ie.width,Ie.height,ie.depth,0,Ie.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ie.width,Ie.height,ie.depth,ve,Ve,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,We,Ie.width,Ie.height,ie.depth,0,ve,Ve,Ie.data)}else{k&&Ae&&t.texStorage2D(n.TEXTURE_2D,be,We,ke[0].width,ke[0].height);for(let B=0,Y=ke.length;B<Y;B++)Ie=ke[B],x.format!==wn?ve!==null?k?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Ie.width,Ie.height,ve,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,B,We,Ie.width,Ie.height,0,Ie.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Re&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ie.width,Ie.height,ve,Ve,Ie.data):t.texImage2D(n.TEXTURE_2D,B,We,Ie.width,Ie.height,0,ve,Ve,Ie.data)}else if(x.isDataArrayTexture)if(k){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,We,ie.width,ie.height,ie.depth),Re)if(x.layerUpdates.size>0){const B=mu(ie.width,ie.height,x.format,x.type);for(const Y of x.layerUpdates){const ye=ie.data.subarray(Y*B/ie.data.BYTES_PER_ELEMENT,(Y+1)*B/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,ie.width,ie.height,1,ve,Ve,ye)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ve,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,ie.width,ie.height,ie.depth,0,ve,Ve,ie.data);else if(x.isData3DTexture)k?(Ae&&t.texStorage3D(n.TEXTURE_3D,be,We,ie.width,ie.height,ie.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ve,ie.data)):t.texImage3D(n.TEXTURE_3D,0,We,ie.width,ie.height,ie.depth,0,ve,Ve,ie.data);else if(x.isFramebufferTexture){if(Ae)if(k)t.texStorage2D(n.TEXTURE_2D,be,We,ie.width,ie.height);else{let B=ie.width,Y=ie.height;for(let ye=0;ye<be;ye++)t.texImage2D(n.TEXTURE_2D,ye,We,B,Y,0,ve,Ve,null),B>>=1,Y>>=1}}else if(ke.length>0){if(k&&Ae){const B=Be(ke[0]);t.texStorage2D(n.TEXTURE_2D,be,We,B.width,B.height)}for(let B=0,Y=ke.length;B<Y;B++)Ie=ke[B],k?Re&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ve,Ve,Ie):t.texImage2D(n.TEXTURE_2D,B,We,ve,Ve,Ie);x.generateMipmaps=!1}else if(k){if(Ae){const B=Be(ie);t.texStorage2D(n.TEXTURE_2D,be,We,B.width,B.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ve,ie)}else t.texImage2D(n.TEXTURE_2D,0,We,ve,Ve,ie);f(x)&&h(D),K.__version=F.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function X(T,x,A){if(x.image.length!==6)return;const D=ne(T,x),I=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+A);const F=i.get(I);if(I.version!==F.__version||D===!0){t.activeTexture(n.TEXTURE0+A);const K=_t.getPrimaries(_t.workingColorSpace),j=x.colorSpace===Li?null:_t.getPrimaries(x.colorSpace),se=x.colorSpace===Li||K===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Y=0;Y<6;Y++)!fe&&!ie?ve[Y]=v(x.image[Y],!0,r.maxCubemapSize):ve[Y]=ie?x.image[Y].image:x.image[Y],ve[Y]=Se(x,ve[Y]);const Ve=ve[0],We=o.convert(x.format,x.colorSpace),Ie=o.convert(x.type),ke=b(x.internalFormat,We,Ie,x.colorSpace),k=x.isVideoTexture!==!0,Ae=F.__version===void 0||D===!0,Re=I.dataReady;let be=R(x,Ve);re(n.TEXTURE_CUBE_MAP,x);let B;if(fe){k&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ke,Ve.width,Ve.height);for(let Y=0;Y<6;Y++){B=ve[Y].mipmaps;for(let ye=0;ye<B.length;ye++){const De=B[ye];x.format!==wn?We!==null?k?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,De.width,De.height,We,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,ke,De.width,De.height,0,De.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,De.width,De.height,We,Ie,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,ke,De.width,De.height,0,We,Ie,De.data)}}}else{if(B=x.mipmaps,k&&Ae){B.length>0&&be++;const Y=Be(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ke,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ie){k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve[Y].width,ve[Y].height,We,Ie,ve[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ke,ve[Y].width,ve[Y].height,0,We,Ie,ve[Y].data);for(let ye=0;ye<B.length;ye++){const Le=B[ye].image[Y].image;k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,Le.width,Le.height,We,Ie,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,ke,Le.width,Le.height,0,We,Ie,Le.data)}}else{k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,We,Ie,ve[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ke,We,Ie,ve[Y]);for(let ye=0;ye<B.length;ye++){const De=B[ye];k?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,We,Ie,De.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,ke,We,Ie,De.image[Y])}}}f(x)&&h(n.TEXTURE_CUBE_MAP),F.__version=I.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function le(T,x,A,D,I,F){const K=o.convert(A.format,A.colorSpace),j=o.convert(A.type),se=b(A.internalFormat,K,j,A.colorSpace),fe=i.get(x),ie=i.get(A);if(ie.__renderTarget=x,!fe.__hasExternalTextures){const ve=Math.max(1,x.width>>F),Ve=Math.max(1,x.height>>F);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,F,se,ve,Ve,x.depth,0,K,j,null):t.texImage2D(I,F,se,ve,Ve,0,K,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,I,ie.__webglTexture,0,pe(x)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,I,ie.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(T,x,A){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const D=x.depthTexture,I=D&&D.isDepthTexture?D.type:null,F=y(x.stencilBuffer,I),K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=pe(x);Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,F,x.width,x.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,F,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,F,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,T)}else{const D=x.textures;for(let I=0;I<D.length;I++){const F=D[I],K=o.convert(F.format,F.colorSpace),j=o.convert(F.type),se=b(F.internalFormat,K,j,F.colorSpace),fe=pe(x);A&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,se,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(x.depthTexture);D.__renderTarget=x,(!D.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const I=D.__webglTexture,F=pe(x);if(x.depthTexture.format===po)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(x.depthTexture.format===mo)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const x=i.get(T),A=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const D=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),D){const I=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,D.removeEventListener("dispose",I)};D.addEventListener("dispose",I),x.__depthDisposeCallback=I}x.__boundDepthTexture=D}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");const D=T.texture.mipmaps;D&&D.length>0?xe(x.__webglFramebuffer[0],T):xe(x.__webglFramebuffer,T)}else if(A){x.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[D]),x.__webglDepthbuffer[D]===void 0)x.__webglDepthbuffer[D]=n.createRenderbuffer(),de(x.__webglDepthbuffer[D],T,!1);else{const I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,F)}}else{const D=T.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),de(x.__webglDepthbuffer,T,!1);else{const I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,F)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(T,x,A){const D=i.get(T);x!==void 0&&le(D.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&Ne(T)}function Ue(T){const x=T.texture,A=i.get(T),D=i.get(x);T.addEventListener("dispose",C);const I=T.textures,F=T.isWebGLCubeRenderTarget===!0,K=I.length>1;if(K||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=x.version,s.memory.textures++),F){A.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[j]=[];for(let se=0;se<x.mipmaps.length;se++)A.__webglFramebuffer[j][se]=n.createFramebuffer()}else A.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)A.__webglFramebuffer[j]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(K)for(let j=0,se=I.length;j<se;j++){const fe=i.get(I[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),s.memory.textures++)}if(T.samples>0&&Q(T)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let j=0;j<I.length;j++){const se=I[j];A.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[j]);const fe=o.convert(se.format,se.colorSpace),ie=o.convert(se.type),ve=b(se.internalFormat,fe,ie,se.colorSpace,T.isXRRenderTarget===!0),Ve=pe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,A.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),de(A.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),re(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)le(A.__webglFramebuffer[j][se],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,se);else le(A.__webglFramebuffer[j],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){for(let j=0,se=I.length;j<se;j++){const fe=I[j],ie=i.get(fe);let ve=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,ie.__webglTexture),re(ve,fe),le(A.__webglFramebuffer,T,fe,n.COLOR_ATTACHMENT0+j,ve,0),f(fe)&&h(ve)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,D.__webglTexture),re(j,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)le(A.__webglFramebuffer[se],T,x,n.COLOR_ATTACHMENT0,j,se);else le(A.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,j,0);f(x)&&h(j),t.unbindTexture()}T.depthBuffer&&Ne(T)}function et(T){const x=T.textures;for(let A=0,D=x.length;A<D;A++){const I=x[A];if(f(I)){const F=_(T),K=i.get(I).__webglTexture;t.bindTexture(F,K),h(F),t.unbindTexture()}}}const G=[],Ke=[];function Z(T){if(T.samples>0){if(Q(T)===!1){const x=T.textures,A=T.width,D=T.height;let I=n.COLOR_BUFFER_BIT;const F=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=i.get(T),j=x.length>1;if(j)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);const se=T.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const ie=i.get(x[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,A,D,0,0,A,D,I,n.NEAREST),c===!0&&(G.length=0,Ke.length=0,G.push(n.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(G.push(F),Ke.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const ie=i.get(x[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function pe(T){return Math.min(r.maxSamples,T.samples)}function Q(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(T){const x=s.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Se(T,x){const A=T.colorSpace,D=T.format,I=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||A!==cn&&A!==Li&&(_t.getTransfer(A)===Lt?(D!==wn||I!==ri)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",A)),x}function Be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Q}function M_(n,e){function t(i,r=Li){let o;const s=_t.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ld)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return n.BYTE;if(i===sd)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Ul)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===kr)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===wn)return n.RGBA;if(i===po)return n.DEPTH_COMPONENT;if(i===mo)return n.DEPTH_STENCIL;if(i===zl)return n.RED;if(i===Vl)return n.RED_INTEGER;if(i===Gl)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===ds||i===hs||i===fs||i===ps)if(s===Lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ps)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===qa||i===$a||i===Za)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ya)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===Qa||i===el)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ja||i===Qa)return s===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===el)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tl||i===nl||i===il||i===rl||i===ol||i===sl||i===al||i===ll||i===cl||i===ul||i===dl||i===hl||i===fl||i===pl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===tl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return s===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===gl||i===xl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===ml)return s===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vl||i===_l||i===yl||i===bl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===vl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A_=`
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

}`;class w_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Zi{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",f=new w_,h={},_=t.getContextAttributes();let b=null,y=null;const R=[],M=[],C=new tt;let U=null;const E=new pn;E.viewport=new Mt;const S=new pn;S.viewport=new Mt;const w=[E,S],P=new km;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=R[z];return X===void 0&&(X=new ga,R[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=R[z];return X===void 0&&(X=new ga,R[z]=X),X.getGripSpace()},this.getHand=function(z){let X=R[z];return X===void 0&&(X=new ga,R[z]=X),X.getHandSpace()};function V(z){const X=M.indexOf(z.inputSource);if(X===-1)return;const le=R[X];le!==void 0&&(le.update(z.inputSource,z.frame,l||s),le.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let z=0;z<R.length;z++){const X=M[z];X!==null&&(M[z]=null,R[z].disconnect(X))}L=null,O=null,f.reset();for(const z in h)delete h[z];e.setRenderTarget(b),m=null,p=null,d=null,r=null,y=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?mo:po,de=_.stencil?fo:Yi);const Ne={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};d=this.getBinding(),p=d.createProjectionLayer(Ne),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new qi(p.textureWidth,p.textureHeight,{format:wn,type:ri,depthTexture:new Rd(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new qi(m.framebufferWidth,m.framebufferHeight,{format:wn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function $(z){for(let X=0;X<z.removed.length;X++){const le=z.removed[X],de=M.indexOf(le);de>=0&&(M[de]=null,R[de].disconnect(le))}for(let X=0;X<z.added.length;X++){const le=z.added[X];let de=M.indexOf(le);if(de===-1){for(let Ne=0;Ne<R.length;Ne++)if(Ne>=M.length){M.push(le),de=Ne;break}else if(M[Ne]===null){M[Ne]=le,de=Ne;break}if(de===-1)break}const xe=R[de];xe&&xe.connect(le)}}const W=new q,te=new q;function ue(z,X,le){W.setFromMatrixPosition(X.matrixWorld),te.setFromMatrixPosition(le.matrixWorld);const de=W.distanceTo(te),xe=X.projectionMatrix.elements,Ne=le.projectionMatrix.elements,He=xe[14]/(xe[10]-1),Ue=xe[14]/(xe[10]+1),et=(xe[9]+1)/xe[5],G=(xe[9]-1)/xe[5],Ke=(xe[8]-1)/xe[0],Z=(Ne[8]+1)/Ne[0],pe=He*Ke,Q=He*Z,Te=de/(-Ke+Z),Se=Te*-Ke;if(X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Se),z.translateZ(Te),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),xe[10]===-1)z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Be=He+Te,T=Ue+Te,x=pe-Se,A=Q+(de-Se),D=et*Ue/T*Be,I=G*Ue/T*Be;z.projectionMatrix.makePerspective(x,A,D,I,Be,T),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function _e(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let X=z.near,le=z.far;f.texture!==null&&(f.depthNear>0&&(X=f.depthNear),f.depthFar>0&&(le=f.depthFar)),P.near=S.near=E.near=X,P.far=S.far=E.far=le,(L!==P.near||O!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,O=P.far),P.layers.mask=z.layers.mask|6,E.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const de=z.parent,xe=P.cameras;_e(P,de);for(let Ne=0;Ne<xe.length;Ne++)_e(xe[Ne],de);xe.length===2?ue(P,E,S):P.projectionMatrix.copy(E.projectionMatrix),re(z,P,de)};function re(z,X,le){le===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(le.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Pr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(P)},this.getCameraTexture=function(z){return h[z]};let ne=null;function Ce(z,X){if(u=X.getViewerPose(l||s),g=X,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let de=!1;le.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let Ue=0;Ue<le.length;Ue++){const et=le[Ue];let G=null;if(m!==null)G=m.getViewport(et);else{const Z=d.getViewSubImage(p,et);G=Z.viewport,Ue===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let Ke=w[Ue];Ke===void 0&&(Ke=new pn,Ke.layers.enable(Ue),Ke.viewport=new Mt,w[Ue]=Ke),Ke.matrix.fromArray(et.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(et.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(G.x,G.y,G.width,G.height),Ue===0&&(P.matrix.copy(Ke.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),de===!0&&P.cameras.push(Ke)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Ue=d.getDepthInformation(le[0]);Ue&&Ue.isValid&&Ue.texture&&f.init(Ue,r.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ue=0;Ue<le.length;Ue++){const et=le[Ue].camera;if(et){let G=h[et];G||(G=new wd,h[et]=G);const Ke=d.getCameraImage(et);G.sourceTexture=Ke}}}}for(let le=0;le<R.length;le++){const de=M[le],xe=R[le];de!==null&&xe!==void 0&&xe.update(de,X,l||s)}ne&&ne(z,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const ee=new Fd;ee.setAnimationLoop(Ce),this.setAnimationLoop=function(z){ne=z},this.dispose=function(){}}}const Wi=new Jn,P_=new gt;function L_(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,_d(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,_,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(f,h):h.isMeshToonMaterial?(o(f,h),d(f,h)):h.isMeshPhongMaterial?(o(f,h),u(f,h)):h.isMeshStandardMaterial?(o(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,y)):h.isMeshMatcapMaterial?(o(f,h),g(f,h)):h.isMeshDepthMaterial?o(f,h):h.isMeshDistanceMaterial?(o(f,h),v(f,h)):h.isMeshNormalMaterial?o(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,_,b):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===ln&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===ln&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const _=e.get(h),b=_.envMap,y=_.envMapRotation;b&&(f.envMap.value=b,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),f.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Wi)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,_,b){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*_,f.scale.value=b*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,_){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const _=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I_(n,e,t,i){let r={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){const y=b.program;i.uniformBlockBinding(_,y)}function l(_,b){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",f));const R=b.program;i.updateUBOMapping(_,R);const M=e.render.frame;o[_.id]!==M&&(p(_),o[_.id]=M)}function u(_){const b=d();_.__bindingPointIndex=b;const y=n.createBuffer(),R=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const b=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,C=y.length;M<C;M++){const U=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,S=U.length;E<S;E++){const w=U[E];if(m(w,M,E,R)===!0){const P=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let V=0;V<L.length;V++){const H=L[V],$=v(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,P+O,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,b,y,R){const M=_.value,C=b+"_"+y;if(R[C]===void 0)return typeof M=="number"||typeof M=="boolean"?R[C]=M:R[C]=M.clone(),!0;{const U=R[C];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return R[C]=M,!0}else if(U.equals(M)===!1)return U.copy(M),!0}return!1}function g(_){const b=_.uniforms;let y=0;const R=16;for(let C=0,U=b.length;C<U;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,w=E.length;S<w;S++){const P=E[S],L=Array.isArray(P.value)?P.value:[P.value];for(let O=0,V=L.length;O<V;O++){const H=L[O],$=v(H),W=y%R,te=W%$.boundary,ue=W+te;y+=te,ue!==0&&R-ue<$.storage&&(y+=R-ue),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=$.storage}}}const M=y%R;return M>0&&(y+=R-M),_.__size=y,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",_),b}function f(_){const b=_.target;b.removeEventListener("dispose",f);const y=s.indexOf(b.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:c,update:l,dispose:h}}const N_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let pi=null;function O_(){return pi===null&&(pi=new wo(N_,32,32,Gl,kr),pi.minFilter=mn,pi.magFilter=mn,pi.wrapS=bn,pi.wrapT=bn,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class D_{constructor(e={}){const{canvas:t=ep(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Set([Wl,Hl,Vl]),v=new Set([ri,Yi,ho,fo,kl,Bl]),f=new Uint32Array(4),h=new Int32Array(4);let _=null,b=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Rt;let U=0,E=0,S=null,w=-1,P=null;const L=new Mt,O=new Mt;let V=null;const H=new rt(0);let $=0,W=t.width,te=t.height,ue=1,_e=null,re=null;const ne=new Mt(0,0,W,te),Ce=new Mt(0,0,W,te);let ee=!1;const z=new ql;let X=!1,le=!1;const de=new gt,xe=new q,Ne=new Mt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function et(){return S===null?ue:1}let G=i;function Ke(N,ae){return t.getContext(N,ae)}try{const N={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dl}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",ye,!1),G===null){const ae="webgl2";if(G=Ke(ae,N),G===null)throw Ke(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N("WebGLRenderer: "+N.message),N}let Z,pe,Q,Te,Se,Be,T,x,A,D,I,F,K,j,se,fe,ie,ve,Ve,We,Ie,ke,k,Ae;function Re(){Z=new Hx(G),Z.init(),ke=new M_(G,Z),pe=new Ox(G,Z,e,ke),Q=new E_(G,Z),pe.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),Te=new jx(G),Se=new u_,Be=new S_(G,Z,Q,Se,pe,ke,Te),T=new Fx(M),x=new Gx(M),A=new $m(G),k=new Ix(G,A),D=new Wx(G,A,Te,k),I=new Yx(G,D,A,Te),Ve=new Kx(G,pe,Be),fe=new Dx(Se),F=new c_(M,T,x,Z,pe,k,fe),K=new L_(M,Se),j=new h_,se=new v_(Z),ve=new Lx(M,T,x,Q,I,m,c),ie=new b_(M,I,pe),Ae=new I_(G,Te,pe,Q),We=new Nx(G,Z,Te),Ie=new Xx(G,Z,Te),Te.programs=F.programs,M.capabilities=pe,M.extensions=Z,M.properties=Se,M.renderLists=j,M.shadowMap=ie,M.state=Q,M.info=Te}Re();const be=new C_(M,G);this.xr=be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const N=Z.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Z.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(N){N!==void 0&&(ue=N,this.setSize(W,te,!1))},this.getSize=function(N){return N.set(W,te)},this.setSize=function(N,ae,me=!0){if(be.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}W=N,te=ae,t.width=Math.floor(N*ue),t.height=Math.floor(ae*ue),me===!0&&(t.style.width=N+"px",t.style.height=ae+"px"),this.setViewport(0,0,N,ae)},this.getDrawingBufferSize=function(N){return N.set(W*ue,te*ue).floor()},this.setDrawingBufferSize=function(N,ae,me){W=N,te=ae,ue=me,t.width=Math.floor(N*me),t.height=Math.floor(ae*me),this.setViewport(0,0,N,ae)},this.getCurrentViewport=function(N){return N.copy(L)},this.getViewport=function(N){return N.copy(ne)},this.setViewport=function(N,ae,me,ge){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,ae,me,ge),Q.viewport(L.copy(ne).multiplyScalar(ue).round())},this.getScissor=function(N){return N.copy(Ce)},this.setScissor=function(N,ae,me,ge){N.isVector4?Ce.set(N.x,N.y,N.z,N.w):Ce.set(N,ae,me,ge),Q.scissor(O.copy(Ce).multiplyScalar(ue).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(N){Q.setScissorTest(ee=N)},this.setOpaqueSort=function(N){_e=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(N=!0,ae=!0,me=!0){let ge=0;if(N){let ce=!1;if(S!==null){const Ge=S.texture.format;ce=g.has(Ge)}if(ce){const Ge=S.texture.type,Ye=v.has(Ge),Qe=ve.getClearColor(),Ze=ve.getClearAlpha(),at=Qe.r,ct=Qe.g,ot=Qe.b;Ye?(f[0]=at,f[1]=ct,f[2]=ot,f[3]=Ze,G.clearBufferuiv(G.COLOR,0,f)):(h[0]=at,h[1]=ct,h[2]=ot,h[3]=Ze,G.clearBufferiv(G.COLOR,0,h))}else ge|=G.COLOR_BUFFER_BIT}ae&&(ge|=G.DEPTH_BUFFER_BIT),me&&(ge|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ve.dispose(),j.dispose(),se.dispose(),Se.dispose(),T.dispose(),x.dispose(),I.dispose(),k.dispose(),Ae.dispose(),F.dispose(),be.dispose(),be.removeEventListener("sessionstart",$e),be.removeEventListener("sessionend",J),oe.stop()};function B(N){N.preventDefault(),Ts("WebGLRenderer: Context Lost."),C=!0}function Y(){Ts("WebGLRenderer: Context Restored."),C=!1;const N=Te.autoReset,ae=ie.enabled,me=ie.autoUpdate,ge=ie.needsUpdate,ce=ie.type;Re(),Te.autoReset=N,ie.enabled=ae,ie.autoUpdate=me,ie.needsUpdate=ge,ie.type=ce}function ye(N){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function De(N){const ae=N.target;ae.removeEventListener("dispose",De),Le(ae)}function Le(N){Me(N),Se.remove(N)}function Me(N){const ae=Se.get(N).programs;ae!==void 0&&(ae.forEach(function(me){F.releaseProgram(me)}),N.isShaderMaterial&&F.releaseShaderCache(N))}this.renderBufferDirect=function(N,ae,me,ge,ce,Ge){ae===null&&(ae=He);const Ye=ce.isMesh&&ce.matrixWorld.determinant()<0,Qe=kt(N,ae,me,ge,ce);Q.setMaterial(ge,Ye);let Ze=me.index,at=1;if(ge.wireframe===!0){if(Ze=D.getWireframeAttribute(me),Ze===void 0)return;at=2}const ct=me.drawRange,ot=me.attributes.position;let Tt=ct.start*at,Pt=(ct.start+ct.count)*at;Ge!==null&&(Tt=Math.max(Tt,Ge.start*at),Pt=Math.min(Pt,(Ge.start+Ge.count)*at)),Ze!==null?(Tt=Math.max(Tt,0),Pt=Math.min(Pt,Ze.count)):ot!=null&&(Tt=Math.max(Tt,0),Pt=Math.min(Pt,ot.count));const Gt=Pt-Tt;if(Gt<0||Gt===1/0)return;k.setup(ce,ge,Qe,me,Ze);let Ht,Ot=We;if(Ze!==null&&(Ht=A.get(Ze),Ot=Ie,Ot.setIndex(Ht)),ce.isMesh)ge.wireframe===!0?(Q.setLineWidth(ge.wireframeLinewidth*et()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(ce.isLine){let st=ge.linewidth;st===void 0&&(st=1),Q.setLineWidth(st*et()),ce.isLineSegments?Ot.setMode(G.LINES):ce.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else ce.isPoints?Ot.setMode(G.POINTS):ce.isSprite&&Ot.setMode(G.TRIANGLES);if(ce.isBatchedMesh)if(ce._multiDrawInstances!==null)_o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const st=ce._multiDrawStarts,Bt=ce._multiDrawCounts,St=ce._multiDrawCount,Tn=Ze?A.get(Ze).bytesPerElement:1,Qi=Se.get(ge).currentProgram.getUniforms();for(let En=0;En<St;En++)Qi.setValue(G,"_gl_DrawID",En),Ot.render(st[En]/Tn,Bt[En])}else if(ce.isInstancedMesh)Ot.renderInstances(Tt,Gt,ce.count);else if(me.isInstancedBufferGeometry){const st=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Bt=Math.min(me.instanceCount,st);Ot.renderInstances(Tt,Gt,Bt)}else Ot.render(Tt,Gt)};function we(N,ae,me){N.transparent===!0&&N.side===Nn&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,Et(N,ae,me),N.side=ii,N.needsUpdate=!0,Et(N,ae,me),N.side=Nn):Et(N,ae,me)}this.compile=function(N,ae,me=null){me===null&&(me=N),b=se.get(me),b.init(ae),R.push(b),me.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ae.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),N!==me&&N.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ae.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),b.setupLights();const ge=new Set;return N.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let Ye=0;Ye<Ge.length;Ye++){const Qe=Ge[Ye];we(Qe,me,ce),ge.add(Qe)}else we(Ge,me,ce),ge.add(Ge)}),b=R.pop(),ge},this.compileAsync=function(N,ae,me=null){const ge=this.compile(N,ae,me);return new Promise(ce=>{function Ge(){if(ge.forEach(function(Ye){Se.get(Ye).currentProgram.isReady()&&ge.delete(Ye)}),ge.size===0){ce(N);return}setTimeout(Ge,10)}Z.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Oe=null;function Fe(N){Oe&&Oe(N)}function $e(){oe.stop()}function J(){oe.start()}const oe=new Fd;oe.setAnimationLoop(Fe),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(N){Oe=N,be.setAnimationLoop(N),N===null?oe.stop():oe.start()},be.addEventListener("sessionstart",$e),be.addEventListener("sessionend",J),this.render=function(N,ae){if(ae!==void 0&&ae.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(ae),ae=be.getCamera()),N.isScene===!0&&N.onBeforeRender(M,N,ae,S),b=se.get(N,R.length),b.init(ae),R.push(b),de.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),z.setFromProjectionMatrix(de,ni,ae.reversedDepth),le=this.localClippingEnabled,X=fe.init(this.clippingPlanes,le),_=j.get(N,y.length),_.init(),y.push(_),be.enabled===!0&&be.isPresenting===!0){const Ge=M.xr.getDepthSensingMesh();Ge!==null&&he(Ge,ae,-1/0,M.sortObjects)}he(N,ae,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(_e,re),Ue=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Ue&&ve.addToRenderList(_,N),this.info.render.frame++,X===!0&&fe.beginShadows();const me=b.state.shadowsArray;ie.render(me,N,ae),X===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ge=_.opaque,ce=_.transmissive;if(b.setupLights(),ae.isArrayCamera){const Ge=ae.cameras;if(ce.length>0)for(let Ye=0,Qe=Ge.length;Ye<Qe;Ye++){const Ze=Ge[Ye];ze(ge,ce,N,Ze)}Ue&&ve.render(N);for(let Ye=0,Qe=Ge.length;Ye<Qe;Ye++){const Ze=Ge[Ye];Pe(_,N,Ze,Ze.viewport)}}else ce.length>0&&ze(ge,ce,N,ae),Ue&&ve.render(N),Pe(_,N,ae);S!==null&&E===0&&(Be.updateMultisampleRenderTarget(S),Be.updateRenderTargetMipmap(S)),N.isScene===!0&&N.onAfterRender(M,N,ae),k.resetDefaultState(),w=-1,P=null,R.pop(),R.length>0?(b=R[R.length-1],X===!0&&fe.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,y.pop(),y.length>0?_=y[y.length-1]:_=null};function he(N,ae,me,ge){if(N.visible===!1)return;if(N.layers.test(ae.layers)){if(N.isGroup)me=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ae);else if(N.isLight)b.pushLight(N),N.castShadow&&b.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||z.intersectsSprite(N)){ge&&Ne.setFromMatrixPosition(N.matrixWorld).applyMatrix4(de);const Ye=I.update(N),Qe=N.material;Qe.visible&&_.push(N,Ye,Qe,me,Ne.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||z.intersectsObject(N))){const Ye=I.update(N),Qe=N.material;if(ge&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ne.copy(N.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Ne.copy(Ye.boundingSphere.center)),Ne.applyMatrix4(N.matrixWorld).applyMatrix4(de)),Array.isArray(Qe)){const Ze=Ye.groups;for(let at=0,ct=Ze.length;at<ct;at++){const ot=Ze[at],Tt=Qe[ot.materialIndex];Tt&&Tt.visible&&_.push(N,Ye,Tt,me,Ne.z,ot)}}else Qe.visible&&_.push(N,Ye,Qe,me,Ne.z,null)}}const Ge=N.children;for(let Ye=0,Qe=Ge.length;Ye<Qe;Ye++)he(Ge[Ye],ae,me,ge)}function Pe(N,ae,me,ge){const{opaque:ce,transmissive:Ge,transparent:Ye}=N;b.setupLightsView(me),X===!0&&fe.setGlobalState(M.clippingPlanes,me),ge&&Q.viewport(L.copy(ge)),ce.length>0&&qe(ce,ae,me),Ge.length>0&&qe(Ge,ae,me),Ye.length>0&&qe(Ye,ae,me),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ze(N,ae,me,ge){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[ge.id]===void 0&&(b.state.transmissionRenderTarget[ge.id]=new qi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?kr:ri,minFilter:xi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ge=b.state.transmissionRenderTarget[ge.id],Ye=ge.viewport||L;Ge.setSize(Ye.z*M.transmissionResolutionScale,Ye.w*M.transmissionResolutionScale);const Qe=M.getRenderTarget(),Ze=M.getActiveCubeFace(),at=M.getActiveMipmapLevel();M.setRenderTarget(Ge),M.getClearColor(H),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),Ue&&ve.render(me);const ct=M.toneMapping;M.toneMapping=Ni;const ot=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),b.setupLightsView(ge),X===!0&&fe.setGlobalState(M.clippingPlanes,ge),qe(N,me,ge),Be.updateMultisampleRenderTarget(Ge),Be.updateRenderTargetMipmap(Ge),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Pt=0,Gt=ae.length;Pt<Gt;Pt++){const Ht=ae[Pt],{object:Ot,geometry:st,material:Bt,group:St}=Ht;if(Bt.side===Nn&&Ot.layers.test(ge.layers)){const Tn=Bt.side;Bt.side=ln,Bt.needsUpdate=!0,Xe(Ot,me,ge,st,Bt,St),Bt.side=Tn,Bt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Be.updateMultisampleRenderTarget(Ge),Be.updateRenderTargetMipmap(Ge))}M.setRenderTarget(Qe,Ze,at),M.setClearColor(H,$),ot!==void 0&&(ge.viewport=ot),M.toneMapping=ct}function qe(N,ae,me){const ge=ae.isScene===!0?ae.overrideMaterial:null;for(let ce=0,Ge=N.length;ce<Ge;ce++){const Ye=N[ce],{object:Qe,geometry:Ze,group:at}=Ye;let ct=Ye.material;ct.allowOverride===!0&&ge!==null&&(ct=ge),Qe.layers.test(me.layers)&&Xe(Qe,ae,me,Ze,ct,at)}}function Xe(N,ae,me,ge,ce,Ge){N.onBeforeRender(M,ae,me,ge,ce,Ge),N.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ce.onBeforeRender(M,ae,me,ge,N,Ge),ce.transparent===!0&&ce.side===Nn&&ce.forceSinglePass===!1?(ce.side=ln,ce.needsUpdate=!0,M.renderBufferDirect(me,ae,ge,ce,N,Ge),ce.side=ii,ce.needsUpdate=!0,M.renderBufferDirect(me,ae,ge,ce,N,Ge),ce.side=Nn):M.renderBufferDirect(me,ae,ge,ce,N,Ge),N.onAfterRender(M,ae,me,ge,ce,Ge)}function Et(N,ae,me){ae.isScene!==!0&&(ae=He);const ge=Se.get(N),ce=b.state.lights,Ge=b.state.shadowsArray,Ye=ce.state.version,Qe=F.getParameters(N,ce.state,Ge,ae,me),Ze=F.getProgramCacheKey(Qe);let at=ge.programs;ge.environment=N.isMeshStandardMaterial?ae.environment:null,ge.fog=ae.fog,ge.envMap=(N.isMeshStandardMaterial?x:T).get(N.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&N.envMap===null?ae.environmentRotation:N.envMapRotation,at===void 0&&(N.addEventListener("dispose",De),at=new Map,ge.programs=at);let ct=at.get(Ze);if(ct!==void 0){if(ge.currentProgram===ct&&ge.lightsStateVersion===Ye)return Nt(N,Qe),ct}else Qe.uniforms=F.getUniforms(N),N.onBeforeCompile(Qe,M),ct=F.acquireProgram(Qe,Ze),at.set(Ze,ct),ge.uniforms=Qe.uniforms;const ot=ge.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ot.clippingPlanes=fe.uniform),Nt(N,Qe),ge.needsLights=Qt(N),ge.lightsStateVersion=Ye,ge.needsLights&&(ot.ambientLightColor.value=ce.state.ambient,ot.lightProbe.value=ce.state.probe,ot.directionalLights.value=ce.state.directional,ot.directionalLightShadows.value=ce.state.directionalShadow,ot.spotLights.value=ce.state.spot,ot.spotLightShadows.value=ce.state.spotShadow,ot.rectAreaLights.value=ce.state.rectArea,ot.ltc_1.value=ce.state.rectAreaLTC1,ot.ltc_2.value=ce.state.rectAreaLTC2,ot.pointLights.value=ce.state.point,ot.pointLightShadows.value=ce.state.pointShadow,ot.hemisphereLights.value=ce.state.hemi,ot.directionalShadowMap.value=ce.state.directionalShadowMap,ot.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ot.spotShadowMap.value=ce.state.spotShadowMap,ot.spotLightMatrix.value=ce.state.spotLightMatrix,ot.spotLightMap.value=ce.state.spotLightMap,ot.pointShadowMap.value=ce.state.pointShadowMap,ot.pointShadowMatrix.value=ce.state.pointShadowMatrix),ge.currentProgram=ct,ge.uniformsList=null,ct}function ft(N){if(N.uniformsList===null){const ae=N.currentProgram.getUniforms();N.uniformsList=gs.seqWithValue(ae.seq,N.uniforms)}return N.uniformsList}function Nt(N,ae){const me=Se.get(N);me.outputColorSpace=ae.outputColorSpace,me.batching=ae.batching,me.batchingColor=ae.batchingColor,me.instancing=ae.instancing,me.instancingColor=ae.instancingColor,me.instancingMorph=ae.instancingMorph,me.skinning=ae.skinning,me.morphTargets=ae.morphTargets,me.morphNormals=ae.morphNormals,me.morphColors=ae.morphColors,me.morphTargetsCount=ae.morphTargetsCount,me.numClippingPlanes=ae.numClippingPlanes,me.numIntersection=ae.numClipIntersection,me.vertexAlphas=ae.vertexAlphas,me.vertexTangents=ae.vertexTangents,me.toneMapping=ae.toneMapping}function kt(N,ae,me,ge,ce){ae.isScene!==!0&&(ae=He),Be.resetTextureUnits();const Ge=ae.fog,Ye=ge.isMeshStandardMaterial?ae.environment:null,Qe=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:cn,Ze=(ge.isMeshStandardMaterial?x:T).get(ge.envMap||Ye),at=ge.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,ct=!!me.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),ot=!!me.morphAttributes.position,Tt=!!me.morphAttributes.normal,Pt=!!me.morphAttributes.color;let Gt=Ni;ge.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Gt=M.toneMapping);const Ht=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Ot=Ht!==void 0?Ht.length:0,st=Se.get(ge),Bt=b.state.lights;if(X===!0&&(le===!0||N!==P)){const dn=N===P&&ge.id===w;fe.setState(ge,N,dn)}let St=!1;ge.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Bt.state.version||st.outputColorSpace!==Qe||ce.isBatchedMesh&&st.batching===!1||!ce.isBatchedMesh&&st.batching===!0||ce.isBatchedMesh&&st.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&st.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&st.instancing===!1||!ce.isInstancedMesh&&st.instancing===!0||ce.isSkinnedMesh&&st.skinning===!1||!ce.isSkinnedMesh&&st.skinning===!0||ce.isInstancedMesh&&st.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&st.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&st.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&st.instancingMorph===!1&&ce.morphTexture!==null||st.envMap!==Ze||ge.fog===!0&&st.fog!==Ge||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==fe.numPlanes||st.numIntersection!==fe.numIntersection)||st.vertexAlphas!==at||st.vertexTangents!==ct||st.morphTargets!==ot||st.morphNormals!==Tt||st.morphColors!==Pt||st.toneMapping!==Gt||st.morphTargetsCount!==Ot)&&(St=!0):(St=!0,st.__version=ge.version);let Tn=st.currentProgram;St===!0&&(Tn=Et(ge,ae,ce));let Qi=!1,En=!1,Wr=!1;const zt=Tn.getUniforms(),xn=st.uniforms;if(Q.useProgram(Tn.program)&&(Qi=!0,En=!0,Wr=!0),ge.id!==w&&(w=ge.id,En=!0),Qi||P!==N){Q.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",N.projectionMatrix),zt.setValue(G,"viewMatrix",N.matrixWorldInverse);const vn=zt.map.cameraPosition;vn!==void 0&&vn.setValue(G,xe.setFromMatrixPosition(N.matrixWorld)),pe.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&zt.setValue(G,"isOrthographic",N.isOrthographicCamera===!0),P!==N&&(P=N,En=!0,Wr=!0)}if(ce.isSkinnedMesh){zt.setOptional(G,ce,"bindMatrix"),zt.setOptional(G,ce,"bindMatrixInverse");const dn=ce.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),zt.setValue(G,"boneTexture",dn.boneTexture,Be))}ce.isBatchedMesh&&(zt.setOptional(G,ce,"batchingTexture"),zt.setValue(G,"batchingTexture",ce._matricesTexture,Be),zt.setOptional(G,ce,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",ce._indirectTexture,Be),zt.setOptional(G,ce,"batchingColorTexture"),ce._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",ce._colorsTexture,Be));const Pn=me.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ve.update(ce,me,Tn),(En||st.receiveShadow!==ce.receiveShadow)&&(st.receiveShadow=ce.receiveShadow,zt.setValue(G,"receiveShadow",ce.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(xn.envMap.value=Ze,xn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&ae.environment!==null&&(xn.envMapIntensity.value=ae.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=O_()),En&&(zt.setValue(G,"toneMappingExposure",M.toneMappingExposure),st.needsLights&&Je(xn,Wr),Ge&&ge.fog===!0&&K.refreshFogUniforms(xn,Ge),K.refreshMaterialUniforms(xn,ge,ue,te,b.state.transmissionRenderTarget[N.id]),gs.upload(G,ft(st),xn,Be)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(gs.upload(G,ft(st),xn,Be),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&zt.setValue(G,"center",ce.center),zt.setValue(G,"modelViewMatrix",ce.modelViewMatrix),zt.setValue(G,"normalMatrix",ce.normalMatrix),zt.setValue(G,"modelMatrix",ce.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){const dn=ge.uniformsGroups;for(let vn=0,Hs=dn.length;vn<Hs;vn++){const Di=dn[vn];Ae.update(Di,Tn),Ae.bind(Di,Tn)}}return Tn}function Je(N,ae){N.ambientLightColor.needsUpdate=ae,N.lightProbe.needsUpdate=ae,N.directionalLights.needsUpdate=ae,N.directionalLightShadows.needsUpdate=ae,N.pointLights.needsUpdate=ae,N.pointLightShadows.needsUpdate=ae,N.spotLights.needsUpdate=ae,N.spotLightShadows.needsUpdate=ae,N.rectAreaLights.needsUpdate=ae,N.hemisphereLights.needsUpdate=ae}function Qt(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(N,ae,me){const ge=Se.get(N);ge.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),Se.get(N.texture).__webglTexture=ae,Se.get(N.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:me,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,ae){const me=Se.get(N);me.__webglFramebuffer=ae,me.__useDefaultFramebuffer=ae===void 0};const Un=G.createFramebuffer();this.setRenderTarget=function(N,ae=0,me=0){S=N,U=ae,E=me;let ge=!0,ce=null,Ge=!1,Ye=!1;if(N){const Ze=Se.get(N);if(Ze.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(G.FRAMEBUFFER,null),ge=!1;else if(Ze.__webglFramebuffer===void 0)Be.setupRenderTarget(N);else if(Ze.__hasExternalTextures)Be.rebindTextures(N,Se.get(N.texture).__webglTexture,Se.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ot=N.depthTexture;if(Ze.__boundDepthTexture!==ot){if(ot!==null&&Se.has(ot)&&(N.width!==ot.image.width||N.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(N)}}const at=N.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ye=!0);const ct=Se.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ct[ae])?ce=ct[ae][me]:ce=ct[ae],Ge=!0):N.samples>0&&Be.useMultisampledRTT(N)===!1?ce=Se.get(N).__webglMultisampledFramebuffer:Array.isArray(ct)?ce=ct[me]:ce=ct,L.copy(N.viewport),O.copy(N.scissor),V=N.scissorTest}else L.copy(ne).multiplyScalar(ue).floor(),O.copy(Ce).multiplyScalar(ue).floor(),V=ee;if(me!==0&&(ce=Un),Q.bindFramebuffer(G.FRAMEBUFFER,ce)&&ge&&Q.drawBuffers(N,ce),Q.viewport(L),Q.scissor(O),Q.setScissorTest(V),Ge){const Ze=Se.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ze.__webglTexture,me)}else if(Ye){const Ze=ae;for(let at=0;at<N.textures.length;at++){const ct=Se.get(N.textures[at]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+at,ct.__webglTexture,me,Ze)}}else if(N!==null&&me!==0){const Ze=Se.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ze.__webglTexture,me)}w=-1},this.readRenderTargetPixels=function(N,ae,me,ge,ce,Ge,Ye,Qe=0){if(!(N&&N.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ze=Ze[Ye]),Ze){Q.bindFramebuffer(G.FRAMEBUFFER,Ze);try{const at=N.textures[Qe],ct=at.format,ot=at.type;if(!pe.textureFormatReadable(ct)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ot)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=N.width-ge&&me>=0&&me<=N.height-ce&&(N.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Qe),G.readPixels(ae,me,ge,ce,ke.convert(ct),ke.convert(ot),Ge))}finally{const at=S!==null?Se.get(S).__webglFramebuffer:null;Q.bindFramebuffer(G.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(N,ae,me,ge,ce,Ge,Ye,Qe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=Se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ze=Ze[Ye]),Ze)if(ae>=0&&ae<=N.width-ge&&me>=0&&me<=N.height-ce){Q.bindFramebuffer(G.FRAMEBUFFER,Ze);const at=N.textures[Qe],ct=at.format,ot=at.type;if(!pe.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Tt),G.bufferData(G.PIXEL_PACK_BUFFER,Ge.byteLength,G.STREAM_READ),N.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Qe),G.readPixels(ae,me,ge,ce,ke.convert(ct),ke.convert(ot),0);const Pt=S!==null?Se.get(S).__webglFramebuffer:null;Q.bindFramebuffer(G.FRAMEBUFFER,Pt);const Gt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await tp(G,Gt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Tt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ge),G.deleteBuffer(Tt),G.deleteSync(Gt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,ae=null,me=0){const ge=Math.pow(2,-me),ce=Math.floor(N.image.width*ge),Ge=Math.floor(N.image.height*ge),Ye=ae!==null?ae.x:0,Qe=ae!==null?ae.y:0;Be.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,me,0,0,Ye,Qe,ce,Ge),Q.unbindTexture()};const Hr=G.createFramebuffer(),un=G.createFramebuffer();this.copyTextureToTexture=function(N,ae,me=null,ge=null,ce=0,Ge=null){Ge===null&&(ce!==0?(_o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ge=ce,ce=0):Ge=0);let Ye,Qe,Ze,at,ct,ot,Tt,Pt,Gt;const Ht=N.isCompressedTexture?N.mipmaps[Ge]:N.image;if(me!==null)Ye=me.max.x-me.min.x,Qe=me.max.y-me.min.y,Ze=me.isBox3?me.max.z-me.min.z:1,at=me.min.x,ct=me.min.y,ot=me.isBox3?me.min.z:0;else{const Pn=Math.pow(2,-ce);Ye=Math.floor(Ht.width*Pn),Qe=Math.floor(Ht.height*Pn),N.isDataArrayTexture?Ze=Ht.depth:N.isData3DTexture?Ze=Math.floor(Ht.depth*Pn):Ze=1,at=0,ct=0,ot=0}ge!==null?(Tt=ge.x,Pt=ge.y,Gt=ge.z):(Tt=0,Pt=0,Gt=0);const Ot=ke.convert(ae.format),st=ke.convert(ae.type);let Bt;ae.isData3DTexture?(Be.setTexture3D(ae,0),Bt=G.TEXTURE_3D):ae.isDataArrayTexture||ae.isCompressedArrayTexture?(Be.setTexture2DArray(ae,0),Bt=G.TEXTURE_2D_ARRAY):(Be.setTexture2D(ae,0),Bt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,ae.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,ae.unpackAlignment);const St=G.getParameter(G.UNPACK_ROW_LENGTH),Tn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qi=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),Wr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,at),G.pixelStorei(G.UNPACK_SKIP_ROWS,ct),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ot);const zt=N.isDataArrayTexture||N.isData3DTexture,xn=ae.isDataArrayTexture||ae.isData3DTexture;if(N.isDepthTexture){const Pn=Se.get(N),dn=Se.get(ae),vn=Se.get(Pn.__renderTarget),Hs=Se.get(dn.__renderTarget);Q.bindFramebuffer(G.READ_FRAMEBUFFER,vn.__webglFramebuffer),Q.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Di=0;Di<Ze;Di++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,ce,ot+Di),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Se.get(ae).__webglTexture,Ge,Gt+Di)),G.blitFramebuffer(at,ct,Ye,Qe,Tt,Pt,Ye,Qe,G.DEPTH_BUFFER_BIT,G.NEAREST);Q.bindFramebuffer(G.READ_FRAMEBUFFER,null),Q.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ce!==0||N.isRenderTargetTexture||Se.has(N)){const Pn=Se.get(N),dn=Se.get(ae);Q.bindFramebuffer(G.READ_FRAMEBUFFER,Hr),Q.bindFramebuffer(G.DRAW_FRAMEBUFFER,un);for(let vn=0;vn<Ze;vn++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pn.__webglTexture,ce,ot+vn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pn.__webglTexture,ce),xn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Ge,Gt+vn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Ge),ce!==0?G.blitFramebuffer(at,ct,Ye,Qe,Tt,Pt,Ye,Qe,G.COLOR_BUFFER_BIT,G.NEAREST):xn?G.copyTexSubImage3D(Bt,Ge,Tt,Pt,Gt+vn,at,ct,Ye,Qe):G.copyTexSubImage2D(Bt,Ge,Tt,Pt,at,ct,Ye,Qe);Q.bindFramebuffer(G.READ_FRAMEBUFFER,null),Q.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else xn?N.isDataTexture||N.isData3DTexture?G.texSubImage3D(Bt,Ge,Tt,Pt,Gt,Ye,Qe,Ze,Ot,st,Ht.data):ae.isCompressedArrayTexture?G.compressedTexSubImage3D(Bt,Ge,Tt,Pt,Gt,Ye,Qe,Ze,Ot,Ht.data):G.texSubImage3D(Bt,Ge,Tt,Pt,Gt,Ye,Qe,Ze,Ot,st,Ht):N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ge,Tt,Pt,Ye,Qe,Ot,st,Ht.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ge,Tt,Pt,Ht.width,Ht.height,Ot,Ht.data):G.texSubImage2D(G.TEXTURE_2D,Ge,Tt,Pt,Ye,Qe,Ot,st,Ht);G.pixelStorei(G.UNPACK_ROW_LENGTH,St),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qi),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wr),Ge===0&&ae.generateMipmaps&&G.generateMipmap(Bt),Q.unbindTexture()},this.initRenderTarget=function(N){Se.get(N).__webglFramebuffer===void 0&&Be.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Be.setTextureCube(N,0):N.isData3DTexture?Be.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Be.setTexture2DArray(N,0):Be.setTexture2D(N,0),Q.unbindTexture()},this.resetState=function(){U=0,E=0,S=null,Q.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const Bu={type:"change"},oc={type:"start"},Vd={type:"end"},ls=new Ro,zu=new Ci,F_=Math.cos(70*yn.DEG2RAD),$t=new q,_n=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class U_ extends Ym{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Dn,this._lastTargetPosition=new q,this._quat=new Dn().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pu,this._sphericalDelta=new pu,this._scale=1,this._panOffset=new q,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new q,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B_.bind(this),this._onPointerDown=k_.bind(this),this._onPointerUp=z_.bind(this),this._onContextMenu=K_.bind(this),this._onMouseWheel=H_.bind(this),this._onKeyDown=W_.bind(this),this._onTouchStart=X_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=G_.bind(this),this._interceptControlDown=Y_.bind(this),this._interceptControlUp=q_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bu),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=$t.length();s=this._clampDistance(a*this._scale);const c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ls.origin.copy(this.object.position),ls.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ls.direction))<F_?this.object.lookAt(this.target):(zu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ls.intersectPlane(zu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Bu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$t.copy(r).sub(this.target);let o=$t.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function k_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function B_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function z_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function V_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case Tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case Tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(oc)}function G_(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function H_(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(oc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vd))}function W_(n){this.enabled!==!1&&this._handleKeyDown(n)}function X_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(oc)}function j_(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function K_(n){this.enabled!==!1&&n.preventDefault()}function Y_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pa=new WeakMap;class $_ extends Rn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const o=new Fr(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,s=>{this.parse(s,t,r)},i,r)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,Rt,i).catch(i)}decodeDracoFile(e,t,i,r,o=cn,s=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:o};return this.decodeGeometry(e,a).then(t).catch(s)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Pa.has(e)){const c=Pa.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const o=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(o,s).then(c=>(r=c,new Promise((l,u)=>{r._callbacks[o]={resolve:l,reject:u},r.postMessage({type:"decode",id:o,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{r&&o&&this._releaseTask(r,o)}),Pa.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Wt;e.index&&t.setIndex(new jt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:r,array:o,itemSize:s,stride:a,vertexColorSpace:c}=e.attributes[i];let l;if(s===a)l=new jt(o,s);else{const u=new Ed(o,a);l=new Ps(u,s,0)}r==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Rt)return;const i=new rt;for(let r=0,o=e.count;r<o;r++)i.fromBufferAttribute(e,r),_t.colorSpaceToWorking(i,Rt),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Fr(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,o)=>{i.load(e,r,void 0,o)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const o=Z_.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(o){const s=o.data;switch(s.type){case"decode":r._callbacks[s.id].resolve(s);break;case"error":r._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,o){return r._taskLoad>o._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Z_(){let n,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(n)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const d=u.draco,p=new d.Decoder;try{const m=t(d,p,new Int8Array(c),l),g=m.attributes.map(v=>v.array.buffer);m.index&&g.push(m.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:m},g)}catch(m){console.error(m),self.postMessage({type:"error",id:a.id,error:m.message})}finally{d.destroy(p)}});break}};function t(s,a,c,l){const u=l.attributeIDs,d=l.attributeTypes;let p,m;const g=a.GetEncodedGeometryType(c);if(g===s.TRIANGULAR_MESH)p=new s.Mesh,m=a.DecodeArrayToMesh(c,c.byteLength,p);else if(g===s.POINT_CLOUD)p=new s.PointCloud,m=a.DecodeArrayToPointCloud(c,c.byteLength,p);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||p.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const v={index:null,attributes:[]};for(const f in u){const h=self[d[f]];let _,b;if(l.useUniqueIDs)b=u[f],_=a.GetAttributeByUniqueId(p,b);else{if(b=a.GetAttributeId(p,s[u[f]]),b===-1)continue;_=a.GetAttribute(p,b)}const y=r(s,a,p,f,h,_);f==="color"&&(y.vertexColorSpace=l.vertexColorSpace),v.attributes.push(y)}return g===s.TRIANGULAR_MESH&&(v.index=i(s,a,p)),s.destroy(p),v}function i(s,a,c){const u=c.num_faces()*3,d=u*4,p=s._malloc(d);a.GetTrianglesUInt32Array(c,d,p);const m=new Uint32Array(s.HEAPF32.buffer,p,u).slice();return s._free(p),{array:m,itemSize:1}}function r(s,a,c,l,u,d){const p=c.num_points(),m=d.num_components(),g=o(s,u),v=m*u.BYTES_PER_ELEMENT,f=Math.ceil(v/4)*4,h=f/u.BYTES_PER_ELEMENT,_=p*v,b=p*f,y=s._malloc(_);a.GetAttributeDataArrayForAllPoints(c,d,g,_,y);const R=new u(s.HEAPF32.buffer,y,_/u.BYTES_PER_ELEMENT);let M;if(v===f)M=R.slice();else{M=new u(b/u.BYTES_PER_ELEMENT);let C=0;for(let U=0,E=R.length;U<E;U++){for(let S=0;S<m;S++)M[C+S]=R[U*m+S];C+=h}}return s._free(y),{name:l,count:p,itemSize:m,array:M,stride:h}}function o(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}function Vu(n,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Tl||e===dd){let t=n.getIndex();if(t===null){const s=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)s.push(c);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Tl)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class J_ extends Rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new xy(t)})}load(e,t,i,r){const o=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=Mr.extractUrlBase(e);s=Mr.resolveURL(l,this.path)}else s=Mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),o.manager.itemError(e),o.manager.itemEnd(e)},c=new Fr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{o.parse(l,s,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let o;const s={},a={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gd){try{s[bt.KHR_BINARY_GLTF]=new vy(e)}catch(d){r&&r(d);return}o=JSON.parse(s[bt.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ly(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,s[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],p=o.extensionsRequired||[];switch(d){case bt.KHR_MATERIALS_UNLIT:s[d]=new ty;break;case bt.KHR_DRACO_MESH_COMPRESSION:s[d]=new _y(o,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:s[d]=new yy;break;case bt.KHR_MESH_QUANTIZATION:s[d]=new by;break;default:p.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,o){i.parse(e,t,r,o)})}}function Q_(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ey{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let l;const u=new rt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],cn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ms(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Om(u),l.distance=d;break;case"spot":l=new Im(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,o=i.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class ty{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,i){const r=[];e.color=new rt(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const s=o.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],cn),e.opacity=s[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,Rt))}return Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class iy{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(a,a)}return Promise.all(o)}}class ry{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class oy{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(o)}}class sy{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Rt)),s.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(o)}}class ay{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(o)}}class ly{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(a[0],a[1],a[2],cn),Promise.all(o)}}class cy{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class uy{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(a[0],a[1],a[2],cn),s.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Rt)),Promise.all(o)}}class dy{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(o)}}class hy{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(o)}}class fy{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,s)}}class py{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,s.source,c)}}class my{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,s.source,c)}}class gy{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,p=new Uint8Array(a,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,p,r.mode,r.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(m),u,d,p,r.mode,r.filter),m})})}else return null}}class xy{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],c={};for(const l in s)a.push(this.parser.getDependency("accessor",s[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],p=l[0].count,m=[];for(const g of d){const v=new gt,f=new q,h=new Dn,_=new q(1,1,1),b=new jp(g.geometry,g.material,p);for(let y=0;y<p;y++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&h.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(f,h,_));for(const y in c)if(y==="_COLOR_0"){const R=c[y];b.instanceColor=new Sl(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Ft.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),m.push(b)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Gd="glTF",eo=12,Gu={JSON:1313821514,BIN:5130562};class vy{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,eo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-eo,o=new DataView(e,eo);let s=0;for(;s<r;){const a=o.getUint32(s,!0);s+=4;const c=o.getUint32(s,!0);if(s+=4,c===Gu.JSON){const l=new Uint8Array(e,eo+s,a);this.content=i.decode(l)}else if(c===Gu.BIN){const l=eo+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _y{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},c={},l={};for(const u in s){const d=Cl[u]||u.toLowerCase();a[d]=s[u]}for(const u in e.attributes){const d=Cl[u]||u.toLowerCase();if(s[u]!==void 0){const p=i.accessors[e.attributes[u]],m=Ar[p.componentType];l[d]=m.name,c[d]=p.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,p){r.decodeDracoFile(u,function(m){for(const g in m.attributes){const v=m.attributes[g],f=c[g];f!==void 0&&(v.normalized=f)}d(m)},a,l,cn,p)})})}}class yy{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class by{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class Hd extends Co{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[o+s];return t}interpolate_(e,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,p=d*d,m=p*d,g=e*l,v=g-l,f=-2*m+3*p,h=m-p,_=1-f,b=h-p+d;for(let y=0;y!==a;y++){const R=s[v+y+a],M=s[v+y+c]*u,C=s[g+y+a],U=s[g+y]*u;o[y]=_*R+b*M+f*C+h*U}return o}}const Ty=new Dn;class Ey extends Hd{interpolate_(e,t,i,r){const o=super.interpolate_(e,t,i,r);return Ty.fromArray(o).normalize().toArray(o),o}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hu={9728:gn,9729:mn,9984:rd,9985:us,9986:to,9987:xi},Wu={33071:bn,33648:_s,10497:jn},La={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sy={CUBICSPLINE:void 0,LINEAR:xo,STEP:go},Ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function My(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function Xi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ei(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ay(n,e,t){let i=!1,r=!1,o=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(n);const s=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const p=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;s.push(p)}if(r){const p=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(p)}if(o){const p=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(p)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],p=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),o&&(n.morphAttributes.color=p),n.morphTargetsRelative=!0,n})}function Ry(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wy(n){let e;const t=n.extensions&&n.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Na(t.attributes):e=n.indices+":"+Na(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Na(n.targets[i]);return e}function Na(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Pl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cy(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Py=new gt;class Ly{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Q_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,s=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,o=a.indexOf("Firefox")>-1,s=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&s<98?this.textureLoader=new Dd(this.options.manager):this.textureLoader=new Um(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};return Xi(o,a,r),ei(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const s=t[r].joints;for(let a=0,c=s.length;a<c;a++)e[s[a]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),o=(s,a)=>{const c=this.associations.get(s);c!=null&&this.associations.set(a,c);for(const[l,u]of s.children.entries())o(u,a.children[l])};return o(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,s){i.load(Mr.resolveURL(t.uri,r.path),o,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=La[r.type],a=Ar[r.componentType],c=r.normalized===!0,l=new a(r.count*s);return Promise.resolve(new jt(l,s,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(s){const a=s[0],c=La[r.type],l=Ar[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,p=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,f;if(m&&m!==d){const h=Math.floor(p/m),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let b=t.cache.get(_);b||(v=new l(a,h*m,r.count*m/u),b=new Ed(v,m/u),t.cache.add(_,b)),f=new Ps(b,c,p%m/u,g)}else a===null?v=new l(r.count*c):v=new l(a,p,r.count*c),f=new jt(v,c,g);if(r.sparse!==void 0){const h=La.SCALAR,_=Ar[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,R=new _(s[1],b,r.sparse.count*h),M=new l(s[2],y,r.sparse.count*c);a!==null&&(f=new jt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let C=0,U=R.length;C<U;C++){const E=R[C];if(f.setX(E,M[C*c]),c>=2&&f.setY(E,M[C*c+1]),c>=3&&f.setZ(E,M[C*c+2]),c>=4&&f.setW(E,M[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=g}return f})}loadTexture(e){const t=this.json,i=this.options,o=t.textures[e].source,s=t.images[o];let a=this.textureLoader;if(s.uri){const c=i.manager.getHandler(s.uri);c!==null&&(a=c)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,i){const r=this,o=this.json,s=o.textures[e],a=o.images[t],c=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const p=(o.samplers||{})[s.sampler]||{};return u.magFilter=Hu[p.magFilter]||mn,u.minFilter=Hu[p.minFilter]||xi,u.wrapS=Wu[p.wrapS]||jn,u.wrapT=Wu[p.wrapT]||jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==mn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=r.images[e],a=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(d){l=!0;const p=new Blob([d],{type:s.mimeType});return c=a.createObjectURL(p),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(p,m){let g=p;t.isImageBitmapLoader===!0&&(g=function(v){const f=new rn(v);f.needsUpdate=!0,p(f)}),t.load(Mr.resolveURL(d,o.path),g,void 0,m)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),ei(d,s),d.userData.mimeType=s.mimeType||Cy(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),o.extensions[bt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=o.associations.get(s);s=o.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),o.associations.set(s,c)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Jl,Zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new $l,Zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||o||s){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),o&&(c.vertexColors=!0),s&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Ns}loadMaterial(e){const t=this,i=this.json,r=this.extensions,o=i.materials[e];let s;const a={},c=o.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){const d=r[bt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),l.push(d.extendParams(a,o,t))}else{const d=o.pbrMetallicRoughness||{};if(a.color=new rt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const p=d.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],cn),a.opacity=p[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Rt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=Nn);const u=o.alphaMode||Ia.OPAQUE;if(u===Ia.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ia.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&s!==Yn&&(l.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new tt(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;a.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&s!==Yn&&(l.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&s!==Yn){const d=o.emissiveFactor;a.emissive=new rt().setRGB(d[0],d[1],d[2],cn)}return o.emissiveTexture!==void 0&&s!==Yn&&l.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Rt)),Promise.all(l).then(function(){const d=new s(a);return o.name&&(d.name=o.name),ei(d,o),t.associations.set(d,{materials:e}),o.extensions&&Xi(r,d,o),d})}createUniqueName(e){const t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function o(a){return i[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Xu(c,a,t)})}const s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=wy(l),d=r[u];if(d)s.push(d.promise);else{let p;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?p=o(l):p=Xu(new Wt,l,t),r[u]={primitive:l,promise:p},s.push(p)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,o=i.meshes[e],s=o.primitives,a=[];for(let c=0,l=s.length;c<l;c++){const u=s[c].material===void 0?My(this.cache):this.getDependency("material",s[c].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let m=0,g=u.length;m<g;m++){const v=u[m],f=s[m];let h;const _=l[m];if(f.mode===In.TRIANGLES||f.mode===In.TRIANGLE_STRIP||f.mode===In.TRIANGLE_FAN||f.mode===void 0)h=o.isSkinnedMesh===!0?new Hp(v,_):new on(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),f.mode===In.TRIANGLE_STRIP?h.geometry=Vu(h.geometry,dd):f.mode===In.TRIANGLE_FAN&&(h.geometry=Vu(h.geometry,Tl));else if(f.mode===In.LINES)h=new Md(v,_);else if(f.mode===In.LINE_STRIP)h=new Zl(v,_);else if(f.mode===In.LINE_LOOP)h=new $p(v,_);else if(f.mode===In.POINTS)h=new Ad(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(h.geometry.morphAttributes).length>0&&Ry(h,o),h.name=t.createUniqueName(o.name||"mesh_"+e),ei(h,o),f.extensions&&Xi(r,h,f),t.assignFinalMaterial(h),d.push(h)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return o.extensions&&Xi(r,d[0],o),d[0];const p=new qn;o.extensions&&Xi(r,p,o),t.associations.set(p,{meshes:e});for(let m=0,g=d.length;m<g;m++)p.add(d[m]);return p})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new pn(yn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new nc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ei(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),s=r,a=[],c=[];for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d){a.push(d);const p=new gt;o!==null&&p.fromArray(o.array,l*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yl(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,s=[],a=[],c=[],l=[],u=[];for(let d=0,p=r.channels.length;d<p;d++){const m=r.channels[d],g=r.samplers[m.sampler],v=m.target,f=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(s.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",h)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(v))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const p=d[0],m=d[1],g=d[2],v=d[3],f=d[4],h=[];for(let b=0,y=p.length;b<y;b++){const R=p[b],M=m[b],C=g[b],U=v[b],E=f[b];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const S=i._createAnimationTracks(R,M,C,U,E);if(S)for(let w=0;w<S.length;w++)h.push(S[w])}const _=new Sm(o,void 0,h);return ei(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const s=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),s})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],o=i._loadNodeShallow(e),s=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)s.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(s),c]).then(function(l){const u=l[0],d=l[1],p=l[2];p!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(p,Py)});for(let m=0,g=d.length;m<g;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],s=o.name?r.createUniqueName(o.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),o.camera!==void 0&&a.push(r.getDependency("camera",o.camera).then(function(l){return r._getNodeRef(r.cameraCache,o.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(o.isBone===!0?u=new Sd:l.length>1?u=new qn:l.length===1?u=l[0]:u=new Ft,u!==l[0])for(let d=0,p=l.length;d<p;d++)u.add(l[d]);if(o.name&&(u.userData.name=o.name,u.name=s),ei(u,o),o.extensions&&Xi(i,u,o),o.matrix!==void 0){const d=new gt;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,o=new qn;i.name&&(o.name=r.createUniqueName(i.name)),ei(o,i),i.extensions&&Xi(t,o,i);const s=i.nodes||[],a=[];for(let c=0,l=s.length;c<l;c++)a.push(r.getDependency("node",s[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)o.add(c[u]);const l=u=>{const d=new Map;for(const[p,m]of r.associations)(p instanceof Zn||p instanceof rn)&&d.set(p,m);return u.traverse(p=>{const m=r.associations.get(p);m!=null&&d.set(p,m)}),d};return r.associations=l(o),o})}_createAnimationTracks(e,t,i,r,o){const s=[],a=e.name?e.name:e.uuid,c=[];wi[o.path]===wi.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(a);let l;switch(wi[o.path]){case wi.weights:l=Nr;break;case wi.rotation:l=Or;break;case wi.translation:case wi.scale:l=Dr;break;default:switch(i.itemSize){case 1:l=Nr;break;case 2:case 3:default:l=Dr;break}break}const u=r.interpolation!==void 0?Sy[r.interpolation]:xo,d=this._getArrayFromAccessor(i);for(let p=0,m=c.length;p<m;p++){const g=new l(c[p]+"."+wi[o.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Pl(t.constructor),r=new Float32Array(t.length);for(let o=0,s=t.length;o<s;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Or?Ey:Hd;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Iy(n,e,t){const i=e.attributes,r=new On;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),a.normalized){const u=Pl(Ar[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new q,c=new q;for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d.POSITION!==void 0){const p=t.json.accessors[d.POSITION],m=p.min,g=p.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),p.normalized){const v=Pl(Ar[p.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const s=new oi;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=s}function Xu(n,e,t){const i=e.attributes,r=[];function o(s,a){return t.getDependency("accessor",s).then(function(c){n.setAttribute(a,c)})}for(const s in i){const a=Cl[s]||s.toLowerCase();a in n.attributes||r.push(o(i[s],a))}if(e.indices!==void 0&&!n.index){const s=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(s)}return _t.workingColorSpace!==cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),ei(n,e),Iy(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ay(n,e.targets,t):n})}class Ny extends Rn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=new Fr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(o.parse(a))}catch(c){r?r(c):console.error(c),o.manager.itemError(e)}},i,r)}parse(e){function t(l){const u=new DataView(l),d=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*d===u.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,u,v))return!1;return!0}function i(l,u,d){for(let p=0,m=l.length;p<m;p++)if(l[p]!==u.getUint8(d+p))return!1;return!0}function r(l){const u=new DataView(l),d=u.getUint32(80,!0);let p,m,g,v=!1,f,h,_,b,y;for(let w=0;w<70;w++)u.getUint32(w,!1)==1129270351&&u.getUint8(w+4)==82&&u.getUint8(w+5)==61&&(v=!0,f=new Float32Array(d*3*3),h=u.getUint8(w+6)/255,_=u.getUint8(w+7)/255,b=u.getUint8(w+8)/255,y=u.getUint8(w+9)/255);const R=84,M=12*4+2,C=new Wt,U=new Float32Array(d*3*3),E=new Float32Array(d*3*3),S=new rt;for(let w=0;w<d;w++){const P=R+w*M,L=u.getFloat32(P,!0),O=u.getFloat32(P+4,!0),V=u.getFloat32(P+8,!0);if(v){const H=u.getUint16(P+48,!0);H&32768?(p=h,m=_,g=b):(p=(H&31)/31,m=(H>>5&31)/31,g=(H>>10&31)/31)}for(let H=1;H<=3;H++){const $=P+H*12,W=w*3*3+(H-1)*3;U[W]=u.getFloat32($,!0),U[W+1]=u.getFloat32($+4,!0),U[W+2]=u.getFloat32($+8,!0),E[W]=L,E[W+1]=O,E[W+2]=V,v&&(S.setRGB(p,m,g,Rt),f[W]=S.r,f[W+1]=S.g,f[W+2]=S.b)}}return C.setAttribute("position",new jt(U,3)),C.setAttribute("normal",new jt(E,3)),v&&(C.setAttribute("color",new jt(f,3)),C.hasColors=!0,C.alpha=y),C}function o(l){const u=new Wt,d=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,f=new RegExp("vertex"+v+v+v,"g"),h=new RegExp("normal"+v+v+v,"g"),_=[],b=[],y=[],R=new q;let M,C=0,U=0,E=0;for(;(M=d.exec(l))!==null;){U=E;const S=M[0],w=(M=m.exec(S))!==null?M[1]:"";for(y.push(w);(M=p.exec(S))!==null;){let O=0,V=0;const H=M[0];for(;(M=h.exec(H))!==null;)R.x=parseFloat(M[1]),R.y=parseFloat(M[2]),R.z=parseFloat(M[3]),V++;for(;(M=f.exec(H))!==null;)_.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),b.push(R.x,R.y,R.z),O++,E++;V!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const P=U,L=E-U;u.userData.groupNames=y,u.addGroup(P,L,C),C++}return u.setAttribute("position",new vt(_,3)),u.setAttribute("normal",new vt(b,3)),u}function s(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?r(c):o(s(e))}}/*! chevrotain - v9.0.1 */var dt=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Wd=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),At=dt((n,e)=>{var t=n&&n.__spreadArray||function(Z,pe){for(var Q=0,Te=pe.length,Se=Z.length;Q<Te;Q++,Se++)Z[Se]=pe[Q];return Z};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i(Z){return Z&&Z.length===0}n.isEmpty=i;function r(Z){return Z==null?[]:Object.keys(Z)}n.keys=r;function o(Z){for(var pe=[],Q=Object.keys(Z),Te=0;Te<Q.length;Te++)pe.push(Z[Q[Te]]);return pe}n.values=o;function s(Z,pe){for(var Q=[],Te=r(Z),Se=0;Se<Te.length;Se++){var Be=Te[Se];Q.push(pe.call(null,Z[Be],Be))}return Q}n.mapValues=s;function a(Z,pe){for(var Q=[],Te=0;Te<Z.length;Te++)Q.push(pe.call(null,Z[Te],Te));return Q}n.map=a;function c(Z){for(var pe=[],Q=0;Q<Z.length;Q++){var Te=Z[Q];Array.isArray(Te)?pe=pe.concat(c(Te)):pe.push(Te)}return pe}n.flatten=c;function l(Z){return i(Z)?void 0:Z[0]}n.first=l;function u(Z){var pe=Z&&Z.length;return pe?Z[pe-1]:void 0}n.last=u;function d(Z,pe){if(Array.isArray(Z))for(var Q=0;Q<Z.length;Q++)pe.call(null,Z[Q],Q);else if(H(Z))for(var Te=r(Z),Q=0;Q<Te.length;Q++){var Se=Te[Q],Be=Z[Se];pe.call(null,Be,Se)}else throw Error("non exhaustive match")}n.forEach=d;function p(Z){return typeof Z=="string"}n.isString=p;function m(Z){return Z===void 0}n.isUndefined=m;function g(Z){return Z instanceof Function}n.isFunction=g;function v(Z,pe){return pe===void 0&&(pe=1),Z.slice(pe,Z.length)}n.drop=v;function f(Z,pe){return pe===void 0&&(pe=1),Z.slice(0,Z.length-pe)}n.dropRight=f;function h(Z,pe){var Q=[];if(Array.isArray(Z))for(var Te=0;Te<Z.length;Te++){var Se=Z[Te];pe.call(null,Se)&&Q.push(Se)}return Q}n.filter=h;function _(Z,pe){return h(Z,function(Q){return!pe(Q)})}n.reject=_;function b(Z,pe){for(var Q=Object.keys(Z),Te={},Se=0;Se<Q.length;Se++){var Be=Q[Se],T=Z[Be];pe(T)&&(Te[Be]=T)}return Te}n.pick=b;function y(Z,pe){return H(Z)?Z.hasOwnProperty(pe):!1}n.has=y;function R(Z,pe){return U(Z,function(Q){return Q===pe})!==void 0}n.contains=R;function M(Z){for(var pe=[],Q=0;Q<Z.length;Q++)pe.push(Z[Q]);return pe}n.cloneArr=M;function C(Z){var pe={};for(var Q in Z)Object.prototype.hasOwnProperty.call(Z,Q)&&(pe[Q]=Z[Q]);return pe}n.cloneObj=C;function U(Z,pe){for(var Q=0;Q<Z.length;Q++){var Te=Z[Q];if(pe.call(null,Te))return Te}}n.find=U;function E(Z,pe){for(var Q=[],Te=0;Te<Z.length;Te++){var Se=Z[Te];pe.call(null,Se)&&Q.push(Se)}return Q}n.findAll=E;function S(Z,pe,Q){for(var Te=Array.isArray(Z),Se=Te?Z:o(Z),Be=Te?[]:r(Z),T=Q,x=0;x<Se.length;x++)T=pe.call(null,T,Se[x],Te?x:Be[x]);return T}n.reduce=S;function w(Z){return _(Z,function(pe){return pe==null})}n.compact=w;function P(Z,pe){pe===void 0&&(pe=function(Te){return Te});var Q=[];return S(Z,function(Te,Se){var Be=pe(Se);return R(Q,Be)?Te:(Q.push(Be),Te.concat(Se))},[])}n.uniq=P;function L(Z){for(var pe=[],Q=1;Q<arguments.length;Q++)pe[Q-1]=arguments[Q];var Te=[null],Se=Te.concat(pe);return Function.bind.apply(Z,Se)}n.partial=L;function O(Z){return Array.isArray(Z)}n.isArray=O;function V(Z){return Z instanceof RegExp}n.isRegExp=V;function H(Z){return Z instanceof Object}n.isObject=H;function $(Z,pe){for(var Q=0;Q<Z.length;Q++)if(!pe(Z[Q],Q))return!1;return!0}n.every=$;function W(Z,pe){return _(Z,function(Q){return R(pe,Q)})}n.difference=W;function te(Z,pe){for(var Q=0;Q<Z.length;Q++)if(pe(Z[Q]))return!0;return!1}n.some=te;function ue(Z,pe){for(var Q=0;Q<Z.length;Q++)if(Z[Q]===pe)return Q;return-1}n.indexOf=ue;function _e(Z,pe){var Q=M(Z);return Q.sort(function(Te,Se){return pe(Te)-pe(Se)}),Q}n.sortBy=_e;function re(Z,pe){if(Z.length!==pe.length)throw Error("can't zipObject with different number of keys and values!");for(var Q={},Te=0;Te<Z.length;Te++)Q[Z[Te]]=pe[Te];return Q}n.zipObject=re;function ne(Z){for(var pe=[],Q=1;Q<arguments.length;Q++)pe[Q-1]=arguments[Q];for(var Te=0;Te<pe.length;Te++)for(var Se=pe[Te],Be=r(Se),T=0;T<Be.length;T++){var x=Be[T];Z[x]=Se[x]}return Z}n.assign=ne;function Ce(Z){for(var pe=[],Q=1;Q<arguments.length;Q++)pe[Q-1]=arguments[Q];for(var Te=0;Te<pe.length;Te++)for(var Se=pe[Te],Be=r(Se),T=0;T<Be.length;T++){var x=Be[T];y(Z,x)||(Z[x]=Se[x])}return Z}n.assignNoOverwrite=Ce;function ee(){for(var Z=[],pe=0;pe<arguments.length;pe++)Z[pe]=arguments[pe];return Ce.apply(void 0,t([{}],Z))}n.defaults=ee;function z(Z,pe){var Q={};return d(Z,function(Te){var Se=pe(Te),Be=Q[Se];Be?Be.push(Te):Q[Se]=[Te]}),Q}n.groupBy=z;function X(Z,pe){for(var Q=C(Z),Te=r(pe),Se=0;Se<Te.length;Se++){var Be=Te[Se],T=pe[Be];Q[Be]=T}return Q}n.merge=X;function le(){}n.NOOP=le;function de(Z){return Z}n.IDENTITY=de;function xe(Z){for(var pe=[],Q=0;Q<Z.length;Q++){var Te=Z[Q];pe.push(Te!==void 0?Te:void 0)}return pe}n.packArray=xe;function Ne(Z){console&&console.error&&console.error("Error: "+Z)}n.PRINT_ERROR=Ne;function He(Z){console&&console.warn&&console.warn("Warning: "+Z)}n.PRINT_WARNING=He;function Ue(){return typeof Map=="function"}n.isES2015MapSupported=Ue;function et(Z){return Z[Z.length-1]}n.peek=et;function G(Z){var pe=new Date().getTime(),Q=Z(),Te=new Date().getTime(),Se=Te-pe;return{time:Se,value:Q}}n.timer=G;function Ke(Z){function pe(){}pe.prototype=Z;var Q=new pe;function Te(){return typeof Q.bar}return Te(),Te(),Z}n.toFastProperties=Ke}),sc=dt((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(f){this.idx=f.idx,this.input=f.input,this.groupIdx=f.groupIdx},t.prototype.pattern=function(f){this.idx=0,this.input=f,this.groupIdx=0,this.consumeChar("/");var h=this.disjunction();this.consumeChar("/");for(var _={type:"Flags",loc:{begin:this.idx,end:f.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":c(_,"global");break;case"i":c(_,"ignoreCase");break;case"m":c(_,"multiLine");break;case"u":c(_,"unicode");break;case"y":c(_,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:_,value:h,loc:this.loc(0)}},t.prototype.disjunction=function(){var f=[],h=this.idx;for(f.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),f.push(this.alternative());return{type:"Disjunction",value:f,loc:this.loc(h)}},t.prototype.alternative=function(){for(var f=[],h=this.idx;this.isTerm();)f.push(this.term());return{type:"Alternative",value:f,loc:this.loc(h)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var f=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(f)};case"$":return{type:"EndAnchor",loc:this.loc(f)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(f)};case"B":return{type:"NonWordBoundary",loc:this.loc(f)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var h;switch(this.popChar()){case"=":h="Lookahead";break;case"!":h="NegativeLookahead";break}l(h);var _=this.disjunction();return this.consumeChar(")"),{type:h,value:_,loc:this.loc(f)}}u()},t.prototype.quantifier=function(f){var h,_=this.idx;switch(this.popChar()){case"*":h={atLeast:0,atMost:1/0};break;case"+":h={atLeast:1,atMost:1/0};break;case"?":h={atLeast:0,atMost:1};break;case"{":var b=this.integerIncludingZero();switch(this.popChar()){case"}":h={atLeast:b,atMost:b};break;case",":var y;this.isDigit()?(y=this.integerIncludingZero(),h={atLeast:b,atMost:y}):h={atLeast:b,atMost:1/0},this.consumeChar("}");break}if(f===!0&&h===void 0)return;l(h);break}if(!(f===!0&&h===void 0))return l(h),this.peekChar(0)==="?"?(this.consumeChar("?"),h.greedy=!1):h.greedy=!0,h.type="Quantifier",h.loc=this.loc(_),h},t.prototype.atom=function(){var f,h=this.idx;switch(this.peekChar()){case".":f=this.dotAll();break;case"\\":f=this.atomEscape();break;case"[":f=this.characterClass();break;case"(":f=this.group();break}return f===void 0&&this.isPatternCharacter()&&(f=this.patternCharacter()),l(f),f.loc=this.loc(h),this.isQuantifier()&&(f.quantifier=this.quantifier()),f},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[s(`
`),s("\r"),s("\u2028"),s("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var f=this.positiveInteger();return{type:"GroupBackReference",value:f}},t.prototype.characterClassEscape=function(){var f,h=!1;switch(this.popChar()){case"d":f=p;break;case"D":f=p,h=!0;break;case"s":f=g;break;case"S":f=g,h=!0;break;case"w":f=m;break;case"W":f=m,h=!0;break}return l(f),{type:"Set",value:f,complement:h}},t.prototype.controlEscapeAtom=function(){var f;switch(this.popChar()){case"f":f=s("\f");break;case"n":f=s(`
`);break;case"r":f=s("\r");break;case"t":f=s("	");break;case"v":f=s("\v");break}return l(f),{type:"Character",value:f}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var f=this.popChar();if(/[a-zA-Z]/.test(f)===!1)throw Error("Invalid ");var h=f.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:h}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:s("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var f=this.popChar();return{type:"Character",value:s(f)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var f=this.popChar();return{type:"Character",value:s(f)}}},t.prototype.characterClass=function(){var f=[],h=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),h=!0);this.isClassAtom();){var _=this.classAtom(),b=_.type==="Character";if(b&&this.isRangeDash()){this.consumeChar("-");var y=this.classAtom(),R=y.type==="Character";if(R){if(y.value<_.value)throw Error("Range out of order in character class");f.push({from:_.value,to:y.value})}else a(_.value,f),f.push(s("-")),a(y.value,f)}else a(_.value,f)}return this.consumeChar("]"),{type:"Set",complement:h,value:f}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:s("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var f=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),f=!1;break;default:this.groupIdx++;break}var h=this.disjunction();this.consumeChar(")");var _={type:"Group",capturing:f,value:h};return f&&(_.idx=this.groupIdx),_},t.prototype.positiveInteger=function(){var f=this.popChar();if(o.test(f)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.integerIncludingZero=function(){var f=this.popChar();if(r.test(f)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.patternCharacter=function(){var f=this.popChar();switch(f){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:s(f)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(f){switch(f===void 0&&(f=0),this.peekChar(f)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var f=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(f)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(f){for(var h="",_=0;_<f;_++){var b=this.popChar();if(i.test(b)===!1)throw Error("Expecting a HexDecimal digits");h+=b}var y=parseInt(h,16);return{type:"Character",value:y}},t.prototype.peekChar=function(f){return f===void 0&&(f=0),this.input[this.idx+f]},t.prototype.popChar=function(){var f=this.peekChar(0);return this.consumeChar(),f},t.prototype.consumeChar=function(f){if(f!==void 0&&this.input[this.idx]!==f)throw Error("Expected: '"+f+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(f){return{begin:f,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function s(f){return f.charCodeAt(0)}function a(f,h){f.length!==void 0?f.forEach(function(_){h.push(_)}):h.push(f)}function c(f,h){if(f[h]===!0)throw"duplicate flag "+h;f[h]=!0}function l(f){if(f===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var d,p=[];for(d=s("0");d<=s("9");d++)p.push(d);var m=[s("_")].concat(p);for(d=s("a");d<=s("z");d++)m.push(d);for(d=s("A");d<=s("Z");d++)m.push(d);var g=[s(" "),s("\f"),s(`
`),s("\r"),s("	"),s("\v"),s("	"),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s("\u2028"),s("\u2029"),s(" "),s(" "),s("　"),s("\uFEFF")];function v(){}return v.prototype.visitChildren=function(f){for(var h in f){var _=f[h];f.hasOwnProperty(h)&&(_.type!==void 0?this.visit(_):Array.isArray(_)&&_.forEach(function(b){this.visit(b)},this))}},v.prototype.visit=function(f){switch(f.type){case"Pattern":this.visitPattern(f);break;case"Flags":this.visitFlags(f);break;case"Disjunction":this.visitDisjunction(f);break;case"Alternative":this.visitAlternative(f);break;case"StartAnchor":this.visitStartAnchor(f);break;case"EndAnchor":this.visitEndAnchor(f);break;case"WordBoundary":this.visitWordBoundary(f);break;case"NonWordBoundary":this.visitNonWordBoundary(f);break;case"Lookahead":this.visitLookahead(f);break;case"NegativeLookahead":this.visitNegativeLookahead(f);break;case"Character":this.visitCharacter(f);break;case"Set":this.visitSet(f);break;case"Group":this.visitGroup(f);break;case"GroupBackReference":this.visitGroupBackReference(f);break;case"Quantifier":this.visitQuantifier(f);break}this.visitChildren(f)},v.prototype.visitPattern=function(f){},v.prototype.visitFlags=function(f){},v.prototype.visitDisjunction=function(f){},v.prototype.visitAlternative=function(f){},v.prototype.visitStartAnchor=function(f){},v.prototype.visitEndAnchor=function(f){},v.prototype.visitWordBoundary=function(f){},v.prototype.visitNonWordBoundary=function(f){},v.prototype.visitLookahead=function(f){},v.prototype.visitNegativeLookahead=function(f){},v.prototype.visitCharacter=function(f){},v.prototype.visitSet=function(f){},v.prototype.visitGroup=function(f){},v.prototype.visitGroupBackReference=function(f){},v.prototype.visitQuantifier=function(f){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})}),ac=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=sc(),t={},i=new e.RegExpParser;function r(s){var a=s.toString();if(t.hasOwnProperty(a))return t[a];var c=i.pattern(a);return t[a]=c,c}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),Oy=dt(n=>{var e=n&&n.__extends||function(){var v=function(f,h){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,b){_.__proto__=b}||function(_,b){for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(_[y]=b[y])},v(f,h)};return function(f,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");v(f,h);function _(){this.constructor=f}f.prototype=h===null?Object.create(h):(_.prototype=h.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=sc(),i=At(),r=ac(),o=Xd(),s="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function a(v,f){f===void 0&&(f=!1);try{var h=r.getRegExpAst(v),_=c(h.value,{},h.flags.ignoreCase);return _}catch(y){if(y.message===s)f&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+v.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var b="";f&&(b=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+v.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+b)}}return[]}n.getOptimizedStartCodesIndices=a;function c(v,f,h){switch(v.type){case"Disjunction":for(var _=0;_<v.value.length;_++)c(v.value[_],f,h);break;case"Alternative":for(var b=v.value,_=0;_<b.length;_++){var y=b[_];switch(y.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var R=y;switch(R.type){case"Character":l(R.value,f,h);break;case"Set":if(R.complement===!0)throw Error(s);i.forEach(R.value,function(U){if(typeof U=="number")l(U,f,h);else{var E=U;if(h===!0)for(var S=E.from;S<=E.to;S++)l(S,f,h);else{for(var S=E.from;S<=E.to&&S<o.minOptimizationVal;S++)l(S,f,h);if(E.to>=o.minOptimizationVal)for(var w=E.from>=o.minOptimizationVal?E.from:o.minOptimizationVal,P=E.to,L=o.charCodeToOptimizedIndex(w),O=o.charCodeToOptimizedIndex(P),V=L;V<=O;V++)f[V]=V}}});break;case"Group":c(R.value,f,h);break;default:throw Error("Non Exhaustive Match")}var M=R.quantifier!==void 0&&R.quantifier.atLeast===0;if(R.type==="Group"&&p(R)===!1||R.type!=="Group"&&M===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(f)}n.firstCharOptimizedIndices=c;function l(v,f,h){var _=o.charCodeToOptimizedIndex(v);f[_]=_,h===!0&&u(v,f)}function u(v,f){var h=String.fromCharCode(v),_=h.toUpperCase();if(_!==h){var b=o.charCodeToOptimizedIndex(_.charCodeAt(0));f[b]=b}else{var y=h.toLowerCase();if(y!==h){var b=o.charCodeToOptimizedIndex(y.charCodeAt(0));f[b]=b}}}function d(v,f){return i.find(v.value,function(h){if(typeof h=="number")return i.contains(f,h);var _=h;return i.find(f,function(b){return _.from<=b&&b<=_.to})!==void 0})}function p(v){return v.quantifier&&v.quantifier.atLeast===0?!0:v.value?i.isArray(v.value)?i.every(v.value,p):p(v.value):!1}var m=function(v){e(f,v);function f(h){var _=v.call(this)||this;return _.targetCharCodes=h,_.found=!1,_}return f.prototype.visitChildren=function(h){if(this.found!==!0){switch(h.type){case"Lookahead":this.visitLookahead(h);return;case"NegativeLookahead":this.visitNegativeLookahead(h);return}v.prototype.visitChildren.call(this,h)}},f.prototype.visitCharacter=function(h){i.contains(this.targetCharCodes,h.value)&&(this.found=!0)},f.prototype.visitSet=function(h){h.complement?d(h,this.targetCharCodes)===void 0&&(this.found=!0):d(h,this.targetCharCodes)!==void 0&&(this.found=!0)},f}(t.BaseRegExpVisitor);function g(v,f){if(f instanceof RegExp){var h=r.getRegExpAst(f),_=new m(v);return _.visit(h),_.found}else return i.find(f,function(b){return i.contains(v,b.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),Xd=dt(n=>{var e=n&&n.__extends||function(){var ee=function(z,X){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(le,de){le.__proto__=de}||function(le,de){for(var xe in de)Object.prototype.hasOwnProperty.call(de,xe)&&(le[xe]=de[xe])},ee(z,X)};return function(z,X){if(typeof X!="function"&&X!==null)throw new TypeError("Class extends value "+String(X)+" is not a constructor or null");ee(z,X);function le(){this.constructor=z}z.prototype=X===null?Object.create(X):(le.prototype=X.prototype,new le)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=sc(),i=Us(),r=At(),o=Oy(),s=ac(),a="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function c(){n.SUPPORT_STICKY=!1}n.disableSticky=c;function l(){n.SUPPORT_STICKY=!0}n.enableSticky=l;function u(ee,z){z=r.defaults(z,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(T,x){return x()}});var X=z.tracer;X("initCharCodeToOptimizedIndexMap",function(){Ce()});var le;X("Reject Lexer.NA",function(){le=r.reject(ee,function(T){return T[a]===i.Lexer.NA})});var de=!1,xe;X("Transform Patterns",function(){de=!1,xe=r.map(le,function(T){var x=T[a];if(r.isRegExp(x)){var A=x.source;return A.length===1&&A!=="^"&&A!=="$"&&A!=="."&&!x.ignoreCase?A:A.length===2&&A[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],A[1])?A[1]:z.useSticky?P(x):w(x)}else{if(r.isFunction(x))return de=!0,{exec:x};if(r.has(x,"exec"))return de=!0,x;if(typeof x=="string"){if(x.length===1)return x;var D=x.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),I=new RegExp(D);return z.useSticky?P(I):w(I)}else throw Error("non exhaustive match")}})});var Ne,He,Ue,et,G;X("misc mapping",function(){Ne=r.map(le,function(T){return T.tokenTypeIdx}),He=r.map(le,function(T){var x=T.GROUP;if(x!==i.Lexer.SKIPPED){if(r.isString(x))return x;if(r.isUndefined(x))return!1;throw Error("non exhaustive match")}}),Ue=r.map(le,function(T){var x=T.LONGER_ALT;if(x){var A=r.indexOf(le,x);return A}}),et=r.map(le,function(T){return T.PUSH_MODE}),G=r.map(le,function(T){return r.has(T,"POP_MODE")})});var Ke;X("Line Terminator Handling",function(){var T=ue(z.lineTerminatorCharacters);Ke=r.map(le,function(x){return!1}),z.positionTracking!=="onlyOffset"&&(Ke=r.map(le,function(x){if(r.has(x,"LINE_BREAKS"))return x.LINE_BREAKS;if(W(x,T)===!1)return o.canMatchCharCode(T,x.PATTERN)}))});var Z,pe,Q,Te;X("Misc Mapping #2",function(){Z=r.map(le,H),pe=r.map(xe,$),Q=r.reduce(le,function(T,x){var A=x.GROUP;return r.isString(A)&&A!==i.Lexer.SKIPPED&&(T[A]=[]),T},{}),Te=r.map(xe,function(T,x){return{pattern:xe[x],longerAlt:Ue[x],canLineTerminator:Ke[x],isCustom:Z[x],short:pe[x],group:He[x],push:et[x],pop:G[x],tokenTypeIdx:Ne[x],tokenType:le[x]}})});var Se=!0,Be=[];return z.safeMode||X("First Char Optimization",function(){Be=r.reduce(le,function(T,x,A){if(typeof x.PATTERN=="string"){var D=x.PATTERN.charCodeAt(0),I=ne(D);_e(T,I,Te[A])}else if(r.isArray(x.START_CHARS_HINT)){var F;r.forEach(x.START_CHARS_HINT,function(j){var se=typeof j=="string"?j.charCodeAt(0):j,fe=ne(se);F!==fe&&(F=fe,_e(T,fe,Te[A]))})}else if(r.isRegExp(x.PATTERN))if(x.PATTERN.unicode)Se=!1,z.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+x.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var K=o.getOptimizedStartCodesIndices(x.PATTERN,z.ensureOptimizations);r.isEmpty(K)&&(Se=!1),r.forEach(K,function(j){_e(T,j,Te[A])})}else z.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+x.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Se=!1;return T},[])}),X("ArrayPacking",function(){Be=r.packArray(Be)}),{emptyGroups:Q,patternIdxToConfig:Te,charCodeToPatternIdxToConfig:Be,hasCustom:de,canBeOptimized:Se}}n.analyzeTokenTypes=u;function d(ee,z){var X=[],le=m(ee);X=X.concat(le.errors);var de=g(le.valid),xe=de.valid;return X=X.concat(de.errors),X=X.concat(p(xe)),X=X.concat(M(xe)),X=X.concat(C(xe,z)),X=X.concat(U(xe)),X}n.validatePatterns=d;function p(ee){var z=[],X=r.filter(ee,function(le){return r.isRegExp(le[a])});return z=z.concat(f(X)),z=z.concat(b(X)),z=z.concat(y(X)),z=z.concat(R(X)),z=z.concat(h(X)),z}function m(ee){var z=r.filter(ee,function(de){return!r.has(de,a)}),X=r.map(z,function(de){return{message:"Token Type: ->"+de.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[de]}}),le=r.difference(ee,z);return{errors:X,valid:le}}n.findMissingPatterns=m;function g(ee){var z=r.filter(ee,function(de){var xe=de[a];return!r.isRegExp(xe)&&!r.isFunction(xe)&&!r.has(xe,"exec")&&!r.isString(xe)}),X=r.map(z,function(de){return{message:"Token Type: ->"+de.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[de]}}),le=r.difference(ee,z);return{errors:X,valid:le}}n.findInvalidPatterns=g;var v=/[^\\][\$]/;function f(ee){var z=function(de){e(xe,de);function xe(){var Ne=de!==null&&de.apply(this,arguments)||this;return Ne.found=!1,Ne}return xe.prototype.visitEndAnchor=function(Ne){this.found=!0},xe}(t.BaseRegExpVisitor),X=r.filter(ee,function(de){var xe=de[a];try{var Ne=s.getRegExpAst(xe),He=new z;return He.visit(Ne),He.found}catch{return v.test(xe.source)}}),le=r.map(X,function(de){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+de.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[de]}});return le}n.findEndOfInputAnchor=f;function h(ee){var z=r.filter(ee,function(le){var de=le[a];return de.test("")}),X=r.map(z,function(le){return{message:"Token Type: ->"+le.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[le]}});return X}n.findEmptyMatchRegExps=h;var _=/[^\\[][\^]|^\^/;function b(ee){var z=function(de){e(xe,de);function xe(){var Ne=de!==null&&de.apply(this,arguments)||this;return Ne.found=!1,Ne}return xe.prototype.visitStartAnchor=function(Ne){this.found=!0},xe}(t.BaseRegExpVisitor),X=r.filter(ee,function(de){var xe=de[a];try{var Ne=s.getRegExpAst(xe),He=new z;return He.visit(Ne),He.found}catch{return _.test(xe.source)}}),le=r.map(X,function(de){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+de.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[de]}});return le}n.findStartOfInputAnchor=b;function y(ee){var z=r.filter(ee,function(le){var de=le[a];return de instanceof RegExp&&(de.multiline||de.global)}),X=r.map(z,function(le){return{message:"Token Type: ->"+le.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[le]}});return X}n.findUnsupportedFlags=y;function R(ee){var z=[],X=r.map(ee,function(xe){return r.reduce(ee,function(Ne,He){return xe.PATTERN.source===He.PATTERN.source&&!r.contains(z,He)&&He.PATTERN!==i.Lexer.NA&&(z.push(He),Ne.push(He)),Ne},[])});X=r.compact(X);var le=r.filter(X,function(xe){return xe.length>1}),de=r.map(le,function(xe){var Ne=r.map(xe,function(Ue){return Ue.name}),He=r.first(xe).PATTERN;return{message:"The same RegExp pattern ->"+He+"<-"+("has been used in all of the following Token Types: "+Ne.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:xe}});return de}n.findDuplicatePatterns=R;function M(ee){var z=r.filter(ee,function(le){if(!r.has(le,"GROUP"))return!1;var de=le.GROUP;return de!==i.Lexer.SKIPPED&&de!==i.Lexer.NA&&!r.isString(de)}),X=r.map(z,function(le){return{message:"Token Type: ->"+le.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[le]}});return X}n.findInvalidGroupType=M;function C(ee,z){var X=r.filter(ee,function(de){return de.PUSH_MODE!==void 0&&!r.contains(z,de.PUSH_MODE)}),le=r.map(X,function(de){var xe="Token Type: ->"+de.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+de.PUSH_MODE+"<-which does not exist";return{message:xe,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[de]}});return le}n.findModesThatDoNotExist=C;function U(ee){var z=[],X=r.reduce(ee,function(le,de,xe){var Ne=de.PATTERN;return Ne===i.Lexer.NA||(r.isString(Ne)?le.push({str:Ne,idx:xe,tokenType:de}):r.isRegExp(Ne)&&S(Ne)&&le.push({str:Ne.source,idx:xe,tokenType:de})),le},[]);return r.forEach(ee,function(le,de){r.forEach(X,function(xe){var Ne=xe.str,He=xe.idx,Ue=xe.tokenType;if(de<He&&E(Ne,le.PATTERN)){var et="Token: ->"+Ue.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+le.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;z.push({message:et,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[le,Ue]})}})}),z}n.findUnreachablePatterns=U;function E(ee,z){if(r.isRegExp(z)){var X=z.exec(ee);return X!==null&&X.index===0}else{if(r.isFunction(z))return z(ee,0,[],{});if(r.has(z,"exec"))return z.exec(ee,0,[],{});if(typeof z=="string")return z===ee;throw Error("non exhaustive match")}}function S(ee){var z=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(z,function(X){return ee.source.indexOf(X)!==-1})===void 0}function w(ee){var z=ee.ignoreCase?"i":"";return new RegExp("^(?:"+ee.source+")",z)}n.addStartOfInput=w;function P(ee){var z=ee.ignoreCase?"iy":"y";return new RegExp(""+ee.source,z)}n.addStickyFlag=P;function L(ee,z,X){var le=[];return r.has(ee,n.DEFAULT_MODE)||le.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(ee,n.MODES)||le.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(ee,n.MODES)&&r.has(ee,n.DEFAULT_MODE)&&!r.has(ee.modes,ee.defaultMode)&&le.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+ee.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(ee,n.MODES)&&r.forEach(ee.modes,function(de,xe){r.forEach(de,function(Ne,He){r.isUndefined(Ne)&&le.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+xe+"> at index: <"+He+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),le}n.performRuntimeChecks=L;function O(ee,z,X){var le=[],de=!1,xe=r.compact(r.flatten(r.mapValues(ee.modes,function(Ue){return Ue}))),Ne=r.reject(xe,function(Ue){return Ue[a]===i.Lexer.NA}),He=ue(X);return z&&r.forEach(Ne,function(Ue){var et=W(Ue,He);if(et!==!1){var G=te(Ue,et),Ke={message:G,type:et.issue,tokenType:Ue};le.push(Ke)}else r.has(Ue,"LINE_BREAKS")?Ue.LINE_BREAKS===!0&&(de=!0):o.canMatchCharCode(He,Ue.PATTERN)&&(de=!0)}),z&&!de&&le.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),le}n.performWarningRuntimeChecks=O;function V(ee){var z={},X=r.keys(ee);return r.forEach(X,function(le){var de=ee[le];if(r.isArray(de))z[le]=[];else throw Error("non exhaustive match")}),z}n.cloneEmptyGroups=V;function H(ee){var z=ee.PATTERN;if(r.isRegExp(z))return!1;if(r.isFunction(z)||r.has(z,"exec"))return!0;if(r.isString(z))return!1;throw Error("non exhaustive match")}n.isCustomPattern=H;function $(ee){return r.isString(ee)&&ee.length===1?ee.charCodeAt(0):!1}n.isShortPattern=$,n.LineTerminatorOptimizedTester={test:function(ee){for(var z=ee.length,X=this.lastIndex;X<z;X++){var le=ee.charCodeAt(X);if(le===10)return this.lastIndex=X+1,!0;if(le===13)return ee.charCodeAt(X+1)===10?this.lastIndex=X+2:this.lastIndex=X+1,!0}return!1},lastIndex:0};function W(ee,z){if(r.has(ee,"LINE_BREAKS"))return!1;if(r.isRegExp(ee.PATTERN)){try{o.canMatchCharCode(z,ee.PATTERN)}catch(X){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:X.message}}return!1}else{if(r.isString(ee.PATTERN))return!1;if(H(ee))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function te(ee,z){if(z.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+ee.name+`> Token Type
`)+("	 Root cause: "+z.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(z.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+ee.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=te;function ue(ee){var z=r.map(ee,function(X){return r.isString(X)&&X.length>0?X.charCodeAt(0):X});return z}function _e(ee,z,X){ee[z]===void 0?ee[z]=[X]:ee[z].push(X)}n.minOptimizationVal=256;var re=[];function ne(ee){return ee<n.minOptimizationVal?ee:re[ee]}n.charCodeToOptimizedIndex=ne;function Ce(){if(r.isEmpty(re)){re=new Array(65536);for(var ee=0;ee<65536;ee++)re[ee]=ee>255?255+~~(ee/255):ee}}}),Po=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=At();function t(v,f){var h=v.tokenTypeIdx;return h===f.tokenTypeIdx?!0:f.isParent===!0&&f.categoryMatchesMap[h]===!0}n.tokenStructuredMatcher=t;function i(v,f){return v.tokenTypeIdx===f.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(v){var f=o(v);s(f),c(f),a(f),e.forEach(f,function(h){h.isParent=h.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(v){for(var f=e.cloneArr(v),h=v,_=!0;_;){h=e.compact(e.flatten(e.map(h,function(y){return y.CATEGORIES})));var b=e.difference(h,f);f=f.concat(b),e.isEmpty(b)?_=!1:h=b}return f}n.expandCategories=o;function s(v){e.forEach(v,function(f){u(f)||(n.tokenIdxToClass[n.tokenShortNameIdx]=f,f.tokenTypeIdx=n.tokenShortNameIdx++),d(f)&&!e.isArray(f.CATEGORIES)&&(f.CATEGORIES=[f.CATEGORIES]),d(f)||(f.CATEGORIES=[]),p(f)||(f.categoryMatches=[]),m(f)||(f.categoryMatchesMap={})})}n.assignTokenDefaultProps=s;function a(v){e.forEach(v,function(f){f.categoryMatches=[],e.forEach(f.categoryMatchesMap,function(h,_){f.categoryMatches.push(n.tokenIdxToClass[_].tokenTypeIdx)})})}n.assignCategoriesTokensProp=a;function c(v){e.forEach(v,function(f){l([],f)})}n.assignCategoriesMapProp=c;function l(v,f){e.forEach(v,function(h){f.categoryMatchesMap[h.tokenTypeIdx]=!0}),e.forEach(f.CATEGORIES,function(h){var _=v.concat(f);e.contains(_,h)||l(_,h)})}n.singleAssignCategoriesToksMap=l;function u(v){return e.has(v,"tokenTypeIdx")}n.hasShortKeyProperty=u;function d(v){return e.has(v,"CATEGORIES")}n.hasCategoriesProperty=d;function p(v){return e.has(v,"categoryMatches")}n.hasExtendingTokensTypesProperty=p;function m(v){return e.has(v,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=m;function g(v){return e.has(v,"tokenTypeIdx")}n.isTokenType=g}),jd=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),Us=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=Xd(),t=At(),i=Po(),r=jd(),o=ac();(function(c){c[c.MISSING_PATTERN=0]="MISSING_PATTERN",c[c.INVALID_PATTERN=1]="INVALID_PATTERN",c[c.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",c[c.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",c[c.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",c[c.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",c[c.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",c[c.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",c[c.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",c[c.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",c[c.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",c[c.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",c[c.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",c[c.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",c[c.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",c[c.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",c[c.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var s={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(s);var a=function(){function c(l,u){var d=this;if(u===void 0&&(u=s),this.lexerDefinition=l,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof u=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(s,u);var p=this.config.traceInitPerf;p===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof p=="number"&&(this.traceInitMaxIdent=p,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var m,g=!0;d.TRACE_INIT("Lexer Config handling",function(){if(d.config.lineTerminatorsPattern===s.lineTerminatorsPattern)d.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(d.config.lineTerminatorCharacters===s.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(u.safeMode&&u.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');d.trackStartLines=/full|onlyStart/i.test(d.config.positionTracking),d.trackEndLines=/full/i.test(d.config.positionTracking),t.isArray(l)?(m={modes:{}},m.modes[e.DEFAULT_MODE]=t.cloneArr(l),m[e.DEFAULT_MODE]=e.DEFAULT_MODE):(g=!1,m=t.cloneObj(l))}),d.config.skipValidations===!1&&(d.TRACE_INIT("performRuntimeChecks",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.performRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))}),d.TRACE_INIT("performWarningRuntimeChecks",function(){d.lexerDefinitionWarning=d.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))})),m.modes=m.modes?m.modes:{},t.forEach(m.modes,function(_,b){m.modes[b]=t.reject(_,function(y){return t.isUndefined(y)})});var v=t.keys(m.modes);if(t.forEach(m.modes,function(_,b){d.TRACE_INIT("Mode: <"+b+"> processing",function(){if(d.modes.push(b),d.config.skipValidations===!1&&d.TRACE_INIT("validatePatterns",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.validatePatterns(_,v))}),t.isEmpty(d.lexerDefinitionErrors)){i.augmentTokenTypes(_);var y;d.TRACE_INIT("analyzeTokenTypes",function(){y=e.analyzeTokenTypes(_,{lineTerminatorCharacters:d.config.lineTerminatorCharacters,positionTracking:u.positionTracking,ensureOptimizations:u.ensureOptimizations,safeMode:u.safeMode,tracer:d.TRACE_INIT.bind(d)})}),d.patternIdxToConfig[b]=y.patternIdxToConfig,d.charCodeToPatternIdxToConfig[b]=y.charCodeToPatternIdxToConfig,d.emptyGroups=t.merge(d.emptyGroups,y.emptyGroups),d.hasCustom=y.hasCustom||d.hasCustom,d.canModeBeOptimized[b]=y.canBeOptimized}})}),d.defaultMode=m.defaultMode,!t.isEmpty(d.lexerDefinitionErrors)&&!d.config.deferDefinitionErrorsHandling){var f=t.map(d.lexerDefinitionErrors,function(_){return _.message}),h=f.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+h)}t.forEach(d.lexerDefinitionWarning,function(_){t.PRINT_WARNING(_.message)}),d.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(d.chopInput=t.IDENTITY,d.match=d.matchWithTest):(d.updateLastIndex=t.NOOP,d.match=d.matchWithExec),g&&(d.handleModes=t.NOOP),d.trackStartLines===!1&&(d.computeNewColumn=t.IDENTITY),d.trackEndLines===!1&&(d.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(d.config.positionTracking))d.createTokenInstance=d.createFullToken;else if(/onlyStart/i.test(d.config.positionTracking))d.createTokenInstance=d.createStartOnlyToken;else if(/onlyOffset/i.test(d.config.positionTracking))d.createTokenInstance=d.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+d.config.positionTracking+'"');d.hasCustom?(d.addToken=d.addTokenUsingPush,d.handlePayload=d.handlePayloadWithCustom):(d.addToken=d.addTokenUsingMemberAccess,d.handlePayload=d.handlePayloadNoCustom)}),d.TRACE_INIT("Failed Optimization Warnings",function(){var _=t.reduce(d.canModeBeOptimized,function(b,y,R){return y===!1&&b.push(R),b},[]);if(u.ensureOptimizations&&!t.isEmpty(_))throw Error("Lexer Modes: < "+_.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),d.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),d.TRACE_INIT("toFastProperties",function(){t.toFastProperties(d)})})}return c.prototype.tokenize=function(l,u){if(u===void 0&&(u=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var d=t.map(this.lexerDefinitionErrors,function(g){return g.message}),p=d.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+p)}var m=this.tokenizeInternal(l,u);return m},c.prototype.tokenizeInternal=function(l,u){var d=this,p,m,g,v,f,h,_,b,y,R,M,C,U,E,S=l,w=S.length,P=0,L=0,O=this.hasCustom?0:Math.floor(l.length/10),V=new Array(O),H=[],$=this.trackStartLines?1:void 0,W=this.trackStartLines?1:void 0,te=e.cloneEmptyGroups(this.emptyGroups),ue=this.trackStartLines,_e=this.config.lineTerminatorsPattern,re=0,ne=[],Ce=[],ee=[],z=[];Object.freeze(z);var X=void 0;function le(){return ne}function de(F){var K=e.charCodeToOptimizedIndex(F),j=Ce[K];return j===void 0?z:j}var xe=function(F){if(ee.length===1&&F.tokenType.PUSH_MODE===void 0){var K=d.config.errorMessageProvider.buildUnableToPopLexerModeMessage(F);H.push({offset:F.startOffset,line:F.startLine!==void 0?F.startLine:void 0,column:F.startColumn!==void 0?F.startColumn:void 0,length:F.image.length,message:K})}else{ee.pop();var j=t.last(ee);ne=d.patternIdxToConfig[j],Ce=d.charCodeToPatternIdxToConfig[j],re=ne.length;var se=d.canModeBeOptimized[j]&&d.config.safeMode===!1;Ce&&se?X=de:X=le}};function Ne(F){ee.push(F),Ce=this.charCodeToPatternIdxToConfig[F],ne=this.patternIdxToConfig[F],re=ne.length,re=ne.length;var K=this.canModeBeOptimized[F]&&this.config.safeMode===!1;Ce&&K?X=de:X=le}Ne.call(this,u);for(var He;P<w;){f=null;var Ue=S.charCodeAt(P),et=X(Ue),G=et.length;for(p=0;p<G;p++){He=et[p];var Ke=He.pattern;h=null;var Z=He.short;if(Z!==!1?Ue===Z&&(f=Ke):He.isCustom===!0?(E=Ke.exec(S,P,V,te),E!==null?(f=E[0],E.payload!==void 0&&(h=E.payload)):f=null):(this.updateLastIndex(Ke,P),f=this.match(Ke,l,P)),f!==null){if(v=He.longerAlt,v!==void 0){var pe=ne[v],Q=pe.pattern;_=null,pe.isCustom===!0?(E=Q.exec(S,P,V,te),E!==null?(g=E[0],E.payload!==void 0&&(_=E.payload)):g=null):(this.updateLastIndex(Q,P),g=this.match(Q,l,P)),g&&g.length>f.length&&(f=g,h=_,He=pe)}break}}if(f!==null){if(b=f.length,y=He.group,y!==void 0&&(R=He.tokenTypeIdx,M=this.createTokenInstance(f,P,R,He.tokenType,$,W,b),this.handlePayload(M,h),y===!1?L=this.addToken(V,L,M):te[y].push(M)),l=this.chopInput(l,b),P=P+b,W=this.computeNewColumn(W,b),ue===!0&&He.canLineTerminator===!0){var Te=0,Se=void 0,Be=void 0;_e.lastIndex=0;do Se=_e.test(f),Se===!0&&(Be=_e.lastIndex-1,Te++);while(Se===!0);Te!==0&&($=$+Te,W=b-Be,this.updateTokenEndLineColumnLocation(M,y,Be,Te,$,W,b))}this.handleModes(He,xe,Ne,M)}else{for(var T=P,x=$,A=W,D=!1;!D&&P<w;)for(S.charCodeAt(P),l=this.chopInput(l,1),P++,m=0;m<re;m++){var I=ne[m],Ke=I.pattern,Z=I.short;if(Z!==!1?S.charCodeAt(P)===Z&&(D=!0):I.isCustom===!0?D=Ke.exec(S,P,V,te)!==null:(this.updateLastIndex(Ke,P),D=Ke.exec(l)!==null),D===!0)break}C=P-T,U=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(S,T,C,x,A),H.push({offset:T,line:x,column:A,length:C,message:U})}}return this.hasCustom||(V.length=L),{tokens:V,groups:te,errors:H}},c.prototype.handleModes=function(l,u,d,p){if(l.pop===!0){var m=l.push;u(p),m!==void 0&&d.call(this,m)}else l.push!==void 0&&d.call(this,l.push)},c.prototype.chopInput=function(l,u){return l.substring(u)},c.prototype.updateLastIndex=function(l,u){l.lastIndex=u},c.prototype.updateTokenEndLineColumnLocation=function(l,u,d,p,m,g,v){var f,h;u!==void 0&&(f=d===v-1,h=f?-1:0,p===1&&f===!0||(l.endLine=m+h,l.endColumn=g-1+-h))},c.prototype.computeNewColumn=function(l,u){return l+u},c.prototype.createTokenInstance=function(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return null},c.prototype.createOffsetOnlyToken=function(l,u,d,p){return{image:l,startOffset:u,tokenTypeIdx:d,tokenType:p}},c.prototype.createStartOnlyToken=function(l,u,d,p,m,g){return{image:l,startOffset:u,startLine:m,startColumn:g,tokenTypeIdx:d,tokenType:p}},c.prototype.createFullToken=function(l,u,d,p,m,g,v){return{image:l,startOffset:u,endOffset:u+v-1,startLine:m,endLine:m,startColumn:g,endColumn:g+v-1,tokenTypeIdx:d,tokenType:p}},c.prototype.addToken=function(l,u,d){return 666},c.prototype.addTokenUsingPush=function(l,u,d){return l.push(d),u},c.prototype.addTokenUsingMemberAccess=function(l,u,d){return l[u]=d,u++,u},c.prototype.handlePayload=function(l,u){},c.prototype.handlePayloadNoCustom=function(l,u){},c.prototype.handlePayloadWithCustom=function(l,u){u!==null&&(l.payload=u)},c.prototype.match=function(l,u,d){return null},c.prototype.matchWithTest=function(l,u,d){var p=l.test(u);return p===!0?u.substring(d,l.lastIndex):null},c.prototype.matchWithExec=function(l,u){var d=l.exec(u);return d!==null?d[0]:d},c.prototype.TRACE_INIT=function(l,u){if(this.traceInitPerf===!0){this.traceInitIndent++;var d=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(d+"--> <"+l+">");var p=t.timer(u),m=p.time,g=p.value,v=m>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&v(d+"<-- <"+l+"> time: "+m+"ms"),this.traceInitIndent--,g}else return u()},c.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",c.NA=/NOT_APPLICABLE/,c}();n.Lexer=a}),Ji=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=At(),t=Us(),i=Po();function r(y){return s(y)?y.LABEL:y.name}n.tokenLabel=r;function o(y){return y.name}n.tokenName=o;function s(y){return e.isString(y.LABEL)&&y.LABEL!==""}n.hasTokenLabel=s;var a="parent",c="categories",l="label",u="group",d="push_mode",p="pop_mode",m="longer_alt",g="line_breaks",v="start_chars_hint";function f(y){return h(y)}n.createToken=f;function h(y){var R=y.pattern,M={};if(M.name=y.name,e.isUndefined(R)||(M.PATTERN=R),e.has(y,a))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(y,c)&&(M.CATEGORIES=y[c]),i.augmentTokenTypes([M]),e.has(y,l)&&(M.LABEL=y[l]),e.has(y,u)&&(M.GROUP=y[u]),e.has(y,p)&&(M.POP_MODE=y[p]),e.has(y,d)&&(M.PUSH_MODE=y[d]),e.has(y,m)&&(M.LONGER_ALT=y[m]),e.has(y,g)&&(M.LINE_BREAKS=y[g]),e.has(y,v)&&(M.START_CHARS_HINT=y[v]),M}n.EOF=f({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function _(y,R,M,C,U,E,S,w){return{image:R,startOffset:M,endOffset:C,startLine:U,endLine:E,startColumn:S,endColumn:w,tokenTypeIdx:y.tokenTypeIdx,tokenType:y}}n.createTokenInstance=_;function b(y,R){return i.tokenStructuredMatcher(y,R)}n.tokenMatcher=b}),Cn=dt(n=>{var e=n&&n.__extends||function(){var h=function(_,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,R){y.__proto__=R}||function(y,R){for(var M in R)Object.prototype.hasOwnProperty.call(R,M)&&(y[M]=R[M])},h(_,b)};return function(_,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");h(_,b);function y(){this.constructor=_}_.prototype=b===null?Object.create(b):(y.prototype=b.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=At(),i=Ji(),r=function(){function h(_){this._definition=_}return Object.defineProperty(h.prototype,"definition",{get:function(){return this._definition},set:function(_){this._definition=_},enumerable:!1,configurable:!0}),h.prototype.accept=function(_){_.visit(this),t.forEach(this.definition,function(b){b.accept(_)})},h}();n.AbstractProduction=r;var o=function(h){e(_,h);function _(b){var y=h.call(this,[])||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(b){},enumerable:!1,configurable:!0}),_.prototype.accept=function(b){b.visit(this)},_}(r);n.NonTerminal=o;var s=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.orgText="",t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Rule=s;var a=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.ignoreAmbiguities=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Alternative=a;var c=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Option=c;var l=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatory=l;var u=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatoryWithSeparator=u;var d=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Repetition=d;var p=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionWithSeparator=p;var m=function(h){e(_,h);function _(b){var y=h.call(this,b.definition)||this;return y.idx=1,y.ignoreAmbiguities=!1,y.hasPredicates=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this._definition},set:function(b){this._definition=b},enumerable:!1,configurable:!0}),_}(r);n.Alternation=m;var g=function(){function h(_){this.idx=1,t.assign(this,t.pick(_,function(b){return b!==void 0}))}return h.prototype.accept=function(_){_.visit(this)},h}();n.Terminal=g;function v(h){return t.map(h,f)}n.serializeGrammar=v;function f(h){function _(R){return t.map(R,f)}if(h instanceof o)return{type:"NonTerminal",name:h.nonTerminalName,idx:h.idx};if(h instanceof a)return{type:"Alternative",definition:_(h.definition)};if(h instanceof c)return{type:"Option",idx:h.idx,definition:_(h.definition)};if(h instanceof l)return{type:"RepetitionMandatory",idx:h.idx,definition:_(h.definition)};if(h instanceof u)return{type:"RepetitionMandatoryWithSeparator",idx:h.idx,separator:f(new g({terminalType:h.separator})),definition:_(h.definition)};if(h instanceof p)return{type:"RepetitionWithSeparator",idx:h.idx,separator:f(new g({terminalType:h.separator})),definition:_(h.definition)};if(h instanceof d)return{type:"Repetition",idx:h.idx,definition:_(h.definition)};if(h instanceof m)return{type:"Alternation",idx:h.idx,definition:_(h.definition)};if(h instanceof g){var b={type:"Terminal",name:h.terminalType.name,label:i.tokenLabel(h.terminalType),idx:h.idx},y=h.terminalType.PATTERN;return h.terminalType.PATTERN&&(b.pattern=t.isRegExp(y)?y.source:y),b}else{if(h instanceof s)return{type:"Rule",name:h.name,orgText:h.orgText,definition:_(h.definition)};throw Error("non exhaustive match")}}n.serializeProduction=f}),lc=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=At(),t=Cn(),i=function(){function o(){}return o.prototype.walk=function(s,a){var c=this;a===void 0&&(a=[]),e.forEach(s.definition,function(l,u){var d=e.drop(s.definition,u+1);if(l instanceof t.NonTerminal)c.walkProdRef(l,d,a);else if(l instanceof t.Terminal)c.walkTerminal(l,d,a);else if(l instanceof t.Alternative)c.walkFlat(l,d,a);else if(l instanceof t.Option)c.walkOption(l,d,a);else if(l instanceof t.RepetitionMandatory)c.walkAtLeastOne(l,d,a);else if(l instanceof t.RepetitionMandatoryWithSeparator)c.walkAtLeastOneSep(l,d,a);else if(l instanceof t.RepetitionWithSeparator)c.walkManySep(l,d,a);else if(l instanceof t.Repetition)c.walkMany(l,d,a);else if(l instanceof t.Alternation)c.walkOr(l,d,a);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(s,a,c){},o.prototype.walkProdRef=function(s,a,c){},o.prototype.walkFlat=function(s,a,c){var l=a.concat(c);this.walk(s,l)},o.prototype.walkOption=function(s,a,c){var l=a.concat(c);this.walk(s,l)},o.prototype.walkAtLeastOne=function(s,a,c){var l=[new t.Option({definition:s.definition})].concat(a,c);this.walk(s,l)},o.prototype.walkAtLeastOneSep=function(s,a,c){var l=r(s,a,c);this.walk(s,l)},o.prototype.walkMany=function(s,a,c){var l=[new t.Option({definition:s.definition})].concat(a,c);this.walk(s,l)},o.prototype.walkManySep=function(s,a,c){var l=r(s,a,c);this.walk(s,l)},o.prototype.walkOr=function(s,a,c){var l=this,u=a.concat(c);e.forEach(s.definition,function(d){var p=new t.Alternative({definition:[d]});l.walk(p,u)})},o}();n.RestWalker=i;function r(o,s,a){var c=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],l=c.concat(s,a);return l}}),Lo=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=Cn(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),ks=dt(n=>{var e=n&&n.__extends||function(){var p=function(m,g){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,f){v.__proto__=f}||function(v,f){for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(v[h]=f[h])},p(m,g)};return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(m,g);function v(){this.constructor=m}m.prototype=g===null?Object.create(g):(v.prototype=g.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=At(),i=Cn(),r=Lo();function o(p){return p instanceof i.Alternative||p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionMandatory||p instanceof i.RepetitionMandatoryWithSeparator||p instanceof i.RepetitionWithSeparator||p instanceof i.Terminal||p instanceof i.Rule}n.isSequenceProd=o;function s(p,m){m===void 0&&(m=[]);var g=p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionWithSeparator;return g?!0:p instanceof i.Alternation?t.some(p.definition,function(v){return s(v,m)}):p instanceof i.NonTerminal&&t.contains(m,p)?!1:p instanceof i.AbstractProduction?(p instanceof i.NonTerminal&&m.push(p),t.every(p.definition,function(v){return s(v,m)})):!1}n.isOptionalProd=s;function a(p){return p instanceof i.Alternation}n.isBranchingProd=a;function c(p){if(p instanceof i.NonTerminal)return"SUBRULE";if(p instanceof i.Option)return"OPTION";if(p instanceof i.Alternation)return"OR";if(p instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(p instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(p instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(p instanceof i.Repetition)return"MANY";if(p instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=c;var l=function(p){e(m,p);function m(){var g=p!==null&&p.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return m.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},m.prototype.visitTerminal=function(g){var v=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},m.prototype.visitNonTerminal=function(g){var v=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},m.prototype.visitOption=function(g){this.dslMethods.option.push(g)},m.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},m.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},m.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},m.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},m.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},m}(r.GAstVisitor);n.DslMethodsCollectorVisitor=l;var u=new l;function d(p){u.reset(),p.accept(u);var m=u.dslMethods;return u.reset(),m}n.collectMethods=d}),Kd=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=At(),t=Cn(),i=ks();function r(c){if(c instanceof t.NonTerminal)return r(c.referencedRule);if(c instanceof t.Terminal)return a(c);if(i.isSequenceProd(c))return o(c);if(i.isBranchingProd(c))return s(c);throw Error("non exhaustive match")}n.first=r;function o(c){for(var l=[],u=c.definition,d=0,p=u.length>d,m,g=!0;p&&g;)m=u[d],g=i.isOptionalProd(m),l=l.concat(r(m)),d=d+1,p=u.length>d;return e.uniq(l)}n.firstForSequence=o;function s(c){var l=e.map(c.definition,function(u){return r(u)});return e.uniq(e.flatten(l))}n.firstForBranching=s;function a(c){return[c.terminalType]}n.firstForTerminal=a}),Yd=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),Dy=dt(n=>{var e=n&&n.__extends||function(){var d=function(p,m){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,v){g.__proto__=v}||function(g,v){for(var f in v)Object.prototype.hasOwnProperty.call(v,f)&&(g[f]=v[f])},d(p,m)};return function(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");d(p,m);function g(){this.constructor=p}p.prototype=m===null?Object.create(m):(g.prototype=m.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=lc(),i=Kd(),r=At(),o=Yd(),s=Cn(),a=function(d){e(p,d);function p(m){var g=d.call(this)||this;return g.topProd=m,g.follows={},g}return p.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},p.prototype.walkTerminal=function(m,g,v){},p.prototype.walkProdRef=function(m,g,v){var f=l(m.referencedRule,m.idx)+this.topProd.name,h=g.concat(v),_=new s.Alternative({definition:h}),b=i.first(_);this.follows[f]=b},p}(t.RestWalker);n.ResyncFollowsWalker=a;function c(d){var p={};return r.forEach(d,function(m){var g=new a(m).startWalking();r.assign(p,g)}),p}n.computeAllProdsFollows=c;function l(d,p){return d.name+p+o.IN}n.buildBetweenProdsFollowPrefix=l;function u(d){var p=d.terminalType.name;return p+d.idx+o.IN}n.buildInProdFollowPrefix=u}),Bs=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=Ji(),t=At(),i=At(),r=Cn(),o=ks();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(s){var a=s.expected,c=s.actual;s.previous,s.ruleName;var l=e.hasTokenLabel(a),u=l?"--> "+e.tokenLabel(a)+" <--":"token of type --> "+a.name+" <--",d="Expecting "+u+" but found --> '"+c.image+"' <--";return d},buildNotAllInputParsedMessage:function(s){var a=s.firstRedundant;return s.ruleName,"Redundant input, expecting EOF but found: "+a.image},buildNoViableAltMessage:function(s){var a=s.expectedPathsPerAlt,c=s.actual;s.previous;var l=s.customUserDescription;s.ruleName;var u="Expecting: ",d=i.first(c).image,p=`
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
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return u},buildInvalidRuleNameError:function(s){return"deprecated"},buildDuplicateRuleNameError:function(s){var a;s.topLevelRule instanceof r.Rule?a=s.topLevelRule.name:a=s.topLevelRule;var c="Duplicate definition, rule: ->"+a+"<- is already defined in the grammar: ->"+s.grammarName+"<-";return c}}}),Fy=dt(n=>{var e=n&&n.__extends||function(){var a=function(c,l){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])},a(c,l)};return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");a(c,l);function u(){this.constructor=c}c.prototype=l===null?Object.create(l):(u.prototype=l.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=Fn(),i=At(),r=Lo();function o(a,c){var l=new s(a,c);return l.resolveRefs(),l.errors}n.resolveGrammar=o;var s=function(a){e(c,a);function c(l,u){var d=a.call(this)||this;return d.nameToTopRule=l,d.errMsgProvider=u,d.errors=[],d}return c.prototype.resolveRefs=function(){var l=this;i.forEach(i.values(this.nameToTopRule),function(u){l.currTopLevel=u,u.accept(l)})},c.prototype.visitNonTerminal=function(l){var u=this.nameToTopRule[l.nonTerminalName];if(u)l.referencedRule=u;else{var d=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,l);this.errors.push({message:d,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:l.nonTerminalName})}},c}(r.GAstVisitor);n.GastRefResolverVisitor=s}),zs=dt(n=>{var e=n&&n.__extends||function(){var f=function(h,_){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(b[R]=y[R])},f(h,_)};return function(h,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");f(h,_);function b(){this.constructor=h}h.prototype=_===null?Object.create(_):(b.prototype=_.prototype,new b)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=lc(),i=At(),r=Kd(),o=Cn(),s=function(f){e(h,f);function h(_,b){var y=f.call(this)||this;return y.topProd=_,y.path=b,y.possibleTokTypes=[],y.nextProductionName="",y.nextProductionOccurrence=0,y.found=!1,y.isAtEndOfPath=!1,y}return h.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},h.prototype.walk=function(_,b){b===void 0&&(b=[]),this.found||f.prototype.walk.call(this,_,b)},h.prototype.walkProdRef=function(_,b,y){if(_.referencedRule.name===this.nextProductionName&&_.idx===this.nextProductionOccurrence){var R=b.concat(y);this.updateExpectedNext(),this.walk(_.referencedRule,R)}},h.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},h}(t.RestWalker);n.AbstractNextPossibleTokensWalker=s;var a=function(f){e(h,f);function h(_,b){var y=f.call(this,_,b)||this;return y.path=b,y.nextTerminalName="",y.nextTerminalOccurrence=0,y.nextTerminalName=y.path.lastTok.name,y.nextTerminalOccurrence=y.path.lastTokOccurrence,y}return h.prototype.walkTerminal=function(_,b,y){if(this.isAtEndOfPath&&_.terminalType.name===this.nextTerminalName&&_.idx===this.nextTerminalOccurrence&&!this.found){var R=b.concat(y),M=new o.Alternative({definition:R});this.possibleTokTypes=r.first(M),this.found=!0}},h}(s);n.NextAfterTokenWalker=a;var c=function(f){e(h,f);function h(_,b){var y=f.call(this)||this;return y.topRule=_,y.occurrence=b,y.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},y}return h.prototype.startWalking=function(){return this.walk(this.topRule),this.result},h}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=c;var l=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkMany=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkMany.call(this,_,b,y)},h}(c);n.NextTerminalAfterManyWalker=l;var u=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkManySep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkManySep.call(this,_,b,y)},h}(c);n.NextTerminalAfterManySepWalker=u;var d=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkAtLeastOne=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOne.call(this,_,b,y)},h}(c);n.NextTerminalAfterAtLeastOneWalker=d;var p=function(f){e(h,f);function h(){return f!==null&&f.apply(this,arguments)||this}return h.prototype.walkAtLeastOneSep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOneSep.call(this,_,b,y)},h}(c);n.NextTerminalAfterAtLeastOneSepWalker=p;function m(f,h,_){_===void 0&&(_=[]),_=i.cloneArr(_);var b=[],y=0;function R(E){return E.concat(i.drop(f,y+1))}function M(E){var S=m(R(E),h,_);return b.concat(S)}for(;_.length<h&&y<f.length;){var C=f[y];if(C instanceof o.Alternative||C instanceof o.NonTerminal)return M(C.definition);if(C instanceof o.Option)b=M(C.definition);else if(C instanceof o.RepetitionMandatory){var U=C.definition.concat([new o.Repetition({definition:C.definition})]);return M(U)}else if(C instanceof o.RepetitionMandatoryWithSeparator){var U=[new o.Alternative({definition:C.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})];return M(U)}else if(C instanceof o.RepetitionWithSeparator){var U=C.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})]);b=M(U)}else if(C instanceof o.Repetition){var U=C.definition.concat([new o.Repetition({definition:C.definition})]);b=M(U)}else{if(C instanceof o.Alternation)return i.forEach(C.definition,function(E){i.isEmpty(E.definition)===!1&&(b=M(E.definition))}),b;if(C instanceof o.Terminal)_.push(C.terminalType);else throw Error("non exhaustive match")}y++}return b.push({partialPath:_,suffixDef:i.drop(f,y)}),b}n.possiblePathsFrom=m;function g(f,h,_,b){var y="EXIT_NONE_TERMINAL",R=[y],M="EXIT_ALTERNATIVE",C=!1,U=h.length,E=U-b-1,S=[],w=[];for(w.push({idx:-1,def:f,ruleStack:[],occurrenceStack:[]});!i.isEmpty(w);){var P=w.pop();if(P===M){C&&i.last(w).idx<=E&&w.pop();continue}var L=P.def,O=P.idx,V=P.ruleStack,H=P.occurrenceStack;if(!i.isEmpty(L)){var $=L[0];if($===y){var W={idx:O,def:i.drop(L),ruleStack:i.dropRight(V),occurrenceStack:i.dropRight(H)};w.push(W)}else if($ instanceof o.Terminal)if(O<U-1){var te=O+1,ue=h[te];if(_(ue,$.terminalType)){var W={idx:te,def:i.drop(L),ruleStack:V,occurrenceStack:H};w.push(W)}}else if(O===U-1)S.push({nextTokenType:$.terminalType,nextTokenOccurrence:$.idx,ruleStack:V,occurrenceStack:H}),C=!0;else throw Error("non exhaustive match");else if($ instanceof o.NonTerminal){var _e=i.cloneArr(V);_e.push($.nonTerminalName);var re=i.cloneArr(H);re.push($.idx);var W={idx:O,def:$.definition.concat(R,i.drop(L)),ruleStack:_e,occurrenceStack:re};w.push(W)}else if($ instanceof o.Option){var ne={idx:O,def:i.drop(L),ruleStack:V,occurrenceStack:H};w.push(ne),w.push(M);var Ce={idx:O,def:$.definition.concat(i.drop(L)),ruleStack:V,occurrenceStack:H};w.push(Ce)}else if($ instanceof o.RepetitionMandatory){var ee=new o.Repetition({definition:$.definition,idx:$.idx}),z=$.definition.concat([ee],i.drop(L)),W={idx:O,def:z,ruleStack:V,occurrenceStack:H};w.push(W)}else if($ instanceof o.RepetitionMandatoryWithSeparator){var X=new o.Terminal({terminalType:$.separator}),ee=new o.Repetition({definition:[X].concat($.definition),idx:$.idx}),z=$.definition.concat([ee],i.drop(L)),W={idx:O,def:z,ruleStack:V,occurrenceStack:H};w.push(W)}else if($ instanceof o.RepetitionWithSeparator){var ne={idx:O,def:i.drop(L),ruleStack:V,occurrenceStack:H};w.push(ne),w.push(M);var X=new o.Terminal({terminalType:$.separator}),le=new o.Repetition({definition:[X].concat($.definition),idx:$.idx}),z=$.definition.concat([le],i.drop(L)),Ce={idx:O,def:z,ruleStack:V,occurrenceStack:H};w.push(Ce)}else if($ instanceof o.Repetition){var ne={idx:O,def:i.drop(L),ruleStack:V,occurrenceStack:H};w.push(ne),w.push(M);var le=new o.Repetition({definition:$.definition,idx:$.idx}),z=$.definition.concat([le],i.drop(L)),Ce={idx:O,def:z,ruleStack:V,occurrenceStack:H};w.push(Ce)}else if($ instanceof o.Alternation)for(var de=$.definition.length-1;de>=0;de--){var xe=$.definition[de],Ne={idx:O,def:xe.definition.concat(i.drop(L)),ruleStack:V,occurrenceStack:H};w.push(Ne),w.push(M)}else if($ instanceof o.Alternative)w.push({idx:O,def:$.definition.concat(i.drop(L)),ruleStack:V,occurrenceStack:H});else if($ instanceof o.Rule)w.push(v($,O,V,H));else throw Error("non exhaustive match")}}return S}n.nextPossibleTokensAfter=g;function v(f,h,_,b){var y=i.cloneArr(_);y.push(f.name);var R=i.cloneArr(b);return R.push(1),{idx:h,def:f.definition,ruleStack:y,occurrenceStack:R}}}),Vs=dt(n=>{var e=n&&n.__extends||function(){var E=function(S,w){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(P,L){P.__proto__=L}||function(P,L){for(var O in L)Object.prototype.hasOwnProperty.call(L,O)&&(P[O]=L[O])},E(S,w)};return function(S,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");E(S,w);function P(){this.constructor=S}S.prototype=w===null?Object.create(w):(P.prototype=w.prototype,new P)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=At(),i=zs(),r=lc(),o=Po(),s=Cn(),a=Lo(),c;(function(E){E[E.OPTION=0]="OPTION",E[E.REPETITION=1]="REPETITION",E[E.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",E[E.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",E[E.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",E[E.ALTERNATION=5]="ALTERNATION"})(c=n.PROD_TYPE||(n.PROD_TYPE={}));function l(E){if(E instanceof s.Option)return c.OPTION;if(E instanceof s.Repetition)return c.REPETITION;if(E instanceof s.RepetitionMandatory)return c.REPETITION_MANDATORY;if(E instanceof s.RepetitionMandatoryWithSeparator)return c.REPETITION_MANDATORY_WITH_SEPARATOR;if(E instanceof s.RepetitionWithSeparator)return c.REPETITION_WITH_SEPARATOR;if(E instanceof s.Alternation)return c.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=l;function u(E,S,w,P,L,O){var V=y(E,S,w),H=U(V)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return O(V,P,H,L)}n.buildLookaheadFuncForOr=u;function d(E,S,w,P,L,O){var V=R(E,S,L,w),H=U(V)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return O(V[0],H,P)}n.buildLookaheadFuncForOptionalProd=d;function p(E,S,w,P){var L=E.length,O=t.every(E,function($){return t.every($,function(W){return W.length===1})});if(S)return function($){for(var W=t.map($,function(le){return le.GATE}),te=0;te<L;te++){var ue=E[te],_e=ue.length,re=W[te];if(!(re!==void 0&&re.call(this)===!1))e:for(var ne=0;ne<_e;ne++){for(var Ce=ue[ne],ee=Ce.length,z=0;z<ee;z++){var X=this.LA(z+1);if(w(X,Ce[z])===!1)continue e}return te}}};if(O&&!P){var V=t.map(E,function($){return t.flatten($)}),H=t.reduce(V,function($,W,te){return t.forEach(W,function(ue){t.has($,ue.tokenTypeIdx)||($[ue.tokenTypeIdx]=te),t.forEach(ue.categoryMatches,function(_e){t.has($,_e)||($[_e]=te)})}),$},[]);return function(){var $=this.LA(1);return H[$.tokenTypeIdx]}}else return function(){for(var $=0;$<L;$++){var W=E[$],te=W.length;e:for(var ue=0;ue<te;ue++){for(var _e=W[ue],re=_e.length,ne=0;ne<re;ne++){var Ce=this.LA(ne+1);if(w(Ce,_e[ne])===!1)continue e}return $}}}}n.buildAlternativesLookAheadFunc=p;function m(E,S,w){var P=t.every(E,function(W){return W.length===1}),L=E.length;if(P&&!w){var O=t.flatten(E);if(O.length===1&&t.isEmpty(O[0].categoryMatches)){var V=O[0],H=V.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===H}}else{var $=t.reduce(O,function(W,te,ue){return W[te.tokenTypeIdx]=!0,t.forEach(te.categoryMatches,function(_e){W[_e]=!0}),W},[]);return function(){var W=this.LA(1);return $[W.tokenTypeIdx]===!0}}}else return function(){e:for(var W=0;W<L;W++){for(var te=E[W],ue=te.length,_e=0;_e<ue;_e++){var re=this.LA(_e+1);if(S(re,te[_e])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=m;var g=function(E){e(S,E);function S(w,P,L){var O=E.call(this)||this;return O.topProd=w,O.targetOccurrence=P,O.targetProdType=L,O}return S.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},S.prototype.checkIsTarget=function(w,P,L,O){return w.idx===this.targetOccurrence&&this.targetProdType===P?(this.restDef=L.concat(O),!0):!1},S.prototype.walkOption=function(w,P,L){this.checkIsTarget(w,c.OPTION,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkAtLeastOne=function(w,P,L){this.checkIsTarget(w,c.REPETITION_MANDATORY,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkAtLeastOneSep=function(w,P,L){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkMany=function(w,P,L){this.checkIsTarget(w,c.REPETITION,P,L)||E.prototype.walkOption.call(this,w,P,L)},S.prototype.walkManySep=function(w,P,L){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR,P,L)||E.prototype.walkOption.call(this,w,P,L)},S}(r.RestWalker),v=function(E){e(S,E);function S(w,P,L){var O=E.call(this)||this;return O.targetOccurrence=w,O.targetProdType=P,O.targetRef=L,O.result=[],O}return S.prototype.checkIsTarget=function(w,P){w.idx===this.targetOccurrence&&this.targetProdType===P&&(this.targetRef===void 0||w===this.targetRef)&&(this.result=w.definition)},S.prototype.visitOption=function(w){this.checkIsTarget(w,c.OPTION)},S.prototype.visitRepetition=function(w){this.checkIsTarget(w,c.REPETITION)},S.prototype.visitRepetitionMandatory=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY)},S.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR)},S.prototype.visitRepetitionWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR)},S.prototype.visitAlternation=function(w){this.checkIsTarget(w,c.ALTERNATION)},S}(a.GAstVisitor);function f(E){for(var S=new Array(E),w=0;w<E;w++)S[w]=[];return S}function h(E){for(var S=[""],w=0;w<E.length;w++){for(var P=E[w],L=[],O=0;O<S.length;O++){var V=S[O];L.push(V+"_"+P.tokenTypeIdx);for(var H=0;H<P.categoryMatches.length;H++){var $="_"+P.categoryMatches[H];L.push(V+$)}}S=L}return S}function _(E,S,w){for(var P=0;P<E.length;P++)if(P!==w)for(var L=E[P],O=0;O<S.length;O++){var V=S[O];if(L[V]===!0)return!1}return!0}function b(E,S){for(var w=t.map(E,function(te){return i.possiblePathsFrom([te],1)}),P=f(w.length),L=t.map(w,function(te){var ue={};return t.forEach(te,function(_e){var re=h(_e.partialPath);t.forEach(re,function(ne){ue[ne]=!0})}),ue}),O=w,V=1;V<=S;V++){var H=O;O=f(H.length);for(var $=function(te){for(var ue=H[te],_e=0;_e<ue.length;_e++){var re=ue[_e].partialPath,ne=ue[_e].suffixDef,Ce=h(re),ee=_(L,Ce,te);if(ee||t.isEmpty(ne)||re.length===S){var z=P[te];if(M(z,re)===!1){z.push(re);for(var X=0;X<Ce.length;X++){var le=Ce[X];L[te][le]=!0}}}else{var de=i.possiblePathsFrom(ne,V+1,re);O[te]=O[te].concat(de),t.forEach(de,function(xe){var Ne=h(xe.partialPath);t.forEach(Ne,function(He){L[te][He]=!0})})}}},W=0;W<H.length;W++)$(W)}return P}n.lookAheadSequenceFromAlternatives=b;function y(E,S,w,P){var L=new v(E,c.ALTERNATION,P);return S.accept(L),b(L.result,w)}n.getLookaheadPathsForOr=y;function R(E,S,w,P){var L=new v(E,w);S.accept(L);var O=L.result,V=new g(S,E,w),H=V.startWalking(),$=new s.Alternative({definition:O}),W=new s.Alternative({definition:H});return b([$,W],P)}n.getLookaheadPathsForOptionalProd=R;function M(E,S){e:for(var w=0;w<E.length;w++){var P=E[w];if(P.length===S.length){for(var L=0;L<P.length;L++){var O=S[L],V=P[L],H=O===V||V.categoryMatchesMap[O.tokenTypeIdx]!==void 0;if(H===!1)continue e}return!0}}return!1}n.containsPath=M;function C(E,S){return E.length<S.length&&t.every(E,function(w,P){var L=S[P];return w===L||L.categoryMatchesMap[w.tokenTypeIdx]})}n.isStrictPrefixOfPath=C;function U(E){return t.every(E,function(S){return t.every(S,function(w){return t.every(w,function(P){return t.isEmpty(P.categoryMatches)})})})}n.areTokenCategoriesNotUsed=U}),qd=dt(n=>{var e=n&&n.__extends||function(){var P=function(L,O){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(V,H){V.__proto__=H}||function(V,H){for(var $ in H)Object.prototype.hasOwnProperty.call(H,$)&&(V[$]=H[$])},P(L,O)};return function(L,O){if(typeof O!="function"&&O!==null)throw new TypeError("Class extends value "+String(O)+" is not a constructor or null");P(L,O);function V(){this.constructor=L}L.prototype=O===null?Object.create(O):(V.prototype=O.prototype,new V)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=At(),i=At(),r=Fn(),o=ks(),s=Vs(),a=zs(),c=Cn(),l=Lo();function u(P,L,O,V,H){var $=t.map(P,function(ee){return d(ee,V)}),W=t.map(P,function(ee){return h(ee,ee,V)}),te=[],ue=[],_e=[];i.every(W,i.isEmpty)&&(te=i.map(P,function(ee){return y(ee,V)}),ue=i.map(P,function(ee){return R(ee,L,V)}),_e=U(P,L,V));var re=w(P,O,V),ne=i.map(P,function(ee){return C(ee,V)}),Ce=i.map(P,function(ee){return v(ee,P,H,V)});return t.flatten($.concat(_e,W,te,ue,re,ne,Ce))}n.validateGrammar=u;function d(P,L){var O=new g;P.accept(O);var V=O.allProductions,H=t.groupBy(V,p),$=t.pick(H,function(te){return te.length>1}),W=t.map(t.values($),function(te){var ue=t.first(te),_e=L.buildDuplicateFoundError(P,te),re=o.getProductionDslName(ue),ne={message:_e,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:P.name,dslName:re,occurrence:ue.idx},Ce=m(ue);return Ce&&(ne.parameter=Ce),ne});return W}function p(P){return o.getProductionDslName(P)+"_#_"+P.idx+"_#_"+m(P)}n.identifyProductionForDuplicates=p;function m(P){return P instanceof c.Terminal?P.terminalType.name:P instanceof c.NonTerminal?P.nonTerminalName:""}var g=function(P){e(L,P);function L(){var O=P!==null&&P.apply(this,arguments)||this;return O.allProductions=[],O}return L.prototype.visitNonTerminal=function(O){this.allProductions.push(O)},L.prototype.visitOption=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatory=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatoryWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetition=function(O){this.allProductions.push(O)},L.prototype.visitAlternation=function(O){this.allProductions.push(O)},L.prototype.visitTerminal=function(O){this.allProductions.push(O)},L}(l.GAstVisitor);n.OccurrenceValidationCollector=g;function v(P,L,O,V){var H=[],$=i.reduce(L,function(te,ue){return ue.name===P.name?te+1:te},0);if($>1){var W=V.buildDuplicateRuleNameError({topLevelRule:P,grammarName:O});H.push({message:W,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:P.name})}return H}n.validateRuleDoesNotAlreadyExist=v;function f(P,L,O){var V=[],H;return t.contains(L,P)||(H="Invalid rule override, rule: ->"+P+"<- cannot be overridden in the grammar: ->"+O+"<-as it is not defined in any of the super grammars ",V.push({message:H,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:P})),V}n.validateRuleIsOverridden=f;function h(P,L,O,V){V===void 0&&(V=[]);var H=[],$=_(L.definition);if(t.isEmpty($))return[];var W=P.name,te=t.contains($,P);te&&H.push({message:O.buildLeftRecursionError({topLevelRule:P,leftRecursionPath:V}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:W});var ue=t.difference($,V.concat([P])),_e=t.map(ue,function(re){var ne=t.cloneArr(V);return ne.push(re),h(P,re,O,ne)});return H.concat(t.flatten(_e))}n.validateNoLeftRecursion=h;function _(P){var L=[];if(t.isEmpty(P))return L;var O=t.first(P);if(O instanceof c.NonTerminal)L.push(O.referencedRule);else if(O instanceof c.Alternative||O instanceof c.Option||O instanceof c.RepetitionMandatory||O instanceof c.RepetitionMandatoryWithSeparator||O instanceof c.RepetitionWithSeparator||O instanceof c.Repetition)L=L.concat(_(O.definition));else if(O instanceof c.Alternation)L=t.flatten(t.map(O.definition,function(W){return _(W.definition)}));else if(!(O instanceof c.Terminal))throw Error("non exhaustive match");var V=o.isOptionalProd(O),H=P.length>1;if(V&&H){var $=t.drop(P);return L.concat(_($))}else return L}n.getFirstNoneTerminal=_;var b=function(P){e(L,P);function L(){var O=P!==null&&P.apply(this,arguments)||this;return O.alternations=[],O}return L.prototype.visitAlternation=function(O){this.alternations.push(O)},L}(l.GAstVisitor);function y(P,L){var O=new b;P.accept(O);var V=O.alternations,H=t.reduce(V,function($,W){var te=t.dropRight(W.definition),ue=t.map(te,function(_e,re){var ne=a.nextPossibleTokensAfter([_e],[],null,1);return t.isEmpty(ne)?{message:L.buildEmptyAlternationError({topLevelRule:P,alternation:W,emptyChoiceIdx:re}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:P.name,occurrence:W.idx,alternative:re+1}:null});return $.concat(t.compact(ue))},[]);return H}n.validateEmptyOrAlternative=y;function R(P,L,O){var V=new b;P.accept(V);var H=V.alternations;H=i.reject(H,function(W){return W.ignoreAmbiguities===!0});var $=t.reduce(H,function(W,te){var ue=te.idx,_e=te.maxLookahead||L,re=s.getLookaheadPathsForOr(ue,P,_e,te),ne=E(re,te,P,O),Ce=S(re,te,P,O);return W.concat(ne,Ce)},[]);return $}n.validateAmbiguousAlternationAlternatives=R;var M=function(P){e(L,P);function L(){var O=P!==null&&P.apply(this,arguments)||this;return O.allProductions=[],O}return L.prototype.visitRepetitionWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatory=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatoryWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetition=function(O){this.allProductions.push(O)},L}(l.GAstVisitor);n.RepetionCollector=M;function C(P,L){var O=new b;P.accept(O);var V=O.alternations,H=t.reduce(V,function($,W){return W.definition.length>255&&$.push({message:L.buildTooManyAlternativesError({topLevelRule:P,alternation:W}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:P.name,occurrence:W.idx}),$},[]);return H}n.validateTooManyAlts=C;function U(P,L,O){var V=[];return i.forEach(P,function(H){var $=new M;H.accept($);var W=$.allProductions;i.forEach(W,function(te){var ue=s.getProdType(te),_e=te.maxLookahead||L,re=te.idx,ne=s.getLookaheadPathsForOptionalProd(re,H,ue,_e),Ce=ne[0];if(i.isEmpty(i.flatten(Ce))){var ee=O.buildEmptyRepetitionError({topLevelRule:H,repetition:te});V.push({message:ee,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:H.name})}})}),V}n.validateSomeNonEmptyLookaheadPath=U;function E(P,L,O,V){var H=[],$=i.reduce(P,function(te,ue,_e){return L.definition[_e].ignoreAmbiguities===!0||i.forEach(ue,function(re){var ne=[_e];i.forEach(P,function(Ce,ee){_e!==ee&&s.containsPath(Ce,re)&&L.definition[ee].ignoreAmbiguities!==!0&&ne.push(ee)}),ne.length>1&&!s.containsPath(H,re)&&(H.push(re),te.push({alts:ne,path:re}))}),te},[]),W=t.map($,function(te){var ue=i.map(te.alts,function(re){return re+1}),_e=V.buildAlternationAmbiguityError({topLevelRule:O,alternation:L,ambiguityIndices:ue,prefixPath:te.path});return{message:_e,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:O.name,occurrence:L.idx,alternatives:[te.alts]}});return W}function S(P,L,O,V){var H=[],$=i.reduce(P,function(W,te,ue){var _e=i.map(te,function(re){return{idx:ue,path:re}});return W.concat(_e)},[]);return i.forEach($,function(W){var te=L.definition[W.idx];if(te.ignoreAmbiguities!==!0){var ue=W.idx,_e=W.path,re=i.findAll($,function(Ce){return L.definition[Ce.idx].ignoreAmbiguities!==!0&&Ce.idx<ue&&s.isStrictPrefixOfPath(Ce.path,_e)}),ne=i.map(re,function(Ce){var ee=[Ce.idx+1,ue+1],z=L.idx===0?"":L.idx,X=V.buildAlternationPrefixAmbiguityError({topLevelRule:O,alternation:L,ambiguityIndices:ee,prefixPath:Ce.path});return{message:X,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:O.name,occurrence:z,alternatives:ee}});H=H.concat(ne)}}),H}n.checkPrefixAlternativesAmbiguities=S;function w(P,L,O){var V=[],H=i.map(L,function($){return $.name});return i.forEach(P,function($){var W=$.name;if(i.contains(H,W)){var te=O.buildNamespaceConflictError($);V.push({message:te,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:W})}}),V}}),Uy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=At(),t=Fy(),i=qd(),r=Bs();function o(a){a=e.defaults(a,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var c={};return e.forEach(a.rules,function(l){c[l.name]=l}),t.resolveGrammar(c,a.errMsgProvider)}n.resolveGrammar=o;function s(a){return a=e.defaults(a,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(a.rules,a.maxLookahead,a.tokenTypes,a.errMsgProvider,a.grammarName)}n.validateGrammar=s}),Io=dt(n=>{var e=n&&n.__extends||function(){var g=function(v,f){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,_){h.__proto__=_}||function(h,_){for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&(h[b]=_[b])},g(v,f)};return function(v,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");g(v,f);function h(){this.constructor=v}v.prototype=f===null?Object.create(f):(h.prototype=f.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=At(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",s="NotAllInputParsedException",a=[i,r,o,s];Object.freeze(a);function c(g){return t.contains(a,g.name)}n.isRecognitionException=c;var l=function(g){e(v,g);function v(f,h){var _=this.constructor,b=g.call(this,f)||this;return b.token=h,b.resyncedTokens=[],Object.setPrototypeOf(b,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(b,b.constructor),b}return v}(Error),u=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=i,b}return v}(l);n.MismatchedTokenException=u;var d=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=r,b}return v}(l);n.NoViableAltException=d;var p=function(g){e(v,g);function v(f,h){var _=g.call(this,f,h)||this;return _.name=s,_}return v}(l);n.NotAllInputParsedException=p;var m=function(g){e(v,g);function v(f,h,_){var b=g.call(this,f,h)||this;return b.previousToken=_,b.name=o,b}return v}(l);n.EarlyExitException=m}),$d=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=Ji(),t=At(),i=Io(),r=Yd(),o=Fn();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function s(l){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=l}n.InRuleRecoveryException=s,s.prototype=Error.prototype;var a=function(){function l(){}return l.prototype.initRecoverable=function(u){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(u,"recoveryEnabled")?u.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=c)},l.prototype.getTokenToInsert=function(u){var d=e.createTokenInstance(u,"",NaN,NaN,NaN,NaN,NaN,NaN);return d.isInsertedInRecovery=!0,d},l.prototype.canTokenTypeBeInsertedInRecovery=function(u){return!0},l.prototype.tryInRepetitionRecovery=function(u,d,p,m){for(var g=this,v=this.findReSyncTokenType(),f=this.exportLexerState(),h=[],_=!1,b=this.LA(1),y=this.LA(1),R=function(){var M=g.LA(0),C=g.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:b,previous:M,ruleName:g.getCurrRuleFullName()}),U=new i.MismatchedTokenException(C,b,g.LA(0));U.resyncedTokens=t.dropRight(h),g.SAVE_ERROR(U)};!_;)if(this.tokenMatcher(y,m)){R();return}else if(p.call(this)){R(),u.apply(this,d);return}else this.tokenMatcher(y,v)?_=!0:(y=this.SKIP_TOKEN(),this.addToResyncTokens(y,h));this.importLexerState(f)},l.prototype.shouldInRepetitionRecoveryBeTried=function(u,d,p){return!(p===!1||u===void 0||d===void 0||this.tokenMatcher(this.LA(1),u)||this.isBackTracking()||this.canPerformInRuleRecovery(u,this.getFollowsForInRuleRecovery(u,d)))},l.prototype.getFollowsForInRuleRecovery=function(u,d){var p=this.getCurrentGrammarPath(u,d),m=this.getNextPossibleTokenTypes(p);return m},l.prototype.tryInRuleRecovery=function(u,d){if(this.canRecoverWithSingleTokenInsertion(u,d)){var p=this.getTokenToInsert(u);return p}if(this.canRecoverWithSingleTokenDeletion(u)){var m=this.SKIP_TOKEN();return this.consumeToken(),m}throw new s("sad sad panda")},l.prototype.canPerformInRuleRecovery=function(u,d){return this.canRecoverWithSingleTokenInsertion(u,d)||this.canRecoverWithSingleTokenDeletion(u)},l.prototype.canRecoverWithSingleTokenInsertion=function(u,d){var p=this;if(!this.canTokenTypeBeInsertedInRecovery(u)||t.isEmpty(d))return!1;var m=this.LA(1),g=t.find(d,function(v){return p.tokenMatcher(m,v)})!==void 0;return g},l.prototype.canRecoverWithSingleTokenDeletion=function(u){var d=this.tokenMatcher(this.LA(2),u);return d},l.prototype.isInCurrentRuleReSyncSet=function(u){var d=this.getCurrFollowKey(),p=this.getFollowSetFromFollowKey(d);return t.contains(p,u)},l.prototype.findReSyncTokenType=function(){for(var u=this.flattenFollowSet(),d=this.LA(1),p=2;;){var m=d.tokenType;if(t.contains(u,m))return m;d=this.LA(p),p++}},l.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var u=this.getLastExplicitRuleShortName(),d=this.getLastExplicitRuleOccurrenceIndex(),p=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(u),idxInCallingRule:d,inRule:this.shortRuleNameToFullName(p)}},l.prototype.buildFullFollowKeyStack=function(){var u=this,d=this.RULE_STACK,p=this.RULE_OCCURRENCE_STACK;return t.map(d,function(m,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:u.shortRuleNameToFullName(m),idxInCallingRule:p[g],inRule:u.shortRuleNameToFullName(d[g-1])}})},l.prototype.flattenFollowSet=function(){var u=this,d=t.map(this.buildFullFollowKeyStack(),function(p){return u.getFollowSetFromFollowKey(p)});return t.flatten(d)},l.prototype.getFollowSetFromFollowKey=function(u){if(u===n.EOF_FOLLOW_KEY)return[e.EOF];var d=u.ruleName+u.idxInCallingRule+r.IN+u.inRule;return this.resyncFollows[d]},l.prototype.addToResyncTokens=function(u,d){return this.tokenMatcher(u,e.EOF)||d.push(u),d},l.prototype.reSyncTo=function(u){for(var d=[],p=this.LA(1);this.tokenMatcher(p,u)===!1;)p=this.SKIP_TOKEN(),this.addToResyncTokens(p,d);return t.dropRight(d)},l.prototype.attemptInRepetitionRecovery=function(u,d,p,m,g,v,f){},l.prototype.getCurrentGrammarPath=function(u,d){var p=this.getHumanReadableRuleStack(),m=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:p,occurrenceStack:m,lastTok:u,lastTokOccurrence:d};return g},l.prototype.getHumanReadableRuleStack=function(){var u=this;return t.map(this.RULE_STACK,function(d){return u.shortRuleNameToFullName(d)})},l}();n.Recoverable=a;function c(l,u,d,p,m,g,v){var f=this.getKeyForAutomaticLookahead(p,m),h=this.firstAfterRepMap[f];if(h===void 0){var _=this.getCurrRuleFullName(),b=this.getGAstProductions()[_],y=new g(b,m);h=y.startWalking(),this.firstAfterRepMap[f]=h}var R=h.token,M=h.occurrence,C=h.isEndOfRule;this.RULE_STACK.length===1&&C&&R===void 0&&(R=e.EOF,M=1),this.shouldInRepetitionRecoveryBeTried(R,M,v)&&this.tryInRepetitionRecovery(l,u,d,R)}n.attemptInRepetitionRecovery=c}),cc=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),ky=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=Vs(),t=At(),i=Fn(),r=cc(),o=ks(),s=function(){function a(){}return a.prototype.initLooksAhead=function(c){this.dynamicTokensEnabled=t.has(c,"dynamicTokensEnabled")?c.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(c,"maxLookahead")?c.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},a.prototype.preComputeLookaheadFunctions=function(c){var l=this;t.forEach(c,function(u){l.TRACE_INIT(u.name+" Rule Lookahead",function(){var d=o.collectMethods(u),p=d.alternation,m=d.repetition,g=d.option,v=d.repetitionMandatory,f=d.repetitionMandatoryWithSeparator,h=d.repetitionWithSeparator;t.forEach(p,function(_){var b=_.idx===0?"":_.idx;l.TRACE_INIT(""+o.getProductionDslName(_)+b,function(){var y=e.buildLookaheadFuncForOr(_.idx,u,_.maxLookahead||l.maxLookahead,_.hasPredicates,l.dynamicTokensEnabled,l.lookAheadBuilderForAlternatives),R=r.getKeyForAutomaticLookahead(l.fullRuleNameToShort[u.name],r.OR_IDX,_.idx);l.setLaFuncCache(R,y)})}),t.forEach(m,function(_){l.computeLookaheadFunc(u,_.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(g,function(_){l.computeLookaheadFunc(u,_.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(v,function(_){l.computeLookaheadFunc(u,_.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(f,function(_){l.computeLookaheadFunc(u,_.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(h,function(_){l.computeLookaheadFunc(u,_.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))})})})},a.prototype.computeLookaheadFunc=function(c,l,u,d,p,m){var g=this;this.TRACE_INIT(""+m+(l===0?"":l),function(){var v=e.buildLookaheadFuncForOptionalProd(l,c,p||g.maxLookahead,g.dynamicTokensEnabled,d,g.lookAheadBuilderForOptional),f=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[c.name],u,l);g.setLaFuncCache(f,v)})},a.prototype.lookAheadBuilderForOptional=function(c,l,u){return e.buildSingleAlternativeLookaheadFunction(c,l,u)},a.prototype.lookAheadBuilderForAlternatives=function(c,l,u,d){return e.buildAlternativesLookAheadFunc(c,l,u,d)},a.prototype.getKeyForAutomaticLookahead=function(c,l){var u=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(u,c,l)},a.prototype.getLaFuncFromCache=function(c){},a.prototype.getLaFuncFromMap=function(c){return this.lookAheadFuncsCache.get(c)},a.prototype.getLaFuncFromObj=function(c){return this.lookAheadFuncsCache[c]},a.prototype.setLaFuncCache=function(c,l){},a.prototype.setLaFuncCacheUsingMap=function(c,l){this.lookAheadFuncsCache.set(c,l)},a.prototype.setLaFuncUsingObj=function(c,l){this.lookAheadFuncsCache[c]=l},a}();n.LooksAhead=s}),By=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.endOffset=s.endOffset):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.startColumn=s.startColumn,o.startLine=s.startLine,o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine)}n.setNodeLocationFull=t;function i(o,s,a){o.children[a]===void 0?o.children[a]=[s]:o.children[a].push(s)}n.addTerminalToCst=i;function r(o,s,a){o.children[s]===void 0?o.children[s]=[a]:o.children[s].push(a)}n.addNoneTerminalToCst=r}),Zd=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=At();function t(s){return r(s.constructor)}n.classNameFromInstance=t;var i="name";function r(s){var a=s.name;return a||"anonymous"}n.functionName=r;function o(s,a){var c=Object.getOwnPropertyDescriptor(s,i);return e.isUndefined(c)||c.configurable?(Object.defineProperty(s,i,{enumerable:!1,configurable:!0,writable:!1,value:a}),!0):!1}n.defineNameProp=o}),zy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=At(),t=Zd();function i(d,p){for(var m=e.keys(d),g=m.length,v=0;v<g;v++)for(var f=m[v],h=d[f],_=h.length,b=0;b<_;b++){var y=h[b];y.tokenTypeIdx===void 0&&this[y.name](y.children,p)}}n.defaultVisit=i;function r(d,p){var m=function(){};t.defineNameProp(m,d+"BaseSemantics");var g={visit:function(v,f){if(e.isArray(v)&&(v=v[0]),!e.isUndefined(v))return this[v.name](v.children,f)},validateVisitor:function(){var v=a(this,p);if(!e.isEmpty(v)){var f=e.map(v,function(h){return h.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+f.join(`

`).replace(/\n/g,`
	`)))}}};return m.prototype=g,m.prototype.constructor=m,m._RULE_NAMES=p,m}n.createBaseSemanticVisitorConstructor=r;function o(d,p,m){var g=function(){};t.defineNameProp(g,d+"BaseSemanticsWithDefaults");var v=Object.create(m.prototype);return e.forEach(p,function(f){v[f]=i}),g.prototype=v,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=o;var s;(function(d){d[d.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",d[d.MISSING_METHOD=1]="MISSING_METHOD"})(s=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function a(d,p){var m=c(d,p),g=u(d,p);return m.concat(g)}n.validateVisitor=a;function c(d,p){var m=e.map(p,function(g){if(!e.isFunction(d[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(d.constructor)+" CST Visitor.",type:s.MISSING_METHOD,methodName:g}});return e.compact(m)}n.validateMissingCstMethods=c;var l=["constructor","visit","validateVisitor"];function u(d,p){var m=[];for(var g in d)e.isFunction(d[g])&&!e.contains(l,g)&&!e.contains(p,g)&&m.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(d.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:s.REDUNDANT_METHOD,methodName:g});return m}n.validateRedundantMethods=u}),Vy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=By(),t=At(),i=zy(),r=Fn(),o=function(){function s(){}return s.prototype.initTreeBuilder=function(a){if(this.CST_STACK=[],this.outputCst=a.outputCst,this.nodeLocationTracking=t.has(a,"nodeLocationTracking")?a.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+a.nodeLocationTracking+'"')},s.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(a){a.location={startOffset:NaN,endOffset:NaN}},s.prototype.setInitialNodeLocationOnlyOffsetRegular=function(a){a.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},s.prototype.setInitialNodeLocationFullRecovery=function(a){a.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.setInitialNodeLocationFullRegular=function(a){var c=this.LA(1);a.location={startOffset:c.startOffset,startLine:c.startLine,startColumn:c.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.cstInvocationStateUpdate=function(a,c){var l={name:a,children:{}};this.setInitialNodeLocation(l),this.CST_STACK.push(l)},s.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},s.prototype.cstPostRuleFull=function(a){var c=this.LA(0),l=a.location;l.startOffset<=c.startOffset?(l.endOffset=c.endOffset,l.endLine=c.endLine,l.endColumn=c.endColumn):(l.startOffset=NaN,l.startLine=NaN,l.startColumn=NaN)},s.prototype.cstPostRuleOnlyOffset=function(a){var c=this.LA(0),l=a.location;l.startOffset<=c.startOffset?l.endOffset=c.endOffset:l.startOffset=NaN},s.prototype.cstPostTerminal=function(a,c){var l=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(l,c,a),this.setNodeLocationFromToken(l.location,c)},s.prototype.cstPostNonTerminal=function(a,c){var l=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(l,c,a),this.setNodeLocationFromNode(l.location,a.location)},s.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var a=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=a,a}return this.baseCstVisitorConstructor},s.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var a=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=a,a}return this.baseCstVisitorWithDefaultsConstructor},s.prototype.getLastExplicitRuleShortName=function(){var a=this.RULE_STACK;return a[a.length-1]},s.prototype.getPreviousExplicitRuleShortName=function(){var a=this.RULE_STACK;return a[a.length-2]},s.prototype.getLastExplicitRuleOccurrenceIndex=function(){var a=this.RULE_OCCURRENCE_STACK;return a[a.length-1]},s}();n.TreeBuilder=o}),Gy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=Fn(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),Hy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=At(),t=Io(),i=Fn(),r=Bs(),o=qd(),s=Cn(),a=function(){function c(){}return c.prototype.ACTION=function(l){return l.call(this)},c.prototype.consume=function(l,u,d){return this.consumeInternal(u,l,d)},c.prototype.subrule=function(l,u,d){return this.subruleInternal(u,l,d)},c.prototype.option=function(l,u){return this.optionInternal(u,l)},c.prototype.or=function(l,u){return this.orInternal(u,l)},c.prototype.many=function(l,u){return this.manyInternal(l,u)},c.prototype.atLeastOne=function(l,u){return this.atLeastOneInternal(l,u)},c.prototype.CONSUME=function(l,u){return this.consumeInternal(l,0,u)},c.prototype.CONSUME1=function(l,u){return this.consumeInternal(l,1,u)},c.prototype.CONSUME2=function(l,u){return this.consumeInternal(l,2,u)},c.prototype.CONSUME3=function(l,u){return this.consumeInternal(l,3,u)},c.prototype.CONSUME4=function(l,u){return this.consumeInternal(l,4,u)},c.prototype.CONSUME5=function(l,u){return this.consumeInternal(l,5,u)},c.prototype.CONSUME6=function(l,u){return this.consumeInternal(l,6,u)},c.prototype.CONSUME7=function(l,u){return this.consumeInternal(l,7,u)},c.prototype.CONSUME8=function(l,u){return this.consumeInternal(l,8,u)},c.prototype.CONSUME9=function(l,u){return this.consumeInternal(l,9,u)},c.prototype.SUBRULE=function(l,u){return this.subruleInternal(l,0,u)},c.prototype.SUBRULE1=function(l,u){return this.subruleInternal(l,1,u)},c.prototype.SUBRULE2=function(l,u){return this.subruleInternal(l,2,u)},c.prototype.SUBRULE3=function(l,u){return this.subruleInternal(l,3,u)},c.prototype.SUBRULE4=function(l,u){return this.subruleInternal(l,4,u)},c.prototype.SUBRULE5=function(l,u){return this.subruleInternal(l,5,u)},c.prototype.SUBRULE6=function(l,u){return this.subruleInternal(l,6,u)},c.prototype.SUBRULE7=function(l,u){return this.subruleInternal(l,7,u)},c.prototype.SUBRULE8=function(l,u){return this.subruleInternal(l,8,u)},c.prototype.SUBRULE9=function(l,u){return this.subruleInternal(l,9,u)},c.prototype.OPTION=function(l){return this.optionInternal(l,0)},c.prototype.OPTION1=function(l){return this.optionInternal(l,1)},c.prototype.OPTION2=function(l){return this.optionInternal(l,2)},c.prototype.OPTION3=function(l){return this.optionInternal(l,3)},c.prototype.OPTION4=function(l){return this.optionInternal(l,4)},c.prototype.OPTION5=function(l){return this.optionInternal(l,5)},c.prototype.OPTION6=function(l){return this.optionInternal(l,6)},c.prototype.OPTION7=function(l){return this.optionInternal(l,7)},c.prototype.OPTION8=function(l){return this.optionInternal(l,8)},c.prototype.OPTION9=function(l){return this.optionInternal(l,9)},c.prototype.OR=function(l){return this.orInternal(l,0)},c.prototype.OR1=function(l){return this.orInternal(l,1)},c.prototype.OR2=function(l){return this.orInternal(l,2)},c.prototype.OR3=function(l){return this.orInternal(l,3)},c.prototype.OR4=function(l){return this.orInternal(l,4)},c.prototype.OR5=function(l){return this.orInternal(l,5)},c.prototype.OR6=function(l){return this.orInternal(l,6)},c.prototype.OR7=function(l){return this.orInternal(l,7)},c.prototype.OR8=function(l){return this.orInternal(l,8)},c.prototype.OR9=function(l){return this.orInternal(l,9)},c.prototype.MANY=function(l){this.manyInternal(0,l)},c.prototype.MANY1=function(l){this.manyInternal(1,l)},c.prototype.MANY2=function(l){this.manyInternal(2,l)},c.prototype.MANY3=function(l){this.manyInternal(3,l)},c.prototype.MANY4=function(l){this.manyInternal(4,l)},c.prototype.MANY5=function(l){this.manyInternal(5,l)},c.prototype.MANY6=function(l){this.manyInternal(6,l)},c.prototype.MANY7=function(l){this.manyInternal(7,l)},c.prototype.MANY8=function(l){this.manyInternal(8,l)},c.prototype.MANY9=function(l){this.manyInternal(9,l)},c.prototype.MANY_SEP=function(l){this.manySepFirstInternal(0,l)},c.prototype.MANY_SEP1=function(l){this.manySepFirstInternal(1,l)},c.prototype.MANY_SEP2=function(l){this.manySepFirstInternal(2,l)},c.prototype.MANY_SEP3=function(l){this.manySepFirstInternal(3,l)},c.prototype.MANY_SEP4=function(l){this.manySepFirstInternal(4,l)},c.prototype.MANY_SEP5=function(l){this.manySepFirstInternal(5,l)},c.prototype.MANY_SEP6=function(l){this.manySepFirstInternal(6,l)},c.prototype.MANY_SEP7=function(l){this.manySepFirstInternal(7,l)},c.prototype.MANY_SEP8=function(l){this.manySepFirstInternal(8,l)},c.prototype.MANY_SEP9=function(l){this.manySepFirstInternal(9,l)},c.prototype.AT_LEAST_ONE=function(l){this.atLeastOneInternal(0,l)},c.prototype.AT_LEAST_ONE1=function(l){return this.atLeastOneInternal(1,l)},c.prototype.AT_LEAST_ONE2=function(l){this.atLeastOneInternal(2,l)},c.prototype.AT_LEAST_ONE3=function(l){this.atLeastOneInternal(3,l)},c.prototype.AT_LEAST_ONE4=function(l){this.atLeastOneInternal(4,l)},c.prototype.AT_LEAST_ONE5=function(l){this.atLeastOneInternal(5,l)},c.prototype.AT_LEAST_ONE6=function(l){this.atLeastOneInternal(6,l)},c.prototype.AT_LEAST_ONE7=function(l){this.atLeastOneInternal(7,l)},c.prototype.AT_LEAST_ONE8=function(l){this.atLeastOneInternal(8,l)},c.prototype.AT_LEAST_ONE9=function(l){this.atLeastOneInternal(9,l)},c.prototype.AT_LEAST_ONE_SEP=function(l){this.atLeastOneSepFirstInternal(0,l)},c.prototype.AT_LEAST_ONE_SEP1=function(l){this.atLeastOneSepFirstInternal(1,l)},c.prototype.AT_LEAST_ONE_SEP2=function(l){this.atLeastOneSepFirstInternal(2,l)},c.prototype.AT_LEAST_ONE_SEP3=function(l){this.atLeastOneSepFirstInternal(3,l)},c.prototype.AT_LEAST_ONE_SEP4=function(l){this.atLeastOneSepFirstInternal(4,l)},c.prototype.AT_LEAST_ONE_SEP5=function(l){this.atLeastOneSepFirstInternal(5,l)},c.prototype.AT_LEAST_ONE_SEP6=function(l){this.atLeastOneSepFirstInternal(6,l)},c.prototype.AT_LEAST_ONE_SEP7=function(l){this.atLeastOneSepFirstInternal(7,l)},c.prototype.AT_LEAST_ONE_SEP8=function(l){this.atLeastOneSepFirstInternal(8,l)},c.prototype.AT_LEAST_ONE_SEP9=function(l){this.atLeastOneSepFirstInternal(9,l)},c.prototype.RULE=function(l,u,d){if(d===void 0&&(d=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,l)){var p=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:l,grammarName:this.className}),m={message:p,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:l};this.definitionErrors.push(m)}this.definedRulesNames.push(l);var g=this.defineRule(l,u,d);return this[l]=g,g},c.prototype.OVERRIDE_RULE=function(l,u,d){d===void 0&&(d=i.DEFAULT_RULE_CONFIG);var p=[];p=p.concat(o.validateRuleIsOverridden(l,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(p);var m=this.defineRule(l,u,d);return this[l]=m,m},c.prototype.BACKTRACK=function(l,u){return function(){this.isBackTrackingStack.push(1);var d=this.saveRecogState();try{return l.apply(this,u),!0}catch(p){if(t.isRecognitionException(p))return!1;throw p}finally{this.reloadRecogState(d),this.isBackTrackingStack.pop()}}},c.prototype.getGAstProductions=function(){return this.gastProductionsCache},c.prototype.getSerializedGastProductions=function(){return s.serializeGrammar(e.values(this.gastProductionsCache))},c}();n.RecognizerApi=a}),Wy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=At(),t=cc(),i=Io(),r=Vs(),o=zs(),s=Fn(),a=$d(),c=Ji(),l=Po(),u=Zd(),d=function(){function p(){}return p.prototype.initRecognizerEngine=function(m,g){if(this.className=u.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=l.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(m)){if(e.isEmpty(m))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof m[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(m))this.tokensMap=e.reduce(m,function(_,b){return _[b.name]=b,_},{});else if(e.has(m,"modes")&&e.every(e.flatten(e.values(m.modes)),l.isTokenType)){var v=e.flatten(e.values(m.modes)),f=e.uniq(v);this.tokensMap=e.reduce(f,function(_,b){return _[b.name]=b,_},{})}else if(e.isObject(m))this.tokensMap=e.cloneObj(m);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=c.EOF;var h=e.every(e.values(m),function(_){return e.isEmpty(_.categoryMatches)});this.tokenMatcher=h?l.tokenStructuredMatcherNoCategories:l.tokenStructuredMatcher,l.augmentTokenTypes(e.values(this.tokensMap))},p.prototype.defineRule=function(m,g,v){if(this.selfAnalysisDone)throw Error("Grammar rule <"+m+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var f=e.has(v,"resyncEnabled")?v.resyncEnabled:s.DEFAULT_RULE_CONFIG.resyncEnabled,h=e.has(v,"recoveryValueFunc")?v.recoveryValueFunc:s.DEFAULT_RULE_CONFIG.recoveryValueFunc,_=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[_]=m,this.fullRuleNameToShort[m]=_;function b(M){try{if(this.outputCst===!0){g.apply(this,M);var C=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(C),C}else return g.apply(this,M)}catch(U){return this.invokeRuleCatch(U,f,h)}finally{this.ruleFinallyStateUpdate()}}var y=function(M,C){return M===void 0&&(M=0),this.ruleInvocationStateUpdate(_,m,M),b.call(this,C)},R="ruleName";return y[R]=m,y.originalGrammarAction=g,y},p.prototype.invokeRuleCatch=function(m,g,v){var f=this.RULE_STACK.length===1,h=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(m)){var _=m;if(h){var b=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(b))if(_.resyncedTokens=this.reSyncTo(b),this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];return y.recoveredNode=!0,y}else return v();else{if(this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];y.recoveredNode=!0,_.partialCstResult=y}throw _}}else{if(f)return this.moveToTerminatedState(),v();throw _}}else throw m},p.prototype.optionInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(m,g,v)},p.prototype.optionInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(m.DEF!==void 0){if(_=m.DEF,b=m.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=m;if(h.call(this)===!0)return _.call(this)},p.prototype.atLeastOneInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,m);return this.atLeastOneInternalLogic(m,g,v)},p.prototype.atLeastOneInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(g.DEF!==void 0){if(_=g.DEF,b=g.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=g;if(h.call(this)===!0)for(var R=this.doSingleRepetition(_);h.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[m,g],h,t.AT_LEAST_ONE_IDX,m,o.NextTerminalAfterAtLeastOneWalker)},p.prototype.atLeastOneSepFirstInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,m);this.atLeastOneSepFirstInternalLogic(m,g,v)},p.prototype.atLeastOneSepFirstInternalLogic=function(m,g,v){var f=this,h=g.DEF,_=g.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){h.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,_,y,h,o.NextTerminalAfterAtLeastOneSepWalker],y,t.AT_LEAST_ONE_SEP_IDX,m,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},p.prototype.manyInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.MANY_IDX,m);return this.manyInternalLogic(m,g,v)},p.prototype.manyInternalLogic=function(m,g,v){var f=this,h=this.getLaFuncFromCache(v),_,b;if(g.DEF!==void 0){if(_=g.DEF,b=g.GATE,b!==void 0){var y=h;h=function(){return b.call(f)&&y.call(f)}}}else _=g;for(var R=!0;h.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);this.attemptInRepetitionRecovery(this.manyInternal,[m,g],h,t.MANY_IDX,m,o.NextTerminalAfterManyWalker,R)},p.prototype.manySepFirstInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,m);this.manySepFirstInternalLogic(m,g,v)},p.prototype.manySepFirstInternalLogic=function(m,g,v){var f=this,h=g.DEF,_=g.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){h.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,_,y,h,o.NextTerminalAfterManySepWalker],y,t.MANY_SEP_IDX,m,o.NextTerminalAfterManySepWalker)}},p.prototype.repetitionSepSecondInternal=function(m,g,v,f,h){for(;v();)this.CONSUME(g),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,g,v,f,h],v,t.AT_LEAST_ONE_SEP_IDX,m,h)},p.prototype.doSingleRepetition=function(m){var g=this.getLexerPosition();m.call(this);var v=this.getLexerPosition();return v>g},p.prototype.orInternal=function(m,g){var v=this.getKeyForAutomaticLookahead(t.OR_IDX,g),f=e.isArray(m)?m:m.DEF,h=this.getLaFuncFromCache(v),_=h.call(this,f);if(_!==void 0){var b=f[_];return b.ALT.call(this)}this.raiseNoAltException(g,m.ERR_MSG)},p.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var m=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:m,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,m))}},p.prototype.subruleInternal=function(m,g,v){var f;try{var h=v!==void 0?v.ARGS:void 0;return f=m.call(this,g,h),this.cstPostNonTerminal(f,v!==void 0&&v.LABEL!==void 0?v.LABEL:m.ruleName),f}catch(_){this.subruleInternalError(_,v,m.ruleName)}},p.prototype.subruleInternalError=function(m,g,v){throw i.isRecognitionException(m)&&m.partialCstResult!==void 0&&(this.cstPostNonTerminal(m.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:v),delete m.partialCstResult),m},p.prototype.consumeInternal=function(m,g,v){var f;try{var h=this.LA(1);this.tokenMatcher(h,m)===!0?(this.consumeToken(),f=h):this.consumeInternalError(m,h,v)}catch(_){f=this.consumeInternalRecovery(m,g,_)}return this.cstPostTerminal(v!==void 0&&v.LABEL!==void 0?v.LABEL:m.name,f),f},p.prototype.consumeInternalError=function(m,g,v){var f,h=this.LA(0);throw v!==void 0&&v.ERR_MSG?f=v.ERR_MSG:f=this.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:g,previous:h,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(f,g,h))},p.prototype.consumeInternalRecovery=function(m,g,v){if(this.recoveryEnabled&&v.name==="MismatchedTokenException"&&!this.isBackTracking()){var f=this.getFollowsForInRuleRecovery(m,g);try{return this.tryInRuleRecovery(m,f)}catch(h){throw h.name===a.IN_RULE_RECOVERY_EXCEPTION?v:h}}else throw v},p.prototype.saveRecogState=function(){var m=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:m,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},p.prototype.reloadRecogState=function(m){this.errors=m.errors,this.importLexerState(m.lexerState),this.RULE_STACK=m.RULE_STACK},p.prototype.ruleInvocationStateUpdate=function(m,g,v){this.RULE_OCCURRENCE_STACK.push(v),this.RULE_STACK.push(m),this.cstInvocationStateUpdate(g,m)},p.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},p.prototype.getCurrRuleFullName=function(){var m=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[m]},p.prototype.shortRuleNameToFullName=function(m){return this.shortRuleNameToFull[m]},p.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),c.EOF)},p.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},p}();n.RecognizerEngine=d}),Xy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=Io(),t=At(),i=Vs(),r=Fn(),o=function(){function s(){}return s.prototype.initErrorHandler=function(a){this._errors=[],this.errorMessageProvider=t.has(a,"errorMessageProvider")?a.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},s.prototype.SAVE_ERROR=function(a){if(e.isRecognitionException(a))return a.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(a),a;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(s.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(a){this._errors=a},enumerable:!1,configurable:!0}),s.prototype.raiseEarlyExitException=function(a,c,l){for(var u=this.getCurrRuleFullName(),d=this.getGAstProductions()[u],p=i.getLookaheadPathsForOptionalProd(a,d,c,this.maxLookahead),m=p[0],g=[],v=1;v<=this.maxLookahead;v++)g.push(this.LA(v));var f=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:m,actual:g,previous:this.LA(0),customUserDescription:l,ruleName:u});throw this.SAVE_ERROR(new e.EarlyExitException(f,this.LA(1),this.LA(0)))},s.prototype.raiseNoAltException=function(a,c){for(var l=this.getCurrRuleFullName(),u=this.getGAstProductions()[l],d=i.getLookaheadPathsForOr(a,u,this.maxLookahead),p=[],m=1;m<=this.maxLookahead;m++)p.push(this.LA(m));var g=this.LA(0),v=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:d,actual:p,previous:g,customUserDescription:c,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(v,this.LA(1),g))},s}();n.ErrorHandler=o}),jy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=zs(),t=At(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,s){var a=this.gastProductionsCache[o];if(t.isUndefined(a))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([a],s,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var s=t.first(o.ruleStack),a=this.getGAstProductions(),c=a[s],l=new e.NextAfterTokenWalker(c,o).startWalking();return l},r}();n.ContentAssist=i}),Ky=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=At(),t=Cn(),i=Us(),r=Po(),o=Ji(),s=Fn(),a=cc(),c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(c);var l=!0,u=Math.pow(2,a.BITS_FOR_OCCURRENCE_IDX)-1,d=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([d]);var p=o.createTokenInstance(d,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(p);var m={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=function(){function b(){}return b.prototype.initGastRecorder=function(y){this.recordingProdStack=[],this.RECORDING_PHASE=!1},b.prototype.enableRecording=function(){var y=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var R=function(C){var U=C>0?C:"";y["CONSUME"+U]=function(E,S){return this.consumeInternalRecord(E,C,S)},y["SUBRULE"+U]=function(E,S){return this.subruleInternalRecord(E,C,S)},y["OPTION"+U]=function(E){return this.optionInternalRecord(E,C)},y["OR"+U]=function(E){return this.orInternalRecord(E,C)},y["MANY"+U]=function(E){this.manyInternalRecord(C,E)},y["MANY_SEP"+U]=function(E){this.manySepFirstInternalRecord(C,E)},y["AT_LEAST_ONE"+U]=function(E){this.atLeastOneInternalRecord(C,E)},y["AT_LEAST_ONE_SEP"+U]=function(E){this.atLeastOneSepFirstInternalRecord(C,E)}},M=0;M<10;M++)R(M);y.consume=function(C,U,E){return this.consumeInternalRecord(U,C,E)},y.subrule=function(C,U,E){return this.subruleInternalRecord(U,C,E)},y.option=function(C,U){return this.optionInternalRecord(U,C)},y.or=function(C,U){return this.orInternalRecord(U,C)},y.many=function(C,U){this.manyInternalRecord(C,U)},y.atLeastOne=function(C,U){this.atLeastOneInternalRecord(C,U)},y.ACTION=y.ACTION_RECORD,y.BACKTRACK=y.BACKTRACK_RECORD,y.LA=y.LA_RECORD})},b.prototype.disableRecording=function(){var y=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var R=0;R<10;R++){var M=R>0?R:"";delete y["CONSUME"+M],delete y["SUBRULE"+M],delete y["OPTION"+M],delete y["OR"+M],delete y["MANY"+M],delete y["MANY_SEP"+M],delete y["AT_LEAST_ONE"+M],delete y["AT_LEAST_ONE_SEP"+M]}delete y.consume,delete y.subrule,delete y.option,delete y.or,delete y.many,delete y.atLeastOne,delete y.ACTION,delete y.BACKTRACK,delete y.LA})},b.prototype.ACTION_RECORD=function(y){},b.prototype.BACKTRACK_RECORD=function(y,R){return function(){return!0}},b.prototype.LA_RECORD=function(y){return s.END_OF_FILE},b.prototype.topLevelRuleRecord=function(y,R){try{var M=new t.Rule({definition:[],name:y});return M.name=y,this.recordingProdStack.push(M),R.call(this),this.recordingProdStack.pop(),M}catch(C){if(C.KNOWN_RECORDER_ERROR!==!0)try{C.message=C.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw C}throw C}},b.prototype.optionInternalRecord=function(y,R){return v.call(this,t.Option,y,R)},b.prototype.atLeastOneInternalRecord=function(y,R){v.call(this,t.RepetitionMandatory,R,y)},b.prototype.atLeastOneSepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionMandatoryWithSeparator,R,y,l)},b.prototype.manyInternalRecord=function(y,R){v.call(this,t.Repetition,R,y)},b.prototype.manySepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionWithSeparator,R,y,l)},b.prototype.orInternalRecord=function(y,R){return f.call(this,y,R)},b.prototype.subruleInternalRecord=function(y,R,M){if(_(R),!y||e.has(y,"ruleName")===!1){var C=new Error("<SUBRULE"+h(R)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var U=e.peek(this.recordingProdStack),E=y.ruleName,S=new t.NonTerminal({idx:R,nonTerminalName:E,referencedRule:void 0});return U.definition.push(S),this.outputCst?m:c},b.prototype.consumeInternalRecord=function(y,R,M){if(_(R),!r.hasShortKeyProperty(y)){var C=new Error("<CONSUME"+h(R)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var U=e.peek(this.recordingProdStack),E=new t.Terminal({idx:R,terminalType:y});return U.definition.push(E),p},b}();n.GastRecorder=g;function v(b,y,R,M){M===void 0&&(M=!1),_(R);var C=e.peek(this.recordingProdStack),U=e.isFunction(y)?y:y.DEF,E=new b({definition:[],idx:R});return M&&(E.separator=y.SEP),e.has(y,"MAX_LOOKAHEAD")&&(E.maxLookahead=y.MAX_LOOKAHEAD),this.recordingProdStack.push(E),U.call(this),C.definition.push(E),this.recordingProdStack.pop(),c}function f(b,y){var R=this;_(y);var M=e.peek(this.recordingProdStack),C=e.isArray(b)===!1,U=C===!1?b:b.DEF,E=new t.Alternation({definition:[],idx:y,ignoreAmbiguities:C&&b.IGNORE_AMBIGUITIES===!0});e.has(b,"MAX_LOOKAHEAD")&&(E.maxLookahead=b.MAX_LOOKAHEAD);var S=e.some(U,function(w){return e.isFunction(w.GATE)});return E.hasPredicates=S,M.definition.push(E),e.forEach(U,function(w){var P=new t.Alternative({definition:[]});E.definition.push(P),e.has(w,"IGNORE_AMBIGUITIES")?P.ignoreAmbiguities=w.IGNORE_AMBIGUITIES:e.has(w,"GATE")&&(P.ignoreAmbiguities=!0),R.recordingProdStack.push(P),w.ALT.call(R),R.recordingProdStack.pop()}),c}function h(b){return b===0?"":""+b}function _(b){if(b<0||b>u){var y=new Error("Invalid DSL Method idx value: <"+b+`>
	`+("Idx value must be a none negative value smaller than "+(u+1)));throw y.KNOWN_RECORDER_ERROR=!0,y}}}),Yy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=At(),t=Fn(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var s=o.traceInitPerf,a=typeof s=="number";this.traceInitMaxIdent=a?s:1/0,this.traceInitPerf=a?s>0:s}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,s){if(this.traceInitPerf===!0){this.traceInitIndent++;var a=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(a+"--> <"+o+">");var c=e.timer(s),l=c.time,u=c.value,d=l>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(a+"<-- <"+o+"> time: "+l+"ms"),this.traceInitIndent--,u}else return s()},r}();n.PerformanceTracer=i}),qy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(s){if(s!=="constructor"){var a=Object.getOwnPropertyDescriptor(o,s);a&&(a.get||a.set)?Object.defineProperty(t.prototype,s,a):t.prototype[s]=r.prototype[s]}})})}n.applyMixins=e}),Fn=dt(n=>{var e=n&&n.__extends||function(){var M=function(C,U){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,S){E.__proto__=S}||function(E,S){for(var w in S)Object.prototype.hasOwnProperty.call(S,w)&&(E[w]=S[w])},M(C,U)};return function(C,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");M(C,U);function E(){this.constructor=C}C.prototype=U===null?Object.create(U):(E.prototype=U.prototype,new E)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=At(),i=Dy(),r=Ji(),o=Bs(),s=Uy(),a=$d(),c=ky(),l=Vy(),u=Gy(),d=Hy(),p=Wy(),m=Xy(),g=jy(),v=Ky(),f=Yy(),h=qy();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(M){M[M.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",M[M.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",M[M.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",M[M.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",M[M.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",M[M.LEFT_RECURSION=5]="LEFT_RECURSION",M[M.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",M[M.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",M[M.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",M[M.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",M[M.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",M[M.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",M[M.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function _(M){return M===void 0&&(M=void 0),function(){return M}}n.EMPTY_ALT=_;var b=function(){function M(C,U){this.definitionErrors=[],this.selfAnalysisDone=!1;var E=this;if(E.initErrorHandler(U),E.initLexerAdapter(),E.initLooksAhead(U),E.initRecognizerEngine(C,U),E.initRecoverable(U),E.initTreeBuilder(U),E.initContentAssist(),E.initGastRecorder(U),E.initPerformanceTracer(U),t.has(U,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(U,"skipValidations")?U.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return M.performSelfAnalysis=function(C){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},M.prototype.performSelfAnalysis=function(){var C=this;this.TRACE_INIT("performSelfAnalysis",function(){var U;C.selfAnalysisDone=!0;var E=C.className;C.TRACE_INIT("toFastProps",function(){t.toFastProperties(C)}),C.TRACE_INIT("Grammar Recording",function(){try{C.enableRecording(),t.forEach(C.definedRulesNames,function(w){var P=C[w],L=P.originalGrammarAction,O=void 0;C.TRACE_INIT(w+" Rule",function(){O=C.topLevelRuleRecord(w,L)}),C.gastProductionsCache[w]=O})}finally{C.disableRecording()}});var S=[];if(C.TRACE_INIT("Grammar Resolving",function(){S=s.resolveGrammar({rules:t.values(C.gastProductionsCache)}),C.definitionErrors=C.definitionErrors.concat(S)}),C.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(S)&&C.skipValidations===!1){var w=s.validateGrammar({rules:t.values(C.gastProductionsCache),maxLookahead:C.maxLookahead,tokenTypes:t.values(C.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:E});C.definitionErrors=C.definitionErrors.concat(w)}}),t.isEmpty(C.definitionErrors)&&(C.recoveryEnabled&&C.TRACE_INIT("computeAllProdsFollows",function(){var w=i.computeAllProdsFollows(t.values(C.gastProductionsCache));C.resyncFollows=w}),C.TRACE_INIT("ComputeLookaheadFunctions",function(){C.preComputeLookaheadFunctions(t.values(C.gastProductionsCache))})),!M.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(C.definitionErrors))throw U=t.map(C.definitionErrors,function(w){return w.message}),new Error(`Parser Definition Errors detected:
 `+U.join(`
-------------------------------
`))})},M.DEFER_DEFINITION_ERRORS_HANDLING=!1,M}();n.Parser=b,h.applyMixins(b,[a.Recoverable,c.LooksAhead,l.TreeBuilder,u.LexerAdapter,p.RecognizerEngine,d.RecognizerApi,m.ErrorHandler,g.ContentAssist,v.GastRecorder,f.PerformanceTracer]);var y=function(M){e(C,M);function C(U,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var S=this,w=t.cloneObj(E);return w.outputCst=!0,S=M.call(this,U,w)||this,S}return C}(b);n.CstParser=y;var R=function(M){e(C,M);function C(U,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var S=this,w=t.cloneObj(E);return w.outputCst=!1,S=M.call(this,U,w)||this,S}return C}(b);n.EmbeddedActionsParser=R}),$y=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Wd();function t(i,r){var o=r===void 0?{}:r,s=o.resourceBase,a=s===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":s,c=o.css,l=c===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":c,u=`
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
`;return u+d+p+m+g+v}n.createSyntaxDiagramsCode=t}),Zy=dt(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Wd();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=Fn();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=Us();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=Ji();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=Bs();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var s=Io();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return s.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return s.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return s.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return s.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return s.NoViableAltException}});var a=jd();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return a.defaultLexerErrorProvider}});var c=Cn();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return c.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return c.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return c.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return c.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return c.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return c.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return c.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return c.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return c.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return c.Terminal}});var l=Cn();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return l.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return l.serializeProduction}});var u=Lo();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return u.GAstVisitor}});function d(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=d;var p=$y();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return p.createSyntaxDiagramsCode}});var m=function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g}();n.Parser=m});const lo=Zy();class Jy extends Rn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=o.path===""?Mr.extractUrlBase(e):o.path,a=new Fr(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(e,function(c){try{t(o.parse(c,s))}catch(l){r?r(l):console.error(l),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(T){const x=o(),A=new Qy(x.tokens),D=new tb(x.tokenVocabulary),I=s(D.getBaseCstVisitorConstructor()),F=A.lex(T);D.input=F.tokens;const K=D.vrml();if(D.errors.length>0)throw console.error(D.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return I.visit(K)}function o(){const T=lo.createToken,x=T({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),A=T({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:x}),D=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],I=T({name:"Version",pattern:/#VRML.*/,longer_alt:A}),F=T({name:"NodeName",pattern:new RegExp(D.join("|")),longer_alt:A}),K=T({name:"DEF",pattern:/DEF/,longer_alt:A}),j=T({name:"USE",pattern:/USE/,longer_alt:A}),se=T({name:"ROUTE",pattern:/ROUTE/,longer_alt:A}),fe=T({name:"TO",pattern:/TO/,longer_alt:A}),ie=T({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),ve=T({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),Ve=T({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),We=T({name:"TrueLiteral",pattern:/TRUE/}),Ie=T({name:"FalseLiteral",pattern:/FALSE/}),ke=T({name:"NullLiteral",pattern:/NULL/}),k=T({name:"LSquare",pattern:/\[/}),Ae=T({name:"RSquare",pattern:/]/}),Re=T({name:"LCurly",pattern:/{/}),be=T({name:"RCurly",pattern:/}/}),B=T({name:"Comment",pattern:/#.*/,group:lo.Lexer.SKIPPED}),ye=[T({name:"WhiteSpace",pattern:/[ ,\s]/,group:lo.Lexer.SKIPPED}),F,K,j,se,fe,We,Ie,ke,I,A,x,ie,ve,Ve,k,Ae,Re,be,B],De={};for(let Le=0,Me=ye.length;Le<Me;Le++){const we=ye[Le];De[we.name]=we}return{tokens:ye,tokenVocabulary:De}}function s(T){class x extends T{constructor(){super(),this.validateVisitor()}vrml(I){const F={version:this.visit(I.version),nodes:[],routes:[]};for(let K=0,j=I.node.length;K<j;K++){const se=I.node[K];F.nodes.push(this.visit(se))}if(I.route)for(let K=0,j=I.route.length;K<j;K++){const se=I.route[K];F.routes.push(this.visit(se))}return F}version(I){return I.Version[0].image}node(I){const F={name:I.NodeName[0].image,fields:[]};if(I.field)for(let K=0,j=I.field.length;K<j;K++){const se=I.field[K];F.fields.push(this.visit(se))}return I.def&&(F.DEF=this.visit(I.def[0])),F}field(I){const F={name:I.Identifier[0].image,type:null,values:null};let K;return I.singleFieldValue&&(K=this.visit(I.singleFieldValue[0])),I.multiFieldValue&&(K=this.visit(I.multiFieldValue[0])),F.type=K.type,F.values=K.values,F}def(I){return(I.Identifier||I.NodeName)[0].image}use(I){return{USE:(I.Identifier||I.NodeName)[0].image}}singleFieldValue(I){return A(this,I)}multiFieldValue(I){return A(this,I)}route(I){return{FROM:I.RouteIdentifier[0].image,TO:I.RouteIdentifier[1].image}}}function A(D,I){const F={type:null,values:[]};if(I.node){F.type="node";for(let K=0,j=I.node.length;K<j;K++){const se=I.node[K];F.values.push(D.visit(se))}}if(I.use){F.type="use";for(let K=0,j=I.use.length;K<j;K++){const se=I.use[K];F.values.push(D.visit(se))}}if(I.StringLiteral){F.type="string";for(let K=0,j=I.StringLiteral.length;K<j;K++){const se=I.StringLiteral[K];F.values.push(se.image.replace(/'|"/g,""))}}if(I.NumberLiteral){F.type="number";for(let K=0,j=I.NumberLiteral.length;K<j;K++){const se=I.NumberLiteral[K];F.values.push(parseFloat(se.image))}}if(I.HexLiteral){F.type="hex";for(let K=0,j=I.HexLiteral.length;K<j;K++){const se=I.HexLiteral[K];F.values.push(se.image)}}if(I.TrueLiteral){F.type="boolean";for(let K=0,j=I.TrueLiteral.length;K<j;K++)I.TrueLiteral[K].image==="TRUE"&&F.values.push(!0)}if(I.FalseLiteral){F.type="boolean";for(let K=0,j=I.FalseLiteral.length;K<j;K++)I.FalseLiteral[K].image==="FALSE"&&F.values.push(!1)}return I.NullLiteral&&(F.type="null",I.NullLiteral.forEach(function(){F.values.push(null)})),F}return new x}function a(T){const x=T.nodes,A=new Td;for(let D=0,I=x.length;D<I;D++){const F=x[D];c(F)}for(let D=0,I=x.length;D<I;D++){const F=x[D],K=l(F);K instanceof Ft&&A.add(K),F.name==="WorldInfo"&&(A.userData.worldInfo=K)}return A}function c(T){T.DEF&&(i[T.DEF]=T);const x=T.fields;for(let A=0,D=x.length;A<D;A++){const I=x[A];if(I.type==="node"){const F=I.values;for(let K=0,j=F.length;K<j;K++)c(F[K])}}}function l(T){return T.USE?H(T.USE):(T.build!==void 0||(T.build=u(T)),T.build)}function u(T){const x=T.name;let A;switch(x){case"Anchor":case"Group":case"Transform":case"Collision":A=d(T);break;case"Background":A=p(T);break;case"Shape":A=m(T);break;case"Appearance":A=g(T);break;case"Material":A=v(T);break;case"ImageTexture":A=b(T);break;case"PixelTexture":A=_(T);break;case"TextureTransform":A=y(T);break;case"IndexedFaceSet":A=C(T);break;case"IndexedLineSet":A=U(T);break;case"PointSet":A=E(T);break;case"Box":A=S(T);break;case"Cone":A=w(T);break;case"Cylinder":A=P(T);break;case"Sphere":A=L(T);break;case"ElevationGrid":A=O(T);break;case"Extrusion":A=V(T);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":A=R(T);break;case"WorldInfo":A=M(T);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",x);break}return A!==void 0&&T.DEF!==void 0&&A.hasOwnProperty("name")===!0&&(A.name=T.DEF),A}function d(T){const x=new qn,A=T.fields;for(let D=0,I=A.length;D<I;D++){const F=A[D],K=F.name,j=F.values;switch(K){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":$(j,x);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const se=new q(j[0],j[1],j[2]).normalize(),fe=j[3];x.quaternion.setFromAxisAngle(se,fe);break;case"scale":x.scale.set(j[0],j[1],j[2]);break;case"scaleOrientation":break;case"translation":x.position.set(j[0],j[1],j[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}return x}function p(T){const x=new qn;let A,D,I,F;const K=T.fields;for(let se=0,fe=K.length;se<fe;se++){const ie=K[se],ve=ie.name,Ve=ie.values;switch(ve){case"groundAngle":A=Ve;break;case"groundColor":D=Ve;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":I=Ve;break;case"skyColor":F=Ve;break;default:console.warn("THREE.VRMLLoader: Unknown field:",ve);break}}const j=1e4;if(F){const se=new ao(j,32,16),fe=new Yn({fog:!1,side:ln,depthWrite:!1,depthTest:!1});F.length>3?(Q(se,j,I,Z(F),!0),fe.vertexColors=!0):fe.color.setRGB(F[0],F[1],F[2],Rt);const ie=new on(se,fe);x.add(ie)}if(D&&D.length>0){const se=new ao(j,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),fe=new Yn({fog:!1,side:ln,vertexColors:!0,depthWrite:!1,depthTest:!1});Q(se,j,A,Z(D),!1);const ie=new on(se,fe);x.add(ie)}return x.renderOrder=-1/0,x}function m(T){const x=T.fields;let A=new Yn({name:Rn.DEFAULT_MATERIAL_NAME,color:0}),D;for(let F=0,K=x.length;F<K;F++){const j=x[F],se=j.name,fe=j.values;switch(se){case"appearance":fe[0]!==null&&(A=l(fe[0]));break;case"geometry":fe[0]!==null&&(D=l(fe[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}let I;if(D&&D.attributes.position){const F=D._type;if(F==="points"){const K=new Jl({name:Rn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:A.opacity,transparent:A.transparent});D.attributes.color!==void 0?K.vertexColors=!0:A.isMeshPhongMaterial&&K.color.copy(A.emissive),I=new Ad(D,K)}else if(F==="line"){const K=new $l({name:Rn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:A.opacity,transparent:A.transparent});D.attributes.color!==void 0?K.vertexColors=!0:A.isMeshPhongMaterial&&K.color.copy(A.emissive),I=new Md(D,K)}else D._solid!==void 0&&(A.side=D._solid?ii:Nn),D.attributes.color!==void 0&&(A.vertexColors=!0),I=new on(D,A)}else I=new Ft,I.visible=!1;return I}function g(T){let x=new mm,A;const D=T.fields;for(let I=0,F=D.length;I<F;I++){const K=D[I],j=K.name,se=K.values;switch(j){case"material":if(se[0]!==null){const ie=l(se[0]);ie.diffuseColor&&x.color.copy(ie.diffuseColor),ie.emissiveColor&&x.emissive.copy(ie.emissiveColor),ie.shininess&&(x.shininess=ie.shininess),ie.specularColor&&x.specular.copy(ie.specularColor),ie.transparency&&(x.opacity=1-ie.transparency),ie.transparency>0&&(x.transparent=!0)}else x=new Yn({name:Rn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const fe=se[0];fe!==null&&(fe.name==="ImageTexture"||fe.name==="PixelTexture")&&(x.map=l(fe));break;case"textureTransform":se[0]!==null&&(A=l(se[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",j);break}}if(x.map){if(x.map.__type){switch(x.map.__type){case Hn.INTENSITY_ALPHA:x.opacity=1;break;case Hn.RGB:x.color.set(16777215);break;case Hn.RGBA:x.color.set(16777215),x.opacity=1;break}delete x.map.__type}A&&(x.map.center.copy(A.center),x.map.rotation=A.rotation,x.map.repeat.copy(A.scale),x.map.offset.copy(A.translation))}return x}function v(T){const x={},A=T.fields;for(let D=0,I=A.length;D<I;D++){const F=A[D],K=F.name,j=F.values;switch(K){case"ambientIntensity":break;case"diffuseColor":x.diffuseColor=new rt().setRGB(j[0],j[1],j[2],Rt);break;case"emissiveColor":x.emissiveColor=new rt().setRGB(j[0],j[1],j[2],Rt);break;case"shininess":x.shininess=j[0];break;case"specularColor":x.specularColor=new rt().setRGB(j[0],j[1],j[2],Rt);break;case"transparency":x.transparency=j[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}return x}function f(T,x,A){let D;switch(x){case Hn.INTENSITY:D=parseInt(T),A.r=D,A.g=D,A.b=D,A.a=1;break;case Hn.INTENSITY_ALPHA:D=parseInt("0x"+T.substring(2,4)),A.r=D,A.g=D,A.b=D,A.a=parseInt("0x"+T.substring(4,6));break;case Hn.RGB:A.r=parseInt("0x"+T.substring(2,4)),A.g=parseInt("0x"+T.substring(4,6)),A.b=parseInt("0x"+T.substring(6,8)),A.a=1;break;case Hn.RGBA:A.r=parseInt("0x"+T.substring(2,4)),A.g=parseInt("0x"+T.substring(4,6)),A.b=parseInt("0x"+T.substring(6,8)),A.a=parseInt("0x"+T.substring(8,10));break}}function h(T){let x;switch(T){case 1:x=Hn.INTENSITY;break;case 2:x=Hn.INTENSITY_ALPHA;break;case 3:x=Hn.RGB;break;case 4:x=Hn.RGBA;break}return x}function _(T){let x,A=jn,D=jn;const I=T.fields;for(let F=0,K=I.length;F<K;F++){const j=I[F],se=j.name,fe=j.values;switch(se){case"image":const ie=fe[0],ve=fe[1],Ve=fe[2],We=h(Ve),Ie=new Uint8Array(4*ie*ve),ke={r:0,g:0,b:0,a:0};for(let k=3,Ae=0,Re=fe.length;k<Re;k++,Ae++){f(fe[k],We,ke);const be=Ae*4;Ie[be+0]=ke.r,Ie[be+1]=ke.g,Ie[be+2]=ke.b,Ie[be+3]=ke.a}x=new wo(Ie,ie,ve),x.colorSpace=Rt,x.needsUpdate=!0,x.__type=We;break;case"repeatS":fe[0]===!1&&(A=bn);break;case"repeatT":fe[0]===!1&&(D=bn);break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}return x&&(x.wrapS=A,x.wrapT=D),x}function b(T){let x,A=jn,D=jn;const I=T.fields;for(let F=0,K=I.length;F<K;F++){const j=I[F],se=j.name,fe=j.values;switch(se){case"url":const ie=fe[0];ie&&(x=Te.load(ie));break;case"repeatS":fe[0]===!1&&(A=bn);break;case"repeatT":fe[0]===!1&&(D=bn);break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}return x&&(x.wrapS=A,x.wrapT=D,x.colorSpace=Rt),x}function y(T){const x={center:new tt,rotation:new tt,scale:new tt,translation:new tt},A=T.fields;for(let D=0,I=A.length;D<I;D++){const F=A[D],K=F.name,j=F.values;switch(K){case"center":x.center.set(j[0],j[1]);break;case"rotation":x.rotation=j[0];break;case"scale":x.scale.set(j[0],j[1]);break;case"translation":x.translation.set(j[0],j[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}return x}function R(T){return T.fields[0].values}function M(T){const x={},A=T.fields;for(let D=0,I=A.length;D<I;D++){const F=A[D],K=F.name,j=F.values;switch(K){case"title":x.title=j[0];break;case"info":x.info=j;break;default:console.warn("THREE.VRMLLoader: Unknown field:",K);break}}return x}function C(T){let x,A,D,I,F=!0,K=!0,j=0,se,fe,ie,ve,Ve=!0,We=!0;const Ie=T.fields;for(let Y=0,ye=Ie.length;Y<ye;Y++){const De=Ie[Y],Le=De.name,Me=De.values;switch(Le){case"color":const we=Me[0];we!==null&&(x=l(we));break;case"coord":const Oe=Me[0];Oe!==null&&(A=l(Oe));break;case"normal":const Fe=Me[0];Fe!==null&&(D=l(Fe));break;case"texCoord":const $e=Me[0];$e!==null&&(I=l($e));break;case"ccw":F=Me[0];break;case"colorIndex":se=Me;break;case"colorPerVertex":Ve=Me[0];break;case"convex":break;case"coordIndex":fe=Me;break;case"creaseAngle":j=Me[0];break;case"normalIndex":ie=Me;break;case"normalPerVertex":We=Me[0];break;case"solid":K=Me[0];break;case"texCoordIndex":ve=Me;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Le);break}}if(fe===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new Wt;const ke=W(fe,F);let k,Ae,Re;if(x){if(Ve===!0)if(se&&se.length>0){const Y=W(se,F);k=de(ke,Y,x,3)}else k=He(ke,new vt(x,3));else if(se&&se.length>0){const Y=ue(x,se),ye=te(Y,fe);k=xe(ke,ye)}else{const Y=te(x,fe);k=xe(ke,Y)}pe(k)}if(D)if(We===!0)if(ie&&ie.length>0){const Y=W(ie,F);Ae=de(ke,Y,D,3)}else Ae=He(ke,new vt(D,3));else if(ie&&ie.length>0){const Y=ue(D,ie),ye=te(Y,fe);Ae=xe(ke,ye)}else{const Y=te(D,fe);Ae=xe(ke,Y)}else Ae=G(ke,A,j);if(I)if(ve&&ve.length>0){const Y=W(ve,F);Re=de(ke,Y,I,2)}else Re=He(ke,new vt(I,2));const be=new Wt,B=He(ke,new vt(A,3));return be.setAttribute("position",B),be.setAttribute("normal",Ae),k&&be.setAttribute("color",k),Re&&be.setAttribute("uv",Re),be._solid=K,be._type="mesh",be}function U(T){let x,A,D,I,F=!0;const K=T.fields;for(let ve=0,Ve=K.length;ve<Ve;ve++){const We=K[ve],Ie=We.name,ke=We.values;switch(Ie){case"color":const k=ke[0];k!==null&&(x=l(k));break;case"coord":const Ae=ke[0];Ae!==null&&(A=l(Ae));break;case"colorIndex":D=ke;break;case"colorPerVertex":F=ke[0];break;case"coordIndex":I=ke;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ie);break}}let j;const se=_e(I);if(x){if(F===!0)if(D.length>0){const ve=_e(D);j=de(se,ve,x,3)}else j=He(se,new vt(x,3));else if(D.length>0){const ve=ue(x,D),Ve=re(ve,I);j=Ne(se,Ve)}else{const ve=re(x,I);j=Ne(se,ve)}pe(j)}const fe=new Wt,ie=He(se,new vt(A,3));return fe.setAttribute("position",ie),j&&fe.setAttribute("color",j),fe._type="line",fe}function E(T){let x,A;const D=T.fields;for(let F=0,K=D.length;F<K;F++){const j=D[F],se=j.name,fe=j.values;switch(se){case"color":const ie=fe[0];ie!==null&&(x=l(ie));break;case"coord":const ve=fe[0];ve!==null&&(A=l(ve));break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}const I=new Wt;if(I.setAttribute("position",new vt(A,3)),x){const F=new vt(x,3);pe(F),I.setAttribute("color",F)}return I._type="points",I}function S(T){const x=new q(2,2,2),A=T.fields;for(let I=0,F=A.length;I<F;I++){const K=A[I],j=K.name,se=K.values;switch(j){case"size":x.x=se[0],x.y=se[1],x.z=se[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",j);break}}return new Br(x.x,x.y,x.z)}function w(T){let x=1,A=2,D=!1;const I=T.fields;for(let K=0,j=I.length;K<j;K++){const se=I[K],fe=se.name,ie=se.values;switch(fe){case"bottom":D=!ie[0];break;case"bottomRadius":x=ie[0];break;case"height":A=ie[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",fe);break}}return new Ql(x,A,16,1,D)}function P(T){let x=1,A=2;const D=T.fields;for(let F=0,K=D.length;F<K;F++){const j=D[F],se=j.name,fe=j.values;switch(se){case"bottom":break;case"radius":x=fe[0];break;case"height":A=fe[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}return new Ls(x,x,A,16,1)}function L(T){let x=1;const A=T.fields;for(let I=0,F=A.length;I<F;I++){const K=A[I],j=K.name,se=K.values;switch(j){case"radius":x=se[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",j);break}}return new ao(x,16,16)}function O(T){let x,A,D,I,F=!0,K=!0,j=!0,se=!0,fe=0,ie=2,ve=2,Ve=1,We=1;const Ie=T.fields;for(let Me=0,we=Ie.length;Me<we;Me++){const Oe=Ie[Me],Fe=Oe.name,$e=Oe.values;switch(Fe){case"color":const J=$e[0];J!==null&&(x=l(J));break;case"normal":const oe=$e[0];oe!==null&&(A=l(oe));break;case"texCoord":const he=$e[0];he!==null&&(D=l(he));break;case"height":I=$e;break;case"ccw":se=$e[0];break;case"colorPerVertex":F=$e[0];break;case"creaseAngle":fe=$e[0];break;case"normalPerVertex":K=$e[0];break;case"solid":j=$e[0];break;case"xDimension":ie=$e[0];break;case"xSpacing":Ve=$e[0];break;case"zDimension":ve=$e[0];break;case"zSpacing":We=$e[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Fe);break}}const ke=[],k=[],Ae=[],Re=[];for(let Me=0;Me<ve;Me++)for(let we=0;we<ie;we++){const Oe=Me*ie+we,Fe=Ve*Me,$e=I[Oe],J=We*we;if(ke.push(Fe,$e,J),x&&F===!0){const oe=x[Oe*3+0],he=x[Oe*3+1],Pe=x[Oe*3+2];Ae.push(oe,he,Pe)}if(A&&K===!0){const oe=A[Oe*3+0],he=A[Oe*3+1],Pe=A[Oe*3+2];k.push(oe,he,Pe)}if(D){const oe=D[Oe*2+0],he=D[Oe*2+1];Re.push(oe,he)}else Re.push(Me/(ie-1),we/(ve-1))}const be=[];for(let Me=0;Me<ie-1;Me++)for(let we=0;we<ve-1;we++){const Oe=Me+we*ie,Fe=Me+(we+1)*ie,$e=Me+1+(we+1)*ie,J=Me+1+we*ie;se===!0?(be.push(Oe,$e,Fe),be.push($e,Oe,J)):(be.push(Oe,Fe,$e),be.push($e,J,Oe))}const B=He(be,new vt(ke,3)),Y=He(be,new vt(Re,2));let ye,De;if(x){if(F===!1){for(let Me=0;Me<ie-1;Me++)for(let we=0;we<ve-1;we++){const Oe=Me+we*(ie-1),Fe=x[Oe*3+0],$e=x[Oe*3+1],J=x[Oe*3+2];Ae.push(Fe,$e,J),Ae.push(Fe,$e,J),Ae.push(Fe,$e,J),Ae.push(Fe,$e,J),Ae.push(Fe,$e,J),Ae.push(Fe,$e,J)}ye=new vt(Ae,3)}else ye=He(be,new vt(Ae,3));pe(ye)}if(A)if(K===!1){for(let Me=0;Me<ie-1;Me++)for(let we=0;we<ve-1;we++){const Oe=Me+we*(ie-1),Fe=A[Oe*3+0],$e=A[Oe*3+1],J=A[Oe*3+2];k.push(Fe,$e,J),k.push(Fe,$e,J),k.push(Fe,$e,J),k.push(Fe,$e,J),k.push(Fe,$e,J),k.push(Fe,$e,J)}De=new vt(k,3)}else De=He(be,new vt(k,3));else De=G(be,ke,fe);const Le=new Wt;return Le.setAttribute("position",B),Le.setAttribute("normal",De),Le.setAttribute("uv",Y),ye&&Le.setAttribute("color",ye),Le._solid=j,Le._type="mesh",Le}function V(T){let x=[1,1,1,-1,-1,-1,-1,1,1,1],A=[0,0,0,0,1,0],D,I,F=!0,K=!0,j=0,se=!0,fe=!0;const ie=T.fields;for(let Le=0,Me=ie.length;Le<Me;Le++){const we=ie[Le],Oe=we.name,Fe=we.values;switch(Oe){case"beginCap":F=Fe[0];break;case"ccw":K=Fe[0];break;case"convex":break;case"creaseAngle":j=Fe[0];break;case"crossSection":x=Fe;break;case"endCap":se=Fe[0];break;case"orientation":I=Fe;break;case"scale":D=Fe;break;case"solid":fe=Fe[0];break;case"spine":A=Fe;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Oe);break}}const ve=x[0]===x[x.length-2]&&x[1]===x[x.length-1],Ve=[],We=new q,Ie=new q,ke=new q,k=new q,Ae=new Dn;for(let Le=0,Me=0,we=0,Oe=A.length;Le<Oe;Le+=3,Me+=2,we+=4){We.fromArray(A,Le),Ie.x=D?D[Me+0]:1,Ie.y=1,Ie.z=D?D[Me+1]:1,ke.x=I?I[we+0]:0,ke.y=I?I[we+1]:0,ke.z=I?I[we+2]:1;const Fe=I?I[we+3]:0;for(let $e=0,J=x.length;$e<J;$e+=2)k.x=x[$e+0],k.y=0,k.z=x[$e+1],k.multiply(Ie),Ae.setFromAxisAngle(ke,Fe),k.applyQuaternion(Ae),k.add(We),Ve.push(k.x,k.y,k.z)}const Re=[],be=A.length/3,B=x.length/2;for(let Le=0;Le<be-1;Le++)for(let Me=0;Me<B-1;Me++){const we=Me+Le*B;let Oe=Me+1+Le*B;const Fe=Me+(Le+1)*B;let $e=Me+1+(Le+1)*B;Me===B-2&&ve===!0&&(Oe=Le*B,$e=(Le+1)*B),K===!0?(Re.push(we,Oe,Fe),Re.push(Fe,Oe,$e)):(Re.push(we,Fe,Oe),Re.push(Fe,$e,Oe))}if(F===!0||se===!0){const Le=[];for(let Oe=0,Fe=x.length;Oe<Fe;Oe+=2)Le.push(new tt(x[Oe],x[Oe+1]));const Me=ec.triangulateShape(Le,[]),we=[];for(let Oe=0,Fe=Me.length;Oe<Fe;Oe++){const $e=Me[Oe];we.push($e[0],$e[1],$e[2])}if(F===!0)for(let Oe=0,Fe=we.length;Oe<Fe;Oe+=3)K===!0?Re.push(we[Oe+0],we[Oe+1],we[Oe+2]):Re.push(we[Oe+0],we[Oe+2],we[Oe+1]);if(se===!0){const Oe=B*(be-1);for(let Fe=0,$e=we.length;Fe<$e;Fe+=3)K===!0?Re.push(Oe+we[Fe+0],Oe+we[Fe+2],Oe+we[Fe+1]):Re.push(Oe+we[Fe+0],Oe+we[Fe+1],Oe+we[Fe+2])}}const Y=He(Re,new vt(Ve,3)),ye=G(Re,Ve,j),De=new Wt;return De.setAttribute("position",Y),De.setAttribute("normal",ye),De._solid=fe,De._type="mesh",De}function H(T){const x=i[T],A=l(x);return A.isObject3D||A.isMaterial?A.clone():A}function $(T,x){for(let A=0,D=T.length;A<D;A++){const I=l(T[A]);I instanceof Ft&&x.add(I)}}function W(T,x){const A=[];let D=0;for(let I=0,F=T.length;I<F;I++){const K=T[D],j=T[I+(x?1:2)],se=T[I+(x?2:1)];A.push(K,j,se),(T[I+3]===-1||I+3>=F)&&(I+=3,D=I+1)}return A}function te(T,x){const A=[];let D=0;for(let I=0,F=x.length;I<F;I++){const K=D*3,j=T[K],se=T[K+1],fe=T[K+2];A.push(j,se,fe),(x[I+3]===-1||I+3>=F)&&(I+=3,D++)}return A}function ue(T,x){const A=[];for(let D=0,I=x.length;D<I;D++){const K=x[D]*3,j=T[K],se=T[K+1],fe=T[K+2];A.push(j,se,fe)}return A}function _e(T){const x=[];for(let A=0,D=T.length;A<D;A++){const I=T[A],F=T[A+1];x.push(I,F),(T[A+2]===-1||A+2>=D)&&(A+=2)}return x}function re(T,x){const A=[];let D=0;for(let I=0,F=x.length;I<F;I++){const K=D*3,j=T[K],se=T[K+1],fe=T[K+2];A.push(j,se,fe),(x[I+2]===-1||I+2>=F)&&(I+=2,D++)}return A}const ne=new q,Ce=new q,ee=new q,z=new tt,X=new tt,le=new tt;function de(T,x,A,D){const I=[];for(let F=0,K=T.length;F<K;F+=3){const j=x[F],se=x[F+1],fe=x[F+2];D===2?(z.fromArray(A,j*D),X.fromArray(A,se*D),le.fromArray(A,fe*D),I.push(z.x,z.y),I.push(X.x,X.y),I.push(le.x,le.y)):(ne.fromArray(A,j*D),Ce.fromArray(A,se*D),ee.fromArray(A,fe*D),I.push(ne.x,ne.y,ne.z),I.push(Ce.x,Ce.y,Ce.z),I.push(ee.x,ee.y,ee.z))}return new vt(I,D)}function xe(T,x){const A=[];for(let D=0,I=0,F=T.length;D<F;D+=3,I++)ne.fromArray(x,I*3),A.push(ne.x,ne.y,ne.z),A.push(ne.x,ne.y,ne.z),A.push(ne.x,ne.y,ne.z);return new vt(A,3)}function Ne(T,x){const A=[];for(let D=0,I=0,F=T.length;D<F;D+=2,I++)ne.fromArray(x,I*3),A.push(ne.x,ne.y,ne.z),A.push(ne.x,ne.y,ne.z);return new vt(A,3)}function He(T,x){const A=x.array,D=x.itemSize,I=new A.constructor(T.length*D);let F=0,K=0;for(let j=0,se=T.length;j<se;j++){F=T[j]*D;for(let fe=0;fe<D;fe++)I[K++]=A[F++]}return new vt(I,D)}const Ue=new q,et=new q;function G(T,x,A){const D=[],I={};for(let K=0,j=T.length;K<j;K+=3){const se=T[K],fe=T[K+1],ie=T[K+2],ve=new nb(se,fe,ie);ne.fromArray(x,se*3),Ce.fromArray(x,fe*3),ee.fromArray(x,ie*3),et.subVectors(ee,Ce),Ue.subVectors(ne,Ce),et.cross(Ue),et.normalize(),ve.normal.copy(et),I[se]===void 0&&(I[se]=[]),I[fe]===void 0&&(I[fe]=[]),I[ie]===void 0&&(I[ie]=[]),I[se].push(ve.normal),I[fe].push(ve.normal),I[ie].push(ve.normal),D.push(ve)}const F=[];for(let K=0,j=D.length;K<j;K++){const se=D[K],fe=Ke(I[se.a],se.normal,A),ie=Ke(I[se.b],se.normal,A),ve=Ke(I[se.c],se.normal,A);ne.fromArray(x,se.a*3),Ce.fromArray(x,se.b*3),ee.fromArray(x,se.c*3),F.push(fe.x,fe.y,fe.z),F.push(ie.x,ie.y,ie.z),F.push(ve.x,ve.y,ve.z)}return new vt(F,3)}function Ke(T,x,A){const D=new q;if(A===0)D.copy(x);else for(let I=0,F=T.length;I<F;I++)T[I].angleTo(x)<A&&D.add(T[I]);return D.normalize()}function Z(T){const x=[];for(let A=0,D=T.length;A<D;A+=3)x.push(new rt(T[A],T[A+1],T[A+2]));return x}function pe(T){const x=new rt;for(let A=0;A<T.count;A++)x.fromBufferAttribute(T,A),_t.colorSpaceToWorking(x,Rt),T.setXYZ(A,x.r,x.g,x.b)}function Q(T,x,A,D,I){const F=[],K=I===!0?0:Math.PI;for(let Ve=0,We=D.length;Ve<We;Ve++){let Ie=Ve===0?0:A[Ve-1];Ie=I===!0?Ie:K-Ie;const ke=new q;ke.setFromSphericalCoords(x,Ie,0),F.push(ke)}const j=T.index,se=T.attributes.position,fe=new jt(new Float32Array(T.attributes.position.count*3),3),ie=new q,ve=new rt;for(let Ve=0;Ve<j.count;Ve++){const We=j.getX(Ve);ie.fromBufferAttribute(se,We);let Ie,ke,k=1;for(let be=1;be<F.length;be++){Ie=be-1,ke=be;const B=F[Ie],Y=F[ke];if(I===!0){if(ie.y<=B.y&&ie.y>Y.y){k=Math.abs(B.y-ie.y)/Math.abs(B.y-Y.y);break}}else if(ie.y>=B.y&&ie.y<Y.y){k=Math.abs(B.y-ie.y)/Math.abs(B.y-Y.y);break}}const Ae=D[Ie],Re=D[ke];ve.copy(Ae).lerp(Re,k),_t.colorSpaceToWorking(ve,Rt),fe.setXYZ(We,ve.r,ve.g,ve.b)}T.setAttribute("color",fe)}const Te=new Dd(this.manager);if(Te.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const Se=r(e);return a(Se)}}class Qy{constructor(e){this.lexer=new lo.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const eb=lo.CstParser;class tb extends eb{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,s=e.LSquare,a=e.RSquare,c=e.Identifier,l=e.RouteIdentifier,u=e.StringLiteral,d=e.HexLiteral,p=e.NumberLiteral,m=e.TrueLiteral,g=e.FalseLiteral,v=e.NullLiteral,f=e.DEF,h=e.USE,_=e.ROUTE,b=e.TO,y=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(y),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(c),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(f),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("use",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(v)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(s),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(v)}}])}),t.CONSUME(a)}),t.RULE("route",function(){t.CONSUME(_),t.CONSUME(l),t.CONSUME(b),t.CONSUME2(l)}),this.performSelfAnalysis()}}class nb{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new q}}const Hn={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},Gs=n=>(vh("data-v-bffbbc65"),n=n(),_h(),n),ib={key:0,class:"options-div"},rb={class:"select-div"},ob={key:0,class:"radio-list"},sb=Gs(()=>nn("label",{class:"label"},[nn("strong",null,"Size:")],-1)),ab={class:"radio-grid"},lb={key:1,class:"radio-list"},cb=Gs(()=>nn("label",{class:"label"},[nn("strong",null,"Version:")],-1)),ub={class:"radio-grid"},db={key:2,class:"bare-list"},hb={key:3,class:"radio-list"},fb=Gs(()=>nn("label",{class:"label"},[nn("strong",null,"Side:")],-1)),pb={class:"radio-grid"},mb={key:4,class:"checkbox-list"},gb=Gs(()=>nn("label",{class:"label"},[nn("strong",null,"Parts:")],-1)),xb={class:"checkbox-grid"},vb=350,xr=4,_b="0xff3030",yb=Kt({__name:"ModelViewer",props:{models:{},backgroundColor:{},disableExplode:{type:Boolean},hideControls:{type:Boolean},height:{}},setup(n){const e=n,t=lt(null);let i,r,o,s,a=null,c=new qn,l=0,u=null,d=!1,p=!0,m=null;const g=new Ny,v=new Jy,f=new $_;f.setDecoderPath("./draco/"),f.setDecoderConfig({type:"wasm"});const h=new J_;h.setDRACOLoader(f);const _=lt(null),b=lt(null),y=lt(null),R=lt([]),M=lt(null),C=lt(!1),U=lt("left"),E=lt(null),S=["small","big"],w={small:"Small",big:"Big"};let P=null;const L=lt(!1);let O=new Map,V=new Map,H=new Map,$=new Map,W=new Map,te=1;const ue=[];let _e=null;function re(){if(_e)return _e;const J=128,oe=new Uint8Array(J*J*4);for(let he=0;he<oe.length;he++)oe[he]=128+Math.random()*40;return _e=new wo(oe,J,J,wn),_e.wrapS=_e.wrapT=jn,_e.repeat.set(10,10),_e.needsUpdate=!0,_e}let ne=new Map,Ce=new Map;const ee=nt(()=>(ne.clear(),Ce.clear(),e.models.map(oe=>{if(ne.set(oe.key,oe),!(oe.children&&oe.children.length>0))return{label:oe.label,value:oe.key};if(oe.children.every(qe=>!!qe.src))return{label:oe.label,value:oe.key};const ze=oe.children.map(qe=>(ne.set(qe.key,qe),Ce.set(qe.key,oe.key),{label:qe.label,value:qe.key}));return{label:oe.label,value:oe.key,children:ze}})));function z(J,oe){if(oe){if(oe.scale!==void 0){const he=typeof oe.scale=="number"?{x:oe.scale,y:oe.scale,z:oe.scale}:oe.scale;J.scale.set(he.x,he.y,he.z)}oe.rotation&&J.rotation.set(yn.degToRad(oe.rotation.x),yn.degToRad(oe.rotation.y),yn.degToRad(oe.rotation.z)),oe.position&&J.position.add(new q(oe.position.x,oe.position.y,oe.position.z))}}function X(J,oe=null){const Pe=(le(J)?U.value==="left"?J.leftSrc:J.rightSrc:null)??(J==null?void 0:J.src)??oe;return Pe?C.value&&(J!=null&&J.bareSrc)?J.bareSrc:Pe:null}function le(J){return!!(J!=null&&J.leftSrc&&(J!=null&&J.rightSrc))}function de(){const J=_.value;return J!=null&&J.length?ne.get(J[J.length-1]):void 0}function xe(J){return!!(J.children&&J.children.length>0)?J.key||J.src:J.src||J.key}function Ne(J){return J.find(oe=>oe.isDefault)??J[J.length-1]}function He(J){return S.filter(oe=>J.some(he=>he.size===oe))}const Ue=nt(()=>{const J={versionOptions:[],isGroup:!1,children:[],filePaths:[],hasBare:!1,hasAnyBare:!1,hasSides:!1,sizes:[]};if(!_.value||_.value.length<1)return J;const oe=_.value[_.value.length-1],he=ne.get(oe);if(!he)return J;if(!he.children||he.children.length===0){const Je=X(he);return{versionOptions:[],isGroup:!1,children:[],filePaths:Je?[{key:he.key,path:Je,entry:he}]:[],hasBare:!!he.bareSrc,hasAnyBare:!!he.bareSrc,hasSides:le(he),sizes:[]}}const Pe=He(he.children),qe=(Pe.length>1?he.children.filter(Je=>!Je.size||Je.size===E.value):he.children).map(Je=>{const Qt=!!Je.children&&Je.children.length>0,Un=Je.isGroup||Qt?Je.key||Je.src:Je.src||Je.key;return{label:Je.label,value:Un,key:Je.key,raw:Je,isGroup:Qt,children:Je.children,src:Je.src,bareSrc:Je.bareSrc,leftSrc:Je.leftSrc,rightSrc:Je.rightSrc,colorHex:Je.colorHex,opacity:Je.opacity}}),Xe=qe.find(Je=>Je.value===M.value),Et=!!(Xe&&Xe.children&&Xe.children.length>0);let ft=[],Nt=[];const kt=(Je,Qt=null)=>{const Un=X(Je,Qt);return Un?[{key:(Je==null?void 0:Je.key)??Un,path:Un,entry:(Je==null?void 0:Je.raw)??Je}]:[]};return M.value&&(M.value.includes("/")?Nt=kt(Xe,M.value):Xe&&(Et&&Xe.children?(ft=Xe.children.map(Je=>({...Je})),Nt=ft.flatMap(Je=>{const Qt=X(Je);return Qt?[{key:Je.key,path:Qt,entry:Je}]:[]})):Xe.src&&(Nt=kt(Xe)))),{versionOptions:qe,isGroup:Et,children:ft,filePaths:Nt,hasBare:!Et&&!!(Xe!=null&&Xe.bareSrc),hasAnyBare:!Et&&qe.some(Je=>!!Je.bareSrc),hasSides:!Et&&le(Xe),sizes:Pe.length>1?Pe:[]}}),et=nt(()=>Ue.value.versionOptions),G=nt(()=>Ue.value.isGroup),Ke=nt(()=>G.value&&!e.disableExplode),Z=nt(()=>Ue.value.children),pe=nt(()=>{const J=[],oe=new Map;for(const he of Z.value){const Pe=he.partGroup;if(!Pe){J.push({key:he.key,label:he.name??he.label??"Unnamed Part",partKeys:[he.key]});continue}const ze=oe.get(Pe);ze===void 0?(oe.set(Pe,J.length),J.push({key:`group:${Pe}`,label:Pe,partKeys:[he.key]})):J[ze].partKeys.push(he.key)}return J});function Q(J){return J.every(oe=>R.value.includes(oe))}function Te(J,oe){const he=new Set(R.value);for(const Pe of J)oe?he.add(Pe):he.delete(Pe);R.value=Array.from(he)}const Se=nt(()=>Ue.value.filePaths),Be=nt(()=>Ue.value.hasBare),T=nt(()=>Ue.value.hasAnyBare),x=nt(()=>Ue.value.hasSides),A=nt(()=>Ue.value.sizes);tn(()=>e.models,()=>{var oe;if(_.value)return;const J=e.models;if(!(!J||J.length===0)){ee.value;for(const he of J){const Pe=!!((oe=he.children)!=null&&oe.length)&&he.children.every(ze=>!!ze.src);if(he.children&&he.children.length>0&&!Pe){const ze=he.children[0];if(ze){_.value=[he.key,ze.key],y.value=ze.key;return}}else if(he.src||Pe){_.value=[he.key],y.value=he.key;return}}}},{immediate:!0}),tn(y,J=>{if(!J){_.value=null;return}const oe=Array.isArray(J)?J[J.length-1]:J,he=[];let Pe=oe;const ze=new Set;for(;Pe&&!ze.has(Pe);)he.unshift(Pe),ze.add(Pe),Pe=Ce.get(Pe);he.length===0&&he.push(oe),_.value=he}),tn(_,J=>{if(!J||J.length<1)return;const oe=J[J.length-1],he=ne.get(oe);if(!he){M.value=null,R.value=[],E.value=null,I();return}if(!he.children||he.children.length===0){M.value=he.src||null,R.value=[],E.value=null,I();return}const Pe=he.children,ze=Ne(Pe),qe=!!(ze.children&&ze.children.length>0);M.value=xe(ze),E.value=He(Pe).length>1?ze.size??S[0]:null,qe&&ze.children?R.value=ze.children.filter(Xe=>!Xe.defaultHidden).map(Xe=>Xe.key):R.value=[],I()},{immediate:!0}),tn(M,J=>{if(!J||!_.value||_.value.length<1){I();return}const oe=_.value[_.value.length-1],he=ne.get(oe);if(!he||!he.children){I();return}const Pe=he.children.find(ze=>(!!(ze.children&&ze.children.length>0)?ze.key||ze.src:ze.src||ze.key)===J);Pe&&Pe.children&&(R.value=Pe.children.filter(ze=>!ze.defaultHidden).map(ze=>ze.key)),I()},{immediate:!0}),tn(R,()=>{if(!G.value||!a){I();return}const J=new Set(R.value);a.children.forEach(oe=>{(oe instanceof on||oe instanceof Ft&&oe.children.length>0)&&(oe.visible=J.has(oe.userData.partKey))}),L.value&&we(),be()},{deep:!0}),tn(C,()=>{Be.value&&I()}),tn(Be,J=>{J||(C.value=!1)}),tn(U,()=>{x.value&&I({forceFit:!0})}),tn(E,J=>{var qe;if(!J||!_.value)return;const oe=ne.get(_.value[_.value.length-1]);if(!((qe=oe==null?void 0:oe.children)!=null&&qe.length))return;const he=oe.children,Pe=he.find(Xe=>xe(Xe)===M.value);if(Pe&&(!Pe.size||Pe.size===J))return;const ze=he.filter(Xe=>Xe.size===J);ze.length&&(M.value=xe(Ne(ze)))}),tn(G,J=>{!J&&L.value&&(L.value=!1,Fe())}),Eo(()=>{D(),m=new IntersectionObserver(([J])=>{p=J.isIntersecting,p?Ae():Re()},{rootMargin:"100px"}),m.observe(t.value),I(),be()}),As(()=>{Re(),p=!1,ue.length=0,m==null||m.disconnect(),m=null,s==null||s.dispose(),a&&(i.remove(a),ye(a),a=null),F(),i==null||i.clear(),o&&(o.dispose(),o.forceContextLoss(),o.domElement.remove())});function D(){i=new Td,i.background=new rt(e.backgroundColor||getComputedStyle(document.documentElement).getPropertyValue("--background-color").trim()||"#101014");const J=t.value.clientWidth,oe=e.height??500;r=new pn(45,J/oe,.01,1e4),r.up.set(0,0,1),r.position.set(60,-60,60),o=new D_({antialias:!0,logarithmicDepthBuffer:!0}),o.setSize(J,oe),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=Rt,t.value.appendChild(o.domElement),s=new U_(r,o.domElement),s.enableDamping=!0,s.dampingFactor=.05,s.addEventListener("change",be);const he=new Fm(16777215,.6);i.add(he);const Pe=new ms(16777215,.8);Pe.position.set(5,5,5),i.add(Pe);const ze=new ms(16777215,.4);ze.position.set(-5,0,-5),i.add(ze);const qe=new ms(16777215,.3);qe.position.set(0,-5,-5),i.add(qe),i.add(c)}async function I(J={}){var ft;if(!i||!Se.value.length)return;const oe=++l,he=JSON.stringify(b.value)!==JSON.stringify(_.value),Pe=M.value!==P,ze=new qn,qe=[],Xe=de();Xe!=null&&Xe.orientation&&ze.rotation.set(yn.degToRad(Xe.orientation.x),yn.degToRad(Xe.orientation.y),yn.degToRad(Xe.orientation.z));for(const{key:Nt,path:kt,entry:Je}of Se.value){const Qt=kt.toLowerCase(),Un=Qt.endsWith(".wrl")||Qt.endsWith(".vrml"),Hr=Qt.endsWith(".glb")||Qt.endsWith(".gltf");let un;Hr?(un=await fe(kt),Je!=null&&Je.colorHex&&ve(un,Je)):Un?un=await se(kt):un=ke(await j(kt),Je),un.userData.src=kt,un.userData.partKey=Nt,un.userData.partEntry=Je,z(un,Je),G.value&&(un.visible=R.value.includes(Nt)),qe.push(un),ze.add(un)}const Et=et.value.find(Nt=>Nt.value===M.value);if(We(ze,((ft=Et==null?void 0:Et.raw)==null?void 0:ft.highlights)??(Xe==null?void 0:Xe.highlights)),oe!==l||!i){ye(ze);return}if(b.value=_.value?[..._.value]:null,a&&(i.remove(a),ye(a)),a=ze,i.add(a),Pe){P=M.value??null;const Nt=et.value.find(kt=>kt.value===M.value);Nt&&Nt.isGroup&&Nt.children&&qe.length>0&&(a.updateMatrixWorld(!0),Oe(qe,a,Nt.children)),he&&k(a,Xe==null?void 0:Xe.view)}else J.forceFit?k(a,Xe==null?void 0:Xe.view):s.update();a.children.forEach(Nt=>{if(!Nt.userData.partKey)return;const kt=Nt.userData.partKey;O.has(kt)||O.set(kt,Nt.position.clone()),V.has(kt)||V.set(kt,Nt.rotation.clone())}),L.value&&we(),K(),be()}function F(){c.children.forEach(J=>{var he,Pe;const oe=J;(he=oe.geometry)==null||he.dispose(),(Pe=oe.material)==null||Pe.dispose()}),c.clear()}function K(){F()}function j(J){return new Promise((oe,he)=>{g.load(J,oe,void 0,he)})}function se(J){return new Promise((oe,he)=>{v.load(J,oe,void 0,he)})}function fe(J){return new Promise((oe,he)=>{h.load(J,Pe=>oe(Pe.scene),void 0,he)})}function ie(J){const oe=(J==null?void 0:J.colorHex)??"0xffffff",he=(J==null?void 0:J.opacity)??1,Pe=new Ns({color:parseInt(oe.replace("#",""),16),transparent:he<1,opacity:he,roughness:.6,metalness:.05,emissive:1118481,normalMap:re(),normalScale:new tt(.2,.2),side:Nn});return Pe.onBeforeCompile=ze=>{ze.fragmentShader=ze.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        // vNormal only exists under smooth shading; 'normal' works either way
        float rim = 1.0 - max(dot(normalize(normal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `)},Pe}function ve(J,oe){J.traverse(he=>{const Pe=he;if(!Pe.isMesh)return;const ze=ie(oe);ze.flatShading=!Pe.geometry.getAttribute("normal");const qe=Pe.material;Pe.material=ze,Array.isArray(qe)?qe.forEach(De):qe&&De(qe)})}function Ve(J){const oe=parseInt(J.replace("#",""),16);return new q((oe>>16&255)/255,(oe>>8&255)/255,(oe&255)/255)}function We(J,oe){if(!(oe!=null&&oe.length))return;const he=oe.slice(0,xr),Pe=(Xe,Et)=>[...Xe,...Array.from({length:xr-Xe.length},Et)];J.updateMatrix();const ze={hlCount:{value:he.length},hlMin:{value:Pe(he.map(Xe=>new q(Xe.min.x,Xe.min.y,Xe.min.z)),()=>new q)},hlMax:{value:Pe(he.map(Xe=>new q(Xe.max.x,Xe.max.y,Xe.max.z)),()=>new q)},hlColor:{value:Pe(he.map(Xe=>Ve(Xe.colorHex??_b)),()=>new q)},hlFrame:{value:J.matrix.clone().invert()}},qe=new Set;J.traverse(Xe=>{const Et=Xe;if(Et.isMesh)for(const ft of Array.isArray(Et.material)?Et.material:[Et.material])qe.has(ft)||(qe.add(ft),Ie(ft,ze))})}function Ie(J,oe){const he=J.onBeforeCompile,Pe=J.customProgramCacheKey();J.onBeforeCompile=(ze,qe)=>{he.call(J,ze,qe),Object.assign(ze.uniforms,oe),ze.vertexShader=ze.vertexShader.replace("#include <common>",`#include <common>
        uniform mat4 hlFrame;
        varying vec3 vHlPos;`).replace("#include <project_vertex>",`#include <project_vertex>
        vHlPos = (hlFrame * modelMatrix * vec4(transformed, 1.0)).xyz;`),ze.fragmentShader=ze.fragmentShader.replace("#include <common>",`#include <common>
        uniform int hlCount;
        uniform vec3 hlMin[${xr}];
        uniform vec3 hlMax[${xr}];
        uniform vec3 hlColor[${xr}];
        varying vec3 vHlPos;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        for (int i = 0; i < ${xr}; i++) {
          if (i >= hlCount) break;
          if (all(greaterThanEqual(vHlPos, hlMin[i])) && all(lessThanEqual(vHlPos, hlMax[i]))) {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, hlColor[i], 0.65);
          }
        }`)},J.customProgramCacheKey=()=>`${Pe}|highlight`,J.needsUpdate=!0}function ke(J,oe){J.computeVertexNormals();const he=oe;let Pe=new q(0,0,0);if(he!=null&&he.rotationPivot){J.computeBoundingBox();const qe=new q;J.boundingBox.getCenter(qe),Pe.set(he.rotationPivot.x+qe.x,he.rotationPivot.y+qe.y,he.rotationPivot.z+qe.z),J.translate(-Pe.x,-Pe.y,-Pe.z)}const ze=new on(J,ie(he));return he!=null&&he.rotationPivot?ze.position.copy(Pe):ze.position.set(0,0,0),ze}function k(J,oe){const he=J??a;if(!he)return;he.updateMatrixWorld(!0);const Pe=new On().setFromObject(he),ze=Pe.getSize(new q).length(),qe=Pe.getCenter(new q),Xe=new q((oe==null?void 0:oe.x)??1,(oe==null?void 0:oe.y)??1,(oe==null?void 0:oe.z)??1).normalize().multiplyScalar(ze*.8*Math.sqrt(3));s.target.copy(qe),r.position.copy(qe).add(Xe),r.lookAt(qe)}function Ae(){u===null&&p&&o&&(u=requestAnimationFrame(B))}function Re(){u!==null&&cancelAnimationFrame(u),u=null}function be(){d=!0,Ae()}function B(){if(u=null,!p||!o)return;d=!1,Y(performance.now());const J=s.update();o.render(i,r),(J||d||ue.length>0)&&Ae()}function Y(J){for(let oe=ue.length-1;oe>=0;oe--){const he=ue[oe],Pe=Math.min((J-he.startTime)/vb,1),ze=Pe<.5?2*Pe*Pe:1-Math.pow(-2*Pe+2,2)/2;he.mesh.position.lerpVectors(he.startPos,he.targetPos,ze),he.mesh.quaternion.slerpQuaternions(he.startQuat,he.endQuat,ze),Pe>=1&&ue.splice(oe,1)}}function ye(J){J.traverse(oe=>{const he=oe;he.geometry&&he.geometry.dispose();const Pe=he.material;Array.isArray(Pe)?Pe.forEach(De):Pe&&De(Pe)})}function De(J){const oe=J.normalMap;oe&&oe!==_e&&oe.dispose(),J.dispose()}function Le(){a&&(L.value?Fe():Me(),L.value=!L.value)}function Me(){if(!a)return;O.clear();const J=te*.25;a.children.forEach(oe=>{if(!oe.userData.partKey)return;const he=oe.userData.partKey;O.set(he,oe.position.clone());const Pe=$.get(he);let ze;if(Pe)ze=oe.position.clone().add(new q(Pe.x,Pe.y,Pe.z));else{const Et=H.get(he);if(!Et)return;ze=oe.position.clone().add(Et.clone().multiplyScalar(J))}const qe=W.get(he);let Xe=V.get(he).clone();qe&&Xe.set(yn.degToRad(qe.x),yn.degToRad(qe.y),yn.degToRad(qe.z)),$e(oe,ze,Xe)})}function we(){const J=te*.25;a.children.forEach(oe=>{if(!oe.userData.partKey)return;const he=oe.userData.partKey,Pe=$.get(he);let ze;if(Pe)ze=O.get(he).clone().add(new q(Pe.x,Pe.y,Pe.z));else{const Et=H.get(he);if(!Et)return;ze=oe.position.clone().add(Et.clone().multiplyScalar(J))}const qe=W.get(he);let Xe=V.get(he).clone();qe&&Xe.set(yn.degToRad(qe.x),yn.degToRad(qe.y),yn.degToRad(qe.z)),oe.position.copy(ze),oe.rotation.copy(Xe)})}function Oe(J,oe,he){H.clear(),$.clear(),W.clear();const Pe=new On().setFromObject(oe),ze=Pe.getCenter(new q),qe=oe.worldToLocal(ze.clone());te=Pe.getSize(new q).length();for(const Xe of J){const ft=new On().setFromObject(Xe).getCenter(new q),kt=oe.worldToLocal(ft.clone()).clone().sub(qe);if(kt.length()<1e-4?kt.set(0,0,0):kt.normalize(),H.set(Xe.userData.partKey,kt),he){const Je=he.find(Qt=>Qt.key===Xe.userData.partKey);Je!=null&&Je.explodeOffset&&$.set(Xe.userData.partKey,Je.explodeOffset),Je!=null&&Je.explodeRotation&&W.set(Xe.userData.partKey,Je.explodeRotation)}}}function Fe(){a&&a.children.forEach(J=>{if(!J.userData.partKey)return;const oe=O.get(J.userData.partKey),he=V.get(J.userData.partKey);!oe||!he||$e(J,oe,he)})}function $e(J,oe,he){const Pe=ue.findIndex(ze=>ze.mesh===J);Pe>-1&&ue.splice(Pe,1),ue.push({mesh:J,startPos:J.position.clone(),targetPos:oe.clone(),startQuat:J.quaternion.clone(),endQuat:new Dn().setFromEuler(he),startTime:performance.now()}),Ae()}return(J,oe)=>{const he=nf,Pe=gh,ze=xh,qe=sf,Xe=Nh,Et=Ju;return qt(),An(vr,null,[!J.hideControls||Ke.value?(qt(),An("div",ib,[nn("div",rb,[J.hideControls?kn("",!0):(qt(),Ui(he,{key:0,class:"select-model",value:y.value,"onUpdate:value":oe[0]||(oe[0]=ft=>y.value=ft),options:ee.value,"show-path":!0,"check-strategy":"child"},null,8,["value","options"])),Ke.value?(qt(),Ui(ze,{key:1,class:"select-button",onClick:Le,tertiary:""},{icon:Bn(()=>[ki(Pe,null,{default:Bn(()=>[L.value?(qt(),Ui(uc(uf),{key:0})):kn("",!0),L.value?kn("",!0):(qt(),Ui(uc(lf),{key:1}))]),_:1})]),_:1})):kn("",!0)]),J.hideControls?kn("",!0):(qt(),An(vr,{key:0},[A.value.length>1?(qt(),An("div",ob,[sb,ki(Xe,{value:E.value,"onUpdate:value":oe[1]||(oe[1]=ft=>E.value=ft)},{default:Bn(()=>[nn("div",ab,[(qt(!0),An(vr,null,js(A.value,ft=>(qt(),Ui(qe,{key:ft,value:ft},{default:Bn(()=>[er(Ks(w[ft]),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):kn("",!0),et.value.length>(G.value?1:0)?(qt(),An("div",lb,[cb,ki(Xe,{value:M.value,"onUpdate:value":oe[2]||(oe[2]=ft=>M.value=ft)},{default:Bn(()=>[nn("div",ub,[(qt(!0),An(vr,null,js(et.value,ft=>(qt(),Ui(qe,{key:ft.value,value:ft.value},{default:Bn(()=>[er(Ks(ft.label),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):kn("",!0),T.value?(qt(),An("div",db,[ki(Et,{checked:C.value,"onUpdate:checked":oe[3]||(oe[3]=ft=>C.value=ft),disabled:!Be.value},{default:Bn(()=>[er("Bare board")]),_:1},8,["checked","disabled"])])):kn("",!0),x.value?(qt(),An("div",hb,[fb,ki(Xe,{value:U.value,"onUpdate:value":oe[4]||(oe[4]=ft=>U.value=ft)},{default:Bn(()=>[nn("div",pb,[ki(qe,{value:"left"},{default:Bn(()=>[er("Left")]),_:1}),ki(qe,{value:"right"},{default:Bn(()=>[er("Right")]),_:1})])]),_:1},8,["value"])])):kn("",!0),G.value?(qt(),An("div",mb,[gb,nn("div",xb,[(qt(!0),An(vr,null,js(pe.value,ft=>(qt(),Ui(Et,{key:ft.key,checked:Q(ft.partKeys),"onUpdate:checked":Nt=>Te(ft.partKeys,Nt)},{default:Bn(()=>[er(Ks(ft.label),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))])])):kn("",!0)],64))])):kn("",!0),nn("div",{ref_key:"viewerContainer",ref:t,class:"viewer"},null,512)],64)}}}),Rb=yh(yb,[["__scopeId","data-v-bffbbc65"]]);export{Rb as default};
