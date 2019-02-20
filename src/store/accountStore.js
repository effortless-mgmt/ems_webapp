import Router from "../router";

import * as api from "../utils/networkUtils";

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
      api.post("/api/auth/login", user).then(response => {
        context.commit("set", response.data.token);
      });
    }
  }
};
