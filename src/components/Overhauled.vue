<template>
  <section class="overhauled">
    <h2>
      Overhauled Browser
      <p style="font-size: var(--scheme-xs); margin-top: 20px">
        The Voola X browser is armed with a new browser engine (from Firefox Quantum), designed to take full advantage of the processing power of modern devices. More importantly,
        the focus of the renewed browser has been on security – introducing features such as site permissions, password manager, and certificate info.
      </p>
    </h2>

    <article>
      <div v-for="item in itemList" :key="item.id">
        <DeviceVert v-if="item.id == 2" size />
        <DeviceVert v-else-if="item.id == 3" size-l />
        <DeviceVert v-else />

        <h3>
          {{ item.title }}
          <p style="margin-top: 20px">{{ item.body }}</p>
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
      itemList: [
        {
          id: 1,
          title: 'Site permissions',
          body: 'Define access rules for your browser and individual sites. The renewed browser also has new bookmark and history views, and allowsyou to save websites as PDF.',
        },
        {
          id: 2,
          title: 'Captive portal mode',
          body: 'Automatically opened captive portals are now run in a special restricted mode, blocked from accessing system cookies.',
        },
        {
          id: 3,
          title: 'Certificate info',
          body: 'Access site security information easily from the address bar and review certificate issuers. Get notified when security vulnerabilities are discovered.',
        },
      ],
    }
  },
  components: {
    DeviceVert,
  },
}
</script>

<style lang="scss" scoped>
.overhauled {
  margin: 12em auto 0;
  max-width: calc(var(--scheme-max-width) / 1.25);
  text-align: center;

  article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
}
</style>