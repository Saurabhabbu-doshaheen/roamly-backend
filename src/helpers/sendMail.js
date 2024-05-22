const nodemailer = require('nodemailer');
const {generateHtmlContent} = require('./emailContent');

async function sendEmail(to, subject,text) {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mamatakuwarrathod@gmail.com', 
                pass: 'zuac mnff vnkg wbtd'
            }
        });
        const htmlContent = generateHtmlContent(text);
        let mailOptions = {
            from: 'mamatakuwarrathod@gmail.com',
            to: to,
            subject: subject, 
            html: htmlContent
        };
        let info = await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Error sending email');
    }
}
module.exports = {
    sendEmail
};