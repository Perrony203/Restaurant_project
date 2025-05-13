const {Client} = require("../../models");
const bcrypt = require('bcrypt');

const clientController = {
    createClient: async (req, res) => {
        try {
          const { clientId, idType, name, phoneNumber, password } = req.body;
          const hashConstraseña = await bcrypt.hash(password,10);  
          
          const newClient = await Client.create({
            clientId,
            idType,
            name,
            phoneNumber,
            active:true,
            password:hashConstraseña
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

    getClientByName :async (req, res) => {
        
        try {
            const client = await Client.findAll({ where: { name: req.params.name } });
            if (!client) return res.status(404).json({ message: "Client not found" });
            res.json(client);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },


    updateClient :async (req, res) => {
        try {
            const { id } = req.params; 

            const { clientId, idType, name, phoneNumber } = req.body;
            const client = await Client.findByPk(req.params.id);
            
            if (!client) return res.status(404).json({ message: "Client not found" });
        
            if(clientId)client.clientId = clientId || client.clientId;
            if(idType)client.idType = idType || client.idType;
            if(name)client.name = name || client.name;
            if(phoneNumber)client.phoneNumber = phoneNumber || client.phoneNumber;
            
            await client.save();
            res.status(200).json({ message: "Client updated" });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteClient :async (req, res) => {
        try {            
            const client = await Client.findByPk(req.params.id);
            
            if (!client) return res.status(404).json({ message: "Client not found" });
        
            client.active = false
            
            await client.save();
            res.status(200).json(client);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = clientController;

