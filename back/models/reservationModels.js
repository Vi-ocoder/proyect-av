const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
    // "idPaq": String,
    "idCliente":Number,
    "fechaPago":Date,
    "formaPago":String,
    "totalPago": Number,
    "Estado": String,

    //Funciona parecidamente a un inner join. para vincular datos de una tabla por su "_id", la tabla relacion se asigna con 'ref:'
    //En el caso se crea un objeto tipo Paq, junto con todos los datos del paquete
    "idPaq":{type: mongoose.Schema.Types.ObjectId, ref:"Paq"} 
});

module.exports = mongoose.model("Reserva", reservaSchema);