const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const dbConfig = require("./src/config/dbConfig")
const mainRouter = require("./src/routes")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Max-Age', '86400');
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }
  
    next();
  });
app.use('/api',mainRouter);

app.listen(4500, () => {
    console.log(`
                 ################################################
                     @  Server listening on port: ${4500} @
                 ################################################
             `);

});
