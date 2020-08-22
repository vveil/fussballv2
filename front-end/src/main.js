import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vselect-component'

Vue.config.productionTip = false

Vue.use(vSelect)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// var buttonMethods = new Vue({
//   el: #absendenButton,

// })

// Vue.component('formular', {
//   props: ['title'],
//   template: `<div>
//   <div class="event">
//     <h2 class="eventHeading">Event-Name</h2>
//     <br />
//   </div>
//   <div class="formular">
//     <form class="tForm">
//       <div class="tformWrapper">
//         <label for="fname">Vorname</label>
//         <br />
//         <input type="text" id="fname" name="fname" />
//         <br />
//         <br />
//         <label for="lname">Nachname</label>
//         <br />
//         <input type="text" id="lname" name="lname" />
//         <br />
//         <br />
//         <label for="phone">Telefon</label>
//         <br />
//         <input type="text" id="phone" name="phone" />
//         <br />
//         <br />
//         <label for="address">Straße, Hausnummer</label>
//         <br />
//         <input type="text" id="address" name="address" />
//         <br />
//         <br />
//         <label for="plz">PLZ, Ort</label>
//         <br />
//         <input type="number" id="plz" name="plz" />
//         <input type="text" id="city" name="city" />
//         <br />
//         <br />
//         <div class="addButton">
//           <input type="button" id="addPerson" value="Weitere Person hinzufügen" />
//         </div>
//         <br />
//         <div class="checkbox">
//           <input type="checkbox" id="dserklärung" />
//          <label for="dserklärung"> Ist ok</label>
//         </div> 
//         <br />
//         <div class="absendenButton">
//           <input type="button" id="absenden" v-on:click="absenden" value="Absenden" />
//         </div>
//       </div>
//     </form>
//   </div>
// </div>`
// ,
// methods: {
//   absenden: function(){
//   }
// }
// }
// )