<template>
  <div class="home">

    <div class="container py-5">
      <h1>Home page</h1>

      <p><a href="https://github.com/lllem/nrg">Проект на GitHub</a></p>
    </div>

    <pre
    v-highlightjs
    class="container py-5 overflow-hidden"
    ><code class="json">{{ $router.options.routes }}</code></pre>

  </div>
</template>
