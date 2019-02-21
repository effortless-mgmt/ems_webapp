import VueRouter from "vue-router";

import Login from "./components/Login.vue";
import HomePage from "./components/HomePage.vue";
import Temps from "./components/Temps.vue";
import WorkPeriods from "./components/WorkPeriods";

const routes = [
  { path: "/login", component: Login },
  { path: "/", component: HomePage },
  { path: "/temps", component: Temps },
  { path: "/workperiods", component: WorkPeriods }
];

export default new VueRouter({
  routes: routes
});
