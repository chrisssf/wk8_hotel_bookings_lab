<template lang="html">
  <div>
      <td>{{ booking.name }}</td>
      <td>{{ booking.email }}</td>
      <td>{{ booking.status }}</td>
      <td> <button @click="handleDelete">Delete </button> </td>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete() {
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('delete-booking', this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
