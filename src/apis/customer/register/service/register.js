const {findUser} = require("../dao/register");
const {userValidation} = require("../validation/register");
const {sendEmail} = require("../../../../helpers/sendMail");
const{generateOTP} = require("../../../../helpers/generateOtp");
const Customer = require("../../../../models/Customer");
const otpStore ={};
async function register(req) {
    try {
         userValidation(req.body); 
         const existingUser = await findUser(Customer,req.body.emailId);
         if (existingUser) {
             throw new Error('Email already registered');
         }
         const otp = generateOTP(); 
         const now = new Date();
         const otpExpiration = new Date(now.getTime() + 2 * 60000);
        await sendEmail(req.body.emailId, 'Your OTP', otp);
        otpStore[req.body.emailId] = {
            otp,
            otpExpiration,
            userData: {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email_id: req.body.emailId,
                password: req.body.password,
            }
        };   
        return { email: req.body.emailId, otpExpiration: otpExpiration };
    } catch (error) {
        throw new Error(error);
        }
}
module.exports={
    register,
    otpStore
};