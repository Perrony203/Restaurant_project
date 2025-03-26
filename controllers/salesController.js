const { Sale } = require('../models');

const salesController = {
    // Obtener todas las ventas
    getAllSales:async (req, res) => {
        try {
            const sales = await Sale.findAll();
            return res.status(200).json(sales);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener una venta por ID
    getSaleById:async (req, res) => {
        try {
            const { id } = req.params;
            const sale = await Sale.findByPk(id);
            if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
            return res.status(200).json(sale);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Crear una nueva venta
    createSale:async (req, res) => {
        try {
            const { serviceId, total, paymentMethod } = req.body;
            const newSale = await Sale.create({ serviceId, total, paymentMethod });
            return res.status(201).json(newSale);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar una venta
    updateSale:async (req, res) => {
        try {
            const { id } = req.params;
            const { serviceId, total, paymentMethod } = req.body;
            const sale = await Sale.findByPk(id);
            if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
            await sale.update({ serviceId, total, paymentMethod });
            return res.status(200).json(sale);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar una venta
    deleteSale:async (req, res) => {
        try {
            const { id } = req.params;
            const sale = await Sale.findByPk(id);
            if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
            await sale.destroy();
            return res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = salesController;