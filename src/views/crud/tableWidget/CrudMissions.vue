<template>
  <div class="mission-wrap">
    <FlitBtn class="mission-btn" v-for="(item, index) in missionList" :key="index" :active-url="item.activeUrl"
      :is-active="item.isActive" :active-label="item.activeLabel">
    </FlitBtn>
  </div>
</template>

<script setup lang="ts">
import FlitBtn from '../../../components/common/FlitBtn.vue';
import { CrudMissionClass } from './CrudMissionsClass';

const missionList = CrudMissionClass.state
</script>

<style scoped lang="scss">
.mission-wrap {
  display: flex;

  :deep(.box) {
    margin: 0 0 0 8px;
  }
}
</style>