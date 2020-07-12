import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false

Vue.use(VueFullPage);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
