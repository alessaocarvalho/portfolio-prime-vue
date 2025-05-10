<template>
    <section class="about-section">
      <div class="about-header">
        <h1>
          <i class="pi pi-user" style="font-size: 2.5rem; margin: 1rem;"></i>
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
    <Card class="card">
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
    <Card class="card">
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
    <Card class="card">
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
  </div>
</section>
</template>

<script setup>
import Card from "primevue/card";
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
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 1rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}

.about-cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem;
}

.card {
  max-width: 300px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--item-border);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
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
