import Vue from 'vue'
import App from './App.vue'
import router from './router'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import store from './store'

export const SocketInstance = socketio('http://localhost:8033', {
  path: '/api/socket',
  transports: ['websocket'], // websocket only
});

Vue.use(new VueSocketIO({
  connection: SocketInstance
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
