<template>
  <div>
    <div class="login">
      <form @submit="login">
        <div class="formWrapper">
          <label class="lgLabel" name="username">Username:</label>
          <br />
          <input for="username" />
          <br />
          <label class="lgLabel" name="password">Passwort:</label>
          <br />
          <input type="password" />
          <br />
          <br />
          <button class="logInBtn" id="buttonWrapper" name="einloggen" type="submit">Einloggen</button>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "adminlogin",
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(){
      axios.post('ajaxfile.php', {
        request: 5,
        username: this.username,
        password: this.password
      })
      .then(res => alert(res.data))
      .catch(err => console.debug(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  background-color: #ffffff;
}
.lgLabel {
  margin-top: 10px;
  margin-bottom: 5px;
  display: block;
  font-size: 0.85em;
  float: left;
  color: teal;
}

label {
  float: left;
  margin-top: 5%;
  font-size: 0.85em;
  color: teal;
  display: block;
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
#buttonWrapper {
  margin-top: 10%;
  text-align: end;
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
  border: 1px solid;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  text-align: center;
  float: right;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: teal;
  color: #ffffff;
  display: block;
  text-align: center;
  color: #ffffff;
}

</style>
