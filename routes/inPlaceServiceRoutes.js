const express = require("express");
const router = express.Router();
const Controller = require("../controllers/inPlaceServiceController");

router.get("/", Controller.getInPlaceServices);
router.post("/", Controller.createServiceInPlace);
router.delete("/", Controller.deleteInPlaceService);

module.exports = router;