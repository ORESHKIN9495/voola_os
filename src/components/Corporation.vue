<template>
  <section id="corp" class="corp">
    <article class="corp__tittle">
      <h3>
        World-class mobile device management for corporations

        <p style="max-width: 1125px">
          Mobile device management (MDM) support in Voola 2 is designed to meet even the most demanding corporate needs with APIs to remotely set up devices, provision ssettigs,
          define policies, and manage installed software, Monitor data, call, and SMS statistivs, publish remote notifications, and define call and SMS filters. And much more.
        </p>
      </h3>
    </article>

    <article class="corp__items">
      <div class="corp__item" v-for="item in corpItems" :key="item.id">
        <DeviceVert v-if="item.id == 2" size />
        <DeviceVert v-else />

        <h3>
          {{ item.tittle }}
          <p style="max-width: 355px">{{ item.descr }}</p>
        </h3>
      </div>
    </article>
  </section>
</template>

<script setup>
import DeviceVert from './DeviceVert.vue'
import { ref } from 'vue'

const corpItems = ref([
  {
    id: 1,
    tittle: 'WPA2 Enterprise',
    descr: 'WLAN gained support for EAP-PEAP, EAP-TLS, and EAP-TTLS authentication methods.',
  },
  {
    id: 2,
    tittle: 'Device locking',
    descr: 'Remotely lock or securely wipe data from compromised devices.',
  },
  {
    id: 3,
    tittle: 'Multiple users',
    descr: 'Remotely manage who can access the device, add and remove users, control who can call.',
  },
])
</script>

<style lang="scss" scoped>
.corp {
  text-align: center;

  p {
    font-size: var(--scheme-xs);
    margin: 10px auto;
  }

  &__items {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--scheme-gap);
    margin: 4em 0;

    @media only screen and (max-width: 920px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
}
</style>
