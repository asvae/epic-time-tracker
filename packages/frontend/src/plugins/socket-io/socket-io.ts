import Vue, { ComponentOptions } from 'vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  connection: 'http://localhost:3000',
}))

declare module 'vue/types/vue' {
  interface Vue {
    $socket: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    sockets?: any
  }
}




