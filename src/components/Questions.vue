<template>
  <section class="questions">
    <transition-group name="list">
      <article class="questions__item" v-for="item in listItems" :key="item.id" :open="isOpen && currentIndex === item.id" @click.prevent="toggle(item.id)">
        <p>
          {{ item.title }}
          <span v-if="isOpen && currentIndex === item.id" v-html="item.minus"></span>
          <span v-else v-html="item.plus"></span>
        </p>

        <div v-show="isOpen && currentIndex === item.id" style="margin: 40px 0 0">
          {{ item.body }}
        </div>
      </article>
    </transition-group>

    <a href="/" style="color: var(--scheme-v3)">Show more</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      currentIndex: null,
      listItems: [
        {
          id: 1,
          title: 'Why is it called Voola OS X?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
          plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
            ></path>
          </svg>`,

          minus: '--',
        },
        {
          id: 2,
          title: 'Why do you charge 49.90€ or 29.90€ for it?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
          plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
            ></path>
          </svg>`,
          minus: '--',
        },
        {
          id: 3,
          title: 'What is Viila X Free?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
          plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
            ></path>
          </svg>`,
          minus: '--',
        },
        {
          id: 4,
          title: 'Which devices is Voola X available for?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
          plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
            ></path>
          </svg>`,
          minus: '--',
        },
        {
          id: 5,
          title: ' How long is the Voola X licence valid?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
          plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
            ></path>
          </svg>`,
          minus: '--',
        },
      ],
    }
  },
  methods: {
    toggle(id) {
      if (this.currentIndex !== id) {
        this.isOpen = true
        this.currentIndex = id
      } else if (this.currentIndex === id) {
        this.currentIndex = null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.questions {
  padding: 0;

  &__item {
    border: 1px solid var(--scheme-v4);
    box-shadow: 0 15px 15px 5px var(--scheme-v4);
    border-radius: 10px;
    margin: 2em 0;
    padding: 20px;

    p {
      align-items: center;
      display: flex;
      justify-content: space-between;

      span {
        cursor: pointer;
        display: flex;
        fill: var(--scheme-v3);
        width: 14px;
      }
    }
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.1s ease-in-out;
}
</style>
