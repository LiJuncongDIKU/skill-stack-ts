import{b0 as wn,u as p,Y as ne,a4 as Ge,d as z,q as j,c as R,j as ie,a7 as Pe,$ as be,Z as le,a0 as De,b as He,o as G,a3 as On,n as It,a5 as C,aq as Je,w as _t,b1 as Tn,aT as wt,ac as xn,F as An,b2 as En,h as Ce,k as qe,a6 as L,ai as Ae,l as fe,p as $e,m as ee,an as Ye,b3 as Nt,X as Ee,az as Rn,b4 as Ot,b5 as Sn,ad as jt,b6 as Lt,aw as Pn,av as je,aN as zt,ae as Qe,a1 as xe,a9 as Cn,aR as Mn,b7 as kn,b8 as Dn,T as Bn,v as Fn,b9 as In,ba as _n,t as Nn,r as jn}from"./en_index.NpGGUjx7.js";import{_ as ue,x as Tt,y as Ht,z as Ln,u as zn}from"./ck_aria.DmwKwT2H.js";import{e as $t,a as Wt,j as xt,d as Hn}from"./ck_constants.BI_nuTZQ.js";import{b as $n,t as Wn,e as qn}from"./ck_el-overlay.52h29_3O.js";import{E as Ze,c as Q,g as Un}from"./ck_event.Bwqz3xnp.js";import{u as Vn}from"./ck_useForm.DSbdktPA.js";import{r as Kn,c as Zn}from"./ck_client.api.DUxc9zuG.js";function Gn(e){return e===void 0}function At(){let e;const t=(r,o)=>{n(),e=window.setTimeout(r,o)},n=()=>window.clearTimeout(e);return wn(()=>n()),{registerTimeout:t,cancelTimeout:n}}const Jn=ne({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Xn=({showAfter:e,hideAfter:t,autoClose:n,open:r,close:o})=>{const{registerTimeout:a}=At(),{registerTimeout:s,cancelTimeout:u}=At();return{onOpen:(f,m=p(e))=>{a(()=>{r(f);const v=p(n);Ge(v)&&v>0&&s(()=>{o(f)},v)},m)},onClose:(f,m=p(t))=>{u(),a(()=>{o(f)},m)}}},et=Symbol("popper"),qt=Symbol("popperContent"),Yn=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Ut=ne({role:{type:String,values:Yn,default:"tooltip"}}),Qn=z({name:"ElPopper",inheritAttrs:!1}),er=z({...Qn,props:Ut,setup(e,{expose:t}){const n=e,r=j(),o=j(),a=j(),s=j(),u=R(()=>n.role),l={triggerRef:r,popperInstanceRef:o,contentRef:a,referenceRef:s,role:u};return t(l),Pe(et,l),(i,f)=>ie(i.$slots,"default")}});var tr=ue(er,[["__file","popper.vue"]]);const nr=z({name:"ElPopperArrow",inheritAttrs:!1}),rr=z({...nr,setup(e,{expose:t}){const n=be("popper"),{arrowRef:r,arrowStyle:o}=le(qt,void 0);return De(()=>{r.value=void 0}),t({arrowRef:r}),(a,s)=>(G(),He("span",{ref_key:"arrowRef",ref:r,class:It(p(n).e("arrow")),style:On(p(o)),"data-popper-arrow":""},null,6))}});var or=ue(rr,[["__file","arrow.vue"]]);const Vt=ne({virtualRef:{type:C(Object)},virtualTriggering:Boolean,onMouseenter:{type:C(Function)},onMouseleave:{type:C(Function)},onClick:{type:C(Function)},onKeydown:{type:C(Function)},onFocus:{type:C(Function)},onBlur:{type:C(Function)},onContextmenu:{type:C(Function)},id:String,open:Boolean}),Kt=Symbol("elForwardRef"),ar=e=>{Pe(Kt,{setForwardRef:n=>{e.value=n}})},sr=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),ir="ElOnlyChild",lr=z({name:ir,setup(e,{slots:t,attrs:n}){var r;const o=le(Kt),a=sr((r=o?.setForwardRef)!=null?r:Je);return()=>{var s;const u=(s=t.default)==null?void 0:s.call(t,n);if(!u)return null;const[l,i]=Zt(u);return l?_t(Tn(l,n),[[a]]):null}}});function Zt(e){if(!e)return[null,0];const t=e,n=t.filter(r=>r.type!==wt).length;for(const r of t){if(xn(r))switch(r.type){case wt:continue;case En:case"svg":return[Et(r),n];case An:return Zt(r.children);default:return[r,n]}return[Et(r),n]}return[null,0]}function Et(e){const t=be("only-child");return Ce("span",{class:t.e("content")},[e])}const ur=z({name:"ElPopperTrigger",inheritAttrs:!1}),cr=z({...ur,props:Vt,setup(e,{expose:t}){const n=e,{role:r,triggerRef:o}=le(et,void 0);ar(o);const a=R(()=>u.value?n.id:void 0),s=R(()=>{if(r&&r.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=R(()=>{if(r&&r.value!=="tooltip")return r.value}),l=R(()=>u.value?`${n.open}`:void 0);let i;const f=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return qe(()=>{L(()=>n.virtualRef,m=>{m&&(o.value=$t(m))},{immediate:!0}),L(o,(m,v)=>{i?.(),i=void 0,Ae(m)&&(f.forEach(g=>{var b;const d=n[g];d&&(m.addEventListener(g.slice(2).toLowerCase(),d,["onFocus","onBlur"].includes(g)),(b=v?.removeEventListener)==null||b.call(v,g.slice(2).toLowerCase(),d,["onFocus","onBlur"].includes(g)))}),Tt(m)&&(i=L([a,s,u,l],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((b,d)=>{Nt(g[d])?m.removeAttribute(b):m.setAttribute(b,g[d])})},{immediate:!0}))),Ae(v)&&Tt(v)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>v.removeAttribute(g))},{immediate:!0})}),De(()=>{if(i?.(),i=void 0,o.value&&Ae(o.value)){const m=o.value;f.forEach(v=>{const g=n[v];g&&m.removeEventListener(v.slice(2).toLowerCase(),g,["onFocus","onBlur"].includes(v))}),o.value=void 0}}),t({triggerRef:o}),(m,v)=>m.virtualTriggering?$e("v-if",!0):(G(),fe(p(lr),Ye({key:0},m.$attrs,{"aria-controls":p(a),"aria-describedby":p(s),"aria-expanded":p(l),"aria-haspopup":p(u)}),{default:ee(()=>[ie(m.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var pr=ue(cr,[["__file","trigger.vue"]]),H="top",q="bottom",U="right",$="left",tt="auto",Be=[H,q,U,$],de="start",Me="end",fr="clippingParents",Gt="viewport",Te="popper",dr="reference",Rt=Be.reduce(function(e,t){return e.concat([t+"-"+de,t+"-"+Me])},[]),nt=[].concat(Be,[tt]).reduce(function(e,t){return e.concat([t,t+"-"+de,t+"-"+Me])},[]),mr="beforeRead",vr="read",gr="afterRead",hr="beforeMain",br="main",yr="afterMain",wr="beforeWrite",Or="write",Tr="afterWrite",xr=[mr,vr,gr,hr,br,yr,wr,Or,Tr];function X(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=K(e).Element;return e instanceof t||e instanceof Element}function W(e){var t=K(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function rt(e){if(typeof ShadowRoot>"u")return!1;var t=K(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ar(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!W(a)||!X(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(s){var u=o[s];u===!1?a.removeAttribute(s):a.setAttribute(s,u===!0?"":u)}))})}function Er(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],a=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),u=s.reduce(function(l,i){return l[i]="",l},{});!W(o)||!X(o)||(Object.assign(o.style,u),Object.keys(a).forEach(function(l){o.removeAttribute(l)}))})}}var Jt={name:"applyStyles",enabled:!0,phase:"write",fn:Ar,effect:Er,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var se=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(W(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=ve(n.width)/s||1),a>0&&(o=ve(n.height)/a||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function ot(e){var t=ge(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Xt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&rt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function te(e){return K(e).getComputedStyle(e)}function Rr(e){return["table","td","th"].indexOf(X(e))>=0}function re(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ue(e){return X(e)==="html"?e:e.assignedSlot||e.parentNode||(rt(e)?e.host:null)||re(e)}function St(e){return!W(e)||te(e).position==="fixed"?null:e.offsetParent}function Sr(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&W(e)){var r=te(e);if(r.position==="fixed")return null}var o=Ue(e);for(rt(o)&&(o=o.host);W(o)&&["html","body"].indexOf(X(o))<0;){var a=te(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Fe(e){for(var t=K(e),n=St(e);n&&Rr(n)&&te(n).position==="static";)n=St(n);return n&&(X(n)==="html"||X(n)==="body"&&te(n).position==="static")?t:n||Sr(e)||t}function at(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Re(e,t,n){return se(e,We(t,n))}function Pr(e,t,n){var r=Re(e,t,n);return r>n?n:r}function Yt(){return{top:0,right:0,bottom:0,left:0}}function Qt(e){return Object.assign({},Yt(),e)}function en(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Cr=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Qt(typeof e!="number"?e:en(e,Be))};function Mr(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,u=J(n.placement),l=at(u),i=[$,U].indexOf(u)>=0,f=i?"height":"width";if(!(!a||!s)){var m=Cr(o.padding,n),v=ot(a),g=l==="y"?H:$,b=l==="y"?q:U,d=n.rects.reference[f]+n.rects.reference[l]-s[l]-n.rects.popper[f],x=s[l]-n.rects.reference[l],w=Fe(a),T=w?l==="y"?w.clientHeight||0:w.clientWidth||0:0,c=d/2-x/2,h=m[g],A=T-v[f]-m[b],S=T/2-v[f]/2+c,O=Re(h,S,A),E=l;n.modifiersData[r]=(t={},t[E]=O,t.centerOffset=O-S,t)}}function kr(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!Xt(t.elements.popper,o)||(t.elements.arrow=o))}var Dr={name:"arrow",enabled:!0,phase:"main",fn:Mr,effect:kr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e){return e.split("-")[1]}var Br={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fr(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:ve(t*o)/o||0,y:ve(n*o)/o||0}}function Pt(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,u=e.position,l=e.gpuAcceleration,i=e.adaptive,f=e.roundOffsets,m=e.isFixed,v=s.x,g=v===void 0?0:v,b=s.y,d=b===void 0?0:b,x=typeof f=="function"?f({x:g,y:d}):{x:g,y:d};g=x.x,d=x.y;var w=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),c=$,h=H,A=window;if(i){var S=Fe(n),O="clientHeight",E="clientWidth";if(S===K(n)&&(S=re(n),te(S).position!=="static"&&u==="absolute"&&(O="scrollHeight",E="scrollWidth")),S=S,o===H||(o===$||o===U)&&a===Me){h=q;var P=m&&S===A&&A.visualViewport?A.visualViewport.height:S[O];d-=P-r.height,d*=l?1:-1}if(o===$||(o===H||o===q)&&a===Me){c=U;var D=m&&S===A&&A.visualViewport?A.visualViewport.width:S[E];g-=D-r.width,g*=l?1:-1}}var M=Object.assign({position:u},i&&Br),k=f===!0?Fr({x:g,y:d}):{x:g,y:d};if(g=k.x,d=k.y,l){var F;return Object.assign({},M,(F={},F[h]=T?"0":"",F[c]=w?"0":"",F.transform=(A.devicePixelRatio||1)<=1?"translate("+g+"px, "+d+"px)":"translate3d("+g+"px, "+d+"px, 0)",F))}return Object.assign({},M,(t={},t[h]=T?d+"px":"",t[c]=w?g+"px":"",t.transform="",t))}function Ir(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,a=n.adaptive,s=a===void 0?!0:a,u=n.roundOffsets,l=u===void 0?!0:u,i={placement:J(t.placement),variation:he(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Pt(Object.assign({},i,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Pt(Object.assign({},i,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var tn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ir,data:{}},Le={passive:!0};function _r(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,s=r.resize,u=s===void 0?!0:s,l=K(t.elements.popper),i=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&i.forEach(function(f){f.addEventListener("scroll",n.update,Le)}),u&&l.addEventListener("resize",n.update,Le),function(){a&&i.forEach(function(f){f.removeEventListener("scroll",n.update,Le)}),u&&l.removeEventListener("resize",n.update,Le)}}var nn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:_r,data:{}},Nr={left:"right",right:"left",bottom:"top",top:"bottom"};function ze(e){return e.replace(/left|right|bottom|top/g,function(t){return Nr[t]})}var jr={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return jr[t]})}function st(e){var t=K(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function it(e){return ge(re(e)).left+st(e).scrollLeft}function Lr(e){var t=K(e),n=re(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,u=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,u=r.offsetTop)),{width:o,height:a,x:s+it(e),y:u}}function zr(e){var t,n=re(e),r=st(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=se(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=se(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-r.scrollLeft+it(e),l=-r.scrollTop;return te(o||n).direction==="rtl"&&(u+=se(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:u,y:l}}function lt(e){var t=te(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function rn(e){return["html","body","#document"].indexOf(X(e))>=0?e.ownerDocument.body:W(e)&&lt(e)?e:rn(Ue(e))}function Se(e,t){var n;t===void 0&&(t=[]);var r=rn(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=K(r),s=o?[a].concat(a.visualViewport||[],lt(r)?r:[]):r,u=t.concat(s);return o?u:u.concat(Se(Ue(s)))}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Hr(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Mt(e,t){return t===Gt?Xe(Lr(e)):me(t)?Hr(t):Xe(zr(re(e)))}function $r(e){var t=Se(Ue(e)),n=["absolute","fixed"].indexOf(te(e).position)>=0,r=n&&W(e)?Fe(e):e;return me(r)?t.filter(function(o){return me(o)&&Xt(o,r)&&X(o)!=="body"}):[]}function Wr(e,t,n){var r=t==="clippingParents"?$r(e):[].concat(t),o=[].concat(r,[n]),a=o[0],s=o.reduce(function(u,l){var i=Mt(e,l);return u.top=se(i.top,u.top),u.right=We(i.right,u.right),u.bottom=We(i.bottom,u.bottom),u.left=se(i.left,u.left),u},Mt(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function on(e){var t=e.reference,n=e.element,r=e.placement,o=r?J(r):null,a=r?he(r):null,s=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,l;switch(o){case H:l={x:s,y:t.y-n.height};break;case q:l={x:s,y:t.y+t.height};break;case U:l={x:t.x+t.width,y:u};break;case $:l={x:t.x-n.width,y:u};break;default:l={x:t.x,y:t.y}}var i=o?at(o):null;if(i!=null){var f=i==="y"?"height":"width";switch(a){case de:l[i]=l[i]-(t[f]/2-n[f]/2);break;case Me:l[i]=l[i]+(t[f]/2-n[f]/2);break}}return l}function ke(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,a=n.boundary,s=a===void 0?fr:a,u=n.rootBoundary,l=u===void 0?Gt:u,i=n.elementContext,f=i===void 0?Te:i,m=n.altBoundary,v=m===void 0?!1:m,g=n.padding,b=g===void 0?0:g,d=Qt(typeof b!="number"?b:en(b,Be)),x=f===Te?dr:Te,w=e.rects.popper,T=e.elements[v?x:f],c=Wr(me(T)?T:T.contextElement||re(e.elements.popper),s,l),h=ge(e.elements.reference),A=on({reference:h,element:w,placement:o}),S=Xe(Object.assign({},w,A)),O=f===Te?S:h,E={top:c.top-O.top+d.top,bottom:O.bottom-c.bottom+d.bottom,left:c.left-O.left+d.left,right:O.right-c.right+d.right},P=e.modifiersData.offset;if(f===Te&&P){var D=P[o];Object.keys(E).forEach(function(M){var k=[U,q].indexOf(M)>=0?1:-1,F=[H,q].indexOf(M)>=0?"y":"x";E[M]+=D[F]*k})}return E}function qr(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,l=n.allowedAutoPlacements,i=l===void 0?nt:l,f=he(r),m=f?u?Rt:Rt.filter(function(b){return he(b)===f}):Be,v=m.filter(function(b){return i.indexOf(b)>=0});v.length===0&&(v=m);var g=v.reduce(function(b,d){return b[d]=ke(e,{placement:d,boundary:o,rootBoundary:a,padding:s})[J(d)],b},{});return Object.keys(g).sort(function(b,d){return g[b]-g[d]})}function Ur(e){if(J(e)===tt)return[];var t=ze(e);return[Ct(e),t,Ct(t)]}function Vr(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,s=n.altAxis,u=s===void 0?!0:s,l=n.fallbackPlacements,i=n.padding,f=n.boundary,m=n.rootBoundary,v=n.altBoundary,g=n.flipVariations,b=g===void 0?!0:g,d=n.allowedAutoPlacements,x=t.options.placement,w=J(x),T=w===x,c=l||(T||!b?[ze(x)]:Ur(x)),h=[x].concat(c).reduce(function(oe,Y){return oe.concat(J(Y)===tt?qr(t,{placement:Y,boundary:f,rootBoundary:m,padding:i,flipVariations:b,allowedAutoPlacements:d}):Y)},[]),A=t.rects.reference,S=t.rects.popper,O=new Map,E=!0,P=h[0],D=0;D<h.length;D++){var M=h[D],k=J(M),F=he(M)===de,N=[H,q].indexOf(k)>=0,V=N?"width":"height",B=ke(t,{placement:M,boundary:f,rootBoundary:m,altBoundary:v,padding:i}),_=N?F?U:$:F?q:H;A[V]>S[V]&&(_=ze(_));var y=ze(_),I=[];if(a&&I.push(B[k]<=0),u&&I.push(B[_]<=0,B[y]<=0),I.every(function(oe){return oe})){P=M,E=!1;break}O.set(M,I)}if(E)for(var Z=b?3:1,ye=function(oe){var Y=h.find(function(_e){var Oe=O.get(_e);if(Oe)return Oe.slice(0,oe).every(function(ce){return ce})});if(Y)return P=Y,"break"},we=Z;we>0;we--){var Ie=ye(we);if(Ie==="break")break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}}var Kr={name:"flip",enabled:!0,phase:"main",fn:Vr,requiresIfExists:["offset"],data:{_skip:!1}};function kt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Dt(e){return[H,U,q,$].some(function(t){return e[t]>=0})}function Zr(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,s=ke(t,{elementContext:"reference"}),u=ke(t,{altBoundary:!0}),l=kt(s,r),i=kt(u,o,a),f=Dt(l),m=Dt(i);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:i,isReferenceHidden:f,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}var Gr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Zr};function Jr(e,t,n){var r=J(e),o=[$,H].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=a[0],u=a[1];return s=s||0,u=(u||0)*o,[$,U].indexOf(r)>=0?{x:u,y:s}:{x:s,y:u}}function Xr(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=o===void 0?[0,0]:o,s=nt.reduce(function(f,m){return f[m]=Jr(m,t.rects,a),f},{}),u=s[t.placement],l=u.x,i=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=i),t.modifiersData[r]=s}var Yr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Xr};function Qr(e){var t=e.state,n=e.name;t.modifiersData[n]=on({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}var an={name:"popperOffsets",enabled:!0,phase:"read",fn:Qr,data:{}};function eo(e){return e==="x"?"y":"x"}function to(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=o===void 0?!0:o,s=n.altAxis,u=s===void 0?!1:s,l=n.boundary,i=n.rootBoundary,f=n.altBoundary,m=n.padding,v=n.tether,g=v===void 0?!0:v,b=n.tetherOffset,d=b===void 0?0:b,x=ke(t,{boundary:l,rootBoundary:i,padding:m,altBoundary:f}),w=J(t.placement),T=he(t.placement),c=!T,h=at(w),A=eo(h),S=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,P=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,D=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(S){if(a){var F,N=h==="y"?H:$,V=h==="y"?q:U,B=h==="y"?"height":"width",_=S[h],y=_+x[N],I=_-x[V],Z=g?-E[B]/2:0,ye=T===de?O[B]:E[B],we=T===de?-E[B]:-O[B],Ie=t.elements.arrow,oe=g&&Ie?ot(Ie):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Yt(),_e=Y[N],Oe=Y[V],ce=Re(0,O[B],oe[B]),dn=c?O[B]/2-Z-ce-_e-D.mainAxis:ye-ce-_e-D.mainAxis,mn=c?-O[B]/2+Z+ce+Oe+D.mainAxis:we+ce+Oe+D.mainAxis,Ve=t.elements.arrow&&Fe(t.elements.arrow),vn=Ve?h==="y"?Ve.clientTop||0:Ve.clientLeft||0:0,pt=(F=M?.[h])!=null?F:0,gn=_+dn-pt-vn,hn=_+mn-pt,ft=Re(g?We(y,gn):y,_,g?se(I,hn):I);S[h]=ft,k[h]=ft-_}if(u){var dt,bn=h==="x"?H:$,yn=h==="x"?q:U,ae=S[A],Ne=A==="y"?"height":"width",mt=ae+x[bn],vt=ae-x[yn],Ke=[H,$].indexOf(w)!==-1,gt=(dt=M?.[A])!=null?dt:0,ht=Ke?mt:ae-O[Ne]-E[Ne]-gt+D.altAxis,bt=Ke?ae+O[Ne]+E[Ne]-gt-D.altAxis:vt,yt=g&&Ke?Pr(ht,ae,bt):Re(g?ht:mt,ae,g?bt:vt);S[A]=yt,k[A]=yt-ae}t.modifiersData[r]=k}}var no={name:"preventOverflow",enabled:!0,phase:"main",fn:to,requiresIfExists:["offset"]};function ro(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function oo(e){return e===K(e)||!W(e)?st(e):ro(e)}function ao(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,r=ve(t.height)/e.offsetHeight||1;return n!==1||r!==1}function so(e,t,n){n===void 0&&(n=!1);var r=W(t),o=W(t)&&ao(t),a=re(t),s=ge(e,o),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((X(t)!=="body"||lt(a))&&(u=oo(t)),W(t)?(l=ge(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=it(a))),{x:s.left+u.scrollLeft-l.x,y:s.top+u.scrollTop-l.y,width:s.width,height:s.height}}function io(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(u){if(!n.has(u)){var l=t.get(u);l&&o(l)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),r}function lo(e){var t=io(e);return xr.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function uo(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function co(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function Ft(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function ut(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?Bt:o;return function(s,u,l){l===void 0&&(l=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},f=[],m=!1,v={state:i,setOptions:function(d){var x=typeof d=="function"?d(i.options):d;b(),i.options=Object.assign({},a,i.options,x),i.scrollParents={reference:me(s)?Se(s):s.contextElement?Se(s.contextElement):[],popper:Se(u)};var w=lo(co([].concat(r,i.options.modifiers)));return i.orderedModifiers=w.filter(function(T){return T.enabled}),g(),v.update()},forceUpdate:function(){if(!m){var d=i.elements,x=d.reference,w=d.popper;if(Ft(x,w)){i.rects={reference:so(x,Fe(w),i.options.strategy==="fixed"),popper:ot(w)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(E){return i.modifiersData[E.name]=Object.assign({},E.data)});for(var T=0;T<i.orderedModifiers.length;T++){if(i.reset===!0){i.reset=!1,T=-1;continue}var c=i.orderedModifiers[T],h=c.fn,A=c.options,S=A===void 0?{}:A,O=c.name;typeof h=="function"&&(i=h({state:i,options:S,name:O,instance:v})||i)}}}},update:uo(function(){return new Promise(function(d){v.forceUpdate(),d(i)})}),destroy:function(){b(),m=!0}};if(!Ft(s,u))return v;v.setOptions(l).then(function(d){!m&&l.onFirstUpdate&&l.onFirstUpdate(d)});function g(){i.orderedModifiers.forEach(function(d){var x=d.name,w=d.options,T=w===void 0?{}:w,c=d.effect;if(typeof c=="function"){var h=c({state:i,name:x,instance:v,options:T}),A=function(){};f.push(h||A)}})}function b(){f.forEach(function(d){return d()}),f=[]}return v}}ut();var po=[nn,an,tn,Jt];ut({defaultModifiers:po});var fo=[nn,an,tn,Jt,Yr,Kr,no,Dr,Gr],mo=ut({defaultModifiers:fo});const sn=ne({arrowOffset:{type:Number,default:5}}),vo=["fixed","absolute"],go=ne({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:C(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:nt,default:"bottom"},popperOptions:{type:C(Object),default:()=>({})},strategy:{type:String,values:vo,default:"absolute"}}),ln=ne({...go,...sn,id:String,style:{type:C([String,Array,Object])},className:{type:C([String,Array,Object])},effect:{type:C(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:Boolean,trapping:Boolean,popperClass:{type:C([String,Array,Object])},popperStyle:{type:C([String,Array,Object])},referenceEl:{type:C(Object)},triggerTargetEl:{type:C(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Wt(["ariaLabel"])}),ho={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},bo=(e,t)=>{const n=j(!1),r=j();return{focusStartRef:r,trapped:n,onFocusAfterReleased:i=>{var f;((f=i.detail)==null?void 0:f.focusReason)!=="pointer"&&(r.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:i=>{e.visible&&!n.value&&(i.target&&(r.value=i.target),n.value=!0)},onFocusoutPrevented:i=>{e.trapping||(i.detail.focusReason==="pointer"&&i.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},yo=(e,t=[])=>{const{placement:n,strategy:r,popperOptions:o}=e,a={placement:n,strategy:r,...o,modifiers:[...Oo(e),...t]};return To(a,o?.modifiers),a},wo=e=>{if(Ee)return $t(e)};function Oo(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:0,bottom:0,left:0,right:0}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function To(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const xo=(e,t,n={})=>{const r={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const i=Ao(l);Object.assign(s.value,i)},requires:["computeStyles"]},o=R(()=>{const{onFirstUpdate:l,placement:i,strategy:f,modifiers:m}=p(n);return{onFirstUpdate:l,placement:i||"bottom",strategy:f||"absolute",modifiers:[...m||[],r,{name:"applyStyles",enabled:!1}]}}),a=Rn(),s=j({styles:{popper:{position:p(o).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return L(o,l=>{const i=p(a);i&&i.setOptions(l)},{deep:!0}),L([e,t],([l,i])=>{u(),!(!l||!i)&&(a.value=mo(l,i,p(o)))}),De(()=>{u()}),{state:R(()=>{var l;return{...((l=p(a))==null?void 0:l.state)||{}}}),styles:R(()=>p(s).styles),attributes:R(()=>p(s).attributes),update:()=>{var l;return(l=p(a))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=p(a))==null?void 0:l.forceUpdate()},instanceRef:R(()=>p(a))}};function Ao(e){const t=Object.keys(e.elements),n=Ot(t.map(o=>[o,e.styles[o]||{}])),r=Ot(t.map(o=>[o,e.attributes[o]]));return{styles:n,attributes:r}}const Eo=0,Ro=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:r,role:o}=le(et,void 0),a=j(),s=R(()=>e.arrowOffset),u=R(()=>({name:"eventListeners",enabled:!!e.visible})),l=R(()=>{var w;const T=p(a),c=(w=p(s))!=null?w:Eo;return{name:"arrow",enabled:!Gn(T),options:{element:T,padding:c}}}),i=R(()=>({onFirstUpdate:()=>{b()},...yo(e,[p(l),p(u)])})),f=R(()=>wo(e.referenceEl)||p(r)),{attributes:m,state:v,styles:g,update:b,forceUpdate:d,instanceRef:x}=xo(f,n,i);return L(x,w=>t.value=w,{flush:"sync"}),qe(()=>{L(()=>{var w,T;return(T=(w=p(f))==null?void 0:w.getBoundingClientRect)==null?void 0:T.call(w)},()=>{b()})}),{attributes:m,arrowRef:a,contentRef:n,instanceRef:x,state:v,styles:g,role:o,forceUpdate:d,update:b}},So=(e,{attributes:t,styles:n,role:r})=>{const{nextZIndex:o}=Sn(),a=be("popper"),s=R(()=>p(t).popper),u=j(Ge(e.zIndex)?e.zIndex:o()),l=R(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),i=R(()=>[{zIndex:p(u)},p(n).popper,e.popperStyle||{}]),f=R(()=>r.value==="dialog"?"false":void 0),m=R(()=>p(n).arrow||{});return{ariaModal:f,arrowStyle:m,contentAttrs:s,contentClass:l,contentStyle:i,contentZIndex:u,updateZIndex:()=>{u.value=Ge(e.zIndex)?e.zIndex:o()}}},Po=z({name:"ElPopperContent"}),Co=z({...Po,props:ln,emits:ho,setup(e,{expose:t,emit:n}){const r=e,{focusStartRef:o,trapped:a,onFocusAfterReleased:s,onFocusAfterTrapped:u,onFocusInTrap:l,onFocusoutPrevented:i,onReleaseRequested:f}=bo(r,n),{attributes:m,arrowRef:v,contentRef:g,styles:b,instanceRef:d,role:x,update:w}=Ro(r),{ariaModal:T,arrowStyle:c,contentAttrs:h,contentClass:A,contentStyle:S,updateZIndex:O}=So(r,{styles:b,attributes:m,role:x}),E=le(xt,void 0);Pe(qt,{arrowStyle:c,arrowRef:v}),E&&Pe(xt,{...E,addInputId:Je,removeInputId:Je});let P;const D=(k=!0)=>{w(),k&&O()},M=()=>{D(!1),r.visible&&r.focusOnShow?a.value=!0:r.visible===!1&&(a.value=!1)};return qe(()=>{L(()=>r.triggerTargetEl,(k,F)=>{P?.(),P=void 0;const N=p(k||g.value),V=p(F||g.value);Ae(N)&&(P=L([x,()=>r.ariaLabel,T,()=>r.id],B=>{["role","aria-label","aria-modal","id"].forEach((_,y)=>{Nt(B[y])?N.removeAttribute(_):N.setAttribute(_,B[y])})},{immediate:!0})),V!==N&&Ae(V)&&["role","aria-label","aria-modal","id"].forEach(B=>{V.removeAttribute(B)})},{immediate:!0}),L(()=>r.visible,M,{immediate:!0})}),De(()=>{P?.(),P=void 0}),t({popperContentRef:g,popperInstanceRef:d,updatePopper:D,contentStyle:S}),(k,F)=>(G(),He("div",Ye({ref_key:"contentRef",ref:g},p(h),{style:p(S),class:p(A),tabindex:"-1",onMouseenter:N=>k.$emit("mouseenter",N),onMouseleave:N=>k.$emit("mouseleave",N)}),[Ce(p($n),{trapped:p(a),"trap-on-focus-in":!0,"focus-trap-el":p(g),"focus-start-el":p(o),onFocusAfterTrapped:p(u),onFocusAfterReleased:p(s),onFocusin:p(l),onFocusoutPrevented:p(i),onReleaseRequested:p(f)},{default:ee(()=>[ie(k.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}});var Mo=ue(Co,[["__file","content.vue"]]);const ko=jt(tr),ct=Symbol("elTooltip"),un=ne({...Jn,...ln,appendTo:{type:Wn.to.type},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:C(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Wt(["ariaLabel"])}),cn=ne({...Vt,disabled:Boolean,trigger:{type:C([String,Array]),default:"hover"},triggerKeys:{type:C(Array),default:()=>[Ze.enter,Ze.numpadEnter,Ze.space]},focusOnTarget:Boolean}),Do=Lt({type:C(Boolean),default:null}),Bo=Lt({type:C(Function)}),Fo=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,r=[t],o={[e]:Do,[n]:Bo};return{useModelToggle:({indicator:s,toggleReason:u,shouldHideWhenRouteChanges:l,shouldProceed:i,onShow:f,onHide:m})=>{const v=Pn(),{emit:g}=v,b=v.props,d=R(()=>je(b[n])),x=R(()=>b[e]===null),w=O=>{s.value!==!0&&(s.value=!0,u&&(u.value=O),je(f)&&f(O))},T=O=>{s.value!==!1&&(s.value=!1,u&&(u.value=O),je(m)&&m(O))},c=O=>{if(b.disabled===!0||je(i)&&!i())return;const E=d.value&&Ee;E&&g(t,!0),(x.value||!E)&&w(O)},h=O=>{if(b.disabled===!0||!Ee)return;const E=d.value&&Ee;E&&g(t,!1),(x.value||!E)&&T(O)},A=O=>{zt(O)&&(b.disabled&&O?d.value&&g(t,!1):s.value!==O&&(O?w():T()))},S=()=>{s.value?h():c()};return L(()=>b[e],A),l&&v.appContext.config.globalProperties.$route!==void 0&&L(()=>({...v.proxy.$route}),()=>{l.value&&s.value&&h()}),qe(()=>{A(b[e])}),{hide:h,show:c,toggle:S,hasUpdateHandler:d}},useModelToggleProps:o,useModelToggleEmits:r}},{useModelToggleProps:Io,useModelToggleEmits:_o,useModelToggle:No}=Fo("visible"),jo=ne({...Ut,...Io,...un,...cn,...sn,showArrow:{type:Boolean,default:!0}}),Lo=[..._o,"before-show","before-hide","show","hide","open","close"],zo=(e,t)=>Qe(e)?e.includes(t):e===t,pe=(e,t,n)=>r=>{zo(p(e),t)&&n(r)},Ho=z({name:"ElTooltipTrigger"}),$o=z({...Ho,props:cn,setup(e,{expose:t}){const n=e,r=be("tooltip"),{controlled:o,id:a,open:s,onOpen:u,onClose:l,onToggle:i}=le(ct,void 0),f=j(null),m=()=>{if(p(o)||n.disabled)return!0},v=xe(n,"trigger"),g=Q(m,pe(v,"hover",h=>{u(h),n.focusOnTarget&&h.target&&Cn(()=>{Ht(h.target,{preventScroll:!0})})})),b=Q(m,pe(v,"hover",l)),d=Q(m,pe(v,"click",h=>{h.button===0&&i(h)})),x=Q(m,pe(v,"focus",u)),w=Q(m,pe(v,"focus",l)),T=Q(m,pe(v,"contextmenu",h=>{h.preventDefault(),i(h)})),c=Q(m,h=>{const A=Un(h);n.triggerKeys.includes(A)&&(h.preventDefault(),i(h))});return t({triggerRef:f}),(h,A)=>(G(),fe(p(pr),{id:p(a),"virtual-ref":h.virtualRef,open:p(s),"virtual-triggering":h.virtualTriggering,class:It(p(r).e("trigger")),onBlur:p(w),onClick:p(d),onContextmenu:p(T),onFocus:p(x),onMouseenter:p(g),onMouseleave:p(b),onKeydown:p(c)},{default:ee(()=>[ie(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Wo=ue($o,[["__file","trigger.vue"]]);const pn=()=>{const e=kn(),t=Ln(),n=R(()=>`${e.value}-popper-container-${t.prefix}`),r=R(()=>`#${n.value}`);return{id:n,selector:r}},qo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Uo=()=>{const{id:e,selector:t}=pn();return Mn(()=>{Ee&&(document.body.querySelector(t.value)||qo(e.value))}),{id:e,selector:t}},va=e=>Qe(e)?e[0]:e,Vo=e=>!e&&e!==0?[]:Qe(e)?e:[e],Ko=z({name:"ElTooltipContent",inheritAttrs:!1}),Zo=z({...Ko,props:un,setup(e,{expose:t}){const n=e,{selector:r}=pn(),o=be("tooltip"),a=j(),s=Dn(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef});let u;const{controlled:l,id:i,open:f,trigger:m,onClose:v,onOpen:g,onShow:b,onHide:d,onBeforeShow:x,onBeforeHide:w}=le(ct,void 0),T=R(()=>n.transition||`${o.namespace.value}-fade-in-linear`),c=R(()=>n.persistent);De(()=>{u?.()});const h=R(()=>p(c)?!0:p(f)),A=R(()=>n.disabled?!1:p(f)),S=R(()=>n.appendTo||r.value),O=R(()=>{var y;return(y=n.style)!=null?y:{}}),E=j(!0),P=()=>{d(),_()&&Ht(document.body,{preventScroll:!0}),E.value=!0},D=()=>{if(p(l))return!0},M=Q(D,()=>{n.enterable&&p(m)==="hover"&&g()}),k=Q(D,()=>{p(m)==="hover"&&v()}),F=()=>{var y,I;(I=(y=a.value)==null?void 0:y.updatePopper)==null||I.call(y),x?.()},N=()=>{w?.()},V=()=>{b()},B=()=>{n.virtualTriggering||v()},_=y=>{var I;const Z=(I=a.value)==null?void 0:I.popperContentRef,ye=y?.relatedTarget||document.activeElement;return Z?.contains(ye)};return L(()=>p(f),y=>{y?(E.value=!1,u=Hn(s,()=>{if(p(l))return;Vo(p(m)).every(Z=>Z!=="hover"&&Z!=="focus")&&v()})):u?.()},{flush:"post"}),L(()=>n.content,()=>{var y,I;(I=(y=a.value)==null?void 0:y.updatePopper)==null||I.call(y)}),t({contentRef:a,isFocusInsideContent:_}),(y,I)=>(G(),fe(p(qn),{disabled:!y.teleported,to:p(S)},{default:ee(()=>[p(h)||!E.value?(G(),fe(Bn,{key:0,name:p(T),appear:!p(c),onAfterLeave:P,onBeforeEnter:F,onAfterEnter:V,onBeforeLeave:N,persisted:""},{default:ee(()=>[_t(Ce(p(Mo),Ye({id:p(i),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":E.value,"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,"arrow-offset":y.arrowOffset,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,p(O)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:p(A),"z-index":y.zIndex,onMouseenter:p(M),onMouseleave:p(k),onBlur:B,onClose:p(v)}),{default:ee(()=>[ie(y.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","arrow-offset","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"]),[[Fn,p(A)]])]),_:3},8,["name","appear"])):$e("v-if",!0)]),_:3},8,["disabled","to"]))}});var Go=ue(Zo,[["__file","content.vue"]]);const Jo=z({name:"ElTooltip"}),Xo=z({...Jo,props:jo,emits:Lo,setup(e,{expose:t,emit:n}){const r=e;Uo();const o=be("tooltip"),a=zn(),s=j(),u=j(),l=()=>{var c;const h=p(s);h&&((c=h.popperInstanceRef)==null||c.update())},i=j(!1),f=j(),{show:m,hide:v,hasUpdateHandler:g}=No({indicator:i,toggleReason:f}),{onOpen:b,onClose:d}=Xn({showAfter:xe(r,"showAfter"),hideAfter:xe(r,"hideAfter"),autoClose:xe(r,"autoClose"),open:m,close:v}),x=R(()=>zt(r.visible)&&!g.value),w=R(()=>[o.b(),r.popperClass]);Pe(ct,{controlled:x,id:a,open:In(i),trigger:xe(r,"trigger"),onOpen:b,onClose:d,onToggle:c=>{p(i)?d(c):b(c)},onShow:()=>{n("show",f.value)},onHide:()=>{n("hide",f.value)},onBeforeShow:()=>{n("before-show",f.value)},onBeforeHide:()=>{n("before-hide",f.value)},updatePopper:l}),L(()=>r.disabled,c=>{c&&i.value&&(i.value=!1)});const T=c=>{var h;return(h=u.value)==null?void 0:h.isFocusInsideContent(c)};return _n(()=>i.value&&v()),t({popperRef:s,contentRef:u,isFocusInsideContent:T,updatePopper:l,onOpen:b,onClose:d,hide:v}),(c,h)=>(G(),fe(p(ko),{ref_key:"popperRef",ref:s,role:c.role},{default:ee(()=>[Ce(Wo,{disabled:c.disabled,trigger:c.trigger,"trigger-keys":c.triggerKeys,"virtual-ref":c.virtualRef,"virtual-triggering":c.virtualTriggering,"focus-on-target":c.focusOnTarget},{default:ee(()=>[c.$slots.default?ie(c.$slots,"default",{key:0}):$e("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering","focus-on-target"]),Ce(Go,{ref_key:"contentRef",ref:u,"aria-label":c.ariaLabel,"boundaries-padding":c.boundariesPadding,content:c.content,disabled:c.disabled,effect:c.effect,enterable:c.enterable,"fallback-placements":c.fallbackPlacements,"hide-after":c.hideAfter,"gpu-acceleration":c.gpuAcceleration,offset:c.offset,persistent:c.persistent,"popper-class":p(w),"popper-style":c.popperStyle,placement:c.placement,"popper-options":c.popperOptions,"arrow-offset":c.arrowOffset,pure:c.pure,"raw-content":c.rawContent,"reference-el":c.referenceEl,"trigger-target-el":c.triggerTargetEl,"show-after":c.showAfter,strategy:c.strategy,teleported:c.teleported,transition:c.transition,"virtual-triggering":c.virtualTriggering,"z-index":c.zIndex,"append-to":c.appendTo},{default:ee(()=>[ie(c.$slots,"content",{},()=>[c.rawContent?(G(),He("span",{key:0,innerHTML:c.content},null,8,["innerHTML"])):(G(),He("span",{key:1},Nn(c.content),1))]),c.showArrow?(G(),fe(p(or),{key:0})):$e("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","arrow-offset","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Yo=ue(Xo,[["__file","tooltip.vue"]]);const ga=jt(Yo),Qo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='darkorange'%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M9.75%2010c0-.69.56-1.25%201.25-1.25h2.25a1%201%200%200%201%201%201V10a.75.75%200%200%200%201.5%200v-.25a2.5%202.5%200%200%200-2.5-2.5H11A2.75%202.75%200%200%200%208.25%2010v4A2.75%202.75%200%200%200%2011%2016.75h2.25a2.5%202.5%200%200%200%202.5-2.5V14a.75.75%200%200%200-1.5%200v.25a1%201%200%200%201-1%201H11c-.69%200-1.25-.56-1.25-1.25z'%20stroke-width='1'%20stroke='%23fff'/%3e%3c/svg%3e",ea="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='pink'%20stroke-width='1'%20stroke='%23fff'%3e%3cpath%20d='M13.25%2011.25H10.5v-2.5h2.75a.75.75%200%200%201%20.75.75v1a.75.75%200%200%201-.75.75'/%3e%3cpath%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M10.25%207.25C9.56%207.25%209%207.81%209%208.5V16a.75.75%200%200%200%201.5%200v-3.25h.625l2.775%203.7a.75.75%200%201%200%201.2-.9l-2.1-2.8h.25a2.25%202.25%200%200%200%202.25-2.25v-1a2.25%202.25%200%200%200-2.25-2.25z'/%3e%3c/g%3e%3c/svg%3e",ta="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='purple'%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M9.75%208a.75.75%200%200%200-1.5%200v6A2.75%202.75%200%200%200%2011%2016.75h2A2.75%202.75%200%200%200%2015.75%2014V8a.75.75%200%200%200-1.5%200v6c0%20.69-.56%201.25-1.25%201.25h-2c-.69%200-1.25-.56-1.25-1.25z'%20stroke-width='1'%20stroke='%23fff'/%3e%3c/svg%3e",na="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='lightblue'%20stroke-width='1'%20stroke='%23fff'%3e%3cpath%20d='M10.25%2015.25v-6.5H12a2.75%202.75%200%200%201%202.75%202.75v1A2.75%202.75%200%200%201%2012%2015.25z'/%3e%3cpath%20d='M10.565%202.075a3.33%203.33%200%200%201%202.87%200c.394.189.755.497%201.26.928l.079.066c.48.41.939.604%201.58.655l.102.008c.662.053%201.135.09%201.547.236a3.33%203.33%200%200%201%202.03%202.029c.145.412.182.885.235%201.547l.008.102c.051.641.246%201.1.655%201.58l.066.078c.431.506.74.867.928%201.261a3.33%203.33%200%200%201%200%202.87c-.189.394-.497.755-.928%201.26l-.066.079c-.418.49-.605.951-.655%201.58l-.008.102c-.053.662-.09%201.135-.236%201.547a3.33%203.33%200%200%201-2.029%202.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33%203.33%200%200%201-2.87%200c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56%202.56%200%200%200-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33%203.33%200%200%201-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56%202.56%200%200%200-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33%203.33%200%200%201%200-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56%202.56%200%200%200%20.655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33%203.33%200%200%201%202.029-2.03c.412-.145.885-.182%201.547-.235l.102-.008a2.56%202.56%200%200%200%201.58-.655l.078-.066c.506-.431.867-.74%201.261-.928M10%207.25c-.69%200-1.25.56-1.25%201.25v7c0%20.69.56%201.25%201.25%201.25h2a4.25%204.25%200%200%200%204.25-4.25v-1A4.25%204.25%200%200%200%2012%207.25z'/%3e%3c/g%3e%3c/svg%3e",ra=`# Read 关于查询

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
\`\`\``;class fn{static state=jn([{activeUrl:Qo,isActive:!1,id:"useFormHook",activeLabel:"增Create：表单hook",fileList:[{name:"源文件useForm.ts",content:Vn}]},{activeUrl:ea,isActive:!1,id:"usePageApiHook",activeLabel:"查Read：分页hook",fileList:[{name:"分页介绍",content:ra,lang:"md"},{name:"源文件usePageApi.ts",content:oa}]},{activeUrl:ta,isActive:!1,id:"update-id",activeLabel:"更新Update：基本跟新增一样，来看看层次结构吧",fileList:[{name:"说明",content:ia,lang:"md"},{name:"接口层：二封Axios",content:Kn},{name:"接口层：api模块定义",content:Zn},{name:"model层：业务类的编写",content:aa},{name:"viewModel层组件",content:sa}]},{activeUrl:na,isActive:!1,id:"delete-id",activeLabel:"删Delete：这里暂时没想到写什么"}]);static setMissionFlag(t,n){const r=fn.state.find(o=>o.id===t);r&&(r.isActive=n)}}export{fn as C,ga as E,nt as a,Vo as c,va as e,un as u};
