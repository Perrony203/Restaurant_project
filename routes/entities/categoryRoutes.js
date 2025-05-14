const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/categoryController");

router.get("/:id", authService, Controller.getCategory);
router.post("/", authService, Controller.createCategory);
router.delete("/", authService, Controller.deleteCategory);

module.exports = router;