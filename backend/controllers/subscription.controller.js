const Subscription = require('../config/migration')


exports.setPayments = async (req,res)=>{
    const {userId, type, price} = req.body

    try {
        const subscription = await User.create({ name: type, price: price, UserId: userId });
        res.json({
            response: subscription
        })
    } catch (error) {
        res.json({
            message: error
        })
    }
}