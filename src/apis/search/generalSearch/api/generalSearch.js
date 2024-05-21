const { generalSearchService } = require("../service/generalSearch");

const generalSearchController = async (req, res) => {

    try {
        const result = await generalSearchService(req);
        res.send(result);
    } catch (error) {
        res.send(error);
    }


};

module.exports = { generalSearchController };