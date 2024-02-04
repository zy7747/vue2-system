<!--  -->
<template>
  <div class="paginationBox">
    <el-pagination
      hide-on-single-page
      layout="prev, pager, next, jumper"
      next-text="下一页"
      prev-text="上一页"
      v-model:current-page="page"
      v-model:page-size="pageSize"
      background
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["pageChange", "pageSizeChange"]);

const page = ref<number>(1);
const pageSize = ref<number>(21);

defineProps({
  total: {
    text: "条数",
    required: true,
    type: Number,
  },
  pageSizes: {
    text: "页容量选择框",
    type: Array,
    default() {
      return ["20", "40", "60", "80"];
    },
  },
});

const handleSizeChange = () => {
  emit("pageChange", page, pageSize);
};

const handleCurrentChange = () => {
  emit("pageChange", page, pageSize);
};
</script>

<style lang="scss" scoped>
.paginationBox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
