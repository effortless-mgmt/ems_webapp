import Vue from "vue";
import App from "./App.vue";

import "es6-promise/auto";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Router from "./router.js";
import Store from "./store/store.js";

Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: h => h(App),
  store: Store
}).$mount("#app");
