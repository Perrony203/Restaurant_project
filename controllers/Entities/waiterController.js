const { Waiter } = require('../../models');

const waiterController = {
    getWaiters :async (req, res) => {
        try {
            const waiters = await Waiter.findAll();
            res.json(waiters);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createWaiter :async (req, res) => {
        try {
            const { employeeId, password } = req.body;
            const hashConstraseña = await bcrypt.hash(password,10);

            if (!employeeId || !password) {
                return res.status(400).json({ message: 'Campos incompletos' });
            }
            
            if (!/^[0-9]+$/.test(employeeId)) {
                return res.status(400).json({ message: 'El campo employeeId debe ser un número' });
            }
            if (Employee.getEmployeebyId(employeeId) === null) {
                return res.status(404).json({ message: 'El empleado no existe' });
            }

            const newWaiter = await Waiter.create({ employeeId, password:hashConstraseña });

            return res.status(201).json(newWaiter);
        } catch (error) {
            console.error('Error al crear el camarero:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },

    deleteWaiter :async (req, res) => {
        try {
            const { id } = req.params;
            await Waiter.destroy({ where: { waiterId: id } });
            res.json({ message: 'Waiter deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = waiterController;