const express = require("express");
const searchController = require("../apis/trip/search/api/search");

const tripRouter = express.Router();

tripRouter.get('/search',search);

async function search(req, res) {
    await searchController.search(req, res);
}
module.exports = tripRouter;