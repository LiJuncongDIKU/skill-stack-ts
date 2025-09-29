<template>
  <div>
    <el-form :model="form" label-width="80px" :inline="false">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="未知" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">打印</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button @click="setRandom">设置随机值</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useReactiveForm } from '../../hooks/useForm';

const { formState: form, resetForm, setForm } = useReactiveForm({
  name: '',
  age: 18,
  sex: '',
  email: ''
});

const submit = () => {
  console.log(form);
};
const setRandom = () => {
  const params = {
    name: '张三',
    age: Math.floor(Math.random() * 100),
    sex: ['male', 'female'][Math.floor(Math.random() * 2)],
    email: `zhangsan${Math.floor(Math.random() * 100)}@qq.com`
  }
  setForm(params);
}
</script>

<style scoped lang="scss"></style>