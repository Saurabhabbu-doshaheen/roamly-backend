const express = require("express");
const bodyParser = require("body-parser");

const dbConfig = require("./src/config/dbConfig")
const mainRouter = require("./src/routes")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", mainRouter);

app.listen(4500, () => {
    console.log(`
                 ################################################
                     @  Server listening on port: ${4500} @
                 ################################################
             `);

});
