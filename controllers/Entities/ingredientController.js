const {Ingredient, Supplier} = require("../../models");

const ingedientController = {
    addIngredient :async (req, res) => {
        try {
            const { name, stock, price, stockUnits, supplierId } = req.body;
            if (!name || !stock || !price || !stockUnits || !supplierId) {
                return res.status(400).json({ message: "All fields are required" });
            }
            const newIngredient = await Ingredient.create({ name, stock, price, stockUnits, supplierId});
            res.status(201).json(newIngredient);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    
    updateIngredient :async (req, res) => {
        try {
            const { name, stock, price, stockUnits, supplierId } = req.body;
            const ingredient = await Ingredient.findByPk(req.params.id);
            if (!ingredient) return res.status(404).json({ message: "Ingredient not found" });
            
            if(name)ingredient.name = name || ingredient.name;
            if(stock)ingredient.stock = stock || ingredient.stock;
            if(price)ingredient.price = price || ingredient.price;
            if(stockUnits)ingredient.stockUnits = stockUnits || ingredient.stockUnits;
            if(supplierId)ingredient.supplierId = supplierId || ingredient.supplierId;
            
            await ingredient.save();
            res.json(ingredient);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllIngredients: async (req, res) => {
        try {
            const ingredients = await Ingredient.findAll();
            res.status(200).json(ingredients);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getIngredientById :async (req, res) => {
        try {
            const ingredient = await Ingredient.findByPk(req.params.id);
            if (!ingredient) return res.status(404).json({ message: "Ingredient not found" });
            res.json(ingredient);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getBySupplier :async (req, res) => {
        try {
            const supplier =  await Supplier.findAll({where: {supplierId: ingredient.supplierId}});
            if (!supplier) return res.status(404).json({ message: "Supplier not found" });
            res.json(supplier);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteIngredient :async (req, res) => {
        try {
            console.log(req.params.id)
            const ingredient = await Ingredient.findByPk(req.params.id);
            if(!ingredient) return res.status(404).json({ message: "Ingredient not found" });

            ingredient.stock = 0;

            await ingredient.save();
            res.status(200).json({ message: "Ingredient deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = ingedientController;