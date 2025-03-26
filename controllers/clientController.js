const Client = require("../models/client");

const clientController = {
    addClient :async (req, res) => {
        try {
            const client = await Client.create(req.body);
            res.status(201).json(client);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getClients :async (req, res) => {
        try {
            const clients = await Client.findAll();
            res.json(clients);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getClientById :async (req, res) => {
        try {
            const client = await Client.findByPk(req.params.id);
            if (!client) return res.status(404).json({ message: "Client not found" });
            res.json(client);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateClient :async (req, res) => {
        try {
            const { id } = req.params;
            await Client.update(req.body, { where: { id } });
            res.status(200).json({ message: "Client updated" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteClient :async (req, res) => {
        try {
            await Client.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Client deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = clientController;