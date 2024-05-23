const returnResponse = (res,message, status, data) => {
    const logBody = {
        message: message,
        status: status,
        data: data
    };
    return res.status(logBody.status).send(logBody);
};

module.exports = { returnResponse };