<template>
  <div class="files-wrap">
    <div class="file-tags">
      <div :class="{ 'file-tag': true, active: activeIndex === idx }" v-for="(item, idx) in props.fileList"
        :key="item.name" @click="tabClick(idx)">
        {{ item.name }}
      </div>
    </div>
    <div class="limit-scroll">
      <HighLightCoder :code="fileList[activeIndex]?.content || ''" v-show="!isMd"></HighLightCoder>
      <div class="md-content" v-show="isMd" v-html="markedMd"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';
import { Marked } from 'marked';
import { type codeFile } from './Description';
import HighLightCoder from '../../components/HighLightCoder.vue';
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

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

// 如果传入的lang是md，则不使用代码viewer,使用md模式
const isMd = computed(() => {
  const cFile: codeFile = props.fileList[activeIndex.value]
  return cFile?.lang === 'md'
})
const markedMd = computed(() => {
  if (!isMd.value) {
    return '';
  }
  const cFile: codeFile = props.fileList[activeIndex.value]
  return marked.parse(cFile.content);
})
</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;

.files-wrap {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 100%;
  border: 2px solid vars.$color-vue-light;
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
      border-width: 0 1px 0 0;

      &.active {
        background: vars.$color-vue-light;
        color: white;
      }
    }
  }

  .limit-scroll {
    flex: 1 1 auto;
    overflow: auto;
    width: 100%;
  }
}

:deep(.md-content) {
  background-color: #333;
  color: white;
  padding: 12px;

  ul {
    padding: 12px;
    padding-left: 2em;

    li {
      list-style-type: circle;
    }

    li>li {
      list-style-type: square;
    }

  }

  code {
    background: #666;
    padding: .3em .5em;
    border-radius: .3em;

    &.hljs {
      background: #000;
    }
  }

  blockquote {
    padding: 0.5em;
    background: #000;
    margin: 0.5em;
    border-left: 3px solid darkorange;
    border-radius: 0 6px 6px 0;
  }

  em {
    color: #ccc;
  }

  a {
    color: vars.$color-vue-light;

    &:visited,
    &:active,
    &:focus {
      color: vars.$color-vue-light;

    }
  }

  hr{
    margin: 1em 0;
  }
}
</style>