<!--  -->
<template>
  <div class="videoBox" @click="videoView(videoInfo)">
    <img class="videoImg" :src="img" v-on:error="handleImageError" />
    <div class="info">
      <div class="title boxLayout">
        {{ videoInfo.title }}
      </div>
      <div class="label boxLayout">
        <div class="author">
          <span :title="videoInfo.author">
            {{ "作者：" + videoInfo.author }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import image from "@/assets/picture/cat.jpg";

const webUrl = window.location.origin;
const baseUrl = import.meta.env.VITE_APP_BASE_API;

const props = defineProps({
  videoInfo: {
    text: "视频信息",
    type: [Object],
    default: () => {
      return {};
    },
  },
});

const errorImage = ref<string>(image);

const img = ref<string>(baseUrl + props.videoInfo.picture);

function videoView(videoInfo: any) {
  const url = webUrl + "/#/videoView/" + videoInfo.id;
  window.open(url, "_blank");
}

function handleImageError() {
  img.value = errorImage.value;
}
</script>

<style lang="scss" scoped>
.videoBox {
  border-radius: 0.3rem;
  overflow: hidden;
  margin: 5px 0.5rem;
  width: 20rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  .videoImg {
    width: 100%;
    height: 15rem;
  }

  .info {
    overflow: hidden;
  }

  .title {
    font-weight: 550;
    font-size: 1.5rem;
    text-overflow: ellipsis;
  }

  .title:hover {
    color: rgb(58, 122, 186);
  }
  .profile {
    text-overflow: ellipsis;
    color: #61666d;
  }
  .label {
    display: flex;

    .author {
      display: flex;
      align-items: center;
      color: #61666d;
      font-size: 1rem;
      span {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .boxLayout {
    display: flex;
    align-items: center;
    width: calc(100% - 10px);
    margin: 0.5rem 0.3rem;
    overflow: hidden;
    white-space: nowrap;
  }
}

.videoBox:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.4);
}
</style>
