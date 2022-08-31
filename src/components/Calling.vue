<template>
  <section id="calling" class="calling" ref="a">
    <article>
      <span><Device /></span>
      <span ref="b"><Device /></span>
      <span ref="c"><Device /></span>
    </article>

    <article>
      <h2>Calling</h2>

      <span
        ><h3 v-for="item in itemList" :key="item.id" style="font-size: 20px; margin-top: 40px">
          {{ item.title }}
          <p style="font-size: var(--scheme-xs); margin: 10px 0">{{ item.body }}</p>
        </h3></span
      >
    </article>
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
  overflow: hidden;

  article {
    &:first-child {
      position: absolute;
      top: 20%;
      z-index: -2;

      span {
        top: 0;
        left: 0;
        opacity: 70%;
        position: absolute;
      }

      @media only screen and (max-width: 920px) {
        span {
          display: none;
        }
      }
    }

    &:last-child {
      max-width: 800px;
      margin: 120px 0 120px auto;

      span {
        align-items: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--scheme-gap);

        @media only screen and (max-width: 920px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}

.child-1 {
  animation-name: child-1;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  transform-origin: right bottom;
  z-index: 1;

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
  animation-name: child-2;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transform-origin: right bottom;
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
