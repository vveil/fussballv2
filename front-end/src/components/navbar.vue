<template>
<<<<<<< HEAD
  <div>
=======
  <div class="navbar">
>>>>>>> FormularFrontEnd
    <nav>
      <router-link
        class="routerlink"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      >{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        { 
          id: 0, 
          text: "Home", 
          page: "/" 
        },
        {
          id: 1,
          text: "Formular",
          page: "/formular",
        },
        {
          id: 2,
          text: "About",
          page: "/about",
        },
        { 
          id: 3, 
          text: "Login", 
          page: "/login" 
        },
        { 
          id: 4, 
          text: "Admin", 
          page: "/adminview" 
        },
      ],
    };
  },
};
</script>

<style scoped>

.routerlink {
  padding: 1em;
}

</style>