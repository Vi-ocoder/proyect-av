const express = require("express");
const PaqsController = require("../controllers/paqsController")

const router = express.Router();

//rutas de paquetes
router.get("/paqs", PaqsController.getAll);
router.get("/paqs/:id", PaqsController.getById);
router.post("/paqs", PaqsController.insert);
router.delete("/paqs/:id", PaqsController.delete);
router.put("/paqs/:id", PaqsController.upDate);


module.exports = router;