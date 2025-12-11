import{F as de}from"./ck_FilesViewer.CDhZscVj.js";import{ar as j,a3 as q,aP as K,Y as I,al as H,r as M,Z as ie,c as k,aS as J,d as E,$ as z,a as F,o as V,b as C,w as W,bb as Y,u as e,a2 as B,j as h,aR as Z,e as N,f as S,t as w,a8 as Q,n as ue,a4 as O,s as me,a6 as ce,g as pe,aw as fe,a5 as be,F as P,i as G,k as ve,am as _e,aa as ge,aj as ye,aJ as X,ac as ke,p as s,m as b,_ as ee}from"./en_index.xCAGLME6.js";import{o as Ve,u as he,j as Fe,l as Ce,g as Ee,h as Re,E as xe}from"./ck_useForm.B3ynEMFt.js";import{u as Se,e as Be,a as we,b as Ie,E as $e}from"./ck_el-input.BO_4ZvhT.js";import{C as U,U as D,_ as L,u as Me,d as Pe}from"./ck_aria.BaKc_5mX.js";import{u as Ge}from"./ck_index.BPRuhh8b.js";import{a as ze}from"./ck_constants.DcN1x66V.js";import{u as Ne}from"./ck_useForm.DSbdktPA.js";import"./ck__commonjsHelpers.Cpj98o6Y.js";const ae=I({modelValue:{type:[String,Number,Boolean],default:void 0},size:H,disabled:{type:Boolean,default:void 0},label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),Ue=I({...ae,border:Boolean}),oe={[D]:r=>j(r)||q(r)||K(r),[U]:r=>j(r)||q(r)||K(r)},le=Symbol("radioGroupKey"),ne=(r,p)=>{const a=M(),l=ie(le,void 0),c=k(()=>!!l),_=k(()=>J(r.value)?r.label:r.value),m=k({get(){return c.value?l.modelValue:r.modelValue},set(d){c.value?l.changeEvent(d):p&&p(D,d),a.value.checked=r.modelValue===_.value}}),v=Se(k(()=>l?.size)),n=Be(k(()=>l?.disabled)),o=M(!1),u=k(()=>n.value||c.value&&m.value!==_.value?-1:0);return Ge({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},k(()=>c.value&&J(r.value))),{radioRef:a,isGroup:c,radioGroup:l,focus:o,size:v,disabled:n,tabIndex:u,modelValue:m,actualValue:_}},De=E({name:"ElRadio"}),Le=E({...De,props:Ue,emits:oe,setup(r,{emit:p}){const a=r,l=z("radio"),{radioRef:c,radioGroup:_,focus:m,size:v,disabled:n,modelValue:o,actualValue:u}=ne(a,p);function d(){Q(()=>p(U,o.value))}return(y,R)=>{var t;return V(),F("label",{class:h([e(l).b(),e(l).is("disabled",e(n)),e(l).is("focus",e(m)),e(l).is("bordered",y.border),e(l).is("checked",e(o)===e(u)),e(l).m(e(v))])},[C("span",{class:h([e(l).e("input"),e(l).is("disabled",e(n)),e(l).is("checked",e(o)===e(u))])},[W(C("input",{ref_key:"radioRef",ref:c,"onUpdate:modelValue":f=>Z(o)?o.value=f:null,class:h(e(l).e("original")),value:e(u),name:y.name||((t=e(_))==null?void 0:t.name),disabled:e(n),checked:e(o)===e(u),type:"radio",onFocus:f=>m.value=!0,onBlur:f=>m.value=!1,onChange:d,onClick:B(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[Y,e(o)]]),C("span",{class:h(e(l).e("inner"))},null,2)],2),C("span",{class:h(e(l).e("label")),onKeydown:B(()=>{},["stop"])},[N(y.$slots,"default",{},()=>[S(w(y.label),1)])],42,["onKeydown"])],2)}}});var te=L(Le,[["__file","radio.vue"]]);const Te=I({...ae}),Ae=E({name:"ElRadioButton"}),je=E({...Ae,props:Te,setup(r){const p=r,a=z("radio"),{radioRef:l,focus:c,size:_,disabled:m,modelValue:v,radioGroup:n,actualValue:o}=ne(p),u=k(()=>({backgroundColor:n?.fill||"",borderColor:n?.fill||"",boxShadow:n?.fill?`-1px 0 0 0 ${n.fill}`:"",color:n?.textColor||""}));return(d,y)=>{var R;return V(),F("label",{class:h([e(a).b("button"),e(a).is("active",e(v)===e(o)),e(a).is("disabled",e(m)),e(a).is("focus",e(c)),e(a).bm("button",e(_))])},[W(C("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":t=>Z(v)?v.value=t:null,class:h(e(a).be("button","original-radio")),value:e(o),type:"radio",name:d.name||((R=e(n))==null?void 0:R.name),disabled:e(m),onFocus:t=>c.value=!0,onBlur:t=>c.value=!1,onClick:B(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[Y,e(v)]]),C("span",{class:h(e(a).be("button","inner")),style:ue(e(v)===e(o)?e(u):{}),onKeydown:B(()=>{},["stop"])},[N(d.$slots,"default",{},()=>[S(w(d.label),1)])],46,["onKeydown"])],2)}}});var T=L(je,[["__file","radio-button.vue"]]);const qe=I({id:{type:String,default:void 0},size:H,disabled:{type:Boolean,default:void 0},modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},options:{type:O(Array)},props:{type:O(Object),default:()=>se},type:{type:String,values:["radio","button"],default:"radio"},...ze(["ariaLabel"])}),Ke=oe,se={label:"label",value:"value",disabled:"disabled"},Je=E({name:"ElRadioGroup"}),Oe=E({...Je,props:qe,emits:Ke,setup(r,{emit:p}){const a=r,l=z("radio"),c=Me(),_=M(),{formItem:m}=we(),{inputId:v,isLabeledByFormItem:n}=Ie(a,{formItemContext:m}),o=t=>{p(D,t),Q(()=>p(U,t))};me(()=>{const t=_.value.querySelectorAll("[type=radio]"),f=t[0];!Array.from(t).some(g=>g.checked)&&f&&(f.tabIndex=0)});const u=k(()=>a.name||c.value),d=k(()=>({...se,...a.props})),y=t=>{const{label:f,value:g,disabled:x}=d.value,i={label:t[f],value:t[g],disabled:t[x]};return{...Ve(t,[f,g,x]),...i}},R=k(()=>a.type==="button"?T:te);return ce(le,pe({...fe(a),changeEvent:o,name:u})),be(()=>a.modelValue,(t,f)=>{a.validateEvent&&!ye(t,f)&&m?.validate("change").catch(g=>Pe())}),(t,f)=>(V(),F("div",{id:e(v),ref_key:"radioGroupRef",ref:_,class:h(e(l).b("group")),role:"radiogroup","aria-label":e(n)?void 0:t.ariaLabel||"radio-group","aria-labelledby":e(n)?e(m).labelId:void 0},[N(t.$slots,"default",{},()=>[(V(!0),F(P,null,G(t.options,(g,x)=>(V(),ve(ge(e(R)),_e({key:x},y(g)),null,16))),128))])],10,["id","aria-label","aria-labelledby"]))}});var re=L(Oe,[["__file","radio-group.vue"]]);const He=ke(te,{RadioButton:T,RadioGroup:re}),We=X(re);X(T);const Ye={class:"crud-form"},Ze={class:"id-label"},Qe={class:"json"},Xe=E({__name:"CrudFormPure",setup(r){const p=["游戏爱好者","动漫爱好者","摄影爱好者","旅游爱好者","美食爱好者"],{formState:a,resetForm:l,setForm:c}=he({name:"",age:18,sex:"unknown",email:"",tags:[],books:[]}),_=()=>{const n={name:"张三",age:Math.floor(Math.random()*100),sex:["male","female"][Math.floor(Math.random()*2)],email:`zhangsan${Math.floor(Math.random()*100)}@qq.com`,tags:p.filter(()=>Math.random()>.5),books:[{id:1,name:"Vue3的reactive即使嵌套也不丢失双向绑定，很优雅"}]};c(n)},m=()=>{const n=a.books.length+1,o=Math.max(0,...a.books.map(u=>Number(u.id)||0));a.books.push({id:o+1,name:`未命名数据${n}`})},v=n=>{a.books.splice(n,1)};return(n,o)=>{const u=$e,d=Ce,y=He,R=We,t=Re,f=Ee,g=xe,x=Fe;return V(),F("div",Ye,[s(x,{model:e(a),"label-width":"80px",inline:!1},{default:b(()=>[s(d,{label:"名称"},{default:b(()=>[s(u,{modelValue:e(a).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(a).name=i)},null,8,["modelValue"])]),_:1}),s(d,{label:"性别"},{default:b(()=>[s(R,{modelValue:e(a).sex,"onUpdate:modelValue":o[1]||(o[1]=i=>e(a).sex=i)},{default:b(()=>[s(y,{label:"男",value:"male"}),s(y,{label:"女",value:"female"}),s(y,{label:"未知",value:"unknown"})]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"年龄"},{default:b(()=>[s(u,{modelValue:e(a).age,"onUpdate:modelValue":o[2]||(o[2]=i=>e(a).age=i)},null,8,["modelValue"])]),_:1}),s(d,{label:"邮箱"},{default:b(()=>[s(u,{modelValue:e(a).email,"onUpdate:modelValue":o[3]||(o[3]=i=>e(a).email=i)},null,8,["modelValue"])]),_:1}),s(d,{label:"标签"},{default:b(()=>[s(f,{modelValue:e(a).tags,"onUpdate:modelValue":o[4]||(o[4]=i=>e(a).tags=i)},{default:b(()=>[(V(),F(P,null,G(p,(i,$)=>s(t,{key:$,label:i},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"书籍"},{default:b(()=>[s(g,{type:"primary",link:"",size:"default",onClick:m},{default:b(()=>[...o[5]||(o[5]=[S("新增书籍",-1)])]),_:1}),(V(!0),F(P,null,G(e(a).books,(i,$)=>(V(),F("div",{key:i.id,class:"full-input"},[C("div",Ze,"id: "+w(i.id),1),s(u,{type:"textarea",modelValue:i.name,"onUpdate:modelValue":A=>i.name=A},null,8,["modelValue","onUpdate:modelValue"]),s(g,{type:"danger",size:"default",link:"",onClick:A=>v($)},{default:b(()=>[...o[6]||(o[6]=[S("删除",-1)])]),_:1},8,["onClick"])]))),128))]),_:1}),s(d,null,{default:b(()=>[s(g,{onClick:e(l)},{default:b(()=>[...o[7]||(o[7]=[S("清空/重置默认值",-1)])]),_:1},8,["onClick"]),s(g,{type:"primary",onClick:_},{default:b(()=>[...o[8]||(o[8]=[S("设置随机值",-1)])]),_:1})]),_:1})]),_:1},8,["model"]),C("div",Qe," 实际只需要管理一个对象："+w(e(a)),1)])}}}),ea=ee(Xe,[["__scopeId","data-v-3033b440"]]),aa=`# 最基础的useForm
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
`,oa=[{content:Ne,name:"hook：useReactiveForm.ts"},{content:aa,name:"组件使用例子",lang:"md"}],la={class:"flex-wrap"},na=E({__name:"CrudForm",setup(r){return(p,a)=>(V(),F("div",la,[s(ea,{class:"form"}),s(de,{class:"viewer",fileList:e(oa)},null,8,["fileList"])]))}}),fa=ee(na,[["__scopeId","data-v-06fa04ec"]]);export{fa as default};
