<template>
  <section class="corp">
    <article class="corp__tittle">
      <h3>
        World-class mobile device management for corporations

        <p style="font-weight: 300; font-size: 20px; margin: 20px 0">
          Mobile device management (MDM) support in Voola 2 is designed to meet even the most demanding corporate needs with APIs to remotely set up devices, provision ssettigs,
          define policies, and manage installed software, Monitor data, call, and SMS statistivs, publish remote notifications, and define call and SMS filters. And much more.
        </p>
      </h3>
    </article>

    <article class="corp__items">
      <div class="corp__item" v-for="item in corpItems" :key="item.id">
        <DeviceVert />

        <h3>
          {{ item.tittle }}
          <p style="font-weight: 300; font-size: 20px; margin: 20px 0">{{ item.descr }}</p>
        </h3>
      </div>
    </article>
  </section>
</template>

<script>
import DeviceVert from './DeviceVert.vue'
export default {
  data() {
    return {
      corpItems: [
        {
          tittle: 'WPA2 Enterprise',
          descr: 'WLAN gained support for EAP-PEAP, EAP-TLS, and EAP-TTLS authentication methods.',
        },
        {
          tittle: 'Device locking',
          descr: 'Remotely lock or securely wipe data from compromised devices.',
        },
        {
          tittle: 'Multiple users',
          descr: 'Remotely manage who can access the device, add and remove users, control who can call.',
        },
      ],
    }
  },

  components: { DeviceVert },
}
</script>

<style lang="scss" scoped>
.corp {
  margin: 12em auto 0;
  max-width: calc(var(--scheme-max-width) / 1.2);
  text-align: center;

  &__items {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 4em 0;
  }
}
</style>
