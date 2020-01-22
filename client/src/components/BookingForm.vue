<template lang="html">
  <div>
    <h1>i am the booking form</h1>
    <form v-on:submit="addBooking">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />

      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />

      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="Checked in">Checked in</option>
        <option value="Checked out">Checked out</option>
      </select>
      <input type="submit" value="Book">
    </form>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js'
import { eventBus } from '../main.js'

export default {
  name: "booking-form",
  data() {
    return {
      name: "",
      email: "",
      status: ""
    }
  },
  methods: {
    addBooking(event) {
      event.preventDefault()

      const booking = {
        name: this.name,
        email: this.email,
        status: this.status
      }

      BookingService.postBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))
        .then(() => this.name = this.email = this.status = "")

    }
  }

}
</script>

<style lang="css" scoped>

div {
  color: white;
}

label, input {
  margin: 5px;
}

</style>
