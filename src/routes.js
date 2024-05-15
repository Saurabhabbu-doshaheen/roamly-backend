const express = require("express");
const CustomerRouter = require("./routes/customer");

const router = express.Router();

router.use("/customer" , CustomerRouter);

module.exports = router;