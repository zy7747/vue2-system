import { router } from "@/router";
import type { App } from "vue";
import { useDictStore } from "@/store/dict";

router.beforeEach(() => {
  const dictStore = useDictStore();

  //获取字典
  if (Object.keys(dictStore.dict).length === 0) {
    dictStore.getDict();
  }
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
