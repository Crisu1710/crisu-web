import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'
import Clipboard from 'v-clipboard'
//css
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//filter
import DateFilter from './filters/date.js'


Vue.filter('date', DateFilter)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Clipboard)
Vue.use(VueResource);

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/notFound');
  }else{
    next();
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
