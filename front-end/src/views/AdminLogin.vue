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


<style scoped>

.lgLabel {
    font-size: 0.95em;
    color: #666f88;
    text-align: left;
    margin-left: 0.3em;
}

.lgLabel {
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
