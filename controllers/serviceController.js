const Service = require("../models/service");

exports.getServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createService = async (req, res) => {
    try {
        const { clientId, bill, datetimeOpen, datetimeClose, chefIds } = req.body;

        const newService = await Service.create({
            clientId,
            bill,
            datetimeOpen,
            datetimeClose
        });

        if (chefIds && chefIds.length > 0) {
            await newService.setChefs(chefIds);
        }

        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateServiceCloseDate = async (req, res) => {
    try {
        const { id } = req.params;
        const { closeDate } = req.body;
        await Service.update({ closeDate }, { where: { id } });
        res.status(200).json({ message: "Service close date updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateServiceInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const { invoice } = req.body;
        await Service.update({ invoice }, { where: { id } });
        res.status(200).json({ message: "Service invoice updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        await Service.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Service deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};