import api from "../utils/networkUtils";

function initialState() {
  return {
    departments: [],
    department: null,
    isLoading: false
  };
}

export default {
  namespaced: true,
  state: {
    departments: [],
    department: null,
    isLoading: true
  },
  mutations: {
    set(state, departments) {
      state.departments = departments;
    },
    setDepartment(state, department) {
      state.department = department;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    clear(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    }
  },
  actions: {
    refresh(context) {
      context.commit("setLoading", true);
      api
        .get("/api/department")
        .then(response => {
          context.commit("setLoading", false);
          context.commit("set", response.data);
        })
        .catch(() => {});
    },
    getById(context, id) {
      api
        .get("/api/department/" + id)
        .then(response => {
          context.commit("setDepartment", response.data);
        })
        .catch(() => {
          console.log("Problems finding department " + id);
        });
    }
  },
  mounted() {
    this.refresh();
  }
};
