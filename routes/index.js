'use strict'

//Dependencies
const express = require('express')

//Assets

const api = express.Router()

api.get('/', (req, res) => {
  res.render('home')
})

module.exports = api
