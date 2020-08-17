/* eslint-disable no-param-reassign */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from '../views/Editor.vue';
import Dashboard from '../views/Dashboard.vue';
import * as routeNames from './route-names';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: routeNames.EMAIL_DESIGNS,
    },
  },
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
    path: '/dashboard',
    name: routeNames.DASHBOARD,
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
        path: 'email-designs',
        name: routeNames.EMAIL_DESIGNS,
        beforeEnter(to, from, next) {
          to.params.business = {
            businessName: 'QuickaPay',
          };
          next();
        },
        component: () => import(/* webpackChunkName: "email-designs" */ '../views/EmailDesigns.vue'),
      },
      {
        path: 'theme-logo-branding',
        name: routeNames.THEME_LOGO_BRANDING,
        beforeEnter(to, from, next) {
          to.params.business = {
            businessName: 'QuickaPay',
          };
          next();
        },
        component: () => import(/* webpackChunkName: "theme-logo-branding" */ '../views/ThemeLogoBranding.vue'),
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
