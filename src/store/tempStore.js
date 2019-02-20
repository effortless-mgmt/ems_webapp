import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import * as api from "../utils/networkUtils";

export default {
  namespaced: true,
  state: {
    temps: []
  },
  mutations: {
    set(state, temps) {
      state.temps = temps;
    }
  },
  actions: {
    refresh(context) {
      api
        .get("/api/user?primaryRoleType=2")
        .then(response => {
          context.commit("set", response.data);
        })
        .catch(e => {});
    }
  }
};
