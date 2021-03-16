import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header";
import axios from 'axios'

Vue.config.productionTip = false;

//全局注册组件
Vue.component("Header", Header);
Vue.prototype.$axios = axios

new Vue({
  render: (h) => h(App),
}).$mount("#app");
