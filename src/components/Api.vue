<template>
  <section class="api">
    <h2>
      Bridging the API gap
      <p style="margin-top: 20px; font-size: var(--scheme-xs); max-width: 812px">
        Voola 4 ensures that your device is protected on multiple fronts: user data is encrypted on the device, network communication is secured using VPN, and the inbuilt firewall
        and sandboxing further safeguards your data and device resources from abuse. Over-the-air updates and hotfix releases allow us to address any critical vulnerabilities
        quickly and promptly.
      </p>
    </h2>

    <Api-list />
  </section>
</template>

<script>
import ApiList from './Api-list.vue'
export default {
  setup() {
    return {}
  },
  components: { ApiList },
}
</script>

<style lang="scss" scoped>
.api {
  background-image: image-set(url('../assets/Group 1272@2x.png') 2x, url('../assets/Group 1272.png') 1x);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 600px;
  margin: 8em auto 0;
  max-width: calc(var(--scheme-max-width) / 1.25);
}
</style>
