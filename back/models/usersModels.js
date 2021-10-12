const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "email": String,
    "Firstname": String,
    "Lastname": String,
    "select1": String, //tipode doc
    "numberID": Number,
    "typeUser": String,
    "photo": String,
    "phone": Number,
    "select2": String, //género
    "birthDate": Date,
    "password": String,
    "reservar": Array,

});

module.exports = mongoose.model("User", userSchema);