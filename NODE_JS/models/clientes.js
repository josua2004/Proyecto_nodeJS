'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Clientes extends Model {
    static associate(models) { 
    }
  }
  Clientes.init({
    nombre_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profesion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Clientes', // Nombre en singular
    tableName: 'clientes',
    timestamps: true,
  });

  return Clientes;
};