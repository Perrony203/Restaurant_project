const Ingredient = require("../models/ingredient");

exports.addIngredient = async (req, res) => {
    try {
        const ingredient = await Ingredient.create(req.body);
        res.status(201).json(ingredient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { supplierId } = req.body;
        await Ingredient.update({ supplierId }, { where: { id } });
        res.status(200).json({ message: "Ingredient supplier updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { stock } = req.body;
        await Ingredient.update({ stock }, { where: { id } });
        res.status(200).json({ message: "Ingredient stock updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePrice = async (req, res) => {
    try {
        const { id } = req.params;
        const { price } = req.body;
        await Ingredient.update({ price }, { where: { id } });
        res.status(200).json({ message: "Ingredient price updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getIngredientById = async (req, res) => {
    try {
        const ingredient = await Ingredient.findByPk(req.params.id);
        if (!ingredient) return res.status(404).json({ message: "Ingredient not found" });
        res.json(ingredient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBySupplier = async (req, res) => {
    try {
        const ingredients = await Ingredient.findAll({ where: { supplierId: req.params.supplierId } });
        res.json(ingredients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteIngredient = async (req, res) => {
    try {
        await Ingredient.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Ingredient deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};