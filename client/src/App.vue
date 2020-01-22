<template>
  <div id="app">
    <booking-form />
    <all-bookings />
  </div>
</template>

<script>
import AllBookings from './components/AllBookings.vue'
import BookingForm from './components/BookingForm.vue'

export default {
  name: 'app',
  components: {
    'all-bookings': AllBookings,
    'booking-form': BookingForm

  }
}
</script>

<style>
body {
  background-color: #133C55;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
