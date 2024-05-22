async function addUser(model,firstName, lastName, email, password, phoneNo) {
    try {
        const newUser = new model({
            first_name: firstName,
            last_name: lastName,
            email_id: email,
            password: password,
            phone_no: phoneNo
        });
        
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error; 
    }
}

async function findUser(model,email) {
    try {
        const user = await model.findOne({ email_id: email });
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {addUser,findUser};
