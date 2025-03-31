const {InPlaceService} = require("../models");

const inPlaceServiceController = {
    getInPlaceServices :async (req, res) => {
        try {
            const services = await InPlaceService.findAll();
            res.json(services);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createServiceInPlace :async (req, res) => {
        try {
            const { serviceId, tableNumber, waiterId, cleaningIds } = req.body;

            const newServiceInPlace = await ServiceInPlace.create({
                serviceId,
                tableNumber,
                waiterId
            });

            if (cleaningIds && cleaningIds.length > 0) {
                await newServiceInPlace.setCleanings(cleaningIds);
            }

            res.status(201).json(newServiceInPlace);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },


    deleteInPlaceService :async (req, res) => {
        try {
            await InPlaceService.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "In-place service deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = inPlaceServiceController; 