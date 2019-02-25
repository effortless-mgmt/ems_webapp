import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import Store from "../store/store";

export const api = axios.create();
api.interceptors.request.use(
  config => {
    config.headers.common["Authorization"] =
      Store.getters["account/getAuthorizationHeader"];
    return config;
  },
  api.interceptors.response.use(
    response => {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        Router.push("/login");
      }
      return Promise.reject(error.response);
    }
  )
);

export const base_url = "https://api.effortless.dk";
