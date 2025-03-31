const {Command} = require("../models");

const commandController = {
    getCommands :async (req, res) => {
        try {
            const commands = await Command.findAll();
            res.json(commands);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createCommand :async (req, res) => {
        try {
            const { serviceId, dishId, datetimeOpen, datetimeClose } = req.body;
            if (!serviceId || !dishId) {
                return res.status(400).json({ error: "Service ID and Dish ID are required" });
            }
            const command = await Command.create({
                serviceId,
                dishId,
                datetimeOpen: datetimeOpen || new Date(),
                datetimeClose
            });

            res.status(201).json(command);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    
    updateCommand :async (req, res) => {
        try {
            const { serviceId, dishId, datetimeOpen, datetimeClose } = req.body;
            const command = await Command.findByPk(req.params.id);
            if (!command) {
                return res.status(404).json({ error: "Command not found" });
            }
            if(serviceId)command.serviceId = serviceId || command.serviceId;
            if(dishId)command.dishId = dishId || command.dishId;
            if(datetimeOpen)command.datetimeOpen = datetimeOpen || command.datetimeOpen;
            if(datetimeClose)command.datetimeClose = datetimeClose || command.datetimeClose;

            await command.save();
            res.json(command);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteCommand :async (req, res) => {
        try {
            await Command.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Command deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = commandController; 