const {CookerService} = require("../../models");


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
            

            const { serviceId, cookerId } = req.body;
            if (!serviceId || !cookerId) {
                return res.status(400).json({ message: 'Los campos serviceId y cookerId son obligatorios' });
            }
            if (!/^[0-9]+$/.test(serviceId)) {
                return res.status(400).json({ message: 'El campo serviceId debe ser un número' });
            }
            if (!/^[0-9]+$/.test(cookerId)) {
                return res.status(400).json({ message: 'El campo cookerId debe ser un número' });
            }
            if (Employee.getEmployeebyId(cookerId) === null) {
                return res.status(404).json({ message: 'El empleado no existe' });
            }
            if (Service.getServicebyId(serviceId) === null) {
                return res.status(404).json({ message: 'El servicio no existe' });
            }
            


            const newCookerService = await CookerService.create({ serviceId, cookerId });
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
