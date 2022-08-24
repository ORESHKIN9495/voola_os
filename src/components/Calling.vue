<template>
  <section id="calling" class="calling">
    <picture>
      <source media="(max-width: 768px)" srcset="../assets/Group 1275.png" />
      <source media="(min-width: 769px)" srcset="../assets/Group 1275@2x.png" />
      <img src="../assets/Group 1275@2x.png" alt="" />
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

<script>
import DeviceVert from './DeviceVert.vue'
export default {
  data() {
    return {
      itemList: [
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
      ],
    }
  },
  components: { DeviceVert },
}
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
    max-width: 500px;
  }

  span {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media only screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
  }
}
</style>
