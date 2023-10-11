<template>
  <a-config-provider :locale="zhCN">
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
  </a-config-provider>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
const route = useRoute();
const title = ref("");

//组件全局国际化
import zhCN from "ant-design-vue/es/locale/zh_CN";

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
