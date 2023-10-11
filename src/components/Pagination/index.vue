<!--  -->
<template>
  <div class="paginationBox">
    <a-pagination
      v-model:current.sync="page"
      show-size-changer
      show-quick-jumper
      :total="total"
      @change="onChange"
      :pageSizeOptions="pageSizes"
      :defaultPageSize.sync="pageSize"
      :responsive="true"
      size="small"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["pageChange", "pageSizeChange"]);

const page = ref<number>(1);
const pageSize = ref<number>(20);

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

const onChange = (page: number, pageSize: number) => {
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
