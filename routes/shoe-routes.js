const router = require("express").Router();
const shoeController = require("../controllers/shoe-controller");

// this will create a new brand
router.post("/shoe", shoeController.addShoe);

// this will get all the shoes
router.get("/shoe", shoeController.getShoes);

// this will find a specific shoe with id object
router.get("/shoe/:id", shoeController.findShoe);

module.exports = router;
