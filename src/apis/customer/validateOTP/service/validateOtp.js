const {validateOTP} = require("../../../../helpers/validateOTP");
const {addUser} = require("../../register/dao/register");
const {otpStore} = require("../../register/service/register");
const customer = require("../../../../models/Customer");
const { findUser } = require("../../login/dao/login");
const userOTP = require("../../../../models/userOTP");
async function validateOtp(data) {
    const email = data.email;
    const otp = data.otp;
    try {
        

        const otpInDB = await findUser(userOTP,email);
        const isValidOTP = await validateOTP(otpInDB["otp"], otp);
        if (!isValidOTP) {
            throw { message: 'Incorrect OTP!Please try Again.', status: 400, data: {} };
        }
        const now = new Date();
        // if (now > otpInDB["otp_expiration"]) {
        //     throw { message: 'OTP Expired!', status: 400, data: {} };
        // }
        const userData = otpInDB.user_data;
        const emailId = userData.email_id;
        const existingUser = await findUser(customer, emailId);
        if (existingUser) {
            throw { message: "Error! User already Exists!", status: 400, data: {} };
        }
        const user = await addUser(customer,userData.first_name, userData.last_name, userData.email_id, userData.password);
        return user;
    } catch (error) {
        throw { message: 'error', status: 400, data: {error} };
    }
}
module.exports = {
    validateOtp
};