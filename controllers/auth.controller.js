const User = require('../config/migration')
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv').config();



exports.signUp = async (req, res)=>{

    
    try {
        

        const user = await User.create({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
        })
        
        const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRE_IN})
        
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
    
        if(!user || !user.password == password){
            res.status(401).json({
                message: 'email or password not correct'
            })
        }else {
            const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET_KEY, {
                expiresIn: process.env.EXPIRE_IN
            })

            res.status(201).json({
                message: 'success',
                token: token
            })
            
        }


    } catch (error) {
        res.status(401).send(error)
        
    }


}