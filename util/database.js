const mysql = require('mysql2');

const {Sequelize} = require('sequelize');


// const sequelize = new Sequelize('cisc4900', 'ljh', '3112001944ljh', {dialect: 'mysql', host: 'localhost'});
const sequelize = new Sequelize('vtcabh9w3dplzemu', 'al1zhn90zl0yv42l', 't81kdxjmvzwn82i1', {dialect: 'mysql', host: 'ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'});

module.exports = sequelize;