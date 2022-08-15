<script setup>
import Questions from './Questions.vue'
</script>

<template>
  <section class="faq">
    <h2>FAQ</h2>
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
  margin: 4em auto 0;
  max-width: calc(var(--scheme-max-width) / 1.2);

  h2 {
    margin: 0;
  }

  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;

    div {
      background: var(--scheme-v3);
      padding: 4em;
    }
  }

  img {
    margin-top: -100px;
  }
}
</style>
