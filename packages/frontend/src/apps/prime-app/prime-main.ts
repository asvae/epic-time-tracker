import Vue from 'vue'
import '../../plugins/vuetify-plugin'
import App from './PrimeApp.vue'
import '../../plugins/socket-io/socket-io'

import router from '../../plugins/router/router'

// PWA
// import '../../registerServiceWorker'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '../../plugins/double-panel/double-panel'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
