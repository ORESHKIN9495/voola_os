<template>
  <section id="models" class="models">
    <article>
      <h2 style="margin: 0; font-weight: 400">
        VOOLA OS

        <p style="font-size: 20px">is compatible with these devices</p>
      </h2>

      <span>
        <p v-for="item in models" :key="item.id" style="margin: 10px 0">{{ item.title }}</p>
      </span>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const models = ref([
  {
    title: 'Sony Xperia 10 III',
  },
  {
    title: 'Sony Xperia 10 II',
  },
  {
    title: 'Sony Xperia 10',
  },
  {
    title: 'Sony Xperia 10 Plus',
  },
  {
    title: 'Single and dual-SIM variants of Sony Xperia X2',
  },
  {
    title: 'Sony Xperia X2 Ultra',
  },
  {
    title: 'Sony Xperia X',
  },
  {
    title: 'Gemini PDA',
  },
])
</script>

<style lang="scss" scoped>
.models {
  article {
    align-items: center;
    background: linear-gradient(207deg, rgba(224, 241, 237, 1) 0%, rgba(246, 250, 232, 1) 100%);
    border-radius: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--scheme-gap);
    justify-items: center;
    padding: 4em 2em;

    @media only screen and (max-width: 920px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      text-align: center;
    }
  }
}
</style>
