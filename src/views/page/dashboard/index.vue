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
                {{ "查看全部" }}
                <el-icon>
                  <ArrowRight />
                </el-icon>
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
.carouselPic {
  width: 100%;
  margin-bottom: 15px;
}

.videoBoxList::-webkit-scrollbar {
  width: 0; /* Chrome和Safari浏览器隐藏滚动条 */
  height: 0;
  background-color: transparent;
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
        margin: 0 1rem 0.5rem;
        height: 15%;
        .title {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .videoBoxList {
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        .videoBox {
          margin-right: 1rem;
          width: 19rem;
        }
      }
    }
  }
}
</style>
