import App from "./App.vue";
import { createApp } from "vue";
//pinia
import { createPinia } from "pinia";
//router
import { setupRouter } from "@/permission";
//components
import setupComponents from "@/components/index";
//plugin
import createElement from "@/plugin/element";
//language
import i18n from "@/language/index";
//style
import "@/styles/index.scss";
//utils
import "@/utils/index";
//svg
import "virtual:svg-icons-register";

const app = createApp(App);

async function create() {
  //翻译
  app.use(i18n);
  //router
  setupRouter(app);
  //组成全局组件
  setupComponents(app);
  //element组件
  createElement(app);
  //pinia
  app.use(createPinia());
  //app
  app.mount("#app");
}

create();
