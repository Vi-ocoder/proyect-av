const express = require("express");
const PaqsController = require("../controllers/paqsController")
const UsersController = require("../controllers/usersController")
const ReservationsController = require("../controllers/reservationsController")


const router = express.Router();

//rutas de paquetes
router.get("/paqs", PaqsController.getAll);
router.get("/paqs/:idPaq", PaqsController.getById);
router.post("/paqs", PaqsController.insert);
router.delete("/paqs/:idPaq", PaqsController.delete);
router.put("/paqs/:idPaq", PaqsController.upDate);

//rutas de usuarios
router.get("/users", UsersController.getAllUsers);
router.get("/users/:numberID", UsersController.getByNumberID);
router.get("/users//:email", UsersController.getByEmail);
router.post("/users", UsersController.insertUser);
router.delete("/users/:numberID", UsersController.deleteUser);
router.put("/users/:numberID", UsersController.upDateUser);
router.post("/authenticate", UsersController.validateUser);


//Rutas de reservas
router.get("/reservations/:idCliente", ReservationsController.getByClientId);
router.post("/reservations", ReservationsController.insert);



module.exports = router;