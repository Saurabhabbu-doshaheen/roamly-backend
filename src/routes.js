const express = require("express");
const CustomerRouter = require("./routes/customer");
const tripRouter= require("./routes/trip");
const commonRouter = require("./routes/common");
const router = express.Router();

router.use("/customer" , CustomerRouter);
router.use("/trip",tripRouter);
router.use("/common" , commonRouter);

module.exports = router;