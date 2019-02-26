import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import store from "../store/store";
import router from "../router";

const base_url = "https://api.effortless.dk";
const api = axios.create({
  baseURL: base_url
});
api.interceptors.request.use(
  config => {
    config.headers.common["Authorization"] =
      store.getters["account/getAuthorizationHeader"];
    return config;
  },
  api.interceptors.response.use(
    response => {
      store.commit("clearErrors");
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        store.commit("clearAll");
      }
      return Promise.reject(error.response);
    }
  )
);

export default api;
