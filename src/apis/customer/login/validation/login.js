const Joi = require('joi');

function loginValidation(body) {
    const schema = Joi.object({
        emailId: Joi.string().email().required(),
        password: Joi.string().min(6).max(20).required(),
    });

    const { error } = schema.validate(body);
    if (error) {
        throw new Error(error.details[0].message);
    }
}
module.exports ={
  loginValidation
}
