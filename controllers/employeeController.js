const { Employee } = require('../models'); 

// Obtener todos los empleados
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un empleado por ID
exports.getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);
        if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo empleado
exports.createEmployee = async (req, res) => {
    try {
        const { name, idType, phoneNumber } = req.body;
        const newEmployee = await Employee.create({ name, idType, phoneNumber });
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un empleado
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, idType, phoneNumber } = req.body;
        const employee = await Employee.findByPk(id);
        if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
        await employee.update({ name, idType, phoneNumber });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un empleado
exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);
        if (!employee) return res.status(404).json({ message: 'Empleado no encontrado' });
        await employee.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
