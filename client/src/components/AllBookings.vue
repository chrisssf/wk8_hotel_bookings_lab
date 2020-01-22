<template lang="html">
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      <tr>
        <booking v-for="booking in bookings" :booking="booking"/>
      </tr>
  </table>
  </div>
</template>

<script>
import { eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'
import Booking from './Booking.vue'

export default {
  name: "all-bookings",
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted(){
    this.fetchBookings()

    eventBus.$on('booking-added', (booking) => this.bookings.push(booking))

    eventBus.$on('delete-booking', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },
  methods: {
    fetchBookings(){
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
