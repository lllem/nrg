<template>
  <div class="home">

    <div class="container my-5">
      <h1>Home page</h1>

      <p><a href="https://github.com/lllem/nrg">Проект на GitHub</a></p>
    </div>

    <pre
    v-highlightjs
    class="container my-5"
    ><code
    class="json nrg-bg-dark nrg-rounded">{{ $router.options.routes }}</code></pre>

    <section class="container my-5">
      <h1>Стили</h1>
      <ul>
        <li>Цвета</li>
        <li>Материалы</li>
      </ul>
    </section>

    <section class="container my-5">
      <h1>Типографика</h1>
      <ul>
        <li>Цвета</li>
        <li>Материалы</li>
      </ul>
    </section>

    <section class="container my-5">
      <h1>Стили</h1>
      <ul>
        <li>Цвета</li>
        <li>Материалы</li>
        <li>corner raduis</li>
        <li>shadows</li>
        <li>border</li>
        <li>scroll (stylize or hide)</li>
      </ul>
    </section>

    <section class="container my-5">
      <h1>Компоненты</h1>
      <ul>
        <li>Поля ввода
          <ul>
            <li>email</li>
            <li>password</li>
            <li>date</li>
            <li>multiline</li>
            <li>text</li>
            <li>chips</li>
            <li>file</li>
            <li>WYSiWYG</li>
          </ul>
        </li>
        <li>radiobutton</li>
        <li>checkbox</li>
        <li>toggler</li>
        <li>video</li>
        <li>tooltip</li>
        <li>select</li>
        <li>Кнопки</li>
        <li>chips</li>
        <li>link</li>
        <li>avatar</li>
        <li>topbar</li>
        <li>tabbar</li>
        <li>icons</li>
        <li>FAB</li>
        <li>accordion</li>
        <li>loader</li>
        <li>tabs</li>
        <li>table</li>
        <li>masonry</li>
        <li>lightbox</li>
        <li>modal</li>
        <li>calendar</li>
        <li>audio</li>
        <li>image with placeholder</li>
      </ul>
    </section>

    <section class="container my-5">
      <h1>Patterns</h1>
      <ul>
        <li>treeview</li>
        <li>chat</li>
        <li>slider</li>
        <li>card</li>
        <li>code</li>
        <li>map</li>
        <li>infographic</li>
        <li>3D</li>
        <li>parallax</li>
        <li>360</li>
        <li>Panorama</li>
      </ul>
    </section>

  </div>
</template>
