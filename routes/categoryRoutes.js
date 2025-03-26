const express = require("express");
const router = express.Router();
const Controller = require("../controllers/categoryController");

router.get("/", Controller.getCategory);
router.post("/", Controller.createCategory);
router.delete("/", Controller.deleteCategory);

module.exports = router;