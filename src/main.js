import Vue from 'vue'
import Router from 'vue-router';

import { routes } from './routes';
import App from './App.vue'

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
