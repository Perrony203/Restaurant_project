<<<<<<< HEAD
require("dotenv").config();
=======
require ("dotenv").config();
>>>>>>> 5d03e639eadf70ab7959bc0e748cdbb0a58e4021
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");

<<<<<<< HEAD

=======
>>>>>>> 5d03e639eadf70ab7959bc0e748cdbb0a58e4021
const app = express();

//Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

<<<<<<< HEAD
const employeeRoutes = require("./routes/employeeRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const salesRoutes = require("./routes/salesRoutes");

app.use("/employees", employeeRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);
app.use("/sales", salesRoutes);
=======
// app.use("/api/usuarios", usuarioRoutes);
// app.use("/api/auth", authRoutes);
// app.use("api/pedidos", pedidoRoutes);
>>>>>>> 5d03e639eadf70ab7959bc0e748cdbb0a58e4021

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});