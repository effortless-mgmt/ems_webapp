import VueRouter from "vue-router";

import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/homePage/HomePage";
import Temps from "./components/temp/TempPage";
import CompaniesPage from "./components/company/CompaniesPage";
import CompanyProfile from "./components/company/CompanyProfile";
import DepartmentProfile from "./components/department/DepartmentProfile";
import WorkPeriods from "./components/workPeriod/WorkPeriodList";
import WorkPeriodItemPage from "./components/workPeriod/WorkPeriodItemPage";
import UserItemPage from "./components/user/UserItemPage";
import AddUserForm from "./components/user/AddUserForm";

// import store from "./store/store";

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
    path: "/user/new",
    name: "newUser",
    component: AddUserForm
  },
  {
    path: "/companies",
    component: CompaniesPage
  },
  {
    path: "/companies/:id",
    name: "company",
    component: CompanyProfile,
    props: true
  },
  {
    path: "/companies/:companyId/department/:id",
    name: "department",
    component: DepartmentProfile,
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

const router = new VueRouter({
  mode: "history",
  routes: routes
  // linkExactActiveClass: "is-active"
});

router.beforeEach((to, from, next) => {
  router.app.$store.commit("clearErrors");
  if (to.path != "/login" && !router.app.$store.getters["account/isLoggedIn"]) {
    next("/login");
    const error = new Error("Please log in.");
    router.app.$store.commit("setErrors", error);
  } else if (
    to.path == "/login" &&
    router.app.$store.getters["account/isLoggedIn"]
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
