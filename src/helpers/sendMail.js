const nodemailer = require('nodemailer');
const { generateHtmlContent } = require('./emailContent');
require('dotenv').config();

async function sendEmail(to, subject, text) {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.fatcow.com",
            port: 465 ,
            secure: true, // upgrade later with STARTTLS
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PWD
            }
        });
        const htmlContent = generateHtmlContent(text);
        let mailOptions = {
            from: process.env.EMAIL_ID,
            to: to,
            subject: subject,
            html: htmlContent
        };
        let info = await transporter.sendMail(mailOptions);
    } catch (error) {
        throw { message:"Error Sending Email!", status : 400, data : {error}}
    }
}
module.exports = {
    sendEmail
};