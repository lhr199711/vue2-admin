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
  Select,
  Option,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
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
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(DatePicker);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Pagination);
  },
};

export default element;
