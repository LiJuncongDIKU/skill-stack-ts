<template>
  <div class="table-wrap" v-loading="loading">
    <TableQuery @query="queryClick">
      <el-button type="primary" @click="addBtn">新增订单</el-button>
      <OrderDialog v-model:visible="dialogVisible" @finish="refresh"></OrderDialog>
    </TableQuery>
    <!-- <div > -->
    <el-table ref="tableRef" :data="orderList" class="table-inner" :max-height="maxTableHeight">
      <el-table-column prop="id" label="订单ID" min-width="100px"> </el-table-column>
      <el-table-column prop="userName" label="用户名称" min-width="100px"> </el-table-column>
      <el-table-column prop="orderDateText" label="订单时间" min-width="200px"> </el-table-column>
      <el-table-column prop="orderStatusText" label="订单状态" min-width="100px"> </el-table-column>
    </el-table>
    <!-- </div> -->
    <el-pagination class="pager" v-model:current-page="pageNo" v-model:page-size="pageSize"
      :page-sizes="[10, 50, 100, 200]" :background="true" layout="total, sizes, prev, pager, next, jumper"
      :total="total" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import orderApi from '../../apis/order.api';
import { usePageApi } from '../../hooks/usePageApi';
import TableQuery from './tableWidget/TableQuery.vue';
import { Order, type OrderParams } from './tableWidget/OrderClass';
import OrderDialog from './tableWidget/OrderDialog.vue';

const { loading, queryWithParams, list, pageNo, pageSize, total, refresh } = usePageApi(orderApi.getOrderPage)
// 查询被点击了
const queryClick = (params: any) => {
  // 把查询参数设置到分页里面
  queryWithParams(params)
}

const orderList = computed(() => {
  return list.map((origin: OrderParams) => new Order(origin))
})

const tableRef = ref();
const maxTableHeight = ref(200);
onMounted(() => {
  maxTableHeight.value = tableRef.value.$el.scrollHeight;
})

const dialogVisible = ref<boolean>(false);
const addBtn = () => {
  dialogVisible.value = true;
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

  .pager {
    background-color: #fff;
    padding: .5em 1em;
  }
}
</style>