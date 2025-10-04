import{F as ie}from"./FilesViewer-CYjLaW2n.js";import{as as j,a2 as L,az as T,W as w,al as O,p as $,X as ue,c as g,aU as q,d as E,Y as U,b as F,o as h,f as C,q as W,bg as J,u as e,a0 as x,n as V,aA as Q,i as z,l as S,t as B,a7 as X,a1 as de,a3 as K,j as me,a5 as ce,r as pe,aw as fe,a4 as be,F as M,e as P,k as ve,am as _e,aj as ye,aP as Y,ab as ke,g as t,w as b,_ as H}from"./index-HiJma34q.js";import{C as G,U as N,u as ge,o as he,K as Ve,j as Fe,l as Ce,p as Ee,S as Re,W as Se,X as xe,s as Be,Y as we,P as Ie,F as $e}from"./useForm-BsVigwyd.js";import{_ as D,a as Me,g as Pe}from"./aria-CotX_tOe.js";import"./_commonjsHelpers-CqkleIqs.js";const Z=w({modelValue:{type:[String,Number,Boolean],default:void 0},size:O,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),Ue=w({...Z,border:Boolean}),ee={[N]:s=>j(s)||L(s)||T(s),[G]:s=>j(s)||L(s)||T(s)},ae=Symbol("radioGroupKey"),oe=(s,f)=>{const a=$(),l=ue(ae,void 0),p=g(()=>!!l),_=g(()=>q(s.value)?s.label:s.value),d=g({get(){return p.value?l.modelValue:s.modelValue},set(i){p.value?l.changeEvent(i):f&&f(N,i),a.value.checked=s.modelValue===_.value}}),v=ge(g(()=>l?.size)),n=he(g(()=>l?.disabled)),o=$(!1),u=g(()=>n.value||p.value&&d.value!==_.value?-1:0);return Ve({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},g(()=>p.value&&q(s.value))),{radioRef:a,isGroup:p,radioGroup:l,focus:o,size:v,disabled:n,tabIndex:u,modelValue:d,actualValue:_}},ze=E({name:"ElRadio"}),Ge=E({...ze,props:Ue,emits:ee,setup(s,{emit:f}){const a=s,l=U("radio"),{radioRef:p,radioGroup:_,focus:d,size:v,disabled:n,modelValue:o,actualValue:u}=oe(a,f);function i(){X(()=>f(G,o.value))}return(y,r)=>{var m;return h(),F("label",{class:V([e(l).b(),e(l).is("disabled",e(n)),e(l).is("focus",e(d)),e(l).is("bordered",y.border),e(l).is("checked",e(o)===e(u)),e(l).m(e(v))])},[C("span",{class:V([e(l).e("input"),e(l).is("disabled",e(n)),e(l).is("checked",e(o)===e(u))])},[W(C("input",{ref_key:"radioRef",ref:p,"onUpdate:modelValue":k=>Q(o)?o.value=k:null,class:V(e(l).e("original")),value:e(u),name:y.name||((m=e(_))==null?void 0:m.name),disabled:e(n),checked:e(o)===e(u),type:"radio",onFocus:k=>d.value=!0,onBlur:k=>d.value=!1,onChange:i,onClick:x(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[J,e(o)]]),C("span",{class:V(e(l).e("inner"))},null,2)],2),C("span",{class:V(e(l).e("label")),onKeydown:x(()=>{},["stop"])},[z(y.$slots,"default",{},()=>[S(B(y.label),1)])],42,["onKeydown"])],2)}}});var le=D(Ge,[["__file","radio.vue"]]);const Ne=w({...Z}),De=E({name:"ElRadioButton"}),Ae=E({...De,props:Ne,setup(s){const f=s,a=U("radio"),{radioRef:l,focus:p,size:_,disabled:d,modelValue:v,radioGroup:n,actualValue:o}=oe(f),u=g(()=>({backgroundColor:n?.fill||"",borderColor:n?.fill||"",boxShadow:n?.fill?`-1px 0 0 0 ${n.fill}`:"",color:n?.textColor||""}));return(i,y)=>{var r;return h(),F("label",{class:V([e(a).b("button"),e(a).is("active",e(v)===e(o)),e(a).is("disabled",e(d)),e(a).is("focus",e(p)),e(a).bm("button",e(_))])},[W(C("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":m=>Q(v)?v.value=m:null,class:V(e(a).be("button","original-radio")),value:e(o),type:"radio",name:i.name||((r=e(n))==null?void 0:r.name),disabled:e(d),onFocus:m=>p.value=!0,onBlur:m=>p.value=!1,onClick:x(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[J,e(v)]]),C("span",{class:V(e(a).be("button","inner")),style:de(e(v)===e(o)?e(u):{}),onKeydown:x(()=>{},["stop"])},[z(i.$slots,"default",{},()=>[S(B(i.label),1)])],46,["onKeydown"])],2)}}});var ne=D(Ae,[["__file","radio-button.vue"]]);const je=w({id:{type:String,default:void 0},size:O,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},options:{type:K(Array)},props:{type:K(Object),default:()=>te},...Me(["ariaLabel"])}),Le=ee,te={label:"label",value:"value",disabled:"disabled"},Te=E({name:"ElRadioGroup"}),qe=E({...Te,props:je,emits:Le,setup(s,{emit:f}){const a=s,l=U("radio"),p=Pe(),_=$(),{formItem:d}=Fe(),{inputId:v,isLabeledByFormItem:n}=Ce(a,{formItemContext:d}),o=r=>{f(N,r),X(()=>f(G,r))};me(()=>{const r=_.value.querySelectorAll("[type=radio]"),m=r[0];!Array.from(r).some(k=>k.checked)&&m&&(m.tabIndex=0)});const u=g(()=>a.name||p.value),i=g(()=>({...te,...a.props})),y=r=>{const m={label:r[i.value.label],value:r[i.value.value],disabled:r[i.value.disabled]};return{...r,...m}};return ce(ae,pe({...fe(a),changeEvent:o,name:u})),be(()=>a.modelValue,(r,m)=>{a.validateEvent&&!ye(r,m)&&d?.validate("change").catch(k=>Ee())}),(r,m)=>(h(),F("div",{id:e(v),ref_key:"radioGroupRef",ref:_,class:V(e(l).b("group")),role:"radiogroup","aria-label":e(n)?void 0:r.ariaLabel||"radio-group","aria-labelledby":e(n)?e(d).labelId:void 0},[z(r.$slots,"default",{},()=>[(h(!0),F(M,null,P(a.options,(k,R)=>(h(),ve(le,_e({key:R},y(k)),null,16))),128))])],10,["id","aria-label","aria-labelledby"]))}});var se=D(qe,[["__file","radio-group.vue"]]);const Ke=ke(le,{RadioButton:ne,RadioGroup:se}),Oe=Y(se);Y(ne);const We={class:"crud-form"},Je={class:"id-label"},Qe={class:"json"},Xe=E({__name:"CrudFormPure",setup(s){const f=["游戏爱好者","动漫爱好者","摄影爱好者","旅游爱好者","美食爱好者"],{formState:a,resetForm:l,setForm:p}=Re({name:"",age:18,sex:"unknown",email:"",tags:[],books:[]}),_=()=>{const n={name:"张三",age:Math.floor(Math.random()*100),sex:["male","female"][Math.floor(Math.random()*2)],email:`zhangsan${Math.floor(Math.random()*100)}@qq.com`,tags:f.filter(()=>Math.random()>.5),books:[{id:1,name:"Vue3的reactive即使嵌套也不丢失双向绑定，很优雅"}]};p(n)},d=()=>{const n=a.books.length+1,o=Math.max(0,...a.books.map(u=>Number(u.id)||0));a.books.push({id:o+1,name:`未命名数据${n}`})},v=n=>{a.books.splice(n,1)};return(n,o)=>{const u=Be,i=xe,y=Ke,r=Oe,m=Ie,k=we,R=$e,re=Se;return h(),F("div",We,[t(re,{model:e(a),"label-width":"80px",inline:!1},{default:b(()=>[t(i,{label:"名称"},{default:b(()=>[t(u,{modelValue:e(a).name,"onUpdate:modelValue":o[0]||(o[0]=c=>e(a).name=c)},null,8,["modelValue"])]),_:1}),t(i,{label:"性别"},{default:b(()=>[t(r,{modelValue:e(a).sex,"onUpdate:modelValue":o[1]||(o[1]=c=>e(a).sex=c)},{default:b(()=>[t(y,{label:"男",value:"male"}),t(y,{label:"女",value:"female"}),t(y,{label:"未知",value:"unknown"})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"年龄"},{default:b(()=>[t(u,{modelValue:e(a).age,"onUpdate:modelValue":o[2]||(o[2]=c=>e(a).age=c)},null,8,["modelValue"])]),_:1}),t(i,{label:"邮箱"},{default:b(()=>[t(u,{modelValue:e(a).email,"onUpdate:modelValue":o[3]||(o[3]=c=>e(a).email=c)},null,8,["modelValue"])]),_:1}),t(i,{label:"标签"},{default:b(()=>[t(k,{modelValue:e(a).tags,"onUpdate:modelValue":o[4]||(o[4]=c=>e(a).tags=c)},{default:b(()=>[(h(),F(M,null,P(f,(c,I)=>t(m,{key:I,label:c},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"书籍"},{default:b(()=>[t(R,{type:"primary",link:"",size:"default",onClick:d},{default:b(()=>[...o[5]||(o[5]=[S("新增书籍",-1)])]),_:1}),(h(!0),F(M,null,P(e(a).books,(c,I)=>(h(),F("div",{key:c.id,class:"full-input"},[C("div",Je,"id: "+B(c.id),1),t(u,{type:"textarea",modelValue:c.name,"onUpdate:modelValue":A=>c.name=A},null,8,["modelValue","onUpdate:modelValue"]),t(R,{type:"danger",size:"default",link:"",onClick:A=>v(I)},{default:b(()=>[...o[6]||(o[6]=[S("删除",-1)])]),_:1},8,["onClick"])]))),128))]),_:1}),t(i,null,{default:b(()=>[t(R,{onClick:e(l)},{default:b(()=>[...o[7]||(o[7]=[S("清空/重置默认值",-1)])]),_:1},8,["onClick"]),t(R,{type:"primary",onClick:_},{default:b(()=>[...o[8]||(o[8]=[S("设置随机值",-1)])]),_:1})]),_:1})]),_:1},8,["model"]),C("div",Qe," 实际只需要管理一个对象："+B(e(a)),1)])}}}),Ye=H(Xe,[["__scopeId","data-v-3033b440"]]),He=`// 使用reactive实现一个form表单的hook解释：为什么Vue快，为什么应该多写hook
import { reactive } from 'vue';

export function useReactiveForm(initData: Record<string, any>) {
  // 更新和重置时，应该以硬编码初始化的对象为模板
  const temp = structuredClone(initData);
  const formState = reactive(initData);
  const keys = Object.keys(initData);
  // 重置表单逻辑
  function resetForm() {
    keys.forEach(key => {
      if (typeof temp[key] === 'object') {
        // 防止对象引用污染 temp
        formState[key] = structuredClone(temp[key]);
      } else {
        formState[key] = temp[key];
      }
    });
  }
  function setForm(data: Record<string, any>) {
    keys.forEach(key => {
      formState[key] = data[key];
    });
  }
  // 这里可以封一个满足一般CRUD业务的查询参数方案：返回有效值数据，不返回空数组
  function getCleanForm4Query() {
    const res: Record<string, any> = {};
    keys.forEach(k => {
      const val = formState[k];
      const isEmptyArray = Array.isArray(val) && val.length === 0;
      if (isEmptyArray || val === undefined || val === null) {
        return;
      }
      res[k] = val;
    })
    return res;

  }
  // 封装初始化、重置的逻辑
  return { formState, resetForm, setForm, getCleanForm4Query };
}`,Ze=`# 最基础的useForm
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
`,ea=[{content:He,name:"hook：useReactiveForm.ts"},{content:Ze,name:"组件使用例子",lang:"md"}],aa={class:"flex-wrap"},oa=E({__name:"CrudForm",setup(s){return(f,a)=>(h(),F("div",aa,[t(Ye,{class:"form"}),t(ie,{class:"viewer",fileList:e(ea)},null,8,["fileList"])]))}}),ia=H(oa,[["__scopeId","data-v-06fa04ec"]]);export{ia as default};
