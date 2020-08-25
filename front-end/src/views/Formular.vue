<template>
  <div class="container">
    <div class="event">
      <h1>Heimspiel gegen <span>SV Stedten</span></h1>
      <p>bei der SG BW 1921 Brachstedt</p>
    </div>
  <div class="wrapper">  
    <div class="löschung">
        <p>Alle angegebenen Daten werden nach 4 Wochen gelöscht.</p>
    </div>
   <div class="contact">
      <div class="label">Vorname *</div>
            <input type="text" v-model="vorname" required />
      <div class="label">Nachname *</div>
            <input type="text" v-model="nachname" required />
      <div class="label">Telefon *</div>
            <input type="number" v-model="telefon" id="telefon" required />
      <div class="label">Straße, Hausnummer *</div>
            <input type="text" v-model="adresse" required />
      <div class="nested">
        <div class="label">PLZ *</div>
        <div class="label">Ort *</div>
            <input id="plz" type="number" v-model="plz" required />
            <input type="text" v-model="ort" required />
      </div>  
   </div>   
   <div class="label2">
            *Pflichtfelder
   </div>
  </div> 
   <div class="checkbox">
      <div class="check1">
            <input type="checkbox" id="dserklärung" required />
      </div>
      <div class="check2">
            <label for="dserklärung">
              Hiermit willige ich die Verarbeitung der von mir angegebenen personenbezogenen
              Daten ein und erkläre mich mit den Datenschutzregelungen in der
              <a href="https://eventvisitor.de/#/datenschutz">Datenschutzerklärung</a> einverstanden.
            </label>
      </div>
   </div>
   <button class="btn" id="btn" name="absenden" type="submit">
      <div class="popup">
        Absenden
          <span class="popuptext" id="myPopup">Formular erfolreich abgesendet</span>
      </div>
    </button>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>

  * {
    box-sizing: border-box;
  }

  /* body {
    background: #cacbd5;
    color: #666f88;
    line-height: 1.6;
    padding: 1em;
  } */

  #plz{
    margin-right: 1em;
  }

  .container {
    display:grid;
    grid-auto-rows: minmax(50px, auto);
    justify-items: stretch;
    align-items: stretch;
    background: #cacbd5;
    color: #666f88;
    line-height: 1.6;
    padding: 1em;
  }

  .event {
    display: grid;
    text-align: center;
    color: #666f88;
  }

  .event p {
    margin-top: -1em;
    margin-bottom: 2em;
  }

  .event span {
    color: #fff;
  }

  .wrapper {
    display: grid;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(72,94,116,0.6);
  }

  .wrapper > * {
    padding: 1em;
  }

  .löschung {
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
    /* padding-left: 0.5em; */
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
    /* margin-left: 0.5em; */
    
  }

  .label2 {
    font-size: 0.95em;
    color: #666f88;
    text-align: right;
    margin-right: 0.5em;
    margin-top: -1em;
  }

  label {
    float: left;
    margin-right: 1.5em;
    /* margin-left: 1em; */
    margin-bottom: 1em;
    font-size: 0.78em;
    color: #3d4251;
  }

  .checkbox {
    display: grid;
    grid-template-columns: 0.5fr 10fr;
    text-align: justify;
    margin-left: 0.5em;
    margin-top: 2em;
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
    margin: 1em 0;
  }

  /* .btn:hover, .btn:focus {
    background: #666f88;
    outline: 0;
    transition: background-color 1s ease-out;
  } */

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