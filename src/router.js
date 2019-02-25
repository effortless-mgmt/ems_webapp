import VueRouter from "vue-router";

import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/HomePage";
import Temps from "./components/temp/TempList";
import WorkPeriods from "./components/workPeriod/WorkPeriodList";
import WorkPeriodItemPage from "./components/workPeriod/WorkPeriodItemPage";
import UserItemPage from "./components/user/UserItemPage";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/", component: HomePage },
  { path: "/temps", component: Temps },
  {
    path: "/user/:userName",
    name: "user",
    component: UserItemPage,
    props: true
  },
  {
    path: "/workperiods",
    component: WorkPeriods
  },
  {
    path: "/workperiods/:id",
    name: "workPeriod",
    component: WorkPeriodItemPage,
    props: true
  }
];

export default new VueRouter({
  mode: "history",
  routes: routes
  // linkExactActiveClass: "is-active"
});
