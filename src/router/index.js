import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    hidden: true, //在页面通过$router.options.routes能获取到整个数组，生成侧边栏，hidden为true不生成侧边栏
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/test"),
    hidden: true,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/console",
    name: "Console",
    meta: {
      name: "控制台",
      iconName: "console",
    },
    component: Layout,
    children: [
      {
        path: "/index", //需要注意children里面的path加斜杠表示根路径
        name: "Index",
        meta: {
          name: "首页",
        },
        component: () => import("@/views/home"),
      },
    ],
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      name: "信息管理",
      iconName: "info-manage",
    },
    component: Layout,
    children: [
      {
        path: "/infoList",
        name: "InfoList",
        meta: {
          name: "信息列表",
        },
        component: () => import("@/views/infoList"),
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        meta: {
          name: "信息分类",
        },
        component: () => import("@/views/infoCategory"),
      },
    ],
  },
  {
    path: "/user",
    name: "User",
    meta: {
      name: "用户管理",
      iconName: "user-manage",
    },
    component: Layout,
    children: [
      {
        path: "/userList",
        name: "UserList",
        meta: {
          name: "用户列表",
        },
        component: () => import("@/views/userList"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
