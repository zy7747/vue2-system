<!-- 首页 -->
<template>
  <div class="dashboard">
    <!-- 首页动态展示 -->
    <div class="carouselPic">
      <Carousel :imageList="allList"></Carousel>
    </div>

    <div class="hot">
      <ul class="hotVideoList">
        <li class="videoList" v-for="(item, key) in videoList" :key="key">
          <div class="label">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="more">
              <el-button size="small" @click="more(key)">
                {{ "查看全部" }}<el-icon><ArrowRight /></el-icon>
              </el-button>
            </div>
          </div>
          <ul class="videoBoxList">
            <li
              class="videoBox"
              v-for="(i, index) in item.videoList"
              :key="index"
            >
              <VideoBox :videoInfo="i"></VideoBox>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { hotVideo } from "@/apis/video";
import { router } from "@/router";

const allList = ref<any[]>([]);
const videoList = ref<any>({});

hotVideo().then((res: any) => {
  if (res.code === 200) {
    const { all, ...videos } = res.data;
    allList.value = all.videoList;

    videoList.value = videos;
  }
});

//更多
const more = (key: any) => {
  router.push({
    path: "/home/" + key,
  });
};
</script>

<style lang="scss" scoped>
/* For demo */
:deep(.slick-dots) {
  position: relative;
  height: auto;
}
:deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0px;
}
:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
:deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.carouselPic {
  width: 100%;
  margin-bottom: 15px;
}

.hot {
  .hotVideoList {
    width: 100%;
    .videoList {
      margin-top: 10px;
      width: 100%;
      .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 1rem;
        height: 15%;
        .title {
          font-size: 18px;
          font-weight: 700;
        }
      }
      .videoBoxList {
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        width: 100%;
        .videoBox {
          margin-right: 1rem;
          width: 15rem;
        }
      }
    }
  }
}
</style>
