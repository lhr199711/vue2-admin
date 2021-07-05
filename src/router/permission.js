import router from "./index";
import * as auth from "@u/auth";

const whiteRouter = ["/login"];

router.beforeEach((to, from, next) => {
  if (auth.getToKen()) {
    if (to.path === "/login") {
      next(from.path);
    } else {
      next();
    }
  } else {
    if (whiteRouter.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
});
