function generateHtmlContent(text) {
    return `
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
                <img src="././Vector.png" alt="Xecsrify Logo">
            </div>
            <div class="content">
                <p>Dear Customer,</p>
                <p>Your One Time Passcode for completing your transaction is: <strong>${text}</strong></p>
                <p>Please use this otp to complete your registration. Do not share this otp with anyone.</p>
                <p>Thank you,<br>Team Roamly</p>
            </div>
        </div>
    </body>
    </html>
    `;
}
module.exports={
    generateHtmlContent
}