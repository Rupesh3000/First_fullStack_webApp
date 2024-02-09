const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/ShoesShopDB");

const userSchema = mongoose.Schema({
  username: String,
  age: Number
  
})

module.exports = mongoose.model("users", userSchema);