const {Evaluation} = require("../../models");


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
            const { clientName, food, service, cleaning } = req.body;

            const client = await Client.findOne({ where: { name: clientName } });
            if (!client) {
                return res.status(404).json({ error: "Client not found" });
            }

            const evaluation = await Evaluation.create({
                clientId: client.clientId,
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

