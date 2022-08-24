<template>
  <section id="feature" class="feature">
    <article class="feature__item" v-for="item in listItems" :key="item.id">
      <picture v-html="item.icon"></picture>

      <h3>{{ item.title }}</h3>

      <p>{{ item.body }}</p>

      <span v-html="item.button"></span>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        {
          title: 'Reliable corporate platform',
          body: 'Voola OS is a secure mobile operating system optimized to run on smartphones and tablets, and also easily adaptable to all kinds of embedded devices and use cases.',
          icon: `<svg width="27" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9v16c0 6.4-1.563 8-7.813 8H8.813C2.563 33 1 31.4 1 25V9c0-6.4 1.563-8 7.813-8h9.374C24.438 1 26 2.6 26 9ZM16.625 6.6h-6.25" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 28.36c1.338 0 2.422-1.11 2.422-2.48 0-1.37-1.084-2.48-2.422-2.48s-2.422 1.11-2.422 2.48c0 1.37 1.084 2.48 2.422 2.48Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          title: 'User experience at the core',
          body: 'The main design principles of Voola OS have always included a seamless user experience combined with unique and clean Scandinavian design.',
          icon: `<svg width="32" height="32"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.333 3.267c.92-.787 2.427-.787 3.36 0L19.8 5.08c.4.347 1.147.627 1.68.627h2.267A2.583 2.583 0 0 1 26.32 8.28v2.267c0 .52.28 1.28.627 1.68l1.813 2.107c.787.92.787 2.426 0 3.36L26.947 19.8c-.347.4-.627 1.147-.627 1.68v2.267a2.583 2.583 0 0 1-2.573 2.573H21.48c-.52 0-1.28.28-1.68.627l-2.107 1.813c-.92.787-2.426.787-3.36 0l-2.106-1.813c-.4-.347-1.147-.627-1.68-.627H8.24a2.583 2.583 0 0 1-2.573-2.573v-2.28c0-.52-.28-1.267-.614-1.667l-1.8-2.12c-.773-.92-.773-2.413 0-3.333l1.8-2.12c.334-.4.614-1.147.614-1.667V8.28A2.583 2.583 0 0 1 8.24 5.707h2.307c.52 0 1.28-.28 1.68-.627l2.106-1.813Z"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="m13.187 19.76 1.933 1.493c.254.254.814.374 1.187.374h2.36c.746 0 1.56-.56 1.746-1.307l1.494-4.56c.306-.867-.253-1.627-1.187-1.627h-2.493c-.373 0-.68-.306-.627-.746l.307-2c.12-.56-.253-1.187-.814-1.373-.493-.187-1.12.066-1.373.44l-2.56 3.8"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M10 19.76v-6.107c0-.88.373-1.186 1.253-1.186h.627c.867 0 1.253.306 1.253 1.186v6.107c0 .867-.373 1.187-1.253 1.187h-.627c-.88 0-1.253-.307-1.253-1.187Z"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`,
        },
        {
          title: 'Fourt generation security',
          body: 'Voola OS has a host of modern security functionalities developed specifically for corporate and governmental environments.',
          icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.666 29.334H9.333C4 29.334 2.666 28 2.666 22.666V20c0-5.333 1.334-6.666 6.667-6.666h13.333c5.334 0 6.667 1.333 6.667 6.666v2.667c0 5.333-1.333 6.666-6.666 6.666ZM8 13.333v-2.667c0-4.413 1.333-8 8-8 6 0 8 2.667 8 6.667"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M16 24.667A3.333 3.333 0 1 0 16 18a3.333 3.333 0 0 0 0 6.667Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
        },
        {
          title: 'World-class developer experience',
          body: 'Voola OS is an open platform with an active open source contribution model.',
          icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.333 25.293h-.667c-5.333 0-8-1.333-8-8v-6.666c0-5.334 2.667-8 8-8h10.667c5.334 0 8 2.666 8 8v6.666c0 5.334-2.666 8-8 8h-.666c-.414 0-.814.2-1.067.534l-2 2.666c-.88 1.174-2.32 1.174-3.2 0l-2-2.666c-.213-.294-.694-.534-1.067-.534Z"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.667 11.6 8 14.267l2.667 2.666M21.334 11.6 24 14.267l-2.666 2.666M17.333 11.16l-2.666 6.213"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`,
        },
        {
          title: 'Voola OS whitepaper',
          body: 'Learn more about Voola OS. On the site technical article provides an overview of Voola OS ecosystem and more.',
          button: `<button style='font-size: var(--scheme-xs);
          margin: 20px 0 0;
          padding: 1em 4em;
          '>Download</button>`,
          icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.667 24V9.333C4.667 4 6 2.666 11.332 2.666h9.333C26 2.667 27.334 4 27.334 9.334v13.333c0 .187 0 .374-.013.56"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.466 20h18.867v4.667a4.672 4.672 0 0 1-4.666 4.666H9.332a4.672 4.672 0 0 1-4.667-4.666V23.8c0-2.093 1.707-3.8 3.8-3.8ZM10.666 9.334h10.667M10.666 14h6.667"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`,
        },
        {
          title: 'Voola X device program',
          body: 'Voola X is Jolla’s officially supported downloadable version of Voola OS for selected devices. Download and install to join the development.',
          icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14.666v8L14.667 20M12 22.667 9.333 20" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M29.333 13.333V20c0 6.666-2.666 9.333-9.333 9.333h-8c-6.667 0-9.333-2.666-9.333-9.333v-8c0-6.667 2.666-9.334 9.333-9.334h6.667"
            stroke="#4E94D7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M29.333 13.333H24c-4 0-5.333-1.333-5.333-5.333V2.667l10.666 10.666Z" stroke="#4E94D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.feature {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  &__item {
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    padding: 2em;

    h3 {
      margin-top: 20px;
    }

    picture {
      align-items: center;
      background: var(--scheme-v1);
      border-radius: 55px;
      display: flex;
      height: 60px;
      justify-content: center;
      margin: 0 0 auto;
      width: 60px;
    }

    &:first-child {
      background: hsl(263, 100%, 96%);
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-child(2) {
      background: rgba(255, 248, 243, 0.98);
      grid-area: 1 / 2 / 2 / 4;
    }
    &:nth-child(3) {
      background: hsl(161, 85%, 95%);

      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(4) {
      background: rgba(245, 252, 253, 0.98);
      grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(5) {
      background: rgba(237, 240, 255, 0.98);
      grid-area: 3 / 2 / 4 / 4;
    }

    &:last-child {
      background: rgba(255, 248, 243, 0.98);
      grid-area: 2 / 1 / 4 / 2;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    &__item {
      &:nth-child(1n) {
        grid-area: unset;
      }
    }
  }
}
</style>
