import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header";

Vue.config.productionTip = false;

//全局注册组件
Vue.component("Header", Header);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
