const Command = require("../models/command");

exports.getCommands = async (req, res) => {
    try {
        const commands = await Command.findAll();
        res.json(commands);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createCommand = async (req, res) => {
    try {
        const { serviceId, dishId, datetimeOpen, datetimeClose } = req.body;

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
};

exports.updateCommand = async (req, res) => {
    try {
        const { id } = req.params;
        await Command.update(req.body, { where: { id } });
        res.status(200).json({ message: "Command updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCommand = async (req, res) => {
    try {
        await Command.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Command deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};