async function addUser(model,firstName, lastName, email, password, phoneNo) {
    try {
        const newUser = new model({
            first_name: firstName,
            last_name: lastName,
            email_id: email,
            password: password,
        });
        
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw {message : "Error Storing in DB", status : 400 ,data:{error}}; 
    }
}
async function insertInDB(model,data,where) {
    try {
        const newUser = new model({
            otp : data.otp,
            email_id : data.emailId,
            otp_expiration : data.otpExpiration,
            user_data : data.userData
        });
        
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw {message : "Error Storing in DB", status : 400 ,data:{error}}; 
    }
}


async function findUser(model,email) {
    try {
        const user = await model.findOne({ email_id: email });
        return user;
    } catch (error) {
        throw {message : "Error finding User in DB", status : 400 ,data:{error}}; 
    }
}

module.exports = {addUser,findUser,insertInDB};
