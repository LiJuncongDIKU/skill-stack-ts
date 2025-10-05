# Read 关于查询

几乎所有的项目都会用到的标准化分页处理，这时候一定需要用到这样一个钩子

## usePagerApi 使用
+ 当我们需要接入一个分页的 `api` 时，分页的业务一般是标准化的
+ 这时候我们希望使用钩子把*将会用到的方法和参数*定义好
```JS
const { loading, list, pageNo, pageSize, total,
  queryWithParams,refresh } = usePageApi(orderApi.getOrderPage)
```
+ 并且可以直接在模板上使用
```Html
<el-pagination class="pager" v-model:current-page="pageNo" v-model:page-size="pageSize"
  :page-sizes="[20, 50, 100, 200]" :background="true" layout="total, sizes, prev, pager, next, jumper"
  :total="total" />
```

## 最终所实现的功能
+ 快速定义需要的变量和方法
+ 响应式的 loading、pageNo、pageSize等
+ 在 pageNo、pageSize 变化时执行查询
+ 暴露两个方法
  ```ts
  queryWithParams(params:any):Promise // 带参数触发查询
  refresh():Promise // 使用上次参数触发查询
  ```
> 为什么这么做？因为业务角度上说，查询条件的表单需要点击查询之后才算生效，因此查询条件并不是总等与查询条件表单当前的值，
  钩子内部使用 `paramsTemp` 缓存起来了，这使得查询业务更符合直觉
  