const router = require("express").Router();
const shoeController = require("../controllers/shoe-controller");

// this will create a new brand
router.post("/shoe", shoeController.addShoe);

// this will get all the shoes
router.get("/shoe", shoeController.getShoes);

// this will find a specific shoe with id object
router.get("/shoe/:id", shoeController.findShoe);

router.patch("/shoe", shoeController.updateBrand);

router.patch("/shoe/price", shoeController.updatePrice);

router.delete("/shoe/:id", shoeController.deleteShoe);

module.exports = router;
