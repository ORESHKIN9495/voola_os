<template>
  <section id="calling" class="calling" ref="a">
    <div class="calling__items">
      <span><Device sizeS /></span>
      <span ref="b"><Device sizeS /></span>
      <span ref="c"><Device sizeS /></span>
    </div>

    <div class="calling__item">
      <h2>Calling</h2>

      <span
        ><h3 v-for="item in itemList" :key="item.id" style="font-size: 20px; margin-top: 40px">
          {{ item.title }}
          <p style="font-size: var(--scheme-xs); margin: 10px 0">{{ item.body }}</p>
        </h3></span
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Device from './Device.vue'
const a = ref('a')
const b = ref('b')
const c = ref('c')

const itemList = ref([
  {
    title: 'Redesigned incoming calls',
    body: 'In Voola X the gesture indications to answer and reject calls are right under your thumb. ',
  },

  {
    title: 'Quick messages',
    body: 'Sometimes writing a reply isa hassle. Send a quick reply and go about your business.',
  },
  {
    title: 'Call reminders',
    body: 'If you are too busy to answer, add a reminder for you to call the person back.',
  },
  {
    title: 'Call ending',
    body: 'The full-screen call ending dialog has been replaced with a smaller popup.',
  },
])

onMounted(() => {
  const offsetEl = a.value.getBoundingClientRect().top + window.pageYOffset - 1200
  const move = window.addEventListener('scroll', (e) => {
    if (window.pageYOffset >= offsetEl) {
      b.value.classList.add('child-1')
      c.value.classList.add('child-2')
    } else {
      window.removeEventListener('scroll', move)
      b.value.classList.remove('child-1')
      c.value.classList.remove('child-2')
    }
  })
})
</script>

<style lang="scss" scoped>
.calling {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--scheme-gap);

  &__items {
    position: relative;
    width: 100%;
    padding: 180px;

    span {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__item {
    span {
      align-items: center;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--scheme-gap);
    }
  }

  @media only screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
    justify-items: center;

    &__items {
      display: none;
    }
  }
}

.child-1 {
  transform-origin: right bottom;
  z-index: 1;
  animation-name: child-1;
  animation-fill-mode: forwards;
  animation-duration: 2s;

  @keyframes child-1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
}

.child-2 {
  transform-origin: right bottom;
  animation-name: child-2;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: 1;

  @keyframes child-2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
}
</style>
