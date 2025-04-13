<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import {
  initTheme,
  toggleDarkTheme,
  isDarkTheme,
} from "./composables/useDarkTheme";

import Menubar from "primevue/menubar";
import Button from "primevue/button";
import "primeicons/primeicons.css";

const items = [
  {
    label: "Início",
    icon: "pi pi-fw pi-home",
    command: () => scrollToSection("home"),
  },
  {
    label: "Sobre",
    icon: "pi pi-fw pi-user",
    command: () => scrollToSection("sobre"),
  },
  {
    label: "Projetos",
    icon: "pi pi-fw pi-folder",
    command: () => scrollToSection("projetos"),
    hasSubmenu: true,
    items: [
      {
        label: "Projeto 1",
        icon: "pi pi-fw pi-file",
        command: () => scrollToSection("projeto1"),
      },
      {
        label: "Projeto 2",
        icon: "pi pi-fw pi-file",
        command: () => scrollToSection("projeto2"),
      },
    ],
  },
  {
    label: "Habilidades",
    icon: "pi pi-fw pi-star",
    command: () => scrollToSection("habilidades"),
  },
  {
    label: "Contato",
    icon: "pi pi-fw pi-envelope",
    command: () => scrollToSection("contato"),
  },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  initTheme();
});
</script>

<template>
  <Menubar class="custom-menubar" :model="items">
    <template #item="{ item, props, hasSubmenu }">
      <a
        v-bind="props.action"
        @click="command"
        class="menubar-item"
        :class="{ 'has-submenu': hasSubmenu }"
      >
        <span :class="item.icon"></span>
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>
    <template #start> </template>
    <template #end>
      <Button
        :icon="isDarkTheme ? 'pi pi-fw pi-moon' : 'pi pi-fw pi-sun'"
        severity="secondary"
        @click="toggleDarkTheme"
        aria-label="Toggle Dark Mode"
        rounded
      />
    </template>
  </Menubar>
  <RouterView />
</template>

<style scoped>
.custom-menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  border: none;
  border-radius: 0;
}
</style>
