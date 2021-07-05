<template>
  <div class="layout-header-wraper">
    <svg-icon
      :class="['pointer', isCollapse ? 'rotate0' : 'rotate180']"
      @click="toggleCollapse"
      icon-class="collapse"
    />
    <div class="flex functions">
      <div class="head-pic"></div>
      <span class="role">用户</span>
      <svg-icon @click="logOut" class="pointer" icon-class="log-out" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("toggleCollapse");
    },
    logOut() {
      this.$store.dispatch("user/logout").then(() => {
        this.$message({
          message: "退出成功",
          type: "success",
        });
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
.layout-header-wraper {
  height: $headerHeight;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;
}
.head-pic {
  height: 50px;
  width: 50px;
  background: red;
  border-radius: 50%;
}
.role {
  margin: 0 30px 0 10px;
}
.rotate180 {
  transform: rotateZ(180deg);
}
.rotate0 {
  transform: rotateZ(0deg);
}
</style>
