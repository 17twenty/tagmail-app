import Vue from 'vue';
import Buefy from 'buefy';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
