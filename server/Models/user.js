const mongoose = require("mongoose");
require("mongoose-type-email");
mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;