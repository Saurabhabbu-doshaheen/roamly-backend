const express = require("express");
const bodyParser = require("body-parser");


const app = express();


app.listen(5000, () => {
    console.log(`
                 ################################################
                     @  Server listening on port: ${5000} @
                 ################################################
             `);

});
