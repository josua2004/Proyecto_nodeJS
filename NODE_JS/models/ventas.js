'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Ventas extends Model {
    static associate(models) {
     
    }
  }
  Ventas.init({
    nombre_vendedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Ventas', // Nombre en singular
    tableName: 'ventas',
    timestamps: true,
  });

  return Ventas;
};