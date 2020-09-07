<template>
<div class="wrapper">
  <form>
    <label>Vereinsname</label>
    <input type="text" v-model="form.name" required />
    <br />
    <br />
    <label>E-Mail</label>
    <input type="text" v-model="form.email" required />
    <br />
    <br />
    <label>Username</label>
    <input type="text" v-model="form.username" required />
    <br />
    <br />
    <label>Passwort</label>
    <input type="password" v-model="form.password" required />
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
        name: '',
        email: '',
        username: '',
        password: '',
      },
    };
  },
  methods: {
    addClub(e) {
      e.preventDefault();
      const socket = socketio("localhost:8080");
      socket.emit("addClub", this.form);
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