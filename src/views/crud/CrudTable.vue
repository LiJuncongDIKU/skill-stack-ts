<template>
  <div class="table-wrap" v-loading="loading">
    <TableQuery @query="queryClick">
      <el-button type="primary" @click="addBtn">新增订单</el-button>
      <OrderDialog v-model:visible="dialogVisible" :order-id="editId" @finish="refresh"></OrderDialog>
    </TableQuery>
    <!-- <div > -->
    <el-table ref="tableRef" :data="orderList" class="table-inner" :max-height="maxTableHeight">
      <el-table-column type="index" label="序号" width="80px" align="center">
        <template #default="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="id" label="订单ID" min-width="100px"> </el-table-column>
      <el-table-column prop="userName" label="用户名称" min-width="100px"> </el-table-column>
      <el-table-column prop="orderDateText" label="订单时间" min-width="200px"> </el-table-column>
      <el-table-column prop="orderStatusText" label="订单状态" min-width="100px"> </el-table-column>
      <el-table-column label="操作" width="150px">
        <template #default="scope">
          <el-button type="primary" link @click="editBtn(scope.row)">编辑</el-button>
          <el-button type="danger" link @click="delBtn(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- </div> -->
    <el-pagination class="pager" v-model:current-page="pageNo" v-model:page-size="pageSize"
      :page-sizes="[20, 50, 100, 200]" :background="true" layout="total, sizes, prev, pager, next, jumper"
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
import { ElMessage, ElMessageBox } from 'element-plus';
import { CrudMissionClass } from './tableWidget/CrudMissionsClass';

const { loading, queryWithParams, list, pageNo, pageSize, total, refresh } = usePageApi(orderApi.getOrderPage)
// 查询被点击了
const queryClick = (params: any) => {
  // 把查询参数设置到分页里面
  queryWithParams(params)
  CrudMissionClass.setMissionFlag('usePageApiHook', true);
}

const orderList = computed(() => {
  return list.map((origin: OrderParams) => new Order(origin))
})

const tableRef = ref();
const maxTableHeight = ref(200);
onMounted(() => {
  maxTableHeight.value = tableRef.value.$el.scrollHeight;
})

const editId = ref<string>();
const dialogVisible = ref<boolean>(false);
const addBtn = () => {
  editId.value = '';
  dialogVisible.value = true;
}

const editBtn = (row: Order) => {
  editId.value = row.id;
  dialogVisible.value = true;
}

const delBtn = (row: Order) => {
  ElMessageBox.confirm(`确定要删除这个订单吗？ id:${row.id}`, { title: '一般删除都是二次提醒的' })
    .then(() => {
      row.delSelf().then(() => {
        ElMessage({ type: 'success', message: '删除成功, 刷新数据' })
        refresh();
      })
    }).catch(() => {

    })
}
</script>

<style scoped lang="scss">
.table-wrap {
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;

  .table-inner {
    height: 100%;
  }

  .pager {
    background-color: #fff;
    padding: .5em 1em;
  }
}
</style>