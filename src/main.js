import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header";
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 注册路由
import VueRouter from "vue-router";
// 导入路由
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import methodTwo from "./views/methodTwo";
import methodThree from "./views/methodThree";
import methodOne from "@/views/methodOne";
import elementTable from "./components/elementUi/element-table"
import note from './components/projectDemo/note'


Vue.config.productionTip = false;

//全局注册组件
Vue.component("Header", Header);

Vue.use(ElementUI)
Vue.prototype.$axios = axios;

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path:"/note",
            name:"note",
            component:note

        },

        // element-table 动态合并
        {
            path: "/elementTable",
            name: "elementTable",
            component: elementTable,
            children: [
                {path: '/elementTable/methodOne', name: 'methodOne', component: methodOne},
                {path: '/elementTable/methodTwo', name: 'methodTwo', component: methodTwo},
                {path: '/elementTable/methodThree', name: 'methodThree', component: methodThree}
            ]
        },
    ],
});

Vue.use(VueRouter);

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
