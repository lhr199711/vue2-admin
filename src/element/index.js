/**
 * 按需加载element-ui
 */
import { Form, Input, FormItem, Button } from "element-ui";

const element = {
  install(Vue) {
    Vue.use(Form);
    Vue.use(Input);
    Vue.use(FormItem);
    Vue.use(Button);
  },
};

export default element;
