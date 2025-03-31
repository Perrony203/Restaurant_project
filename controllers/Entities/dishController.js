const {Dish, Category} = require("../../models");

const dishController = {

    getAllDishes: async (req, res) => {
        try {
            const dishes = await Dish.findAll();
            res.status(200).json(dishes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    
    getDishById :async (req, res) => {
        try {
            const dish = await Dish.findByPk(req.params.id);
            if (!dish) return res.status(404).json({ message: "Dish not found" });
            res.json(dish);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createDish :async (req, res) => {
        try {
            const { name, description, price, preparationTime, categoryName } = req.body;

            const category = await Category.findOne({ where: { name: categoryName } });
            
            if (!category) {
                return res.status(404).json({ error: `Categoría "${categoryName}" no encontrada.` });
            }
    
            const categoryId = category.categoryId;

            console.log(categoryId);

            const dish = await Dish.create({
                name,
                description,
                price,
                preparationTime,
                categoryId
            });

            res.status(201).json(dish);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateDish :async (req, res) => {
        try {
            const { id } = req.params;
            await Dish.update(req.body, { where: { id } });
            res.status(200).json({ message: "Dish updated" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteDish :async (req, res) => {
        try {
            await Dish.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Dish deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = dishController;