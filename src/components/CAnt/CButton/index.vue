<!--  -->
<template>
  <div class="">
    <a-button v-bind="$attrs" :size="size">
      {{ text }}
    </a-button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    text: "按钮名称",
    type: [String],
    default: () => {
      return "";
    },
  },
  size: {
    text: "按钮大小",
    type: [String],
    default: () => {
      return "mini";
    },
  },
  icon: {
    text: "按钮图标",
    type: [String],
    default: () => {
      return "";
    },
  },
});
</script>

<style lang="scss" scoped></style>
