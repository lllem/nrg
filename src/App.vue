<template>

  <div>
    <nrgLayout>

      <template v-slot:sidebar>
        <router-link to="/">
          <h1 class="p-3">NRG</h1>
        </router-link>

        <div class="nav">
          <router-link
          :to="route.path"
          v-for="route in routes"
          :key="route"
          class="p-3 border w-100"
          >
            {{ route.meta.title || route.name }}
          </router-link>
        </div>
      </template>

      <template v-slot:header>
        <nav class="px-3">
          <router-link to="/" class="d-inline-block py-3">Home</router-link> |
          <router-link to="/about" class="d-inline-block py-3">About</router-link> |
          <router-link to="/components" class="d-inline-block py-3">Components</router-link>
        </nav>
      </template>

      <template v-slot:banner>
        <h1>Title</h1>
      </template>

      <router-view/>

      <template v-slot:footer>
        footer
      </template>

    </nrgLayout>

  </div>
</template>

<script>
import nrgLayout from '@/nrg/layouts/nrgLayout.vue';

export default {
  name: 'app',
  components: {
    nrgLayout,
  },
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.routes = this.$router.options.routes;
  },
};
</script>

<style lang="scss">
#app {}
</style>
