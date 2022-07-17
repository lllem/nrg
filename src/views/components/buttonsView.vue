<template>
  <div class="home">

    <div class="container my-5">
      <h1>Buttons</h1>

      <div class="row">

        <div class="col-md-6 my-5">
          <nButton
          :text="text"
          />
        </div>

        <div class="col-md-6 my-5">
          <pre
          v-highlightjs
          ><code class="html nrg-bg-dark nrg-rounded">{{ componentCode }}</code></pre>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Параметры</h2>
      <ul>
        <li>text</li>
        <li>icon start</li>
        <li>icon end</li>
        <li>preloader</li>
        <li>disable</li>
        <li>iconic</li>
        <li>size</li>
        <li>shadow</li>
        <li>pulse</li>
        <li>link, router-link, button</li>
        <li>style</li>
        <li>dense</li>
        <li>width</li>
      </ul>
    </div>

  </div>
</template>

<script>
import nButton from '@/nrg/components/nButton.vue';

export default {
  components: {
    nButton,
  },

  data() {
    return {
      text: 'Click me',
    };
  },

  computed: {
    componentCode() {
      return `<nButton
text="${this.text}"
/>`;
    },
  },
};
</script>
