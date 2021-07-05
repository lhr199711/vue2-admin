<template>
  <div class="list-header">
    <div class="flex select mgr40">
      <span class="title">分类:</span>
      <el-select v-model="categoryValue" placeholder="请选择">
        <el-option
          v-for="item in categoryOpts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="flex date-picker mgr40">
      <span class="title">日期:</span>
      <el-date-picker
        v-model="dateValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </div>
    <div class="flex keyword mgr10">
      <span class="title">关键字:</span>
      <el-select v-model="keywordValue" placeholder="请选择">
        <el-option
          v-for="item in keywordOpts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="flex search">
      <el-input
        class="mgr10"
        v-model="searchValue"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoListHeader",
  data() {
    return {
      categoryOpts: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      categoryValue: "",
      dateValue: "",
      keywordValue: "0",
      keywordOpts: [
        {
          value: "0",
          label: "ID",
        },
        {
          value: "1",
          label: "标题",
        },
      ],
      searchValue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.list-header {
  display: flex;
  .select {
    justify-content: flex-start;
  }
  .title {
    margin: 0 10px 0 0;
  }
}
</style>
