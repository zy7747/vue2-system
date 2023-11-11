import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

interface routeModuleListType {
  path: string;
  redirect?: string;
  name?: string;
  component?: any;
  children?: any;
  meta?: any;
}

//其他独立的路由在这里拼接
const routeModuleList: routeModuleListType[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/videoView/:id",
    name: "videoView",
    component: () => import("@/views/videoView/index.vue"),
    meta: {
      title: "视频浏览",
    },
  },
  {
    path: "/videoSearch",
    name: "videoSearch",
    component: () => import("@/views/searchPage/index.vue"),
    meta: {
      title: "视频搜索",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    redirect: "/home/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "movie",
        name: "movie",
        component: () => import("@/views/movie/index.vue"),
        meta: {
          title: "电影",
        },
      },
      {
        path: "anime",
        name: "anime",
        component: () => import("@/views/anime/index.vue"),
        meta: {
          title: "动漫",
        },
      },
      {
        path: "tv",
        name: "tv",
        component: () => import("@/views/tv/index.vue"),
        meta: {
          title: "电视剧",
        },
      },
      {
        path: "variety",
        name: "variety",
        component: () => import("@/views/variety/index.vue"),
        meta: {
          title: "综艺",
        },
      },

      {
        path: "shorts",
        name: "shorts",
        component: () => import("@/views/shorts/index.vue"),
        meta: {
          title: "短视频",
        },
      },
      {
        path: "original",
        name: "original",
        component: () => import("@/views/original/index.vue"),
        meta: {
          title: "原创视频",
        },
      },
      {
        path: "live",
        name: "live",
        component: () => import("@/views/live/index.vue"),
        meta: {
          title: "直播",
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/system/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const Routes = routeModuleList;

// app router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: Routes as RouteRecordRaw[],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
