<template>
  <div class="desc-card">
    <div class="title">
      {{ props.title }}

    </div>
    <div class="desc">
      {{ props.desc }}

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string,
  desc?: string
}>();
</script>

<style scoped lang="scss">
.desc-card {
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .desc {
    font-size: 14px;
    color: #666;
  }
}
</style>