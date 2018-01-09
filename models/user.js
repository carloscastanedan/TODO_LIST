'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('usuario', {
    idusuarios: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    subname: DataTYpes.STRING,
    password: { type: DataTypes.STRING, allowNull: false }
  },
  {
    timestamps: false
  })
}
