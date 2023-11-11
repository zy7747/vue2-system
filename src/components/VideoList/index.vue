<!--  -->
<template>
  <div class="videoList">
    <div v-for="(item, index) in videoList" :key="index" class="item">
      <VideoBox :videoInfo="item"></VideoBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  videoList: {
    text: "视频列表",
    type: [Array],
    default: () => {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.videoList {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 14.28%);
  align-content: flex-start;
}
</style>
