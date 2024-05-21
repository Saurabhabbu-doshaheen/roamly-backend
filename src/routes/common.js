const express = require("express");
const { generalSearchController } = require("../apis/search/generalSearch/api/generalSearch");
const commonRouter = express.Router();

commonRouter.get('/placeSearch', placeSearch);

async function placeSearch(req, res) {
    await generalSearchController(req,res);
};

module.exports = commonRouter;