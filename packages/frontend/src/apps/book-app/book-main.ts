import Vue from 'vue'
import '../../plugins/vuetify-plugin.ts'
import BookApp from './BookApp.vue'
import '../../plugins/socket-io/socket-io'
import {BusPlugin} from 'vue-epic-bus'

// import '../../registerServiceWorker'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '../../plugins/double-panel/double-panel'

import Router from 'vue-router'
import { createRoute, VueBookComponents } from 'vue-book'
Vue.use(VueBookComponents)

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(BusPlugin)

new Vue({
  router: new Router({
    routes: [
      createRoute({
        requireContext: require.context('./../..', true, /.demo.vue$/),
        path: '/',
        hideFileExtensions: true,
      }),
    ],
  }),
  render: h => h(BookApp)
}).$mount('#app')
