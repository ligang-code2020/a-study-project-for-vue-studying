import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header";
import axios from "axios";

// 注册路由
import VueRouter from "vue-router";
// 导入路由
import About from "./views/About.vue";
import Home from "./views/Home.vue";

Vue.config.productionTip = false;

//全局注册组件
Vue.component("Header", Header);
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
  ],
});

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
