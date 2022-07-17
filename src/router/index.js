import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
    path: '/components',
    name: 'components',
    component: () => import('../views/ComponentsView.vue'),
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
          title: 'Поле воода',
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
