<template>
  <div class="inputs-view">
    <nParallaxHeader>
      <h1>Inputs</h1>
    </nParallaxHeader>

    <div class="container my-5">
      <div class="row">

        <div class="col-md-6 my-5">
          <textInput
          v-model="value"
          :helper="helper"
          :label="label"
          :placeholder="placeholder"
          />
        </div>

        <div class="col-md-6 my-5">
          <pre
          v-highlightjs
          class="container"
          ><code class="html nrg-bg-dark nrg-rounded">{{ componentCode }}</code></pre>
        </div>

      </div>

      <h2>Параметры</h2>

      <div class="row">

        <div class="col-md-4 my-5">
          <textInput
          v-model="placeholder"
          helper="Текст"
          label="Placeholder"
          :placeholder="placeholder"
          class="mb-4"
          />

          <p>
            <b>Placeholder/Плэйсхолдер - prop</b><br/>
            ...
          </p>
        </div>

        <div class="col-md-4 my-5">
          <textInput
          v-model="label"
          helper="Текст"
          label="Label"
          placeholder="Введите текст для лэйбла"
          class="mb-4"
          />

          <p>
            <b>Label/Лэйбл - prop</b><br/>
            Текст, который в пустом поле не в&nbsp;фокусе играет роль плейсхолдера
          </p>
        </div>

        <div class="col-md-4 my-5">
          <textInput
          v-model="helper"
          helper="Текст"
          label="Helper"
          placeholder="Введите плейсхолдер"
          class="mb-4"
          />

          <p>
            <b>Helper/Подсказка - prop</b><br/>
            ...
          </p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      value: 'Text example',
      helper: 'Helper example',
      label: 'Label example',
      placeholder: 'Placeholder example',
    };
  },

  computed: {
    componentCode() {
      console.log(this.template);
      return `<textInput
v-model="yourVariable"
helper="${this.helper}"
label="${this.label}"
/>`;
    },

  },
};
</script>
