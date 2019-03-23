import Vue from 'vue'
import Router from 'vue-router'
import TaskDoublePanel from '../../components/pages/TaskDoublePanel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: TaskDoublePanel,
    },
    // TODO
  ],
})
