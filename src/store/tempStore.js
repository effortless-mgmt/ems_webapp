import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

export default {
  namespaced: true,
  state: {
    temps: []
  },
  mutations: {
    set(state, temps) {
      state.temps = temps;
    }
  },
  actions: {
    refresh(context) {
      api
        .get(base_url + "/api/user?primaryRole=2")
        .then(response => {
          context.commit("set", response.data);
        })
        .catch(e => {});
    }
  }
};
