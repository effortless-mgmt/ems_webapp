import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export const api = axios.create();
api.interceptors.request.use(config => {
  config.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("access_token");
  return config;
});

//##################################
// For when auth is actually needed.
//##################################

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   function(error) {
//     if (error.response.status === 401) {
//       localStorage.removeItem("access_token");
//       router.push("/login");
//     }
//     return Promise.reject(error.response);
//   }
// );

export const base_url = "https://api.effortless.dk";

export function get(path) {
  console.log("Attempting to get from " + path);
  return api.get(base_url + path);
}

export function post(path, user) {
  console.log("Attempting to get from " + path);
  return api.post(base_url + path, user);
}
