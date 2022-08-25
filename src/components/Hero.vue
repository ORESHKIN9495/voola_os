<script setup>
import { onMounted, ref } from 'vue'
import Device from '../components/DeviceMockup.vue'

import gsap from 'gsap'

const a = ref(null)
const b = ref(null)
const c = ref(null)
const d = ref(null)
const e = ref(null)

onMounted(() => {
  gsap.fromTo(
    a.value,
    {
      x: '-100%',
    },
    {
      duration: 1.5,
      delay: 0.5,
      x: 0,
    }
  ),
    gsap.fromTo(
      b.value,
      {
        y: '-100%',
      },
      {
        duration: 1.5,
        delay: 0.5,
        y: 0,
      }
    ),
    gsap.fromTo(
      c.value,
      {
        y: '100%',
      },
      {
        duration: 1.5,
        delay: 0.5,
        y: 0,
      }
    ),
    gsap.fromTo(
      d.value,
      {
        x: '100%',
      },
      {
        duration: 1.5,
        delay: 0.5,
        x: 0,
      }
    ),
    gsap.fromTo(
      e.value,
      {
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
      }
    )
})
</script>

<template>
  <section style="margin: -112px 0 0">
    <div class="grid">
      <div class="grid__item" ref="a">
        <Device mirrorY />
      </div>

      <div class="grid__item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 59.83" width="200" height="59.83" ref="e">
          <path
            fill="var(--scheme-v3)"
            d="M200 59.83s-44.13-48.2-46.97-51.04c-2.85-2.85-6.17-5.05-9.88-6.56C139.57.78 135.79.04 131.92.04s-7.65.74-11.23 2.19c-3.71 1.5-7.03 3.71-9.88 6.56l-.09.09-6.99 7.62 8.92 8.57 7-7.63c6.83-6.73 17.85-6.7 24.64.09 3.3 3.3 5.12 7.69 5.12 12.36s-1.82 9.06-5.12 12.36c-6.79 6.79-17.82 6.82-24.64.09L89.03 8.98l-.09-.1-.09-.09C86 5.94 82.68 3.74 78.97 2.23 75.38.78 71.61.04 67.73.04S60.08.78 56.5 2.23c-3.71 1.5-7.03 3.71-9.88 6.56-2.85 2.85-5.05 6.17-6.56 9.88-.67 1.64-1.18 3.33-1.54 5.04L16.79 0H0s43.77 48.16 46.62 51.01c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56l.09-.09 7-7.63-8.44-9.12L80 42.35c-6.83 6.73-17.85 6.7-24.64-.09s-6.82-17.91 0-24.73c6.79-6.79 17.82-6.82 24.64-.09l30.61 33.37.09.1.09.09c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56 2.85-2.85 5.05-6.17 6.56-9.88.7-1.73 1.24-3.51 1.6-5.32l22.03 24.02h16.79Z"
          />
        </svg>

        <h1>
          <span>VOOLA OS</span>

          In touch. In the moment.
        </h1>

        <p>
          VOOLA OS is packed with new features to help you connect with others, be more present in the present moment, explore the world, and use powerful intelligence to do more
          than ever before.
        </p>
      </div>

      <div class="grid__item" ref="b">
        <Device />
      </div>

      <div class="grid__item" ref="c">
        <Device />
      </div>

      <div class="grid__item" ref="d">
        <Device mirrorY />
      </div>
    </div>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: var(--scheme-gap);
  grid-row-gap: var(--scheme-gap);

  &__item {
    // background-color: var(--scheme-v4);
    display: inherit;
    grid-area: 1 / 1 / 2 / 2;
    position: relative;

    &:nth-child(2) {
      align-content: center;
      grid-area: 1 / 2 / 3 / 3;
      height: 100vh;
      justify-items: center;
      text-align: center;
    }

    &:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }

    &:nth-child(4) {
      grid-area: 2 / 1 / 3 / 2;
    }

    &:last-child {
      grid-area: 2 / 3 / 3 / 4;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    &__item {
      display: none;

      &:nth-child(2) {
        display: inherit;
        grid-area: 1 / 1 / 1 / 1;
      }
    }
  }
}

h1 {
  span {
    display: block;
    font-size: var(--scheme-s);
    margin: 0 auto 20px;
  }
}

p {
  max-width: 580px;
}
</style>
