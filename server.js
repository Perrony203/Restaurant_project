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

const categoryRoutes = require("./routes/categoryRoutes");
const chefRoutes = require("./routes/chefRoutes");
const cleanerServiceRoutes = require("./routes/cleanerServiceRoutes");
const cleaningRoutes = require("./routes/cleaningRoutes");
const clientRoutes = require("./routes/clientRoutes");
const commandRoutes = require("./routes/commandRoutes");
const contractRoutes = require("./routes/contractRoutes");
const cookerServiceRoutes = require("./routes/cookerServiceRoutes");
const deliveryServiceRoutes = require("./routes/deliveryServiceRoutes");
const dishIngredientsRoutes = require("./routes/dishIngredientsRoutes");
const dishRoutes = require("./routes/dishRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");
const imageRoutes = require("./routes/imageRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const inPlaceServiceRoutes = require("./routes/inPlaceServiceRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const shiftRoutes = require("./routes/shiftRoutes");
const statusRoutes = require("./routes/statusRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const tableRoutes = require("./routes/tableRoutes");
const waiterRoutes = require("./routes/waiterRoutes");

app.use("/restaurant/categories", categoryRoutes);
app.use("/restaurant/chefs", chefRoutes);
app.use("/restaurant/cleaner-services", cleanerServiceRoutes);
app.use("/restaurant/cleanings", cleaningRoutes);
app.use("/restaurant/clients", clientRoutes);
app.use("/restaurant/commands", commandRoutes);
app.use("/restaurant/contracts", contractRoutes);
app.use("/restaurant/cooker-services", cookerServiceRoutes);
app.use("/restaurant/delivery-services", deliveryServiceRoutes);
app.use("/restaurant/dish-ingredients", dishIngredientsRoutes);
app.use("/restaurant/dishes", dishRoutes);
app.use("/restaurant/employees", employeeRoutes);
app.use("/restaurant/evaluations", evaluationRoutes);
app.use("/restaurant/images", imageRoutes);
app.use("/restaurant/ingredients", ingredientRoutes);
app.use("/restaurant/in-place-services", inPlaceServiceRoutes);
app.use("/restaurant/services", serviceRoutes);
app.use("/restaurant/shifts", shiftRoutes);
app.use("/restaurant/statuses", statusRoutes);
app.use("/restaurant/suppliers", supplierRoutes);
app.use("/restaurant/tables", tableRoutes);
app.use("/restaurant/waiters", waiterRoutes);

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});