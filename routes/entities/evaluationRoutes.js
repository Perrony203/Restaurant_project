const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/evaluationController");

router.get("/", Controller.getEvaluations);
router.post("/", authService, Controller.createEvaluation);

module.exports = router;