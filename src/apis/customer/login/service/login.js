const { signToken } = require("../../../../authorization/auth");
const {findUser} = require("../dao/login");
const {loginValidation} = require("../validation/login");
const customer = require("../../../../models/Customer");
async function login(req) {
    try {
         loginValidation(req.body); 
         const userDetails = await findUser(customer,req.body.emailId,req.body.password);
         if (!userDetails) {
             throw new Error('User doesnt exists');
         }
         const data = {
            id : userDetails["_id"],
            name : userDetails["first_name"],
            emailId : userDetails["email_id"],
         }
         const tokens = await signToken(data)
        return {tokens,data};
    } catch (error) {
        throw new Error(error);
        }
}
module.exports={
   login
};