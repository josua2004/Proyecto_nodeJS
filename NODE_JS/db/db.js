const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ('prueba', 'evans', 'admin', {
    host: '127.0.0.1',
    dialect: 'mysql',
})

module.exports = sequelize;