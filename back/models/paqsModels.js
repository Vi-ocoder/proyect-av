const mongoose = require("mongoose");

const paqSchema = mongoose.Schema({
    "idPaq": Number,
    "namePaq": String,
    "hotelPaq": String,
    "valuePaq": String,
    "Promocinal": String,
    "dcto": Number,
    "dateIPaq": Date,
    "dateFPaq": Date,
    "addresPaq": String,
    "cityPaq": String,
    "depPaq": String,
    "imagePaq": String,
    "descriptionPaq": String,
    "Incluidos": Object
});

module.exports = mongoose.model("Paq", paqSchema);