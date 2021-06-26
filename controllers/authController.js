import User from "../models/user";

import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import APIFeatures from "../utils/apiFeatures";

//* Register user => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) res.status(400).json({
        success: false,
        message: "This email has already been taken choose another one"
    })

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "PUBLIC_ID",
            url: "URL"
        }
    })

    res.status(201).json({
        success: true,
        message: "Account registered successfully",
        user
    })

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
