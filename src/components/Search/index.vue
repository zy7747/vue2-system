<!--  -->
<template>
  <div class="SearchInput">
    <div class="searchBox">
      <el-autocomplete
        v-model="keywords"
        :fetch-suggestions="querySearch"
        placeholder="视频搜索"
        show-word-limit
        clearable
        @keyup.enter="searchVideo(keywords)"
      >
        <template #default="{ item }">
          <div class="value" @click="searchVideo(item.value)">
            {{ item.value }}
          </div>
        </template>
        <template #append>
          <div class="SearchIcon" @click="searchVideo(keywords)">
            <SearchIcon style="width: 1rem; height: 1rem" />
          </div>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Search as SearchIcon } from "@element-plus/icons-vue";
import { videoPage } from "@/apis/video";
import { router } from "@/router";

const props = defineProps({
  value: {
    text: "值",
    type: String,
    default: () => {
      return "";
    },
  },
});

const keywords = ref<string>(props.value);

watch(
  () => props.value,
  (value: any) => {
    keywords.value = value;
  }
);

const querySearch = async (queryString: string, cb: any) => {
  const results: any = await videoPage({
    videoName: queryString,
    page: 1,
    size: 10,
  }).then((res: any) => {
    return res.data.list.map((item: any) => {
      return { ...item, value: item.videoName };
    });
  });

  cb(results);
};

function searchVideo(keyword: any) {
  router.push({ path: "/videoSearch", query: { videoName: keyword } });
}
</script>

<style lang="scss" scoped>
.SearchInput {
  width: 100%;
  height: 100%;
  display: flex;
}
.SearchIcon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.SearchIcon:hover {
  color: rgb(127, 240, 255);
  cursor: pointer;
}

.value {
  width: 24rem;
  overflow: hidden;
  text-overflow: ellipsis; //使用省略号代替溢出文本
  white-space: nowrap;
}

:deep(.el-input-group__append) {
  padding: 0;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchBox {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  :deep(.el-autocomplete) {
    width: 100% !important;
    height: 100% !important;
  }

  :deep(.el-input) {
    width: 100% !important;
    height: 100% !important;
  }
}

:deep(.el-input__wrapper) {
  padding: 0 15px;
  box-shadow: none !important;
  width: 100%;
  height: 100%;
}

:deep(.el-input-group__append) {
  background-color: transparent;
  box-shadow: none !important;
  color: #000000;
}
</style>
