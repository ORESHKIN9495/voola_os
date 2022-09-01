<script setup>
import { ref, onMounted } from 'vue'
import Popup from './Popup.vue'

let show = ref(false)

const headRef = ref()

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1200) {
      headRef.value.classList.remove('hide')
    } else {
      headRef.value.classList.add('hide')
    }
  })
})
</script>

<template>
  <header class="header hide" ref="headRef">
    <section class="header__wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 59.83" width="90px">
        <path
          d="M200 59.83s-44.13-48.2-46.97-51.04c-2.85-2.85-6.17-5.05-9.88-6.56C139.57.78 135.79.04 131.92.04s-7.65.74-11.23 2.19c-3.71 1.5-7.03 3.71-9.88 6.56l-.09.09-6.99 7.62 8.92 8.57 7-7.63c6.83-6.73 17.85-6.7 24.64.09 3.3 3.3 5.12 7.69 5.12 12.36s-1.82 9.06-5.12 12.36c-6.79 6.79-17.82 6.82-24.64.09L89.03 8.98l-.09-.1-.09-.09C86 5.94 82.68 3.74 78.97 2.23 75.38.78 71.61.04 67.73.04S60.08.78 56.5 2.23c-3.71 1.5-7.03 3.71-9.88 6.56-2.85 2.85-5.05 6.17-6.56 9.88-.67 1.64-1.18 3.33-1.54 5.04L16.79 0H0s43.77 48.16 46.62 51.01c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56l.09-.09 7-7.63-8.44-9.12L80 42.35c-6.83 6.73-17.85 6.7-24.64-.09s-6.82-17.91 0-24.73c6.79-6.79 17.82-6.82 24.64-.09l30.61 33.37.09.1.09.09c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56 2.85-2.85 5.05-6.17 6.56-9.88.7-1.73 1.24-3.51 1.6-5.32l22.03 24.02h16.79Z"
        />
      </svg>

      <svg @click="show = !show" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="35px" :class="[show ? 'active' : '']" style="z-index: 10">
        <rect width="100" height="12" rx="6" />
        <rect width="100" height="12" y="28" rx="6" />
        <rect width="100" height="12" y="58" rx="6" />
      </svg>

      <Popup v-if="show" />
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: var(--scheme-v1);
  box-shadow: 0 15px 15px 5px var(--scheme-v6);
  position: sticky;
  transition: transform 0.5s ease-in-out;
  padding: 0 2em;
  top: 0;
  z-index: 2;

  &.hide {
    transform: translateY(-200px);
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: calc(var(--scheme-max-width) / 1.25);
    padding: 20px 0;

    svg {
      cursor: pointer;
      fill: var(--scheme-v3);

      &.active * {
        transition: all 0.1s ease-in-out;

        &:nth-child(1) {
          transform: translate(10px, 0px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translate(-40px, 30px) rotate(-45deg);
        }
      }
    }
  }
}
</style>
