const express = require("express");
const loginCustomerController = require("../apis/customer/login/api/login");

const CustomerRouter = express.Router();

CustomerRouter.post('/login', loginCustomerController);

module.exports = CustomerRouter;