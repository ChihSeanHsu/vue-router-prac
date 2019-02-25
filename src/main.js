import Vue from 'vue'
import Router from 'vue-router';

import { routes } from './routes';
import App from './App.vue'

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
