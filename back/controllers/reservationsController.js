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



}