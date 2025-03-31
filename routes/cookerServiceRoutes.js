const express = require("express");
const router = express.Router();
const Controller = require("../controllers/cookerServiceController");

router.get("/", Controller.getAll);
router.get("/service", Controller.getByService);
router.get("/cooker", Controller.getByCooker);
router.post("/", Controller.create);
router.delete("/", Controller.delete);

module.exports = router;