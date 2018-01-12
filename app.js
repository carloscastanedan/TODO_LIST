'use strict'

//Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const path = require('path')
//Assets
const api = require('./routes')
const app = express()

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//motor de renderizado
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

//ruteo
app.use('/', api)
//Ficheros staticos
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app
