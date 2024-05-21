const services= require("../service/search");
const search = async (req, res) => {
    try {
        const result = await services.search(req);
        const logBody ={
            success:'Here is the result',
            data:result
        }
        res.send(logBody);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    search
};