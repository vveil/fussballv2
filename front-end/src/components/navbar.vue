<template>
  <div class="navbar">
    <nav>
      <router-link
        class="routerlink"
        active-class="active"
        tag="li"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      exact>{{routes.text}}</router-link>
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
          text: "Impressum",
          page: "/impressum",
        },
        { 
          id: 4, 
          text: "Admin", 
          page: "/adminview" 
        },
        { 
          id: 3, 
          text: "Login", 
          page: "/login" 
        },
      ],
    };
  },
};
</script>

<style scoped>

nav {
  list-style-type: none;
  margin: -0.5em;
  margin-bottom: 0;
  padding: 0;
  overflow: hidden;
  background-color: #666f88;
}

.routerlink {
  float: left;
  border-right:1px solid #bbb;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.routerlink:last-child {
  border-right: none;
  float: right;
}

nav li:hover:not(.active) {
  background-color: #3d4251;
}

.active {
  background-color: #d35e35;
}
</style>