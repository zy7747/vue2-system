import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      useInfo: {},
      token: "",
    };
  },
  actions: {
    //登录获取token与用户信息
    async getUseInfo(params: any) {
      console.log(params);
    },
  },
});
