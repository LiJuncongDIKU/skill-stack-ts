<template>
  <div class="crud-form">
    <el-form :model="form" label-width="80px" :inline="false">
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
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-checkbox-group v-model="form.tags">
          <el-checkbox v-for="(item, index) in tags" :key="index" :label="item"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="书籍">
        <el-button type="primary" link size="default" @click="addBook">新增书籍</el-button>
        <div v-for="(bk, i) in form.books" :key="bk.id" class="full-input">
          <div class="id-label">id: {{ bk.id }}</div>
          <el-input type="textarea" v-model="bk.name"></el-input>
          <el-button type="danger" size="default" link @click="removeBook(i)">删除</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm">清空/重置默认值</el-button>
        <el-button type="primary" @click="setRandom">设置随机值</el-button>
      </el-form-item>
    </el-form>
    <div class="json">
      {{ form }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useReactiveForm } from '../../hooks/useForm';

const tags = ['游戏爱好者', '动漫爱好者', '摄影爱好者', '旅游爱好者', '美食爱好者'];
const { formState: form, resetForm, setForm } = useReactiveForm({
  name: '',
  age: 18,
  sex: 'unknown',
  email: '',
  tags: [],
  books: [],
});

const setRandom = () => {
  const params = {
    name: '张三',
    age: Math.floor(Math.random() * 100),
    sex: ['male', 'female'][Math.floor(Math.random() * 2)],
    email: `zhangsan${Math.floor(Math.random() * 100)}@qq.com`,
    tags: tags.filter(() => Math.random() > 0.5),
    books: [{ id: 1, name: 'Vue3的reactive即使嵌套也不丢失双向绑定，很优雅' }],
  }
  setForm(params);
}

const addBook = () => {
  const len = form.books.length + 1;
  form.books.push({ id: len, name: `未命名数据${len}` })
}
const removeBook = (i: number) => {
  form.books.splice(i, 1)
}
</script>

<style scoped lang="scss">
.crud-form {
  padding: 12px;
  background-color: white;
}

.full-input {
  width: 100%;
  display: flex;
  align-items: center;

  .id-label {
    flex-shrink: 0;
  }
}
</style>