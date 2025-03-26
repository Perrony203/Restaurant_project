const { Employee } = require('../models'); 

const employeeController = {
    // Obtener todos los empleados
    getAllEmployees:async (req, res) => {
        try {
            const employees = await Employee.findAll();
            return res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener un empleado por ID
    getEmployeeById:async (req, res) => {
        try {
            const { id } = req.params;
            const employee = await Employee.findByPk(id);
            if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
            return res.status(200).json(employee);
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

    // Actualizar un empleado
    updateEmployee:async (req, res) => {
        try {
            const { id } = req.params;
            const { name, idType, phoneNumber } = req.body;
            const employee = await Employee.findByPk(id);
            if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
            await employee.update({ name, idType, phoneNumber });
            return res.status(200).json(employee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar un empleado
    deleteEmployee:async (req, res) => {
        try {
            const { id } = req.params;
            const employee = await Employee.findByPk(id);
            if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
            await employee.destroy();
            return res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = employeeController;