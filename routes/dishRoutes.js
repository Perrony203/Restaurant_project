const express = require("express");
const router = express.Router();
const Controller = require("../controllers/dishController");

router.get("/", Controller.getDishById);
router.put("/", Controller.updateDish);
router.post("/", Controller.createDish);
router.delete("/", Controller.deleteDish);

module.exports = router;