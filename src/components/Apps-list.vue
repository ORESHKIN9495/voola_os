<script setup>
import { ref } from 'vue'
const appsList = [
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.987 2.973 7.333 5.48C5.8 6.053 4.547 7.867 4.547 9.493V19.4c0 1.573 1.04 3.64 2.306 4.587l5.734 4.28c1.88 1.413 4.973 1.413 6.853 0l5.733-4.28c1.267-.947 2.307-3.014 2.307-4.587V9.493c0-1.64-1.253-3.453-2.787-4.026L18.04 2.973c-1.133-.413-2.947-.413-4.053 0Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m12.067 15.827 2.146 2.146 5.734-5.733" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Firejail sandboxing for apps',
    body: 'Sandboxing limits anapplication’s access toonly the minimum needed user data andsystem functions tocontain the damage ifan app becomes compromised.',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 29.333H9.333C4 29.333 2.666 28 2.666 22.667V9.333C2.667 4 4 2.667 9.334 2.667h2c2 0 2.44.586 3.2 1.6l2 2.666C17.04 7.6 17.333 8 18.666 8h4c5.334 0 6.667 1.333 6.667 6.667v2.666" stroke="#4E94D7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.347 24.427c-3.134.226-3.134 4.76 0 4.986h7.413c.893 0 1.773-.333 2.427-.933 2.2-1.92 1.026-5.76-1.867-6.12-1.04-6.253-10.08-3.88-7.947 2.08" stroke="#4E94D7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Automatic backups',
    body: 'Work comfortablyknowing your data is automatically backed-up to the cloud. Choose a service you trust or set up your own backup servers.',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.666 8.637 2.666 16c0 7.364 5.97 13.333 13.334 13.333Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.666 4H12a37.898 37.898 0 0 0 0 24h-1.334M20 4a37.898 37.898 0 0 1 0 24" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 21.333V20a37.898 37.898 0 0 0 24 0v1.333M4 12a37.899 37.899 0 0 1 24 0" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'VPN',
    body: 'Voola OS has built-in support for common VPNs and a new plug-in API for integrating 3rd party providers. VPN support is powered by improved autoconnection support and route management.',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.76 13.333H6.254A3.582 3.582 0 0 1 2.68 9.76V6.253A3.582 3.582 0 0 1 6.254 2.68H25.76a3.582 3.582 0 0 1 3.573 3.573V9.76a3.59 3.59 0 0 1-3.573 3.573ZM25.76 29.333H6.254A3.582 3.582 0 0 1 2.68 25.76v-3.507a3.582 3.582 0 0 1 3.574-3.573H25.76a3.582 3.582 0 0 1 3.573 3.573v3.507a3.59 3.59 0 0 1-3.573 3.573ZM8 6.667v2.666M13.334 6.667v2.666M8 22.667v2.666M13.334 22.667v2.666M18.666 8H24M18.666 24H24" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Sandboxed core OS',
    body: 'Core OS services that control critical hardware functionality have been limited to having access only to the capabilities each domain requires, enforced by using systemd sandboxing.',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 22.6H8.28c-4.493 0-5.613-1.12-5.613-5.613v-8c0-4.494 1.12-5.614 5.613-5.614h14.04c4.493 0 5.613 1.12 5.613 5.614M13.334 28.627V22.6M2.667 17.267h10.666M8.987 28.627h4.347" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.333 17.067v7.613c0 3.16-.786 3.947-3.946 3.947h-4.734c-3.16 0-3.947-.787-3.947-3.947v-7.613c0-3.16.787-3.947 3.947-3.947h4.734c3.16 0 3.946.787 3.946 3.947Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.993 24.333h.012" stroke="#4E94D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Data ebcryption',
    body: 'Encryption is enabled on all new Voola devices. This helps to keep data safe whether it is stored on the device, on a memory card, or a USB On-The-Go storage.',
  },
]
</script>

<template>
  <section>
    <article v-for="item in appsList" :key="item.id">
      <span v-html="item.icon"></span>

      <h3>
        {{ item.title }}
        <p style="font-size: var(--scheme-xs)">{{ item.body }}</p>
      </h3>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--scheme-gap) * 3);
  justify-content: center;
  overflow: hidden;
  text-align: center;

  &::before {
    background-image: -webkit-image-set(url('../assets/vector.png') 1x, url('../assets/vector@2x.png') 2x);
    background-image: image-set(url('../assets/vector.png') 1x, url('../assets/vector@2x.png') 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    content: '';
    height: 100%;
    opacity: 0.1;
    position: absolute;
    width: 100%;
    z-index: -1;

    @media only screen and (max-width: 1009px) {
      transform: rotate(-90deg);
      width: 1270px;
    }
  }

  article {
    display: grid;
    justify-items: center;
    max-width: 420px;

    span {
      background: var(--scheme-v4);
      border-radius: 35px;
      display: grid;
      margin-bottom: 20px;
      padding: 20px;
      max-width: 70px;
    }
  }
}
</style>
