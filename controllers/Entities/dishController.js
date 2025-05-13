const {Dish, Category} = require("../../models");

const dishController = {

    getAllDishes: async (req, res) => {
        try {
            const dishes = await Dish.findAll({where: { active: true}});
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
            console.log(categoryName);
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

            const dish = await Dish.findByPk(req.params.id);            
            if (!dish) return res.status(404).json({ message: "Dish not found" });
            
            const { name, description, price, preparationTime } = req.body;

            if(name)dish.name = name || dish.name;
            if(description)dish.description = description || dish.description;
            if(price)dish.price = price || dish.price;
            if(preparationTime)dish.preparationTime = preparationTime || dish.preparationTime;
            
            await dish.save();
            res.status(200).json({ message: "Dish updated" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteDish :async (req, res) => {
        try {            
            const dish = await Dish.findByPk(req.params.id);
            
            if (!dish) return res.status(404).json({ message: "Dish not found" });
        
            dish.active = false
            
            await dish.save();
            res.status(200).json(dish);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = dishController;