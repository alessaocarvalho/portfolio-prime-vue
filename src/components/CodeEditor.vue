<template>
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
</template>

<script setup>
import { useTypeEffect } from '@/composables/useTypeEffect';

const { typedText } = useTypeEffect();
</script>

<style scoped>
.code-editor {
  padding: 1.5rem;
  margin: 1rem 0;
  border: 2px solid var(--item-border);
  background-color: var(--hero-bg);
  border-radius: 12px;
  width: 500px;
  height: 350px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
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

@media (max-width: 768px) {
  .code-editor {
    text-align: left;
    width: 80vw;
    height: 350px;
  }
}
</style>