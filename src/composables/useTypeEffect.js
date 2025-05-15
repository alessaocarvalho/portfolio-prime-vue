import { ref, onMounted } from "vue";

export function useTypeEffect() {
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
  return {
    typedText,
  };
}
