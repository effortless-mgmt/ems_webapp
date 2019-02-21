import Router from "../router";

import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("access_token")
  },
  getters: {
    isLoggedIn: state => {
      if (state.token) return true;
      return false;
    },
    getAuthorizationHeader: state => {
      if (state.token) return "Bearer " + state.token;
      return null;
    }
  },
  mutations: {
    set(state, token) {
      localStorage.setItem("access_token", token);
    },
    clear(state) {
      state.token = null;
      localStorage.removeItem("access_token");
    }
  },
  actions: {
    login(context, user) {
      api.post(base_url + "/api/auth/login", user).then(response => {
        context.commit("set", response.data.token);
        Router.push("/");
      });
    }
  }
};
