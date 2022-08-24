<template>
  <section class="questions">
    <article class="questions__item" v-for="item in listItems" :key="item.id" @click.prevent="toggle(item.id)">
      <p>
        {{ item.title }}

        <svg v-if="isOpen && currentIndex === item.id" width="12" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1h10" stroke="#4E94D7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <svg v-else width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1v10M1 6h10" stroke="#4E94D7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </p>

      <div v-show="isOpen && currentIndex === item.id" style="color: var(--scheme-v5)">
        <hr />
        {{ item.body }}
      </div>
    </article>

    <a href="/" style="color: var(--scheme-v3)">Show more</a>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const currentIndex = ref(null)
const listItems = ref([
  {
    id: 1,
    title: 'Why is it called Voola OS X?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
  },
  {
    id: 2,
    title: 'Why do you charge 49.90€ or 29.90€ for it?',
    body: 'With the price you get a fully supported commercial version of Voola OS that includes commercial components like Android App Support, and MS Exchange support for your Xperia device. You also get support and updates for your OS from Voola, and you can support the Voola OS development. The Gemini PDA version does not include Android App Support. Jolla has invested a lot of time and money for the development of Volla OS. Supporting a release officially is also a significant cost and there are licensing costs that Jolla needs to cover when distributing commercial components of Volla OS.',
  },
  {
    id: 3,
    title: 'What is Viila X Free?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
  },
  {
    id: 4,
    title: 'Which devices is Voola X available for?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
  },
  {
    id: 5,
    title: ' How long is the Voola X licence valid?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
  },
])

const toggle = (id) => {
  if (currentIndex.value !== id) {
    isOpen.value = true
    currentIndex.value = id
  } else if (currentIndex.value === id) {
    currentIndex.value = null
  }
}
</script>

<style lang="scss" scoped>
.questions {
  margin: 0;
  max-width: 800px;
  padding: 0;

  &__item {
    background: var(--scheme-v1);
    border: 1px solid var(--scheme-v4);
    box-shadow: 0 5px 10px 5px var(--scheme-v6);
    border-radius: 10px;
    margin: 20px 0;
    padding: 20px;

    p {
      align-items: center;
      display: flex;
      justify-content: space-between;

      svg {
        cursor: pointer;
      }
    }

    hr {
      border: none;
      border-top: 1px solid var(--scheme-v4);
      margin: 20px 0;
    }
  }
}
</style>
