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
        if(!client.validarContraseña(password)){
            return res.status(401).json({error: "Error de credenciales"});
        }
        const token = jwt.sign(
            {id: client.clientId},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.json({token: token});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {login}