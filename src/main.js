import Vue from 'vue';
import Buefy from 'buefy';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
