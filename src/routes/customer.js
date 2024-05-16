const express = require("express");
const loginCustomerController = require("../apis/customer/login/api/login");
const registerController = require("../apis/customer/register/api/register");
const validateOtpController = require("../apis/customer/validateOTP/api/validateOtp");

const CustomerRouter = express.Router();

CustomerRouter.post('/login', login);
CustomerRouter.post('/signUp',register);
CustomerRouter.post('/validateOtp',validateOtp);

async function register(req, res) {
    await registerController.register(req, res);
}
async function validateOtp(req,res){
    await validateOtpController.validateOtp(req,res);
}

async function login(req,res){
    await loginCustomerController.login(req,res);
}
module.exports = CustomerRouter;