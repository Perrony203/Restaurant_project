const {Status} = require("../models");

const statusController = {
    getStatuses :async (req, res) => {
        try {
            const statuses = await Status.findAll();
            res.json(statuses);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createStatus :async (req, res) => {
        try {
            const { description } = req.body;

            const newStatus = await Status.create({
                description
            });

            res.status(201).json(newStatus);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },


    deleteStatus :async (req, res) => {
        try {
            await Status.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Status deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = statusController;