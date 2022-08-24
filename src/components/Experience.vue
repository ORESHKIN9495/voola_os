<template>
  <section id="exp" class="exp">
    <h2>
      User experience
      <p style="margin-top: 20px; font-size: var(--scheme-xs); max-width: 812px">
        Voola 4 introduces redesigned usage flows for all daily use cases, and a new, crisp visual style improving the legibility across the platform. New ambiences, a significant
        browser upgrade, and a new battery saving mode to squeeze more usage time out of every device are also part of the Voola 4 experience.
      </p>
    </h2>

    <Experience-list />
  </section>
</template>

<script>
import ExperienceList from './Experience-list.vue'
export default {
  setup() {
    return {}
  },
  components: { ExperienceList },
}
</script>

<style lang="scss" scoped>
.exp {
  align-items: flex-end;
  background-image: image-set(url('../assets/Group 1273@2x.png') 2x, url('../assets/Group 1273.png') 1x);
  background-repeat: no-repeat;
  background-position: left;
  background-size: 650px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 920px) {
    background-position: center bottom;
  }
}
</style>
