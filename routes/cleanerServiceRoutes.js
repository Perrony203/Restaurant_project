const express = require("express");
const router = express.Router();
const Controller = require("../controllers/cleanerServiceController");

router.get("/", Controller.getAll);
router.get("/service/:serviceId", Controller.getByService);
router.get("/cleaner/:cleanerId", Controller.getByCleaner);
router.post("/", Controller.create);
router.delete("/", Controller.delete);

module.exports = router;