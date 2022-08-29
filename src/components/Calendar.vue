<template>
  <section id="calendar" class="calendar">
    <h2>
      Calendar
      <h3 v-for="item in itemList" :key="item.id" style="font-size: 20px; margin-top: 40px">
        {{ item.title }}
        <p style="font-size: var(--scheme-xs); margin: 10px 0">{{ item.body }}</p>
      </h3>
    </h2>

    <span><Device /></span>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Device from './Device.vue'

const itemList = ref([
  {
    title: 'Meeting invitations',
    body: 'You can easily set scheduled automatic replies for when you are not available.',
  },

  {
    title: 'And more',
    body: 'Voola X Calendar also supports subscribing to ICS web calendars. Email app comes with global address list (GAL) support. Attachment opening is 50-90% faster due to the dozens of optimizations made to the document viewer since Voola 1.',
  },
])
</script>

<style lang="scss" scoped>
.calendar {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--scheme-gap);
  justify-items: flex-end;

  span {
    align-items: center;
    border-radius: 100%;
    background: var(--scheme-v7);
    display: flex;
    height: 645px;
    justify-content: center;
    width: 645px;
  }

  @media only screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;

    span {
      background: inherit;
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
