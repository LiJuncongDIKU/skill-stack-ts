<template>
  <div class="bench-grid">
    <div class="left">
      <div class="scroll-header">
        <div class="title">直接渲染</div>
        <el-input-number v-model="normalSize" :min="1" :step="100">
        </el-input-number>
      </div>
      <div class="scroll-wrap">
        <ScrollItem v-for="item in normalList" :key="item.index" :index="item.index" :desc="item.desc"
          :label="item.label">
        </ScrollItem>
      </div>
    </div>
    <div class="right">
      虚拟滚动
      <VirtualScroll :items="allMock">
        <template #default="scope">
          <div class="item">{{ scope.item.index }}:{{ scope.item.label }}</div>
        </template>
      </VirtualScroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import Mock from 'mockjs/dist/mock.js'
import VirtualScroll from './VirtualScroll.vue';
import { computed, ref } from 'vue';
import ScrollItem from './ScrollItem.vue';


const normalSize = ref<number>(10);
const normalList = computed(() => {
  const mockOption: any = {};
  mockOption[`list|${normalSize.value}`] = [{
    label: '@cname(3,4)',
    desc: 'mock:@cword(5,10)',
    'index|+1': 1
  }];
  return Mock.mock(mockOption).list;
})

const allMock: any[] = Mock.mock({
  'list|10000': [{
    label: '@cname',
    desc: 'mock:@cword(5,10)',
  }]
}).list.map((row: any, index: number) => ({ ...row, index: index + 1 }));
console.log(allMock)
</script>

<style scoped lang="scss">
@use '../../assets/scss/layout.scss' as *;

.item {
  background-color: #eee;
}

.left {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 12px;
  gap: 12px;

  .scroll-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      color: #ddd;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .scroll-wrap {
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>