const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authentication/employeeController");

router.post("/login", authController.login);

module.exports = router;
