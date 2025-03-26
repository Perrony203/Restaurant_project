// controllers/imageController.js
const Image = require("../models/image");

exports.getImage = async (req, res) => {
    try {
        const image = await Image.findByPk(req.params.id);
        if (!image) return res.status(404).json({ message: "Image not found" });
        res.json(image);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createImage = async (req, res) => {
    try {
        const { clientId, image } = req.body;

        const newImage = await Image.create({
            clientId,
            image
        });

        res.status(201).json(newImage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteImage = async (req, res) => {
    try {
        await Image.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Image deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};