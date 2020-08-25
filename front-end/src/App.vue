<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import socketio from 'socket.io-client'

export default {
  name: 'App',
  components: {
    navigation
  },
  created(){
    const socket = socketio('localhost:8080')
    socket.on('connect', () => {
      console.log("Connected")
      socket.emit('horstCreated', {
        name: "Horst",
        activity: "Horst will Bier!"
      })
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
