const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/Entities/employeeController");

router.get("/", authService, Controller.getAllEmployees);
router.get("/type/:documentType", authService, Controller.getEmployeeByDocumentType);
router.get("/:id", authService, Controller.getEmployeeById);
router.put("/:id", authService, Controller.updateEmployee);
router.post("/", authService, Controller.createEmployee);
router.delete("/:id", authService, Controller.deleteEmployee);

module.exports = router;