<script setup>
defineProps({
  size: Boolean,
})
</script>

<template>
  <picture>
    <source media="(max-width: 768px)" srcset="../assets/phone-vert/[Mockup] iPhone 31.png" />
    <source media="(min-width: 769px)" srcset="../assets/phone-vert/[Mockup] iPhone 31@2x.png" />
    <img :class="[size ? 'size' : '']" src="../assets/phone-vert/[Mockup] iPhone 31@2x.png" alt="" />
  </picture>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
picture {
  img {
    max-height: 400px;
    max-width: 227px;

    &.size {
      max-height: 500px;
      max-width: 300px;
      height: 100%;
    }
  }
}
</style>
