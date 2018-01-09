'use strict'

//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('subtarea', {
    idsubtareas: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: { type: DataTypes.ENUM('proceso', 'terminada') }
  },
  {
    timestamps: false
  })
}
