<!--  -->
<template>
  <div class="videoView">
    <div class="videoViewHeader"></div>
    <div class="videoViewPageBox">
      <videoViewPage :id="id"></videoViewPage>
    </div>
  </div>
</template>

<script lang="ts" setup>
const id = window.location.hash.replace("#/videoView/", "");
</script>

<style lang="scss" scoped>
.videoView {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  .videoViewHeader {
    position: absolute;
    width: 100vw;
    height: 5rem;
    border-bottom: 1px solid #bbbbbb;
    background-color: #fff;
    z-index: 1;
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
</style>
