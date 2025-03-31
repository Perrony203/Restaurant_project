const { Contract } = require('../../models');

const contractController = {
    getAllContracts:async(req, res) => {
        try {
            const contracts = await Contract.findAll();
            res.json(contracts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getContractByShift:async(req, res) => {
        try {
            const { shiftId } = req.params;
            const contracts = await Contract.findAll({ where: { shiftId } });
            res.json(contracts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createContract:async(req, res) =>  {
        try {
            const { shiftId, employeeId, payments } = req.body;
    
            if (!shiftId || !employeeId || payments === undefined) {
                return res.status(400).json({ message: 'Los campos shiftId, employeeId y payments son obligatorios' });
            }
    
            const newContract = await ShiftEmployee.create({ shiftId, employeeId, payments });
    
            return res.status(201).json(newContract);
        } catch (error) {
            console.error('Error al crear el contrato:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },

    getContractByEmployee:async(req, res) => {
        try {
            const { employeeId } = req.params;
            const contracts = await Contract.findAll({ where: { employeeId } });
            res.json(contracts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateContract:async(req, res) => {
        try {
            const { id } = req.params;
            const [updated] = await Contract.update(req.body, { where: { id } });
            if (updated) {
                const updatedContract = await Contract.findByPk(id);
                return res.json(updatedContract);
            }
            throw new Error('Contract not found');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteContract:async(req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Contract.destroy({ where: { id } });
            if (deleted) {
                return res.json({ message: 'Contract deleted' });
            }
            throw new Error('Contract not found');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = contractController;
