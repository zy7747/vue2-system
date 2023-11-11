<template>
  <el-config-provider :locale="zhCn">
    <section class="app-main">
      <RouterView #default="{ Component, route }">
        <keep-alive v-if="$route.meta.keepAlive">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component
          :is="Component"
          v-if="!$route.meta.keepAlive"
          :key="route.fullPath"
        />
      </RouterView>
    </section>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
const route = useRoute();
const title = ref("");

watch(
  route,
  (newVal: any) => {
    title.value = newVal.meta.title;
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
</script>

<style lang="scss" scoped></style>
