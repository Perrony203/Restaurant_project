const { Employee } = require('../models');

const employeeController = {
    getAllEmployees :async (req, res) => {
        try {
            const employees = await Employee.findAll();
            res.json(employees);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getEmployeeByDocumentType :async (req, res) => {
        try {
            const { documentType } = req.params;
            const employees = await Employee.findAll({ where: { documentType } });
            res.json(employees);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Crear un nuevo empleado
    createEmployee:async (req, res) => {
        try {
            const { name, idType, phoneNumber } = req.body;
            if(!name || !idType || !phoneNumber){
                return res.status(404).json({error: "Parámetros incompletos"}) 
            }
            const newEmployee = await Employee.create({ name, idType, phoneNumber });
            return res.status(201).json(newEmployee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateEmployee :async (req, res) => {
        try {
            const { id } = req.params;
            const [updated] = await Employee.update(req.body, { where: { id } });
            updated ? res.json({ message: 'Employee updated' }) : res.status(404).json({ error: 'Employee not found' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteEmployee :async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Employee.destroy({ where: { id } });
            deleted ? res.json({ message: 'Employee deleted' }) : res.status(404).json({ error: 'Employee not found' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = employeeController;

