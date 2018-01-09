'use strict'


//Assets
const config = require('./config')
const sequelize = require('./models/database')
const app = require('./app')


sequelize
.authenticate()
  .then( () => {
    console.log('Conexion a la base de datos esteblecida')
    app.listen(config.port, () => {
      console.log(`Aplicacion corriendo en http://loalhost:${config.port}`)
    })
  })
  .catch( err => {
    console.log(`Error al conectar con  la base de datos: ${err}`)
  })
