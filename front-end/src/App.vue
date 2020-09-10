<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  },
  created(){
    this.$socket.on('connect', () => {
      console.log("Connected")
      this.$socket.emit('horstCreated', {
        name: "Horst",
        activity: "Horst will Bier!"
      })
    })
    this.$socket.on('horstThirsty', data => {
      console.log(data.msg)
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
