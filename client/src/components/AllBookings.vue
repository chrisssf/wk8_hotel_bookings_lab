<template lang="html">
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
        <booking v-for="booking in bookings" :booking="booking"/>
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

    eventBus.$on('booking-added', (booking) => this.bookings.unshift(booking))

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

table {
  max-width: 550px;
  background-color: #133C55;
  border: 1px solid #F18F01;
  margin: 5px auto;
}

th {
    color: #F18F01;
}

tr {
  padding: 25px;
}

</style>
