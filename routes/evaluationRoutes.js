const express = require("express");
const router = express.Router();
const Controller = require("../controllers/evaluationController");

router.get("/", Controller.getEvaluations);
router.post("/", Controller.createEvaluation);

module.exports = router;