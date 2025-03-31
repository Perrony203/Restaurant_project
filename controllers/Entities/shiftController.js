const {Shift} = require('../../models');

const shiftController = {
    // Obtener todos los turnos
    getShifts :async (req, res) => {
        try {
            const shifts = await Shift.findAll();
            res.json(shifts);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los turnos' });
        }
    },

    // Obtener un turno por ID
    getShiftById :async (req, res) => {
        try {
            const shift = await Shift.findByPk(req.params.id);
            if (!shift) {
                return res.status(404).json({ error: 'Turno no encontrado' });
            }
            res.json(shift);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el turno' });
        }
    },

    // Crear un turno
    createShift :async (req, res) => {
        try {
            const { datetimeOpen, datetimeClose } = req.body;

            if (!datetimeOpen) {
                return res.status(400).json({ message: 'El campo datetimeOpen es obligatorio' });
            }
            if (!datetimeClose) {
                return res.status(400).json({ message: 'El campo datetimeClose es obligatorio' });
            }

            const newShift = await Shift.create({ datetimeOpen, datetimeClose });

            return res.status(201).json(newShift);
        } catch (error) {
            console.error('Error al crear el turno:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },

    // Actualizar un turno
    updateShift :async (req, res) => {
        try {
            const shift = await Shift.findByPk(req.params.id);
            if (!shift) {
                return res.status(404).json({ error: 'Turno no encontrado' });
            }
            await shift.update(req.body);
            res.json(shift);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el turno' });
        }
    },

    // Eliminar un turno
    deleteShift :async (req, res) => {
        try {
            const shift = await Shift.findByPk(req.params.id);
            if (!shift) {
                return res.status(404).json({ error: 'Turno no encontrado' });
            }
            await shift.destroy();
            res.json({ message: 'Turno eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el turno' });
        }
    },
}

module.exports = shiftController; 