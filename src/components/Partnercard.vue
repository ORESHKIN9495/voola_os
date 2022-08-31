<template>
  <section ref="a" :class="[visible ? 'active' : '']">
    <article v-if="!visible">
      <span>Available on</span>
      <h3>App support</h3>
    </article>

    <article>
      <p v-if="!visible">Also you can run Android™ apps with our dedicatod App Support solution</p>
      <p style="margin-bottom: auto" v-else>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos amet voluptatem ipsam vero, voluptate ratione minima illum tempore, excepturi, alias molestiae cum ipsa
        perferendis hic sequi labore laboriosam quisquam nihil dignissimos. Ratione, perspiciatis, asperiores sunt suscipit, esse accusantium ipsum molestias nam illum ipsam
        necessitatibus harum voluptas sequi dolorum eos. Necessitatibus odit nulla quos placeat provident corporis dolores blanditiis distinctio! Doloribus, reiciendis libero
        quidem recusandae debitis adipisci eius.
      </p>

      <span>
        <svg @click="visible = !visible" ref="cros" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :class="[visible ? `cros` : '']" width="60px" height="60px">
          <path
            fill="var(--scheme-v3)"
            d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
          ></path>
        </svg>
      </span>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<style lang="scss" scoped>
section {
  background: var(--scheme-v8);
  border-radius: 16px;
  display: grid;
  margin: 0;
  max-width: 580px;
  padding: 40px;
  transition: all 1s ease-in-out;

  &.active {
    background: var(--scheme-v6);
  }

  article:first-child {
    span:first-child {
      display: inline-block;
      background: hsla(0, 0%, 100%, 0.5);
      border-radius: 10px;
      margin-bottom: 20px;
      padding: 8px 12px;
    }
  }

  article:last-child {
    display: grid;
    gap: calc(var(--scheme-gap) / 1.5);

    span:last-child {
      margin: auto 0 0 auto;

      svg {
        background: hsla(0, 0%, 100%, 0.5);
        border-radius: 50px;
        cursor: pointer;
        padding: 20px;
        transition: 0.3s ease-in-out;

        &.cros {
          transform: rotate(45deg);
        }

        &:hover {
          background: hsla(0, 0%, 100%, 0.8);
        }

        @media only screen and (max-width: 920px) {
          cursor: auto;
        }
      }
    }
  }
}
</style>
