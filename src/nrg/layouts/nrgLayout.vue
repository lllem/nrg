<template>
  <div class="nrg-layout nrg-bg-light">

    <aside
    class="nrg-layout__sidebar"
    >
      <slot name="sidebar"/>
    </aside>

    <main class="nrg-layout__body bg-white shadow">
      <header class="nrg-layout__header bg-white shadow">
        <slot name="header"/>
      </header>

      <section class="nrg-layout__banner px-3 py-5 nrg-bg-dark text-white text-center">
        <slot name="banner"/>
      </section>

      <div class="nrg-layout__content">
        <slot name="default"/>
      </div>

      <footer class="bg-dark text-white">
        <slot name="footer"/>
      </footer>
    </main>
  </div>
</template>

<style lang="scss">
.nrg-layout {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  min-height: 100vh;

  .nrg-layout__sidebar {
    display: inline-block;
    width: 20rem; // TODO
    max-width: 100%;
    overflow: hidden;
    overflow-y: auto;
    height: 100vh;
    position: sticky;
    top: 0;
  }

  .nrg-layout__header {
    position: sticky;
    top: 0;
  }

  .nrg-layout__body {
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-flow: column nowrap;
  }

  .nrg-layout__banner {
    // ...
  }

  .nrg-layout__content {
    width: 100%;
    flex-grow: 1;
  }

  .nrg-layout__sidebar {
    display: inline-block;
    width: 20rem; // TODO
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    position: sticky;
    top: 0;
  }
}
</style>
