
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Characters extends Model {}



Characters.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: sequelize,
modelName: 'Characters'
})


module.exports = Characters;
