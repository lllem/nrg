<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="icons-view">
    <nParallaxHeader>
      <h1>Код</h1>
    </nParallaxHeader>

    <div class="container mw-m my-5">

      <p class="text-center lead">Для компонента кода используется плагин <a href="https://www.npmjs.com/package/vue3-highlightjs?activeTab=readme">vue3-highlightjs</a></p>

      <div class="row">

        <div class="col-md-6 my-5 text-center">
          <n-code :lang="lang" :code="code" />
        </div>

        <div class="col-md-6 my-5">
          <pre
          v-highlightjs
          ><code class="html nrg-bg-dark nrg-rounded">{{ componentCode }}</code></pre>
        </div>

      </div>

      <h2>Параметры</h2>

      <div class="row">
        <div class="col-md-4 my-5">
          <p>Язык программирования (или разметки)</p>

          <textInput
          v-model="lang"
          helper="Например, js или html"
          label="Язык"
          placeholder="Язык программирования (или разметки)"
          class="mb-4"
          />
        </div>

        <div class="col-md-4 my-5">
          <p>Код</p>

          <textarea cols="30" rows="10" class="w-100 mb-4" v-model="code"></textarea>
        </div>

      </div>
    </div>

    <section class="border-top bg-light">
      <div class="container mw-m">
        <h2>Read</h2>

        <ul>
          <!-- <li><a href="______">______</a></li> -->
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      lang: 'js',
      code: "console.log('Hello, world!')",
    };
  },

  computed: {
    componentCode() {
      return `<n-code
  lang="${this.lang}"
  code="${this.code}"
/>`;
    },

  },
};
</script>

<style lang="scss">
</style>

<!--
  TODO

  - При смене языка демо не обновляется
  - Заменить textarea
  - ___________
 -->
