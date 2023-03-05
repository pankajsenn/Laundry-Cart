const express = require('express');
const cors = require("cors");
const Register = require("../src/routes/register")
const app = express();
const User = require('../src/routes/user');
const Products = require('../src/routes/product');
const Orders = require('../src/routes/order');
app.use(express.json());
app.use(cors());
app.use("/",Products);
app.use("/",Orders);
app.use("/",Register);

module.exports = app;