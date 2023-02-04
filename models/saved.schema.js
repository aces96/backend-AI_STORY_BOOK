
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class SavedStory extends Model {}



SavedStory.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    story: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: sequelize,
    modelName: 'SavedStory'
})


module.exports = SavedStory;
