'use strict'

//Dependencies
const bcrypt = require('bcrypt')

//Assets
const models = require('../models/models')

function singIn(req,res)
{
  let user = models.Usuario
  user.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
        bcrypt.compare(req.body.password, user.password)
          .then(resp => {
            if(resp)
            {
              res.render('todo_list/todo')
            }
            else
            {
              res.render('login/signIn', { err: 'Usuario y/o contraseña incorrectos' })
            }
          })
          .catch(err => {
           res.render('login/signIn', { err })
          })
    })
    .catch(err => {
      if(JSON.stringify(err) =='{}')
      {
        res.render('login/signIn', { err: 'Cuenta no encontrada' })
      }
      else
      {
        res.render('login/signIn', { err })
      }
    })
}

function singUp(req, res)
{
  res.render('login/signUp')
}

function createUser(req, res)
{
  let user = models.Usuario.build({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    nick_name: req.body.nickname,
    password: req.body.password
  })
  user.save()
    .then(() => {
      res.render('login/user', { user })
    })
    .catch((err) => {
      res.send({ message: `Error al Registrar al usuario:${err}`})
    })
}


module.exports = {
  singIn,
  singUp,
  createUser
}
