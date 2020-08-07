/* eslint-disable no-param-reassign */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from '../views/Editor.vue';
import Dashboard from '../views/Dashboard.vue';
import * as routeNames from './route-names';

Vue.use(VueRouter);

const routes = [
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/login',
    name: routeNames.LOGIN,
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/',
    component: Dashboard,
    props: true,
    beforeEnter(to, from, next) {
      to.params.business = {
        businessName: 'QuickaPay',
      };
      next();
    },
    children: [
      {
        path: '',
        name: routeNames.DASHBOARD,
        component: () => import(/* webpackChunkName: "email-designs" */ '../views/EmailDesigns.vue'),
      },
      {
        path: '/googo',
        name: 'foffo',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
