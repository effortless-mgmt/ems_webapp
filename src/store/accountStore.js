import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

import Router from "../router";
export default {
  namespaced: true,
  state: {
    token: null
  },
  computed: {},
  getters: {
    isLoggedIn: state => {
      return state.token ? true : false;
    },
    getAuthorizationHeader: state => {
      if (state.token) return "Bearer " + state.token;
      return null;
    }
  },
  mutations: {
    set(state, token) {
      state.token = token;
      localStorage.setItem("access_token", token);
    },
    clear(state) {
      state.token = null;
      localStorage.removeItem("access_token");
    }
  },
  actions: {
    login(context, user) {
      api
        .post(base_url + "/api/auth/login", user)
        .then(response => {
          context.commit("set", response.data.token);
        })
        .then(() => {
          Router.push("/");
        })
        .catch(e => {
          if (e.status === 401) {
            console.log("Wrong credentials.");
          }
        });
    },
    logout() {
      this.dispatch("clearAll");
    }
  }
};
