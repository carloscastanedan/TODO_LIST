'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('subtarea', {
    idsubtareas: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    estatus: { type: DataTypes.ENUM('proceso', 'terminada') }
  },
  {
    timestamps: false
  })
}
