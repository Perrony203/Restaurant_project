const {CookerService} = require("../models");


const cookerServiceController = {
    getAll:async(req, res) => {
        try {
            const cookerServices = await CookerService.findAll();
            res.json(cookerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getByService:async(req, res) => {
        try {
            const { serviceId } = req.params;
            const cookerServices = await CookerService.findAll({ where: { serviceId } });
            res.json(cookerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getByCooker:async(req, res) => {
        try {
            const { cookerId } = req.params;
            const cookerServices = await CookerService.findAll({ where: { cookerId } });
            res.json(cookerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    create:async(req, res) => {
        try {
            const newCookerService = await CookerService.create(req.body);
            res.status(201).json(newCookerService);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete:async(req, res) => {
        try {
            const { id } = req.params;
            await CookerService.destroy({ where: { id } });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = cookerServiceController;
