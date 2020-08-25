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
      name: routeNames.DASHBOARD,
    },
  },
  {
    path: '/editor/:templateId?',
    name: 'editor',
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
        console.log(`Error ${error}`);
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
    component: Dashboard,
    name: routeNames.DASHBOARD,
    redirect: { name: 'templates' },
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
        path: '/templates',
        name: routeNames.TEMPLATES,
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
        component: () => import(/* webpackChunkName: "TemplateList" */ '../views/TemplateList.vue'),
      },
      {
        path: '/theme-logo-branding',
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
        path: '/preferences',
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
