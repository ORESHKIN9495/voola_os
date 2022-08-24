<template>
  <section id="calendar" class="calendar">
    <h2>
      Calendar
      <h3 v-for="item in itemList" :key="item.id" style="font-size: 20px; margin-top: 40px">
        {{ item.title }}
        <p style="font-size: var(--scheme-xs); margin: 10px 0">{{ item.body }}</p>
      </h3>
    </h2>

    <DeviceVert size />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DeviceVert from './DeviceVert.vue'

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
  gap: 20px;
  justify-items: flex-end;

  @media only screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
  }
}
</style>
