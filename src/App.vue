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
import router from "./router";

const items = [
  {
    label: "Início",
    icon: "pi pi-fw pi-home",
    command: () => router.push("/"),

  },
  {
    label: "Sobre",
    icon: "pi pi-fw pi-user",
    command: () => router.push("/about"),
  },
  {
    label: "Projetos",
    icon: "pi pi-fw pi-folder",
    hasSubmenu: true,
    items: [
      {
        label: "Projeto 1",
        icon: "pi pi-fw pi-file",
      },
      {
        label: "Projeto 2",
        icon: "pi pi-fw pi-file",
      },
    ],
  },
  {
    label: "Habilidades",
    icon: "pi pi-fw pi-star",
    command: () => router.push("/skills"),
  },
  {
    label: "Contato",
    icon: "pi pi-fw pi-envelope",
    command: () => router.push("/contact"),
  },
];

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
  
  background-color: var(--menubar-bg);
  color: var(--menubar-text);

  border: none;
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
