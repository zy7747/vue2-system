<!--  -->
<template>
  <div class="headerLine">
    <!-- 语言切换 -->
    <el-dropdown
      trigger="click"
      placement="bottom-start"
      @command="handleSelect"
    >
      <a class="cursor" href="JavaScript:void(0)">
        <svg-icon :name="'flag-' + languageIcon" class="svgIcon" />
      </a>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            :command="item"
            v-for="(item, index) in langs"
            :key="index"
          >
            <svg-icon :name="'flag-' + item.icon" />
            <span style="margin-left: 10px"> {{ item.lang }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";

const langs = ref<any>([
  { icon: "cn", lang: "中文", language: "zh" },
  { icon: "us", lang: "English", language: "en" },
  { icon: "jp", lang: "日本語", language: "jp" },
  { icon: "kr", lang: "한국인", language: "kr" },
]);

const i18n = useI18n();

//储存语种并进行切换
const handleSelect = (item: any) => {
  localStorage.setItem("language", item.language);
  i18n.locale.value = item.language;
  refresh();
};

//刷新界面
const refresh = () => {
  location.reload();
};

// 计算当前语种
const languageIcon = computed(() => {
  const result = langs.value.find(
    (item: any) => item.language === i18n.locale.value
  );

  return result.icon;
});
</script>

<style lang="scss" scoped>
.headerLine {
  display: flex;
  align-items: center;
  height: 100%;
}

.svgIcon {
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
}
</style>
