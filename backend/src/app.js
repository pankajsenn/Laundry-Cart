const express = require('express');
const cors = require("cors");
const app = express();
const User = require('../src/routes/user');
const Products = require('../src/routes/product');
const Orders = require('../src/routes/orders');
app.use(express.json());
app.use(cors());
app.use("/",User);
app.use("/",Products);
app.use("/",Orders);

module.exports = app;