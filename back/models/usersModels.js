const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "email": String,
    "name": String,
    "typeDoc": String,
    "numDoc": Number,
    "typeUser": String,
    "photo": String,
    "reservas": Array,
    "permisos": String
});

module.exports = mongoose.model("User", userSchema);