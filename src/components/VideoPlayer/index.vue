<!--  -->
<template>
  <div class="">
    <div id="mse" class="video"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";
import "xgplayer/dist/index.min.css";
import Player from "xgplayer";

const fileUrl = import.meta.env.VITE_APP_FILE_API;
const path = ref<string>("");
let player = ref<any>(null);

function createVideo(videoList: any) {
  const urlList = videoList.map((item: any) => fileUrl + item.url);

  player.value = new Player({
    id: "mse",
    width: "100%",
    height: "40rem",
    url: videoList[0].url,
    download: true, //设置download控件显示
    playbackRate: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    pip: true,
    progressDot: [
      {
        time: 2, //展示标记的时间
        text: "片头", //鼠标hover在标记时展示的文字
        duration: 1, //标记段长度（以时长计算）
        style: {
          //标记样式
          background: "blue",
        },
      },
    ],
    definitionActive: "click",
    playNext: {
      urlList,
    },
    miniplayer: true,
    miniplayerConfig: {
      bottom: 200,
      right: 0,
      width: 320,
      height: 180,
    },
    keyShortcutStep: {
      //设置调整步长
      currentTime: 15, //播放进度调整步长，默认10秒
      volume: 0.2, //音量调整步长，默认0.1
    },
  });

  player.value.once("complete", () => {
    setVideo(videoList[0].url);
  });

  player.value.on("play", function (e: any) {
    console.log(e);
  });
}

const setVideo = (src: any) => {
  path.value = fileUrl + JSON.parse(JSON.stringify(src));
  player.value.src = path.value;

  player.value.emit("resourceReady", [
    { name: "1080P", url: path.value },
    { name: "2k", url: path.value },
    { name: "4K", url: path.value },
    { name: "720P", url: path.value },
  ]);

  player.value.play();
};

defineExpose({
  setVideo,
  createVideo,
});
</script>

<style scoped lang="scss"></style>
