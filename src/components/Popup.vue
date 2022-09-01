<script setup>
import { ref } from 'vue'

const items = [
  {
    id: 'advant',
    title: 'What you’ll get',
  },
  {
    id: 'customize',
    title: 'Customize',
  },
  {
    id: 'partnership',
    title: 'Partnership',
  },
  {
    id: 'faq',
    title: 'FAQ',
  },
  {
    id: 'feature',
    title: 'Features',
  },
  {
    id: 'models',
    title: 'Models',
  },
  {
    id: 'corp',
    title: 'For corporations',
  },
  {
    id: 'apps',
    title: 'Android Apps',
  },
  {
    id: 'api',
    title: 'Bridging the API gap',
  },
  {
    id: 'infra',
    title: 'Infrastructure',
  },
  {
    id: 'exp',
    title: 'User experience',
  },
  {
    id: 'over',
    title: 'Overhauled Browser',
  },
  {
    id: 'calendar',
    title: 'Calendar',
  },
  {
    id: 'email',
    title: 'Email',
  },
  {
    id: 'calling',
    title: 'Calling',
  },
]

const selectedItem = ref(0)

let isActive = false

const setActive = (i) => (selectedItem.value = i)
items.forEach((item, index) => {
  return (isActive = item == items[index])
})
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, i) in items" :key="i" v-scroll-to="'#' + item.id" @click="setActive(i)" :class="{ active: i == selectedItem }">{{ item.title }}</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: -5px 5px 25px 5px var(--scheme-v6);
  border-radius: 0 0 16px 16px;
  overflow-y: auto;
  position: absolute;
  padding: 60px 40px 40px;
  right: -34px;
  scrollbar-width: none;
  top: 0;
  width: 350px;

  li {
    color: var(--scheme-v5);
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 10px;

    &.active {
      color: var(--scheme-v2);
    }
  }

  @media only screen and (max-width: 920px) {
    & {
      height: 450px;
      width: 250px;

      a {
        font-size: 16px;
      }
    }
  }
}
</style>
