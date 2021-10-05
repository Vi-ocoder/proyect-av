const express = require("express");
const PaqsController = require("../controllers/paqsController")
const UsersController = require("../controllers/usersController")

const router = express.Router();

//rutas de paquetes
router.get("/paqs", PaqsController.getAll);
router.get("/paqs/:idPaq", PaqsController.getById);
router.post("/paqs", PaqsController.insert);
router.delete("/paqs/:idPaq", PaqsController.delete);
router.put("/paqs/:idPaq", PaqsController.upDate);

//rutas de usuarios
router.get("/users", UsersController.getAllUsers);
router.get("/users/:numDoc", UsersController.getByNumDoc);
router.post("/users", UsersController.insertUser);
router.delete("/users/:numDoc", UsersController.deleteUser);
router.put("/users/:numDoc", UsersController.upDateUser);

module.exports = router;