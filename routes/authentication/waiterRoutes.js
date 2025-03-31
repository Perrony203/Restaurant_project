const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authentication/waiterController");

router.post("/login", authController.login);

module.exports = router;
