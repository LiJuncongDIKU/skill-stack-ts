<template>
  <div class="mission-wrap">
    <FlitBtn class="mission-btn" v-for="(item, index) in missionList" :key="index" :active-url="item.activeUrl"
      :is-active="item.isActive" :active-label="item.activeLabel" @click="handleClick(item)">
    </FlitBtn>
    <MissionDialog v-if="currentMission" v-model:visible="fileDialogVisible" :mission="currentMission"></MissionDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FlitBtn from '../../../components/common/FlitBtn.vue';
import { CrudMissionClass, type mission } from './CrudMissionsClass';
import MissionDialog from './MissionDialog.vue';


const missionList = CrudMissionClass.state

const currentMission = ref<mission | null>(null);
const fileDialogVisible = ref<boolean>(false);
const handleClick = (item: mission) => {
  console.log(item)
  if (!item.isActive) {
    return;
  }
  currentMission.value = item;
  fileDialogVisible.value = true;
}
</script>

<style scoped lang="scss">
.mission-wrap {
  display: flex;

  :deep(.box) {
    margin: 0 0 0 8px;
  }
}
</style>