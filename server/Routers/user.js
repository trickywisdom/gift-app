const express = require("express");
const router = express.Router();
const {
  createNewUser,
  getAllUsers,
  getAllUsersNum,
  deleteUsers,
  deleteOne,
} = require("../Controllers/user");

// create User
router.post("/create", createNewUser);
// Get all users
router.get("/all", getAllUsers);

// Get the number of users (count all)
router.get("/allnum", getAllUsersNum);

// Delete One User after returning one random user
router.delete("/pickonedelone", deleteOne);

// // Delete All Users
// router.delete("/deleteall", deleteAllUsers);

// Delete All Users after returning one random user
router.delete("/pickonedelall", deleteUsers);

module.exports = router;