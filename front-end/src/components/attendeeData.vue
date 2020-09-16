<template>
  <div>
    <table class="table">
      <thead>
        <th scope="col">Vorname</th>
        <th scope="col">Nachname</th>
        <th scope="col">Telefonnummer</th>
        <th scope="col">Straße + Hausnummer</th>
        <th scope="col">PLZ</th>
        <th scope="col">Ort</th>
      </thead>
      <tbody>
        <tr v-for="attendee in attendees" v-bind:key="attendee._id">
          <th scope="row">{{ attendee.firstname }}</th>
          <td>{{ attendee.name }}</td>
          <td>{{ attendee.mobile }}</td>
          <td>{{ attendee.street }}</td>
          <td>{{ attendee.pc }}</td>
          <td>{{ attendee.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "attendeeData",
  data() {
    return {
      attendees: [],
    };
  },
  sockets: {
    sendAttendees(attendees) {
      attendees.forEach((attendee) => {
        this.attendees.push(attendee);
      });
    },
  },

  created() {
    this.$socket.emit("loadAttendees", {});
  },
};
</script>

<style>
</style>