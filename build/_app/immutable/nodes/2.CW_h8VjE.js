import"../chunks/DsnmJJEf.js";import{i as Ie}from"../chunks/BycVrk5F.js";import{ah as Pe,J as de,K as C,L as we,A as D,a5 as et,N as tt,O as rt,P as Ae,Q as oe,R as Z,Z as K,ak as at,ao as nt,T as q,W as it,U as st,aB as Se,S as Me,ax as ot,aC as Ee,as as Oe,i as He,aD as fe,X as ke,Y as Be,aE as ue,aF as lt,aG as ge,aH as ee,am as ct,aI as dt,ar as ft,aJ as ut,aj as Re,a3 as Ge,aK as Ve,aL as vt,aM as ht,M as gt,aN as _t,au as pt,av as je,aO as mt,aP as bt,aQ as Fe,aR as wt,aS as Nt,aT as yt,aU as Mt,aV as kt,aW as At,_ as St,p as I,aX as Et,r as B,v as A,w as P,G as y,I as E,aY as R,H as N,o as T,q as z,az as We,aZ as $t,E as O,F,a_ as $e}from"../chunks/DF1ZUXm9.js";import{i as xt,a as Dt,c as Ct,d as Tt,n as zt,b as Lt,s as H}from"../chunks/BlA5p3bb.js";import{p as re,r as V,s as W,i as J,c as It}from"../chunks/DrrigNH_.js";function Pt(t,e){if(e){const r=document.body;t.autofocus=!0,Pe(()=>{document.activeElement===r&&t.focus()})}}function Q(t,e){return e}function Ot(t,e,r){for(var a=t.items,i=[],o=e.length,n=0;n<o;n++)dt(e[n].e,i,!0);var s=o>0&&i.length===0&&r!==null;if(s){var _=r.parentNode;ft(_),_.append(r),a.clear(),Y(t,e[0].prev,e[o-1].next)}ut(i,()=>{for(var f=0;f<o;f++){var p=e[f];s||(a.delete(p.k),Y(t,p.prev,p.next)),ee(p.e,!s)}})}function X(t,e,r,a,i,o=null){var n=t,s={flags:e,items:new Map,first:null},_=(e&Ve)!==0;if(_){var f=t;n=C?oe(Re(f)):f.appendChild(Me())}C&&we();var p=null,g=!1,v=new Map,m=et(()=>{var b=r();return He(b)?b:b==null?[]:Oe(b)}),d,h;function u(){Ht(h,d,s,v,n,i,e,a,r),o!==null&&(d.length===0?p?ke(p):p=q(()=>o(n)):p!==null&&Be(p,()=>{p=null}))}de(()=>{h??=Ge,d=D(m);var b=d.length;if(g&&b===0)return;g=b===0;let x=!1;if(C){var w=tt(n)===rt;w!==(b===0)&&(n=Ae(),oe(n),Z(!1),x=!0)}if(C){for(var k=null,S,l=0;l<b;l++){if(K.nodeType===at&&K.data===nt){n=K,x=!0,Z(!1);break}var c=d[l],M=a(c,l);S=Ne(K,s,k,null,c,M,l,i,e,r),s.items.set(M,S),k=S}b>0&&oe(Ae())}if(C)b===0&&o&&(p=q(()=>o(n)));else if(it()){var $=new Set,L=st;for(l=0;l<b;l+=1){c=d[l],M=a(c,l);var G=s.items.get(M)??v.get(M);G?(e&(ue|fe))!==0&&Ue(G,c,l,e):(S=Ne(null,s,null,null,c,M,l,i,e,r,!0),v.set(M,S)),$.add(M)}for(const[j,le]of s.items)$.has(j)||L.skipped_effects.add(le.e);L.add_callback(u)}else u();x&&Z(!0),D(m)}),C&&(n=K)}function Ht(t,e,r,a,i,o,n,s,_){var f=(n&vt)!==0,p=(n&(ue|fe))!==0,g=e.length,v=r.items,m=r.first,d=m,h,u=null,b,x=[],w=[],k,S,l,c;if(f)for(c=0;c<g;c+=1)k=e[c],S=s(k,c),l=v.get(S),l!==void 0&&(l.a?.measure(),(b??=new Set).add(l));for(c=0;c<g;c+=1){if(k=e[c],S=s(k,c),l=v.get(S),l===void 0){var M=a.get(S);if(M!==void 0){a.delete(S),v.set(S,M);var $=u?u.next:d;Y(r,u,M),Y(r,M,$),_e(M,$,i),u=M}else{var L=d?d.e.nodes_start:i;u=Ne(L,r,u,u===null?r.first:u.next,k,S,c,o,n,_)}v.set(S,u),x=[],w=[],d=u.next;continue}if(p&&Ue(l,k,c,n),(l.e.f&ge)!==0&&(ke(l.e),f&&(l.a?.unfix(),(b??=new Set).delete(l))),l!==d){if(h!==void 0&&h.has(l)){if(x.length<w.length){var G=w[0],j;u=G.prev;var le=x[0],ve=x[x.length-1];for(j=0;j<x.length;j+=1)_e(x[j],G,i);for(j=0;j<w.length;j+=1)h.delete(w[j]);Y(r,le.prev,ve.next),Y(r,u,le),Y(r,ve,G),d=G,u=ve,c-=1,x=[],w=[]}else h.delete(l),_e(l,d,i),Y(r,l.prev,l.next),Y(r,l,u===null?r.first:u.next),Y(r,u,l),u=l;continue}for(x=[],w=[];d!==null&&d.k!==S;)(d.e.f&ge)===0&&(h??=new Set).add(d),w.push(d),d=d.next;if(d===null)continue;l=d}x.push(l),u=l,d=l.next}if(d!==null||h!==void 0){for(var te=h===void 0?[]:Oe(h);d!==null;)(d.e.f&ge)===0&&te.push(d),d=d.next;var he=te.length;if(he>0){var Xe=(n&Ve)!==0&&g===0?i:null;if(f){for(c=0;c<he;c+=1)te[c].a?.measure();for(c=0;c<he;c+=1)te[c].a?.fix()}Ot(r,te,Xe)}}f&&Pe(()=>{if(b!==void 0)for(l of b)l.a?.apply()}),t.first=r.first&&r.first.e,t.last=u&&u.e;for(var qe of a.values())ee(qe.e);a.clear()}function Ue(t,e,r,a){(a&ue)!==0&&Se(t.v,e),(a&fe)!==0?Se(t.i,r):t.i=r}function Ne(t,e,r,a,i,o,n,s,_,f,p){var g=(_&ue)!==0,v=(_&lt)===0,m=g?v?ot(i,!1,!1):Ee(i):i,d=(_&fe)===0?n:Ee(n),h={i:d,v:m,k:o,a:null,e:null,prev:r,next:a};try{if(t===null){var u=document.createDocumentFragment();u.append(t=Me())}return h.e=q(()=>s(t,m,d,f),C),h.e.prev=r&&r.e,h.e.next=a&&a.e,r===null?p||(e.first=h):(r.next=h,r.e.next=h.e),a!==null&&(a.prev=h,a.e.prev=h.e),h}finally{}}function _e(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,i=e?e.e.nodes_start:r,o=t.e.nodes_start;o!==null&&o!==a;){var n=ct(o);i.before(o),o=n}}function Y(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Bt(t,e,r,a,i,o){let n=C;C&&we();var s,_,f=null;C&&K.nodeType===ht&&(f=K,we());var p=C?K:t,g;de(()=>{const v=e()||null;var m=_t;v!==s&&(g&&(v===null?Be(g,()=>{g=null,_=null}):v===_?ke(g):ee(g)),v&&v!==_&&(g=q(()=>{if(f=C?f:document.createElementNS(m,v),pt(f,f),a){C&&xt(v)&&f.append(document.createComment(""));var d=C?Re(f):f.appendChild(Me());C&&(d===null?Z(!1):oe(d)),a(f,d)}Ge.nodes_end=f,p.before(f)})),s=v,s&&(_=s))},gt),n&&(Z(!0),oe(p))}function Rt(t,e){var r=void 0,a;de(()=>{r!==(r=e())&&(a&&(ee(a),a=null),r&&(a=q(()=>{je(()=>r(t))})))})}function Ye(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(r=Ye(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Gt(){for(var t,e,r=0,a="",i=arguments.length;r<i;r++)(t=arguments[r])&&(e=Ye(t))&&(a&&(a+=" "),a+=e);return a}function Vt(t){return typeof t=="object"?Gt(t):t??""}const xe=[...` 	
\r\f \v\uFEFF`];function jt(t,e,r){var a=t==null?"":""+t;if(r){for(var i in r)if(r[i])a=a?a+" "+i:i;else if(a.length)for(var o=i.length,n=0;(n=a.indexOf(i,n))>=0;){var s=n+o;(n===0||xe.includes(a[n-1]))&&(s===a.length||xe.includes(a[s]))?a=(n===0?"":a.substring(0,n))+a.substring(s+1):n=s}}return a===""?null:a}function De(t,e=!1){var r=e?" !important;":";",a="";for(var i in t){var o=t[i];o!=null&&o!==""&&(a+=" "+i+": "+o+r)}return a}function pe(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Ft(t,e){if(e){var r="",a,i;if(Array.isArray(e)?(a=e[0],i=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,n=0,s=!1,_=[];a&&_.push(...Object.keys(a).map(pe)),i&&_.push(...Object.keys(i).map(pe));var f=0,p=-1;const h=t.length;for(var g=0;g<h;g++){var v=t[g];if(s?v==="/"&&t[g-1]==="*"&&(s=!1):o?o===v&&(o=!1):v==="/"&&t[g+1]==="*"?s=!0:v==='"'||v==="'"?o=v:v==="("?n++:v===")"&&n--,!s&&o===!1&&n===0){if(v===":"&&p===-1)p=g;else if(v===";"||g===h-1){if(p!==-1){var m=pe(t.substring(f,p).trim());if(!_.includes(m)){v!==";"&&g++;var d=t.substring(f,g).trim();r+=" "+d+";"}}f=g+1,p=-1}}}}return a&&(r+=De(a)),i&&(r+=De(i,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Wt(t,e,r,a,i,o){var n=t.__className;if(C||n!==r||n===void 0){var s=jt(r,a,o);(!C||s!==t.getAttribute("class"))&&(s==null?t.removeAttribute("class"):e?t.className=s:t.setAttribute("class",s)),t.__className=r}else if(o&&i!==o)for(var _ in o){var f=!!o[_];(i==null||f!==!!i[_])&&t.classList.toggle(_,f)}return o}function me(t,e={},r,a){for(var i in r){var o=r[i];e[i]!==o&&(r[i]==null?t.style.removeProperty(i):t.style.setProperty(i,o,a))}}function Ut(t,e,r,a){var i=t.__style;if(C||i!==e){var o=Ft(e,a);(!C||o!==t.getAttribute("style"))&&(o==null?t.removeAttribute("style"):t.style.cssText=o),t.__style=e}else a&&(Array.isArray(a)?(me(t,r?.[0],a[0]),me(t,r?.[1],a[1],"important")):me(t,r,a));return a}function ye(t,e,r=!1){if(t.multiple){if(e==null)return;if(!He(e))return mt();for(var a of t.options)a.selected=e.includes(Ce(a));return}for(a of t.options){var i=Ce(a);if(bt(i,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function Yt(t){var e=new MutationObserver(()=>{ye(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Fe(()=>{e.disconnect()})}function Ce(t){return"__value"in t?t.__value:t.value}const ae=Symbol("class"),ne=Symbol("style"),Je=Symbol("is custom element"),Ke=Symbol("is html");function Jt(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Te(t,e,r,a){var i=Ze(t);C&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=r)&&(e==="loading"&&(t[kt]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Qe(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Kt(t,e,r,a,i=!1){var o=Ze(t),n=o[Je],s=!o[Ke];let _=C&&n;_&&Z(!1);var f=e||{},p=t.tagName==="OPTION";for(var g in e)g in r||(r[g]=null);r.class?r.class=Vt(r.class):r[ae]&&(r.class=null),r[ne]&&(r.style??=null);var v=Qe(t);for(const w in r){let k=r[w];if(p&&w==="value"&&k==null){t.value=t.__value="",f[w]=k;continue}if(w==="class"){var m=t.namespaceURI==="http://www.w3.org/1999/xhtml";Wt(t,m,k,a,e?.[ae],r[ae]),f[w]=k,f[ae]=r[ae];continue}if(w==="style"){Ut(t,k,e?.[ne],r[ne]),f[w]=k,f[ne]=r[ne];continue}var d=f[w];if(!(k===d&&!(k===void 0&&t.hasAttribute(w)))){f[w]=k;var h=w[0]+w[1];if(h!=="$$")if(h==="on"){const S={},l="$$"+w;let c=w.slice(2);var u=Lt(c);if(Dt(c)&&(c=c.slice(0,-7),S.capture=!0),!u&&d){if(k!=null)continue;t.removeEventListener(c,f[l],S),f[l]=null}if(k!=null)if(u)t[`__${c}`]=k,Tt([c]);else{let M=function($){f[w].call(this,$)};f[l]=Ct(c,t,M,S)}else u&&(t[`__${c}`]=void 0)}else if(w==="style")Te(t,w,k);else if(w==="autofocus")Pt(t,!!k);else if(!n&&(w==="__value"||w==="value"&&k!=null))t.value=t.__value=k;else if(w==="selected"&&p)Jt(t,k);else{var b=w;s||(b=zt(b));var x=b==="defaultValue"||b==="defaultChecked";if(k==null&&!n&&!x)if(o[w]=null,b==="value"||b==="checked"){let S=t;const l=e===void 0;if(b==="value"){let c=S.defaultValue;S.removeAttribute(b),S.defaultValue=c,S.value=S.__value=l?c:null}else{let c=S.defaultChecked;S.removeAttribute(b),S.defaultChecked=c,S.checked=l?c:!1}}else t.removeAttribute(w);else x||v.includes(b)&&(n||typeof k!="string")?t[b]=k:typeof k!="function"&&Te(t,b,k)}}}return _&&Z(!0),f}function ze(t,e,r=[],a=[],i,o=!1){wt(r,a,n=>{var s=void 0,_={},f=t.nodeName==="SELECT",p=!1;if(de(()=>{var v=e(...n.map(D)),m=Kt(t,s,v,i,o);p&&f&&"value"in v&&ye(t,v.value);for(let h of Object.getOwnPropertySymbols(_))v[h]||ee(_[h]);for(let h of Object.getOwnPropertySymbols(v)){var d=v[h];h.description===Nt&&(!s||d!==s[h])&&(_[h]&&ee(_[h]),_[h]=q(()=>Rt(t,()=>d))),m[h]=d}s=m}),f){var g=t;je(()=>{ye(g,s.value,!0),Yt(g)})}p=!0})}function Ze(t){return t.__attributes??={[Je]:t.nodeName.includes("-"),[Ke]:t.namespaceURI===yt}}var Le=new Map;function Qe(t){var e=Le.get(t.nodeName);if(e)return e;Le.set(t.nodeName,e=[]);for(var r,a=t,i=Element.prototype;i!==a;){r=At(a);for(var o in r)r[o].set&&e.push(o);a=Mt(a)}return e}function Zt(t,e,r){var a=St(t,e);a&&a.set&&(t[e]=r,Fe(()=>{t[e]=null}))}const Qt=!0,Wr=Object.freeze(Object.defineProperty({__proto__:null,prerender:Qt},Symbol.toStringTag,{value:"Module"})),Xt="Backend and frontend developer with three years of experience, programming software using Java and JavaScript and creating pipelines and scripts with Jenkins and Groovy. I’m finding new opportunities to learn and create new solutions that can help everyone.",qt="Miguel",er="Sosa Guardado",tr="Software Engineer",rr="Guadalajara, México",se={description:Xt,firstName:qt,lastName:er,degree:tr,hometown:rr};/**
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
 */const ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var nr=Et("<svg><!><!></svg>");function U(t,e){I(e,!0);const r=re(e,"color",3,"currentColor"),a=re(e,"size",3,24),i=re(e,"strokeWidth",3,2),o=re(e,"absoluteStrokeWidth",3,!1),n=re(e,"iconNode",19,()=>[]),s=V(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var _=nr();ze(_,g=>({...ar,...s,width:a(),height:a(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>o()?Number(i())*24/Number(a()):i()]);var f=y(_);X(f,17,n,Q,(g,v)=>{var m=We(()=>$t(D(v),2));let d=()=>D(m)[0],h=()=>D(m)[1];var u=T(),b=z(u);Bt(b,d,!0,(x,w)=>{ze(x,()=>({...h()}))}),A(g,u)});var p=E(f);B(p,()=>e.children??R),N(_),A(t,_),P()}function ir(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];U(t,W({name:"award"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function sr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];U(t,W({name:"book-marked"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function or(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];U(t,W({name:"briefcase-business"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function lr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];U(t,W({name:"building"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function cr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];U(t,W({name:"calendar"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function dr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"}],["circle",{cx:"5",cy:"14",r:"3"}]];U(t,W({name:"file-badge"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function fr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];U(t,W({name:"github"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function ur(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];U(t,W({name:"graduation-cap"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function vr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];U(t,W({name:"house"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function hr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];U(t,W({name:"linkedin"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function gr(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];U(t,W({name:"school"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}function _r(t,e){I(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];U(t,W({name:"user"},()=>r,{get iconNode(){return a},children:(i,o)=>{var n=T(),s=z(n);B(s,()=>e.children??R),A(i,n)},$$slots:{default:!0}})),P()}var pr=O('<header class="flex flex-col items-center justify-center gap-5 bg-zinc-400 p-5 dark:bg-zinc-800"><div class="flex items-center justify-center gap-4"><img class="size-18 rounded-md" src="https://media.licdn.com/dms/image/v2/D4E03AQGdAZ2YbwtCkw/profile-displayphoto-scale_400_400/B4EZhE2kcbHoAg-/0/1753501813791?e=1756339200&amp;v=beta&amp;t=UOBMsi1WoI77gGnT4rhLYFY24yyDVlWChXJ-hLFRZl8" alt="Profile avatar"/> <div><h1 class="text-2xl font-bold"> </h1> <h2 class="text-lg font-normal"> </h2></div></div> <div class="flex gap-2"><div class="flex items-center gap-1"><!> <p> </p></div> <div class="flex items-center gap-1"><!> <a href="">LinkedIn</a></div> <div class="flex items-center gap-1"><!> <a href="">GitHub</a></div></div></header>');function mr(t,e){I(e,!1),Ie();var r=pr(),a=y(r),i=E(y(a),2),o=y(i),n=y(o);N(o);var s=E(o,2),_=y(s,!0);N(s),N(i),N(a);var f=E(a,2),p=y(f),g=y(p);vr(g,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var v=E(g,2),m=y(v,!0);N(v),N(p);var d=E(p,2),h=y(d);hr(h,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"}),$e(2),N(d);var u=E(d,2),b=y(u);fr(b,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"}),$e(2),N(u),N(f),N(r),F(()=>{H(n,`${se.firstName} ${se.lastName}`),H(_,se.degree),H(m,se.hometown)}),A(t,r),P()}var br=O('<h4 class="font-bold"> </h4>'),wr=O('<div class="rounded-md border-2 border-neutral-500 px-1.5"><p> </p></div>'),Nr=O('<div class="flex w-1/4 min-w-30 flex-col gap-1"><!> <div class="flex flex-wrap gap-1"></div></div>');function ce(t,e){var r=Nr(),a=y(r);{var i=n=>{var s=br(),_=y(s,!0);N(s),F(()=>H(_,e.title)),A(n,s)};J(a,n=>{e.title&&n(i)})}var o=E(a,2);X(o,21,()=>e.items,Q,(n,s)=>{var _=wr(),f=y(_),p=y(f,!0);N(f),N(_),F(()=>H(p,D(s))),A(n,_)}),N(o),N(r),A(t,r)}var yr=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Mr=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),kr=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Ar=O('<div class="flex items-baseline gap-1"><!> <p> </p></div>'),Sr=O("<p> </p>"),Er=O("<p><span>&mdash;</span> </p>"),$r=O('<div class="flex flex-col gap-1"><h4> </h4> <div class="flex flex-wrap gap-x-2"><!> <!> <!> <!></div> <!> <!></div>');function be(t,e){I(e,!0);const r="en-US",a={month:"long",year:"numeric"},i=()=>{const l=o(e.startingDate)?.toLocaleDateString(r,a);if(!l)return null;const c=o(e.endingDate)?.toLocaleDateString(r,a);return c?`${l} - ${c}`:l};function o(l){if(l){const[c,M]=l?.split("-"),$=parseInt(c,10),L=parseInt(M,10);return new Date(L,$-1)}return null}var n=$r(),s=y(n),_=y(s,!0);N(s);var f=E(s,2),p=y(f);{var g=l=>{var c=yr(),M=y(c);lr(M,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var $=E(M,2),L=y($);N($),N(c),F(()=>H(L,`${e.company??""}${e.modality?` (${e.modality})`:""}`)),A(l,c)};J(p,l=>{e.company&&l(g)})}var v=E(p,2);{var m=l=>{var c=Mr(),M=y(c);gr(M,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var $=E(M,2),L=y($,!0);N($),N(c),F(()=>H(L,e.school)),A(l,c)};J(v,l=>{e.school&&l(m)})}var d=E(v,2);{var h=l=>{var c=kr(),M=y(c);dr(M,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var $=E(M,2),L=y($,!0);N($),N(c),F(()=>H(L,e.issuer)),A(l,c)};J(d,l=>{e.issuer&&l(h)})}var u=E(d,2);{var b=l=>{var c=Ar(),M=y(c);cr(M,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"14"});var $=E(M,2),L=y($,!0);N($),N(c),F(G=>H(L,G),[i]),A(l,c)};J(u,l=>{i()&&l(b)})}N(f);var x=E(f,2);{var w=l=>{var c=Sr(),M=y(c,!0);N(c),F(()=>H(M,e.description)),A(l,c)};J(x,l=>{e.description&&l(w)})}var k=E(x,2);{var S=l=>{var c=T(),M=z(c);X(M,17,()=>e.tasks,Q,($,L)=>{var G=Er(),j=E(y(G));N(G),F(()=>H(j,` ${D(L)??""}`)),A($,G)}),A(l,c)};J(k,l=>{e.tasks&&l(S)})}N(n),F(()=>H(_,e.title)),A(t,n),P()}var xr=O('<section class="w-full max-w-2xl"><div class="mb-1 flex items-center gap-2"><!> <h3> </h3></div> <hr class="mb-2 w-4/12 border-b-1 border-zinc-900 dark:border-zinc-300"/> <div class="flex grow flex-col gap-3"><!></div></section>');function ie(t,e){var r=xr(),a=y(r),i=y(a);{var o=p=>{var g=T();const v=We(()=>e.icon);var m=z(g);It(m,()=>D(v),(d,h)=>{h(d,{class:"stroke-zinc-900 dark:stroke-zinc-300",size:"18"})}),A(p,g)};J(i,p=>{e.icon&&p(o)})}var n=E(i,2),s=y(n,!0);N(n),N(a);var _=E(a,4),f=y(_);B(f,()=>e.children??R),N(_),N(r),F(()=>H(s,e.title)),A(t,r)}const Dr=[{job:"Software Developer",modality:"Full-time",where:"Oracle de México S.A de C.V.",startingDate:"08-2023",tasks:["Collaborate with creating new features and fixing bugs for internal applications.","Build pipelines in Jenkins using Groovy to connect microservices.","Develop and maintain internal microservices and web servers."]},{job:"Web and Mobile Developer",where:"Logística Reyes",startingDate:"10-2022",endingDate:"08-2023",modality:"Internship & full-time",tasks:["Led and developed a mobile app used to track parcels using React Native.","Developed and maintained the backend system using Laravel and MariaDB.","Collaborate to improve the web tool which manages all the internal processes."]}],Cr=[{degree:"Bachelor's Degree in Software Engineering",location:"Centro de Enseñanza Técnica Industrial Colomos",startingDate:"08-2019",endingDate:"06-2023"},{degree:"Technical Degree in Construction",location:"Centro de Enseñanza Técnica Industrial Colomos",startingDate:"08-2014",endingDate:"12-2018"}],Tr=[{title:"Diploma in English Language",by:"Proulex (University of Guadalajara)",obtainedDate:"02-2025"},{title:"Introduction to Java",by:"Sololearn",obtainedDate:"08-2025"}],zr=["JavaScript","Java","Groovy","SQL","Python"],Lr=["Node.JS","Express","Spring Boot","Oracle DB"],Ir=["React","Svelte","TailwindCSS"],Pr=["Docker","Git","Kubernetes","Jenkins","Bash"];var Or=O("<p> </p>"),Hr=O('<div class="flex gap-2 overflow-y-auto"><!> <!> <!> <!></div>'),Br=O('<div><!> <main class="grid justify-items-center gap-5 px-10 py-5"><!> <!> <!> <!> <!></main></div>');function Ur(t,e){I(e,!1);const r=!0;Ie();var a=Br(),i=y(a);mr(i,{});var o=E(i,2),n=y(o);ie(n,{get icon(){return _r},title:"About me",children:(g,v)=>{var m=Or(),d=y(m,!0);N(m),F(()=>H(d,se.description)),A(g,m)}});var s=E(n,2);ie(s,{get icon(){return sr},title:"Knowledge",children:(g,v)=>{var m=Hr(),d=y(m);ce(d,{title:"Languages",get items(){return zr}});var h=E(d,2);ce(h,{title:"Backend",get items(){return Lr}});var u=E(h,2);ce(u,{title:"Frontend",get items(){return Ir}});var b=E(u,2);ce(b,{title:"Tools",get items(){return Pr}}),N(m),A(g,m)}});var _=E(s,2);ie(_,{get icon(){return or},title:"Professional experience",children:(g,v)=>{var m=T(),d=z(m);X(d,1,()=>Dr,Q,(h,u)=>{be(h,{get title(){return D(u).job},get company(){return D(u).where},get startingDate(){return D(u).startingDate},get endingDate(){return D(u).endingDate},get modality(){return D(u).modality},get tasks(){return D(u).tasks}})}),A(g,m)}});var f=E(_,2);ie(f,{get icon(){return ur},title:"Education",children:(g,v)=>{var m=T(),d=z(m);X(d,1,()=>Cr,Q,(h,u)=>{be(h,{get title(){return D(u).degree},get school(){return D(u).location},get startingDate(){return D(u).startingDate},get endingDate(){return D(u).endingDate}})}),A(g,m)}});var p=E(f,2);return ie(p,{get icon(){return ir},title:"Certifications",children:(g,v)=>{var m=T(),d=z(m);X(d,1,()=>Tr,Q,(h,u)=>{be(h,{get title(){return D(u).title},get issuer(){return D(u).by},get startingDate(){return D(u).obtainedDate}})}),A(g,m)}}),N(o),N(a),A(t,a),Zt(e,"prerender",r),P({prerender:r})}export{Ur as component,Wr as universal};
