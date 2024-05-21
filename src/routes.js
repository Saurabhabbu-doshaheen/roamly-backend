const express = require("express");
const CustomerRouter = require("./routes/customer");
const commonRouter = require("./routes/common");
const router = express.Router();

router.use("/customer" , CustomerRouter);
router.use("/common" , commonRouter);

module.exports = router;