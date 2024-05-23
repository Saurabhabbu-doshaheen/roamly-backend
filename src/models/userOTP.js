const mongoose = require("mongoose");

const userOTPSchema = new mongoose.Schema({
    otp: Number,
    email_id : String,
    otp_expiration : Date,
    user_data : Object
})

const userOTP = mongoose.model('UserOTP',userOTPSchema);
module.exports = userOTP;