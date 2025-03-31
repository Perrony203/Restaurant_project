const { Employee } = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async(req, res) => {
    try {
        const {employeeId, password} = req.body;
        const employee = await Employee.findOne({where: {employeeId}});

        if(!employee) {
            return res.status(400).json({error: "Empleado no encontrado"});
        }
        if(!employee.validarContraseña(password)){
            return res.status(401).json({error: "Error de credenciales"});
        }
        const token = jwt.sign(
            {id: employee.employeeId},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.json({token: token});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {login}