const Customer = require('../../../../models/Customer'); 

async function addUser(firstName, lastName, email, password, phoneNo) {
    try {
        const newUser = new Customer({
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

async function findUser(email) {
    try {
        const user = await Customer.findOne({ email_id: email });
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {addUser,findUser};
