const mongoose = require("mongoose");
const User = require("../Models/user");

const createNewUser = async (req, res) => {
    try {
        let newUser = await User.create(req.body);
        return res.send({ msg: "User saved successfully", newUser });
    } catch (error) {
        return res.send({ msg: "Could not create new user", error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allusers = await User.find();
        res.send(allusers);
    } catch (error) {
        res.send(error);
    }
}

const getAllUsersNum = async (req, res) => {
    
        try {
            const allusersnum = await User.countDocuments();
          return res.send({ msg: `There are ${allusersnum} users`, count: allusersnum }); 
        } catch (error) {
          return res.send({ msg: "Could not count the users", error });
        }
    
};

const deleteUsers = async (req, res) => {
    try {
        const allusers = await User.find();
        if (allusers.length !== 0) {
            const randomuser = allusers[Math.floor(Math.random() * allusers.length)];
            const randomusername = randomuser.name;
            await User.deleteMany();
            res.send(randomuser);
        } else {
            res.send(console.log("Not participants yet"));
        }
        
    } catch (error) {
        res.send(error);
    }
    
}

const deleteOne = async (req, res) => {
  const allusers = await User.find();
    const randomuser = allusers[Math.floor(Math.random() * allusers.length)];
    const randomusername = randomuser.name;
   await User.deleteOne({ name: randomusername });
  res.send(randomusername);
};

module.exports = {
  createNewUser,
  getAllUsers,
  getAllUsersNum,
  deleteUsers,
  deleteOne,
};