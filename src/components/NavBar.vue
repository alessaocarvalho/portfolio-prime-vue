<template>
  <Menubar class="menubar" :model="items" :dt="customMenubar">
    <template #item="{ item, props }">
        <a v-ripple :href="item.href" v-bind="props.action" @click.prevent="handleClick(item)">
          <span :class="item.icon"></span>
          <span>{{ item.label }}</span>
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
</template>

<script setup>
import { toggleDarkTheme } from "../composables/useDarkTheme";

import Menubar from "primevue/menubar";
import Button from "primevue/button";
import "primeicons/primeicons.css";

const customMenubar = {
  colorScheme: {
    light: {
      root: {
        background: "var(--hero-bg)",
        borderColor: "0",
        borderRadius: "0",
        submenuBorderColor: "0",
        submenuBorderRadius: "0",
      },
    },
    dark: {
      root: {
        background: "var(--hero-bg)",
        borderColor: "0",
        borderRadius: "0",
        submenuBorderColor: "0",
        submenuBorderRadius: "0",
      },
    },
  },
};

const items = [
  {
    label: "Início",
    icon: "pi pi-fw pi-home",
    targetId: "hero",
  },
  {
    label: "Sobre",
    icon: "pi pi-fw pi-user",
    targetId: "about",
  },
  {
    label: "Projetos",
    icon: "pi pi-fw pi-folder",
    targetId: "projects",
  },
  {
    label: "Habilidades",
    icon: "pi pi-fw pi-star",
    targetId: "skills",
  },
  {
    label: "Contato",
    icon: "pi pi-fw pi-envelope",
    targetId: "contact",
  },
];

function handleClick(item) {
  if (item.targetId) {
    const element = document.getElementById(item.targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else if (item.href) {
    window.location.href = item.href;
  }
}
</script>

<style scoped>
.menubar {
  position: fixed;
  width: 100%;
}
</style>
