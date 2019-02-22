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
    // setUser(state, user) {
    //   state.currentUser = user;
    //   console.log(user.firstName);
    // },
    // clearCurrentUser(state) {
    //   state.currentUser = null;
    // }
  },
  getters: {
    getUserByUserName: state => userName => {
      console.log("Trying to find user by username.");
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
    // getUser(context, id) {
    //   api.get(base_url + "/api/user/" + id).then(response => {
    //     context.commit("setUser", response.data);
    //   });
    // },
    // clearCurrentUser(context) {
    //   context.commit("clearCurrentUser");
    // }
  }
};
