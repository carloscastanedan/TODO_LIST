'use strict'

//Dependencies
const express = require('express')

//Assets
const userCtrl = require('../controllers/user')

const api = express.Router()

api.get('/', (req, res) => { res.render('login/signIn') })

//User - Routes - Login
api.get('/signUp', userCtrl.singUp)
api.post('/signUp', userCtrl.createUser)
api.post('/signIn', userCtrl.singIn)

module.exports = api
