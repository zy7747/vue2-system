<!--  -->
<template>
  <div class="carousel">
    <div class="carouselPlayer">
      <el-carousel
        indicator-position="none"
        ref="carousel"
        :interval="3000"
        type="card"
        @change="autoplayCarouselChange"
      >
        <el-carousel-item v-for="(item, index) in imageList" :key="index">
          <div
            class="background"
            text="2xl"
            justify="center"
            @click="playVideo(item)"
          >
            <img :src="fileUrl + item.picture" alt="" style="width: 100%" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="changeBox">
      <div
        @click="changeCarousel(item, index)"
        v-for="(item, index) in imageList"
        :key="index"
        class="box"
        :class="{ active: index == carouselIndex }"
      >
        <img :src="fileUrl + item.picture" alt="" style="width: 100%" />
      </div>
    </div>

    <div class="profile">
      <div
        class="profileBox"
        v-for="(item, index) in imageList"
        :key="index"
        v-show="index === carouselIndex"
      >
        <p class="title">{{ item.videoName }}</p>
        <div>
          <img
            :src="fileUrl + imageList[carouselIndex].picture"
            alt=""
            style="width: 100%; height: 8rem"
          />
        </div>
        <div class="profileText">{{ item.profile }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const fileUrl = import.meta.env.VITE_APP_FILE_API;
const webUrl = import.meta.env.VITE_APP_WEB_URL;

const props = defineProps({
  imageList: {
    text: "图片列表",
    type: [Array as any],
    default: () => {
      return [];
    },
  },
});

const carousel: any = ref(null);
const carouselIndex: any = ref(0);

const profile = ref<string>("");

const changeCarousel: any = (item: any, index: number) => {
  profile.value = item.profile;
  carousel.value.setActiveItem(index);
  carouselIndex.value = index;
};

const autoplayCarouselChange = (index: number) => {
  profile.value = props.imageList[index].profile;
  carouselIndex.value = index;
};

function playVideo(videoInfo: any) {
  const url = webUrl + "/web-video/#/videoView/" + videoInfo.id;
  window.open(url, "_blank");
}
</script>

<style lang="scss" scoped>
.el-carousel__item {
  display: flex;
  margin: 0;
}

:deep(.el-carousel__container) {
  height: 22rem;
}

.carousel {
  width: 100%;
  display: flex;
  height: 22rem;
  .carouselPlayer {
    width: 70%;
    height: 100%;

    .background {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      overflow: hidden;
    }
  }

  .changeBox {
    overflow-y: auto;
    margin: 0 1rem;
    width: 10%;
    height: 100%;
    -ms-overflow-style: none; /* IE和Edge浏览器隐藏滚动条 */
    scrollbar-width: none; /* Firefox浏览器隐藏滚动条 */
    .box {
      height: 5rem;
      border-radius: 1rem;
      overflow: hidden;
      border: 3px solid transparent;
    }

    .box:hover {
      cursor: pointer;
    }

    .active {
      border: 3px solid rgb(2, 185, 246);
    }
  }

  .changeBox::-webkit-scrollbar {
    width: 0; /* Chrome和Safari浏览器隐藏滚动条 */
    height: 0;
    background-color: transparent;
  }

  .profileBox::-webkit-scrollbar {
    width: 0; /* Chrome和Safari浏览器隐藏滚动条 */
    height: 0;
    background-color: transparent;
  }

  .profile {
    width: 20%;
    height: 100%;
    overflow: hidden;
    .profileBox {
      height: 100%;
      animation: fade-in ease 1s;
      animation: tilt-in-left-1 ease 1s;
      overflow-y: auto;
      background-color: #e1dbc7;
      .title {
        background-color: #3b8bca;
        padding: 5px 15px;
        font-size: 1.25rem;
        color: #fff;
        font-weight: 600;
      }

      .profileText {
        padding: 5px 10px 0;
        text-indent: 2em;
        line-height: 1.5rem;
        font-size: 1rem;
        color: #99a9bf;
        font-weight: 550;
      }
    }
  }
}
</style>
