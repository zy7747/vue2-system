import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupRouter } from "@/permission";
import setupComponents from "@/components/index";

//组件
import Antd from "ant-design-vue";
import i18n from "@/language/index.ts";

//样式
import "@/styles/index.scss";
import "ant-design-vue/dist/reset.css";
import "@/utils/rem.ts";
import "virtual:svg-icons-register";

const app = createApp(App);

async function create() {
  //翻译
  app.use(i18n);
  //组件引入
  app.use(Antd);
  //router
  setupRouter(app);
  //组成全局组件
  setupComponents(app);
  //pinia
  app.use(createPinia());
  //app
  app.mount("#app");
}

create();
