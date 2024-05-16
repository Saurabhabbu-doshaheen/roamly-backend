const Customer = require('../../../../models/Customer'); 

async function findUser(email_id, password) {
    try {
        const user = await Customer.findOne({ email_id, password });
        return user;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    findUser
};
