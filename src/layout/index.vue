<template>
  <div class="layout-wraper">
    <div class="layout-aside">
      <layout-aside :isCollapse.sync="isCollapse" />
    </div>
    <div class="layout-container tansition">
      <div class="layout-header">
        <layout-header @toggleCollapse="toggleCollapse" />
      </div>
      <div class="layout-main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutAside from "./components/LayoutAside.vue";
export default {
  components: {
    LayoutHeader,
    LayoutAside,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse ? (this.isCollapse = false) : (this.isCollapse = true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
.layout-wraper {
  height: 100vh;
  display: flex;
}
.layout-header {
  height: $headerHeight;
}
.layout-main {
  height: calc(100vh - #{$headerHeight});
  background: #eee;
  border: 16px solid #eee;
  box-sizing: border-box;
}
.layout-aside {
  display: inline-block;
  background-color: $bgColor;
}
.layout-container {
  flex: 1;
}
</style>
