const {Evaluation} = require("../models");

const evaluationController = {
    getEvaluations :async (req, res) => {
        try {
            const evaluations = await Evaluation.findAll();
            res.json(evaluations);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createEvaluation :async (req, res) => {
        try {
            const { clientId, food, service, cleaning } = req.body;

            const evaluation = await Evaluation.create({
                clientId,
                food,
                service,
                cleaning
            });

            res.status(201).json(evaluation);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = evaluationController;