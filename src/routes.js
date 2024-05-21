const express = require("express");
const CustomerRouter = require("./routes/customer");
const tripRouter= require("./routes/trip");
const router = express.Router();

router.use("/customer" , CustomerRouter);
router.use("/trip",tripRouter);

module.exports = router;