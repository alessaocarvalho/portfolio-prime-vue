<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="circle">
        <img
          class="circle-image"
          src="/presentation-img.png"
          alt="Imagem de apresentação"
        />
      </div>
      <article class="hero-text">
        <h1>Olá, eu sou o Alisson</h1>
        <div class="code-editor">
          <div class="editor-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="code-content">
          <span class="code-line">const nome = "Alisson Carvalho";</span>
          <span class="code-line">const profissao = "Desenvolvedor Web";</span>
          <span class="code-line">const mensagem = "Bem-vindo(a) ao Meu Portfólio";</span>
          <span class="code-line">const sobre = "Sou apaixonado por <span ref="typedText"></span>";</span>
        </pre>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const typedText = ref(null);

const words = [
  "interfaces intuitivas. ",
  "design moderno. ",
  "perfomance. ",
  "novas tecnologias. ",
  "inovação. ",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = typedText.value;

  if (!currentText) return;

  if (isDeleting) {
    currentText.textContent = currentWord.substring(0, charIndex--);
  } else {
    currentText.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 25 : 50;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    speed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 50;
  }

  setTimeout(typeEffect, speed);
}

onMounted(() => {
  typeEffect();
});
</script>

<style scoped>
.hero-section {
  padding: 80px;
  background-color: var(--hero-section-bg);
  min-height: 100vh;
}

.hero-text {
  font-size: 2rem;
  color: var(--hero-text-color);
  text-align: left;
  padding: 1rem;
  max-width: 600px;
  margin-left: 2rem;
}

.hero-content {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.circle {
  border: 2px solid var(--hero-border);
  background-color: var(--hero-bg);
  border-radius: 50%;
  width: 350px;
  height: 350px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
}

.circle-image {
  width: 400px;
}

.code-editor {
  padding: 1.5rem;
  margin: 1rem 0;
  border: 2px solid var(--hero-border);
  background-color: var(--hero-bg);
  border-radius: 12px;
  width: 500px;
  height: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  position: relative;
}

.editor-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

.code-content {
  font-size: 1rem;
  white-space: pre-wrap;
  line-height: 1rem;
}

.code-line {
  display: block;
}

.code-line span::after {
  content: "|";
  animation: blink 1s infinite;
  margin-left: 2px;
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
    display: flex;
    flex-direction: column;
  }

  .hero-text {
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .circle {
    margin: 0 auto;
    width: 60vw;
    height: auto;
  }

  .circle-image {
    width: 60vw;
  }

  .code-editor {
    width: 80vw;
    height: auto;
  }
}
</style>
