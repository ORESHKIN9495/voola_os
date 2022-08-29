<template>
  <section>
    <article>
      <h3>
        Audio recorder 1
        <p>Easily record and playback audio clips. Manage recordings and easily share.</p>
      </h3>

      <Device blockH />
    </article>

    <article>
      <Device blockV />
      <h3>
        Meeting invitations
        <p>Messages has been supercharged with better grouping and simplified style</p>
      </h3>
    </article>

    <article>
      <h3>
        QR code reading
        <p>Open links to websites and apps with the Camera app without having to manually type the URLs, or set up a WLAN hotspot using a QR code</p>
      </h3>
      <Device blockV />
    </article>

    <article>
      <Device blockH />
      <h3>
        Battery saving mode 4
        <p>Enable battery saving mode to squeeze more usage time out of your device, and even set automatic thresholds based on your preferences</p>
      </h3>
    </article>
  </section>
</template>

<script setup>
import Device from './Device.vue'
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--scheme-gap);

  h3 {
    font-size: 20px;
    margin: 50px 0 auto;

    p {
      font-size: var(--scheme-xs);
    }
  }

  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--scheme-gap);

    &:first-child {
      grid-area: 1/1/2/3;
      justify-items: flex-end;
    }

    &:nth-child(2) {
      grid-area: 1/3/2/5;
    }

    &:nth-child(3) {
      align-items: flex-end;
      grid-area: 2/1/2/3;
      justify-items: flex-end;
      margin-top: -200px;
    }

    &:nth-child(4) {
      grid-area: 2/3/2/5;
    }
  }

  @media only screen and (max-width: 1420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    text-align: center;

    article {
      grid-template-columns: 1fr;

      &:nth-child(1n) {
        grid-area: unset;
        justify-items: center;
        margin: 0 auto;
      }

      &:nth-child(2n) {
        h3 {
          order: -1;
        }
      }
    }
  }
}
</style>
