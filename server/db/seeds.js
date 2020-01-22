use hotel
db.dropDatabase()

db.bookings.insertMany([
  {
    name: "Daenerys Targaryen",
    email: "ilovedragons@hotmail.com",
    status: "Checked in"
  },
  {
    name: "Robb Stark",
    email: "wolfman@gmail.com",
    status: "Checked in"
  },
  {
    name: "Cersei Lannister",
    email: "queen99@yahoo.com",
    status: "Checked in"
  },
  {
    name: "Tyrion Lannister",
    email: "thepenismightier@gmail.com",
    status: "Checked out"
  }
])
