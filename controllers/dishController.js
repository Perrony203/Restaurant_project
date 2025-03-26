const Dish = require("../models/dish");

exports.getDishById = async (req, res) => {
    try {
        const dish = await Dish.findByPk(req.params.id);
        if (!dish) return res.status(404).json({ message: "Dish not found" });
        res.json(dish);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createDish = async (req, res) => {
    try {
        const { name, description, preparationTime, categoryId } = req.body;

        const dish = await Dish.create({
            name,
            description,
            preparationTime,
            categoryId
        });

        res.status(201).json(dish);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDish = async (req, res) => {
    try {
        const { id } = req.params;
        await Dish.update(req.body, { where: { id } });
        res.status(200).json({ message: "Dish updated" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteDish = async (req, res) => {
    try {
        await Dish.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Dish deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};