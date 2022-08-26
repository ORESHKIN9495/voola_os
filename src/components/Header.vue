<template>
  <section ref="a" class="header">
    <article class="header__wrapper">
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/Vector.png" />
        <source media="(min-width: 769px)" srcset="../assets/Vector@2x.png" />
        <img src="../assets/Vector@2x.png" alt="" />
      </picture>

      <svg v-if="!show" @click="show = !show" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M.75 5.25h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5ZM23.25 11.25H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5ZM23.25 18.75H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5Z"
          fill="#4E94D7"
        />
      </svg>

      <Popup v-if="show" @close="close" />
    </article>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Popup from './Popup.vue'

const a = ref()

const close = () => {
  show.value = false
}

let show = ref(false)

onMounted(() => {
  const scrollTop = () => window.pageYOffset || document.documentElement.scrollTop
  const lastScroll = 1200
  const preScroll = 200

  window.addEventListener('scroll', () => {
    if (scrollTop() > lastScroll) {
      a.value.style.transform = `translateY(0)`
    } else if (scrollTop() < lastScroll) {
      a.value.style.transform = `translateY(-200px)`

      show.value = false
    }
  })
})
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 15px 15px 5px var(--scheme-v6);
  background: var(--scheme-v1);
  margin: 0;
  max-width: 100%;
  position: sticky;
  padding: 0;
  transform: translateY(-200px);
  top: 0;
  transition: transform 0.5s ease-in-out;
  z-index: 1;

  &__wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    position: relative;

    picture {
      img {
        max-width: 80px;
        vertical-align: middle;
      }
    }

    svg {
      cursor: pointer;
    }

    @media only screen and (max-width: 920px) {
      & {
        padding: 20px;
      }
    }
  }
}
</style>
