/* eslint-disable no-param-reassign */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from '../views/Editor.vue';
import Dashboard from '../views/Dashboard.vue';
import * as routeNames from './route-names';

import api from '../api';

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
    props: true,
    async beforeEnter(to, from, next) {
      try {
        const resp = await Promise.allSettled([
          api.getProjectTheme(),
          api.getProject(),
        ]);
        const [theme, project] = resp;
        to.params.theme = theme.value.data;
        to.params.project = project.value.data;
        next();
      } catch (error) {
        next({ name: routeNames.LOGIN });
      }
    },
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
    async beforeEnter(to, from, next) {
      try {
        const { data } = await api.getProject();
        to.params.project = data;
        next();
      } catch (error) {
        next({ name: routeNames.LOGIN });
      }
    },
    children: [
      {
        path: 'email-designs',
        name: routeNames.EMAIL_DESIGNS,
        async beforeEnter(to, from, next) {
          try {
            const { data } = await api.getProject();
            to.params.project = data;
            next();
          } catch (error) {
            next({ name: routeNames.LOGIN });
          }
        },
        component: () => import(/* webpackChunkName: "email-designs" */ '../views/EmailDesigns.vue'),
      },
      {
        path: 'theme-logo-branding',
        name: routeNames.THEME_LOGO_BRANDING,
        props: true,
        async beforeEnter(to, from, next) {
          try {
            const resp = await Promise.allSettled([
              api.getProjectTheme(),
              api.getProject(),
            ]);
            const [theme, project] = resp;
            to.params.theme = theme.value.data;
            to.params.project = project.value.data;
            next();
          } catch (error) {
            next({ name: routeNames.LOGIN });
          }
        },
        component: () => import(/* webpackChunkName: "theme-logo-branding" */ '../views/ThemeLogoBranding.vue'),
      },
      {
        path: 'sending-preferences',
        name: routeNames.PREFERENCES,
        props: true,
        async beforeEnter(to, from, next) {
          try {
            const resp = await Promise.allSettled([
              api.getProjectTheme(),
              api.getProject(),
            ]);
            const [theme, project] = resp;
            to.params.theme = theme.value.data;
            to.params.project = project.value.data;
            next();
          } catch (error) {
            next({ name: routeNames.LOGIN });
          }
        },
        component: () => import(/* webpackChunkName: "preferences" */ '../views/Preferences.vue'),
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
