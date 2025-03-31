const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/clientController");

router.get("/", authService, Controller.getClients);
router.get("/:id", authService, Controller.getClientById);
router.put("/", authService, Controller.updateClient);
router.post("/", authService, Controller.createClient);
router.delete("/", authService, Controller.deleteClient);

module.exports = router;