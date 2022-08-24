<template>
  <section class="popup">
    <svg @click="$emit('close')" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m1.833 1.833 12.334 12.333M14.167 1.833 1.833 14.166" stroke="#4E94D7" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <a v-for="item in titles" :key="item.id" @click="click(item.id, $event)">{{ item.title }}</a>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const currentIndex = ref(null)

const titles = ref([
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
])

const click = (id, e) => {
  const comp = ref([document.getElementById(id)])

  if (currentIndex.value !== id) {
    currentIndex.value = id

    comp.value.forEach((el) => {
      const ident = el.id

      if (currentIndex.value == ident) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    })
  } else {
    currentIndex.value = null
  }
}
</script>

<style lang="scss" scoped>
.popup {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: -5px 5px 25px 5px var(--scheme-v6);
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 80px 40px 0;
  height: 900px;
  margin: 0;
  width: 400px;
  overflow-y: auto;
  scrollbar-width: none;

  svg {
    cursor: pointer;
    position: absolute;
    right: 45px;
    top: 45px;
    z-index: 11;
  }

  a {
    color: var(--scheme-v5);
    cursor: pointer;
    font-size: 24px;
    margin-bottom: 10px;

    &:hover {
      color: #000;
    }
  }

  @media only screen and (max-width: 920px) {
    & {
      height: 450px;
      width: 250px;

      svg {
        right: 25px;
        top: 25px;
      }

      a {
        font-size: 16px;
      }
    }
  }
}
</style>
