'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pedido extends Model {
    static associate(models) {
     
    }
  }
  Pedido.init({
    descripcion: DataTypes.STRING,
    ClienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'productos',
    timestamps: true,
  });
  return Pedido;
};



