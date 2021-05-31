/**
 * 按需加载element-ui
 */
import { Form, Input, FormItem } from "element-ui";

const element = {
  install(Vue) {
    Vue.use(Form);
    Vue.use(Input);
    Vue.use(FormItem);
  },
};

export default element;
