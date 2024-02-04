<!--  -->
<template>
  <div class="videoPage">
    <TermsFilter @changeValue="changeValue"></TermsFilter>
    <VideoList :videoList="videoList"></VideoList>
    <div class="pagination">
      <Pagination :total="total" @pageChange="pageChange"></Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { videoPage } from "@/apis/video";
import { ref } from "vue";
/**
 *
 * props
 *
 * */
const props = defineProps({
  type: {
    text: "视频类型",
    type: [String],
    default: () => {
      return "";
    },
  },
});
/**
 *
 * 变量
 *
 * */
const videoList = ref<any[]>([]);
const total = ref<any>(0);
/**
 *
 * @param {String}
 *
 * */
const queryParams = ref<any>({
  page: 1,
  size: 21,
  type: props.type,
  videoType: null,
  region: null,
  label: null,
  createYear: null,
  sortWay: null, //按点赞量排序
});
/**
 *
 *  @param {String}
 *
 */
const query = () => {
  videoPage(queryParams.value).then((res: any) => {
    videoList.value = res.data.list;
    total.value = res.data.total;
  });
};
/**
 * @async
 * @param {number,number}
 * @description:修改页码重新请求
 */
function pageChange(page: number, pageSize: number) {
  queryParams.value.page = page;
  queryParams.value.size = pageSize;
  query();
}

function changeValue(queryData: any) {
  queryParams.value = { ...queryParams.value, ...queryData };
  query();
}

query();
</script>

<style lang="scss" scoped>
.videoPage {
  height: 100%;
  .pagination {
    padding: 20px 0;
  }
}
</style>
