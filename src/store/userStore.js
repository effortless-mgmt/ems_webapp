import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

export default {
  namespaced: true,
  state: {
    users: [],
    temps: [],
    currentUser: null
  },
  mutations: {
    setTemps(state, temps) {
      state.temps = temps;
    }
  },
  getters: {
    getUserByUserName: state => userName => {
      return state.temps.find(u => u.userName === userName);
    }
  },
  actions: {
    getTemps(context) {
      api
        .get(base_url + "/api/user?primaryRole=2")
        .then(response => {
          context.commit("setTemps", response.data);
        })
        .catch(e => {});
    }
  }
};
