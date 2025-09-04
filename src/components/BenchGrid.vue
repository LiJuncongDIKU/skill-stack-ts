<template>
  <div class="bench-grid">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use "../assets/scss/variable.scss" as vars;

.bench-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
  box-sizing: border-box;
}

.left,
.right {
  background-color: vars.$color-vue-deep;
  margin: 8px;
  border: 2px solid vars.$color-vue-light;
  border-radius: 6px;
}
</style>