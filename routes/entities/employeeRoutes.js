const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/employeeController");

router.get("/", authService, Controller.getAllEmployees);
router.get("/type/:documentType", authService, Controller.getEmployeeByDocumentType);
router.put("/", authService, Controller.updateEmployee);
router.post("/", authService, Controller.createEmployee);
router.delete("/", authService, Controller.deleteEmployee);

module.exports = router;