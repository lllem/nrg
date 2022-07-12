import { createApp } from 'vue';
import VueHighlightJS from 'vue3-highlightjs';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import '@/nrg/assets/styles/main.scss';
import 'highlight.js/styles/night-owl.css'; // github-dark-dimmed, github-dark, monokai-sublime, monokai, tokyo-night-dark, tomorrow-night-blue, arta, night-owl

createApp(App)
  .use(store)
  .use(router)
  .use(VueHighlightJS)
  .mount('#app');
