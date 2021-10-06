const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "email": String,
    "Firstname": String,
    "Lastname": String,
    "select1": String, //tipode doc
    "numberID": Number,
    "typeUser": String,
    "photo": String,
    "select2": String, //género
    "birthDate": Date,
    "password": String,

});

module.exports = mongoose.model("User", userSchema);