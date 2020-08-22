<template>
  <div class="wrapper">
    <div class="event">
      <h1>Sommerfest 2020</h1>
      <p>bei der SG BW 1921 Brachstedt</p>
      <br />
      <br />
      <div class="löschung">
        <p>Alle angegebenen Daten werden nach 4 Wochen gelöscht.</p>
      </div>
    </div>
    <div class="form">
      <form @input="checkInput" @submit="addPerson">
        <div class="top-form">
          <div class="inner-form">
            <div class="label">Vorname *</div>
            <input type="text" v-model="vorname" required />
          </div>
          <br />
          <div class="inner-form">
            <div class="label">Nachname *</div>
            <input type="text" v-model="nachname" required />
          </div>
          <br />
          <div class="inner-form">
            <div class="label">Telefon *</div>
            <input type="number" v-model="telefon" id="telefon" required />
          </div>
          <br />
          <div class="inner-form">
            <div class="label">Straße, Hausnummer *</div>
            <input type="text" v-model="adresse" required />
          </div>
        </div>
        <div class="mid-form">
          <div class="inner-mid">
            <div class="label">PLZ *</div>
            <input type="number" v-model="plz" required />
          </div>
          <div class="inner-mid2">
            <div class="label">Ort *</div>
            <input type="text" v-model="ort" required />
            <br />
          </div>
        </div>
        <br />
        <div class="bot-form">
          <div class="label">
            *Pflichtfelder
            <br />
            <br />
            <div class="checkbox">
              <div class="check1">
                <input type="checkbox" id="dserklärung" required />
              </div>
              <div class="check2">
                <label for="dserklärung">
                  Hiermit willige ich die Verarbeitung der von mir angege- benen personenbezogenen Daten ein und erkläre mich mit den Datenschutzregelungen in der
                  <a
                    href="https://eventvisitor.de/#/datenschutz"
                  >Datenschutzerklärung</a> einverstanden.
                </label>
              </div>
            </div>
          </div>
          <button class="btn2" id="btn2" name="absenden" type="submit">
            <div class="popup">
              Absenden
              <span class="popuptext" id="myPopup">Formular erfolreich abgesendet</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Formular",
  data() {
    return {
      vorname: "",
      nachname: "",
      telefon: null,
      adresse: "",
      plz: null,
      ort: "",
    };
  },
  methods: {
    addPerson(e) {
      e.preventDefault();
      const newPerson = {
        vorname: this.vorname,
        nachname: this.nachname,
        telefon: this.telefon,
        adresse: this.adresse,
        plz: this.plz,
        ort: this.ort,
      };

      console.log(this.vorname);

      axios
        .post("ajaxfile.php", {
          request: 2,
          vorname: newPerson.vorname,
          nachname: newPerson.nachname,
          telefon: newPerson.telefon,
          adresse: newPerson.adresse,
          plz: newPerson.plz,
          ort: newPerson.ort,
          eID: 3,
        })
        .then((res) => {
          console.log(res.data);
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");
          setTimeout(() => location.reload(), 2000);
        })
        .catch((err) => {
          console.debug(err);
          setTimeout(() => location.reload(), 2000);
        });
    },
  },
};
</script>

<style scoped>
* {
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
  /* display: flex;
    justify-content: center; */
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

/* form {
    text-align: center;
} */

.top-form,
.mid-form {
  width: 92%;
  min-height: 65px;
  margin: 10px 0;
  /* overflow: hidden; */
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

/* #btn {
  border: 0;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 0;
  color: teal;
  display: block;
  justify-content: center;
  width: 100%;
  padding: 0.6rem 2rem;
  background: transparent;
  border: 1px solid;
  position: static;
} */

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
/* .form input [type="text"],
.form input [type="number"] {
    padding: 15px 5px;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 2px;
    outline: none;
    transition: all 0.2s ease;
}

.form input:focus {
    border-color: teal;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.0125),
                0 0 8px rgba(76, 161, 175, 0.5);
} */

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

/* .mid-form .inner-form:last-child {
    margin-right: 0;
} */

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
  /* overflow: hidden; */
}

/* .checkbox label {
  vertical-align: baseline;
  top: -10px;
  display: inline-block;
  padding-right: 10px;
  padding-left: 22px;
  text-indent: -22px;
}

.checkboxes input {
  vertical-align: middle;
}
.checkboxes label span {
  vertical-align: middle;
} */

/* .btn {
  background: #ffffff;
  width: 100%;
  border: solid 1px;
  text-align: center;
  color: teal;
  display: block;s
} */

input[type="checkbox"] {
  float: left;
  width: 15px;
  height: 15px;
  text-align: left;
}

.check2 {
  float: right;
  width: 90%;
  text-align: justify;
  font-size: 0.95em;
}

.löschung {
  font-size: 0.8em;
}

.btn2 {
  background: teal;
  width: 100%;
  text-align: center;
  color: #ffffff;
}

/* Popup container */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  width: 260px;
  background-color: #555;
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

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
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