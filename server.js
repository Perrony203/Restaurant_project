require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

// app.use("/api/usuarios", usuarioRoutes);
// app.use("/api/auth", authRoutes);
// app.use("api/pedidos", pedidoRoutes);

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});