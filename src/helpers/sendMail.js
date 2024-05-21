const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mamatakuwarrathod@gmail.com', 
                pass: 'zuac mnff vnkg wbtd'
            }
        });
        let mailOptions = {
            from: 'mamatakuwarrathod@gmail.com',
            to: to,
            subject: subject, 
            text: htmlContent 
        };
        let info = await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Error sending email');
    }
}
module.exports = {
    sendEmail
};
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Xecsrify OTP</title>
    <style>
        /* CSS styles go here */
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="xecsrify-logo.png" alt="Xecsrify Logo">
        </div>
        <div class="content">
            <p>Dear Customer,</p>
            <p>Your One Time Passcode for completing your transaction is: <strong>${text}</strong></p>
            <p>Please use this Passcode to complete your transaction. Do not share this Passcode with anyone.</p>
            <p>Thank you,<br>Xecsrify Team</p>
            <div class="disclaimer">Disclaimer: This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.</div>
        </div>
    </div>
</body>
</html>
`;