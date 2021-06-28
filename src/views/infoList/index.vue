<template>
  <div class="info-list-wraper">
    <info-list-header />
    <info-list-table />
  </div>
</template>

<script>
import InfoListHeader from "./components/InfoListHeader.vue";
import InfoListTable from "./components/InfoListTable.vue";
export default {
  name: "InfoList",
  components: {
    InfoListHeader,
    InfoListTable,
  },
};
</script>

<style lang="scss" scoped>
.info-list-wraper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
