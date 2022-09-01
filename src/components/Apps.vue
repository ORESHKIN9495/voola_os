<template>
  <section id="apps">
    <article>
      <h3>
        Fourth generation security
        <p>
          Voola 4 ensures that your device is protected on multiple fronts: user data is encrypted on the device, network communication is secured using VPN, and the inbuilt
          firewall and sandboxing further safeguards your data and device resources from abuse. Over-the-air updates and hotfix releases allow us to address any critical
          vulnerabilities quickly and promptly.
        </p>
      </h3>
    </article>

    <article>
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/screen-s.png" />
        <source media="(min-width: 769px)" srcset="../assets/screen-s@2x.png" />
        <img src="../assets/screen-s@2x.png" alt="" />
      </picture>

      <picture>
        <source media="(max-width: 768px)" srcset="../assets/screen-l.png" />
        <source media="(min-width: 769px)" srcset="../assets/screen-l@2x.png" />
        <img src="../assets/screen-l@2x.png" alt="" />
      </picture>
    </article>

    <article>
      <h3>
        Android Apps
        <p>
          Voola OS is compatible with the Android™ ecosystem, and so able to run Android apps and support Android device hardware. However, it’s fully independent, and not
          aderivative or a fork of the Android codebase.<br /><br />Voola licensees choose if they wish to use the Android compatibility part in the OS, or instead opt for fully
          native solutions.<br /><br />App support is also offered for other Linux-based systems through
          <span style="color: var(--scheme-v3)">App Support for Linux Platforms</span> product.
        </p>
      </h3>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--scheme-gap);
  justify-items: center;

  p {
    font-size: var(--scheme-xs);
    margin-top: 20px;
  }
  article:nth-child(2) {
    align-items: flex-end;
    display: flex;

    img {
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }
}
</style>
