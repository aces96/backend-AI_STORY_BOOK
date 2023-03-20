const { Sequelize } = require("sequelize")
const dotenv = require('dotenv').config();
const certificatePath = path.join(__dirname, '/ca-certificate.crt')
const serverCa = [fs.readFileSync(certificatePath, 'utf8')]
var mysql = require('mysql2');


const sequelize = new Sequelize(
    "defaultdb",
    "doadmin",
    'AVNS_GSnyVleITos585v5a0-',
    {host: 'aistorybook-do-user-13612735-0.b.db.ondigitalocean.com', dialect: 'mysql'},
    {query:{raw:true}}
)


module.exports = sequelize