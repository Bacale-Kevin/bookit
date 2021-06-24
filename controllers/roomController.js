import Room from "../models/room";

import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import APIFeatures from "../utils/apiFeatures";

//* Get all rooms => /api/rooms
const getAllRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments(); //return the total number of rooms

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();
  console.log(req.query)
  let rooms = await apiFeatures.mongooseQuery; //equivalent to await Room.find()

  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.mongooseQuery;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

//* Create new room => /api/rooms
const createRoom = catchAsyncErrors(async (req, res) => {
  const createdRoom = await Room.create(req.body); //this is possible beacuse all the fields in the model are required or have a default value
  res.status(201).json({
    success: true,
    createdRoom,
  });
});

//* Get sindle room => /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room with this ID not found", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

//* Update a room => /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room with this ID not found", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

//* Get single room => /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room with this ID not found", 404));
  }
  await room.remove();
  res.status(200).json({
    success: true,
    message: "Room deleted",
  });
});

export { getAllRooms, createRoom, getSingleRoom, updateRoom, deleteRoom };
