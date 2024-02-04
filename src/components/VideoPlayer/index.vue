<!--  -->
<template>
  <div class="">
    <div id="mse" class="video"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, onMounted } from "vue";
import "xgplayer/dist/index.min.css";
import Player from "xgplayer";

defineProps({
  videoList: {
    text: "视频集",
    type: [Array],
    default: () => {
      return [];
    },
  },
});

const fileUrl = import.meta.env.VITE_APP_FILE_API;
const path = ref<string>("");
let player = ref<any>(null);

onMounted(() => {
  player.value = new Player({
    id: "mse",
    width: "100%",
    height: "40rem",
    url: path.value,
    download: true, //设置download控件显示
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    screenShot: {
      saveImg: true,
      quality: 0.92,
      type: "image/png",
      format: ".png",
    },
    definitionActive: "click",
  });
});

const setVideo = (src: any) => {
  path.value = fileUrl + JSON.parse(JSON.stringify(src));
  player.value.src = path.value;
  console.log(player.value);
  player.value.play();
};

defineExpose({
  setVideo,
});
</script>

<style scoped lang="scss"></style>
