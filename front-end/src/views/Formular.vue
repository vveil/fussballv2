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
        <input type="checkbox" v-model='dserklaerung' id='dserklaerung' required />
      </div>
      <div class="check2">
        <label for="dserklaerung">
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
export default {
  name: "Formular",
  data() {
    return {
      form: {
        name: '',
        firstname: '',
        mobile: null,
        street: '',
        city: '',
        pc: null,
      },
      dserklaerung: false
    };
  },
  methods: {
    addAttendee(e) {
      e.preventDefault();
      this.$socket.emit("addAttendee", this.form);
      this.form.firstname = ''
      this.form.name = ''
      this.form.mobile = null
      this.form.street = ''
      this.form.pc = null
      this.form.city = ''
      this.dserklaerung = !this.dserklaerung
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: grid;
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

input,
textarea {
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
</style>