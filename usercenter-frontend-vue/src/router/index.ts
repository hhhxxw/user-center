import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/page/HomePage.vue";
import UserRegisterPage from "@/page/user/UserRegisterPage.vue";
import UserLoginPage from "@/page/user/UserLoginPage.vue";
import UserManagePage from "@/page/admin/UserManagePage.vue";

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
    path: "/admin/userManage",
    name: "userManage",
    component: UserManagePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
