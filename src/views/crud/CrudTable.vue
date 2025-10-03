<template>
  <div class="table-wrap" v-loading="loading">
    <TableQuery @query="queryClick"></TableQuery>
    <div class="table-inner">

      table本身
    </div>
    <div>

      分页foot
    </div>
  </div>
</template>

<script setup lang="ts">
import orderApi from '../../apis/order.api';
import { usePageApi } from '../../hooks/usePageApi';
import TableQuery from './tableWidget/TableQuery.vue';

const { loading, queryWithParams } = usePageApi(orderApi.getOrderPage)
// 查询被点击了
const queryClick = (params: any) => {
  // 把查询参数设置到分页里面
  queryWithParams(params)
}
</script>

<style scoped lang="scss">
.table-wrap {
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;

  .table-inner {
    height: 100%;
  }
}
</style>