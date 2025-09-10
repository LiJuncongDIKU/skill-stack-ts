<template>
  <div class="files-wrap">
    <div class="file-tags">
      <div :class="{ 'file-tag': true, active: activeIndex === idx }" v-for="(item, idx) in props.fileList"
        :key="item.name" @click="tabClick(idx)">
        {{ item.name }}
      </div>
    </div>
    <div class="limit-scroll">
      <HighLightCoder :code="fileList[activeIndex]?.content || ''"></HighLightCoder>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { type codeFile } from './Description';
import HighLightCoder from '../..//components/HighLightCoder.vue';

const props = defineProps<{
  fileList: codeFile[]
}>();
const activeIndex: Ref<number> = ref(0);
watch(
  () => props.fileList,
  () => {
    activeIndex.value = 0;
  },
);
const tabClick = (index: number) => {
  activeIndex.value = index;
};
</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;

.files-wrap {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 100%;
  border: 2px solid vars.$color-vue-deep;
  border-radius: 6px;
  box-sizing: border-box;

  .file-tags {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    background: #444;

    .file-tag {
      background: #333;
      padding: 8px 12px;
      color: #aaa;
      cursor: pointer;
      border: 1px solid #000;
      border-width: 0 1px;

      &.active {
        background: vars.$color-vue-light;
        color: white;
      }
    }
  }

  .limit-scroll {
    flex: 1 1 auto;
    overflow: auto;
  }
}
</style>