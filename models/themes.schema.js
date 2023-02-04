const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Themes extends Model {}



Themes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    sequelize: sequelize,
    modelName: 'Themes'
})









module.exports = Themes;
