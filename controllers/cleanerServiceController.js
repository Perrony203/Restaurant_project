const {CleanerService, Employee, Service} = require("../models");

// Controller for CleanerService
const cleanerServiceController = {
    getAll:async(req, res) => {
        try {
            const cleanerServices = await CleanerService.findAll();
            res.json(cleanerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getByService:async(req, res) => {
        try {
            const { serviceId } = req.params;
            const cleanerServices = await CleanerService.findAll({ where: { serviceId } });
            res.json(cleanerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getByCleaner:async(req, res) => {
        try {
            const { employeeName } = req.params;
            const employee = await Employee.findOne({ where: { name: employeeName } });

            if (!employee) {    
                return res.status(404).json({ error: "Employee not found" });
            }
            const cleanerServices = await CleanerService.findAll({ where: { employeeId: employee.id } });

            res.json(cleanerServices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    create:async(req, res) => {
        try {
            
            const { employeeId, serviceId } = req.body;
            const employee = await Employee.findByPk(employeeId);
            const service = await Service.findByPk(serviceId);
            if (!employee) {
                return res.status(404).json({ error: "Employee not found" });
            }
            if (!service) {
                return res.status(404).json({ error: "Service not found" });
            }
            const cleanerService = await CleanerService.create({
                employeeId: employeeId,
                serviceId: serviceId,
            });
            return res.status(201).json(cleanerService);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete:async(req, res) => {
        try {
            const { id } = req.params;
            await CleanerService.destroy({ where: { id } });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = cleanerServiceController;