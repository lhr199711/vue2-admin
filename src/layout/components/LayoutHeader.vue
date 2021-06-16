<template>
  <div>
    <button @click="clickFn">toggle</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      this.$emit("toggleCollapse");
    },
  },
};
</script>

<style></style>
