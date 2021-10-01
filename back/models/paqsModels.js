const mongoose = require("mongoose");

const paqSchema = mongoose.Schema({
    "idPaq": Number,
    "namePaq": String,
    "hotelPaq": String,
    "valuePaq": String,
    "fechaIPaq": Date,
    "fechaFPaq": Date,
    "cityPaq": String,
    "depPaq": String,
    "imagePaq": String,
    "addresPaq": String,
    "descriptionPaq": String,
    "Incluidos": Object

});

module.exports = mongoose.model("paq", paqSchema);