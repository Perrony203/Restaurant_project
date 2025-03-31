const { Waiter } = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async(req, res) => {
    try {
        const {employeeId, password} = req.body;
        const waiter = await Waiter.findOne({where: {employeeId}});

        if(!waiter) {
            return res.status(400).json({error: "Waiter no encontrado"});
        }
        if(!waiter.validarContraseña(password)){
            return res.status(401).json({error: "Error de credenciales"});
        }
        const token = jwt.sign(
            {id: waiter.employeeId},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.json({token: token});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {login}