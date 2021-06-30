import User from "../models/user";

import cloudinary from "cloudinary";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import APIFeatures from "../utils/apiFeatures";

//*Setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//* Register user => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "bookit/avatars",
    width: "150",
    crop: "scale",
  });

  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist)
    res.status(400).json({
      success: false,
      message: "This email has already been taken choose another one",
    });

  await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.url,
    },
  });

  res.status(201).json({
    success: true,
    message: "Account registered successfully",
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

export { registerUser, createRoom, getSingleRoom, updateRoom, deleteRoom };
