import { userLogin } from "@/apis/user";
import { flattenTree, handleTree } from "@/utils/formatData";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      userInfo: {},
      token: "",
    };
  },
  actions: {
    // 登录
    login(loginInfo: any) {
      return userLogin(loginInfo).then((response: any) => {
        if (response.code === 200) {
          this.token = response.data.token;
          this.userInfo = response.data.userInfo;

          // 找到这个项目用的菜单
          let systemMenu: any = [];

          handleTree(response.data.menuList).forEach((item: any) => {
            //应用ID
            if (item.id === "1714897285063315457") {
              systemMenu = flattenTree(
                item.children.map((ch: any) => {
                  return { ...ch, parentId: null };
                })
              );
            }
          });

          return response.data;
        } else {
          return false;
        }
      });
    },
  },
});
