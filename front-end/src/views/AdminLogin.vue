<template>
  <div>
    <div :class="[ isFailed ? 'failedBox' : 'boxHidden' ]">War falsch</div>
    <div class="login">
      <form>
        <div class="formWrapper">
          <label class="lgLabel" name="username">Username:</label>
          <br />
          <input type="text" v-model="form.username" />
          <br />
          <label class="lgLabel" name="password">Passwort:</label>
          <br />
          <input type="password" v-model="form.password" />
          <br />
          <br />
          <button
            class="logInBtn"
            id="buttonWrapper"
            name="einloggen"
            v-on:click="tryLogin"
          >Einloggen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import socketio from "socket.io-client";
const socket = socketio("localhost:8080");

export default {
  name: "Login",
  created() {
    socket.on('isSuccessfull', (data) => {
      if (data.isSuccessfull) {
        console.log("frontend - login successfull")
        this.isFailed = false;
        // TODO in httpCookie speichern, weil XSS
        localStorage.clear()
        localStorage.setItem('token', data.token)
        this.$router.push('/adminView')
      } else {
        console.log("frontend - login failed");
        this.isFailed = true;
      }
    });
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      message: "",
      isFailed: false,
    };
  },
  methods: {
    tryLogin(e) {
      e.preventDefault();
      socket.emit("tryLogin", this.form);
    }
  }
};
</script>

<style scoped>

.failedBox {
  margin: 0 auto; /* to make the div center align to the browser */
  justify-content: center;
  display: flex;
  margin-top: 2em;
  margin-bottom: -2em;
  width: 15em;
  height: 2em;
  background: red;
}

.boxHidden {
  display: none;
}

.lgLabel {
  font-size: 0.95em;
  color: #666f88;
  text-align: left;
  margin-left: 0.3em;
  float: left;
  margin-top: 5%;
} 

.login {
  margin: 0 auto; /* to make the div center align to the browser */
  justify-content: center;
  display: flex;
}

.formWrapper {
  text-align: left;
  margin-top: 20%;
}

input {
  font-size: 1em;
  width: 90%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 8px 13px;
  float: right;
}

button {
  font-size: 0.8em;
  border: 0;
  justify-content: center;
  padding: 0.7em 1em;
  text-align: center;
  float: right;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: #d35e35;
  color: #fff;
  text-align: center;
  margin: 1.5em 0;
}
</style>
