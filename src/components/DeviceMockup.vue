<script setup>
defineProps({
  mirrorY: Boolean,
  size: Boolean,
})
</script>

<template>
  <picture>
    <source media="(max-width: 768px)" srcset="../assets/[Mockup]-iPhone.png" />
    <source media="(min-width: 769px)" srcset="../assets/[Mockup]-iPhone@2x.png" />
    <img :class="[mirrorY ? 'mirrorY' : '', size ? 'size' : '']" src="../assets/[Mockup]-iPhone@2x.png" alt="" />
  </picture>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
picture {
  margin: auto;

  img {
    max-height: 360px;

    &.mirrorY {
      transform: scale(-1, 1) rotate(90deg);
    }

    &.size {
      height: 100%;
      max-height: 250px;
      max-width: 500px;
    }
  }
}
</style>
