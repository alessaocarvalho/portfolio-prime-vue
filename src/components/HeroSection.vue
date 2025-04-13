<script setup>
import { ref, onMounted } from "vue";
import { Image } from "primevue";

const typedText = ref(null);

const words = [
  "interfaces intuitivas. ",
  "design moderno. ",
  "perfomance. ",
  "novas tecnologias. ",
  "experiências incríveis. ",
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

<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="circle">
        <Image
          src="presentation-img.png"
          alt="Imagem de apresentação"
          width="300"
        />
      </div>
      <article class="hero-text">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>
          Sou um desenvolvedor web apaixonado por <span ref="typedText"></span>
        </p>
        <a href="#projects" class="cta-button">Conheça meu trabalho</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 2rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  min-height: 80vh;
}

.circle {
  background-color: #ece4ca;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  background-color: #007ad9;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #005fa3;
}

/* Responsivo */
@media (max-width: 768px) {
  .hero-content {
    padding-top: 3rem;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text {
    margin-top: 1rem;
  }

  .circle {
    margin: 0 auto;
  }
}
</style>
