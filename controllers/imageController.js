// controllers/imageController.js
const {Image} = require("../models");

const imageController = {
    getImage :async (req, res) => {
        try {
            const image = await Image.findByPk(req.params.id);
            if (!image) return res.status(404).json({ message: "Image not found" });
            res.json(image);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createImage :async (req, res) => {
        try {
            const { dishId, image } = req.body;

            const newImage = await Image.create({
                dishId,
                image
            });

            res.status(201).json(newImage);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteImage :async (req, res) => {
        try {
            await Image.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Image deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports = imageController; 