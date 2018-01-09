'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Categories',{
    idcategorias_tareas: { type: DataTyes.INTEGER, primaryKey: true, allowNull: false },
    title: DataTypes.STRING,
    color: DataTypes.STRING
  },
  {
    timestamps: false
  })
}
