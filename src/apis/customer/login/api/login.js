const services= require("../service/login");
const login = async (req, res) => {
    try {
        const result = await services.login(req);
        const logBody ={
            message:'Logged In Succesfully',
            status : 200,
            data:result
        };
        res.status(logBody.status).send(logBody);
    } catch (error) {
        res.status(error.status).send(error);
    }
};

module.exports = {
    login
};