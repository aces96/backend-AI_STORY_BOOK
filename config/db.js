const { Sequelize } = require("sequelize")
const dotenv = require('dotenv').config();
var mysql = require('mysql2');


const sequelize = new Sequelize(
    "AIBook",
    "root",
    '',
    {host: 'localhost', dialect: 'mysql'},
    {query:{raw:true}}
)


module.exports = sequelize