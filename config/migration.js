const sequelize = require('./db')
const User = require('../models/user.schema')
const Themes = require('../models/themes.schema')
const Subscription = require('../models/subscription.model')
const Characters = require('../models/characters.schema')
const Image = require('../models/image.schema')
const SavedStory = require('../models/saved.schema')




Image.belongsTo(Themes);
Themes.hasMany(Image);
Characters.belongsTo(User);
User.hasMany(Characters);
User.hasOne(Subscription);
Subscription.hasMany(User);
User.hasMany(SavedStory);
SavedStory.belongsTo(User)


sequelize.sync({force: false}, ()=>{
    console.log('migration is Done')
})



module.exports = {
    User,
    Themes,
    SavedStory,
    Image,
    Characters,
    Subscription,
}

