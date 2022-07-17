<template>
<!-- eslint-disable -->
  <div class="home">
    <nParallaxHeader>
      <h1>Buttons</h1>
    </nParallaxHeader>

    <div class="container my-5">

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

      <div class="row">
        <div class="col-md-4 my-5">
          <p>Текст</p>

          <textInput
          v-model="text"
          helper="Текст"
          label="Текст кнопки"
          placeholder="Например, 'Click me'"
          class="mb-4"
          />
        </div>

        <div class="col-md-4 my-5">
          <p>size</p>
          <ul>
            <li v-for="sizeValue in ['xs', 's', 'm', 'l', 'xl']" :key="sizeValue">
              <label>
                <input type="radio" :value="sizeValue" v-model="size" class="me-2">
                {{ sizeValue }}
              </label>
            </li>
          </ul>
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

        <div class="col-md-4 my-5">
          _____________
        </div>

      </div>
      <ul>
        <li>icon start</li>
        <li>icon end</li>
        <li>preloader</li>
        <li>disable</li>
        <li>iconic</li>
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

export default {
  components: {},

  data() {
    return {
      text: 'Click me',
      size: '',
    };
  },

  computed: {
    componentCode() {
      return `<nButton
text="${this.text}"
size="${this.size}"
/>`;
    },
  },
};
</script>
