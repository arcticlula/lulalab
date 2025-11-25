import{Z as d,d as u,h as g,u as v,a as l,bm as x,e as b,a8 as C,$ as i,a9 as p}from"./index-BJhJo_I2.js";const T=d("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),P=Object.assign({},l.props),O=u({name:"A",props:P,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=v(e),r=l("Typography","-a",T,x,e,t),s=b(()=>{const{common:{cubicBezierEaseInOut:a},self:{aTextColor:c}}=r.value;return{"--n-text-color":c,"--n-bezier":a}}),n=o?C("a",void 0,s,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),g("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}}),k=d("blockquote",`
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
`,[i("&:first-child",{marginTop:0}),i("&:last-child",{marginBottom:0}),p("align-text",{marginLeft:"-16px"})]),q=Object.assign(Object.assign({},l.props),{alignText:Boolean}),L=u({name:"Blockquote",props:q,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=v(e),r=l("Typography","-blockquote",k,x,e,t),s=b(()=>{const{common:{cubicBezierEaseInOut:a},self:{blockquoteTextColor:c,blockquotePrefixColor:h,blockquoteLineHeight:m,blockquoteFontSize:f}}=r.value;return{"--n-bezier":a,"--n-font-size":f,"--n-line-height":m,"--n-prefix-color":h,"--n-text-color":c}}),n=o?C("blockquote",void 0,s,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("blockquote",{class:[`${t}-blockquote`,this.themeClass,this.alignText&&`${t}-blockquote--align-text`],style:this.cssVars},this.$slots)}}),H=u({name:"Li",render(){return g("li",null,this.$slots)}}),z=i("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),_=[i("&:first-child",`
 margin-top: 0;
 `),i("&:last-child",`
 margin-bottom: 0;
 `)],$=i([d("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[p("align-text",{paddingLeft:0}),z,_]),d("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[p("align-text",{paddingLeft:0}),z,_])]),B=Object.assign(Object.assign({},l.props),{alignText:Boolean}),S=u({name:"Ul",props:B,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=v(e),r=l("Typography","-xl",$,x,e,t),s=b(()=>{const{common:{cubicBezierEaseInOut:a},self:{olPadding:c,ulPadding:h,liMargin:m,liTextColor:f,liLineHeight:R,liFontSize:y}}=r.value;return{"--n-bezier":a,"--n-font-size":y,"--n-line-height":R,"--n-text-color":f,"--n-li-margin":m,"--n-ol-padding":c,"--n-ul-padding":h}}),n=o?C("ul",void 0,s,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("ul",{class:[`${t}-ul`,this.themeClass,this.alignText&&`${t}-ul--align-text`],style:this.cssVars},this.$slots)}});export{H as _,S as a,O as b,L as c};
