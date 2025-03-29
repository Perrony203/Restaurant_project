const Supplier = require("../models/supplier");

const supplierController = {
    createSupplier :async (req, res) => {
        try {
            const { name, phoneNumber } = req.body;

            const newSupplier = await Supplier.create({
                name,
                phoneNumber
            });

            res.status(201).json(newSupplier);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateNumber :async (req, res) => {
        try {
            const { id } = req.params;
            const { number } = req.body;
            await Supplier.update({ number }, { where: { id } });
            res.status(200).json({ message: "Supplier updated" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getAllSuppliers: async (req, res) => {
        try {
            const suppliers = await Supplier.findAll();
            res.status(200).json(suppliers);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    
    

    getSupplierById :async (req, res) => {
        try {
            const supplier = await Supplier.findByPk(req.params.id);
            if (!supplier) return res.status(404).json({ message: "Supplier not found" });
            res.json(supplier);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteSupplier :async (req, res) => {
        try {
            await Supplier.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Supplier deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = supplierController;


