const {Client} = require("../../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async(req, res) => {
    try {
        const {clientId, password} = req.body;
        const client = await Client.findOne({where: {clientId}});

        if(!client) {
            return res.status(400).json({error: "Cliente no encontrado"});
        }

        const esPasswordCorrecto = await bcrypt.compare(password, client.password);
        if (!esPasswordCorrecto) {
            return res.status(401).json({ error: "Contraseña incorrecta." });
        }

        // Generar token JWT
        const token = jwt.sign(
        { clientId: client.id, phoneNumber: client.active},
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
        );

        const name = client.name

        res.json({ token, name});
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = {login}