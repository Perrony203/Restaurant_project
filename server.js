require("dotenv").config();
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


const employeeRoutes = require("./routes/employeeRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const salesRoutes = require("./routes/salesRoutes");

app.use("/restaurant/employees", employeeRoutes);
app.use("/restaurant/inventory", inventoryRoutes);
app.use("/restaurant/menu", menuRoutes);
app.use("/restaurant/orders", orderRoutes);
app.use("/restaurant/sales", salesRoutes);

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});