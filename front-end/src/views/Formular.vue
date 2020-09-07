<template>
  <div class="container">
    <div class="event">
      <h2>
        Heimspiel gegen
        <span>SV Stedten</span>
      </h2>
      <p>bei der SG BW 1921 Brachstedt</p>
    </div>
    <div class="wrapper">
      <div class="loeschung">
        <p>Alle angegebenen Daten werden nach 4 Wochen gelöscht.</p>
      </div>
      <div class="contact">
        <div class="label">Vorname *</div>
        <input type="text" v-model="form.firstname" required />
        <div class="label">Nachname *</div>
        <input type="text" v-model="form.name" required />
        <div class="label">Telefon *</div>
        <input type="number" v-model="form.mobile" id="telefon" required />
        <div class="label">Straße, Hausnummer *</div>
        <input type="text" v-model="form.street" required />
        <!-- <div class="nested"> -->
        <div class="label">PLZ *</div>
        <input id="plz" type="number" v-model="form.pc" required />
        <div class="label">Ort *</div>
        <input id="ort" type="text" v-model="form.city" required />
        <!-- </div>   -->
      </div>
      <div class="label2">*Pflichtfelder</div>
    </div>
    <div class="checkbox">
      <div class="check1">
        <input type="checkbox" id="dserklärung" required />
      </div>
      <div class="check2">
        <label for="dserklärung">
          Hiermit willige ich die Verarbeitung der von mir angegebenen personenbezogenen
          Daten ein und erkläre mich mit den Datenschutzregelungen in der
          <a
            href="https://eventvisitor.de/#/datenschutz"
          >Datenschutzerklärung</a> einverstanden.
        </label>
      </div>
    </div>
    <button class="btn" id="btn" name="absenden" v-on:click="addAttendee">
      <div class="popup">
        Absenden
        <span class="popuptext" id="myPopup">Formular erfolreich abgesendet</span>
      </div>
    </button>
  </div>
</template>

<script>
import socketio from "socket.io-client";
const socket = socketio("localhost:8080");
export default {
  name: "Formular",
  data() {
    return {
      form: {
        name: "",
        firstname: "",
        mobile: null,
        street: "",
        city: "",
        pc: null,
        eID: 3,
      },
    };
  },
  methods: {
    addAttendee(e) {
      e.preventDefault();
      socket.emit("addedAttendee", this.form);
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  user-select: none;
}

.wrapper {
  background: #ffffff;
  width: 100%;
  max-width: 25em;
  margin: 3% auto 0;
  padding: 20px;
  box-sizing: border-box;
}

.event {
  text-align: center;
  height: min-content;
  color: teal;
}

.event h1 {
  letter-spacing: 1px;
}

.form {
  width: 100%;
  margin-top: 4%;
}

.top-form,
.mid-form {
  width: 92%;
  min-height: 65px;
  margin: 10px 0;
}

.bot-form {
  width: 100%;
  min-height: 65px;
  margin: 10px 0;
}

input {
  font-size: 1em;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 8px 13px;
}

button {
  font-size: 1em;
  width: 100%;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 8px 13px;
}

#btn2 {
  border: 0;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 0;
  background-color: teal;
  color: #ffffff;
  padding: 0.8rem 2rem;
  position: static;
  display: block;
}

.form .label {
  margin-bottom: 5px;
}

.top-form {
  float: left;
}

.mid-form .inner-mid {
  width: 32%;
  float: left;
  margin-right: 10%;
}

.mid-form .inner-mid2 {
  width: 55%;
  float: right;
}

.label {
  display: block;
  font-size: 0.85em;
  float: left;
  color: teal;
}

label {
  float: left;
  margin-left: 5%;
  font-size: 0.85em;
  color: #000000;
}

.bot-form .label {
  text-align: end;
  margin-top: 15px;
}

.bot-form .checkbox {
  text-align: left;
  margin-bottom: 80px;
} */

* {
  box-sizing: border-box;
}

/* body {
    background: #cacbd5;
    color: #666f88;
    line-height: 1.6;
    padding: 1em;
  } */

.container {
  display: grid;
  /* grid-auto-rows: minmax(50px, auto); */
  justify-items: stretch;
  align-items: left;
  background: #cacbd5;
  color: #666f88;
  width: 100vw;
  min-height: 100vh;
  float: left;
  margin-left: -0.5em;
}

.event {
  text-align: center;
  color: #666f88;
}

.event p {
  margin-top: -1em;
  margin-bottom: 1em;
}

.event span {
  color: #fff;
}

.wrapper {
  display: grid;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.6);
  /* margin: 1em; */
  /* width: 22.9em; */
  margin: 0 1em;
}

.wrapper > * {
  padding: 1em;
}

.loeschung {
  background: #666f88;
  color: #fff;
  font-size: 0.8em;
  text-align: center;
  margin: 0 0 -0.95em 0;
}

/* .wrapper > div {
    background: #eee;
    padding: 0em 1em;
  } */

/* .wrapper > div:nth-child(odd){
    background: #ddd;
  } */

input {
  font-size: 1em;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 0.6em 0;
  padding-left: 0.3em;
}

.contact {
  display: grid;
}

.contact .label {
  margin-top: 0.95em;
}

.nested {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

/* #plz {
    margin-right: 1em;
  } */

.label {
  font-size: 0.95em;
  color: #666f88;
  text-align: left;
  margin-left: 0.3em;
}

.label2 {
  font-size: 0.95em;
  color: #666f88;
  text-align: right;
  margin-right: 0.3em;
  margin-top: -1em;
}

label {
  float: left;
  margin-right: 2.5em;
  margin-left: 1em;
  margin-bottom: 1em;
  font-size: 0.75em;
  color: #3d4251;
}

.checkbox {
  display: grid;
  grid-template-columns: 0.5fr 10fr;
  text-align: justify;
  margin-left: 1.5em;
  margin-top: 1.5em;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border: 0;
}

button {
  font-size: 1em;
  border-radius: 4px;
  -webkit-border-radius: 4px;
}

#btn {
  border: 0;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: #d35e35;
  color: #fff;
  padding: 0.85em 2em;
  margin: 1em;
}

.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.popup .popuptext {
  visibility: hidden;
  width: 260px;
  background-color: #666f88;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px 0;
  position: absolute;
  z-index: 1;
  bottom: 200%;
  left: 50%;
  margin-left: -130px;
}

.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #666f88 transparent transparent transparent;
}

.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 460px) {
    .wrapper {
      margin: 25px auto 0;
    }
    .mid-form .inner-form {
      width: 100%;
      margin: 5px 0;
    }
  } */

input,
textarea {
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
</style>