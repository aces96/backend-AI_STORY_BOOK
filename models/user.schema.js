const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class User extends Model {}



User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, {
    sequelize: sequelize,
    modelName: 'User'
})





module.exports = User;
