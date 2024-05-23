const services = require("../service/validateOtp");

const validateOtp = async (req, res) => {
    try {
        const result = await services.validateOtp(req.body);

        const logBody = {
            message: 'Valid OTP! Registered Succesfully',
            status: 200,
            data: {}
        }

        res.status(logBody.status).send(logBody);
    } catch (error) {
        res.status(error.status).send(error);
    }
};
module.exports = {
    validateOtp
};