<template>
  <div class="container">
    <div class="event">
      <button class="btn" id="logout" name="logout" >Logout</button>
    </div>
  <div class="wrapper">
   <div class="eventNeu">
      <div class="label">Eventname</div>
            <input type="text" v-model="vorname" required />
      <div class="label" >Startdatum</div>
            <input type="date" v-model="nachname" required />
      <div class="label">Enddatum</div>
            <input type="date" v-model="telefon" id="telefon" required />
   </div>   
   <button class="btn" id="btn" name="absenden" type="submit">Event anlegen</button>
  </div>
   <button class="btn" id="btn2" name="alleEvents" >Alle Events anzeigen</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
    display: grid;
    grid-auto-rows: minmax(50px, auto);
    justify-items: stretch;
    align-items: stretch;
    background: #cacbd5;
    color: #666f88;
    width: 100vw;
    /* min-height: 100vh; */
    float: left;
    margin-left: -0.5em;
  }

.wrapper {
    display: grid;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(72,94,116,0.6);
    margin: 1em 1em;
  }

  .wrapper > * {
    padding: 1em;
  }

  input {
    font-size: 1em;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    padding: 0.6em 0;
    padding-left: 0.3em;
  }

  .eventNeu {
    display: grid;
  }

  .eventNeu .label {
    margin-top: 0.95em;
  }

  .label {
    font-size: 0.95em;
    color: #666f88;
    text-align: left;
    margin-left: 0.3em;
  }


  label {
    float: left;
    margin-right: 2.5em;
    margin-left: 1em;
    margin-bottom: 1em;
    font-size: 0.75em;
    color: #3d4251;
  }

  button {
    font-size: 1em;
    border-radius: 4px;
    -webkit-border-radius: 4px;
  }

  #logout {
    border: 0;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    background-color: #666f88;
    color: #fff;
    padding: 0.42em 1em;
    margin: 1.2em 1.2em 2em auto;
    float: right;
    font-size: 0.8em;
  }

  #btn {
    border: 0;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    background-color: #d35e35;
    color: #fff;
    padding: 0.85em 2em;
    margin: 2em 1em;
  }

  #btn2 {
    border: 0;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    background-color: #666f88;
    color: #fff;
    padding: 0.85em 2em;
    margin: 3em 1em 20em 1em;
  }

  input,
  textarea {
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

</style>



