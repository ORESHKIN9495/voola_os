<script setup>
import ApiList from './Api-list.vue'
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
  <section id="api" class="api">
    <article style="max-width: 800px">
      <h2>
        Bridging the API gap
        <p style="margin-top: 20px; font-size: var(--scheme-xs)">
          Voola 4 ensures that your device is protected on multiple fronts: user data is encrypted on the device, network communication is secured using VPN, and the inbuilt
          firewall and sandboxing further safeguards your data and device resources from abuse. Over-the-air updates and hotfix releases allow us to address any critical
          vulnerabilities quickly and promptly.
        </p>
      </h2>

      <Api-list />
    </article>

    <div ref="a">
      <span><Device sizeL style="width: 100vw" /></span>
      <span ref="b"><Device sizeL style="width: 100vw" /></span>
      <span ref="c"><Device sizeL style="width: 100vw" /></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.api {
  overflow: hidden;

  div {
    position: absolute;
    top: 0;
    right: 40%;
    z-index: -2;

    span {
      animation-delay: 0.5s;
      position: absolute;
      opacity: 70%;
      transform-origin: left bottom;
      transform: rotate3d(-1, 1, 0.4, 58deg);
      top: 100px;

      &:first-child {
        opacity: 30%;
      }

      &:nth-child(2) {
        z-index: -1;
        opacity: 50%;
      }

      &:last-child {
        z-index: -1;
      }
    }
  }

  @media only screen and (max-width: 920px) {
    div {
      top: 30%;
      left: 0;
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
      transform: rotate3d(-1, 1, 0.4, 58deg);
      top: 100px;
    }
    to {
      transform: rotate3d(-1, 1, 0.2, 58deg);
      top: 50px;
    }
  }
}

.child-2 {
  transform-origin: right bottom;
  animation-name: child-2;
  animation-delay: 0.5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: 1;

  @keyframes child-2 {
    from {
      transform: rotate3d(-1, 1, 0.4, 58deg);
      top: 100px;
    }
    to {
      transform: rotate3d(-1, 1, 0, 58deg);
      top: 20%;
    }
  }
}
</style>
