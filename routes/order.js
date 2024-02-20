const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: String,
  firstname: String,
  lastname: String,
  address: String,
  companyname: String,
  country: String,
  state: String,
  city: String,
  pincode: String,
  phone: String,
  size: String,
  quantity: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("order", orderSchema);
