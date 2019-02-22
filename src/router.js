import VueRouter from "vue-router";

import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/HomePage";
import Temps from "./components/temp/TempList";
import WorkPeriods from "./components/workPeriod/WorkPeriodList";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/", component: HomePage },
  { path: "/temps", component: Temps },
  { path: "/workperiods", component: WorkPeriods }
];

export default new VueRouter({
  mode: "history",
  routes: routes,
  linkExactActiveClass: "is-active"
});
