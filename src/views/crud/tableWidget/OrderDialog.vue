<template>
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
</script>

<style scoped lang="scss">
@use '../../../assets/scss/el_p_cmp.scss' as *;

.form-wrap {
  border: 1px solid #f0f0f0;
}
</style>