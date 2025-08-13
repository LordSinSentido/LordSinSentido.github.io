import"../chunks/DsnmJJEf.js";import{i as Ie}from"../chunks/B8jEvKRf.js";import{ah as Pe,J as de,K as C,L as we,y as D,a5 as qe,N as et,O as tt,P as Se,Q as oe,R as Z,Z as K,ak as at,ao as rt,T as q,W as nt,U as it,aB as Ee,S as ke,ax as st,aC as $e,as as Oe,i as He,aD as fe,X as Me,Y as Re,aE as ue,aF as ot,aG as ge,aH as ee,am as lt,aI as ct,ar as dt,aJ as ft,aj as Be,a3 as Ge,aK as Ve,aL as ut,aM as vt,M as ht,aN as gt,au as _t,av as je,aO as pt,aP as mt,aQ as bt,aR as wt,aS as yt,aT as Nt,aU as kt,aV as Mt,aW as St,C as I,aX as Et,q as R,r as S,F as P,G as N,I as $,aY as B,H as b,o as z,p as T,az as Fe,aZ as $t,D as O,E as F,a_ as Ae}from"../chunks/D9x28dWn.js";import{i as At,a as xt,c as Dt,d as Ct,n as zt,b as Tt,s as H}from"../chunks/D4GUo8ZB.js";import{p as ae,r as V,s as W,i as J,c as Lt}from"../chunks/BjAjmdXg.js";function It(t,e){if(e){const a=document.body;t.autofocus=!0,Pe(()=>{document.activeElement===a&&t.focus()})}}function Q(t,e){return e}function Pt(t,e,a){for(var r=t.items,i=[],o=e.length,n=0;n<o;n++)ct(e[n].e,i,!0);var s=o>0&&i.length===0&&a!==null;if(s){var g=a.parentNode;dt(g),g.append(a),r.clear(),Y(t,e[0].prev,e[o-1].next)}ft(i,()=>{for(var u=0;u<o;u++){var h=e[u];s||(r.delete(h.k),Y(t,h.prev,h.next)),ee(h.e,!s)}})}function X(t,e,a,r,i,o=null){var n=t,s={flags:e,items:new Map,first:null},g=(e&Ve)!==0;if(g){var u=t;n=C?oe(Be(u)):u.appendChild(ke())}C&&we();var h=null,_=!1,d=new Map,w=qe(()=>{var y=a();return He(y)?y:y==null?[]:Oe(y)}),f,v;function p(){Ot(v,f,s,d,n,i,e,r,a),o!==null&&(f.length===0?h?Me(h):h=q(()=>o(n)):h!==null&&Re(h,()=>{h=null}))}de(()=>{v??=Ge,f=D(w);var y=f.length;if(_&&y===0)return;_=y===0;let x=!1;if(C){var m=et(n)===tt;m!==(y===0)&&(n=Se(),oe(n),Z(!1),x=!0)}if(C){for(var M=null,E,l=0;l<y;l++){if(K.nodeType===at&&K.data===rt){n=K,x=!0,Z(!1);break}var c=f[l],k=r(c,l);E=ye(K,s,M,null,c,k,l,i,e,a),s.items.set(k,E),M=E}y>0&&oe(Se())}if(C)y===0&&o&&(h=q(()=>o(n)));else if(nt()){var A=new Set,L=it;for(l=0;l<y;l+=1){c=f[l],k=r(c,l);var G=s.items.get(k)??d.get(k);G?(e&(ue|fe))!==0&&We(G,c,l,e):(E=ye(null,s,null,null,c,k,l,i,e,a,!0),d.set(k,E)),A.add(k)}for(const[j,le]of s.items)A.has(j)||L.skipped_effects.add(le.e);L.add_callback(p)}else p();x&&Z(!0),D(w)}),C&&(n=K)}function Ot(t,e,a,r,i,o,n,s,g){var u=(n&ut)!==0,h=(n&(ue|fe))!==0,_=e.length,d=a.items,w=a.first,f=w,v,p=null,y,x=[],m=[],M,E,l,c;if(u)for(c=0;c<_;c+=1)M=e[c],E=s(M,c),l=d.get(E),l!==void 0&&(l.a?.measure(),(y??=new Set).add(l));for(c=0;c<_;c+=1){if(M=e[c],E=s(M,c),l=d.get(E),l===void 0){var k=r.get(E);if(k!==void 0){r.delete(E),d.set(E,k);var A=p?p.next:f;Y(a,p,k),Y(a,k,A),_e(k,A,i),p=k}else{var L=f?f.e.nodes_start:i;p=ye(L,a,p,p===null?a.first:p.next,M,E,c,o,n,g)}d.set(E,p),x=[],m=[],f=p.next;continue}if(h&&We(l,M,c,n),(l.e.f&ge)!==0&&(Me(l.e),u&&(l.a?.unfix(),(y??=new Set).delete(l))),l!==f){if(v!==void 0&&v.has(l)){if(x.length<m.length){var G=m[0],j;p=G.prev;var le=x[0],ve=x[x.length-1];for(j=0;j<x.length;j+=1)_e(x[j],G,i);for(j=0;j<m.length;j+=1)v.delete(m[j]);Y(a,le.prev,ve.next),Y(a,p,le),Y(a,ve,G),f=G,p=ve,c-=1,x=[],m=[]}else v.delete(l),_e(l,f,i),Y(a,l.prev,l.next),Y(a,l,p===null?a.first:p.next),Y(a,p,l),p=l;continue}for(x=[],m=[];f!==null&&f.k!==E;)(f.e.f&ge)===0&&(v??=new Set).add(f),m.push(f),f=f.next;if(f===null)continue;l=f}x.push(l),p=l,f=l.next}if(f!==null||v!==void 0){for(var te=v===void 0?[]:Oe(v);f!==null;)(f.e.f&ge)===0&&te.push(f),f=f.next;var he=te.length;if(he>0){var Qe=(n&Ve)!==0&&_===0?i:null;if(u){for(c=0;c<he;c+=1)te[c].a?.measure();for(c=0;c<he;c+=1)te[c].a?.fix()}Pt(a,te,Qe)}}u&&Pe(()=>{if(y!==void 0)for(l of y)l.a?.apply()}),t.first=a.first&&a.first.e,t.last=p&&p.e;for(var Xe of r.values())ee(Xe.e);r.clear()}function We(t,e,a,r){(r&ue)!==0&&Ee(t.v,e),(r&fe)!==0?Ee(t.i,a):t.i=a}function ye(t,e,a,r,i,o,n,s,g,u,h){var _=(g&ue)!==0,d=(g&ot)===0,w=_?d?st(i,!1,!1):$e(i):i,f=(g&fe)===0?n:$e(n),v={i:f,v:w,k:o,a:null,e:null,prev:a,next:r};try{if(t===null){var p=document.createDocumentFragment();p.append(t=ke())}return v.e=q(()=>s(t,w,f,u),C),v.e.prev=a&&a.e,v.e.next=r&&r.e,a===null?h||(e.first=v):(a.next=v,a.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function _e(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,i=e?e.e.nodes_start:a,o=t.e.nodes_start;o!==null&&o!==r;){var n=lt(o);i.before(o),o=n}}function Y(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ht(t,e,a,r,i,o){let n=C;C&&we();var s,g,u=null;C&&K.nodeType===vt&&(u=K,we());var h=C?K:t,_;de(()=>{const d=e()||null;var w=gt;d!==s&&(_&&(d===null?Re(_,()=>{_=null,g=null}):d===g?Me(_):ee(_)),d&&d!==g&&(_=q(()=>{if(u=C?u:document.createElementNS(w,d),_t(u,u),r){C&&At(d)&&u.append(document.createComment(""));var f=C?Be(u):u.appendChild(ke());C&&(f===null?Z(!1):oe(f)),r(u,f)}Ge.nodes_end=u,h.before(u)})),s=d,s&&(g=s))},ht),n&&(Z(!0),oe(h))}function Rt(t,e){var a=void 0,r;de(()=>{a!==(a=e())&&(r&&(ee(r),r=null),a&&(r=q(()=>{je(()=>a(t))})))})}function Ue(t){var e,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(a=Ue(t[e]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function Bt(){for(var t,e,a=0,r="",i=arguments.length;a<i;a++)(t=arguments[a])&&(e=Ue(t))&&(r&&(r+=" "),r+=e);return r}function Gt(t){return typeof t=="object"?Bt(t):t??""}const xe=[...` 	
\r\f \v\uFEFF`];function Vt(t,e,a){var r=t==null?"":""+t;if(a){for(var i in a)if(a[i])r=r?r+" "+i:i;else if(r.length)for(var o=i.length,n=0;(n=r.indexOf(i,n))>=0;){var s=n+o;(n===0||xe.includes(r[n-1]))&&(s===r.length||xe.includes(r[s]))?r=(n===0?"":r.substring(0,n))+r.substring(s+1):n=s}}return r===""?null:r}function De(t,e=!1){var a=e?" !important;":";",r="";for(var i in t){var o=t[i];o!=null&&o!==""&&(r+=" "+i+": "+o+a)}return r}function pe(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function jt(t,e){if(e){var a="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,n=0,s=!1,g=[];r&&g.push(...Object.keys(r).map(pe)),i&&g.push(...Object.keys(i).map(pe));var u=0,h=-1;const v=t.length;for(var _=0;_<v;_++){var d=t[_];if(s?d==="/"&&t[_-1]==="*"&&(s=!1):o?o===d&&(o=!1):d==="/"&&t[_+1]==="*"?s=!0:d==='"'||d==="'"?o=d:d==="("?n++:d===")"&&n--,!s&&o===!1&&n===0){if(d===":"&&h===-1)h=_;else if(d===";"||_===v-1){if(h!==-1){var w=pe(t.substring(u,h).trim());if(!g.includes(w)){d!==";"&&_++;var f=t.substring(u,_).trim();a+=" "+f+";"}}u=_+1,h=-1}}}}return r&&(a+=De(r)),i&&(a+=De(i,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Ft(t,e,a,r,i,o){var n=t.__className;if(C||n!==a||n===void 0){var s=Vt(a,r,o);(!C||s!==t.getAttribute("class"))&&(s==null?t.removeAttribute("class"):e?t.className=s:t.setAttribute("class",s)),t.__className=a}else if(o&&i!==o)for(var g in o){var u=!!o[g];(i==null||u!==!!i[g])&&t.classList.toggle(g,u)}return o}function me(t,e={},a,r){for(var i in a){var o=a[i];e[i]!==o&&(a[i]==null?t.style.removeProperty(i):t.style.setProperty(i,o,r))}}function Wt(t,e,a,r){var i=t.__style;if(C||i!==e){var o=jt(e,r);(!C||o!==t.getAttribute("style"))&&(o==null?t.removeAttribute("style"):t.style.cssText=o),t.__style=e}else r&&(Array.isArray(r)?(me(t,a?.[0],r[0]),me(t,a?.[1],r[1],"important")):me(t,a,r));return r}function Ne(t,e,a=!1){if(t.multiple){if(e==null)return;if(!He(e))return pt();for(var r of t.options)r.selected=e.includes(Ce(r));return}for(r of t.options){var i=Ce(r);if(mt(i,e)){r.selected=!0;return}}(!a||e!==void 0)&&(t.selectedIndex=-1)}function Ut(t){var e=new MutationObserver(()=>{Ne(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),bt(()=>{e.disconnect()})}function Ce(t){return"__value"in t?t.__value:t.value}const re=Symbol("class"),ne=Symbol("style"),Ye=Symbol("is custom element"),Je=Symbol("is html");function Yt(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ze(t,e,a,r){var i=Ke(t);C&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=a)&&(e==="loading"&&(t[Mt]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ze(t).includes(e)?t[e]=a:t.setAttribute(e,a))}function Jt(t,e,a,r,i=!1){var o=Ke(t),n=o[Ye],s=!o[Je];let g=C&&n;g&&Z(!1);var u=e||{},h=t.tagName==="OPTION";for(var _ in e)_ in a||(a[_]=null);a.class?a.class=Gt(a.class):a[re]&&(a.class=null),a[ne]&&(a.style??=null);var d=Ze(t);for(const m in a){let M=a[m];if(h&&m==="value"&&M==null){t.value=t.__value="",u[m]=M;continue}if(m==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ft(t,w,M,r,e?.[re],a[re]),u[m]=M,u[re]=a[re];continue}if(m==="style"){Wt(t,M,e?.[ne],a[ne]),u[m]=M,u[ne]=a[ne];continue}var f=u[m];if(!(M===f&&!(M===void 0&&t.hasAttribute(m)))){u[m]=M;var v=m[0]+m[1];if(v!=="$$")if(v==="on"){const E={},l="$$"+m;let c=m.slice(2);var p=Tt(c);if(xt(c)&&(c=c.slice(0,-7),E.capture=!0),!p&&f){if(M!=null)continue;t.removeEventListener(c,u[l],E),u[l]=null}if(M!=null)if(p)t[`__${c}`]=M,Ct([c]);else{let k=function(A){u[m].call(this,A)};u[l]=Dt(c,t,k,E)}else p&&(t[`__${c}`]=void 0)}else if(m==="style")ze(t,m,M);else if(m==="autofocus")It(t,!!M);else if(!n&&(m==="__value"||m==="value"&&M!=null))t.value=t.__value=M;else if(m==="selected"&&h)Yt(t,M);else{var y=m;s||(y=zt(y));var x=y==="defaultValue"||y==="defaultChecked";if(M==null&&!n&&!x)if(o[m]=null,y==="value"||y==="checked"){let E=t;const l=e===void 0;if(y==="value"){let c=E.defaultValue;E.removeAttribute(y),E.defaultValue=c,E.value=E.__value=l?c:null}else{let c=E.defaultChecked;E.removeAttribute(y),E.defaultChecked=c,E.checked=l?c:!1}}else t.removeAttribute(m);else x||d.includes(y)&&(n||typeof M!="string")?t[y]=M:typeof M!="function"&&ze(t,y,M)}}}return g&&Z(!0),u}function Te(t,e,a=[],r=[],i,o=!1){wt(a,r,n=>{var s=void 0,g={},u=t.nodeName==="SELECT",h=!1;if(de(()=>{var d=e(...n.map(D)),w=Jt(t,s,d,i,o);h&&u&&"value"in d&&Ne(t,d.value);for(let v of Object.getOwnPropertySymbols(g))d[v]||ee(g[v]);for(let v of Object.getOwnPropertySymbols(d)){var f=d[v];v.description===yt&&(!s||f!==s[v])&&(g[v]&&ee(g[v]),g[v]=q(()=>Rt(t,()=>f))),w[v]=f}s=w}),u){var _=t;je(()=>{Ne(_,s.value,!0),Ut(_)})}h=!0})}function Ke(t){return t.__attributes??={[Ye]:t.nodeName.includes("-"),[Je]:t.namespaceURI===Nt}}var Le=new Map;function Ze(t){var e=Le.get(t.nodeName);if(e)return e;Le.set(t.nodeName,e=[]);for(var a,r=t,i=Element.prototype;i!==r;){a=St(r);for(var o in a)a[o].set&&e.push(o);r=kt(r)}return e}const Kt=!0,ja=Object.freeze(Object.defineProperty({__proto__:null,prerender:Kt},Symbol.toStringTag,{value:"Module"})),Zt="I am a backend and frontend developer with three years of experience. My skills include programming in Java and JavaScript, as well as creating pipelines and scripts with Jenkins and Groovy. I am seeking new opportunities to learn and build solutions that can help everyone.",Qt="Miguel",Xt="Sosa Guardado",qt="Software Engineer",ea="Guadalajara, México",se={description:Zt,firstName:Qt,lastName:Xt,degree:qt,hometown:ea};/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const ta={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var aa=Et("<svg><!><!></svg>");function U(t,e){I(e,!0);const a=ae(e,"color",3,"currentColor"),r=ae(e,"size",3,24),i=ae(e,"strokeWidth",3,2),o=ae(e,"absoluteStrokeWidth",3,!1),n=ae(e,"iconNode",19,()=>[]),s=V(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var g=aa();Te(g,_=>({...ta,...s,width:r(),height:r(),stroke:a(),"stroke-width":_,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>o()?Number(i())*24/Number(r()):i()]);var u=N(g);X(u,17,n,Q,(_,d)=>{var w=Fe(()=>$t(D(d),2));let f=()=>D(w)[0],v=()=>D(w)[1];var p=z(),y=T(p);Ht(y,f,!0,(x,m)=>{Te(x,()=>({...v()}))}),S(_,p)});var h=$(u);R(h,()=>e.children??B),b(g),S(t,g),P()}function ra(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];U(t,W({name:"award"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function na(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];U(t,W({name:"book-marked"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function ia(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];U(t,W({name:"briefcase-business"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function sa(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];U(t,W({name:"building"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function oa(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];U(t,W({name:"calendar"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function la(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"}],["circle",{cx:"5",cy:"14",r:"3"}]];U(t,W({name:"file-badge"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function ca(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];U(t,W({name:"github"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function da(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];U(t,W({name:"graduation-cap"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function fa(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];U(t,W({name:"house"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function ua(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];U(t,W({name:"linkedin"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function va(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];U(t,W({name:"school"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}function ha(t,e){I(e,!0);/**
 * @license @lucide/svelte v0.526.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let a=V(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];U(t,W({name:"user"},()=>a,{get iconNode(){return r},children:(i,o)=>{var n=z(),s=T(n);R(s,()=>e.children??B),S(i,n)},$$slots:{default:!0}})),P()}var ga=O('<header class="flex flex-col items-center justify-center gap-3 bg-linear-to-t from-zinc-100/0 to-zinc-500/35 pt-5 dark:from-zinc-900/0 dark:to-zinc-700/50"><div class="flex items-center justify-center gap-4"><img class="size-18 rounded-md" src="https://media.licdn.com/dms/image/v2/D4E03AQGdAZ2YbwtCkw/profile-displayphoto-scale_400_400/B4EZhE2kcbHoAg-/0/1753501813791?e=1756339200&amp;v=beta&amp;t=UOBMsi1WoI77gGnT4rhLYFY24yyDVlWChXJ-hLFRZl8" alt="Profile avatar"/> <div><h1 class="text-2xl font-bold"> </h1> <h2 class="text-lg font-normal"> </h2></div></div> <div class="flex gap-2"><div class="flex items-center gap-1"><!> <p> </p></div> <div class="flex items-center gap-1"><!> <a href="https://www.linkedin.com/in/misosa" target="_blank">LinkedIn</a></div> <div class="flex items-center gap-1"><!> <a href="https://github.com/LordSinSentido" target="_blank">GitHub</a></div></div></header>');function _a(t,e){I(e,!1),Ie();var a=ga(),r=N(a),i=$(N(r),2),o=N(i),n=N(o);b(o);var s=$(o,2),g=N(s,!0);b(s),b(i),b(r);var u=$(r,2),h=N(u),_=N(h);fa(_,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var d=$(_,2),w=N(d,!0);b(d),b(h);var f=$(h,2),v=N(f);ua(v,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"}),Ae(2),b(f);var p=$(f,2),y=N(p);ca(y,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"}),Ae(2),b(p),b(u),b(a),F(()=>{H(n,`${se.firstName} ${se.lastName}`),H(g,se.degree),H(w,se.hometown)}),S(t,a),P()}var pa=O('<h4 class="font-bold"> </h4>'),ma=O('<div class="rounded-md border-2 border-neutral-500 px-1.5"><p> </p></div>'),ba=O('<div class="flex w-1/4 min-w-40 flex-col gap-1"><!> <div class="flex flex-wrap gap-1"></div></div>');function ce(t,e){var a=ba(),r=N(a);{var i=n=>{var s=pa(),g=N(s,!0);b(s),F(()=>H(g,e.title)),S(n,s)};J(r,n=>{e.title&&n(i)})}var o=$(r,2);X(o,21,()=>e.items,Q,(n,s)=>{var g=ma(),u=N(g),h=N(u,!0);b(u),b(g),F(()=>H(h,D(s))),S(n,g)}),b(o),b(a),S(t,a)}var wa=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),ya=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Na=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),ka=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Ma=O("<p> </p>"),Sa=O("<p><span>&mdash;</span> </p>"),Ea=O('<div class="flex flex-col gap-1"><h4> </h4> <div class="flex flex-wrap flex-col md:flex-row gap-x-2"><!> <!> <!> <!></div> <!> <!></div>');function be(t,e){I(e,!0);const a="en-US",r={month:"long",year:"numeric"},i=()=>{const l=o(e.startingDate)?.toLocaleDateString(a,r);if(!l)return null;const c=o(e.endingDate)?.toLocaleDateString(a,r);return c?`${l} - ${c}`:l};function o(l){if(l){const[c,k]=l?.split("-"),A=parseInt(c,10),L=parseInt(k,10);return new Date(L,A-1)}return null}var n=Ea(),s=N(n),g=N(s,!0);b(s);var u=$(s,2),h=N(u);{var _=l=>{var c=wa(),k=N(c);sa(k,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"10"});var A=$(k,2),L=N(A);b(A),b(c),F(()=>H(L,`${e.company??""}${e.modality?` (${e.modality})`:""}`)),S(l,c)};J(h,l=>{e.company&&l(_)})}var d=$(h,2);{var w=l=>{var c=ya(),k=N(c);va(k,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"10"});var A=$(k,2),L=N(A,!0);b(A),b(c),F(()=>H(L,e.school)),S(l,c)};J(d,l=>{e.school&&l(w)})}var f=$(d,2);{var v=l=>{var c=Na(),k=N(c);la(k,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"10"});var A=$(k,2),L=N(A,!0);b(A),b(c),F(()=>H(L,e.issuer)),S(l,c)};J(f,l=>{e.issuer&&l(v)})}var p=$(f,2);{var y=l=>{var c=ka(),k=N(c);oa(k,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"10"});var A=$(k,2),L=N(A,!0);b(A),b(c),F(G=>H(L,G),[i]),S(l,c)};J(p,l=>{i()&&l(y)})}b(u);var x=$(u,2);{var m=l=>{var c=Ma(),k=N(c,!0);b(c),F(()=>H(k,e.description)),S(l,c)};J(x,l=>{e.description&&l(m)})}var M=$(x,2);{var E=l=>{var c=z(),k=T(c);X(k,17,()=>e.tasks,Q,(A,L)=>{var G=Sa(),j=$(N(G));b(G),F(()=>H(j,` ${D(L)??""}`)),S(A,G)}),S(l,c)};J(M,l=>{e.tasks&&l(E)})}b(n),F(()=>H(g,e.title)),S(t,n),P()}var $a=O('<section class="w-full max-w-2xl"><div class="mb-1 flex items-center gap-2"><!> <h3> </h3></div> <hr class="mb-2 w-4/12 border-b-1 border-zinc-900 dark:border-zinc-300"/> <div class="flex grow flex-col gap-2"><!></div></section>');function ie(t,e){var a=$a(),r=N(a),i=N(r);{var o=h=>{var _=z();const d=Fe(()=>e.icon);var w=T(_);Lt(w,()=>D(d),(f,v)=>{v(f,{class:"stroke-zinc-900 dark:stroke-zinc-300 stroke-3",size:"18"})}),S(h,_)};J(i,h=>{e.icon&&h(o)})}var n=$(i,2),s=N(n,!0);b(n),b(r);var g=$(r,4),u=N(g);R(u,()=>e.children??B),b(g),b(a),F(()=>H(s,e.title)),S(t,a)}const Aa=[{job:"Software Developer",modality:"Full-time",where:"Oracle de México S.A de C.V.",startingDate:"08-2023",tasks:["Collaborated with cross-functional teams to develop new features and resolve bugs in internal applications.","Engineered and implemented Jenkins pipelines with Groovy to automate the connection of microservices.","Designed, developed, and maintained internal microservices and web servers to support company operations."]},{job:"Web and Mobile Developer",where:"Logística Reyes",startingDate:"10-2022",endingDate:"08-2023",modality:"Internship & full-time",tasks:["Directed the development of a mobile application for tracking parcels with React Native.","Engineered and maintained a robust backend system using Laravel and MariaDB.","Contributed to the improvement of a web tool designed to streamline all internal processes."]}],xa=[{degree:"Bachelor's Degree in Software Engineering",location:"Centro de Enseñanza Técnica Industrial Colomos",startingDate:"08-2019",endingDate:"06-2023"},{degree:"Technical Degree in Construction",location:"Centro de Enseñanza Técnica Industrial Colomos",startingDate:"08-2014",endingDate:"12-2018"}],Da=[{title:"Diploma in English Language",by:"Proulex (University of Guadalajara)",obtainedDate:"02-2025"},{title:"Introduction to Java",by:"Sololearn",obtainedDate:"08-2025"}],Ca=["JavaScript","Java","Groovy","SQL","Python"],za=["Node.JS","Express","Spring Boot","Oracle DB"],Ta=["React","Svelte","TailwindCSS"],La=["Docker","Git","Bash","Kubernetes","Jenkins","Cypress"];var Ia=O("<p> </p>"),Pa=O('<div class="flex gap-2 overflow-y-auto"><!> <!> <!> <!></div>'),Oa=O('<div><!> <main class="flex flex-col items-center gap-4 md:px-10 px-4 py-4"><!> <!> <!> <!> <!></main></div>');function Fa(t,e){I(e,!1),Ie();var a=Oa(),r=N(a);_a(r,{});var i=$(r,2),o=N(i);ie(o,{get icon(){return ha},title:"About me",children:(h,_)=>{var d=Ia(),w=N(d,!0);b(d),F(()=>H(w,se.description)),S(h,d)}});var n=$(o,2);ie(n,{get icon(){return na},title:"Knowledge",children:(h,_)=>{var d=Pa(),w=N(d);ce(w,{title:"Languages",get items(){return Ca}});var f=$(w,2);ce(f,{title:"Backend",get items(){return za}});var v=$(f,2);ce(v,{title:"Frontend",get items(){return Ta}});var p=$(v,2);ce(p,{title:"Tools",get items(){return La}}),b(d),S(h,d)}});var s=$(n,2);ie(s,{get icon(){return ia},title:"Professional experience",children:(h,_)=>{var d=z(),w=T(d);X(w,1,()=>Aa,Q,(f,v)=>{be(f,{get title(){return D(v).job},get company(){return D(v).where},get startingDate(){return D(v).startingDate},get endingDate(){return D(v).endingDate},get modality(){return D(v).modality},get tasks(){return D(v).tasks}})}),S(h,d)}});var g=$(s,2);ie(g,{get icon(){return da},title:"Education",children:(h,_)=>{var d=z(),w=T(d);X(w,1,()=>xa,Q,(f,v)=>{be(f,{get title(){return D(v).degree},get school(){return D(v).location},get startingDate(){return D(v).startingDate},get endingDate(){return D(v).endingDate}})}),S(h,d)}});var u=$(g,2);ie(u,{get icon(){return ra},title:"Certifications",children:(h,_)=>{var d=z(),w=T(d);X(w,1,()=>Da,Q,(f,v)=>{be(f,{get title(){return D(v).title},get issuer(){return D(v).by},get startingDate(){return D(v).obtainedDate}})}),S(h,d)}}),b(i),b(a),S(t,a),P()}export{Fa as component,ja as universal};
