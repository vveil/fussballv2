<template>
  <div>
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
          text: "Formular",
          page: "/formular",
        },
        {
          id: 1,
          text: "Impressum",
          page: "/impressum",
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