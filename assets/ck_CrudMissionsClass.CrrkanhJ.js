import{Y as ne,d as z,r as j,c as S,e as le,a6 as Ce,$ as we,Z as ue,a0 as re,a as He,o as G,n as On,j as Nt,u as p,a4 as M,ap as Ge,w as _t,b1 as Tn,aN as Ot,ab as xn,F as An,b2 as En,p as Me,s as Ue,a5 as L,ai as de,k as me,l as $e,m as ee,am as Qe,aE as jt,X as Se,ay as Sn,b3 as Tt,b4 as Rn,a3 as Je,ac as Lt,b5 as Pn,b6 as zt,av as Cn,au as je,aP as Ht,ad as et,a1 as Ee,a8 as Mn,aT as kn,b7 as Dn,b8 as Bn,T as In,v as Fn,b9 as Nn,ba as _n,t as jn,g as Ln}from"./en_index.xCAGLME6.js";import{_ as ce,x as xt,y as $t,z as zn,u as Hn}from"./ck_aria.BaKc_5mX.js";import{e as Wt,a as Ut,j as At,d as $n}from"./ck_constants.DcN1x66V.js";import{b as Wn,t as Un,e as qn}from"./ck_el-overlay.DJ-4f-mb.js";import{E as Ze,c as Q,g as Vn}from"./ck_event.-sXuiol7.js";import{u as Kn}from"./ck_useForm.DSbdktPA.js";import{r as Zn,c as Gn}from"./ck_client.api.DUxc9zuG.js";function Jn(e){return e===void 0}const tt=Symbol("popper"),qt=Symbol("popperContent"),Xn=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Vt=ne({role:{type:String,values:Xn,default:"tooltip"}}),Yn=z({name:"ElPopper",inheritAttrs:!1}),Qn=z({...Yn,props:Vt,setup(e,{expose:t}){const n=e,r=j(),o=j(),a=j(),s=j(),u=S(()=>n.role),l={triggerRef:r,popperInstanceRef:o,contentRef:a,referenceRef:s,role:u};return t(l),Ce(tt,l),(i,f)=>le(i.$slots,"default")}});var er=ce(Qn,[["__file","popper.vue"]]);const tr=z({name:"ElPopperArrow",inheritAttrs:!1}),nr=z({...tr,setup(e,{expose:t}){const n=we("popper"),{arrowRef:r,arrowStyle:o}=ue(qt,void 0);return re(()=>{r.value=void 0}),t({arrowRef:r}),(a,s)=>(G(),He("span",{ref_key:"arrowRef",ref:r,class:Nt(p(n).e("arrow")),style:On(p(o)),"data-popper-arrow":""},null,6))}});var rr=ce(nr,[["__file","arrow.vue"]]);const Kt=ne({virtualRef:{type:M(Object)},virtualTriggering:Boolean,onMouseenter:{type:M(Function)},onMouseleave:{type:M(Function)},onClick:{type:M(Function)},onKeydown:{type:M(Function)},onFocus:{type:M(Function)},onBlur:{type:M(Function)},onContextmenu:{type:M(Function)},id:String,open:Boolean}),Zt=Symbol("elForwardRef"),or=e=>{Ce(Zt,{setForwardRef:n=>{e.value=n}})},ar=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),sr="ElOnlyChild",ir=z({name:sr,setup(e,{slots:t,attrs:n}){var r;const o=ue(Zt),a=ar((r=o?.setForwardRef)!=null?r:Ge);return()=>{var s;const u=(s=t.default)==null?void 0:s.call(t,n);if(!u)return null;const[l,i]=Gt(u);return l?_t(Tn(l,n),[[a]]):null}}});function Gt(e){if(!e)return[null,0];const t=e,n=t.filter(r=>r.type!==Ot).length;for(const r of t){if(xn(r))switch(r.type){case Ot:continue;case En:case"svg":return[Et(r),n];case An:return Gt(r.children);default:return[r,n]}return[Et(r),n]}return[null,0]}function Et(e){const t=we("only-child");return Me("span",{class:t.e("content")},[e])}const lr=z({name:"ElPopperTrigger",inheritAttrs:!1}),ur=z({...lr,props:Kt,setup(e,{expose:t}){const n=e,{role:r,triggerRef:o}=ue(tt,void 0);or(o);const a=S(()=>u.value?n.id:void 0),s=S(()=>{if(r&&r.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=S(()=>{if(r&&r.value!=="tooltip")return r.value}),l=S(()=>u.value?`${n.open}`:void 0);let i;const f=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return Ue(()=>{L(()=>n.virtualRef,d=>{d&&(o.value=Wt(d))},{immediate:!0}),L(o,(d,g)=>{i?.(),i=void 0,de(g)&&f.forEach(m=>{const b=n[m];b&&g.removeEventListener(m.slice(2).toLowerCase(),b,["onFocus","onBlur"].includes(m))}),de(d)&&(f.forEach(m=>{const b=n[m];b&&d.addEventListener(m.slice(2).toLowerCase(),b,["onFocus","onBlur"].includes(m))}),xt(d)&&(i=L([a,s,u,l],m=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((b,v)=>{jt(m[v])?d.removeAttribute(b):d.setAttribute(b,m[v])})},{immediate:!0}))),de(g)&&xt(g)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(m=>g.removeAttribute(m))},{immediate:!0})}),re(()=>{if(i?.(),i=void 0,o.value&&de(o.value)){const d=o.value;f.forEach(g=>{const m=n[g];m&&d.removeEventListener(g.slice(2).toLowerCase(),m,["onFocus","onBlur"].includes(g))}),o.value=void 0}}),t({triggerRef:o}),(d,g)=>d.virtualTriggering?$e("v-if",!0):(G(),me(p(ir),Qe({key:0},d.$attrs,{"aria-controls":p(a),"aria-describedby":p(s),"aria-expanded":p(l),"aria-haspopup":p(u)}),{default:ee(()=>[le(d.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var cr=ce(ur,[["__file","trigger.vue"]]),H="top",U="bottom",q="right",$="left",nt="auto",Be=[H,U,q,$],ve="start",ke="end",pr="clippingParents",Jt="viewport",Ae="popper",fr="reference",St=Be.reduce(function(e,t){return e.concat([t+"-"+ve,t+"-"+ke])},[]),rt=[].concat(Be,[nt]).reduce(function(e,t){return e.concat([t,t+"-"+ve,t+"-"+ke])},[]),dr="beforeRead",mr="read",vr="afterRead",gr="beforeMain",hr="main",br="afterMain",yr="beforeWrite",wr="write",Or="afterWrite",Tr=[dr,mr,vr,gr,hr,br,yr,wr,Or];function X(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=K(e).Element;return e instanceof t||e instanceof Element}function W(e){var t=K(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ot(e){if(typeof ShadowRoot>"u")return!1;var t=K(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function xr(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!W(a)||!X(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(s){var u=o[s];u===!1?a.removeAttribute(s):a.setAttribute(s,u===!0?"":u)}))})}function Ar(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],a=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),u=s.reduce(function(l,i){return l[i]="",l},{});!W(o)||!X(o)||(Object.assign(o.style,u),Object.keys(a).forEach(function(l){o.removeAttribute(l)}))})}}var Xt={name:"applyStyles",enabled:!0,phase:"write",fn:xr,effect:Ar,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var ie=Math.max,We=Math.min,he=Math.round;function be(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(W(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=he(n.width)/s||1),a>0&&(o=he(n.height)/a||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function at(e){var t=be(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Yt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&ot(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function te(e){return K(e).getComputedStyle(e)}function Er(e){return["table","td","th"].indexOf(X(e))>=0}function oe(e){return((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return X(e)==="html"?e:e.assignedSlot||e.parentNode||(ot(e)?e.host:null)||oe(e)}function Rt(e){return!W(e)||te(e).position==="fixed"?null:e.offsetParent}function Sr(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&W(e)){var r=te(e);if(r.position==="fixed")return null}var o=qe(e);for(ot(o)&&(o=o.host);W(o)&&["html","body"].indexOf(X(o))<0;){var a=te(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ie(e){for(var t=K(e),n=Rt(e);n&&Er(n)&&te(n).position==="static";)n=Rt(n);return n&&(X(n)==="html"||X(n)==="body"&&te(n).position==="static")?t:n||Sr(e)||t}function st(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Re(e,t,n){return ie(e,We(t,n))}function Rr(e,t,n){var r=Re(e,t,n);return r>n?n:r}function Qt(){return{top:0,right:0,bottom:0,left:0}}function en(e){return Object.assign({},Qt(),e)}function tn(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Pr=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,en(typeof e!="number"?e:tn(e,Be))};function Cr(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,u=J(n.placement),l=st(u),i=[$,q].indexOf(u)>=0,f=i?"height":"width";if(!(!a||!s)){var d=Pr(o.padding,n),g=at(a),m=l==="y"?H:$,b=l==="y"?U:q,v=n.rects.reference[f]+n.rects.reference[l]-s[l]-n.rects.popper[f],x=s[l]-n.rects.reference[l],w=Ie(a),T=w?l==="y"?w.clientHeight||0:w.clientWidth||0:0,c=v/2-x/2,h=d[m],A=T-g[f]-d[b],R=T/2-g[f]/2+c,O=Re(h,R,A),E=l;n.modifiersData[r]=(t={},t[E]=O,t.centerOffset=O-R,t)}}function Mr(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!Yt(t.elements.popper,o)||(t.elements.arrow=o))}var kr={name:"arrow",enabled:!0,phase:"main",fn:Cr,effect:Mr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e){return e.split("-")[1]}var Dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Br(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:he(t*o)/o||0,y:he(n*o)/o||0}}function Pt(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,u=e.position,l=e.gpuAcceleration,i=e.adaptive,f=e.roundOffsets,d=e.isFixed,g=s.x,m=g===void 0?0:g,b=s.y,v=b===void 0?0:b,x=typeof f=="function"?f({x:m,y:v}):{x:m,y:v};m=x.x,v=x.y;var w=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),c=$,h=H,A=window;if(i){var R=Ie(n),O="clientHeight",E="clientWidth";if(R===K(n)&&(R=oe(n),te(R).position!=="static"&&u==="absolute"&&(O="scrollHeight",E="scrollWidth")),R=R,o===H||(o===$||o===q)&&a===ke){h=U;var P=d&&R===A&&A.visualViewport?A.visualViewport.height:R[O];v-=P-r.height,v*=l?1:-1}if(o===$||(o===H||o===U)&&a===ke){c=q;var D=d&&R===A&&A.visualViewport?A.visualViewport.width:R[E];m-=D-r.width,m*=l?1:-1}}var k=Object.assign({position:u},i&&Dr),C=f===!0?Br({x:m,y:v}):{x:m,y:v};if(m=C.x,v=C.y,l){var I;return Object.assign({},k,(I={},I[h]=T?"0":"",I[c]=w?"0":"",I.transform=(A.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",I))}return Object.assign({},k,(t={},t[h]=T?v+"px":"",t[c]=w?m+"px":"",t.transform="",t))}function Ir(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,a=n.adaptive,s=a===void 0?!0:a,u=n.roundOffsets,l=u===void 0?!0:u,i={placement:J(t.placement),variation:ye(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Pt(Object.assign({},i,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Pt(Object.assign({},i,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var nn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ir,data:{}},Le={passive:!0};function Fr(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,s=r.resize,u=s===void 0?!0:s,l=K(t.elements.popper),i=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&i.forEach(function(f){f.addEventListener("scroll",n.update,Le)}),u&&l.addEventListener("resize",n.update,Le),function(){a&&i.forEach(function(f){f.removeEventListener("scroll",n.update,Le)}),u&&l.removeEventListener("resize",n.update,Le)}}var rn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Fr,data:{}},Nr={left:"right",right:"left",bottom:"top",top:"bottom"};function ze(e){return e.replace(/left|right|bottom|top/g,function(t){return Nr[t]})}var _r={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return _r[t]})}function it(e){var t=K(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function lt(e){return be(oe(e)).left+it(e).scrollLeft}function jr(e){var t=K(e),n=oe(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,u=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,u=r.offsetTop)),{width:o,height:a,x:s+lt(e),y:u}}function Lr(e){var t,n=oe(e),r=it(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ie(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=ie(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-r.scrollLeft+lt(e),l=-r.scrollTop;return te(o||n).direction==="rtl"&&(u+=ie(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:u,y:l}}function ut(e){var t=te(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function on(e){return["html","body","#document"].indexOf(X(e))>=0?e.ownerDocument.body:W(e)&&ut(e)?e:on(qe(e))}function Pe(e,t){var n;t===void 0&&(t=[]);var r=on(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=K(r),s=o?[a].concat(a.visualViewport||[],ut(r)?r:[]):r,u=t.concat(s);return o?u:u.concat(Pe(qe(s)))}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function zr(e){var t=be(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Mt(e,t){return t===Jt?Xe(jr(e)):ge(t)?zr(t):Xe(Lr(oe(e)))}function Hr(e){var t=Pe(qe(e)),n=["absolute","fixed"].indexOf(te(e).position)>=0,r=n&&W(e)?Ie(e):e;return ge(r)?t.filter(function(o){return ge(o)&&Yt(o,r)&&X(o)!=="body"}):[]}function $r(e,t,n){var r=t==="clippingParents"?Hr(e):[].concat(t),o=[].concat(r,[n]),a=o[0],s=o.reduce(function(u,l){var i=Mt(e,l);return u.top=ie(i.top,u.top),u.right=We(i.right,u.right),u.bottom=We(i.bottom,u.bottom),u.left=ie(i.left,u.left),u},Mt(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function an(e){var t=e.reference,n=e.element,r=e.placement,o=r?J(r):null,a=r?ye(r):null,s=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,l;switch(o){case H:l={x:s,y:t.y-n.height};break;case U:l={x:s,y:t.y+t.height};break;case q:l={x:t.x+t.width,y:u};break;case $:l={x:t.x-n.width,y:u};break;default:l={x:t.x,y:t.y}}var i=o?st(o):null;if(i!=null){var f=i==="y"?"height":"width";switch(a){case ve:l[i]=l[i]-(t[f]/2-n[f]/2);break;case ke:l[i]=l[i]+(t[f]/2-n[f]/2);break}}return l}function De(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,a=n.boundary,s=a===void 0?pr:a,u=n.rootBoundary,l=u===void 0?Jt:u,i=n.elementContext,f=i===void 0?Ae:i,d=n.altBoundary,g=d===void 0?!1:d,m=n.padding,b=m===void 0?0:m,v=en(typeof b!="number"?b:tn(b,Be)),x=f===Ae?fr:Ae,w=e.rects.popper,T=e.elements[g?x:f],c=$r(ge(T)?T:T.contextElement||oe(e.elements.popper),s,l),h=be(e.elements.reference),A=an({reference:h,element:w,placement:o}),R=Xe(Object.assign({},w,A)),O=f===Ae?R:h,E={top:c.top-O.top+v.top,bottom:O.bottom-c.bottom+v.bottom,left:c.left-O.left+v.left,right:O.right-c.right+v.right},P=e.modifiersData.offset;if(f===Ae&&P){var D=P[o];Object.keys(E).forEach(function(k){var C=[q,U].indexOf(k)>=0?1:-1,I=[H,U].indexOf(k)>=0?"y":"x";E[k]+=D[I]*C})}return E}function Wr(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,l=n.allowedAutoPlacements,i=l===void 0?rt:l,f=ye(r),d=f?u?St:St.filter(function(b){return ye(b)===f}):Be,g=d.filter(function(b){return i.indexOf(b)>=0});g.length===0&&(g=d);var m=g.reduce(function(b,v){return b[v]=De(e,{placement:v,boundary:o,rootBoundary:a,padding:s})[J(v)],b},{});return Object.keys(m).sort(function(b,v){return m[b]-m[v]})}function Ur(e){if(J(e)===nt)return[];var t=ze(e);return[Ct(e),t,Ct(t)]}function qr(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,s=n.altAxis,u=s===void 0?!0:s,l=n.fallbackPlacements,i=n.padding,f=n.boundary,d=n.rootBoundary,g=n.altBoundary,m=n.flipVariations,b=m===void 0?!0:m,v=n.allowedAutoPlacements,x=t.options.placement,w=J(x),T=w===x,c=l||(T||!b?[ze(x)]:Ur(x)),h=[x].concat(c).reduce(function(ae,Y){return ae.concat(J(Y)===nt?Wr(t,{placement:Y,boundary:f,rootBoundary:d,padding:i,flipVariations:b,allowedAutoPlacements:v}):Y)},[]),A=t.rects.reference,R=t.rects.popper,O=new Map,E=!0,P=h[0],D=0;D<h.length;D++){var k=h[D],C=J(k),I=ye(k)===ve,_=[H,U].indexOf(C)>=0,V=_?"width":"height",B=De(t,{placement:k,boundary:f,rootBoundary:d,altBoundary:g,padding:i}),N=_?I?q:$:I?U:H;A[V]>R[V]&&(N=ze(N));var y=ze(N),F=[];if(a&&F.push(B[C]<=0),u&&F.push(B[N]<=0,B[y]<=0),F.every(function(ae){return ae})){P=k,E=!1;break}O.set(k,F)}if(E)for(var Z=b?3:1,Oe=function(ae){var Y=h.find(function(Ne){var xe=O.get(Ne);if(xe)return xe.slice(0,ae).every(function(pe){return pe})});if(Y)return P=Y,"break"},Te=Z;Te>0;Te--){var Fe=Oe(Te);if(Fe==="break")break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}}var Vr={name:"flip",enabled:!0,phase:"main",fn:qr,requiresIfExists:["offset"],data:{_skip:!1}};function kt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Dt(e){return[H,q,U,$].some(function(t){return e[t]>=0})}function Kr(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,s=De(t,{elementContext:"reference"}),u=De(t,{altBoundary:!0}),l=kt(s,r),i=kt(u,o,a),f=Dt(l),d=Dt(i);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:i,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var Zr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Kr};function Gr(e,t,n){var r=J(e),o=[$,H].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=a[0],u=a[1];return s=s||0,u=(u||0)*o,[$,q].indexOf(r)>=0?{x:u,y:s}:{x:s,y:u}}function Jr(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=o===void 0?[0,0]:o,s=rt.reduce(function(f,d){return f[d]=Gr(d,t.rects,a),f},{}),u=s[t.placement],l=u.x,i=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=i),t.modifiersData[r]=s}var Xr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Jr};function Yr(e){var t=e.state,n=e.name;t.modifiersData[n]=an({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}var sn={name:"popperOffsets",enabled:!0,phase:"read",fn:Yr,data:{}};function Qr(e){return e==="x"?"y":"x"}function eo(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=o===void 0?!0:o,s=n.altAxis,u=s===void 0?!1:s,l=n.boundary,i=n.rootBoundary,f=n.altBoundary,d=n.padding,g=n.tether,m=g===void 0?!0:g,b=n.tetherOffset,v=b===void 0?0:b,x=De(t,{boundary:l,rootBoundary:i,padding:d,altBoundary:f}),w=J(t.placement),T=ye(t.placement),c=!T,h=st(w),A=Qr(h),R=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,P=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,D=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(R){if(a){var I,_=h==="y"?H:$,V=h==="y"?U:q,B=h==="y"?"height":"width",N=R[h],y=N+x[_],F=N-x[V],Z=m?-E[B]/2:0,Oe=T===ve?O[B]:E[B],Te=T===ve?-E[B]:-O[B],Fe=t.elements.arrow,ae=m&&Fe?at(Fe):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Qt(),Ne=Y[_],xe=Y[V],pe=Re(0,O[B],ae[B]),mn=c?O[B]/2-Z-pe-Ne-D.mainAxis:Oe-pe-Ne-D.mainAxis,vn=c?-O[B]/2+Z+pe+xe+D.mainAxis:Te+pe+xe+D.mainAxis,Ve=t.elements.arrow&&Ie(t.elements.arrow),gn=Ve?h==="y"?Ve.clientTop||0:Ve.clientLeft||0:0,ft=(I=k?.[h])!=null?I:0,hn=N+mn-ft-gn,bn=N+vn-ft,dt=Re(m?We(y,hn):y,N,m?ie(F,bn):F);R[h]=dt,C[h]=dt-N}if(u){var mt,yn=h==="x"?H:$,wn=h==="x"?U:q,se=R[A],_e=A==="y"?"height":"width",vt=se+x[yn],gt=se-x[wn],Ke=[H,$].indexOf(w)!==-1,ht=(mt=k?.[A])!=null?mt:0,bt=Ke?vt:se-O[_e]-E[_e]-ht+D.altAxis,yt=Ke?se+O[_e]+E[_e]-ht-D.altAxis:gt,wt=m&&Ke?Rr(bt,se,yt):Re(m?bt:vt,se,m?yt:gt);R[A]=wt,C[A]=wt-se}t.modifiersData[r]=C}}var to={name:"preventOverflow",enabled:!0,phase:"main",fn:eo,requiresIfExists:["offset"]};function no(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function ro(e){return e===K(e)||!W(e)?it(e):no(e)}function oo(e){var t=e.getBoundingClientRect(),n=he(t.width)/e.offsetWidth||1,r=he(t.height)/e.offsetHeight||1;return n!==1||r!==1}function ao(e,t,n){n===void 0&&(n=!1);var r=W(t),o=W(t)&&oo(t),a=oe(t),s=be(e,o),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((X(t)!=="body"||ut(a))&&(u=ro(t)),W(t)?(l=be(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=lt(a))),{x:s.left+u.scrollLeft-l.x,y:s.top+u.scrollTop-l.y,width:s.width,height:s.height}}function so(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(u){if(!n.has(u)){var l=t.get(u);l&&o(l)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),r}function io(e){var t=so(e);return Tr.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function lo(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function uo(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function It(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function ct(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?Bt:o;return function(s,u,l){l===void 0&&(l=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},f=[],d=!1,g={state:i,setOptions:function(v){var x=typeof v=="function"?v(i.options):v;b(),i.options=Object.assign({},a,i.options,x),i.scrollParents={reference:ge(s)?Pe(s):s.contextElement?Pe(s.contextElement):[],popper:Pe(u)};var w=io(uo([].concat(r,i.options.modifiers)));return i.orderedModifiers=w.filter(function(T){return T.enabled}),m(),g.update()},forceUpdate:function(){if(!d){var v=i.elements,x=v.reference,w=v.popper;if(It(x,w)){i.rects={reference:ao(x,Ie(w),i.options.strategy==="fixed"),popper:at(w)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(E){return i.modifiersData[E.name]=Object.assign({},E.data)});for(var T=0;T<i.orderedModifiers.length;T++){if(i.reset===!0){i.reset=!1,T=-1;continue}var c=i.orderedModifiers[T],h=c.fn,A=c.options,R=A===void 0?{}:A,O=c.name;typeof h=="function"&&(i=h({state:i,options:R,name:O,instance:g})||i)}}}},update:lo(function(){return new Promise(function(v){g.forceUpdate(),v(i)})}),destroy:function(){b(),d=!0}};if(!It(s,u))return g;g.setOptions(l).then(function(v){!d&&l.onFirstUpdate&&l.onFirstUpdate(v)});function m(){i.orderedModifiers.forEach(function(v){var x=v.name,w=v.options,T=w===void 0?{}:w,c=v.effect;if(typeof c=="function"){var h=c({state:i,name:x,instance:g,options:T}),A=function(){};f.push(h||A)}})}function b(){f.forEach(function(v){return v()}),f=[]}return g}}ct();var co=[rn,sn,nn,Xt];ct({defaultModifiers:co});var po=[rn,sn,nn,Xt,Xr,Vr,to,kr,Zr],fo=ct({defaultModifiers:po});const ln=ne({arrowOffset:{type:Number,default:5}}),mo=["fixed","absolute"],vo=ne({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:M(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:rt,default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},strategy:{type:String,values:mo,default:"absolute"}}),un=ne({...vo,...ln,id:String,style:{type:M([String,Array,Object])},className:{type:M([String,Array,Object])},effect:{type:M(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:Boolean,trapping:Boolean,popperClass:{type:M([String,Array,Object])},popperStyle:{type:M([String,Array,Object])},referenceEl:{type:M(Object)},triggerTargetEl:{type:M(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Ut(["ariaLabel"]),loop:Boolean}),go={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},ho=(e,t)=>{const n=j(!1),r=j(),o=()=>{t("focus")},a=i=>{var f;((f=i.detail)==null?void 0:f.focusReason)!=="pointer"&&(r.value="first",t("blur"))},s=i=>{e.visible&&!n.value&&(i.target&&(r.value=i.target),n.value=!0)},u=i=>{e.trapping||(i.detail.focusReason==="pointer"&&i.preventDefault(),n.value=!1)},l=()=>{n.value=!1,t("close")};return re(()=>{r.value=void 0}),{focusStartRef:r,trapped:n,onFocusAfterReleased:a,onFocusAfterTrapped:o,onFocusInTrap:s,onFocusoutPrevented:u,onReleaseRequested:l}},bo=(e,t=[])=>{const{placement:n,strategy:r,popperOptions:o}=e,a={placement:n,strategy:r,...o,modifiers:[...wo(e),...t]};return Oo(a,o?.modifiers),a},yo=e=>{if(Se)return Wt(e)};function wo(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:0,bottom:0,left:0,right:0}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function Oo(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const To=(e,t,n={})=>{const r={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const i=xo(l);Object.assign(s.value,i)},requires:["computeStyles"]},o=S(()=>{const{onFirstUpdate:l,placement:i,strategy:f,modifiers:d}=p(n);return{onFirstUpdate:l,placement:i||"bottom",strategy:f||"absolute",modifiers:[...d||[],r,{name:"applyStyles",enabled:!1}]}}),a=Sn(),s=j({styles:{popper:{position:p(o).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return L(o,l=>{const i=p(a);i&&i.setOptions(l)},{deep:!0}),L([e,t],([l,i])=>{u(),!(!l||!i)&&(a.value=fo(l,i,p(o)))}),re(()=>{u()}),{state:S(()=>{var l;return{...((l=p(a))==null?void 0:l.state)||{}}}),styles:S(()=>p(s).styles),attributes:S(()=>p(s).attributes),update:()=>{var l;return(l=p(a))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=p(a))==null?void 0:l.forceUpdate()},instanceRef:S(()=>p(a))}};function xo(e){const t=Object.keys(e.elements),n=Tt(t.map(o=>[o,e.styles[o]||{}])),r=Tt(t.map(o=>[o,e.attributes[o]]));return{styles:n,attributes:r}}const Ao=0,Eo=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:r,role:o}=ue(tt,void 0),a=j(),s=S(()=>e.arrowOffset),u=S(()=>({name:"eventListeners",enabled:!!e.visible})),l=S(()=>{var w;const T=p(a),c=(w=p(s))!=null?w:Ao;return{name:"arrow",enabled:!Jn(T),options:{element:T,padding:c}}}),i=S(()=>({onFirstUpdate:()=>{b()},...bo(e,[p(l),p(u)])})),f=S(()=>yo(e.referenceEl)||p(r)),{attributes:d,state:g,styles:m,update:b,forceUpdate:v,instanceRef:x}=To(f,n,i);return L(x,w=>t.value=w,{flush:"sync"}),Ue(()=>{L(()=>{var w,T;return(T=(w=p(f))==null?void 0:w.getBoundingClientRect)==null?void 0:T.call(w)},()=>{b()})}),re(()=>{t.value=void 0}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:x,state:g,styles:m,role:o,forceUpdate:v,update:b}},So=(e,{attributes:t,styles:n,role:r})=>{const{nextZIndex:o}=Rn(),a=we("popper"),s=S(()=>p(t).popper),u=j(Je(e.zIndex)?e.zIndex:o()),l=S(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),i=S(()=>[{zIndex:p(u)},p(n).popper,e.popperStyle||{}]),f=S(()=>r.value==="dialog"?"false":void 0),d=S(()=>p(n).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:s,contentClass:l,contentStyle:i,contentZIndex:u,updateZIndex:()=>{u.value=Je(e.zIndex)?e.zIndex:o()}}},Ro=z({name:"ElPopperContent"}),Po=z({...Ro,props:un,emits:go,setup(e,{expose:t,emit:n}){const r=e,{focusStartRef:o,trapped:a,onFocusAfterReleased:s,onFocusAfterTrapped:u,onFocusInTrap:l,onFocusoutPrevented:i,onReleaseRequested:f}=ho(r,n),{attributes:d,arrowRef:g,contentRef:m,styles:b,instanceRef:v,role:x,update:w}=Eo(r),{ariaModal:T,arrowStyle:c,contentAttrs:h,contentClass:A,contentStyle:R,updateZIndex:O}=So(r,{styles:b,attributes:d,role:x}),E=ue(At,void 0);Ce(qt,{arrowStyle:c,arrowRef:g}),E&&Ce(At,{...E,addInputId:Ge,removeInputId:Ge});let P;const D=(C=!0)=>{w(),C&&O()},k=()=>{D(!1),r.visible&&r.focusOnShow?a.value=!0:r.visible===!1&&(a.value=!1)};return Ue(()=>{L(()=>r.triggerTargetEl,(C,I)=>{P?.(),P=void 0;const _=p(C||m.value),V=p(I||m.value);de(_)&&(P=L([x,()=>r.ariaLabel,T,()=>r.id],B=>{["role","aria-label","aria-modal","id"].forEach((N,y)=>{jt(B[y])?_.removeAttribute(N):_.setAttribute(N,B[y])})},{immediate:!0})),V!==_&&de(V)&&["role","aria-label","aria-modal","id"].forEach(B=>{V.removeAttribute(B)})},{immediate:!0}),L(()=>r.visible,k,{immediate:!0})}),re(()=>{P?.(),P=void 0,m.value=void 0}),t({popperContentRef:m,popperInstanceRef:v,updatePopper:D,contentStyle:R}),(C,I)=>(G(),He("div",Qe({ref_key:"contentRef",ref:m},p(h),{style:p(R),class:p(A),tabindex:"-1",onMouseenter:_=>C.$emit("mouseenter",_),onMouseleave:_=>C.$emit("mouseleave",_)}),[Me(p(Wn),{loop:C.loop,trapped:p(a),"trap-on-focus-in":!0,"focus-trap-el":p(m),"focus-start-el":p(o),onFocusAfterTrapped:p(u),onFocusAfterReleased:p(s),onFocusin:p(l),onFocusoutPrevented:p(i),onReleaseRequested:p(f)},{default:ee(()=>[le(C.$slots,"default")]),_:3},8,["loop","trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}});var Co=ce(Po,[["__file","content.vue"]]);const Mo=Lt(er),pt=Symbol("elTooltip");function Ft(){let e;const t=(r,o)=>{n(),e=window.setTimeout(r,o)},n=()=>window.clearTimeout(e);return Pn(()=>n()),{registerTimeout:t,cancelTimeout:n}}const ko=ne({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Do=({showAfter:e,hideAfter:t,autoClose:n,open:r,close:o})=>{const{registerTimeout:a}=Ft(),{registerTimeout:s,cancelTimeout:u}=Ft();return{onOpen:(f,d=p(e))=>{a(()=>{r(f);const g=p(n);Je(g)&&g>0&&s(()=>{o(f)},g)},d)},onClose:(f,d=p(t))=>{u(),a(()=>{o(f)},d)}}},cn=ne({...ko,...un,appendTo:{type:Un.to.type},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:M(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Ut(["ariaLabel"])}),pn=ne({...Kt,disabled:Boolean,trigger:{type:M([String,Array]),default:"hover"},triggerKeys:{type:M(Array),default:()=>[Ze.enter,Ze.numpadEnter,Ze.space]},focusOnTarget:Boolean}),Bo=zt({type:M(Boolean),default:null}),Io=zt({type:M(Function)}),Fo=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,r=[t],o={[e]:Bo,[n]:Io};return{useModelToggle:({indicator:s,toggleReason:u,shouldHideWhenRouteChanges:l,shouldProceed:i,onShow:f,onHide:d})=>{const g=Cn(),{emit:m}=g,b=g.props,v=S(()=>je(b[n])),x=S(()=>b[e]===null),w=O=>{s.value!==!0&&(s.value=!0,u&&(u.value=O),je(f)&&f(O))},T=O=>{s.value!==!1&&(s.value=!1,u&&(u.value=O),je(d)&&d(O))},c=O=>{if(b.disabled===!0||je(i)&&!i())return;const E=v.value&&Se;E&&m(t,!0),(x.value||!E)&&w(O)},h=O=>{if(b.disabled===!0||!Se)return;const E=v.value&&Se;E&&m(t,!1),(x.value||!E)&&T(O)},A=O=>{Ht(O)&&(b.disabled&&O?v.value&&m(t,!1):s.value!==O&&(O?w():T()))},R=()=>{s.value?h():c()};return L(()=>b[e],A),l&&g.appContext.config.globalProperties.$route!==void 0&&L(()=>({...g.proxy.$route}),()=>{l.value&&s.value&&h()}),Ue(()=>{A(b[e])}),{hide:h,show:c,toggle:R,hasUpdateHandler:v}},useModelToggleProps:o,useModelToggleEmits:r}},{useModelToggleProps:No,useModelToggleEmits:_o,useModelToggle:jo}=Fo("visible"),Lo=ne({...Vt,...No,...cn,...pn,...ln,showArrow:{type:Boolean,default:!0}}),zo=[..._o,"before-show","before-hide","show","hide","open","close"],Ye=(e,t)=>et(e)?e.includes(t):e===t,fe=(e,t,n)=>r=>{Ye(p(e),t)&&n(r)},Ho=z({name:"ElTooltipTrigger"}),$o=z({...Ho,props:pn,setup(e,{expose:t}){const n=e,r=we("tooltip"),{controlled:o,id:a,open:s,onOpen:u,onClose:l,onToggle:i}=ue(pt,void 0),f=j(null),d=()=>{if(p(o)||n.disabled)return!0},g=Ee(n,"trigger"),m=Q(d,fe(g,"hover",h=>{u(h),n.focusOnTarget&&h.target&&Mn(()=>{$t(h.target,{preventScroll:!0})})})),b=Q(d,fe(g,"hover",l)),v=Q(d,fe(g,"click",h=>{h.button===0&&i(h)})),x=Q(d,fe(g,"focus",u)),w=Q(d,fe(g,"focus",l)),T=Q(d,fe(g,"contextmenu",h=>{h.preventDefault(),i(h)})),c=Q(d,h=>{const A=Vn(h);n.triggerKeys.includes(A)&&(h.preventDefault(),i(h))});return t({triggerRef:f}),(h,A)=>(G(),me(p(cr),{id:p(a),"virtual-ref":h.virtualRef,open:p(s),"virtual-triggering":h.virtualTriggering,class:Nt(p(r).e("trigger")),onBlur:p(w),onClick:p(v),onContextmenu:p(T),onFocus:p(x),onMouseenter:p(m),onMouseleave:p(b),onKeydown:p(c)},{default:ee(()=>[le(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Wo=ce($o,[["__file","trigger.vue"]]);const fn=()=>{const e=Dn(),t=zn(),n=S(()=>`${e.value}-popper-container-${t.prefix}`),r=S(()=>`#${n.value}`);return{id:n,selector:r}},Uo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},qo=()=>{const{id:e,selector:t}=fn();return kn(()=>{Se&&(document.body.querySelector(t.value)||Uo(e.value))}),{id:e,selector:t}},va=e=>et(e)?e[0]:e,Vo=e=>!e&&e!==0?[]:et(e)?e:[e],Ko=z({name:"ElTooltipContent",inheritAttrs:!1}),Zo=z({...Ko,props:cn,setup(e,{expose:t}){const n=e,{selector:r}=fn(),o=we("tooltip"),a=j(),s=Bn(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef});let u;const{controlled:l,id:i,open:f,trigger:d,onClose:g,onOpen:m,onShow:b,onHide:v,onBeforeShow:x,onBeforeHide:w}=ue(pt,void 0),T=S(()=>n.transition||`${o.namespace.value}-fade-in-linear`),c=S(()=>n.persistent);re(()=>{u?.()});const h=S(()=>p(c)?!0:p(f)),A=S(()=>n.disabled?!1:p(f)),R=S(()=>n.appendTo||r.value),O=S(()=>{var y;return(y=n.style)!=null?y:{}}),E=j(!0),P=()=>{v(),N()&&$t(document.body,{preventScroll:!0}),E.value=!0},D=()=>{if(p(l))return!0},k=Q(D,()=>{n.enterable&&Ye(p(d),"hover")&&m()}),C=Q(D,()=>{Ye(p(d),"hover")&&g()}),I=()=>{var y,F;(F=(y=a.value)==null?void 0:y.updatePopper)==null||F.call(y),x?.()},_=()=>{w?.()},V=()=>{b()},B=()=>{n.virtualTriggering||g()},N=y=>{var F;const Z=(F=a.value)==null?void 0:F.popperContentRef,Oe=y?.relatedTarget||document.activeElement;return Z?.contains(Oe)};return L(()=>p(f),y=>{y?(E.value=!1,u=$n(s,()=>{if(p(l))return;Vo(p(d)).every(Z=>Z!=="hover"&&Z!=="focus")&&g()},{detectIframe:!0})):u?.()},{flush:"post"}),L(()=>n.content,()=>{var y,F;(F=(y=a.value)==null?void 0:y.updatePopper)==null||F.call(y)}),t({contentRef:a,isFocusInsideContent:N}),(y,F)=>(G(),me(p(qn),{disabled:!y.teleported,to:p(R)},{default:ee(()=>[p(h)||!E.value?(G(),me(In,{key:0,name:p(T),appear:!p(c),onAfterLeave:P,onBeforeEnter:I,onAfterEnter:V,onBeforeLeave:_,persisted:""},{default:ee(()=>[_t(Me(p(Co),Qe({id:p(i),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":E.value,"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,"arrow-offset":y.arrowOffset,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,p(O)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:p(A),"z-index":y.zIndex,loop:y.loop,onMouseenter:p(k),onMouseleave:p(C),onBlur:B,onClose:p(g)}),{default:ee(()=>[le(y.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","arrow-offset","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","loop","onMouseenter","onMouseleave","onClose"]),[[Fn,p(A)]])]),_:3},8,["name","appear"])):$e("v-if",!0)]),_:3},8,["disabled","to"]))}});var Go=ce(Zo,[["__file","content.vue"]]);const Jo=z({name:"ElTooltip"}),Xo=z({...Jo,props:Lo,emits:zo,setup(e,{expose:t,emit:n}){const r=e;qo();const o=we("tooltip"),a=Hn(),s=j(),u=j(),l=()=>{var c;const h=p(s);h&&((c=h.popperInstanceRef)==null||c.update())},i=j(!1),f=j(),{show:d,hide:g,hasUpdateHandler:m}=jo({indicator:i,toggleReason:f}),{onOpen:b,onClose:v}=Do({showAfter:Ee(r,"showAfter"),hideAfter:Ee(r,"hideAfter"),autoClose:Ee(r,"autoClose"),open:d,close:g}),x=S(()=>Ht(r.visible)&&!m.value),w=S(()=>[o.b(),r.popperClass]);Ce(pt,{controlled:x,id:a,open:Nn(i),trigger:Ee(r,"trigger"),onOpen:b,onClose:v,onToggle:c=>{p(i)?v(c):b(c)},onShow:()=>{n("show",f.value)},onHide:()=>{n("hide",f.value)},onBeforeShow:()=>{n("before-show",f.value)},onBeforeHide:()=>{n("before-hide",f.value)},updatePopper:l}),L(()=>r.disabled,c=>{c&&i.value&&(i.value=!1)});const T=c=>{var h;return(h=u.value)==null?void 0:h.isFocusInsideContent(c)};return _n(()=>i.value&&g()),re(()=>{f.value=void 0}),t({popperRef:s,contentRef:u,isFocusInsideContent:T,updatePopper:l,onOpen:b,onClose:v,hide:g}),(c,h)=>(G(),me(p(Mo),{ref_key:"popperRef",ref:s,role:c.role},{default:ee(()=>[Me(Wo,{disabled:c.disabled,trigger:c.trigger,"trigger-keys":c.triggerKeys,"virtual-ref":c.virtualRef,"virtual-triggering":c.virtualTriggering,"focus-on-target":c.focusOnTarget},{default:ee(()=>[c.$slots.default?le(c.$slots,"default",{key:0}):$e("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering","focus-on-target"]),Me(Go,{ref_key:"contentRef",ref:u,"aria-label":c.ariaLabel,"boundaries-padding":c.boundariesPadding,content:c.content,disabled:c.disabled,effect:c.effect,enterable:c.enterable,"fallback-placements":c.fallbackPlacements,"hide-after":c.hideAfter,"gpu-acceleration":c.gpuAcceleration,offset:c.offset,persistent:c.persistent,"popper-class":p(w),"popper-style":c.popperStyle,placement:c.placement,"popper-options":c.popperOptions,"arrow-offset":c.arrowOffset,pure:c.pure,"raw-content":c.rawContent,"reference-el":c.referenceEl,"trigger-target-el":c.triggerTargetEl,"show-after":c.showAfter,strategy:c.strategy,teleported:c.teleported,transition:c.transition,"virtual-triggering":c.virtualTriggering,"z-index":c.zIndex,"append-to":c.appendTo,loop:c.loop},{default:ee(()=>[le(c.$slots,"content",{},()=>[c.rawContent?(G(),He("span",{key:0,innerHTML:c.content},null,8,["innerHTML"])):(G(),He("span",{key:1},jn(c.content),1))]),c.showArrow?(G(),me(p(rr),{key:0})):$e("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","arrow-offset","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to","loop"])]),_:3},8,["role"]))}});var Yo=ce(Xo,[["__file","tooltip.vue"]]);const ga=Lt(Yo),Qo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='darkorange'%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M9.75%2010c0-.69.56-1.25%201.25-1.25h2.25a1%201%200%200%201%201%201V10a.75.75%200%200%200%201.5%200v-.25a2.5%202.5%200%200%200-2.5-2.5H11A2.75%202.75%200%200%200%208.25%2010v4A2.75%202.75%200%200%200%2011%2016.75h2.25a2.5%202.5%200%200%200%202.5-2.5V14a.75.75%200%200%200-1.5%200v.25a1%201%200%200%201-1%201H11c-.69%200-1.25-.56-1.25-1.25z'%20stroke-width='1'%20stroke='%23fff'/%3e%3c/svg%3e",ea="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='pink'%20stroke-width='1'%20stroke='%23fff'%3e%3cpath%20d='M13.25%2011.25H10.5v-2.5h2.75a.75.75%200%200%201%20.75.75v1a.75.75%200%200%201-.75.75'/%3e%3cpath%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M10.25%207.25C9.56%207.25%209%207.81%209%208.5V16a.75.75%200%200%200%201.5%200v-3.25h.625l2.775%203.7a.75.75%200%201%200%201.2-.9l-2.1-2.8h.25a2.25%202.25%200%200%200%202.25-2.25v-1a2.25%202.25%200%200%200-2.25-2.25z'/%3e%3c/g%3e%3c/svg%3e",ta="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='purple'%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M9.75%208a.75.75%200%200%200-1.5%200v6A2.75%202.75%200%200%200%2011%2016.75h2A2.75%202.75%200%200%200%2015.75%2014V8a.75.75%200%200%200-1.5%200v6c0%20.69-.56%201.25-1.25%201.25h-2c-.69%200-1.25-.56-1.25-1.25z'%20stroke-width='1'%20stroke='%23fff'/%3e%3c/svg%3e",na="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='lightblue'%20stroke-width='1'%20stroke='%23fff'%3e%3cpath%20d='M10.25%2015.25v-6.5H12a2.75%202.75%200%200%201%202.75%202.75v1A2.75%202.75%200%200%201%2012%2015.25z'/%3e%3cpath%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M10%207.25c-.69%200-1.25.56-1.25%201.25v7c0%20.69.56%201.25%201.25%201.25h2a4.25%204.25%200%200%200%204.25-4.25v-1A4.25%204.25%200%200%200%2012%207.25z'/%3e%3c/g%3e%3c/svg%3e",ra=`# Read 关于查询

几乎所有的项目都会用到的标准化分页处理，这时候一定需要用到这样一个钩子

## usePagerApi 使用
+ 当我们需要接入一个分页的 \`api\` 时，分页的业务一般是标准化的
+ 这时候我们希望使用钩子把*将会用到的方法和参数*定义好
\`\`\`JS
const { loading, list, pageNo, pageSize, total,
  queryWithParams,refresh } = usePageApi(orderApi.getOrderPage)
\`\`\`
+ 并且可以直接在模板上使用
\`\`\`Html
<el-pagination class="pager" v-model:current-page="pageNo" v-model:page-size="pageSize"
  :page-sizes="[20, 50, 100, 200]" :background="true" layout="total, sizes, prev, pager, next, jumper"
  :total="total" />
\`\`\`

## 最终所实现的功能
+ 快速定义需要的变量和方法
+ 响应式的 loading、pageNo、pageSize等
+ 在 pageNo、pageSize 变化时执行查询
+ 暴露两个方法
  \`\`\`ts
  queryWithParams(params:any):Promise // 带参数触发查询
  refresh():Promise // 使用上次参数触发查询
  \`\`\`
> 为什么这么做？因为业务角度上说，查询条件的表单需要点击查询之后才算生效，因此查询条件并不是总等与查询条件表单当前的值，
  钩子内部使用 \`paramsTemp\` 缓存起来了，这使得查询业务更符合直觉
  `,oa=`import { reactive, ref, watch } from "vue";
import type { AxiosRequestConfig } from "axios";

export function usePageApi(api: (data: any, config?: AxiosRequestConfig) => Promise<any>) {
  // 传入一个封装好的api, 这个不同业务通常有标准的返回格式
  const pageNo = ref(1);
  const pageSize = ref(20);
  const total = ref(0);
  const list = reactive<any>([]); // 分页接口的返回一定是一个数组
  const loading = ref(false);
  let paramsTemp:any = {}; // 点击查询时设置查询条件，分页切换时不改动

  const executeApi = () => {
    loading.value = true;
    // 这里当然还可以定制插如 AxiosRequestOption相关的功能
    return api(paramsTemp).then((result: any) => {
      // 格式化地处理数组
      list.splice(0, Infinity, ...(result?.data.list || []));
      total.value = result.data.total;
      return result;
    }).catch(() => {
      // 也可以在这处理失败，但是通常由api二封时就统一处理
    }).finally(() => {
      loading.value = false;
    })
  }

  const queryWithParams = (params: Record<string, any>) => {
    const data = {
      ...params,
      pageNo: 1, // 查询的时候默认查询第一页
      pageSize: pageSize.value
    };
    paramsTemp = data;
    if (pageNo.value === 1) {
      executeApi();
    } else {
      pageNo.value = 1;
    }
  }

  // pageNo和pageSize发生切换时，应该重新查询
  watch([pageNo], () => {
    paramsTemp.pageNo = pageNo.value;
    executeApi();
  })
  watch([pageSize], () => {
    paramsTemp.pageSize = pageSize.value;
    if (pageNo.value === 1) {
      executeApi();
    } else {
      pageNo.value = 1;
    }
  })


  return { pageNo, pageSize, list, loading,total, queryWithParams, refresh:executeApi };
}`,aa=`import type { AxiosResponse } from "axios";
import orderApi from "../../../apis/order.api";
import { Matcher, type trans } from "./Matcher";

export const ORDER_STATUS: trans[] = [
  { label: "已下单", value: 0 },
  { label: "已付款", value: 1 },
  { label: "已发货", value: 2 },
  { label: "已完成", value: 3 },
];
type OrderStatus = typeof ORDER_STATUS[number]['value'];

// 定义构造函数参数类型
export interface OrderParams {
  id?: string;
  userName: string;
  orderDate: Date | string;  // 支持Date对象或ISO格式字符串
  orderStatus: OrderStatus;
  desc?: string,
}

export class Order {
  public readonly id?: string;
  public userName: string;
  public orderDate: Date;
  public orderStatus: OrderStatus;
  public static statusMatcher = new Matcher(ORDER_STATUS);
  public orderStatusText: string;
  public orderDateText: string;
  public desc?: string;
  constructor(params: OrderParams) {
    this.id = params.id;
    this.userName = params.userName;
    // 处理日期输入（支持Date对象或字符串）
    this.orderDate = typeof params.orderDate === 'string'
      ? new Date(params.orderDate)
      : params.orderDate;
    this.orderDateText = \`\${this.orderDate.toLocaleDateString()} \${this.orderDate.toLocaleTimeString()}\`;
    this.orderStatus = params.orderStatus;
    this.orderStatusText = Order.statusMatcher.match(this.orderStatus);
    this.desc = params.desc;
  }
  public static saveOrder(params: OrderParams): Promise<AxiosResponse> {
    if (params.id) {
      return orderApi.updateOrder(params).then((result: AxiosResponse) => {
        // 这应该会执行一些model层级的封装
        return result;
      })
    }
    return orderApi.addOrder(params).then((result: AxiosResponse) => {
      // 这应该会执行一些model层级的封装
      return result;
    })
  }
  public static getOrderById(id: string): Promise<Order> {
    return orderApi.getOrderById({ id }).then((result: AxiosResponse) => {
      return new Order(result.data);
    })
  }
  public delSelf(): Promise<AxiosResponse> {
    return orderApi.deleteOrder({ id: this.id })
  }
}`,sa=`<template>
  <el-dialog :title="title" width="500px" v-model="visible" @opened="afterOpen">
    <div class="form-wrap" v-loading="loading">
      <el-form class="form-01" :model="formState" ref="formRef" :rules="rules" label-width="80px">
        <el-form-item label="订单id" prop="id" v-if="props.orderId">
          <el-input v-model="formState.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="formState.userName"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="formState.orderStatus" filterable>
            <el-option v-for="item in ORDER_STATUS" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单备注" prop="desc">
          <el-input v-model="formState.desc" placeholder="后台补录订单" type="textarea"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button @click="close">关闭</el-button>
      <el-button type="primary" @click="onSubmit">Mock创建</el-button>
    </template>
  </el-dialog>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useReactiveForm } from '../../../hooks/useForm';
import { Order, ORDER_STATUS, type OrderParams } from './OrderClass';
import type { AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';


const visible = defineModel<boolean>('visible');
const props = defineProps<{ orderId?: string }>();
const emits = defineEmits(['finish'])

const title = computed(() => {
  return props.orderId ? '编辑订单' : '新增订单'
})

const close = () => {
  visible.value = false;
}

const { formState, setForm, resetForm } = useReactiveForm({
  id: '',
  userName: '',
  orderStatus: 0,
  desc: ''
})
const rules = {
  desc: [{
    required: true,
    message: "手工录入的订单必须写备注"
  }],
  userName: [{
    required: true,
    message: '用户名不能为空'
  }],
};

const formRef = ref();
const loading = ref<boolean>(false);
const onSubmit = () => {
  loading.value = true;
  formRef.value.validate().then(() => {
    Order.saveOrder(formState as OrderParams).then((result: AxiosResponse) => {
      // 假如需要其他逻辑
      if (result.data.message === '成功') {
        visible.value = false;
        ElMessage({ type: 'success', message: '保存成功，事件刷新数据，但不返回第一页（也许）' })
        emits('finish')
      }
    }).finally(() => {
      loading.value = false;
    })
  }).catch(() => {
    loading.value = false;
  })
}
// 打开的时候要检查是新增还是编辑
let currentOrder: Order | null = null;
const afterOpen = () => {
  if (!props.orderId) {
    resetForm();
    setTimeout(formRef.value.clearValidate, 0);
    return;
  }
  // 获取编辑用的order对象
  loading.value = true;
  Order.getOrderById(props.orderId).then((result: Order) => {
    currentOrder = result
    setForm(currentOrder)
  }).finally(() => {
    loading.value = false;
    setTimeout(formRef.value.clearValidate, 0);
  })
}
<\/script>

<style scoped lang="scss">
@use '../../../assets/scss/el_p_cmp.scss' as *;

.form-wrap {
  border: 1px solid #f0f0f0;
}
</style>`,ia=`# 补充
+ 这里的层次说明，是希望体现业务对象 \`Order\` 类对接口和实际组件的承上启下作用
+ \`Order\` 获取详情、新增、删除等，均从同一个层次出发，无论写不写成类
+ 如果我们能把经典业务逻辑把控在\`model层\`, 则单文件组件的逻辑将自然顺畅
\`\`\`ts
export class Order {
  // 成员字段
  public readonly id?: string;
  public userName: string;
  public orderDate: Date;
  public orderStatus: OrderStatus;
  public orderStatusText: string;
  public orderDateText: string;
  public desc?: string;
  // 函数
  public static saveOrder(params: OrderParams): Promise<AxiosResponse>{};
  public updateOrder(params: OrderParams): Promise<Order>{};
  public getDetailById(id: string): Promise<Order>{};
  public deleteSelf(): Promise<AxiosResponse>{};
}
\`\`\``;class dn{static state=Ln([{activeUrl:Qo,isActive:!1,id:"useFormHook",activeLabel:"增Create：表单hook",fileList:[{name:"源文件useForm.ts",content:Kn}]},{activeUrl:ea,isActive:!1,id:"usePageApiHook",activeLabel:"查Read：分页hook",fileList:[{name:"分页介绍",content:ra,lang:"md"},{name:"源文件usePageApi.ts",content:oa}]},{activeUrl:ta,isActive:!1,id:"update-id",activeLabel:"更新Update：基本跟新增一样，来看看层次结构吧",fileList:[{name:"说明",content:ia,lang:"md"},{name:"接口层：二封Axios",content:Zn},{name:"接口层：api模块定义",content:Gn},{name:"model层：业务类的编写",content:aa},{name:"viewModel层组件",content:sa}]},{activeUrl:na,isActive:!1,id:"delete-id",activeLabel:"删Delete：这里暂时没想到写什么"}]);static setMissionFlag(t,n){const r=dn.state.find(o=>o.id===t);r&&(r.isActive=n)}}export{dn as C,ga as E,rt as a,Vo as c,va as e,cn as u};
