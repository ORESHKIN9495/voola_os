<script setup>
import Hero from './components/Hero.vue'
import Advantages from './components/Advantages.vue'
import About from './components/About.vue'
import Partnership from './components/Partnership.vue'
import Faq from './components/Faq.vue'
import Future from './components/Future.vue'
import Models from './components/Models.vue'
import Corporation from './components/Corporation.vue'
import Apps from './components/Apps.vue'
import AppsList from './components/Apps-list.vue'
import Developer from './components/Developer.vue'
import Api from './components/Api.vue'
import Infrastructure from './components/Infrastructure.vue'
import Experience from './components/Experience.vue'
</script>

<template>
  <Hero />
  <Advantages />
  <About />
  <Partnership />
  <Faq />
  <Future />
  <Models />
  <Corporation />
  <Apps />
  <AppsList />
  <Developer />
  <Api />
  <Infrastructure />
  <Experience />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// initialize project fonts from @assets
@font-face {
  font-family: 'Renner*';
  src: local('./assets/fonts/renner-light'), url('./assets/fonts/renner-light.otf') format('opentype');
  font-weight: 300;
}

@font-face {
  font-family: 'Renner*';
  src: local('./assets/fonts/renner-book'), url('./assets/fonts/renner-book.otf') format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'Renner*';
  src: local('./assets/fonts/renner-medium'), url('./assets/fonts/renner-medium.otf') format('opentype');
  font-weight: 500;
}

@font-face {
  font-family: 'iconly';
  src: url('./assets/fonts/icons/iconly.eot');
  src: url('./assets/fonts/icons/iconly.eot') format('embedded-opentype'), url('./assets/fonts/icons/iconly.woff2') format('woff2'),
    url('./assets/fonts/icons/iconly.woff') format('woff'), url('./assets/fonts/icons/iconly.ttf') format('truetype'), url('./assets/fonts/icons/iconly.svg') format('svg');

  font-display: swap;
}

.icon-2-user:before {
  content: '\e063';
}

.icon-wallet:before {
  content: '\e001';
}

i {
  /* use !important to prevent issues with browser extensions that change fonts */
  font: 300 40px / 1 'iconly' !important;

  color: var(--scheme-v3);

  opacity: 0.6;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  // project color palete
  --scheme-v1: #ffffff;
  --scheme-v2: #151f32;
  --scheme-v3: #4e94d7; // primary scheme
  --scheme-v4: #f1f1f1;
  --scheme-v5: #62686d;

  // project font-family
  --scheme-font: 'Renner*', Inter, Avenir, Helvetica, Arial, sans-serif;
  --scheme-h: 46px;
  --scheme-m: 32px;
  --scheme-xs: 16px;
  --scheme-s: 12px;

  // project default template width
  --scheme-max-width: 1920px; // desktop
  --scheme-min-width: 320px; // 5 SE

  // project default template height
  --scheme-min-height: 568px; // 5 SE

  // project default template gap
  --scheme-gap: 20px;

  // project ex. header & footer height
  --scheme-offset: 100px;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

// project reset css
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
}

body {
  background: var(--scheme-v1);
  color: var(--scheme-v2);

  font: 300 17px / 1.64 var(--scheme-font);

  // user-select: none;
  ::selection {
    background: var(--scheme-v3);
    color: var(--scheme-v1);
  }
  margin: 0 auto;
  max-width: var(--scheme-max-width);
  position: relative;
}

main,
section {
  position: relative;
}

section {
  padding: 0 2rem;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
  margin: 0;
}

h1 {
  font: 300 var(--scheme-h) / 1.42 var(--scheme-font);
  margin: 6rem 0 2rem;
}

h2 {
  font: 300 var(--scheme-h) / 1.42 var(--scheme-font);
  margin: 0 0 2rem;
}

h3 {
  font: 400 var(--scheme-m) / 1.42 var(--scheme-font);
  margin: 0 0 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

b {
  font-weight: 400;
}

p {
  margin: 0;
  font-weight: 300;
}

strong {
  font: inherit;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

figure {
  margin: 0;

  img {
    display: block;
    // object-fit: cover;
    width: 100%;
  }

  svg {
    vertical-align: middle;
  }
}

picture {
  img {
    width: 100%;
  }
}

input,
button {
  background: none;
  border: none;
  box-shadow: none;

  font: var(--scheme-font);

  margin: 0;
  outline: none;
  padding: 0;
}

// set default button properties

button {
  background-color: var(--scheme-v3);
  border-radius: 16px;
  color: var(--scheme-v1);
  cursor: pointer;
  display: inline-block;
  font-size: var(--scheme-s);
}
</style>
