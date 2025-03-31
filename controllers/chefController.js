const { Chef, Employee } = require('../models');

    const chefController = {
    getChefs :async (req, res) => {
        try {
            const chefs = await Chef.findAll();
            res.json(chefs);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Obtener chefs por ID de empleado (funciona bien)
    createChef :async (req, res) => {
        try {
            const { employeeId } = req.body;

            if (!employeeId) {
                return res.status(400).json({ message: 'El campo employeeId es obligatorio' });
            }
            if (!/^[0-9]+$/.test(employeeId)) {
                return res.status(400).json({ message: 'El campo employeeId debe ser un número' });
            }
            if (Employee.getEmployeebyId(employeeId) === null) {
                return res.status(404).json({ message: 'El empleado no existe' });
            }

            const newChef = await Chef.create({ employeeId });

            return res.status(201).json(newChef);
        } catch (error) {
            console.error('Error al crear el registro de chef:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },

    deleteChef :async (req, res) => {
        try {
            const { id } = req.params;
            await Chef.destroy({ where: { chefId: id } });
            res.json({ message: 'Chef deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = chefController;
