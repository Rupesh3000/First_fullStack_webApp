const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

module.exports = mongoose.model("product", productSchema);
