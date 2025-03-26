const CleanerService = require("../models/cleanerService");

// Controller for CleanerService
const cleanerServiceController = {
    async getAll(req, res) {
        try {
            const cleanerServices = await CleanerService.findAll();
            res.json(cleanerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getByService(req, res) {
        try {
            const { serviceId } = req.params;
            const cleanerServices = await CleanerService.findAll({ where: { serviceId } });
            res.json(cleanerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getByCleaner(req, res) {
        try {
            const { cleanerId } = req.params;
            const cleanerServices = await CleanerService.findAll({ where: { cleanerId } });
            res.json(cleanerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async create(req, res) {
        try {
            const newCleanerService = await CleanerService.create(req.body);
            res.status(201).json(newCleanerService);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            await CleanerService.destroy({ where: { id } });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = { cleanerServiceController };