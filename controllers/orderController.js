const { Command } = require('../models');

// Obtener todos los pedidos
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Command.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un pedido por ID
exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Command.findByPk(id);
        if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo pedido
exports.createOrder = async (req, res) => {
    try {
        const { serviceId, dishId, datetimeOpen } = req.body;
        const newOrder = await Command.create({ serviceId, dishId, datetimeOpen });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un pedido
exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceId, dishId, datetimeClose } = req.body;
        const order = await Command.findByPk(id);
        if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
        await order.update({ serviceId, dishId, datetimeClose });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un pedido
exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Command.findByPk(id);
        if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
        await order.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
