'use strict'

//Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
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

module.exports = app
