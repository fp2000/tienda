const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect ("mongodb://localhost:27017/tienda", { useNewUrlParser: true}) 
    .then(db => console.log("Conexión a BD Correcta"))
    .catch(err => console.log("Error al conectar a DB: " + err));


app.get ("/", (req, res) => { res.send("Hola")} );
 
app.get ("/hola", (req, res) => { res.send("Hola hola")} );

app.listen(3000, () => console.log("Servidor iniciando..."));

