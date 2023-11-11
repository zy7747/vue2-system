<!--  -->
<template>
  <div class="videoBox" @click="videoView(videoInfo)">
    <div v-if="!loading" style="width: 100%" v-show="videoInfo.picture">
      <div class="videoImg">
        <img :src="baseUrl + videoInfo.picture" />
      </div>

      <div class="info">
        <div class="title boxLayout" :title="videoInfo.title">
          {{ videoInfo.title }}
        </div>

        <div class="author boxLayout">
          <span :title="videoInfo.author">
            {{ "作者：" + (videoInfo.author ? videoInfo.author : "无") }}
          </span>

          <span :title="videoInfo.playNum" style="text-align: right">
            {{ videoInfo.playNum + " 次观看" }}
          </span>
        </div>
      </div>
    </div>

    <el-skeleton v-if="loading" style="width: 100%" animated>
      <template #template>
        <el-skeleton-item variant="image" class="videoImg" />
        <div class="info">
          <el-skeleton-item
            variant="text"
            class="boxLayout"
            style="width: 60%"
          />
          <el-skeleton-item
            variant="text"
            class="boxLayout"
            style="width: 80%"
          />
          <el-skeleton-item variant="text" class="boxLayout" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const webUrl = window.location.origin;
const baseUrl = import.meta.env.VITE_APP_BASE_API;
const loading = ref<Boolean>(true);

defineProps({
  videoInfo: {
    text: "视频信息",
    type: [Object],
    default: () => {
      return {};
    },
  },
});

function videoView(videoInfo: any) {
  const url = webUrl + "/#/videoView/" + videoInfo.id;
  window.open(url, "_blank");
}

function loadingChange() {
  setInterval(() => {
    loading.value = false;
  }, 1500);
}

loadingChange();
</script>

<style lang="scss" scoped>
.videoBox {
  border-radius: 0.3rem;
  overflow: hidden;
  margin: 5px 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  background-color: #33343f;
  cursor: pointer;
  .videoImg {
    width: 100%;
    height: 10rem;
    overflow: hidden;

    img {
      transition: transform 0.5s;
      width: 100%;
      height: 10rem;
    }
  }

  .title {
    font-weight: 550;
    font-size: 1rem;
    color: #fff;
    line-height: 1rem;
    margin-bottom: 0.4rem;
  }

  .title:hover {
    color: rgb(58, 122, 186);
  }
  .info {
    padding: 5px;
  }

  .author {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    span {
      width: 50%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 0.8rem;
      color: #dedee0;
      font-size: 0.8rem;
    }
  }

  .boxLayout {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.videoBox:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.videoBox:hover .videoImg img {
  transform: scale(1.25);
}
</style>
