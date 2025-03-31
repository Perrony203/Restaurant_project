const { Cleaning } = require('../../models');

const cleaningController = {
    getCleanings :async (req, res) => {
        try {
            const cleanings = await Cleaning.findAll();
            res.json(cleanings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createCleaning :async (req, res) => {
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

            

            const newCleaning = await Cleaning.create({ employeeId });

            return res.status(201).json(newCleaning);
        } catch (error) {
            console.error('Error al crear el registro de cleaning:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },

    deleteCleaning :async (req, res) => {
        try {
            const { id } = req.params;
            await Cleaning.destroy({ where: { cleaningId: id } });
            res.json({ message: 'Cleaning deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = cleaningController;
