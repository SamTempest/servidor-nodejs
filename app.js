import express from 'express'
//importamos el modulo express (este es el que crea el servidor)

const app = express()

//se crea una ruta get con el nombre de la vista ( o pagina web, que en este caso se llama informacion) para obtener la data 
//de la base de datos
app.get("/informacion", (req, res) => {
    res.send("Informacion de la pagina web")
})


//el servidor va a correr en el puerto 8080
//si la conexion es exitosa se envia mensaje a la consola
app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
})

//se corre la app.js
//se ingresa http://localhost:8080/informacion en el navegador para corroborar que el servidor express en nodejs esta corriendo