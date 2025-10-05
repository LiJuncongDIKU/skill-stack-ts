<template>
  <div>
    <el-dialog v-model="visible" width="800px" class="mission-dialog" :show-close="false" top="10vh">
      <FilesViewer v-show="props.mission.fileList?.length" :file-list="props.mission.fileList || []"></FilesViewer>
      <div class="empty-wrap" v-show="!props.mission.fileList?.length">
        <EmptyBox></EmptyBox>
      </div>
      <template #header>
        <div class="header-wrap">
          <div class="header">
            {{ props.mission.activeLabel }}
          </div>
          <div class="close-btn" @click="visible = false">
            <img :src="crossUrl">
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import FilesViewer from '../../about/FilesViewer.vue';
import type { mission } from './CrudMissionsClass';
import crossUrl from '../../../assets/icon/cross.svg?url';
import EmptyBox from '../../../components/common/EmptyBox.vue';

const props = defineProps<{ mission: mission }>()
const visible = defineModel('visible')
</script>

<style scoped lang="scss">
@use '../../../assets/scss/variable.scss' as vars;

:deep(.mission-dialog.el-dialog) {
  background: transparent;
  padding: 0;
  text-align: right;

  .el-dialog__header {
    display: inline-block;
    position: relative;
    z-index: 2100;
    padding: 0;

    .header-wrap {
      display: flex;
      transform: translateY(5px);

      .header,
      .close-btn {
        border-radius: 6px 6px 0 0;
        background: vars.$color-vue-deep;
        padding: .5em 1em;
        box-sizing: border-box;
        border: 2px solid vars.$color-vue-light;
      }

      .close-btn {
        margin: 0 .5em;
        cursor: pointer;

        img {
          width: 1.5em;
        }
      }
    }

    .el-dialog__title {
      color: white;
    }
  }

  .el-dialog__body {
    text-align: left;
    position: relative;
    z-index: 2101;
    border-radius: 6px;
    box-shadow: 0 1px 4px 0 rgba($color: yellow, $alpha: .5);

    .limit-scroll {
      max-height: 70vh;
      overflow: auto;
    }

    .empty-wrap {
      text-align: center;
      display: flex;
      justify-content: center;
      padding: 2em;
      border: 2px solid #41b883;
      border-radius: 6px;
      box-sizing: border-box;
      background-color: #282C35;
    }
  }
}
</style>
