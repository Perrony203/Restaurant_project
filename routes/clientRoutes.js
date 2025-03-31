const express = require("express");
const router = express.Router();
const Controller = require("../controllers/clientController");

router.get("/", Controller.getClients);
router.get("/:id", Controller.getClientById);
router.get("/:id", Controller.getClientByName);
router.put("/", Controller.updateClient);
router.post("/", Controller.createClient);
router.delete("/", Controller.deleteClient);

module.exports = router;