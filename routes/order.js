const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    emailorusername: String,
    firstname: String,
    lastname: String,
    address: String,
    companyname: String,
    country: String,
    state: String,
    city: String,
    pincode: String,
    phone: String
  });
  
  module.exports = mongoose.model("order", orderSchema);