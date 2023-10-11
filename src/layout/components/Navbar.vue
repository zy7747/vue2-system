<!--  -->
<template>
  <div class="navbar">
    <a-menu
      @click="menuClick"
      v-model:selectedKeys="current"
      mode="horizontal"
      :items="items"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MenuProps } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const current = ref<string[]>([route.path]);

const items = ref<MenuProps["items"]>([
  {
    key: "/home/dashboard",
    label: t("layout.home"),
  },
  {
    key: "/home/movie",
    label: t("layout.movie"),
  },
  {
    key: "/home/tv",
    label: t("layout.tv"),
  },
  {
    key: "/home/anime",
    label: t("layout.anime"),
  },
  {
    key: "/home/variety",
    label: t("layout.variety"),
  },
  {
    key: "/home/shorts",
    label: t("layout.shorts"),
  },
  {
    key: "/home/original",
    label: t("layout.original"),
  },
  {
    key: "/home/live",
    label: t("layout.live"),
  },
]);

function menuClick({ key }: any) {
  router.push(key);
}
</script>

<style lang="scss" scoped>
.ant-menu-light {
  min-width: 300px;
  font-size: 2rem;
  background-color: transparent;
}

:deep(.ant-menu-item) {
  color: #fff;
  padding: 0 8px;
}

:deep(.ant-menu-item-selected) {
  color: #fd562a !important;
}

:deep(.ant-menu-item:hover) {
  color: #fd562a !important;
}

:deep(.ant-menu-item::after) {
  border-bottom: none !important;
}

:deep(.ant-menu-item-selected::after) {
  border-bottom: none !important;
}

.navbar {
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
