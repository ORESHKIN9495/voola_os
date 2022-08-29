<template>
  <section>
    <article v-if="visible">
      <button>Available on</button>
      <h3>App support</h3>
    </article>

    <article>
      <p v-if="visible">Also you can run Android™ apps with our dedicatod App Support solution</p>
      <p v-else>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos amet voluptatem ipsam vero, voluptate ratione minima illum tempore, excepturi, alias molestiae cum ipsa
        perferendis hic sequi labore laboriosam quisquam nihil dignissimos. Ratione, perspiciatis, asperiores sunt suscipit, esse accusantium ipsum molestias nam illum ipsam
        necessitatibus harum voluptas sequi dolorum eos. Necessitatibus odit nulla quos placeat provident corporis dolores blanditiis distinctio! Doloribus, reiciendis libero
        quidem recusandae debitis adipisci eius.
      </p>

      <button @click="clickCros(), (visible = !visible)">
        <svg ref="cros" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
          ></path>
        </svg>
      </button>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)
const cros = ref(null)
const clickCros = () => {
  if (visible.value === true) {
    cros.value.classList.add('cros')
  } else {
    cros.value.classList.remove('cros')
  }
}
</script>

<style lang="scss" scoped>
section {
  background: radial-gradient(circle, rgba(235, 242, 233, 1) 0%, rgba(169, 217, 234, 1) 100%);
  border-radius: 16px;
  display: grid;
  margin: 0;
  max-width: 580px;
  padding: 40px;

  article:first-child {
    button {
      background: var(--scheme-v1);
      border-radius: 10px;
      color: inherit;
      margin-bottom: 20px;
      padding: 8px 12px;
    }
  }

  article:last-child {
    align-items: flex-end;
    display: flex;

    p {
      height: calc(100% - 50px);
    }

    button {
      border-radius: 55px;
      background: var(--scheme-v1);
      display: grid;
      margin: 0 0 0 auto;
      max-width: 70px;
      padding: 20px;

      svg {
        fill: var(--scheme-v3);
        transition: 1s ease-in-out;
        width: 16px;

        &.cros {
          transform: rotate(45deg);
        }
      }
    }

    @media only screen and (max-width: 1020px) {
      flex-wrap: wrap;

      button {
        margin: auto 0 0 auto;
      }
    }
  }
}
</style>
