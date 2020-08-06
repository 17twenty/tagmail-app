import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from '../views/Editor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
