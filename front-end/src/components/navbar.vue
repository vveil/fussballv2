<template>
  <div>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/formular'>Formular</router-link>
      <router-link to='/about'>About</router-link>
      <a href v-if='oidcIsAuthenticated' @click.prevent='logout'>Logout</a>
      <router-link v-else to='/adminView'>Login</router-link>
      <router-link v-if='oidcIsAuthenticated' to='/adminView'>Admin</router-link>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "Navigation",
  computed: {
    ...mapGetters ('oidcStore', [
      'oidcIsAuthenticated',
    ])  
  },
  methods: {
    ...mapActions('oidcStore', [
      'removeOidcUser'
    ]),
    async logout(){
      await this.removeOidcUser()
      this.$router.replace('/')
    }
  }
};
</script>

<style scoped>

.routerlink {
  padding: 1em;
}

</style>