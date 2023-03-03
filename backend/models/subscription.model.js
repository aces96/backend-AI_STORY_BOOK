const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Subscription extends Model {}



Subscription.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: sequelize,
    modelName: 'Subscription'
})



module.exports = Subscription;
