<!--  -->
<template>
  <div class="navbar">
    <ul class="menus">
      <li
        class="menusItem"
        :class="{ active: current === item.key }"
        @click="menuClick(item)"
        v-for="(item, index) of menus"
        :key="index"
      >
        <svg-icon :name="item.icon" style="height: 1rem" />
        <span style="margin-left: 0.2rem">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const current = ref<string>(route.path);

interface menusType {
  key: string;
  label: string;
  icon?: string;
}

const menus: any = ref<menusType[]>([
  {
    key: "/home/dashboard",
    label: t("layout.home"),
    icon: "app-Google Chrome",
  },
  {
    key: "/home/movie",
    label: t("layout.movie"),
    icon: "svg-电影院",
  },
  {
    key: "/home/tv",
    label: t("layout.tv"),
    icon: "app-腾讯视频",
  },
  {
    key: "/home/anime",
    label: t("layout.anime"),
    icon: "app-哔哩哔哩",
  },
  {
    key: "/home/variety",
    label: t("layout.variety"),
    icon: "app-iQiyi",
  },
  {
    key: "/home/shorts",
    label: t("layout.shorts"),
    icon: "app-tiktok",
  },
  {
    key: "/home/original",
    label: t("layout.original"),
    icon: "app-youtube",
  },
  {
    key: "/home/live",
    label: t("layout.live"),
    icon: "app-斗鱼",
  },
]);

function menuClick(menu: any) {
  current.value = menu.key;

  router.push({ path: current.value });
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .menus {
    display: flex;
    font-size: 1rem;
    .menusItem {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      background-color: #f6f7f8;
      padding: 0.3rem 0.5rem;
      border-radius: 0.3rem;
    }
    .menusItem:hover {
      cursor: pointer;
      color: #f3793d;
      border: 1px solid #b1b2b3;
    }

    .active {
      color: #fff;
      background-color: #e3e5e7;
    }
  }
}
</style>
