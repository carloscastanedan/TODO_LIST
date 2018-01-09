'use strict'

//Dependencies
const path = require(path)
const bcrypt = require('bcrypt')

//Assets
const sequelize = require('./database')


//imports
const User = sequelize.import(path.join(__driname, 'user'))
const Categories = sequelize.import(path.join(__dirname, 'categorias' ))
const Tareas = sequelize.import(path.join(__dirname, 'tareas'))
const Subtarea = sequelize.import(path.join(__dirname, 'subtarea'))

exports.User = User

