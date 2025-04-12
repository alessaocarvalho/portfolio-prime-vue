<script setup>
import { RouterView } from "vue-router";

import Menubar from "primevue/menubar";

const items = [
  {
    label: "Início",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Sobre",
    icon: "pi pi-fw pi-user",
    to: "/sobre",
  },
  {
    label: "Projetos",
    icon: "pi pi-fw pi-folder",
    to: "/projetos",
  },
  {
    label: "Habilidades",
    icon: "pi pi-fw pi-star",
    to: "/habilidades",
  },
  {
    label: "Contato",
    icon: "pi pi-fw pi-envelope",
    to: "/contato",
  },
];
</script>

<template>
  <Menubar :model="items">
    <template #start> </template>
    <template #end> </template>
  </Menubar>

  <RouterView />
</template>
