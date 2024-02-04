const modules = import.meta.glob("../views/**/*.vue");

function handleTree(
  data: any,
  rootId?: any,
  id?: any,
  parentId?: any,
  children?: any
): any {
  id = id || "id";
  parentId = parentId || "parentId";
  children = children || "children";
  rootId = rootId || null;

  //对源数据深度克隆
  const cloneData = data;
  //循环所有项
  const treeData = cloneData.filter((father: any) => {
    let branchArr = cloneData.filter((child: any) => {
      //返回每一项的子级数组
      return father[id] === child[parentId];
    });
    branchArr.length > 0 ? (father.children = branchArr) : "";

    //返回第一层
    return father[parentId] === rootId;
  });

  return treeData !== "" ? treeData : data;
}

//获取路由
export function getRoutes(routes: any) {
  let myRoute: any = [];

  routes.forEach((item: any) => {
    if (item.type === "menu") {
      myRoute.push({
        id: item.id,
        parentId: item.parentId,
        name: item.name,
        component: resComponent(item.component),
        path: item.path,
        meta: { title: item.title, keepAlive: item.keepAlive, icon: item.icon },
      });
    }
  });

  const route = [
    ...handleTree(myRoute, "1714897285063315457"),
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ];

  return route;
}

const resComponent = (name: string) => {
  return modules[`../views${name}.vue`];
};
