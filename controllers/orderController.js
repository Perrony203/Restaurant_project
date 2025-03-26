const { Command } = require('../models');

const orderController = {
    // Obtener todos los pedidos
    getAllOrders:async (req, res) => {
        try {
            const orders = await Command.findAll();
            return res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener un pedido por ID
    getOrderById:async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Command.findByPk(id);
            if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
            return res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Crear un nuevo pedido
    createOrder:async (req, res) => {
        try {
            const { serviceId, dishId, datetimeOpen } = req.body;
            const newOrder = await Command.create({ serviceId, dishId, datetimeOpen });
            return res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar un pedido
    updateOrder:async (req, res) => {
        try {
            const { id } = req.params;
            const { serviceId, dishId, datetimeClose } = req.body;
            const order = await Command.findByPk(id);
            if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
            await order.update({ serviceId, dishId, datetimeClose });
            return res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar un pedido
    deleteOrder:async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Command.findByPk(id);
            if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
            await order.destroy();
            return res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = orderController;