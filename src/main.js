import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//按需加载element-ui
import element from "@/element";
Vue.use(element);

//全局element组件
import "@/element/global";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
