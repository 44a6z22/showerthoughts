import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFullPage from 'vue-fullpage.js'
import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

Vue.use(VueFullPage);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
