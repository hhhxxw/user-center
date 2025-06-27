import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "@/page/HomePage.vue";
import UserRegisterPage from "@/page/user/UserRegisterPage.vue";
import UserManagePage from "@/page/admin/UserManagePage.vue";
import UserLoginPage from "@/page/user/UserLoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/user/login",
    name: "userLogin",
    component: UserLoginPage,
  },
  {
    path: "/user/register",
    name: "userRegister",
    component: UserRegisterPage,
  },
  {
    path: "/admin/userManager",
    name: "adminUserManager",
    component: UserManagePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
