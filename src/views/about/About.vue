<template>
  <BenchGrid>
    <template #left>
      <DescCard v-for="item in descList" :key="item.title" :title="item.title" :desc="item.desc"></DescCard>
    </template>
    <template #right>465</template>
  </BenchGrid>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import BenchGrid from '../../components/BenchGrid.vue';
import DescCard from './DescCard.vue';

type desc = {
  title: string;
  desc: string;
}
const descList: Ref<desc[]> = ref([
  { title: '1', desc: '2' },

]);
</script>

<style scoped></style>