const { Sequelize } = require('sequelize');

const sequelize = require('../util/database'); //DB

const Comments = sequelize.define('comment', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	content: Sequelize.STRING,
});

module.exports = Comments;