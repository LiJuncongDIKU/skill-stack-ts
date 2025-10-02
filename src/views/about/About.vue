<template>
  <div class="bench-grid">
    <div class="left">
      <DescCard v-for="item in descList" :key="item.title" :descItem="item" :active-tag="activeTag"
        @tagClick="tagClick"></DescCard>
    </div>
    <div class="right files-decorate">
      <FilesViewer :file-list="fileList" v-show="fileList.length"></FilesViewer>
      <EmptyBox class="empty-wrap" v-show="!fileList.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import DescCard from './DescCard.vue';
import { descriptionsList, type codeTag, type codeFile } from './Description'
import FilesViewer from './FilesViewer.vue';
import { router } from '../../router';
import EmptyBox from '../../components/common/EmptyBox.vue';

const descList = descriptionsList;
const activeTag: Ref<codeTag | null> = ref(null);
const activeFile: Ref<codeFile | null> = ref(null);
const tagClick = (tag: codeTag) => {
  if (tag.isLink) {
    router.push({ path: tag.isLink })
    return;
  }
  activeTag.value = tag;
  activeFile.value = tag.code[0];
}

const fileList = computed(() => {
  if (!activeTag.value) return []
  return activeTag.value.code;
})


</script>

<style lang="scss" scoped>
@use "../../assets/scss/layout.scss" as *;
@use "../../assets/scss/variable.scss" as vars;

.files-decorate.right {
  border: none;
  border-radius: 0;
  background: transparent;
  position: relative;
  :deep(.file-tags) {
    border-bottom: 2px solid vars.$color-vue-light;
  }
}

.empty-wrap{
  margin: 20vh auto;
}
</style>