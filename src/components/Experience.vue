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

<script setup>
import ExperienceList from './Experience-list.vue'
</script>

<style lang="scss" scoped>
.exp {
  background-image: image-set(url('../assets/group-1273@2x.png') 2x, url('../assets/group-1273.png') 1x);
  background-image: -webkit-image-set(url('../assets/group-1273@2x.png') 2x, url('../assets/group-1273.png') 1x);
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (max-width: 920px) {
    background-position: center;
    align-items: center;
  }
}
</style>
