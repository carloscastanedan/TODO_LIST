'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tareas', {
    idtareas: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: { type: DataTypes.ENUM('planeada', 'proceso', 'no_terminada', 'terminada') },
    date: { type: DataTyes.DATE, defaultValue: DataTypes.NOW },
    end_date: DataTypes.DATE
  },
  {
    timestamps: false
  })
}
