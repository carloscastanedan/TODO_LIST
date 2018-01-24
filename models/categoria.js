'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('categorias',{
    idcategorias_tareas: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    titulo: DataTypes.STRING,
    color: DataTypes.STRING
  },
  {
    timestamps: false
  })
}
