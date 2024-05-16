const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    first_name: String,
    last_name : String,
    email_id : String,
    password : String,
    phone_no : String
})

const Customer = mongoose.model('Customer',customerSchema);
module.exports = Customer;