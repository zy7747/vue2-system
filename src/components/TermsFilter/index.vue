<!--  -->
<template>
  <div class="filter">
    <!-- 视频类型 -->
    <div class="filterHeader">
      <!-- 视频排序方式 -->
      <ul class="videoSortWay filterItem">
        <li
          :class="{ action: videoSortWayValue === item.value }"
          class="item"
          v-for="(item, index) in videoSortWay"
          :key="index"
          @click="changeVideoSortWay(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>

      <el-button
        size="small"
        :icon="show ? ArrowDown : ArrowUp"
        @click="show = !show"
        >更多筛选
      </el-button>
    </div>

    <div class="filterBody" v-show="show">
      <ul class="videoType filterItem">
        <li
          class="item"
          @click="changeVideoTypeValue(item.value)"
          :class="{ action: videoTypeValue === item.value }"
          v-for="(item, index) in videoType"
          :key="index"
        >
          {{ item.label }}
        </li>
      </ul>

      <!-- 地区 -->
      <ul class="videoArea filterItem">
        <li
          @click="changeVideoAreaValue(item.value)"
          class="item"
          :class="{ action: videoAreaValue === item.value }"
          v-for="(item, index) in videoArea"
          :key="index"
        >
          {{ item.label }}
        </li>
      </ul>

      <!-- 年份 -->
      <ul class="videoArea filterItem">
        <li style="margin: 0 10px">年份</li>
        <li>
          <el-date-picker
            v-model="year"
            type="year"
            placeholder="选择年份"
            @change="changeVideo"
            format="YYYY"
            value-format="YYYY"
          />
        </li>
        <li style="margin: 0 10px">关键字</li>
        <li>
          <el-input
            v-model="videoName"
            style="width: 220px"
            placeholder="输入关键字"
            @change="changeVideo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useDictStore } from "@/store/dict";
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";

const emit = defineEmits(["changeValue"]);

const dictStore: any = useDictStore();

const show = ref<Boolean>(false);

//选择列表
const videoSortWay = ref<any[]>([]);
const videoArea = ref<any[]>([]);
const videoType = ref<any[]>([]);
//默认值
const videoSortWayValue = ref<any>("");
const videoAreaValue = ref<any>("");
const videoTypeValue = ref<any>("");
const year = ref<any>("");
const videoName = ref<any>("");
//获取字典
function setDict() {
  videoSortWay.value = dictStore.dict["video_sort_way"];
  videoType.value = dictStore.dict["video_type"];
  videoArea.value = dictStore.dict["video_area"];
}

//修改值事件
function changeVideoSortWay(item: any) {
  videoSortWayValue.value = item;
  changeVideo();
}
function changeVideoAreaValue(item: any) {
  videoAreaValue.value = item;
  changeVideo();
}
function changeVideoTypeValue(item: any) {
  videoTypeValue.value = item;
  changeVideo();
}

function changeVideo() {
  emit("changeValue", {
    sortWay: videoSortWayValue.value,
    region: videoAreaValue.value,
    videoType: videoTypeValue.value,
    year: year.value,
    // videoName: videoName.value,
  });
}

setDict();
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  .filterItem {
    font-size: 12px;
    display: flex;
    width: 100%;
    margin: 10px 0px;
    .item {
      margin-right: 5px;
      padding: 5px 8px;
      border-radius: 5px;
      cursor: pointer;
    }

    .action {
      background-color: rgb(5, 173, 86);
    }
  }

  .filterHeader {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}

.videoArea {
  display: flex;
  align-items: center;
}
</style>
