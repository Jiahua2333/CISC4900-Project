const { Sequelize } = require('sequelize');

const sequelize = require('../util/database'); //DB

const User = sequelize.define('User', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	username: Sequelize.STRING,
    email: Sequelize.STRING,
	password: Sequelize.STRING,
	lastName: Sequelize.STRING,
	firstName: Sequelize.STRING,
	address: Sequelize.STRING,
	
});

module.exports = User;