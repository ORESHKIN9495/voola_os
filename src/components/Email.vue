<script setup>
import Device from './Device.vue'
import { ref } from 'vue'

const itemList = ref([
  {
    title: 'Meeting invitations',
    body: 'You can easily set scheduled automatic replies for when you are not available.',
  },

  {
    title: 'And more',
    body: 'Voola X Calendar also supports subscribing to ICS web calendars. Email app comes with global address list (GAL) support. Attachment opening is 50-90% faster due to the dozens of optimizations made to the document viewer since Voola 1.',
  },
])
</script>

<template>
  <section id="email" class="email">
    <h2>Email</h2>

    <article>
      <h3 style="font-size: 20px; margin-top: 40px">
        New email viewer
        <p style="font-size: var(--scheme-xs); margin: 10px 0">The Voola X email viewer has been upgraded to a new engine.</p>
      </h3>

      <span><Device hor /></span>

      <h3 style="font-size: 20px; margin-top: 40px">
        Automatic replies
        <p style="font-size: var(--scheme-xs); margin: 10px 0">You can easily set scheduled automatic replies for when you are not available.</p>
      </h3>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.email {
  text-align: center;

  article {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--scheme-gap);
    justify-items: center;

    span {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 645px;
      position: relative;
      width: 645px;

      &::before {
        animation-name: puls;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        border-radius: 100%;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

        @keyframes puls {
          0% {
            background: var(--scheme-v1);
          }
          50% {
            background: var(--scheme-v7);
          }

          100% {
            background: var(--scheme-v1);
          }
        }
        @media only screen and (max-width: 1120px) {
          animation-play-state: paused;
        }
      }
    }

    @media only screen and (max-width: 1120px) {
      grid-template-columns: 1fr;
      justify-items: center;

      span {
        background: inherit;
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
