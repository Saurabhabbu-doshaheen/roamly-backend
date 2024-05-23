function generateHtmlContent(text) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in to Roamly</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f6ef;
            text-align: center;
            padding: 50px;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: inline-block;
        }
        .code {
            font-size: 48px;
            font-weight: bold;
            margin: 20px 0;
            padding: 20px;
            background-color: #000;
            color: #fff;
            border-radius: 10px;
            display: inline-block;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sign in to Roamly</h1>
        <div class="code">${text}</div>
        <p>Enter this otp to complete the registration Process and enjoy the process of planning your trips with Roamly</p>
    </div>
</body>
</html>
    `;
}
module.exports={
    generateHtmlContent
}