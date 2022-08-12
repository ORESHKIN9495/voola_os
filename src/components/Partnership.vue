<script setup></script>

<template>
  <section class="partnership">
    <picture>
      <source media="(max-width: 768px)" srcset="../assets/Pship/35.png" />
      <source media="(min-width: 769px)" srcset="../assets/Pship/35@2x.png" />
      <img src="../assets/Pship/35@2x.png" alt="" />

      <div class="partnership__items">
        <button>Available on</button>
        <h3>App support</h3>

        <p>Also you can run Android™ apps with our dedicatod App Support solution</p>
      </div>

      <div class="partnership__plus">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"
          ></path>
        </svg>
      </div>
    </picture>

    <article>
      <h2>Partnership</h2>
      <p>
        Voola OS is a European alternative to dominating mobile operating systems, and the only mobile OS offering an exclusive licensing model for local implementations.<br /><br />
        On the market since 2020, and now already in its 2th generation, Voola OS offers a secure platform for trusted mobile solutions.<br /><br />
        With Voola OS you can also run Android™ apps with our dedicated App Support solution. Vools OS is managed and developer by Finnish company
        <span>of seven possibilities UAB</span> .
      </p>

      <div class="partnership__link">
        <picture>
          <source media="(max-width: 768px)" srcset="../assets/Profile.png" />
          <source media="(min-width: 769px)" srcset="../assets/Profile@2x.png" />
          <img src="../assets/Profile@2x.png" alt="/" />
        </picture>

        <div>
          <p>Business & partnership inquiries:</p>
          <a href="/">partners@voola.io</a>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.partnership {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  max-width: calc(var(--scheme-max-width) / 1.2);
  margin: 20em auto 0;

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  picture {
    display: block;
    height: 410px;
    max-width: 560px;
    position: relative;
  }

  img {
    height: 410px;
    max-width: 560px;
  }

  button {
    background: var(--scheme-v4);
    border-radius: 10px;
    color: inherit;
    font-size: 12px;
    margin: 0;
    padding: 8px 12px;
  }

  &__plus {
    background: var(--scheme-v1);
    border-radius: 50px;
    bottom: 40px;
    cursor: pointer;
    display: flex;
    padding: 20px;
    position: absolute;
    right: 40px;

    svg {
      fill: var(--scheme-v3);
      height: 16px;
      width: 16px;
    }
  }

  &__items {
    left: 40px;
    position: absolute;
    top: 60px;

    h3 {
      margin: 10px 0 160px;
    }

    p {
      font-size: 16px;
      max-width: 250px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    margin-top: 40px;

    picture {
      height: auto;
      margin: 0 20px 0 0;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  article {
    span {
      color: var(--scheme-v3);
    }

    a {
      color: var(--scheme-v3);
      text-decoration: underline;
    }
  }
}
</style>
