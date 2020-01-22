use hotel
db.dropDatabase()

db.bookings.insertMany([
  {
    name: "Daenerys Targaryen",
    email: "ilovedragons@hotmail.com",
    status: "checked in"
  },
  {
    name: "Robb Stark",
    email: "wolfman@gmail.com",
    status: "checked in"
  },
  {
    name: "Cersei Lannister",
    email: "queen99@yahoo.com",
    status: "checked out"
  }
])
