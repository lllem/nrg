<template>
  <header
  class="parallax-header nrg-bg-dark text-center text-white py-5"
  >
    <div
    ref="parallaxContainer"
    class="container"
    >
      <slot/>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollHandler() {
      const container = this.$refs.parallaxContainer;
      const scroll = window.pageYOffset;
      container.style.transform = `translateY(${scroll / 2}px)`;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
};
</script>

<style lang="scss">
.parallax-header {
  overflow: hidden;
}
</style>

<!--
TODO

- background image

 -->
