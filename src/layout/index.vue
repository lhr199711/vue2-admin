<template>
  <div class="layout-wraper">
    <div class="layout-aside">
      <layout-aside :isCollapse.sync="isCollapse" :routes="routes" />
    </div>
    <div class="layout-container tansition">
      <div class="layout-header">
        <layout-header @toggleCollapse="toggleCollapse" />
      </div>
      <div class="layout-main">
        <div class="main-container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
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
      routes: [],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse ? (this.isCollapse = false) : (this.isCollapse = true);
    },
  },
  created() {
    this.routes = this.$router.options.routes;
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
  .main-container {
    background: #fff;
    height: 100%;
    overflow: auto;
  }
}
.layout-aside {
  display: inline-block;
  background-color: $bgColor;
}
.layout-container {
  flex: 1;
}
</style>
