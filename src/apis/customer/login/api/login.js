const services= require("../service/login");
const login = async (req, res) => {
    try {
        const result = await services.login(req);
        const logBody ={
            success:'Logged In Succesfully',
            data:result
        }
        res.send(logBody);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    login
};