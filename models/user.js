const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  number: Number,
  name: String,
  email: String,
  phone: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);