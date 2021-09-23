require("dotenv").config();

//Configuracion del servidor web
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en https://localhost:${port}`));