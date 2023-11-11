import { router } from "@/router";
import type { App } from "vue";
import { useDictStore } from "@/store/dict";
import { useUserStore } from "@/store/user";

router.beforeEach((to, from, next) => {
  const dictStore = useDictStore();
  const userStore = useUserStore();

  //获取字典
  if (Object.keys(dictStore.dict).length === 0) {
    userStore.login({
      loginType: "account",
      account: "admin",
      password: "a123456",
    });

    dictStore.getDict().then(() => {
      next({ ...to, replace: true });
    });
  } else {
    next();
  }
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
