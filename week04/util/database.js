const Sequelize = require('sequelize');

// setup connection pool to the database
const sequelize = new Sequelize('node-complete', 'root', 'mysqlserver', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
