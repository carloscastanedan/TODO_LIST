'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tarea', {
    idtareas: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    estatus: { type: DataTypes.ENUM('planeada', 'proceso', 'no_terminada', 'terminada') },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_final: DataTypes.DATE
  },
  {
    timestamps: false
  })
}
