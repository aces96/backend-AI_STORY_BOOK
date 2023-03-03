const express = require('express');
const router = express.Router();
const {getAllCharacters, addCharacter} = require('../controllers/character.controller')





router.route('getCharacters')
        .post(getAllCharacters)

router.route('addCharacter')
        .post(addCharacter)


module.exports = router