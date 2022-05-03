import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/Index.vue"),
  },
  {
    path: "/card-set/:id",
    name: "CardSet",
    component: () => import("@/views/card-set/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
