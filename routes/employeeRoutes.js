const express = require("express");
const router = express.Router();
const Controller = require("../controllers/employeeController");

router.get("/", Controller.getAllEmployees);
router.get("/type/:documentType", Controller.getEmployeeByDocumentType);
router.put("/", Controller.updateEmployee);
router.post("/", Controller.createEmployee);
router.delete("/", Controller.deleteEmployee);

module.exports = router;