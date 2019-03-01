import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import store from "../store/store";

const base_url = "https://staging.effortless.dk";
const api = axios.create({
  baseURL: base_url
});
api.interceptors.request.use(config => {
  config.headers.common["Authorization"] =
    store.getters["account/getAuthorizationHeader"];
  return config;
});

api.interceptors.response.use(
  response => {
    store.commit("clearErrors");
    return response;
  },
  error => {
    //First check if error actually has a response. Network Error responses are undefined.
    if (error.response) {
      if (error.response.status === 401) {
        store.dispatch("clearAll");
      }
    }
    store.commit("setErrors", error);
    return Promise.reject(error);
  }
);

export default api;
