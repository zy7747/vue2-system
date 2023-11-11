<!--  -->
<template>
  <div class="SearchInput">
    <div class="searchBox">
      <el-autocomplete
        style="width: 100%"
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
          <el-button text :icon="Search" @click="searchVideo(keywords)">
          </el-button>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
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
    console.log(10, value);

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

.searchBox {
  width: 100%;
  height: 100%;
  padding: 3px 5px;
  background-color: #fff;
  border-radius: 30px;
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
