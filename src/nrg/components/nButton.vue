<template>
  <button
  class="nrg-btn"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'n-button',

  props: {
    text: String,
    to: [String, Object],
    href: String,
    size: {
      type: String,
      default: 'm',
      validator: (value) => (value === '' || value.match(/(xs|s|m|l|xl)/)),
    },
    type: {
      type: String,
      default: 'contained',
      validator: (value) => (value === '' || value.match(/(contained|outlined|text)/)),
    },
    iconic: Boolean,
    shadow: Boolean,
    reverse: Boolean,
    justify: Boolean,
    pulse: Boolean,
    dense: Boolean,
    disable: Boolean,
    state: {
      type: String,
      default: '',
      validator: (value) => (value === '' || value.match(/(loading|error|success)/)),
    },
  },
};
</script>

<style lang="scss">
  @import '@/nrg/tokens/tokens.scss';

  .nrg-btn {
    border: none;
    height: $ctrl_height;
    border-radius: $ctrl_height/2;
    padding: 0 1rem;
    color: #fff;
    background-color: $c_blue; // TODO
    font-weight: 700;
  }
</style>
