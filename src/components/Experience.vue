<script setup>
import ExperienceList from './Experience-list.vue'
import Device from './Device.vue'
import { onMounted, ref } from 'vue'
const a = ref('a')
const b = ref('b')
const c = ref('c')

onMounted(() => {
  const offsetEl = a.value.getBoundingClientRect().top + window.pageYOffset - 1000
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

<template>
  <section id="exp" class="exp">
    <div ref="a">
      <span><Device /></span>
      <span ref="b"><Device /></span>
      <span ref="c"><Device /></span>
    </div>

    <article style="max-width: 800px">
      <h2>
        User experience
        <p style="margin-top: 20px; font-size: var(--scheme-xs)">
          Voola 4 introduces redesigned usage flows for all daily use cases, and a new, crisp visual style improving the legibility across the platform. New ambiences, a
          significant browser upgrade, and a new battery saving mode to squeeze more usage time out of every device are also part of the Voola 4 experience.
        </p>
      </h2>

      <Experience-list />
    </article>
  </section>
</template>

<style lang="scss" scoped>
.exp {
  overflow: hidden;

  article {
    margin: 140px 0 140px auto;
  }

  div {
    position: absolute;
    top: 40%;
    transform: rotate(-25deg);

    span {
      opacity: 70%;
      position: absolute;
      z-index: -3;

      &:first-child {
        z-index: -1;
      }
    }
  }

  @media only screen and (max-width: 920px) {
    div {
      top: 45%;
      left: 0;
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
