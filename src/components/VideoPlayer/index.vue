<!--  -->
<template>
  <div class="">
    <video
      ref="video"
      class="video"
      style="width: 100%; height: 40rem; object-fit: contain"
      controls
    >
      <source type="video/mp4" :src="path" />
    </video>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";

const baseUrl = import.meta.env.VITE_APP_BASE_API;
const path = ref<string>("");
const video: any = ref(null);

const setVideo = (src: any) => {
  path.value = baseUrl + JSON.parse(JSON.stringify(src));

  video.value.load();
};

defineExpose({
  setVideo,
});
</script>

<style scoped lang="scss"></style>
