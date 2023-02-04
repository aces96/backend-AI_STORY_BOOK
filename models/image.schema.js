const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Image extends Model {}



Image.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: sequelize,
    modelName: 'Image'
})





module.exports = Image;
