const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

("");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const lastSeen = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const lastSeen = new Date();

  User.findByIdAndUpdate(userId, { lastSeen }, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to update last seen" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "Last seen updated successfully" });
  });
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password, userType, userState, pic } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    userType,
    userState,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.pic = req.body.pic || user.pic;
//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       pic: updatedUser.pic,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id),
//     });
//   } else {
//     res.status(404);
//     throw new Error("User Not Found");
//   }
// });

const userProfile = asyncHandler(async (req, res) => {
  const { user_name } = req.body;

  const user = await User.findOne({ user_name });

  if (user) {
    if(user.userType==="student"){
      res.json({
        _id: user._id,
        name: user.first_name +" " + user.last_name,
        class: user.userClass,
        address:user.userAddress,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    }
    else{
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    }
  } else {
    res.status(401);
    throw new Error("Invalid Username");
  }
});

module.exports = { authUser, registerUser, lastSeen, userProfile };
