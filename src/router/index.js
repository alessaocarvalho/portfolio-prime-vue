import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import HeroSection from "@/views/HeroSection.vue";
import AboutSection from "@/views/AboutSection.vue";
import ProjectsSection from "@/views/ProjectsSection.vue";
import ContactSection from "@/views/ContactSection.vue";
import SkillsSection from "@/views/SkillsSection.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/hero", name: "hero", component: HeroSection },
  { path: "/about", name: "about", component: AboutSection },
  { path: "/projects", name: "projects", component: ProjectsSection},
  {path: "/skills", name: "skills", component: SkillsSection},
  { path: "/contact", name: "contact", component: ContactSection }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;