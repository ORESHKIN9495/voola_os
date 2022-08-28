<template>
  <section>
    <article>
      <button>Available on</button>
      <h3>App support</h3>
    </article>

    <article>
      <p>Also you can run Android™ apps with our dedicatod App Support solution</p>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
          ></path>
        </svg>
      </button>
    </article>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  background: radial-gradient(circle, rgba(235, 242, 233, 1) 0%, rgba(169, 217, 234, 1) 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    align-items: center;
    display: flex;
    justify-content: space-between;

    p {
      margin-right: 20px;
      max-width: 280px;
    }

    button {
      border-radius: 35px;
      background: var(--scheme-v1);
      height: 60px;
      padding: 22px;

      svg {
        fill: var(--scheme-v3);
        width: 16px;
      }
    }
  }
}
</style>
