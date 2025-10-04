<template>
  <el-dialog title="订单窗口" width="500px" v-model="visible">
    <div class="form-wrap">
      <el-form class="form-01" :model="formState" ref="formRef" :rules="rules" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="formState.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-select v-model="formState.orderStatus" clearable filterable>
            <el-option v-for="item in ORDER_STATUS"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单备注">
          <el-input v-model="formState.desc"></el-input>
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
import { useReactiveForm } from '../../../hooks/useForm';
import { ORDER_STATUS } from './OrderClass';


const visible = defineModel<boolean>('visible');
// const props = defineProps<{ orderId?: string }>();
const close = () => {
  visible.value = false;
}

const { formState } = useReactiveForm({
  userName: '',
  orderStatus: 0,
  desc: '后台补录订单'
})
const rules = {};

const onSubmit = () => { }
</script>

<style scoped lang="scss">
@use '../../../assets/scss/el_p_cmp.scss' as *;
.form-wrap {
  border: 1px solid #f3f3f3;
}
</style>