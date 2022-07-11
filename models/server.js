const express = require('express');
const cors= require('cors');


class Server {

    constructor() {
        this.port = process.env.PORT
        this.app = express();

        // configuracion del path
        this.usuariosPath = '/api/usuarios'; 
        
        
        //Midelwares
        this.middelwares();

        // Rutas del aplicativo
        this.routes();
    }

    middelwares() {
        //Directorio Publico
        this.app.use(express.static('public'));

        // Cors
        this.app.use(cors()); 

        //lectura y parseo del body
        this.app.use(express.json())
    }


    routes() {
        this.app.use(this.usuariosPath, require('../routes/user') )
    }

 // Metodo para levantar la el aplicativo
    listen() {
        
        this.app.listen(this.port, () => {
           
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        });
    }
}


module.exports = Server;