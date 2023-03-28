const { Sequelize } = require("sequelize")
const dotenv = require('dotenv').config();
const path = require('path');
const fs = require('fs');
const certificatePath = path.join(__dirname, '/ca-certificate.crt')
const serverCa = [fs.readFileSync(certificatePath, 'utf8')]
var mysql = require('mysql2');


const sequelize = new Sequelize(
    "aibook",
    "root",
    null,
    {host: 'localhost', dialect: 'mysql'},
    {query:{raw:true}}
)


module.exports = sequelize