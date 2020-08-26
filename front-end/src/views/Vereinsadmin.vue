<template>
  <div>
    <div>You got logged in!</div>

    <form>
      <label>Eventname</label>
      <input v-model="name" />
      <br />
      <br />
      <label>Startdatum</label>
      <input type="date" v-model="startDate" />
      <br />
      <br />
      <label>Enddatum</label>
      <input type="date" v-model="endDate" />
    </form>

    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import socketio from "socket.io-client";
const socket = socketio("localhost:8080");
export default {
  name: "Vereinsadmin",
  beforeCreate() {
    var token = localStorage.getItem("token") === null;
    if (!token) {
        console.log("pushing to login from adminview")
      this.$router.push("/login");
    } else {
      socket.emit("authenticate", token);
      socket.on('isAuthenticated', data => {
          if(!data.isAuthenticated){
              localStorage.clear()
              console.log("pushing to login cause token wrong")
              this.$router.push('/login')
          }
      })
    }
  },
  methods: {
    logout() {
      this.localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>