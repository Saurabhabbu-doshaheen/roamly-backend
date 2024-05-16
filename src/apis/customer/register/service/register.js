const {findUser} = require("../dao/register");
const {userValidation} = require("../validation/register");
const {sendEmail} = require("../../../../helpers/sendMail");
const{generateOTP} = require("../../../../helpers/generateOtp");
const otpStore ={};
async function register(req) {
    try {
         userValidation(req.body); 
         const existingUser = await findUser(req.body.email_id);
         if (existingUser) {
             throw new Error('Email already registered');
         }
         const otp = generateOTP(); 
         const now = new Date();
         const otpExpiration = new Date(now.getTime() + 2 * 60000);
        await sendEmail(req.body.email_id, 'Your OTP', `Your OTP is: ${otp}`);
        otpStore[req.body.email_id] = {
            otp,
            otpExpiration,
            userData: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email_id: req.body.email_id,
                password: req.body.password,
                phone_no: req.body.phone_no
            }
        };   
        return { email: req.body.email_id, otpExpiration: otpExpiration };
    } catch (error) {
        throw new Error(error);
        }
}
module.exports={
    register,
    otpStore
};