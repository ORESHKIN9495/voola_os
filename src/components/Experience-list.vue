<template>
  <section class="exp-list">
    <article v-for="item in appsList" :key="item.id">
      <picture v-html="item.icon"></picture>

      <h3>
        {{ item.title }}
        <p style="font-size: var(--scheme-xs)">{{ item.body }}</p>
      </h3>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const appsList = ref([
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.64 17.333h5.053c1.014 0 1.934.574 2.387 1.48l1.187 2.387c.733 1.467 2.067 1.467 2.386 1.467h4.707a2.667 2.667 0 0 0 2.387-1.48l1.186-2.387a2.667 2.667 0 0 1 2.387-1.48h4.987M25.334 10.667a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.666 2.667H12c-6.667 0-9.334 2.666-9.334 9.333v8c0 6.667 2.667 9.333 9.334 9.333h8c6.666 0 9.333-2.666 9.333-9.333v-6.667" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Events view',
    body: 'You can now access your notifications, calendar events, and weather information without unlocking your device.',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 24.853 22.653 9.76c.68-.627.667-1.627-.053-2.227l-5.134-4.28c-1.333-1.106-2.426-.6-2.426 1.134v23.226c0 1.734 1.093 2.24 2.427 1.134l5.133-4.28c.72-.6.733-1.6.053-2.227L6.187 7.147" stroke="#4E94D7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.667 17.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM25.333 17.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z" stroke="#4E94D7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Overhauled Browser',
    body: 'Let users control media playback of your app from wired and Bluetooth headsets, in-built hardware keys, and from audio controls on the Lock Screen',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 26v-2H6c-.733 0-1.4-.293-1.88-.787a2.607 2.607 0 0 1-.787-1.88c0-1.373 1.067-2.52 2.414-2.653.08-.013.16-.013.253-.013h20c.093 0 .174 0 .253.013.64.053 1.2.333 1.627.773.547.534.84 1.294.774 2.12-.12 1.4-1.387 2.427-2.8 2.427h-6.52v2a3.334 3.334 0 0 1-6.667 0Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m26.894 7.067-.64 11.613c-.08-.013-.16-.013-.254-.013H6c-.093 0-.173 0-.253.013l-.64-11.613a3.995 3.995 0 0 1 3.973-4.4h13.84c2.36 0 4.214 2.04 3.974 4.4ZM10.653 2.667v6.666M16 2.667v2.666" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Legibility',
    body: 'Legibility has taken a big leap forward with small, but important tweaks to colors, dimming, fonts, background processing, and effects that result in better contrast.',
  },
  {
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.173 16 3.214 3.227 6.44-6.454" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.333 3.267c.92-.787 2.427-.787 3.36 0L19.8 5.08c.4.347 1.147.627 1.68.627h2.267A2.583 2.583 0 0 1 26.32 8.28v2.267c0 .52.28 1.28.627 1.68l1.813 2.106c.787.92.787 2.427 0 3.36L26.947 19.8c-.347.4-.627 1.147-.627 1.68v2.267a2.583 2.583 0 0 1-2.573 2.573H21.48c-.52 0-1.28.28-1.68.627l-2.107 1.813c-.92.787-2.426.787-3.36 0l-2.106-1.813c-.4-.347-1.147-.627-1.68-.627H8.24a2.584 2.584 0 0 1-2.573-2.573v-2.28c0-.52-.28-1.267-.614-1.667l-1.8-2.12c-.773-.92-.773-2.413 0-3.333l1.8-2.12c.334-.4.614-1.147.614-1.667V8.267A2.583 2.583 0 0 1 8.24 5.693h2.307c.52 0 1.28-.28 1.68-.626l2.106-1.8Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'New look',
    body: 'Four gorgeous new ambiences make your user experience feel brand new.',
  },
])
</script>

<style lang="scss" scoped>
.exp-list {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 395px);
  gap: 20px;
  margin: 0;

  picture {
    align-items: center;
    background: var(--scheme-v4);
    border-radius: 35px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    width: 70px;
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }
}
</style>
