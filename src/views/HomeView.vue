<template>
  <div class="home">

    <div class="container py-5">
      <h1>Home page</h1>
    </div>

    <pre
    v-highlightjs
    class="container py-5 overflow-hidden"
    ><code class="json">{{ $router.options.routes }}</code></pre>

  </div>
</template>
