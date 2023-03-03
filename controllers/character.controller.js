const {Characters} = require('../config/migration')
const dotenv = require('dotenv').config();






exports.getAllCharacters = async (req,res)=>{
    const {userId} = req.body

    try {
        const characters = await Characters.findAll({where: {UserId: userId}})

        res.status(201).json({
            response: characters
        })
    } catch (error) {
        res.status(400).send(error)
    }
}


exports.addCharacter = async (req,res)=>{

    const {userId, name, type} = req.body

    const createCharacter  = await Characters.create({
        name: name,
        type: type,
        UserId: userId
    })

    res.status(201).json({
        response: createCharacter
    })

    try {
        
    } catch (error) {
        res.status(400).send(error)
    }
}
