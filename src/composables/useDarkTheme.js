import { ref, onMounted } from "vue";

export const isDarkTheme = ref(false);

export function initTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
    isDarkTheme.value = savedTheme === "dark-theme";
  } else {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark");
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add("dark-theme");
      isDarkTheme.value = true;
    } else {
      document.documentElement.classList.add("light-theme");
      isDarkTheme.value = false;
    }
  }
}

export function toggleDarkTheme() {
  document.documentElement.classList.toggle("dark-theme");
  const activeTheme = document.documentElement.classList.contains("dark-theme")
    ? "dark-theme"
    : "light-theme";
  localStorage.setItem("theme", activeTheme);
  isDarkTheme.value = activeTheme === "dark-theme";
}
