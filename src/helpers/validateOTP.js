async function validateOTP(storedOTP, enteredOTP) {
    return storedOTP == enteredOTP;
}

module.exports = {
    validateOTP
};
