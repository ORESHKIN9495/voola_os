<template>
  <section class="calendar">
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

<script>
import DeviceVert from './DeviceVert.vue'
export default {
  data() {
    return {
      itemList: [
        {
          title: 'Meeting invitations',
          body: 'You can easily set scheduled automatic replies for when you are not available.',
        },

        {
          title: 'And more',
          body: 'Voola X Calendar also supports subscribing to ICS web calendars. Email app comes with global address list (GAL) support. Attachment opening is 50-90% faster due to the dozens of optimizations made to the document viewer since Voola 1.',
        },
      ],
    }
  },
  components: { DeviceVert },
}
</script>

<style lang="scss" scoped>
.calendar {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 8em auto 0;
  max-width: calc(var(--scheme-max-width) / 1.25);

  picture {
    align-items: center;
    background: var(--scheme-v6);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 650px;
    padding: 80px;
    width: 100%;
  }

  @media only screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
