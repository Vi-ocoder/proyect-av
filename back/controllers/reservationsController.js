const reservationModel = require("../models/reservationModels");

module.exports = class ReservationsController{


    static async insert(req, res) { 
        try {
            const reservation = req.body;
            const newReservation = await reservationModel.create(reservation);
            res.status(201).json(newReservation);
        } catch (err) {
            res.status(400).json({ "message": err.message })
        }
    }


    static async getByClientId(req, res) {
        const id = req.params.idCliente;

        try {

            //Populate hace la relacion tipo join con la tabla paquetes.(ver Modelo: reservationModel)
            const reservation = await reservationModel.find({ "idCliente": id }).populate('idPaq');
             
            if (reservation != null) {
                res.status(200).json(reservation);
            } else {
                res.status(404).json();
            }

        } catch (err) {
            res.status(400).json({ message: err.message });

        }
    }


}