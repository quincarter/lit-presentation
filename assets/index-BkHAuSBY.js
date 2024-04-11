(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,W=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),V=new WeakMap;let ne=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(W&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=V.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&V.set(t,e))}return e}toString(){return this.cssText}};const me=r=>new ne(typeof r=="string"?r:r+"",void 0,F),ge=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ne(t,r,F)},fe=(r,e)=>{if(W)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},J=W?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return me(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ve,defineProperty:we,getOwnPropertyDescriptor:ye,getOwnPropertyNames:$e,getOwnPropertySymbols:be,getPrototypeOf:_e}=Object,f=globalThis,K=f.trustedTypes,Ae=K?K.emptyScript:"",N=f.reactiveElementPolyfillSupport,E=(r,e)=>r,R={toAttribute(r,e){switch(e){case Boolean:r=r?Ae:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},B=(r,e)=>!ve(r,e),Q={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:B};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&we(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=ye(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=_e(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,i=[...$e(t),...be(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(J(s))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:R).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:R;this._$Em=s,this[s]=c.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??B)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[E("elementProperties")]=new Map,$[E("finalized")]=new Map,N==null||N({ReactiveElement:$}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,L=C.trustedTypes,Z=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,ae="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,ce="?"+g,Se=`<${ce}>`,y=document,P=()=>y.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,Ee=r=>le(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",q=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,v=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,de=/^(?:script|style|textarea|title)$/i,Ce=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),he=Ce(1),_=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),se=new WeakMap,w=y.createTreeWalker(y,129);function pe(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(e):e}const Pe=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":"",n=S;for(let c=0;c<t;c++){const a=r[c];let d,h,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,h=n.exec(a),h!==null);)u=n.lastIndex,n===S?h[1]==="!--"?n=X:h[1]!==void 0?n=Y:h[2]!==void 0?(de.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=v):h[3]!==void 0&&(n=v):n===v?h[0]===">"?(n=s??S,l=-1):h[1]===void 0?l=-2:(l=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?v:h[3]==='"'?te:ee):n===te||n===ee?n=v:n===X||n===Y?n=S:(n=v,s=void 0);const m=n===v&&r[c+1].startsWith("/>")?" ":"";o+=n===S?a+Se:l>=0?(i.push(d),a.slice(0,l)+ae+a.slice(l)+g+m):a+g+(l===-2?c:m)}return[pe(r,o+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class k{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const c=e.length-1,a=this.parts,[d,h]=Pe(e,t);if(this.el=k.createElement(d,i),w.currentNode=this.el.content,t===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=w.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ae)){const u=h[n++],m=s.getAttribute(l).split(g),U=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:U[2],strings:m,ctor:U[1]==="."?ke:U[1]==="?"?Oe:U[1]==="@"?Te:H}),s.removeAttribute(l)}else l.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(de.test(s.tagName)){const l=s.textContent.split(g),u=l.length-1;if(u>0){s.textContent=L?L.emptyScript:"";for(let m=0;m<u;m++)s.append(l[m],P()),w.nextNode(),a.push({type:2,index:++o});s.append(l[u],P())}}}else if(s.nodeType===8)if(s.data===ce)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(g,l+1))!==-1;)a.push({type:7,index:o}),l+=g.length-1}o++}}static createElement(e,t){const i=y.createElement("template");return i.innerHTML=e,i}}function A(r,e,t=r,i){var n,c;if(e===_)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=x(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=A(r,s._$AS(r,e.values),s,i)),e}class xe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??y).importNode(t,!0);w.currentNode=s;let o=w.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new T(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new Ue(o,this,e)),this._$AV.push(d),a=i[++c]}n!==(a==null?void 0:a.index)&&(o=w.nextNode(),n++)}return w.currentNode=y,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class T{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),x(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==p&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=k.createElement(pe(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new xe(s,this),c=n.u(this.options);n.p(t),this.T(c),this._$AH=n}}_$AC(e){let t=se.get(e.strings);return t===void 0&&se.set(e.strings,t=new k(e)),t}k(e){le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new T(this.S(P()),this.S(P()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=A(this,e,t,0),n=!x(e)||e!==this._$AH&&e!==_,n&&(this._$AH=e);else{const c=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=A(this,c[i+a],t,a),d===_&&(d=this._$AH[a]),n||(n=!x(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ke extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Oe extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Te extends H{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??p)===_)return;const i=this._$AH,s=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const z=C.litHtmlPolyfillSupport;z==null||z(k,T),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.2");const Me=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new T(e.insertBefore(P(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return _}}var oe;b._$litElement$=!0,b.finalized=!0,(oe=globalThis.litElementHydrateSupport)==null||oe.call(globalThis,{LitElement:b});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:B},Le=(r=Re,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,a,r)},init(c){return c!==void 0&&this.P(n,void 0,r),c}}}if(i==="setter"){const{name:n}=t;return function(c){const a=this[n];e.call(this,c),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function G(r){return(e,t)=>typeof t=="object"?Le(r,e,t):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}const ie=r=>qe(r)||Ne(r)||Ie(r)||He(),He=()=>{throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},Ie=(r,e=1)=>{if(r){if(typeof r=="string")return D(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(r,e)}},Ne=r=>{if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)},qe=r=>{if(Array.isArray(r))return D(r)},D=(r,e=1)=>{(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i},ze=function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},je=function(e){e.code==="KeyF"&&(console.log("launching fullscreen"),ze(document.documentElement))};document.addEventListener("keydown",je,!1);var De=Object.defineProperty,We=Object.getOwnPropertyDescriptor,I=(r,e,t,i)=>{for(var s=i>1?void 0:i?We(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&De(e,t,s),s};let O=class extends b{constructor(){super(...arguments),this.title="",this.color="primary",this.disabled=!1}static get styles(){return[ge`
        .btn {
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          padding: 0.5rem;
        }

        button[disabled] {
          cursor: not-allowed;
        }

        .primary {
          color: #000;
          background: PapayaWhip;
        }

        .secondary {
          background: rebeccapurple;
        }

        .danger {
          background: tomato;
        }

        .info {
          color: #000;
          background: skyblue;
        }

        .success {
          color: #000;
          background: MediumAquamarine;
        }
      `]}render(){return he`
      <button class="btn ${this.color}" ?disabled="${this.disabled}">
        ${this.title}
      </button>
    `}};I([G({type:String,attribute:"button-title"})],O.prototype,"title",2);I([G({type:String,attribute:"button-color"})],O.prototype,"color",2);I([G({type:Boolean,attribute:"button-disabled"})],O.prototype,"disabled",2);O=I([ue("x-my-button")],O);const Fe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e";var Be=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ge(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Be(e,t,s),s};let re=class extends b{createRenderRoot(){return this}firstUpdated(r){super.firstUpdated(r),this.initSlideNav()}initSlideNav(){const r=function(o){window.location.hash===""||window.location.hash==="#start"?t(o):i(o)},e=document.querySelectorAll("section").length;document.body.addEventListener("keydown",r,!1);const t=function(o){(o.code==="Space"||o.code==="ArrowRight"||o.code==="Period")&&(window.location.hash="#slide1")},i=s=>{const o=window.location.hash==="#slide1",n=window.location.hash==="#slide"+(e-1),c=document.querySelector('[id^="slide"]:target'),a=parseInt(c.getAttribute("id").substring(5));if(c&&!n&&(s.code==="Space"||s.code==="ArrowRight"||s.code==="PageDown")&&(window.location.hash="slide"+(a+1)),!o&&(s.code==="ArrowLeft"||s.code==="PageUp")&&(window.location.hash="slide"+(a-1)),n&&s.code==="KeyR"&&(window.location.hash="#start"),c&&s.code==="Period"){const d=window.location.hash;if(document.querySelector(d+" .revealable")){const l=ie(document.querySelectorAll(d+" .revealable .fragment"));l[0]&&l[0].classList.remove("fragment")}}if(c&&s.code==="Comma"){const d=window.location.hash;if(document.querySelector(d+" .revealable"))return ie(document.querySelectorAll(d+" .revealable li")).forEach(function(m){m.classList.add("fragment")})}}}render(){return he`
    <section id="slide1">
    <div class="o-wrapper">
      <img src="src/assets/hey-sunglasses.png" alt="hey sunglasses" />

      <h2>About me! Who am I, really?</h2>
      <ul class="about-me-list">
        <li><img src="src/assets/brew-me-icon.png" alt="brew me" /></li>
        <li>
          <img
            src="src/assets/home-assistant-logo.svg"
            alt="home assistant"
          />
        </li>
        <li><img src="src/assets/movies-bitmoji.png" alt="movies" /></li>
        <li><img src="src/assets/wasm.webp" alt="wasm" /></li>
      </ul>
    </div>
  </section>

  <section id="slide2">
    <div class="o-wrapper">
      <div class="logo-wrapper">
        <a href="#slide3">
          <img
            src="src/assets/understanding-component-state.png"
            alt="understanding component state logo"
            class="c-logo-main"
          />
        </a>
        <a href="#slide28">
          <img
            src="src/assets/web-workers.jpg"
            alt="web workers image"
            class="workers"
          />
        </a>
      </div>

      <p>
        Medium:
        <a href="https://twitter.com/quincarter">@quincarter</a>
      </p>
      <p>
        Dev.to:
        <a href="https://dev.to/quincarter">@quincarter</a>
      </p>
      <p>
        Github:
        <a href="https://github.com/quincarter">@quincarter</a>
      </p>
    </div>
  </section>

  <section id="slide3">
    <div class="o-wrapper">
      <h1>What is State?</h1>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*z68I1WKuLbzbwEp0"
      />
    </div>

    <!--<span>vheee</span>-->
  </section>

  <section id="slide4">
    <div class="o-wrapper l-flex">
      <h1 class="l-title">Component State</h1>
      <p>
        Component state is the “value of specific properties in your component
        class at any given time in the component lifecycle.”
      </p>
      <div class="content">
        <ol>
          <li>Colors of a button</li>
          <li>Disabled or enabled state of a button</li>
          <li>Hover state, etc.</li>
        </ol>
        <img
          class="component-state-examples"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2p-gjLCAGiDA-JuDT_dx8g.png"
          alt="component state examples"
        />
      </div>
    </div>
  </section>

  <section id="slide5">
    <div class="o-wrapper">
      <h1>Button State!</h1>
      <x-my-button
        button-title="My Button Is Disabled"
        button-color="success"
        button-disabled
      ></x-my-button>

      <x-my-button
        button-title="My Button Is Enabled"
        button-color="secondary"
      ></x-my-button>
    </div>
  </section>

  <section id="slide6">
    <div class="o-wrapper">
      <h1>Lit Element Context API</h1>
      <figure>
        <img
          style="object-fit: contain"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4dUGT19XFJ9u66wiQn6ADQ.png"
          alt="Lit Element DOM Tree"
          class="c-logo-big"
        />
        <figcaption>
          Easy to Understand if you Know that the DOM is a Tree
        </figcaption>
      </figure>
    </div>
  </section>

  <section id="slide7">
    <div class="o-wrapper">
      <h1>Let's Work with the Context API</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-1-imports-provide.png"
        alt="step 1"
      />
    </div>
  </section>

  <section id="slide8">
    <div class="o-wrapper">
      <h1>
        Root Custom Element (
        <code>my-element</code>
        )
      </h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-2-create-custom-element.png"
        alt="step 2"
      />
    </div>
  </section>

  <section id="slide9">
    <div class="o-wrapper">
      <h1>Setup the Context</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-3-setup-the-context.png"
        alt="step 3"
      />
    </div>
  </section>

  <section id="slide10">
    <div class="o-wrapper">
      <h1>@provide the Property Object</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-4-provide-the-property-object.png"
        alt="step 4"
      />
    </div>
  </section>

  <section id="slide11">
    <div class="o-wrapper">
      <h1>Define The Interfaces</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-5-define-interfaces.png"
        alt="step 5"
      />
    </div>
  </section>

  <section id="slide12">
    <div class="o-wrapper">
      <h1>Render Stuff</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-6-setup-render.png"
        alt="step 6"
      />
    </div>
  </section>

  <section id="slide13">
    <div class="o-wrapper">
      <h1>It should look like this now:</h1>
      <img
        class="code-snippets"
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1lYQMRhBtZ8yESrVlmdeCg.png"
        alt="preview root"
      />
    </div>
  </section>

  <section id="slide14">
    <div class="o-wrapper">
      <h1>Basic Child</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/child-component/step-7-setup-child-component.png"
        alt="step 7"
      />
    </div>
  </section>

  <section id="slide15">
    <div class="o-wrapper">
      <h1>Create Basic Child</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/child-component/step-8-create-child-component.png"
        alt="step 8"
      />
    </div>
  </section>

  <section id="slide16">
    <div class="o-wrapper">
      <h1>Setup Tags</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/child-component/step-9-setup-tags.png"
        alt="step 9"
      />
    </div>
  </section>

  <section id="slide17">
    <div class="o-wrapper">
      <h1>CSS For Our Button</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/child-component/step-10-css-for-button.png"
        alt="step 10"
      />
    </div>
  </section>

  <section id="slide18">
    <div class="o-wrapper">
      <h1>Setup Button Click Event</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/child-component/step-11-event-handler.png"
        alt="step 11"
      />
    </div>
  </section>

  <section id="slide19">
    <div class="o-wrapper">
      <h1>Listen For Changes in Root Element</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/root-element/step-12-listen-in-root-element.png"
        alt="step 12"
      />
    </div>
  </section>

  <section id="slide20">
    <div class="o-wrapper">
      <h1>Results of the child:</h1>
      <img
        class="code-snippets"
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0IkHwHtrioEmdCNGLWNADg.png"
        alt="child button click results"
      />
    </div>
  </section>

  <section id="slide21">
    <div class="o-wrapper">
      <h1>Consume the context (my-grandchild):</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/my-grandchild/step-13-my-grandchild.png"
        alt="step 13"
      />
    </div>
  </section>

  <section id="slide22">
    <div class="o-wrapper">
      <h1>Setup the @consumer property</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/my-grandchild/step-14-setup-consumer.png"
        alt="step 14"
      />
    </div>
  </section>

  <section id="slide23">
    <div class="o-wrapper">
      <h1>Render using Consumed Data</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/my-grandchild/step-15-render-using-consumer-data.png"
        alt="step 15"
      />
    </div>
  </section>

  <section id="slide24">
    <div class="o-wrapper">
      <h1>Place my-grandchild in my-child component</h1>
      <img
        class="code-snippets"
        src="src/assets/code-snippets/child-component/step-16-place-my-grandchild-in-my-child.png"
        alt="step 16"
      />
    </div>
  </section>

  <section id="slide25">
    <div class="o-wrapper">
      <h1>Push that purple button now and watch magic happen</h1>
      <div class="content">
        <img
          class="code-snippets"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lL9zqipMKSzAiaWm_LeegQ.png"
          alt="Consumer result!"
        />
        <img
          class="code-snippets"
          src="https://miro.medium.com/v2/resize:fit:996/format:webp/1*1d9Gt7sxQNjJj_etTZdpIA.gif"
          alt="Michael Scott cheers!"
        />
      </div>
    </div>
  </section>

  <section id="slide26">
    <div class="o-wrapper">
      <h1>Hungry for more?</h1>
      <img
      class="qr-code"
        src="src/assets/qr-code-lit-context-demo-github.png"
        alt="qr for lit context"
      />
    </div>
  </section>

  <section id="slide27">
    <div class="o-wrapper">
      <h1>Read the Medium article:</h1>
      <img
      class="qr-code"
        src="src/assets/understanding-component-state-qr-code.png"
        alt="qr for lit context medium article"
      />
    </div>
  </section>

  <section id="slide28">
    <div class="o-wrapper">
      <h1>Workers!</h1>
      <img src="src/assets/web-workers.jpg" alt="Web Workers Image" />
    </div>
  </section>

  <section id="slide29">
    <div class="o-wrapper">
      <h1>The Problem</h1>
      <ul>
        <li>Most of the web as we know it today runs on JavaScript.</li>
        <li>
          understand how the browser actually reads the code on a given
          website
        </li>
      </ul>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*WL7OStu4euIobIOy.jpg"
        alt="Consider the following"
      />
    </div>
  </section>

  <section id="slide30">
    <div class="o-wrapper">
      <h1>Consider the Following...</h1>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*EtLxeVIi0C9JqK-fshXsvw.png"
        alt="Google image search performance tab"
      />
    </div>
  </section>

  <section id="slide31">
    <div class="o-wrapper">
      <h1>Enter Workers - What is a Worker?</h1>
      <h2>Async vs Workers</h2>
      <p>
        Async is on the main thread and has a “check-in” approach while Web
        Worker is on its own thread and notifies the main thread only when
        needed
      </p>
      <div class="images">
        <img
          src="https://target.scene7.com/is/image/Target/GUEST_91c24106-f0a0-43ee-8047-5edff24f7843?wid=1200&hei=1200&qlt=80&fmt=webp"
          alt="Digorno"
        />
        <img
          src="https://pbs.twimg.com/media/Eobqx-GXMAAhAyv?format=jpg&name=4096x4096"
          alt="Pizza Guy"
        />
      </div>
    </div>
  </section>

  <section id="slide32">
    <div class="o-wrapper">
      <h1>But When do I need one?</h1>
      <p>
        The short answer is
        <i>always</i>
        but it is not currently in a normal development flow, or taught in
        best practice patterns. This truly depends on what kind of worker you
        are utilizing.
      </p>
    </div>
  </section>

  <section id="slide33">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Processing Events</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/01-process-events-and-javascript.png"
        alt="processing events"
      />
    </div>
  </section>

  <section id="slide34">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Running JavaScript</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/02-run-javascript.png"
        alt="running javascript"
      />
    </div>
  </section>

  <section id="slide35">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Did JavaScript change the styles?</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/03-did-javascript-change-styles.png"
        alt="did javascript change the styles?"
      />
    </div>
  </section>

  <section id="slide36">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Layout</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/04-layout.png"
        alt="layout"
      />
    </div>
  </section>

  <section id="slide37">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Painting</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/05-painting-text-flow-breaks.png"
        alt="painting"
      />
    </div>
  </section>

  <section id="slide38">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Compositing</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/06-compositing.png"
        alt="painting"
      />
    </div>
  </section>

  <section id="slide39">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Moto G4 (60hz screen)</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/07-moto-g4-test.png"
        alt="moto g4 performance"
      />
    </div>
  </section>

  <section id="slide40">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Feature Phone (Nokia 2 or worse)</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/08-nokia2-or-feature-phone.png"
        alt="feature phone performance"
      />
    </div>
  </section>

  <section id="slide41">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>Pixel 4 (90hz screen)</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/09-pixel4-90hz.png"
        alt="pixel phone performance"
      />
    </div>
  </section>

  <section id="slide42">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>2nd Gen iPad Pro (120hz)</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/010-ipadprogen2-120hz.png"
        alt="ipad2pro performance"
      />
    </div>
  </section>

  <section id="slide43">
    <div class="o-wrapper">
      <h1>Performance Considerations</h1>
      <h3>144hz Screen</h3>
      <img
        class="worker-diagrams"
        src="src/assets/worker-diagram/011-desktop144hz.png"
        alt="desktop 144hz performance"
      />
    </div>
  </section>

  <section id="slide44">
    <div class="o-wrapper">
      <h1>So What Are My Options?</h1>
      <p>All run off the main thread on their own thread.</p>
      <ul>
        <li>WebWorkers — Runs while the website instance is running.</li>
        <li>SharedWorkers
        — Check support, not all browsers support them. They are essentially
        shared WebWorkers. They run while the website is running but they can
        share an instance across multiple tabs or windows.</li> 
        <li>ServiceWorkers —
        Runs in the background once registered. Can run even if the website is
        closed, but the browser is still running (kind of like chrome and
        google calendar notifications going off).</li>
      </ul>
    </div>
  </section>

  <section id="slide45">
    <div class="o-wrapper">
      <h1>WebWorkers Using Vite ${Fe}</h1>
      <p>Vite is a Bundler that provides an easy access to bundle workers with your application</p>
      
    </div>
  </section>

  <section id="slide46">
    <div class="o-wrapper">
      <h1>Setup the worker file</h1>
      <img src="src/assets/house.worker.ts.png" alt="house worker" />
    </div>
  </section>

  <section id="slide47">
    <div class="o-wrapper">
      <h1>Setup the Main Thread (component)</h1>
      <img src="src/assets/house-main-thread.png" alt="house worker" width="80%"/>
    </div>
  </section>

  <section id="slide48">
    <div class="o-wrapper">
      <h1>Host App MFE Demo</h1>
    </div>
  </section>

  <section id="slide49">
    <div class="o-wrapper">
      <h1>Read the Medium Article</h1>
      <img class="qr-code" src="src/assets/qr-code-multi-threading-the-web.png" alt="multi threading the web qr code" />
    </div>
  </section>

  <section id="slide50">
    <div class="o-wrapper">
      <img src="src/assets/qanda.jpeg" alt="Q & A" />
    </div>
  </section>

  <section id="start">
    <div class="start-container">
      <img
        class="start-image"
        src="src/assets/computer-reading.png"
        alt="Quin Reading"
      />
      <h1>Welcome! Have a Seat and we will get started shortly!</h1>
    </div>
  </section>
    `}};re=Ve([ue("presentation-slides")],re);
