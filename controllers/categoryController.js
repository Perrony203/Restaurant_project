const Category = require("../models/category");

const categoryController = {
    getCategory :async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) return res.status(404).json({ message: "Category not found" });
            res.json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createCategory :async (req, res) => {
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteCategory :async (req, res) => {
        try {
            await Category.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Category deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}
module.exports = categoryController;