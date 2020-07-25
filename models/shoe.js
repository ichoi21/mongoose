const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  brand: {
    type: String,
    required: "Must enter a shoe brand",
  },

  price: {
    type: String,
    required: "Must enter a price",
  },

  colorWay: {
    type: [String],
    required: true,
    default: [],
  },
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
