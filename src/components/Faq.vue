<template>
  <section id="faq" class="faq">
    <h2>
      FAQ
      <p style="font-size: var(--scheme-xs)">Have questions? We’re here to help.</p>
    </h2>

    <Questions />
  </section>
</template>

<script setup>
import Questions from './Questions.vue'
</script>

<style lang="scss" scoped>
.faq {
  background-image: -webkit-image-set(url('../assets/display@2x.png') 2x, url('../assets/display.png') 1x);
  background-image: image-set(url('../assets/display@2x.png') 2x, url('../assets/display.png') 1x);
  background-position: right center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 920px) {
    background-position: center;
  }
}
</style>
