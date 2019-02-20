import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import { base_url } from "./paths.js";

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
      const axiosInstance = axios.create();

      axiosInstance.interceptors.request.use(config => {
        config.headers.common["Authorization"] =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiamQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImV4cCI6MTU1MDcxODk3MCwiaXNzIjoibG9jYWxob3N0OjUwMDEifQ.ij6K4CI7PJ3OjXeYrL0CsXmtyMSriOctq2-yAZav0Ds";
        return config;
      });
      axiosInstance
        .get(base_url + "/api/user?primaryRoleType=2")
        .then(response => {
          context.commit("set", response.data);
        });
    }
  }
};
