require("dotenv").config();

//Configuracion del servidor web
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//agregar rutas a escuchar
app.use("/api", require("./routes/routes"));
//--carga de archivos
app.use(express.static("files"));
app.use(express.static("files/usersPhoto"));
// configurar la conexion a base de datos
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("conectado a BD"))
    .catch(err => console.error(err));

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));