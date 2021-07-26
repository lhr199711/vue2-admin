/*
 * @Descripttion :
 * @Author       : Harry
 * @Date         : 2021-05-26 16:24:25
 * @LastEditors  : Harry
 * @LastEditTime : 2021-07-26 09:32:39
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/main.scss"; // global css

import "@/assets/icons/index.js"; //svg-icon全局组件

import "@/router/permission"; //全局路由守卫

import { mockXHR } from "../mock";
if (process.env.NODE_ENV == "development") {
  mockXHR();
}

import Directives from "@/directives"; //全局指令
Vue.use(Directives);

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

// 新加的注释
