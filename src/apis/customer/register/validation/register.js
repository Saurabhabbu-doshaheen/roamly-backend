const Joi = require('joi');

function userValidation(body) {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email_id: Joi.string().email().required(),
        password: Joi.string().min(6).max(20).required(),
        phone_no: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required()
    });
    const { error } = schema.validate(body);
    if (error) {
        throw new Error(error.details[0].message);
    }
}
module.exports ={
  userValidation
}
