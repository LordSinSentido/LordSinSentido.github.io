import"../chunks/DsnmJJEf.js";import{i as Ie}from"../chunks/B8jEvKRf.js";import{ah as Pe,J as fe,K as C,L as we,y as z,a5 as qe,N as et,O as tt,P as Se,Q as de,R as q,Z as X,ak as at,ao as rt,T as ae,W as it,U as nt,aB as xe,S as ke,ax as st,aC as Ee,as as Oe,i as He,aD as ue,X as Me,Y as Re,aE as ve,aF as ot,aG as ge,aH as re,am as lt,aI as dt,ar as ct,aJ as ft,aj as Be,a3 as Ge,aK as je,aL as ut,aM as vt,M as ht,aN as gt,au as _t,av as Ve,aO as pt,aP as mt,aQ as bt,aR as wt,aS as yt,aT as Nt,aU as kt,aV as Mt,aW as St,C as H,aX as xt,q as j,r as x,F as R,G as b,I as $,aY as V,H as p,o as P,p as O,az as Fe,aZ as Et,D as B,E as W,a_ as $e}from"../chunks/D9x28dWn.js";import{i as $t,a as At,c as Dt,d as zt,n as Ct,b as Tt,s as G}from"../chunks/D4GUo8ZB.js";import{p as ie,r as F,s as U,i as Q,c as Lt}from"../chunks/BjAjmdXg.js";function It(t,e){if(e){const a=document.body;t.autofocus=!0,Pe(()=>{document.activeElement===a&&t.focus()})}}function ee(t,e){return e}function Pt(t,e,a){for(var r=t.items,n=[],o=e.length,i=0;i<o;i++)dt(e[i].e,n,!0);var s=o>0&&n.length===0&&a!==null;if(s){var v=a.parentNode;ct(v),v.append(a),r.clear(),J(t,e[0].prev,e[o-1].next)}ft(n,()=>{for(var c=0;c<o;c++){var u=e[c];s||(r.delete(u.k),J(t,u.prev,u.next)),re(u.e,!s)}})}function te(t,e,a,r,n,o=null){var i=t,s={flags:e,items:new Map,first:null},v=(e&je)!==0;if(v){var c=t;i=C?de(Be(c)):c.appendChild(ke())}C&&we();var u=null,h=!1,l=new Map,y=qe(()=>{var N=a();return He(N)?N:N==null?[]:Oe(N)}),f,d;function m(){Ot(d,f,s,l,i,n,e,r,a),o!==null&&(f.length===0?u?Me(u):u=ae(()=>o(i)):u!==null&&Re(u,()=>{u=null}))}fe(()=>{d??=Ge,f=z(y);var N=f.length;if(h&&N===0)return;h=N===0;let D=!1;if(C){var w=et(i)===tt;w!==(N===0)&&(i=Se(),de(i),q(!1),D=!0)}if(C){for(var S=null,E,g=0;g<N;g++){if(X.nodeType===at&&X.data===rt){i=X,D=!0,q(!1);break}var _=f[g],L=r(_,g);E=ye(X,s,S,null,_,L,g,n,e,a),s.items.set(L,E),S=E}N>0&&de(Se())}if(C)N===0&&o&&(u=ae(()=>o(i)));else if(it()){var K=new Set,M=nt;for(g=0;g<N;g+=1){_=f[g],L=r(_,g);var k=s.items.get(L)??l.get(L);k?(e&(ve|ue))!==0&&We(k,_,g,e):(E=ye(null,s,null,null,_,L,g,n,e,a,!0),l.set(L,E)),K.add(L)}for(const[A,T]of s.items)K.has(A)||M.skipped_effects.add(T.e);M.add_callback(m)}else m();D&&q(!0),z(y)}),C&&(i=X)}function Ot(t,e,a,r,n,o,i,s,v){var c=(i&ut)!==0,u=(i&(ve|ue))!==0,h=e.length,l=a.items,y=a.first,f=y,d,m=null,N,D=[],w=[],S,E,g,_;if(c)for(_=0;_<h;_+=1)S=e[_],E=s(S,_),g=l.get(E),g!==void 0&&(g.a?.measure(),(N??=new Set).add(g));for(_=0;_<h;_+=1){if(S=e[_],E=s(S,_),g=l.get(E),g===void 0){var L=r.get(E);if(L!==void 0){r.delete(E),l.set(E,L);var K=m?m.next:f;J(a,m,L),J(a,L,K),_e(L,K,n),m=L}else{var M=f?f.e.nodes_start:n;m=ye(M,a,m,m===null?a.first:m.next,S,E,_,o,i,v)}l.set(E,m),D=[],w=[],f=m.next;continue}if(u&&We(g,S,_,i),(g.e.f&ge)!==0&&(Me(g.e),c&&(g.a?.unfix(),(N??=new Set).delete(g))),g!==f){if(d!==void 0&&d.has(g)){if(D.length<w.length){var k=w[0],A;m=k.prev;var T=D[0],I=D[D.length-1];for(A=0;A<D.length;A+=1)_e(D[A],k,n);for(A=0;A<w.length;A+=1)d.delete(w[A]);J(a,T.prev,I.next),J(a,m,T),J(a,I,k),f=k,m=I,_-=1,D=[],w=[]}else d.delete(g),_e(g,f,n),J(a,g.prev,g.next),J(a,g,m===null?a.first:m.next),J(a,m,g),m=g;continue}for(D=[],w=[];f!==null&&f.k!==E;)(f.e.f&ge)===0&&(d??=new Set).add(f),w.push(f),f=f.next;if(f===null)continue;g=f}D.push(g),m=g,f=g.next}if(f!==null||d!==void 0){for(var Z=d===void 0?[]:Oe(d);f!==null;)(f.e.f&ge)===0&&Z.push(f),f=f.next;var he=Z.length;if(he>0){var Qe=(i&je)!==0&&h===0?n:null;if(c){for(_=0;_<he;_+=1)Z[_].a?.measure();for(_=0;_<he;_+=1)Z[_].a?.fix()}Pt(a,Z,Qe)}}c&&Pe(()=>{if(N!==void 0)for(g of N)g.a?.apply()}),t.first=a.first&&a.first.e,t.last=m&&m.e;for(var Xe of r.values())re(Xe.e);r.clear()}function We(t,e,a,r){(r&ve)!==0&&xe(t.v,e),(r&ue)!==0?xe(t.i,a):t.i=a}function ye(t,e,a,r,n,o,i,s,v,c,u){var h=(v&ve)!==0,l=(v&ot)===0,y=h?l?st(n,!1,!1):Ee(n):n,f=(v&ue)===0?i:Ee(i),d={i:f,v:y,k:o,a:null,e:null,prev:a,next:r};try{if(t===null){var m=document.createDocumentFragment();m.append(t=ke())}return d.e=ae(()=>s(t,y,f,c),C),d.e.prev=a&&a.e,d.e.next=r&&r.e,a===null?u||(e.first=d):(a.next=d,a.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function _e(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,o=t.e.nodes_start;o!==null&&o!==r;){var i=lt(o);n.before(o),o=i}}function J(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ht(t,e,a,r,n,o){let i=C;C&&we();var s,v,c=null;C&&X.nodeType===vt&&(c=X,we());var u=C?X:t,h;fe(()=>{const l=e()||null;var y=gt;l!==s&&(h&&(l===null?Re(h,()=>{h=null,v=null}):l===v?Me(h):re(h)),l&&l!==v&&(h=ae(()=>{if(c=C?c:document.createElementNS(y,l),_t(c,c),r){C&&$t(l)&&c.append(document.createComment(""));var f=C?Be(c):c.appendChild(ke());C&&(f===null?q(!1):de(f)),r(c,f)}Ge.nodes_end=c,u.before(c)})),s=l,s&&(v=s))},ht),i&&(q(!0),de(u))}function Rt(t,e){var a=void 0,r;fe(()=>{a!==(a=e())&&(r&&(re(r),r=null),a&&(r=ae(()=>{Ve(()=>a(t))})))})}function Ue(t){var e,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(a=Ue(t[e]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function Bt(){for(var t,e,a=0,r="",n=arguments.length;a<n;a++)(t=arguments[a])&&(e=Ue(t))&&(r&&(r+=" "),r+=e);return r}function Gt(t){return typeof t=="object"?Bt(t):t??""}const Ae=[...` 	
\r\f \v\uFEFF`];function jt(t,e,a){var r=t==null?"":""+t;if(a){for(var n in a)if(a[n])r=r?r+" "+n:n;else if(r.length)for(var o=n.length,i=0;(i=r.indexOf(n,i))>=0;){var s=i+o;(i===0||Ae.includes(r[i-1]))&&(s===r.length||Ae.includes(r[s]))?r=(i===0?"":r.substring(0,i))+r.substring(s+1):i=s}}return r===""?null:r}function De(t,e=!1){var a=e?" !important;":";",r="";for(var n in t){var o=t[n];o!=null&&o!==""&&(r+=" "+n+": "+o+a)}return r}function pe(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vt(t,e){if(e){var a="",r,n;if(Array.isArray(e)?(r=e[0],n=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,s=!1,v=[];r&&v.push(...Object.keys(r).map(pe)),n&&v.push(...Object.keys(n).map(pe));var c=0,u=-1;const d=t.length;for(var h=0;h<d;h++){var l=t[h];if(s?l==="/"&&t[h-1]==="*"&&(s=!1):o?o===l&&(o=!1):l==="/"&&t[h+1]==="*"?s=!0:l==='"'||l==="'"?o=l:l==="("?i++:l===")"&&i--,!s&&o===!1&&i===0){if(l===":"&&u===-1)u=h;else if(l===";"||h===d-1){if(u!==-1){var y=pe(t.substring(c,u).trim());if(!v.includes(y)){l!==";"&&h++;var f=t.substring(c,h).trim();a+=" "+f+";"}}c=h+1,u=-1}}}}return r&&(a+=De(r)),n&&(a+=De(n,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function Ft(t,e,a,r,n,o){var i=t.__className;if(C||i!==a||i===void 0){var s=jt(a,r,o);(!C||s!==t.getAttribute("class"))&&(s==null?t.removeAttribute("class"):e?t.className=s:t.setAttribute("class",s)),t.__className=a}else if(o&&n!==o)for(var v in o){var c=!!o[v];(n==null||c!==!!n[v])&&t.classList.toggle(v,c)}return o}function me(t,e={},a,r){for(var n in a){var o=a[n];e[n]!==o&&(a[n]==null?t.style.removeProperty(n):t.style.setProperty(n,o,r))}}function Wt(t,e,a,r){var n=t.__style;if(C||n!==e){var o=Vt(e,r);(!C||o!==t.getAttribute("style"))&&(o==null?t.removeAttribute("style"):t.style.cssText=o),t.__style=e}else r&&(Array.isArray(r)?(me(t,a?.[0],r[0]),me(t,a?.[1],r[1],"important")):me(t,a,r));return r}function Ne(t,e,a=!1){if(t.multiple){if(e==null)return;if(!He(e))return pt();for(var r of t.options)r.selected=e.includes(ze(r));return}for(r of t.options){var n=ze(r);if(mt(n,e)){r.selected=!0;return}}(!a||e!==void 0)&&(t.selectedIndex=-1)}function Ut(t){var e=new MutationObserver(()=>{Ne(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),bt(()=>{e.disconnect()})}function ze(t){return"__value"in t?t.__value:t.value}const ne=Symbol("class"),se=Symbol("style"),Ye=Symbol("is custom element"),Je=Symbol("is html");function Yt(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Ce(t,e,a,r){var n=Ke(t);C&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="loading"&&(t[Mt]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ze(t).includes(e)?t[e]=a:t.setAttribute(e,a))}function Jt(t,e,a,r,n=!1){var o=Ke(t),i=o[Ye],s=!o[Je];let v=C&&i;v&&q(!1);var c=e||{},u=t.tagName==="OPTION";for(var h in e)h in a||(a[h]=null);a.class?a.class=Gt(a.class):a[ne]&&(a.class=null),a[se]&&(a.style??=null);var l=Ze(t);for(const w in a){let S=a[w];if(u&&w==="value"&&S==null){t.value=t.__value="",c[w]=S;continue}if(w==="class"){var y=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ft(t,y,S,r,e?.[ne],a[ne]),c[w]=S,c[ne]=a[ne];continue}if(w==="style"){Wt(t,S,e?.[se],a[se]),c[w]=S,c[se]=a[se];continue}var f=c[w];if(!(S===f&&!(S===void 0&&t.hasAttribute(w)))){c[w]=S;var d=w[0]+w[1];if(d!=="$$")if(d==="on"){const E={},g="$$"+w;let _=w.slice(2);var m=Tt(_);if(At(_)&&(_=_.slice(0,-7),E.capture=!0),!m&&f){if(S!=null)continue;t.removeEventListener(_,c[g],E),c[g]=null}if(S!=null)if(m)t[`__${_}`]=S,zt([_]);else{let L=function(K){c[w].call(this,K)};c[g]=Dt(_,t,L,E)}else m&&(t[`__${_}`]=void 0)}else if(w==="style")Ce(t,w,S);else if(w==="autofocus")It(t,!!S);else if(!i&&(w==="__value"||w==="value"&&S!=null))t.value=t.__value=S;else if(w==="selected"&&u)Yt(t,S);else{var N=w;s||(N=Ct(N));var D=N==="defaultValue"||N==="defaultChecked";if(S==null&&!i&&!D)if(o[w]=null,N==="value"||N==="checked"){let E=t;const g=e===void 0;if(N==="value"){let _=E.defaultValue;E.removeAttribute(N),E.defaultValue=_,E.value=E.__value=g?_:null}else{let _=E.defaultChecked;E.removeAttribute(N),E.defaultChecked=_,E.checked=g?_:!1}}else t.removeAttribute(w);else D||l.includes(N)&&(i||typeof S!="string")?t[N]=S:typeof S!="function"&&Ce(t,N,S)}}}return v&&q(!0),c}function Te(t,e,a=[],r=[],n,o=!1){wt(a,r,i=>{var s=void 0,v={},c=t.nodeName==="SELECT",u=!1;if(fe(()=>{var l=e(...i.map(z)),y=Jt(t,s,l,n,o);u&&c&&"value"in l&&Ne(t,l.value);for(let d of Object.getOwnPropertySymbols(v))l[d]||re(v[d]);for(let d of Object.getOwnPropertySymbols(l)){var f=l[d];d.description===yt&&(!s||f!==s[d])&&(v[d]&&re(v[d]),v[d]=ae(()=>Rt(t,()=>f))),y[d]=f}s=y}),c){var h=t;Ve(()=>{Ne(h,s.value,!0),Ut(h)})}u=!0})}function Ke(t){return t.__attributes??={[Ye]:t.nodeName.includes("-"),[Je]:t.namespaceURI===Nt}}var Le=new Map;function Ze(t){var e=Le.get(t.nodeName);if(e)return e;Le.set(t.nodeName,e=[]);for(var a,r=t,n=Element.prototype;n!==r;){a=St(r);for(var o in a)a[o].set&&e.push(o);r=kt(r)}return e}const Kt=!0,Fa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Kt},Symbol.toStringTag,{value:"Module"})),Zt="I am a backend and frontend developer with three years of experience. My skills include programming in Java and JavaScript, as well as creating pipelines and scripts with Jenkins and Groovy. I am seeking new opportunities to learn and build solutions that can help everyone.",Qt="Miguel",Xt="Sosa Guardado",qt="Software Engineer",ea="Guadalajara, México",le={description:Zt,firstName:Qt,lastName:Xt,degree:qt,hometown:ea};/**
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
 */const ta={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var aa=xt("<svg><!><!></svg>");function Y(t,e){H(e,!0);const a=ie(e,"color",3,"currentColor"),r=ie(e,"size",3,24),n=ie(e,"strokeWidth",3,2),o=ie(e,"absoluteStrokeWidth",3,!1),i=ie(e,"iconNode",19,()=>[]),s=F(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var v=aa();Te(v,h=>({...ta,...s,width:r(),height:r(),stroke:a(),"stroke-width":h,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>o()?Number(n())*24/Number(r()):n()]);var c=b(v);te(c,17,i,ee,(h,l)=>{var y=Fe(()=>Et(z(l),2));let f=()=>z(y)[0],d=()=>z(y)[1];var m=P(),N=O(m);Ht(N,f,!0,(D,w)=>{Te(D,()=>({...d()}))}),x(h,m)});var u=$(c);j(u,()=>e.children??V),p(v),x(t,v),R()}function ra(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];Y(t,U({name:"award"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function ia(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];Y(t,U({name:"book-marked"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function na(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];Y(t,U({name:"briefcase-business"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function sa(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];Y(t,U({name:"building"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function oa(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];Y(t,U({name:"calendar"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function la(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"}],["circle",{cx:"5",cy:"14",r:"3"}]];Y(t,U({name:"file-badge"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function da(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];Y(t,U({name:"github"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function ca(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];Y(t,U({name:"graduation-cap"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function fa(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Y(t,U({name:"house"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function ua(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];Y(t,U({name:"linkedin"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function va(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];Y(t,U({name:"school"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}function ha(t,e){H(e,!0);/**
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
 */let a=F(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Y(t,U({name:"user"},()=>a,{get iconNode(){return r},children:(n,o)=>{var i=P(),s=O(i);j(s,()=>e.children??V),x(n,i)},$$slots:{default:!0}})),R()}var ga=B('<header class="flex flex-col items-center justify-center pt-3 gap-2 bg-linear-to-t from-zinc-100/0 to-zinc-500/35 dark:from-zinc-900/0 dark:to-zinc-700/50"><div class="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-2"><img class="size-14 rounded-md" src="https://media.licdn.com/dms/image/v2/D4E03AQGdAZ2YbwtCkw/profile-displayphoto-scale_400_400/B4EZhE2kcbHoAg-/0/1753501813791?e=1756339200&amp;v=beta&amp;t=UOBMsi1WoI77gGnT4rhLYFY24yyDVlWChXJ-hLFRZl8" alt="Profile avatar"/> <div class="text-center md:text-justify"><h1 class="text-2xl font-bold"> </h1> <h2 class="text-lg font-normal"> </h2></div></div> <div class="flex gap-2"><div class="flex items-center gap-1"><!> <p> </p></div> <div class="flex items-center gap-1"><!> <a href="https://www.linkedin.com/in/misosa" target="_blank">LinkedIn</a></div> <div class="flex items-center gap-1"><!> <a href="https://github.com/LordSinSentido" target="_blank">GitHub</a></div></div></header>');function _a(t,e){H(e,!1),Ie();var a=ga(),r=b(a),n=$(b(r),2),o=b(n),i=b(o);p(o);var s=$(o,2),v=b(s,!0);p(s),p(n),p(r);var c=$(r,2),u=b(c),h=b(u);fa(h,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var l=$(h,2),y=b(l,!0);p(l),p(u);var f=$(u,2),d=b(f);ua(d,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"}),$e(2),p(f);var m=$(f,2),N=b(m);da(N,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"}),$e(2),p(m),p(c),p(a),W(()=>{G(i,`${le.firstName} ${le.lastName}`),G(v,le.degree),G(y,le.hometown)}),x(t,a),R()}var pa=B('<h4 class="font-bold"> </h4>'),ma=B('<div class="rounded-md border-2 border-neutral-500 px-1.5"><p> </p></div>'),ba=B('<div class="flex w-1/4 min-w-40 flex-col gap-1"><!> <div class="flex flex-wrap gap-1"></div></div>');function ce(t,e){var a=ba(),r=b(a);{var n=i=>{var s=pa(),v=b(s,!0);p(s),W(()=>G(v,e.title)),x(i,s)};Q(r,i=>{e.title&&i(n)})}var o=$(r,2);te(o,21,()=>e.items,ee,(i,s)=>{var v=ma(),c=b(v),u=b(c,!0);p(c),p(v),W(()=>G(u,z(s))),x(i,v)}),p(o),p(a),x(t,a)}var wa=B('<div class="flex items-baseline justify-start gap-1 md:justify-end"><!> <p> </p></div>'),ya=B('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Na=B('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),ka=B('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Ma=B("<p> </p>"),Sa=B("<p><span>&mdash;</span> </p>"),xa=B("<div></div>"),Ea=B('<div class="flex flex-col gap-1"><div><div class="flex-no-wrap flex flex-col md:flex-row"><h4 class="grow"> </h4> <div class="flex flex-col"><!></div></div> <div><!> <!> <!></div></div> <!> <!></div>');function be(t,e){H(e,!0);const a=12,r="en-US",n={month:"long",year:"numeric"},o=()=>{const M=i(e.startingDate)?.toLocaleDateString(r,n);if(!M)return null;const k=i(e.endingDate)?.toLocaleDateString(r,n);return k?`${M} - ${k}`:M};function i(M){if(M){const[k,A]=M?.split("-"),T=parseInt(k,10),I=parseInt(A,10);return new Date(I,T-1)}return null}var s=Ea(),v=b(s),c=b(v),u=b(c),h=b(u,!0);p(u);var l=$(u,2),y=b(l);{var f=M=>{var k=wa(),A=b(k);oa(A,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"10"});var T=$(A,2),I=b(T,!0);p(T),p(k),W(Z=>G(I,Z),[o]),x(M,k)};Q(y,M=>{o()&&M(f)})}p(l),p(c);var d=$(c,2),m=b(d);{var N=M=>{var k=ya(),A=b(k);sa(A,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:a});var T=$(A,2),I=b(T);p(T),p(k),W(()=>G(I,`${e.company??""}${e.modality?` (${e.modality})`:""}`)),x(M,k)};Q(m,M=>{e.company&&M(N)})}var D=$(m,2);{var w=M=>{var k=Na(),A=b(k);va(A,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:a});var T=$(A,2),I=b(T,!0);p(T),p(k),W(()=>G(I,e.school)),x(M,k)};Q(D,M=>{e.school&&M(w)})}var S=$(D,2);{var E=M=>{var k=ka(),A=b(k);la(A,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:a});var T=$(A,2),I=b(T,!0);p(T),p(k),W(()=>G(I,e.issuer)),x(M,k)};Q(S,M=>{e.issuer&&M(E)})}p(d),p(v);var g=$(v,2);{var _=M=>{var k=Ma(),A=b(k,!0);p(k),W(()=>G(A,e.description)),x(M,k)};Q(g,M=>{e.description&&M(_)})}var L=$(g,2);{var K=M=>{var k=xa();te(k,21,()=>e.tasks,ee,(A,T)=>{var I=Sa(),Z=$(b(I));p(I),W(()=>G(Z,` ${z(T)??""}`)),x(A,I)}),p(k),x(M,k)};Q(L,M=>{e.tasks&&M(K)})}p(s),W(()=>G(h,e.title)),x(t,s),R()}var $a=B('<section class="w-full max-w-2xl"><div class="mb-1 flex items-center gap-2"><!> <h3> </h3></div> <hr class="mb-2 w-4/12 border-b-1 border-zinc-900 dark:border-zinc-300"/> <div class="flex grow flex-col gap-2"><!></div></section>');function oe(t,e){var a=$a(),r=b(a),n=b(r);{var o=u=>{var h=P();const l=Fe(()=>e.icon);var y=O(h);Lt(y,()=>z(l),(f,d)=>{d(f,{class:"stroke-zinc-900 dark:stroke-zinc-300 stroke-3",size:"18"})}),x(u,h)};Q(n,u=>{e.icon&&u(o)})}var i=$(n,2),s=b(i,!0);p(i),p(r);var v=$(r,4),c=b(v);j(c,()=>e.children??V),p(v),p(a),W(()=>G(s,e.title)),x(t,a)}const Aa=[{job:"Software Developer",modality:"Full-time",where:"Oracle de México S.A de C.V.",startingDate:"08-2023",tasks:["Collaborated with cross-functional teams to develop new features and resolve bugs in internal applications.","Engineered and implemented Jenkins pipelines with Groovy to automate the connection of microservices.","Designed, developed, and maintained internal microservices and web servers to support company operations."]},{job:"Web and Mobile Developer",where:"Logística Reyes",startingDate:"10-2022",endingDate:"08-2023",modality:"Internship & full-time",tasks:["Directed the development of a mobile application for tracking parcels with React Native.","Engineered and maintained a robust backend system using Laravel and MariaDB.","Contributed to the improvement of a web tool designed to streamline all internal processes."]}],Da=[{degree:"Bachelor's Degree in Software Engineering",location:"Centro de Enseñanza Técnica Industrial Colomos",startingDate:"08-2019",endingDate:"06-2023"},{degree:"Technical Degree in Construction",location:"Centro de Enseñanza Técnica Industrial Colomos",startingDate:"08-2014",endingDate:"12-2018"}],za=[{title:"Diploma in English Language",by:"Proulex (University of Guadalajara)",obtainedDate:"02-2025"},{title:"Introduction to Java",by:"Sololearn",obtainedDate:"08-2025"}],Ca=["JavaScript","Java","Groovy","SQL","Python"],Ta=["Node.JS","Express","Spring Boot","Oracle DB"],La=["React","Svelte","TailwindCSS"],Ia=["Docker","Git","Bash","Kubernetes","Jenkins","Cypress"];var Pa=B("<p> </p>"),Oa=B('<div class="flex gap-2 overflow-y-auto"><!> <!> <!> <!></div>'),Ha=B('<div><!> <main class="flex flex-col items-center gap-3 md:px-10 px-6 py-3"><!> <!> <!> <!> <!></main></div>');function Wa(t,e){H(e,!1),Ie();var a=Ha(),r=b(a);_a(r,{});var n=$(r,2),o=b(n);oe(o,{get icon(){return ha},title:"About me",children:(u,h)=>{var l=Pa(),y=b(l,!0);p(l),W(()=>G(y,le.description)),x(u,l)}});var i=$(o,2);oe(i,{get icon(){return ia},title:"Knowledge",children:(u,h)=>{var l=Oa(),y=b(l);ce(y,{title:"Languages",get items(){return Ca}});var f=$(y,2);ce(f,{title:"Backend",get items(){return Ta}});var d=$(f,2);ce(d,{title:"Frontend",get items(){return La}});var m=$(d,2);ce(m,{title:"Tools",get items(){return Ia}}),p(l),x(u,l)}});var s=$(i,2);oe(s,{get icon(){return na},title:"Professional experience",children:(u,h)=>{var l=P(),y=O(l);te(y,1,()=>Aa,ee,(f,d)=>{be(f,{get title(){return z(d).job},get company(){return z(d).where},get startingDate(){return z(d).startingDate},get endingDate(){return z(d).endingDate},get modality(){return z(d).modality},get tasks(){return z(d).tasks}})}),x(u,l)}});var v=$(s,2);oe(v,{get icon(){return ca},title:"Education",children:(u,h)=>{var l=P(),y=O(l);te(y,1,()=>Da,ee,(f,d)=>{be(f,{get title(){return z(d).degree},get school(){return z(d).location},get startingDate(){return z(d).startingDate},get endingDate(){return z(d).endingDate}})}),x(u,l)}});var c=$(v,2);oe(c,{get icon(){return ra},title:"Certifications",children:(u,h)=>{var l=P(),y=O(l);te(y,1,()=>za,ee,(f,d)=>{be(f,{get title(){return z(d).title},get issuer(){return z(d).by},get startingDate(){return z(d).obtainedDate}})}),x(u,l)}}),p(n),p(a),x(t,a),R()}export{Wa as component,Fa as universal};
