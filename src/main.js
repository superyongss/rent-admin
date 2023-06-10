import Vue from 'vue';
import App from './App.vue';
import "@/mock/mockServer";
import router from "@/router";
import {
    Container, Aside, Main, Header, Footer,
    Row, Col, Menu, MenuItem, Submenu, MenuItemGroup,
    Tabs, TabPane, Breadcrumb, BreadcrumbItem, Table, TableColumn,
    Button, Descriptions, DescriptionsItem, Tag, Input,
    Form, FormItem, DatePicker, TimePicker, Radio, RadioGroup,
    Select, Option, Drawer, MessageBox
} from "element-ui";

Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Drawer);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
