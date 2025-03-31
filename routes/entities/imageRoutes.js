const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/imageController");

router.get("/", Controller.getImage);
router.post("/", authService, Controller.createImage);
router.delete("/", authService, Controller.deleteImage);

module.exports = router;