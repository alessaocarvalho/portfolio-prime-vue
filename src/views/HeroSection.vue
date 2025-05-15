<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-circle">
        <img
          class="circle-image"
          src="/presentation-img.png"
          alt="Imagem de apresentação"
        />
      </div>
      <article class="hero-presentation">
        <div class="hero-title">
          <h1>Olá, eu sou o Alisson</h1>
        </div>
        <CodeEditor />
      </article>
    </div>
  </section>
</template>

<script setup>
import CodeEditor from "@/components/CodeEditor.vue";

</script>

<style scoped>
.hero-section {
  background-color: var(--hero-section-bg);
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.hero-presentation {
  font-size: 2rem;
  color: var(--hero-text-color);
  text-align: left;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
}

.hero-circle {
  border: 2px solid var(--item-border);
  background-color: var(--hero-bg);
  border-radius: 50%;
  width: 350px;
  height: 350px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}

.circle-image {
  width: 350px;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem;
  }

  .hero-content {
    padding-top: 2rem;
    gap: 0;
    display: flex;
    flex-direction: column;
  }

  .hero-presentation {
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .hero-circle {
    margin: 0 auto;
    width: 60vw;
    height: auto;
  }

  .circle-image {
    width: 60vw;
  }
}
</style>
