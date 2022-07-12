<template>
<!-- eslint-disable vuejs-accessibility/label-has-for -->
  <div
  class="nrg-input"
  :class="{focus: inFocus}"
  >
    <input
    type="text"
    :id="id"
    class="nrg-input__intput"
    @focus="onFocus"
    @blur="onBlur"
    @change="onChange"
    />
    <label
    :for="id"
    class="nrg-input__label"
    >
      {{ 'label' }}
    </label>

    <span class="nrg-input__indicator"></span>

    <span class="nrg-input__helper">helper</span>
  </div>

</template>

<script>
/* eslint-disable */

export default {
  name: 'text-input',

  setup() {},

  props: {
    modelValue: String,
  },

  data() {
    return {
      id: `input-text_${Math.random()*1000000}`,
      inFocus: false,
    };
  },

  methods: {
    onFocus(e) {
      this.inFocus = true;
    },
    onBlur(e) {
      this.inFocus = false;
    },
    onChange(e) {
      // ...
    },
  },

  created() {},
};
</script>

<style lang="scss">
  $height: 2rem;

  .nrg-input {
    position: relative;
    height: $height;
    border: 1px solid #ff000050;

    .nrg-input__intput {
      height: 2rem;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
    }

    .nrg-input__label {
      position: absolute;
      left: 0;
      top: 0;
      line-height: $height;
      pointer-events: none;
    }

    .nrg-input__helper {
      position: absolute;
      left: 0;
      top: $height;
      font-size: 75%;
      padding-top: 0.5rem;
    }

    .nrg-input__indicator {
      height: 2px;
      display: inline-block;
      width: 100%;
      background-color: grey; // 2DO
      position: absolute;
      bottom: -1px;
    }
  }
</style>
