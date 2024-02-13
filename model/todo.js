const mongoose = require('mongoose');


const todoschema = mongoose.Schema({
    user : String,
    email: String,
    number: Number,
    fileupload : String
});

module.exports = mongoose.model('ToDo' , todoschema);