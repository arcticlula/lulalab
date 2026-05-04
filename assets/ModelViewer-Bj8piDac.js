import{d as Lt,I as Oo,h as be,am as Mu,a as et,aC as Au,o as Ir,bH as ta,E as Zt,al as Ls,b4 as Ru,m as Qe,n as wt,t as at,v as wu,N as Cu,x as Nr,f as br,bI as Sc,D as _t,bt as Pu,b6 as Or,b as Gi,i as tr,u as $n,q as vt,s as wo,bu as Ua,r as Co,e as Is,bJ as Tc,z as Do,A as Ns,B as ii,bK as Lu,g as $e,y as Hi,ai as Fn,w as xr,F as ka,G as Fo,bL as Iu,a4 as na,U as yo,bM as Nu,C as Ou,c as Du,ay as Mc,b8 as Ac,bN as Fu,bO as Uu,bP as ku,aD as Bu,ab as zu,bQ as Vu,J as si,bb as Gu,K as pi,L as un,M as rn,Q as ar,P as Wr,R as sr,T as Ai,W as Hu,Y as nl,Z as Wu,V as il,$ as rl,a3 as ol,a0 as Xu,a1 as ju,a5 as Yu}from"./index-D35f3XMT.js";import{V as Rc,N as wc,a as Ku,h as Er,_ as Cc,c as Pc,S as qu,s as $u,d as Zu,r as Ju,b as Qu,e as ed}from"./RadioGroup-Bx-l3AHY.js";import{i as Os,c as td,N as nd,B as id,V as rd,d as al,u as bo}from"./MediaCarousel-Ch52_8iR.js";import{c as od,b as ad,d as sd,u as sl}from"./useAvif-CNgc50sk.js";import"./next-frame-once-C5Ksf8W7.js";const Rn="v-hidden",ld=od("[v-hidden]",{display:"none!important"}),ll=Lt({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=et(null),i=et(null);function r(a){const{value:l}=t,{getCounter:c,getTail:s}=n;let d;if(c!==void 0?d=c():d=i.value,!l||!d)return;d.hasAttribute(Rn)&&d.removeAttribute(Rn);const{children:h}=l;if(a.showAllItemsBeforeCalculate)for(const b of h)b.hasAttribute(Rn)&&b.removeAttribute(Rn);const m=l.offsetWidth,p=[],x=e.tail?s==null?void 0:s():null;let v=x?x.offsetWidth:0,f=!1;const u=l.children.length-(e.tail?1:0);for(let b=0;b<u-1;++b){if(b<0)continue;const y=h[b];if(f){y.hasAttribute(Rn)||y.setAttribute(Rn,"");continue}else y.hasAttribute(Rn)&&y.removeAttribute(Rn);const R=y.offsetWidth;if(v+=R,p[b]=R,v>m){const{updateCounter:A}=n;for(let P=b;P>=0;--P){const k=u-1-P;A!==void 0?A(k):d.textContent=`${k}`;const S=d.offsetWidth;if(v-=p[P],v+S<=m||P===0){f=!0,b=P-1,x&&(b===-1?(x.style.maxWidth=`${m-S}px`,x.style.boxSizing="border-box"):x.style.maxWidth="");const{onUpdateCount:T}=n;T&&T(k);break}}}}const{onUpdateOverflow:_}=n;f?_!==void 0&&_(!0):(_!==void 0&&_(!1),d.setAttribute(Rn,""))}const o=Au();return ld.mount({id:"vueuc/overflow",head:!0,anchorMetaName:ad,ssr:o}),Ir(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return Oo(()=>this.sync({showAllItemsBeforeCalculate:!1})),be("div",{class:"v-overflow",ref:"selfRef"},[Mu(n,"default"),n.counter?n.counter():be("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Ds(n,e){e&&(Ir(()=>{const{value:t}=n;t&&ta.registerHandler(t,e)}),Zt(n,(t,i)=>{i&&ta.unregisterHandler(i)},{deep:!1}),Ls(()=>{const{value:t}=n;t&&ta.unregisterHandler(t)}))}function cl(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function ia(n){const e=n.filter(t=>t!==void 0);if(e.length!==0)return e.length===1?e[0]:t=>{n.forEach(i=>{i&&i(t)})}}const Lc=Lt({name:"Checkmark",render(){return be("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},be("g",{fill:"none"},be("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),cd=Lt({name:"ChevronDown",render(){return be("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},be("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ud=Lt({name:"ChevronRight",render(){return be("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},be("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),dd=Ru("clear",()=>be("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},be("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},be("g",{fill:"currentColor","fill-rule":"nonzero"},be("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),hd=Qe("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[wt(">",[at("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[wt("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),wt("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),at("placeholder",`
 display: flex;
 `),at("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[wu({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),fd=Lt({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Sc("-base-clear",hd,_t(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return be("div",{class:`${n}-base-clear`},be(Cu,null,{default:()=>{var e,t;return this.show?be("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Nr(this.$slots.icon,()=>[be(br,{clsPrefix:n},{default:()=>be(dd,null)})])):be("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),Ic=Lt({props:{onFocus:Function,onBlur:Function},setup(n){return()=>be("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}}),pd=Qe("base-menu-mask",`
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
`,[Pu()]),md=Lt({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(n){Sc("-base-menu-mask",pd,_t(n,"clsPrefix"));const e=et(null);let t=null;const i=et(!1);return Ls(()=>{t!==null&&window.clearTimeout(t)}),Object.assign({message:e,show:i},{showOnce(o,a=1500){t&&window.clearTimeout(t),i.value=!0,e.value=o,t=window.setTimeout(()=>{i.value=!1,e.value=null},a)}})},render(){return be(Or,{name:"fade-in-transition"},{default:()=>this.show?be("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}}),ul=Lt({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t,nodePropsRef:i}=tr(Os);return{labelField:t,nodeProps:i,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,nodeProps:i,tmNode:{rawNode:r}}=this,o=i==null?void 0:i(r),a=e?e(r,!1):Gi(r[this.labelField],r,!1),l=be("div",Object.assign({},o,{class:[`${n}-base-select-group-header`,o==null?void 0:o.class]}),a);return r.render?r.render({node:l,option:r}):t?t({node:l,option:r,selected:!1}):l}});function gd(n,e){return be(Or,{name:"fade-in-scale-up-transition"},{default:()=>n?be(br,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>be(Lc)}):null})}const dl=Lt({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:a,labelFieldRef:l,valueFieldRef:c,showCheckmarkRef:s,nodePropsRef:d,handleOptionClick:h,handleOptionMouseEnter:m}=tr(Os),p=$n(()=>{const{value:u}=t;return u?n.tmNode.key===u.key:!1});function x(u){const{tmNode:_}=n;_.disabled||h(u,_)}function v(u){const{tmNode:_}=n;_.disabled||m(u,_)}function f(u){const{tmNode:_}=n,{value:b}=p;_.disabled||b||m(u,_)}return{multiple:i,isGrouped:$n(()=>{const{tmNode:u}=n,{parent:_}=u;return _&&_.rawNode.type==="group"}),showCheckmark:s,nodeProps:d,isPending:p,isSelected:$n(()=>{const{value:u}=e,{value:_}=i;if(u===null)return!1;const b=n.tmNode.rawNode[c.value];if(_){const{value:y}=r;return y.has(b)}else return u===b}),labelField:l,renderLabel:o,renderOption:a,handleMouseMove:f,handleMouseEnter:v,handleClick:x}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,nodeProps:a,renderOption:l,renderLabel:c,handleClick:s,handleMouseEnter:d,handleMouseMove:h}=this,m=gd(t,n),p=c?[c(e,t),o&&m]:[Gi(e[this.labelField],e,t),o&&m],x=a==null?void 0:a(e),v=be("div",Object.assign({},x,{class:[`${n}-base-select-option`,e.class,x==null?void 0:x.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:[(x==null?void 0:x.style)||"",e.style||""],onClick:ia([s,x==null?void 0:x.onClick]),onMouseenter:ia([d,x==null?void 0:x.onMouseenter]),onMousemove:ia([h,x==null?void 0:x.onMousemove])}),be("div",{class:`${n}-base-select-option__content`},p));return e.render?e.render({node:v,option:e,selected:t}):l?l({node:v,option:e,selected:t}):v}}),xd=Qe("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[Qe("scrollbar",`
 max-height: var(--n-height);
 `),Qe("virtual-list",`
 max-height: var(--n-height);
 `),Qe("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[at("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),Qe("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),Qe("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),at("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),at("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),at("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),at("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),Qe("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),Qe("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[vt("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),wt("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),wt("&:active",`
 color: var(--n-option-text-color-pressed);
 `),vt("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),vt("pending",[wt("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),vt("selected",`
 color: var(--n-option-text-color-active);
 `,[wt("&::before",`
 background-color: var(--n-option-color-active);
 `),vt("pending",[wt("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),vt("disabled",`
 cursor: not-allowed;
 `,[wo("selected",`
 color: var(--n-option-text-color-disabled);
 `),vt("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),at("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ua({enterScale:"0.5"})])])]),vd=Lt({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ii.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Do(n),i=Ns("InternalSelectMenu",t,e),r=ii("InternalSelectMenu","-internal-select-menu",xd,Lu,n,_t(n,"clsPrefix")),o=et(null),a=et(null),l=et(null),c=$e(()=>n.treeMate.getFlattenedNodes()),s=$e(()=>Ku(c.value)),d=et(null);function h(){const{treeMate:re}=n;let oe=null;const{value:we}=n;we===null?oe=re.getFirstAvailableNode():(n.multiple?oe=re.getNode((we||[])[(we||[]).length-1]):oe=re.getNode(we),(!oe||oe.disabled)&&(oe=re.getFirstAvailableNode())),O(oe||null)}function m(){const{value:re}=d;re&&!n.treeMate.getNode(re.key)&&(d.value=null)}let p;Zt(()=>n.show,re=>{re?p=Zt(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?h():m(),Oo(G)):m()},{immediate:!0}):p==null||p()},{immediate:!0}),Ls(()=>{p==null||p()});const x=$e(()=>Hi(r.value.self[Fn("optionHeight",n.size)])),v=$e(()=>xr(r.value.self[Fn("padding",n.size)])),f=$e(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),u=$e(()=>{const re=c.value;return re&&re.length===0});function _(re){const{onToggle:oe}=n;oe&&oe(re)}function b(re){const{onScroll:oe}=n;oe&&oe(re)}function y(re){var oe;(oe=l.value)===null||oe===void 0||oe.sync(),b(re)}function R(){var re;(re=l.value)===null||re===void 0||re.sync()}function A(){const{value:re}=d;return re||null}function P(re,oe){oe.disabled||O(oe,!1)}function k(re,oe){oe.disabled||_(oe)}function S(re){var oe;Er(re,"action")||(oe=n.onKeyup)===null||oe===void 0||oe.call(n,re)}function T(re){var oe;Er(re,"action")||(oe=n.onKeydown)===null||oe===void 0||oe.call(n,re)}function w(re){var oe;(oe=n.onMousedown)===null||oe===void 0||oe.call(n,re),!n.focusable&&re.preventDefault()}function C(){const{value:re}=d;re&&O(re.getNext({loop:!0}),!0)}function L(){const{value:re}=d;re&&O(re.getPrev({loop:!0}),!0)}function O(re,oe=!1){d.value=re,oe&&G()}function G(){var re,oe;const we=d.value;if(!we)return;const te=s.value(we.key);te!==null&&(n.virtualScroll?(re=a.value)===null||re===void 0||re.scrollTo({index:te}):(oe=l.value)===null||oe===void 0||oe.scrollTo({index:te,elSize:x.value}))}function X(re){var oe,we;!((oe=o.value)===null||oe===void 0)&&oe.contains(re.target)&&((we=n.onFocus)===null||we===void 0||we.call(n,re))}function J(re){var oe,we;!((oe=o.value)===null||oe===void 0)&&oe.contains(re.relatedTarget)||(we=n.onBlur)===null||we===void 0||we.call(n,re)}ka(Os,{handleOptionMouseEnter:P,handleOptionClick:k,valueSetRef:f,pendingTmNodeRef:d,nodePropsRef:_t(n,"nodeProps"),showCheckmarkRef:_t(n,"showCheckmark"),multipleRef:_t(n,"multiple"),valueRef:_t(n,"value"),renderLabelRef:_t(n,"renderLabel"),renderOptionRef:_t(n,"renderOption"),labelFieldRef:_t(n,"labelField"),valueFieldRef:_t(n,"valueField")}),ka(td,o),Ir(()=>{const{value:re}=l;re&&re.sync()});const j=$e(()=>{const{size:re}=n,{common:{cubicBezierEaseInOut:oe},self:{height:we,borderRadius:te,color:H,groupHeaderTextColor:U,actionDividerColor:V,optionTextColorPressed:K,optionTextColor:Q,optionTextColorDisabled:ue,optionTextColorActive:_e,optionOpacityDisabled:Te,optionCheckColor:He,actionTextColor:B,optionColorPending:Fe,optionColorActive:$,loadingColor:he,loadingSize:ee,optionColorActivePending:ye,[Fn("optionFontSize",re)]:Se,[Fn("optionHeight",re)]:Ue,[Fn("optionPadding",re)]:E}}=r.value;return{"--n-height":we,"--n-action-divider-color":V,"--n-action-text-color":B,"--n-bezier":oe,"--n-border-radius":te,"--n-color":H,"--n-option-font-size":Se,"--n-group-header-text-color":U,"--n-option-check-color":He,"--n-option-color-pending":Fe,"--n-option-color-active":$,"--n-option-color-active-pending":ye,"--n-option-height":Ue,"--n-option-opacity-disabled":Te,"--n-option-text-color":Q,"--n-option-text-color-active":_e,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":K,"--n-option-padding":E,"--n-option-padding-left":xr(E,"left"),"--n-option-padding-right":xr(E,"right"),"--n-loading-color":he,"--n-loading-size":ee}}),{inlineThemeDisabled:ne}=n,de=ne?Fo("internal-select-menu",$e(()=>n.size[0]),j,n):void 0,xe={selfRef:o,next:C,prev:L,getPendingTmNode:A};return Ds(o,n.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:e,rtlEnabled:i,virtualListRef:a,scrollbarRef:l,itemSize:x,padding:v,flattenedNodes:c,empty:u,virtualListContainer(){const{value:re}=a;return re==null?void 0:re.listElRef},virtualListContent(){const{value:re}=a;return re==null?void 0:re.itemsElRef},doScroll:b,handleFocusin:X,handleFocusout:J,handleKeyUp:S,handleKeyDown:T,handleMouseDown:w,handleVirtualListResize:R,handleVirtualListScroll:y,cssVars:ne?void 0:j,themeClass:de==null?void 0:de.themeClass,onRender:de==null?void 0:de.onRender},xe)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),be("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Co(n.header,a=>a&&be("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},a)),this.loading?be("div",{class:`${t}-base-select-menu__loading`},be(Is,{clsPrefix:t,strokeWidth:20})):this.empty?be("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Nr(n.empty,()=>[be(wc,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):be(Tc,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?be(Rc,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?be(ul,{key:a.key,clsPrefix:t,tmNode:a}):a.ignored?null:be(dl,{clsPrefix:t,key:a.key,tmNode:a})}):be("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?be(ul,{key:a.key,clsPrefix:t,tmNode:a}):be(dl,{clsPrefix:t,key:a.key,tmNode:a})))}),Co(n.action,a=>a&&[be("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},a),be(Ic,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),_d=Lt({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return be(Is,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?be(fd,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>be(br,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Nr(e.default,()=>[be(cd,null)])})}):null})}}}),yd=wt([Qe("base-selection",`
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
 `,[Qe("base-loading",`
 color: var(--n-loading-color);
 `),Qe("base-selection-tags","min-height: var(--n-height);"),at("border, state-border",`
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
 `),at("state-border",`
 z-index: 1;
 border-color: #0000;
 `),Qe("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[at("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),Qe("base-selection-overlay",`
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
 `,[at("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),Qe("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[at("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),Qe("base-selection-tags",`
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
 `),Qe("base-selection-label",`
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
 `,[Qe("base-selection-input",`
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
 `,[at("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),at("render-label",`
 color: var(--n-text-color);
 `)]),wo("disabled",[wt("&:hover",[at("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),vt("focus",[at("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),vt("active",[at("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),Qe("base-selection-label","background-color: var(--n-color-active);"),Qe("base-selection-tags","background-color: var(--n-color-active);")])]),vt("disabled","cursor: not-allowed;",[at("arrow",`
 color: var(--n-arrow-color-disabled);
 `),Qe("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[Qe("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),at("render-label",`
 color: var(--n-text-color-disabled);
 `)]),Qe("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),Qe("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),Qe("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[at("input",`
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
 `),at("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>vt(`${n}-status`,[at("state-border",`border: var(--n-border-${n});`),wo("disabled",[wt("&:hover",[at("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),vt("active",[at("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),Qe("base-selection-label",`background-color: var(--n-color-active-${n});`),Qe("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),vt("focus",[at("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),Qe("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),Qe("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[wt("&:last-child","padding-right: 0;"),Qe("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[at("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),bd=Lt({name:"InternalSelection",props:Object.assign(Object.assign({},ii.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Do(n),i=Ns("InternalSelection",t,e),r=et(null),o=et(null),a=et(null),l=et(null),c=et(null),s=et(null),d=et(null),h=et(null),m=et(null),p=et(null),x=et(!1),v=et(!1),f=et(!1),u=ii("InternalSelection","-internal-selection",yd,Nu,n,_t(n,"clsPrefix")),_=$e(()=>n.clearable&&!n.disabled&&(f.value||n.active)),b=$e(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):Gi(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),y=$e(()=>{const g=n.selectedOption;if(g)return g[n.labelField]}),R=$e(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function A(){var g;const{value:M}=r;if(M){const{value:D}=o;D&&(D.style.width=`${M.offsetWidth}px`,n.maxTagCount!=="responsive"&&((g=m.value)===null||g===void 0||g.sync({showAllItemsBeforeCalculate:!1})))}}function P(){const{value:g}=p;g&&(g.style.display="none")}function k(){const{value:g}=p;g&&(g.style.display="inline-block")}Zt(_t(n,"active"),g=>{g||P()}),Zt(_t(n,"pattern"),()=>{n.multiple&&Oo(A)});function S(g){const{onFocus:M}=n;M&&M(g)}function T(g){const{onBlur:M}=n;M&&M(g)}function w(g){const{onDeleteOption:M}=n;M&&M(g)}function C(g){const{onClear:M}=n;M&&M(g)}function L(g){const{onPatternInput:M}=n;M&&M(g)}function O(g){var M;(!g.relatedTarget||!(!((M=a.value)===null||M===void 0)&&M.contains(g.relatedTarget)))&&S(g)}function G(g){var M;!((M=a.value)===null||M===void 0)&&M.contains(g.relatedTarget)||T(g)}function X(g){C(g)}function J(){f.value=!0}function j(){f.value=!1}function ne(g){!n.active||!n.filterable||g.target!==o.value&&g.preventDefault()}function de(g){w(g)}const xe=et(!1);function re(g){if(g.key==="Backspace"&&!xe.value&&!n.pattern.length){const{selectedOptions:M}=n;M!=null&&M.length&&de(M[M.length-1])}}let oe=null;function we(g){const{value:M}=r;if(M){const D=g.target.value;M.textContent=D,A()}n.ignoreComposition&&xe.value?oe=g:L(g)}function te(){xe.value=!0}function H(){xe.value=!1,n.ignoreComposition&&L(oe),oe=null}function U(g){var M;v.value=!0,(M=n.onPatternFocus)===null||M===void 0||M.call(n,g)}function V(g){var M;v.value=!1,(M=n.onPatternBlur)===null||M===void 0||M.call(n,g)}function K(){var g,M;if(n.filterable)v.value=!1,(g=s.value)===null||g===void 0||g.blur(),(M=o.value)===null||M===void 0||M.blur();else if(n.multiple){const{value:D}=l;D==null||D.blur()}else{const{value:D}=c;D==null||D.blur()}}function Q(){var g,M,D;n.filterable?(v.value=!1,(g=s.value)===null||g===void 0||g.focus()):n.multiple?(M=l.value)===null||M===void 0||M.focus():(D=c.value)===null||D===void 0||D.focus()}function ue(){const{value:g}=o;g&&(k(),g.focus())}function _e(){const{value:g}=o;g&&g.blur()}function Te(g){const{value:M}=d;M&&M.setTextContent(`+${g}`)}function He(){const{value:g}=h;return g}function B(){return o.value}let Fe=null;function $(){Fe!==null&&window.clearTimeout(Fe)}function he(){n.active||($(),Fe=window.setTimeout(()=>{R.value&&(x.value=!0)},100))}function ee(){$()}function ye(g){g||($(),x.value=!1)}Zt(R,g=>{g||(x.value=!1)}),Ir(()=>{Ou(()=>{const g=s.value;g&&(n.disabled?g.removeAttribute("tabindex"):g.tabIndex=v.value?-1:0)})}),Ds(a,n.onResize);const{inlineThemeDisabled:Se}=n,Ue=$e(()=>{const{size:g}=n,{common:{cubicBezierEaseInOut:M},self:{fontWeight:D,borderRadius:N,color:F,placeholderColor:q,textColor:Y,paddingSingle:le,paddingMultiple:fe,caretColor:ie,colorDisabled:ge,textColorDisabled:ke,placeholderColorDisabled:ze,colorActive:Le,boxShadowFocus:De,boxShadowActive:z,boxShadowHover:Ce,border:Ae,borderFocus:Ee,borderHover:W,borderActive:Z,arrowColor:ve,arrowColorDisabled:Ne,loadingColor:Pe,colorActiveWarning:Me,boxShadowFocusWarning:Re,boxShadowActiveWarning:Ie,boxShadowHoverWarning:Oe,borderWarning:Xe,borderFocusWarning:ut,borderHoverWarning:It,borderActiveWarning:zt,colorActiveError:En,boxShadowFocusError:Si,boxShadowActiveError:Gn,boxShadowHoverError:Vr,borderError:Ti,borderFocusError:Gr,borderHoverError:Hr,borderActiveError:Ko,clearColor:qo,clearColorHover:$o,clearColorPressed:Zo,clearSize:Jo,arrowSize:Qo,[Fn("height",g)]:I,[Fn("fontSize",g)]:se}}=u.value,pe=xr(le),me=xr(fe);return{"--n-bezier":M,"--n-border":Ae,"--n-border-active":Z,"--n-border-focus":Ee,"--n-border-hover":W,"--n-border-radius":N,"--n-box-shadow-active":z,"--n-box-shadow-focus":De,"--n-box-shadow-hover":Ce,"--n-caret-color":ie,"--n-color":F,"--n-color-active":Le,"--n-color-disabled":ge,"--n-font-size":se,"--n-height":I,"--n-padding-single-top":pe.top,"--n-padding-multiple-top":me.top,"--n-padding-single-right":pe.right,"--n-padding-multiple-right":me.right,"--n-padding-single-left":pe.left,"--n-padding-multiple-left":me.left,"--n-padding-single-bottom":pe.bottom,"--n-padding-multiple-bottom":me.bottom,"--n-placeholder-color":q,"--n-placeholder-color-disabled":ze,"--n-text-color":Y,"--n-text-color-disabled":ke,"--n-arrow-color":ve,"--n-arrow-color-disabled":Ne,"--n-loading-color":Pe,"--n-color-active-warning":Me,"--n-box-shadow-focus-warning":Re,"--n-box-shadow-active-warning":Ie,"--n-box-shadow-hover-warning":Oe,"--n-border-warning":Xe,"--n-border-focus-warning":ut,"--n-border-hover-warning":It,"--n-border-active-warning":zt,"--n-color-active-error":En,"--n-box-shadow-focus-error":Si,"--n-box-shadow-active-error":Gn,"--n-box-shadow-hover-error":Vr,"--n-border-error":Ti,"--n-border-focus-error":Gr,"--n-border-hover-error":Hr,"--n-border-active-error":Ko,"--n-clear-size":Jo,"--n-clear-color":qo,"--n-clear-color-hover":$o,"--n-clear-color-pressed":Zo,"--n-arrow-size":Qo,"--n-font-weight":D}}),E=Se?Fo("internal-selection",$e(()=>n.size[0]),Ue,n):void 0;return{mergedTheme:u,mergedClearable:_,mergedClsPrefix:e,rtlEnabled:i,patternInputFocused:v,filterablePlaceholder:b,label:y,selected:R,showTagsPanel:x,isComposing:xe,counterRef:d,counterWrapperRef:h,patternInputMirrorRef:r,patternInputRef:o,selfRef:a,multipleElRef:l,singleElRef:c,patternInputWrapperRef:s,overflowRef:m,inputTagElRef:p,handleMouseDown:ne,handleFocusin:O,handleClear:X,handleMouseEnter:J,handleMouseLeave:j,handleDeleteOption:de,handlePatternKeyDown:re,handlePatternInputInput:we,handlePatternInputBlur:V,handlePatternInputFocus:U,handleMouseEnterCounter:he,handleMouseLeaveCounter:ee,handleFocusout:G,handleCompositionEnd:H,handleCompositionStart:te,onPopoverUpdateShow:ye,focus:Q,focusInput:ue,blur:K,blurInput:_e,updateCounter:Te,getCounter:He,getTail:B,renderLabel:n.renderLabel,cssVars:Se?void 0:Ue,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:a,clsPrefix:l,ellipsisTagPopoverProps:c,onRender:s,renderTag:d,renderLabel:h}=this;s==null||s();const m=o==="responsive",p=typeof o=="number",x=m||p,v=be(Iu,null,{default:()=>be(_d,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var u,_;return(_=(u=this.$slots).arrow)===null||_===void 0?void 0:_.call(u)}})});let f;if(e){const{labelField:u}=this,_=L=>be("div",{class:`${l}-base-selection-tag-wrapper`,key:L.value},d?d({option:L,handleClose:()=>{this.handleDeleteOption(L)}}):be(na,{size:t,closable:!L.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(L)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(L,!0):Gi(L[u],L,!0)})),b=()=>(p?this.selectedOptions.slice(0,o):this.selectedOptions).map(_),y=r?be("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},be("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),be("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,R=m?()=>be("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},be(na,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let A;if(p){const L=this.selectedOptions.length-o;L>0&&(A=be("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},be(na,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${L}`})))}const P=m?r?be(ll,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R,tail:()=>y}):be(ll,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:b,counter:R}):p&&A?b().concat(A):b(),k=x?()=>be("div",{class:`${l}-base-selection-popover`},m?b():this.selectedOptions.map(_)):void 0,S=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,w=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?be("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},be("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,C=r?be("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},P,m?null:y,v):be("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},P,v);f=be(yo,null,x?be(nd,Object.assign({},S,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>C,default:k}):C,w)}else if(r){const u=this.pattern||this.isComposing,_=this.active?!u:!this.selected,b=this.active?!1:this.selected;f=be("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:cl(this.label)},be("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),b?be("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},be("div",{class:`${l}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Gi(this.label,this.selectedOption,!0))):null,_?be("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},be("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else f=be("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?be("div",{class:`${l}-base-selection-input`,title:cl(this.label),key:"input"},be("div",{class:`${l}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Gi(this.label,this.selectedOption,!0))):be("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},be("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),v);return be("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,n&&`${l}-base-selection--${n}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},f,a?be("div",{class:`${l}-base-selection__border`}):null,a?be("div",{class:`${l}-base-selection__state-border`}):null)}});function hl(n){return n.type==="group"}function Ed(n){return n.type==="ignored"}function Sd(n,e){return{getIsGroup:hl,getIgnored:Ed,getKey(i){return hl(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}const Dr=Du("n-cascader"),fl=Lt({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(n){const{expandTriggerRef:e,remoteRef:t,multipleRef:i,mergedValueRef:r,checkedKeysRef:o,indeterminateKeysRef:a,hoverKeyPathRef:l,keyboardKeyRef:c,loadingKeySetRef:s,cascadeRef:d,mergedCheckStrategyRef:h,onLoadRef:m,mergedClsPrefixRef:p,mergedThemeRef:x,labelFieldRef:v,showCheckboxRef:f,renderPrefixRef:u,renderSuffixRef:_,updateHoverKey:b,updateKeyboardKey:y,addLoadingKey:R,deleteLoadingKey:A,closeMenu:P,doCheck:k,doUncheck:S,renderLabelRef:T}=tr(Dr),w=$e(()=>n.tmNode.key),C=$e(()=>{const{value:K}=e,{value:Q}=t;return!Q&&K==="hover"}),L=$e(()=>{if(C.value)return te}),O=$e(()=>{if(C.value)return H}),G=$n(()=>{const{value:K}=i;return K?o.value.includes(w.value):r.value===w.value}),X=$n(()=>i.value?a.value.includes(w.value):!1),J=$n(()=>l.value.includes(w.value)),j=$n(()=>{const{value:K}=c;return K===null?!1:K===w.value}),ne=$n(()=>t.value?s.value.has(w.value):!1),de=$e(()=>n.tmNode.isLeaf),xe=$e(()=>n.tmNode.disabled),re=$e(()=>n.tmNode.rawNode[v.value]),oe=$e(()=>n.tmNode.shallowLoaded);function we(K){if(xe.value)return;const{value:Q}=t,{value:ue}=s,{value:_e}=m,{value:Te}=w,{value:He}=de,{value:B}=oe;Er(K,"checkbox")||(Q&&!B&&!ue.has(Te)&&_e&&(R(Te),_e(n.tmNode.rawNode).then(()=>{A(Te)}).catch(()=>{A(Te)})),b(Te),y(Te)),He&&V()}function te(){if(!C.value||xe.value)return;const{value:K}=w;b(K),y(K)}function H(){C.value&&te()}function U(){const{value:K}=de;K||V()}function V(){const{value:K}=i,{value:Q}=w;K?X.value||G.value?S(Q):k(Q):(k(Q),P(!0))}return{checkStrategy:h,multiple:i,cascade:d,checked:G,indeterminate:X,hoverPending:J,keyboardPending:j,isLoading:ne,showCheckbox:f,isLeaf:de,disabled:xe,label:re,mergedClsPrefix:p,mergedTheme:x,handleClick:we,handleCheckboxUpdateValue:U,mergedHandleMouseEnter:L,mergedHandleMouseMove:O,renderLabel:T,renderPrefix:u,renderSuffix:_}},render(){const{mergedClsPrefix:n,showCheckbox:e,renderLabel:t,renderPrefix:i,renderSuffix:r}=this;let o=null;if(e||i){const c=this.showCheckbox?be(Cc,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue}):null;o=be("div",{class:`${n}-cascader-option__prefix`},i?i({option:this.tmNode.rawNode,checked:this.checked,node:c}):c)}let a=null;const l=be("div",{class:`${n}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?be(Or,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?be(br,{clsPrefix:n,class:`${n}-cascader-option-icon ${n}-cascader-option-icon--checkmark`},{default:()=>be(Lc,null)}):null}):null:be(Is,{clsPrefix:n,scale:.85,strokeWidth:24,show:this.isLoading,class:`${n}-cascader-option-icon`},{default:()=>be(br,{clsPrefix:n,key:"arrow",class:`${n}-cascader-option-icon ${n}-cascader-option-icon--arrow`},{default:()=>be(ud,null)})}));return a=be("div",{class:`${n}-cascader-option__suffix`},r?r({option:this.tmNode.rawNode,checked:this.checked,node:l}):l),be("div",{class:[`${n}-cascader-option`,this.keyboardPending||this.hoverPending&&`${n}-cascader-option--pending`,this.disabled&&`${n}-cascader-option--disabled`,this.showCheckbox&&`${n}-cascader-option--show-prefix`],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},o,be("span",{class:`${n}-cascader-option__label`},t?t(this.tmNode.rawNode,this.checked):this.label),a)}}),Td=Lt({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:n,mergedClsPrefixRef:e,mergedThemeRef:t,optionHeightRef:i}=tr(Dr),r=et(null),o=et(null),a={scroll(l,c){var s,d;n.value?(s=o.value)===null||s===void 0||s.scrollTo({index:l}):(d=r.value)===null||d===void 0||d.scrollTo({index:l,elSize:c})}};return Object.assign({mergedClsPrefix:e,mergedTheme:t,scrollbarInstRef:r,vlInstRef:o,virtualScroll:n,itemSize:$e(()=>Hi(i.value)),handleVlScroll:()=>{var l;(l=r.value)===null||l===void 0||l.sync()},getVlContainer:()=>{var l;return(l=o.value)===null||l===void 0?void 0:l.listElRef},getVlContent:()=>{var l;return(l=o.value)===null||l===void 0?void 0:l.itemsElRef}},a)},render(){const{mergedClsPrefix:n,mergedTheme:e,virtualScroll:t}=this;return be("div",{class:[t&&`${n}-cascader-submenu--virtual`,`${n}-cascader-submenu`]},be(Tc,{ref:"scrollbarInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:t?this.getVlContainer:void 0,content:t?this.getVlContent:void 0},{default:()=>t?be(Rc,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:i})=>be(fl,{key:i.key,tmNode:i})}):this.tmNodes.map(i=>be(fl,{key:i.key,tmNode:i}))}))}}),Md=Lt({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(n){const{localeRef:e,isMountedRef:t,mergedClsPrefixRef:i,syncCascaderMenuPosition:r,handleCascaderMenuClickOutside:o,mergedThemeRef:a,getColumnStyleRef:l}=tr(Dr),c=[],s=et(null),d=et(null);function h(){r()}Ds(d,h);function m(u){var _;const{value:{loadingRequiredMessage:b}}=e;(_=s.value)===null||_===void 0||_.showOnce(b(u))}function p(u){o(u)}function x(u){const{value:_}=d;_&&(_.contains(u.relatedTarget)||n.onFocus(u))}function v(u){const{value:_}=d;_&&(_.contains(u.relatedTarget)||n.onBlur(u))}return Object.assign({isMounted:t,mergedClsPrefix:i,selfElRef:d,submenuInstRefs:c,maskInstRef:s,mergedTheme:a,getColumnStyle:l,handleFocusin:x,handleFocusout:v,handleClickOutside:p},{scroll(u,_,b){const y=c[u];y&&y.scroll(_,b)},showErrorMessage:m})},render(){const{submenuInstRefs:n,mergedClsPrefix:e,mergedTheme:t}=this;return be(Or,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?Mc(be("div",{tabindex:"0",ref:"selfElRef",class:`${e}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?be("div",{class:`${e}-cascader-submenu-wrapper`},this.menuModel.map((i,r)=>{var o;return be(Td,{style:(o=this.getColumnStyle)===null||o===void 0?void 0:o.call(this,{level:r}),ref:a=>{a&&(n[r]=a)},key:r,tmNodes:i,depth:r+1})}),be(md,{clsPrefix:e,ref:"maskInstRef"})):be("div",{class:`${e}-cascader-menu__empty`},Nr(this.$slots.empty,()=>[be(wc,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty})])),Co(this.$slots.action,i=>i&&be("div",{class:`${e}-cascader-menu-action`,"data-action":!0},i)),be(Ic,{onFocus:this.onTabout})),[[Ac,this.handleClickOutside,void 0,{capture:!0}]]):null})}});function Xr(n){return n?n.map(e=>e.rawNode):null}function Ad(n,e,t,i){const r=[],o=[];function a(l){for(const c of l){if(c.disabled)continue;const{rawNode:s}=c;o.push(s),(c.isLeaf||!e)&&r.push({label:Ba(c,i,t),value:c.key,rawNode:c.rawNode,path:Array.from(o)}),!c.isLeaf&&c.children&&a(c.children),o.pop()}}return a(n),r}function Ba(n,e,t){const i=[];for(;n;)i.push(n.rawNode[t]),n=n.parent;return i.reverse().join(e)}const Rd=Lt({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(n){const{isMountedRef:e,mergedValueRef:t,mergedClsPrefixRef:i,mergedThemeRef:r,mergedCheckStrategyRef:o,slots:a,syncSelectMenuPosition:l,closeMenu:c,handleSelectMenuClickOutside:s,doUncheck:d,doCheck:h,clearPattern:m}=tr(Dr),p=et(null),x=$e(()=>Ad(n.tmNodes,o.value==="child",n.labelField,n.separator)),v=$e(()=>{const{filter:T}=n;if(T)return T;const{labelField:w}=n;return(C,L,O)=>O.some(G=>G[w]&&~G[w].toLowerCase().indexOf(C.toLowerCase()))}),f=$e(()=>{const{pattern:T}=n,{value:w}=v;return(T?x.value.filter(C=>w(T,C.rawNode,C.path)):x.value).map(C=>({value:C.value,label:C.label}))}),u=$e(()=>Pc(f.value,Sd("value","children")));function _(){l()}function b(T){y(T)}function y(T){if(n.multiple){const{value:w}=t;Array.isArray(w)?w.includes(T.key)?d(T.key):h(T.key):w===null&&h(T.key),m()}else h(T.key),c(!0)}function R(){var T;(T=p.value)===null||T===void 0||T.prev()}function A(){var T;(T=p.value)===null||T===void 0||T.next()}function P(){var T;if(p){const w=(T=p.value)===null||T===void 0?void 0:T.getPendingTmNode();return w&&y(w),!0}return!1}function k(T){s(T)}return Object.assign({isMounted:e,mergedTheme:r,mergedClsPrefix:i,menuInstRef:p,selectTreeMate:u,handleResize:_,handleToggle:b,handleClickOutside:k,cascaderSlots:a},{prev:R,next:A,enter:P})},render(){const{mergedClsPrefix:n,isMounted:e,mergedTheme:t,cascaderSlots:i}=this;return be(Or,{name:"fade-in-scale-up-transition",appear:e},{default:()=>this.show?Mc(be(vd,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:n,class:`${n}-cascader-menu`,autoPending:!0,themeOverrides:t.peerOverrides.InternalSelectMenu,theme:t.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>Nr(i["not-found"],()=>[])}),[[Ac,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),wd=wt([Qe("cascader-menu",`
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
 `,[Ua({transformOrigin:"inherit",duration:"0.2s"}),at("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),Qe("scrollbar",`
 width: 100%;
 `),Qe("base-menu-mask",`
 background-color: var(--n-menu-mask-color);
 `),Qe("base-loading",`
 color: var(--n-loading-color);
 `),Qe("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),Qe("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[vt("virtual",`
 width: var(--n-column-width);
 `),Qe("scrollbar-content",`
 position: relative;
 `),wt("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),wt("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),wt("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),Qe("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),Qe("cascader-option",`
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
 `,[vt("show-prefix",`
 padding-left: 0;
 `),at("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),at("prefix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),at("suffix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),Qe("cascader-option-icon-placeholder",`
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `,[Qe("cascader-option-icon",[vt("checkmark",`
 color: var(--n-option-check-mark-color);
 `,[Ua({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),vt("arrow",`
 color: var(--n-option-arrow-color);
 `)])]),vt("selected",`
 color: var(--n-option-text-color-active);
 `),vt("active",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `),vt("pending",`
 background-color: var(--n-option-color-hover);
 `),wt("&:hover",`
 background-color: var(--n-option-color-hover);
 `),vt("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[Qe("cascader-option-icon",[vt("arrow",`
 color: var(--n-option-text-color-disabled);
 `)])])])]),Qe("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),Cd=Object.assign(Object.assign({},ii.props),{allowCheckingNotLoaded:Boolean,to:bo.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,getColumnStyle:Function,renderPrefix:Function,renderSuffix:Function,onChange:[Function,Array]}),Pd=Lt({name:"Cascader",props:Cd,slots:Object,setup(n,{slots:e}){const{mergedBorderedRef:t,mergedClsPrefixRef:i,namespaceRef:r,inlineThemeDisabled:o}=Do(n),a=ii("Cascader","-cascader",wd,Fu,n,i),{localeRef:l}=sd("Cascader"),c=et(n.defaultValue),s=$e(()=>n.value),d=sl(s,c),h=$e(()=>n.leafOnly?"child":n.checkStrategy),m=et(""),p=Uu(n),{mergedSizeRef:x,mergedDisabledRef:v,mergedStatusRef:f}=p,u=et(null),_=et(null),b=et(null),y=et(null),R=et(null),A=et(new Set),P=et(null),k=et(null),S=bo(n),T=et(!1),w=W=>{A.value.add(W)},C=W=>{A.value.delete(W)},L=$e(()=>{const{valueField:W,childrenField:Z,disabledField:ve}=n;return Pc(n.options,{getDisabled(Ne){return Ne[ve]},getKey(Ne){return Ne[W]},getChildren(Ne){return Ne[Z]}})}),O=$e(()=>{const{cascade:W,multiple:Z}=n;return Z&&Array.isArray(d.value)?L.value.getCheckedKeys(d.value,{cascade:W,allowNotLoaded:n.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),G=$e(()=>O.value.checkedKeys),X=$e(()=>O.value.indeterminateKeys),J=$e(()=>{const{treeNodePath:W,treeNode:Z}=L.value.getPath(R.value);let ve;return Z===null?ve=[L.value.treeNodes]:(ve=W.map(Ne=>Ne.siblings),!Z.isLeaf&&!A.value.has(Z.key)&&Z.children&&ve.push(Z.children)),ve}),j=$e(()=>{const{keyPath:W}=L.value.getPath(R.value);return W}),ne=$e(()=>a.value.self.optionHeight);ku(n.options)&&Zt(n.options,(W,Z)=>{W!==Z&&(R.value=null,y.value=null)});const de=et(!1);function xe(W){const{onUpdateShow:Z,"onUpdate:show":ve}=n;Z&&si(Z,W),ve&&si(ve,W),de.value=W}function re(W,Z,ve){const{onUpdateValue:Ne,"onUpdate:value":Pe,onChange:Me}=n,{nTriggerFormInput:Re,nTriggerFormChange:Ie}=p;Ne&&si(Ne,W,Z,ve),Pe&&si(Pe,W,Z,ve),Me&&si(Me,W,Z,ve),c.value=W,Re(),Ie()}function oe(W){y.value=W}function we(W){R.value=W}function te(W){const{value:{getNode:Z}}=L;return W.map(ve=>{var Ne;return((Ne=Z(ve))===null||Ne===void 0?void 0:Ne.rawNode)||null})}function H(W){var Z;const{cascade:ve,multiple:Ne,filterable:Pe}=n,{value:{check:Me,getNode:Re,getPath:Ie}}=L;if(Ne)try{const{checkedKeys:Oe}=Me(W,O.value.checkedKeys,{cascade:ve,checkStrategy:h.value,allowNotLoaded:n.allowCheckingNotLoaded});re(Oe,te(Oe),Oe.map(Xe=>{var ut;return Xr((ut=Ie(Xe))===null||ut===void 0?void 0:ut.treeNodePath)})),Pe&&Fe(),y.value=W,R.value=W}catch(Oe){if(Oe instanceof qu){if(u.value){const Xe=Re(W);Xe!==null&&u.value.showErrorMessage(Xe.rawNode[n.labelField])}}else throw Oe}else if(h.value==="child"){const Oe=Re(W);if(Oe!=null&&Oe.isLeaf)re(W,Oe.rawNode,Xr(Ie(W).treeNodePath));else return!1}else{const Oe=Re(W);re(W,(Oe==null?void 0:Oe.rawNode)||null,Xr((Z=Ie(W))===null||Z===void 0?void 0:Z.treeNodePath))}return!0}function U(W){const{cascade:Z,multiple:ve}=n;if(ve){const{value:{uncheck:Ne,getNode:Pe,getPath:Me}}=L,{checkedKeys:Re}=Ne(W,O.value.checkedKeys,{cascade:Z,checkStrategy:h.value,allowNotLoaded:n.allowCheckingNotLoaded});re(Re,Re.map(Ie=>{var Oe;return((Oe=Pe(Ie))===null||Oe===void 0?void 0:Oe.rawNode)||null}),Re.map(Ie=>{var Oe;return Xr((Oe=Me(Ie))===null||Oe===void 0?void 0:Oe.treeNodePath)})),y.value=W,R.value=W}}const V=$e(()=>{if(n.multiple){const{showPath:W,separator:Z,labelField:ve,cascade:Ne}=n,{getCheckedKeys:Pe,getNode:Me}=L.value;return Pe(G.value,{cascade:Ne,checkStrategy:h.value,allowNotLoaded:n.allowCheckingNotLoaded}).checkedKeys.map(Ie=>{const Oe=Me(Ie);return Oe===null?{label:String(Ie),value:Ie}:{label:W?Ba(Oe,Z,ve):Oe.rawNode[ve],value:Oe.key}})}else return[]}),K=$e(()=>{const{multiple:W,showPath:Z,separator:ve,labelField:Ne}=n,{value:Pe}=d;if(!W&&!Array.isArray(Pe)){const{getNode:Me}=L.value;if(Pe===null)return null;const Re=Me(Pe);return Re===null?{label:String(Pe),value:Pe}:{label:Z?Ba(Re,ve,Ne):Re.rawNode[Ne],value:Re.key}}else return null}),Q=_t(n,"show"),ue=sl(Q,de),_e=$e(()=>{const{placeholder:W}=n;return W!==void 0?W:l.value.placeholder}),Te=$e(()=>!!(n.filterable&&m.value));Zt(ue,W=>{if(!W||n.multiple)return;const{value:Z}=d;!Array.isArray(Z)&&Z!==null?(y.value=Z,R.value=Z,Oo(()=>{var ve;if(!ue.value)return;const{value:Ne}=R;if(d.value!==null){const Pe=L.value.getNode(Ne);Pe&&((ve=u.value)===null||ve===void 0||ve.scroll(Pe.level,Pe.index,Hi(ne.value)))}})):(y.value=null,R.value=null)},{immediate:!0});function He(W){const{onBlur:Z}=n,{nTriggerFormBlur:ve}=p;Z&&si(Z,W),ve()}function B(W){const{onFocus:Z}=n,{nTriggerFormFocus:ve}=p;Z&&si(Z,W),ve()}function Fe(){var W;(W=b.value)===null||W===void 0||W.focusInput()}function $(){var W;(W=b.value)===null||W===void 0||W.focus()}function he(){v.value||(m.value="",xe(!0),n.filterable&&Fe())}function ee(W=!1){W&&$(),xe(!1),m.value=""}function ye(W){var Z;Te.value||ue.value&&(!((Z=b.value)===null||Z===void 0)&&Z.$el.contains(Gu(W))||ee())}function Se(W){Te.value&&ye(W)}function Ue(){n.clearFilterAfterSelect&&(m.value="")}function E(W){var Z,ve,Ne;const{value:Pe}=y,{value:Me}=L;switch(W){case"prev":if(Pe!==null){const Re=Me.getPrev(Pe,{loop:!0});Re!==null&&(oe(Re.key),(Z=u.value)===null||Z===void 0||Z.scroll(Re.level,Re.index,Hi(ne.value)))}break;case"next":if(Pe===null){const Re=Me.getFirstAvailableNode();Re!==null&&(oe(Re.key),(ve=u.value)===null||ve===void 0||ve.scroll(Re.level,Re.index,Hi(ne.value)))}else{const Re=Me.getNext(Pe,{loop:!0});Re!==null&&(oe(Re.key),(Ne=u.value)===null||Ne===void 0||Ne.scroll(Re.level,Re.index,Hi(ne.value)))}break;case"child":if(Pe!==null){const Re=Me.getNode(Pe);if(Re!==null)if(Re.shallowLoaded){const Ie=Me.getChild(Pe);Ie!==null&&(we(Pe),oe(Ie.key))}else{const{value:Ie}=A;if(!Ie.has(Pe)){w(Pe),we(Pe);const{onLoad:Oe}=n;Oe&&Oe(Re.rawNode).then(()=>{C(Pe)}).catch(()=>{C(Pe)})}}}break;case"parent":if(Pe!==null){const Re=Me.getParent(Pe);if(Re!==null){oe(Re.key);const Ie=Re.getParent();we(Ie===null?null:Ie.key)}}break}}function g(W){var Z,ve;switch(W.key){case" ":case"ArrowDown":case"ArrowUp":if(n.filterable&&ue.value)break;W.preventDefault();break}if(!Er(W,"action"))switch(W.key){case" ":if(n.filterable)return;case"Enter":if(!ue.value)he();else{const{value:Ne}=Te,{value:Pe}=y;if(Ne)_.value&&_.value.enter()&&Ue();else if(Pe!==null)if(G.value.includes(Pe)||X.value.includes(Pe))U(Pe);else{const Me=H(Pe);!n.multiple&&Me&&ee(!0)}}break;case"ArrowUp":W.preventDefault(),ue.value&&(Te.value?(Z=_.value)===null||Z===void 0||Z.prev():E("prev"));break;case"ArrowDown":W.preventDefault(),ue.value?Te.value?(ve=_.value)===null||ve===void 0||ve.next():E("next"):he();break;case"ArrowLeft":W.preventDefault(),ue.value&&!Te.value&&E("parent");break;case"ArrowRight":W.preventDefault(),ue.value&&!Te.value&&E("child");break;case"Escape":ue.value&&(Vu(W),ee(!0))}}function M(W){g(W)}function D(W){W.stopPropagation(),n.multiple?re([],[],[]):re(null,null,null)}function N(W){var Z;!((Z=u.value)===null||Z===void 0)&&Z.$el.contains(W.relatedTarget)||(T.value=!0,B(W))}function F(W){var Z;!((Z=u.value)===null||Z===void 0)&&Z.$el.contains(W.relatedTarget)||(T.value=!1,He(W),ee())}function q(W){var Z;!((Z=b.value)===null||Z===void 0)&&Z.$el.contains(W.relatedTarget)||(T.value=!0,B(W))}function Y(W){var Z;!((Z=b.value)===null||Z===void 0)&&Z.$el.contains(W.relatedTarget)||(T.value=!1,He(W))}function le(W){Er(W,"action")||n.multiple&&n.filter&&(W.preventDefault(),Fe())}function fe(){ee(!0)}function ie(){n.filterable?he():ue.value?ee(!0):he()}function ge(W){m.value=W.target.value}function ke(W){const{multiple:Z}=n,{value:ve}=d;Z&&Array.isArray(ve)&&W.value!==void 0?U(W.value):re(null,null,null)}function ze(){var W;(W=P.value)===null||W===void 0||W.syncPosition()}function Le(){var W;(W=k.value)===null||W===void 0||W.syncPosition()}function De(){ue.value&&(Te.value?ze():Le())}const z=$e(()=>!!(n.multiple&&n.cascade||h.value!=="child"));ka(Dr,{slots:e,mergedClsPrefixRef:i,mergedThemeRef:a,mergedValueRef:d,checkedKeysRef:G,indeterminateKeysRef:X,hoverKeyPathRef:j,mergedCheckStrategyRef:h,showCheckboxRef:z,cascadeRef:_t(n,"cascade"),multipleRef:_t(n,"multiple"),keyboardKeyRef:y,hoverKeyRef:R,remoteRef:_t(n,"remote"),loadingKeySetRef:A,expandTriggerRef:_t(n,"expandTrigger"),isMountedRef:Bu(),onLoadRef:_t(n,"onLoad"),virtualScrollRef:_t(n,"virtualScroll"),optionHeightRef:ne,localeRef:l,labelFieldRef:_t(n,"labelField"),renderLabelRef:_t(n,"renderLabel"),getColumnStyleRef:_t(n,"getColumnStyle"),renderPrefixRef:_t(n,"renderPrefix"),renderSuffixRef:_t(n,"renderSuffix"),syncCascaderMenuPosition:Le,syncSelectMenuPosition:ze,updateKeyboardKey:oe,updateHoverKey:we,addLoadingKey:w,deleteLoadingKey:C,doCheck:H,doUncheck:U,closeMenu:ee,handleSelectMenuClickOutside:Se,handleCascaderMenuClickOutside:ye,clearPattern:Ue});const Ce={focus:()=>{var W;(W=b.value)===null||W===void 0||W.focus()},blur:()=>{var W;(W=b.value)===null||W===void 0||W.blur()},getCheckedData:()=>{if(z.value){const W=G.value;return{keys:W,options:te(W)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(z.value){const W=X.value;return{keys:W,options:te(W)}}return{keys:[],options:[]}}},Ae=$e(()=>{const{self:{optionArrowColor:W,optionTextColor:Z,optionTextColorActive:ve,optionTextColorDisabled:Ne,optionCheckMarkColor:Pe,menuColor:Me,menuBoxShadow:Re,menuDividerColor:Ie,menuBorderRadius:Oe,menuHeight:Xe,optionColorHover:ut,optionHeight:It,optionFontSize:zt,loadingColor:En,columnWidth:Si},common:{cubicBezierEaseInOut:Gn}}=a.value;return{"--n-bezier":Gn,"--n-menu-border-radius":Oe,"--n-menu-box-shadow":Re,"--n-menu-height":Xe,"--n-column-width":Si,"--n-menu-color":Me,"--n-menu-divider-color":Ie,"--n-option-height":It,"--n-option-font-size":zt,"--n-option-text-color":Z,"--n-option-text-color-disabled":Ne,"--n-option-text-color-active":ve,"--n-option-color-hover":ut,"--n-option-check-mark-color":Pe,"--n-option-arrow-color":W,"--n-menu-mask-color":zu(Me,{alpha:.75}),"--n-loading-color":En}}),Ee=o?Fo("cascader",void 0,Ae,n):void 0;return Object.assign(Object.assign({},Ce),{handleTriggerResize:De,mergedStatus:f,selectMenuFollowerRef:P,cascaderMenuFollowerRef:k,triggerInstRef:b,selectMenuInstRef:_,cascaderMenuInstRef:u,mergedBordered:t,mergedClsPrefix:i,namespace:r,mergedValue:d,mergedShow:ue,showSelectMenu:Te,pattern:m,treeMate:L,mergedSize:x,mergedDisabled:v,localizedPlaceholder:_e,selectedOption:K,selectedOptions:V,adjustedTo:S,menuModel:J,handleMenuTabout:fe,handleMenuFocus:q,handleMenuBlur:Y,handleMenuKeydown:M,handleMenuMousedown:le,handleTriggerFocus:N,handleTriggerBlur:F,handleTriggerClick:ie,handleClear:D,handleDeleteOption:ke,handlePatternInput:ge,handleKeydown:g,focused:T,optionHeight:ne,mergedTheme:a,cssVars:o?void 0:Ae,themeClass:Ee==null?void 0:Ee.themeClass,onRender:Ee==null?void 0:Ee.onRender})},render(){const{mergedClsPrefix:n}=this;return be("div",{class:`${n}-cascader`},be(id,null,{default:()=>[be(rd,null,{default:()=>be(bd,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:n,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var e,t;return(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)}})}),be(al,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===bo.tdkey,to:this.adjustedTo},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{menuProps:t}=this;return be(Md,Object.assign({},t,{ref:"cascaderMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,t==null?void 0:t.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var i,r;return(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)},empty:()=>{var i,r;return(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)}})}}),be(al,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===bo.tdkey},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{filterMenuProps:t}=this;return be(Rd,Object.assign({},t,{ref:"selectMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,t==null?void 0:t.style]}))}})]}))}}),Ld=Qe("radio",`
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
`,[vt("checked",[at("dot",`
 background-color: var(--n-color-active);
 `)]),at("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),Qe("radio-input",`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),at("dot",`
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
 `,[wt("&::before",`
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
 `),vt("checked",{boxShadow:"var(--n-box-shadow-active)"},[wt("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),at("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),wo("disabled",`
 cursor: pointer;
 `,[wt("&:hover",[at("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),vt("focus",[wt("&:not(:active)",[at("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),vt("disabled",`
 cursor: not-allowed;
 `,[at("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[wt("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),vt("checked",`
 opacity: 1;
 `)]),at("label",{color:"var(--n-text-color-disabled)"}),Qe("radio-input",`
 cursor: not-allowed;
 `)])]),Id=Object.assign(Object.assign({},ii.props),Ju),Nd=Lt({name:"Radio",props:Id,setup(n){const e=$u(n),t=ii("Radio","-radio",Ld,Zu,n,e.mergedClsPrefix),i=$e(()=>{const{mergedSize:{value:s}}=e,{common:{cubicBezierEaseInOut:d},self:{boxShadow:h,boxShadowActive:m,boxShadowDisabled:p,boxShadowFocus:x,boxShadowHover:v,color:f,colorDisabled:u,colorActive:_,textColor:b,textColorDisabled:y,dotColorActive:R,dotColorDisabled:A,labelPadding:P,labelLineHeight:k,labelFontWeight:S,[Fn("fontSize",s)]:T,[Fn("radioSize",s)]:w}}=t.value;return{"--n-bezier":d,"--n-label-line-height":k,"--n-label-font-weight":S,"--n-box-shadow":h,"--n-box-shadow-active":m,"--n-box-shadow-disabled":p,"--n-box-shadow-focus":x,"--n-box-shadow-hover":v,"--n-color":f,"--n-color-active":_,"--n-color-disabled":u,"--n-dot-color-active":R,"--n-dot-color-disabled":A,"--n-font-size":T,"--n-radio-size":w,"--n-text-color":b,"--n-text-color-disabled":y,"--n-label-padding":P}}),{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:a}=Do(n),l=Ns("Radio",a,o),c=r?Fo("radio",$e(()=>e.mergedSize.value[0]),i,n):void 0;return Object.assign(e,{rtlEnabled:l,cssVars:r?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{$slots:n,mergedClsPrefix:e,onRender:t,label:i}=this;return t==null||t(),be("label",{class:[`${e}-radio`,this.themeClass,this.rtlEnabled&&`${e}-radio--rtl`,this.mergedDisabled&&`${e}-radio--disabled`,this.renderSafeChecked&&`${e}-radio--checked`,this.focus&&`${e}-radio--focus`],style:this.cssVars},be("div",{class:`${e}-radio__dot-wrapper`}," ",be("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]}),be("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),Co(n.default,r=>!r&&!i?null:be("div",{ref:"labelRef",class:`${e}-radio__label`},r||i)))}}),Od={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Dd=Lt({name:"ArrowMove20Regular",render:function(e,t){return un(),pi("svg",Od,t[0]||(t[0]=[rn("g",{fill:"none"},[rn("path",{d:"M7.146 4.354a.5.5 0 0 0 .708 0L9.5 2.707V6.5a.5.5 0 0 0 1 0V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm-2.792 3.5a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L2.707 10.5H6.5a.5.5 0 0 0 0-1H2.707l1.647-1.646zm11.292 0a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H13.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646zm-7.792 7.792a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 17.293V13.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647z",fill:"currentColor"})],-1)]))}}),Fd={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Ud=Lt({name:"ArrowMoveInward20Regular",render:function(e,t){return un(),pi("svg",Fd,t[0]||(t[0]=[rn("g",{fill:"none"},[rn("path",{d:"M7.146 16.354a.5.5 0 0 0 .708 0L9.5 14.707V18.5a.5.5 0 0 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm9.208-8.5a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L14.707 10.5H18.5a.5.5 0 0 0 0-1h-3.793l1.647-1.646zm-12.708 0a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L5.293 10.5H1.5a.5.5 0 0 1 0-1h3.793L3.646 7.854zm4.208-4.208a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 5.293V1.5a.5.5 0 0 0-1 0v3.793L7.854 3.646z",fill:"currentColor"})],-1)]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fs="181",ji={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kd=0,pl=1,Bd=2,Nc=1,zd=2,Dn=3,zn=0,Ht=1,_n=2,kn=0,Yi=1,ml=2,gl=3,xl=4,Vd=5,mi=100,Gd=101,Hd=102,Wd=103,Xd=104,jd=200,Yd=201,Kd=202,qd=203,za=204,Va=205,$d=206,Zd=207,Jd=208,Qd=209,eh=210,th=211,nh=212,ih=213,rh=214,Ga=0,Ha=1,Wa=2,qi=3,Xa=4,ja=5,Ya=6,Ka=7,Us=0,oh=1,ah=2,ti=0,sh=1,lh=2,ch=3,uh=4,dh=5,hh=6,fh=7,Oc=300,$i=301,Zi=302,qa=303,$a=304,Uo=306,Jn=1e3,on=1001,Za=1002,an=1003,ph=1004,jr=1005,hn=1006,ra=1007,xi=1008,An=1009,Dc=1010,Fc=1011,Sr=1012,ks=1013,vi=1014,Un=1015,nr=1016,Bs=1017,zs=1018,Tr=1020,Uc=35902,kc=35899,Bc=1021,zc=1022,fn=1023,Mr=1026,Ar=1027,Vc=1028,Vs=1029,Gs=1030,Hs=1031,Ws=1033,Eo=33776,So=33777,To=33778,Mo=33779,Ja=35840,Qa=35841,es=35842,ts=35843,ns=36196,is=37492,rs=37496,os=37808,as=37809,ss=37810,ls=37811,cs=37812,us=37813,ds=37814,hs=37815,fs=37816,ps=37817,ms=37818,gs=37819,xs=37820,vs=37821,_s=36492,ys=36494,bs=36495,Es=36283,Ss=36284,Ts=36285,Ms=36286,mh=3200,gh=3201,Xs=0,xh=1,Zn="",Rt="srgb",Ji="srgb-linear",Po="linear",mt="srgb",Ri=7680,vl=519,vh=512,_h=513,yh=514,Gc=515,bh=516,Eh=517,Sh=518,Th=519,_l=35044,yl="300 es",Mn=2e3,Lo=2001;function Hc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mh(){const n=Rr("canvas");return n.style.display="block",n}const bl={};function El(...n){const e="THREE."+n.shift();console.log(e,...n)}function tt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Pt(...n){const e="THREE."+n.shift();console.error(e,...n)}function wr(...n){const e=n.join(" ");e in bl||(bl[e]=!0,tt(...n))}function Ah(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=Math.PI/180,As=180/Math.PI;function Fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Rh(n,e){return(n%e+e)%e}function oa(n,e,t){return(1-t)*n+t*e}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wh={DEG2RAD:Ao};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ri{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,l){let c=i[r+0],s=i[r+1],d=i[r+2],h=i[r+3],m=o[a+0],p=o[a+1],x=o[a+2],v=o[a+3];if(l<=0){e[t+0]=c,e[t+1]=s,e[t+2]=d,e[t+3]=h;return}if(l>=1){e[t+0]=m,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||c!==m||s!==p||d!==x){let f=c*m+s*p+d*x+h*v;f<0&&(m=-m,p=-p,x=-x,v=-v,f=-f);let u=1-l;if(f<.9995){const _=Math.acos(f),b=Math.sin(_);u=Math.sin(u*_)/b,l=Math.sin(l*_)/b,c=c*u+m*l,s=s*u+p*l,d=d*u+x*l,h=h*u+v*l}else{c=c*u+m*l,s=s*u+p*l,d=d*u+x*l,h=h*u+v*l;const _=1/Math.sqrt(c*c+s*s+d*d+h*h);c*=_,s*=_,d*=_,h*=_}}e[t]=c,e[t+1]=s,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,o,a){const l=i[r],c=i[r+1],s=i[r+2],d=i[r+3],h=o[a],m=o[a+1],p=o[a+2],x=o[a+3];return e[t]=l*x+d*h+c*p-s*m,e[t+1]=c*x+d*m+s*h-l*p,e[t+2]=s*x+d*p+l*m-c*h,e[t+3]=d*x-l*h-c*m-s*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,s=l(i/2),d=l(r/2),h=l(o/2),m=c(i/2),p=c(r/2),x=c(o/2);switch(a){case"XYZ":this._x=m*d*h+s*p*x,this._y=s*p*h-m*d*x,this._z=s*d*x+m*p*h,this._w=s*d*h-m*p*x;break;case"YXZ":this._x=m*d*h+s*p*x,this._y=s*p*h-m*d*x,this._z=s*d*x-m*p*h,this._w=s*d*h+m*p*x;break;case"ZXY":this._x=m*d*h-s*p*x,this._y=s*p*h+m*d*x,this._z=s*d*x+m*p*h,this._w=s*d*h-m*p*x;break;case"ZYX":this._x=m*d*h-s*p*x,this._y=s*p*h+m*d*x,this._z=s*d*x-m*p*h,this._w=s*d*h+m*p*x;break;case"YZX":this._x=m*d*h+s*p*x,this._y=s*p*h+m*d*x,this._z=s*d*x-m*p*h,this._w=s*d*h-m*p*x;break;case"XZY":this._x=m*d*h-s*p*x,this._y=s*p*h-m*d*x,this._z=s*d*x+m*p*h,this._w=s*d*h+m*p*x;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],l=t[5],c=t[9],s=t[2],d=t[6],h=t[10],m=i+l+h;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(d-c)*p,this._y=(o-s)*p,this._z=(a-r)*p}else if(i>l&&i>h){const p=2*Math.sqrt(1+i-l-h);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+s)/p}else if(l>h){const p=2*Math.sqrt(1+l-i-h);this._w=(o-s)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-i-l);this._w=(a-r)/p,this._x=(o+s)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,l=t._x,c=t._y,s=t._z,d=t._w;return this._x=i*d+a*l+r*s-o*c,this._y=r*d+a*c+o*l-i*s,this._z=o*d+a*s+i*c-r*l,this._w=a*d-i*l-r*c-o*s,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,o=-o,a=-a,l=-l);let c=1-t;if(l<.9995){const s=Math.acos(l),d=Math.sin(s);c=Math.sin(c*s)/d,t=Math.sin(t*s)/d,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,l=e.z,c=e.w,s=2*(a*r-l*i),d=2*(l*t-o*r),h=2*(o*i-a*t);return this.x=t+c*s+a*h-l*d,this.y=i+c*d+l*s-o*h,this.z=r+c*h+o*d-a*s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new ae,Sl=new ri;class rt{constructor(e,t,i,r,o,a,l,c,s){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,l,c,s)}set(e,t,i,r,o,a,l,c,s){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=o,d[5]=c,d[6]=i,d[7]=a,d[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],l=i[3],c=i[6],s=i[1],d=i[4],h=i[7],m=i[2],p=i[5],x=i[8],v=r[0],f=r[3],u=r[6],_=r[1],b=r[4],y=r[7],R=r[2],A=r[5],P=r[8];return o[0]=a*v+l*_+c*R,o[3]=a*f+l*b+c*A,o[6]=a*u+l*y+c*P,o[1]=s*v+d*_+h*R,o[4]=s*f+d*b+h*A,o[7]=s*u+d*y+h*P,o[2]=m*v+p*_+x*R,o[5]=m*f+p*b+x*A,o[8]=m*u+p*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],s=e[7],d=e[8];return t*a*d-t*l*s-i*o*d+i*l*c+r*o*s-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],s=e[7],d=e[8],h=d*a-l*s,m=l*c-d*o,p=s*o-a*c,x=t*h+i*m+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*s-d*i)*v,e[2]=(l*i-r*a)*v,e[3]=m*v,e[4]=(d*t-r*c)*v,e[5]=(r*o-l*t)*v,e[6]=p*v,e[7]=(i*c-s*t)*v,e[8]=(a*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,l){const c=Math.cos(o),s=Math.sin(o);return this.set(i*c,i*s,-i*(c*a+s*l)+a+e,-r*s,r*c,-r*(-s*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new rt,Tl=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const n={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===mt&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Po:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ji]:{primaries:e,whitePoint:i,transfer:Po,toXYZ:Tl,fromXYZ:Ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Tl,fromXYZ:Ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const dt=Ch();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class Ph{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wi===void 0&&(wi=Rr("canvas")),wi.width=e.width,wi.height=e.height;const r=wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Bn(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lh=0;class js{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(la(r[a].image)):o.push(la(r[a]))}else o=la(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ph.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Ih=0;const ca=new ae;class Wt extends bi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=on,r=on,o=hn,a=xi,l=fn,c=An,s=Wt.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Fr(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=s,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Oc;Wt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,s=c[0],d=c[4],h=c[8],m=c[1],p=c[5],x=c[9],v=c[2],f=c[6],u=c[10];if(Math.abs(d-m)<.01&&Math.abs(h-v)<.01&&Math.abs(x-f)<.01){if(Math.abs(d+m)<.1&&Math.abs(h+v)<.1&&Math.abs(x+f)<.1&&Math.abs(s+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(s+1)/2,y=(p+1)/2,R=(u+1)/2,A=(d+m)/4,P=(h+v)/4,k=(x+f)/4;return b>y&&b>R?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=A/i,o=P/i):y>R?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=A/r,o=k/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=P/o,r=k/o),this.set(i,r,o,t),this}let _=Math.sqrt((f-x)*(f-x)+(h-v)*(h-v)+(m-d)*(m-d));return Math.abs(_)<.001&&(_=1),this.x=(f-x)/_,this.y=(h-v)/_,this.z=(m-d)/_,this.w=Math.acos((s+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new Wt(r);this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new js(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Nh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wc extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(o,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Kr.subVectors(this.max,cr),Ci.subVectors(e.a,cr),Pi.subVectors(e.b,cr),Li.subVectors(e.c,cr),Hn.subVectors(Pi,Ci),Wn.subVectors(Li,Pi),li.subVectors(Ci,Li);let t=[0,-Hn.z,Hn.y,0,-Wn.z,Wn.y,0,-li.z,li.y,Hn.z,0,-Hn.x,Wn.z,0,-Wn.x,li.z,0,-li.x,-Hn.y,Hn.x,0,-Wn.y,Wn.x,0,-li.y,li.x,0];return!ua(t,Ci,Pi,Li,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ci,Pi,Li,Kr))?!1:(qr.crossVectors(Hn,Wn),t=[qr.x,qr.y,qr.z],ua(t,Ci,Pi,Li,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],mn=new ae,Yr=new ni,Ci=new ae,Pi=new ae,Li=new ae,Hn=new ae,Wn=new ae,li=new ae,cr=new ae,Kr=new ae,qr=new ae,ci=new ae;function ua(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){ci.fromArray(n,o);const l=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=e.dot(ci),s=t.dot(ci),d=i.dot(ci);if(Math.max(-Math.max(c,s,d),Math.min(c,s,d))>l)return!1}return!0}const Dh=new ni,ur=new ae,da=new ae;class Ur{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dh.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(da)),this.expandByPoint(ur.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new ae,ha=new ae,$r=new ae,Xn=new ae,fa=new ae,Zr=new ae,pa=new ae;class ko{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ha.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(ha);const o=e.distanceTo(t)*.5,a=-this.direction.dot($r),l=Xn.dot(this.direction),c=-Xn.dot($r),s=Xn.lengthSq(),d=Math.abs(1-a*a);let h,m,p,x;if(d>0)if(h=a*c-l,m=a*l-c,x=o*d,h>=0)if(m>=-x)if(m<=x){const v=1/d;h*=v,m*=v,p=h*(h+a*m+2*l)+m*(a*h+m+2*c)+s}else m=o,h=Math.max(0,-(a*m+l)),p=-h*h+m*(m+2*c)+s;else m=-o,h=Math.max(0,-(a*m+l)),p=-h*h+m*(m+2*c)+s;else m<=-x?(h=Math.max(0,-(-a*o+l)),m=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+m*(m+2*c)+s):m<=x?(h=0,m=Math.min(Math.max(-o,-c),o),p=m*(m+2*c)+s):(h=Math.max(0,-(a*o+l)),m=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+m*(m+2*c)+s);else m=a>0?-o:o,h=Math.max(0,-(a*m+l)),p=-h*h+m*(m+2*c)+s;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ha).addScaledVector($r,m),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,l,c;const s=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,m=this.origin;return s>=0?(i=(e.min.x-m.x)*s,r=(e.max.x-m.x)*s):(i=(e.max.x-m.x)*s,r=(e.min.x-m.x)*s),d>=0?(o=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(o=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),h>=0?(l=(e.min.z-m.z)*h,c=(e.max.z-m.z)*h):(l=(e.max.z-m.z)*h,c=(e.min.z-m.z)*h),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,o){fa.subVectors(t,e),Zr.subVectors(i,e),pa.crossVectors(fa,Zr);let a=this.direction.dot(pa),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const c=l*this.direction.dot(Zr.crossVectors(Xn,Zr));if(c<0)return null;const s=l*this.direction.dot(fa.cross(Xn));if(s<0||c+s>a)return null;const d=-l*Xn.dot(pa);return d<0?null:this.at(d/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,r,o,a,l,c,s,d,h,m,p,x,v,f){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,l,c,s,d,h,m,p,x,v,f)}set(e,t,i,r,o,a,l,c,s,d,h,m,p,x,v,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=o,u[5]=a,u[9]=l,u[13]=c,u[2]=s,u[6]=d,u[10]=h,u[14]=m,u[3]=p,u[7]=x,u[11]=v,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),o=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),s=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const m=a*d,p=a*h,x=l*d,v=l*h;t[0]=c*d,t[4]=-c*h,t[8]=s,t[1]=p+x*s,t[5]=m-v*s,t[9]=-l*c,t[2]=v-m*s,t[6]=x+p*s,t[10]=a*c}else if(e.order==="YXZ"){const m=c*d,p=c*h,x=s*d,v=s*h;t[0]=m+v*l,t[4]=x*l-p,t[8]=a*s,t[1]=a*h,t[5]=a*d,t[9]=-l,t[2]=p*l-x,t[6]=v+m*l,t[10]=a*c}else if(e.order==="ZXY"){const m=c*d,p=c*h,x=s*d,v=s*h;t[0]=m-v*l,t[4]=-a*h,t[8]=x+p*l,t[1]=p+x*l,t[5]=a*d,t[9]=v-m*l,t[2]=-a*s,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const m=a*d,p=a*h,x=l*d,v=l*h;t[0]=c*d,t[4]=x*s-p,t[8]=m*s+v,t[1]=c*h,t[5]=v*s+m,t[9]=p*s-x,t[2]=-s,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,p=a*s,x=l*c,v=l*s;t[0]=c*d,t[4]=v-m*h,t[8]=x*h+p,t[1]=h,t[5]=a*d,t[9]=-l*d,t[2]=-s*d,t[6]=p*h+x,t[10]=m-v*h}else if(e.order==="XZY"){const m=a*c,p=a*s,x=l*c,v=l*s;t[0]=c*d,t[4]=-h,t[8]=s*d,t[1]=m*h+v,t[5]=a*d,t[9]=p*h-x,t[2]=x*h-p,t[6]=l*d,t[10]=v*h+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Uh)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(i,tn),jn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(i,tn)),jn.normalize(),Jr.crossVectors(tn,jn),r[0]=jn.x,r[4]=Jr.x,r[8]=tn.x,r[1]=jn.y,r[5]=Jr.y,r[9]=tn.y,r[2]=jn.z,r[6]=Jr.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],l=i[4],c=i[8],s=i[12],d=i[1],h=i[5],m=i[9],p=i[13],x=i[2],v=i[6],f=i[10],u=i[14],_=i[3],b=i[7],y=i[11],R=i[15],A=r[0],P=r[4],k=r[8],S=r[12],T=r[1],w=r[5],C=r[9],L=r[13],O=r[2],G=r[6],X=r[10],J=r[14],j=r[3],ne=r[7],de=r[11],xe=r[15];return o[0]=a*A+l*T+c*O+s*j,o[4]=a*P+l*w+c*G+s*ne,o[8]=a*k+l*C+c*X+s*de,o[12]=a*S+l*L+c*J+s*xe,o[1]=d*A+h*T+m*O+p*j,o[5]=d*P+h*w+m*G+p*ne,o[9]=d*k+h*C+m*X+p*de,o[13]=d*S+h*L+m*J+p*xe,o[2]=x*A+v*T+f*O+u*j,o[6]=x*P+v*w+f*G+u*ne,o[10]=x*k+v*C+f*X+u*de,o[14]=x*S+v*L+f*J+u*xe,o[3]=_*A+b*T+y*O+R*j,o[7]=_*P+b*w+y*G+R*ne,o[11]=_*k+b*C+y*X+R*de,o[15]=_*S+b*L+y*J+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],l=e[5],c=e[9],s=e[13],d=e[2],h=e[6],m=e[10],p=e[14],x=e[3],v=e[7],f=e[11],u=e[15];return x*(+o*c*h-r*s*h-o*l*m+i*s*m+r*l*p-i*c*p)+v*(+t*c*p-t*s*m+o*a*m-r*a*p+r*s*d-o*c*d)+f*(+t*s*h-t*l*p-o*a*h+i*a*p+o*l*d-i*s*d)+u*(-r*l*d-t*c*h+t*l*m+r*a*h-i*a*m+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],s=e[7],d=e[8],h=e[9],m=e[10],p=e[11],x=e[12],v=e[13],f=e[14],u=e[15],_=h*f*s-v*m*s+v*c*p-l*f*p-h*c*u+l*m*u,b=x*m*s-d*f*s-x*c*p+a*f*p+d*c*u-a*m*u,y=d*v*s-x*h*s+x*l*p-a*v*p-d*l*u+a*h*u,R=x*h*c-d*v*c-x*l*m+a*v*m+d*l*f-a*h*f,A=t*_+i*b+r*y+o*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=_*P,e[1]=(v*m*o-h*f*o-v*r*p+i*f*p+h*r*u-i*m*u)*P,e[2]=(l*f*o-v*c*o+v*r*s-i*f*s-l*r*u+i*c*u)*P,e[3]=(h*c*o-l*m*o-h*r*s+i*m*s+l*r*p-i*c*p)*P,e[4]=b*P,e[5]=(d*f*o-x*m*o+x*r*p-t*f*p-d*r*u+t*m*u)*P,e[6]=(x*c*o-a*f*o-x*r*s+t*f*s+a*r*u-t*c*u)*P,e[7]=(a*m*o-d*c*o+d*r*s-t*m*s-a*r*p+t*c*p)*P,e[8]=y*P,e[9]=(x*h*o-d*v*o-x*i*p+t*v*p+d*i*u-t*h*u)*P,e[10]=(a*v*o-x*l*o+x*i*s-t*v*s-a*i*u+t*l*u)*P,e[11]=(d*l*o-a*h*o-d*i*s+t*h*s+a*i*p-t*l*p)*P,e[12]=R*P,e[13]=(d*v*r-x*h*r+x*i*m-t*v*m-d*i*f+t*h*f)*P,e[14]=(x*l*r-a*v*r-x*i*c+t*v*c+a*i*f-t*l*f)*P,e[15]=(a*h*r-d*l*r+d*i*c-t*h*c-a*i*m+t*l*m)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,l=e.y,c=e.z,s=o*a,d=o*l;return this.set(s*a+i,s*l-r*c,s*c+r*l,0,s*l+r*c,d*l+i,d*c-r*a,0,s*c-r*l,d*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,l=t._z,c=t._w,s=o+o,d=a+a,h=l+l,m=o*s,p=o*d,x=o*h,v=a*d,f=a*h,u=l*h,_=c*s,b=c*d,y=c*h,R=i.x,A=i.y,P=i.z;return r[0]=(1-(v+u))*R,r[1]=(p+y)*R,r[2]=(x-b)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(m+u))*A,r[6]=(f+_)*A,r[7]=0,r[8]=(x+b)*P,r[9]=(f-_)*P,r[10]=(1-(m+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Ii.set(r[0],r[1],r[2]).length();const a=Ii.set(r[4],r[5],r[6]).length(),l=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const s=1/o,d=1/a,h=1/l;return gn.elements[0]*=s,gn.elements[1]*=s,gn.elements[2]*=s,gn.elements[4]*=d,gn.elements[5]*=d,gn.elements[6]*=d,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,o,a,l=Mn,c=!1){const s=this.elements,d=2*o/(t-e),h=2*o/(i-r),m=(t+e)/(t-e),p=(i+r)/(i-r);let x,v;if(c)x=o/(a-o),v=a*o/(a-o);else if(l===Mn)x=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(l===Lo)x=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return s[0]=d,s[4]=0,s[8]=m,s[12]=0,s[1]=0,s[5]=h,s[9]=p,s[13]=0,s[2]=0,s[6]=0,s[10]=x,s[14]=v,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,o,a,l=Mn,c=!1){const s=this.elements,d=2/(t-e),h=2/(i-r),m=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,v;if(c)x=1/(a-o),v=a/(a-o);else if(l===Mn)x=-2/(a-o),v=-(a+o)/(a-o);else if(l===Lo)x=-1/(a-o),v=-o/(a-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return s[0]=d,s[4]=0,s[8]=0,s[12]=m,s[1]=0,s[5]=h,s[9]=0,s[13]=p,s[2]=0,s[6]=0,s[10]=x,s[14]=v,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new ae,gn=new St,Fh=new ae(0,0,0),Uh=new ae(1,1,1),jn=new ae,Jr=new ae,tn=new ae,Al=new St,Rl=new ri;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],s=r[5],d=r[9],h=r[2],m=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,s),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,s)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,s));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,s),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,s),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const wl=new ae,Ni=new ri,Pn=new St,Qr=new ae,dr=new ae,Bh=new ae,zh=new ri,Cl=new ae(1,0,0),Pl=new ae(0,1,0),Ll=new ae(0,0,1),Il={type:"added"},Vh={type:"removed"},Oi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Tt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new ae,t=new bn,i=new ri,r=new ae(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new rt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(dr,Qr,this.up):Pn.lookAt(Qr,dr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let s=0,d=c.length;s<d;s++){const h=c[s];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,s=this.material.length;c<s;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),s=a(e.textures),d=a(e.images),h=a(e.shapes),m=a(e.skeletons),p=a(e.animations),x=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),s.length>0&&(i.textures=s),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(l){const c=[];for(const s in l){const d=l[s];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new ae(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new ae,Ln=new ae,ga=new ae,In=new ae,Di=new ae,Fi=new ae,Nl=new ae,xa=new ae,va=new ae,_a=new ae,ya=new Ct,ba=new Ct,Ea=new Ct;class yn{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xn.subVectors(e,t),r.cross(xn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){xn.subVectors(r,t),Ln.subVectors(i,t),ga.subVectors(e,t);const a=xn.dot(xn),l=xn.dot(Ln),c=xn.dot(ga),s=Ln.dot(Ln),d=Ln.dot(ga),h=a*s-l*l;if(h===0)return o.set(0,0,0),null;const m=1/h,p=(s*c-l*d)*m,x=(a*d-l*c)*m;return o.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,o,a,l,c){return this.getBarycoord(e,t,i,r,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,In.x),c.addScaledVector(a,In.y),c.addScaledVector(l,In.z),c)}static getInterpolatedAttribute(e,t,i,r,o,a){return ya.setScalar(0),ba.setScalar(0),Ea.setScalar(0),ya.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ea.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ya,o.x),a.addScaledVector(ba,o.y),a.addScaledVector(Ea,o.z),a}static isFrontFacing(e,t,i,r){return xn.subVectors(i,t),Ln.subVectors(e,t),xn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),xn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,l;Di.subVectors(r,i),Fi.subVectors(o,i),xa.subVectors(e,i);const c=Di.dot(xa),s=Fi.dot(xa);if(c<=0&&s<=0)return t.copy(i);va.subVectors(e,r);const d=Di.dot(va),h=Fi.dot(va);if(d>=0&&h<=d)return t.copy(r);const m=c*h-d*s;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(Di,a);_a.subVectors(e,o);const p=Di.dot(_a),x=Fi.dot(_a);if(x>=0&&p<=x)return t.copy(o);const v=p*s-c*x;if(v<=0&&s>=0&&x<=0)return l=s/(s-x),t.copy(i).addScaledVector(Fi,l);const f=d*x-p*h;if(f<=0&&h-d>=0&&p-x>=0)return Nl.subVectors(o,r),l=(h-d)/(h-d+(p-x)),t.copy(r).addScaledVector(Nl,l);const u=1/(f+v+m);return a=v*u,l=m*u,t.copy(i).addScaledVector(Di,a).addScaledVector(Fi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=Rh(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Sa(a,o,e+1/3),this.g=Sa(a,o,e),this.b=Sa(a,o,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function i(o){o!==void 0&&parseFloat(o)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=jc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return dt.workingToColorSpace(Gt.copy(this),e),Math.round(lt(Gt.r*255,0,255))*65536+Math.round(lt(Gt.g*255,0,255))*256+Math.round(lt(Gt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,o=Gt.b,a=Math.max(i,r,o),l=Math.min(i,r,o);let c,s;const d=(l+a)/2;if(l===a)c=0,s=0;else{const h=a-l;switch(s=d<=.5?h/(a+l):h/(2-a-l),a){case i:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-i)/h+2;break;case o:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=s,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Rt){dt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(eo);const i=oa(Yn.h,eo.h,t),r=oa(Yn.s,eo.s,t),o=oa(Yn.l,eo.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new nt;nt.NAMES=jc;let Gh=0;class oi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Yi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Va,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new ae,to=new Ke;let Hh=0;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_l,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),o=qt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}}class Yc extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kc extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wh=0;const cn=new St,Ta=new Tt,Ui=new ae,nn=new ni,hr=new ni,kt=new ae;class Ot extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?Kc:Yc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new rt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];hr.setFromBufferAttribute(l),this.morphTargetsRelative?(kt.addVectors(nn.min,hr.min),nn.expandByPoint(kt),kt.addVectors(nn.max,hr.max),nn.expandByPoint(kt)):(nn.expandByPoint(hr.min),nn.expandByPoint(hr.max))}nn.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let o=0,a=t.length;o<a;o++){const l=t[o],c=this.morphTargetsRelative;for(let s=0,d=l.count;s<d;s++)kt.fromBufferAttribute(l,s),c&&(Ui.fromBufferAttribute(e,s),kt.add(Ui)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<i.count;k++)l[k]=new ae,c[k]=new ae;const s=new ae,d=new ae,h=new ae,m=new Ke,p=new Ke,x=new Ke,v=new ae,f=new ae;function u(k,S,T){s.fromBufferAttribute(i,k),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,T),m.fromBufferAttribute(o,k),p.fromBufferAttribute(o,S),x.fromBufferAttribute(o,T),d.sub(s),h.sub(s),p.sub(m),x.sub(m);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(w),f.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(w),l[k].add(v),l[S].add(v),l[T].add(v),c[k].add(f),c[S].add(f),c[T].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,S=_.length;k<S;++k){const T=_[k],w=T.start,C=T.count;for(let L=w,O=w+C;L<O;L+=3)u(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new ae,y=new ae,R=new ae,A=new ae;function P(k){R.fromBufferAttribute(r,k),A.copy(R);const S=l[k];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(A,S);const w=y.dot(c[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,w)}for(let k=0,S=_.length;k<S;++k){const T=_[k],w=T.start,C=T.count;for(let L=w,O=w+C;L<O;L+=3)P(e.getX(L+0)),P(e.getX(L+1)),P(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const r=new ae,o=new ae,a=new ae,l=new ae,c=new ae,s=new ae,d=new ae,h=new ae;if(e)for(let m=0,p=e.count;m<p;m+=3){const x=e.getX(m+0),v=e.getX(m+1),f=e.getX(m+2);r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),d.subVectors(a,o),h.subVectors(r,o),d.cross(h),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),s.fromBufferAttribute(i,f),l.add(d),c.add(d),s.add(d),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(f,s.x,s.y,s.z)}else for(let m=0,p=t.count;m<p;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,o),h.subVectors(r,o),d.cross(h),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(l,c){const s=l.array,d=l.itemSize,h=l.normalized,m=new s.constructor(c.length*d);let p=0,x=0;for(let v=0,f=c.length;v<f;v++){l.isInterleavedBufferAttribute?p=c[v]*l.data.stride+l.offset:p=c[v]*d;for(let u=0;u<d;u++)m[x++]=s[p++]}return new Jt(m,d,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],s=e(c,i);t.setAttribute(l,s)}const o=this.morphAttributes;for(const l in o){const c=[],s=o[l];for(let d=0,h=s.length;d<h;d++){const m=s[d],p=e(m,i);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const s=a[l];t.addGroup(s.start,s.count,s.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const s in c)c[s]!==void 0&&(e[s]=c[s]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const s=i[c];e.data.attributes[c]=s.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const s=this.morphAttributes[c],d=[];for(let h=0,m=s.length;h<m;h++){const p=s[h];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const s in r){const d=r[s];this.setAttribute(s,d.clone(t))}const o=e.morphAttributes;for(const s in o){const d=[],h=o[s];for(let m=0,p=h.length;m<p;m++)d.push(h[m].clone(t));this.morphAttributes[s]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let s=0,d=a.length;s<d;s++){const h=a[s];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new St,ui=new ko,no=new Ur,Dl=new ae,io=new ae,ro=new ae,oo=new ae,Ma=new ae,ao=new ae,Fl=new ae,so=new ae;class Bt extends Tt{constructor(e=new Ot,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){ao.set(0,0,0);for(let c=0,s=o.length;c<s;c++){const d=l[c],h=o[c];d!==0&&(Ma.fromBufferAttribute(h,e),a?ao.addScaledVector(Ma,d):ao.addScaledVector(Ma.sub(t),d))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(o),ui.copy(e.ray).recast(e.near),!(no.containsPoint(ui.origin)===!1&&(ui.intersectSphere(no,Dl)===null||ui.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ol.copy(o).invert(),ui.copy(e.ray).applyMatrix4(Ol),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,s=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,m=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let x=0,v=m.length;x<v;x++){const f=m[x],u=a[f.materialIndex],_=Math.max(f.start,p.start),b=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let y=_,R=b;y<R;y+=3){const A=l.getX(y),P=l.getX(y+1),k=l.getX(y+2);r=lo(this,u,e,i,s,d,h,A,P,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=x,u=v;f<u;f+=3){const _=l.getX(f),b=l.getX(f+1),y=l.getX(f+2);r=lo(this,a,e,i,s,d,h,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=m.length;x<v;x++){const f=m[x],u=a[f.materialIndex],_=Math.max(f.start,p.start),b=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let y=_,R=b;y<R;y+=3){const A=y,P=y+1,k=y+2;r=lo(this,u,e,i,s,d,h,A,P,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let f=x,u=v;f<u;f+=3){const _=f,b=f+1,y=f+2;r=lo(this,a,e,i,s,d,h,_,b,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Xh(n,e,t,i,r,o,a,l){let c;if(e.side===Ht?c=i.intersectTriangle(a,o,r,!0,l):c=i.intersectTriangle(r,o,a,e.side===zn,l),c===null)return null;so.copy(l),so.applyMatrix4(n.matrixWorld);const s=t.ray.origin.distanceTo(so);return s<t.near||s>t.far?null:{distance:s,point:so.clone(),object:n}}function lo(n,e,t,i,r,o,a,l,c,s){n.getVertexPosition(l,io),n.getVertexPosition(c,ro),n.getVertexPosition(s,oo);const d=Xh(n,e,t,i,io,ro,oo,Fl);if(d){const h=new ae;yn.getBarycoord(Fl,io,ro,oo,h),r&&(d.uv=yn.getInterpolatedAttribute(r,l,c,s,h,new Ke)),o&&(d.uv1=yn.getInterpolatedAttribute(o,l,c,s,h,new Ke)),a&&(d.normal=yn.getInterpolatedAttribute(a,l,c,s,h,new ae),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const m={a:l,b:c,c:s,normal:new ae,materialIndex:0};yn.getNormal(io,ro,oo,m.normal),d.face=m,d.barycoord=h}return d}class ir extends Ot{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],s=[],d=[],h=[];let m=0,p=0;x("z","y","x",-1,-1,i,t,e,a,o,0),x("z","y","x",1,-1,i,t,-e,a,o,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,o,4),x("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(h,2));function x(v,f,u,_,b,y,R,A,P,k,S){const T=y/P,w=R/k,C=y/2,L=R/2,O=A/2,G=P+1,X=k+1;let J=0,j=0;const ne=new ae;for(let de=0;de<X;de++){const xe=de*w-L;for(let re=0;re<G;re++){const oe=re*T-C;ne[v]=oe*_,ne[f]=xe*b,ne[u]=O,s.push(ne.x,ne.y,ne.z),ne[v]=0,ne[f]=0,ne[u]=A>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(re/P),h.push(1-de/k),J+=1}}for(let de=0;de<k;de++)for(let xe=0;xe<P;xe++){const re=m+xe+G*de,oe=m+xe+G*(de+1),we=m+(xe+1)+G*(de+1),te=m+(xe+1)+G*de;c.push(re,oe,te),c.push(oe,we,te),j+=6}l.addGroup(p,j,S),p+=j,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Qi(n[t]);for(const r in i)e[r]=i[r]}return e}function jh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Yh={clone:Qi,merge:jt};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $c extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new ae,Ul=new Ke,kl=new Ke;class dn extends $c{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,kl),t.subVectors(kl,Ul)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,s=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*i/s,r*=a.width/c,i*=a.height/s}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Bi=1;class $h extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(ki,Bi,e,t);r.layers=this.layers,this.add(r);const o=new dn(ki,Bi,e,t);o.layers=this.layers,this.add(o);const a=new dn(ki,Bi,e,t);a.layers=this.layers,this.add(a);const l=new dn(ki,Bi,e,t);l.layers=this.layers,this.add(l);const c=new dn(ki,Bi,e,t);c.layers=this.layers,this.add(c);const s=new dn(ki,Bi,e,t);s.layers=this.layers,this.add(s)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,l,c]=t;for(const s of t)this.remove(s);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const s of t)this.add(s),s.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,c,s,d]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,s),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,m,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Zc extends Wt{constructor(e=[],t=$i,i,r,o,a,l,c,s,d){super(e,t,i,r,o,a,l,c,s,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zh extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),o=new Vn({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:kn});o.uniforms.tEquirect.value=t;const a=new Bt(r,o),l=t.minFilter;return t.minFilter===xi&&(t.minFilter=hn),new $h(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}class Qn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jh={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const l=this._targetRay,c=this._grip,s=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(s&&e.hand){a=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),u=this._getHandJoint(s,v);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=s.joints["index-finger-tip"],h=s.joints["thumb-tip"],m=d.position.distanceTo(h.position),p=.02,x=.005;s.inputState.pinching&&m>p+x?(s.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!s.inputState.pinching&&m<=p-x&&(s.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Jh)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),s!==null&&(s.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jc extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ys extends Wt{constructor(e=null,t=1,i=1,r,o,a,l,c,s=an,d=an,h,m){super(null,a,l,c,s,d,r,o,h,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ra=new ae,Qh=new ae,ef=new rt;class qn{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ra.subVectors(i,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ra),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ef.getNormalMatrix(e),r=this.coplanarPoint(Ra).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ur,tf=new Ke(.5,.5),co=new ae;class Ks{constructor(e=new qn,t=new qn,i=new qn,r=new qn,o=new qn,a=new qn){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn,i=!1){const r=this.planes,o=e.elements,a=o[0],l=o[1],c=o[2],s=o[3],d=o[4],h=o[5],m=o[6],p=o[7],x=o[8],v=o[9],f=o[10],u=o[11],_=o[12],b=o[13],y=o[14],R=o[15];if(r[0].setComponents(s-a,p-d,u-x,R-_).normalize(),r[1].setComponents(s+a,p+d,u+x,R+_).normalize(),r[2].setComponents(s+l,p+h,u+v,R+b).normalize(),r[3].setComponents(s-l,p-h,u-v,R-b).normalize(),i)r[4].setComponents(c,m,f,y).normalize(),r[5].setComponents(s-c,p-m,u-f,R-y).normalize();else if(r[4].setComponents(s-c,p-m,u-f,R-y).normalize(),t===Mn)r[5].setComponents(s+c,p+m,u+f,R+y).normalize();else if(t===Lo)r[5].setComponents(c,m,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=tf.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qc extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new ae,No=new ae,Bl=new St,fr=new ko,uo=new Ur,wa=new ae,zl=new ae;class nf extends Tt{constructor(e=new Ot,t=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Io.fromBufferAttribute(t,r-1),No.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Io.distanceTo(No);e.setAttribute("lineDistance",new st(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=o,e.ray.intersectsSphere(uo)===!1)return;Bl.copy(r).invert(),fr.copy(e.ray).applyMatrix4(Bl);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,s=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let v=p,f=x-1;v<f;v+=s){const u=d.getX(v),_=d.getX(v+1),b=ho(this,e,fr,c,u,_,v);b&&t.push(b)}if(this.isLineLoop){const v=d.getX(x-1),f=d.getX(p),u=ho(this,e,fr,c,v,f,x-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=p,f=x-1;v<f;v+=s){const u=ho(this,e,fr,c,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){const v=ho(this,e,fr,c,x-1,p,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function ho(n,e,t,i,r,o,a){const l=n.geometry.attributes.position;if(Io.fromBufferAttribute(l,r),No.fromBufferAttribute(l,o),t.distanceSqToSegment(Io,No,wa,zl)>i)return;wa.applyMatrix4(n.matrixWorld);const s=e.ray.origin.distanceTo(wa);if(!(s<e.near||s>e.far))return{distance:s,point:zl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Vl=new ae,Gl=new ae;class rf extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Vl.fromBufferAttribute(t,r),Gl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vl.distanceTo(Gl);e.setAttribute("lineDistance",new st(i,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eu extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hl=new St,Rs=new ko,fo=new Ur,po=new ae;class of extends Tt{constructor(e=new Ot,t=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),fo.radius+=o,e.ray.intersectsSphere(fo)===!1)return;Hl.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Hl);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,s=i.index,h=i.attributes.position;if(s!==null){const m=Math.max(0,a.start),p=Math.min(s.count,a.start+a.count);for(let x=m,v=p;x<v;x++){const f=s.getX(x);po.fromBufferAttribute(h,f),Wl(po,f,c,r,e,t,this)}}else{const m=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=m,v=p;x<v;x++)po.fromBufferAttribute(h,x),Wl(po,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Wl(n,e,t,i,r,o,a){const l=Rs.distanceSqToPoint(n);if(l<t){const c=new ae;Rs.closestPointToPoint(n,c),c.applyMatrix4(i);const s=r.ray.origin.distanceTo(c);if(s<r.near||s>r.far)return;o.push({distance:s,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tu extends Wt{constructor(e,t,i=vi,r,o,a,l=an,c=an,s,d=Mr,h=1){if(d!==Mr&&d!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:h};super(m,r,o,a,l,c,d,i,s),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bo extends Ot{constructor(e=1,t=1,i=1,r=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};const s=this;r=Math.floor(r),o=Math.floor(o);const d=[],h=[],m=[],p=[];let x=0;const v=[],f=i/2;let u=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(m,3)),this.setAttribute("uv",new st(p,2));function _(){const y=new ae,R=new ae;let A=0;const P=(t-e)/i;for(let k=0;k<=o;k++){const S=[],T=k/o,w=T*(t-e)+e;for(let C=0;C<=r;C++){const L=C/r,O=L*c+l,G=Math.sin(O),X=Math.cos(O);R.x=w*G,R.y=-T*i+f,R.z=w*X,h.push(R.x,R.y,R.z),y.set(G,P,X).normalize(),m.push(y.x,y.y,y.z),p.push(L,1-T),S.push(x++)}v.push(S)}for(let k=0;k<r;k++)for(let S=0;S<o;S++){const T=v[S][k],w=v[S+1][k],C=v[S+1][k+1],L=v[S][k+1];(e>0||S!==0)&&(d.push(T,w,L),A+=3),(t>0||S!==o-1)&&(d.push(w,C,L),A+=3)}s.addGroup(u,A,0),u+=A}function b(y){const R=x,A=new Ke,P=new ae;let k=0;const S=y===!0?e:t,T=y===!0?1:-1;for(let C=1;C<=r;C++)h.push(0,f*T,0),m.push(0,T,0),p.push(.5,.5),x++;const w=x;for(let C=0;C<=r;C++){const O=C/r*c+l,G=Math.cos(O),X=Math.sin(O);P.x=S*X,P.y=f*T,P.z=S*G,h.push(P.x,P.y,P.z),m.push(0,T,0),A.x=G*.5+.5,A.y=X*.5*T+.5,p.push(A.x,A.y),x++}for(let C=0;C<r;C++){const L=R+C,O=w+C;y===!0?d.push(O,O+1,L):d.push(O+1,O,L),k+=3}s.addGroup(u,k,y===!0?1:2),u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qs extends Bo{constructor(e=1,t=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,i,r,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function af(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=iu(n,0,r,t,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,s;if(i&&(o=df(n,e,o,t)),n.length>80*t){l=n[0],c=n[1];let d=l,h=c;for(let m=t;m<r;m+=t){const p=n[m],x=n[m+1];p<l&&(l=p),x<c&&(c=x),p>d&&(d=p),x>h&&(h=x)}s=Math.max(d-l,h-c),s=s!==0?32767/s:0}return Cr(o,a,t,l,c,s,0),a}function iu(n,e,t,i,r){let o;if(r===Ef(n,e,t,i)>0)for(let a=e;a<t;a+=i)o=Xl(a/i|0,n[a],n[a+1],o);else for(let a=t-i;a>=e;a-=i)o=Xl(a/i|0,n[a],n[a+1],o);return o&&er(o,o.next)&&(Lr(o),o=o.next),o}function yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(er(t,t.next)||Et(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Cr(n,e,t,i,r,o,a){if(!n)return;!a&&o&&gf(n,i,r,o);let l=n;for(;n.prev!==n.next;){const c=n.prev,s=n.next;if(o?lf(n,i,r,o):sf(n)){e.push(c.i,n.i,s.i),Lr(n),n=s.next,l=s.next;continue}if(n=s,n===l){a?a===1?(n=cf(yi(n),e),Cr(n,e,t,i,r,o,2)):a===2&&uf(n,e,t,i,r,o):Cr(yi(n),e,t,i,r,o,1);break}}}function sf(n){const e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;const r=e.x,o=t.x,a=i.x,l=e.y,c=t.y,s=i.y,d=Math.min(r,o,a),h=Math.min(l,c,s),m=Math.max(r,o,a),p=Math.max(l,c,s);let x=i.next;for(;x!==e;){if(x.x>=d&&x.x<=m&&x.y>=h&&x.y<=p&&mr(r,l,o,c,a,s,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function lf(n,e,t,i){const r=n.prev,o=n,a=n.next;if(Et(r,o,a)>=0)return!1;const l=r.x,c=o.x,s=a.x,d=r.y,h=o.y,m=a.y,p=Math.min(l,c,s),x=Math.min(d,h,m),v=Math.max(l,c,s),f=Math.max(d,h,m),u=ws(p,x,e,t,i),_=ws(v,f,e,t,i);let b=n.prevZ,y=n.nextZ;for(;b&&b.z>=u&&y&&y.z<=_;){if(b.x>=p&&b.x<=v&&b.y>=x&&b.y<=f&&b!==r&&b!==a&&mr(l,d,c,h,s,m,b.x,b.y)&&Et(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=v&&y.y>=x&&y.y<=f&&y!==r&&y!==a&&mr(l,d,c,h,s,m,y.x,y.y)&&Et(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=u;){if(b.x>=p&&b.x<=v&&b.y>=x&&b.y<=f&&b!==r&&b!==a&&mr(l,d,c,h,s,m,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=x&&y.y<=f&&y!==r&&y!==a&&mr(l,d,c,h,s,m,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cf(n,e){let t=n;do{const i=t.prev,r=t.next.next;!er(i,r)&&ou(i,t,t.next,r)&&Pr(i,r)&&Pr(r,i)&&(e.push(i.i,t.i,r.i),Lr(t),Lr(t.next),t=n=r),t=t.next}while(t!==n);return yi(t)}function uf(n,e,t,i,r,o){let a=n;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&_f(a,l)){let c=au(a,l);a=yi(a,a.next),c=yi(c,c.next),Cr(a,e,t,i,r,o,0),Cr(c,e,t,i,r,o,0);return}l=l.next}a=a.next}while(a!==n)}function df(n,e,t,i){const r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o]*i,c=o<a-1?e[o+1]*i:n.length,s=iu(n,l,c,i,!1);s===s.next&&(s.steiner=!0),r.push(vf(s))}r.sort(hf);for(let o=0;o<r.length;o++)t=ff(r[o],t);return t}function hf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function ff(n,e){const t=pf(n,e);if(!t)return e;const i=au(t,n);return yi(i,i.next),yi(t,t.next)}function pf(n,e){let t=e;const i=n.x,r=n.y;let o=-1/0,a;if(er(n,t))return t;do{if(er(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>o&&(o=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const l=a,c=a.x,s=a.y;let d=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&ru(r<s?i:o,r,c,s,r<s?o:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);Pr(t,n)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&mf(a,t)))&&(a=t,d=h)}t=t.next}while(t!==l);return a}function mf(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function gf(n,e,t,i){let r=n;do r.z===0&&(r.z=ws(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,xf(r)}function xf(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let a=i,l=0;for(let s=0;s<t&&(l++,a=a.nextZ,!!a);s++);let c=t;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,l--):(r=a,a=a.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=a}o.nextZ=null,t*=2}while(e>1);return n}function ws(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function vf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ru(n,e,t,i,r,o,a,l){return(r-a)*(e-l)>=(n-a)*(o-l)&&(n-a)*(i-l)>=(t-a)*(e-l)&&(t-a)*(o-l)>=(r-a)*(i-l)}function mr(n,e,t,i,r,o,a,l){return!(n===a&&e===l)&&ru(n,e,t,i,r,o,a,l)}function _f(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!yf(n,e)&&(Pr(n,e)&&Pr(e,n)&&bf(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||er(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function er(n,e){return n.x===e.x&&n.y===e.y}function ou(n,e,t,i){const r=go(Et(n,e,t)),o=go(Et(n,e,i)),a=go(Et(t,i,n)),l=go(Et(t,i,e));return!!(r!==o&&a!==l||r===0&&mo(n,t,e)||o===0&&mo(n,i,e)||a===0&&mo(t,n,i)||l===0&&mo(t,e,i))}function mo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function go(n){return n>0?1:n<0?-1:0}function yf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ou(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pr(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function bf(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function au(n,e){const t=Cs(n.i,n.x,n.y),i=Cs(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function Xl(n,e,t,i){const r=Cs(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cs(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ef(n,e,t,i){let r=0;for(let o=e,a=t-i;o<t;o+=i)r+=(n[a]-n[o])*(n[o+1]+n[a+1]),a=o;return r}class Sf{static triangulate(e,t,i=2){return af(e,t,i)}}class $s{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return $s.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];jl(e),Yl(i,e);let a=e.length;t.forEach(jl);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Yl(i,t[c]);const l=Sf.triangulate(i,r);for(let c=0;c<l.length;c+=3)o.push(l.slice(c,c+3));return o}}function jl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class zo extends Ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,l=Math.floor(i),c=Math.floor(r),s=l+1,d=c+1,h=e/l,m=t/c,p=[],x=[],v=[],f=[];for(let u=0;u<d;u++){const _=u*m-a;for(let b=0;b<s;b++){const y=b*h-o;x.push(y,-_,0),v.push(0,0,1),f.push(b/l),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<l;_++){const b=_+s*u,y=_+s*(u+1),R=_+1+s*(u+1),A=_+1+s*u;p.push(b,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class vr extends Ot{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let s=0;const d=[],h=new ae,m=new ae,p=[],x=[],v=[],f=[];for(let u=0;u<=i;u++){const _=[],b=u/i;let y=0;u===0&&a===0?y=.5/t:u===i&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(r+A*o)*Math.sin(a+b*l),h.y=e*Math.cos(a+b*l),h.z=e*Math.sin(r+A*o)*Math.sin(a+b*l),x.push(h.x,h.y,h.z),m.copy(h).normalize(),v.push(m.x,m.y,m.z),f.push(A+y,1-b),_.push(s++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<t;_++){const b=d[u][_+1],y=d[u][_],R=d[u+1][_],A=d[u+1][_+1];(u!==0||a>0)&&p.push(b,y,A),(u!==i-1||c<Math.PI)&&p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tf extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xs,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mf extends oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new nt(16777215),this.specular=new nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xs,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Af extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rf extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _r={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wf{constructor(e,t,i){const r=this;let o=!1,a=0,l=0,c;const s=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){l++,o===!1&&r.onStart!==void 0&&r.onStart(d,a,l),o=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return s.push(d,h),this},this.removeHandler=function(d){const h=s.indexOf(d);return h!==-1&&s.splice(h,2),this},this.getHandler=function(d){for(let h=0,m=s.length;h<m;h+=2){const p=s[h],x=s[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cf=new wf;class Tn{constructor(e){this.manager=e!==void 0?e:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class Pf extends Error{constructor(e,t){super(e),this.response=t}}class su extends Tn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=_r.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:i,onError:r});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(a).then(s=>{if(s.status===200||s.status===0){if(s.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||s.body===void 0||s.body.getReader===void 0)return s;const d=Nn[e],h=s.body.getReader(),m=s.headers.get("X-File-Size")||s.headers.get("Content-Length"),p=m?parseInt(m):0,x=p!==0;let v=0;const f=new ReadableStream({start(u){_();function _(){h.read().then(({done:b,value:y})=>{if(b)u.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:p});for(let A=0,P=d.length;A<P;A++){const k=d[A];k.onProgress&&k.onProgress(R)}u.enqueue(y),_()}},b=>{u.error(b)})}}});return new Response(f)}else throw new Pf(`fetch for "${s.url}" responded with ${s.status}: ${s.statusText}`,s)}).then(s=>{switch(c){case"arraybuffer":return s.arrayBuffer();case"blob":return s.blob();case"document":return s.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return s.json();default:if(l==="")return s.text();{const h=/charset="?([^;"\s]*)"?/i.exec(l),m=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(m);return s.arrayBuffer().then(x=>p.decode(x))}}}).then(s=>{_r.add(`file:${e}`,s);const d=Nn[e];delete Nn[e];for(let h=0,m=d.length;h<m;h++){const p=d[h];p.onLoad&&p.onLoad(s)}}).catch(s=>{const d=Nn[e];if(d===void 0)throw this.manager.itemError(e),s;delete Nn[e];for(let h=0,m=d.length;h<m;h++){const p=d[h];p.onError&&p.onError(s)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zi=new WeakMap;class Lf extends Tn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=_r.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0);else{let h=zi.get(a);h===void 0&&(h=[],zi.set(a,h)),h.push({onLoad:t,onError:r})}return a}const l=Rr("img");function c(){d(),t&&t(this);const h=zi.get(this)||[];for(let m=0;m<h.length;m++){const p=h[m];p.onLoad&&p.onLoad(this)}zi.delete(this),o.manager.itemEnd(e)}function s(h){d(),r&&r(h),_r.remove(`image:${e}`);const m=zi.get(this)||[];for(let p=0;p<m.length;p++){const x=m[p];x.onError&&x.onError(h)}zi.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",s,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",s,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),_r.add(`image:${e}`,l),o.manager.itemStart(e),l.src=e,l}}class If extends Tn{constructor(e){super(e)}load(e,t,i,r){const o=new Wt,a=new Lf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class lu extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ca=new St,Kl=new ae,ql=new ae;class Nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cu extends $c{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const s=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=s*this.view.offsetX,a=o+s*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Of extends Nf{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pa extends lu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Df extends lu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ff{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Uf extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $l{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kf extends bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){tt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zl(n,e,t,i){const r=Bf(i);switch(t){case Bc:return n*e;case Vc:return n*e/r.components*r.byteLength;case Vs:return n*e/r.components*r.byteLength;case Gs:return n*e*2/r.components*r.byteLength;case Hs:return n*e*2/r.components*r.byteLength;case zc:return n*e*3/r.components*r.byteLength;case fn:return n*e*4/r.components*r.byteLength;case Ws:return n*e*4/r.components*r.byteLength;case Eo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case ts:return Math.max(n,16)*Math.max(e,8)/4;case Ja:case es:return Math.max(n,8)*Math.max(e,8)/2;case ns:case is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case as:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ss:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ls:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case us:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ds:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ps:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ms:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _s:case ys:case bs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Es:case Ss:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ts:case Ms:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(n){switch(n){case An:case Dc:return{byteLength:1,components:1};case Sr:case Fc:case nr:return{byteLength:2,components:1};case Bs:case zs:return{byteLength:2,components:4};case vi:case ks:case Un:return{byteLength:4,components:1};case Uc:case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fs}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fs);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uu(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function zf(n){const e=new WeakMap;function t(l,c){const s=l.array,d=l.usage,h=s.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,s,d),l.onUploadCallback();let p;if(s instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&s instanceof Float16Array)p=n.HALF_FLOAT;else if(s instanceof Uint16Array)l.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(s instanceof Int16Array)p=n.SHORT;else if(s instanceof Uint32Array)p=n.UNSIGNED_INT;else if(s instanceof Int32Array)p=n.INT;else if(s instanceof Int8Array)p=n.BYTE;else if(s instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:m,type:p,bytesPerElement:s.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,s){const d=c.array,h=c.updateRanges;if(n.bindBuffer(s,l),h.length===0)n.bufferSubData(s,0,d);else{h.sort((p,x)=>p.start-x.start);let m=0;for(let p=1;p<h.length;p++){const x=h[m],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++m,h[m]=v)}h.length=m+1;for(let p=0,x=h.length;p<x;p++){const v=h[p];n.bufferSubData(s,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const s=e.get(l);if(s===void 0)e.set(l,t(l,c));else if(s.version<l.version){if(s.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(s.buffer,l,c),s.version=l.version}}return{get:r,remove:o,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,tp=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,Bp=`uniform sampler2D dfgLUT;
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
}`,zp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,a0=`#define NORMAL
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
}`,s0=`#define NORMAL
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
}`,l0=`#define PHONG
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
}`,c0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,f0=`#define TOON
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
}`,p0=`uniform float size;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Hf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:jf,aomap_fragment:Yf,aomap_pars_fragment:Kf,batching_pars_vertex:qf,batching_vertex:$f,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:Qf,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:sp,color_pars_vertex:lp,color_vertex:cp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:hp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:vp,envmap_fragment:_p,envmap_common_pars_fragment:yp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Sp,fog_vertex:Tp,fog_pars_vertex:Mp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Ip,lights_toon_fragment:Op,lights_toon_pars_fragment:Dp,lights_phong_fragment:Fp,lights_phong_pars_fragment:Up,lights_physical_fragment:kp,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:jp,map_fragment:Yp,map_pars_fragment:Kp,map_particle_fragment:qp,map_particle_pars_fragment:$p,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Qp,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:sm,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:vm,dithering_pars_fragment:_m,roughnessmap_fragment:ym,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Sm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Mm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:wm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Nm,transmission_fragment:Om,transmission_pars_fragment:Dm,uv_pars_fragment:Fm,uv_pars_vertex:Um,uv_vertex:km,worldpos_vertex:Bm,background_vert:zm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Hm,cube_vert:Wm,cube_frag:Xm,depth_vert:jm,depth_frag:Ym,distanceRGBA_vert:Km,distanceRGBA_frag:qm,equirect_vert:$m,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:Qm,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:s0,meshphong_vert:l0,meshphong_frag:c0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:h0,meshtoon_frag:f0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:x0,sprite_vert:v0,sprite_frag:_0},Ve={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Sn={basic:{uniforms:jt([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:jt([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:jt([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:jt([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:jt([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:jt([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:jt([Ve.points,Ve.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:jt([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:jt([Ve.common,Ve.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:jt([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:jt([Ve.sprite,Ve.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:jt([Ve.common,Ve.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:jt([Ve.lights,Ve.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Sn.physical={uniforms:jt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const xo={r:0,b:0,g:0},hi=new bn,y0=new St;function b0(n,e,t,i,r,o,a){const l=new nt(0);let c=o===!0?0:1,s,d,h=null,m=0,p=null;function x(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const R=x(b);R===null?u(l,c):R&&R.isColor&&(u(R,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(b,y){const R=x(y);R&&(R.isCubeTexture||R.mapping===Uo)?(d===void 0&&(d=new Bt(new ir(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Qi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(hi)),d.material.toneMapped=dt.getTransfer(R.colorSpace)!==mt,(h!==R||m!==R.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=R,m=R.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(s===void 0&&(s=new Bt(new zo(2,2),new Vn({name:"BackgroundMaterial",uniforms:Qi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(s)),s.material.uniforms.t2D.value=R,s.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,s.material.toneMapped=dt.getTransfer(R.colorSpace)!==mt,R.matrixAutoUpdate===!0&&R.updateMatrix(),s.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||m!==R.version||p!==n.toneMapping)&&(s.material.needsUpdate=!0,h=R,m=R.version,p=n.toneMapping),s.layers.enableAll(),b.unshift(s,s.geometry,s.material,0,0,null))}function u(b,y){b.getRGB(xo,qc(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,y,a)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),s!==void 0&&(s.geometry.dispose(),s.material.dispose(),s=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,y=1){l.set(b),c=y,u(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(l,c)},render:v,addToRenderList:f,dispose:_}}function E0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let o=r,a=!1;function l(T,w,C,L,O){let G=!1;const X=h(L,C,w);o!==X&&(o=X,s(o.object)),G=p(T,L,C,O),G&&x(T,L,C,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(T,w,C,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function s(T){return n.bindVertexArray(T)}function d(T){return n.deleteVertexArray(T)}function h(T,w,C){const L=C.wireframe===!0;let O=i[T.id];O===void 0&&(O={},i[T.id]=O);let G=O[w.id];G===void 0&&(G={},O[w.id]=G);let X=G[L];return X===void 0&&(X=m(c()),G[L]=X),X}function m(T){const w=[],C=[],L=[];for(let O=0;O<t;O++)w[O]=0,C[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:L,object:T,attributes:{},index:null}}function p(T,w,C,L){const O=o.attributes,G=w.attributes;let X=0;const J=C.getAttributes();for(const j in J)if(J[j].location>=0){const de=O[j];let xe=G[j];if(xe===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;X++}return o.attributesNum!==X||o.index!==L}function x(T,w,C,L){const O={},G=w.attributes;let X=0;const J=C.getAttributes();for(const j in J)if(J[j].location>=0){let de=G[j];de===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(de=T.instanceColor));const xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),O[j]=xe,X++}o.attributes=O,o.attributesNum=X,o.index=L}function v(){const T=o.newAttributes;for(let w=0,C=T.length;w<C;w++)T[w]=0}function f(T){u(T,0)}function u(T,w){const C=o.newAttributes,L=o.enabledAttributes,O=o.attributeDivisors;C[T]=1,L[T]===0&&(n.enableVertexAttribArray(T),L[T]=1),O[T]!==w&&(n.vertexAttribDivisor(T,w),O[T]=w)}function _(){const T=o.newAttributes,w=o.enabledAttributes;for(let C=0,L=w.length;C<L;C++)w[C]!==T[C]&&(n.disableVertexAttribArray(C),w[C]=0)}function b(T,w,C,L,O,G,X){X===!0?n.vertexAttribIPointer(T,w,C,O,G):n.vertexAttribPointer(T,w,C,L,O,G)}function y(T,w,C,L){v();const O=L.attributes,G=C.getAttributes(),X=w.defaultAttributeValues;for(const J in G){const j=G[J];if(j.location>=0){let ne=O[J];if(ne===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const de=ne.normalized,xe=ne.itemSize,re=e.get(ne);if(re===void 0)continue;const oe=re.buffer,we=re.type,te=re.bytesPerElement,H=we===n.INT||we===n.UNSIGNED_INT||ne.gpuType===ks;if(ne.isInterleavedBufferAttribute){const U=ne.data,V=U.stride,K=ne.offset;if(U.isInstancedInterleavedBuffer){for(let Q=0;Q<j.locationSize;Q++)u(j.location+Q,U.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Q=0;Q<j.locationSize;Q++)f(j.location+Q);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Q=0;Q<j.locationSize;Q++)b(j.location+Q,xe/j.locationSize,we,de,V*te,(K+xe/j.locationSize*Q)*te,H)}else{if(ne.isInstancedBufferAttribute){for(let U=0;U<j.locationSize;U++)u(j.location+U,ne.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let U=0;U<j.locationSize;U++)f(j.location+U);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let U=0;U<j.locationSize;U++)b(j.location+U,xe/j.locationSize,we,de,xe*te,xe/j.locationSize*U*te,H)}}else if(X!==void 0){const de=X[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(j.location,de);break;case 3:n.vertexAttrib3fv(j.location,de);break;case 4:n.vertexAttrib4fv(j.location,de);break;default:n.vertexAttrib1fv(j.location,de)}}}}_()}function R(){k();for(const T in i){const w=i[T];for(const C in w){const L=w[C];for(const O in L)d(L[O].object),delete L[O];delete w[C]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const w=i[T.id];for(const C in w){const L=w[C];for(const O in L)d(L[O].object),delete L[O];delete w[C]}delete i[T.id]}function P(T){for(const w in i){const C=i[w];if(C[T.id]===void 0)continue;const L=C[T.id];for(const O in L)d(L[O].object),delete L[O];delete C[T.id]}}function k(){S(),a=!0,o!==r&&(o=r,s(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:k,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function S0(n,e,t){let i;function r(s){i=s}function o(s,d){n.drawArrays(i,s,d),t.update(d,i,1)}function a(s,d,h){h!==0&&(n.drawArraysInstanced(i,s,d,h),t.update(d,i,h))}function l(s,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];t.update(p,i,1)}function c(s,d,h,m){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<s.length;x++)a(s[x],d[x],m[x]);else{p.multiDrawArraysInstancedWEBGL(i,s,0,d,0,m,0,h);let x=0;for(let v=0;v<h;v++)x+=d[v]*m[v];t.update(x,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function T0(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==fn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){const k=P===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!k)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp";const d=c(s);d!==s&&(tt("WebGLRenderer:",s,"not supported, using",d,"instead."),s=d);const h=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:s,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function M0(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new qn,l=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const p=h.length!==0||m||i!==0||r;return r=m,i=h.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,m){t=d(h,m,0)},this.setState=function(h,m,p){const x=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,u=n.get(h);if(!r||x===null||x.length===0||o&&!f)o?d(null):s();else{const _=o?0:i,b=_*4;let y=u.clippingState||null;c.value=y,y=d(x,m,b,p);for(let R=0;R!==b;++R)y[R]=t[R];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function s(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,m,p,x){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=c.value,x!==!0||f===null){const u=p+v*4,_=m.matrixWorldInverse;l.getNormalMatrix(_),(f===null||f.length<u)&&(f=new Float32Array(u));for(let b=0,y=p;b!==v;++b,y+=4)a.copy(h[b]).applyMatrix4(_,l),a.normal.toArray(f,y),f[y+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function A0(n){let e=new WeakMap;function t(a,l){return l===qa?a.mapping=$i:l===$a&&(a.mapping=Zi),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===qa||l===$a)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const s=new Zh(c.height);return s.fromEquirectangularTexture(n,a),e.set(a,s),a.addEventListener("dispose",r),t(s.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const ei=4,Jl=[.125,.215,.35,.446,.526,.582],gi=20,R0=256,pr=new cu,Ql=new nt;let La=null,Ia=0,Na=0,Oa=!1;const w0=new ae;class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:a=256,position:l=w0}=o;La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ia,Na),this._renderer.xr.enabled=Oa,e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:nr,format:fn,colorSpace:Ji,depthBuffer:!1},r=tc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=C0(o)),this._blurMaterial=L0(o,e,t)}return r}_compileMaterial(e){const t=new Bt(new Ot,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,r,o){const c=new dn(90,1,t,i),s=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(Ql),h.toneMapping=ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new ir,new Xi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,f=v.material;let u=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,u=!0):(f.color.copy(Ql),u=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,s[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+d[b],o.y,o.z)):y===1?(c.up.set(0,0,s[b]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+d[b],o.z)):(c.up.set(0,s[b],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+d[b]));const R=this._cubeSize;Vi(r,y*R,b>2?R:0,R,R),h.setRenderTarget(r),u&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=m,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$i||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const o=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=o;const l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;Vi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const _=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=P0(this._lodMax,_,b)}const a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,s=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(s*s-d*d),m=.05+s*.95,p=h*m,{_lodMax:x}=this,v=this._sizeLods[i],f=3*v*(i>x-ei?i-x+ei:0),u=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,Vi(o,f,u,3*v,2*v),r.setRenderTarget(o),r.render(l,pr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=x-i,Vi(e,f,u,3*v,2*v),r.setRenderTarget(e),r.render(l,pr)}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,l){const c=this._renderer,s=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=s;const m=s.uniforms,p=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*gi-1),v=o/x,f=isFinite(o)?1+Math.floor(d*v):gi;f>gi&&tt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gi}`);const u=[];let _=0;for(let P=0;P<gi;++P){const k=P/v,S=Math.exp(-k*k/2);u.push(S),P===0?_+=S:P<f&&(_+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/_;m.envMap.value=e.texture,m.samples.value=f,m.weights.value=u,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:b}=this;m.dTheta.value=x,m.mipInt.value=b-i;const y=this._sizeLods[r],R=3*y*(r>b-ei?r-b+ei:0),A=4*(this._cubeSize-y);Vi(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(h,pr)}}function C0(n){const e=[],t=[],i=[];let r=n;const o=n-ei+1+Jl.length;for(let a=0;a<o;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>n-ei?c=Jl[a-n+ei-1]:a===0&&(c=0),t.push(c);const s=1/(l-2),d=-s,h=1+s,m=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,v=3,f=2,u=1,_=new Float32Array(v*x*p),b=new Float32Array(f*x*p),y=new Float32Array(u*x*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,k=A>2?0:-1,S=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];_.set(S,v*x*A),b.set(m,f*x*A);const T=[A,A,A,A,A,A];y.set(T,u*x*A)}const R=new Ot;R.setAttribute("position",new Jt(_,v)),R.setAttribute("uv",new Jt(b,f)),R.setAttribute("faceIndex",new Jt(y,u)),i.push(new Bt(R,null)),r>ei&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function tc(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function P0(n,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function L0(n,e,t){const i=new Float32Array(gi),r=new ae(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function nc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ic(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}function I0(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,s=c===qa||c===$a,d=c===$i||c===Zi;if(s||d){let h=e.get(l);const m=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new ec(n)),h=s?t.fromEquirectangular(l,h):t.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),h.texture;if(h!==void 0)return h.texture;{const p=l.image;return s&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new ec(n)),h=s?t.fromEquirectangular(l):t.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),l.addEventListener("dispose",o),h.texture):null}}}return l}function r(l){let c=0;const s=6;for(let d=0;d<s;d++)l[d]!==void 0&&c++;return c===s}function o(l){const c=l.target;c.removeEventListener("dispose",o);const s=e.get(c);s!==void 0&&(e.delete(c),s.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function N0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&wr("WebGLRenderer: "+i+" extension not supported."),r}}}function O0(n,e,t,i){const r={},o=new WeakMap;function a(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",a),delete r[m.id];const p=o.get(m);p&&(e.remove(p),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(h,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function c(h){const m=h.attributes;for(const p in m)e.update(m[p],n.ARRAY_BUFFER)}function s(h){const m=[],p=h.index,x=h.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let b=0,y=_.length;b<y;b+=3){const R=_[b+0],A=_[b+1],P=_[b+2];m.push(R,A,A,P,P,R)}}else if(x!==void 0){const _=x.array;v=x.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const R=b+0,A=b+1,P=b+2;m.push(R,A,A,P,P,R)}}else return;const f=new(Hc(m)?Kc:Yc)(m,1);f.version=v;const u=o.get(h);u&&e.remove(u),o.set(h,f)}function d(h){const m=o.get(h);if(m){const p=h.index;p!==null&&m.version<p.version&&s(h)}else s(h);return o.get(h)}return{get:l,update:c,getWireframeAttribute:d}}function D0(n,e,t){let i;function r(m){i=m}let o,a;function l(m){o=m.type,a=m.bytesPerElement}function c(m,p){n.drawElements(i,p,o,m*a),t.update(p,i,1)}function s(m,p,x){x!==0&&(n.drawElementsInstanced(i,p,o,m*a,x),t.update(p,i,x))}function d(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,m,0,x);let f=0;for(let u=0;u<x;u++)f+=p[u];t.update(f,i,1)}function h(m,p,x,v){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<m.length;u++)s(m[u]/a,p[u],v[u]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,o,m,0,v,0,x);let u=0;for(let _=0;_<x;_++)u+=p[_]*v[_];t.update(u,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=s,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function F0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function U0(n,e,t){const i=new WeakMap,r=new Ct;function o(a,l,c){const s=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=d!==void 0?d.length:0;let m=i.get(l);if(m===void 0||m.count!==h){let S=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();const p=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let b=0;p===!0&&(b=1),x===!0&&(b=2),v===!0&&(b=3);let y=l.attributes.position.count*b,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*R*4*h),P=new Wc(A,y,R,h);P.type=Un,P.needsUpdate=!0;const k=b*4;for(let T=0;T<h;T++){const w=f[T],C=u[T],L=_[T],O=y*R*4*T;for(let G=0;G<w.count;G++){const X=G*k;p===!0&&(r.fromBufferAttribute(w,G),A[O+X+0]=r.x,A[O+X+1]=r.y,A[O+X+2]=r.z,A[O+X+3]=0),x===!0&&(r.fromBufferAttribute(C,G),A[O+X+4]=r.x,A[O+X+5]=r.y,A[O+X+6]=r.z,A[O+X+7]=0),v===!0&&(r.fromBufferAttribute(L,G),A[O+X+8]=r.x,A[O+X+9]=r.y,A[O+X+10]=r.z,A[O+X+11]=L.itemSize===4?r.w:1)}}m={count:h,texture:P,size:new Ke(y,R)},i.set(l,m),l.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<s.length;v++)p+=s[v];const x=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",s)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}function k0(n,e,t,i){let r=new WeakMap;function o(c){const s=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==s&&(e.update(h),r.set(h,s)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==s&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,s))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==s&&(m.update(),r.set(m,s))}return h}function a(){r=new WeakMap}function l(c){const s=c.target;s.removeEventListener("dispose",l),t.remove(s.instanceMatrix),s.instanceColor!==null&&t.remove(s.instanceColor)}return{update:o,dispose:a}}const du=new Wt,rc=new tu(1,1),hu=new Wc,fu=new Oh,pu=new Zc,oc=[],ac=[],sc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=oc[r];if(o===void 0&&(o=new Float32Array(r),oc[r]=o),e!==0){i.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(o,l)}return o}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function B0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function H0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;cc.set(i),n.uniformMatrix2fv(this.addr,!1,cc),Ut(t,i)}}function W0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;lc.set(i),n.uniformMatrix3fv(this.addr,!1,lc),Ut(t,i)}}function X0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;sc.set(i),n.uniformMatrix4fv(this.addr,!1,sc),Ut(t,i)}}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function $0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(rc.compareFunction=Gc,o=rc):o=du,t.setTexture2D(e||o,r)}function tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fu,r)}function ng(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pu,r)}function ig(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hu,r)}function rg(n){switch(n){case 5126:return B0;case 35664:return z0;case 35665:return V0;case 35666:return G0;case 35674:return H0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return j0;case 35667:case 35671:return Y0;case 35668:case 35672:return K0;case 35669:case 35673:return q0;case 5125:return $0;case 36294:return Z0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function og(n,e){n.uniform1fv(this.addr,e)}function ag(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function sg(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function lg(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function cg(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ug(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dg(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hg(n,e){n.uniform1iv(this.addr,e)}function fg(n,e){n.uniform2iv(this.addr,e)}function pg(n,e){n.uniform3iv(this.addr,e)}function mg(n,e){n.uniform4iv(this.addr,e)}function gg(n,e){n.uniform1uiv(this.addr,e)}function xg(n,e){n.uniform2uiv(this.addr,e)}function vg(n,e){n.uniform3uiv(this.addr,e)}function _g(n,e){n.uniform4uiv(this.addr,e)}function yg(n,e,t){const i=this.cache,r=e.length,o=Go(t,r);Ft(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||du,o[a])}function bg(n,e,t){const i=this.cache,r=e.length,o=Go(t,r);Ft(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fu,o[a])}function Eg(n,e,t){const i=this.cache,r=e.length,o=Go(t,r);Ft(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pu,o[a])}function Sg(n,e,t){const i=this.cache,r=e.length,o=Go(t,r);Ft(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hu,o[a])}function Tg(n){switch(n){case 5126:return og;case 35664:return ag;case 35665:return sg;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Mg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rg(t.type)}}class Ag{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}}class Rg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const l=r[o];l.setValue(e,t[l.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function uc(n,e){n.seq.push(e),n.map[e.id]=e}function wg(n,e,t){const i=n.name,r=i.length;for(Da.lastIndex=0;;){const o=Da.exec(i),a=Da.lastIndex;let l=o[1];const c=o[2]==="]",s=o[3];if(c&&(l=l|0),s===void 0||s==="["&&a+2===r){uc(t,s===void 0?new Mg(l,n,e):new Ag(l,n,e));break}else{let h=t.map[l];h===void 0&&(h=new Rg(l),uc(t,h)),t=h}}}class Ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);wg(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const l=t[o],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function dc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cg=37297;let Pg=0;function Lg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const hc=new rt;function Ig(n){dt._getMatrix(hc,dt.workingColorSpace,n);const e=`mat3( ${hc.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Po:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Lg(n.getShaderSource(e),l)}else return o}function Ng(n,e){const t=Ig(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Og(n,e){let t;switch(e){case sh:t="Linear";break;case lh:t="Reinhard";break;case ch:t="Cineon";break;case uh:t="ACESFilmic";break;case hh:t="AgX";break;case fh:t="Neutral";break;case dh:t="Custom";break;default:tt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new ae;function Dg(){dt.getLuminanceCoefficients(vo);const n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Ug(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function gr(n){return n!==""}function pc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(n){return n.replace(Bg,Vg)}const zg=new Map;function Vg(n,e){let t=ot[e];if(t===void 0){const i=zg.get(e);if(i!==void 0)t=ot[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ps(t)}const Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(n){return n.replace(Gg,Hg)}function Hg(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function xc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Wg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $i:case Zi:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Yg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Us:e="ENVMAP_BLENDING_MULTIPLY";break;case oh:e="ENVMAP_BLENDING_MIX";break;case ah:e="ENVMAP_BLENDING_ADD";break}return e}function Kg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qg(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=Wg(t),s=Xg(t),d=jg(t),h=Yg(t),m=Kg(t),p=Fg(t),x=Ug(o),v=r.createProgram();let f,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gr).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gr).join(`
`),u.length>0&&(u+=`
`)):(f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),u=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+s:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?ot.tonemapping_pars_fragment:"",t.toneMapping!==ti?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),Dg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=Ps(a),a=pc(a,t),a=mc(a,t),l=Ps(l),l=pc(l,t),l=mc(l,t),a=gc(a),l=gc(l),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=_+f+a,y=_+u+l,R=dc(r,r.VERTEX_SHADER,b),A=dc(r,r.FRAGMENT_SHADER,y);r.attachShader(v,R),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(w){if(n.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",L=r.getShaderInfoLog(R)||"",O=r.getShaderInfoLog(A)||"",G=C.trim(),X=L.trim(),J=O.trim();let j=!0,ne=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,A);else{const de=fc(r,R,"vertex"),xe=fc(r,A,"fragment");Pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+de+`
`+xe)}else G!==""?tt("WebGLProgram: Program Info Log:",G):(X===""||J==="")&&(ne=!1);ne&&(w.diagnostics={runnable:j,programLog:G,vertexShader:{log:X,prefix:f},fragmentShader:{log:J,prefix:u}})}r.deleteShader(R),r.deleteShader(A),k=new Ro(r,v),S=kg(r,v)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,Cg)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let $g=0;class Zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jg(e),t.set(e,i)),i}}class Jg{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}}function Qg(n,e,t,i,r,o,a){const l=new Xc,c=new Zg,s=new Set,d=[],h=r.logarithmicDepthBuffer,m=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return s.add(S),S===0?"uv":`uv${S}`}function f(S,T,w,C,L){const O=C.fog,G=L.geometry,X=S.isMeshStandardMaterial?C.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),j=J&&J.mapping===Uo?J.image.height:null,ne=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&tt("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=de!==void 0?de.length:0;let re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let oe,we,te,H;if(ne){const Me=Sn[ne];oe=Me.vertexShader,we=Me.fragmentShader}else oe=S.vertexShader,we=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),H=c.getFragmentShaderID(S);const U=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),K=L.isInstancedMesh===!0,Q=L.isBatchedMesh===!0,ue=!!S.map,_e=!!S.matcap,Te=!!J,He=!!S.aoMap,B=!!S.lightMap,Fe=!!S.bumpMap,$=!!S.normalMap,he=!!S.displacementMap,ee=!!S.emissiveMap,ye=!!S.metalnessMap,Se=!!S.roughnessMap,Ue=S.anisotropy>0,E=S.clearcoat>0,g=S.dispersion>0,M=S.iridescence>0,D=S.sheen>0,N=S.transmission>0,F=Ue&&!!S.anisotropyMap,q=E&&!!S.clearcoatMap,Y=E&&!!S.clearcoatNormalMap,le=E&&!!S.clearcoatRoughnessMap,fe=M&&!!S.iridescenceMap,ie=M&&!!S.iridescenceThicknessMap,ge=D&&!!S.sheenColorMap,ke=D&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Le=!!S.specularColorMap,De=!!S.specularIntensityMap,z=N&&!!S.transmissionMap,Ce=N&&!!S.thicknessMap,Ae=!!S.gradientMap,Ee=!!S.alphaMap,W=S.alphaTest>0,Z=!!S.alphaHash,ve=!!S.extensions;let Ne=ti;S.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const Pe={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:we,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Q,batchingColor:Q&&L._colorsTexture!==null,instancing:K,instancingColor:K&&L.instanceColor!==null,instancingMorph:K&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ji,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:_e,envMap:Te,envMapMode:Te&&J.mapping,envMapCubeUVHeight:j,aoMap:He,lightMap:B,bumpMap:Fe,normalMap:$,displacementMap:m&&he,emissiveMap:ee,normalMapObjectSpace:$&&S.normalMapType===xh,normalMapTangentSpace:$&&S.normalMapType===Xs,metalnessMap:ye,roughnessMap:Se,anisotropy:Ue,anisotropyMap:F,clearcoat:E,clearcoatMap:q,clearcoatNormalMap:Y,clearcoatRoughnessMap:le,dispersion:g,iridescence:M,iridescenceMap:fe,iridescenceThicknessMap:ie,sheen:D,sheenColorMap:ge,sheenRoughnessMap:ke,specularMap:ze,specularColorMap:Le,specularIntensityMap:De,transmission:N,transmissionMap:z,thicknessMap:Ce,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===Yi&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:W,alphaHash:Z,combine:S.combine,mapUv:ue&&v(S.map.channel),aoMapUv:He&&v(S.aoMap.channel),lightMapUv:B&&v(S.lightMap.channel),bumpMapUv:Fe&&v(S.bumpMap.channel),normalMapUv:$&&v(S.normalMap.channel),displacementMapUv:he&&v(S.displacementMap.channel),emissiveMapUv:ee&&v(S.emissiveMap.channel),metalnessMapUv:ye&&v(S.metalnessMap.channel),roughnessMapUv:Se&&v(S.roughnessMap.channel),anisotropyMapUv:F&&v(S.anisotropyMap.channel),clearcoatMapUv:q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Y&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(S.sheenRoughnessMap.channel),specularMapUv:ze&&v(S.specularMap.channel),specularColorMapUv:Le&&v(S.specularColorMap.channel),specularIntensityMapUv:De&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:Ce&&v(S.thicknessMap.channel),alphaMapUv:Ee&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($||Ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(ue||Ee),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:V,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=s.has(1),Pe.vertexUv2s=s.has(2),Pe.vertexUv3s=s.has(3),s.clear(),Pe}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)T.push(w),T.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(_(T,S),b(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function _(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){l.disableAll(),T.supportsVertexTextures&&l.enable(0),T.instancing&&l.enable(1),T.instancingColor&&l.enable(2),T.instancingMorph&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),T.dispersion&&l.enable(20),T.batchingColor&&l.enable(21),T.gradientMap&&l.enable(22),S.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.reversedDepthBuffer&&l.enable(4),T.skinning&&l.enable(5),T.morphTargets&&l.enable(6),T.morphNormals&&l.enable(7),T.morphColors&&l.enable(8),T.premultipliedAlpha&&l.enable(9),T.shadowMapEnabled&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),T.decodeVideoTextureEmissive&&l.enable(20),T.alphaToCoverage&&l.enable(21),S.push(l.mask)}function y(S){const T=x[S.type];let w;if(T){const C=Sn[T];w=Yh.clone(C.uniforms)}else w=S.uniforms;return w}function R(S,T){let w;for(let C=0,L=d.length;C<L;C++){const O=d[C];if(O.cacheKey===T){w=O,++w.usedTimes;break}}return w===void 0&&(w=new qg(n,T,S,o),d.push(w)),w}function A(S){if(--S.usedTimes===0){const T=d.indexOf(S);d[T]=d[d.length-1],d.pop(),S.destroy()}}function P(S){c.remove(S)}function k(){c.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:d,dispose:k}}function ex(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function r(a,l,c){n.get(a)[l]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _c(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(h,m,p,x,v,f){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:m,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:f},n[e]=u):(u.id=h.id,u.object=h,u.geometry=m,u.material=p,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=v,u.group=f),e++,u}function l(h,m,p,x,v,f){const u=a(h,m,p,x,v,f);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(h,m,p,x,v,f){const u=a(h,m,p,x,v,f);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function s(h,m){t.length>1&&t.sort(h||tx),i.length>1&&i.sort(m||vc),r.length>1&&r.sort(m||vc)}function d(){for(let h=e,m=n.length;h<m;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:d,sort:s}}function nx(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new _c,n.set(i,[a])):r>=o.length?(a=new _c,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ix(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new nt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ox=0;function ax(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sx(n){const e=new ix,t=rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let s=0;s<9;s++)i.probe.push(new ae);const r=new ae,o=new St,a=new St;function l(s){let d=0,h=0,m=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,x=0,v=0,f=0,u=0,_=0,b=0,y=0,R=0,A=0,P=0;s.sort(ax);for(let S=0,T=s.length;S<T;S++){const w=s[S],C=w.color,L=w.intensity,O=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=C.r*L,h+=C.g*L,m+=C.b*L;else if(w.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(w.sh.coefficients[X],L);P++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,j=t.get(w);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=w.shadow.matrix,_++}i.directional[p]=X,p++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(C).multiplyScalar(L),X.distance=O,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,i.spot[v]=X;const J=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,J.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[v]=J.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=G,y++}v++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(C).multiplyScalar(L),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),i.rectArea[f]=X,f++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const J=w.shadow,j=t.get(w);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=w.shadow.matrix,b++}i.point[x]=X,x++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(L),X.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[u]=X,u++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=m;const k=i.hash;(k.directionalLength!==p||k.pointLength!==x||k.spotLength!==v||k.rectAreaLength!==f||k.hemiLength!==u||k.numDirectionalShadows!==_||k.numPointShadows!==b||k.numSpotShadows!==y||k.numSpotMaps!==R||k.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=f,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,k.directionalLength=p,k.pointLength=x,k.spotLength=v,k.rectAreaLength=f,k.hemiLength=u,k.numDirectionalShadows=_,k.numPointShadows=b,k.numSpotShadows=y,k.numSpotMaps=R,k.numLightProbes=P,i.version=ox++)}function c(s,d){let h=0,m=0,p=0,x=0,v=0;const f=d.matrixWorldInverse;for(let u=0,_=s.length;u<_;u++){const b=s[u];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),h++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),p++}else if(b.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:l,setupView:c,state:i}}function yc(n){const e=new sx(n),t=[],i=[];function r(d){s.camera=d,t.length=0,i.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(){e.setup(t)}function c(d){e.setupView(t,d)}const s={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:s,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lx(n){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new yc(n),e.set(r,[l])):o>=a.length?(l=new yc(n),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function dx(n,e,t){let i=new Ks;const r=new Ke,o=new Ke,a=new Ct,l=new Af({depthPacking:gh}),c=new Rf,s={},d=t.maxTextureSize,h={[zn]:Ht,[Ht]:zn,[_n]:_n},m=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ot;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(x,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let u=this.type;this.render=function(A,P,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),C=n.state;C.setBlending(kn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=u!==Dn&&this.type===Dn,O=u===Dn&&this.type!==Dn;for(let G=0,X=A.length;G<X;G++){const J=A[G],j=J.shadow;if(j===void 0){tt("WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ne=j.getFrameExtents();if(r.multiply(ne),o.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/ne.x),r.x=o.x*ne.x,j.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/ne.y),r.y=o.y*ne.y,j.mapSize.y=o.y)),j.map===null||L===!0||O===!0){const xe=this.type!==Dn?{minFilter:an,magFilter:an}:{};j.map!==null&&j.map.dispose(),j.map=new _i(r.x,r.y,xe),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const de=j.getViewportCount();for(let xe=0;xe<de;xe++){const re=j.getViewport(xe);a.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),C.viewport(a),j.updateMatrices(J,xe),i=j.getFrustum(),y(P,k,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===Dn&&_(j,k),j.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(S,T,w)};function _(A,P){const k=e.update(v);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _i(r.x,r.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,k,m,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,k,p,v,null)}function b(A,P,k,S){let T=null;const w=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)T=w;else if(T=k.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const C=T.uuid,L=P.uuid;let O=s[C];O===void 0&&(O={},s[C]=O);let G=O[L];G===void 0&&(G=T.clone(),O[L]=G,P.addEventListener("dispose",R)),T=G}if(T.visible=P.visible,T.wireframe=P.wireframe,S===Dn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:h[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const C=n.properties.get(T);C.light=k}return T}function y(A,P,k,S,T){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Dn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const L=e.update(A),O=A.material;if(Array.isArray(O)){const G=L.groups;for(let X=0,J=G.length;X<J;X++){const j=G[X],ne=O[j.materialIndex];if(ne&&ne.visible){const de=b(A,ne,S,T);A.onBeforeShadow(n,A,P,k,L,de,j),n.renderBufferDirect(k,null,L,de,A,j),A.onAfterShadow(n,A,P,k,L,de,j)}}}else if(O.visible){const G=b(A,O,S,T);A.onBeforeShadow(n,A,P,k,L,G,null),n.renderBufferDirect(k,null,L,G,A,null),A.onAfterShadow(n,A,P,k,L,G,null)}}const C=A.children;for(let L=0,O=C.length;L<O;L++)y(C[L],P,k,S,T)}function R(A){A.target.removeEventListener("dispose",R);for(const k in s){const S=s[k],T=A.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const hx={[Ga]:Ha,[Wa]:Ya,[Xa]:Ka,[qi]:ja,[Ha]:Ga,[Ya]:Wa,[Ka]:Xa,[ja]:qi};function fx(n,e){function t(){let z=!1;const Ce=new Ct;let Ae=null;const Ee=new Ct(0,0,0,0);return{setMask:function(W){Ae!==W&&!z&&(n.colorMask(W,W,W,W),Ae=W)},setLocked:function(W){z=W},setClear:function(W,Z,ve,Ne,Pe){Pe===!0&&(W*=Ne,Z*=Ne,ve*=Ne),Ce.set(W,Z,ve,Ne),Ee.equals(Ce)===!1&&(n.clearColor(W,Z,ve,Ne),Ee.copy(Ce))},reset:function(){z=!1,Ae=null,Ee.set(-1,0,0,0)}}}function i(){let z=!1,Ce=!1,Ae=null,Ee=null,W=null;return{setReversed:function(Z){if(Ce!==Z){const ve=e.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),Ce=Z;const Ne=W;W=null,this.setClear(Ne)}},getReversed:function(){return Ce},setTest:function(Z){Z?U(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(Z){Ae!==Z&&!z&&(n.depthMask(Z),Ae=Z)},setFunc:function(Z){if(Ce&&(Z=hx[Z]),Ee!==Z){switch(Z){case Ga:n.depthFunc(n.NEVER);break;case Ha:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case qi:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Z}},setLocked:function(Z){z=Z},setClear:function(Z){W!==Z&&(Ce&&(Z=1-Z),n.clearDepth(Z),W=Z)},reset:function(){z=!1,Ae=null,Ee=null,W=null,Ce=!1}}}function r(){let z=!1,Ce=null,Ae=null,Ee=null,W=null,Z=null,ve=null,Ne=null,Pe=null;return{setTest:function(Me){z||(Me?U(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(Me){Ce!==Me&&!z&&(n.stencilMask(Me),Ce=Me)},setFunc:function(Me,Re,Ie){(Ae!==Me||Ee!==Re||W!==Ie)&&(n.stencilFunc(Me,Re,Ie),Ae=Me,Ee=Re,W=Ie)},setOp:function(Me,Re,Ie){(Z!==Me||ve!==Re||Ne!==Ie)&&(n.stencilOp(Me,Re,Ie),Z=Me,ve=Re,Ne=Ie)},setLocked:function(Me){z=Me},setClear:function(Me){Pe!==Me&&(n.clearStencil(Me),Pe=Me)},reset:function(){z=!1,Ce=null,Ae=null,Ee=null,W=null,Z=null,ve=null,Ne=null,Pe=null}}}const o=new t,a=new i,l=new r,c=new WeakMap,s=new WeakMap;let d={},h={},m=new WeakMap,p=[],x=null,v=!1,f=null,u=null,_=null,b=null,y=null,R=null,A=null,P=new nt(0,0,0),k=0,S=!1,T=null,w=null,C=null,L=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=J>=2);let ne=null,de={};const xe=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),oe=new Ct().fromArray(xe),we=new Ct().fromArray(re);function te(z,Ce,Ae,Ee){const W=new Uint8Array(4),Z=n.createTexture();n.bindTexture(z,Z),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<Ae;ve++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,W):n.texImage2D(Ce+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,W);return Z}const H={};H[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),U(n.DEPTH_TEST),a.setFunc(qi),Fe(!1),$(pl),U(n.CULL_FACE),He(kn);function U(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function V(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function K(z,Ce){return h[z]!==Ce?(n.bindFramebuffer(z,Ce),h[z]=Ce,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Q(z,Ce){let Ae=p,Ee=!1;if(z){Ae=m.get(Ce),Ae===void 0&&(Ae=[],m.set(Ce,Ae));const W=z.textures;if(Ae.length!==W.length||Ae[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,ve=W.length;Z<ve;Z++)Ae[Z]=n.COLOR_ATTACHMENT0+Z;Ae.length=W.length,Ee=!0}}else Ae[0]!==n.BACK&&(Ae[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(Ae)}function ue(z){return x!==z?(n.useProgram(z),x=z,!0):!1}const _e={[mi]:n.FUNC_ADD,[Gd]:n.FUNC_SUBTRACT,[Hd]:n.FUNC_REVERSE_SUBTRACT};_e[Wd]=n.MIN,_e[Xd]=n.MAX;const Te={[jd]:n.ZERO,[Yd]:n.ONE,[Kd]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[eh]:n.SRC_ALPHA_SATURATE,[Jd]:n.DST_COLOR,[$d]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[Va]:n.ONE_MINUS_SRC_ALPHA,[Qd]:n.ONE_MINUS_DST_COLOR,[Zd]:n.ONE_MINUS_DST_ALPHA,[th]:n.CONSTANT_COLOR,[nh]:n.ONE_MINUS_CONSTANT_COLOR,[ih]:n.CONSTANT_ALPHA,[rh]:n.ONE_MINUS_CONSTANT_ALPHA};function He(z,Ce,Ae,Ee,W,Z,ve,Ne,Pe,Me){if(z===kn){v===!0&&(V(n.BLEND),v=!1);return}if(v===!1&&(U(n.BLEND),v=!0),z!==Vd){if(z!==f||Me!==S){if((u!==mi||y!==mi)&&(n.blendEquation(n.FUNC_ADD),u=mi,y=mi),Me)switch(z){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ml:n.blendFunc(n.ONE,n.ONE);break;case gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",z);break}else switch(z){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gl:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",z);break}_=null,b=null,R=null,A=null,P.set(0,0,0),k=0,f=z,S=Me}return}W=W||Ce,Z=Z||Ae,ve=ve||Ee,(Ce!==u||W!==y)&&(n.blendEquationSeparate(_e[Ce],_e[W]),u=Ce,y=W),(Ae!==_||Ee!==b||Z!==R||ve!==A)&&(n.blendFuncSeparate(Te[Ae],Te[Ee],Te[Z],Te[ve]),_=Ae,b=Ee,R=Z,A=ve),(Ne.equals(P)===!1||Pe!==k)&&(n.blendColor(Ne.r,Ne.g,Ne.b,Pe),P.copy(Ne),k=Pe),f=z,S=!1}function B(z,Ce){z.side===_n?V(n.CULL_FACE):U(n.CULL_FACE);let Ae=z.side===Ht;Ce&&(Ae=!Ae),Fe(Ae),z.blending===Yi&&z.transparent===!1?He(kn):He(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),o.setMask(z.colorWrite);const Ee=z.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(z){T!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),T=z)}function $(z){z!==kd?(U(n.CULL_FACE),z!==w&&(z===pl?n.cullFace(n.BACK):z===Bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),w=z}function he(z){z!==C&&(X&&n.lineWidth(z),C=z)}function ee(z,Ce,Ae){z?(U(n.POLYGON_OFFSET_FILL),(L!==Ce||O!==Ae)&&(n.polygonOffset(Ce,Ae),L=Ce,O=Ae)):V(n.POLYGON_OFFSET_FILL)}function ye(z){z?U(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function Se(z){z===void 0&&(z=n.TEXTURE0+G-1),ne!==z&&(n.activeTexture(z),ne=z)}function Ue(z,Ce,Ae){Ae===void 0&&(ne===null?Ae=n.TEXTURE0+G-1:Ae=ne);let Ee=de[Ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[Ae]=Ee),(Ee.type!==z||Ee.texture!==Ce)&&(ne!==Ae&&(n.activeTexture(Ae),ne=Ae),n.bindTexture(z,Ce||H[z]),Ee.type=z,Ee.texture=Ce)}function E(){const z=de[ne];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function D(){try{n.texSubImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function N(){try{n.texSubImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function Y(){try{n.texStorage2D(...arguments)}catch(z){z("WebGLState:",z)}}function le(){try{n.texStorage3D(...arguments)}catch(z){z("WebGLState:",z)}}function fe(){try{n.texImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function ie(){try{n.texImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function ge(z){oe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),oe.copy(z))}function ke(z){we.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),we.copy(z))}function ze(z,Ce){let Ae=s.get(Ce);Ae===void 0&&(Ae=new WeakMap,s.set(Ce,Ae));let Ee=Ae.get(z);Ee===void 0&&(Ee=n.getUniformBlockIndex(Ce,z.name),Ae.set(z,Ee))}function Le(z,Ce){const Ee=s.get(Ce).get(z);c.get(Ce)!==Ee&&(n.uniformBlockBinding(Ce,Ee,z.__bindingPointIndex),c.set(Ce,Ee))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ne=null,de={},h={},m=new WeakMap,p=[],x=null,v=!1,f=null,u=null,_=null,b=null,y=null,R=null,A=null,P=new nt(0,0,0),k=0,S=!1,T=null,w=null,C=null,L=null,O=null,oe.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:U,disable:V,bindFramebuffer:K,drawBuffers:Q,useProgram:ue,setBlending:He,setMaterial:B,setFlipSided:Fe,setCullFace:$,setLineWidth:he,setPolygonOffset:ee,setScissorTest:ye,activeTexture:Se,bindTexture:Ue,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:M,texImage2D:fe,texImage3D:ie,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:Y,texStorage3D:le,texSubImage2D:D,texSubImage3D:N,compressedTexSubImage2D:F,compressedTexSubImage3D:q,scissor:ge,viewport:ke,reset:De}}function px(n,e,t,i,r,o,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),s=new Ke,d=new WeakMap;let h;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,g){return p?new OffscreenCanvas(E,g):Rr("canvas")}function v(E,g,M){let D=1;const N=Ue(E);if((N.width>M||N.height>M)&&(D=M/Math.max(N.width,N.height)),D<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const F=Math.floor(D*N.width),q=Math.floor(D*N.height);h===void 0&&(h=x(F,q));const Y=g?x(F,q):h;return Y.width=F,Y.height=q,Y.getContext("2d").drawImage(E,0,0,F,q),tt("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+F+"x"+q+")."),Y}else return"data"in E&&tt("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),E;return E}function f(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,g,M,D,N=!1){if(E!==null){if(n[E]!==void 0)return n[E];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let F=g;if(g===n.RED&&(M===n.FLOAT&&(F=n.R32F),M===n.HALF_FLOAT&&(F=n.R16F),M===n.UNSIGNED_BYTE&&(F=n.R8)),g===n.RED_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.R8UI),M===n.UNSIGNED_SHORT&&(F=n.R16UI),M===n.UNSIGNED_INT&&(F=n.R32UI),M===n.BYTE&&(F=n.R8I),M===n.SHORT&&(F=n.R16I),M===n.INT&&(F=n.R32I)),g===n.RG&&(M===n.FLOAT&&(F=n.RG32F),M===n.HALF_FLOAT&&(F=n.RG16F),M===n.UNSIGNED_BYTE&&(F=n.RG8)),g===n.RG_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.RG8UI),M===n.UNSIGNED_SHORT&&(F=n.RG16UI),M===n.UNSIGNED_INT&&(F=n.RG32UI),M===n.BYTE&&(F=n.RG8I),M===n.SHORT&&(F=n.RG16I),M===n.INT&&(F=n.RG32I)),g===n.RGB_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.RGB8UI),M===n.UNSIGNED_SHORT&&(F=n.RGB16UI),M===n.UNSIGNED_INT&&(F=n.RGB32UI),M===n.BYTE&&(F=n.RGB8I),M===n.SHORT&&(F=n.RGB16I),M===n.INT&&(F=n.RGB32I)),g===n.RGBA_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),M===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),M===n.UNSIGNED_INT&&(F=n.RGBA32UI),M===n.BYTE&&(F=n.RGBA8I),M===n.SHORT&&(F=n.RGBA16I),M===n.INT&&(F=n.RGBA32I)),g===n.RGB&&(M===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),M===n.UNSIGNED_INT_10F_11F_11F_REV&&(F=n.R11F_G11F_B10F)),g===n.RGBA){const q=N?Po:dt.getTransfer(D);M===n.FLOAT&&(F=n.RGBA32F),M===n.HALF_FLOAT&&(F=n.RGBA16F),M===n.UNSIGNED_BYTE&&(F=q===mt?n.SRGB8_ALPHA8:n.RGBA8),M===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),M===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(E,g){let M;return E?g===null||g===vi||g===Tr?M=n.DEPTH24_STENCIL8:g===Un?M=n.DEPTH32F_STENCIL8:g===Sr&&(M=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===vi||g===Tr?M=n.DEPTH_COMPONENT24:g===Un?M=n.DEPTH_COMPONENT32F:g===Sr&&(M=n.DEPTH_COMPONENT16),M}function R(E,g){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==an&&E.minFilter!==hn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){const g=E.target;g.removeEventListener("dispose",A),k(g),g.isVideoTexture&&d.delete(g)}function P(E){const g=E.target;g.removeEventListener("dispose",P),T(g)}function k(E){const g=i.get(E);if(g.__webglInit===void 0)return;const M=E.source,D=m.get(M);if(D){const N=D[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&S(E),Object.keys(D).length===0&&m.delete(M)}i.remove(E)}function S(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const M=E.source,D=m.get(M);delete D[g.__cacheKey],a.memory.textures--}function T(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(g.__webglFramebuffer[D]))for(let N=0;N<g.__webglFramebuffer[D].length;N++)n.deleteFramebuffer(g.__webglFramebuffer[D][N]);else n.deleteFramebuffer(g.__webglFramebuffer[D]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[D])}else{if(Array.isArray(g.__webglFramebuffer))for(let D=0;D<g.__webglFramebuffer.length;D++)n.deleteFramebuffer(g.__webglFramebuffer[D]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let D=0;D<g.__webglColorRenderbuffer.length;D++)g.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[D]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const M=E.textures;for(let D=0,N=M.length;D<N;D++){const F=i.get(M[D]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(M[D])}i.remove(E)}let w=0;function C(){w=0}function L(){const E=w;return E>=r.maxTextures&&tt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),w+=1,E}function O(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function G(E,g){const M=i.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&M.__version!==E.version){const D=E.image;if(D===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{H(M,E,g);return}}else E.isExternalTexture&&(M.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,M.__webglTexture,n.TEXTURE0+g)}function X(E,g){const M=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&M.__version!==E.version){H(M,E,g);return}else E.isExternalTexture&&(M.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,M.__webglTexture,n.TEXTURE0+g)}function J(E,g){const M=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&M.__version!==E.version){H(M,E,g);return}t.bindTexture(n.TEXTURE_3D,M.__webglTexture,n.TEXTURE0+g)}function j(E,g){const M=i.get(E);if(E.version>0&&M.__version!==E.version){U(M,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+g)}const ne={[Jn]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},de={[an]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},xe={[vh]:n.NEVER,[Th]:n.ALWAYS,[_h]:n.LESS,[Gc]:n.LEQUAL,[yh]:n.EQUAL,[Sh]:n.GEQUAL,[bh]:n.GREATER,[Eh]:n.NOTEQUAL};function re(E,g){if(g.type===Un&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===hn||g.magFilter===ra||g.magFilter===jr||g.magFilter===xi||g.minFilter===hn||g.minFilter===ra||g.minFilter===jr||g.minFilter===xi)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ne[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ne[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ne[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===an||g.minFilter!==jr&&g.minFilter!==xi||g.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const M=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function oe(E,g){let M=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));const D=g.source;let N=m.get(D);N===void 0&&(N={},m.set(D,N));const F=O(g);if(F!==E.__cacheKey){N[F]===void 0&&(N[F]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,M=!0),N[F].usedTimes++;const q=N[E.__cacheKey];q!==void 0&&(N[E.__cacheKey].usedTimes--,q.usedTimes===0&&S(g)),E.__cacheKey=F,E.__webglTexture=N[F].texture}return M}function we(E,g,M){return Math.floor(Math.floor(E/M)/g)}function te(E,g,M,D){const F=E.updateRanges;if(F.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,M,D,g.data);else{F.sort((ie,ge)=>ie.start-ge.start);let q=0;for(let ie=1;ie<F.length;ie++){const ge=F[q],ke=F[ie],ze=ge.start+ge.count,Le=we(ke.start,g.width,4),De=we(ge.start,g.width,4);ke.start<=ze+1&&Le===De&&we(ke.start+ke.count-1,g.width,4)===Le?ge.count=Math.max(ge.count,ke.start+ke.count-ge.start):(++q,F[q]=ke)}F.length=q+1;const Y=n.getParameter(n.UNPACK_ROW_LENGTH),le=n.getParameter(n.UNPACK_SKIP_PIXELS),fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ie=0,ge=F.length;ie<ge;ie++){const ke=F[ie],ze=Math.floor(ke.start/4),Le=Math.ceil(ke.count/4),De=ze%g.width,z=Math.floor(ze/g.width),Ce=Le,Ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,De,z,Ce,Ae,M,D,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Y),n.pixelStorei(n.UNPACK_SKIP_PIXELS,le),n.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function H(E,g,M){let D=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(D=n.TEXTURE_3D);const N=oe(E,g),F=g.source;t.bindTexture(D,E.__webglTexture,n.TEXTURE0+M);const q=i.get(F);if(F.version!==q.__version||N===!0){t.activeTexture(n.TEXTURE0+M);const Y=dt.getPrimaries(dt.workingColorSpace),le=g.colorSpace===Zn?null:dt.getPrimaries(g.colorSpace),fe=g.colorSpace===Zn||Y===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ie=v(g.image,!1,r.maxTextureSize);ie=Se(g,ie);const ge=o.convert(g.format,g.colorSpace),ke=o.convert(g.type);let ze=b(g.internalFormat,ge,ke,g.colorSpace,g.isVideoTexture);re(D,g);let Le;const De=g.mipmaps,z=g.isVideoTexture!==!0,Ce=q.__version===void 0||N===!0,Ae=F.dataReady,Ee=R(g,ie);if(g.isDepthTexture)ze=y(g.format===Ar,g.type),Ce&&(z?t.texStorage2D(n.TEXTURE_2D,1,ze,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ze,ie.width,ie.height,0,ge,ke,null));else if(g.isDataTexture)if(De.length>0){z&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ee,ze,De[0].width,De[0].height);for(let W=0,Z=De.length;W<Z;W++)Le=De[W],z?Ae&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Le.width,Le.height,ge,ke,Le.data):t.texImage2D(n.TEXTURE_2D,W,ze,Le.width,Le.height,0,ge,ke,Le.data);g.generateMipmaps=!1}else z?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ee,ze,ie.width,ie.height),Ae&&te(g,ie,ge,ke)):t.texImage2D(n.TEXTURE_2D,0,ze,ie.width,ie.height,0,ge,ke,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,ze,De[0].width,De[0].height,ie.depth);for(let W=0,Z=De.length;W<Z;W++)if(Le=De[W],g.format!==fn)if(ge!==null)if(z){if(Ae)if(g.layerUpdates.size>0){const ve=Zl(Le.width,Le.height,g.format,g.type);for(const Ne of g.layerUpdates){const Pe=Le.data.subarray(Ne*ve/Le.data.BYTES_PER_ELEMENT,(Ne+1)*ve/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,Ne,Le.width,Le.height,1,ge,Pe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,ie.depth,ge,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,ze,Le.width,Le.height,ie.depth,0,Le.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,ie.depth,ge,ke,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,ze,Le.width,Le.height,ie.depth,0,ge,ke,Le.data)}else{z&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ee,ze,De[0].width,De[0].height);for(let W=0,Z=De.length;W<Z;W++)Le=De[W],g.format!==fn?ge!==null?z?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,Le.width,Le.height,ge,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,W,ze,Le.width,Le.height,0,Le.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ae&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Le.width,Le.height,ge,ke,Le.data):t.texImage2D(n.TEXTURE_2D,W,ze,Le.width,Le.height,0,ge,ke,Le.data)}else if(g.isDataArrayTexture)if(z){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,ze,ie.width,ie.height,ie.depth),Ae)if(g.layerUpdates.size>0){const W=Zl(ie.width,ie.height,g.format,g.type);for(const Z of g.layerUpdates){const ve=ie.data.subarray(Z*W/ie.data.BYTES_PER_ELEMENT,(Z+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ge,ke,ve)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,ke,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ie.width,ie.height,ie.depth,0,ge,ke,ie.data);else if(g.isData3DTexture)z?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ee,ze,ie.width,ie.height,ie.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,ke,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ie.width,ie.height,ie.depth,0,ge,ke,ie.data);else if(g.isFramebufferTexture){if(Ce)if(z)t.texStorage2D(n.TEXTURE_2D,Ee,ze,ie.width,ie.height);else{let W=ie.width,Z=ie.height;for(let ve=0;ve<Ee;ve++)t.texImage2D(n.TEXTURE_2D,ve,ze,W,Z,0,ge,ke,null),W>>=1,Z>>=1}}else if(De.length>0){if(z&&Ce){const W=Ue(De[0]);t.texStorage2D(n.TEXTURE_2D,Ee,ze,W.width,W.height)}for(let W=0,Z=De.length;W<Z;W++)Le=De[W],z?Ae&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ge,ke,Le):t.texImage2D(n.TEXTURE_2D,W,ze,ge,ke,Le);g.generateMipmaps=!1}else if(z){if(Ce){const W=Ue(ie);t.texStorage2D(n.TEXTURE_2D,Ee,ze,W.width,W.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ke,ie)}else t.texImage2D(n.TEXTURE_2D,0,ze,ge,ke,ie);f(g)&&u(D),q.__version=F.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function U(E,g,M){if(g.image.length!==6)return;const D=oe(E,g),N=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+M);const F=i.get(N);if(N.version!==F.__version||D===!0){t.activeTexture(n.TEXTURE0+M);const q=dt.getPrimaries(dt.workingColorSpace),Y=g.colorSpace===Zn?null:dt.getPrimaries(g.colorSpace),le=g.colorSpace===Zn||q===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!fe&&!ie?ge[Z]=v(g.image[Z],!0,r.maxCubemapSize):ge[Z]=ie?g.image[Z].image:g.image[Z],ge[Z]=Se(g,ge[Z]);const ke=ge[0],ze=o.convert(g.format,g.colorSpace),Le=o.convert(g.type),De=b(g.internalFormat,ze,Le,g.colorSpace),z=g.isVideoTexture!==!0,Ce=F.__version===void 0||D===!0,Ae=N.dataReady;let Ee=R(g,ke);re(n.TEXTURE_CUBE_MAP,g);let W;if(fe){z&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,De,ke.width,ke.height);for(let Z=0;Z<6;Z++){W=ge[Z].mipmaps;for(let ve=0;ve<W.length;ve++){const Ne=W[ve];g.format!==fn?ze!==null?z?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ne.width,Ne.height,ze,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,De,Ne.width,Ne.height,0,Ne.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ne.width,Ne.height,ze,Le,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,De,Ne.width,Ne.height,0,ze,Le,Ne.data)}}}else{if(W=g.mipmaps,z&&Ce){W.length>0&&Ee++;const Z=Ue(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,De,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){z?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,ze,Le,ge[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,ge[Z].width,ge[Z].height,0,ze,Le,ge[Z].data);for(let ve=0;ve<W.length;ve++){const Pe=W[ve].image[Z].image;z?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Pe.width,Pe.height,ze,Le,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,De,Pe.width,Pe.height,0,ze,Le,Pe.data)}}else{z?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ze,Le,ge[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,ze,Le,ge[Z]);for(let ve=0;ve<W.length;ve++){const Ne=W[ve];z?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,ze,Le,Ne.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,De,ze,Le,Ne.image[Z])}}}f(g)&&u(n.TEXTURE_CUBE_MAP),F.__version=N.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function V(E,g,M,D,N,F){const q=o.convert(M.format,M.colorSpace),Y=o.convert(M.type),le=b(M.internalFormat,q,Y,M.colorSpace),fe=i.get(g),ie=i.get(M);if(ie.__renderTarget=g,!fe.__hasExternalTextures){const ge=Math.max(1,g.width>>F),ke=Math.max(1,g.height>>F);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,F,le,ge,ke,g.depth,0,q,Y,null):t.texImage2D(N,F,le,ge,ke,0,q,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ee(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,N,ie.__webglTexture,0,he(g)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,N,ie.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(E,g,M){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const D=g.depthTexture,N=D&&D.isDepthTexture?D.type:null,F=y(g.stencilBuffer,N),q=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=he(g);ee(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,F,g.width,g.height):M?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,F,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,F,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,E)}else{const D=g.textures;for(let N=0;N<D.length;N++){const F=D[N],q=o.convert(F.format,F.colorSpace),Y=o.convert(F.type),le=b(F.internalFormat,q,Y,F.colorSpace),fe=he(g);M&&ee(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,le,g.width,g.height):ee(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(g.depthTexture);D.__renderTarget=g,(!D.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G(g.depthTexture,0);const N=D.__webglTexture,F=he(g);if(g.depthTexture.format===Mr)ee(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(g.depthTexture.format===Ar)ee(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function ue(E){const g=i.get(E),M=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const D=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),D){const N=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,D.removeEventListener("dispose",N)};D.addEventListener("dispose",N),g.__depthDisposeCallback=N}g.__boundDepthTexture=D}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");const D=E.texture.mipmaps;D&&D.length>0?Q(g.__webglFramebuffer[0],E):Q(g.__webglFramebuffer,E)}else if(M){g.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[D]),g.__webglDepthbuffer[D]===void 0)g.__webglDepthbuffer[D]=n.createRenderbuffer(),K(g.__webglDepthbuffer[D],E,!1);else{const N=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=g.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,F)}}else{const D=E.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),K(g.__webglDepthbuffer,E,!1);else{const N=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,F)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(E,g,M){const D=i.get(E);g!==void 0&&V(D.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),M!==void 0&&ue(E)}function Te(E){const g=E.texture,M=i.get(E),D=i.get(g);E.addEventListener("dispose",P);const N=E.textures,F=E.isWebGLCubeRenderTarget===!0,q=N.length>1;if(q||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=g.version,a.memory.textures++),F){M.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){M.__webglFramebuffer[Y]=[];for(let le=0;le<g.mipmaps.length;le++)M.__webglFramebuffer[Y][le]=n.createFramebuffer()}else M.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){M.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)M.__webglFramebuffer[Y]=n.createFramebuffer()}else M.__webglFramebuffer=n.createFramebuffer();if(q)for(let Y=0,le=N.length;Y<le;Y++){const fe=i.get(N[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&ee(E)===!1){M.__webglMultisampledFramebuffer=n.createFramebuffer(),M.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let Y=0;Y<N.length;Y++){const le=N[Y];M.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,M.__webglColorRenderbuffer[Y]);const fe=o.convert(le.format,le.colorSpace),ie=o.convert(le.type),ge=b(le.internalFormat,fe,ie,le.colorSpace,E.isXRRenderTarget===!0),ke=he(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ge,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,M.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(M.__webglDepthRenderbuffer=n.createRenderbuffer(),K(M.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),re(n.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)V(M.__webglFramebuffer[Y][le],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le);else V(M.__webglFramebuffer[Y],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(g)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let Y=0,le=N.length;Y<le;Y++){const fe=N[Y],ie=i.get(fe);let ge=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ie.__webglTexture),re(ge,fe),V(M.__webglFramebuffer,E,fe,n.COLOR_ATTACHMENT0+Y,ge,0),f(fe)&&u(ge)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,D.__webglTexture),re(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)V(M.__webglFramebuffer[le],E,g,n.COLOR_ATTACHMENT0,Y,le);else V(M.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,Y,0);f(g)&&u(Y),t.unbindTexture()}E.depthBuffer&&ue(E)}function He(E){const g=E.textures;for(let M=0,D=g.length;M<D;M++){const N=g[M];if(f(N)){const F=_(E),q=i.get(N).__webglTexture;t.bindTexture(F,q),u(F),t.unbindTexture()}}}const B=[],Fe=[];function $(E){if(E.samples>0){if(ee(E)===!1){const g=E.textures,M=E.width,D=E.height;let N=n.COLOR_BUFFER_BIT;const F=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=i.get(E),Y=g.length>1;if(Y)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);const le=E.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const ie=i.get(g[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,M,D,0,0,M,D,N,n.NEAREST),c===!0&&(B.length=0,Fe.length=0,B.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(B.push(F),Fe.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const ie=i.get(g[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function he(E){return Math.min(r.maxSamples,E.samples)}function ee(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(E){const g=a.render.frame;d.get(E)!==g&&(d.set(E,g),E.update())}function Se(E,g){const M=E.colorSpace,D=E.format,N=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||M!==Ji&&M!==Zn&&(dt.getTransfer(M)===mt?(D!==fn||N!==An)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",M)),g}function Ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(s.width=E.naturalWidth||E.width,s.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(s.width=E.displayWidth,s.height=E.displayHeight):(s.width=E.width,s.height=E.height),s}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=_e,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ee}function mx(n,e){function t(i,r=Zn){let o;const a=dt.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===Bs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===ks)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===nr)return n.HALF_FLOAT;if(i===Bc)return n.ALPHA;if(i===zc)return n.RGB;if(i===fn)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===Vc)return n.RED;if(i===Vs)return n.RED_INTEGER;if(i===Gs)return n.RG;if(i===Hs)return n.RG_INTEGER;if(i===Ws)return n.RGBA_INTEGER;if(i===Eo||i===So||i===To||i===Mo)if(a===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===es||i===ts)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===es)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ts)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ns||i===is||i===rs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ns||i===is)return a===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===rs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===os||i===as||i===ss||i===ls||i===cs||i===us||i===ds||i===hs||i===fs||i===ps||i===ms||i===gs||i===xs||i===vs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===os)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===as)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ss)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ls)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===us)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ds)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ps)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ms)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vs)return a===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_s||i===ys||i===bs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===_s)return a===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ys)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bs)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Es||i===Ss||i===Ts||i===Ms)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Es)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ss)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ts)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ms)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vn({vertexShader:gx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends bi{constructor(e,t){super();const i=this;let r=null,o=1,a=null,l="local-floor",c=1,s=null,d=null,h=null,m=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",f=new vx,u={},_=t.getContextAttributes();let b=null,y=null;const R=[],A=[],P=new Ke;let k=null;const S=new dn;S.viewport=new Ct;const T=new dn;T.viewport=new Ct;const w=[S,T],C=new Uf;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let U=R[H];return U===void 0&&(U=new Aa,R[H]=U),U.getTargetRaySpace()},this.getControllerGrip=function(H){let U=R[H];return U===void 0&&(U=new Aa,R[H]=U),U.getGripSpace()},this.getHand=function(H){let U=R[H];return U===void 0&&(U=new Aa,R[H]=U),U.getHandSpace()};function G(H){const U=A.indexOf(H.inputSource);if(U===-1)return;const V=R[U];V!==void 0&&(V.update(H.inputSource,H.frame,s||a),V.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let H=0;H<R.length;H++){const U=A[H];U!==null&&(A[H]=null,R[H].disconnect(U))}L=null,O=null,f.reset();for(const H in u)delete u[H];e.setRenderTarget(b),p=null,m=null,h=null,r=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s||a},this.setReferenceSpace=function(H){s=H},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,K=null,Q=null;_.depth&&(Q=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=_.stencil?Ar:Mr,K=_.stencil?Tr:vi);const ue={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:o};h=this.getBinding(),m=h.createProjectionLayer(ue),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),y=new _i(m.textureWidth,m.textureHeight,{format:fn,type:An,depthTexture:new tu(m.textureWidth,m.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const V={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new _i(p.framebufferWidth,p.framebufferHeight,{format:fn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),s=null,a=await r.requestReferenceSpace(l),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function J(H){for(let U=0;U<H.removed.length;U++){const V=H.removed[U],K=A.indexOf(V);K>=0&&(A[K]=null,R[K].disconnect(V))}for(let U=0;U<H.added.length;U++){const V=H.added[U];let K=A.indexOf(V);if(K===-1){for(let ue=0;ue<R.length;ue++)if(ue>=A.length){A.push(V),K=ue;break}else if(A[ue]===null){A[ue]=V,K=ue;break}if(K===-1)break}const Q=R[K];Q&&Q.connect(V)}}const j=new ae,ne=new ae;function de(H,U,V){j.setFromMatrixPosition(U.matrixWorld),ne.setFromMatrixPosition(V.matrixWorld);const K=j.distanceTo(ne),Q=U.projectionMatrix.elements,ue=V.projectionMatrix.elements,_e=Q[14]/(Q[10]-1),Te=Q[14]/(Q[10]+1),He=(Q[9]+1)/Q[5],B=(Q[9]-1)/Q[5],Fe=(Q[8]-1)/Q[0],$=(ue[8]+1)/ue[0],he=_e*Fe,ee=_e*$,ye=K/(-Fe+$),Se=ye*-Fe;if(U.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Se),H.translateZ(ye),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Q[10]===-1)H.projectionMatrix.copy(U.projectionMatrix),H.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Ue=_e+ye,E=Te+ye,g=he-Se,M=ee+(K-Se),D=He*Te/E*Ue,N=B*Te/E*Ue;H.projectionMatrix.makePerspective(g,M,D,N,Ue,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function xe(H,U){U===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(U.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let U=H.near,V=H.far;f.texture!==null&&(f.depthNear>0&&(U=f.depthNear),f.depthFar>0&&(V=f.depthFar)),C.near=T.near=S.near=U,C.far=T.far=S.far=V,(L!==C.near||O!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,O=C.far),C.layers.mask=H.layers.mask|6,S.layers.mask=C.layers.mask&3,T.layers.mask=C.layers.mask&5;const K=H.parent,Q=C.cameras;xe(C,K);for(let ue=0;ue<Q.length;ue++)xe(Q[ue],K);Q.length===2?de(C,S,T):C.projectionMatrix.copy(S.projectionMatrix),re(H,C,K)};function re(H,U,V){V===null?H.matrix.copy(U.matrixWorld):(H.matrix.copy(V.matrixWorld),H.matrix.invert(),H.matrix.multiply(U.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(U.projectionMatrix),H.projectionMatrixInverse.copy(U.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=As*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(m===null&&p===null))return c},this.setFoveation=function(H){c=H,m!==null&&(m.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(C)},this.getCameraTexture=function(H){return u[H]};let oe=null;function we(H,U){if(d=U.getViewerPose(s||a),x=U,d!==null){const V=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let K=!1;V.length!==C.cameras.length&&(C.cameras.length=0,K=!0);for(let Te=0;Te<V.length;Te++){const He=V[Te];let B=null;if(p!==null)B=p.getViewport(He);else{const $=h.getViewSubImage(m,He);B=$.viewport,Te===0&&(e.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(y))}let Fe=w[Te];Fe===void 0&&(Fe=new dn,Fe.layers.enable(Te),Fe.viewport=new Ct,w[Te]=Fe),Fe.matrix.fromArray(He.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(He.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(B.x,B.y,B.width,B.height),Te===0&&(C.matrix.copy(Fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),K===!0&&C.cameras.push(Fe)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Te=h.getDepthInformation(V[0]);Te&&Te.isValid&&Te.texture&&f.init(Te,r.renderState)}if(Q&&Q.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Te=0;Te<V.length;Te++){const He=V[Te].camera;if(He){let B=u[He];B||(B=new nu,u[He]=B);const Fe=h.getCameraImage(He);B.sourceTexture=Fe}}}}for(let V=0;V<R.length;V++){const K=A[V],Q=R[V];K!==null&&Q!==void 0&&Q.update(K,U,s||a)}oe&&oe(H,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),x=null}const te=new uu;te.setAnimationLoop(we),this.setAnimationLoop=function(H){oe=H},this.dispose=function(){}}}const fi=new bn,yx=new St;function bx(n,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,qc(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,_,b,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(f,u):u.isMeshToonMaterial?(o(f,u),h(f,u)):u.isMeshPhongMaterial?(o(f,u),d(f,u)):u.isMeshStandardMaterial?(o(f,u),m(f,u),u.isMeshPhysicalMaterial&&p(f,u,y)):u.isMeshMatcapMaterial?(o(f,u),x(f,u)):u.isMeshDepthMaterial?o(f,u):u.isMeshDistanceMaterial?(o(f,u),v(f,u)):u.isMeshNormalMaterial?o(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&l(f,u)):u.isPointsMaterial?c(f,u,_,b):u.isSpriteMaterial?s(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ht&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ht&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const _=e.get(u),b=_.envMap,y=_.envMapRotation;b&&(f.envMap.value=b,fi.copy(y),fi.x*=-1,fi.y*=-1,fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),f.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(fi)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function l(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,_,b){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*_,f.scale.value=b*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function s(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function h(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function m(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,_){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function v(f,u){const _=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ex(n,e,t,i){let r={},o={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){const y=b.program;i.uniformBlockBinding(_,y)}function s(_,b){let y=r[_.id];y===void 0&&(x(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",f));const R=b.program;i.updateUBOMapping(_,R);const A=e.render.frame;o[_.id]!==A&&(m(_),o[_.id]=A)}function d(_){const b=h();_.__bindingPointIndex=b;const y=n.createBuffer(),R=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){const b=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,P=y.length;A<P;A++){const k=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,T=k.length;S<T;S++){const w=k[S];if(p(w,A,S,R)===!0){const C=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let G=0;G<L.length;G++){const X=L[G],J=v(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,C+O,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,b,y,R){const A=_.value,P=b+"_"+y;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const k=R[P];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return R[P]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function x(_){const b=_.uniforms;let y=0;const R=16;for(let P=0,k=b.length;P<k;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let T=0,w=S.length;T<w;T++){const C=S[T],L=Array.isArray(C.value)?C.value:[C.value];for(let O=0,G=L.length;O<G;O++){const X=L[O],J=v(X),j=y%R,ne=j%J.boundary,de=j+ne;y+=ne,de!==0&&R-de<J.storage&&(y+=R-de),C.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=J.storage}}}const A=y%R;return A>0&&(y+=R-A),_.__size=y,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",_),b}function f(_){const b=_.target;b.removeEventListener("dispose",f);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function u(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},o={}}return{bind:c,update:s,dispose:u}}const Sx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let On=null;function Tx(){return On===null&&(On=new Ys(Sx,32,32,Gs,nr),On.minFilter=hn,On.magFilter=hn,On.wrapS=on,On.wrapT=on,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Mx{constructor(e={}){const{canvas:t=Mh(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:s=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=new Set([Ws,Hs,Vs]),v=new Set([An,vi,Sr,Tr,Bs,zs]),f=new Uint32Array(4),u=new Int32Array(4);let _=null,b=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=Rt;let k=0,S=0,T=null,w=-1,C=null;const L=new Ct,O=new Ct;let G=null;const X=new nt(0);let J=0,j=t.width,ne=t.height,de=1,xe=null,re=null;const oe=new Ct(0,0,j,ne),we=new Ct(0,0,j,ne);let te=!1;const H=new Ks;let U=!1,V=!1;const K=new St,Q=new ae,ue=new Ct,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function He(){return T===null?de:1}let B=i;function Fe(I,se){return t.getContext(I,se)}try{const I={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:s,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fs}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ve,!1),B===null){const se="webgl2";if(B=Fe(se,I),B===null)throw Fe(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw I("WebGLRenderer: "+I.message),I}let $,he,ee,ye,Se,Ue,E,g,M,D,N,F,q,Y,le,fe,ie,ge,ke,ze,Le,De,z,Ce;function Ae(){$=new N0(B),$.init(),De=new mx(B,$),he=new T0(B,$,e,De),ee=new fx(B,$),he.reversedDepthBuffer&&m&&ee.buffers.depth.setReversed(!0),ye=new F0(B),Se=new ex,Ue=new px(B,$,ee,Se,he,De,ye),E=new A0(A),g=new I0(A),M=new zf(B),z=new E0(B,M),D=new O0(B,M,ye,z),N=new k0(B,D,M,ye),ke=new U0(B,he,Ue),fe=new M0(Se),F=new Qg(A,E,g,$,he,z,fe),q=new bx(A,Se),Y=new nx,le=new lx($),ge=new b0(A,E,g,ee,N,p,c),ie=new dx(A,N,he),Ce=new Ex(B,ye,he,ee),ze=new S0(B,$,ye),Le=new D0(B,$,ye),ye.programs=F.programs,A.capabilities=he,A.extensions=$,A.properties=Se,A.renderLists=Y,A.shadowMap=ie,A.state=ee,A.info=ye}Ae();const Ee=new _x(A,B);this.xr=Ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=$.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=$.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(I){I!==void 0&&(de=I,this.setSize(j,ne,!1))},this.getSize=function(I){return I.set(j,ne)},this.setSize=function(I,se,pe=!0){if(Ee.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=I,ne=se,t.width=Math.floor(I*de),t.height=Math.floor(se*de),pe===!0&&(t.style.width=I+"px",t.style.height=se+"px"),this.setViewport(0,0,I,se)},this.getDrawingBufferSize=function(I){return I.set(j*de,ne*de).floor()},this.setDrawingBufferSize=function(I,se,pe){j=I,ne=se,de=pe,t.width=Math.floor(I*pe),t.height=Math.floor(se*pe),this.setViewport(0,0,I,se)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(oe)},this.setViewport=function(I,se,pe,me){I.isVector4?oe.set(I.x,I.y,I.z,I.w):oe.set(I,se,pe,me),ee.viewport(L.copy(oe).multiplyScalar(de).round())},this.getScissor=function(I){return I.copy(we)},this.setScissor=function(I,se,pe,me){I.isVector4?we.set(I.x,I.y,I.z,I.w):we.set(I,se,pe,me),ee.scissor(O.copy(we).multiplyScalar(de).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(I){ee.setScissorTest(te=I)},this.setOpaqueSort=function(I){xe=I},this.setTransparentSort=function(I){re=I},this.getClearColor=function(I){return I.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(I=!0,se=!0,pe=!0){let me=0;if(I){let ce=!1;if(T!==null){const Be=T.texture.format;ce=x.has(Be)}if(ce){const Be=T.texture.type,Ge=v.has(Be),je=ge.getClearColor(),We=ge.getClearAlpha(),Ze=je.r,Je=je.g,Ye=je.b;Ge?(f[0]=Ze,f[1]=Je,f[2]=Ye,f[3]=We,B.clearBufferuiv(B.COLOR,0,f)):(u[0]=Ze,u[1]=Je,u[2]=Ye,u[3]=We,B.clearBufferiv(B.COLOR,0,u))}else me|=B.COLOR_BUFFER_BIT}se&&(me|=B.DEPTH_BUFFER_BIT),pe&&(me|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),Y.dispose(),le.dispose(),Se.dispose(),E.dispose(),g.dispose(),N.dispose(),z.dispose(),Ce.dispose(),F.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Xe),Ee.removeEventListener("sessionend",ut),It.stop()};function W(I){I.preventDefault(),El("WebGLRenderer: Context Lost."),P=!0}function Z(){El("WebGLRenderer: Context Restored."),P=!1;const I=ye.autoReset,se=ie.enabled,pe=ie.autoUpdate,me=ie.needsUpdate,ce=ie.type;Ae(),ye.autoReset=I,ie.enabled=se,ie.autoUpdate=pe,ie.needsUpdate=me,ie.type=ce}function ve(I){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ne(I){const se=I.target;se.removeEventListener("dispose",Ne),Pe(se)}function Pe(I){Me(I),Se.remove(I)}function Me(I){const se=Se.get(I).programs;se!==void 0&&(se.forEach(function(pe){F.releaseProgram(pe)}),I.isShaderMaterial&&F.releaseShaderCache(I))}this.renderBufferDirect=function(I,se,pe,me,ce,Be){se===null&&(se=_e);const Ge=ce.isMesh&&ce.matrixWorld.determinant()<0,je=Ko(I,se,pe,me,ce);ee.setMaterial(me,Ge);let We=pe.index,Ze=1;if(me.wireframe===!0){if(We=D.getWireframeAttribute(pe),We===void 0)return;Ze=2}const Je=pe.drawRange,Ye=pe.attributes.position;let ct=Je.start*Ze,pt=(Je.start+Je.count)*Ze;Be!==null&&(ct=Math.max(ct,Be.start*Ze),pt=Math.min(pt,(Be.start+Be.count)*Ze)),We!==null?(ct=Math.max(ct,0),pt=Math.min(pt,We.count)):Ye!=null&&(ct=Math.max(ct,0),pt=Math.min(pt,Ye.count));const Mt=pt-ct;if(Mt<0||Mt===1/0)return;z.setup(ce,me,je,pe,We);let At,xt=ze;if(We!==null&&(At=M.get(We),xt=Le,xt.setIndex(At)),ce.isMesh)me.wireframe===!0?(ee.setLineWidth(me.wireframeLinewidth*He()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(ce.isLine){let qe=me.linewidth;qe===void 0&&(qe=1),ee.setLineWidth(qe*He()),ce.isLineSegments?xt.setMode(B.LINES):ce.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else ce.isPoints?xt.setMode(B.POINTS):ce.isSprite&&xt.setMode(B.TRIANGLES);if(ce.isBatchedMesh)if(ce._multiDrawInstances!==null)wr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances);else if($.get("WEBGL_multi_draw"))xt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const qe=ce._multiDrawStarts,yt=ce._multiDrawCounts,ht=ce._multiDrawCount,Qt=We?M.get(We).bytesPerElement:1,Mi=Se.get(me).currentProgram.getUniforms();for(let en=0;en<ht;en++)Mi.setValue(B,"_gl_DrawID",en),xt.render(qe[en]/Qt,yt[en])}else if(ce.isInstancedMesh)xt.renderInstances(ct,Mt,ce.count);else if(pe.isInstancedBufferGeometry){const qe=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,yt=Math.min(pe.instanceCount,qe);xt.renderInstances(ct,Mt,yt)}else xt.render(ct,Mt)};function Re(I,se,pe){I.transparent===!0&&I.side===_n&&I.forceSinglePass===!1?(I.side=Ht,I.needsUpdate=!0,Ti(I,se,pe),I.side=zn,I.needsUpdate=!0,Ti(I,se,pe),I.side=_n):Ti(I,se,pe)}this.compile=function(I,se,pe=null){pe===null&&(pe=I),b=le.get(pe),b.init(se),R.push(b),pe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(se.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),I!==pe&&I.traverseVisible(function(ce){ce.isLight&&ce.layers.test(se.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),b.setupLights();const me=new Set;return I.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Be=ce.material;if(Be)if(Array.isArray(Be))for(let Ge=0;Ge<Be.length;Ge++){const je=Be[Ge];Re(je,pe,ce),me.add(je)}else Re(Be,pe,ce),me.add(Be)}),b=R.pop(),me},this.compileAsync=function(I,se,pe=null){const me=this.compile(I,se,pe);return new Promise(ce=>{function Be(){if(me.forEach(function(Ge){Se.get(Ge).currentProgram.isReady()&&me.delete(Ge)}),me.size===0){ce(I);return}setTimeout(Be,10)}$.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ie=null;function Oe(I){Ie&&Ie(I)}function Xe(){It.stop()}function ut(){It.start()}const It=new uu;It.setAnimationLoop(Oe),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(I){Ie=I,Ee.setAnimationLoop(I),I===null?It.stop():It.start()},Ee.addEventListener("sessionstart",Xe),Ee.addEventListener("sessionend",ut),this.render=function(I,se){if(se!==void 0&&se.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(se),se=Ee.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,se,T),b=le.get(I,R.length),b.init(se),R.push(b),K.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H.setFromProjectionMatrix(K,Mn,se.reversedDepth),V=this.localClippingEnabled,U=fe.init(this.clippingPlanes,V),_=Y.get(I,y.length),_.init(),y.push(_),Ee.enabled===!0&&Ee.isPresenting===!0){const Be=A.xr.getDepthSensingMesh();Be!==null&&zt(Be,se,-1/0,A.sortObjects)}zt(I,se,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(xe,re),Te=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Te&&ge.addToRenderList(_,I),this.info.render.frame++,U===!0&&fe.beginShadows();const pe=b.state.shadowsArray;ie.render(pe,I,se),U===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const me=_.opaque,ce=_.transmissive;if(b.setupLights(),se.isArrayCamera){const Be=se.cameras;if(ce.length>0)for(let Ge=0,je=Be.length;Ge<je;Ge++){const We=Be[Ge];Si(me,ce,I,We)}Te&&ge.render(I);for(let Ge=0,je=Be.length;Ge<je;Ge++){const We=Be[Ge];En(_,I,We,We.viewport)}}else ce.length>0&&Si(me,ce,I,se),Te&&ge.render(I),En(_,I,se);T!==null&&S===0&&(Ue.updateMultisampleRenderTarget(T),Ue.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(A,I,se),z.resetDefaultState(),w=-1,C=null,R.pop(),R.length>0?(b=R[R.length-1],U===!0&&fe.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,y.pop(),y.length>0?_=y[y.length-1]:_=null};function zt(I,se,pe,me){if(I.visible===!1)return;if(I.layers.test(se.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(se);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||H.intersectsSprite(I)){me&&ue.setFromMatrixPosition(I.matrixWorld).applyMatrix4(K);const Ge=N.update(I),je=I.material;je.visible&&_.push(I,Ge,je,pe,ue.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||H.intersectsObject(I))){const Ge=N.update(I),je=I.material;if(me&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ue.copy(I.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ue.copy(Ge.boundingSphere.center)),ue.applyMatrix4(I.matrixWorld).applyMatrix4(K)),Array.isArray(je)){const We=Ge.groups;for(let Ze=0,Je=We.length;Ze<Je;Ze++){const Ye=We[Ze],ct=je[Ye.materialIndex];ct&&ct.visible&&_.push(I,Ge,ct,pe,ue.z,Ye)}}else je.visible&&_.push(I,Ge,je,pe,ue.z,null)}}const Be=I.children;for(let Ge=0,je=Be.length;Ge<je;Ge++)zt(Be[Ge],se,pe,me)}function En(I,se,pe,me){const{opaque:ce,transmissive:Be,transparent:Ge}=I;b.setupLightsView(pe),U===!0&&fe.setGlobalState(A.clippingPlanes,pe),me&&ee.viewport(L.copy(me)),ce.length>0&&Gn(ce,se,pe),Be.length>0&&Gn(Be,se,pe),Ge.length>0&&Gn(Ge,se,pe),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Si(I,se,pe,me){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[me.id]===void 0&&(b.state.transmissionRenderTarget[me.id]=new _i(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?nr:An,minFilter:xi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Be=b.state.transmissionRenderTarget[me.id],Ge=me.viewport||L;Be.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);const je=A.getRenderTarget(),We=A.getActiveCubeFace(),Ze=A.getActiveMipmapLevel();A.setRenderTarget(Be),A.getClearColor(X),J=A.getClearAlpha(),J<1&&A.setClearColor(16777215,.5),A.clear(),Te&&ge.render(pe);const Je=A.toneMapping;A.toneMapping=ti;const Ye=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),b.setupLightsView(me),U===!0&&fe.setGlobalState(A.clippingPlanes,me),Gn(I,pe,me),Ue.updateMultisampleRenderTarget(Be),Ue.updateRenderTargetMipmap(Be),$.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let pt=0,Mt=se.length;pt<Mt;pt++){const At=se[pt],{object:xt,geometry:qe,material:yt,group:ht}=At;if(yt.side===_n&&xt.layers.test(me.layers)){const Qt=yt.side;yt.side=Ht,yt.needsUpdate=!0,Vr(xt,pe,me,qe,yt,ht),yt.side=Qt,yt.needsUpdate=!0,ct=!0}}ct===!0&&(Ue.updateMultisampleRenderTarget(Be),Ue.updateRenderTargetMipmap(Be))}A.setRenderTarget(je,We,Ze),A.setClearColor(X,J),Ye!==void 0&&(me.viewport=Ye),A.toneMapping=Je}function Gn(I,se,pe){const me=se.isScene===!0?se.overrideMaterial:null;for(let ce=0,Be=I.length;ce<Be;ce++){const Ge=I[ce],{object:je,geometry:We,group:Ze}=Ge;let Je=Ge.material;Je.allowOverride===!0&&me!==null&&(Je=me),je.layers.test(pe.layers)&&Vr(je,se,pe,We,Je,Ze)}}function Vr(I,se,pe,me,ce,Be){I.onBeforeRender(A,se,pe,me,ce,Be),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ce.onBeforeRender(A,se,pe,me,I,Be),ce.transparent===!0&&ce.side===_n&&ce.forceSinglePass===!1?(ce.side=Ht,ce.needsUpdate=!0,A.renderBufferDirect(pe,se,me,ce,I,Be),ce.side=zn,ce.needsUpdate=!0,A.renderBufferDirect(pe,se,me,ce,I,Be),ce.side=_n):A.renderBufferDirect(pe,se,me,ce,I,Be),I.onAfterRender(A,se,pe,me,ce,Be)}function Ti(I,se,pe){se.isScene!==!0&&(se=_e);const me=Se.get(I),ce=b.state.lights,Be=b.state.shadowsArray,Ge=ce.state.version,je=F.getParameters(I,ce.state,Be,se,pe),We=F.getProgramCacheKey(je);let Ze=me.programs;me.environment=I.isMeshStandardMaterial?se.environment:null,me.fog=se.fog,me.envMap=(I.isMeshStandardMaterial?g:E).get(I.envMap||me.environment),me.envMapRotation=me.environment!==null&&I.envMap===null?se.environmentRotation:I.envMapRotation,Ze===void 0&&(I.addEventListener("dispose",Ne),Ze=new Map,me.programs=Ze);let Je=Ze.get(We);if(Je!==void 0){if(me.currentProgram===Je&&me.lightsStateVersion===Ge)return Hr(I,je),Je}else je.uniforms=F.getUniforms(I),I.onBeforeCompile(je,A),Je=F.acquireProgram(je,We),Ze.set(We,Je),me.uniforms=je.uniforms;const Ye=me.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ye.clippingPlanes=fe.uniform),Hr(I,je),me.needsLights=$o(I),me.lightsStateVersion=Ge,me.needsLights&&(Ye.ambientLightColor.value=ce.state.ambient,Ye.lightProbe.value=ce.state.probe,Ye.directionalLights.value=ce.state.directional,Ye.directionalLightShadows.value=ce.state.directionalShadow,Ye.spotLights.value=ce.state.spot,Ye.spotLightShadows.value=ce.state.spotShadow,Ye.rectAreaLights.value=ce.state.rectArea,Ye.ltc_1.value=ce.state.rectAreaLTC1,Ye.ltc_2.value=ce.state.rectAreaLTC2,Ye.pointLights.value=ce.state.point,Ye.pointLightShadows.value=ce.state.pointShadow,Ye.hemisphereLights.value=ce.state.hemi,Ye.directionalShadowMap.value=ce.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Ye.spotShadowMap.value=ce.state.spotShadowMap,Ye.spotLightMatrix.value=ce.state.spotLightMatrix,Ye.spotLightMap.value=ce.state.spotLightMap,Ye.pointShadowMap.value=ce.state.pointShadowMap,Ye.pointShadowMatrix.value=ce.state.pointShadowMatrix),me.currentProgram=Je,me.uniformsList=null,Je}function Gr(I){if(I.uniformsList===null){const se=I.currentProgram.getUniforms();I.uniformsList=Ro.seqWithValue(se.seq,I.uniforms)}return I.uniformsList}function Hr(I,se){const pe=Se.get(I);pe.outputColorSpace=se.outputColorSpace,pe.batching=se.batching,pe.batchingColor=se.batchingColor,pe.instancing=se.instancing,pe.instancingColor=se.instancingColor,pe.instancingMorph=se.instancingMorph,pe.skinning=se.skinning,pe.morphTargets=se.morphTargets,pe.morphNormals=se.morphNormals,pe.morphColors=se.morphColors,pe.morphTargetsCount=se.morphTargetsCount,pe.numClippingPlanes=se.numClippingPlanes,pe.numIntersection=se.numClipIntersection,pe.vertexAlphas=se.vertexAlphas,pe.vertexTangents=se.vertexTangents,pe.toneMapping=se.toneMapping}function Ko(I,se,pe,me,ce){se.isScene!==!0&&(se=_e),Ue.resetTextureUnits();const Be=se.fog,Ge=me.isMeshStandardMaterial?se.environment:null,je=T===null?A.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ji,We=(me.isMeshStandardMaterial?g:E).get(me.envMap||Ge),Ze=me.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Je=!!pe.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),Ye=!!pe.morphAttributes.position,ct=!!pe.morphAttributes.normal,pt=!!pe.morphAttributes.color;let Mt=ti;me.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=A.toneMapping);const At=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,xt=At!==void 0?At.length:0,qe=Se.get(me),yt=b.state.lights;if(U===!0&&(V===!0||I!==C)){const Xt=I===C&&me.id===w;fe.setState(me,I,Xt)}let ht=!1;me.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==yt.state.version||qe.outputColorSpace!==je||ce.isBatchedMesh&&qe.batching===!1||!ce.isBatchedMesh&&qe.batching===!0||ce.isBatchedMesh&&qe.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&qe.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&qe.instancing===!1||!ce.isInstancedMesh&&qe.instancing===!0||ce.isSkinnedMesh&&qe.skinning===!1||!ce.isSkinnedMesh&&qe.skinning===!0||ce.isInstancedMesh&&qe.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&qe.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&qe.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&qe.instancingMorph===!1&&ce.morphTexture!==null||qe.envMap!==We||me.fog===!0&&qe.fog!==Be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==fe.numPlanes||qe.numIntersection!==fe.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==Je||qe.morphTargets!==Ye||qe.morphNormals!==ct||qe.morphColors!==pt||qe.toneMapping!==Mt||qe.morphTargetsCount!==xt)&&(ht=!0):(ht=!0,qe.__version=me.version);let Qt=qe.currentProgram;ht===!0&&(Qt=Ti(me,se,ce));let Mi=!1,en=!1,or=!1;const bt=Qt.getUniforms(),Yt=qe.uniforms;if(ee.useProgram(Qt.program)&&(Mi=!0,en=!0,or=!0),me.id!==w&&(w=me.id,en=!0),Mi||C!==I){ee.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),bt.setValue(B,"projectionMatrix",I.projectionMatrix),bt.setValue(B,"viewMatrix",I.matrixWorldInverse);const Kt=bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(B,Q.setFromMatrixPosition(I.matrixWorld)),he.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&bt.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,en=!0,or=!0)}if(ce.isSkinnedMesh){bt.setOptional(B,ce,"bindMatrix"),bt.setOptional(B,ce,"bindMatrixInverse");const Xt=ce.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),bt.setValue(B,"boneTexture",Xt.boneTexture,Ue))}ce.isBatchedMesh&&(bt.setOptional(B,ce,"batchingTexture"),bt.setValue(B,"batchingTexture",ce._matricesTexture,Ue),bt.setOptional(B,ce,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",ce._indirectTexture,Ue),bt.setOptional(B,ce,"batchingColorTexture"),ce._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",ce._colorsTexture,Ue));const ln=pe.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ke.update(ce,pe,Qt),(en||qe.receiveShadow!==ce.receiveShadow)&&(qe.receiveShadow=ce.receiveShadow,bt.setValue(B,"receiveShadow",ce.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(Yt.envMap.value=We,Yt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),me.isMeshStandardMaterial&&me.envMap===null&&se.environment!==null&&(Yt.envMapIntensity.value=se.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Tx()),en&&(bt.setValue(B,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&qo(Yt,or),Be&&me.fog===!0&&q.refreshFogUniforms(Yt,Be),q.refreshMaterialUniforms(Yt,me,de,ne,b.state.transmissionRenderTarget[I.id]),Ro.upload(B,Gr(qe),Yt,Ue)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(Ro.upload(B,Gr(qe),Yt,Ue),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&bt.setValue(B,"center",ce.center),bt.setValue(B,"modelViewMatrix",ce.modelViewMatrix),bt.setValue(B,"normalMatrix",ce.normalMatrix),bt.setValue(B,"modelMatrix",ce.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const Xt=me.uniformsGroups;for(let Kt=0,ea=Xt.length;Kt<ea;Kt++){const ai=Xt[Kt];Ce.update(ai,Qt),Ce.bind(ai,Qt)}}return Qt}function qo(I,se){I.ambientLightColor.needsUpdate=se,I.lightProbe.needsUpdate=se,I.directionalLights.needsUpdate=se,I.directionalLightShadows.needsUpdate=se,I.pointLights.needsUpdate=se,I.pointLightShadows.needsUpdate=se,I.spotLights.needsUpdate=se,I.spotLightShadows.needsUpdate=se,I.rectAreaLights.needsUpdate=se,I.hemisphereLights.needsUpdate=se}function $o(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,se,pe){const me=Se.get(I);me.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,me.__autoAllocateDepthBuffer===!1&&(me.__useRenderToTexture=!1),Se.get(I.texture).__webglTexture=se,Se.get(I.depthTexture).__webglTexture=me.__autoAllocateDepthBuffer?void 0:pe,me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,se){const pe=Se.get(I);pe.__webglFramebuffer=se,pe.__useDefaultFramebuffer=se===void 0};const Zo=B.createFramebuffer();this.setRenderTarget=function(I,se=0,pe=0){T=I,k=se,S=pe;let me=!0,ce=null,Be=!1,Ge=!1;if(I){const We=Se.get(I);if(We.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(B.FRAMEBUFFER,null),me=!1;else if(We.__webglFramebuffer===void 0)Ue.setupRenderTarget(I);else if(We.__hasExternalTextures)Ue.rebindTextures(I,Se.get(I.texture).__webglTexture,Se.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ye=I.depthTexture;if(We.__boundDepthTexture!==Ye){if(Ye!==null&&Se.has(Ye)&&(I.width!==Ye.image.width||I.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(I)}}const Ze=I.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ge=!0);const Je=Se.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Je[se])?ce=Je[se][pe]:ce=Je[se],Be=!0):I.samples>0&&Ue.useMultisampledRTT(I)===!1?ce=Se.get(I).__webglMultisampledFramebuffer:Array.isArray(Je)?ce=Je[pe]:ce=Je,L.copy(I.viewport),O.copy(I.scissor),G=I.scissorTest}else L.copy(oe).multiplyScalar(de).floor(),O.copy(we).multiplyScalar(de).floor(),G=te;if(pe!==0&&(ce=Zo),ee.bindFramebuffer(B.FRAMEBUFFER,ce)&&me&&ee.drawBuffers(I,ce),ee.viewport(L),ee.scissor(O),ee.setScissorTest(G),Be){const We=Se.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+se,We.__webglTexture,pe)}else if(Ge){const We=se;for(let Ze=0;Ze<I.textures.length;Ze++){const Je=Se.get(I.textures[Ze]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,pe,We)}}else if(I!==null&&pe!==0){const We=Se.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,We.__webglTexture,pe)}w=-1},this.readRenderTargetPixels=function(I,se,pe,me,ce,Be,Ge,je=0){if(!(I&&I.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){ee.bindFramebuffer(B.FRAMEBUFFER,We);try{const Ze=I.textures[je],Je=Ze.format,Ye=Ze.type;if(!he.textureFormatReadable(Je)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Ye)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=I.width-me&&pe>=0&&pe<=I.height-ce&&(I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+je),B.readPixels(se,pe,me,ce,De.convert(Je),De.convert(Ye),Be))}finally{const Ze=T!==null?Se.get(T).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(I,se,pe,me,ce,Be,Ge,je=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(se>=0&&se<=I.width-me&&pe>=0&&pe<=I.height-ce){ee.bindFramebuffer(B.FRAMEBUFFER,We);const Ze=I.textures[je],Je=Ze.format,Ye=Ze.type;if(!he.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,Be.byteLength,B.STREAM_READ),I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+je),B.readPixels(se,pe,me,ce,De.convert(Je),De.convert(Ye),0);const pt=T!==null?Se.get(T).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,pt);const Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ah(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Be),B.deleteBuffer(ct),B.deleteSync(Mt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,se=null,pe=0){const me=Math.pow(2,-pe),ce=Math.floor(I.image.width*me),Be=Math.floor(I.image.height*me),Ge=se!==null?se.x:0,je=se!==null?se.y:0;Ue.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,pe,0,0,Ge,je,ce,Be),ee.unbindTexture()};const Jo=B.createFramebuffer(),Qo=B.createFramebuffer();this.copyTextureToTexture=function(I,se,pe=null,me=null,ce=0,Be=null){Be===null&&(ce!==0?(wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=ce,ce=0):Be=0);let Ge,je,We,Ze,Je,Ye,ct,pt,Mt;const At=I.isCompressedTexture?I.mipmaps[Be]:I.image;if(pe!==null)Ge=pe.max.x-pe.min.x,je=pe.max.y-pe.min.y,We=pe.isBox3?pe.max.z-pe.min.z:1,Ze=pe.min.x,Je=pe.min.y,Ye=pe.isBox3?pe.min.z:0;else{const ln=Math.pow(2,-ce);Ge=Math.floor(At.width*ln),je=Math.floor(At.height*ln),I.isDataArrayTexture?We=At.depth:I.isData3DTexture?We=Math.floor(At.depth*ln):We=1,Ze=0,Je=0,Ye=0}me!==null?(ct=me.x,pt=me.y,Mt=me.z):(ct=0,pt=0,Mt=0);const xt=De.convert(se.format),qe=De.convert(se.type);let yt;se.isData3DTexture?(Ue.setTexture3D(se,0),yt=B.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(Ue.setTexture2DArray(se,0),yt=B.TEXTURE_2D_ARRAY):(Ue.setTexture2D(se,0),yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,se.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,se.unpackAlignment);const ht=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Mi=B.getParameter(B.UNPACK_SKIP_PIXELS),en=B.getParameter(B.UNPACK_SKIP_ROWS),or=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const bt=I.isDataArrayTexture||I.isData3DTexture,Yt=se.isDataArrayTexture||se.isData3DTexture;if(I.isDepthTexture){const ln=Se.get(I),Xt=Se.get(se),Kt=Se.get(ln.__renderTarget),ea=Se.get(Xt.__renderTarget);ee.bindFramebuffer(B.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let ai=0;ai<We;ai++)bt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Se.get(I).__webglTexture,ce,Ye+ai),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Se.get(se).__webglTexture,Be,Mt+ai)),B.blitFramebuffer(Ze,Je,Ge,je,ct,pt,Ge,je,B.DEPTH_BUFFER_BIT,B.NEAREST);ee.bindFramebuffer(B.READ_FRAMEBUFFER,null),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ce!==0||I.isRenderTargetTexture||Se.has(I)){const ln=Se.get(I),Xt=Se.get(se);ee.bindFramebuffer(B.READ_FRAMEBUFFER,Jo),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qo);for(let Kt=0;Kt<We;Kt++)bt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,ce,Ye+Kt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,ce),Yt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,Be,Mt+Kt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,Be),ce!==0?B.blitFramebuffer(Ze,Je,Ge,je,ct,pt,Ge,je,B.COLOR_BUFFER_BIT,B.NEAREST):Yt?B.copyTexSubImage3D(yt,Be,ct,pt,Mt+Kt,Ze,Je,Ge,je):B.copyTexSubImage2D(yt,Be,ct,pt,Ze,Je,Ge,je);ee.bindFramebuffer(B.READ_FRAMEBUFFER,null),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Yt?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(yt,Be,ct,pt,Mt,Ge,je,We,xt,qe,At.data):se.isCompressedArrayTexture?B.compressedTexSubImage3D(yt,Be,ct,pt,Mt,Ge,je,We,xt,At.data):B.texSubImage3D(yt,Be,ct,pt,Mt,Ge,je,We,xt,qe,At):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Be,ct,pt,Ge,je,xt,qe,At.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Be,ct,pt,At.width,At.height,xt,At.data):B.texSubImage2D(B.TEXTURE_2D,Be,ct,pt,Ge,je,xt,qe,At);B.pixelStorei(B.UNPACK_ROW_LENGTH,ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Mi),B.pixelStorei(B.UNPACK_SKIP_ROWS,en),B.pixelStorei(B.UNPACK_SKIP_IMAGES,or),Be===0&&se.generateMipmaps&&B.generateMipmap(yt),ee.unbindTexture()},this.initRenderTarget=function(I){Se.get(I).__webglFramebuffer===void 0&&Ue.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ue.setTextureCube(I,0):I.isData3DTexture?Ue.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ue.setTexture2DArray(I,0):Ue.setTexture2D(I,0),ee.unbindTexture()},this.resetState=function(){k=0,S=0,T=null,ee.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const bc={type:"change"},Zs={type:"start"},mu={type:"end"},_o=new ko,Ec=new qn,Ax=Math.cos(70*wh.DEG2RAD),Dt=new ae,$t=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fa=1e-6;class Rx extends kf{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new ae,this.cursor=new ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ae,this._lastQuaternion=new ri,this._lastTargetPosition=new ae,this._quat=new ri().setFromUnitVectors(e.up,new ae(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $l,this._sphericalDelta=new $l,this._scale=1,this._panOffset=new ae,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new ae,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cx.bind(this),this._onPointerDown=wx.bind(this),this._onPointerUp=Px.bind(this),this._onContextMenu=Ux.bind(this),this._onMouseWheel=Nx.bind(this),this._onKeyDown=Ox.bind(this),this._onTouchStart=Dx.bind(this),this._onTouchMove=Fx.bind(this),this._onMouseDown=Lx.bind(this),this._onMouseMove=Ix.bind(this),this._interceptControlDown=kx.bind(this),this._interceptControlUp=Bx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bc),this.update(),this.state=gt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),r<-Math.PI?r+=$t:r>Math.PI&&(r-=$t),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=Dt.length();a=this._clampDistance(l*this._scale);const c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const l=new ae(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const s=new ae(this._mouse.x,this._mouse.y,0);s.unproject(this.object),this.object.position.sub(s).add(l),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<Ax?this.object.lookAt(this.target):(Ec.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(Ec,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fa||this._lastTargetPosition.distanceToSquared(this.target)>Fa?(this.dispatchEvent(bc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let o=Dt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,a=i.width,l=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Cx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Px(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mu),this.state=gt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Lx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=gt.DOLLY;break;case ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}break;case ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Zs)}function Ix(n){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Nx(n){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(n.preventDefault(),this.dispatchEvent(Zs),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(mu))}function Ox(n){this.enabled!==!1&&this._handleKeyDown(n)}function Dx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=gt.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=gt.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Zs)}function Fx(n){switch(this._trackPointer(n),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=gt.NONE}}function Ux(n){this.enabled!==!1&&n.preventDefault()}function kx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class zx extends Tn{constructor(e){super(e)}load(e,t,i,r){const o=this,a=new su(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(o.parse(l))}catch(c){r?r(c):console.error(c),o.manager.itemError(e)}},i,r)}parse(e){function t(s){const d=new DataView(s),h=32/8*3+32/8*3*3+16/8,m=d.getUint32(80,!0);if(80+32/8+m*h===d.byteLength)return!0;const x=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(x,d,v))return!1;return!0}function i(s,d,h){for(let m=0,p=s.length;m<p;m++)if(s[m]!==d.getUint8(h+m))return!1;return!0}function r(s){const d=new DataView(s),h=d.getUint32(80,!0);let m,p,x,v=!1,f,u,_,b,y;for(let w=0;w<70;w++)d.getUint32(w,!1)==1129270351&&d.getUint8(w+4)==82&&d.getUint8(w+5)==61&&(v=!0,f=new Float32Array(h*3*3),u=d.getUint8(w+6)/255,_=d.getUint8(w+7)/255,b=d.getUint8(w+8)/255,y=d.getUint8(w+9)/255);const R=84,A=12*4+2,P=new Ot,k=new Float32Array(h*3*3),S=new Float32Array(h*3*3),T=new nt;for(let w=0;w<h;w++){const C=R+w*A,L=d.getFloat32(C,!0),O=d.getFloat32(C+4,!0),G=d.getFloat32(C+8,!0);if(v){const X=d.getUint16(C+48,!0);X&32768?(m=u,p=_,x=b):(m=(X&31)/31,p=(X>>5&31)/31,x=(X>>10&31)/31)}for(let X=1;X<=3;X++){const J=C+X*12,j=w*3*3+(X-1)*3;k[j]=d.getFloat32(J,!0),k[j+1]=d.getFloat32(J+4,!0),k[j+2]=d.getFloat32(J+8,!0),S[j]=L,S[j+1]=O,S[j+2]=G,v&&(T.setRGB(m,p,x,Rt),f[j]=T.r,f[j+1]=T.g,f[j+2]=T.b)}}return P.setAttribute("position",new Jt(k,3)),P.setAttribute("normal",new Jt(S,3)),v&&(P.setAttribute("color",new Jt(f,3)),P.hasColors=!0,P.alpha=y),P}function o(s){const d=new Ot,h=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let x=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,f=new RegExp("vertex"+v+v+v,"g"),u=new RegExp("normal"+v+v+v,"g"),_=[],b=[],y=[],R=new ae;let A,P=0,k=0,S=0;for(;(A=h.exec(s))!==null;){k=S;const T=A[0],w=(A=p.exec(T))!==null?A[1]:"";for(y.push(w);(A=m.exec(T))!==null;){let O=0,G=0;const X=A[0];for(;(A=u.exec(X))!==null;)R.x=parseFloat(A[1]),R.y=parseFloat(A[2]),R.z=parseFloat(A[3]),G++;for(;(A=f.exec(X))!==null;)_.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),b.push(R.x,R.y,R.z),O++,S++;G!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const C=k,L=S-k;d.userData.groupNames=y,d.addGroup(C,L,P),P++}return d.setAttribute("position",new st(_,3)),d.setAttribute("normal",new st(b,3)),d}function a(s){return typeof s!="string"?new TextDecoder().decode(s):s}function l(s){if(typeof s=="string"){const d=new Uint8Array(s.length);for(let h=0;h<s.length;h++)d[h]=s.charCodeAt(h)&255;return d.buffer||d}else return s}const c=l(e);return t(c)?r(c):o(a(e))}}/*! chevrotain - v9.0.1 */var it=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),gu=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),ft=it((n,e)=>{var t=n&&n.__spreadArray||function($,he){for(var ee=0,ye=he.length,Se=$.length;ee<ye;ee++,Se++)$[Se]=he[ee];return $};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i($){return $&&$.length===0}n.isEmpty=i;function r($){return $==null?[]:Object.keys($)}n.keys=r;function o($){for(var he=[],ee=Object.keys($),ye=0;ye<ee.length;ye++)he.push($[ee[ye]]);return he}n.values=o;function a($,he){for(var ee=[],ye=r($),Se=0;Se<ye.length;Se++){var Ue=ye[Se];ee.push(he.call(null,$[Ue],Ue))}return ee}n.mapValues=a;function l($,he){for(var ee=[],ye=0;ye<$.length;ye++)ee.push(he.call(null,$[ye],ye));return ee}n.map=l;function c($){for(var he=[],ee=0;ee<$.length;ee++){var ye=$[ee];Array.isArray(ye)?he=he.concat(c(ye)):he.push(ye)}return he}n.flatten=c;function s($){return i($)?void 0:$[0]}n.first=s;function d($){var he=$&&$.length;return he?$[he-1]:void 0}n.last=d;function h($,he){if(Array.isArray($))for(var ee=0;ee<$.length;ee++)he.call(null,$[ee],ee);else if(X($))for(var ye=r($),ee=0;ee<ye.length;ee++){var Se=ye[ee],Ue=$[Se];he.call(null,Ue,Se)}else throw Error("non exhaustive match")}n.forEach=h;function m($){return typeof $=="string"}n.isString=m;function p($){return $===void 0}n.isUndefined=p;function x($){return $ instanceof Function}n.isFunction=x;function v($,he){return he===void 0&&(he=1),$.slice(he,$.length)}n.drop=v;function f($,he){return he===void 0&&(he=1),$.slice(0,$.length-he)}n.dropRight=f;function u($,he){var ee=[];if(Array.isArray($))for(var ye=0;ye<$.length;ye++){var Se=$[ye];he.call(null,Se)&&ee.push(Se)}return ee}n.filter=u;function _($,he){return u($,function(ee){return!he(ee)})}n.reject=_;function b($,he){for(var ee=Object.keys($),ye={},Se=0;Se<ee.length;Se++){var Ue=ee[Se],E=$[Ue];he(E)&&(ye[Ue]=E)}return ye}n.pick=b;function y($,he){return X($)?$.hasOwnProperty(he):!1}n.has=y;function R($,he){return k($,function(ee){return ee===he})!==void 0}n.contains=R;function A($){for(var he=[],ee=0;ee<$.length;ee++)he.push($[ee]);return he}n.cloneArr=A;function P($){var he={};for(var ee in $)Object.prototype.hasOwnProperty.call($,ee)&&(he[ee]=$[ee]);return he}n.cloneObj=P;function k($,he){for(var ee=0;ee<$.length;ee++){var ye=$[ee];if(he.call(null,ye))return ye}}n.find=k;function S($,he){for(var ee=[],ye=0;ye<$.length;ye++){var Se=$[ye];he.call(null,Se)&&ee.push(Se)}return ee}n.findAll=S;function T($,he,ee){for(var ye=Array.isArray($),Se=ye?$:o($),Ue=ye?[]:r($),E=ee,g=0;g<Se.length;g++)E=he.call(null,E,Se[g],ye?g:Ue[g]);return E}n.reduce=T;function w($){return _($,function(he){return he==null})}n.compact=w;function C($,he){he===void 0&&(he=function(ye){return ye});var ee=[];return T($,function(ye,Se){var Ue=he(Se);return R(ee,Ue)?ye:(ee.push(Ue),ye.concat(Se))},[])}n.uniq=C;function L($){for(var he=[],ee=1;ee<arguments.length;ee++)he[ee-1]=arguments[ee];var ye=[null],Se=ye.concat(he);return Function.bind.apply($,Se)}n.partial=L;function O($){return Array.isArray($)}n.isArray=O;function G($){return $ instanceof RegExp}n.isRegExp=G;function X($){return $ instanceof Object}n.isObject=X;function J($,he){for(var ee=0;ee<$.length;ee++)if(!he($[ee],ee))return!1;return!0}n.every=J;function j($,he){return _($,function(ee){return R(he,ee)})}n.difference=j;function ne($,he){for(var ee=0;ee<$.length;ee++)if(he($[ee]))return!0;return!1}n.some=ne;function de($,he){for(var ee=0;ee<$.length;ee++)if($[ee]===he)return ee;return-1}n.indexOf=de;function xe($,he){var ee=A($);return ee.sort(function(ye,Se){return he(ye)-he(Se)}),ee}n.sortBy=xe;function re($,he){if($.length!==he.length)throw Error("can't zipObject with different number of keys and values!");for(var ee={},ye=0;ye<$.length;ye++)ee[$[ye]]=he[ye];return ee}n.zipObject=re;function oe($){for(var he=[],ee=1;ee<arguments.length;ee++)he[ee-1]=arguments[ee];for(var ye=0;ye<he.length;ye++)for(var Se=he[ye],Ue=r(Se),E=0;E<Ue.length;E++){var g=Ue[E];$[g]=Se[g]}return $}n.assign=oe;function we($){for(var he=[],ee=1;ee<arguments.length;ee++)he[ee-1]=arguments[ee];for(var ye=0;ye<he.length;ye++)for(var Se=he[ye],Ue=r(Se),E=0;E<Ue.length;E++){var g=Ue[E];y($,g)||($[g]=Se[g])}return $}n.assignNoOverwrite=we;function te(){for(var $=[],he=0;he<arguments.length;he++)$[he]=arguments[he];return we.apply(void 0,t([{}],$))}n.defaults=te;function H($,he){var ee={};return h($,function(ye){var Se=he(ye),Ue=ee[Se];Ue?Ue.push(ye):ee[Se]=[ye]}),ee}n.groupBy=H;function U($,he){for(var ee=P($),ye=r(he),Se=0;Se<ye.length;Se++){var Ue=ye[Se],E=he[Ue];ee[Ue]=E}return ee}n.merge=U;function V(){}n.NOOP=V;function K($){return $}n.IDENTITY=K;function Q($){for(var he=[],ee=0;ee<$.length;ee++){var ye=$[ee];he.push(ye!==void 0?ye:void 0)}return he}n.packArray=Q;function ue($){console&&console.error&&console.error("Error: "+$)}n.PRINT_ERROR=ue;function _e($){console&&console.warn&&console.warn("Warning: "+$)}n.PRINT_WARNING=_e;function Te(){return typeof Map=="function"}n.isES2015MapSupported=Te;function He($){return $[$.length-1]}n.peek=He;function B($){var he=new Date().getTime(),ee=$(),ye=new Date().getTime(),Se=ye-he;return{time:Se,value:ee}}n.timer=B;function Fe($){function he(){}he.prototype=$;var ee=new he;function ye(){return typeof ee.bar}return ye(),ye(),$}n.toFastProperties=Fe}),Js=it((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(f){this.idx=f.idx,this.input=f.input,this.groupIdx=f.groupIdx},t.prototype.pattern=function(f){this.idx=0,this.input=f,this.groupIdx=0,this.consumeChar("/");var u=this.disjunction();this.consumeChar("/");for(var _={type:"Flags",loc:{begin:this.idx,end:f.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":c(_,"global");break;case"i":c(_,"ignoreCase");break;case"m":c(_,"multiLine");break;case"u":c(_,"unicode");break;case"y":c(_,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:_,value:u,loc:this.loc(0)}},t.prototype.disjunction=function(){var f=[],u=this.idx;for(f.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),f.push(this.alternative());return{type:"Disjunction",value:f,loc:this.loc(u)}},t.prototype.alternative=function(){for(var f=[],u=this.idx;this.isTerm();)f.push(this.term());return{type:"Alternative",value:f,loc:this.loc(u)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var f=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(f)};case"$":return{type:"EndAnchor",loc:this.loc(f)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(f)};case"B":return{type:"NonWordBoundary",loc:this.loc(f)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var u;switch(this.popChar()){case"=":u="Lookahead";break;case"!":u="NegativeLookahead";break}s(u);var _=this.disjunction();return this.consumeChar(")"),{type:u,value:_,loc:this.loc(f)}}d()},t.prototype.quantifier=function(f){var u,_=this.idx;switch(this.popChar()){case"*":u={atLeast:0,atMost:1/0};break;case"+":u={atLeast:1,atMost:1/0};break;case"?":u={atLeast:0,atMost:1};break;case"{":var b=this.integerIncludingZero();switch(this.popChar()){case"}":u={atLeast:b,atMost:b};break;case",":var y;this.isDigit()?(y=this.integerIncludingZero(),u={atLeast:b,atMost:y}):u={atLeast:b,atMost:1/0},this.consumeChar("}");break}if(f===!0&&u===void 0)return;s(u);break}if(!(f===!0&&u===void 0))return s(u),this.peekChar(0)==="?"?(this.consumeChar("?"),u.greedy=!1):u.greedy=!0,u.type="Quantifier",u.loc=this.loc(_),u},t.prototype.atom=function(){var f,u=this.idx;switch(this.peekChar()){case".":f=this.dotAll();break;case"\\":f=this.atomEscape();break;case"[":f=this.characterClass();break;case"(":f=this.group();break}return f===void 0&&this.isPatternCharacter()&&(f=this.patternCharacter()),s(f),f.loc=this.loc(u),this.isQuantifier()&&(f.quantifier=this.quantifier()),f},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[a(`
`),a("\r"),a("\u2028"),a("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var f=this.positiveInteger();return{type:"GroupBackReference",value:f}},t.prototype.characterClassEscape=function(){var f,u=!1;switch(this.popChar()){case"d":f=m;break;case"D":f=m,u=!0;break;case"s":f=x;break;case"S":f=x,u=!0;break;case"w":f=p;break;case"W":f=p,u=!0;break}return s(f),{type:"Set",value:f,complement:u}},t.prototype.controlEscapeAtom=function(){var f;switch(this.popChar()){case"f":f=a("\f");break;case"n":f=a(`
`);break;case"r":f=a("\r");break;case"t":f=a("	");break;case"v":f=a("\v");break}return s(f),{type:"Character",value:f}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var f=this.popChar();if(/[a-zA-Z]/.test(f)===!1)throw Error("Invalid ");var u=f.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:u}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:a("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var f=this.popChar();return{type:"Character",value:a(f)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var f=this.popChar();return{type:"Character",value:a(f)}}},t.prototype.characterClass=function(){var f=[],u=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),u=!0);this.isClassAtom();){var _=this.classAtom(),b=_.type==="Character";if(b&&this.isRangeDash()){this.consumeChar("-");var y=this.classAtom(),R=y.type==="Character";if(R){if(y.value<_.value)throw Error("Range out of order in character class");f.push({from:_.value,to:y.value})}else l(_.value,f),f.push(a("-")),l(y.value,f)}else l(_.value,f)}return this.consumeChar("]"),{type:"Set",complement:u,value:f}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:a("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var f=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),f=!1;break;default:this.groupIdx++;break}var u=this.disjunction();this.consumeChar(")");var _={type:"Group",capturing:f,value:u};return f&&(_.idx=this.groupIdx),_},t.prototype.positiveInteger=function(){var f=this.popChar();if(o.test(f)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.integerIncludingZero=function(){var f=this.popChar();if(r.test(f)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)f+=this.popChar();return parseInt(f,10)},t.prototype.patternCharacter=function(){var f=this.popChar();switch(f){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:a(f)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(f){switch(f===void 0&&(f=0),this.peekChar(f)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var f=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(f)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(f){for(var u="",_=0;_<f;_++){var b=this.popChar();if(i.test(b)===!1)throw Error("Expecting a HexDecimal digits");u+=b}var y=parseInt(u,16);return{type:"Character",value:y}},t.prototype.peekChar=function(f){return f===void 0&&(f=0),this.input[this.idx+f]},t.prototype.popChar=function(){var f=this.peekChar(0);return this.consumeChar(),f},t.prototype.consumeChar=function(f){if(f!==void 0&&this.input[this.idx]!==f)throw Error("Expected: '"+f+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(f){return{begin:f,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function a(f){return f.charCodeAt(0)}function l(f,u){f.length!==void 0?f.forEach(function(_){u.push(_)}):u.push(f)}function c(f,u){if(f[u]===!0)throw"duplicate flag "+u;f[u]=!0}function s(f){if(f===void 0)throw Error("Internal Error - Should never get here!")}function d(){throw Error("Internal Error - Should never get here!")}var h,m=[];for(h=a("0");h<=a("9");h++)m.push(h);var p=[a("_")].concat(m);for(h=a("a");h<=a("z");h++)p.push(h);for(h=a("A");h<=a("Z");h++)p.push(h);var x=[a(" "),a("\f"),a(`
`),a("\r"),a("	"),a("\v"),a("	"),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a(" "),a("\u2028"),a("\u2029"),a(" "),a(" "),a("　"),a("\uFEFF")];function v(){}return v.prototype.visitChildren=function(f){for(var u in f){var _=f[u];f.hasOwnProperty(u)&&(_.type!==void 0?this.visit(_):Array.isArray(_)&&_.forEach(function(b){this.visit(b)},this))}},v.prototype.visit=function(f){switch(f.type){case"Pattern":this.visitPattern(f);break;case"Flags":this.visitFlags(f);break;case"Disjunction":this.visitDisjunction(f);break;case"Alternative":this.visitAlternative(f);break;case"StartAnchor":this.visitStartAnchor(f);break;case"EndAnchor":this.visitEndAnchor(f);break;case"WordBoundary":this.visitWordBoundary(f);break;case"NonWordBoundary":this.visitNonWordBoundary(f);break;case"Lookahead":this.visitLookahead(f);break;case"NegativeLookahead":this.visitNegativeLookahead(f);break;case"Character":this.visitCharacter(f);break;case"Set":this.visitSet(f);break;case"Group":this.visitGroup(f);break;case"GroupBackReference":this.visitGroupBackReference(f);break;case"Quantifier":this.visitQuantifier(f);break}this.visitChildren(f)},v.prototype.visitPattern=function(f){},v.prototype.visitFlags=function(f){},v.prototype.visitDisjunction=function(f){},v.prototype.visitAlternative=function(f){},v.prototype.visitStartAnchor=function(f){},v.prototype.visitEndAnchor=function(f){},v.prototype.visitWordBoundary=function(f){},v.prototype.visitNonWordBoundary=function(f){},v.prototype.visitLookahead=function(f){},v.prototype.visitNegativeLookahead=function(f){},v.prototype.visitCharacter=function(f){},v.prototype.visitSet=function(f){},v.prototype.visitGroup=function(f){},v.prototype.visitGroupBackReference=function(f){},v.prototype.visitQuantifier=function(f){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})}),Qs=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=Js(),t={},i=new e.RegExpParser;function r(a){var l=a.toString();if(t.hasOwnProperty(l))return t[l];var c=i.pattern(l);return t[l]=c,c}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),Vx=it(n=>{var e=n&&n.__extends||function(){var v=function(f,u){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,b){_.__proto__=b}||function(_,b){for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(_[y]=b[y])},v(f,u)};return function(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");v(f,u);function _(){this.constructor=f}f.prototype=u===null?Object.create(u):(_.prototype=u.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=Js(),i=ft(),r=Qs(),o=xu(),a="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function l(v,f){f===void 0&&(f=!1);try{var u=r.getRegExpAst(v),_=c(u.value,{},u.flags.ignoreCase);return _}catch(y){if(y.message===a)f&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+v.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var b="";f&&(b=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+v.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+b)}}return[]}n.getOptimizedStartCodesIndices=l;function c(v,f,u){switch(v.type){case"Disjunction":for(var _=0;_<v.value.length;_++)c(v.value[_],f,u);break;case"Alternative":for(var b=v.value,_=0;_<b.length;_++){var y=b[_];switch(y.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var R=y;switch(R.type){case"Character":s(R.value,f,u);break;case"Set":if(R.complement===!0)throw Error(a);i.forEach(R.value,function(k){if(typeof k=="number")s(k,f,u);else{var S=k;if(u===!0)for(var T=S.from;T<=S.to;T++)s(T,f,u);else{for(var T=S.from;T<=S.to&&T<o.minOptimizationVal;T++)s(T,f,u);if(S.to>=o.minOptimizationVal)for(var w=S.from>=o.minOptimizationVal?S.from:o.minOptimizationVal,C=S.to,L=o.charCodeToOptimizedIndex(w),O=o.charCodeToOptimizedIndex(C),G=L;G<=O;G++)f[G]=G}}});break;case"Group":c(R.value,f,u);break;default:throw Error("Non Exhaustive Match")}var A=R.quantifier!==void 0&&R.quantifier.atLeast===0;if(R.type==="Group"&&m(R)===!1||R.type!=="Group"&&A===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(f)}n.firstCharOptimizedIndices=c;function s(v,f,u){var _=o.charCodeToOptimizedIndex(v);f[_]=_,u===!0&&d(v,f)}function d(v,f){var u=String.fromCharCode(v),_=u.toUpperCase();if(_!==u){var b=o.charCodeToOptimizedIndex(_.charCodeAt(0));f[b]=b}else{var y=u.toLowerCase();if(y!==u){var b=o.charCodeToOptimizedIndex(y.charCodeAt(0));f[b]=b}}}function h(v,f){return i.find(v.value,function(u){if(typeof u=="number")return i.contains(f,u);var _=u;return i.find(f,function(b){return _.from<=b&&b<=_.to})!==void 0})}function m(v){return v.quantifier&&v.quantifier.atLeast===0?!0:v.value?i.isArray(v.value)?i.every(v.value,m):m(v.value):!1}var p=function(v){e(f,v);function f(u){var _=v.call(this)||this;return _.targetCharCodes=u,_.found=!1,_}return f.prototype.visitChildren=function(u){if(this.found!==!0){switch(u.type){case"Lookahead":this.visitLookahead(u);return;case"NegativeLookahead":this.visitNegativeLookahead(u);return}v.prototype.visitChildren.call(this,u)}},f.prototype.visitCharacter=function(u){i.contains(this.targetCharCodes,u.value)&&(this.found=!0)},f.prototype.visitSet=function(u){u.complement?h(u,this.targetCharCodes)===void 0&&(this.found=!0):h(u,this.targetCharCodes)!==void 0&&(this.found=!0)},f}(t.BaseRegExpVisitor);function x(v,f){if(f instanceof RegExp){var u=r.getRegExpAst(f),_=new p(v);return _.visit(u),_.found}else return i.find(f,function(b){return i.contains(v,b.charCodeAt(0))})!==void 0}n.canMatchCharCode=x}),xu=it(n=>{var e=n&&n.__extends||function(){var te=function(H,U){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(V,K){V.__proto__=K}||function(V,K){for(var Q in K)Object.prototype.hasOwnProperty.call(K,Q)&&(V[Q]=K[Q])},te(H,U)};return function(H,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");te(H,U);function V(){this.constructor=H}H.prototype=U===null?Object.create(U):(V.prototype=U.prototype,new V)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=Js(),i=Ho(),r=ft(),o=Vx(),a=Qs(),l="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function c(){n.SUPPORT_STICKY=!1}n.disableSticky=c;function s(){n.SUPPORT_STICKY=!0}n.enableSticky=s;function d(te,H){H=r.defaults(H,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(E,g){return g()}});var U=H.tracer;U("initCharCodeToOptimizedIndexMap",function(){we()});var V;U("Reject Lexer.NA",function(){V=r.reject(te,function(E){return E[l]===i.Lexer.NA})});var K=!1,Q;U("Transform Patterns",function(){K=!1,Q=r.map(V,function(E){var g=E[l];if(r.isRegExp(g)){var M=g.source;return M.length===1&&M!=="^"&&M!=="$"&&M!=="."&&!g.ignoreCase?M:M.length===2&&M[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],M[1])?M[1]:H.useSticky?C(g):w(g)}else{if(r.isFunction(g))return K=!0,{exec:g};if(r.has(g,"exec"))return K=!0,g;if(typeof g=="string"){if(g.length===1)return g;var D=g.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),N=new RegExp(D);return H.useSticky?C(N):w(N)}else throw Error("non exhaustive match")}})});var ue,_e,Te,He,B;U("misc mapping",function(){ue=r.map(V,function(E){return E.tokenTypeIdx}),_e=r.map(V,function(E){var g=E.GROUP;if(g!==i.Lexer.SKIPPED){if(r.isString(g))return g;if(r.isUndefined(g))return!1;throw Error("non exhaustive match")}}),Te=r.map(V,function(E){var g=E.LONGER_ALT;if(g){var M=r.indexOf(V,g);return M}}),He=r.map(V,function(E){return E.PUSH_MODE}),B=r.map(V,function(E){return r.has(E,"POP_MODE")})});var Fe;U("Line Terminator Handling",function(){var E=de(H.lineTerminatorCharacters);Fe=r.map(V,function(g){return!1}),H.positionTracking!=="onlyOffset"&&(Fe=r.map(V,function(g){if(r.has(g,"LINE_BREAKS"))return g.LINE_BREAKS;if(j(g,E)===!1)return o.canMatchCharCode(E,g.PATTERN)}))});var $,he,ee,ye;U("Misc Mapping #2",function(){$=r.map(V,X),he=r.map(Q,J),ee=r.reduce(V,function(E,g){var M=g.GROUP;return r.isString(M)&&M!==i.Lexer.SKIPPED&&(E[M]=[]),E},{}),ye=r.map(Q,function(E,g){return{pattern:Q[g],longerAlt:Te[g],canLineTerminator:Fe[g],isCustom:$[g],short:he[g],group:_e[g],push:He[g],pop:B[g],tokenTypeIdx:ue[g],tokenType:V[g]}})});var Se=!0,Ue=[];return H.safeMode||U("First Char Optimization",function(){Ue=r.reduce(V,function(E,g,M){if(typeof g.PATTERN=="string"){var D=g.PATTERN.charCodeAt(0),N=oe(D);xe(E,N,ye[M])}else if(r.isArray(g.START_CHARS_HINT)){var F;r.forEach(g.START_CHARS_HINT,function(Y){var le=typeof Y=="string"?Y.charCodeAt(0):Y,fe=oe(le);F!==fe&&(F=fe,xe(E,fe,ye[M]))})}else if(r.isRegExp(g.PATTERN))if(g.PATTERN.unicode)Se=!1,H.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+g.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var q=o.getOptimizedStartCodesIndices(g.PATTERN,H.ensureOptimizations);r.isEmpty(q)&&(Se=!1),r.forEach(q,function(Y){xe(E,Y,ye[M])})}else H.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+g.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Se=!1;return E},[])}),U("ArrayPacking",function(){Ue=r.packArray(Ue)}),{emptyGroups:ee,patternIdxToConfig:ye,charCodeToPatternIdxToConfig:Ue,hasCustom:K,canBeOptimized:Se}}n.analyzeTokenTypes=d;function h(te,H){var U=[],V=p(te);U=U.concat(V.errors);var K=x(V.valid),Q=K.valid;return U=U.concat(K.errors),U=U.concat(m(Q)),U=U.concat(A(Q)),U=U.concat(P(Q,H)),U=U.concat(k(Q)),U}n.validatePatterns=h;function m(te){var H=[],U=r.filter(te,function(V){return r.isRegExp(V[l])});return H=H.concat(f(U)),H=H.concat(b(U)),H=H.concat(y(U)),H=H.concat(R(U)),H=H.concat(u(U)),H}function p(te){var H=r.filter(te,function(K){return!r.has(K,l)}),U=r.map(H,function(K){return{message:"Token Type: ->"+K.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[K]}}),V=r.difference(te,H);return{errors:U,valid:V}}n.findMissingPatterns=p;function x(te){var H=r.filter(te,function(K){var Q=K[l];return!r.isRegExp(Q)&&!r.isFunction(Q)&&!r.has(Q,"exec")&&!r.isString(Q)}),U=r.map(H,function(K){return{message:"Token Type: ->"+K.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[K]}}),V=r.difference(te,H);return{errors:U,valid:V}}n.findInvalidPatterns=x;var v=/[^\\][\$]/;function f(te){var H=function(K){e(Q,K);function Q(){var ue=K!==null&&K.apply(this,arguments)||this;return ue.found=!1,ue}return Q.prototype.visitEndAnchor=function(ue){this.found=!0},Q}(t.BaseRegExpVisitor),U=r.filter(te,function(K){var Q=K[l];try{var ue=a.getRegExpAst(Q),_e=new H;return _e.visit(ue),_e.found}catch{return v.test(Q.source)}}),V=r.map(U,function(K){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+K.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[K]}});return V}n.findEndOfInputAnchor=f;function u(te){var H=r.filter(te,function(V){var K=V[l];return K.test("")}),U=r.map(H,function(V){return{message:"Token Type: ->"+V.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[V]}});return U}n.findEmptyMatchRegExps=u;var _=/[^\\[][\^]|^\^/;function b(te){var H=function(K){e(Q,K);function Q(){var ue=K!==null&&K.apply(this,arguments)||this;return ue.found=!1,ue}return Q.prototype.visitStartAnchor=function(ue){this.found=!0},Q}(t.BaseRegExpVisitor),U=r.filter(te,function(K){var Q=K[l];try{var ue=a.getRegExpAst(Q),_e=new H;return _e.visit(ue),_e.found}catch{return _.test(Q.source)}}),V=r.map(U,function(K){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+K.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[K]}});return V}n.findStartOfInputAnchor=b;function y(te){var H=r.filter(te,function(V){var K=V[l];return K instanceof RegExp&&(K.multiline||K.global)}),U=r.map(H,function(V){return{message:"Token Type: ->"+V.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[V]}});return U}n.findUnsupportedFlags=y;function R(te){var H=[],U=r.map(te,function(Q){return r.reduce(te,function(ue,_e){return Q.PATTERN.source===_e.PATTERN.source&&!r.contains(H,_e)&&_e.PATTERN!==i.Lexer.NA&&(H.push(_e),ue.push(_e)),ue},[])});U=r.compact(U);var V=r.filter(U,function(Q){return Q.length>1}),K=r.map(V,function(Q){var ue=r.map(Q,function(Te){return Te.name}),_e=r.first(Q).PATTERN;return{message:"The same RegExp pattern ->"+_e+"<-"+("has been used in all of the following Token Types: "+ue.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:Q}});return K}n.findDuplicatePatterns=R;function A(te){var H=r.filter(te,function(V){if(!r.has(V,"GROUP"))return!1;var K=V.GROUP;return K!==i.Lexer.SKIPPED&&K!==i.Lexer.NA&&!r.isString(K)}),U=r.map(H,function(V){return{message:"Token Type: ->"+V.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[V]}});return U}n.findInvalidGroupType=A;function P(te,H){var U=r.filter(te,function(K){return K.PUSH_MODE!==void 0&&!r.contains(H,K.PUSH_MODE)}),V=r.map(U,function(K){var Q="Token Type: ->"+K.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+K.PUSH_MODE+"<-which does not exist";return{message:Q,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[K]}});return V}n.findModesThatDoNotExist=P;function k(te){var H=[],U=r.reduce(te,function(V,K,Q){var ue=K.PATTERN;return ue===i.Lexer.NA||(r.isString(ue)?V.push({str:ue,idx:Q,tokenType:K}):r.isRegExp(ue)&&T(ue)&&V.push({str:ue.source,idx:Q,tokenType:K})),V},[]);return r.forEach(te,function(V,K){r.forEach(U,function(Q){var ue=Q.str,_e=Q.idx,Te=Q.tokenType;if(K<_e&&S(ue,V.PATTERN)){var He="Token: ->"+Te.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+V.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;H.push({message:He,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[V,Te]})}})}),H}n.findUnreachablePatterns=k;function S(te,H){if(r.isRegExp(H)){var U=H.exec(te);return U!==null&&U.index===0}else{if(r.isFunction(H))return H(te,0,[],{});if(r.has(H,"exec"))return H.exec(te,0,[],{});if(typeof H=="string")return H===te;throw Error("non exhaustive match")}}function T(te){var H=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(H,function(U){return te.source.indexOf(U)!==-1})===void 0}function w(te){var H=te.ignoreCase?"i":"";return new RegExp("^(?:"+te.source+")",H)}n.addStartOfInput=w;function C(te){var H=te.ignoreCase?"iy":"y";return new RegExp(""+te.source,H)}n.addStickyFlag=C;function L(te,H,U){var V=[];return r.has(te,n.DEFAULT_MODE)||V.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(te,n.MODES)||V.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(te,n.MODES)&&r.has(te,n.DEFAULT_MODE)&&!r.has(te.modes,te.defaultMode)&&V.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+te.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(te,n.MODES)&&r.forEach(te.modes,function(K,Q){r.forEach(K,function(ue,_e){r.isUndefined(ue)&&V.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+Q+"> at index: <"+_e+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),V}n.performRuntimeChecks=L;function O(te,H,U){var V=[],K=!1,Q=r.compact(r.flatten(r.mapValues(te.modes,function(Te){return Te}))),ue=r.reject(Q,function(Te){return Te[l]===i.Lexer.NA}),_e=de(U);return H&&r.forEach(ue,function(Te){var He=j(Te,_e);if(He!==!1){var B=ne(Te,He),Fe={message:B,type:He.issue,tokenType:Te};V.push(Fe)}else r.has(Te,"LINE_BREAKS")?Te.LINE_BREAKS===!0&&(K=!0):o.canMatchCharCode(_e,Te.PATTERN)&&(K=!0)}),H&&!K&&V.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),V}n.performWarningRuntimeChecks=O;function G(te){var H={},U=r.keys(te);return r.forEach(U,function(V){var K=te[V];if(r.isArray(K))H[V]=[];else throw Error("non exhaustive match")}),H}n.cloneEmptyGroups=G;function X(te){var H=te.PATTERN;if(r.isRegExp(H))return!1;if(r.isFunction(H)||r.has(H,"exec"))return!0;if(r.isString(H))return!1;throw Error("non exhaustive match")}n.isCustomPattern=X;function J(te){return r.isString(te)&&te.length===1?te.charCodeAt(0):!1}n.isShortPattern=J,n.LineTerminatorOptimizedTester={test:function(te){for(var H=te.length,U=this.lastIndex;U<H;U++){var V=te.charCodeAt(U);if(V===10)return this.lastIndex=U+1,!0;if(V===13)return te.charCodeAt(U+1)===10?this.lastIndex=U+2:this.lastIndex=U+1,!0}return!1},lastIndex:0};function j(te,H){if(r.has(te,"LINE_BREAKS"))return!1;if(r.isRegExp(te.PATTERN)){try{o.canMatchCharCode(H,te.PATTERN)}catch(U){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:U.message}}return!1}else{if(r.isString(te.PATTERN))return!1;if(X(te))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function ne(te,H){if(H.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+te.name+`> Token Type
`)+("	 Root cause: "+H.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(H.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+te.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=ne;function de(te){var H=r.map(te,function(U){return r.isString(U)&&U.length>0?U.charCodeAt(0):U});return H}function xe(te,H,U){te[H]===void 0?te[H]=[U]:te[H].push(U)}n.minOptimizationVal=256;var re=[];function oe(te){return te<n.minOptimizationVal?te:re[te]}n.charCodeToOptimizedIndex=oe;function we(){if(r.isEmpty(re)){re=new Array(65536);for(var te=0;te<65536;te++)re[te]=te>255?255+~~(te/255):te}}}),kr=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=ft();function t(v,f){var u=v.tokenTypeIdx;return u===f.tokenTypeIdx?!0:f.isParent===!0&&f.categoryMatchesMap[u]===!0}n.tokenStructuredMatcher=t;function i(v,f){return v.tokenTypeIdx===f.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(v){var f=o(v);a(f),c(f),l(f),e.forEach(f,function(u){u.isParent=u.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(v){for(var f=e.cloneArr(v),u=v,_=!0;_;){u=e.compact(e.flatten(e.map(u,function(y){return y.CATEGORIES})));var b=e.difference(u,f);f=f.concat(b),e.isEmpty(b)?_=!1:u=b}return f}n.expandCategories=o;function a(v){e.forEach(v,function(f){d(f)||(n.tokenIdxToClass[n.tokenShortNameIdx]=f,f.tokenTypeIdx=n.tokenShortNameIdx++),h(f)&&!e.isArray(f.CATEGORIES)&&(f.CATEGORIES=[f.CATEGORIES]),h(f)||(f.CATEGORIES=[]),m(f)||(f.categoryMatches=[]),p(f)||(f.categoryMatchesMap={})})}n.assignTokenDefaultProps=a;function l(v){e.forEach(v,function(f){f.categoryMatches=[],e.forEach(f.categoryMatchesMap,function(u,_){f.categoryMatches.push(n.tokenIdxToClass[_].tokenTypeIdx)})})}n.assignCategoriesTokensProp=l;function c(v){e.forEach(v,function(f){s([],f)})}n.assignCategoriesMapProp=c;function s(v,f){e.forEach(v,function(u){f.categoryMatchesMap[u.tokenTypeIdx]=!0}),e.forEach(f.CATEGORIES,function(u){var _=v.concat(f);e.contains(_,u)||s(_,u)})}n.singleAssignCategoriesToksMap=s;function d(v){return e.has(v,"tokenTypeIdx")}n.hasShortKeyProperty=d;function h(v){return e.has(v,"CATEGORIES")}n.hasCategoriesProperty=h;function m(v){return e.has(v,"categoryMatches")}n.hasExtendingTokensTypesProperty=m;function p(v){return e.has(v,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=p;function x(v){return e.has(v,"tokenTypeIdx")}n.isTokenType=x}),vu=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),Ho=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=xu(),t=ft(),i=kr(),r=vu(),o=Qs();(function(c){c[c.MISSING_PATTERN=0]="MISSING_PATTERN",c[c.INVALID_PATTERN=1]="INVALID_PATTERN",c[c.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",c[c.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",c[c.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",c[c.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",c[c.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",c[c.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",c[c.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",c[c.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",c[c.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",c[c.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",c[c.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",c[c.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",c[c.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",c[c.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",c[c.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var a={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(a);var l=function(){function c(s,d){var h=this;if(d===void 0&&(d=a),this.lexerDefinition=s,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof d=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(a,d);var m=this.config.traceInitPerf;m===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof m=="number"&&(this.traceInitMaxIdent=m,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var p,x=!0;h.TRACE_INIT("Lexer Config handling",function(){if(h.config.lineTerminatorsPattern===a.lineTerminatorsPattern)h.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(h.config.lineTerminatorCharacters===a.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(d.safeMode&&d.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');h.trackStartLines=/full|onlyStart/i.test(h.config.positionTracking),h.trackEndLines=/full/i.test(h.config.positionTracking),t.isArray(s)?(p={modes:{}},p.modes[e.DEFAULT_MODE]=t.cloneArr(s),p[e.DEFAULT_MODE]=e.DEFAULT_MODE):(x=!1,p=t.cloneObj(s))}),h.config.skipValidations===!1&&(h.TRACE_INIT("performRuntimeChecks",function(){h.lexerDefinitionErrors=h.lexerDefinitionErrors.concat(e.performRuntimeChecks(p,h.trackStartLines,h.config.lineTerminatorCharacters))}),h.TRACE_INIT("performWarningRuntimeChecks",function(){h.lexerDefinitionWarning=h.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(p,h.trackStartLines,h.config.lineTerminatorCharacters))})),p.modes=p.modes?p.modes:{},t.forEach(p.modes,function(_,b){p.modes[b]=t.reject(_,function(y){return t.isUndefined(y)})});var v=t.keys(p.modes);if(t.forEach(p.modes,function(_,b){h.TRACE_INIT("Mode: <"+b+"> processing",function(){if(h.modes.push(b),h.config.skipValidations===!1&&h.TRACE_INIT("validatePatterns",function(){h.lexerDefinitionErrors=h.lexerDefinitionErrors.concat(e.validatePatterns(_,v))}),t.isEmpty(h.lexerDefinitionErrors)){i.augmentTokenTypes(_);var y;h.TRACE_INIT("analyzeTokenTypes",function(){y=e.analyzeTokenTypes(_,{lineTerminatorCharacters:h.config.lineTerminatorCharacters,positionTracking:d.positionTracking,ensureOptimizations:d.ensureOptimizations,safeMode:d.safeMode,tracer:h.TRACE_INIT.bind(h)})}),h.patternIdxToConfig[b]=y.patternIdxToConfig,h.charCodeToPatternIdxToConfig[b]=y.charCodeToPatternIdxToConfig,h.emptyGroups=t.merge(h.emptyGroups,y.emptyGroups),h.hasCustom=y.hasCustom||h.hasCustom,h.canModeBeOptimized[b]=y.canBeOptimized}})}),h.defaultMode=p.defaultMode,!t.isEmpty(h.lexerDefinitionErrors)&&!h.config.deferDefinitionErrorsHandling){var f=t.map(h.lexerDefinitionErrors,function(_){return _.message}),u=f.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+u)}t.forEach(h.lexerDefinitionWarning,function(_){t.PRINT_WARNING(_.message)}),h.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(h.chopInput=t.IDENTITY,h.match=h.matchWithTest):(h.updateLastIndex=t.NOOP,h.match=h.matchWithExec),x&&(h.handleModes=t.NOOP),h.trackStartLines===!1&&(h.computeNewColumn=t.IDENTITY),h.trackEndLines===!1&&(h.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(h.config.positionTracking))h.createTokenInstance=h.createFullToken;else if(/onlyStart/i.test(h.config.positionTracking))h.createTokenInstance=h.createStartOnlyToken;else if(/onlyOffset/i.test(h.config.positionTracking))h.createTokenInstance=h.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+h.config.positionTracking+'"');h.hasCustom?(h.addToken=h.addTokenUsingPush,h.handlePayload=h.handlePayloadWithCustom):(h.addToken=h.addTokenUsingMemberAccess,h.handlePayload=h.handlePayloadNoCustom)}),h.TRACE_INIT("Failed Optimization Warnings",function(){var _=t.reduce(h.canModeBeOptimized,function(b,y,R){return y===!1&&b.push(R),b},[]);if(d.ensureOptimizations&&!t.isEmpty(_))throw Error("Lexer Modes: < "+_.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),h.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),h.TRACE_INIT("toFastProperties",function(){t.toFastProperties(h)})})}return c.prototype.tokenize=function(s,d){if(d===void 0&&(d=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var h=t.map(this.lexerDefinitionErrors,function(x){return x.message}),m=h.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+m)}var p=this.tokenizeInternal(s,d);return p},c.prototype.tokenizeInternal=function(s,d){var h=this,m,p,x,v,f,u,_,b,y,R,A,P,k,S,T=s,w=T.length,C=0,L=0,O=this.hasCustom?0:Math.floor(s.length/10),G=new Array(O),X=[],J=this.trackStartLines?1:void 0,j=this.trackStartLines?1:void 0,ne=e.cloneEmptyGroups(this.emptyGroups),de=this.trackStartLines,xe=this.config.lineTerminatorsPattern,re=0,oe=[],we=[],te=[],H=[];Object.freeze(H);var U=void 0;function V(){return oe}function K(F){var q=e.charCodeToOptimizedIndex(F),Y=we[q];return Y===void 0?H:Y}var Q=function(F){if(te.length===1&&F.tokenType.PUSH_MODE===void 0){var q=h.config.errorMessageProvider.buildUnableToPopLexerModeMessage(F);X.push({offset:F.startOffset,line:F.startLine!==void 0?F.startLine:void 0,column:F.startColumn!==void 0?F.startColumn:void 0,length:F.image.length,message:q})}else{te.pop();var Y=t.last(te);oe=h.patternIdxToConfig[Y],we=h.charCodeToPatternIdxToConfig[Y],re=oe.length;var le=h.canModeBeOptimized[Y]&&h.config.safeMode===!1;we&&le?U=K:U=V}};function ue(F){te.push(F),we=this.charCodeToPatternIdxToConfig[F],oe=this.patternIdxToConfig[F],re=oe.length,re=oe.length;var q=this.canModeBeOptimized[F]&&this.config.safeMode===!1;we&&q?U=K:U=V}ue.call(this,d);for(var _e;C<w;){f=null;var Te=T.charCodeAt(C),He=U(Te),B=He.length;for(m=0;m<B;m++){_e=He[m];var Fe=_e.pattern;u=null;var $=_e.short;if($!==!1?Te===$&&(f=Fe):_e.isCustom===!0?(S=Fe.exec(T,C,G,ne),S!==null?(f=S[0],S.payload!==void 0&&(u=S.payload)):f=null):(this.updateLastIndex(Fe,C),f=this.match(Fe,s,C)),f!==null){if(v=_e.longerAlt,v!==void 0){var he=oe[v],ee=he.pattern;_=null,he.isCustom===!0?(S=ee.exec(T,C,G,ne),S!==null?(x=S[0],S.payload!==void 0&&(_=S.payload)):x=null):(this.updateLastIndex(ee,C),x=this.match(ee,s,C)),x&&x.length>f.length&&(f=x,u=_,_e=he)}break}}if(f!==null){if(b=f.length,y=_e.group,y!==void 0&&(R=_e.tokenTypeIdx,A=this.createTokenInstance(f,C,R,_e.tokenType,J,j,b),this.handlePayload(A,u),y===!1?L=this.addToken(G,L,A):ne[y].push(A)),s=this.chopInput(s,b),C=C+b,j=this.computeNewColumn(j,b),de===!0&&_e.canLineTerminator===!0){var ye=0,Se=void 0,Ue=void 0;xe.lastIndex=0;do Se=xe.test(f),Se===!0&&(Ue=xe.lastIndex-1,ye++);while(Se===!0);ye!==0&&(J=J+ye,j=b-Ue,this.updateTokenEndLineColumnLocation(A,y,Ue,ye,J,j,b))}this.handleModes(_e,Q,ue,A)}else{for(var E=C,g=J,M=j,D=!1;!D&&C<w;)for(T.charCodeAt(C),s=this.chopInput(s,1),C++,p=0;p<re;p++){var N=oe[p],Fe=N.pattern,$=N.short;if($!==!1?T.charCodeAt(C)===$&&(D=!0):N.isCustom===!0?D=Fe.exec(T,C,G,ne)!==null:(this.updateLastIndex(Fe,C),D=Fe.exec(s)!==null),D===!0)break}P=C-E,k=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(T,E,P,g,M),X.push({offset:E,line:g,column:M,length:P,message:k})}}return this.hasCustom||(G.length=L),{tokens:G,groups:ne,errors:X}},c.prototype.handleModes=function(s,d,h,m){if(s.pop===!0){var p=s.push;d(m),p!==void 0&&h.call(this,p)}else s.push!==void 0&&h.call(this,s.push)},c.prototype.chopInput=function(s,d){return s.substring(d)},c.prototype.updateLastIndex=function(s,d){s.lastIndex=d},c.prototype.updateTokenEndLineColumnLocation=function(s,d,h,m,p,x,v){var f,u;d!==void 0&&(f=h===v-1,u=f?-1:0,m===1&&f===!0||(s.endLine=p+u,s.endColumn=x-1+-u))},c.prototype.computeNewColumn=function(s,d){return s+d},c.prototype.createTokenInstance=function(){for(var s=[],d=0;d<arguments.length;d++)s[d]=arguments[d];return null},c.prototype.createOffsetOnlyToken=function(s,d,h,m){return{image:s,startOffset:d,tokenTypeIdx:h,tokenType:m}},c.prototype.createStartOnlyToken=function(s,d,h,m,p,x){return{image:s,startOffset:d,startLine:p,startColumn:x,tokenTypeIdx:h,tokenType:m}},c.prototype.createFullToken=function(s,d,h,m,p,x,v){return{image:s,startOffset:d,endOffset:d+v-1,startLine:p,endLine:p,startColumn:x,endColumn:x+v-1,tokenTypeIdx:h,tokenType:m}},c.prototype.addToken=function(s,d,h){return 666},c.prototype.addTokenUsingPush=function(s,d,h){return s.push(h),d},c.prototype.addTokenUsingMemberAccess=function(s,d,h){return s[d]=h,d++,d},c.prototype.handlePayload=function(s,d){},c.prototype.handlePayloadNoCustom=function(s,d){},c.prototype.handlePayloadWithCustom=function(s,d){d!==null&&(s.payload=d)},c.prototype.match=function(s,d,h){return null},c.prototype.matchWithTest=function(s,d,h){var m=s.test(d);return m===!0?d.substring(h,s.lastIndex):null},c.prototype.matchWithExec=function(s,d){var h=s.exec(d);return h!==null?h[0]:h},c.prototype.TRACE_INIT=function(s,d){if(this.traceInitPerf===!0){this.traceInitIndent++;var h=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(h+"--> <"+s+">");var m=t.timer(d),p=m.time,x=m.value,v=p>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&v(h+"<-- <"+s+"> time: "+p+"ms"),this.traceInitIndent--,x}else return d()},c.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",c.NA=/NOT_APPLICABLE/,c}();n.Lexer=l}),Ei=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=ft(),t=Ho(),i=kr();function r(y){return a(y)?y.LABEL:y.name}n.tokenLabel=r;function o(y){return y.name}n.tokenName=o;function a(y){return e.isString(y.LABEL)&&y.LABEL!==""}n.hasTokenLabel=a;var l="parent",c="categories",s="label",d="group",h="push_mode",m="pop_mode",p="longer_alt",x="line_breaks",v="start_chars_hint";function f(y){return u(y)}n.createToken=f;function u(y){var R=y.pattern,A={};if(A.name=y.name,e.isUndefined(R)||(A.PATTERN=R),e.has(y,l))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(y,c)&&(A.CATEGORIES=y[c]),i.augmentTokenTypes([A]),e.has(y,s)&&(A.LABEL=y[s]),e.has(y,d)&&(A.GROUP=y[d]),e.has(y,m)&&(A.POP_MODE=y[m]),e.has(y,h)&&(A.PUSH_MODE=y[h]),e.has(y,p)&&(A.LONGER_ALT=y[p]),e.has(y,x)&&(A.LINE_BREAKS=y[x]),e.has(y,v)&&(A.START_CHARS_HINT=y[v]),A}n.EOF=f({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function _(y,R,A,P,k,S,T,w){return{image:R,startOffset:A,endOffset:P,startLine:k,endLine:S,startColumn:T,endColumn:w,tokenTypeIdx:y.tokenTypeIdx,tokenType:y}}n.createTokenInstance=_;function b(y,R){return i.tokenStructuredMatcher(y,R)}n.tokenMatcher=b}),sn=it(n=>{var e=n&&n.__extends||function(){var u=function(_,b){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,R){y.__proto__=R}||function(y,R){for(var A in R)Object.prototype.hasOwnProperty.call(R,A)&&(y[A]=R[A])},u(_,b)};return function(_,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");u(_,b);function y(){this.constructor=_}_.prototype=b===null?Object.create(b):(y.prototype=b.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=ft(),i=Ei(),r=function(){function u(_){this._definition=_}return Object.defineProperty(u.prototype,"definition",{get:function(){return this._definition},set:function(_){this._definition=_},enumerable:!1,configurable:!0}),u.prototype.accept=function(_){_.visit(this),t.forEach(this.definition,function(b){b.accept(_)})},u}();n.AbstractProduction=r;var o=function(u){e(_,u);function _(b){var y=u.call(this,[])||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(b){},enumerable:!1,configurable:!0}),_.prototype.accept=function(b){b.visit(this)},_}(r);n.NonTerminal=o;var a=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.orgText="",t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Rule=a;var l=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.ignoreAmbiguities=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Alternative=l;var c=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Option=c;var s=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatory=s;var d=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionMandatoryWithSeparator=d;var h=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.Repetition=h;var m=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.idx=1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return _}(r);n.RepetitionWithSeparator=m;var p=function(u){e(_,u);function _(b){var y=u.call(this,b.definition)||this;return y.idx=1,y.ignoreAmbiguities=!1,y.hasPredicates=!1,t.assign(y,t.pick(b,function(R){return R!==void 0})),y}return Object.defineProperty(_.prototype,"definition",{get:function(){return this._definition},set:function(b){this._definition=b},enumerable:!1,configurable:!0}),_}(r);n.Alternation=p;var x=function(){function u(_){this.idx=1,t.assign(this,t.pick(_,function(b){return b!==void 0}))}return u.prototype.accept=function(_){_.visit(this)},u}();n.Terminal=x;function v(u){return t.map(u,f)}n.serializeGrammar=v;function f(u){function _(R){return t.map(R,f)}if(u instanceof o)return{type:"NonTerminal",name:u.nonTerminalName,idx:u.idx};if(u instanceof l)return{type:"Alternative",definition:_(u.definition)};if(u instanceof c)return{type:"Option",idx:u.idx,definition:_(u.definition)};if(u instanceof s)return{type:"RepetitionMandatory",idx:u.idx,definition:_(u.definition)};if(u instanceof d)return{type:"RepetitionMandatoryWithSeparator",idx:u.idx,separator:f(new x({terminalType:u.separator})),definition:_(u.definition)};if(u instanceof m)return{type:"RepetitionWithSeparator",idx:u.idx,separator:f(new x({terminalType:u.separator})),definition:_(u.definition)};if(u instanceof h)return{type:"Repetition",idx:u.idx,definition:_(u.definition)};if(u instanceof p)return{type:"Alternation",idx:u.idx,definition:_(u.definition)};if(u instanceof x){var b={type:"Terminal",name:u.terminalType.name,label:i.tokenLabel(u.terminalType),idx:u.idx},y=u.terminalType.PATTERN;return u.terminalType.PATTERN&&(b.pattern=t.isRegExp(y)?y.source:y),b}else{if(u instanceof a)return{type:"Rule",name:u.name,orgText:u.orgText,definition:_(u.definition)};throw Error("non exhaustive match")}}n.serializeProduction=f}),el=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=ft(),t=sn(),i=function(){function o(){}return o.prototype.walk=function(a,l){var c=this;l===void 0&&(l=[]),e.forEach(a.definition,function(s,d){var h=e.drop(a.definition,d+1);if(s instanceof t.NonTerminal)c.walkProdRef(s,h,l);else if(s instanceof t.Terminal)c.walkTerminal(s,h,l);else if(s instanceof t.Alternative)c.walkFlat(s,h,l);else if(s instanceof t.Option)c.walkOption(s,h,l);else if(s instanceof t.RepetitionMandatory)c.walkAtLeastOne(s,h,l);else if(s instanceof t.RepetitionMandatoryWithSeparator)c.walkAtLeastOneSep(s,h,l);else if(s instanceof t.RepetitionWithSeparator)c.walkManySep(s,h,l);else if(s instanceof t.Repetition)c.walkMany(s,h,l);else if(s instanceof t.Alternation)c.walkOr(s,h,l);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(a,l,c){},o.prototype.walkProdRef=function(a,l,c){},o.prototype.walkFlat=function(a,l,c){var s=l.concat(c);this.walk(a,s)},o.prototype.walkOption=function(a,l,c){var s=l.concat(c);this.walk(a,s)},o.prototype.walkAtLeastOne=function(a,l,c){var s=[new t.Option({definition:a.definition})].concat(l,c);this.walk(a,s)},o.prototype.walkAtLeastOneSep=function(a,l,c){var s=r(a,l,c);this.walk(a,s)},o.prototype.walkMany=function(a,l,c){var s=[new t.Option({definition:a.definition})].concat(l,c);this.walk(a,s)},o.prototype.walkManySep=function(a,l,c){var s=r(a,l,c);this.walk(a,s)},o.prototype.walkOr=function(a,l,c){var s=this,d=l.concat(c);e.forEach(a.definition,function(h){var m=new t.Alternative({definition:[h]});s.walk(m,d)})},o}();n.RestWalker=i;function r(o,a,l){var c=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],s=c.concat(a,l);return s}}),Br=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=sn(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),Wo=it(n=>{var e=n&&n.__extends||function(){var m=function(p,x){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,f){v.__proto__=f}||function(v,f){for(var u in f)Object.prototype.hasOwnProperty.call(f,u)&&(v[u]=f[u])},m(p,x)};return function(p,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");m(p,x);function v(){this.constructor=p}p.prototype=x===null?Object.create(x):(v.prototype=x.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=ft(),i=sn(),r=Br();function o(m){return m instanceof i.Alternative||m instanceof i.Option||m instanceof i.Repetition||m instanceof i.RepetitionMandatory||m instanceof i.RepetitionMandatoryWithSeparator||m instanceof i.RepetitionWithSeparator||m instanceof i.Terminal||m instanceof i.Rule}n.isSequenceProd=o;function a(m,p){p===void 0&&(p=[]);var x=m instanceof i.Option||m instanceof i.Repetition||m instanceof i.RepetitionWithSeparator;return x?!0:m instanceof i.Alternation?t.some(m.definition,function(v){return a(v,p)}):m instanceof i.NonTerminal&&t.contains(p,m)?!1:m instanceof i.AbstractProduction?(m instanceof i.NonTerminal&&p.push(m),t.every(m.definition,function(v){return a(v,p)})):!1}n.isOptionalProd=a;function l(m){return m instanceof i.Alternation}n.isBranchingProd=l;function c(m){if(m instanceof i.NonTerminal)return"SUBRULE";if(m instanceof i.Option)return"OPTION";if(m instanceof i.Alternation)return"OR";if(m instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(m instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(m instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(m instanceof i.Repetition)return"MANY";if(m instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=c;var s=function(m){e(p,m);function p(){var x=m!==null&&m.apply(this,arguments)||this;return x.separator="-",x.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},x}return p.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},p.prototype.visitTerminal=function(x){var v=x.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(x)},p.prototype.visitNonTerminal=function(x){var v=x.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(x)},p.prototype.visitOption=function(x){this.dslMethods.option.push(x)},p.prototype.visitRepetitionWithSeparator=function(x){this.dslMethods.repetitionWithSeparator.push(x)},p.prototype.visitRepetitionMandatory=function(x){this.dslMethods.repetitionMandatory.push(x)},p.prototype.visitRepetitionMandatoryWithSeparator=function(x){this.dslMethods.repetitionMandatoryWithSeparator.push(x)},p.prototype.visitRepetition=function(x){this.dslMethods.repetition.push(x)},p.prototype.visitAlternation=function(x){this.dslMethods.alternation.push(x)},p}(r.GAstVisitor);n.DslMethodsCollectorVisitor=s;var d=new s;function h(m){d.reset(),m.accept(d);var p=d.dslMethods;return d.reset(),p}n.collectMethods=h}),_u=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=ft(),t=sn(),i=Wo();function r(c){if(c instanceof t.NonTerminal)return r(c.referencedRule);if(c instanceof t.Terminal)return l(c);if(i.isSequenceProd(c))return o(c);if(i.isBranchingProd(c))return a(c);throw Error("non exhaustive match")}n.first=r;function o(c){for(var s=[],d=c.definition,h=0,m=d.length>h,p,x=!0;m&&x;)p=d[h],x=i.isOptionalProd(p),s=s.concat(r(p)),h=h+1,m=d.length>h;return e.uniq(s)}n.firstForSequence=o;function a(c){var s=e.map(c.definition,function(d){return r(d)});return e.uniq(e.flatten(s))}n.firstForBranching=a;function l(c){return[c.terminalType]}n.firstForTerminal=l}),yu=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),Gx=it(n=>{var e=n&&n.__extends||function(){var h=function(m,p){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(x,v){x.__proto__=v}||function(x,v){for(var f in v)Object.prototype.hasOwnProperty.call(v,f)&&(x[f]=v[f])},h(m,p)};return function(m,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");h(m,p);function x(){this.constructor=m}m.prototype=p===null?Object.create(p):(x.prototype=p.prototype,new x)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=el(),i=_u(),r=ft(),o=yu(),a=sn(),l=function(h){e(m,h);function m(p){var x=h.call(this)||this;return x.topProd=p,x.follows={},x}return m.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},m.prototype.walkTerminal=function(p,x,v){},m.prototype.walkProdRef=function(p,x,v){var f=s(p.referencedRule,p.idx)+this.topProd.name,u=x.concat(v),_=new a.Alternative({definition:u}),b=i.first(_);this.follows[f]=b},m}(t.RestWalker);n.ResyncFollowsWalker=l;function c(h){var m={};return r.forEach(h,function(p){var x=new l(p).startWalking();r.assign(m,x)}),m}n.computeAllProdsFollows=c;function s(h,m){return h.name+m+o.IN}n.buildBetweenProdsFollowPrefix=s;function d(h){var m=h.terminalType.name;return m+h.idx+o.IN}n.buildInProdFollowPrefix=d}),Xo=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=Ei(),t=ft(),i=ft(),r=sn(),o=Wo();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(a){var l=a.expected,c=a.actual;a.previous,a.ruleName;var s=e.hasTokenLabel(l),d=s?"--> "+e.tokenLabel(l)+" <--":"token of type --> "+l.name+" <--",h="Expecting "+d+" but found --> '"+c.image+"' <--";return h},buildNotAllInputParsedMessage:function(a){var l=a.firstRedundant;return a.ruleName,"Redundant input, expecting EOF but found: "+l.image},buildNoViableAltMessage:function(a){var l=a.expectedPathsPerAlt,c=a.actual;a.previous;var s=a.customUserDescription;a.ruleName;var d="Expecting: ",h=i.first(c).image,m=`
but found: '`+h+"'";if(s)return d+s+m;var p=i.reduce(l,function(u,_){return u.concat(_)},[]),x=i.map(p,function(u){return"["+i.map(u,function(_){return e.tokenLabel(_)}).join(", ")+"]"}),v=i.map(x,function(u,_){return"  "+(_+1)+". "+u}),f=`one of these possible Token sequences:
`+v.join(`
`);return d+f+m},buildEarlyExitMessage:function(a){var l=a.expectedIterationPaths,c=a.actual,s=a.customUserDescription;a.ruleName;var d="Expecting: ",h=i.first(c).image,m=`
but found: '`+h+"'";if(s)return d+s+m;var p=i.map(l,function(v){return"["+i.map(v,function(f){return e.tokenLabel(f)}).join(",")+"]"}),x=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+p.join(" ,")+">");return d+x+m}},Object.freeze(n.defaultParserErrorProvider),n.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(a,l){var c="Invalid grammar, reference to a rule which is not defined: ->"+l.nonTerminalName+`<-
inside top level rule: ->`+a.name+"<-";return c}},n.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(a,l){function c(f){return f instanceof r.Terminal?f.terminalType.name:f instanceof r.NonTerminal?f.nonTerminalName:""}var s=a.name,d=i.first(l),h=d.idx,m=o.getProductionDslName(d),p=c(d),x=h>0,v="->"+m+(x?h:"")+"<- "+(p?"with argument: ->"+p+"<-":"")+`
                  appears more than once (`+l.length+" times) in the top level rule: ->"+s+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return v=v.replace(/[ \t]+/g," "),v=v.replace(/\s\s+/g,`
`),v},buildNamespaceConflictError:function(a){var l=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+a.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return l},buildAlternationPrefixAmbiguityError:function(a){var l=i.map(a.prefixPath,function(d){return e.tokenLabel(d)}).join(", "),c=a.alternation.idx===0?"":a.alternation.idx,s="Ambiguous alternatives: <"+a.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+c+"> inside <"+a.topLevelRule.name+`> Rule,
`)+("<"+l+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return s},buildAlternationAmbiguityError:function(a){var l=i.map(a.prefixPath,function(d){return e.tokenLabel(d)}).join(", "),c=a.alternation.idx===0?"":a.alternation.idx,s="Ambiguous Alternatives Detected: <"+a.ambiguityIndices.join(" ,")+"> in <OR"+c+">"+(" inside <"+a.topLevelRule.name+`> Rule,
`)+("<"+l+`> may appears as a prefix path in all these alternatives.
`);return s=s+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,s},buildEmptyRepetitionError:function(a){var l=o.getProductionDslName(a.repetition);a.repetition.idx!==0&&(l+=a.repetition.idx);var c="The repetition <"+l+"> within Rule <"+a.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return c},buildTokenNameError:function(a){return"deprecated"},buildEmptyAlternationError:function(a){var l="Ambiguous empty alternative: <"+(a.emptyChoiceIdx+1)+">"+(" in <OR"+a.alternation.idx+"> inside <"+a.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return l},buildTooManyAlternativesError:function(a){var l=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+a.alternation.idx+"> inside <"+a.topLevelRule.name+`> Rule.
 has `+(a.alternation.definition.length+1)+" alternatives.");return l},buildLeftRecursionError:function(a){var l=a.topLevelRule.name,c=t.map(a.leftRecursionPath,function(h){return h.name}),s=l+" --> "+c.concat([l]).join(" --> "),d=`Left Recursion found in grammar.
`+("rule: <"+l+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+s+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return d},buildInvalidRuleNameError:function(a){return"deprecated"},buildDuplicateRuleNameError:function(a){var l;a.topLevelRule instanceof r.Rule?l=a.topLevelRule.name:l=a.topLevelRule;var c="Duplicate definition, rule: ->"+l+"<- is already defined in the grammar: ->"+a.grammarName+"<-";return c}}}),Hx=it(n=>{var e=n&&n.__extends||function(){var l=function(c,s){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&(d[m]=h[m])},l(c,s)};return function(c,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");l(c,s);function d(){this.constructor=c}c.prototype=s===null?Object.create(s):(d.prototype=s.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=pn(),i=ft(),r=Br();function o(l,c){var s=new a(l,c);return s.resolveRefs(),s.errors}n.resolveGrammar=o;var a=function(l){e(c,l);function c(s,d){var h=l.call(this)||this;return h.nameToTopRule=s,h.errMsgProvider=d,h.errors=[],h}return c.prototype.resolveRefs=function(){var s=this;i.forEach(i.values(this.nameToTopRule),function(d){s.currTopLevel=d,d.accept(s)})},c.prototype.visitNonTerminal=function(s){var d=this.nameToTopRule[s.nonTerminalName];if(d)s.referencedRule=d;else{var h=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,s);this.errors.push({message:h,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:s.nonTerminalName})}},c}(r.GAstVisitor);n.GastRefResolverVisitor=a}),jo=it(n=>{var e=n&&n.__extends||function(){var f=function(u,_){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(b[R]=y[R])},f(u,_)};return function(u,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");f(u,_);function b(){this.constructor=u}u.prototype=_===null?Object.create(_):(b.prototype=_.prototype,new b)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=el(),i=ft(),r=_u(),o=sn(),a=function(f){e(u,f);function u(_,b){var y=f.call(this)||this;return y.topProd=_,y.path=b,y.possibleTokTypes=[],y.nextProductionName="",y.nextProductionOccurrence=0,y.found=!1,y.isAtEndOfPath=!1,y}return u.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},u.prototype.walk=function(_,b){b===void 0&&(b=[]),this.found||f.prototype.walk.call(this,_,b)},u.prototype.walkProdRef=function(_,b,y){if(_.referencedRule.name===this.nextProductionName&&_.idx===this.nextProductionOccurrence){var R=b.concat(y);this.updateExpectedNext(),this.walk(_.referencedRule,R)}},u.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},u}(t.RestWalker);n.AbstractNextPossibleTokensWalker=a;var l=function(f){e(u,f);function u(_,b){var y=f.call(this,_,b)||this;return y.path=b,y.nextTerminalName="",y.nextTerminalOccurrence=0,y.nextTerminalName=y.path.lastTok.name,y.nextTerminalOccurrence=y.path.lastTokOccurrence,y}return u.prototype.walkTerminal=function(_,b,y){if(this.isAtEndOfPath&&_.terminalType.name===this.nextTerminalName&&_.idx===this.nextTerminalOccurrence&&!this.found){var R=b.concat(y),A=new o.Alternative({definition:R});this.possibleTokTypes=r.first(A),this.found=!0}},u}(a);n.NextAfterTokenWalker=l;var c=function(f){e(u,f);function u(_,b){var y=f.call(this)||this;return y.topRule=_,y.occurrence=b,y.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},y}return u.prototype.startWalking=function(){return this.walk(this.topRule),this.result},u}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=c;var s=function(f){e(u,f);function u(){return f!==null&&f.apply(this,arguments)||this}return u.prototype.walkMany=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkMany.call(this,_,b,y)},u}(c);n.NextTerminalAfterManyWalker=s;var d=function(f){e(u,f);function u(){return f!==null&&f.apply(this,arguments)||this}return u.prototype.walkManySep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkManySep.call(this,_,b,y)},u}(c);n.NextTerminalAfterManySepWalker=d;var h=function(f){e(u,f);function u(){return f!==null&&f.apply(this,arguments)||this}return u.prototype.walkAtLeastOne=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOne.call(this,_,b,y)},u}(c);n.NextTerminalAfterAtLeastOneWalker=h;var m=function(f){e(u,f);function u(){return f!==null&&f.apply(this,arguments)||this}return u.prototype.walkAtLeastOneSep=function(_,b,y){if(_.idx===this.occurrence){var R=i.first(b.concat(y));this.result.isEndOfRule=R===void 0,R instanceof o.Terminal&&(this.result.token=R.terminalType,this.result.occurrence=R.idx)}else f.prototype.walkAtLeastOneSep.call(this,_,b,y)},u}(c);n.NextTerminalAfterAtLeastOneSepWalker=m;function p(f,u,_){_===void 0&&(_=[]),_=i.cloneArr(_);var b=[],y=0;function R(S){return S.concat(i.drop(f,y+1))}function A(S){var T=p(R(S),u,_);return b.concat(T)}for(;_.length<u&&y<f.length;){var P=f[y];if(P instanceof o.Alternative||P instanceof o.NonTerminal)return A(P.definition);if(P instanceof o.Option)b=A(P.definition);else if(P instanceof o.RepetitionMandatory){var k=P.definition.concat([new o.Repetition({definition:P.definition})]);return A(k)}else if(P instanceof o.RepetitionMandatoryWithSeparator){var k=[new o.Alternative({definition:P.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:P.separator})].concat(P.definition)})];return A(k)}else if(P instanceof o.RepetitionWithSeparator){var k=P.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:P.separator})].concat(P.definition)})]);b=A(k)}else if(P instanceof o.Repetition){var k=P.definition.concat([new o.Repetition({definition:P.definition})]);b=A(k)}else{if(P instanceof o.Alternation)return i.forEach(P.definition,function(S){i.isEmpty(S.definition)===!1&&(b=A(S.definition))}),b;if(P instanceof o.Terminal)_.push(P.terminalType);else throw Error("non exhaustive match")}y++}return b.push({partialPath:_,suffixDef:i.drop(f,y)}),b}n.possiblePathsFrom=p;function x(f,u,_,b){var y="EXIT_NONE_TERMINAL",R=[y],A="EXIT_ALTERNATIVE",P=!1,k=u.length,S=k-b-1,T=[],w=[];for(w.push({idx:-1,def:f,ruleStack:[],occurrenceStack:[]});!i.isEmpty(w);){var C=w.pop();if(C===A){P&&i.last(w).idx<=S&&w.pop();continue}var L=C.def,O=C.idx,G=C.ruleStack,X=C.occurrenceStack;if(!i.isEmpty(L)){var J=L[0];if(J===y){var j={idx:O,def:i.drop(L),ruleStack:i.dropRight(G),occurrenceStack:i.dropRight(X)};w.push(j)}else if(J instanceof o.Terminal)if(O<k-1){var ne=O+1,de=u[ne];if(_(de,J.terminalType)){var j={idx:ne,def:i.drop(L),ruleStack:G,occurrenceStack:X};w.push(j)}}else if(O===k-1)T.push({nextTokenType:J.terminalType,nextTokenOccurrence:J.idx,ruleStack:G,occurrenceStack:X}),P=!0;else throw Error("non exhaustive match");else if(J instanceof o.NonTerminal){var xe=i.cloneArr(G);xe.push(J.nonTerminalName);var re=i.cloneArr(X);re.push(J.idx);var j={idx:O,def:J.definition.concat(R,i.drop(L)),ruleStack:xe,occurrenceStack:re};w.push(j)}else if(J instanceof o.Option){var oe={idx:O,def:i.drop(L),ruleStack:G,occurrenceStack:X};w.push(oe),w.push(A);var we={idx:O,def:J.definition.concat(i.drop(L)),ruleStack:G,occurrenceStack:X};w.push(we)}else if(J instanceof o.RepetitionMandatory){var te=new o.Repetition({definition:J.definition,idx:J.idx}),H=J.definition.concat([te],i.drop(L)),j={idx:O,def:H,ruleStack:G,occurrenceStack:X};w.push(j)}else if(J instanceof o.RepetitionMandatoryWithSeparator){var U=new o.Terminal({terminalType:J.separator}),te=new o.Repetition({definition:[U].concat(J.definition),idx:J.idx}),H=J.definition.concat([te],i.drop(L)),j={idx:O,def:H,ruleStack:G,occurrenceStack:X};w.push(j)}else if(J instanceof o.RepetitionWithSeparator){var oe={idx:O,def:i.drop(L),ruleStack:G,occurrenceStack:X};w.push(oe),w.push(A);var U=new o.Terminal({terminalType:J.separator}),V=new o.Repetition({definition:[U].concat(J.definition),idx:J.idx}),H=J.definition.concat([V],i.drop(L)),we={idx:O,def:H,ruleStack:G,occurrenceStack:X};w.push(we)}else if(J instanceof o.Repetition){var oe={idx:O,def:i.drop(L),ruleStack:G,occurrenceStack:X};w.push(oe),w.push(A);var V=new o.Repetition({definition:J.definition,idx:J.idx}),H=J.definition.concat([V],i.drop(L)),we={idx:O,def:H,ruleStack:G,occurrenceStack:X};w.push(we)}else if(J instanceof o.Alternation)for(var K=J.definition.length-1;K>=0;K--){var Q=J.definition[K],ue={idx:O,def:Q.definition.concat(i.drop(L)),ruleStack:G,occurrenceStack:X};w.push(ue),w.push(A)}else if(J instanceof o.Alternative)w.push({idx:O,def:J.definition.concat(i.drop(L)),ruleStack:G,occurrenceStack:X});else if(J instanceof o.Rule)w.push(v(J,O,G,X));else throw Error("non exhaustive match")}}return T}n.nextPossibleTokensAfter=x;function v(f,u,_,b){var y=i.cloneArr(_);y.push(f.name);var R=i.cloneArr(b);return R.push(1),{idx:u,def:f.definition,ruleStack:y,occurrenceStack:R}}}),Yo=it(n=>{var e=n&&n.__extends||function(){var S=function(T,w){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(C,L){C.__proto__=L}||function(C,L){for(var O in L)Object.prototype.hasOwnProperty.call(L,O)&&(C[O]=L[O])},S(T,w)};return function(T,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");S(T,w);function C(){this.constructor=T}T.prototype=w===null?Object.create(w):(C.prototype=w.prototype,new C)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=ft(),i=jo(),r=el(),o=kr(),a=sn(),l=Br(),c;(function(S){S[S.OPTION=0]="OPTION",S[S.REPETITION=1]="REPETITION",S[S.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",S[S.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",S[S.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",S[S.ALTERNATION=5]="ALTERNATION"})(c=n.PROD_TYPE||(n.PROD_TYPE={}));function s(S){if(S instanceof a.Option)return c.OPTION;if(S instanceof a.Repetition)return c.REPETITION;if(S instanceof a.RepetitionMandatory)return c.REPETITION_MANDATORY;if(S instanceof a.RepetitionMandatoryWithSeparator)return c.REPETITION_MANDATORY_WITH_SEPARATOR;if(S instanceof a.RepetitionWithSeparator)return c.REPETITION_WITH_SEPARATOR;if(S instanceof a.Alternation)return c.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=s;function d(S,T,w,C,L,O){var G=y(S,T,w),X=k(G)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return O(G,C,X,L)}n.buildLookaheadFuncForOr=d;function h(S,T,w,C,L,O){var G=R(S,T,L,w),X=k(G)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return O(G[0],X,C)}n.buildLookaheadFuncForOptionalProd=h;function m(S,T,w,C){var L=S.length,O=t.every(S,function(J){return t.every(J,function(j){return j.length===1})});if(T)return function(J){for(var j=t.map(J,function(V){return V.GATE}),ne=0;ne<L;ne++){var de=S[ne],xe=de.length,re=j[ne];if(!(re!==void 0&&re.call(this)===!1))e:for(var oe=0;oe<xe;oe++){for(var we=de[oe],te=we.length,H=0;H<te;H++){var U=this.LA(H+1);if(w(U,we[H])===!1)continue e}return ne}}};if(O&&!C){var G=t.map(S,function(J){return t.flatten(J)}),X=t.reduce(G,function(J,j,ne){return t.forEach(j,function(de){t.has(J,de.tokenTypeIdx)||(J[de.tokenTypeIdx]=ne),t.forEach(de.categoryMatches,function(xe){t.has(J,xe)||(J[xe]=ne)})}),J},[]);return function(){var J=this.LA(1);return X[J.tokenTypeIdx]}}else return function(){for(var J=0;J<L;J++){var j=S[J],ne=j.length;e:for(var de=0;de<ne;de++){for(var xe=j[de],re=xe.length,oe=0;oe<re;oe++){var we=this.LA(oe+1);if(w(we,xe[oe])===!1)continue e}return J}}}}n.buildAlternativesLookAheadFunc=m;function p(S,T,w){var C=t.every(S,function(j){return j.length===1}),L=S.length;if(C&&!w){var O=t.flatten(S);if(O.length===1&&t.isEmpty(O[0].categoryMatches)){var G=O[0],X=G.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===X}}else{var J=t.reduce(O,function(j,ne,de){return j[ne.tokenTypeIdx]=!0,t.forEach(ne.categoryMatches,function(xe){j[xe]=!0}),j},[]);return function(){var j=this.LA(1);return J[j.tokenTypeIdx]===!0}}}else return function(){e:for(var j=0;j<L;j++){for(var ne=S[j],de=ne.length,xe=0;xe<de;xe++){var re=this.LA(xe+1);if(T(re,ne[xe])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=p;var x=function(S){e(T,S);function T(w,C,L){var O=S.call(this)||this;return O.topProd=w,O.targetOccurrence=C,O.targetProdType=L,O}return T.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},T.prototype.checkIsTarget=function(w,C,L,O){return w.idx===this.targetOccurrence&&this.targetProdType===C?(this.restDef=L.concat(O),!0):!1},T.prototype.walkOption=function(w,C,L){this.checkIsTarget(w,c.OPTION,C,L)||S.prototype.walkOption.call(this,w,C,L)},T.prototype.walkAtLeastOne=function(w,C,L){this.checkIsTarget(w,c.REPETITION_MANDATORY,C,L)||S.prototype.walkOption.call(this,w,C,L)},T.prototype.walkAtLeastOneSep=function(w,C,L){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR,C,L)||S.prototype.walkOption.call(this,w,C,L)},T.prototype.walkMany=function(w,C,L){this.checkIsTarget(w,c.REPETITION,C,L)||S.prototype.walkOption.call(this,w,C,L)},T.prototype.walkManySep=function(w,C,L){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR,C,L)||S.prototype.walkOption.call(this,w,C,L)},T}(r.RestWalker),v=function(S){e(T,S);function T(w,C,L){var O=S.call(this)||this;return O.targetOccurrence=w,O.targetProdType=C,O.targetRef=L,O.result=[],O}return T.prototype.checkIsTarget=function(w,C){w.idx===this.targetOccurrence&&this.targetProdType===C&&(this.targetRef===void 0||w===this.targetRef)&&(this.result=w.definition)},T.prototype.visitOption=function(w){this.checkIsTarget(w,c.OPTION)},T.prototype.visitRepetition=function(w){this.checkIsTarget(w,c.REPETITION)},T.prototype.visitRepetitionMandatory=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY)},T.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR)},T.prototype.visitRepetitionWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR)},T.prototype.visitAlternation=function(w){this.checkIsTarget(w,c.ALTERNATION)},T}(l.GAstVisitor);function f(S){for(var T=new Array(S),w=0;w<S;w++)T[w]=[];return T}function u(S){for(var T=[""],w=0;w<S.length;w++){for(var C=S[w],L=[],O=0;O<T.length;O++){var G=T[O];L.push(G+"_"+C.tokenTypeIdx);for(var X=0;X<C.categoryMatches.length;X++){var J="_"+C.categoryMatches[X];L.push(G+J)}}T=L}return T}function _(S,T,w){for(var C=0;C<S.length;C++)if(C!==w)for(var L=S[C],O=0;O<T.length;O++){var G=T[O];if(L[G]===!0)return!1}return!0}function b(S,T){for(var w=t.map(S,function(ne){return i.possiblePathsFrom([ne],1)}),C=f(w.length),L=t.map(w,function(ne){var de={};return t.forEach(ne,function(xe){var re=u(xe.partialPath);t.forEach(re,function(oe){de[oe]=!0})}),de}),O=w,G=1;G<=T;G++){var X=O;O=f(X.length);for(var J=function(ne){for(var de=X[ne],xe=0;xe<de.length;xe++){var re=de[xe].partialPath,oe=de[xe].suffixDef,we=u(re),te=_(L,we,ne);if(te||t.isEmpty(oe)||re.length===T){var H=C[ne];if(A(H,re)===!1){H.push(re);for(var U=0;U<we.length;U++){var V=we[U];L[ne][V]=!0}}}else{var K=i.possiblePathsFrom(oe,G+1,re);O[ne]=O[ne].concat(K),t.forEach(K,function(Q){var ue=u(Q.partialPath);t.forEach(ue,function(_e){L[ne][_e]=!0})})}}},j=0;j<X.length;j++)J(j)}return C}n.lookAheadSequenceFromAlternatives=b;function y(S,T,w,C){var L=new v(S,c.ALTERNATION,C);return T.accept(L),b(L.result,w)}n.getLookaheadPathsForOr=y;function R(S,T,w,C){var L=new v(S,w);T.accept(L);var O=L.result,G=new x(T,S,w),X=G.startWalking(),J=new a.Alternative({definition:O}),j=new a.Alternative({definition:X});return b([J,j],C)}n.getLookaheadPathsForOptionalProd=R;function A(S,T){e:for(var w=0;w<S.length;w++){var C=S[w];if(C.length===T.length){for(var L=0;L<C.length;L++){var O=T[L],G=C[L],X=O===G||G.categoryMatchesMap[O.tokenTypeIdx]!==void 0;if(X===!1)continue e}return!0}}return!1}n.containsPath=A;function P(S,T){return S.length<T.length&&t.every(S,function(w,C){var L=T[C];return w===L||L.categoryMatchesMap[w.tokenTypeIdx]})}n.isStrictPrefixOfPath=P;function k(S){return t.every(S,function(T){return t.every(T,function(w){return t.every(w,function(C){return t.isEmpty(C.categoryMatches)})})})}n.areTokenCategoriesNotUsed=k}),bu=it(n=>{var e=n&&n.__extends||function(){var C=function(L,O){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(G,X){G.__proto__=X}||function(G,X){for(var J in X)Object.prototype.hasOwnProperty.call(X,J)&&(G[J]=X[J])},C(L,O)};return function(L,O){if(typeof O!="function"&&O!==null)throw new TypeError("Class extends value "+String(O)+" is not a constructor or null");C(L,O);function G(){this.constructor=L}L.prototype=O===null?Object.create(O):(G.prototype=O.prototype,new G)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=ft(),i=ft(),r=pn(),o=Wo(),a=Yo(),l=jo(),c=sn(),s=Br();function d(C,L,O,G,X){var J=t.map(C,function(te){return h(te,G)}),j=t.map(C,function(te){return u(te,te,G)}),ne=[],de=[],xe=[];i.every(j,i.isEmpty)&&(ne=i.map(C,function(te){return y(te,G)}),de=i.map(C,function(te){return R(te,L,G)}),xe=k(C,L,G));var re=w(C,O,G),oe=i.map(C,function(te){return P(te,G)}),we=i.map(C,function(te){return v(te,C,X,G)});return t.flatten(J.concat(xe,j,ne,de,re,oe,we))}n.validateGrammar=d;function h(C,L){var O=new x;C.accept(O);var G=O.allProductions,X=t.groupBy(G,m),J=t.pick(X,function(ne){return ne.length>1}),j=t.map(t.values(J),function(ne){var de=t.first(ne),xe=L.buildDuplicateFoundError(C,ne),re=o.getProductionDslName(de),oe={message:xe,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:C.name,dslName:re,occurrence:de.idx},we=p(de);return we&&(oe.parameter=we),oe});return j}function m(C){return o.getProductionDslName(C)+"_#_"+C.idx+"_#_"+p(C)}n.identifyProductionForDuplicates=m;function p(C){return C instanceof c.Terminal?C.terminalType.name:C instanceof c.NonTerminal?C.nonTerminalName:""}var x=function(C){e(L,C);function L(){var O=C!==null&&C.apply(this,arguments)||this;return O.allProductions=[],O}return L.prototype.visitNonTerminal=function(O){this.allProductions.push(O)},L.prototype.visitOption=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatory=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatoryWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetition=function(O){this.allProductions.push(O)},L.prototype.visitAlternation=function(O){this.allProductions.push(O)},L.prototype.visitTerminal=function(O){this.allProductions.push(O)},L}(s.GAstVisitor);n.OccurrenceValidationCollector=x;function v(C,L,O,G){var X=[],J=i.reduce(L,function(ne,de){return de.name===C.name?ne+1:ne},0);if(J>1){var j=G.buildDuplicateRuleNameError({topLevelRule:C,grammarName:O});X.push({message:j,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:C.name})}return X}n.validateRuleDoesNotAlreadyExist=v;function f(C,L,O){var G=[],X;return t.contains(L,C)||(X="Invalid rule override, rule: ->"+C+"<- cannot be overridden in the grammar: ->"+O+"<-as it is not defined in any of the super grammars ",G.push({message:X,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:C})),G}n.validateRuleIsOverridden=f;function u(C,L,O,G){G===void 0&&(G=[]);var X=[],J=_(L.definition);if(t.isEmpty(J))return[];var j=C.name,ne=t.contains(J,C);ne&&X.push({message:O.buildLeftRecursionError({topLevelRule:C,leftRecursionPath:G}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:j});var de=t.difference(J,G.concat([C])),xe=t.map(de,function(re){var oe=t.cloneArr(G);return oe.push(re),u(C,re,O,oe)});return X.concat(t.flatten(xe))}n.validateNoLeftRecursion=u;function _(C){var L=[];if(t.isEmpty(C))return L;var O=t.first(C);if(O instanceof c.NonTerminal)L.push(O.referencedRule);else if(O instanceof c.Alternative||O instanceof c.Option||O instanceof c.RepetitionMandatory||O instanceof c.RepetitionMandatoryWithSeparator||O instanceof c.RepetitionWithSeparator||O instanceof c.Repetition)L=L.concat(_(O.definition));else if(O instanceof c.Alternation)L=t.flatten(t.map(O.definition,function(j){return _(j.definition)}));else if(!(O instanceof c.Terminal))throw Error("non exhaustive match");var G=o.isOptionalProd(O),X=C.length>1;if(G&&X){var J=t.drop(C);return L.concat(_(J))}else return L}n.getFirstNoneTerminal=_;var b=function(C){e(L,C);function L(){var O=C!==null&&C.apply(this,arguments)||this;return O.alternations=[],O}return L.prototype.visitAlternation=function(O){this.alternations.push(O)},L}(s.GAstVisitor);function y(C,L){var O=new b;C.accept(O);var G=O.alternations,X=t.reduce(G,function(J,j){var ne=t.dropRight(j.definition),de=t.map(ne,function(xe,re){var oe=l.nextPossibleTokensAfter([xe],[],null,1);return t.isEmpty(oe)?{message:L.buildEmptyAlternationError({topLevelRule:C,alternation:j,emptyChoiceIdx:re}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:C.name,occurrence:j.idx,alternative:re+1}:null});return J.concat(t.compact(de))},[]);return X}n.validateEmptyOrAlternative=y;function R(C,L,O){var G=new b;C.accept(G);var X=G.alternations;X=i.reject(X,function(j){return j.ignoreAmbiguities===!0});var J=t.reduce(X,function(j,ne){var de=ne.idx,xe=ne.maxLookahead||L,re=a.getLookaheadPathsForOr(de,C,xe,ne),oe=S(re,ne,C,O),we=T(re,ne,C,O);return j.concat(oe,we)},[]);return J}n.validateAmbiguousAlternationAlternatives=R;var A=function(C){e(L,C);function L(){var O=C!==null&&C.apply(this,arguments)||this;return O.allProductions=[],O}return L.prototype.visitRepetitionWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatory=function(O){this.allProductions.push(O)},L.prototype.visitRepetitionMandatoryWithSeparator=function(O){this.allProductions.push(O)},L.prototype.visitRepetition=function(O){this.allProductions.push(O)},L}(s.GAstVisitor);n.RepetionCollector=A;function P(C,L){var O=new b;C.accept(O);var G=O.alternations,X=t.reduce(G,function(J,j){return j.definition.length>255&&J.push({message:L.buildTooManyAlternativesError({topLevelRule:C,alternation:j}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:C.name,occurrence:j.idx}),J},[]);return X}n.validateTooManyAlts=P;function k(C,L,O){var G=[];return i.forEach(C,function(X){var J=new A;X.accept(J);var j=J.allProductions;i.forEach(j,function(ne){var de=a.getProdType(ne),xe=ne.maxLookahead||L,re=ne.idx,oe=a.getLookaheadPathsForOptionalProd(re,X,de,xe),we=oe[0];if(i.isEmpty(i.flatten(we))){var te=O.buildEmptyRepetitionError({topLevelRule:X,repetition:ne});G.push({message:te,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:X.name})}})}),G}n.validateSomeNonEmptyLookaheadPath=k;function S(C,L,O,G){var X=[],J=i.reduce(C,function(ne,de,xe){return L.definition[xe].ignoreAmbiguities===!0||i.forEach(de,function(re){var oe=[xe];i.forEach(C,function(we,te){xe!==te&&a.containsPath(we,re)&&L.definition[te].ignoreAmbiguities!==!0&&oe.push(te)}),oe.length>1&&!a.containsPath(X,re)&&(X.push(re),ne.push({alts:oe,path:re}))}),ne},[]),j=t.map(J,function(ne){var de=i.map(ne.alts,function(re){return re+1}),xe=G.buildAlternationAmbiguityError({topLevelRule:O,alternation:L,ambiguityIndices:de,prefixPath:ne.path});return{message:xe,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:O.name,occurrence:L.idx,alternatives:[ne.alts]}});return j}function T(C,L,O,G){var X=[],J=i.reduce(C,function(j,ne,de){var xe=i.map(ne,function(re){return{idx:de,path:re}});return j.concat(xe)},[]);return i.forEach(J,function(j){var ne=L.definition[j.idx];if(ne.ignoreAmbiguities!==!0){var de=j.idx,xe=j.path,re=i.findAll(J,function(we){return L.definition[we.idx].ignoreAmbiguities!==!0&&we.idx<de&&a.isStrictPrefixOfPath(we.path,xe)}),oe=i.map(re,function(we){var te=[we.idx+1,de+1],H=L.idx===0?"":L.idx,U=G.buildAlternationPrefixAmbiguityError({topLevelRule:O,alternation:L,ambiguityIndices:te,prefixPath:we.path});return{message:U,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:O.name,occurrence:H,alternatives:te}});X=X.concat(oe)}}),X}n.checkPrefixAlternativesAmbiguities=T;function w(C,L,O){var G=[],X=i.map(L,function(J){return J.name});return i.forEach(C,function(J){var j=J.name;if(i.contains(X,j)){var ne=O.buildNamespaceConflictError(J);G.push({message:ne,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:j})}}),G}}),Wx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=ft(),t=Hx(),i=bu(),r=Xo();function o(l){l=e.defaults(l,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var c={};return e.forEach(l.rules,function(s){c[s.name]=s}),t.resolveGrammar(c,l.errMsgProvider)}n.resolveGrammar=o;function a(l){return l=e.defaults(l,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(l.rules,l.maxLookahead,l.tokenTypes,l.errMsgProvider,l.grammarName)}n.validateGrammar=a}),zr=it(n=>{var e=n&&n.__extends||function(){var x=function(v,f){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,_){u.__proto__=_}||function(u,_){for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&(u[b]=_[b])},x(v,f)};return function(v,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");x(v,f);function u(){this.constructor=v}v.prototype=f===null?Object.create(f):(u.prototype=f.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=ft(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",a="NotAllInputParsedException",l=[i,r,o,a];Object.freeze(l);function c(x){return t.contains(l,x.name)}n.isRecognitionException=c;var s=function(x){e(v,x);function v(f,u){var _=this.constructor,b=x.call(this,f)||this;return b.token=u,b.resyncedTokens=[],Object.setPrototypeOf(b,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(b,b.constructor),b}return v}(Error),d=function(x){e(v,x);function v(f,u,_){var b=x.call(this,f,u)||this;return b.previousToken=_,b.name=i,b}return v}(s);n.MismatchedTokenException=d;var h=function(x){e(v,x);function v(f,u,_){var b=x.call(this,f,u)||this;return b.previousToken=_,b.name=r,b}return v}(s);n.NoViableAltException=h;var m=function(x){e(v,x);function v(f,u){var _=x.call(this,f,u)||this;return _.name=a,_}return v}(s);n.NotAllInputParsedException=m;var p=function(x){e(v,x);function v(f,u,_){var b=x.call(this,f,u)||this;return b.previousToken=_,b.name=o,b}return v}(s);n.EarlyExitException=p}),Eu=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=Ei(),t=ft(),i=zr(),r=yu(),o=pn();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function a(s){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=s}n.InRuleRecoveryException=a,a.prototype=Error.prototype;var l=function(){function s(){}return s.prototype.initRecoverable=function(d){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(d,"recoveryEnabled")?d.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=c)},s.prototype.getTokenToInsert=function(d){var h=e.createTokenInstance(d,"",NaN,NaN,NaN,NaN,NaN,NaN);return h.isInsertedInRecovery=!0,h},s.prototype.canTokenTypeBeInsertedInRecovery=function(d){return!0},s.prototype.tryInRepetitionRecovery=function(d,h,m,p){for(var x=this,v=this.findReSyncTokenType(),f=this.exportLexerState(),u=[],_=!1,b=this.LA(1),y=this.LA(1),R=function(){var A=x.LA(0),P=x.errorMessageProvider.buildMismatchTokenMessage({expected:p,actual:b,previous:A,ruleName:x.getCurrRuleFullName()}),k=new i.MismatchedTokenException(P,b,x.LA(0));k.resyncedTokens=t.dropRight(u),x.SAVE_ERROR(k)};!_;)if(this.tokenMatcher(y,p)){R();return}else if(m.call(this)){R(),d.apply(this,h);return}else this.tokenMatcher(y,v)?_=!0:(y=this.SKIP_TOKEN(),this.addToResyncTokens(y,u));this.importLexerState(f)},s.prototype.shouldInRepetitionRecoveryBeTried=function(d,h,m){return!(m===!1||d===void 0||h===void 0||this.tokenMatcher(this.LA(1),d)||this.isBackTracking()||this.canPerformInRuleRecovery(d,this.getFollowsForInRuleRecovery(d,h)))},s.prototype.getFollowsForInRuleRecovery=function(d,h){var m=this.getCurrentGrammarPath(d,h),p=this.getNextPossibleTokenTypes(m);return p},s.prototype.tryInRuleRecovery=function(d,h){if(this.canRecoverWithSingleTokenInsertion(d,h)){var m=this.getTokenToInsert(d);return m}if(this.canRecoverWithSingleTokenDeletion(d)){var p=this.SKIP_TOKEN();return this.consumeToken(),p}throw new a("sad sad panda")},s.prototype.canPerformInRuleRecovery=function(d,h){return this.canRecoverWithSingleTokenInsertion(d,h)||this.canRecoverWithSingleTokenDeletion(d)},s.prototype.canRecoverWithSingleTokenInsertion=function(d,h){var m=this;if(!this.canTokenTypeBeInsertedInRecovery(d)||t.isEmpty(h))return!1;var p=this.LA(1),x=t.find(h,function(v){return m.tokenMatcher(p,v)})!==void 0;return x},s.prototype.canRecoverWithSingleTokenDeletion=function(d){var h=this.tokenMatcher(this.LA(2),d);return h},s.prototype.isInCurrentRuleReSyncSet=function(d){var h=this.getCurrFollowKey(),m=this.getFollowSetFromFollowKey(h);return t.contains(m,d)},s.prototype.findReSyncTokenType=function(){for(var d=this.flattenFollowSet(),h=this.LA(1),m=2;;){var p=h.tokenType;if(t.contains(d,p))return p;h=this.LA(m),m++}},s.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var d=this.getLastExplicitRuleShortName(),h=this.getLastExplicitRuleOccurrenceIndex(),m=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(d),idxInCallingRule:h,inRule:this.shortRuleNameToFullName(m)}},s.prototype.buildFullFollowKeyStack=function(){var d=this,h=this.RULE_STACK,m=this.RULE_OCCURRENCE_STACK;return t.map(h,function(p,x){return x===0?n.EOF_FOLLOW_KEY:{ruleName:d.shortRuleNameToFullName(p),idxInCallingRule:m[x],inRule:d.shortRuleNameToFullName(h[x-1])}})},s.prototype.flattenFollowSet=function(){var d=this,h=t.map(this.buildFullFollowKeyStack(),function(m){return d.getFollowSetFromFollowKey(m)});return t.flatten(h)},s.prototype.getFollowSetFromFollowKey=function(d){if(d===n.EOF_FOLLOW_KEY)return[e.EOF];var h=d.ruleName+d.idxInCallingRule+r.IN+d.inRule;return this.resyncFollows[h]},s.prototype.addToResyncTokens=function(d,h){return this.tokenMatcher(d,e.EOF)||h.push(d),h},s.prototype.reSyncTo=function(d){for(var h=[],m=this.LA(1);this.tokenMatcher(m,d)===!1;)m=this.SKIP_TOKEN(),this.addToResyncTokens(m,h);return t.dropRight(h)},s.prototype.attemptInRepetitionRecovery=function(d,h,m,p,x,v,f){},s.prototype.getCurrentGrammarPath=function(d,h){var m=this.getHumanReadableRuleStack(),p=t.cloneArr(this.RULE_OCCURRENCE_STACK),x={ruleStack:m,occurrenceStack:p,lastTok:d,lastTokOccurrence:h};return x},s.prototype.getHumanReadableRuleStack=function(){var d=this;return t.map(this.RULE_STACK,function(h){return d.shortRuleNameToFullName(h)})},s}();n.Recoverable=l;function c(s,d,h,m,p,x,v){var f=this.getKeyForAutomaticLookahead(m,p),u=this.firstAfterRepMap[f];if(u===void 0){var _=this.getCurrRuleFullName(),b=this.getGAstProductions()[_],y=new x(b,p);u=y.startWalking(),this.firstAfterRepMap[f]=u}var R=u.token,A=u.occurrence,P=u.isEndOfRule;this.RULE_STACK.length===1&&P&&R===void 0&&(R=e.EOF,A=1),this.shouldInRepetitionRecoveryBeTried(R,A,v)&&this.tryInRepetitionRecovery(s,d,h,R)}n.attemptInRepetitionRecovery=c}),tl=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),Xx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=Yo(),t=ft(),i=pn(),r=tl(),o=Wo(),a=function(){function l(){}return l.prototype.initLooksAhead=function(c){this.dynamicTokensEnabled=t.has(c,"dynamicTokensEnabled")?c.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(c,"maxLookahead")?c.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},l.prototype.preComputeLookaheadFunctions=function(c){var s=this;t.forEach(c,function(d){s.TRACE_INIT(d.name+" Rule Lookahead",function(){var h=o.collectMethods(d),m=h.alternation,p=h.repetition,x=h.option,v=h.repetitionMandatory,f=h.repetitionMandatoryWithSeparator,u=h.repetitionWithSeparator;t.forEach(m,function(_){var b=_.idx===0?"":_.idx;s.TRACE_INIT(""+o.getProductionDslName(_)+b,function(){var y=e.buildLookaheadFuncForOr(_.idx,d,_.maxLookahead||s.maxLookahead,_.hasPredicates,s.dynamicTokensEnabled,s.lookAheadBuilderForAlternatives),R=r.getKeyForAutomaticLookahead(s.fullRuleNameToShort[d.name],r.OR_IDX,_.idx);s.setLaFuncCache(R,y)})}),t.forEach(p,function(_){s.computeLookaheadFunc(d,_.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(x,function(_){s.computeLookaheadFunc(d,_.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(v,function(_){s.computeLookaheadFunc(d,_.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(f,function(_){s.computeLookaheadFunc(d,_.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))}),t.forEach(u,function(_){s.computeLookaheadFunc(d,_.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,_.maxLookahead,o.getProductionDslName(_))})})})},l.prototype.computeLookaheadFunc=function(c,s,d,h,m,p){var x=this;this.TRACE_INIT(""+p+(s===0?"":s),function(){var v=e.buildLookaheadFuncForOptionalProd(s,c,m||x.maxLookahead,x.dynamicTokensEnabled,h,x.lookAheadBuilderForOptional),f=r.getKeyForAutomaticLookahead(x.fullRuleNameToShort[c.name],d,s);x.setLaFuncCache(f,v)})},l.prototype.lookAheadBuilderForOptional=function(c,s,d){return e.buildSingleAlternativeLookaheadFunction(c,s,d)},l.prototype.lookAheadBuilderForAlternatives=function(c,s,d,h){return e.buildAlternativesLookAheadFunc(c,s,d,h)},l.prototype.getKeyForAutomaticLookahead=function(c,s){var d=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(d,c,s)},l.prototype.getLaFuncFromCache=function(c){},l.prototype.getLaFuncFromMap=function(c){return this.lookAheadFuncsCache.get(c)},l.prototype.getLaFuncFromObj=function(c){return this.lookAheadFuncsCache[c]},l.prototype.setLaFuncCache=function(c,s){},l.prototype.setLaFuncCacheUsingMap=function(c,s){this.lookAheadFuncsCache.set(c,s)},l.prototype.setLaFuncUsingObj=function(c,s){this.lookAheadFuncsCache[c]=s},l}();n.LooksAhead=a}),jx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,a){isNaN(o.startOffset)===!0?(o.startOffset=a.startOffset,o.endOffset=a.endOffset):o.endOffset<a.endOffset&&(o.endOffset=a.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,a){isNaN(o.startOffset)===!0?(o.startOffset=a.startOffset,o.startColumn=a.startColumn,o.startLine=a.startLine,o.endOffset=a.endOffset,o.endColumn=a.endColumn,o.endLine=a.endLine):o.endOffset<a.endOffset&&(o.endOffset=a.endOffset,o.endColumn=a.endColumn,o.endLine=a.endLine)}n.setNodeLocationFull=t;function i(o,a,l){o.children[l]===void 0?o.children[l]=[a]:o.children[l].push(a)}n.addTerminalToCst=i;function r(o,a,l){o.children[a]===void 0?o.children[a]=[l]:o.children[a].push(l)}n.addNoneTerminalToCst=r}),Su=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=ft();function t(a){return r(a.constructor)}n.classNameFromInstance=t;var i="name";function r(a){var l=a.name;return l||"anonymous"}n.functionName=r;function o(a,l){var c=Object.getOwnPropertyDescriptor(a,i);return e.isUndefined(c)||c.configurable?(Object.defineProperty(a,i,{enumerable:!1,configurable:!0,writable:!1,value:l}),!0):!1}n.defineNameProp=o}),Yx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=ft(),t=Su();function i(h,m){for(var p=e.keys(h),x=p.length,v=0;v<x;v++)for(var f=p[v],u=h[f],_=u.length,b=0;b<_;b++){var y=u[b];y.tokenTypeIdx===void 0&&this[y.name](y.children,m)}}n.defaultVisit=i;function r(h,m){var p=function(){};t.defineNameProp(p,h+"BaseSemantics");var x={visit:function(v,f){if(e.isArray(v)&&(v=v[0]),!e.isUndefined(v))return this[v.name](v.children,f)},validateVisitor:function(){var v=l(this,m);if(!e.isEmpty(v)){var f=e.map(v,function(u){return u.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+f.join(`

`).replace(/\n/g,`
	`)))}}};return p.prototype=x,p.prototype.constructor=p,p._RULE_NAMES=m,p}n.createBaseSemanticVisitorConstructor=r;function o(h,m,p){var x=function(){};t.defineNameProp(x,h+"BaseSemanticsWithDefaults");var v=Object.create(p.prototype);return e.forEach(m,function(f){v[f]=i}),x.prototype=v,x.prototype.constructor=x,x}n.createBaseVisitorConstructorWithDefaults=o;var a;(function(h){h[h.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",h[h.MISSING_METHOD=1]="MISSING_METHOD"})(a=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function l(h,m){var p=c(h,m),x=d(h,m);return p.concat(x)}n.validateVisitor=l;function c(h,m){var p=e.map(m,function(x){if(!e.isFunction(h[x]))return{msg:"Missing visitor method: <"+x+"> on "+t.functionName(h.constructor)+" CST Visitor.",type:a.MISSING_METHOD,methodName:x}});return e.compact(p)}n.validateMissingCstMethods=c;var s=["constructor","visit","validateVisitor"];function d(h,m){var p=[];for(var x in h)e.isFunction(h[x])&&!e.contains(s,x)&&!e.contains(m,x)&&p.push({msg:"Redundant visitor method: <"+x+"> on "+t.functionName(h.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:a.REDUNDANT_METHOD,methodName:x});return p}n.validateRedundantMethods=d}),Kx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=jx(),t=ft(),i=Yx(),r=pn(),o=function(){function a(){}return a.prototype.initTreeBuilder=function(l){if(this.CST_STACK=[],this.outputCst=l.outputCst,this.nodeLocationTracking=t.has(l,"nodeLocationTracking")?l.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+l.nodeLocationTracking+'"')},a.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(l){l.location={startOffset:NaN,endOffset:NaN}},a.prototype.setInitialNodeLocationOnlyOffsetRegular=function(l){l.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},a.prototype.setInitialNodeLocationFullRecovery=function(l){l.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},a.prototype.setInitialNodeLocationFullRegular=function(l){var c=this.LA(1);l.location={startOffset:c.startOffset,startLine:c.startLine,startColumn:c.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},a.prototype.cstInvocationStateUpdate=function(l,c){var s={name:l,children:{}};this.setInitialNodeLocation(s),this.CST_STACK.push(s)},a.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},a.prototype.cstPostRuleFull=function(l){var c=this.LA(0),s=l.location;s.startOffset<=c.startOffset?(s.endOffset=c.endOffset,s.endLine=c.endLine,s.endColumn=c.endColumn):(s.startOffset=NaN,s.startLine=NaN,s.startColumn=NaN)},a.prototype.cstPostRuleOnlyOffset=function(l){var c=this.LA(0),s=l.location;s.startOffset<=c.startOffset?s.endOffset=c.endOffset:s.startOffset=NaN},a.prototype.cstPostTerminal=function(l,c){var s=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(s,c,l),this.setNodeLocationFromToken(s.location,c)},a.prototype.cstPostNonTerminal=function(l,c){var s=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(s,c,l),this.setNodeLocationFromNode(s.location,l.location)},a.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var l=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=l,l}return this.baseCstVisitorConstructor},a.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var l=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=l,l}return this.baseCstVisitorWithDefaultsConstructor},a.prototype.getLastExplicitRuleShortName=function(){var l=this.RULE_STACK;return l[l.length-1]},a.prototype.getPreviousExplicitRuleShortName=function(){var l=this.RULE_STACK;return l[l.length-2]},a.prototype.getLastExplicitRuleOccurrenceIndex=function(){var l=this.RULE_OCCURRENCE_STACK;return l[l.length-1]},a}();n.TreeBuilder=o}),qx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=pn(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),$x=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=ft(),t=zr(),i=pn(),r=Xo(),o=bu(),a=sn(),l=function(){function c(){}return c.prototype.ACTION=function(s){return s.call(this)},c.prototype.consume=function(s,d,h){return this.consumeInternal(d,s,h)},c.prototype.subrule=function(s,d,h){return this.subruleInternal(d,s,h)},c.prototype.option=function(s,d){return this.optionInternal(d,s)},c.prototype.or=function(s,d){return this.orInternal(d,s)},c.prototype.many=function(s,d){return this.manyInternal(s,d)},c.prototype.atLeastOne=function(s,d){return this.atLeastOneInternal(s,d)},c.prototype.CONSUME=function(s,d){return this.consumeInternal(s,0,d)},c.prototype.CONSUME1=function(s,d){return this.consumeInternal(s,1,d)},c.prototype.CONSUME2=function(s,d){return this.consumeInternal(s,2,d)},c.prototype.CONSUME3=function(s,d){return this.consumeInternal(s,3,d)},c.prototype.CONSUME4=function(s,d){return this.consumeInternal(s,4,d)},c.prototype.CONSUME5=function(s,d){return this.consumeInternal(s,5,d)},c.prototype.CONSUME6=function(s,d){return this.consumeInternal(s,6,d)},c.prototype.CONSUME7=function(s,d){return this.consumeInternal(s,7,d)},c.prototype.CONSUME8=function(s,d){return this.consumeInternal(s,8,d)},c.prototype.CONSUME9=function(s,d){return this.consumeInternal(s,9,d)},c.prototype.SUBRULE=function(s,d){return this.subruleInternal(s,0,d)},c.prototype.SUBRULE1=function(s,d){return this.subruleInternal(s,1,d)},c.prototype.SUBRULE2=function(s,d){return this.subruleInternal(s,2,d)},c.prototype.SUBRULE3=function(s,d){return this.subruleInternal(s,3,d)},c.prototype.SUBRULE4=function(s,d){return this.subruleInternal(s,4,d)},c.prototype.SUBRULE5=function(s,d){return this.subruleInternal(s,5,d)},c.prototype.SUBRULE6=function(s,d){return this.subruleInternal(s,6,d)},c.prototype.SUBRULE7=function(s,d){return this.subruleInternal(s,7,d)},c.prototype.SUBRULE8=function(s,d){return this.subruleInternal(s,8,d)},c.prototype.SUBRULE9=function(s,d){return this.subruleInternal(s,9,d)},c.prototype.OPTION=function(s){return this.optionInternal(s,0)},c.prototype.OPTION1=function(s){return this.optionInternal(s,1)},c.prototype.OPTION2=function(s){return this.optionInternal(s,2)},c.prototype.OPTION3=function(s){return this.optionInternal(s,3)},c.prototype.OPTION4=function(s){return this.optionInternal(s,4)},c.prototype.OPTION5=function(s){return this.optionInternal(s,5)},c.prototype.OPTION6=function(s){return this.optionInternal(s,6)},c.prototype.OPTION7=function(s){return this.optionInternal(s,7)},c.prototype.OPTION8=function(s){return this.optionInternal(s,8)},c.prototype.OPTION9=function(s){return this.optionInternal(s,9)},c.prototype.OR=function(s){return this.orInternal(s,0)},c.prototype.OR1=function(s){return this.orInternal(s,1)},c.prototype.OR2=function(s){return this.orInternal(s,2)},c.prototype.OR3=function(s){return this.orInternal(s,3)},c.prototype.OR4=function(s){return this.orInternal(s,4)},c.prototype.OR5=function(s){return this.orInternal(s,5)},c.prototype.OR6=function(s){return this.orInternal(s,6)},c.prototype.OR7=function(s){return this.orInternal(s,7)},c.prototype.OR8=function(s){return this.orInternal(s,8)},c.prototype.OR9=function(s){return this.orInternal(s,9)},c.prototype.MANY=function(s){this.manyInternal(0,s)},c.prototype.MANY1=function(s){this.manyInternal(1,s)},c.prototype.MANY2=function(s){this.manyInternal(2,s)},c.prototype.MANY3=function(s){this.manyInternal(3,s)},c.prototype.MANY4=function(s){this.manyInternal(4,s)},c.prototype.MANY5=function(s){this.manyInternal(5,s)},c.prototype.MANY6=function(s){this.manyInternal(6,s)},c.prototype.MANY7=function(s){this.manyInternal(7,s)},c.prototype.MANY8=function(s){this.manyInternal(8,s)},c.prototype.MANY9=function(s){this.manyInternal(9,s)},c.prototype.MANY_SEP=function(s){this.manySepFirstInternal(0,s)},c.prototype.MANY_SEP1=function(s){this.manySepFirstInternal(1,s)},c.prototype.MANY_SEP2=function(s){this.manySepFirstInternal(2,s)},c.prototype.MANY_SEP3=function(s){this.manySepFirstInternal(3,s)},c.prototype.MANY_SEP4=function(s){this.manySepFirstInternal(4,s)},c.prototype.MANY_SEP5=function(s){this.manySepFirstInternal(5,s)},c.prototype.MANY_SEP6=function(s){this.manySepFirstInternal(6,s)},c.prototype.MANY_SEP7=function(s){this.manySepFirstInternal(7,s)},c.prototype.MANY_SEP8=function(s){this.manySepFirstInternal(8,s)},c.prototype.MANY_SEP9=function(s){this.manySepFirstInternal(9,s)},c.prototype.AT_LEAST_ONE=function(s){this.atLeastOneInternal(0,s)},c.prototype.AT_LEAST_ONE1=function(s){return this.atLeastOneInternal(1,s)},c.prototype.AT_LEAST_ONE2=function(s){this.atLeastOneInternal(2,s)},c.prototype.AT_LEAST_ONE3=function(s){this.atLeastOneInternal(3,s)},c.prototype.AT_LEAST_ONE4=function(s){this.atLeastOneInternal(4,s)},c.prototype.AT_LEAST_ONE5=function(s){this.atLeastOneInternal(5,s)},c.prototype.AT_LEAST_ONE6=function(s){this.atLeastOneInternal(6,s)},c.prototype.AT_LEAST_ONE7=function(s){this.atLeastOneInternal(7,s)},c.prototype.AT_LEAST_ONE8=function(s){this.atLeastOneInternal(8,s)},c.prototype.AT_LEAST_ONE9=function(s){this.atLeastOneInternal(9,s)},c.prototype.AT_LEAST_ONE_SEP=function(s){this.atLeastOneSepFirstInternal(0,s)},c.prototype.AT_LEAST_ONE_SEP1=function(s){this.atLeastOneSepFirstInternal(1,s)},c.prototype.AT_LEAST_ONE_SEP2=function(s){this.atLeastOneSepFirstInternal(2,s)},c.prototype.AT_LEAST_ONE_SEP3=function(s){this.atLeastOneSepFirstInternal(3,s)},c.prototype.AT_LEAST_ONE_SEP4=function(s){this.atLeastOneSepFirstInternal(4,s)},c.prototype.AT_LEAST_ONE_SEP5=function(s){this.atLeastOneSepFirstInternal(5,s)},c.prototype.AT_LEAST_ONE_SEP6=function(s){this.atLeastOneSepFirstInternal(6,s)},c.prototype.AT_LEAST_ONE_SEP7=function(s){this.atLeastOneSepFirstInternal(7,s)},c.prototype.AT_LEAST_ONE_SEP8=function(s){this.atLeastOneSepFirstInternal(8,s)},c.prototype.AT_LEAST_ONE_SEP9=function(s){this.atLeastOneSepFirstInternal(9,s)},c.prototype.RULE=function(s,d,h){if(h===void 0&&(h=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,s)){var m=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:s,grammarName:this.className}),p={message:m,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:s};this.definitionErrors.push(p)}this.definedRulesNames.push(s);var x=this.defineRule(s,d,h);return this[s]=x,x},c.prototype.OVERRIDE_RULE=function(s,d,h){h===void 0&&(h=i.DEFAULT_RULE_CONFIG);var m=[];m=m.concat(o.validateRuleIsOverridden(s,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(m);var p=this.defineRule(s,d,h);return this[s]=p,p},c.prototype.BACKTRACK=function(s,d){return function(){this.isBackTrackingStack.push(1);var h=this.saveRecogState();try{return s.apply(this,d),!0}catch(m){if(t.isRecognitionException(m))return!1;throw m}finally{this.reloadRecogState(h),this.isBackTrackingStack.pop()}}},c.prototype.getGAstProductions=function(){return this.gastProductionsCache},c.prototype.getSerializedGastProductions=function(){return a.serializeGrammar(e.values(this.gastProductionsCache))},c}();n.RecognizerApi=l}),Zx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=ft(),t=tl(),i=zr(),r=Yo(),o=jo(),a=pn(),l=Eu(),c=Ei(),s=kr(),d=Su(),h=function(){function m(){}return m.prototype.initRecognizerEngine=function(p,x){if(this.className=d.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=s.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(x,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(p)){if(e.isEmpty(p))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof p[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(p))this.tokensMap=e.reduce(p,function(_,b){return _[b.name]=b,_},{});else if(e.has(p,"modes")&&e.every(e.flatten(e.values(p.modes)),s.isTokenType)){var v=e.flatten(e.values(p.modes)),f=e.uniq(v);this.tokensMap=e.reduce(f,function(_,b){return _[b.name]=b,_},{})}else if(e.isObject(p))this.tokensMap=e.cloneObj(p);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=c.EOF;var u=e.every(e.values(p),function(_){return e.isEmpty(_.categoryMatches)});this.tokenMatcher=u?s.tokenStructuredMatcherNoCategories:s.tokenStructuredMatcher,s.augmentTokenTypes(e.values(this.tokensMap))},m.prototype.defineRule=function(p,x,v){if(this.selfAnalysisDone)throw Error("Grammar rule <"+p+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var f=e.has(v,"resyncEnabled")?v.resyncEnabled:a.DEFAULT_RULE_CONFIG.resyncEnabled,u=e.has(v,"recoveryValueFunc")?v.recoveryValueFunc:a.DEFAULT_RULE_CONFIG.recoveryValueFunc,_=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[_]=p,this.fullRuleNameToShort[p]=_;function b(A){try{if(this.outputCst===!0){x.apply(this,A);var P=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(P),P}else return x.apply(this,A)}catch(k){return this.invokeRuleCatch(k,f,u)}finally{this.ruleFinallyStateUpdate()}}var y=function(A,P){return A===void 0&&(A=0),this.ruleInvocationStateUpdate(_,p,A),b.call(this,P)},R="ruleName";return y[R]=p,y.originalGrammarAction=x,y},m.prototype.invokeRuleCatch=function(p,x,v){var f=this.RULE_STACK.length===1,u=x&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(p)){var _=p;if(u){var b=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(b))if(_.resyncedTokens=this.reSyncTo(b),this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];return y.recoveredNode=!0,y}else return v();else{if(this.outputCst){var y=this.CST_STACK[this.CST_STACK.length-1];y.recoveredNode=!0,_.partialCstResult=y}throw _}}else{if(f)return this.moveToTerminatedState(),v();throw _}}else throw p},m.prototype.optionInternal=function(p,x){var v=this.getKeyForAutomaticLookahead(t.OPTION_IDX,x);return this.optionInternalLogic(p,x,v)},m.prototype.optionInternalLogic=function(p,x,v){var f=this,u=this.getLaFuncFromCache(v),_,b;if(p.DEF!==void 0){if(_=p.DEF,b=p.GATE,b!==void 0){var y=u;u=function(){return b.call(f)&&y.call(f)}}}else _=p;if(u.call(this)===!0)return _.call(this)},m.prototype.atLeastOneInternal=function(p,x){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,p);return this.atLeastOneInternalLogic(p,x,v)},m.prototype.atLeastOneInternalLogic=function(p,x,v){var f=this,u=this.getLaFuncFromCache(v),_,b;if(x.DEF!==void 0){if(_=x.DEF,b=x.GATE,b!==void 0){var y=u;u=function(){return b.call(f)&&y.call(f)}}}else _=x;if(u.call(this)===!0)for(var R=this.doSingleRepetition(_);u.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);else throw this.raiseEarlyExitException(p,r.PROD_TYPE.REPETITION_MANDATORY,x.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[p,x],u,t.AT_LEAST_ONE_IDX,p,o.NextTerminalAfterAtLeastOneWalker)},m.prototype.atLeastOneSepFirstInternal=function(p,x){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,p);this.atLeastOneSepFirstInternalLogic(p,x,v)},m.prototype.atLeastOneSepFirstInternalLogic=function(p,x,v){var f=this,u=x.DEF,_=x.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){u.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),u.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,_,y,u,o.NextTerminalAfterAtLeastOneSepWalker],y,t.AT_LEAST_ONE_SEP_IDX,p,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(p,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,x.ERR_MSG)},m.prototype.manyInternal=function(p,x){var v=this.getKeyForAutomaticLookahead(t.MANY_IDX,p);return this.manyInternalLogic(p,x,v)},m.prototype.manyInternalLogic=function(p,x,v){var f=this,u=this.getLaFuncFromCache(v),_,b;if(x.DEF!==void 0){if(_=x.DEF,b=x.GATE,b!==void 0){var y=u;u=function(){return b.call(f)&&y.call(f)}}}else _=x;for(var R=!0;u.call(this)===!0&&R===!0;)R=this.doSingleRepetition(_);this.attemptInRepetitionRecovery(this.manyInternal,[p,x],u,t.MANY_IDX,p,o.NextTerminalAfterManyWalker,R)},m.prototype.manySepFirstInternal=function(p,x){var v=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,p);this.manySepFirstInternalLogic(p,x,v)},m.prototype.manySepFirstInternalLogic=function(p,x,v){var f=this,u=x.DEF,_=x.SEP,b=this.getLaFuncFromCache(v);if(b.call(this)===!0){u.call(this);for(var y=function(){return f.tokenMatcher(f.LA(1),_)};this.tokenMatcher(this.LA(1),_)===!0;)this.CONSUME(_),u.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,_,y,u,o.NextTerminalAfterManySepWalker],y,t.MANY_SEP_IDX,p,o.NextTerminalAfterManySepWalker)}},m.prototype.repetitionSepSecondInternal=function(p,x,v,f,u){for(;v();)this.CONSUME(x),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,x,v,f,u],v,t.AT_LEAST_ONE_SEP_IDX,p,u)},m.prototype.doSingleRepetition=function(p){var x=this.getLexerPosition();p.call(this);var v=this.getLexerPosition();return v>x},m.prototype.orInternal=function(p,x){var v=this.getKeyForAutomaticLookahead(t.OR_IDX,x),f=e.isArray(p)?p:p.DEF,u=this.getLaFuncFromCache(v),_=u.call(this,f);if(_!==void 0){var b=f[_];return b.ALT.call(this)}this.raiseNoAltException(x,p.ERR_MSG)},m.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var p=this.LA(1),x=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:p,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(x,p))}},m.prototype.subruleInternal=function(p,x,v){var f;try{var u=v!==void 0?v.ARGS:void 0;return f=p.call(this,x,u),this.cstPostNonTerminal(f,v!==void 0&&v.LABEL!==void 0?v.LABEL:p.ruleName),f}catch(_){this.subruleInternalError(_,v,p.ruleName)}},m.prototype.subruleInternalError=function(p,x,v){throw i.isRecognitionException(p)&&p.partialCstResult!==void 0&&(this.cstPostNonTerminal(p.partialCstResult,x!==void 0&&x.LABEL!==void 0?x.LABEL:v),delete p.partialCstResult),p},m.prototype.consumeInternal=function(p,x,v){var f;try{var u=this.LA(1);this.tokenMatcher(u,p)===!0?(this.consumeToken(),f=u):this.consumeInternalError(p,u,v)}catch(_){f=this.consumeInternalRecovery(p,x,_)}return this.cstPostTerminal(v!==void 0&&v.LABEL!==void 0?v.LABEL:p.name,f),f},m.prototype.consumeInternalError=function(p,x,v){var f,u=this.LA(0);throw v!==void 0&&v.ERR_MSG?f=v.ERR_MSG:f=this.errorMessageProvider.buildMismatchTokenMessage({expected:p,actual:x,previous:u,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(f,x,u))},m.prototype.consumeInternalRecovery=function(p,x,v){if(this.recoveryEnabled&&v.name==="MismatchedTokenException"&&!this.isBackTracking()){var f=this.getFollowsForInRuleRecovery(p,x);try{return this.tryInRuleRecovery(p,f)}catch(u){throw u.name===l.IN_RULE_RECOVERY_EXCEPTION?v:u}}else throw v},m.prototype.saveRecogState=function(){var p=this.errors,x=e.cloneArr(this.RULE_STACK);return{errors:p,lexerState:this.exportLexerState(),RULE_STACK:x,CST_STACK:this.CST_STACK}},m.prototype.reloadRecogState=function(p){this.errors=p.errors,this.importLexerState(p.lexerState),this.RULE_STACK=p.RULE_STACK},m.prototype.ruleInvocationStateUpdate=function(p,x,v){this.RULE_OCCURRENCE_STACK.push(v),this.RULE_STACK.push(p),this.cstInvocationStateUpdate(x,p)},m.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},m.prototype.getCurrRuleFullName=function(){var p=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[p]},m.prototype.shortRuleNameToFullName=function(p){return this.shortRuleNameToFull[p]},m.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),c.EOF)},m.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},m}();n.RecognizerEngine=h}),Jx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=zr(),t=ft(),i=Yo(),r=pn(),o=function(){function a(){}return a.prototype.initErrorHandler=function(l){this._errors=[],this.errorMessageProvider=t.has(l,"errorMessageProvider")?l.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},a.prototype.SAVE_ERROR=function(l){if(e.isRecognitionException(l))return l.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(l),l;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(a.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(l){this._errors=l},enumerable:!1,configurable:!0}),a.prototype.raiseEarlyExitException=function(l,c,s){for(var d=this.getCurrRuleFullName(),h=this.getGAstProductions()[d],m=i.getLookaheadPathsForOptionalProd(l,h,c,this.maxLookahead),p=m[0],x=[],v=1;v<=this.maxLookahead;v++)x.push(this.LA(v));var f=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:p,actual:x,previous:this.LA(0),customUserDescription:s,ruleName:d});throw this.SAVE_ERROR(new e.EarlyExitException(f,this.LA(1),this.LA(0)))},a.prototype.raiseNoAltException=function(l,c){for(var s=this.getCurrRuleFullName(),d=this.getGAstProductions()[s],h=i.getLookaheadPathsForOr(l,d,this.maxLookahead),m=[],p=1;p<=this.maxLookahead;p++)m.push(this.LA(p));var x=this.LA(0),v=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:h,actual:m,previous:x,customUserDescription:c,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(v,this.LA(1),x))},a}();n.ErrorHandler=o}),Qx=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=jo(),t=ft(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,a){var l=this.gastProductionsCache[o];if(t.isUndefined(l))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([l],a,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var a=t.first(o.ruleStack),l=this.getGAstProductions(),c=l[a],s=new e.NextAfterTokenWalker(c,o).startWalking();return s},r}();n.ContentAssist=i}),ev=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=ft(),t=sn(),i=Ho(),r=kr(),o=Ei(),a=pn(),l=tl(),c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(c);var s=!0,d=Math.pow(2,l.BITS_FOR_OCCURRENCE_IDX)-1,h=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([h]);var m=o.createTokenInstance(h,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(m);var p={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},x=function(){function b(){}return b.prototype.initGastRecorder=function(y){this.recordingProdStack=[],this.RECORDING_PHASE=!1},b.prototype.enableRecording=function(){var y=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var R=function(P){var k=P>0?P:"";y["CONSUME"+k]=function(S,T){return this.consumeInternalRecord(S,P,T)},y["SUBRULE"+k]=function(S,T){return this.subruleInternalRecord(S,P,T)},y["OPTION"+k]=function(S){return this.optionInternalRecord(S,P)},y["OR"+k]=function(S){return this.orInternalRecord(S,P)},y["MANY"+k]=function(S){this.manyInternalRecord(P,S)},y["MANY_SEP"+k]=function(S){this.manySepFirstInternalRecord(P,S)},y["AT_LEAST_ONE"+k]=function(S){this.atLeastOneInternalRecord(P,S)},y["AT_LEAST_ONE_SEP"+k]=function(S){this.atLeastOneSepFirstInternalRecord(P,S)}},A=0;A<10;A++)R(A);y.consume=function(P,k,S){return this.consumeInternalRecord(k,P,S)},y.subrule=function(P,k,S){return this.subruleInternalRecord(k,P,S)},y.option=function(P,k){return this.optionInternalRecord(k,P)},y.or=function(P,k){return this.orInternalRecord(k,P)},y.many=function(P,k){this.manyInternalRecord(P,k)},y.atLeastOne=function(P,k){this.atLeastOneInternalRecord(P,k)},y.ACTION=y.ACTION_RECORD,y.BACKTRACK=y.BACKTRACK_RECORD,y.LA=y.LA_RECORD})},b.prototype.disableRecording=function(){var y=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var R=0;R<10;R++){var A=R>0?R:"";delete y["CONSUME"+A],delete y["SUBRULE"+A],delete y["OPTION"+A],delete y["OR"+A],delete y["MANY"+A],delete y["MANY_SEP"+A],delete y["AT_LEAST_ONE"+A],delete y["AT_LEAST_ONE_SEP"+A]}delete y.consume,delete y.subrule,delete y.option,delete y.or,delete y.many,delete y.atLeastOne,delete y.ACTION,delete y.BACKTRACK,delete y.LA})},b.prototype.ACTION_RECORD=function(y){},b.prototype.BACKTRACK_RECORD=function(y,R){return function(){return!0}},b.prototype.LA_RECORD=function(y){return a.END_OF_FILE},b.prototype.topLevelRuleRecord=function(y,R){try{var A=new t.Rule({definition:[],name:y});return A.name=y,this.recordingProdStack.push(A),R.call(this),this.recordingProdStack.pop(),A}catch(P){if(P.KNOWN_RECORDER_ERROR!==!0)try{P.message=P.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw P}throw P}},b.prototype.optionInternalRecord=function(y,R){return v.call(this,t.Option,y,R)},b.prototype.atLeastOneInternalRecord=function(y,R){v.call(this,t.RepetitionMandatory,R,y)},b.prototype.atLeastOneSepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionMandatoryWithSeparator,R,y,s)},b.prototype.manyInternalRecord=function(y,R){v.call(this,t.Repetition,R,y)},b.prototype.manySepFirstInternalRecord=function(y,R){v.call(this,t.RepetitionWithSeparator,R,y,s)},b.prototype.orInternalRecord=function(y,R){return f.call(this,y,R)},b.prototype.subruleInternalRecord=function(y,R,A){if(_(R),!y||e.has(y,"ruleName")===!1){var P=new Error("<SUBRULE"+u(R)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw P.KNOWN_RECORDER_ERROR=!0,P}var k=e.peek(this.recordingProdStack),S=y.ruleName,T=new t.NonTerminal({idx:R,nonTerminalName:S,referencedRule:void 0});return k.definition.push(T),this.outputCst?p:c},b.prototype.consumeInternalRecord=function(y,R,A){if(_(R),!r.hasShortKeyProperty(y)){var P=new Error("<CONSUME"+u(R)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(y)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw P.KNOWN_RECORDER_ERROR=!0,P}var k=e.peek(this.recordingProdStack),S=new t.Terminal({idx:R,terminalType:y});return k.definition.push(S),m},b}();n.GastRecorder=x;function v(b,y,R,A){A===void 0&&(A=!1),_(R);var P=e.peek(this.recordingProdStack),k=e.isFunction(y)?y:y.DEF,S=new b({definition:[],idx:R});return A&&(S.separator=y.SEP),e.has(y,"MAX_LOOKAHEAD")&&(S.maxLookahead=y.MAX_LOOKAHEAD),this.recordingProdStack.push(S),k.call(this),P.definition.push(S),this.recordingProdStack.pop(),c}function f(b,y){var R=this;_(y);var A=e.peek(this.recordingProdStack),P=e.isArray(b)===!1,k=P===!1?b:b.DEF,S=new t.Alternation({definition:[],idx:y,ignoreAmbiguities:P&&b.IGNORE_AMBIGUITIES===!0});e.has(b,"MAX_LOOKAHEAD")&&(S.maxLookahead=b.MAX_LOOKAHEAD);var T=e.some(k,function(w){return e.isFunction(w.GATE)});return S.hasPredicates=T,A.definition.push(S),e.forEach(k,function(w){var C=new t.Alternative({definition:[]});S.definition.push(C),e.has(w,"IGNORE_AMBIGUITIES")?C.ignoreAmbiguities=w.IGNORE_AMBIGUITIES:e.has(w,"GATE")&&(C.ignoreAmbiguities=!0),R.recordingProdStack.push(C),w.ALT.call(R),R.recordingProdStack.pop()}),c}function u(b){return b===0?"":""+b}function _(b){if(b<0||b>d){var y=new Error("Invalid DSL Method idx value: <"+b+`>
	`+("Idx value must be a none negative value smaller than "+(d+1)));throw y.KNOWN_RECORDER_ERROR=!0,y}}}),tv=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=ft(),t=pn(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var a=o.traceInitPerf,l=typeof a=="number";this.traceInitMaxIdent=l?a:1/0,this.traceInitPerf=l?a>0:a}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,a){if(this.traceInitPerf===!0){this.traceInitIndent++;var l=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(l+"--> <"+o+">");var c=e.timer(a),s=c.time,d=c.value,h=s>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&h(l+"<-- <"+o+"> time: "+s+"ms"),this.traceInitIndent--,d}else return a()},r}();n.PerformanceTracer=i}),nv=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(a){if(a!=="constructor"){var l=Object.getOwnPropertyDescriptor(o,a);l&&(l.get||l.set)?Object.defineProperty(t.prototype,a,l):t.prototype[a]=r.prototype[a]}})})}n.applyMixins=e}),pn=it(n=>{var e=n&&n.__extends||function(){var A=function(P,k){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(S,T){S.__proto__=T}||function(S,T){for(var w in T)Object.prototype.hasOwnProperty.call(T,w)&&(S[w]=T[w])},A(P,k)};return function(P,k){if(typeof k!="function"&&k!==null)throw new TypeError("Class extends value "+String(k)+" is not a constructor or null");A(P,k);function S(){this.constructor=P}P.prototype=k===null?Object.create(k):(S.prototype=k.prototype,new S)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=ft(),i=Gx(),r=Ei(),o=Xo(),a=Wx(),l=Eu(),c=Xx(),s=Kx(),d=qx(),h=$x(),m=Zx(),p=Jx(),x=Qx(),v=ev(),f=tv(),u=nv();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(A){A[A.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",A[A.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",A[A.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",A[A.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",A[A.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",A[A.LEFT_RECURSION=5]="LEFT_RECURSION",A[A.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",A[A.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",A[A.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",A[A.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",A[A.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",A[A.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",A[A.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function _(A){return A===void 0&&(A=void 0),function(){return A}}n.EMPTY_ALT=_;var b=function(){function A(P,k){this.definitionErrors=[],this.selfAnalysisDone=!1;var S=this;if(S.initErrorHandler(k),S.initLexerAdapter(),S.initLooksAhead(k),S.initRecognizerEngine(P,k),S.initRecoverable(k),S.initTreeBuilder(k),S.initContentAssist(),S.initGastRecorder(k),S.initPerformanceTracer(k),t.has(k,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(k,"skipValidations")?k.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return A.performSelfAnalysis=function(P){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},A.prototype.performSelfAnalysis=function(){var P=this;this.TRACE_INIT("performSelfAnalysis",function(){var k;P.selfAnalysisDone=!0;var S=P.className;P.TRACE_INIT("toFastProps",function(){t.toFastProperties(P)}),P.TRACE_INIT("Grammar Recording",function(){try{P.enableRecording(),t.forEach(P.definedRulesNames,function(w){var C=P[w],L=C.originalGrammarAction,O=void 0;P.TRACE_INIT(w+" Rule",function(){O=P.topLevelRuleRecord(w,L)}),P.gastProductionsCache[w]=O})}finally{P.disableRecording()}});var T=[];if(P.TRACE_INIT("Grammar Resolving",function(){T=a.resolveGrammar({rules:t.values(P.gastProductionsCache)}),P.definitionErrors=P.definitionErrors.concat(T)}),P.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(T)&&P.skipValidations===!1){var w=a.validateGrammar({rules:t.values(P.gastProductionsCache),maxLookahead:P.maxLookahead,tokenTypes:t.values(P.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:S});P.definitionErrors=P.definitionErrors.concat(w)}}),t.isEmpty(P.definitionErrors)&&(P.recoveryEnabled&&P.TRACE_INIT("computeAllProdsFollows",function(){var w=i.computeAllProdsFollows(t.values(P.gastProductionsCache));P.resyncFollows=w}),P.TRACE_INIT("ComputeLookaheadFunctions",function(){P.preComputeLookaheadFunctions(t.values(P.gastProductionsCache))})),!A.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(P.definitionErrors))throw k=t.map(P.definitionErrors,function(w){return w.message}),new Error(`Parser Definition Errors detected:
 `+k.join(`
-------------------------------
`))})},A.DEFER_DEFINITION_ERRORS_HANDLING=!1,A}();n.Parser=b,u.applyMixins(b,[l.Recoverable,c.LooksAhead,s.TreeBuilder,d.LexerAdapter,m.RecognizerEngine,h.RecognizerApi,p.ErrorHandler,x.ContentAssist,v.GastRecorder,f.PerformanceTracer]);var y=function(A){e(P,A);function P(k,S){S===void 0&&(S=n.DEFAULT_PARSER_CONFIG);var T=this,w=t.cloneObj(S);return w.outputCst=!0,T=A.call(this,k,w)||this,T}return P}(b);n.CstParser=y;var R=function(A){e(P,A);function P(k,S){S===void 0&&(S=n.DEFAULT_PARSER_CONFIG);var T=this,w=t.cloneObj(S);return w.outputCst=!1,T=A.call(this,k,w)||this,T}return P}(b);n.EmbeddedActionsParser=R}),iv=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=gu();function t(i,r){var o=r===void 0?{}:r,a=o.resourceBase,l=a===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":a,c=o.css,s=c===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":c,d=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,h=`
<link rel='stylesheet' href='`+s+`'>
`,m=`
<script src='`+l+`vendor/railroad-diagrams.js'><\/script>
<script src='`+l+`src/diagrams_builder.js'><\/script>
<script src='`+l+`src/diagrams_behavior.js'><\/script>
<script src='`+l+`src/main.js'><\/script>
`,p=`
<div id="diagrams" align="center"></div>
`,x=`
<script>
    window.serializedGrammar = `+JSON.stringify(i,null,"  ")+`;
<\/script>
`,v=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return d+h+m+p+x+v}n.createSyntaxDiagramsCode=t}),rv=it(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=gu();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=pn();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=Ho();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=Ei();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=Xo();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var a=zr();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return a.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return a.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return a.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return a.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return a.NoViableAltException}});var l=vu();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return l.defaultLexerErrorProvider}});var c=sn();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return c.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return c.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return c.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return c.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return c.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return c.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return c.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return c.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return c.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return c.Terminal}});var s=sn();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return s.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return s.serializeProduction}});var d=Br();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return d.GAstVisitor}});function h(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=h;var m=iv();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return m.createSyntaxDiagramsCode}});var p=function(){function x(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return x}();n.Parser=p});const yr=rv();class ov extends Tn{constructor(e){super(e)}load(e,t,i,r){const o=this,a=o.path===""?Ff.extractUrlBase(e):o.path,l=new su(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(e,function(c){try{t(o.parse(c,a))}catch(s){r?r(s):console.error(s),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(E){const g=o(),M=new av(g.tokens),D=new lv(g.tokenVocabulary),N=a(D.getBaseCstVisitorConstructor()),F=M.lex(E);D.input=F.tokens;const q=D.vrml();if(D.errors.length>0)throw console.error(D.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return N.visit(q)}function o(){const E=yr.createToken,g=E({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),M=E({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:g}),D=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],N=E({name:"Version",pattern:/#VRML.*/,longer_alt:M}),F=E({name:"NodeName",pattern:new RegExp(D.join("|")),longer_alt:M}),q=E({name:"DEF",pattern:/DEF/,longer_alt:M}),Y=E({name:"USE",pattern:/USE/,longer_alt:M}),le=E({name:"ROUTE",pattern:/ROUTE/,longer_alt:M}),fe=E({name:"TO",pattern:/TO/,longer_alt:M}),ie=E({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),ge=E({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),ke=E({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),ze=E({name:"TrueLiteral",pattern:/TRUE/}),Le=E({name:"FalseLiteral",pattern:/FALSE/}),De=E({name:"NullLiteral",pattern:/NULL/}),z=E({name:"LSquare",pattern:/\[/}),Ce=E({name:"RSquare",pattern:/]/}),Ae=E({name:"LCurly",pattern:/{/}),Ee=E({name:"RCurly",pattern:/}/}),W=E({name:"Comment",pattern:/#.*/,group:yr.Lexer.SKIPPED}),ve=[E({name:"WhiteSpace",pattern:/[ ,\s]/,group:yr.Lexer.SKIPPED}),F,q,Y,le,fe,ze,Le,De,N,M,g,ie,ge,ke,z,Ce,Ae,Ee,W],Ne={};for(let Pe=0,Me=ve.length;Pe<Me;Pe++){const Re=ve[Pe];Ne[Re.name]=Re}return{tokens:ve,tokenVocabulary:Ne}}function a(E){class g extends E{constructor(){super(),this.validateVisitor()}vrml(N){const F={version:this.visit(N.version),nodes:[],routes:[]};for(let q=0,Y=N.node.length;q<Y;q++){const le=N.node[q];F.nodes.push(this.visit(le))}if(N.route)for(let q=0,Y=N.route.length;q<Y;q++){const le=N.route[q];F.routes.push(this.visit(le))}return F}version(N){return N.Version[0].image}node(N){const F={name:N.NodeName[0].image,fields:[]};if(N.field)for(let q=0,Y=N.field.length;q<Y;q++){const le=N.field[q];F.fields.push(this.visit(le))}return N.def&&(F.DEF=this.visit(N.def[0])),F}field(N){const F={name:N.Identifier[0].image,type:null,values:null};let q;return N.singleFieldValue&&(q=this.visit(N.singleFieldValue[0])),N.multiFieldValue&&(q=this.visit(N.multiFieldValue[0])),F.type=q.type,F.values=q.values,F}def(N){return(N.Identifier||N.NodeName)[0].image}use(N){return{USE:(N.Identifier||N.NodeName)[0].image}}singleFieldValue(N){return M(this,N)}multiFieldValue(N){return M(this,N)}route(N){return{FROM:N.RouteIdentifier[0].image,TO:N.RouteIdentifier[1].image}}}function M(D,N){const F={type:null,values:[]};if(N.node){F.type="node";for(let q=0,Y=N.node.length;q<Y;q++){const le=N.node[q];F.values.push(D.visit(le))}}if(N.use){F.type="use";for(let q=0,Y=N.use.length;q<Y;q++){const le=N.use[q];F.values.push(D.visit(le))}}if(N.StringLiteral){F.type="string";for(let q=0,Y=N.StringLiteral.length;q<Y;q++){const le=N.StringLiteral[q];F.values.push(le.image.replace(/'|"/g,""))}}if(N.NumberLiteral){F.type="number";for(let q=0,Y=N.NumberLiteral.length;q<Y;q++){const le=N.NumberLiteral[q];F.values.push(parseFloat(le.image))}}if(N.HexLiteral){F.type="hex";for(let q=0,Y=N.HexLiteral.length;q<Y;q++){const le=N.HexLiteral[q];F.values.push(le.image)}}if(N.TrueLiteral){F.type="boolean";for(let q=0,Y=N.TrueLiteral.length;q<Y;q++)N.TrueLiteral[q].image==="TRUE"&&F.values.push(!0)}if(N.FalseLiteral){F.type="boolean";for(let q=0,Y=N.FalseLiteral.length;q<Y;q++)N.FalseLiteral[q].image==="FALSE"&&F.values.push(!1)}return N.NullLiteral&&(F.type="null",N.NullLiteral.forEach(function(){F.values.push(null)})),F}return new g}function l(E){const g=E.nodes,M=new Jc;for(let D=0,N=g.length;D<N;D++){const F=g[D];c(F)}for(let D=0,N=g.length;D<N;D++){const F=g[D],q=s(F);q instanceof Tt&&M.add(q),F.name==="WorldInfo"&&(M.userData.worldInfo=q)}return M}function c(E){E.DEF&&(i[E.DEF]=E);const g=E.fields;for(let M=0,D=g.length;M<D;M++){const N=g[M];if(N.type==="node"){const F=N.values;for(let q=0,Y=F.length;q<Y;q++)c(F[q])}}}function s(E){return E.USE?X(E.USE):(E.build!==void 0||(E.build=d(E)),E.build)}function d(E){const g=E.name;let M;switch(g){case"Anchor":case"Group":case"Transform":case"Collision":M=h(E);break;case"Background":M=m(E);break;case"Shape":M=p(E);break;case"Appearance":M=x(E);break;case"Material":M=v(E);break;case"ImageTexture":M=b(E);break;case"PixelTexture":M=_(E);break;case"TextureTransform":M=y(E);break;case"IndexedFaceSet":M=P(E);break;case"IndexedLineSet":M=k(E);break;case"PointSet":M=S(E);break;case"Box":M=T(E);break;case"Cone":M=w(E);break;case"Cylinder":M=C(E);break;case"Sphere":M=L(E);break;case"ElevationGrid":M=O(E);break;case"Extrusion":M=G(E);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":M=R(E);break;case"WorldInfo":M=A(E);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",g);break}return M!==void 0&&E.DEF!==void 0&&M.hasOwnProperty("name")===!0&&(M.name=E.DEF),M}function h(E){const g=new Qn,M=E.fields;for(let D=0,N=M.length;D<N;D++){const F=M[D],q=F.name,Y=F.values;switch(q){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":J(Y,g);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const le=new ae(Y[0],Y[1],Y[2]).normalize(),fe=Y[3];g.quaternion.setFromAxisAngle(le,fe);break;case"scale":g.scale.set(Y[0],Y[1],Y[2]);break;case"scaleOrientation":break;case"translation":g.position.set(Y[0],Y[1],Y[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return g}function m(E){const g=new Qn;let M,D,N,F;const q=E.fields;for(let le=0,fe=q.length;le<fe;le++){const ie=q[le],ge=ie.name,ke=ie.values;switch(ge){case"groundAngle":M=ke;break;case"groundColor":D=ke;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":N=ke;break;case"skyColor":F=ke;break;default:console.warn("THREE.VRMLLoader: Unknown field:",ge);break}}const Y=1e4;if(F){const le=new vr(Y,32,16),fe=new Xi({fog:!1,side:Ht,depthWrite:!1,depthTest:!1});F.length>3?(ee(le,Y,N,$(F),!0),fe.vertexColors=!0):fe.color.setRGB(F[0],F[1],F[2],Rt);const ie=new Bt(le,fe);g.add(ie)}if(D&&D.length>0){const le=new vr(Y,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),fe=new Xi({fog:!1,side:Ht,vertexColors:!0,depthWrite:!1,depthTest:!1});ee(le,Y,M,$(D),!1);const ie=new Bt(le,fe);g.add(ie)}return g.renderOrder=-1/0,g}function p(E){const g=E.fields;let M=new Xi({name:Tn.DEFAULT_MATERIAL_NAME,color:0}),D;for(let F=0,q=g.length;F<q;F++){const Y=g[F],le=Y.name,fe=Y.values;switch(le){case"appearance":fe[0]!==null&&(M=s(fe[0]));break;case"geometry":fe[0]!==null&&(D=s(fe[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",le);break}}let N;if(D&&D.attributes.position){const F=D._type;if(F==="points"){const q=new eu({name:Tn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:M.opacity,transparent:M.transparent});D.attributes.color!==void 0?q.vertexColors=!0:M.isMeshPhongMaterial&&q.color.copy(M.emissive),N=new of(D,q)}else if(F==="line"){const q=new Qc({name:Tn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:M.opacity,transparent:M.transparent});D.attributes.color!==void 0?q.vertexColors=!0:M.isMeshPhongMaterial&&q.color.copy(M.emissive),N=new rf(D,q)}else D._solid!==void 0&&(M.side=D._solid?zn:_n),D.attributes.color!==void 0&&(M.vertexColors=!0),N=new Bt(D,M)}else N=new Tt,N.visible=!1;return N}function x(E){let g=new Mf,M;const D=E.fields;for(let N=0,F=D.length;N<F;N++){const q=D[N],Y=q.name,le=q.values;switch(Y){case"material":if(le[0]!==null){const ie=s(le[0]);ie.diffuseColor&&g.color.copy(ie.diffuseColor),ie.emissiveColor&&g.emissive.copy(ie.emissiveColor),ie.shininess&&(g.shininess=ie.shininess),ie.specularColor&&g.specular.copy(ie.specularColor),ie.transparency&&(g.opacity=1-ie.transparency),ie.transparency>0&&(g.transparent=!0)}else g=new Xi({name:Tn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const fe=le[0];fe!==null&&(fe.name==="ImageTexture"||fe.name==="PixelTexture")&&(g.map=s(fe));break;case"textureTransform":le[0]!==null&&(M=s(le[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}if(g.map){if(g.map.__type){switch(g.map.__type){case vn.INTENSITY_ALPHA:g.opacity=1;break;case vn.RGB:g.color.set(16777215);break;case vn.RGBA:g.color.set(16777215),g.opacity=1;break}delete g.map.__type}M&&(g.map.center.copy(M.center),g.map.rotation=M.rotation,g.map.repeat.copy(M.scale),g.map.offset.copy(M.translation))}return g}function v(E){const g={},M=E.fields;for(let D=0,N=M.length;D<N;D++){const F=M[D],q=F.name,Y=F.values;switch(q){case"ambientIntensity":break;case"diffuseColor":g.diffuseColor=new nt().setRGB(Y[0],Y[1],Y[2],Rt);break;case"emissiveColor":g.emissiveColor=new nt().setRGB(Y[0],Y[1],Y[2],Rt);break;case"shininess":g.shininess=Y[0];break;case"specularColor":g.specularColor=new nt().setRGB(Y[0],Y[1],Y[2],Rt);break;case"transparency":g.transparency=Y[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return g}function f(E,g,M){let D;switch(g){case vn.INTENSITY:D=parseInt(E),M.r=D,M.g=D,M.b=D,M.a=1;break;case vn.INTENSITY_ALPHA:D=parseInt("0x"+E.substring(2,4)),M.r=D,M.g=D,M.b=D,M.a=parseInt("0x"+E.substring(4,6));break;case vn.RGB:M.r=parseInt("0x"+E.substring(2,4)),M.g=parseInt("0x"+E.substring(4,6)),M.b=parseInt("0x"+E.substring(6,8)),M.a=1;break;case vn.RGBA:M.r=parseInt("0x"+E.substring(2,4)),M.g=parseInt("0x"+E.substring(4,6)),M.b=parseInt("0x"+E.substring(6,8)),M.a=parseInt("0x"+E.substring(8,10));break}}function u(E){let g;switch(E){case 1:g=vn.INTENSITY;break;case 2:g=vn.INTENSITY_ALPHA;break;case 3:g=vn.RGB;break;case 4:g=vn.RGBA;break}return g}function _(E){let g,M=Jn,D=Jn;const N=E.fields;for(let F=0,q=N.length;F<q;F++){const Y=N[F],le=Y.name,fe=Y.values;switch(le){case"image":const ie=fe[0],ge=fe[1],ke=fe[2],ze=u(ke),Le=new Uint8Array(4*ie*ge),De={r:0,g:0,b:0,a:0};for(let z=3,Ce=0,Ae=fe.length;z<Ae;z++,Ce++){f(fe[z],ze,De);const Ee=Ce*4;Le[Ee+0]=De.r,Le[Ee+1]=De.g,Le[Ee+2]=De.b,Le[Ee+3]=De.a}g=new Ys(Le,ie,ge),g.colorSpace=Rt,g.needsUpdate=!0,g.__type=ze;break;case"repeatS":fe[0]===!1&&(M=on);break;case"repeatT":fe[0]===!1&&(D=on);break;default:console.warn("THREE.VRMLLoader: Unknown field:",le);break}}return g&&(g.wrapS=M,g.wrapT=D),g}function b(E){let g,M=Jn,D=Jn;const N=E.fields;for(let F=0,q=N.length;F<q;F++){const Y=N[F],le=Y.name,fe=Y.values;switch(le){case"url":const ie=fe[0];ie&&(g=ye.load(ie));break;case"repeatS":fe[0]===!1&&(M=on);break;case"repeatT":fe[0]===!1&&(D=on);break;default:console.warn("THREE.VRMLLoader: Unknown field:",le);break}}return g&&(g.wrapS=M,g.wrapT=D,g.colorSpace=Rt),g}function y(E){const g={center:new Ke,rotation:new Ke,scale:new Ke,translation:new Ke},M=E.fields;for(let D=0,N=M.length;D<N;D++){const F=M[D],q=F.name,Y=F.values;switch(q){case"center":g.center.set(Y[0],Y[1]);break;case"rotation":g.rotation=Y[0];break;case"scale":g.scale.set(Y[0],Y[1]);break;case"translation":g.translation.set(Y[0],Y[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return g}function R(E){return E.fields[0].values}function A(E){const g={},M=E.fields;for(let D=0,N=M.length;D<N;D++){const F=M[D],q=F.name,Y=F.values;switch(q){case"title":g.title=Y[0];break;case"info":g.info=Y;break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return g}function P(E){let g,M,D,N,F=!0,q=!0,Y=0,le,fe,ie,ge,ke=!0,ze=!0;const Le=E.fields;for(let Z=0,ve=Le.length;Z<ve;Z++){const Ne=Le[Z],Pe=Ne.name,Me=Ne.values;switch(Pe){case"color":const Re=Me[0];Re!==null&&(g=s(Re));break;case"coord":const Ie=Me[0];Ie!==null&&(M=s(Ie));break;case"normal":const Oe=Me[0];Oe!==null&&(D=s(Oe));break;case"texCoord":const Xe=Me[0];Xe!==null&&(N=s(Xe));break;case"ccw":F=Me[0];break;case"colorIndex":le=Me;break;case"colorPerVertex":ke=Me[0];break;case"convex":break;case"coordIndex":fe=Me;break;case"creaseAngle":Y=Me[0];break;case"normalIndex":ie=Me;break;case"normalPerVertex":ze=Me[0];break;case"solid":q=Me[0];break;case"texCoordIndex":ge=Me;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Pe);break}}if(fe===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new Ot;const De=j(fe,F);let z,Ce,Ae;if(g){if(ke===!0)if(le&&le.length>0){const Z=j(le,F);z=K(De,Z,g,3)}else z=_e(De,new st(g,3));else if(le&&le.length>0){const Z=de(g,le),ve=ne(Z,fe);z=Q(De,ve)}else{const Z=ne(g,fe);z=Q(De,Z)}he(z)}if(D)if(ze===!0)if(ie&&ie.length>0){const Z=j(ie,F);Ce=K(De,Z,D,3)}else Ce=_e(De,new st(D,3));else if(ie&&ie.length>0){const Z=de(D,ie),ve=ne(Z,fe);Ce=Q(De,ve)}else{const Z=ne(D,fe);Ce=Q(De,Z)}else Ce=B(De,M,Y);if(N)if(ge&&ge.length>0){const Z=j(ge,F);Ae=K(De,Z,N,2)}else Ae=_e(De,new st(N,2));const Ee=new Ot,W=_e(De,new st(M,3));return Ee.setAttribute("position",W),Ee.setAttribute("normal",Ce),z&&Ee.setAttribute("color",z),Ae&&Ee.setAttribute("uv",Ae),Ee._solid=q,Ee._type="mesh",Ee}function k(E){let g,M,D,N,F=!0;const q=E.fields;for(let ge=0,ke=q.length;ge<ke;ge++){const ze=q[ge],Le=ze.name,De=ze.values;switch(Le){case"color":const z=De[0];z!==null&&(g=s(z));break;case"coord":const Ce=De[0];Ce!==null&&(M=s(Ce));break;case"colorIndex":D=De;break;case"colorPerVertex":F=De[0];break;case"coordIndex":N=De;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Le);break}}let Y;const le=xe(N);if(g){if(F===!0)if(D.length>0){const ge=xe(D);Y=K(le,ge,g,3)}else Y=_e(le,new st(g,3));else if(D.length>0){const ge=de(g,D),ke=re(ge,N);Y=ue(le,ke)}else{const ge=re(g,N);Y=ue(le,ge)}he(Y)}const fe=new Ot,ie=_e(le,new st(M,3));return fe.setAttribute("position",ie),Y&&fe.setAttribute("color",Y),fe._type="line",fe}function S(E){let g,M;const D=E.fields;for(let F=0,q=D.length;F<q;F++){const Y=D[F],le=Y.name,fe=Y.values;switch(le){case"color":const ie=fe[0];ie!==null&&(g=s(ie));break;case"coord":const ge=fe[0];ge!==null&&(M=s(ge));break;default:console.warn("THREE.VRMLLoader: Unknown field:",le);break}}const N=new Ot;if(N.setAttribute("position",new st(M,3)),g){const F=new st(g,3);he(F),N.setAttribute("color",F)}return N._type="points",N}function T(E){const g=new ae(2,2,2),M=E.fields;for(let N=0,F=M.length;N<F;N++){const q=M[N],Y=q.name,le=q.values;switch(Y){case"size":g.x=le[0],g.y=le[1],g.z=le[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return new ir(g.x,g.y,g.z)}function w(E){let g=1,M=2,D=!1;const N=E.fields;for(let q=0,Y=N.length;q<Y;q++){const le=N[q],fe=le.name,ie=le.values;switch(fe){case"bottom":D=!ie[0];break;case"bottomRadius":g=ie[0];break;case"height":M=ie[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",fe);break}}return new qs(g,M,16,1,D)}function C(E){let g=1,M=2;const D=E.fields;for(let F=0,q=D.length;F<q;F++){const Y=D[F],le=Y.name,fe=Y.values;switch(le){case"bottom":break;case"radius":g=fe[0];break;case"height":M=fe[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",le);break}}return new Bo(g,g,M,16,1)}function L(E){let g=1;const M=E.fields;for(let N=0,F=M.length;N<F;N++){const q=M[N],Y=q.name,le=q.values;switch(Y){case"radius":g=le[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return new vr(g,16,16)}function O(E){let g,M,D,N,F=!0,q=!0,Y=!0,le=!0,fe=0,ie=2,ge=2,ke=1,ze=1;const Le=E.fields;for(let Me=0,Re=Le.length;Me<Re;Me++){const Ie=Le[Me],Oe=Ie.name,Xe=Ie.values;switch(Oe){case"color":const ut=Xe[0];ut!==null&&(g=s(ut));break;case"normal":const It=Xe[0];It!==null&&(M=s(It));break;case"texCoord":const zt=Xe[0];zt!==null&&(D=s(zt));break;case"height":N=Xe;break;case"ccw":le=Xe[0];break;case"colorPerVertex":F=Xe[0];break;case"creaseAngle":fe=Xe[0];break;case"normalPerVertex":q=Xe[0];break;case"solid":Y=Xe[0];break;case"xDimension":ie=Xe[0];break;case"xSpacing":ke=Xe[0];break;case"zDimension":ge=Xe[0];break;case"zSpacing":ze=Xe[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Oe);break}}const De=[],z=[],Ce=[],Ae=[];for(let Me=0;Me<ge;Me++)for(let Re=0;Re<ie;Re++){const Ie=Me*ie+Re,Oe=ke*Me,Xe=N[Ie],ut=ze*Re;if(De.push(Oe,Xe,ut),g&&F===!0){const It=g[Ie*3+0],zt=g[Ie*3+1],En=g[Ie*3+2];Ce.push(It,zt,En)}if(M&&q===!0){const It=M[Ie*3+0],zt=M[Ie*3+1],En=M[Ie*3+2];z.push(It,zt,En)}if(D){const It=D[Ie*2+0],zt=D[Ie*2+1];Ae.push(It,zt)}else Ae.push(Me/(ie-1),Re/(ge-1))}const Ee=[];for(let Me=0;Me<ie-1;Me++)for(let Re=0;Re<ge-1;Re++){const Ie=Me+Re*ie,Oe=Me+(Re+1)*ie,Xe=Me+1+(Re+1)*ie,ut=Me+1+Re*ie;le===!0?(Ee.push(Ie,Xe,Oe),Ee.push(Xe,Ie,ut)):(Ee.push(Ie,Oe,Xe),Ee.push(Xe,ut,Ie))}const W=_e(Ee,new st(De,3)),Z=_e(Ee,new st(Ae,2));let ve,Ne;if(g){if(F===!1){for(let Me=0;Me<ie-1;Me++)for(let Re=0;Re<ge-1;Re++){const Ie=Me+Re*(ie-1),Oe=g[Ie*3+0],Xe=g[Ie*3+1],ut=g[Ie*3+2];Ce.push(Oe,Xe,ut),Ce.push(Oe,Xe,ut),Ce.push(Oe,Xe,ut),Ce.push(Oe,Xe,ut),Ce.push(Oe,Xe,ut),Ce.push(Oe,Xe,ut)}ve=new st(Ce,3)}else ve=_e(Ee,new st(Ce,3));he(ve)}if(M)if(q===!1){for(let Me=0;Me<ie-1;Me++)for(let Re=0;Re<ge-1;Re++){const Ie=Me+Re*(ie-1),Oe=M[Ie*3+0],Xe=M[Ie*3+1],ut=M[Ie*3+2];z.push(Oe,Xe,ut),z.push(Oe,Xe,ut),z.push(Oe,Xe,ut),z.push(Oe,Xe,ut),z.push(Oe,Xe,ut),z.push(Oe,Xe,ut)}Ne=new st(z,3)}else Ne=_e(Ee,new st(z,3));else Ne=B(Ee,De,fe);const Pe=new Ot;return Pe.setAttribute("position",W),Pe.setAttribute("normal",Ne),Pe.setAttribute("uv",Z),ve&&Pe.setAttribute("color",ve),Pe._solid=Y,Pe._type="mesh",Pe}function G(E){let g=[1,1,1,-1,-1,-1,-1,1,1,1],M=[0,0,0,0,1,0],D,N,F=!0,q=!0,Y=0,le=!0,fe=!0;const ie=E.fields;for(let Pe=0,Me=ie.length;Pe<Me;Pe++){const Re=ie[Pe],Ie=Re.name,Oe=Re.values;switch(Ie){case"beginCap":F=Oe[0];break;case"ccw":q=Oe[0];break;case"convex":break;case"creaseAngle":Y=Oe[0];break;case"crossSection":g=Oe;break;case"endCap":le=Oe[0];break;case"orientation":N=Oe;break;case"scale":D=Oe;break;case"solid":fe=Oe[0];break;case"spine":M=Oe;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ie);break}}const ge=g[0]===g[g.length-2]&&g[1]===g[g.length-1],ke=[],ze=new ae,Le=new ae,De=new ae,z=new ae,Ce=new ri;for(let Pe=0,Me=0,Re=0,Ie=M.length;Pe<Ie;Pe+=3,Me+=2,Re+=4){ze.fromArray(M,Pe),Le.x=D?D[Me+0]:1,Le.y=1,Le.z=D?D[Me+1]:1,De.x=N?N[Re+0]:0,De.y=N?N[Re+1]:0,De.z=N?N[Re+2]:1;const Oe=N?N[Re+3]:0;for(let Xe=0,ut=g.length;Xe<ut;Xe+=2)z.x=g[Xe+0],z.y=0,z.z=g[Xe+1],z.multiply(Le),Ce.setFromAxisAngle(De,Oe),z.applyQuaternion(Ce),z.add(ze),ke.push(z.x,z.y,z.z)}const Ae=[],Ee=M.length/3,W=g.length/2;for(let Pe=0;Pe<Ee-1;Pe++)for(let Me=0;Me<W-1;Me++){const Re=Me+Pe*W;let Ie=Me+1+Pe*W;const Oe=Me+(Pe+1)*W;let Xe=Me+1+(Pe+1)*W;Me===W-2&&ge===!0&&(Ie=Pe*W,Xe=(Pe+1)*W),q===!0?(Ae.push(Re,Ie,Oe),Ae.push(Oe,Ie,Xe)):(Ae.push(Re,Oe,Ie),Ae.push(Oe,Xe,Ie))}if(F===!0||le===!0){const Pe=[];for(let Ie=0,Oe=g.length;Ie<Oe;Ie+=2)Pe.push(new Ke(g[Ie],g[Ie+1]));const Me=$s.triangulateShape(Pe,[]),Re=[];for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const Xe=Me[Ie];Re.push(Xe[0],Xe[1],Xe[2])}if(F===!0)for(let Ie=0,Oe=Re.length;Ie<Oe;Ie+=3)q===!0?Ae.push(Re[Ie+0],Re[Ie+1],Re[Ie+2]):Ae.push(Re[Ie+0],Re[Ie+2],Re[Ie+1]);if(le===!0){const Ie=W*(Ee-1);for(let Oe=0,Xe=Re.length;Oe<Xe;Oe+=3)q===!0?Ae.push(Ie+Re[Oe+0],Ie+Re[Oe+2],Ie+Re[Oe+1]):Ae.push(Ie+Re[Oe+0],Ie+Re[Oe+1],Ie+Re[Oe+2])}}const Z=_e(Ae,new st(ke,3)),ve=B(Ae,ke,Y),Ne=new Ot;return Ne.setAttribute("position",Z),Ne.setAttribute("normal",ve),Ne._solid=fe,Ne._type="mesh",Ne}function X(E){const g=i[E],M=s(g);return M.isObject3D||M.isMaterial?M.clone():M}function J(E,g){for(let M=0,D=E.length;M<D;M++){const N=s(E[M]);N instanceof Tt&&g.add(N)}}function j(E,g){const M=[];let D=0;for(let N=0,F=E.length;N<F;N++){const q=E[D],Y=E[N+(g?1:2)],le=E[N+(g?2:1)];M.push(q,Y,le),(E[N+3]===-1||N+3>=F)&&(N+=3,D=N+1)}return M}function ne(E,g){const M=[];let D=0;for(let N=0,F=g.length;N<F;N++){const q=D*3,Y=E[q],le=E[q+1],fe=E[q+2];M.push(Y,le,fe),(g[N+3]===-1||N+3>=F)&&(N+=3,D++)}return M}function de(E,g){const M=[];for(let D=0,N=g.length;D<N;D++){const q=g[D]*3,Y=E[q],le=E[q+1],fe=E[q+2];M.push(Y,le,fe)}return M}function xe(E){const g=[];for(let M=0,D=E.length;M<D;M++){const N=E[M],F=E[M+1];g.push(N,F),(E[M+2]===-1||M+2>=D)&&(M+=2)}return g}function re(E,g){const M=[];let D=0;for(let N=0,F=g.length;N<F;N++){const q=D*3,Y=E[q],le=E[q+1],fe=E[q+2];M.push(Y,le,fe),(g[N+2]===-1||N+2>=F)&&(N+=2,D++)}return M}const oe=new ae,we=new ae,te=new ae,H=new Ke,U=new Ke,V=new Ke;function K(E,g,M,D){const N=[];for(let F=0,q=E.length;F<q;F+=3){const Y=g[F],le=g[F+1],fe=g[F+2];D===2?(H.fromArray(M,Y*D),U.fromArray(M,le*D),V.fromArray(M,fe*D),N.push(H.x,H.y),N.push(U.x,U.y),N.push(V.x,V.y)):(oe.fromArray(M,Y*D),we.fromArray(M,le*D),te.fromArray(M,fe*D),N.push(oe.x,oe.y,oe.z),N.push(we.x,we.y,we.z),N.push(te.x,te.y,te.z))}return new st(N,D)}function Q(E,g){const M=[];for(let D=0,N=0,F=E.length;D<F;D+=3,N++)oe.fromArray(g,N*3),M.push(oe.x,oe.y,oe.z),M.push(oe.x,oe.y,oe.z),M.push(oe.x,oe.y,oe.z);return new st(M,3)}function ue(E,g){const M=[];for(let D=0,N=0,F=E.length;D<F;D+=2,N++)oe.fromArray(g,N*3),M.push(oe.x,oe.y,oe.z),M.push(oe.x,oe.y,oe.z);return new st(M,3)}function _e(E,g){const M=g.array,D=g.itemSize,N=new M.constructor(E.length*D);let F=0,q=0;for(let Y=0,le=E.length;Y<le;Y++){F=E[Y]*D;for(let fe=0;fe<D;fe++)N[q++]=M[F++]}return new st(N,D)}const Te=new ae,He=new ae;function B(E,g,M){const D=[],N={};for(let q=0,Y=E.length;q<Y;q+=3){const le=E[q],fe=E[q+1],ie=E[q+2],ge=new cv(le,fe,ie);oe.fromArray(g,le*3),we.fromArray(g,fe*3),te.fromArray(g,ie*3),He.subVectors(te,we),Te.subVectors(oe,we),He.cross(Te),He.normalize(),ge.normal.copy(He),N[le]===void 0&&(N[le]=[]),N[fe]===void 0&&(N[fe]=[]),N[ie]===void 0&&(N[ie]=[]),N[le].push(ge.normal),N[fe].push(ge.normal),N[ie].push(ge.normal),D.push(ge)}const F=[];for(let q=0,Y=D.length;q<Y;q++){const le=D[q],fe=Fe(N[le.a],le.normal,M),ie=Fe(N[le.b],le.normal,M),ge=Fe(N[le.c],le.normal,M);oe.fromArray(g,le.a*3),we.fromArray(g,le.b*3),te.fromArray(g,le.c*3),F.push(fe.x,fe.y,fe.z),F.push(ie.x,ie.y,ie.z),F.push(ge.x,ge.y,ge.z)}return new st(F,3)}function Fe(E,g,M){const D=new ae;if(M===0)D.copy(g);else for(let N=0,F=E.length;N<F;N++)E[N].angleTo(g)<M&&D.add(E[N]);return D.normalize()}function $(E){const g=[];for(let M=0,D=E.length;M<D;M+=3)g.push(new nt(E[M],E[M+1],E[M+2]));return g}function he(E){const g=new nt;for(let M=0;M<E.count;M++)g.fromBufferAttribute(E,M),dt.colorSpaceToWorking(g,Rt),E.setXYZ(M,g.r,g.g,g.b)}function ee(E,g,M,D,N){const F=[],q=N===!0?0:Math.PI;for(let ke=0,ze=D.length;ke<ze;ke++){let Le=ke===0?0:M[ke-1];Le=N===!0?Le:q-Le;const De=new ae;De.setFromSphericalCoords(g,Le,0),F.push(De)}const Y=E.index,le=E.attributes.position,fe=new Jt(new Float32Array(E.attributes.position.count*3),3),ie=new ae,ge=new nt;for(let ke=0;ke<Y.count;ke++){const ze=Y.getX(ke);ie.fromBufferAttribute(le,ze);let Le,De,z=1;for(let Ee=1;Ee<F.length;Ee++){Le=Ee-1,De=Ee;const W=F[Le],Z=F[De];if(N===!0){if(ie.y<=W.y&&ie.y>Z.y){z=Math.abs(W.y-ie.y)/Math.abs(W.y-Z.y);break}}else if(ie.y>=W.y&&ie.y<Z.y){z=Math.abs(W.y-ie.y)/Math.abs(W.y-Z.y);break}}const Ce=D[Le],Ae=D[De];ge.copy(Ce).lerp(Ae,z),dt.colorSpaceToWorking(ge,Rt),fe.setXYZ(ze,ge.r,ge.g,ge.b)}E.setAttribute("color",fe)}const ye=new If(this.manager);if(ye.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const Se=r(e);return l(Se)}}class av{constructor(e){this.lexer=new yr.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const sv=yr.CstParser;class lv extends sv{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,a=e.LSquare,l=e.RSquare,c=e.Identifier,s=e.RouteIdentifier,d=e.StringLiteral,h=e.HexLiteral,m=e.NumberLiteral,p=e.TrueLiteral,x=e.FalseLiteral,v=e.NullLiteral,f=e.DEF,u=e.USE,_=e.ROUTE,b=e.TO,y=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(y),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(c),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(f),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("use",function(){t.CONSUME(u),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(y)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(h)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(x)}},{ALT:function(){t.CONSUME(v)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(a),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(h)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(v)}}])}),t.CONSUME(l)}),t.RULE("route",function(){t.CONSUME(_),t.CONSUME(s),t.CONSUME(b),t.CONSUME2(s)}),this.performSelfAnalysis()}}class cv{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new ae}}const vn={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},Tu=n=>(Xu("data-v-8b3353d4"),n=n(),ju(),n),uv={class:"options-div"},dv={class:"select-div"},hv={key:0,class:"radio-list"},fv=Tu(()=>rn("label",{class:"label"},[rn("strong",null,"Version:")],-1)),pv={class:"radio-grid"},mv={key:1,class:"checkbox-list"},gv=Tu(()=>rn("label",{class:"label"},[rn("strong",null,"Parts:")],-1)),xv={class:"checkbox-grid"},vv=Lt({__name:"ModelViewer",props:{models:{},backgroundColor:{},disableExplode:{type:Boolean}},setup(n){const e=n,t=et(null);let i,r,o,a,l=null;const c=new zx,s=new ov,d=et(null),h=et(null),m=et(null),p=et([]),x=et(null);let v=null;const f=et(!1);let u=new Map,_=new Map,b=new Map,y=1,R=new Map,A=new Map;const P=$e(()=>{const U=[],V=K=>{(K||[]).forEach(Q=>{Q.src&&U.push(Q),Q.children&&Array.isArray(Q.children)&&V(Q.children)})};return V(e.models),U}),k=$e(()=>(R.clear(),A.clear(),e.models.map(V=>{if(R.set(V.key,V),!(V.children&&V.children.length>0))return{label:V.label,value:V.key};if(V.children.every(_e=>!!_e.src))return{label:V.label,value:V.key};const ue=V.children.map(_e=>(R.set(_e.key,_e),A.set(_e.key,V.key),{label:_e.label,value:_e.key}));return{label:V.label,value:V.key,children:ue}}))),S=$e(()=>{const U={versionOptions:[],isGroup:!1,children:[],filePaths:[]};if(!d.value||d.value.length<1)return U;const V=d.value[d.value.length-1],K=R.get(V);if(!K)return U;if(!K.children||K.children.length===0)return{versionOptions:[],isGroup:!1,children:[],filePaths:K.src?[K.src]:[]};const Q=K.children.map(B=>{const Fe=!!B.children&&B.children.length>0,$=B.isGroup||Fe?B.key||B.src:B.src||B.key;return{label:B.label,value:$,isGroup:Fe,children:B.children,src:B.src,colorHex:B.colorHex,opacity:B.opacity}}),ue=Q.find(B=>B.value===x.value),_e=!!(ue&&ue.children&&ue.children.length>0);let Te=[],He=[];return x.value&&(x.value.includes("/")?He=[x.value]:ue&&(_e&&ue.children?(Te=ue.children.map(B=>({src:B.src,label:B.label})),He=p.value.length>0?p.value:[]):ue.src&&(He=[ue.src]))),{versionOptions:Q,isGroup:_e,children:Te,filePaths:He}}),T=$e(()=>S.value.versionOptions),w=$e(()=>S.value.isGroup),C=$e(()=>S.value.children),L=$e(()=>S.value.filePaths);Zt(()=>e.models,()=>{if(d.value)return;const U=e.models;if(!(!U||U.length===0)){k.value;for(const V of U)if(V.children&&V.children.length>0){const K=V.children[0];if(K){d.value=[V.key,K.key],m.value=K.key;return}}else if(V.src){d.value=[V.key],m.value=V.key;return}}},{immediate:!0}),Zt(m,U=>{if(!U){d.value=null;return}const V=Array.isArray(U)?U[U.length-1]:U,K=[];let Q=V;const ue=new Set;for(;Q&&!ue.has(Q);)K.unshift(Q),ue.add(Q),Q=A.get(Q);K.length===0&&K.push(V),d.value=K}),Zt(d,U=>{if(!U||U.length<1)return;const V=U[U.length-1],K=R.get(V);if(!K){x.value=null,p.value=[],G();return}if(!K.children||K.children.length===0){x.value=K.src||null,p.value=[],G();return}const Q=K.children,ue=Q[Q.length-1],_e=!!(ue.children&&ue.children.length>0),Te=_e?ue.key||ue.src:ue.src||ue.key;x.value=Te,_e&&ue.children?p.value=ue.children.map(He=>He.src):p.value=[],G()},{immediate:!0}),Zt(x,U=>{if(!U||!d.value||d.value.length<1){G();return}const V=d.value[d.value.length-1],K=R.get(V);if(!K||!K.children){G();return}const Q=K.children.find(ue=>(!!(ue.children&&ue.children.length>0)?ue.key||ue.src:ue.src||ue.key)===U);Q&&Q.children&&(p.value=Q.children.map(ue=>ue.src)),G()},{immediate:!0}),Zt(p,()=>{if(!w.value||!l){G();return}const U=new Set(p.value);l.children.forEach(V=>{if(V instanceof Bt||V instanceof Tt&&V.children.length>0){const K=V.userData.src;V.visible=U.has(K)}}),f.value&&oe()},{deep:!0}),Zt(w,U=>{!U&&f.value&&(f.value=!1,te())}),Ir(()=>{O(),G(),de()});function O(){i=new Jc,i.background=new nt(e.backgroundColor||getComputedStyle(document.documentElement).getPropertyValue("--background-color").trim()||"#101014");const U=t.value.clientWidth,V=500;r=new dn(45,U/V,.01,1e4),r.position.set(0,0,100),o=new Mx({antialias:!0}),o.setSize(U,V),o.setPixelRatio(window.devicePixelRatio),o.outputColorSpace=Rt,t.value.appendChild(o.domElement),a=new Rx(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.05;const K=new Df(16777215,.6);i.add(K);const Q=new Pa(16777215,.8);Q.position.set(5,5,5),i.add(Q);const ue=new Pa(16777215,.4);ue.position.set(-5,0,-5),i.add(ue);const _e=new Pa(16777215,.3);_e.position.set(0,-5,-5),i.add(_e)}async function G(){if(!i||!L.value.length)return;const U=JSON.stringify(h.value)!==JSON.stringify(d.value);h.value=d.value?[...d.value]:null;const V=x.value!==v;l&&i&&i.remove(l),l=new Qn;const K=[];for(const Q of L.value)if(Q.toLowerCase().endsWith(".wrl")||Q.toLowerCase().endsWith(".vrml")){const _e=await J(Q);_e.userData.src=Q,K.push(_e),l.add(_e)}else{const _e=await X(Q),Te=j(_e,Q);Te.position.set(0,0,0),Te.userData.src=Q,K.push(Te),l.add(Te)}if(i.add(l),V){v=x.value??null;const Q=T.value.find(ue=>ue.value===x.value);if(Q&&Q.isGroup&&Q.children){const ue=K.filter(_e=>!(_e instanceof Tt&&_e.children.length>0));if(ue.length>0){const _e=new Qn;ue.forEach(Te=>_e.add(Te.clone())),_e.updateMatrixWorld(!0),we(ue,_e,Q.children)}U&&ne(l)}else U&&ne(l)}else a.update();l.children.forEach(Q=>{if(!(Q instanceof Bt))return;const ue=Q.userData.src;u.has(ue)||u.set(ue,Q.position.clone())}),f.value&&oe()}function X(U){return new Promise((V,K)=>{c.load(U,V,void 0,K)})}function J(U){return new Promise((V,K)=>{s.load(U,V,void 0,K)})}function j(U,V){U.computeVertexNormals();const K=V.toLowerCase();let Q=P.value.find($=>$.src.toLowerCase()===K);if(!Q){const $=K.split("/").pop();Q=P.value.find(he=>{var ye;return((ye=he.src.split("/").pop())==null?void 0:ye.toLowerCase())===$})}const ue=(Q==null?void 0:Q.colorHex)??"0xffffff",_e=(Q==null?void 0:Q.opacity)??1,Te=128,He=new Uint8Array(Te*Te*4);for(let $=0;$<He.length;$++)He[$]=128+Math.random()*40;const B=new Ys(He,Te,Te,fn);B.wrapS=B.wrapT=Jn,B.repeat.set(10,10),B.needsUpdate=!0;const Fe=new Tf({color:parseInt(ue.replace("#",""),16),transparent:_e<1,opacity:_e,roughness:.6,metalness:.05,emissive:1118481,normalMap:B,normalScale:new Ke(.2,.2),side:_n});return Fe.onBeforeCompile=$=>{$.fragmentShader=$.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `)},new Bt(U,Fe)}function ne(U){const V=U??l;if(!V)return;const K=new ni().setFromObject(V),Q=K.getSize(new ae).length(),ue=K.getCenter(new ae);a.target.copy(ue),r.position.copy(ue).addScalar(Q*.8),r.lookAt(ue)}function de(){requestAnimationFrame(de),a.update(),o.render(i,r)}function xe(){l&&(f.value?te():re(),f.value=!f.value)}function re(){if(!l)return;u.clear();const U=y*.25;l.children.forEach(V=>{if(!(V instanceof Bt))return;const K=V.userData.src;u.set(K,V.position.clone());const Q=b.get(K);let ue;if(Q)ue=V.position.clone().add(new ae(Q.x,Q.y,Q.z));else{const _e=_.get(K);if(!_e)return;ue=V.position.clone().add(_e.clone().multiplyScalar(U))}H(V,ue)})}function oe(){const U=y*.25;l.children.forEach(V=>{if(!(V instanceof Bt))return;const K=V.userData.src,Q=b.get(K);let ue;if(Q)ue=u.get(K).clone().add(new ae(Q.x,Q.y,Q.z));else{const _e=_.get(K);if(!_e)return;ue=V.position.clone().add(_e.clone().multiplyScalar(U))}V.position.copy(ue)})}function we(U,V,K){_.clear(),b.clear();const Q=new ni().setFromObject(V),ue=Q.getCenter(new ae),_e=V.worldToLocal(ue.clone());y=Q.getSize(new ae).length();for(const Te of U){const B=new ni().setFromObject(Te).getCenter(new ae),$=V.worldToLocal(B.clone()).clone().sub(_e);if($.length()<1e-4?$.set(0,0,0):$.normalize(),_.set(Te.userData.src,$),K){const he=K.find(ee=>ee.src===Te.userData.src);he!=null&&he.explodeOffset&&b.set(Te.userData.src,he.explodeOffset)}}}function te(){l&&l.children.forEach(U=>{if(!(U instanceof Bt))return;const V=u.get(U.userData.src);V&&H(U,V)})}function H(U,V){const K=U.position.clone(),Q=.35,ue=performance.now();function _e(){const Te=(performance.now()-ue)/1e3,He=Math.min(Te/Q,1);U.position.lerpVectors(K,V,He),He<1&&requestAnimationFrame(_e)}requestAnimationFrame(_e)}return(U,V)=>{const K=Pd,Q=Hu,ue=Wu,_e=Nd,Te=Qu,He=Cc,B=ed;return un(),pi(yo,null,[rn("div",uv,[rn("div",dv,[Wr(K,{class:"select-model",value:m.value,"onUpdate:value":V[0]||(V[0]=Fe=>m.value=Fe),options:k.value,"show-path":!0,"check-strategy":"child"},null,8,["value","options"]),w.value&&!e.disableExplode?(un(),sr(ue,{key:0,class:"select-button",onClick:xe,tertiary:""},{icon:Ai(()=>[Wr(Q,null,{default:Ai(()=>[f.value?(un(),sr(nl(Ud),{key:0})):ar("",!0),f.value?ar("",!0):(un(),sr(nl(Dd),{key:1}))]),_:1})]),_:1})):ar("",!0)]),T.value.length>0&&!w.value?(un(),pi("div",hv,[fv,Wr(Te,{value:x.value,"onUpdate:value":V[1]||(V[1]=Fe=>x.value=Fe)},{default:Ai(()=>[rn("div",pv,[(un(!0),pi(yo,null,il(T.value,Fe=>(un(),sr(_e,{key:Fe.value,value:Fe.value},{default:Ai(()=>[rl(ol(Fe.label),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):ar("",!0),w.value?(un(),pi("div",mv,[gv,Wr(B,{value:p.value,"onUpdate:value":V[2]||(V[2]=Fe=>p.value=Fe)},{default:Ai(()=>[rn("div",xv,[(un(!0),pi(yo,null,il(C.value,Fe=>(un(),sr(He,{key:Fe.src,value:Fe.src},{default:Ai(()=>[rl(ol(Fe.name??Fe.label??"Unnamed Part"),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):ar("",!0)]),rn("div",{ref_key:"viewerContainer",ref:t,class:"viewer"},null,512)],64)}}}),Tv=Yu(vv,[["__scopeId","data-v-8b3353d4"]]);export{Tv as default};
