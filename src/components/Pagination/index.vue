<template>
  <div class="pagination-wraper">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      :pager-count="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="60"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      currentPage: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination-wraper {
  display: flex;
  justify-content: flex-end;
}
</style>
