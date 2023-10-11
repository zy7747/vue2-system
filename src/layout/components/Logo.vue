<!--  -->
<template>
  <div class="logo">
    <svg-icon name="svg-电视" class="app-logo" />
    <div class="app-name">
      {{ $t("app.video") }}
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
  padding-left: 1.5rem;
  width: 15rem;
  height: 100%;
  display: flex;
  align-items: center;

  .app-name {
    margin-left: 0.5rem;
    font-size: 2rem;
    font-weight: 550;
  }
  .app-logo {
    width: 2rem;
    height: 3rem;
    font-weight: 550;
  }
}
</style>
