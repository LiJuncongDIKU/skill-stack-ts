<template>
  <div class="query-wrap">
    <el-form :model="queryForm" ref="formRef" label-width="80px" :inline="true">
      <el-form-item label="订单id">
        <el-input v-model="queryForm.id" placeholder="模糊查询订单id"></el-input>
      </el-form-item>
      <el-form-item label="客户">
        <el-input v-model="queryForm.userName" placeholder="模糊查询客户名称"></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select v-model="queryForm.orderStatus" clearable class="mini-select">
          <el-option v-for="item in ORDER_STATUS" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单时间" title="默认今天">
        <el-date-picker v-model="queryForm.dateRange" type="daterange" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" plain>Mock查询</el-button>
        <el-button @click="resetForm">重置条件</el-button>
        <slot></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useReactiveForm } from '../../../hooks/useForm';
import { ORDER_STATUS } from './OrderClass';

const { formState: queryForm, resetForm, getCleanForm4Query } = useReactiveForm({
  id: undefined,
  userName: undefined,
  dateRange: [new Date(), new Date()],
  orderStatus: undefined,
})

const emits = defineEmits(['query'])
const onSubmit = () => {
  // 查询前加工
  const params = getCleanForm4Query();
  // 或者可以写一个dateRange的工具
  if (params.dateRange) {
    const [start, end] = params.dateRange;
    start.setTime(0, 0, 0)
    end.setTime(23, 59, 59)
    params.startDate = start;
    params.endDate = end;
    delete params.dateRange;
  }
  console.log(params);
  emits('query', params);
}
onMounted(() => {
  onSubmit();
})
</script>

<style scoped lang="scss">
.query-wrap {
  background-color: white;
  padding: 12px 0 0 0;
}

.mini-select {
  width: 150px;
}
</style>