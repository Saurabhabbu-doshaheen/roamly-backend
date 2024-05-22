const {validateOTP} = require("../../../../helpers/validateOTP");
const {addUser} = require("../../register/dao/register");
const {otpStore} = require("../../register/service/register");
const customer = require("../../../../models/Customer");
async function validateOtp(data) {
    const email = data.email;
    const otp = data.otp;
    try {
        const storedOTP = otpStore;
        if (!storedOTP) {
            throw new Error('Incorrect OTP');
        }
        const isValidOTP = await validateOTP(storedOTP[email].otp, otp);
        if (!isValidOTP) {
            throw new Error('Invalid OTP');
        }
        const now = new Date();
        if (now > storedOTP.otpExpiration) {
            throw new Error('OTP expired');
        }
        const userData = storedOTP[email].userData;
        const user = await addUser(customer,userData.first_name, userData.last_name, userData.email_id, userData.password, userData.phone_no);
        return user;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    validateOtp
};