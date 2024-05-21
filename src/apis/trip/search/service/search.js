const axios = require('axios');
const { RADIUS, URL } = require('../../../../constants/constants');
const dotenv = require('dotenv').config();
async function search(req) {
    try {
        const { name } = req.query;
        const apiKey = process.env.API_KEY;
        const url_location = URL.GEO;
        const response = await axios.get(url_location, {
            params: {
                name,
                apikey: apiKey
            },
            headers: {
                'Accept': 'application/json'
            }
        });
       const inputData= response.data;
       const radius = RADIUS;
       const lat = inputData.lat;
       const lon = inputData.lon;
       let url_data = URL.PLACES;
       url_data += `?lat=${lat}&lon=${lon}&radius=${radius}&apikey=${apiKey}`;
       const response_data = await axios.get(url_data);
       return response_data.data;
    } catch (error) {
       return error;
    }
}
module.exports={
   search
};