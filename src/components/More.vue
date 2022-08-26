<template>
  <section class="more">
    <article class="more__item">
      <h3>
        Audio recorder 1
        <p>Easily record and playback audio clips. Manage recordings and easily share.</p>
      </h3>

      <picture>
        <source media="(max-width: 768px)" srcset="../assets/rectangle-1057.png" />
        <source media="(min-width: 769px)" srcset="../assets/rectangle-1057@2x.png" />
        <img src="../assets/rectangle-1057@2x.png" alt="" />
      </picture>
    </article>

    <article class="more__item">
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/rectangle-vert.png" />
        <source media="(min-width: 769px)" srcset="../assets/rectangle-vert@2x.png" />
        <img class="rotate" src="../assets/rectangle-vert@2x.png" alt="" />
      </picture>

      <h3>
        Meeting invitations
        <p>Messages has been supercharged with better grouping and simplified style</p>
      </h3>
    </article>

    <article class="more__item">
      <h3>
        QR code reading
        <p>Open links to websites and apps with the Camera app without having to manually type the URLs, or set up a WLAN hotspot using a QR code</p>
      </h3>

      <picture>
        <source media="(max-width: 768px)" srcset="../assets/rectangle-vert.png" />
        <source media="(min-width: 769px)" srcset="../assets/rectangle-vert@2x.png" />
        <img class="rotate" src="../assets/rectangle-vert@2x.png" alt="" />
      </picture>
    </article>

    <article class="more__item">
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/rectangle-1057.png" />
        <source media="(min-width: 769px)" srcset="../assets/rectangle-1057@2x.png" />
        <img src="../assets/rectangle-1057@2x.png" alt="" />
      </picture>

      <h3>
        Battery saving mode 4
        <p>Enable battery saving mode to squeeze more usage time out of your device, and even set automatic thresholds based on your preferences</p>
      </h3>
    </article>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.more {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(var(--scheme-gap) / 1.5);

  img {
    border-radius: 25px;
    height: 300px;
    width: 196px;
  }

  .rotate {
    height: 196px;
    width: 300px;
  }

  h3 {
    font-size: 20px;

    p {
      font-size: var(--scheme-xs);
    }
  }

  &__item {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--scheme-gap);

    &:first-child {
      grid-area: 1/1/2/3;
      justify-items: flex-end;
    }

    &:nth-child(2) {
      grid-area: 1/3/2/5;
      margin-top: -93px;
    }

    &:nth-child(3) {
      grid-area: 2/1/2/3;
      justify-items: flex-end;
      margin-bottom: 103px;
    }

    &:nth-child(4) {
      grid-area: 2/3/2/5;
      margin-top: -200px;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    text-align: center;
    justify-items: center;

    &__item {
      grid-template-columns: 1fr;

      &:nth-child(1n) {
        grid-area: unset;
        margin: 0;
      }

      &:nth-child(2n) {
        h3 {
          order: -1;
        }
      }

      &:nth-child(2n + 1) {
        justify-items: center;
      }
    }
  }
}
</style>
