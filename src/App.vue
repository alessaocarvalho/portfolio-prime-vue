<template>
  <Menubar :model="items" :dt="customMenubar">
    <template #item="{ item, props }">
      <router-link
        v-if="item.command"
        v-slot="{ href }"
        :to="href"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="command">
          <span :class="item.icon"></span>
          <span>{{ item.label }}</span>
        </a>
      </router-link>
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

<script setup>
import { RouterView } from "vue-router";
import { toggleDarkTheme } from "./composables/useDarkTheme";

import Menubar from "primevue/menubar";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import router from "./router";

const customMenubar = {
  colorScheme: {
    light: {
      root: {
        background: 'var(--hero-bg)',
        borderColor: '0',
        borderRadius: '0',
        submenuBorderColor: '0',
        submenuBorderRadius: '0',
      },
    },
    dark: {
        root:{
          background: 'var(--hero-bg)',
          borderColor: '0',
          borderRadius: '0',
          submenuBorderColor: '0',
          submenuBorderRadius: '0',
        }
      },
  }
}

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
    command: () => router.push("/projects"),
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

</script>