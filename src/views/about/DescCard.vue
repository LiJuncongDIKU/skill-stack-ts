<template>
  <div class="desc-card">
    <div class="title">
      <img :src="props.descItem.icon" class="icon" alt="" srcset="">
      {{ props.descItem.title }}
    </div>
    <div class="desc">
      {{ props.descItem.desc }}
    </div>
    <div class="tags-wrap">
      <div v-for="tag in props.descItem.tags" :key="tag.name"
        :class="{ 'tag-item': true, active: tag.name === props.activeTag?.name }" @click="handleTagClick(tag)">
        <div class="tag-title">{{ tag.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type desc, type codeTag } from './Description'

const props = defineProps<{
  descItem: desc,
  activeTag: codeTag | null,
}>();

const emits = defineEmits<{
  (e: 'tagClick', tag: codeTag): void
}>();

function handleTagClick(tag: codeTag) {
  console.log(tag, props.activeTag);
  emits('tagClick', tag)
}
</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;

.desc-card {
  padding: 14px;
  border-radius: 10px;
  color: #fff;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    align-items: center;
    display: flex;

    .icon {
      width: 30px;
      height: 30px;
      margin-right: 16px;
    }
  }

  .desc {
    font-size: 14px;
    color: #999;
    line-height: 1.5;
    text-indent: 2em;
  }

  .tags-wrap {
    display: flex;
    padding: 12px;

    .tag-item {
      font-size: 12px;
      padding: 8px 12px;
      background-color: #666;
      color: #fff;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 0 6px 0 #222;
      margin: 6px;

      &.active {
        box-shadow: 0 0 6px 0 vars.$color-vue-light;
        background-color: vars.$color-vue-light;
      }
    }
  }
}
</style>