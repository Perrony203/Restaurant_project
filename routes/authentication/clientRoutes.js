const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authentication/clientController");

router.post("/login", authController.login);

module.exports = router;
