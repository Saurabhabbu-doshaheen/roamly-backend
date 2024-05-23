const services= require("../service/register");
const register = async (req, res) => {
    try {
        const result = await services.register(req);
        const logBody ={
            message:'OTP Sent Successfully!',
            status: 200,
            data:result
        }
        res.status(logBody.status).send(logBody);
    } catch (error) {
        res.status(error.status).send(error);
    }
};
module.exports = {
    register
};