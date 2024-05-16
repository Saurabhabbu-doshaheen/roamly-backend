const {findUser} = require("../dao/login");
const {loginValidation} = require("../validation/login");
async function login(req) {
    try {
         loginValidation(req.body); 
         const userDetails = await findUser(req.body.email_id,req.body.password);
         if (!userDetails) {
             throw new Error('User doesnt exists');
         }
        return userDetails;
    } catch (error) {
        throw new Error(error);
        }
}
module.exports={
   login
};