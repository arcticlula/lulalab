import{a7 as It,a8 as Tt,a9 as Dt,aa as Vt,ab as Nt,ac as $t,d as J,h as _,V as re,ad as Et,b as D,ae as Mt,e as g,z as $e,A as ot,I as at,J as d,K as f,L as V,af as st,ag as At,ah as Xe,ai as Ke,aj as jt,ak as Bt,al as Lt,am as Ue,an as Ot,ao as qt,ap as Ft,w as pe,X as be,aq as Xt,a0 as rt,ar as Kt,as as ae,at as Ye,au as se,av as Ut,aw as Yt,ax as Wt,c as q,f as We,k as Te,o as j,u as Ze,F as he,l as Zt,i as He,g as De,m as ge,t as Je,j as Ht,x as Jt}from"./index-DnHCe6iX.js";import{u as Gt}from"./useAvif-DZZmDWul.js";import{c as Qt,_ as en,a as tn}from"./Image-CFv493kA.js";import{u as nn}from"./use-locale-YH0DJfoG.js";function on(e){return It(Tt(e).toLowerCase())}var Ge=Qt(function(e,n,a){return n=n.toLowerCase(),e+(a?on(n):n)});const it=Nt("n-carousel-methods");function an(e){$t(it,e)}function Ee(e="unknown",n="component"){const a=Dt(it);return a||Vt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a}function sn(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function rn(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const ln=J({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=re(e),{isVertical:a,isPrevDisabled:i,isNextDisabled:u,prev:h,next:z}=Ee();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:i,isNextDisabled:u,prev:h,next:z}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},sn()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},rn()))}}),un={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},cn=J({name:"CarouselDots",props:un,setup(e){const{mergedClsPrefixRef:n}=re(e),a=D([]),i=Ee();function u(m,v){switch(m.key){case"Enter":case" ":m.preventDefault(),i.to(v);return}e.keyboard&&b(m)}function h(m){e.trigger==="hover"&&i.to(m)}function z(m){e.trigger==="click"&&i.to(m)}function b(m){var v;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const y=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(y==="input"||y==="textarea")return;const{code:I}=m,p=I==="PageUp"||I==="ArrowUp",P=I==="PageDown"||I==="ArrowDown",k=I==="PageUp"||I==="ArrowRight",R=I==="PageDown"||I==="ArrowLeft",E=i.isVertical(),L=E?p:k,N=E?P:R;!L&&!N||(m.preventDefault(),L&&!i.isNextDisabled()?(i.next(),w(i.currentIndexRef.value)):N&&!i.isPrevDisabled()&&(i.prev(),w(i.currentIndexRef.value)))}function w(m){var v;(v=a.value[m])===null||v===void 0||v.focus()}return Mt(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:u,handleMouseenter:h,handleClick:z}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Et(this.total,a=>{const i=a===this.currentIndex;return _("div",{"aria-selected":i,ref:u=>n.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:u=>{this.handleKeydown(u,a)}})}))}}),xe="CarouselItem";function dn(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===xe}const fn=J({name:xe,setup(e){const{mergedClsPrefixRef:n}=re(e),a=Ee(Ge(xe),`n-${Ge(xe)}`),i=D(),u=g(()=>{const{value:v}=i;return v?a.getSlideIndex(v):-1}),h=g(()=>a.isPrev(u.value)),z=g(()=>a.isNext(u.value)),b=g(()=>a.isActive(u.value)),w=g(()=>a.getSlideStyle(u.value));$e(()=>{a.addSlide(i.value)}),ot(()=>{a.removeSlide(i.value)});function m(v){const{value:y}=u;y!==void 0&&(a==null||a.onCarouselItemClick(y,v))}return{mergedClsPrefix:n,selfElRef:i,isPrev:h,isNext:z,isActive:b,index:u,style:w,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:i,isNext:u,isActive:h,index:z,style:b}=this,w=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:h,[`${a}-carousel__slide--prev`]:i,[`${a}-carousel__slide--next`]:u}];return _("div",{ref:"selfElRef",class:w,role:"option",tabindex:"-1","data-index":z,"aria-hidden":!h,style:b,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:i,isNext:u,isActive:h,index:z}))}}),vn=at("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[V("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[V("svg",`
 height: 1em;
 width: 1em;
 `),V("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[V(">",[V("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function pn(e){const{length:n}=e;return n>1&&(e.push(Qe(e[0],0,"append")),e.unshift(Qe(e[n-1],n-1,"prepend"))),e}function Qe(e,n,a){return st(e,{key:`carousel-item-duplicate-${n}-${a}`})}function et(e,n,a){return n===1?0:a?e===0?n-3:e===n-1?0:e-1:e}function Ve(e,n){return n?e+1:e}function hn(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function gn(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function mn(e,n){return n&&e>3?e-2:e}function tt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function nt(e,n){let{offsetWidth:a,offsetHeight:i}=e;if(n){const u=getComputedStyle(e);a=a-Number.parseFloat(u.getPropertyValue("padding-left"))-Number.parseFloat(u.getPropertyValue("padding-right")),i=i-Number.parseFloat(u.getPropertyValue("padding-top"))-Number.parseFloat(u.getPropertyValue("padding-bottom"))}return{width:a,height:i}}function me(e,n,a){return e<n?n:e>a?a:e}function xn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,i,,u="ms"]=a;return Number(i)*(u==="ms"?1:1e3)}return 0}const bn=["transitionDuration","transitionTimingFunction"],wn=Object.assign(Object.assign({},be.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ne=!1;const yn=J({name:"Carousel",props:wn,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=re(e),i=D(null),u=D(null),h=D([]),z={value:[]},b=g(()=>e.direction==="vertical"),w=g(()=>b.value?"height":"width"),m=g(()=>b.value?"bottom":"right"),v=g(()=>e.effect==="slide"),y=g(()=>e.loop&&e.slidesPerView===1&&v.value),I=g(()=>e.effect==="custom"),p=g(()=>!v.value||e.centeredSlides?1:e.slidesPerView),P=g(()=>I.value?1:e.slidesPerView),k=g(()=>p.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=D({width:0,height:0}),E=D(0),L=g(()=>{const{value:t}=h;if(!t.length)return[];E.value;const{value:o}=k;if(o)return t.map(C=>nt(C));const{value:s}=P,{value:l}=R,{value:c}=w;let r=l[c];if(s!=="auto"){const{spaceBetween:C}=e,$=r-(s-1)*C,ve=1/Math.max(1,s);r=$*ve}const x=Object.assign(Object.assign({},l),{[c]:r});return t.map(()=>x)}),N=g(()=>{const{value:t}=L;if(!t.length)return[];const{centeredSlides:o,spaceBetween:s}=e,{value:l}=w,{[l]:c}=R.value;let r=0;return t.map(({[l]:x})=>{let C=r;return o&&(C+=(x-c)/2),r+=x+s,C})}),G=D(!1),X=g(()=>{const{transitionStyle:t}=e;return t?Ue(t,bn):{}}),K=g(()=>I.value?0:xn(X.value.transitionDuration)),S=g(()=>{const{value:t}=h;if(!t.length)return[];const o=!(k.value||P.value===1),s=x=>{if(o){const{value:C}=w;return{[C]:`${L.value[x][C]}px`}}};if(I.value)return t.map((x,C)=>s(C));const{effect:l,spaceBetween:c}=e,{value:r}=m;return t.reduce((x,C,$)=>{const ve=Object.assign(Object.assign({},s($)),{[`margin-${r}`]:`${c}px`});return x.push(ve),G.value&&(l==="fade"||l==="card")&&Object.assign(ve,X.value),x},[])}),T=g(()=>{const{value:t}=p,{length:o}=h.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:s}=L,{length:l}=s;if(!l)return o;const{value:c}=N,{value:r}=w,x=R.value[r];let C=s[s.length-1][r],$=l;for(;$>1&&C<x;)$--,C+=c[$]-c[$-1];return me($+1,1,l)}}),Q=g(()=>mn(T.value,y.value)),lt=Ve(e.defaultIndex,y.value),we=D(et(lt,T.value,y.value)),B=nn(Ot(e,"currentIndex"),we),M=g(()=>Ve(B.value,y.value));function ee(t){var o,s;t=me(t,0,T.value-1);const l=et(t,T.value,y.value),{value:c}=B;l!==B.value&&(we.value=l,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,l,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,l,c))}function ye(t=M.value){return hn(t,T.value,e.loop)}function Se(t=M.value){return gn(t,T.value,e.loop)}function ut(t){const o=Y(t);return o!==null&&ye()===o&&T.value>1}function ct(t){const o=Y(t);return o!==null&&Se()===o&&T.value>1}function Me(t){return M.value===Y(t)}function dt(t){return B.value===t}function Ae(){return ye()===null}function je(){return Se()===null}let U=0;function Ce(t){const o=me(Ve(t,y.value),0,T.value);(t!==B.value||o!==M.value)&&ee(o)}function ie(){const t=ye();t!==null&&(U=-1,ee(t))}function te(){const t=Se();t!==null&&(U=1,ee(t))}let A=!1;function ft(){(!A||!y.value)&&ie()}function vt(){(!A||!y.value)&&te()}let F=0;const _e=D({});function le(t,o=0){_e.value=Object.assign({},X.value,{transform:b.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function ne(t=0){v.value?ke(M.value,t):F!==0&&(!A&&t>0&&(A=!0),le(F=0,t))}function ke(t,o){const s=Be(t);s!==F&&o>0&&(A=!0),F=Be(M.value),le(s,o)}function Be(t){let o;return t>=T.value-1?o=Le():o=N.value[t]||0,o}function Le(){if(p.value==="auto"){const{value:t}=w,{[t]:o}=R.value,{value:s}=N,l=s[s.length-1];let c;if(l===void 0)c=o;else{const{value:r}=L;c=l+r[r.length-1][t]}return c-o}else{const{value:t}=N;return t[T.value-1]||0}}const oe={currentIndexRef:B,to:Ce,prev:ft,next:vt,isVertical:()=>b.value,isHorizontal:()=>!b.value,isPrev:ut,isNext:ct,isActive:Me,isPrevDisabled:Ae,isNextDisabled:je,getSlideIndex:Y,getSlideStyle:gt,addSlide:pt,removeSlide:ht,onCarouselItemClick:mt};an(oe);function pt(t){t&&h.value.push(t)}function ht(t){if(!t)return;const o=Y(t);o!==-1&&h.value.splice(o,1)}function Y(t){return typeof t=="number"?t:t?h.value.indexOf(t):-1}function gt(t){const o=Y(t);if(o!==-1){const s=[S.value[o]],l=oe.isPrev(o),c=oe.isNext(o);return l&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Ut(s)}}let ze=0,Pe=0,O=0,Re=0,ue=!1,Ie=!1;function mt(t,o){let s=!A&&!ue&&!Ie;e.effect==="card"&&s&&!Me(t)&&(Ce(t),s=!1),s||(o.preventDefault(),o.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function W(){de(),!e.autoplay||Q.value<2||(ce=window.setInterval(te,e.interval))}function Oe(t){var o;if(Ne||!(!((o=u.value)===null||o===void 0)&&o.contains(Kt(t))))return;Ne=!0,ue=!0,Ie=!1,Re=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=tt(t)?t.touches[0]:t;b.value?Pe=s.clientY:ze=s.clientX,e.touchable&&(ae("touchmove",document,fe),ae("touchend",document,Z),ae("touchcancel",document,Z)),e.draggable&&(ae("mousemove",document,fe),ae("mouseup",document,Z))}function fe(t){const{value:o}=b,{value:s}=w,l=tt(t)?t.touches[0]:t,c=o?l.clientY-Pe:l.clientX-ze,r=R.value[s];O=me(c,-r,r),t.cancelable&&t.preventDefault(),v.value&&le(F-O,0)}function Z(){const{value:t}=M;let o=t;if(!A&&O!==0&&v.value){const s=F-O,l=[...N.value.slice(0,T.value-1),Le()];let c=null;for(let r=0;r<l.length;r++){const x=Math.abs(l[r]-s);if(c!==null&&c<x)break;c=x,o=r}}if(o===t){const s=Date.now()-Re,{value:l}=w,c=R.value[l];O>c/2||O/s>.4?ie():(O<-c/2||O/s<-.4)&&te()}o!==null&&o!==t?(Ie=!0,ee(o),Ye(()=>{(!y.value||we.value!==B.value)&&ne(K.value)})):ne(K.value),qe(),W()}function qe(){ue&&(Ne=!1),ue=!1,ze=0,Pe=0,O=0,Re=0,se("touchmove",document,fe),se("touchend",document,Z),se("touchcancel",document,Z),se("mousemove",document,fe),se("mouseup",document,Z)}function xt(){if(v.value&&A){const{value:t}=M;ke(t,0)}else W();v.value&&(_e.value.transitionDuration="0ms"),A=!1}function bt(t){if(t.preventDefault(),A)return;let{deltaX:o,deltaY:s}=t;t.shiftKey&&!o&&(o=s);const l=-1,c=1,r=(o||s)>0?c:l;let x=0,C=0;b.value?C=r:x=r;const $=10;(C*s>=$||x*o>=$)&&(r===c&&!je()?te():r===l&&!Ae()&&ie())}function wt(){R.value=nt(i.value,!0),W()}function yt(){k.value&&E.value++}function St(){e.autoplay&&de()}function Ct(){e.autoplay&&W()}$e(()=>{qt(W),requestAnimationFrame(()=>G.value=!0)}),ot(()=>{qe(),de()}),Ft(()=>{const{value:t}=h,{value:o}=z,s=new Map,l=r=>s.has(r)?s.get(r):-1;let c=!1;for(let r=0;r<t.length;r++){const x=o.findIndex(C=>C.el===t[r]);x!==r&&(c=!0),s.set(t[r],x)}c&&t.sort((r,x)=>l(r)-l(x))}),pe(M,(t,o)=>{if(t===o){U=0;return}if(W(),v.value){if(y.value){const{value:s}=T;U===-1&&o===1&&t===s-2?t=0:U===1&&o===s-2&&t===1&&(t=s-1)}ke(t,K.value)}else ne();U=0},{immediate:!0}),pe([y,p],()=>void Ye(()=>{ee(M.value)})),pe(N,()=>{v.value&&ne()},{deep:!0}),pe(v,t=>{t?ne():(A=!1,le(F=0))});const _t=g(()=>({onTouchstartPassive:e.touchable?Oe:void 0,onMousedown:e.draggable?Oe:void 0,onWheel:e.mousewheel?bt:void 0})),kt=g(()=>Object.assign(Object.assign({},Ue(oe,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Q.value,currentIndex:B.value})),zt=g(()=>({total:Q.value,currentIndex:B.value,to:oe.to})),Pt={getCurrentIndex:()=>B.value,to:Ce,prev:ie,next:te},Rt=be("Carousel","-carousel",vn,Xt,e,n),Fe=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:s,dotColorActive:l,dotColorFocus:c,dotLineWidth:r,dotLineWidthActive:x,arrowColor:C}}=Rt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":l,"--n-dot-size":o,"--n-dot-line-width":r,"--n-dot-line-width-active":x,"--n-arrow-color":C}}),H=a?rt("carousel",void 0,Fe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:i,slidesElRef:u,slideVNodes:z,duplicatedable:y,userWantsControl:I,autoSlideSize:k,realIndex:M,slideStyles:S,translateStyle:_e,slidesControlListeners:_t,handleTransitionEnd:xt,handleResize:wt,handleSlideResize:yt,handleMouseenter:St,handleMouseleave:Ct,isActive:dt,arrowSlotProps:kt,dotSlotProps:zt},Pt),{cssVars:a?void 0:Fe,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:i,slideStyles:u,dotType:h,dotPlacement:z,slidesControlListeners:b,transitionProps:w={},arrowSlotProps:m,dotSlotProps:v,$slots:{default:y,dots:I,arrow:p}}=this,P=y&&At(y())||[];let k=Sn(P);return k.length||(k=P.map(R=>_(fn,null,{default:()=>st(R)}))),this.duplicatedable&&(k=pn(k)),this.slideVNodes.value=k,this.autoSlideSize&&(k=k.map(R=>_(Xe,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${z}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,i&&`${n}-carousel--usercontrol`],style:this.cssVars},b,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Xe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?k.map((R,E)=>_("div",{style:u[E],key:E},jt(_(Lt,Object.assign({},w),{default:()=>R}),[[Bt,this.isActive(E)]]))):k)}),this.showDots&&v.total>1&&Ke(I,v,()=>[_(cn,{key:h+z,total:v.total,currentIndex:v.currentIndex,dotType:h,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ke(p,m,()=>[_(ln,null)]))}});function Sn(e){return e.reduce((n,a)=>(dn(a)&&n.push(a),n),[])}const Cn=at("blockquote",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[V("&:first-child",{marginTop:0}),V("&:last-child",{marginBottom:0}),f("align-text",{marginLeft:"-16px"})]),_n=Object.assign(Object.assign({},be.props),{alignText:Boolean}),Mn=J({name:"Blockquote",props:_n,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=re(e),i=be("Typography","-blockquote",Cn,Yt,e,n),u=g(()=>{const{common:{cubicBezierEaseInOut:z},self:{blockquoteTextColor:b,blockquotePrefixColor:w,blockquoteLineHeight:m,blockquoteFontSize:v}}=i.value;return{"--n-bezier":z,"--n-font-size":v,"--n-line-height":m,"--n-prefix-color":w,"--n-text-color":b}}),h=a?rt("blockquote",void 0,u,e):void 0;return{mergedClsPrefix:n,cssVars:a?void 0:u,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),_("blockquote",{class:[`${n}-blockquote`,this.themeClass,this.alignText&&`${n}-blockquote--align-text`],style:this.cssVars},this.$slots)}});function kn(){const e=D(!1),n=()=>{e.value=window.innerWidth<=768};return $e(()=>{n(),window.addEventListener("resize",n)}),Wt(()=>{window.removeEventListener("resize",n)}),{isMobile:e}}const zn={class:"carousel-div"},Pn=["src","alt","loading","onError"],Rn=["src"],In={key:0,class:"carousel-description squid-description"},Tn={key:1,class:"carousel-description"},Dn=J({__name:"MediaCarousel",props:{media:{}},setup(e){const n=D(0),{isMobile:a}=kn(),i=e;function u(p){const P=i.media.length,k=Math.abs(p-n.value);return Math.min(k,P-k)>1}const{deriveAvifPath:h,getPreferredImage:z}=Gt(),b=D(new Set),w=D(new Set);function m(p){return p.type!=="image"?p.src:z(p.src)}function v(p){return h(p.src)}function y(p){if(!b.value.has(p.src)){const P=new Set(b.value);P.add(p.src),b.value=P}}function I(p){if(!w.value.has(p.src)){const P=new Set(w.value);P.add(p.src),w.value=P}}return(p,P)=>{const k=tn,R=yn,E=Ht("RouterLink"),L=en;return j(),q("div",zn,[We(L,null,{default:Te(()=>{var N,G,X,K;return[We(R,{class:"carousel","show-arrow":!Ze(a),"show-dots":Ze(a),"dot-type":"line","onUpdate:currentIndex":P[0]||(P[0]=S=>n.value=S)},{default:Te(()=>[(j(!0),q(he,null,Zt(p.media,(S,T)=>(j(),q(he,{key:S.src},[S.type==="image"?(j(),He(k,{key:0,class:"carousel-media",src:w.value.has(S.src)?S.src:m(S),alt:(S==null?void 0:S.description)||"no description here blind person, sorry","object-fit":"contain",lazy:u(T),onError:Q=>I(S)},null,8,["src","alt","lazy","onError"])):S.type==="video"?(j(),q(he,{key:1},[b.value.has(S.src)?(j(),q("video",{key:1,class:"carousel-media",src:S.src,autoplay:"",loop:"",muted:"",playsinline:"",preload:"auto"},null,8,Rn)):(j(),q("img",{key:0,class:"carousel-avif",src:v(S),alt:(S==null?void 0:S.description)||"video (avif) placeholder",loading:u(T)?"lazy":"eager",onError:Q=>y(S)},null,40,Pn))],64)):De("",!0)],64))),128))]),_:1},8,["show-arrow","show-dots"]),(N=p.media[n.value])!=null&&N.description||(G=p.media[n.value])!=null&&G.linkTo?(j(),q("div",In,[ge(" [ "),(X=p.media[n.value])!=null&&X.description?(j(),q(he,{key:0},[ge(Je(p.media[n.value].description),1)],64)):De("",!0),(K=p.media[n.value])!=null&&K.linkTo?(j(),He(E,{key:1,to:p.media[n.value].linkTo,class:"carousel-link aquid-good"},{default:Te(()=>[ge(Je(p.media[n.value].linkLabel||""),1)]),_:1},8,["to"])):De("",!0),ge(" ] ")])):(j(),q("div",Tn))]}),_:1})])}}}),An=Jt(Dn,[["__scopeId","data-v-8f65203c"]]);export{An as M,Mn as _};
