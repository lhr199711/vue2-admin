/**
 * 按需加载element-ui
 */
import {
  Form,
  Input,
  FormItem,
  Button,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
} from "element-ui";

const element = {
  install(Vue) {
    Vue.use(Form);
    Vue.use(Input);
    Vue.use(FormItem);
    Vue.use(Button);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(MenuItem);
  },
};

export default element;
