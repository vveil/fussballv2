<template>
  <div id="app">
<<<<<<< HEAD
    <navbar></navbar>
    <router-view />
=======
    <navbar />
    <router-view/>
>>>>>>> FormularFrontEnd
  </div>
</template>

<script>
<<<<<<< HEAD
import navbar from './components/navbar.vue'
import socketio from 'socket.io-client'
=======

import navbar from './components/navbar.vue'
>>>>>>> FormularFrontEnd

export default {
  name: 'App',
  components: {
    navbar
<<<<<<< HEAD
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
=======
>>>>>>> FormularFrontEnd
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
