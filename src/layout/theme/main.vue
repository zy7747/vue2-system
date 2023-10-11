<!--  -->
<template>
  <div class="layout">
    <a-layout>
      <a-layout-header class="headerStyle">
        <div class="header">
          <Logo />
          <Navbar />
          <HeaderLine />
        </div>
      </a-layout-header>

      <a-layout-content class="contentStyle">
        <AppMain />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { HeaderLine, AppMain, Logo, Navbar } from "../components/index.ts";
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100%;
  height: 100vh;
  .headerStyle {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0;
    color: #fff;
    width: 100% !important;
    height: 8rem;
    background: url("@/assets/image/banner.png") 0 0 no-repeat;
    background-size: 100% 100%;
    line-height: normal;
    z-index: 3;
    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 5rem;
      font-size: 0.75rem;
    }
  }

  .contentStyle {
    display: flex;
    justify-content: center;
    padding-top: 8rem;
    height: calc(100vh);
    width: 100%;
    background-color: #fff;
    overflow: auto;
  }
}
</style>
