import{F as de}from"./ck_FilesViewer.VHzS85Q-.js";import{as as T,a4 as q,aN as A,Y as I,am as O,q as w,Z as ue,c as y,aQ as K,d as C,$ as G,b as F,o as h,g as x,w as J,bb as H,u as e,a2 as B,n as V,aP as Q,j as N,f as R,t as S,a9 as W,a3 as ie,a5 as j,k as me,a7 as ce,r as pe,ax as fe,a6 as be,F as M,e as P,l as ve,an as _e,ak as ge,aI as Y,ad as ke,h as t,m as b,_ as Z}from"./en_index.DvMw2WEb.js";import{u as ye,h as he,j as Ve,l as Fe,f as xe,E as Ce}from"./ck_useForm.Df0mNbNP.js";import{u as Ee,e as Re,a as Be,b as Se,E as Ie}from"./ck_el-input.DvtV9625.js";import{C as z,U,_ as D,u as $e,d as we}from"./ck_aria.BfdkQAQk.js";import{u as Me}from"./ck_index.Ci9jK-W1.js";import{a as Pe}from"./ck_constants.Bm48iukD.js";import{u as Ge}from"./ck_useForm.DSbdktPA.js";import"./ck__commonjsHelpers.Cpj98o6Y.js";const X=I({modelValue:{type:[String,Number,Boolean],default:void 0},size:O,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),Ne=I({...X,border:Boolean}),ee={[U]:s=>T(s)||q(s)||A(s),[z]:s=>T(s)||q(s)||A(s)},ae=Symbol("radioGroupKey"),oe=(s,f)=>{const a=w(),l=ue(ae,void 0),p=y(()=>!!l),_=y(()=>K(s.value)?s.label:s.value),i=y({get(){return p.value?l.modelValue:s.modelValue},set(d){p.value?l.changeEvent(d):f&&f(U,d),a.value.checked=s.modelValue===_.value}}),v=Ee(y(()=>l?.size)),n=Re(y(()=>l?.disabled)),o=w(!1),u=y(()=>n.value||p.value&&i.value!==_.value?-1:0);return Me({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},y(()=>p.value&&K(s.value))),{radioRef:a,isGroup:p,radioGroup:l,focus:o,size:v,disabled:n,tabIndex:u,modelValue:i,actualValue:_}},ze=C({name:"ElRadio"}),Ue=C({...ze,props:Ne,emits:ee,setup(s,{emit:f}){const a=s,l=G("radio"),{radioRef:p,radioGroup:_,focus:i,size:v,disabled:n,modelValue:o,actualValue:u}=oe(a,f);function d(){W(()=>f(z,o.value))}return(g,r)=>{var m;return h(),F("label",{class:V([e(l).b(),e(l).is("disabled",e(n)),e(l).is("focus",e(i)),e(l).is("bordered",g.border),e(l).is("checked",e(o)===e(u)),e(l).m(e(v))])},[x("span",{class:V([e(l).e("input"),e(l).is("disabled",e(n)),e(l).is("checked",e(o)===e(u))])},[J(x("input",{ref_key:"radioRef",ref:p,"onUpdate:modelValue":k=>Q(o)?o.value=k:null,class:V(e(l).e("original")),value:e(u),name:g.name||((m=e(_))==null?void 0:m.name),disabled:e(n),checked:e(o)===e(u),type:"radio",onFocus:k=>i.value=!0,onBlur:k=>i.value=!1,onChange:d,onClick:B(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[H,e(o)]]),x("span",{class:V(e(l).e("inner"))},null,2)],2),x("span",{class:V(e(l).e("label")),onKeydown:B(()=>{},["stop"])},[N(g.$slots,"default",{},()=>[R(S(g.label),1)])],42,["onKeydown"])],2)}}});var le=D(Ue,[["__file","radio.vue"]]);const De=I({...X}),Le=C({name:"ElRadioButton"}),Te=C({...Le,props:De,setup(s){const f=s,a=G("radio"),{radioRef:l,focus:p,size:_,disabled:i,modelValue:v,radioGroup:n,actualValue:o}=oe(f),u=y(()=>({backgroundColor:n?.fill||"",borderColor:n?.fill||"",boxShadow:n?.fill?`-1px 0 0 0 ${n.fill}`:"",color:n?.textColor||""}));return(d,g)=>{var r;return h(),F("label",{class:V([e(a).b("button"),e(a).is("active",e(v)===e(o)),e(a).is("disabled",e(i)),e(a).is("focus",e(p)),e(a).bm("button",e(_))])},[J(x("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":m=>Q(v)?v.value=m:null,class:V(e(a).be("button","original-radio")),value:e(o),type:"radio",name:d.name||((r=e(n))==null?void 0:r.name),disabled:e(i),onFocus:m=>p.value=!0,onBlur:m=>p.value=!1,onClick:B(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[H,e(v)]]),x("span",{class:V(e(a).be("button","inner")),style:ie(e(v)===e(o)?e(u):{}),onKeydown:B(()=>{},["stop"])},[N(d.$slots,"default",{},()=>[R(S(d.label),1)])],46,["onKeydown"])],2)}}});var ne=D(Te,[["__file","radio-button.vue"]]);const qe=I({id:{type:String,default:void 0},size:O,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},options:{type:j(Array)},props:{type:j(Object),default:()=>te},...Pe(["ariaLabel"])}),Ae=ee,te={label:"label",value:"value",disabled:"disabled"},Ke=C({name:"ElRadioGroup"}),je=C({...Ke,props:qe,emits:Ae,setup(s,{emit:f}){const a=s,l=G("radio"),p=$e(),_=w(),{formItem:i}=Be(),{inputId:v,isLabeledByFormItem:n}=Se(a,{formItemContext:i}),o=r=>{f(U,r),W(()=>f(z,r))};me(()=>{const r=_.value.querySelectorAll("[type=radio]"),m=r[0];!Array.from(r).some(k=>k.checked)&&m&&(m.tabIndex=0)});const u=y(()=>a.name||p.value),d=y(()=>({...te,...a.props})),g=r=>{const m={label:r[d.value.label],value:r[d.value.value],disabled:r[d.value.disabled]};return{...r,...m}};return ce(ae,pe({...fe(a),changeEvent:o,name:u})),be(()=>a.modelValue,(r,m)=>{a.validateEvent&&!ge(r,m)&&i?.validate("change").catch(k=>we())}),(r,m)=>(h(),F("div",{id:e(v),ref_key:"radioGroupRef",ref:_,class:V(e(l).b("group")),role:"radiogroup","aria-label":e(n)?void 0:r.ariaLabel||"radio-group","aria-labelledby":e(n)?e(i).labelId:void 0},[N(r.$slots,"default",{},()=>[(h(!0),F(M,null,P(a.options,(k,E)=>(h(),ve(le,_e({key:E},g(k)),null,16))),128))])],10,["id","aria-label","aria-labelledby"]))}});var se=D(je,[["__file","radio-group.vue"]]);const Oe=ke(le,{RadioButton:ne,RadioGroup:se}),Je=Y(se);Y(ne);const He={class:"crud-form"},Qe={class:"id-label"},We={class:"json"},Ye=C({__name:"CrudFormPure",setup(s){const f=["游戏爱好者","动漫爱好者","摄影爱好者","旅游爱好者","美食爱好者"],{formState:a,resetForm:l,setForm:p}=ye({name:"",age:18,sex:"unknown",email:"",tags:[],books:[]}),_=()=>{const n={name:"张三",age:Math.floor(Math.random()*100),sex:["male","female"][Math.floor(Math.random()*2)],email:`zhangsan${Math.floor(Math.random()*100)}@qq.com`,tags:f.filter(()=>Math.random()>.5),books:[{id:1,name:"Vue3的reactive即使嵌套也不丢失双向绑定，很优雅"}]};p(n)},i=()=>{const n=a.books.length+1,o=Math.max(0,...a.books.map(u=>Number(u.id)||0));a.books.push({id:o+1,name:`未命名数据${n}`})},v=n=>{a.books.splice(n,1)};return(n,o)=>{const u=Ie,d=Ve,g=Oe,r=Je,m=xe,k=Fe,E=Ce,re=he;return h(),F("div",He,[t(re,{model:e(a),"label-width":"80px",inline:!1},{default:b(()=>[t(d,{label:"名称"},{default:b(()=>[t(u,{modelValue:e(a).name,"onUpdate:modelValue":o[0]||(o[0]=c=>e(a).name=c)},null,8,["modelValue"])]),_:1}),t(d,{label:"性别"},{default:b(()=>[t(r,{modelValue:e(a).sex,"onUpdate:modelValue":o[1]||(o[1]=c=>e(a).sex=c)},{default:b(()=>[t(g,{label:"男",value:"male"}),t(g,{label:"女",value:"female"}),t(g,{label:"未知",value:"unknown"})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"年龄"},{default:b(()=>[t(u,{modelValue:e(a).age,"onUpdate:modelValue":o[2]||(o[2]=c=>e(a).age=c)},null,8,["modelValue"])]),_:1}),t(d,{label:"邮箱"},{default:b(()=>[t(u,{modelValue:e(a).email,"onUpdate:modelValue":o[3]||(o[3]=c=>e(a).email=c)},null,8,["modelValue"])]),_:1}),t(d,{label:"标签"},{default:b(()=>[t(k,{modelValue:e(a).tags,"onUpdate:modelValue":o[4]||(o[4]=c=>e(a).tags=c)},{default:b(()=>[(h(),F(M,null,P(f,(c,$)=>t(m,{key:$,label:c},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"书籍"},{default:b(()=>[t(E,{type:"primary",link:"",size:"default",onClick:i},{default:b(()=>[...o[5]||(o[5]=[R("新增书籍",-1)])]),_:1}),(h(!0),F(M,null,P(e(a).books,(c,$)=>(h(),F("div",{key:c.id,class:"full-input"},[x("div",Qe,"id: "+S(c.id),1),t(u,{type:"textarea",modelValue:c.name,"onUpdate:modelValue":L=>c.name=L},null,8,["modelValue","onUpdate:modelValue"]),t(E,{type:"danger",size:"default",link:"",onClick:L=>v($)},{default:b(()=>[...o[6]||(o[6]=[R("删除",-1)])]),_:1},8,["onClick"])]))),128))]),_:1}),t(d,null,{default:b(()=>[t(E,{onClick:e(l)},{default:b(()=>[...o[7]||(o[7]=[R("清空/重置默认值",-1)])]),_:1},8,["onClick"]),t(E,{type:"primary",onClick:_},{default:b(()=>[...o[8]||(o[8]=[R("设置随机值",-1)])]),_:1})]),_:1})]),_:1},8,["model"]),x("div",We," 实际只需要管理一个对象："+S(e(a)),1)])}}}),Ze=Z(Ye,[["__scopeId","data-v-3033b440"]]),Xe=`# 最基础的useForm
+ 例如左侧例子中，使用的就是这个hook
\`\`\`JS
const { formState: form, resetForm, setForm } = useReactiveForm({
  name: '',
  age: 18, // 年龄默认值是18
  sex: 'unknown', // 性别默认值是未知
  email: '',
  tags: [], // 简单数组 string[]
  books: [], // 嵌套的数据：体现双向绑定的体验升级
});
\`\`\`
+ 模板中使用：
\`\`\`html
<!-- else -->
<el-form-item label="名称">
  <el-input v-model="form.name"></el-input>
</el-form-item>
<el-form-item label="性别">
  <el-radio-group v-model="form.sex">
    <el-radio label="男" value="male"></el-radio>
    <el-radio label="女" value="female"></el-radio>
    <el-radio label="未知" value="unknown"></el-radio>
  </el-radio-group>
</el-form-item>
<el-form-item label="年龄">
  <el-input v-model="form.age"></el-input>
</el-form-item>
<!-- more -->
\`\`\`

+ 使用方法时也是即开即用：\`setForm\` 被 \`setRandom\` 包裹了一层模拟我们编辑时必须使用的回填
\`\`\`JS
const setRandom = () => {
  const params = {
    name: '张三',
    age: Math.floor(Math.random() * 100),
    sex: ['male', 'female'][Math.floor(Math.random() * 2)],
    email: \`zhangsan\${Math.floor(Math.random() * 100)}@qq.com\`,
    tags: tags.filter(() => Math.random() > 0.5),
    books: [{ id: 1, name: 'Vue3的reactive即使嵌套也不丢失双向绑定，很优雅' }],
  }
  // 假设 params 是需要回显和编辑的数据
  setForm(params);
}
\`\`\`
+ \`resetForm\` 直接模板使用
\`\`\`html
<el-form-item>
  <el-button @click="resetForm">清空/重置默认值</el-button>
  <el-button type="primary" @click="setRandom">设置随机值</el-button>
</el-form-item>
\`\`\`
`,ea=[{content:Ge,name:"hook：useReactiveForm.ts"},{content:Xe,name:"组件使用例子",lang:"md"}],aa={class:"flex-wrap"},oa=C({__name:"CrudForm",setup(s){return(f,a)=>(h(),F("div",aa,[t(Ze,{class:"form"}),t(de,{class:"viewer",fileList:e(ea)},null,8,["fileList"])]))}}),ca=Z(oa,[["__scopeId","data-v-06fa04ec"]]);export{ca as default};
