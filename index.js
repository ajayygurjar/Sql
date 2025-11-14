const express = require("express");
const app = express();
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ajay@2529",
  database: "testDB",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Connection has been created`);

  const createUsersTable = `create table if not exists Users(
    id int AUTO_INCREMENT primary key,
    name varchar(25),
    email varchar(30)
    )`;

  const createBusesTable = `create table if not exists Buses(
    id int AUTO_INCREMENT primary key,
    busNumber varchar(25),
    totalSeats int,
    availableSeats int
    )`;

  const createBookingsTable = `create table if not exists Bookings(
    id int AUTO_INCREMENT primary key,
    seatNumber int
    )`;

  const createPaymentsTable = `create table if not exists Payments(
    id int AUTO_INCREMENT primary key,
    amountPaid decimal(10,2), paymentStatus varchar(50)
    )`;

  connection.execute(createUsersTable, (err) => {
        if (err) console.log("Users table error:", err);
        else console.log("Users table created");
    });

    connection.execute(createBusesTable, (err) => {
        if (err) console.log("Buses table error:", err);
        else console.log("Buses table created");
    });

    connection.execute(createBookingsTable, (err) => {
        if (err) console.log("Bookings table error:", err);
        else console.log("Bookings table created");
    });

    connection.execute(createPaymentsTable, (err) => {
        if (err) console.log("Payments table error:", err);
        else console.log("Payments table created");
    });
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, (err) => {
  console.log("Server is running");
});
