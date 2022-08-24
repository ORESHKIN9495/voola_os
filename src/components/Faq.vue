<script setup>
import Questions from './Questions.vue'
</script>

<template>
  <section id="faq" class="faq">
    <h2 style="margin: 0">FAQ</h2>
    <p>Have questions? We’re here to help.</p>

    <article>
      <Questions />
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/display.png" />
        <source media="(min-width: 769px)" srcset="../assets/display@2x.png" />
        <img src="../assets/display@2x.png" alt="" />
      </picture>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;

    @media only screen and (max-width: 920px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;

      picture {
        display: none;
      }
    }
  }

  img {
    margin-top: -100px;
  }
}
</style>
