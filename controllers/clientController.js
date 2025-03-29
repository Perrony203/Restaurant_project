const Client = require("../models/client");

const clientController = {
    createClient: async (req, res) => {
        try {
          const { clientId, idType, name, phoneNumber } = req.body;
      
          const newClient = await Client.create({
            clientId,
            idType,
            name,
            phoneNumber,
          });
      
          return res.status(201).json({
            message: "Cliente creado exitosamente",
            client: newClient,
          });
        } catch (error) {
          console.error("Error al crear el cliente:", error);
          return res.status(500).json({
            message: "Error interno del servidor al crear el cliente",
            error: error.message,
          });
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