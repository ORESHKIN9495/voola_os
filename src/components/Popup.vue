<template>
  <section class="popup">
    <svg @click="$emit('close')" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m1.833 1.833 12.334 12.333M14.167 1.833 1.833 14.166" stroke="#4E94D7" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <a class="indexId" :name="item.id" v-for="item in titles" :key="item.id" v-scroll-to="'#' + item.id" @click="isActive($event)">{{ item.title }}</a>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

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

const isActive = (e) => {
  document.querySelectorAll('.indexId').forEach((el) => {
    if (e.target.name === el.name) {
      el.classList.add('isActive')
    } else {
      el.classList.remove('isActive')
    }
  })
}
</script>

<style lang="scss" scoped>
.popup {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: -5px 5px 25px 5px var(--scheme-v6);
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow-y: auto;
  position: absolute;
  padding: 80px 40px 40px;
  right: 0;
  scrollbar-width: none;
  top: 0;
  width: 400px;

  svg {
    cursor: pointer;
    position: absolute;
    right: 45px;
    top: 25px;
  }

  a {
    color: var(--scheme-v5);
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .isActive {
    color: var(--scheme-v2);
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
