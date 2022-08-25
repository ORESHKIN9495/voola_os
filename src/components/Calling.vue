<template>
  <section id="calling" class="calling">
    <picture>
      <source media="(max-width: 768px)" srcset="../assets/group-1275.png" />
      <source media="(min-width: 769px)" srcset="../assets/group-1275@2x.png" />
      <img src="../assets/group-1275@2x.png" alt="" />
    </picture>

    <h2>
      Calling

      <span>
        <h3 v-for="item in itemList" :key="item.id" style="font-size: 20px; margin-top: 40px">
          {{ item.title }}
          <p style="font-size: var(--scheme-xs); margin: 10px 0">{{ item.body }}</p>
        </h3>
      </span>
    </h2>
  </section>
</template>

<script setup>
import DeviceVert from './DeviceVert.vue'
import { ref } from 'vue'

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
</script>

<style lang="scss" scoped>
.calling {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 8em auto 0;
  max-width: calc(var(--scheme-max-width) / 1.25);

  img {
    max-width: 450px;
  }

  span {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  picture {
    align-items: center;
    border-radius: 100%;
    background: var(--scheme-v7);
    display: flex;
    height: 550px;
    justify-content: center;
    padding: 60px;
    width: 550px;
  }

  @media only screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;

    & {
      picture {
        align-items: center;
        border-radius: 100%;
        background: none;
        display: inherit;
        height: 100%;
        justify-content: center;
        padding: 0;
        width: 100%;
      }
    }
  }
}
</style>
