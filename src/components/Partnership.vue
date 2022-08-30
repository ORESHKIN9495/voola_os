<template>
  <section id="partnership" class="partnership">
    <Partnercard />

    <article>
      <h2>Partnership</h2>
      <p>
        Voola OS is a European alternative to dominating mobile operating systems, and the only mobile OS offering an exclusive licensing model for local implementations.<br /><br />
        On the market since 2020, and now already in its 2th generation, Voola OS offers a secure platform for trusted mobile solutions.<br /><br />
        With Voola OS you can also run Android™ apps with our dedicated App Support solution. Vools OS is managed and developer by Finnish company
        <span style="color: var(--scheme-v3)">of seven possibilities UAB</span> .
      </p>

      <div>
        <i style="color: var(--scheme-v2)" class="icon-3-user"></i>

        <p style="margin-left: 20px">
          Business & partnership inquiries:<br />

          <a href="/">partners@voola.io</a>
        </p>
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
  grid-template-columns: repeat(2, 1fr);
  gap: var(--scheme-gap);

  div {
    align-items: center;
    display: flex;
    margin-top: 20px;

    a {
      color: var(--scheme-v3);
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
