import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import UsersView from "@/components/UsersView.vue";
import UserView from "@/components/UserView.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/users", component: UsersView },
  { path: "/users", component: UsersView },
  { path: "/users/:id", component: UserView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
