import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

import Router from "../router";
export default {
  namespaced: true,
  state: {
    token: null,
    user: null
  },
  computed: {},
  getters: {
    isLoggedIn: state => {
      return state.token ? true : false;
    },
    getAuthorizationHeader: state => {
      if (state.token) return "Bearer " + state.token;
      return null;
    },
    getUser: state => {
      if (state.user) return state.user;
      return null;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("access_token", token);
    },
    clear(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("access_token");
    }
  },
  actions: {
    login(context, user) {
      api
        .post(base_url + "/api/auth/login", user)
        .then(response => {
          context.commit("setToken", response.data.token);
          context.commit("setUser", response.data.user);
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
