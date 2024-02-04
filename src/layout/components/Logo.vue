<!--  -->
<template>
  <div class="logo" @click="home">
    <div class="logoImage">
      <svg-icon
        :name="'app-哔哩哔哩'"
        class="svgIcon"
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="app-name">
      {{ $t("app.video") }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { router } from "@/router";

const home = () => {
  router.push({ path: "/" });
};
</script>

<style lang="scss" scoped>
.logo {
  padding-left: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  .app-name {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: linear-gradient(to right, #aebaca, #d5d9df);
    text-shadow: 1px -2px 0px black; /* 描边效果 */
  }

  .logoImage {
    width: 2rem;
    height: 2rem;
  }
}
</style>
