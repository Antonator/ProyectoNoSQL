const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = process.env.PORT || 3000;
const bibliotecaRoute = require('./routes/biblioteca.js');

//Routers
app.use(express.json());
app.use('/api', bibliotecaRoute);

//Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido al Nexo Atlas - Ocegueda Ruelas');
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Conectado a MongoDB ATLAS - Ocegueda Ruelas");
        console.log('URI de conexion: ', process.env.MONGODB_URI)
    })
    .catch((error) => {
        console.error("Error al conectar a MongoDB:", error);
    });

//Escuchar el puerto
app.listen(PORT, () => {
    console.log(`Server corriendo en localhost:${PORT}`)
});

