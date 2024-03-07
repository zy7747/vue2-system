<!--  -->
<template>
  <div class="videoView">
    <div class="videoViewHeader">
      <div class="header">
        <Logo />
        <div class="SearchInputBox">
          <SearchInput :value="queryParams.videoName"></SearchInput>
        </div>

        <HeaderLine />
      </div>
    </div>
    <div class="videoViewPageBox">
      <videoViewPage :id="id"></videoViewPage>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { HeaderLine, Logo } from "@/layout/components/index.ts";
const id = window.location.hash.replace("#/videoView/", "");

const queryParams = ref<any>({
  page: 1,
  size: 21,
  type: null,
  videoType: null,
  region: null,
  label: null,
  createYear: null,
  sortWay: null, //按点赞量排序
  videoName: null,
});
</script>

<style lang="scss" scoped>
.videoView {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  .videoViewHeader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5rem;
    border-bottom: 1px solid #bbbbbb;
    background: url("@/assets/image/picture/xiangru-chen.jpg") 0px -240px no-repeat;
    z-index: 1;
    .header {
      top: 0;
      position: sticky;
      color: #fff;
      z-index: 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 5rem;
      font-size: 0.75rem;
    }

    .SearchInputBox {
      width: 30rem;
      height: 3rem;
      overflow: hidden;
    }
  }
  .videoViewPageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    width: 100%;
    height: calc(100vh - 5rem);
    overflow: auto;
  }
}

.SearchInputBox {
  width: 400px;
  height: 40px;
}
</style>
