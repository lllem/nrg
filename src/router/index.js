import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RouterView from '../views/RouterView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'NRG Design System',
    },
  },
  {
    path: '/styles',
    name: 'styles',
    component: RouterView,
    meta: {
      title: 'Стили',
    },
    children: [
      {
        path: '',
        component: () => import('../views/styles/indexPage.vue'),
        meta: {
          title: 'Компоненты',
        },
      },
    ],
  },
  {
    path: '/components',
    name: 'components',
    component: RouterView,
    meta: {
      title: 'Компоненты',
    },
    children: [
      {
        path: '',
        name: 'components',
        component: () => import('../views/components/indexPage.vue'),
        meta: {
          title: 'Компоненты',
        },
      },
      {
        path: '/components/input-text',
        name: 'inputs-view',
        component: () => import('../views/components/inputsView.vue'),
        meta: {
          title: 'Поле ввода',
        },
      },
      {
        path: '/components/buttons',
        name: 'buttons-view',
        component: () => import('../views/components/buttonsView.vue'),
        meta: {
          title: 'Кнопка',
        },
      },
      {
        path: '/components/icons',
        name: 'icons-view',
        component: () => import('../views/components/iconsView.vue'),
        meta: {
          title: 'Иконки',
        },
      },
      {
        path: '/components/code',
        name: 'icons-view',
        component: () => import('../views/components/codeView.vue'),
        meta: {
          title: 'Код',
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'О проекте',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
