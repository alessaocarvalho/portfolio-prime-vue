import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

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