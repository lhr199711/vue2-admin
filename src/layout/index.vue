<template>
  <div class="layout-wraper" :class="isCollapse ? 'close' : 'open'">
    <div class="layout-aside">
      <layout-aside :isCollapse.sync="isCollapse" :routes="routes" />
    </div>
    <div class="layout-container tansition">
      <layout-header @toggleCollapse="toggleCollapse" />
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
}

.layout-main {
  height: calc(100vh - #{$headerHeight});
  background: #eee;
  border: 16px solid #eee;
  box-sizing: border-box;
  .main-container {
    background: #fff;
    height: 100%;
  }
}
.layout-aside {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  background-color: $bgColor;
  transition: width 0.3s;
}
.open .layout-aside {
  width: $asideOpenWidth;
}
.close .layout-aside {
  width: $asideCloseWidth;
}
.layout-container {
  transition: margin-left 0.3s;
}
.open .layout-container {
  margin-left: $asideOpenWidth;
}
.close .layout-container {
  margin-left: $asideCloseWidth;
}
</style>
