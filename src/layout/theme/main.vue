<!--  -->
<template>
  <div class="layout">
    <el-container style="position: relative">
      <el-header class="headerStyle">
        <div class="header">
          <Logo />
          <div style="width: 30rem">
            <SearchInput></SearchInput>
          </div>

          <HeaderLine />
        </div>
        <div class="navbar">
          <Navbar></Navbar>
        </div>
      </el-header>
      <el-main class="contentStyle">
        <AppMain />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { HeaderLine, AppMain, Logo, Navbar } from "../components/index.ts";
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
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
  .headerStyle {
    z-index: 2;
    padding: 0;
    width: 100%;
    height: 8rem;
    background: url("@/assets/image/picture/xiangru-chen.jpg") 0 -320px no-repeat;
    background-size: 100%;
    line-height: normal;
  }

  .navbar {
    width: 100%;
    height: 3rem;
  }

  .contentStyle {
    display: flex;
    justify-content: center;
    height: calc(100vh - 8rem);
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
