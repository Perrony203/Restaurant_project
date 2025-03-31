const {Category} = require("../../models");

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
//funciona bien
    createCategory :async (req, res) => {
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
//que se borre con el nombre de la categoria
    deleteCategory :async (req, res) => {
        try {
            await Category.destroy({ where: { name: req.params.name } });
            res.status(200).json({ message: "Category deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}
module.exports = categoryController;