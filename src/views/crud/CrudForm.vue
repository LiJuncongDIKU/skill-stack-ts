<template>
  <div class="flex-wrap">
    <CrudFormPure class="form"></CrudFormPure>
    <FilesViewer class="viewer" :fileList="formDesc"></FilesViewer>
  </div>
</template>

<script setup lang="ts">
import FilesViewer from '../about/FilesViewer.vue';
import CrudFormPure from './CrudFormPure.vue';
import { formDesc } from './descriptions/formDesc'
</script>

<style scoped lang="scss">
.flex-wrap{
  display: flex;
  align-items: flex-start;
  .form{
    box-sizing: border-box;
    flex: 0 0 500px;
    margin: 0 1em 0 0;
  }
  .viewer{
    flex: 1 1 auto;
    align-items: flex-start;
    max-height: 100vh;
  }
}
</style>