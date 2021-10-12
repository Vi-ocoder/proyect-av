const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
    "idPaq": String,
    "idCliente":Number,
    "fechaPago":Date,
    "formaPago":String,
    "totalPago": Number,
    "Estado": String,
});

module.exports = mongoose.model("Reserva", reservaSchema);