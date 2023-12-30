import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//  @desc auth user and get token
//  @route POST /api/users/login
//  @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

//  @desc register user
//  @route Post/api/users/login
//  @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//  @desc Logout user/ clear cookie
//  @route POST a/api/users/logout
//  @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//  @desc Logout userprofile
//  @route GET a/api/users/profile
//  @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//  @desc update user profile
//  @route PUT /api/users/profile
//  @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//  @desc get users
//  @route GET /api/users
//  @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

//  @desc get users by ID
//  @route GET /api/users
//  @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

//  @desc Delete users
//  @route DELETE /api/users/:id
//  @access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete user");
});

//  @desc update users
//  @route PUT /api/users/:id
//  @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserByID,
  updateUser,
};
