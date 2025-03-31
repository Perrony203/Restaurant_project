const jwt = require("jsonwebtoken");

const authService = (req, res, next) => {
    const token = req.header("Authorization");

    if(!token) {
        res.status(401).json({Error: "Token no proporcionado"});
    }

    try {
        const decoded = jwt.verify(token.replace(/^Bearer\s+/i, ""), process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    }catch(err){
        return res.status(403).json({Message: "Token expirado"});
    }
};

module.exports = authService;