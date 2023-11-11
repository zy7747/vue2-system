/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId 根Id 默认 0
 */
export function handleTree(
  data: any,
  id?: any,
  parentId?: any,
  children?: any,
  rootId?: any
): any {
  id = id || "id";
  parentId = parentId || "parentId";
  children = children || "children";
  rootId = rootId || null;

  //对源数据深度克隆
  const cloneData = JSON.parse(JSON.stringify(data));
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

/**
 * @description: 递归平铺树形结构的函数
 * @param {*} tree 树形
 * @return {*} 平铺后的数据
 */
export function flattenTree(tree?: any, id?: any): any {
  const flattenData = [];

  for (const node of tree) {
    const { id, children } = node;
    // 拷贝节点信息到平铺结构
    flattenData.push(node);

    // 递归处理子节点
    if (children && children.length) {
      flattenData.push(...flattenTree(children, id));
    }
  }

  return flattenData;
}
