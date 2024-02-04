<!--  -->
<template>
  <div class="layout">
    <el-container style="position: relative">
      <el-header class="headerStyle">
        <div class="header">
          <Logo />
          <div class="SearchInputBox">
            <SearchInput :value="queryParams.videoName"></SearchInput>
          </div>

          <HeaderLine />
        </div>
      </el-header>

      <el-main class="contentStyle">
        <div class="searchPage">
          <div class="videoPage">
            <TermsFilter @changeValue="changeValue"></TermsFilter>
            <VideoList :videoList="videoList"></VideoList>
            <div class="pagination">
              <Pagination :total="total" @pageChange="pageChange"></Pagination>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { videoPage } from "@/apis/video";
import { ref } from "vue";
import { HeaderLine, Logo } from "@/layout/components/index.ts";
import { useRoute } from "vue-router";

const route = useRoute();
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
  type: null,
  videoType: null,
  region: null,
  label: null,
  createYear: null,
  sortWay: null, //按点赞量排序
  videoName: null,
});

function getVideoInfo() {
  queryParams.value.videoName = JSON.parse(
    JSON.stringify(route.query.videoName)
  );

  query();
}
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

getVideoInfo();
</script>

<style lang="scss" scoped>
.searchPage {
  width: 100%;
  height: calc(100% - 5rem);
}

.videoPage {
  height: 100%;
  .pagination {
    margin-top: 20px;
  }
}

.SearchInputBox {
  width: 30rem;
  height: 3rem;
  overflow: hidden;
}

.layout {
  width: 100%;
  height: 100vh;
  .header {
    top: 0;
    position: sticky;
    color: #fff;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    font-size: 0.75rem;
  }

  .headerStyle {
    z-index: 2;
    padding: 0;
    width: 100%;
    height: 5rem;
    background: url("@/assets/image/picture/xiangru-chen.jpg") 0px -240px no-repeat;
    line-height: normal;
  }

  .contentStyle {
    display: flex;
    justify-content: center;
    height: calc(100vh - 5rem);
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
