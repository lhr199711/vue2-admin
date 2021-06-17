<template>
  <el-menu
    ref="test"
    :default-active="defaultActiveUrl"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    :collapse="isCollapse"
    text-color="#fff"
    :router="true"
  >
    <template v-for="(item, i) in routes">
      <el-submenu v-if="!item.hidden" :index="item.path" :key="i">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.meta.name }}</span>
        </template>
        <el-menu-item-group v-if="item.children">
          <el-menu-item
            v-for="(child, k) in item.children"
            :index="child.path"
            :key="k"
          >
            {{ child.meta.name }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
    },
    routes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      defaultActiveUrl: sessionStorage.getItem("defaultActiveUrl")
        ? sessionStorage.getItem("defaultActiveUrl")
        : "/index",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      sessionStorage.setItem("defaultActiveUrl", key);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $asideOpenWidth;
  min-height: 400px;
}
</style>
