import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ProductView from "@/views/ProductView.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/products", component: ProductsView },
  { path: "/products", component: ProductsView },
  { path: "/products/:id", component: ProductView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
