import{Y as te,d as ne,r as j,c as S,e as le,a6 as Ce,$ as we,Z as ue,a0 as re,a as He,o as Z,n as On,j as Nt,u as d,a4 as M,ap as Ge,w as jt,b0 as xn,aM as Ot,ab as Tn,F as An,b1 as En,p as ke,s as Ue,a5 as _,ai as de,k as me,l as We,m as Q,am as Qe,aE as Lt,X as Se,ay as Sn,b2 as xt,b3 as Rn,a3 as Je,ac as _t,b4 as Pn,b5 as zt,av as Cn,au as Le,aO as Ht,ad as et,a1 as Ee,a8 as kn,aS as Mn,b6 as Dn,b7 as Bn,T as In,v as Fn,b8 as Nn,b9 as jn,t as Ln,g as _n}from"./en_index.B5risS0d.js";import{_ as pe,x as Tt,y as Wt,z as zn,u as Hn}from"./ck_aria.BgMuClA1.js";import{e as $t,a as Ut,j as At,d as Wn}from"./ck_constants.CDyD9W8y.js";import{b as $n,t as Un,e as qn}from"./ck_el-overlay.TTj1_U2a.js";import{E as Ze,c as Y,g as Vn}from"./ck_event.C2pC33aB.js";import{u as Kn}from"./ck_useForm.DSbdktPA.js";import{r as Zn,c as Gn}from"./ck_client.api.DUxc9zuG.js";function Jn(e){return e===void 0}const tt=Symbol("popper"),qt=Symbol("popperContent"),Xn=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Vt=te({role:{type:String,values:Xn,default:"tooltip"}}),Yn=ne({name:"ElPopper",inheritAttrs:!1,__name:"popper",props:Vt,setup(e,{expose:t}){const n=e,r=j(),o=j(),a=j(),s=j(),u=S(()=>n.role),i={triggerRef:r,popperInstanceRef:o,contentRef:a,referenceRef:s,role:u};return t(i),Ce(tt,i),(l,c)=>le(l.$slots,"default")}});var Qn=pe(Yn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const er=ne({name:"ElPopperArrow",inheritAttrs:!1,__name:"arrow",setup(e,{expose:t}){const n=we("popper"),{arrowRef:r,arrowStyle:o}=ue(qt,void 0);return re(()=>{r.value=void 0}),t({arrowRef:r}),(a,s)=>(Z(),He("span",{ref_key:"arrowRef",ref:r,class:Nt(d(n).e("arrow")),style:On(d(o)),"data-popper-arrow":""},null,6))}});var tr=pe(er,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const Kt=te({virtualRef:{type:M(Object)},virtualTriggering:Boolean,onMouseenter:{type:M(Function)},onMouseleave:{type:M(Function)},onClick:{type:M(Function)},onKeydown:{type:M(Function)},onFocus:{type:M(Function)},onBlur:{type:M(Function)},onContextmenu:{type:M(Function)},id:String,open:Boolean}),Zt=Symbol("elForwardRef"),nr=e=>{Ce(Zt,{setForwardRef:n=>{e.value=n}})},rr=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),or="ElOnlyChild",ar=ne({name:or,setup(e,{slots:t,attrs:n}){var r;const o=ue(Zt),a=rr((r=o?.setForwardRef)!=null?r:Ge);return()=>{var s;const u=(s=t.default)==null?void 0:s.call(t,n);if(!u)return null;const[i,l]=Gt(u);return i?jt(xn(i,n),[[a]]):null}}});function Gt(e){if(!e)return[null,0];const t=e,n=t.filter(r=>r.type!==Ot).length;for(const r of t){if(Tn(r))switch(r.type){case Ot:continue;case En:case"svg":return[Et(r),n];case An:return Gt(r.children);default:return[r,n]}return[Et(r),n]}return[null,0]}function Et(e){const t=we("only-child");return ke("span",{class:t.e("content")},[e])}const sr=ne({name:"ElPopperTrigger",inheritAttrs:!1,__name:"trigger",props:Kt,setup(e,{expose:t}){const n=e,{role:r,triggerRef:o}=ue(tt,void 0);nr(o);const a=S(()=>u.value?n.id:void 0),s=S(()=>{if(r&&r.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=S(()=>{if(r&&r.value!=="tooltip")return r.value}),i=S(()=>u.value?`${n.open}`:void 0);let l;const c=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return Ue(()=>{_(()=>n.virtualRef,f=>{f&&(o.value=$t(f))},{immediate:!0}),_(o,(f,g)=>{l?.(),l=void 0,de(g)&&c.forEach(v=>{const h=n[v];h&&g.removeEventListener(v.slice(2).toLowerCase(),h,["onFocus","onBlur"].includes(v))}),de(f)&&(c.forEach(v=>{const h=n[v];h&&f.addEventListener(v.slice(2).toLowerCase(),h,["onFocus","onBlur"].includes(v))}),Tt(f)&&(l=_([a,s,u,i],v=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((h,m)=>{Lt(v[m])?f.removeAttribute(h):f.setAttribute(h,v[m])})},{immediate:!0}))),de(g)&&Tt(g)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(v=>g.removeAttribute(v))},{immediate:!0})}),re(()=>{if(l?.(),l=void 0,o.value&&de(o.value)){const f=o.value;c.forEach(g=>{const v=n[g];v&&f.removeEventListener(g.slice(2).toLowerCase(),v,["onFocus","onBlur"].includes(g))}),o.value=void 0}}),t({triggerRef:o}),(f,g)=>f.virtualTriggering?We("v-if",!0):(Z(),me(d(ar),Qe({key:0},f.$attrs,{"aria-controls":a.value,"aria-describedby":s.value,"aria-expanded":i.value,"aria-haspopup":u.value}),{default:Q(()=>[le(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var ir=pe(sr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),H="top",U="bottom",q="right",W="left",nt="auto",Be=[H,U,q,W],ve="start",Me="end",lr="clippingParents",Jt="viewport",Ae="popper",ur="reference",St=Be.reduce(function(e,t){return e.concat([t+"-"+ve,t+"-"+Me])},[]),rt=[].concat(Be,[nt]).reduce(function(e,t){return e.concat([t,t+"-"+ve,t+"-"+Me])},[]),pr="beforeRead",cr="read",fr="afterRead",dr="beforeMain",mr="main",vr="afterMain",gr="beforeWrite",hr="write",br="afterWrite",yr=[pr,cr,fr,dr,mr,vr,gr,hr,br];function J(e){return e?(e.nodeName||"").toLowerCase():null}function V(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=V(e).Element;return e instanceof t||e instanceof Element}function $(e){var t=V(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ot(e){if(typeof ShadowRoot>"u")return!1;var t=V(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function wr(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!$(a)||!J(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(s){var u=o[s];u===!1?a.removeAttribute(s):a.setAttribute(s,u===!0?"":u)}))})}function Or(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],a=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),u=s.reduce(function(i,l){return i[l]="",i},{});!$(o)||!J(o)||(Object.assign(o.style,u),Object.keys(a).forEach(function(i){o.removeAttribute(i)}))})}}var Xt={name:"applyStyles",enabled:!0,phase:"write",fn:wr,effect:Or,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var ie=Math.max,$e=Math.min,he=Math.round;function be(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if($(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=he(n.width)/s||1),a>0&&(o=he(n.height)/a||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function at(e){var t=be(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Yt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&ot(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ee(e){return V(e).getComputedStyle(e)}function xr(e){return["table","td","th"].indexOf(J(e))>=0}function oe(e){return((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return J(e)==="html"?e:e.assignedSlot||e.parentNode||(ot(e)?e.host:null)||oe(e)}function Rt(e){return!$(e)||ee(e).position==="fixed"?null:e.offsetParent}function Tr(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&$(e)){var r=ee(e);if(r.position==="fixed")return null}var o=qe(e);for(ot(o)&&(o=o.host);$(o)&&["html","body"].indexOf(J(o))<0;){var a=ee(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ie(e){for(var t=V(e),n=Rt(e);n&&xr(n)&&ee(n).position==="static";)n=Rt(n);return n&&(J(n)==="html"||J(n)==="body"&&ee(n).position==="static")?t:n||Tr(e)||t}function st(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Re(e,t,n){return ie(e,$e(t,n))}function Ar(e,t,n){var r=Re(e,t,n);return r>n?n:r}function Qt(){return{top:0,right:0,bottom:0,left:0}}function en(e){return Object.assign({},Qt(),e)}function tn(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Er=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,en(typeof e!="number"?e:tn(e,Be))};function Sr(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,u=G(n.placement),i=st(u),l=[W,q].indexOf(u)>=0,c=l?"height":"width";if(!(!a||!s)){var f=Er(o.padding,n),g=at(a),v=i==="y"?H:W,h=i==="y"?U:q,m=n.rects.reference[c]+n.rects.reference[i]-s[i]-n.rects.popper[c],x=s[i]-n.rects.reference[i],y=Ie(a),T=y?i==="y"?y.clientHeight||0:y.clientWidth||0:0,A=m/2-x/2,p=f[v],O=T-g[c]-f[h],R=T/2-g[c]/2+A,w=Re(p,R,O),E=i;n.modifiersData[r]=(t={},t[E]=w,t.centerOffset=w-R,t)}}function Rr(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!Yt(t.elements.popper,o)||(t.elements.arrow=o))}var Pr={name:"arrow",enabled:!0,phase:"main",fn:Sr,effect:Rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e){return e.split("-")[1]}var Cr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kr(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:he(t*o)/o||0,y:he(n*o)/o||0}}function Pt(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,u=e.position,i=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,f=e.isFixed,g=s.x,v=g===void 0?0:g,h=s.y,m=h===void 0?0:h,x=typeof c=="function"?c({x:v,y:m}):{x:v,y:m};v=x.x,m=x.y;var y=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),A=W,p=H,O=window;if(l){var R=Ie(n),w="clientHeight",E="clientWidth";if(R===V(n)&&(R=oe(n),ee(R).position!=="static"&&u==="absolute"&&(w="scrollHeight",E="scrollWidth")),R=R,o===H||(o===W||o===q)&&a===Me){p=U;var B=f&&R===O&&O.visualViewport?O.visualViewport.height:R[w];m-=B-r.height,m*=i?1:-1}if(o===W||(o===H||o===U)&&a===Me){A=q;var P=f&&R===O&&O.visualViewport?O.visualViewport.width:R[E];v-=P-r.width,v*=i?1:-1}}var k=Object.assign({position:u},l&&Cr),L=c===!0?kr({x:v,y:m}):{x:v,y:m};if(v=L.x,m=L.y,i){var C;return Object.assign({},k,(C={},C[p]=T?"0":"",C[A]=y?"0":"",C.transform=(O.devicePixelRatio||1)<=1?"translate("+v+"px, "+m+"px)":"translate3d("+v+"px, "+m+"px, 0)",C))}return Object.assign({},k,(t={},t[p]=T?m+"px":"",t[A]=y?v+"px":"",t.transform="",t))}function Mr(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,a=n.adaptive,s=a===void 0?!0:a,u=n.roundOffsets,i=u===void 0?!0:u,l={placement:G(t.placement),variation:ye(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Pt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Pt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var nn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Mr,data:{}},_e={passive:!0};function Dr(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,s=r.resize,u=s===void 0?!0:s,i=V(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(c){c.addEventListener("scroll",n.update,_e)}),u&&i.addEventListener("resize",n.update,_e),function(){a&&l.forEach(function(c){c.removeEventListener("scroll",n.update,_e)}),u&&i.removeEventListener("resize",n.update,_e)}}var rn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Dr,data:{}},Br={left:"right",right:"left",bottom:"top",top:"bottom"};function ze(e){return e.replace(/left|right|bottom|top/g,function(t){return Br[t]})}var Ir={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return Ir[t]})}function it(e){var t=V(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function lt(e){return be(oe(e)).left+it(e).scrollLeft}function Fr(e){var t=V(e),n=oe(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,u=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,u=r.offsetTop)),{width:o,height:a,x:s+lt(e),y:u}}function Nr(e){var t,n=oe(e),r=it(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ie(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=ie(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-r.scrollLeft+lt(e),i=-r.scrollTop;return ee(o||n).direction==="rtl"&&(u+=ie(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:u,y:i}}function ut(e){var t=ee(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function on(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:$(e)&&ut(e)?e:on(qe(e))}function Pe(e,t){var n;t===void 0&&(t=[]);var r=on(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=V(r),s=o?[a].concat(a.visualViewport||[],ut(r)?r:[]):r,u=t.concat(s);return o?u:u.concat(Pe(qe(s)))}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function jr(e){var t=be(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function kt(e,t){return t===Jt?Xe(Fr(e)):ge(t)?jr(t):Xe(Nr(oe(e)))}function Lr(e){var t=Pe(qe(e)),n=["absolute","fixed"].indexOf(ee(e).position)>=0,r=n&&$(e)?Ie(e):e;return ge(r)?t.filter(function(o){return ge(o)&&Yt(o,r)&&J(o)!=="body"}):[]}function _r(e,t,n){var r=t==="clippingParents"?Lr(e):[].concat(t),o=[].concat(r,[n]),a=o[0],s=o.reduce(function(u,i){var l=kt(e,i);return u.top=ie(l.top,u.top),u.right=$e(l.right,u.right),u.bottom=$e(l.bottom,u.bottom),u.left=ie(l.left,u.left),u},kt(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function an(e){var t=e.reference,n=e.element,r=e.placement,o=r?G(r):null,a=r?ye(r):null,s=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,i;switch(o){case H:i={x:s,y:t.y-n.height};break;case U:i={x:s,y:t.y+t.height};break;case q:i={x:t.x+t.width,y:u};break;case W:i={x:t.x-n.width,y:u};break;default:i={x:t.x,y:t.y}}var l=o?st(o):null;if(l!=null){var c=l==="y"?"height":"width";switch(a){case ve:i[l]=i[l]-(t[c]/2-n[c]/2);break;case Me:i[l]=i[l]+(t[c]/2-n[c]/2);break}}return i}function De(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,a=n.boundary,s=a===void 0?lr:a,u=n.rootBoundary,i=u===void 0?Jt:u,l=n.elementContext,c=l===void 0?Ae:l,f=n.altBoundary,g=f===void 0?!1:f,v=n.padding,h=v===void 0?0:v,m=en(typeof h!="number"?h:tn(h,Be)),x=c===Ae?ur:Ae,y=e.rects.popper,T=e.elements[g?x:c],A=_r(ge(T)?T:T.contextElement||oe(e.elements.popper),s,i),p=be(e.elements.reference),O=an({reference:p,element:y,placement:o}),R=Xe(Object.assign({},y,O)),w=c===Ae?R:p,E={top:A.top-w.top+m.top,bottom:w.bottom-A.bottom+m.bottom,left:A.left-w.left+m.left,right:w.right-A.right+m.right},B=e.modifiersData.offset;if(c===Ae&&B){var P=B[o];Object.keys(E).forEach(function(k){var L=[q,U].indexOf(k)>=0?1:-1,C=[H,U].indexOf(k)>=0?"y":"x";E[k]+=P[C]*L})}return E}function zr(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,i=n.allowedAutoPlacements,l=i===void 0?rt:i,c=ye(r),f=c?u?St:St.filter(function(h){return ye(h)===c}):Be,g=f.filter(function(h){return l.indexOf(h)>=0});g.length===0&&(g=f);var v=g.reduce(function(h,m){return h[m]=De(e,{placement:m,boundary:o,rootBoundary:a,padding:s})[G(m)],h},{});return Object.keys(v).sort(function(h,m){return v[h]-v[m]})}function Hr(e){if(G(e)===nt)return[];var t=ze(e);return[Ct(e),t,Ct(t)]}function Wr(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,s=n.altAxis,u=s===void 0?!0:s,i=n.fallbackPlacements,l=n.padding,c=n.boundary,f=n.rootBoundary,g=n.altBoundary,v=n.flipVariations,h=v===void 0?!0:v,m=n.allowedAutoPlacements,x=t.options.placement,y=G(x),T=y===x,A=i||(T||!h?[ze(x)]:Hr(x)),p=[x].concat(A).reduce(function(ae,X){return ae.concat(G(X)===nt?zr(t,{placement:X,boundary:c,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:m}):X)},[]),O=t.rects.reference,R=t.rects.popper,w=new Map,E=!0,B=p[0],P=0;P<p.length;P++){var k=p[P],L=G(k),C=ye(k)===ve,z=[H,U].indexOf(L)>=0,N=z?"width":"height",I=De(t,{placement:k,boundary:c,rootBoundary:f,altBoundary:g,padding:l}),F=z?C?q:W:C?U:H;O[N]>R[N]&&(F=ze(F));var b=ze(F),D=[];if(a&&D.push(I[L]<=0),u&&D.push(I[F]<=0,I[b]<=0),D.every(function(ae){return ae})){B=k,E=!1;break}w.set(k,D)}if(E)for(var K=h?3:1,Oe=function(ae){var X=p.find(function(Ne){var Te=w.get(Ne);if(Te)return Te.slice(0,ae).every(function(ce){return ce})});if(X)return B=X,"break"},xe=K;xe>0;xe--){var Fe=Oe(xe);if(Fe==="break")break}t.placement!==B&&(t.modifiersData[r]._skip=!0,t.placement=B,t.reset=!0)}}var $r={name:"flip",enabled:!0,phase:"main",fn:Wr,requiresIfExists:["offset"],data:{_skip:!1}};function Mt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Dt(e){return[H,q,U,W].some(function(t){return e[t]>=0})}function Ur(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,s=De(t,{elementContext:"reference"}),u=De(t,{altBoundary:!0}),i=Mt(s,r),l=Mt(u,o,a),c=Dt(i),f=Dt(l);t.modifiersData[n]={referenceClippingOffsets:i,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}var qr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ur};function Vr(e,t,n){var r=G(e),o=[W,H].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=a[0],u=a[1];return s=s||0,u=(u||0)*o,[W,q].indexOf(r)>=0?{x:u,y:s}:{x:s,y:u}}function Kr(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=o===void 0?[0,0]:o,s=rt.reduce(function(c,f){return c[f]=Vr(f,t.rects,a),c},{}),u=s[t.placement],i=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=s}var Zr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Kr};function Gr(e){var t=e.state,n=e.name;t.modifiersData[n]=an({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}var sn={name:"popperOffsets",enabled:!0,phase:"read",fn:Gr,data:{}};function Jr(e){return e==="x"?"y":"x"}function Xr(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=o===void 0?!0:o,s=n.altAxis,u=s===void 0?!1:s,i=n.boundary,l=n.rootBoundary,c=n.altBoundary,f=n.padding,g=n.tether,v=g===void 0?!0:g,h=n.tetherOffset,m=h===void 0?0:h,x=De(t,{boundary:i,rootBoundary:l,padding:f,altBoundary:c}),y=G(t.placement),T=ye(t.placement),A=!T,p=st(y),O=Jr(p),R=t.modifiersData.popperOffsets,w=t.rects.reference,E=t.rects.popper,B=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,P=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(R){if(a){var C,z=p==="y"?H:W,N=p==="y"?U:q,I=p==="y"?"height":"width",F=R[p],b=F+x[z],D=F-x[N],K=v?-E[I]/2:0,Oe=T===ve?w[I]:E[I],xe=T===ve?-E[I]:-w[I],Fe=t.elements.arrow,ae=v&&Fe?at(Fe):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Qt(),Ne=X[z],Te=X[N],ce=Re(0,w[I],ae[I]),mn=A?w[I]/2-K-ce-Ne-P.mainAxis:Oe-ce-Ne-P.mainAxis,vn=A?-w[I]/2+K+ce+Te+P.mainAxis:xe+ce+Te+P.mainAxis,Ve=t.elements.arrow&&Ie(t.elements.arrow),gn=Ve?p==="y"?Ve.clientTop||0:Ve.clientLeft||0:0,ft=(C=k?.[p])!=null?C:0,hn=F+mn-ft-gn,bn=F+vn-ft,dt=Re(v?$e(b,hn):b,F,v?ie(D,bn):D);R[p]=dt,L[p]=dt-F}if(u){var mt,yn=p==="x"?H:W,wn=p==="x"?U:q,se=R[O],je=O==="y"?"height":"width",vt=se+x[yn],gt=se-x[wn],Ke=[H,W].indexOf(y)!==-1,ht=(mt=k?.[O])!=null?mt:0,bt=Ke?vt:se-w[je]-E[je]-ht+P.altAxis,yt=Ke?se+w[je]+E[je]-ht-P.altAxis:gt,wt=v&&Ke?Ar(bt,se,yt):Re(v?bt:vt,se,v?yt:gt);R[O]=wt,L[O]=wt-se}t.modifiersData[r]=L}}var Yr={name:"preventOverflow",enabled:!0,phase:"main",fn:Xr,requiresIfExists:["offset"]};function Qr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function eo(e){return e===V(e)||!$(e)?it(e):Qr(e)}function to(e){var t=e.getBoundingClientRect(),n=he(t.width)/e.offsetWidth||1,r=he(t.height)/e.offsetHeight||1;return n!==1||r!==1}function no(e,t,n){n===void 0&&(n=!1);var r=$(t),o=$(t)&&to(t),a=oe(t),s=be(e,o),u={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(r||!r&&!n)&&((J(t)!=="body"||ut(a))&&(u=eo(t)),$(t)?(i=be(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=lt(a))),{x:s.left+u.scrollLeft-i.x,y:s.top+u.scrollTop-i.y,width:s.width,height:s.height}}function ro(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(u){if(!n.has(u)){var i=t.get(u);i&&o(i)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),r}function oo(e){var t=ro(e);return yr.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function ao(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function so(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function It(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function pt(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?Bt:o;return function(s,u,i){i===void 0&&(i=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},c=[],f=!1,g={state:l,setOptions:function(m){var x=typeof m=="function"?m(l.options):m;h(),l.options=Object.assign({},a,l.options,x),l.scrollParents={reference:ge(s)?Pe(s):s.contextElement?Pe(s.contextElement):[],popper:Pe(u)};var y=oo(so([].concat(r,l.options.modifiers)));return l.orderedModifiers=y.filter(function(T){return T.enabled}),v(),g.update()},forceUpdate:function(){if(!f){var m=l.elements,x=m.reference,y=m.popper;if(It(x,y)){l.rects={reference:no(x,Ie(y),l.options.strategy==="fixed"),popper:at(y)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var T=0;T<l.orderedModifiers.length;T++){if(l.reset===!0){l.reset=!1,T=-1;continue}var A=l.orderedModifiers[T],p=A.fn,O=A.options,R=O===void 0?{}:O,w=A.name;typeof p=="function"&&(l=p({state:l,options:R,name:w,instance:g})||l)}}}},update:ao(function(){return new Promise(function(m){g.forceUpdate(),m(l)})}),destroy:function(){h(),f=!0}};if(!It(s,u))return g;g.setOptions(i).then(function(m){!f&&i.onFirstUpdate&&i.onFirstUpdate(m)});function v(){l.orderedModifiers.forEach(function(m){var x=m.name,y=m.options,T=y===void 0?{}:y,A=m.effect;if(typeof A=="function"){var p=A({state:l,name:x,instance:g,options:T}),O=function(){};c.push(p||O)}})}function h(){c.forEach(function(m){return m()}),c=[]}return g}}pt();var io=[rn,sn,nn,Xt];pt({defaultModifiers:io});var lo=[rn,sn,nn,Xt,Zr,$r,Yr,Pr,qr],uo=pt({defaultModifiers:lo});const ln=te({arrowOffset:{type:Number,default:5}}),po=["fixed","absolute"],co=te({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:M(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:rt,default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},strategy:{type:String,values:po,default:"absolute"}}),un=te({...co,...ln,id:String,style:{type:M([String,Array,Object])},className:{type:M([String,Array,Object])},effect:{type:M(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:Boolean,trapping:Boolean,popperClass:{type:M([String,Array,Object])},popperStyle:{type:M([String,Array,Object])},referenceEl:{type:M(Object)},triggerTargetEl:{type:M(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Ut(["ariaLabel"]),loop:Boolean}),fo={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},mo=(e,t)=>{const n=j(!1),r=j(),o=()=>{t("focus")},a=l=>{var c;((c=l.detail)==null?void 0:c.focusReason)!=="pointer"&&(r.value="first",t("blur"))},s=l=>{e.visible&&!n.value&&(l.target&&(r.value=l.target),n.value=!0)},u=l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},i=()=>{n.value=!1,t("close")};return re(()=>{r.value=void 0}),{focusStartRef:r,trapped:n,onFocusAfterReleased:a,onFocusAfterTrapped:o,onFocusInTrap:s,onFocusoutPrevented:u,onReleaseRequested:i}},vo=(e,t=[])=>{const{placement:n,strategy:r,popperOptions:o}=e,a={placement:n,strategy:r,...o,modifiers:[...ho(e),...t]};return bo(a,o?.modifiers),a},go=e=>{if(Se)return $t(e)};function ho(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:0,bottom:0,left:0,right:0}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function bo(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const yo=(e,t,n={})=>{const r={name:"updateState",enabled:!0,phase:"write",fn:({state:i})=>{const l=wo(i);Object.assign(s.value,l)},requires:["computeStyles"]},o=S(()=>{const{onFirstUpdate:i,placement:l,strategy:c,modifiers:f}=d(n);return{onFirstUpdate:i,placement:l||"bottom",strategy:c||"absolute",modifiers:[...f||[],r,{name:"applyStyles",enabled:!1}]}}),a=Sn(),s=j({styles:{popper:{position:d(o).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return _(o,i=>{const l=d(a);l&&l.setOptions(i)},{deep:!0}),_([e,t],([i,l])=>{u(),!(!i||!l)&&(a.value=uo(i,l,d(o)))}),re(()=>{u()}),{state:S(()=>{var i;return{...((i=d(a))==null?void 0:i.state)||{}}}),styles:S(()=>d(s).styles),attributes:S(()=>d(s).attributes),update:()=>{var i;return(i=d(a))==null?void 0:i.update()},forceUpdate:()=>{var i;return(i=d(a))==null?void 0:i.forceUpdate()},instanceRef:S(()=>d(a))}};function wo(e){const t=Object.keys(e.elements),n=xt(t.map(o=>[o,e.styles[o]||{}])),r=xt(t.map(o=>[o,e.attributes[o]]));return{styles:n,attributes:r}}const Oo=0,xo=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:r,role:o}=ue(tt,void 0),a=j(),s=S(()=>e.arrowOffset),u=S(()=>({name:"eventListeners",enabled:!!e.visible})),i=S(()=>{var y;const T=d(a),A=(y=d(s))!=null?y:Oo;return{name:"arrow",enabled:!Jn(T),options:{element:T,padding:A}}}),l=S(()=>({onFirstUpdate:()=>{h()},...vo(e,[d(i),d(u)])})),c=S(()=>go(e.referenceEl)||d(r)),{attributes:f,state:g,styles:v,update:h,forceUpdate:m,instanceRef:x}=yo(c,n,l);return _(x,y=>t.value=y,{flush:"sync"}),Ue(()=>{_(()=>{var y,T;return(T=(y=d(c))==null?void 0:y.getBoundingClientRect)==null?void 0:T.call(y)},()=>{h()})}),re(()=>{t.value=void 0}),{attributes:f,arrowRef:a,contentRef:n,instanceRef:x,state:g,styles:v,role:o,forceUpdate:m,update:h}},To=(e,{attributes:t,styles:n,role:r})=>{const{nextZIndex:o}=Rn(),a=we("popper"),s=S(()=>d(t).popper),u=j(Je(e.zIndex)?e.zIndex:o()),i=S(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=S(()=>[{zIndex:d(u)},d(n).popper,e.popperStyle||{}]),c=S(()=>r.value==="dialog"?"false":void 0),f=S(()=>d(n).arrow||{});return{ariaModal:c,arrowStyle:f,contentAttrs:s,contentClass:i,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Je(e.zIndex)?e.zIndex:o()}}},Ao=ne({name:"ElPopperContent",__name:"content",props:un,emits:fo,setup(e,{expose:t,emit:n}){const r=n,o=e,{focusStartRef:a,trapped:s,onFocusAfterReleased:u,onFocusAfterTrapped:i,onFocusInTrap:l,onFocusoutPrevented:c,onReleaseRequested:f}=mo(o,r),{attributes:g,arrowRef:v,contentRef:h,styles:m,instanceRef:x,role:y,update:T}=xo(o),{ariaModal:A,arrowStyle:p,contentAttrs:O,contentClass:R,contentStyle:w,updateZIndex:E}=To(o,{styles:m,attributes:g,role:y}),B=ue(At,void 0);Ce(qt,{arrowStyle:p,arrowRef:v}),B&&Ce(At,{...B,addInputId:Ge,removeInputId:Ge});let P;const k=(C=!0)=>{T(),C&&E()},L=()=>{k(!1),o.visible&&o.focusOnShow?s.value=!0:o.visible===!1&&(s.value=!1)};return Ue(()=>{_(()=>o.triggerTargetEl,(C,z)=>{P?.(),P=void 0;const N=d(C||h.value),I=d(z||h.value);de(N)&&(P=_([y,()=>o.ariaLabel,A,()=>o.id],F=>{["role","aria-label","aria-modal","id"].forEach((b,D)=>{Lt(F[D])?N.removeAttribute(b):N.setAttribute(b,F[D])})},{immediate:!0})),I!==N&&de(I)&&["role","aria-label","aria-modal","id"].forEach(F=>{I.removeAttribute(F)})},{immediate:!0}),_(()=>o.visible,L,{immediate:!0})}),re(()=>{P?.(),P=void 0,h.value=void 0}),t({popperContentRef:h,popperInstanceRef:x,updatePopper:k,contentStyle:w}),(C,z)=>(Z(),He("div",Qe({ref_key:"contentRef",ref:h},d(O),{style:d(w),class:d(R),tabindex:"-1",onMouseenter:z[0]||(z[0]=N=>C.$emit("mouseenter",N)),onMouseleave:z[1]||(z[1]=N=>C.$emit("mouseleave",N))}),[ke(d($n),{loop:C.loop,trapped:d(s),"trap-on-focus-in":!0,"focus-trap-el":d(h),"focus-start-el":d(a),onFocusAfterTrapped:d(i),onFocusAfterReleased:d(u),onFocusin:d(l),onFocusoutPrevented:d(c),onReleaseRequested:d(f)},{default:Q(()=>[le(C.$slots,"default")]),_:3},8,["loop","trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Eo=pe(Ao,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const So=_t(Qn),ct=Symbol("elTooltip");function Ft(){let e;const t=(r,o)=>{n(),e=window.setTimeout(r,o)},n=()=>window.clearTimeout(e);return Pn(()=>n()),{registerTimeout:t,cancelTimeout:n}}const Ro=te({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Po=({showAfter:e,hideAfter:t,autoClose:n,open:r,close:o})=>{const{registerTimeout:a}=Ft(),{registerTimeout:s,cancelTimeout:u}=Ft();return{onOpen:(c,f=d(e))=>{a(()=>{r(c);const g=d(n);Je(g)&&g>0&&s(()=>{o(c)},g)},f)},onClose:(c,f=d(t))=>{u(),a(()=>{o(c)},f)}}},pn=te({...Ro,...un,appendTo:{type:Un.to.type},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:M(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Ut(["ariaLabel"])}),cn=te({...Kt,disabled:Boolean,trigger:{type:M([String,Array]),default:"hover"},triggerKeys:{type:M(Array),default:()=>[Ze.enter,Ze.numpadEnter,Ze.space]},focusOnTarget:Boolean}),Co=zt({type:M(Boolean),default:null}),ko=zt({type:M(Function)}),Mo=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,r=[t],o={[e]:Co,[n]:ko};return{useModelToggle:({indicator:s,toggleReason:u,shouldHideWhenRouteChanges:i,shouldProceed:l,onShow:c,onHide:f})=>{const g=Cn(),{emit:v}=g,h=g.props,m=S(()=>Le(h[n])),x=S(()=>h[e]===null),y=w=>{s.value!==!0&&(s.value=!0,u&&(u.value=w),Le(c)&&c(w))},T=w=>{s.value!==!1&&(s.value=!1,u&&(u.value=w),Le(f)&&f(w))},A=w=>{if(h.disabled===!0||Le(l)&&!l())return;const E=m.value&&Se;E&&v(t,!0),(x.value||!E)&&y(w)},p=w=>{if(h.disabled===!0||!Se)return;const E=m.value&&Se;E&&v(t,!1),(x.value||!E)&&T(w)},O=w=>{Ht(w)&&(h.disabled&&w?m.value&&v(t,!1):s.value!==w&&(w?y():T()))},R=()=>{s.value?p():A()};return _(()=>h[e],O),i&&g.appContext.config.globalProperties.$route!==void 0&&_(()=>({...g.proxy.$route}),()=>{i.value&&s.value&&p()}),Ue(()=>{O(h[e])}),{hide:p,show:A,toggle:R,hasUpdateHandler:m}},useModelToggleProps:o,useModelToggleEmits:r}},{useModelToggleProps:Do,useModelToggleEmits:Bo,useModelToggle:Io}=Mo("visible"),Fo=te({...Vt,...Do,...pn,...cn,...ln,showArrow:{type:Boolean,default:!0}}),No=[...Bo,"before-show","before-hide","show","hide","open","close"],Ye=(e,t)=>et(e)?e.includes(t):e===t,fe=(e,t,n)=>r=>{Ye(d(e),t)&&n(r)},jo=ne({name:"ElTooltipTrigger",__name:"trigger",props:cn,setup(e,{expose:t}){const n=e,r=we("tooltip"),{controlled:o,id:a,open:s,onOpen:u,onClose:i,onToggle:l}=ue(ct,void 0),c=j(null),f=()=>{if(d(o)||n.disabled)return!0},g=Ee(n,"trigger"),v=Y(f,fe(g,"hover",p=>{u(p),n.focusOnTarget&&p.target&&kn(()=>{Wt(p.target,{preventScroll:!0})})})),h=Y(f,fe(g,"hover",i)),m=Y(f,fe(g,"click",p=>{p.button===0&&l(p)})),x=Y(f,fe(g,"focus",u)),y=Y(f,fe(g,"focus",i)),T=Y(f,fe(g,"contextmenu",p=>{p.preventDefault(),l(p)})),A=Y(f,p=>{const O=Vn(p);n.triggerKeys.includes(O)&&(p.preventDefault(),l(p))});return t({triggerRef:c}),(p,O)=>(Z(),me(d(ir),{id:d(a),"virtual-ref":p.virtualRef,open:d(s),"virtual-triggering":p.virtualTriggering,class:Nt(d(r).e("trigger")),onBlur:d(y),onClick:d(m),onContextmenu:d(T),onFocus:d(x),onMouseenter:d(v),onMouseleave:d(h),onKeydown:d(A)},{default:Q(()=>[le(p.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Lo=pe(jo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const fn=()=>{const e=Dn(),t=zn(),n=S(()=>`${e.value}-popper-container-${t.prefix}`),r=S(()=>`#${n.value}`);return{id:n,selector:r}},_o=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},zo=()=>{const{id:e,selector:t}=fn();return Mn(()=>{Se&&(document.body.querySelector(t.value)||_o(e.value))}),{id:e,selector:t}},pa=e=>et(e)?e[0]:e,Ho=e=>!e&&e!==0?[]:et(e)?e:[e],Wo=ne({name:"ElTooltipContent",inheritAttrs:!1,__name:"content",props:pn,setup(e,{expose:t}){const n=e,{selector:r}=fn(),o=we("tooltip"),a=j(),s=Bn(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef});let u;const{controlled:i,id:l,open:c,trigger:f,onClose:g,onOpen:v,onShow:h,onHide:m,onBeforeShow:x,onBeforeHide:y}=ue(ct,void 0),T=S(()=>n.transition||`${o.namespace.value}-fade-in-linear`),A=S(()=>n.persistent);re(()=>{u?.()});const p=S(()=>d(A)?!0:d(c)),O=S(()=>n.disabled?!1:d(c)),R=S(()=>n.appendTo||r.value),w=S(()=>{var b;return(b=n.style)!=null?b:{}}),E=j(!0),B=()=>{m(),F()&&Wt(document.body,{preventScroll:!0}),E.value=!0},P=()=>{if(d(i))return!0},k=Y(P,()=>{n.enterable&&Ye(d(f),"hover")&&v()}),L=Y(P,()=>{Ye(d(f),"hover")&&g()}),C=()=>{var b,D;(D=(b=a.value)==null?void 0:b.updatePopper)==null||D.call(b),x?.()},z=()=>{y?.()},N=()=>{h()},I=()=>{n.virtualTriggering||g()},F=b=>{var D;const K=(D=a.value)==null?void 0:D.popperContentRef,Oe=b?.relatedTarget||document.activeElement;return K?.contains(Oe)};return _(()=>d(c),b=>{b?(E.value=!1,u=Wn(s,()=>{if(d(i))return;Ho(d(f)).every(K=>K!=="hover"&&K!=="focus")&&g()},{detectIframe:!0})):u?.()},{flush:"post"}),_(()=>n.content,()=>{var b,D;(D=(b=a.value)==null?void 0:b.updatePopper)==null||D.call(b)}),t({contentRef:a,isFocusInsideContent:F}),(b,D)=>(Z(),me(d(qn),{disabled:!b.teleported,to:R.value},{default:Q(()=>[p.value||!E.value?(Z(),me(In,{key:0,name:T.value,appear:!A.value,onAfterLeave:B,onBeforeEnter:C,onAfterEnter:N,onBeforeLeave:z,persisted:""},{default:Q(()=>[jt(ke(d(Eo),Qe({id:d(l),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":E.value,"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,"arrow-offset":b.arrowOffset,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,w.value],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:O.value,"z-index":b.zIndex,loop:b.loop,onMouseenter:d(k),onMouseleave:d(L),onBlur:I,onClose:d(g)}),{default:Q(()=>[le(b.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","arrow-offset","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","loop","onMouseenter","onMouseleave","onClose"]),[[Fn,O.value]])]),_:3},8,["name","appear"])):We("v-if",!0)]),_:3},8,["disabled","to"]))}});var $o=pe(Wo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Uo=["innerHTML"],qo={key:1},Vo=ne({name:"ElTooltip",__name:"tooltip",props:Fo,emits:No,setup(e,{expose:t,emit:n}){const r=e,o=n;zo();const a=we("tooltip"),s=Hn(),u=j(),i=j(),l=()=>{var p;const O=d(u);O&&((p=O.popperInstanceRef)==null||p.update())},c=j(!1),f=j(),{show:g,hide:v,hasUpdateHandler:h}=Io({indicator:c,toggleReason:f}),{onOpen:m,onClose:x}=Po({showAfter:Ee(r,"showAfter"),hideAfter:Ee(r,"hideAfter"),autoClose:Ee(r,"autoClose"),open:g,close:v}),y=S(()=>Ht(r.visible)&&!h.value),T=S(()=>[a.b(),r.popperClass]);Ce(ct,{controlled:y,id:s,open:Nn(c),trigger:Ee(r,"trigger"),onOpen:m,onClose:x,onToggle:p=>{d(c)?x(p):m(p)},onShow:()=>{o("show",f.value)},onHide:()=>{o("hide",f.value)},onBeforeShow:()=>{o("before-show",f.value)},onBeforeHide:()=>{o("before-hide",f.value)},updatePopper:l}),_(()=>r.disabled,p=>{p&&c.value&&(c.value=!1)});const A=p=>{var O;return(O=i.value)==null?void 0:O.isFocusInsideContent(p)};return jn(()=>c.value&&v()),re(()=>{f.value=void 0}),t({popperRef:u,contentRef:i,isFocusInsideContent:A,updatePopper:l,onOpen:m,onClose:x,hide:v}),(p,O)=>(Z(),me(d(So),{ref_key:"popperRef",ref:u,role:p.role},{default:Q(()=>[ke(Lo,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering,"focus-on-target":p.focusOnTarget},{default:Q(()=>[p.$slots.default?le(p.$slots,"default",{key:0}):We("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering","focus-on-target"]),ke($o,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":T.value,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,"arrow-offset":p.arrowOffset,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo,loop:p.loop},{default:Q(()=>[le(p.$slots,"content",{},()=>[p.rawContent?(Z(),He("span",{key:0,innerHTML:p.content},null,8,Uo)):(Z(),He("span",qo,Ln(p.content),1))]),p.showArrow?(Z(),me(d(tr),{key:0})):We("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","arrow-offset","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to","loop"])]),_:3},8,["role"]))}});var Ko=pe(Vo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const ca=_t(Ko),Zo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='darkorange'%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M9.75%2010c0-.69.56-1.25%201.25-1.25h2.25a1%201%200%200%201%201%201V10a.75.75%200%200%200%201.5%200v-.25a2.5%202.5%200%200%200-2.5-2.5H11A2.75%202.75%200%200%200%208.25%2010v4A2.75%202.75%200%200%200%2011%2016.75h2.25a2.5%202.5%200%200%200%202.5-2.5V14a.75.75%200%200%200-1.5%200v.25a1%201%200%200%201-1%201H11c-.69%200-1.25-.56-1.25-1.25z'%20stroke-width='1'%20stroke='%23fff'/%3e%3c/svg%3e",Go="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='pink'%20stroke-width='1'%20stroke='%23fff'%3e%3cpath%20d='M13.25%2011.25H10.5v-2.5h2.75a.75.75%200%200%201%20.75.75v1a.75.75%200%200%201-.75.75'/%3e%3cpath%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M10.25%207.25C9.56%207.25%209%207.81%209%208.5V16a.75.75%200%200%200%201.5%200v-3.25h.625l2.775%203.7a.75.75%200%201%200%201.2-.9l-2.1-2.8h.25a2.25%202.25%200%200%200%202.25-2.25v-1a2.25%202.25%200%200%200-2.25-2.25z'/%3e%3c/g%3e%3c/svg%3e",Jo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='purple'%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M9.75%208a.75.75%200%200%200-1.5%200v6A2.75%202.75%200%200%200%2011%2016.75h2A2.75%202.75%200%200%200%2015.75%2014V8a.75.75%200%200%200-1.5%200v6c0%20.69-.56%201.25-1.25%201.25h-2c-.69%200-1.25-.56-1.25-1.25z'%20stroke-width='1'%20stroke='%23fff'/%3e%3c/svg%3e",Xo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='lightblue'%20stroke-width='1'%20stroke='%23fff'%3e%3cpath%20d='M10.25%2015.25v-6.5H12a2.75%202.75%200%200%201%202.75%202.75v1A2.75%202.75%200%200%201%2012%2015.25z'/%3e%3cpath%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M10%207.25c-.69%200-1.25.56-1.25%201.25v7c0%20.69.56%201.25%201.25%201.25h2a4.25%204.25%200%200%200%204.25-4.25v-1A4.25%204.25%200%200%200%2012%207.25z'/%3e%3c/g%3e%3c/svg%3e",Yo=`# Read 关于查询

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
  `,Qo=`import { reactive, ref, watch } from "vue";
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
}`,ea=`import type { AxiosResponse } from "axios";
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
}`,ta=`<template>
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
</style>`,na=`# 补充
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
\`\`\``;class dn{static state=_n([{activeUrl:Zo,isActive:!1,id:"useFormHook",activeLabel:"增Create：表单hook",fileList:[{name:"源文件useForm.ts",content:Kn}]},{activeUrl:Go,isActive:!1,id:"usePageApiHook",activeLabel:"查Read：分页hook",fileList:[{name:"分页介绍",content:Yo,lang:"md"},{name:"源文件usePageApi.ts",content:Qo}]},{activeUrl:Jo,isActive:!1,id:"update-id",activeLabel:"更新Update：基本跟新增一样，来看看层次结构吧",fileList:[{name:"说明",content:na,lang:"md"},{name:"接口层：二封Axios",content:Zn},{name:"接口层：api模块定义",content:Gn},{name:"model层：业务类的编写",content:ea},{name:"viewModel层组件",content:ta}]},{activeUrl:Xo,isActive:!1,id:"delete-id",activeLabel:"删Delete：这里暂时没想到写什么"}]);static setMissionFlag(t,n){const r=dn.state.find(o=>o.id===t);r&&(r.isActive=n)}}export{dn as C,ca as E,rt as a,Ho as c,pa as e,pn as u};
