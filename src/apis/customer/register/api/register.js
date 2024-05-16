const services= require("../service/register");
const register = async (req, res) => {
    try {
        const result = await services.register(req);
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
    register
};