<template>
  <section class="footer">
    <p>2022.Voola</p>
    <p>design by <a style="color: var(--scheme-v3); text-decoration: underline" href="/">roobinium.io</a></p>
  </section>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 2px solid var(--scheme-v4);
  display: flex;
  justify-content: space-between;
  padding: 2em;
}
</style>
