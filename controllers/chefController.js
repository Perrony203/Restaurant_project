const { Chef } = require('../models');

exports.getChefs = async (req, res) => {
    try {
        const chefs = await Chef.findAll();
        res.json(chefs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createChef = async (req, res) => {
    try {
        const { employeeId } = req.body;

        if (!employeeId) {
            return res.status(400).json({ message: 'El campo employeeId es obligatorio' });
        }

        const newChef = await Chef.create({ employeeId });

        return res.status(201).json(newChef);
    } catch (error) {
        console.error('Error al crear el registro de chef:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteChef = async (req, res) => {
    try {
        const { id } = req.params;
        await Chef.destroy({ where: { chefId: id } });
        res.json({ message: 'Chef deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
