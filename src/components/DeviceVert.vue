<script setup>
defineProps({
  size: Boolean,
  sizeL: Boolean,
})
</script>

<template>
  <picture>
    <source media="(max-width: 768px)" srcset="../assets/[Mockup] iPhone 31.png" />
    <source media="(min-width: 769px)" srcset="../assets/[Mockup] iPhone 31@2x.png" />
    <img :class="[size ? 'size' : '', sizeL ? 'size-l' : '']" src="../assets/[Mockup] iPhone 31@2x.png" alt="" />
  </picture>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
picture {
  img {
    max-height: 400px;
    max-width: 200px;

    &.size {
      height: 100%;
      max-height: 500px;
      max-width: 250px;
    }

    &.size-l {
      height: 100%;
      max-height: 600px;
      max-width: 300px;
    }
  }
}
</style>
