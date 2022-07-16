<template>
  <button>button</button>
</template>

<script>
export default {
  name: 'n-button',
  props: {
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
