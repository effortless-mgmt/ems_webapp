import api from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

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
    setUser(state, user) {
      state.user = user;
    },
    clear(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("access_token");
    }
  },
  actions: {
    login(context, user) {
      return new Promise((resolve, reject) => {
        api
          .post("/api/auth/login", user)
          .then(response => {
            context.commit("setToken", response.data.token);
            context.commit("setUser", response.data.user);
            resolve();
          })
          .catch(e => {
            reject(e.message);
          });
      });
    },
    logout() {
      this.dispatch("clearAll");
    }
  }
};
