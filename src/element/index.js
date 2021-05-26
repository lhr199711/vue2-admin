/**
 * 按需加载element-ui
 */
import { Button } from "element-ui";

const element = {
  install(Vue) {
    Vue.use(Button);
  },
};

export default element;
