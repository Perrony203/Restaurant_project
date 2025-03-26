const Table = require("../models/table");

exports.getTableByNumber = async (req, res) => {
    try {
        const table = await Table.findOne({ where: { number: req.params.number } });
        res.json(table);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAvailableTables = async (req, res) => {
    try {
        const tables = await Table.findAll({ where: { occupied: false } });
        res.json(tables);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getOccupiedTables = async (req, res) => {
    try {
        const tables = await Table.findAll({ where: { occupied: true } });
        res.json(tables);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createTable = async (req, res) => {
    try {
        const { vacancy, tableNumber } = req.body;

        const newTable = await Table.create({
            vacancy,
            tableNumber
        });

        res.status(201).json(newTable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateTableOccupation = async (req, res) => {
    try {
        const { id } = req.params;
        const { occupied } = req.body;
        await Table.update({ occupied }, { where: { id } });
        res.status(200).json({ message: "Table occupation updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
