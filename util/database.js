const mysql = require('mysql2');

const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('cisc4900', 'ljh', '3112001944ljh', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;