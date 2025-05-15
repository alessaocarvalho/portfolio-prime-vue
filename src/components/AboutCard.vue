<template>
  <Card class="card">
    <template #title>{{ title }}</template>
    <template #content>
      <p class="m-0">
        {{ content }}
      </p>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";

const props = defineProps({
  title: String,
  content: String,
});
</script>