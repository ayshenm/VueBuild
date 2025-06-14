import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UsersView from "@/views/UsersView.vue";
import UserView from "@/views/UserView.vue";
import NotFound from "@/views/NotFound.vue";

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
