const DeliveryService = require("../models/serviceDelivery");

exports.getDeliveryServices = async (req, res) => {
    try {
        const services = await DeliveryService.findAll();
        res.json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createServiceDelivery = async (req, res) => {
    try {
        const { serviceId, code, statusId } = req.body;

        const serviceDelivery = await ServiceDelivery.create({
            serviceId,
            code,
            statusId
        });

        res.status(201).json(serviceDelivery);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDeliveryStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await DeliveryService.update({ status }, { where: { id } });
        res.status(200).json({ message: "Delivery status updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteDeliveryService = async (req, res) => {
    try {
        await DeliveryService.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Delivery service deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
