const services = require("../service/validateOtp");

const validateOtp = async (req, res) => {
    try {
        const result = await services.validateOtp(req.body);
        const logBody ={
            success:'Registered Succesfully',
            data:result
        }
        res.send(logBody);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    validateOtp
};