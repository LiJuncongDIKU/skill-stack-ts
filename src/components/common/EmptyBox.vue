<template>
  <div class="empty-label">
    <img class="nest" :src="svgUrl" alt="" srcset="">
    <div class="tips">{{ props.label }}</div>
  </div>
</template>

<script setup lang="ts">
import svgUrl from '../../assets/icon/empty-nest.svg?url'
const props = defineProps({
  label: {
    type: String,
    default: '空空如也'
  }
})

</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;
.empty-label {
  width: 200px;
  height: 200px;
  padding: 36px;
  box-sizing: border-box;
  border-radius: 50%;
  background: vars.$color-vue-deep;
  .nest {
    width: 100%;
  }
  .tips{
    text-align: center;
    color: #aaa;
  }
}
</style>