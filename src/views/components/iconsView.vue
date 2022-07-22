<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="icons-view">
    <nParallaxHeader>
      <h1>Icons</h1>
    </nParallaxHeader>

    <div class="container my-5">

      <div class="row">

        <div class="col-md-4 my-5 text-center">
          <div class="icons-view__current-icon">
            <n-icon :icon="currentIcon" :fill="fill"/>
            <div class="icon-grid"></div>
          </div>

          <p>
            <small>{{ icon }}</small>
          </p>
        </div>

        <div class="col-md-4 my-5">
          <pre
          v-highlightjs
          ><code class="html nrg-bg-dark nrg-rounded">{{ componentCode }}</code></pre>
        </div>

      </div>

      <div class="row">

        <div
        v-for="icon in icons"
        :key="icon"
        class="col-auto px-3 my-5 text-center"
        :title="icon"
        >
          <n-icon :icon="icon" :fill="fill" class="icons-view__icon" />
          <p>
            <small>{{ icon }}</small>
          </p>
        </div>

      </div>

      <h2>Параметры</h2>

      <div class="row">

        <div class="col-md-4 my-5">
          <label>
            <input type="checkbox" v-model="fill"/> fill
          </label>
        </div>

      </div>
    </div>

    <section class="border-top bg-light">
      <div class="container">
        <h2>Read</h2>

        <ul>
          <li><a href="https://css-tricks.com/a-font-like-svg-icon-system-for-vue/">A Font-Like SVG Icon System for Vue | CSS-Tricks - CSS-Tricks</a></li>
          <li><a href="https://jessarcher.com/blog/creating-an-icon-component-in-vue/">Creating an SVG Icon Component in Vue – Jess Archer</a></li>
          <li><a href="https://www.google.com/search?q=vue+custom+svg+icons+system&oq=vue+custom+svg+icons+system">vue custom svg icons system - Поиск в Google</a></li>
          <li><a href="https://v2.vuejs.org/v2/cookbook/editable-svg-icons.html">Editable SVG Icon Systems — Vue.js</a></li>
          <li><a href="https://github.com/sdras/vue-sample-svg-icons/">GitHub - sdras/vue-sample-svg-icons: An opinionated example of how to use SVG icons in a Vue.js application</a></li>
          <li><a href="______">______</a></li>
          <li><a href="______">______</a></li>
          <li><a href="______">______</a></li>
          <li><a href="______">______</a></li>
          <li><a href="______">______</a></li>
          <li><a href="______">______</a></li>
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
      currentIcon: 'star',
      fill: false,
      icons: [
        'pin',
        'check',
        // 'check-double',
        'star',
        // 'gender-group',
        // 'gender-male',
        // 'gender-female',
        // 'gender-anybody',
        // 'plane',
        // 'plane-right',
        // 'message',
        // 'rest',
        // 'user',
        // 'user-circle',
        // 'cog',
        // 'edit',
        // 'calendar',
        // 'search',
        // 'plus',
        // 'plus-square',
        // 'ellipsis',
        // 'ellipsis-v',
        // 'x'
        // 'angle-left',
        // 'angle-right',
        // 'angle-up',
        // 'angle-down',
        // 'angle-double-right',
        // 'clear',
        // 'paperplane',
        // 'arrow-left',
        // 'arrow-right',
        // 'offers',
      ],
    };
  },

  computed: {
    componentCode() {
      console.log(this.template);
      return `<n-icon
icon="${this.currentIcon}"
fill="${this.fill}"
/>`;
    },

  },
};
</script>

<style lang="scss">
.icons-view {
  .icons-view__icon {
    font-size: 2rem;
    color: #143872;

    :hover {
      color: red;
    }
  }

  .icons-view__current-icon {
    font-size: 16rem;
    width: 16rem;
    height: 16rem;
    display: inline-block;
    color: #143872;
    position: relative;
    display: inline-block;
    line-height: 1;

    .n-icon {
      float: left;
    }

    .icon-grid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('@/assets/img/icon_grid.svg');
    }
  }
}
</style>

<!--
  TODO

  - width - ширина иконки: пропорциональная или компактная
 -->
