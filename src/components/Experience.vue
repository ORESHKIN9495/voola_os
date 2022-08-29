<template>
  <section id="exp" class="exp">
    <article ref="a">
      <div>
        <span><Device /></span>
        <span ref="b"><Device /></span>
        <span ref="c"><Device /></span>
      </div>
    </article>

    <article>
      <h2>
        User experience
        <p style="margin-top: 20px; font-size: var(--scheme-xs); max-width: 812px">
          Voola 4 introduces redesigned usage flows for all daily use cases, and a new, crisp visual style improving the legibility across the platform. New ambiences, a
          significant browser upgrade, and a new battery saving mode to squeeze more usage time out of every device are also part of the Voola 4 experience.
        </p>
      </h2>

      <Experience-list />
    </article>
  </section>
</template>

<script setup>
import ExperienceList from './Experience-list.vue'
import Device from './Device.vue'
import { onMounted, ref } from 'vue'
const a = ref('a')
const b = ref('b')
const c = ref('c')

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
.exp {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: calc(var(--scheme-gap) * 4);

  article {
    &:first-child {
      position: relative;

      div {
        position: absolute;
        top: 40%;
        transform: rotate(-25deg);

        span {
          opacity: 70%;
          position: absolute;

          &:first-child {
            z-index: 10;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 920px) {
    overflow: hidden;

    article {
      &:first-child {
        height: 100vh;
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
      transform: translate(0);
    }

    to {
      transform: translate(140px, -170px);
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
      transform: translate(0);
    }

    to {
      transform: translate(50px, 240px);
    }
  }
}
</style>
