<template>
  <highlight autodetect :code="props.code" />
</template>

<script setup lang="ts">
import 'highlight.js/styles/atom-one-dark-reasonable.min.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
const highlight = hljsVuePlugin.component;

const props = defineProps<{
  code?: string;
}>();
</script>

<style scoped></style>