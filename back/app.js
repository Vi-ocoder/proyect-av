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
// configurar la conexion a base de datos
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
.then(() => console.log("conectado a BD"))
.catch(err => console.error(err));


//Porduccion: Para usar ruta estatica que redirige a index
if(process.env.NODE_ENV=== "production"){
    app.use(express.static(__dirname+"/site/"));
    app.get("*",(req, res) => {
        res.sendFile(__dirname+"/site/index.html");
    });
}

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));