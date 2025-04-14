<script setup>
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>

<template>
    <Menubar :model="items">
    <template #item="{ item, props }">
      <router-link
        v-if="item.command"
        v-slot="{ href, navigate }"
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
  <main class="home">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
</template>
