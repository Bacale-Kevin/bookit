const Room = require("../models/room");

const mongoose = require("mongoose");

const rooms = require("../data/rooms");

mongoose
  .connect("mongodb://localhost:27017/book-it", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => console.log("Connected to database."))
  .catch((err) => console.log(err.message));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All rooms added");

    process.exit(); //exit from process
  } catch (error) {
    console.log(error.message);
    process.exit(); //exit from process
  }
};

seedRooms();
