<template>
  <component
  :is="`${icon}-icon`"
  :fill="fill"
  class="n-icon"
  version="1.1"
  x="0px"
  y="0px"
  width="16px"
  height="16px"
  viewBox="0 0 16 16"
  style="enable-background:new 0 0 16 16;"
  xml:space="preserve"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  />
</template>

<script>
import pinIcon from '@/nrg/components/icons/pin/nIcon.vue';
import checkIcon from '@/nrg/components/icons/check/nIcon.vue';
import starIcon from '@/nrg/components/icons/star/nIcon.vue';

export default {
  props: {
    icon: {
      type: String,
      default: 'pin',
    },
    fill: Boolean,
  },
  components: {
    pinIcon,
    checkIcon,
    starIcon,
  },
};
</script>

<style lang="scss">
.n-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  display: inline-block;
  vertical-align: -0.125em; // like font awesome
  transition: all 0.6s; // TODO
}
</style>
