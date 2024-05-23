const axios = require("axios");

const generalSearchService = async (req) => {

    try {
        const searchPlace = req.query.place;


        const url = `https://nominatim.openstreetmap.org/search?q=${searchPlace}&format=json&addressdetails=1`
        const response = await axios.get(url);
        const places = response.data;
        formatReqArray = [];
        for (const place of places) {
            ({ lat, lon, importance, addresstype, boundingbox, name, display_name, address } = place);
            const formatReqJson = {
                cityName: name,
                display_name,
                lat,
                lon,
                importance,
                addresstype,
                address,
                boundingbox
            }
            formatReqArray.push(formatReqJson);
        }
        return formatReqArray;

    } catch (error) {
        console.log(error);
        return error;
    }


}

module.exports = { generalSearchService };