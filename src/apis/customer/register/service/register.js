const { findUser, insertInDB } = require("../dao/register");
const { userValidation } = require("../validation/register");
const { sendEmail } = require("../../../../helpers/sendMail");
const { generateOTP } = require("../../../../helpers/generateOtp");
const Customer = require("../../../../models/Customer");
const userOTP = require("../../../../models/userOTP");
const otpStore = {};
async function register(req) {
    try {
        userValidation(req.body);
        //check if user(emailid) present in db

        const existingUser = await findUser(Customer, req.body.emailId);
        if (existingUser) {
            throw { message: "Error! User already Exists!", status: 400, data: {} };
        }
        const otp = generateOTP();
        const now = new Date();


        const otpExpiration = new Date(now.getTime() + 2 * 60000);
        await sendEmail(req.body.emailId, 'Your OTP', otp);

        // otpStore[req.body.emailId] = {
        //     otp,
        //     otpExpiration,
        //     userData: {
        //         first_name: req.body.firstName,
        //         last_name: req.body.lastName,
        //         email_id: req.body.emailId,
        //         password: req.body.password,
        //     }
        // };


        //store otp in db along with emailid

        const otpData = {
            otp : otp,
            emailId : req.body.emailId,
            otpExpiration : otpExpiration,
            userData: {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email_id: req.body.emailId,
                password: req.body.password,
            }
        }
        await insertInDB(userOTP,otpData);
        

        return { email: req.body.emailId, otpExpiration: otpExpiration };
    } catch (error) {
        throw error;
    }
}
module.exports = {
    register,
    otpStore
};