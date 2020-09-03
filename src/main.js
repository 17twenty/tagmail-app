import Vue from 'vue';
import Buefy from 'buefy';
import moment from 'moment';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.component('vue-simplemde', VueSimplemde);

Vue.filter('formatDate', (value) => {
  if (value) {
    const date = new Date(value);
    const timeUTC = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    );
    return moment(timeUTC).fromNow();
  }
  return '';
});

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
