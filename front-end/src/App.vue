<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
  </div>
</template>

<script>
import navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    navigation
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
