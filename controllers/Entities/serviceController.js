const {Service} = require("../../models");

const serviceController = {
    getServices :async (req, res) => {
        try {
            const services = await Service.findAll();
            res.json(services);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createService :async (req, res) => {
        try {
            const { clientId, bill, datetimeClose, chefIds } = req.body;

            const newService = await Service.create({
                clientId,
                bill,
                datetimeClose
            });

            if (chefIds && chefIds.length > 0) {
                await newService.setChefs(chefIds);
            }

            res.status(201).json(newService);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateService :async (req, res) => {
        try {
            const { id } = req.params;
            const [updated] = await Service.update(req.body, { where: { serviceId: id } });
            updated ? res.status(200).json({ message: 'Service updated' }) : res.status(404).json({ error: 'Service not found' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getServiceById :async (req, res) => {
        try {
            const { id } = req.params;
            const service = await Service.findByPk(id);
            if (!service) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json(service);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteService :async (req, res) => {
        try {
            await Service.destroy({ where: { serviceId: req.params.id } });
            res.status(200).json({ message: "Service deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = serviceController; 