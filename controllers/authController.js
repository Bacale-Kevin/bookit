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

//* Current user profile => /api/me
const currentUserProfile = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(201).json({
    success: true,
    user,
  });
});

//* Update user profile => /api/me/update
const updateProfile = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;

    if (req.body.password) user.password = req.body.password;
  }

  //update avatar
  if (req.body.avatar !== "") {
    const image_id = user.avatar.public_id;

    //* Delete user previous image/avatar
    await cloudinary.v2.uploader.destroy(image_id);
    //* Saving new image/avatar
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "bookit/avatars",
      width: "150",
      crop: "scale",
    });

    user.avatar = {
      public_id: result.public_id,
      url: result.url,
    };
  }
  //* Saving the user
  await user.save();

  res.status(201).json({
    success: true,
  });
});

export { registerUser, currentUserProfile, updateProfile };
