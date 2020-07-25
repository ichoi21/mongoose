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

shoeSchema.pre("save", (next) => {
  console.log("This is going to save");
  next();
});

shoeSchema.pre("remove", (next) => {
  console.log("This is going to remove");
  next();
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
