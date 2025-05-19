const { Employee } = require('../../models');
const bcrypt = require('bcrypt');

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
    getEmployeeById: async (req, res) => {
        try {
          const { id } = req.params;
          // Solo busca el empleado, sin incluir relaciones
          const employee = await Employee.findByPk(id);

          if (!employee) {
            return res.status(404).json({
              message: "Empleado no encontrado",
            });
          }

          return res.status(200).json(employee);
        } catch (error) {
          console.error("Error al obtener empleado:", error);
          return res.status(500).json({
            message: "Error interno del servidor al obtener empleado",
            error: error.message,
          });
        }
      },

    // Crear un nuevo empleado
    createEmployee:async (req, res) => {
        try {
            const { employeeId, name, idType, phoneNumber, password } = req.body;
            if(!employeeId || !name || !idType || !phoneNumber || !password){
                return res.status(404).json({error: "Parámetros incompletos"}) 
            }
            const hashConstraseña = await bcrypt.hash(password,10);
            const newEmployee = await Employee.create({ employeeId, name, idType, phoneNumber, password:hashConstraseña });
            return res.status(201).json(newEmployee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateEmployee :async (req, res) => {
        try {
            const { id } = req.params;
            const [updated] = await Employee.update(req.body, { where: {employeeId: id } });
            updated ? res.json({ message: 'Employee updated' }) : res.status(404).json({ error: 'Employee not found' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteEmployee :async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Employee.destroy({ where: { employeeId: id } });
            deleted ? res.json({ message: 'Employee deleted' }) : res.status(404).json({ error: 'Employee not found' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = employeeController;

