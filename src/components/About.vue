<script setup></script>

<template>
  <section class="about">
    <picture>
      <source media="(max-width: 768px)" srcset="../assets/phone-vert/[Mockup] iPhone 31.png" />
      <source media="(min-width: 769px)" srcset="../assets/phone-vert/[Mockup] iPhone 31@2x.png" />
      <img src="../assets/phone-vert/[Mockup] iPhone 31@2x.png" alt="" />
    </picture>

    <article>
      <h2>Customize to your needs</h2>
      <h3>Features</h3>
      <p>
        Adaptability is in the core of Voola OS. It can be adapted to different corporate and governmental needs in valious ways and to various levels.<br /><br />Voola OS has
        configurable device policies to match different security requirements and easy extension points to roll your own apps, cloud accounts, location provides, VPN solutions,
        authentication methods, and so on.
      </p>
    </article>

    <article>
      <h3>Dedicated device mode</h3>
      <p>
        Volla OS is smart at heart, but also a great companion for single-purpose devices designet to handle a few functions really well.<br /><br />
        Focus on creating a great product experience, and let Voola OS worry about the nitty-gritty technical details like connectivity, security, user management, over-the-air
        updates, and other OS services.
      </p>
    </article>

    <picture>
      <source media="(max-width: 768px)" srcset="../assets/phone-vert/[Mockup] iPhone 31.png" />
      <source media="(min-width: 769px)" srcset="../assets/phone-vert/[Mockup] iPhone 31@2x.png" />
      <img src="../assets/phone-vert/[Mockup] iPhone 31@2x.png" alt="" />
    </picture>

    <picture>
      <source media="(max-width: 768px)" srcset="../assets/phone-vert/[Mockup] iPhone 31.png" />
      <source media="(min-width: 769px)" srcset="../assets/phone-vert/[Mockup] iPhone 31@2x.png" />
      <img src="../assets/phone-vert/[Mockup] iPhone 31@2x.png" alt="" />
    </picture>

    <article>
      <h3>Hardware</h3>
      <p>
        Volla OS has been ported to almost <span> a hundred different devices*</span> with new devices added regularly using our
        <span>Hardware Adaption Development Kit</span>.<br /><br />
        Wide support for different chipsets and hardware variants mean supporting new mobile devices is a breeze using the open adaption projects.<br /><br />
        You can always try Volla OS with a dedicated device using<span> VOOLS X</span>.
      </p>
    </article>

    <article>
      <h3>User Interface</h3>
      <p>
        VoolaOS has been built ground-up to scale to different from factors and input styles. Sub-pixel scaling support means Volla OS works beautifully on any display size, from
        small smartwatches to smart TVs.<br /><br />
        Furthermore, fully customizable preloaded content helps you taolir the OS to your needs: wallpapers, tones, photos, videos, bookmarks, even small details like default email
        signatures, Bluetooth and hotspot names can all easily rebranded. The centralized style asset makes it easy to further customize the experience with layiuts, icons, fonts
        and effects.
      </p>
    </article>

    <picture>
      <source media="(max-width: 768px)" srcset="../assets/phone-vert/[Mockup] iPhone 31.png" />
      <source media="(min-width: 769px)" srcset="../assets/phone-vert/[Mockup] iPhone 31@2x.png" />
      <img src="../assets/phone-vert/[Mockup] iPhone 31@2x.png" alt="" />
    </picture>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--scheme-gap);
  max-width: calc(var(--scheme-max-width) / 1.9);
  margin: 4em auto 0;

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    picture {
      &:nth-child(1) {
        grid-area: 2;
      }
      &:nth-child(4) {
        grid-area: 4;
      }
      &:nth-child(5) {
        grid-area: 6;
      }
    }
  }

  span {
    color: var(--scheme-v3);
  }

  picture {
    img {
      max-height: 400px;
      max-width: 227px;
    }
    &:nth-child(2n + 2) {
      text-align: right;
    }
  }
}
</style>
