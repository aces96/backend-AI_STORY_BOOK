const {User} = require('../config/migration')
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv').config();




exports.signUp = async (req, res)=>{

    
    try {
        

        const user = await User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
        })
        
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRE_IN})
        
        res.status(201).json({
            user: user,
            token: token
        })
        
    } catch (error) {
        res.send(error)
        
    }

}



exports.signIn = async (req,res)=>{

    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email: email}})

        console.log(`${user.id}`);
    
        if(user.password !== password){
            res.status(400).json({
                message: 'email or password not correct'
            })
        }else if(user.password == password){
            const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {
                expiresIn: process.env.EXPIRE_IN
            })

            res.status(201).json({
                message: 'success',
                user_id: user.id,
                token: token
            })
            
        }


    } catch (error) {
        console.log('heeeere',error.message);
        res.status(401).send(error)
        
    }


}