const express = require("express");
const router = express.Router();
const Controller = require("../controllers/chefController");

router.get("/", Controller.getChefs);
router.post("/", Controller.createChef);
router.delete("/", Controller.deleteChef);

module.exports = router;