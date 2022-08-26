<template>
  <section id="partnership" class="partnership">
    <Partnercard />

    <article>
      <h2>Partnership</h2>
      <p>
        Voola OS is a European alternative to dominating mobile operating systems, and the only mobile OS offering an exclusive licensing model for local implementations.<br /><br />
        On the market since 2020, and now already in its 2th generation, Voola OS offers a secure platform for trusted mobile solutions.<br /><br />
        With Voola OS you can also run Android™ apps with our dedicated App Support solution. Vools OS is managed and developer by Finnish company
        <span>of seven possibilities UAB</span> .
      </p>

      <div class="partnership__link">
        <i class="icon-2-user"></i>
        <div>
          <p>Business & partnership inquiries:</p>
          <a href="/">partners@voola.io</a>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import Partnercard from './Partnercard.vue'
</script>

<style lang="scss" scoped>
.partnership {
  display: grid;
  gap: var(--scheme-gap);
  grid-template-columns: repeat(2, 1fr);

  &__link {
    align-items: center;
    display: inline-flex;
    margin-top: 20px;

    i {
      margin-right: 20px;
      transform: scaleX(-1);
    }

    a {
      color: var(--scheme-v3);
      text-decoration: underline;
    }
  }

  span {
    color: var(--scheme-v3);
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
