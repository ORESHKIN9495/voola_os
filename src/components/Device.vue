<script setup>
defineProps({
  vert: Boolean,
  hor: Boolean,
  sizeS: Boolean,
  sizeM: Boolean,
  sizeL: Boolean,
  blockV: Boolean,
  blockH: Boolean,
})
</script>

<template>
  <section
    class="device"
    :class="[hor ? 'hor' : '', sizeS ? 'size-s' : '', sizeM ? 'size-m' : '', sizeL ? 'size-l' : '', blockH ? 'block-h' : '', blockV ? 'block-v' : '']"
  ></section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.device {
  background: linear-gradient(180deg, rgba(224, 236, 251, 1) 0%, rgba(164, 202, 239, 1) 100%);
  border-radius: 36px;
  box-shadow: 10px 13px 15px var(--scheme-shadow);
  height: 100vh;
  max-width: 195px;
  max-height: 395px;
  margin: 0 auto;
  padding: 20px;
  width: 100vw;

  &::before {
    background: linear-gradient(to top, #639bcd, #cae4fb);
    border-radius: 36px;
    bottom: -2px;
    content: '';
    left: -2px;
    position: absolute;
    right: -2px;
    top: -2px;
    z-index: -1;
  }

  &.hor {
    max-width: 395px;
    max-height: 195px;
    width: 100%;

    @media only screen and (max-width: 580px) {
      border-radius: 24px;
      max-height: 150px;
      max-width: 300px;

      &::before {
        border-radius: 24px;
      }
    }
  }

  &.size-s {
    max-height: 346px;
    max-width: 170px;

    @media only screen and (max-width: 580px) {
      border-radius: 20px;
      max-height: 300px;
      max-width: 140px;

      &::before {
        border-radius: 20px;
      }
    }

    @media only screen and (max-width: 510px) {
      border-radius: 20px;
      max-height: 216px;
      max-width: 110px;

      &::before {
        border-radius: 20px;
      }
    }
  }

  &.size-m {
    max-height: 495px;
    max-width: 245px;
  }

  &.size-l {
    max-height: 590px;
    max-width: 290px;
  }

  &.block-v {
    max-height: 196px;
    max-width: 300px;
    margin: 0;

    &::before {
      content: none;
    }
  }

  &.block-h {
    max-height: 300px;
    max-width: 196px;
    margin: 0;

    &::before {
      content: none;
    }
  }
}
</style>
