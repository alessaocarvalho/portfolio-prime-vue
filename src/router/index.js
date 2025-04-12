import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/hero", name: "hero", component: HeroSection },
  { path: "/about", name: "about", component: AboutSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;