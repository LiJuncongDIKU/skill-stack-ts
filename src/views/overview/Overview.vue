<template>
  <BenchGrid>
    <template #left>
      <div id="overview"></div>
    </template>
    <template #right>465</template>
  </BenchGrid>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import BenchGrid from '../../components/BenchGrid.vue';
// import { execute } from './skillOverview.ts'

onMounted(() => {
  // execute();
})
</script>

<style lang="scss" scoped>
#overview {
  width: 100%;
  height: 100%;
}
</style>