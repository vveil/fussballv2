<template>
<div class="wrapper">
  <form>
    <label for="name">Vereinsname</label>
    <input type="text" v-model="name" required />
    <br />
    <br />
    <label for="Username">Username</label>
    <input type="text" v-model="username" required />
    <br />
    <br />
    <label for="password">Passwort</label>
    <input type="password" v-model="password" required />
    <br />
    <button class="btn" v-on:click="addClub">Verein anlegen</button>
  </form>
</div>
</template>

<script>
import socketio from "socket.io-client";

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    addClub(e) {
      e.preventDefault();
      const socket = socketio("localhost:8080");
      socket.emit("addClub", {
        name: this.name,
        username: this.username,
        password: this.password
      });
      this.name = ''
      this.username = ''
      this.password = ''
      console.log(this.form);
      this.$router.push('/login')
    },
  },
};
</script>

<style>
.wrapper{
  margin: 0 auto; /* to make the div center align to the browser */
  justify-content: center;
  display: flex;
  margin-top: 2em;
}

.btn{
  margin-top: 0.5em;
  text-align: center;
  float: right;
  justify-content: center;
}
</style>