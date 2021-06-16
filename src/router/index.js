import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/test"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/layout"),
    children: [
      {
        path: "/home", //需要注意children里面的path加斜杠表示根路径
        name: "Home",
        component: () => import("@/views/home"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
