import{F as ie}from"./ck_FilesViewer.DKXkxOu3.js";import{ar as j,a3 as q,aO as K,Y as $,al as H,r as M,Z as ue,c as V,aR as O,d as B,$ as N,a as E,o as F,b as R,w as Q,ba as W,u as e,a2 as w,j as C,aQ as Y,e as z,f as x,t as I,a8 as Z,n as de,a4 as J,s as me,a6 as pe,g as fe,aw as ce,a5 as be,F as P,i as G,k as ve,am as _e,aa as ge,aj as ke,aI as X,ac as ye,p as n,m as v,_ as ee}from"./en_index.BB9GjpTt.js";import{o as Ve,u as Fe,j as he,l as Ce,g as Ee,h as Re,E as xe}from"./ck_useForm.DNfz8gKt.js";import{u as Se,e as Be,a as we,b as Ie,E as $e}from"./ck_el-input.jVAUserM.js";import{C as U,U as D,_ as L,u as Me,d as Pe}from"./ck_aria.B9SjV4T1.js";import{u as Ge}from"./ck_index.4Ma3rdpy.js";import{a as Ne}from"./ck_constants.B8gjEQjn.js";import{u as ze}from"./ck_useForm.DSbdktPA.js";import"./ck__commonjsHelpers.Cpj98o6Y.js";const oe=$({modelValue:{type:[String,Number,Boolean],default:void 0},size:H,disabled:{type:Boolean,default:void 0},label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),Ue=$({...oe,border:Boolean}),ae={[D]:s=>j(s)||q(s)||K(s),[U]:s=>j(s)||q(s)||K(s)},le=Symbol("radioGroupKey"),te=(s,_)=>{const o=M(),m=ue(le,void 0),l=V(()=>!!m),k=V(()=>O(s.value)?s.label:s.value),g=V({get(){return l.value?m.modelValue:s.modelValue},set(r){l.value?m.changeEvent(r):_&&_(D,r),o.value.checked=s.modelValue===k.value}}),p=Se(V(()=>m?.size)),t=Be(V(()=>m?.disabled)),a=M(!1),d=V(()=>t.value||l.value&&g.value!==k.value?-1:0);return Ge({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},V(()=>l.value&&O(s.value))),{radioRef:o,isGroup:l,radioGroup:m,focus:a,size:p,disabled:t,tabIndex:d,modelValue:g,actualValue:k}},De=["value","name","disabled","checked"],Le=B({name:"ElRadio",__name:"radio",props:Ue,emits:ae,setup(s,{emit:_}){const o=s,m=_,l=N("radio"),{radioRef:k,radioGroup:g,focus:p,size:t,disabled:a,modelValue:d,actualValue:r}=te(o,m);function f(){Z(()=>m(U,d.value))}return(y,c)=>{var i;return F(),E("label",{class:C([e(l).b(),e(l).is("disabled",e(a)),e(l).is("focus",e(p)),e(l).is("bordered",y.border),e(l).is("checked",e(d)===e(r)),e(l).m(e(t))])},[R("span",{class:C([e(l).e("input"),e(l).is("disabled",e(a)),e(l).is("checked",e(d)===e(r))])},[Q(R("input",{ref_key:"radioRef",ref:k,"onUpdate:modelValue":c[0]||(c[0]=b=>Y(d)?d.value=b:null),class:C(e(l).e("original")),value:e(r),name:y.name||((i=e(g))==null?void 0:i.name),disabled:e(a),checked:e(d)===e(r),type:"radio",onFocus:c[1]||(c[1]=b=>p.value=!0),onBlur:c[2]||(c[2]=b=>p.value=!1),onChange:f,onClick:c[3]||(c[3]=w(()=>{},["stop"]))},null,42,De),[[W,e(d)]]),R("span",{class:C(e(l).e("inner"))},null,2)],2),R("span",{class:C(e(l).e("label")),onKeydown:c[4]||(c[4]=w(()=>{},["stop"]))},[z(y.$slots,"default",{},()=>[x(I(y.label),1)])],34)],2)}}});var ne=L(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const Te=$({...oe}),Ae=["value","name","disabled"],je=B({name:"ElRadioButton",__name:"radio-button",props:Te,setup(s){const _=s,o=N("radio"),{radioRef:m,focus:l,size:k,disabled:g,modelValue:p,radioGroup:t,actualValue:a}=te(_),d=V(()=>({backgroundColor:t?.fill||"",borderColor:t?.fill||"",boxShadow:t?.fill?`-1px 0 0 0 ${t.fill}`:"",color:t?.textColor||""}));return(r,f)=>{var y;return F(),E("label",{class:C([e(o).b("button"),e(o).is("active",e(p)===e(a)),e(o).is("disabled",e(g)),e(o).is("focus",e(l)),e(o).bm("button",e(k))])},[Q(R("input",{ref_key:"radioRef",ref:m,"onUpdate:modelValue":f[0]||(f[0]=c=>Y(p)?p.value=c:null),class:C(e(o).be("button","original-radio")),value:e(a),type:"radio",name:r.name||((y=e(t))==null?void 0:y.name),disabled:e(g),onFocus:f[1]||(f[1]=c=>l.value=!0),onBlur:f[2]||(f[2]=c=>l.value=!1),onClick:f[3]||(f[3]=w(()=>{},["stop"]))},null,42,Ae),[[W,e(p)]]),R("span",{class:C(e(o).be("button","inner")),style:de(e(p)===e(a)?d.value:{}),onKeydown:f[4]||(f[4]=w(()=>{},["stop"]))},[z(r.$slots,"default",{},()=>[x(I(r.label),1)])],38)],2)}}});var T=L(je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const qe=$({id:{type:String,default:void 0},size:H,disabled:{type:Boolean,default:void 0},modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},options:{type:J(Array)},props:{type:J(Object),default:()=>se},type:{type:String,values:["radio","button"],default:"radio"},...Ne(["ariaLabel"])}),Ke=ae,se={label:"label",value:"value",disabled:"disabled"},Oe=["id","aria-label","aria-labelledby"],Je=B({name:"ElRadioGroup",__name:"radio-group",props:qe,emits:Ke,setup(s,{emit:_}){const o=s,m=_,l=N("radio"),k=Me(),g=M(),{formItem:p}=we(),{inputId:t,isLabeledByFormItem:a}=Ie(o,{formItemContext:p}),d=i=>{m(D,i),Z(()=>m(U,i))};me(()=>{const i=g.value.querySelectorAll("[type=radio]"),b=i[0];!Array.from(i).some(h=>h.checked)&&b&&(b.tabIndex=0)});const r=V(()=>o.name||k.value),f=V(()=>({...se,...o.props})),y=i=>{const{label:b,value:h,disabled:u}=f.value,S={label:i[b],value:i[h],disabled:i[u]};return{...Ve(i,[b,h,u]),...S}},c=V(()=>o.type==="button"?T:ne);return pe(le,fe({...ce(o),changeEvent:d,name:r})),be(()=>o.modelValue,(i,b)=>{o.validateEvent&&!ke(i,b)&&p?.validate("change").catch(h=>Pe())}),(i,b)=>(F(),E("div",{id:e(t),ref_key:"radioGroupRef",ref:g,class:C(e(l).b("group")),role:"radiogroup","aria-label":e(a)?void 0:i.ariaLabel||"radio-group","aria-labelledby":e(a)?e(p).labelId:void 0},[z(i.$slots,"default",{},()=>[(F(!0),E(P,null,G(i.options,(h,u)=>(F(),ve(ge(c.value),_e({key:u},{ref_for:!0},y(h)),null,16))),128))])],10,Oe))}});var re=L(Je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const He=ye(ne,{RadioButton:T,RadioGroup:re}),Qe=X(re);X(T);const We={class:"crud-form"},Ye={class:"id-label"},Ze={class:"json"},Xe=B({__name:"CrudFormPure",setup(s){const _=["游戏爱好者","动漫爱好者","摄影爱好者","旅游爱好者","美食爱好者"],{formState:o,resetForm:m,setForm:l}=Fe({name:"",age:18,sex:"unknown",email:"",tags:[],books:[]}),k=()=>{const t={name:"张三",age:Math.floor(Math.random()*100),sex:["male","female"][Math.floor(Math.random()*2)],email:`zhangsan${Math.floor(Math.random()*100)}@qq.com`,tags:_.filter(()=>Math.random()>.5),books:[{id:1,name:"Vue3的reactive即使嵌套也不丢失双向绑定，很优雅"}]};l(t)},g=()=>{const t=o.books.length+1,a=Math.max(0,...o.books.map(d=>Number(d.id)||0));o.books.push({id:a+1,name:`未命名数据${t}`})},p=t=>{o.books.splice(Number(t),1)};return(t,a)=>{const d=$e,r=Ce,f=He,y=Qe,c=Re,i=Ee,b=xe,h=he;return F(),E("div",We,[n(h,{model:e(o),"label-width":"80px",inline:!1},{default:v(()=>[n(r,{label:"名称"},{default:v(()=>[n(d,{modelValue:e(o).name,"onUpdate:modelValue":a[0]||(a[0]=u=>e(o).name=u)},null,8,["modelValue"])]),_:1}),n(r,{label:"性别"},{default:v(()=>[n(y,{modelValue:e(o).sex,"onUpdate:modelValue":a[1]||(a[1]=u=>e(o).sex=u)},{default:v(()=>[n(f,{label:"男",value:"male"}),n(f,{label:"女",value:"female"}),n(f,{label:"未知",value:"unknown"})]),_:1},8,["modelValue"])]),_:1}),n(r,{label:"年龄"},{default:v(()=>[n(d,{modelValue:e(o).age,"onUpdate:modelValue":a[2]||(a[2]=u=>e(o).age=u)},null,8,["modelValue"])]),_:1}),n(r,{label:"邮箱"},{default:v(()=>[n(d,{modelValue:e(o).email,"onUpdate:modelValue":a[3]||(a[3]=u=>e(o).email=u)},null,8,["modelValue"])]),_:1}),n(r,{label:"标签"},{default:v(()=>[n(i,{modelValue:e(o).tags,"onUpdate:modelValue":a[4]||(a[4]=u=>e(o).tags=u)},{default:v(()=>[(F(),E(P,null,G(_,(u,S)=>n(c,{key:S,label:u},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),n(r,{label:"书籍"},{default:v(()=>[n(b,{type:"primary",link:"",size:"default",onClick:g},{default:v(()=>[...a[5]||(a[5]=[x("新增书籍",-1)])]),_:1}),(F(!0),E(P,null,G(e(o).books,(u,S)=>(F(),E("div",{key:u.id,class:"full-input"},[R("div",Ye,"id: "+I(u.id),1),n(d,{type:"textarea",modelValue:u.name,"onUpdate:modelValue":A=>u.name=A},null,8,["modelValue","onUpdate:modelValue"]),n(b,{type:"danger",size:"default",link:"",onClick:A=>p(S)},{default:v(()=>[...a[6]||(a[6]=[x("删除",-1)])]),_:1},8,["onClick"])]))),128))]),_:1}),n(r,null,{default:v(()=>[n(b,{onClick:e(m)},{default:v(()=>[...a[7]||(a[7]=[x("清空/重置默认值",-1)])]),_:1},8,["onClick"]),n(b,{type:"primary",onClick:k},{default:v(()=>[...a[8]||(a[8]=[x("设置随机值",-1)])]),_:1})]),_:1})]),_:1},8,["model"]),R("div",Ze," 实际只需要管理一个对象："+I(e(o)),1)])}}}),eo=ee(Xe,[["__scopeId","data-v-a6435e12"]]),oo=`# 最基础的useForm
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
`,ao=[{content:ze,name:"hook：useReactiveForm.ts"},{content:oo,name:"组件使用例子",lang:"md"}],lo={class:"flex-wrap"},to=B({__name:"CrudForm",setup(s){return(_,o)=>(F(),E("div",lo,[n(eo,{class:"form"}),n(ie,{class:"viewer",fileList:e(ao)},null,8,["fileList"])]))}}),bo=ee(to,[["__scopeId","data-v-06fa04ec"]]);export{bo as default};
