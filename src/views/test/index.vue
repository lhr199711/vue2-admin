<template>
  <div :class="className">
    <button @click="changeWidth">changeWidth</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: "w200",
    };
  },
  methods: {
    changeWidth() {
      this.className === "w200"
        ? (this.className = "w500")
        : (this.className = "w200");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background: red;
  height: 300px;
  transition: all 0.5s;
}
.w200 {
  width: 200px !important;
}
.w500 {
  width: 500px !important;
}
</style>
