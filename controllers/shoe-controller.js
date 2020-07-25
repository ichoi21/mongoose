const Shoe = require("../models/shoe");

module.exports = {
  // addShoe: (req, res) => {
  // Shoe.create({ brand: "New Balance", price: "$5" });
  // Shoe.create({
  //   brand: req.body.brand,
  //   price: req.body.price,
  // })
  //   .then((newShoe) => res.send(newShoe))
  //   .catch((err) => res.send(err));
  // },
  addShoe: async (req, res) => {
    const newShoe = new Shoe({ brand: req.body.brand, price: req.body.price });
    // console.log(newShoe);

    try {
      await newShoe.save();
      res.send(newShoe);
    } catch (err) {
      res.send(err);
    }
  },

  getShoes: async (req, res) => {
    // Shoe.find()
    //   .then((allShoes) => res.send(allShoes))
    //   .catch((err) => res.send(err));

    try {
      const allShoes = await Shoe.find();
      // console.log(allShoes[0]);
      // allShoes[0].colorWay.push("blue");
      res.send(allShoes);
    } catch (err) {
      res.send(err);
    }
  },

  findShoe: async (req, res) => {
    // Shoe.findOne(req.params.id)
    //   .then((foundShoe) => res.send(foundShoe))
    //   .catch((err) => res.send(err));

    try {
      // const foundShoe = await Shoe.find({_id: req.params.id, brand: nike});
      const foundShoe = await Shoe.findById(req.params.id);
      //foundShoe.brand = "Adidas";
      res.send(foundShoe);
    } catch (err) {
      res.send(err);
    }
  },
};
