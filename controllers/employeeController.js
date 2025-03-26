const { Employee } = require('../models');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployeeByDocumentType = async (req, res) => {
    try {
        const { documentType } = req.params;
        const employees = await Employee.findAll({ where: { documentType } });
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const { idType, name, phoneNumber } = req.body;

        if (!idType || !name) {
            return res.status(400).json({ message: 'Los campos idType y name son obligatorios' });
        }

        const newEmployee = await Employee.create({ idType, name, phoneNumber });

        return res.status(201).json(newEmployee);
    } catch (error) {
        console.error('Error al crear el empleado:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Employee.update(req.body, { where: { id } });
        updated ? res.json({ message: 'Employee updated' }) : res.status(404).json({ error: 'Employee not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Employee.destroy({ where: { id } });
        deleted ? res.json({ message: 'Employee deleted' }) : res.status(404).json({ error: 'Employee not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

