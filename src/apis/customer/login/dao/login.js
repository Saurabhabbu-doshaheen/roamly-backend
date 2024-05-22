async function findUser(model,email_id, password) {
    try {
        const user = await model.findOne({ email_id, password });
        return user;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    findUser
};
