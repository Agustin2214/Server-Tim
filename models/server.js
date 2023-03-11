const express = require("express")
const cors = require('cors')
const db = require("../db/connection");
const User = require("../models/user")

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT

//Rutas

//Data Base connection
        this.dbConnection()

//Lectura y parseo a JSON
        this.app.use(express.json())

//Middlewates
        this.middlewares()
//Rutas de mi aplicacion
        this.routes()

}

   async dbConnection(){
        try{
                await db.sync({force: false})
                console.log('DB ONLINE')
        }catch(error) {
                throw new Error(error)
        }
   
    }     

    middlewares(){

//Directorio publico
        this.app.use(express.static('public'));
//Cors
        this.app.use(cors())
}

    routes(){
        this.app.use('/api/users', require('../routes/user'))
        
  
}

    listen(){

        this.app.listen(this.port,()=>{
        console.log(`Server running on port`,this.port)
    });
}

}


module.exports = Server;