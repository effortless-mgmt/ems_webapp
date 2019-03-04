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
Vue.use(require("vue-moment"));
Vue.config.productionTip = false;

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilter,
  faSearch,
  faPhone,
  faEnvelope,
  faAddressBook,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFilter);
library.add(faSearch);
library.add(faPhone);
library.add(faEnvelope);
library.add(faAddressCard);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import Router from "./router.js";
import Store from "./store/store.js";

new Vue({
  router: Router,
  render: h => h(App),
  store: Store
}).$mount("#app");
