<template>
  <pre
  v-highlightjs
  ><code
  :class="lang"
  class="nrg-bg-dark nrg-rounded text-start"
  >{{ code }}</code></pre>
</template>

<script>
export default {
  props: {
    lang: String,
    code: String,
  },
};
</script>
