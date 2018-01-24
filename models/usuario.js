'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('usuario', {
    idusuarios: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false }
  },
  {
    timestamps: false
  })
}
