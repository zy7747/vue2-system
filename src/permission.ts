import { router } from "@/router";
import type { App } from "vue";
import { useDictStore } from "@/store/dict";
import { useUserStore } from "@/store/user";
import { getRoutes } from "@/router/asyncRoutes";
import { isEmpty } from "./utils/formatData";

router.beforeEach(async (to, _from, next) => {
  const dictStore = useDictStore();
  const userStore = useUserStore();
  //获取字典
  if (Object.keys(dictStore.dict).length === 0) {
    //如果用户跳入页面的时候发现没有登录过或者登录用户为访客，自动用访客信息登录
    if (
      isEmpty(userStore.userInfo) ||
      userStore.userInfo.account === "visitor"
    ) {
      await userStore.login({
        loginType: "account",
        account: "visitor",
        password: "a123456",
      });

      //否则自动登录登录过的用户
    } else {
      await userStore.login({
        loginType: "account",
        account: "admin",
        password: "a123456",
      });
    }

    await dictStore.getDict();

    const routeList = getRoutes(userStore.asyncRoutes);

    // 动态添加路由
    routeList.forEach((item: any) => {
      router.addRoute(item);
    });

    next({ ...to, replace: true });
  } else {
    next();
  }
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
