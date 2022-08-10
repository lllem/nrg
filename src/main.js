import { createApp } from 'vue';
import VueHighlightJS from 'vue3-highlightjs';

import nParallaxHeader from '@/nrg/blocks/nParallaxHeader.vue';
import nButton from '@/nrg/components/nButton.vue';
import textInput from '@/nrg/components/textInput.vue';
import nIcon from '@/nrg/components/icons/nIcon.vue';
import nCode from '@/nrg/components/nCode.vue';

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
  .component('nParallaxHeader', nParallaxHeader)
  .component('nButton', nButton)
  .component('textInput', textInput)
  .component('nIcon', nIcon)
  .component('nCode', nCode)
  .mount('#app');
