// define user model
const Sequelize = require('sequelize');

// import sequelize connections to database
const sequelize = require('../util/database');

// store model in a constant User
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
});

module.exports = User;