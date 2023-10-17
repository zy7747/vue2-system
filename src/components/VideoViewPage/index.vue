<!--  -->
<template>
  <div class="videoViewPage">
    <div class="videoTitle">
      <div class="title">
        {{ videoInfo.videoName }}
      </div>
      <ul class="videoInfo">
        <li class="playerNum">
          {{ "浏览次数:" + "&nbsp;" + videoInfo.playNum }}
        </li>
        <li class="praiseNum">
          {{ "获赞次数:" + "&nbsp;" + videoInfo.collectionNum }}
        </li>
        <li class="praiseNum">
          {{ "点赞量:" + "&nbsp;" + videoInfo.starsNum }}
        </li>
        <li class="updateTime">
          {{
            "更新时间:" +
            "&nbsp;" +
            (videoInfo.updateTime ? videoInfo.updateTime : videoInfo.createTime)
          }}
        </li>
        <li>
          <a-rate v-model:value="starsNum" allow-half />
        </li>
      </ul>
    </div>
    <div class="videoPlayer">
      <div class="left">
        <VideoPlayer ref="videoPlayer"></VideoPlayer>
      </div>
      <div class="right">
        <Episode @changeVideo="changeVideo" :episodeList="videoList"></Episode>
      </div>
    </div>

    <a-card title="视频简介" class="profile">
      <span class="profile-content" :title="videoInfo.profile">
        {{ videoInfo.profile }}
      </span>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { playNum, videoDetail } from "@/apis/video";
import { ref } from "vue";

const props = defineProps({
  id: {
    text: "id",
    type: [String],
    default: () => {
      return "";
    },
  },
});
const starsNum = ref<number>(3.7);
const videoInfo = ref<any>({});
const videoList = ref<any[]>([]);
const videoPlayer: any = ref();

//初始化渲染
videoDetail({ id: props.id }).then((res) => {
  const src = res.data.videoList[0].url;
  videoList.value = res.data.videoList;
  videoInfo.value = res.data;
  //播放视频
  changeVideo(src);
});

//修改或者播放视频
const changeVideo = (src: string) => {
  //修改src
  videoPlayer.value.setVideo(src);
  //记录播放量
  playNum({ id: props.id });
};
</script>

<style lang="scss" scoped>
.videoViewPage {
  width: 90%;
  height: calc(100vh - 5rem);
}
.videoTitle {
  width: 100%;
  height: 8rem;

  .title {
    font-weight: 700;
    font-size: 3rem;
    padding: 1rem 0;
  }

  .videoInfo {
    font-size: 1.5rem;
    display: flex;
    li {
      display: flex;
      align-items: center;
      margin-right: 0.4rem;
      color: #bcbfc4;
    }
  }
}
.videoPlayer {
  display: flex;
  width: 100%;
  height: 40rem;
  overflow: hidden;
  .left {
    width: 80%;
  }

  .right {
    width: 20%;
  }
}

.profile {
  width: 100%;
  margin-top: 1.5rem;
  .profile-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    width: 100%;
    font-size: 1rem;
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* 指定显示的行数 */
  }
}
</style>
