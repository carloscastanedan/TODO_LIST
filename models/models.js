'use strict'

//Dependencies
const path = require('path')
const bcrypt = require('bcrypt')

//Assets
const sequelize = require('./database')


//imports
const Usuario = sequelize.import(path.join(__dirname, 'usuario'))
const Categorias = sequelize.import(path.join(__dirname, 'categoria' ))
const Tareas = sequelize.import(path.join(__dirname, 'tarea'))
const Subtareas = sequelize.import(path.join(__dirname, 'subtarea'))

//Hook para la encriptacion de la contraseña
Usuario.beforeSave((user, options) => {
  return (bcrypt.hash(user.password, 10)
  .then(hash => {
    user.password =hash
    console.log(user.password)
  })
  .catch(err => {
    throw new Error()
  })
)})

exports.Usuario = Usuario

