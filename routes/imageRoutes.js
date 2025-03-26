const express = require("express");
const router = express.Router();
const Controller = require("../controllers/imageController");

router.get("/", Controller.getImage);
router.post("/", Controller.createImage);
router.delete("/", Controller.deleteImage);

module.exports = router;