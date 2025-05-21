<template>
    <section class="about-section" id="about">
      <div class="about-header">
        <h1>
          Sobre mim
        </h1>
        <img
          class="profile-picture"
          src="/profile-picture.jpg"
          alt="Imagem de apresentação"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </div>
  <div class="about-cards">
    <AboutCard title="Teste 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!"/>

    <AboutCard title="Teste 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!"/>

    <AboutCard title="Teste 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur"/>
  </div>
</section>
</template>

<script setup>
import AboutCard from "../components/AboutCard.vue";
</script>

<style scoped>

.about-section {
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.about-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 50vw;
}

.profile-picture {
  width: 250px;
  height: 250px;
  border-radius: 175px;
  margin: 1rem;
  box-shadow: 0 0 15px var(--element-box-shadow);
}

.about-cards {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
}

.card {
  width: 300px;
  height: 300px;
  padding: 0.5rem;
  border: 2px solid var(--item-border);
  box-shadow: 0 0 15px var(--element-box-shadow);
}

@media (max-width: 768px) {

   .about-header {
        max-width: 80vw;
    }

    .profile-picture {
        width: 200px;
        height: 200px;
    }

  .about-cards {
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    width: 80vw;
  }
    
}
</style>
